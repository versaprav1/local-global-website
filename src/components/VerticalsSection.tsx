import { useState } from "react";
import { Link } from "react-router-dom";
import { verticals } from "@/data/verticals";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import wellnessImage from "@/assets/wellness-center.jpg";
import fitnessImage from "@/assets/fitness-center.jpg";
import heroImage from "@/assets/hero-sports-medicine.jpg";

const VerticalsSection = () => {
  const [selectedVertical, setSelectedVertical] = useState(verticals[0]);
  const { t, getTranslation } = useLanguage();

  const verticalImages = {
    "sports-medicine": heroImage,
    "health-wellness": wellnessImage,
    "fitness-performance": fitnessImage
  };

  const verticalRoutes = {
    "sports-medicine": "/services/performance-medicine",
    "health-wellness": "/services/recovery-wellness",
    "fitness-performance": "/services/training-performance"
  };

  const verticalTranslationKeys = {
    "sports-medicine": "performance-medicine",
    "health-wellness": "recovery-wellness",
    "fitness-performance": "training-performance"
  };

  const getVerticalTranslation = (verticalId: string) => {
    const key = verticalTranslationKeys[verticalId as keyof typeof verticalTranslationKeys];
    return {
      name: t(`verticals.items.${key}.name`),
      description: t(`verticals.items.${key}.description`),
      features: getTranslation<string[]>(`verticals.items.${key}.features`),
      stats: getTranslation<{ value: string; label: string }>(`verticals.items.${key}.stats`)
    };
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div id="sports-medicine" className="absolute -top-20" />
      <div id="health-wellness" className="absolute -top-20" />
      <div id="fitness-performance" className="absolute -top-20" />
      
      <div className="absolute inset-0 gradient-bg opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 border-primary/20 bg-primary/10 text-primary">
            {t('verticals.section.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('verticals.section.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('verticals.section.subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            const trans = getVerticalTranslation(vertical.id);
            return (
              <button
                key={vertical.id}
                onClick={() => setSelectedVertical(vertical)}
                className={`group relative w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedVertical.id === vertical.id ? "text-white" : "text-foreground hover:scale-105"
                }`}
              >
                {selectedVertical.id === vertical.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${vertical.gradient} rounded-xl`} />
                )}
                {selectedVertical.id !== vertical.id && (
                  <div className="absolute inset-0 glass-card rounded-xl" />
                )}
                <div className="relative flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <span>{trans.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            {(() => {
              const trans = getVerticalTranslation(selectedVertical.id);
              const Icon = selectedVertical.icon;
              return (
                <>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${selectedVertical.gradient} shadow-glow`}>
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{trans.name}</h3>
                  <p className="text-lg text-muted-foreground">{trans.description}</p>
                  <ul className="space-y-3">
                    {trans.features?.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={verticalRoutes[selectedVertical.id as keyof typeof verticalRoutes]}>
                    <Button className="tech-button group">
                      {t('verticals.cta')}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </>
              );
            })()}
          </div>

          <div className="space-y-6">
            {(() => {
              const trans = getVerticalTranslation(selectedVertical.id);
              return (
                <>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={verticalImages[selectedVertical.id as keyof typeof verticalImages]} 
                      alt={trans.name}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-2 bg-background/90 text-foreground">Featured</Badge>
                      <p className="text-white font-semibold text-lg">{trans.name}</p>
                    </div>
                  </div>
                  {trans.stats && (
                    <Card className="glass-container p-6 card-hover">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{trans.stats.label}</p>
                          <p className="text-3xl font-bold text-gradient">{trans.stats.value}</p>
                        </div>
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedVertical.gradient} opacity-20`} />
                      </div>
                    </Card>
                  )}
                </>
              );
            })()}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            const trans = getVerticalTranslation(vertical.id);
            return (
              <Card 
                key={vertical.id}
                className="glass-container p-6 card-hover cursor-pointer"
                onClick={() => setSelectedVertical(vertical)}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${vertical.gradient} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{trans.name}</h4>
                <p className="text-muted-foreground text-sm">{trans.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VerticalsSection;
