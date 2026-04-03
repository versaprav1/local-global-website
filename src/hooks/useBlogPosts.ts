import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { blogTopics, blogCategories } from "@/data/blogTopics";

export interface BlogPost {
  id: string;
  title: string;
  description: string | null;
  slug: string;
  category: string;
  gradient: string | null;
  icon_name: string | null;
  content: any;
  is_published: boolean | null;
  published_at: string | null;
  created_at: string;
}

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.warn("Supabase blog fetch failed, using static fallback:", error);
    return [];
  }

  return data || [];
};

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blog_posts"],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlogPost = (idOrSlug: string | undefined) => {
  return useQuery({
    queryKey: ["blog_post", idOrSlug],
    queryFn: async () => {
      if (!idOrSlug) return null;

      // Try Supabase first (by slug or id)
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .or(`slug.eq.${idOrSlug},id.eq.${idOrSlug}`)
        .eq("is_published", true)
        .maybeSingle();

      if (data) return data as BlogPost;

      // Fallback to static data
      const staticTopic = blogTopics.find((t) => t.id === idOrSlug);
      if (staticTopic) {
        return {
          id: staticTopic.id,
          title: staticTopic.title,
          description: staticTopic.description,
          slug: staticTopic.id,
          category: staticTopic.category,
          gradient: staticTopic.gradient,
          icon_name: staticTopic.icon?.displayName || null,
          content: staticTopic.content || null,
          is_published: true,
          published_at: null,
          created_at: "",
        } as BlogPost;
      }

      return null;
    },
    enabled: !!idOrSlug,
  });
};

// Re-export for convenience
export { blogCategories };
