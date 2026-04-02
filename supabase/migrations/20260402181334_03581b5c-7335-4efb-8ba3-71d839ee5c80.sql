DROP POLICY "Partners are publicly readable" ON public.partners;
CREATE POLICY "Partners are publicly readable" ON public.partners
  FOR SELECT TO public
  USING (is_approved = true);