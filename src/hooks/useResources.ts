import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useGuides = () => {
  return useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("guides")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Guides fetch failed:", error);
        return [];
      }
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const usePartners = () => {
  return useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      // RLS already filters to is_approved = true
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Partners fetch failed:", error);
        return [];
      }
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useVideos = () => {
  return useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("videos")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Videos fetch failed:", error);
        return [];
      }
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};
