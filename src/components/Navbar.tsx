
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-earth-500 to-ocean-600"></div>
            <span className="text-xl font-display font-bold text-earth-800 dark:text-earth-200">
              Local<span className="text-ocean-600">Global</span>
            </span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#producers" className="text-sm font-medium hover:text-primary transition-colors">
              Producers
            </a>
            <a href="#opportunities" className="text-sm font-medium hover:text-primary transition-colors">
              Opportunities
            </a>
            <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors">
              Resources
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Connect
            </a>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile menu button - using Sheet component for better mobile experience */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[300px] pt-12">
              <div className="flex flex-col space-y-4">
                <a href="#producers" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Producers
                </a>
                <a href="#opportunities" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Opportunities
                </a>
                <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Resources
                </a>
                <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors py-2">
                  Connect
                </a>
                <div className="pt-4 flex flex-col space-y-3">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                  <Button size="sm">Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
