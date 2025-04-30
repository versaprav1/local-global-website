
import { useState } from "react";
import { opportunities } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Globe, MapPin } from "lucide-react";

const OpportunitySection = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredOpportunities = filter === "all" 
    ? opportunities 
    : opportunities.filter(opp => 
        filter === "local" ? opp.isLocal : !opp.isLocal
      );

  return (
    <section id="opportunities" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">Growth Opportunities</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Local to Global Opportunities</h2>
          <p className="text-muted-foreground text-lg">
            Find the right opportunities to grow your business, starting locally and expanding globally when ready.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilter("all")}>All Opportunities</TabsTrigger>
              <TabsTrigger value="local" onClick={() => setFilter("local")}>Local First</TabsTrigger>
              <TabsTrigger value="global" onClick={() => setFilter("global")}>Global Expansion</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredOpportunities.map((opportunity) => (
                <Card key={opportunity.id} className="border card-hover">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{opportunity.title}</h3>
                        <p className="text-muted-foreground">{opportunity.company}</p>
                      </div>
                      <Badge variant={opportunity.isLocal ? "default" : "secondary"}>
                        {opportunity.isLocal ? "Local" : "Global"}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-4">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-sm">{opportunity.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-sm">
                          Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {opportunity.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Badge variant={
                        opportunity.type === 'Contract' ? 'outline' : 
                        opportunity.type === 'Full-time' ? 'secondary' : 
                        'default'
                      }>
                        {opportunity.type}
                      </Badge>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="local" className="mt-0">
            {/* Content auto-filtered by state */}
          </TabsContent>
          
          <TabsContent value="global" className="mt-0">
            {/* Content auto-filtered by state */}
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button className="rounded-full px-8">
            <Globe className="mr-2 h-4 w-4" />
            Browse All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
