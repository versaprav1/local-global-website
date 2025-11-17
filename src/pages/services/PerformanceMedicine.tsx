import Navbar from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Activity, CheckCircle, TrendingUp, Users, Award, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const PerformanceMedicine = () => {
  const { t } = useLanguage();

  const targetAudiences = [
    {
      title: "Elite Athletes",
      description: "Professional and collegiate athletes recovering from sports injuries",
      icon: Activity
    },
    {
      title: "Professional Teams",
      description: "Team medical staff seeking advanced recovery protocols",
      icon: Users
    },
    {
      title: "Weekend Warriors",
      description: "Active individuals with sports-related injuries",
      icon: TrendingUp
    },
    {
      title: "Post-Surgery Patients",
      description: "Athletes requiring rehabilitation after surgical procedures",
      icon: Award
    }
  ];

  const outcomes = [
    { metric: "40%", label: "Faster Recovery Times", description: "Return to sport significantly quicker than traditional methods" },
    { metric: "85%", label: "Lower Re-injury Risk", description: "Comprehensive approach reduces likelihood of repeat injuries" },
    { metric: "96%", label: "Success Rate", description: "Athletes successfully return to pre-injury performance levels" },
    { metric: "10,000+", label: "Athletes Served", description: "Proven track record across multiple sports and injury types" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "Comprehensive injury evaluation with movement analysis and diagnostic imaging review",
      duration: "60-90 minutes"
    },
    {
      step: 2,
      title: "Custom Treatment Plan",
      description: "Personalized recovery protocol with clear milestones and timeline",
      duration: "Ongoing"
    },
    {
      step: 3,
      title: "Active Treatment",
      description: "Hands-on therapy combined with performance training and monitoring",
      duration: "6-16 weeks"
    },
    {
      step: 4,
      title: "Return to Sport",
      description: "Gradual progression with ongoing monitoring and injury prevention strategies",
      duration: "2-4 weeks"
    }
  ];

  const caseStudies = [
    {
      title: "Professional Soccer Player - ACL Recovery",
      sport: "Soccer",
      injury: "ACL Tear",
      timeline: "6 months to full return",
      outcome: "Returned to starting position, exceeded pre-injury performance metrics",
      metrics: { before: "12 months typical", after: "6 months achieved" }
    },
    {
      title: "Marathon Runner - Stress Fracture",
      sport: "Running",
      injury: "Tibial Stress Fracture",
      timeline: "3 months to racing",
      outcome: "Completed marathon 8 weeks faster than expected, PR performance",
      metrics: { before: "5 months typical", after: "3 months achieved" }
    },
    {
      title: "Basketball Player - Shoulder Injury",
      sport: "Basketball",
      injury: "Rotator Cuff Tear",
      timeline: "4 months to competition",
      outcome: "Full range of motion restored, improved shooting accuracy",
      metrics: { before: "6-8 months typical", after: "4 months achieved" }
    }
  ];

  const testimonials = [
    {
      name: "Marcus Rodriguez",
      sport: "Professional Soccer",
      rating: 5,
      quote: "After my ACL tear, I thought my career was over. The performance medicine team not only got me back on the field but helped me become stronger than before.",
      injury: "ACL Reconstruction"
    },
    {
      name: "Sarah Chen",
      sport: "Olympic Track & Field",
      rating: 5,
      quote: "The science-backed approach and personalized attention made all the difference. I'm competing at my highest level thanks to their expertise.",
      injury: "Hamstring Strain"
    },
    {
      name: "James Thompson",
      sport: "Professional Basketball",
      rating: 5,
      quote: "Every step of my recovery was carefully monitored and optimized. The team's knowledge of sports medicine is unmatched.",
      injury: "Ankle Sprain"
    }
  ];

  const faqs = [
    {
      question: "How long does recovery typically take?",
      answer: "Recovery timelines vary based on injury type and severity. Most athletes see significant improvement within 6-12 weeks, with full return to sport ranging from 3-6 months for major injuries. We provide personalized timelines during initial assessment."
    },
    {
      question: "Do you work with insurance?",
      answer: "Yes, we work with most major insurance providers. Our team will verify your coverage and help maximize your benefits. We also offer flexible payment plans for out-of-pocket expenses."
    },
    {
      question: "What makes your approach different?",
      answer: "We combine cutting-edge sports medicine with data-driven performance optimization. Every treatment plan is personalized, evidence-based, and focused on not just healing but exceeding pre-injury performance levels."
    },
    {
      question: "Can I continue training during treatment?",
      answer: "In most cases, yes. We believe in active recovery and will design modified training protocols that support healing while maintaining fitness. The specific approach depends on your injury and recovery stage."
    },
    {
      question: "What if I re-injure?",
      answer: "Re-injury prevention is core to our approach. We include comprehensive injury prevention strategies, ongoing monitoring, and long-term support to minimize re-injury risk. If re-injury occurs, you'll receive priority care."
    }
  ];

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <CommandPalette />
      <Navbar />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-background/20 text-background border-background/30">
                  Elite Sports Medicine
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-background">
                  Performance Medicine for Peak Athletic Recovery
                </h1>
                <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
                  Advanced injury recovery and performance optimization backed by sports science
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                    Book Free Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10">
                    Download Recovery Guide
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                  <div className="flex items-center gap-2 text-background/90">
                    <CheckCircle className="w-5 h-5" />
                    <span>10,000+ Athletes Served</span>
                  </div>
                  <div className="flex items-center gap-2 text-background/90">
                    <CheckCircle className="w-5 h-5" />
                    <span>96% Success Rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-background/90">
                    <CheckCircle className="w-5 h-5" />
                    <span>Medical Board Certified</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who Is This For?</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudiences.map((audience, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <audience.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                    <p className="text-muted-foreground">{audience.description}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes & Benefits */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Expected Outcomes & Benefits</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((outcome, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{outcome.metric}</div>
                    <h3 className="text-lg font-semibold mb-2">{outcome.label}</h3>
                    <p className="text-sm text-muted-foreground">{outcome.description}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Evidence & Case Studies</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="p-6">
                    <Badge className="mb-4">{study.sport}</Badge>
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm"><strong>Injury:</strong> {study.injury}</p>
                      <p className="text-sm"><strong>Timeline:</strong> {study.timeline}</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Recovery Comparison</p>
                      <p className="text-xs text-muted-foreground">Industry Average: {study.metrics.before}</p>
                      <p className="text-xs text-primary font-semibold">Our Program: {study.metrics.after}</p>
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{study.outcome}"</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Athletes Say</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.sport}</p>
                      <Badge variant="outline" className="mt-2 text-xs">{testimonial.injury}</Badge>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-background">
                  Ready to Start Your Recovery?
                </h2>
                <p className="text-xl text-background/90 mb-8">
                  Join thousands of athletes who have achieved peak performance with our proven approach
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                    Schedule Assessment
                  </Button>
                  <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10">
                    Talk to a Specialist
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PerformanceMedicine;
