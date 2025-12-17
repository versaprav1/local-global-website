import { ArrowRight, Leaf, Users, ShoppingBag, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "How It Works",
      title: "Simple Steps to Sustainable Living",
      subtitle: "Join thousands of people building a more sustainable community through our platform",
      steps: [
        {
          number: "01",
          title: "Choose Your Path",
          description: "Browse our five verticals - from farm-fresh produce to urban gardening, skill exchanges, youth freelancing, or business partnerships.",
          icon: Leaf
        },
        {
          number: "02", 
          title: "Connect Locally",
          description: "Find local producers, gardeners, skilled individuals, and businesses in your area. Build meaningful connections with your community.",
          icon: Users
        },
        {
          number: "03",
          title: "Exchange & Grow",
          description: "Trade goods, services, or skills. Whether you're buying fresh produce, swapping garden tools, or hiring young talent - it's all seamless.",
          icon: ShoppingBag
        },
        {
          number: "04",
          title: "Scale Your Impact",
          description: "Watch your sustainable choices multiply. Track your environmental impact, grow your network, and expand from local to global.",
          icon: TrendingUp
        }
      ],
      benefits: {
        title: "Why Choose LocalGlobal?",
        items: [
          "Zero commission on peer-to-peer exchanges",
          "Verified local producers and service providers",
          "Secure payment and exchange system",
          "Carbon footprint tracking for all transactions",
          "Multi-language support (DE/EN)",
          "Mobile-friendly experience"
        ]
      },
      cta: {
        title: "Ready to Get Started?",
        subtitle: "Join our growing community of sustainable-minded individuals and businesses.",
        button: "Join the Community"
      }
    },
    de: {
      badge: "So funktioniert's",
      title: "Einfache Schritte zum nachhaltigen Leben",
      subtitle: "Schließen Sie sich Tausenden von Menschen an, die über unsere Plattform eine nachhaltigere Gemeinschaft aufbauen",
      steps: [
        {
          number: "01",
          title: "Wählen Sie Ihren Weg",
          description: "Durchsuchen Sie unsere fünf Bereiche - von erntefrischen Produkten über urbanes Gärtnern, Fähigkeitenaustausch, Jugend-Freelancing bis hin zu Geschäftspartnerschaften.",
          icon: Leaf
        },
        {
          number: "02",
          title: "Lokal verbinden",
          description: "Finden Sie lokale Produzenten, Gärtner, qualifizierte Personen und Unternehmen in Ihrer Nähe. Bauen Sie bedeutungsvolle Verbindungen zu Ihrer Gemeinschaft auf.",
          icon: Users
        },
        {
          number: "03",
          title: "Austauschen & Wachsen",
          description: "Tauschen Sie Waren, Dienstleistungen oder Fähigkeiten. Ob Sie frische Produkte kaufen, Gartenwerkzeuge tauschen oder junge Talente einstellen - alles ist nahtlos.",
          icon: ShoppingBag
        },
        {
          number: "04",
          title: "Wirkung skalieren",
          description: "Beobachten Sie, wie sich Ihre nachhaltigen Entscheidungen vervielfachen. Verfolgen Sie Ihre Umweltauswirkungen, erweitern Sie Ihr Netzwerk und wachsen Sie von lokal zu global.",
          icon: TrendingUp
        }
      ],
      benefits: {
        title: "Warum LocalGlobal wählen?",
        items: [
          "Keine Provision bei Peer-to-Peer-Austausch",
          "Verifizierte lokale Produzenten und Dienstleister",
          "Sicheres Zahlungs- und Austauschsystem",
          "CO2-Fußabdruck-Tracking für alle Transaktionen",
          "Mehrsprachige Unterstützung (DE/EN)",
          "Mobilfreundliche Erfahrung"
        ]
      },
      cta: {
        title: "Bereit anzufangen?",
        subtitle: "Treten Sie unserer wachsenden Gemeinschaft nachhaltig denkender Menschen und Unternehmen bei.",
        button: "Der Gemeinschaft beitreten"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Leaf className="h-4 w-4" />
              {t.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              {t.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative group"
                >
                  {/* Connector line */}
                  {index < t.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                  
                  <div className="bg-card border border-border rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-4xl font-display font-bold text-muted-foreground/30">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/30 py-20 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
                {t.benefits.title}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.benefits.items.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              {t.cta.title}
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              {t.cta.subtitle}
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="rounded-xl">
                {t.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
