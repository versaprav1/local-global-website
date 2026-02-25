import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-webhook-secret, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    // Optional webhook secret validation
    const webhookSecret = Deno.env.get('WEBHOOK_SECRET');
    if (webhookSecret) {
      const providedSecret = req.headers.get('x-webhook-secret');
      if (providedSecret !== webhookSecret) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    const body = await req.json();

    // Support single article or array of articles
    const articles = Array.isArray(body) ? body : [body];

    // Validate required fields
    const validated = [];
    const errors = [];

    for (let i = 0; i < articles.length; i++) {
      const a = articles[i];
      if (!a.title || !a.summary || !a.source || !a.source_url || !a.category) {
        errors.push({ index: i, error: 'Missing required fields: title, summary, source, source_url, category' });
        continue;
      }
      validated.push({
        title: String(a.title).slice(0, 500),
        summary: String(a.summary).slice(0, 2000),
        source: String(a.source).slice(0, 200),
        source_url: String(a.source_url).slice(0, 1000),
        category: String(a.category).slice(0, 100),
        image_url: a.image_url ? String(a.image_url).slice(0, 1000) : null,
        is_featured: Boolean(a.is_featured),
        published_at: a.published_at || new Date().toISOString(),
      });
    }

    if (validated.length === 0) {
      return new Response(JSON.stringify({ error: 'No valid articles', details: errors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { data, error } = await supabase
      .from('news_articles')
      .insert(validated)
      .select();

    if (error) {
      console.error('Insert error:', error);
      return new Response(JSON.stringify({ error: 'Failed to insert articles', details: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      inserted: data.length,
      errors: errors.length > 0 ? errors : undefined,
    }), {
      status: 201,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (e) {
    console.error('Webhook error:', e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
