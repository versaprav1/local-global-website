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
- [x] Fix navigation issues (Learn More button — fixed)
- [ ] SEO optimization (JSON-LD, canonical tags, OG images)
- [ ] Blog automation pipeline (see below)
- [ ] Resources page rework (see below)

### Medium Priority
- [ ] Newsletter signup integration
- [ ] Before/after metric sliders
- [ ] Dark mode toggle

### Low Priority
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

## Blog Automation Architecture

### Vision
Automated blog content pipeline: n8n cron → AI content generation → Supabase → website.

### Pipeline Flow
```
[n8n Cron Trigger] → [AI Content Generation] → [Supabase Edge Function] → [blog_posts table] → [Website renders from DB]
    (daily/biweekly)     (Perplexity/OpenAI)      (news-webhook pattern)      (public read)         (React + TanStack Query)
```

### Step 1: Supabase `blog_posts` Table
```sql
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content JSONB NOT NULL,  -- structured: { overview, benefits[], approaches[], sections[] }
  category TEXT NOT NULL,
  icon_name TEXT,          -- lucide icon name for display
  gradient TEXT,           -- tailwind gradient classes
  image_url TEXT,
  author TEXT DEFAULT 'LocalGlobal Team',
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
-- RLS: public read for published, authenticated write
```

### Step 2: Supabase Edge Function (Webhook)
- Reuse the `news-webhook` pattern
- Endpoint: `/functions/v1/blog-webhook`
- Accepts batch blog post creation/updates
- Optional secret-based auth for n8n

### Step 3: n8n Workflow Setup
```
Trigger: Cron (daily or biweekly)
  ↓
Node 1: HTTP Request to AI API (Perplexity/OpenAI)
  - Prompt: Generate blog content for [topic/category]
  - Output: structured JSON matching blog_posts schema
  ↓
Node 2: HTTP Request to Supabase Edge Function
  - POST to blog-webhook with generated content
  ↓
Node 3: (Optional) Slack/Telegram notification on success
```

### Step 4: n8n Setup Guide
1. Self-host n8n (Docker) or use n8n Cloud
2. Create workflow with Schedule Trigger node
3. Add HTTP Request node → AI API (store API key in n8n credentials)
4. Add HTTP Request node → Supabase edge function URL
5. Set cron schedule (e.g., `0 8 * * 1` for Monday 8am)
6. Optional: Connect n8n MCP to Lovable for direct workflow management

### Step 5: Frontend Updates
- Replace `blogTopics.ts` static data with Supabase query
- `useBlogPosts()` hook with TanStack Query
- Keep existing BlogSection UI, swap data source
- BlogPost page reads from DB instead of static array
- Fallback: show static data if DB is empty (migration period)

### Implementation Order
1. ☐ Create `blog_posts` table + RLS policies
2. ☐ Create `blog-webhook` edge function
3. ☐ Migrate static `blogTopics.ts` data → Supabase
4. ☐ Update Blog page to read from Supabase
5. ☐ Set up n8n instance + workflow
6. ☐ Test end-to-end pipeline
7. ☐ Add German translation support to blog posts

---

## Resources Page Architecture

### Vision
A comprehensive resource hub with 4 content types, each growing over time.

### Content Types

| Tab | Description | Data Source | Status |
|-----|-------------|-------------|--------|
| Tools & Links | Curated external tools, apps, websites per vertical | Static → Supabase | 🔄 Placeholder |
| Guides & Downloads | PDFs, how-to documents, checklists | Supabase Storage | 🔄 Placeholder |
| Partner Directory | Local farms, gardens, exchange platforms | Supabase table | 🔄 Placeholder |
| Video Library | YouTube embeds, tutorials, webinars | Static → Supabase | 🔄 Placeholder |
| Latest News | Auto-updated sustainability news | Supabase + n8n cron | ✅ Working |

### News Automation (Existing + Enhancement)
```
[n8n Cron] → [News API / Web Scraping] → [news-webhook Edge Function] → [news_articles table] → [Website]
```
- Already have: `news_articles` table, `news-webhook` edge function, `fetch-news` function
- Need: n8n workflow with cron trigger to automate the fetching

### Implementation Order
1. ☐ Restructure Resources page with 5 tabs (placeholder sections)
2. ☐ Populate Tools & Links with real curated resources
3. ☐ Set up Supabase Storage for downloadable guides
4. ☐ Create `partners` table for Partner Directory
5. ☐ Add video embed support
6. ☐ Set up n8n cron for automated news updates

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
