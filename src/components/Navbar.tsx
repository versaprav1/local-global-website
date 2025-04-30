
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <a href="#producers" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Producers
            </a>
            <a href="#opportunities" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Opportunities
            </a>
            <a href="#resources" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Resources
            </a>
            <a href="#contact" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Connect
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
