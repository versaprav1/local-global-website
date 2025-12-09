# Near&Far Website Development History

## Project Overview

**Project Name**: Near&Far (formerly LocalGlobal)  
**Domain**: https://localglobal.website/  
**Purpose**: Sports medicine, recovery, and performance optimization platform connecting athletes with local and global healthcare providers  
**Primary Market**: Germany (Hannover as initial hub)  
**Target Audience**: Athletes, high-performers, and active individuals seeking recovery, training, nutrition, and mental performance support

---

## Technical Stack

### Frontend
- **Framework**: React 18.3.1
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with semantic design tokens
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion patterns, CSS animations
- **Routing**: React Router v6

### State Management & Data
- **Server State**: TanStack Query (React Query)
- **Form Handling**: React Hook Form + Zod validation
- **Language State**: React Context with localStorage persistence

### Backend (Configured)
- **Platform**: Supabase
- **Project ID**: kopzrbvrcgknjgoyewxb
- **Status**: Connected, not extensively utilized yet

### Deployment
- **CI/CD**: GitHub Actions
- **Hosting**: Hostinger via FTP
- **Process**: Auto-build and deploy on push to main branch

---

## Development Timeline

### Phase 1: Project Foundation
**Status**: Completed

#### Initial Setup
- Created React + Vite + TypeScript project structure
- Installed and configured Tailwind CSS
- Set up shadcn/ui component library
- Configured Supabase integration
- Established GitHub repository with deployment workflow

#### Core Pages Created
- `src/pages/Index.tsx` - Homepage
- `src/pages/About.tsx` - About page
- `src/pages/Blog.tsx` - Blog listing
- `src/pages/BlogPost.tsx` - Individual blog posts
- `src/pages/Resources.tsx` - Resources/ecosystem page
- `src/pages/NotFound.tsx` - 404 page

#### Base Components
- `src/components/Navbar.tsx` - Navigation with language toggle
- `src/components/Footer.tsx` - Site footer
- `src/components/Hero.tsx` - Homepage hero section

---

### Phase 2: Design System & Branding
**Status**: Completed

#### Design Direction
- Modern, tech-focused aesthetic with 2025 design trends
- Athletic performance color palette:
  - Primary: Orange (energy, action)
  - Secondary: Electric Blue
  - Accent: Performance Green
- Premium, energetic feel aligned with athlete/performance market

#### Design Features Implemented
- Bento grid layouts
- Glassmorphism effects
- Gradient mesh backgrounds
- Animated counters
- Micro-interactions
- Skeleton loading states
- Scroll-reveal animations

#### Components Created
- `src/components/ScrollReveal.tsx` - Animated content entrance
- `src/components/MagneticButton.tsx` - Interactive button effects
- `src/components/SkeletonCard.tsx` - Loading state placeholders

---

### Phase 3: Interactive Features
**Status**: Completed

#### Command Palette (CMD+K)
- **File**: `src/components/CommandPalette.tsx`
- Global search across specialists, services, centers
- Keyboard shortcut activation
- Quick navigation

#### Advanced Filtering System
- **File**: `src/components/AdvancedFilters.tsx`
- Multi-select categories
- Location filters
- Price range sliders
- Real-time filtering

#### Booking Flow
- **File**: `src/components/BookingFlow.tsx`
- Multi-step appointment wizard
- Service selection
- Date/time picking
- Confirmation flow

#### Interactive Map View
- **File**: `src/components/MapView.tsx`
- Location-based visualization
- Center markers and popups
- Geographic filtering

---

### Phase 4: Content Sections
**Status**: Completed

#### Homepage Sections
- `src/components/ServicesGrid.tsx` - Service offerings display
- `src/components/VerticalsSection.tsx` - Core service verticals
- `src/components/SpecialistsSection.tsx` - Healthcare providers
- `src/components/TreatmentCentersSection.tsx` - Facility listings
- `src/components/TestimonialsSection.tsx` - User reviews carousel
- `src/components/AboutSection.tsx` - Company overview
- `src/components/BlogSection.tsx` - Blog previews
- `src/components/ContactSection.tsx` - Contact information
- `src/components/OpportunitySection.tsx` - Business opportunities
- `src/components/ProducerSection.tsx` - Partner producers
- `src/components/ResourcesSection.tsx` - Educational resources

