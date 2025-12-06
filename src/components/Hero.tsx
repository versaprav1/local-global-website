import { MagneticButton } from "@/components/MagneticButton";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      
      {/* Main Content Container - Focused & Clear */}
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center space-y-8 py-20">
          {/* Badge */}
          <Badge className="inline-flex items-center px-4 py-2 text-sm font-medium border-primary/20 bg-primary/10 text-primary mb-6">
            <Sparkles className="h-3 w-3 mr-2" />
            {t('hero.badge')}
          </Badge>
          
          {/* Main Headline - Clear Value Proposition */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient block mb-2">{t('hero.title')}</span>
            <span className="text-foreground text-3xl md:text-5xl">{t('hero.subtitle')}</span>
          </h1>
          
          {/* Clear Benefit Statement */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t('hero.benefit')}
          </p>
          
          {/* Primary CTAs - Above the Fold */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <MagneticButton size="lg" className="tech-button group text-lg px-8 py-6">
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton size="lg" variant="outline" className="glass-card hover:bg-white/20 dark:hover:bg-white/10 text-lg px-8 py-6 border-2">
              {t('hero.cta.secondary')}
            </MagneticButton>
          </div>
          
          {/* Trust Indicators - Simple & Clean */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto glass-container rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">500+</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.specialists')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">50+</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.centers')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.athletes')}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">4.9/5 {t('hero.stats.rating')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-primary/50 rotate-90" />
      </div>
    </section>
  );
};

export default Hero;
