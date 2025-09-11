import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Resources", href: "#resources" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const verticals = [
    { name: "Sports Medicine", href: "#sports-medicine" },
    { name: "Health & Wellness", href: "#health-wellness" },
    { name: "Fitness & Performance", href: "#fitness-performance" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-container border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-md opacity-70" />
              <div className="relative bg-gradient-to-r from-primary to-secondary rounded-lg p-2">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold font-display">
              <span className="text-gradient">Local</span>Global DE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.name === "Services" ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="glass-container border-white/20">
                    {verticals.map((vertical) => (
                      <DropdownMenuItem key={vertical.name} asChild>
                        <a href={vertical.href} className="cursor-pointer">
                          {vertical.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="tech-button">
              Jetzt starten
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Verticals */}
            <div className="mt-2 pt-2 border-t border-white/10">
              <p className="text-xs text-muted-foreground mb-2">Our Verticals</p>
              {verticals.map((vertical) => (
                <a
                  key={vertical.name}
                  href={vertical.href}
                  className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {vertical.name}
                </a>
              ))}
            </div>
            <Button className="tech-button w-full mt-4">
              Jetzt starten
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;