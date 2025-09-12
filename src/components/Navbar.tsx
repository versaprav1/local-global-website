import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.resources'), href: "#resources" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  const verticals = [
    { name: t('vertical.sports'), href: "#sports-medicine" },
    { name: t('vertical.wellness'), href: "#health-wellness" },
    { name: t('vertical.fitness'), href: "#fitness-performance" },
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
              link.name === t('nav.services') ? (
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

          {/* Language Toggle and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-full">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">DE</span>
              <Switch 
                checked={language === 'en'} 
                onCheckedChange={toggleLanguage}
                className="data-[state=checked]:bg-primary"
              />
              <span className="text-sm font-medium">EN</span>
            </div>
            <Button className="tech-button">
              {t('nav.cta')}
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
            <div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-full mt-4 justify-center">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">DE</span>
              <Switch 
                checked={language === 'en'} 
                onCheckedChange={toggleLanguage}
                className="data-[state=checked]:bg-primary"
              />
              <span className="text-sm font-medium">EN</span>
            </div>
            <Button className="tech-button w-full mt-4">
              {t('nav.cta')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;