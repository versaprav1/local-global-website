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
    'hero.badge': 'KI-gestützte Plattform in Deutschland',
    'hero.title1': 'Lokal verbinden,',
    'hero.title2': 'Global erreichen',
    'hero.subtitle': 'Ihr Zugang zu unbegrenzten Ressourcen, Dienstleistungen und Möglichkeiten. Von Ihrer Nachbarschaft bis zur ganzen Welt - jetzt in Deutschland verfügbar.',
    'hero.cta.explore': 'Jetzt erkunden',
    'hero.cta.demo': 'Demo ansehen',
    'hero.feature.germany': 'Deutschland',
    'hero.feature.global': 'Globale Reichweite',
    'hero.feature.verified': 'Geprüfte Services',
    'hero.feature.users': '10M+ Nutzer',
    
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
    'hero.badge': 'AI-powered Platform in Germany',
    'hero.title1': 'Connect Locally,',
    'hero.title2': 'Reach Globally',
    'hero.subtitle': 'Your gateway to unlimited resources, services, and opportunities. From your neighborhood to the entire world - now available in Germany.',
    'hero.cta.explore': 'Explore Now',
    'hero.cta.demo': 'View Demo',
    'hero.feature.germany': 'Germany',
    'hero.feature.global': 'Global Reach',
    'hero.feature.verified': 'Verified Services',
    'hero.feature.users': '10M+ Users',
    
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
  const [language, setLanguage] = useState<Language>('de');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
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