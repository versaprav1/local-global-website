import { useParams, Link } from "react-router-dom";
import { blogTopics } from "@/data/blogTopics";
import Navbar from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { id } = useParams();
  const topic = blogTopics.find((t) => t.id === id);

  if (!topic) {
    return <NotFound />;
  }

  const Icon = topic.icon;
  const relatedTopics = blogTopics
    .filter((t) => t.category === topic.category && t.id !== topic.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <CommandPalette />
      <Navbar />
      
      <main id="main-content" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Topics
            </Button>
          </Link>

          {/* Header */}
          <div className="glass-container rounded-3xl p-8 md:p-12 mb-8">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${topic.gradient} mb-6`}>
              <Icon className="h-12 w-12 text-white" />
            </div>
            <Badge className="mb-4">{topic.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              {topic.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {topic.description}
            </p>
          </div>

          {/* Content */}
          {topic.content ? (
            <div className="space-y-8">
              {/* Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {topic.content.overview}
                  </p>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {topic.content.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* How To / Approaches */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">How To Get Started</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {topic.content.approaches.map((approach, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{approach}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="glass-card">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground text-lg">
                  Detailed content for this topic is coming soon. Check back later for comprehensive information.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Related Topics */}
          {relatedTopics.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8">Related Topics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedTopics.map((relatedTopic) => {
                  const RelatedIcon = relatedTopic.icon;
                  return (
                    <Card key={relatedTopic.id} className="glass-card group card-hover">
                      <CardHeader>
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${relatedTopic.gradient} mb-3`}>
                          <RelatedIcon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {relatedTopic.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {relatedTopic.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link to={`/blog/${relatedTopic.id}`}>
                          <Button variant="ghost" size="sm" className="w-full group/btn">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="glass-container rounded-3xl p-8 md:p-12 text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Explore More?
            </h2>
            <p className="text-muted-foreground mb-6">
              Discover our complete library of sustainability and community topics.
            </p>
            <Link to="/blog">
              <Button size="lg" className="tech-button">
                Browse All Topics
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
