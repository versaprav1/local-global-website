import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, MapPin, Sparkles, Zap, Shield, Users } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { icon: MapPin, text: "Local First" },
    { icon: Globe, text: "Global Reach" },
    { icon: Shield, text: "Verified Services" },
    { icon: Users, text: "10M+ Users" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-30" />
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-primary rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Parallax Elements */}
      <div 
        className="absolute top-20 left-10 glass-card p-4 rounded-2xl floating"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Zap className="h-8 w-8 text-accent" />
      </div>
      
      <div 
        className="absolute bottom-20 right-10 glass-card p-4 rounded-2xl floating"
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)`,
          animationDelay: '2s'
        }}
      >
        <Sparkles className="h-8 w-8 text-primary" />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/10 text-primary">
            <Sparkles className="h-3 w-3 mr-2" />
            AI-Powered Platform
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Connect Locally,</span>
            <br />
            <span className="text-foreground">Reach Globally</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your gateway to unlimited resources, services, and opportunities. 
            From your neighborhood to the world.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="tech-button group text-lg px-8 py-6"
            >
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-card hover:bg-white/20 dark:hover:bg-white/10 text-lg px-8 py-6"
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 justify-center">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card px-4 py-2 rounded-full flex items-center gap-2 shimmer"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Interactive 3D Card Preview */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
          <div className="relative glass-container rounded-2xl p-8 max-w-2xl mx-auto card-hover">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="h-2 bg-primary/20 rounded-full shimmer" />
                <div className="h-2 bg-secondary/20 rounded-full w-3/4 shimmer" style={{ animationDelay: '0.5s' }} />
                <div className="h-2 bg-accent/20 rounded-full w-1/2 shimmer" style={{ animationDelay: '1s' }} />
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg pulse-glow" />
                <div className="h-2 bg-muted rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 floating">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;