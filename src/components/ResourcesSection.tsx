import { useState } from "react";
import { resources } from "@/data/resources";
import { useNews, newsCategories } from "@/hooks/useNews";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, ExternalLink, Newspaper, Clock, 
  Download, FileText, MapPin, Video, Link2,
  BookOpen, Users, PlayCircle
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const ResourcesSection = () => {
  const [industryFilter, setIndustryFilter] = useState("All Services");
  const [newsFilter, setNewsFilter] = useState("All");
  const { data: newsArticles = [], isLoading: newsLoading } = useNews(newsFilter);
  
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
  
  const filteredResources = resources.filter(resource =>
    industryFilter === "All Services" || 
    resource.industries.includes(industryFilter) || 
    resource.industries.includes("All Services")
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  // Placeholder data for guides
  const guides = [
    { id: "1", title: "Getting Started with Urban Gardening", description: "A complete beginner's guide to growing food in small spaces.", type: "PDF", category: "Urban Gardening" },
    { id: "2", title: "Barter Exchange Handbook", description: "How to set up and participate in local barter networks.", type: "PDF", category: "Barter & Exchange" },
    { id: "3", title: "Farm-to-Home Sourcing Checklist", description: "Step-by-step checklist for sourcing produce directly from local farms.", type: "Checklist", category: "Farm to Home" },
    { id: "4", title: "Youth Freelancing Starter Kit", description: "Everything young entrepreneurs need to launch their first project.", type: "PDF", category: "Youth Freelancing" },
    { id: "5", title: "Sustainable Living Assessment", description: "Evaluate your household's sustainability footprint.", type: "Worksheet", category: "Sustainable Living" },
    { id: "6", title: "Local Economy Impact Report 2025", description: "Data and insights on how local ecosystems strengthen communities.", type: "Report", category: "M&A Ecosystem" },
  ];

  // Placeholder data for partner directory
  const partners = [
    { id: "1", name: "Grüner Markt Berlin", type: "Farmers Market", location: "Berlin, Germany", description: "Weekly organic farmers market with 40+ local producers.", vertical: "Farm to Home" },
    { id: "2", name: "StadtGarten Collective", type: "Community Garden", location: "Munich, Germany", description: "Urban gardening collective with shared plots and workshops.", vertical: "Urban Gardening" },
    { id: "3", name: "TauschRing Hamburg", type: "Exchange Network", location: "Hamburg, Germany", description: "Active barter network with 200+ members exchanging goods and services.", vertical: "Barter & Exchange" },
    { id: "4", name: "JugendHub Frankfurt", type: "Youth Center", location: "Frankfurt, Germany", description: "Youth entrepreneurship hub offering mentoring and workspace.", vertical: "Youth Freelancing" },
    { id: "5", name: "BioHof Sonnenschein", type: "Organic Farm", location: "Brandenburg, Germany", description: "Family-run organic farm offering CSA subscriptions and farm tours.", vertical: "Farm to Home" },
    { id: "6", name: "Circular Economy Lab", type: "Innovation Hub", location: "Cologne, Germany", description: "Research and incubation space for circular economy startups.", vertical: "M&A Ecosystem" },
  ];

  // Placeholder data for videos
  const videos = [
    { id: "1", title: "How to Start a Balcony Garden", duration: "12 min", category: "Urban Gardening", description: "Step-by-step guide to setting up a productive balcony garden." },
    { id: "2", title: "Understanding Local Food Systems", duration: "18 min", category: "Farm to Home", description: "Why local food networks matter and how to participate." },
    { id: "3", title: "Barter Economy Explained", duration: "8 min", category: "Barter & Exchange", description: "The basics of exchange-based economics in modern communities." },
    { id: "4", title: "Youth Freelancing: First Steps", duration: "15 min", category: "Youth Freelancing", description: "How young people can start earning through local and global gigs." },
    { id: "5", title: "Building a Sustainable Home", duration: "22 min", category: "Sustainable Living", description: "Practical changes to make your home more eco-friendly." },
    { id: "6", title: "Mergers & Acquisitions for Small Business", duration: "20 min", category: "M&A Ecosystem", description: "Scaling local businesses through strategic partnerships." },
  ];

  return (
    <section id="resources" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">Community Resources</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Living Toolkit</h1>
          <p className="text-muted-foreground text-lg">
            Access integrated tools, guides, and community support for sustainable living, local trading, and eco-conscious growth.
          </p>
        </div>

        <Tabs defaultValue="resources" className="w-full">
          <TabsList className="flex w-full max-w-3xl mx-auto mb-8 flex-wrap h-auto gap-1 p-1">
            <TabsTrigger value="resources" className="flex items-center gap-1.5 text-xs sm:text-sm">
              <Link2 className="h-3.5 w-3.5" /> Tools & Links
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-1.5 text-xs sm:text-sm">
              <Download className="h-3.5 w-3.5" /> Guides
            </TabsTrigger>
            <TabsTrigger value="partners" className="flex items-center gap-1.5 text-xs sm:text-sm">
              <MapPin className="h-3.5 w-3.5" /> Partners
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-1.5 text-xs sm:text-sm">
              <Video className="h-3.5 w-3.5" /> Videos
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-1.5 text-xs sm:text-sm">
              <Newspaper className="h-3.5 w-3.5" /> News
            </TabsTrigger>
          </TabsList>

          {/* Tools & Links Tab */}
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

          {/* Guides & Downloads Tab */}
          <TabsContent value="guides">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-2">Coming Soon</Badge>
              <p className="text-sm text-muted-foreground">Downloadable guides and resources — available for download once published.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {guides.map((guide) => (
                <Card key={guide.id} className="border h-full opacity-80">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">{guide.type}</Badge>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{guide.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{guide.description}</p>
                    <Badge variant="secondary" className="text-xs mb-3">{guide.category}</Badge>
                    <Button variant="outline" size="sm" disabled className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download (Coming Soon)
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Partner Directory Tab */}
          <TabsContent value="partners">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-2">Growing Network</Badge>
              <p className="text-sm text-muted-foreground">Discover local partners across Germany. Want to be listed? <a href="/partners" className="text-primary underline">Apply here</a>.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {partners.map((partner) => (
                <Card key={partner.id} className="border card-hover h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">{partner.type}</Badge>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{partner.name}</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
                      <MapPin className="h-3 w-3" /> {partner.location}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{partner.description}</p>
                    <Badge variant="secondary" className="text-xs">{partner.vertical}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Video Library Tab */}
          <TabsContent value="videos">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-2">Coming Soon</Badge>
              <p className="text-sm text-muted-foreground">Video tutorials and webinars on sustainable living topics.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
              {videos.map((video) => (
                <Card key={video.id} className="border h-full opacity-80">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="relative mb-4 rounded-lg bg-muted aspect-video flex items-center justify-center">
                      <PlayCircle className="h-12 w-12 text-muted-foreground/50" />
                      <span className="absolute bottom-2 right-2 text-xs bg-background/80 px-2 py-0.5 rounded">{video.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{video.description}</p>
                    <Badge variant="secondary" className="text-xs">{video.category}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Latest News Tab */}
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

            {newsLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="border h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-3">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                      <Skeleton className="h-5 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-3/4 mb-4" />
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
                {newsArticles.map((news) => (
                  <Card key={news.id} className="border card-hover h-full group">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">{news.category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDate(news.date || news.published_at || "")}
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
                          <a href={news.source_url || news.sourceUrl} target="_blank" rel="noopener noreferrer">
                            Read More <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {!newsLoading && newsArticles.length === 0 && (
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
          <Link to="/contact">
            <Button>Contact Our Team</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
