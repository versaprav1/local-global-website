import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Heart, 
  Globe2, 
  Users, 
  Shield, 
  Zap, 
  Award,
  TrendingUp,
  Brain,
  Sparkles,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { language } = useLanguage();
  
  const stats = [
    { number: "10M+", label: language === 'de' ? "Aktive Nutzer" : "Active Users", icon: Users },
    { number: "500+", label: language === 'de' ? "Partnerzentren" : "Partner Centers", icon: Heart },
    { number: "50+", label: language === 'de' ? "Länder" : "Countries", icon: Globe2 },
    { number: "98%", label: language === 'de' ? "Zufriedenheit" : "Satisfaction", icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: language === 'de' ? "Vertrauen & Sicherheit" : "Trust & Security",
      description: language === 'de' 
        ? "Alle unsere Partner sind vollständig verifiziert und zertifiziert. Ihre Gesundheitsdaten sind bei uns sicher."
        : "Every partner is fully verified and certified. Your health data is protected with enterprise-grade security."
    },
    {
      icon: Zap,
      title: language === 'de' ? "Schneller Zugang" : "Instant Access",
      description: language === 'de'
        ? "Von der Buchung bis zur Behandlung - alles in wenigen Klicks. Keine langen Wartezeiten mehr."
        : "From booking to treatment - everything in just a few clicks. No more endless waiting times."
    },
    {
      icon: Brain,
      title: language === 'de' ? "KI-gestützte Vermittlung" : "AI-Powered Matching",
      description: language === 'de'
        ? "Unsere intelligente Plattform findet genau den richtigen Spezialisten für Ihre individuellen Bedürfnisse."
        : "Our intelligent platform finds exactly the right specialist for your unique needs."
    },
    {
      icon: TrendingUp,
      title: language === 'de' ? "Kontinuierliche Innovation" : "Continuous Innovation",
      description: language === 'de'
        ? "Wir entwickeln ständig neue Features und Services, um Ihre Gesundheitsversorgung zu verbessern."
        : "We're constantly developing new features and services to improve your healthcare experience."
    }
  ];

  const journey = [
    { 
      year: "2020", 
      title: language === 'de' ? "Die Idee" : "The Idea",
      description: language === 'de' 
        ? "Geboren aus der Vision, Gesundheitsversorgung weltweit zugänglich zu machen"
        : "Born from a vision to make healthcare accessible globally"
    },
    { 
      year: "2021", 
      title: language === 'de' ? "Erste Partner" : "First Partners",
      description: language === 'de'
        ? "100 führende Gesundheitszentren schließen sich unserer Mission an"
        : "100 leading health centers join our mission"
    },
    { 
      year: "2023", 
      title: language === 'de' ? "Globale Expansion" : "Global Expansion",
      description: language === 'de'
        ? "Expansion in 50+ Länder mit lokalen und globalen Partnerschaften"
        : "Expansion to 50+ countries with local and global partnerships"
    },
    { 
      year: "2024", 
      title: language === 'de' ? "KI-Integration" : "AI Integration",
      description: language === 'de'
        ? "Einführung fortschrittlicher KI für personalisierte Gesundheitslösungen"
        : "Launch of advanced AI for personalized health solutions"
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
                lokaler Expertise und globaler Innovation
              </>
            ) : (
              <>
                <span className="text-gradient">Bridging the gap</span> between
                <br />
                local expertise and global innovation
              </>
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'de' 
              ? "Near&Far revolutioniert die Gesundheitsversorgung durch die nahtlose Verbindung von Patienten mit erstklassigen medizinischen Dienstleistungen - von Ihrer Nachbarschaft bis zur ganzen Welt."
              : "Near&Far is revolutionizing healthcare by seamlessly connecting patients with world-class medical services - from your neighborhood to the entire globe."
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
                ? "Wir glauben, dass jeder Mensch Zugang zu erstklassiger Gesundheitsversorgung verdient - unabhängig von seinem Standort. Durch die Kombination lokaler Präsenz mit globaler Reichweite machen wir spezialisierte medizinische Expertise für alle zugänglich."
                : "We believe everyone deserves access to world-class healthcare, regardless of their location. By combining local presence with global reach, we're making specialized medical expertise accessible to all."
              }
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  {language === 'de' ? 'Lokale Präsenz' : 'Local Presence'}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {language === 'de'
                    ? "Zugang zu vertrauenswürdigen Gesundheitsdienstleistern in Ihrer Nähe mit persönlicher Betreuung und lokaler Expertise."
                    : "Access trusted healthcare providers in your area with personalized care and local expertise."
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {language === 'de' ? 'Globale Reichweite' : 'Global Reach'}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {language === 'de'
                    ? "Verbindung zu weltführenden Spezialisten und modernsten Behandlungsmethoden, egal wo Sie sich befinden."
                    : "Connect with world-leading specialists and cutting-edge treatments, no matter where you are."
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {language === 'de' ? 'Nahtlose Integration' : 'Seamless Integration'}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {language === 'de'
                    ? "Eine einzige Plattform für alle Ihre Gesundheitsbedürfnisse - von der Buchung bis zur Nachsorge."
                    : "One platform for all your healthcare needs - from booking to follow-up care."
                  }
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {language === 'de' ? 'Transparente Preise' : 'Transparent Pricing'}
                </h4>
                <p className="text-muted-foreground">
                  {language === 'de'
                    ? "Klare, vorab festgelegte Preise ohne versteckte Gebühren. Wissen Sie genau, was Sie bezahlen."
                    : "Clear, upfront pricing with no hidden fees. Know exactly what you're paying for."
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
                  ? 'Bereit, Ihre Gesundheitsreise zu beginnen?'
                  : 'Ready to start your health journey?'
                }
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                {language === 'de'
                  ? 'Treten Sie Millionen bei, die bereits die Zukunft der Gesundheitsversorgung erleben.'
                  : 'Join millions who are already experiencing the future of healthcare.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="tech-button group">
                  {language === 'de' ? 'Jetzt registrieren' : 'Sign Up Now'}
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