import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Video } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Michael Schmidt",
    role: "Professional Athlete",
    roleDe: "Profisportler",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop",
    rating: 5,
    text: "The treatment I received was exceptional. The team's expertise in sports medicine helped me recover faster than expected and get back to my training routine.",
    textDe: "Die Behandlung, die ich erhielt, war außergewöhnlich. Die Expertise des Teams in Sportmedizin half mir, schneller als erwartet zu genesen und zu meinem Trainingsplan zurückzukehren.",
    videoUrl: "#",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Wagner",
    role: "Marathon Runner",
    roleDe: "Marathonläuferin",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "Outstanding care and professionalism. The specialists took time to understand my specific needs and created a personalized recovery plan that worked perfectly.",
    textDe: "Hervorragende Betreuung und Professionalität. Die Spezialisten nahmen sich Zeit, meine spezifischen Bedürfnisse zu verstehen und erstellten einen personalisierten Genesungsplan, der perfekt funktionierte.",
    verified: true
  },
  {
    id: 3,
    name: "Thomas Müller",
    role: "Fitness Enthusiast",
    roleDe: "Fitness-Enthusiast",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "I've been to several sports medicine centers, but this one stands out. The modern facilities and experienced staff made all the difference in my rehabilitation.",
    textDe: "Ich war in mehreren Sportmedizin-Zentren, aber dieses sticht heraus. Die modernen Einrichtungen und das erfahrene Personal machten den ganzen Unterschied in meiner Rehabilitation.",
    videoUrl: "#",
    verified: true
  },
  {
    id: 4,
    name: "Anna Fischer",
    role: "Yoga Instructor",
    roleDe: "Yogalehrerin",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    rating: 5,
    text: "The holistic approach to treatment here is remarkable. They don't just treat symptoms but focus on overall wellness and long-term health.",
    textDe: "Der ganzheitliche Behandlungsansatz hier ist bemerkenswert. Sie behandeln nicht nur Symptome, sondern konzentrieren sich auf allgemeines Wohlbefinden und langfristige Gesundheit.",
    verified: true
  }
];

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "de" ? "Was unsere Patienten sagen" : "What Our Patients Say"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "de" 
              ? "Echte Geschichten von echten Menschen, die ihre Gesundheitsziele mit uns erreicht haben"
              : "Real stories from real people who achieved their health goals with us"}
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary mb-6 opacity-50" />
              
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-primary/20"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-semibold">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    {testimonials[activeTestimonial].verified && (
                      <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        ✓ {language === "de" ? "Verifiziert" : "Verified"}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">
                    {language === "de" 
                      ? testimonials[activeTestimonial].roleDe 
                      : testimonials[activeTestimonial].role}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                {testimonials[activeTestimonial].videoUrl && (
                  <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                    <Video className="h-5 w-5" />
                    <span>{language === "de" ? "Video ansehen" : "Watch Video"}</span>
                  </button>
                )}
              </div>

              <blockquote className="text-lg md:text-xl leading-relaxed">
                {language === "de" 
                  ? testimonials[activeTestimonial].textDe 
                  : testimonials[activeTestimonial].text}
              </blockquote>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`group relative overflow-hidden rounded-lg transition-all ${
                activeTestimonial === index 
                  ? "ring-4 ring-primary scale-105" 
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                <div className="text-white text-left">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-white text-white" />
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5.0</div>
            <p className="text-sm text-muted-foreground">
              {language === "de" ? "Durchschnittliche Bewertung" : "Average Rating"}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
            <p className="text-sm text-muted-foreground">
              {language === "de" ? "Zufriedene Patienten" : "Happy Patients"}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-sm text-muted-foreground">
              {language === "de" ? "Erfolgsrate" : "Success Rate"}
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-sm text-muted-foreground">
              {language === "de" ? "Jahre Erfahrung" : "Years Experience"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
