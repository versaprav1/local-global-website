import Navbar from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, CheckCircle, Sparkles, Users, Award, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const RecoveryWellness = () => {
  const { t } = useLanguage();

  const targetAudiences = [
    {
      title: "Professional Athletes",
      description: "Elite performers seeking optimal recovery between training sessions",
      icon: Award
    },
    {
      title: "Active Individuals",
      description: "Fitness enthusiasts looking to enhance recovery and prevent burnout",
      icon: Users
    },
    {
      title: "Injury Recovery",
      description: "Athletes recovering from injuries needing comprehensive wellness support",
      icon: Heart
    },
    {
      title: "Performance Optimizers",
      description: "Those seeking to maximize athletic longevity and career sustainability",
      icon: Sparkles
    }
  ];

  const outcomes = [
    { metric: "43%", label: "Performance Gain", description: "Average improvement in recovery metrics and performance indicators" },
    { metric: "60%", label: "Better Sleep Quality", description: "Improved sleep patterns leading to enhanced recovery" },
    { metric: "15,000+", label: "Recovery Centers", description: "Global network of certified wellness and recovery facilities" },
    { metric: "89%", label: "Reduced Fatigue", description: "Athletes report significantly lower fatigue levels" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Recovery Assessment",
      description: "Comprehensive evaluation of current recovery practices, sleep patterns, and wellness markers",
      duration: "45-60 minutes"
    },
    {
      step: 2,
      title: "Personalized Protocol",
      description: "Custom recovery plan including nutrition, sleep optimization, and mental wellness strategies",
      duration: "Ongoing"
    },
    {
      step: 3,
      title: "Active Recovery Programs",
      description: "Guided sessions including mobility work, breathwork, and evidence-based recovery modalities",
      duration: "4-12 weeks"
    },
    {
      step: 4,
      title: "Longevity Planning",
      description: "Long-term wellness strategies for sustained performance and injury prevention",
      duration: "Continuous"
    }
  ];

  const caseStudies = [
    {
      title: "Professional Cyclist - Overtraining Recovery",
      sport: "Cycling",
      challenge: "Chronic Fatigue & Performance Plateau",
      timeline: "8 weeks to full recovery",
      outcome: "Achieved personal best times, sustained peak performance throughout season",
      metrics: { before: "Constant fatigue", after: "Optimal energy levels" }
    },
    {
      title: "MMA Fighter - Pre-Competition Preparation",
      sport: "Mixed Martial Arts",
      challenge: "Weight Management & Recovery",
      timeline: "12 weeks program",
      outcome: "Made weight comfortably, peak performance on fight night",
      metrics: { before: "Struggling with cuts", after: "Optimal weight & energy" }
    },
    {
      title: "Tennis Player - Career Longevity",
      sport: "Professional Tennis",
      challenge: "Chronic Inflammation & Joint Pain",
      timeline: "Ongoing program",
      outcome: "Extended career by 3 years, playing pain-free at high level",
      metrics: { before: "Daily pain management", after: "Minimal inflammation" }
    }
  ];

  const testimonials = [
    {
      name: "Alexandra Petrov",
      sport: "Professional Triathlete",
      rating: 5,
      quote: "The recovery protocols transformed my training. I can train harder because I recover smarter. Sleep quality alone changed everything for my performance.",
      program: "Complete Recovery System"
    },
    {
      name: "David Kim",
      sport: "Olympic Swimmer",
      rating: 5,
      quote: "After incorporating these wellness strategies, I dropped 2 seconds off my best time. Recovery is where the magic happens.",
      program: "Performance Optimization"
    },
    {
      name: "Maria Santos",
      sport: "CrossFit Competitor",
      rating: 5,
      quote: "I used to push through fatigue. Now I understand recovery is part of training. My body feels stronger and more resilient than ever.",
      program: "Active Recovery Protocol"
    }
  ];

  const faqs = [
    {
      question: "What recovery modalities do you offer?",
      answer: "We offer evidence-based recovery modalities including cryotherapy, compression therapy, infrared sauna, massage therapy, contrast therapy, breathwork sessions, and meditation guidance. Each program is customized based on your sport and recovery needs."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most athletes notice improved sleep quality within 1-2 weeks, with significant performance improvements appearing within 4-6 weeks. Long-term benefits continue to compound as recovery becomes integrated into your training routine."
    },
    {
      question: "Can recovery really improve performance?",
      answer: "Absolutely. Research shows that optimized recovery protocols can improve performance by 15-43%. Recovery is when your body adapts to training stress - without proper recovery, you're leaving gains on the table."
    },
    {
      question: "Do I need to visit a recovery center?",
      answer: "Not necessarily. While we have 15,000+ partner recovery centers worldwide, many of our protocols can be implemented at home. We provide both facility-based and at-home recovery strategies."
    },
    {
      question: "How does this integrate with my training?",
      answer: "Recovery and training should work together. We coordinate with your coaches to ensure recovery protocols complement your training plan, helping you train harder while reducing injury risk."
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
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-accent to-primary">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-background/20 text-background border-background/30">
                  Recovery & Wellness Optimization
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-background">
                  Comprehensive Recovery Systems for Peak Performance
                </h1>
                <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
                  Science-backed recovery protocols, sleep optimization, and wellness strategies for sustained athletic excellence
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-background text-secondary hover:bg-background/90">
                    Start Recovery Assessment
                  </Button>
                  <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10">
                    View Recovery Programs
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                  <div className="flex items-center gap-2 text-background/90">
                    <CheckCircle className="w-5 h-5" />
                    <span>15,000+ Recovery Centers</span>
                  </div>
                  <div className="flex items-center gap-2 text-background/90">
                    <CheckCircle className="w-5 h-5" />
                    <span>43% Performance Gain</span>
                  </div>
                  <div className="flex items-center gap-2 text-background/90">
                    <CheckCircle className="w-5 h-5" />
                    <span>Science-Backed Methods</span>
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
                    <audience.icon className="w-12 h-12 text-secondary mb-4" />
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
                    <div className="text-4xl font-bold text-secondary mb-2">{outcome.metric}</div>
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
                      <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xl">
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
                      <p className="text-sm"><strong>Challenge:</strong> {study.challenge}</p>
                      <p className="text-sm"><strong>Timeline:</strong> {study.timeline}</p>
                    </div>
                    <div className="bg-secondary/10 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Recovery Transformation</p>
                      <p className="text-xs text-muted-foreground">Before: {study.metrics.before}</p>
                      <p className="text-xs text-secondary font-semibold">After: {study.metrics.after}</p>
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
                      <Badge variant="outline" className="mt-2 text-xs">{testimonial.program}</Badge>
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
        <section className="py-20 bg-gradient-to-br from-secondary to-accent">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-background">
                  Ready to Optimize Your Recovery?
                </h2>
                <p className="text-xl text-background/90 mb-8">
                  Join elite athletes who prioritize recovery as the secret weapon for sustained performance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-background text-secondary hover:bg-background/90">
                    Schedule Assessment
                  </Button>
                  <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10">
                    Explore Programs
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

export default RecoveryWellness;
