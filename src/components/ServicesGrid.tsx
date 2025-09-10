import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Globe, Clock, Star, TrendingUp, Users,
  Stethoscope, Brain, Heart, Activity, Zap, Shield
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  localAvailable: boolean;
  globalAvailable: boolean;
  rating: number;
  price: string;
}

const services: Service[] = [
  {
    id: "1",
    title: "Sports Injury Treatment",
    description: "Expert diagnosis and treatment for sports-related injuries",
    icon: Activity,
    category: "Sports Medicine",
    localAvailable: true,
    globalAvailable: true,
    rating: 4.9,
    price: "From $150"
  },
  {
    id: "2",
    title: "Performance Analytics",
    description: "Advanced biomechanical analysis and performance optimization",
    icon: TrendingUp,
    category: "Fitness & Performance",
    localAvailable: true,
    globalAvailable: false,
    rating: 4.8,
    price: "From $300"
  },
  {
    id: "3",
    title: "Telemedicine Consultation",
    description: "Connect with specialists worldwide for expert medical advice",
    icon: Globe,
    category: "Health & Wellness",
    localAvailable: false,
    globalAvailable: true,
    rating: 4.7,
    price: "From $80"
  },
  {
    id: "4",
    title: "Recovery Programs",
    description: "Comprehensive rehabilitation and recovery protocols",
    icon: Heart,
    category: "Sports Medicine",
    localAvailable: true,
    globalAvailable: true,
    rating: 4.9,
    price: "From $200"
  },
  {
    id: "5",
    title: "Nutrition Coaching",
    description: "Personalized nutrition plans for optimal performance",
    icon: Zap,
    category: "Fitness & Performance",
    localAvailable: true,
    globalAvailable: true,
    rating: 4.6,
    price: "From $120"
  },
  {
    id: "6",
    title: "Mental Performance",
    description: "Sports psychology and mental training programs",
    icon: Brain,
    category: "Sports Medicine",
    localAvailable: true,
    globalAvailable: true,
    rating: 4.8,
    price: "From $180"
  }
];

const ServicesGrid = () => {
  const [filter, setFilter] = useState<"all" | "local" | "global">("all");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", "Sports Medicine", "Health & Wellness", "Fitness & Performance"];
  
  const filteredServices = services.filter(service => {
    const locationMatch = 
      filter === "all" ||
      (filter === "local" && service.localAvailable) ||
      (filter === "global" && service.globalAvailable);
    
    const categoryMatch = 
      categoryFilter === "All" || 
      service.category === categoryFilter;
    
    return locationMatch && categoryMatch;
  });

  return (
    <section className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 border-primary/20 bg-primary/10 text-primary">
            Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect <span className="text-gradient">Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse services from local providers to global specialists
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {/* Location Filter */}
          <div className="flex gap-2 p-1 glass-card rounded-lg">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                filter === "all" 
                  ? "bg-primary text-white" 
                  : "hover:bg-white/10"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("local")}
              className={`px-4 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                filter === "local" 
                  ? "bg-primary text-white" 
                  : "hover:bg-white/10"
              }`}
            >
              <MapPin className="h-4 w-4" />
              Local
            </button>
            <button
              onClick={() => setFilter("global")}
              className={`px-4 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                filter === "global" 
                  ? "bg-primary text-white" 
                  : "hover:bg-white/10"
              }`}
            >
              <Globe className="h-4 w-4" />
              Global
            </button>
          </div>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 glass-card rounded-lg border-white/20 bg-transparent"
          >
            {categories.map(cat => (
              <option key={cat} value={cat} className="bg-background">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="glass-container card-hover group">
                <CardContent className="p-6">
                  {/* Icon & Badges */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      {service.localAvailable && (
                        <Badge variant="outline" className="border-primary/30">
                          <MapPin className="h-3 w-3 mr-1" />
                          Local
                        </Badge>
                      )}
                      {service.globalAvailable && (
                        <Badge variant="outline" className="border-accent/30">
                          <Globe className="h-3 w-3 mr-1" />
                          Global
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Category */}
                  <Badge className="mb-4" variant="secondary">
                    {service.category}
                  </Badge>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{service.rating}</span>
                    </div>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="tech-button">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;