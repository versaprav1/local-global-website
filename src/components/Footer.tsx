import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">L</span>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-lg font-display font-bold tracking-tight">
                  Local<span className="text-primary">Global</span>
                </span>
              </div>
            </div>
            <p className="text-muted mb-6">
              {t('common.footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-background transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('common.footer.quickLinks')}</h3>
            <ul className="space-y-4">
              <li><a href="/about" className="text-muted hover:text-background transition-colors">{t('common.nav.about')}</a></li>
              <li><a href="/#verticals" className="text-muted hover:text-background transition-colors">{t('common.nav.services')}</a></li>
              <li><a href="/blog" className="text-muted hover:text-background transition-colors">{t('common.nav.blog')}</a></li>
              <li><a href="/contact" className="text-muted hover:text-background transition-colors">{t('common.nav.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('common.footer.resources')}</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted hover:text-background transition-colors">{t('common.footer.faq')}</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">{t('common.footer.support')}</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">{t('common.footer.partners')}</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">{t('common.footer.careers')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('common.footer.newsletter')}</h3>
            <p className="text-muted mb-4">
              {t('common.footer.newsletterText')}
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder={t('common.footer.emailPlaceholder')} 
                className="bg-background/10 border-background/20 text-background placeholder:text-muted"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-background/20 mb-8" />
        
        <div className="text-center text-muted text-sm">
          <p>{t('common.footer.copyright')}</p>
          <div className="mt-2 flex justify-center space-x-8">
            <a href="#" className="hover:text-background transition-colors">{t('common.footer.terms')}</a>
            <a href="#" className="hover:text-background transition-colors">{t('common.footer.privacy')}</a>
            <a href="#" className="hover:text-background transition-colors">{t('common.footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
