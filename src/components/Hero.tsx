
import { ArrowRight, Globe, Map, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">
              CONNECTING LOCAL PRODUCERS TO GLOBAL MARKETS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              From <span className="gradient-text">Local</span> Roots to{" "}
              <span className="gradient-text">Global</span> Markets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Empowering producers with resources, connections, and opportunities 
              to thrive locally before expanding globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                Find Opportunities <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Join as Producer
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-earth-100 dark:bg-earth-900/50 mr-4">
                  <Map className="h-5 w-5 text-earth-600" />
                </div>
                <div>
                  <p className="text-xl font-bold">1200+</p>
                  <p className="text-sm text-muted-foreground">Local Producers</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-ocean-100 dark:bg-ocean-900/50 mr-4">
                  <Globe className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <p className="text-xl font-bold">85+</p>
                  <p className="text-sm text-muted-foreground">Global Markets</p>
                </div>
              </div>
              <div className="flex items-center col-span-2 md:col-span-1 mt-6 md:mt-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-soil-100 dark:bg-soil-900/50 mr-4">
                  <TrendingUp className="h-5 w-5 text-soil-600" />
                </div>
                <div>
                  <p className="text-xl font-bold">42%</p>
                  <p className="text-sm text-muted-foreground">Growth Rate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <div className="aspect-square rounded-3xl overflow-hidden border shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=800" 
                  alt="Local producer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-bold">Local Farm Collectives</h3>
                  <p className="text-white/80 text-sm">Sustainable farming practices</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-ocean-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/3 -left-16 w-48 h-48 bg-soil-400/20 rounded-full filter blur-2xl"></div>
          </div>
        </div>
      </div>
      
      <div className="container px-4 mx-auto mt-16 md:mt-32">
        <div className="border-t pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="https://placeholder.pics/svg/120x60/DEDEDE/555555/partner" alt="Partner Logo" className="h-12 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            <div className="text-center">
              <img src="https://placeholder.pics/svg/120x60/DEDEDE/555555/partner" alt="Partner Logo" className="h-12 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            <div className="text-center">
              <img src="https://placeholder.pics/svg/120x60/DEDEDE/555555/partner" alt="Partner Logo" className="h-12 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            <div className="text-center">
              <img src="https://placeholder.pics/svg/120x60/DEDEDE/555555/partner" alt="Partner Logo" className="h-12 mx-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
