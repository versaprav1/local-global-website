import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Activity, Users, TrendingUp, Star, Play, MapPin, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold text-gradient">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-primary rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Bento Grid Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
          
          {/* Main Feature Card - Large */}
          <div className="md:col-span-7 md:row-span-2 glass-container rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative z-10">
              <Badge className="mb-4 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/10 text-primary">
                <Sparkles className="h-3 w-3 mr-2" />
                {t('hero.badge')}
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient">{t('hero.title1')}</span>
                <br />
                <span className="text-foreground">{t('hero.title2')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="tech-button group">
                  {t('hero.cta.explore')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="glass-card hover:bg-white/20 dark:hover:bg-white/10">
                  <Play className="mr-2 h-5 w-5" />
                  {t('hero.cta.demo')}
                </Button>
              </div>
            </div>
            
            {/* Animated Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl floating" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
          </div>

          {/* Stats Card 1 */}
          <div className="md:col-span-5 glass-card rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 card-hover">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <TrendingUp className="h-5 w-5 text-accent" />
            </div>
            <AnimatedCounter end={25000} suffix="+" />
            <p className="text-muted-foreground mt-2">Active Users Worldwide</p>
          </div>

          {/* Stats Card 2 */}
          <div className="md:col-span-5 glass-card rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 card-hover">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-secondary/10">
                <Activity className="h-6 w-6 text-secondary" />
              </div>
              <TrendingUp className="h-5 w-5 text-accent" />
            </div>
            <AnimatedCounter end={15000} suffix="+" />
            <p className="text-muted-foreground mt-2">Healthcare Specialists</p>
          </div>

          {/* Testimonial Card */}
          <div className="md:col-span-7 glass-container rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "This platform revolutionized how I connect with healthcare professionals. The global reach combined with local expertise is unmatched."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-foreground">John Doe</p>
                  <p className="text-sm text-muted-foreground">Professional Athlete</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="md:col-span-5 glass-card rounded-2xl p-6 space-y-3">
            <h3 className="font-semibold text-foreground mb-4">Quick Access</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors text-left group">
                <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Find Local Centers</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors text-left group">
                <Globe className="h-5 w-5 text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Global Network</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors text-left group">
                <Activity className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Book Consultation</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 floating">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;