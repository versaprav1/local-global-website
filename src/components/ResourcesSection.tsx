
import { useState } from "react";
import { resources } from "@/data/resources";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ResourcesSection = () => {
  const [industryFilter, setIndustryFilter] = useState("All Industries");
  
  // Get unique industries from resources
  const allIndustries = ["All Industries"];
  resources.forEach(resource => {
    if (resource.industries && Array.isArray(resource.industries)) {
      resource.industries.forEach(industry => {
        if (industry !== "All Industries" && !allIndustries.includes(industry)) {
          allIndustries.push(industry);
        }
      });
    }
  });
  
  // Filter resources based on selected industry
  const filteredResources = resources.filter(resource =>
    industryFilter === "All Industries" || 
    resource.industries.includes(industryFilter) || 
    resource.industries.includes("All Industries")
  );

  return (
    <section id="resources" className="py-16 md:py-24 bg-gradient-to-b from-background to-earth-50/70 dark:from-background dark:to-earth-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">Producer Resources</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools for Your Growth Journey</h2>
          <p className="text-muted-foreground text-lg">
            Access guides, tools, and support to help you expand from local to global markets, regardless of your industry.
          </p>
        </div>
        
        <div className="max-w-xs mx-auto mb-8">
          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by Industry" />
            </SelectTrigger>
            <SelectContent>
              {allIndustries.map(industry => (
                <SelectItem key={industry} value={industry}>{industry}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                    {resource.industries.map(industry => 
                      industry !== "All Industries" && (
                        <Badge key={industry} variant="outline" className="mr-2 mb-2">{industry}</Badge>
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
          <h3 className="text-2xl font-bold mb-4">Not finding what you need?</h3>
          <p className="text-muted-foreground mb-6">
            Our team of experts is ready to provide personalized guidance for your specific industry needs.
          </p>
          <Button>Schedule a Consultation</Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
