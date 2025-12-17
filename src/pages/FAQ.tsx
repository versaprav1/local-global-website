import { HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our sustainable ecosystem platform",
      categories: [
        {
          name: "General",
          questions: [
            {
              q: "What is LocalGlobal?",
              a: "LocalGlobal is a sustainable ecosystem platform that connects local communities with five key verticals: Farm-to-Home delivery, Urban Gardening, Barter & Exchange, Youth Freelancing, and Local-to-Global business connections. Our mission is to reduce environmental impact while building stronger communities."
            },
            {
              q: "Is LocalGlobal available in my area?",
              a: "We're currently focused on Germany with plans to expand across Europe. Check our locations page to see if we have active community members in your area, or be the first to start one!"
            },
            {
              q: "Is there a fee to use the platform?",
              a: "Basic membership is free! We offer premium features for power users and businesses. Peer-to-peer exchanges have zero commission - we believe in supporting community connections without taking a cut."
            }
          ]
        },
        {
          name: "Farm-to-Home",
          questions: [
            {
              q: "How does farm-to-home delivery work?",
              a: "Local farmers list their fresh produce on our platform. You browse, select what you want, and choose pickup or delivery. Products go from farm to your table within 24-48 hours, ensuring maximum freshness and minimum environmental impact."
            },
            {
              q: "Are the products organic?",
              a: "We work with a variety of farmers - some are certified organic, others use sustainable practices. Each producer's profile shows their farming methods, certifications, and practices so you can make informed choices."
            }
          ]
        },
        {
          name: "Urban Gardening",
          questions: [
            {
              q: "I live in an apartment. Can I still participate?",
              a: "Absolutely! Our Urban Gardening vertical is specifically designed for small spaces. We offer balcony garden kits, vertical growing systems, and window-sill solutions. No backyard required!"
            },
            {
              q: "Do you provide gardening supplies?",
              a: "Yes! Through our marketplace, you can find seeds, soil, containers, tools, and complete starter kits from local suppliers. You can also exchange or barter gardening supplies with other community members."
            }
          ]
        },
        {
          name: "Barter & Exchange",
          questions: [
            {
              q: "How does the barter system work?",
              a: "List what you have to offer (goods, skills, time) and what you're looking for. Our matching system connects you with community members for cashless exchanges. Both parties agree on the trade, and our platform ensures fair and safe transactions."
            },
            {
              q: "Is bartering legal?",
              a: "Yes, bartering is completely legal. However, depending on your jurisdiction, significant exchanges may have tax implications. We recommend consulting local regulations for large-scale trading."
            }
          ]
        },
        {
          name: "Youth Freelancing",
          questions: [
            {
              q: "What age group is the youth freelancing for?",
              a: "Our youth freelancing platform is designed for students and young people aged 16-25. Users under 18 need parental consent and have additional safety protections in place."
            },
            {
              q: "What kinds of services can young people offer?",
              a: "Common services include tutoring, graphic design, social media help, pet sitting, gardening assistance, tech support, language lessons, and creative services. We focus on safe, skill-building opportunities."
            }
          ]
        },
        {
          name: "Security & Trust",
          questions: [
            {
              q: "How do you verify users?",
              a: "We use a multi-level verification system including email verification, phone verification, and optional ID verification for enhanced trust badges. Producers and service providers go through additional vetting."
            },
            {
              q: "What if something goes wrong with a transaction?",
              a: "We have a dedicated support team and dispute resolution process. For paid transactions, we offer buyer protection. For barter exchanges, our community guidelines and rating system help maintain trust."
            }
          ]
        }
      ]
    },
    de: {
      badge: "FAQ",
      title: "Häufig gestellte Fragen",
      subtitle: "Finden Sie Antworten auf häufige Fragen zu unserer nachhaltigen Ökosystem-Plattform",
      categories: [
        {
          name: "Allgemein",
          questions: [
            {
              q: "Was ist LocalGlobal?",
              a: "LocalGlobal ist eine nachhaltige Ökosystem-Plattform, die lokale Gemeinschaften mit fünf Schlüsselbereichen verbindet: Vom-Hof-nach-Hause-Lieferung, Urbanes Gärtnern, Tausch & Austausch, Jugend-Freelancing und Lokal-zu-Global-Geschäftsverbindungen. Unsere Mission ist es, die Umweltauswirkungen zu reduzieren und gleichzeitig stärkere Gemeinschaften aufzubauen."
            },
            {
              q: "Ist LocalGlobal in meiner Region verfügbar?",
              a: "Wir konzentrieren uns derzeit auf Deutschland mit Plänen zur Expansion in ganz Europa. Schauen Sie auf unserer Standortseite nach, ob wir aktive Community-Mitglieder in Ihrer Nähe haben, oder seien Sie der Erste!"
            },
            {
              q: "Gibt es eine Gebühr für die Nutzung der Plattform?",
              a: "Die Basismitgliedschaft ist kostenlos! Wir bieten Premium-Funktionen für Power-User und Unternehmen. Peer-to-Peer-Austausche haben keine Provision - wir glauben daran, Gemeinschaftsverbindungen zu unterstützen, ohne einen Anteil zu nehmen."
            }
          ]
        },
        {
          name: "Vom Hof nach Hause",
          questions: [
            {
              q: "Wie funktioniert die Lieferung vom Hof nach Hause?",
              a: "Lokale Bauern listen ihre frischen Produkte auf unserer Plattform. Sie durchsuchen, wählen aus was Sie möchten, und wählen Abholung oder Lieferung. Produkte kommen innerhalb von 24-48 Stunden vom Hof auf Ihren Tisch, was maximale Frische und minimale Umweltauswirkungen gewährleistet."
            },
            {
              q: "Sind die Produkte bio?",
              a: "Wir arbeiten mit verschiedenen Bauern zusammen - einige sind bio-zertifiziert, andere verwenden nachhaltige Praktiken. Das Profil jedes Produzenten zeigt seine Anbaumethoden, Zertifizierungen und Praktiken, damit Sie fundierte Entscheidungen treffen können."
            }
          ]
        },
        {
          name: "Urbanes Gärtnern",
          questions: [
            {
              q: "Ich wohne in einer Wohnung. Kann ich trotzdem teilnehmen?",
              a: "Absolut! Unser Bereich Urbanes Gärtnern ist speziell für kleine Räume konzipiert. Wir bieten Balkon-Garten-Sets, vertikale Anbausysteme und Fensterbank-Lösungen. Kein Hinterhof erforderlich!"
            },
            {
              q: "Bieten Sie Gartenbedarf an?",
              a: "Ja! Über unseren Marktplatz finden Sie Samen, Erde, Behälter, Werkzeuge und komplette Starter-Sets von lokalen Anbietern. Sie können auch Gartenbedarf mit anderen Community-Mitgliedern tauschen oder handeln."
            }
          ]
        },
        {
          name: "Tausch & Austausch",
          questions: [
            {
              q: "Wie funktioniert das Tauschsystem?",
              a: "Listen Sie auf, was Sie anzubieten haben (Waren, Fähigkeiten, Zeit) und was Sie suchen. Unser Matching-System verbindet Sie mit Community-Mitgliedern für bargeldlosen Austausch. Beide Parteien einigen sich auf den Handel, und unsere Plattform gewährleistet faire und sichere Transaktionen."
            },
            {
              q: "Ist Tauschen legal?",
              a: "Ja, Tauschen ist völlig legal. Abhängig von Ihrer Gerichtsbarkeit können jedoch bei bedeutenden Austauschen steuerliche Auswirkungen entstehen. Wir empfehlen, lokale Vorschriften für großangelegten Handel zu konsultieren."
            }
          ]
        },
        {
          name: "Jugend-Freelancing",
          questions: [
            {
              q: "Für welche Altersgruppe ist das Jugend-Freelancing?",
              a: "Unsere Jugend-Freelancing-Plattform ist für Schüler und junge Menschen im Alter von 16-25 Jahren konzipiert. Nutzer unter 18 Jahren benötigen die Zustimmung der Eltern und haben zusätzliche Sicherheitsschutzmaßnahmen."
            },
            {
              q: "Welche Arten von Dienstleistungen können junge Menschen anbieten?",
              a: "Häufige Dienstleistungen umfassen Nachhilfe, Grafikdesign, Social-Media-Hilfe, Tiersitting, Gartenhilfe, technischen Support, Sprachunterricht und kreative Dienstleistungen. Wir konzentrieren uns auf sichere, kompetenzfördernde Möglichkeiten."
            }
          ]
        },
        {
          name: "Sicherheit & Vertrauen",
          questions: [
            {
              q: "Wie verifizieren Sie Benutzer?",
              a: "Wir verwenden ein mehrstufiges Verifizierungssystem einschließlich E-Mail-Verifizierung, Telefonverifizierung und optionaler ID-Verifizierung für verbesserte Vertrauensabzeichen. Produzenten und Dienstleister durchlaufen eine zusätzliche Überprüfung."
            },
            {
              q: "Was ist, wenn bei einer Transaktion etwas schief geht?",
              a: "Wir haben ein engagiertes Support-Team und einen Streitbeilegungsprozess. Für bezahlte Transaktionen bieten wir Käuferschutz. Für Tauschgeschäfte helfen unsere Community-Richtlinien und das Bewertungssystem, Vertrauen aufrechtzuerhalten."
            }
          ]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4" />
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

        {/* FAQ Categories */}
        <section className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {t.categories.map((category, catIndex) => (
              <div key={catIndex} className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                  {category.name}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem 
                      key={qIndex} 
                      value={`${catIndex}-${qIndex}`}
                      className="border border-border rounded-xl px-4 data-[state=open]:bg-muted/30"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
