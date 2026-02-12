
import { useState } from "react";
import { resources } from "@/data/resources";
import { latestNews, newsCategories } from "@/data/latestNews";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Newspaper, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResourcesSection = () => {
  const [industryFilter, setIndustryFilter] = useState("All Services");
  const [newsFilter, setNewsFilter] = useState("All");
  
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

  // Filter news based on selected category
  const filteredNews = latestNews.filter(news =>
    newsFilter === "All" || news.category === newsFilter
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  return (
    <section id="resources" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">Community Resources</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Living Toolkit</h2>
          <p className="text-muted-foreground text-lg">
            Access integrated tools, guides, and community support for sustainable living, local trading, and eco-conscious growth.
          </p>
        </div>

        <Tabs defaultValue="resources" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" /> Resources
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" /> Latest News
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resources">
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
          </TabsContent>

          <TabsContent value="news">
            <div className="max-w-xs mx-auto mb-8">
              <Select value={newsFilter} onValueChange={setNewsFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by Topic" />
                </SelectTrigger>
                <SelectContent>
                  {newsCategories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {filteredNews.map((news) => (
                <Card key={news.id} className="border card-hover h-full group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">{news.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatDate(news.date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                      {news.summary}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground font-medium">{news.source}</span>
                      <Button variant="ghost" size="sm" className="p-0 h-auto" asChild>
                        <a href={news.sourceUrl} target="_blank" rel="noopener noreferrer">
                          Read More <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Newspaper className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No news articles found for this category.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="max-w-2xl mx-auto bg-card shadow-lg rounded-xl p-8 text-center border">
          <h3 className="text-2xl font-bold mb-4">Need Custom Support?</h3>
          <p className="text-muted-foreground mb-6">
            Our platform supports custom integrations and tailored solutions for your sustainable living needs.
          </p>
          <Button>Contact Our Team</Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
