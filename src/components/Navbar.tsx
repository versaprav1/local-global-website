import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, Sparkles, ChevronDown, Globe, ArrowRight,
  Store, Sprout, Repeat, Briefcase, TrendingUp,
  Home, BookOpen, Users, Info, MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  // Track scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const verticals = [
    { 
      id: "farm-to-home",
      name: t('verticals.items.farm-to-home.name'),
      description: t('verticals.items.farm-to-home.description'),
      icon: Store,
      href: "/services/farm-to-home",
      gradient: "from-primary to-secondary"
    },
    { 
      id: "urban-gardening",
      name: t('verticals.items.urban-gardening.name'),
      description: t('verticals.items.urban-gardening.description'),
      icon: Sprout,
      href: "/services/urban-gardening",
      gradient: "from-secondary to-accent"
    },
    { 
      id: "barter-exchange",
      name: t('verticals.items.barter-exchange.name'),
      description: t('verticals.items.barter-exchange.description'),
      icon: Repeat,
      href: "/services/barter-exchange",
      gradient: "from-accent to-primary"
    },
    { 
      id: "youth-freelancing",
      name: t('verticals.items.youth-freelancing.name'),
      description: t('verticals.items.youth-freelancing.description'),
      icon: Briefcase,
      href: "/services/youth-freelancing",
      gradient: "from-primary to-accent"
    },
    { 
      id: "merger-acquisitions",
      name: t('verticals.items.merger-acquisitions.name'),
      description: t('verticals.items.merger-acquisitions.description'),
      icon: TrendingUp,
      href: "/services/merger-acquisitions",
      gradient: "from-secondary to-primary"
    },
  ];

  const navLinks = [
    { name: t('nav.home'), href: "/", icon: Home },
    { name: t('nav.services'), href: "#", icon: Store, hasDropdown: true },
    { name: t('nav.blog'), href: "/blog", icon: BookOpen },
    { name: t('nav.resources'), href: "/resources", icon: Users },
    { name: t('nav.about'), href: "/about", icon: Info },
    { name: t('nav.contact'), href: "/#contact", icon: MessageCircle },
  ];

  const handleDropdownEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-r from-primary to-secondary rounded-xl p-2">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold font-display">
                <span className="text-gradient">Near</span>
                <span className="text-foreground">&</span>
                <span className="text-foreground">Far</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {link.hasDropdown ? (
                    <button
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        activeDropdown === link.name 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        activeDropdown === link.name && "rotate-180"
                      )} />
                    </button>
                  ) : link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        location.pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  )}

                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                      onMouseEnter={() => handleDropdownEnter(link.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="grid grid-cols-2 gap-2">
                          {verticals.map((vertical) => {
                            const Icon = vertical.icon;
                            return (
                              <Link
                                key={vertical.id}
                                to={vertical.href}
                                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-200"
                              >
                                <div className={cn(
                                  "flex-shrink-0 p-3 rounded-xl bg-gradient-to-r text-white transition-transform duration-200 group-hover:scale-110",
                                  vertical.gradient
                                )}>
                                  <Icon className="h-5 w-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {vertical.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                                    {vertical.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-4 pt-4 border-t border-border">
                          <Link 
                            to="/#verticals" 
                            className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                          >
                            {t('verticals.cta')}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Language + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Toggle */}
              <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full border border-border">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className={cn(
                  "text-sm font-medium transition-colors",
                  language === 'de' ? "text-primary" : "text-muted-foreground"
                )}>DE</span>
                <Switch 
                  checked={language === 'en'} 
                  onCheckedChange={toggleLanguage}
                  className="data-[state=checked]:bg-primary"
                />
                <span className={cn(
                  "text-sm font-medium transition-colors",
                  language === 'en' ? "text-primary" : "text-muted-foreground"
                )}>EN</span>
              </div>

              {/* CTA Button */}
              <Button className="tech-button group">
                {t('nav.cta')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={cn(
            "absolute top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-card border-b border-border shadow-xl transition-all duration-300",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-foreground hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5 text-primary" />
                            <span className="font-medium">{link.name}</span>
                          </div>
                          <ChevronDown className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform duration-200",
                            activeDropdown === link.name && "rotate-180"
                          )} />
                        </button>
                        
                        {/* Mobile Dropdown */}
                        <div className={cn(
                          "overflow-hidden transition-all duration-300",
                          activeDropdown === link.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        )}>
                          <div className="pl-4 pr-2 py-2 space-y-1">
                            {verticals.map((vertical) => {
                              const VIcon = vertical.icon;
                              return (
                                <Link
                                  key={vertical.id}
                                  to={vertical.href}
                                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div className={cn(
                                    "p-2 rounded-lg bg-gradient-to-r text-white",
                                    vertical.gradient
                                  )}>
                                    <VIcon className="h-4 w-4" />
                                  </div>
                                  <span className="text-sm font-medium text-muted-foreground">
                                    {vertical.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link
                        to={link.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                          location.pathname === link.href
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted/50"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-muted/50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{link.name}</span>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Language Toggle */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">{language === 'de' ? 'Deutsch' : 'English'}</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
                  <span className={cn(
                    "text-sm font-medium",
                    language === 'de' ? "text-primary" : "text-muted-foreground"
                  )}>DE</span>
                  <Switch 
                    checked={language === 'en'} 
                    onCheckedChange={toggleLanguage}
                    className="data-[state=checked]:bg-primary"
                  />
                  <span className={cn(
                    "text-sm font-medium",
                    language === 'en' ? "text-primary" : "text-muted-foreground"
                  )}>EN</span>
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 px-4">
              <Button className="w-full tech-button group">
                {t('nav.cta')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
