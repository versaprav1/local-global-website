import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Globe, Award, MessageCircle, Calendar } from "lucide-react";

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
}

const specialists: Specialist[] = [
  {
    id: "1",
    name: "Dr. Sarah Mitchell",
    title: "Sports Medicine Physician",
    specialty: "Orthopedic Sports Medicine",
    vertical: "Sports Medicine",
    location: "New York, USA",
    isLocal: true,
    rating: 4.9,
    reviews: 342,
    experience: "15+ years",
    languages: ["English", "Spanish"],
    nextAvailable: "Today, 3:00 PM",
    consultationFee: "$250",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "2",
    name: "Dr. James Chen",
    title: "Performance Specialist",
    specialty: "Athletic Performance",
    vertical: "Fitness & Performance",
    location: "Los Angeles, USA",
    isLocal: true,
    rating: 4.8,
    reviews: 256,
    experience: "12+ years",
    languages: ["English", "Mandarin"],
    nextAvailable: "Tomorrow, 10:00 AM",
    consultationFee: "$200",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "3",
    name: "Dr. Elena Volkov",
    title: "Global Health Expert",
    specialty: "Preventive Medicine",
    vertical: "Health & Wellness",
    location: "London, UK",
    isLocal: false,
    rating: 5.0,
    reviews: 518,
    experience: "20+ years",
    languages: ["English", "Russian", "German"],
    nextAvailable: "Video Consultation Available",
    consultationFee: "$180",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "4",
    name: "Dr. Marcus Johnson",
    title: "Rehabilitation Specialist",
    specialty: "Physical Therapy",
    vertical: "Sports Medicine",
    location: "Chicago, USA",
    isLocal: true,
    rating: 4.7,
    reviews: 189,
    experience: "10+ years",
    languages: ["English", "French"],
    nextAvailable: "Today, 5:30 PM",
    consultationFee: "$175",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=200"
  }
];

const SpecialistsSection = () => {
  const [selectedVertical, setSelectedVertical] = useState("All");
  
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
                  <Button size="sm" className="text-xs tech-button">
                    Book Now
                  </Button>
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