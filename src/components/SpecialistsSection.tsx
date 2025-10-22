import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Globe, Award, MessageCircle, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { specialists as specialistsData } from "@/data/specialists";

interface Specialist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  vertical: string;
  location: string;
  isLocal: boolean;
  rating: number;
  reviews: number;
  experience: string;
  languages: string[];
  nextAvailable: string;
  consultationFee: string;
  image: string;
  bookingPlatform?: string;
  bookingUrl?: string;
}


const specialists: Specialist[] = specialistsData.map((s) => ({
  id: String(s.id),
  name: s.name,
  title: s.title,
  specialty: s.specialty,
  vertical: "Sports Medicine",
  location: s.location,
  isLocal: /Hannover/i.test(s.location),
  rating: s.rating,
  reviews: s.reviews,
  experience: s.experience,
  languages: s.languages,
  nextAvailable: (s as any).availability,
  consultationFee: (s as any).price,
  image: s.image,
  bookingPlatform: (s as any).bookingPlatform,
  bookingUrl: (s as any).bookingUrl,
}));


const SpecialistsSection = () => {
  const [selectedVertical, setSelectedVertical] = useState("All");
  const { t } = useLanguage();
  
  const verticals = ["All", "Sports Medicine", "Health & Wellness", "Fitness & Performance"];
  
  const filteredSpecialists = specialists.filter(
    specialist => selectedVertical === "All" || specialist.vertical === selectedVertical
  );

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 gradient-bg opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 border-primary/20 bg-primary/10 text-primary">
            Expert Network
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect with <span className="text-gradient">Top Specialists</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access world-renowned experts locally and globally
          </p>
        </div>

        {/* Vertical Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {verticals.map((vertical) => (
            <button
              key={vertical}
              onClick={() => setSelectedVertical(vertical)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedVertical === vertical
                  ? "bg-primary text-white"
                  : "glass-card hover:bg-white/20"
              }`}
            >
              {vertical}
            </button>
          ))}
        </div>

        {/* Specialists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSpecialists.map((specialist) => (
            <Card key={specialist.id} className="glass-container card-hover">
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="text-center mb-4">
                  <div className="relative inline-block mb-3">
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                    />
                    {specialist.rating >= 4.8 && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-1">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg">{specialist.name}</h3>
                  <p className="text-sm text-muted-foreground">{specialist.title}</p>
                </div>

                {/* Specialty Badge */}
                <Badge className="w-full justify-center mb-3" variant="secondary">
                  {specialist.specialty}
                </Badge>

                {/* Location */}
                <div className="flex items-center justify-center gap-2 mb-3 text-sm">
                  {specialist.isLocal ? (
                    <>
                      <MapPin className="h-3 w-3 text-primary" />
                      <span className="text-muted-foreground">{specialist.location}</span>
                    </>
                  ) : (
                    <>
                      <Globe className="h-3 w-3 text-accent" />
                      <span className="text-muted-foreground">{specialist.location}</span>
                    </>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-center">
                  <div className="glass-card rounded-lg p-2">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold">{specialist.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{specialist.reviews} reviews</p>
                  </div>
                  <div className="glass-card rounded-lg p-2">
                    <p className="text-sm font-bold">{specialist.experience}</p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {specialist.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>

                {/* Availability */}
                <div className="text-center mb-4">
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {specialist.nextAvailable}
                  </p>
                  <p className="text-primary font-bold mt-1">{specialist.consultationFee}</p>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Message
                  </Button>
                  {specialist.bookingUrl ? (
                    <Button size="sm" className="text-xs tech-button" asChild>
                      <a href={specialist.bookingUrl} target="_blank" rel="noopener noreferrer">
                        {specialist.bookingPlatform ? `Book on ${specialist.bookingPlatform}` : "Book Now"}
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" className="text-xs tech-button">
                      Book Now
                    </Button>
                  )}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="glass-container rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Can't find the right specialist?</h3>
            <p className="text-muted-foreground mb-6">
              Our AI-powered matching system can help you find the perfect expert for your needs
            </p>
            <Button className="tech-button">
              Get Personalized Match
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;