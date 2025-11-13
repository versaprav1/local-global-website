
import { useState } from "react";
import { resources } from "@/data/resources";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ResourcesSection = () => {
  const [industryFilter, setIndustryFilter] = useState("All Industries");
  
  // Get unique categories from resources
  const allCategories = ["All Services"];
  resources.forEach(resource => {
    if (resource.industries && Array.isArray(resource.industries)) {
      resource.industries.forEach(category => {
        if (category !== "All Services" && !allCategories.includes(category)) {
          allCategories.push(category);
        }
      });
    }
  });
  
  // Filter resources based on selected category
  const filteredResources = resources.filter(resource =>
    industryFilter === "All Services" || 
    resource.industries.includes(industryFilter) || 
    resource.industries.includes("All Services")
  );

  return (
    <section id="resources" className="py-16 md:py-24 bg-gradient-to-b from-background to-earth-50/70 dark:from-background dark:to-earth-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">Service Ecosystem</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Healthcare Platform</h2>
          <p className="text-muted-foreground text-lg">
            Access integrated services, tools, and support for seamless healthcare delivery from booking to recovery.
          </p>
        </div>
        
        <div className="max-w-xs mx-auto mb-8">
          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              {allCategories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {filteredResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card key={resource.id} className="border card-hover h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{resource.description}</p>
                  <div className="mb-4">
                    {resource.industries.map(category => 
                      category !== "All Services" && (
                        <Badge key={category} variant="outline" className="mr-2 mb-2">{category}</Badge>
                      )
                    )}
                  </div>
                  <Button variant="ghost" className="justify-start p-0" asChild>
                    <a href={resource.link}>
                      Access Resource <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="max-w-2xl mx-auto bg-card shadow-lg rounded-xl p-8 text-center border">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Integration?</h3>
          <p className="text-muted-foreground mb-6">
            Our platform supports custom API integrations and tailored solutions for your specific healthcare needs.
          </p>
          <Button>Contact Integration Team</Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
