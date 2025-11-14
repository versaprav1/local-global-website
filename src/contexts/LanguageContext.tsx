import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navbar
    'nav.home': 'Startseite',
    'nav.services': 'Services',
    'nav.blog': 'Gesundheitsthemen',
    'nav.resources': 'Service-Ökosystem',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Jetzt starten',
    
    // Verticals
    'vertical.sports': 'Sportmedizin',
    'vertical.wellness': 'Gesundheit & Wellness',
    'vertical.fitness': 'Fitness & Performance',
    
    // Hero
    'hero.badge': 'Performance & Recovery Exzellenz',
    'hero.main.title': 'Zurück zur Höchstleistung',
    'hero.main.subtitle': 'Schneller als je zuvor',
    'hero.benefit': 'Wissenschaftlich fundierte Erholungslösungen verbinden Sie mit Elite-Spezialisten und hochmodernen Behandlungszentren weltweit.',
    'hero.cta.primary': 'Kostenlose Beratung buchen',
    'hero.cta.secondary': 'Erholungsprogramme ansehen',
    'hero.stats.specialists': 'Elite-Spezialisten',
    'hero.stats.centers': 'Behandlungszentren',
    'hero.stats.athletes': 'Athleten erholt',
    'hero.stats.rating': 'Bewertung',
    
    // Treatment Centers
    'centers.title': 'Behandlungszentren in Ihrer Nähe',
    'centers.subtitle': 'Finden Sie erstklassige medizinische Einrichtungen und Wellness-Zentren in Deutschland',
    'centers.filter.all': 'Alle Zentren',
    'centers.location': 'Standort',
    'centers.specialties': 'Spezialisierungen',
    'centers.rating': 'Bewertung',
    'centers.availability': 'Verfügbar',
    'centers.book': 'Termin buchen',
    'centers.more': 'Mehr anzeigen',
    
    // Specialists
    'specialists.title': 'Führende Spezialisten',
    'specialists.subtitle': 'Verbinden Sie sich mit Top-Experten aus verschiedenen Bereichen',
    'specialists.filter.all': 'Alle Spezialisten',
    'specialists.experience': 'Erfahrung',
    'specialists.patients': 'Patienten',
    'specialists.availability.immediate': 'Sofort verfügbar',
    'specialists.availability.today': 'Heute verfügbar',
    'specialists.consultation': 'Beratung buchen',
    'specialists.profile': 'Profil ansehen',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.blog': 'Health Topics',
    'nav.resources': 'Service Ecosystem',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Started',
    
    // Verticals
    'vertical.sports': 'Sports Medicine',
    'vertical.wellness': 'Health & Wellness',
    'vertical.fitness': 'Fitness & Performance',
    
    // Hero
    'hero.badge': 'Performance & Recovery Excellence',
    'hero.main.title': 'Get Back to Peak Performance',
    'hero.main.subtitle': 'Faster Than Ever',
    'hero.benefit': 'Science-backed recovery solutions connecting you with elite specialists and cutting-edge treatment centers worldwide.',
    'hero.cta.primary': 'Book Free Consultation',
    'hero.cta.secondary': 'View Recovery Programs',
    'hero.stats.specialists': 'Elite Specialists',
    'hero.stats.centers': 'Treatment Centers',
    'hero.stats.athletes': 'Athletes Recovered',
    'hero.stats.rating': 'Rating',
    
    // Treatment Centers
    'centers.title': 'Treatment Centers Near You',
    'centers.subtitle': 'Find top-tier medical facilities and wellness centers in Germany',
    'centers.filter.all': 'All Centers',
    'centers.location': 'Location',
    'centers.specialties': 'Specialties',
    'centers.rating': 'Rating',
    'centers.availability': 'Available',
    'centers.book': 'Book Appointment',
    'centers.more': 'Show More',
    
    // Specialists
    'specialists.title': 'Leading Specialists',
    'specialists.subtitle': 'Connect with top experts from various fields',
    'specialists.filter.all': 'All Specialists',
    'specialists.experience': 'Experience',
    'specialists.patients': 'Patients',
    'specialists.availability.immediate': 'Available Now',
    'specialists.availability.today': 'Available Today',
    'specialists.consultation': 'Book Consultation',
    'specialists.profile': 'View Profile',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'de' || saved === 'en') ? saved : 'de';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'de' ? 'en' : 'de';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['de']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};