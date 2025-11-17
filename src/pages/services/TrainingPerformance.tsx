import Navbar from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dumbbell, CheckCircle, TrendingUp, Users, Award, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const TrainingPerformance = () => {
  const { t } = useLanguage();

  const targetAudiences = [
    {
      title: "Competitive Athletes",
      description: "Athletes seeking data-driven training to gain competitive edge",
      icon: Award
    },
    {
      title: "Team Sports",
      description: "Teams looking for comprehensive strength and conditioning programs",
      icon: Users
    },
    {
      title: "Individual Sport Athletes",
      description: "Runners, cyclists, swimmers seeking sport-specific performance gains",
      icon: TrendingUp
    },
    {
      title: "Aspiring Professionals",
      description: "Athletes preparing for professional or collegiate level competition",
      icon: Dumbbell
    }
  ];

  const outcomes = [
    { metric: "38%", label: "Performance Improvement", description: "Average increase in sport-specific performance metrics" },
    { metric: "25%", label: "Strength Gains", description: "Improvements in functional strength and power output" },
    { metric: "8,000+", label: "Training Facilities", description: "Access to elite training centers worldwide" },
    { metric: "20,000+", label: "Elite Coaches", description: "Certified performance coaches in our network" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Performance Baseline",
      description: "Comprehensive assessment including movement screening, strength testing, and performance metrics analysis",
      duration: "90 minutes"
    },
    {
      step: 2,
      title: "Custom Program Design",
      description: "Personalized training plan tailored to your sport, goals, and current fitness level",
      duration: "Ongoing"
    },
    {
      step: 3,
      title: "Structured Training Phases",
      description: "Periodized program with progressive overload, targeting strength, power, and movement quality",
      duration: "12-16 weeks per phase"
    },
    {
      step: 4,
      title: "Continuous Optimization",
      description: "Regular testing and program adjustments based on data and performance feedback",
      duration: "Every 4-6 weeks"
    }
  ];

  const caseStudies = [
    {
      title: "High School Football Player - College Recruitment",
      sport: "Football",
      goal: "Improve Speed & Strength for Recruitment",
      timeline: "6 months program",
      outcome: "40-yard dash improved by 0.4 seconds, received D1 scholarship offers",
      metrics: { before: "5.2s 40-yard", after: "4.8s 40-yard" }
    },
    {
      title: "Distance Runner - Marathon Performance",
      sport: "Running",
      goal: "Increase Running Economy & Speed",
      timeline: "4 months training block",
      outcome: "Marathon PR improved by 12 minutes, qualified for Boston Marathon",
      metrics: { before: "3:45 marathon", after: "3:33 marathon" }
    },
    {
      title: "Volleyball Player - Vertical Jump Enhancement",
      sport: "Volleyball",
      goal: "Increase Vertical Jump & Power",
      timeline: "8 weeks explosive training",
      outcome: "Vertical jump increased 4 inches, became starting player",
      metrics: { before: "24 inch vertical", after: "28 inch vertical" }
    }
  ];

  const testimonials = [
    {
      name: "Jake Morrison",
      sport: "College Baseball",
      rating: 5,
      quote: "The data-driven approach transformed my training. I can see exactly how each workout contributes to my on-field performance. My bat speed increased 8mph in 3 months.",
      program: "Power Development"
    },
    {
      name: "Emily Watson",
      sport: "Track & Field",
      rating: 5,
      quote: "Working with elite coaches who understand sprint mechanics changed everything. I dropped my 100m time by half a second and feel more explosive than ever.",
      program: "Sprint Performance"
    },
    {
      name: "Carlos Mendez",
      sport: "Professional Soccer",
      rating: 5,
      quote: "The periodized training program helped me maintain peak performance throughout the entire season. No more hitting a wall halfway through.",
      program: "Endurance Optimization"
    }
  ];

  const faqs = [
    {
      question: "How is training personalized to my sport?",
      answer: "We analyze the specific demands of your sport - movement patterns, energy systems, and performance requirements. Training is designed to directly transfer to your sport performance, not just general fitness."
    },
    {
      question: "What data do you track?",
      answer: "We track relevant performance metrics including strength levels, power output, speed, agility, movement quality, and sport-specific KPIs. All data is used to optimize your program and show measurable progress."
    },
    {
      question: "Can I train during my competitive season?",
      answer: "Absolutely. We design in-season programs that maintain your gains without compromising recovery or competition performance. Training volume and intensity are carefully managed around your competition schedule."
    },
    {
      question: "Do I need access to special equipment?",
      answer: "While our 8,000+ partner facilities are fully equipped, we can design effective programs based on your available equipment. We'll optimize what you have access to for maximum results."
    },
    {
      question: "How quickly will I see results?",
      answer: "Initial improvements often appear within 3-4 weeks. Significant performance gains typically manifest in 8-12 weeks. Long-term development continues as you progress through training phases."
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
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-primary to-secondary">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-background/20 text-background border-background/30">
                  Elite Training Systems
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-background">
                  Data-Driven Training for Peak Athletic Performance
                </h1>
                <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
                  Personalized training plans and performance analytics that deliver measurable results
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-background text-accent hover:bg-background/90">
                    Get Performance Assessment
                  </Button>
                  <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10">
                    View Training Programs
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                  <div className="flex items-center gap-2 text-background/90">
                    <CheckCircle className="w-5 h-5" />
                    <span>8,000+ Training Facilities</span>
                  </div>
                  <div className="flex items-center gap-2 text-background/90">
                    <CheckCircle className="w-5 h-5" />
                    <span>20,000+ Elite Coaches</span>
                  </div>
                  <div className="flex items-center gap-2 text-background/90">
                    <CheckCircle className="w-5 h-5" />
                    <span>38% Average Improvement</span>
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
                    <audience.icon className="w-12 h-12 text-accent mb-4" />
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
                    <div className="text-4xl font-bold text-accent mb-2">{outcome.metric}</div>
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
                      <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">
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
                      <p className="text-sm"><strong>Goal:</strong> {study.goal}</p>
                      <p className="text-sm"><strong>Timeline:</strong> {study.timeline}</p>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Performance Metrics</p>
                      <p className="text-xs text-muted-foreground">Before: {study.metrics.before}</p>
                      <p className="text-xs text-accent font-semibold">After: {study.metrics.after}</p>
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
        <section className="py-20 bg-gradient-to-br from-accent to-primary">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-background">
                  Ready to Elevate Your Performance?
                </h2>
                <p className="text-xl text-background/90 mb-8">
                  Join thousands of athletes training smarter with data-driven performance programs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-background text-accent hover:bg-background/90">
                    Schedule Assessment
                  </Button>
                  <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10">
                    Talk to a Coach
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

export default TrainingPerformance;
