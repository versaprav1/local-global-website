import { useState } from "react";
import { Link } from "react-router-dom";
import { verticals } from "@/data/verticals";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const VerticalsSection = () => {
  const [selectedVertical, setSelectedVertical] = useState(verticals[0]);
  const { t, getTranslation } = useLanguage();

  const verticalRoutes: Record<string, string> = {
    "farm-to-home": "/services/farm-to-home",
    "urban-gardening": "/services/urban-gardening",
    "barter-exchange": "/services/barter-exchange",
    "youth-freelancing": "/services/youth-freelancing",
    "merger-acquisitions": "/services/merger-acquisitions"
  };

  const getVerticalTranslation = (verticalId: string) => {
    return {
      name: t(`verticals.items.${verticalId}.name`),
      description: t(`verticals.items.${verticalId}.description`),
      features: getTranslation<string[]>(`verticals.items.${verticalId}.features`),
      stats: getTranslation<{ value: string; label: string }>(`verticals.items.${verticalId}.stats`)
    };
  };

  return (
    <section id="verticals" className="py-24 relative overflow-hidden editorial-section">
      {verticals.map((v) => (
        <div key={v.id} id={v.id} className="absolute -top-20" />
      ))}
      
      <div className="absolute inset-0 gradient-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="tag-primary mb-6">
            {t('verticals.section.badge')}
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            {t('verticals.section.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('verticals.section.subtitle')}
          </p>
          <div className="editorial-divider mt-8" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            const trans = getVerticalTranslation(vertical.id);
            const isSelected = selectedVertical.id === vertical.id;
            return (
              <button
                key={vertical.id}
                onClick={() => setSelectedVertical(vertical)}
                className={`group relative px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isSelected 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                style={{ boxShadow: isSelected ? 'var(--shadow-glow)' : 'none' }}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span>{trans.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Details */}
          <div className="space-y-8">
            {(() => {
              const trans = getVerticalTranslation(selectedVertical.id);
              const Icon = selectedVertical.icon;
              return (
                <>
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-10 w-10" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{trans.name}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{trans.description}</p>
                  </div>
                  <ul className="space-y-4">
                    {trans.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={verticalRoutes[selectedVertical.id] || "#"}>
                    <Button className="btn-primary rounded-xl text-base px-6 py-3 h-auto">
                      {t('verticals.cta')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </>
              );
            })()}
          </div>

          {/* Right: Visual */}
          <div className="space-y-6">
            {(() => {
              const trans = getVerticalTranslation(selectedVertical.id);
              const Icon = selectedVertical.icon;
              return (
                <>
                  <div className="relative rounded-2xl overflow-hidden bg-muted/30 border border-border/50 p-12 flex items-center justify-center min-h-[360px]" style={{ boxShadow: 'var(--shadow-medium)' }}>
                    <div className="absolute inset-0 gradient-bg opacity-50" />
                    <Icon className="h-32 w-32 text-primary/30 relative z-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                      <div className="tag-accent mb-2">Featured</div>
                      <p className="text-foreground font-display font-semibold text-xl">{trans.name}</p>
                    </div>
                  </div>
                  {trans.stats && (
                    <Card className="feature-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{trans.stats.label}</p>
                          <p className="text-4xl font-display font-bold text-foreground">{trans.stats.value}</p>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                    </Card>
                  )}
                </>
              );
            })()}
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mt-20">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            const trans = getVerticalTranslation(vertical.id);
            const isSelected = selectedVertical.id === vertical.id;
            return (
              <Card 
                key={vertical.id}
                className={`feature-card cursor-pointer transition-all duration-300 ${isSelected ? 'border-primary/30 bg-primary/5' : ''}`}
                onClick={() => setSelectedVertical(vertical)}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-colors ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-display font-semibold mb-2">{trans.name}</h4>
                <p className="text-muted-foreground text-sm line-clamp-2">{trans.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VerticalsSection;
