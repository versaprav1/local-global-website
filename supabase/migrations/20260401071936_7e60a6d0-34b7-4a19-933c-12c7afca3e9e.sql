
-- Blog Posts table
CREATE TABLE public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  description text,
  category text NOT NULL DEFAULT 'General',
  icon_name text DEFAULT 'BookOpen',
  gradient text DEFAULT 'from-green-500 to-emerald-700',
  content jsonb DEFAULT '{}',
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are publicly readable" ON public.blog_posts
  FOR SELECT TO public USING (true);

CREATE POLICY "Authenticated users can manage blog posts" ON public.blog_posts
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(is_published);

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Guides table
CREATE TABLE public.guides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  type text NOT NULL DEFAULT 'PDF',
  category text NOT NULL,
  file_url text,
  is_published boolean DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.guides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Guides are publicly readable" ON public.guides
  FOR SELECT TO public USING (true);

CREATE POLICY "Authenticated users can manage guides" ON public.guides
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE INDEX idx_guides_category ON public.guides(category);

CREATE TRIGGER update_guides_updated_at
  BEFORE UPDATE ON public.guides
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Videos table
CREATE TABLE public.videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  category text NOT NULL,
  video_url text,
  thumbnail_url text,
  duration text,
  is_published boolean DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Videos are publicly readable" ON public.videos
  FOR SELECT TO public USING (true);

CREATE POLICY "Authenticated users can manage videos" ON public.videos
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE INDEX idx_videos_category ON public.videos(category);

CREATE TRIGGER update_videos_updated_at
  BEFORE UPDATE ON public.videos
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Partners table
CREATE TABLE public.partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  location text NOT NULL,
  description text,
  vertical text NOT NULL,
  website_url text,
  is_approved boolean DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Partners are publicly readable" ON public.partners
  FOR SELECT TO public USING (true);

CREATE POLICY "Authenticated users can manage partners" ON public.partners
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE INDEX idx_partners_vertical ON public.partners(vertical);
CREATE INDEX idx_partners_approved ON public.partners(is_approved);

CREATE TRIGGER update_partners_updated_at
  BEFORE UPDATE ON public.partners
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
