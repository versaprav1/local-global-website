import { useState } from "react";
import { verticals } from "@/data/verticals";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import wellnessImage from "@/assets/wellness-center.jpg";
import fitnessImage from "@/assets/fitness-center.jpg";
import heroImage from "@/assets/hero-sports-medicine.jpg";

const VerticalsSection = () => {
  const [selectedVertical, setSelectedVertical] = useState(verticals[0]);

  const verticalImages = {
    "sports-medicine": heroImage,
    "health-wellness": wellnessImage,
    "fitness-performance": fitnessImage
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 border-primary/20 bg-primary/10 text-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Three Powerful Verticals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your path to better health and performance
          </p>
        </div>

        {/* Vertical Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            return (
              <button
                key={vertical.id}
                onClick={() => setSelectedVertical(vertical)}
                className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedVertical.id === vertical.id
                    ? "text-white"
                    : "text-foreground hover:scale-105"
                }`}
              >
                {/* Active Background */}
                {selectedVertical.id === vertical.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${vertical.gradient} rounded-xl`} />
                )}
                
                {/* Glass Background for inactive */}
                {selectedVertical.id !== vertical.id && (
                  <div className="absolute inset-0 glass-card rounded-xl" />
                )}
                
                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <span>{vertical.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Vertical Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${selectedVertical.gradient} shadow-glow`}>
              {(() => {
                const Icon = selectedVertical.icon;
                return <Icon className="h-12 w-12 text-white" />;
              })()}
            </div>
            
            <h3 className="text-3xl font-bold">{selectedVertical.name}</h3>
            <p className="text-lg text-muted-foreground">{selectedVertical.description}</p>
            
            {/* Features List */}
            <ul className="space-y-3">
              {selectedVertical.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <Button className="tech-button group">
              Explore {selectedVertical.name}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={verticalImages[selectedVertical.id as keyof typeof verticalImages]} 
                alt={selectedVertical.name}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="mb-2 bg-background/90 text-foreground">
                  Featured Service
                </Badge>
                <p className="text-white font-semibold text-lg">
                  {selectedVertical.name} Excellence
                </p>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid gap-4">
            {selectedVertical.stats.map((stat, index) => (
              <Card 
                key={index} 
                className="glass-container p-6 card-hover"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  </div>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedVertical.gradient} opacity-20`} />
                </div>
              </Card>
            ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            return (
              <Card 
                key={vertical.id}
                className="glass-container p-6 card-hover cursor-pointer"
                onClick={() => setSelectedVertical(vertical)}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${vertical.gradient} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{vertical.name}</h4>
                <p className="text-muted-foreground text-sm">{vertical.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VerticalsSection;