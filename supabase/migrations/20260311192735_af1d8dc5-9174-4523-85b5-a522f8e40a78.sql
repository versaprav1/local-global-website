
-- Add RLS policies for authenticated users to manage news_articles
CREATE POLICY "Authenticated users can insert news articles"
ON public.news_articles
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update news articles"
ON public.news_articles
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete news articles"
ON public.news_articles
FOR DELETE
TO authenticated
USING (true);
