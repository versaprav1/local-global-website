import { useState } from "react";
import { 
  Users, Store, Sprout, Repeat, Briefcase, TrendingUp, 
  ArrowRight, CheckCircle, Send 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Partners = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    en: {
      badge: "Join Us",
      title: "Become a Partner",
      subtitle: "Join our growing network of local producers, gardeners, skilled individuals, and businesses. Together, we're building a more sustainable future.",
      partnerTypes: [
        {
          id: "farmer",
          icon: Store,
          title: "Local Producer",
          description: "Sell your farm-fresh products directly to consumers",
          benefits: ["Direct customer relationships", "Fair pricing control", "Zero middlemen", "Marketing support"]
        },
        {
          id: "gardener",
          icon: Sprout,
          title: "Urban Gardener",
          description: "Share your gardening expertise and products",
          benefits: ["Sell plants & produce", "Offer workshops", "Connect with neighbors", "Grow your hobby"]
        },
        {
          id: "exchanger",
          icon: Repeat,
          title: "Community Exchanger",
          description: "Trade skills, goods, and services locally",
          benefits: ["Cashless trading", "Skill sharing", "Community building", "Resource saving"]
        },
        {
          id: "freelancer",
          icon: Briefcase,
          title: "Young Freelancer",
          description: "Offer your skills to local and global clients",
          benefits: ["Safe platform", "Build portfolio", "Mentorship access", "Flexible work"]
        },
        {
          id: "business",
          icon: TrendingUp,
          title: "Business Partner",
          description: "Expand your reach from local to global markets",
          benefits: ["Partner matching", "Growth support", "Network access", "Sustainable scaling"]
        }
      ],
      form: {
        title: "Tell Us About Yourself",
        name: "Full Name",
        email: "Email Address",
        business: "Business/Project Name",
        location: "Location",
        message: "Tell us about what you offer",
        submit: "Submit Application",
        sending: "Submitting..."
      },
      whyJoin: {
        title: "Why Partner With Us?",
        reasons: [
          "Access to a growing community of eco-conscious consumers",
          "Zero commission on peer-to-peer transactions",
          "Marketing and visibility support",
          "Sustainable business tools and resources",
          "Multi-language platform (German & English)",
          "Dedicated partner support team"
        ]
      },
      success: "Application submitted!",
      successDesc: "We'll review your application and get back to you within 48 hours."
    },
    de: {
      badge: "Mitmachen",
      title: "Partner werden",
      subtitle: "Treten Sie unserem wachsenden Netzwerk von lokalen Produzenten, Gärtnern, qualifizierten Personen und Unternehmen bei. Gemeinsam bauen wir eine nachhaltigere Zukunft.",
      partnerTypes: [
        {
          id: "farmer",
          icon: Store,
          title: "Lokaler Produzent",
          description: "Verkaufen Sie Ihre erntefrischen Produkte direkt an Verbraucher",
          benefits: ["Direkte Kundenbeziehungen", "Faire Preiskontrolle", "Keine Zwischenhändler", "Marketing-Unterstützung"]
        },
        {
          id: "gardener",
          icon: Sprout,
          title: "Urbaner Gärtner",
          description: "Teilen Sie Ihr Gartenwissen und Ihre Produkte",
          benefits: ["Pflanzen & Produkte verkaufen", "Workshops anbieten", "Mit Nachbarn verbinden", "Hobby ausbauen"]
        },
        {
          id: "exchanger",
          icon: Repeat,
          title: "Community-Tauscher",
          description: "Tauschen Sie Fähigkeiten, Waren und Dienstleistungen lokal",
          benefits: ["Bargeldloser Handel", "Fähigkeiten teilen", "Gemeinschaftsaufbau", "Ressourcen sparen"]
        },
        {
          id: "freelancer",
          icon: Briefcase,
          title: "Junger Freelancer",
          description: "Bieten Sie Ihre Fähigkeiten lokalen und globalen Kunden an",
          benefits: ["Sichere Plattform", "Portfolio aufbauen", "Mentoring-Zugang", "Flexible Arbeit"]
        },
        {
          id: "business",
          icon: TrendingUp,
          title: "Geschäftspartner",
          description: "Erweitern Sie Ihre Reichweite von lokalen zu globalen Märkten",
          benefits: ["Partner-Matching", "Wachstumsunterstützung", "Netzwerkzugang", "Nachhaltiges Skalieren"]
        }
      ],
      form: {
        title: "Erzählen Sie uns von sich",
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        business: "Unternehmen/Projektname",
        location: "Standort",
        message: "Erzählen Sie uns, was Sie anbieten",
        submit: "Bewerbung einreichen",
        sending: "Wird eingereicht..."
      },
      whyJoin: {
        title: "Warum mit uns zusammenarbeiten?",
        reasons: [
          "Zugang zu einer wachsenden Gemeinschaft umweltbewusster Verbraucher",
          "Keine Provision bei Peer-to-Peer-Transaktionen",
          "Marketing- und Sichtbarkeitsunterstützung",
          "Nachhaltige Geschäftstools und Ressourcen",
          "Mehrsprachige Plattform (Deutsch & Englisch)",
          "Engagiertes Partner-Support-Team"
        ]
      },
      success: "Bewerbung eingereicht!",
      successDesc: "Wir werden Ihre Bewerbung prüfen und uns innerhalb von 48 Stunden bei Ihnen melden."
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t.success,
        description: t.successDesc,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              {t.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Partner Types */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {t.partnerTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(isSelected ? null : type.id)}
                  className={cn(
                    "text-left p-5 rounded-2xl border transition-all duration-300",
                    isSelected 
                      ? "bg-primary/10 border-primary shadow-lg" 
                      : "bg-card border-border hover:border-primary/30 hover:shadow-md"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors",
                    isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-primary"
                  )}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                  
                  <div className={cn(
                    "space-y-2 overflow-hidden transition-all duration-300",
                    isSelected ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    {type.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Why Join Section */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t.whyJoin.title}
              </h2>
              <div className="space-y-4">
                {t.whyJoin.reasons.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t.form.title}
              </h2>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.form.name}</label>
                    <Input placeholder={t.form.name} required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.form.email}</label>
                    <Input type="email" placeholder={t.form.email} required className="bg-background" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.form.business}</label>
                    <Input placeholder={t.form.business} className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.form.location}</label>
                    <Input placeholder={t.form.location} required className="bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t.form.message}</label>
                  <Textarea 
                    placeholder={t.form.message}
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.form.sending : t.form.submit}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
