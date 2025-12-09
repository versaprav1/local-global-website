# Near&Far Website Replication Blueprint

> **Purpose**: Complete technical specification for replicating this website's exact design, features, and functionality on another domain. Designed for LLM consumption to reproduce identical results.

---

## Table of Contents

1. [Technology Stack](#1-technology-stack)
2. [Project Setup Commands](#2-project-setup-commands)
3. [Design System - Exact Tokens](#3-design-system---exact-tokens)
4. [Component Architecture](#4-component-architecture)
5. [Animation & Effects System](#5-animation--effects-system)
6. [Internationalization System](#6-internationalization-system)
7. [File Structure](#7-file-structure)
8. [Core Components Code](#8-core-components-code)
9. [Styling Classes Reference](#9-styling-classes-reference)
10. [Layout Patterns](#10-layout-patterns)
11. [Responsive Breakpoints](#11-responsive-breakpoints)
12. [Dependencies List](#12-dependencies-list)

---

## 1. Technology Stack

### Core Framework
```
React 18.3.1 + TypeScript
Vite (build tool)
React Router v6 (routing)
```

### Styling
```
Tailwind CSS + tailwindcss-animate
Shadcn/UI component library
CSS Variables for theming (HSL format)
```

### State Management
```
React Context (LanguageContext for i18n)
TanStack Query (server state)
React Hook Form + Zod (forms)
```

### UI Components
```
Radix UI primitives (via shadcn/ui)
Lucide React icons
```

---

## 2. Project Setup Commands

```bash
# Create Vite project with React + TypeScript
npm create vite@latest project-name -- --template react-ts

# Install core dependencies
npm install react-router-dom @tanstack/react-query

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
npx tailwindcss init -p

# Install shadcn/ui
npx shadcn-ui@latest init

# Install all required shadcn components
npx shadcn-ui@latest add button card badge switch dropdown-menu dialog accordion avatar

# Install icons
npm install lucide-react

# Install form handling
npm install react-hook-form @hookform/resolvers zod
```

---

## 3. Design System - Exact Tokens

### index.css - Complete CSS Variables

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Athletic Performance Color Palette */
    --background: 0 0% 100%;
    --foreground: 222 84% 4%;
    
    /* Primary - Energy Orange */
    --primary: 14 90% 53%;
    --primary-foreground: 0 0% 100%;
    --primary-glow: 14 100% 63%;
    
    /* Secondary - Electric Blue */
    --secondary: 221 83% 53%;
    --secondary-foreground: 0 0% 100%;
    
    /* Accent - Performance Green */
    --accent: 142 76% 36%;
    --accent-foreground: 0 0% 100%;
    
    /* UI States */
    --muted: 210 40% 96%;
    --muted-foreground: 215 16% 47%;
    
    --card: 0 0% 100%;
    --card-foreground: 222 84% 4%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 222 84% 4%;
    
    --border: 214 32% 91%;
    --input: 214 32% 91%;
    --ring: 217 91% 60%;
    
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    
    /* Athletic Gradients */
    --gradient-primary: linear-gradient(135deg, hsl(14 90% 53%), hsl(14 100% 63%));
    --gradient-secondary: linear-gradient(135deg, hsl(221 83% 53%), hsl(142 76% 36%));
    --gradient-dark: linear-gradient(135deg, hsl(222 47% 11%), hsl(217 33% 17%));
    --gradient-light: linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 96%));
    --gradient-mesh: radial-gradient(at 40% 20%, hsl(14 90% 53% / 0.3) 0px, transparent 50%),
                     radial-gradient(at 80% 0%, hsl(221 83% 53% / 0.3) 0px, transparent 50%),
                     radial-gradient(at 0% 50%, hsl(142 76% 36% / 0.3) 0px, transparent 50%);
    
    /* Shadows */
    --shadow-glow: 0 0 40px hsl(14 90% 53% / 0.3);
    --shadow-elegant: 0 10px 40px -10px hsl(222 47% 11% / 0.3);
    --shadow-neon: 0 0 20px hsl(142 76% 36% / 0.5), 0 0 40px hsl(142 76% 36% / 0.3);
    
    /* Chart colors */
    --chart-1: 14 90% 53%;
    --chart-2: 221 83% 53%;
    --chart-3: 142 76% 36%;
    --chart-4: 43 100% 50%;
    --chart-5: 0 84% 60%;
    
    --radius: 0.75rem;
    
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
  
  .dark {
    /* Dark Mode - Athletic Performance Theme */
    --background: 222 84% 4%;
    --foreground: 210 40% 98%;
    
    --primary: 14 90% 53%;
    --primary-foreground: 0 0% 100%;
    --primary-glow: 14 100% 63%;
    
    --secondary: 221 83% 53%;
    --secondary-foreground: 0 0% 100%;
    
    --accent: 142 76% 36%;
    --accent-foreground: 0 0% 100%;
    
    --muted: 217 33% 17%;
    --muted-foreground: 215 20% 65%;
    
    --card: 222 84% 8%;
    --card-foreground: 210 40% 98%;
    
    --popover: 222 84% 8%;
    --popover-foreground: 210 40% 98%;
    
    --border: 217 33% 17%;
    --input: 217 33% 17%;
    --ring: 217 91% 60%;
    
    --destructive: 0 62% 30%;
    --destructive-foreground: 210 40% 98%;
    
    /* Dark Athletic Gradients */
    --gradient-primary: linear-gradient(135deg, hsl(14 90% 53%), hsl(14 100% 63%));
    --gradient-secondary: linear-gradient(135deg, hsl(221 83% 53%), hsl(142 76% 36%));
    --gradient-dark: linear-gradient(135deg, hsl(222 84% 4%), hsl(217 33% 17%));
    --gradient-mesh: radial-gradient(at 40% 20%, hsl(14 90% 53% / 0.3) 0px, transparent 50%),
                     radial-gradient(at 80% 0%, hsl(221 83% 53% / 0.3) 0px, transparent 50%),
                     radial-gradient(at 0% 50%, hsl(142 76% 36% / 0.3) 0px, transparent 50%);
    
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', system-ui, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    @apply font-bold;
  }
}
```

### tailwind.config.ts - Complete Configuration

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          glow: 'hsl(var(--primary-glow))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 4. Component Architecture

### Core Component Pattern

All components follow this structure:
```typescript
import { useLanguage } from "@/contexts/LanguageContext";
import { ComponentName } from "@/components/ui/component-name";

const MyComponent = () => {
  const { t } = useLanguage(); // For translations
  
  return (
    <section className="py-20 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Content */}
      </div>
    </section>
  );
};

export default MyComponent;
```

### Component Hierarchy

```
App.tsx
├── Navbar
├── Routes
│   ├── Index (Home)
│   │   ├── Hero
│   │   ├── ServicesGrid
│   │   ├── VerticalsSection
│   │   ├── SpecialistsSection
│   │   ├── TreatmentCentersSection
│   │   ├── TestimonialsSection
│   │   ├── BlogSection
│   │   └── ContactSection
│   ├── About
│   ├── Blog
│   ├── BlogPost
│   ├── Resources
│   └── Service Pages
│       ├── PerformanceMedicine
│       ├── RecoveryWellness
│       └── TrainingPerformance
└── Footer
```

---

## 5. Animation & Effects System

### CSS Component Classes (add to index.css @layer components)

```css
@layer components {
  /* Glass Card Effect */
  .glass-card {
    @apply bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10;
  }
  
  /* Neon Glow Effect */
  .neon-glow {
    box-shadow: var(--shadow-neon);
  }
  
  /* Tech Button */
  .tech-button {
    @apply relative overflow-hidden text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105;
    background: var(--gradient-primary);
    box-shadow: var(--shadow-glow);
  }
  
  /* Animated Gradient Background */
  .gradient-bg {
    background: var(--gradient-mesh);
    background-size: 200% 200%;
    animation: gradient-shift 15s ease infinite;
  }
  
  /* Floating Animation */
  .floating {
    animation: float 6s ease-in-out infinite;
  }
  
  /* Pulse Glow */
  .pulse-glow {
    animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  /* Text Gradient */
  .text-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  /* Card Hover Effect */
  .card-hover {
    @apply transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl;
  }
  
  /* Glassmorphism Container */
  .glass-container {
    @apply bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10;
  }
  
  /* Tech Grid Background */
  .tech-grid {
    background-image: 
      linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
      linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
  }
  
  /* Shimmer Effect */
  .shimmer {
    position: relative;
    overflow: hidden;
  }
  
  .shimmer::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: shimmer 2s infinite;
  }
}
```

### Animation Keyframes (add to index.css @layer utilities)

```css
@layer utilities {
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      opacity: 1;
      box-shadow: 0 0 20px hsl(var(--primary) / 0.5);
    }
    50% {
      opacity: 0.8;
      box-shadow: 0 0 40px hsl(var(--primary) / 0.8);
    }
  }
  
  @keyframes shimmer {
    100% { left: 100%; }
  }
  
  @keyframes ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }
}
```

---

## 6. Internationalization System

### Folder Structure
```
src/
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── de/
│       │   ├── common.json
│       │   ├── hero.json
│       │   ├── services.json
│       │   ├── verticals.json
│       │   └── centers.json
│       └── en/
│           ├── common.json
│           ├── hero.json
│           ├── services.json
│           ├── verticals.json
│           └── centers.json
└── contexts/
    └── LanguageContext.tsx
```

### i18n/index.ts
```typescript
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
```

### contexts/LanguageContext.tsx
```typescript
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { translations, Language } from '@/i18n';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (path: string) => string;
  getTranslation: <T>(path: string) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getNestedValue = (obj: unknown, path: string): unknown => {
  return path.split('.').reduce((current: unknown, key: string) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'de' || saved === 'en') ? saved : 'de';
  });

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => {
      const newLang = prev === 'de' ? 'en' : 'de';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  }, []);

  const t = useCallback((path: string): string => {
    const value = getNestedValue(translations[language], path);
    if (typeof value === 'string') return value;
    console.warn(`Translation not found for path: ${path}`);
    return path;
  }, [language]);

  const getTranslation = useCallback(<T,>(path: string): T => {
    const value = getNestedValue(translations[language], path);
    return value as T;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, getTranslation }}>
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
```

### Usage in Components
```typescript
const { t, getTranslation } = useLanguage();

// For strings
<h1>{t('hero.title')}</h1>

// For arrays/objects
const services = getTranslation<ServiceItem[]>('services.items');
```

---

## 7. File Structure

```
project-root/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/                    # Images, fonts
│   ├── components/
│   │   ├── ui/                    # Shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ... (all shadcn components)
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── MagneticButton.tsx
│   │   └── ... (section components)
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── data/
│   │   ├── types.ts
│   │   ├── specialists.ts
│   │   ├── centers.ts
│   │   └── ... (data files)
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── i18n/
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── de/
│   │       └── en/
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Resources.tsx
│   │   └── services/
│   │       └── *.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 8. Core Components Code

### MagneticButton.tsx
```typescript
import { useRef, useState, ReactNode } from "react";
import { Button, ButtonProps } from "@/components/ui/button";

interface MagneticButtonProps extends ButtonProps {
  children: ReactNode;
  strength?: number;
}

export function MagneticButton({ 
  children, 
  strength = 0.3, 
  className = "",
  ...props 
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ${className}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      {...props}
    >
      {children}
    </Button>
  );
}
```

### ScrollReveal.tsx
```typescript
import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

### Hero Component Pattern
```typescript
import { MagneticButton } from "@/components/MagneticButton";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center space-y-8 py-20">
          {/* Badge */}
          <Badge className="inline-flex items-center px-4 py-2 text-sm font-medium border-primary/20 bg-primary/10 text-primary mb-6">
            <Sparkles className="h-3 w-3 mr-2" />
            {t('hero.badge')}
          </Badge>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient block mb-2">{t('hero.title')}</span>
            <span className="text-foreground text-3xl md:text-5xl">{t('hero.subtitle')}</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t('hero.benefit')}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <MagneticButton size="lg" className="tech-button group text-lg px-8 py-6">
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton size="lg" variant="outline" className="glass-card hover:bg-white/20 text-lg px-8 py-6 border-2">
              {t('hero.cta.secondary')}
            </MagneticButton>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto glass-container rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-1">500+</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.specialists')}</div>
            </div>
            {/* ... more stats */}
          </div>
        </div>
      </div>
    </section>
  );
};
```

---

## 9. Styling Classes Reference

### Layout Classes
```
container mx-auto px-4        - Centered container with padding
max-w-5xl                     - Maximum width constraint
relative z-10                 - Position for layering
py-20                         - Vertical section padding
```

### Typography Classes
```
text-5xl md:text-7xl          - Responsive heading sizes
font-bold                     - Bold weight
text-gradient                 - Gradient text effect
text-muted-foreground         - Subdued text color
font-display                  - Display font family
```

### Card/Container Classes
```
glass-card                    - Translucent glass effect
glass-container               - Stronger glass effect
card-hover                    - Hover lift animation
tech-button                   - Primary CTA button style
```

### Effect Classes
```
gradient-bg                   - Animated gradient background
floating                      - Float animation
pulse-glow                    - Pulsing glow effect
shimmer                       - Shimmer loading effect
tech-grid                     - Grid background pattern
neon-glow                     - Neon shadow effect
```

---

## 10. Layout Patterns

### Section Pattern
```html
<section className="py-20 relative">
  <div className="absolute inset-0 [background-effect] opacity-[value]" />
  <div className="container mx-auto px-4 relative z-10">
    <!-- Section header -->
    <div className="text-center mb-12">
      <Badge>Label</Badge>
      <h2>Title with <span className="text-gradient">highlight</span></h2>
      <p className="text-muted-foreground">Description</p>
    </div>
    <!-- Content grid -->
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Cards -->
    </div>
  </div>
</section>
```

### Card Pattern
```html
<Card className="glass-container card-hover group">
  <CardContent className="p-6">
    <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
      Title
    </h3>
    <p className="text-muted-foreground text-sm">Description</p>
    <Badge variant="secondary">Category</Badge>
  </CardContent>
</Card>
```

---

## 11. Responsive Breakpoints

```
sm: 640px   - Mobile landscape
md: 768px   - Tablet
lg: 1024px  - Desktop
xl: 1280px  - Large desktop
2xl: 1400px - Max container width
```

### Common Patterns
```
text-5xl md:text-7xl              - Font size scaling
grid-cols-1 md:grid-cols-2 lg:grid-cols-3  - Grid columns
flex-col sm:flex-row              - Direction change
hidden md:flex                    - Mobile hide
px-4 sm:px-6 lg:px-8              - Padding scaling
```

---

## 12. Dependencies List

### Package.json Dependencies
```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-tooltip": "^1.1.4",
    "@tanstack/react-query": "^5.56.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "lucide-react": "^0.462.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-router-dom": "^6.26.2",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react-swc": "^3.7.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.4.5",
    "vite": "^5.2.11"
  }
}
```

---

## Quick Start Checklist

1. ☐ Create Vite + React + TypeScript project
2. ☐ Install all dependencies from Section 12
3. ☐ Copy index.css tokens from Section 3
4. ☐ Copy tailwind.config.ts from Section 3
5. ☐ Set up i18n structure from Section 6
6. ☐ Create LanguageContext from Section 6
7. ☐ Add Google Fonts: Inter + Space Grotesk
8. ☐ Install shadcn/ui components
9. ☐ Create core components: MagneticButton, ScrollReveal
10. ☐ Build sections following patterns from Section 10
11. ☐ Add translation JSON files
12. ☐ Set up React Router for pages

---

**Document Version**: 1.0  
**Last Updated**: December 2024  
**Platform**: Near&Far Health/Sports Medicine Website
