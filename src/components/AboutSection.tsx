import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Leaf, 
  Globe2, 
  Users, 
  Shield, 
  Zap, 
  Award,
  TrendingUp,
  Recycle,
  Sparkles,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { language } = useLanguage();
  
  const stats = [
    { number: "10K+", label: language === 'de' ? "Aktive Nutzer" : "Active Users", icon: Users },
    { number: "500+", label: language === 'de' ? "Lokale Partner" : "Local Partners", icon: Leaf },
    { number: "50+", label: language === 'de' ? "Städte" : "Cities", icon: Globe2 },
    { number: "98%", label: language === 'de' ? "Zufriedenheit" : "Satisfaction", icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: language === 'de' ? "Vertrauen & Transparenz" : "Trust & Transparency",
      description: language === 'de' 
        ? "Alle unsere Partner sind verifiziert. Wissen Sie genau, woher Ihre Produkte kommen."
        : "All our partners are verified. Know exactly where your products come from."
    },
    {
      icon: Zap,
      title: language === 'de' ? "Einfacher Zugang" : "Easy Access",
      description: language === 'de'
        ? "Von der Suche bis zur Lieferung - alles in wenigen Klicks. Nachhaltig leben leicht gemacht."
        : "From search to delivery - everything in just a few clicks. Sustainable living made easy."
    },
    {
      icon: Recycle,
      title: language === 'de' ? "Kreislaufwirtschaft" : "Circular Economy",
      description: language === 'de'
        ? "Unsere Plattform fördert Tausch, Wiederverwendung und lokale Produktion für weniger Abfall."
        : "Our platform promotes exchange, reuse, and local production for less waste."
    },
    {
      icon: TrendingUp,
      title: language === 'de' ? "Gemeinschaftswachstum" : "Community Growth",
      description: language === 'de'
        ? "Wir stärken lokale Produzenten und schaffen neue Möglichkeiten für Jugendliche."
        : "We empower local producers and create new opportunities for young people."
    }
  ];

  const journey = [
    { 
      year: "2022", 
      title: language === 'de' ? "Die Idee" : "The Idea",
      description: language === 'de' 
        ? "Geboren aus der Vision, nachhaltige Gemeinschaften zu verbinden"
        : "Born from a vision to connect sustainable communities"
    },
    { 
      year: "2023", 
      title: language === 'de' ? "Erste Partner" : "First Partners",
      description: language === 'de'
        ? "100 lokale Bauern und Gärtner schließen sich unserer Mission an"
        : "100 local farmers and gardeners join our mission"
    },
    { 
      year: "2024", 
      title: language === 'de' ? "Community Wachstum" : "Community Growth",
      description: language === 'de'
        ? "Expansion in 50+ Städte mit Tauschbörsen und Jugendprogrammen"
        : "Expansion to 50+ cities with barter exchanges and youth programs"
    },
    { 
      year: "2025", 
      title: language === 'de' ? "M&A Ökosystem" : "M&A Ecosystem",
      description: language === 'de'
        ? "Start des Lokal-zu-Global Handelsnetzwerks für kleine Unternehmen"
        : "Launch of local-to-global trade network for small businesses"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg opacity-5" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 border-primary/20 bg-primary/10 text-primary">
            <Sparkles className="h-3 w-3 mr-2" />
            {language === 'de' ? 'Über uns' : 'About Us'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'de' ? (
              <>
                <span className="text-gradient">Verbindung schaffen</span> zwischen
                <br />
                lokalen Produzenten und bewussten Konsumenten
              </>
            ) : (
              <>
                <span className="text-gradient">Connecting</span> local producers
                <br />
                with conscious consumers
              </>
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' 
              ? "Near&Far baut Brücken zwischen nachhaltigen Gemeinschaften - von lokalen Bauernmärkten bis zum globalen Handel, von Stadtgärten bis zur Jugendförderung."
              : "Near&Far bridges sustainable communities - from local farmers' markets to global trade, from urban gardens to youth empowerment."
            }
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="glass-container mb-16">
          <CardContent className="p-8 md:p-12 text-center">
            <Target className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              {language === 'de' ? 'Unsere Mission' : 'Our Mission'}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'de'
                ? "Wir glauben, dass jeder Zugang zu lokalen, nachhaltigen Produkten verdient. Durch die Kombination von Technologie mit Gemeinschaftswerten schaffen wir ein Ökosystem für bewusstes Leben und faire Wirtschaft."
                : "We believe everyone deserves access to local, sustainable products. By combining technology with community values, we create an ecosystem for conscious living and fair economy."
              }
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="glass-container text-center card-hover">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'de' ? 'Unsere Werte' : 'Our Values'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="glass-container card-hover group">
                  <CardContent className="p-6">
                    <div className="glass-card w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'de' ? 'Unsere Reise' : 'Our Journey'}
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
            
            <div className="space-y-8">
              {journey.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1" />
                  <div className="relative z-10">
                    <div className="glass-card w-20 h-20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 glass-container">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <Card className="glass-container mb-16">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              {language === 'de' ? 'Warum Near&Far wählen?' : 'Why Choose Near&Far?'}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {language === 'de' ? 'Lokale Produkte' : 'Local Products'}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {language === 'de'
                    ? "Direkt von verifizierten lokalen Bauern und Produzenten - frisch, fair und nachhaltig."
                    : "Direct from verified local farmers and producers - fresh, fair, and sustainable."
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {language === 'de' ? 'Community Tausch' : 'Community Exchange'}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {language === 'de'
                    ? "Tauschen Sie Waren und Dienstleistungen mit Nachbarn - sparen Sie Geld und reduzieren Sie Abfall."
                    : "Trade goods and services with neighbors - save money and reduce waste."
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {language === 'de' ? 'Jugendförderung' : 'Youth Empowerment'}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {language === 'de'
                    ? "Wir schaffen Möglichkeiten für junge Menschen, Fähigkeiten zu entwickeln und zu verdienen."
                    : "We create opportunities for young people to develop skills and earn income."
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {language === 'de' ? 'Nachhaltiges Wachstum' : 'Sustainable Growth'}
                </h4>
                <p className="text-muted-foreground">
                  {language === 'de'
                    ? "Von lokal zu global - wir helfen kleinen Unternehmen zu wachsen und gleichzeitig nachhaltig zu bleiben."
                    : "From local to global - we help small businesses grow while staying sustainable."
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="glass-container inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'de' 
                  ? 'Bereit, Teil unserer Community zu werden?'
                  : 'Ready to join our community?'
                }
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                {language === 'de'
                  ? 'Schließen Sie sich Tausenden an, die bereits nachhaltiger leben und lokale Gemeinschaften stärken.'
                  : 'Join thousands who are already living more sustainably and strengthening local communities.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="tech-button group">
                  {language === 'de' ? 'Jetzt beitreten' : 'Join Now'}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="glass-card hover:bg-white/20 dark:hover:bg-white/10">
                  {language === 'de' ? 'Partner werden' : 'Become a Partner'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;