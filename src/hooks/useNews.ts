import { useQuery } from "@tanstack/react-query";
import { latestNews, newsCategories } from "@/data/latestNews";

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  source_url?: string;
  sourceUrl?: string;
  category: string;
  date?: string;
  published_at?: string;
  image_url?: string;
  imageUrl?: string;
  is_featured?: boolean;
}

const normalizeArticle = (article: any): NewsArticle => ({
  id: article.id,
  title: article.title,
  summary: article.summary,
  source: article.source,
  source_url: article.source_url || article.sourceUrl,
  sourceUrl: article.source_url || article.sourceUrl,
  category: article.category,
  date: article.published_at || article.date,
  published_at: article.published_at || article.date,
  image_url: article.image_url || article.imageUrl,
  is_featured: article.is_featured || false,
});

const fetchHybridNews = async (category: string): Promise<NewsArticle[]> => {
  try {
    const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
    const params = new URLSearchParams({ category, limit: "30" });
    const res = await fetch(
      `https://${projectId}.supabase.co/functions/v1/fetch-news?${params}`,
      {
        headers: {
          apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
      }
    );

    if (res.ok) {
      const json = await res.json();
      const edgeArticles = (json.articles || []).map(normalizeArticle);
      
      // If edge function returned results, merge with static data (deduped)
      const staticFiltered = category === "All"
        ? latestNews
        : latestNews.filter((n) => n.category === category);
      const staticNormalized = staticFiltered.map(normalizeArticle);
      
      // Merge: edge articles first, then static ones not already present
      const seenTitles = new Set(edgeArticles.map((a: NewsArticle) => a.title.toLowerCase().trim()));
      const uniqueStatic = staticNormalized.filter((a) => !seenTitles.has(a.title.toLowerCase().trim()));
      
      return [...edgeArticles, ...uniqueStatic];
    }
  } catch (err) {
    console.warn("Edge function unavailable, using static fallback:", err);
  }

  // Fallback: static data filtered by category
  const filtered = category === "All"
    ? latestNews
    : latestNews.filter((n) => n.category === category);

  return filtered.map(normalizeArticle);
};

export const useNews = (category: string) => {
  return useQuery({
    queryKey: ["news", category],
    queryFn: () => fetchHybridNews(category),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export { newsCategories };
