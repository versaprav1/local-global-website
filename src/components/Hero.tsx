import { MagneticButton } from "@/components/MagneticButton";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Star, Leaf, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden editorial-section">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
            
            {/* Left: Editorial Content */}
            <div className="space-y-8">
              {/* Tag */}
              <div className="tag-primary">
                <Sparkles className="h-3 w-3 mr-2" />
                {t('hero.badge')}
              </div>
              
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                  <span className="text-foreground">{t('hero.title')}</span>
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              {/* Benefit Statement */}
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                {t('hero.benefit')}
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <MagneticButton size="lg" className="btn-primary group text-base px-8 py-4 rounded-xl">
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 py-4 rounded-xl border-2 border-border hover:bg-muted/50 hover:border-primary/30 transition-all"
                >
                  {t('hero.cta.secondary')}
                </MagneticButton>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="ml-2 font-medium">4.9/5</span>
                </div>
                <span className="text-border">|</span>
                <span>2,500+ {t('hero.stats.farmers')}</span>
              </div>
            </div>
            
            {/* Right: Stats Grid */}
            <div className="relative">
              {/* Main Stats Card */}
              <div className="glass-container p-8 space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="stat-card">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-4xl font-display font-bold text-foreground mb-1">2,500+</div>
                    <div className="text-sm text-muted-foreground">{t('hero.stats.farmers')}</div>
                  </div>
                  
                  <div className="stat-card">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-4xl font-display font-bold text-foreground mb-1">150+</div>
                    <div className="text-sm text-muted-foreground">{t('hero.stats.communities')}</div>
                  </div>
                  
                  <div className="stat-card">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-4xl font-display font-bold text-foreground mb-1">100K+</div>
                    <div className="text-sm text-muted-foreground">{t('hero.stats.exchanges')}</div>
                  </div>
                  
                  <div className="stat-card">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-4xl font-display font-bold text-foreground mb-1">4.9</div>
                    <div className="text-sm text-muted-foreground">{t('hero.stats.rating')}</div>
                  </div>
                </div>
                
                {/* Bottom Highlight */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-center text-sm text-muted-foreground">
                    Trusted by communities across <span className="text-primary font-medium">Germany</span>
                  </p>
                </div>
              </div>
              
              {/* Floating Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl blur-2xl animate-float" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl blur-2xl animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