#### Data Files
- `src/data/centers.ts` - Treatment center data (German facilities)
- `src/data/specialists.ts` - Healthcare provider profiles
- `src/data/verticals.ts` - Service vertical definitions
- `src/data/blogTopics.ts` - Blog content categories
- `src/data/locations.ts` - Geographic data
- `src/data/mockData.ts` - Development placeholder data
- `src/data/opportunities.ts` - Business opportunities
- `src/data/producers.ts` - Partner information
- `src/data/resources.ts` - Educational resources
- `src/data/types.ts` - TypeScript type definitions

---

### Phase 5: Internationalization (i18n)
**Status**: Completed

#### Language System Architecture
- **Context**: `src/contexts/LanguageContext.tsx`
- **Languages**: English (en), German (de)
- **Persistence**: localStorage
- **Pattern**: Structured JSON translation files with namespaces

#### Translation File Structure
```
src/i18n/
├── index.ts                 # Translation loader and merger
└── locales/
    ├── de/
    │   ├── common.json      # Shared UI strings
    │   ├── hero.json        # Hero section
    │   ├── services.json    # Service page content
    │   ├── verticals.json   # Service verticals
    │   └── centers.json     # Treatment centers
    └── en/
        ├── common.json
        ├── hero.json
        ├── services.json
        ├── verticals.json
        └── centers.json
```

#### Translation Features
- `t('key.path')` function for string translations
- `getTranslation('namespace.key')` for complex data
- Automatic fallback to English for missing keys
- Language preference persists across sessions

---

### Phase 6: Homepage Optimization
**Status**: Completed

#### Hero Section Simplification
- Removed complex bento grid layout
- Added focused value proposition: "Get Back to Peak Performance Faster"
- Prominent CTAs: "Book Free Consultation" & "View Recovery Programs"
- Simplified trust indicators:
  - 50,000+ Athletes
  - 10,000+ Specialists
  - 96% Success Rate
- Reduced visual distractions above the fold

---

### Phase 7: Service Pages
**Status**: Partially Completed

#### Architecture Decision
- Hybrid approach: Overview on homepage + Individual detail pages
- Service cards on homepage link to dedicated pages

#### Service Page Structure (Template)
1. Hero Section - Title, description, CTAs
2. Who Is This For - Target audience segments
3. Expected Outcomes & Benefits - Measurable results
4. How It Works - 4-step process
5. Evidence & Case Studies - 3 real-world examples
6. Testimonials Carousel - 5-6 reviews with ratings
7. Before/After Metrics Dashboard - Visual comparisons
8. Certifications & Accreditations - Professional credentials
9. FAQ Section - 5-8 service-specific Q&As
10. Final CTA Section - Booking call-to-action

#### Pages Created
- ✅ `src/pages/services/PerformanceMedicine.tsx`
- ✅ `src/pages/services/RecoveryWellness.tsx`
- ✅ `src/pages/services/TrainingPerformance.tsx`
- ⏳ `src/pages/services/Nutrition.tsx` - Pending
- ⏳ `src/pages/services/MentalPerformance.tsx` - Pending

#### Routes Added
```tsx
/services/performance-medicine
/services/recovery-wellness
/services/training-performance
```

---

### Phase 8: Dynamic Translation Implementation
**Status**: Completed

#### Components Updated for i18n
- `src/components/Hero.tsx` - Full translation support
- `src/components/Footer.tsx` - Dynamic text
- `src/components/VerticalsSection.tsx` - Bilingual verticals
- `src/components/TreatmentCentersSection.tsx` - Translated UI

#### LanguageContext Enhancements
- Added `t()` function for simple string lookups
- Added `getTranslation()` for nested data structures
- Improved type safety for translation keys

---

## Feature Summary

