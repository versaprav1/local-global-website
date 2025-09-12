import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, Shield, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Center {
  id: string;
  name: string;
  type: string;
  location: string;
  distance: string;
  rating: number;
  specialties: string[];
  available: boolean;
  verified: boolean;
  image: string;
}

const centers: Center[] = [
  {
    id: "1",
    name: "Elite Sports Performance Center",
    type: "Sports Medicine",
    location: "Downtown Medical District",
    distance: "2.3 miles",
    rating: 4.9,
    specialties: ["ACL Recovery", "Biomechanics", "Athletic Training"],
    available: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "2",
    name: "Global Health & Wellness Hub",
    type: "Health & Wellness",
    location: "Westside Health Campus",
    distance: "5.1 miles",
    rating: 4.8,
    specialties: ["Preventive Care", "Holistic Health", "Telemedicine"],
    available: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "3",
    name: "Peak Performance Institute",
    type: "Fitness & Performance",
    location: "Athletic Complex East",
    distance: "3.7 miles",
    rating: 4.9,
    specialties: ["Strength Training", "Nutrition", "Recovery"],
    available: false,
    verified: true,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "4",
    name: "International Sports Medicine Clinic",
    type: "Sports Medicine",
    location: "Global Health Center",
    distance: "Global Access",
    rating: 5.0,
    specialties: ["Remote Consultation", "Second Opinion", "Elite Athletes"],
    available: true,
    verified: true,
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400"
  }
];

const TreatmentCentersSection = () => {
  const [filter, setFilter] = useState<"all" | "local" | "global">("all");
  const { t } = useLanguage();

  const filteredCenters = centers.filter(center => {
    if (filter === "all") return true;
    if (filter === "local") return center.distance !== "Global Access";
    if (filter === "global") return center.distance === "Global Access";
    return true;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 border-primary/20 bg-primary/10 text-primary">
            Treatment Centers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            World-Class <span className="text-gradient">Facilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From neighborhood clinics to global medical centers
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 glass-card rounded-lg">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === "all" 
                  ? "bg-primary text-white" 
                  : "hover:bg-white/10"
              }`}
            >
              All Centers
            </button>
            <button
              onClick={() => setFilter("local")}
              className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                filter === "local" 
                  ? "bg-primary text-white" 
                  : "hover:bg-white/10"
              }`}
            >
              <MapPin className="h-4 w-4" />
              Near Me
            </button>
            <button
              onClick={() => setFilter("global")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === "global" 
                  ? "bg-primary text-white" 
                  : "hover:bg-white/10"
              }`}
            >
              Global
            </button>
          </div>
        </div>

        {/* Centers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredCenters.map((center) => (
            <Card key={center.id} className="glass-container overflow-hidden card-hover group">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                  <img 
                    src={center.image} 
                    alt={center.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {center.verified && (
                    <div className="absolute top-2 left-2 glass-card px-2 py-1 rounded-lg flex items-center gap-1">
                      <Shield className="h-3 w-3 text-primary" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <CardContent className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{center.name}</h3>
                      <Badge variant="secondary" className="mb-2">
                        {center.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{center.rating}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{center.location}</span>
                    <span className="text-primary font-medium text-sm">• {center.distance}</span>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {center.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  {/* Availability & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className={`text-sm font-medium ${
                        center.available ? "text-green-600" : "text-orange-600"
                      }`}>
                        {center.available ? "Available Today" : "Next Available Tomorrow"}
                      </span>
                    </div>
                    <Button size="sm" variant="ghost" className="group/btn">
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="tech-button">
            Explore All Centers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentCentersSection;