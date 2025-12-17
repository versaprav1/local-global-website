import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Video } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Michael Schmidt",
    role: "Urban Gardener",
    roleDe: "Stadtgärtner",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop",
    rating: 5,
    text: "This platform transformed how I connect with local farmers. Fresh produce delivered weekly, and I've learned so much about sustainable living.",
    textDe: "Diese Plattform hat verändert, wie ich mich mit lokalen Bauern verbinde. Frische Produkte werden wöchentlich geliefert, und ich habe so viel über nachhaltiges Leben gelernt.",
    videoUrl: "#",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Wagner",
    role: "Community Leader",
    roleDe: "Gemeinschaftsleiterin",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "The barter exchange feature is amazing. I've traded my homemade preserves for gardening help, and built wonderful community connections.",
    textDe: "Die Tauschbörsen-Funktion ist fantastisch. Ich habe meine selbstgemachten Einmachprodukte gegen Gartenhilfe getauscht und wunderbare Gemeinschaftsverbindungen aufgebaut.",
    verified: true
  },
  {
    id: 3,
    name: "Thomas Müller",
    role: "Local Farmer",
    roleDe: "Lokaler Bauer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "As a small-scale farmer, this platform has been a game-changer. I can now reach customers directly and get fair prices for my organic produce.",
    textDe: "Als Kleinbauer war diese Plattform ein Gamechanger. Ich kann jetzt Kunden direkt erreichen und faire Preise für meine Bio-Produkte bekommen.",
    videoUrl: "#",
    verified: true
  },
  {
    id: 4,
    name: "Anna Fischer",
    role: "Youth Mentor",
    roleDe: "Jugendmentorin",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    rating: 5,
    text: "The youth freelancing program has helped so many young people in our community gain skills and earn income while still in school.",
    textDe: "Das Jugend-Freelancing-Programm hat so vielen jungen Menschen in unserer Gemeinschaft geholfen, Fähigkeiten zu erwerben und Einkommen zu erzielen, während sie noch zur Schule gehen.",
    verified: true
  }
];

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-24 px-4 relative overflow-hidden editorial-section">
      <div className="absolute inset-0 gradient-bg" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="tag-primary mb-6">
            {language === "de" ? "Gemeinschaftsstimmen" : "Community Voices"}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            {language === "de" ? "Was unsere Community sagt" : "What Our Community Says"}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === "de" 
              ? "Echte Geschichten von echten Menschen, die nachhaltiger leben"
              : "Real stories from real people living more sustainably"}
          </p>
          <div className="editorial-divider mt-8" />
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass-container overflow-hidden">
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
                    <h3 className="text-2xl font-display font-semibold">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    {testimonials[activeTestimonial].verified && (
                      <span className="tag-primary">
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
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`group relative overflow-hidden rounded-xl transition-all ${
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
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent flex items-end p-4">
                <div className="text-background text-left">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-background text-background" />
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
          <div className="stat-card">
            <div className="text-4xl font-display font-bold text-foreground mb-2">4.9</div>
            <p className="text-sm text-muted-foreground">
              {language === "de" ? "Durchschnittliche Bewertung" : "Average Rating"}
            </p>
          </div>
          <div className="stat-card">
            <div className="text-4xl font-display font-bold text-foreground mb-2">2,500+</div>
            <p className="text-sm text-muted-foreground">
              {language === "de" ? "Community-Mitglieder" : "Community Members"}
            </p>
          </div>
          <div className="stat-card">
            <div className="text-4xl font-display font-bold text-foreground mb-2">150+</div>
            <p className="text-sm text-muted-foreground">
              {language === "de" ? "Lokale Partner" : "Local Partners"}
            </p>
          </div>
          <div className="stat-card">
            <div className="text-4xl font-display font-bold text-foreground mb-2">100K+</div>
            <p className="text-sm text-muted-foreground">
              {language === "de" ? "Erfolgreiche Tausche" : "Successful Exchanges"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
