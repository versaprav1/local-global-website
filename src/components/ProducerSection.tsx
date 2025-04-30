
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { producers } from "@/data/mockData";
import { CheckCircle, MapPin } from "lucide-react";

const ProducerSection = () => {
  const [viewAll, setViewAll] = useState(false);
  const displayedProducers = viewAll ? producers : producers.slice(0, 3);

  return (
    <section id="producers" className="py-16 md:py-24 bg-earth-50/50 dark:bg-earth-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">Meet Our Producers</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Local Producers with Global Potential</h2>
          <p className="text-muted-foreground text-lg">
            Discover remarkable producers in your region making quality products with sustainable practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProducers.map((producer) => (
            <Card key={producer.id} className="overflow-hidden border card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={producer.image}
                  alt={producer.name}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-sm text-muted-foreground">{producer.location}</span>
                  </div>
                  {producer.isVerified && (
                    <div className="flex items-center text-primary">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{producer.name}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{producer.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{producer.specialty}</Badge>
                  <Button variant="ghost" size="sm">View Profile</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!viewAll && (
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => setViewAll(true)}
              className="rounded-full px-8"
            >
              View All Producers
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProducerSection;