### Implemented Features
| Feature | Component | Status |
|---------|-----------|--------|
| Multi-language Support | LanguageContext | ✅ Complete |
| Command Palette (CMD+K) | CommandPalette | ✅ Complete |
| Advanced Filtering | AdvancedFilters | ✅ Complete |
| Booking Flow | BookingFlow | ✅ Complete |
| Interactive Map | MapView | ✅ Complete |
| Testimonials Carousel | TestimonialsSection | ✅ Complete |
| Scroll Animations | ScrollReveal | ✅ Complete |
| Skeleton Loading | SkeletonCard | ✅ Complete |
| Service Detail Pages | services/* | 🔄 Partial |

### Pending Features
| Feature | Priority | Notes |
|---------|----------|-------|
| Trust badges in Hero | High | Visual credibility |
| Downloadable resources | High | Recovery guides, PDFs |
| Video testimonials | High | Social proof |
| Before/after sliders | High | Interactive metrics |
| Sticky progress indicator | Medium | Service page navigation |
| Booking system integration | Medium | External calendar sync |
| Newsletter signup | Medium | Email capture |
| Blog CMS | Medium | Content management |
| Dark mode toggle | Low | Theme switching |
| A/B testing | Low | CTA optimization |

---

## Content & Data

### German Healthcare Providers
- DIAKOVERE (Hannover)
- MHH - Medizinische Hochschule Hannover
- Sportklinik Hellersen
- ATOS Clinics
- BG Unfallklinik Frankfurt
- Charité Berlin

### Booking Integrations
- Doctolib
- Lybrate

### Core Service Verticals
1. Performance Medicine
2. Recovery & Wellness
3. Training & Performance
4. Nutrition Optimization (pending)
5. Mental Performance (pending)

### Blog Topics (28+ categories)
- Pain management
- Chiropractic care
- Fascia health
- Natural wellness
- Movement science
- Athletic performance optimization
- (Excludes modern medicine and surgical procedures)

---

## File Structure

```
src/
├── assets/                    # Static images
├── components/
│   ├── ui/                    # shadcn/ui components
│   └── [feature components]   # Custom components
├── contexts/
│   └── LanguageContext.tsx    # i18n state management
├── data/                      # Static data files
├── hooks/                     # Custom React hooks
├── i18n/
│   ├── index.ts              # Translation loader
│   └── locales/              # Translation JSON files
├── integrations/
│   └── supabase/             # Supabase client & types
├── lib/
│   └── utils.ts              # Utility functions
├── pages/
│   ├── services/             # Service detail pages
│   └── [main pages]          # Route pages
├── App.tsx                   # Root component with routes
├── App.css                   # Global styles
├── index.css                 # Tailwind & design tokens
└── main.tsx                  # Entry point
```

---

## Design Tokens

### Colors (HSL format)
Defined in `src/index.css` and `tailwind.config.ts`:
- `--background` / `--foreground`
- `--primary` / `--primary-foreground`
- `--secondary` / `--secondary-foreground`
- `--muted` / `--muted-foreground`
- `--accent` / `--accent-foreground`
- `--destructive`
- `--border` / `--input` / `--ring`

### Component Variants
All shadcn/ui components customized with project-specific variants following the design system.

---

## Deployment Configuration

### GitHub Actions Workflow
**File**: `.github/workflows/deploy.yml`
- Triggers on push to main branch
- Builds React/Vite project
- Deploys `dist/` folder to Hostinger via FTP

### Environment Variables
- Supabase URL and Anon Key configured
- FTP credentials for Hostinger deployment

---

## Notes for Future Development

### Recommended Next Steps
1. Complete remaining service pages (Nutrition, Mental Performance)
2. Add German translations for all service page content
3. Implement booking system integration
4. Add video testimonial support
5. Create downloadable resource library

### Technical Debt
- Service pages currently have hardcoded English content
- Some components may need refactoring for better i18n support
- Consider implementing react-i18next for more robust i18n features

---

*Last Updated*: December 2024
*Maintained by*: Development Team
