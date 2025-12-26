import { useState } from "react";
import { blogTopics, blogCategories } from "@/data/blogTopics";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = blogTopics.filter((topic) => {
    const matchesCategory = selectedCategory === "All Topics" || topic.category === selectedCategory;
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2">Sustainability & Community</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Sustainable Living</span> Topics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore guides on sustainable living, urban gardening, local food systems, and building stronger communities.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[280px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {blogCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {filteredTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card 
                key={topic.id}
                className="glass-card group hover:shadow-lg transition-all duration-300 card-hover"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${topic.gradient} bg-opacity-10`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {topic.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-4 text-xs">
                    {topic.category}
                  </Badge>
                  <Link to={`/blog/${topic.id}`}>
                    <Button variant="ghost" className="w-full group/btn">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredTopics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No topics found. Try adjusting your search or filter.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="glass-container rounded-3xl p-8 md:p-12 text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We&apos;re constantly adding new content. Send us your topic suggestions or questions about sustainable living.
          </p>
          <Button size="lg" className="tech-button">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
