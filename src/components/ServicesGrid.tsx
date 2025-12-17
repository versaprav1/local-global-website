import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Globe, Star, TrendingUp, Users,
  Sprout, Repeat, ShoppingBag, Briefcase, Leaf, Package
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
    title: "Farm-to-Home Delivery",
    description: "Fresh produce delivered directly from local farmers to your doorstep",
    icon: ShoppingBag,
    category: "Marketplace",
    localAvailable: true,
    globalAvailable: false,
    rating: 4.9,
    price: "From €15/week"
  },
  {
    id: "2",
    title: "Urban Garden Starter Kit",
    description: "Everything you need to start growing food on your balcony or small space",
    icon: Sprout,
    category: "Urban Gardening",
    localAvailable: true,
    globalAvailable: true,
    rating: 4.8,
    price: "From €45"
  },
  {
    id: "3",
    title: "Community Exchange Hub",
    description: "Trade goods, skills, and services with neighbors in your community",
    icon: Repeat,
    category: "Barter & Exchange",
    localAvailable: true,
    globalAvailable: false,
    rating: 4.7,
    price: "Free"
  },
  {
    id: "4",
    title: "Youth Freelance Connect",
    description: "Platform for students to offer skills and earn while learning",
    icon: Briefcase,
    category: "Youth Opportunities",
    localAvailable: true,
    globalAvailable: true,
    rating: 4.9,
    price: "Free to join"
  },
  {
    id: "5",
    title: "Sustainable Supplies",
    description: "Eco-friendly products and supplies for sustainable living",
    icon: Leaf,
    category: "Marketplace",
    localAvailable: true,
    globalAvailable: true,
    rating: 4.6,
    price: "Varies"
  },
  {
    id: "6",
    title: "Local Producer Network",
    description: "Connect with artisans and small producers in your region",
    icon: Package,
    category: "Marketplace",
    localAvailable: true,
    globalAvailable: false,
    rating: 4.8,
    price: "Free access"
  }
];

const ServicesGrid = () => {
  const [filter, setFilter] = useState<"all" | "local" | "global">("all");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", "Marketplace", "Urban Gardening", "Barter & Exchange", "Youth Opportunities"];
  
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
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sustainable <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover services that connect local communities with sustainable opportunities
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* Location Filter */}
          <div className="flex gap-2 p-1 glass-card rounded-lg w-full sm:w-auto justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                filter === "all" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted/50"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("local")}
              className={`px-4 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                filter === "local" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted/50"
              }`}
            >
              <MapPin className="h-4 w-4" />
              Local
            </button>
            <button
              onClick={() => setFilter("global")}
              className={`px-4 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                filter === "global" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted/50"
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
            className="w-full sm:w-auto px-4 py-2 glass-card rounded-lg border-border bg-background"
          >
            {categories.map(cat => (
              <option key={cat} value={cat} className="bg-background">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="glass-container card-hover group">
                <CardContent className="p-6">
                  {/* Icon & Badges */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-accent">
                      <Icon className="h-6 w-6 text-primary-foreground" />
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
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
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
          <Button className="btn-primary">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;