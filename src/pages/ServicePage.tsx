import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { verticals } from "@/data/verticals";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Users, HelpCircle, ExternalLink, FileText, BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePartners, useGuides } from "@/hooks/useResources";
import { useBlogPosts } from "@/hooks/useBlogPosts";
// Map vertical IDs to relevant content categories
const verticalCategoryMap: Record<string, string[]> = {
  "merger-acquisitions": ["business", "sustainability", "commerce"],
  "farm-to-home": ["agriculture", "food", "sustainability"],
  "urban-gardening": ["gardening", "sustainability", "community"],
  "barter-exchange": ["community", "exchange", "sustainability"],
  "youth-freelancing": ["freelancing", "education", "youth"],
};

const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useLanguage();
  const { data: partners } = usePartners();
  const { data: guides } = useGuides();
  const { data: blogPosts } = useBlogPosts();


  // Find the vertical data
  const vertical = verticals.find((v) => v.id === serviceId);

  // Get translations for this service
  const getServiceTranslation = (key: string) => {
    return t(`services.${serviceId}.${key}` as any) || "";
  };

  const getServiceObject = (key: string) => {
    try {
      return t(`services.${serviceId}.${key}` as any) as any;
    } catch {
      return null;
    }
  };

  if (!vertical) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const hero = getServiceObject("hero");
  const audience = getServiceObject("audience");
  const outcomes = getServiceObject("outcomes");
  const process = getServiceObject("process");
  const faq = getServiceObject("faq");
  const cta = getServiceObject("cta");
  const Icon = vertical.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/#verticals"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.back")}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {hero?.badge && (
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {hero.badge}
                </Badge>
              )}
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {hero?.title || vertical.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {hero?.subtitle || vertical.description}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                {hero?.cta || t("common.learnMore")}
              </Button>
            </div>

            <div className="relative">
              <div
                className={`w-full aspect-square rounded-3xl bg-gradient-to-br ${vertical.gradient} p-8 flex items-center justify-center`}
              >
                <Icon className="w-32 h-32 text-white/90" />
              </div>
              {/* Stats overlay */}
              <Card className="absolute -bottom-6 -left-6 shadow-xl">
                <CardContent className="p-4">
                  <div className="grid grid-cols-3 gap-4">
                    {vertical.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      {audience?.items && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {audience.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {audience.items.map((item: any, index: number) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-primary/10"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes Section (Farm-to-Home specific) */}
      {outcomes?.items && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              {outcomes.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.items.map((item: any, index: number) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <CheckCircle className="w-10 h-10 mx-auto mb-4 text-secondary" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section (Farm-to-Home specific) */}
      {process?.steps && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              {process.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.steps.map((step: any, index: number) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                  {index < process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features from vertical data */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            {t("common.keyFeatures")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vertical.features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-secondary/20"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{feature}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisor / Partner Directory Section */}
      {partners && partners.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Expert Advisors & Partners
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Connect with verified professionals who can help you grow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.slice(0, 6).map((partner: any) => (
                <Card key={partner.id} className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold">{partner.name}</h3>
                      <Badge variant="outline" className="text-xs">{partner.type}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{partner.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{partner.location}</span>
                      {partner.website_url && (
                        <a href={partner.website_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                          Visit <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {partners.length > 6 && (
              <div className="text-center mt-8">
                <Link to="/resources">
                  <Button variant="outline">View All Partners</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Related Guides Section */}
      {guides && guides.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <FileText className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Guides & Resources
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Download practical guides to help you navigate your growth journey.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.slice(0, 3).map((guide: any) => (
                <Card key={guide.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-secondary/10 text-secondary border-secondary/20">{guide.category}</Badge>
                    <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{guide.description}</p>
                    {guide.file_url && (
                      <a href={guide.file_url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="w-4 h-4" /> Download
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Blog Posts Section */}
      {blogPosts && blogPosts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Related Insights
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Latest articles and thought leadership relevant to your journey.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post: any) => (
                <Link key={post.id || post.slug} to={`/blog/${post.slug || post.id}`}>
                  <Card className="hover:shadow-lg transition-shadow h-full cursor-pointer group">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">{post.category}</Badge>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-3">{post.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/blog">
                <Button variant="outline">View All Articles</Button>
              </Link>
            </div>
          </div>
        </section>
      )}


      {faq?.items && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold">{faq.title}</h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faq.items.map((item: any, index: number) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {cta && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {cta.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {cta.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  {cta.button}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ServicePage;
