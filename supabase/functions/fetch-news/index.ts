import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const category = url.searchParams.get("category") || "All";
    const limit = parseInt(url.searchParams.get("limit") || "20", 10);

    // 1. Fetch from Supabase news_articles table
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    let query = supabase
      .from("news_articles")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(limit);

    if (category !== "All") {
      query = query.eq("category", category);
    }

    const { data: dbArticles, error: dbError } = await query;
    if (dbError) {
      console.error("Supabase query error:", dbError);
    }

    // 2. Fetch from custom API (if configured)
    let apiArticles: any[] = [];
    const customApiUrl = Deno.env.get("CUSTOM_NEWS_API_URL");

    if (customApiUrl && customApiUrl !== "placeholder") {
      try {
        const apiUrl = new URL(customApiUrl);
        if (category !== "All") {
          apiUrl.searchParams.set("category", category);
        }
        apiUrl.searchParams.set("limit", String(limit));

        const apiRes = await fetch(apiUrl.toString(), {
          headers: { "Accept": "application/json" },
          signal: AbortSignal.timeout(5000),
        });

        if (apiRes.ok) {
          const json = await apiRes.json();
          apiArticles = Array.isArray(json) ? json : json.articles || json.data || [];
        } else {
          console.warn("Custom API returned status:", apiRes.status);
          await apiRes.text(); // consume body
        }
      } catch (apiErr) {
        console.warn("Custom API fetch failed:", apiErr);
      }
    }

    // 3. Merge and deduplicate by title
    const allArticles = [...(dbArticles || []), ...apiArticles];
    const seen = new Set<string>();
    const unique = allArticles.filter((a) => {
      const key = a.title?.toLowerCase().trim();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // Sort by date descending
    unique.sort((a, b) => {
      const dateA = new Date(a.published_at || a.date || 0).getTime();
      const dateB = new Date(b.published_at || b.date || 0).getTime();
      return dateB - dateA;
    });

    return new Response(JSON.stringify({ articles: unique.slice(0, limit) }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("fetch-news error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
