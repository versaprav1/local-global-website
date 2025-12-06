// German translations
import deCommon from './locales/de/common.json';
import deHero from './locales/de/hero.json';
import deServices from './locales/de/services.json';
import deVerticals from './locales/de/verticals.json';
import deCenters from './locales/de/centers.json';

// English translations
import enCommon from './locales/en/common.json';
import enHero from './locales/en/hero.json';
import enServices from './locales/en/services.json';
import enVerticals from './locales/en/verticals.json';
import enCenters from './locales/en/centers.json';

export const translations = {
  de: {
    common: deCommon,
    hero: deHero,
    services: deServices,
    verticals: deVerticals,
    centers: deCenters,
  },
  en: {
    common: enCommon,
    hero: enHero,
    services: enServices,
    verticals: enVerticals,
    centers: enCenters,
  },
} as const;

export type Language = 'de' | 'en';
export type TranslationKeys = typeof translations.de;
