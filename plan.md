# LocalGlobal Platform — Project Plan & Roadmap

## Project Overview

**Project Name**: LocalGlobal (Near&Far)  
**Domain**: https://localglobal.website/  
**Purpose**: Sustainable ecosystem platform connecting local communities — farm-to-home delivery, urban gardening, barter exchange, youth freelancing, and local-to-global commerce.  
**Primary Market**: Germany (expanding globally)  
**Languages**: English, German  

---

## Platform Vision

Build an interconnected ecosystem of 5 sustainable verticals that empower local communities while enabling global reach. Each vertical operates as its own marketplace/community while sharing users, infrastructure, and design patterns.

---

## Architecture

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Supabase (auth, database, edge functions)
- **Deployment**: GitHub Actions → Hostinger (FTP)
- **i18n**: Custom LanguageContext with JSON translation files (EN/DE)
- **Routing**: React Router v6 with dynamic service pages (`/services/:serviceId`)

---

## Verticals (Core Product)

| # | Vertical | Route | Status |
|---|----------|-------|--------|
| 1 | Farm to Home | `/services/farm-to-home` | ✅ Page + translations |
| 2 | Urban Gardening | `/services/urban-gardening` | ✅ Page + translations |
| 3 | Barter & Exchange | `/services/barter-exchange` | ✅ Page + translations |
| 4 | Youth Freelancing | `/services/youth-freelancing` | ✅ Page + translations |
| 5 | M&A Ecosystem | `/services/merger-acquisitions` | ✅ Page + translations |

---

## Roadmap

### Phase 1: Foundation ✅ COMPLETED
- Project setup (React, Vite, Tailwind, shadcn/ui)
- Core pages: Home, About, Blog, Resources, Contact, FAQ, Partners
- Navbar with responsive design + language toggle
- Footer
- Supabase integration

### Phase 2: Design System ✅ COMPLETED
- HSL color tokens in index.css
- Custom font pairing (Inter + Sora)
- Glass/gradient effects, scroll animations
- MagneticButton, ScrollReveal components
- Skeleton loading states

### Phase 3: Interactive Features ✅ COMPLETED
- Command Palette (⌘K)
- Advanced filtering system
- Interactive Map View
- Testimonials carousel

### Phase 4: Content & Sections ✅ COMPLETED
- Homepage: Hero, VerticalsSection, ServicesGrid, Testimonials, Map, Contact
- Data files: centers, verticals, opportunities, producers, resources, blog topics

### Phase 5: Internationalization ✅ COMPLETED
- LanguageContext with localStorage persistence
- EN/DE translation files for all sections
- Dynamic translation with `t()` and `getTranslation()`

### Phase 6: Service Pages ✅ COMPLETED
- Dynamic ServicePage template (`/services/:serviceId`)
- Full EN translation content for all 5 verticals
- Sections: Hero, Audience, Outcomes, Process, FAQ, CTA

### Phase 7: Navigation & UX ✅ COMPLETED
- Mega-menu with verticals dropdown
- Scroll-aware navbar transitions
- Mobile responsive slide-down navigation
- Auth-aware login/logout buttons

### Phase 8: Auth & Admin ✅ COMPLETED
- Supabase auth integration
- Login page with email/password
- Password reset flow
- Protected admin route
- Auth provider context

### Phase 9: Deployment ✅ COMPLETED
- GitHub Actions CI/CD workflow
- FTP deployment to Hostinger
- .htaccess for SPA routing (client-side routes)

---

## Upcoming Work

### High Priority
- [ ] Complete German translations for service pages
- [ ] Add trust badges / social proof to Hero
- [ ] Partner application form → Supabase database
- [ ] Fix navigation issues (Learn More button, cross-page links)
- [ ] SEO optimization (JSON-LD, canonical tags, OG images)

### Medium Priority
- [ ] Blog content management (Supabase-backed)
- [ ] Newsletter signup integration
- [ ] Downloadable resources (guides, PDFs)
- [ ] Video testimonials section
- [ ] Before/after metric sliders

### Low Priority
- [ ] Dark mode toggle
- [ ] A/B testing for CTAs
- [ ] PWA support
- [ ] Analytics dashboard (admin)
- [ ] Multi-region expansion (beyond Germany)

### Future Verticals / Features
- [ ] Booking/appointment system per vertical
- [ ] User dashboards per vertical
- [ ] Marketplace functionality (listings, payments)
- [ ] Community forums
- [ ] Mobile app (React Native)

---

## Pages Map

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | ✅ |
| About | `/about` | ✅ |
| Resources | `/resources` | ✅ |
| Blog | `/blog` | ✅ |
| Blog Post | `/blog/:id` | ✅ |
| Contact | `/contact` | ✅ |
| How It Works | `/how-it-works` | ✅ |
| FAQ | `/faq` | ✅ |
| Partners | `/partners` | ✅ |
| Service Pages | `/services/:serviceId` | ✅ |
| Login | `/login` | ✅ |
| Reset Password | `/reset-password` | ✅ |
| Admin | `/admin` | ✅ (protected) |

---

*Last Updated*: March 2026
