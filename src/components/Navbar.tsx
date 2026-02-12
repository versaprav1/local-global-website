import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, ChevronDown, Globe, ArrowRight,
  Store, Sprout, Repeat, Briefcase, TrendingUp,
  Home, BookOpen, Users, Info, MessageCircle, HelpCircle, Lightbulb
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    },
    { 
      id: "urban-gardening",
      name: t('verticals.items.urban-gardening.name'),
      description: t('verticals.items.urban-gardening.description'),
      icon: Sprout,
      href: "/services/urban-gardening",
    },
    { 
      id: "barter-exchange",
      name: t('verticals.items.barter-exchange.name'),
      description: t('verticals.items.barter-exchange.description'),
      icon: Repeat,
      href: "/services/barter-exchange",
    },
    { 
      id: "youth-freelancing",
      name: t('verticals.items.youth-freelancing.name'),
      description: t('verticals.items.youth-freelancing.description'),
      icon: Briefcase,
      href: "/services/youth-freelancing",
    },
    { 
      id: "merger-acquisitions",
      name: t('verticals.items.merger-acquisitions.name'),
      description: t('verticals.items.merger-acquisitions.description'),
      icon: TrendingUp,
      href: "/services/merger-acquisitions",
    },
  ];

  const navLinks = [
    { name: t('common.nav.home'), href: "/", icon: Home },
    { name: t('common.nav.services'), href: "#", icon: Store, hasDropdown: true },
    { name: "How It Works", href: "/how-it-works", icon: Lightbulb },
    { name: t('common.nav.blog'), href: "/blog", icon: BookOpen },
    { name: t('common.nav.resources'), href: "/resources", icon: Users },
    { name: t('common.nav.about'), href: "/about", icon: Info },
    { name: t('common.nav.contact'), href: "/contact", icon: MessageCircle },
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-background/95 backdrop-blur-xl border-b border-border" 
            : "bg-transparent"
        )}
        style={{ boxShadow: isScrolled ? 'var(--shadow-soft)' : 'none' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="relative flex items-center justify-center">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <span className="text-primary-foreground font-display font-bold text-lg">L</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-secondary border-2 border-background" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-lg font-display font-bold tracking-tight text-foreground">
                  Local<span className="text-primary">Global</span>
                </span>
                <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">
                  Sustainable Ecosystem
                </span>
              </div>
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
                          ? "text-foreground" 
                          : "text-muted-foreground hover:text-foreground"
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
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.name}
                      {location.pathname === link.href && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                      )}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  )}

                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[560px]"
                      onMouseEnter={() => handleDropdownEnter(link.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-card border border-border rounded-2xl p-6 animate-fade-up" style={{ boxShadow: 'var(--shadow-elevated)' }}>
                        <div className="grid grid-cols-2 gap-1">
                          {verticals.map((vertical) => {
                            const Icon = vertical.icon;
                            return (
                              <Link
                                key={vertical.id}
                                to={vertical.href}
                                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-200"
                              >
                                <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                                  <Icon className="h-5 w-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-foreground text-sm">
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
                            className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
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

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Toggle */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className={cn(
                  "text-xs font-medium transition-colors",
                  language === 'de' ? "text-foreground" : "text-muted-foreground"
                )}>DE</span>
                <Switch 
                  checked={language === 'en'} 
                  onCheckedChange={toggleLanguage}
                  className="data-[state=checked]:bg-primary scale-75"
                />
                <span className={cn(
                  "text-xs font-medium transition-colors",
                  language === 'en' ? "text-foreground" : "text-muted-foreground"
                )}>EN</span>
              </div>

              {/* CTA Button */}
              <Button className="btn-primary rounded-xl text-sm px-5">
                {t('common.nav.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
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
        <div 
          className="absolute inset-0 bg-background/90 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />
        
        <div 
          className={cn(
            "absolute top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-card border-b border-border transition-all duration-300",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
          style={{ boxShadow: 'var(--shadow-medium)' }}
        >
          <div className="container mx-auto px-4 py-6">
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
                                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
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

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">{language === 'de' ? 'Deutsch' : 'English'}</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
                  <span className={cn(
                    "text-sm font-medium",
                    language === 'de' ? "text-foreground" : "text-muted-foreground"
                  )}>DE</span>
                  <Switch 
                    checked={language === 'en'} 
                    onCheckedChange={toggleLanguage}
                    className="data-[state=checked]:bg-primary"
                  />
                  <span className={cn(
                    "text-sm font-medium",
                    language === 'en' ? "text-foreground" : "text-muted-foreground"
                  )}>EN</span>
                </div>
              </div>
            </div>

            <div className="mt-6 px-4">
              <Button className="w-full btn-primary rounded-xl">
                {t('common.nav.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
