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

## Decision Log

This section captures every key discussion, options considered, and rationale for decisions made during development.

### Decision 1: Learn More Button Fix
**Issue**: "Learn More" buttons under verticals on the homepage did nothing when clicked.  
**Root Cause**: Invalid HTML nesting — `<Link>` was inside `<Button>`, preventing click events from propagating.  
**Options Discussed**:
1. Only navigate to service pages (`/services/:serviceId`)
2. Only scroll to additional content on the homepage
3. Both — navigate to service pages AND scroll to content  
**Decision**: **Option 3 — Both**. User wanted the buttons to navigate to the dedicated service page for that vertical, while keeping smooth scroll for in-page content exploration.  
**Rationale**: Provides maximum flexibility — users who want detail go to the service page, while the homepage content flow remains intact.

### Decision 2: Documentation Structure
**Issue**: Project had no centralized plan or progress tracking files.  
**Options Discussed**:
1. Create new plan.md and progress.md from scratch
2. Update existing doc files and rename them to plan.md and progress.md  
**Decision**: **Option 2 — Update existing and rename**. The project already had `doc.md` and other documentation files with useful content.  
**Rationale**: Preserves existing knowledge while establishing a cleaner naming convention that's easier to reference.

### Decision 3: Agent Workflow Protocol (must_do.md)
**Issue**: User wanted a consistent working pattern — understand first, ask questions, get confirmation, then implement.  
**Options Discussed**:
1. Informal agreement to follow the pattern
2. Create a dedicated `must_do.md` file with formal protocol  
**Decision**: **Option 2 — Dedicated file**. Created `must_do.md` with the 4-step protocol: Understand → Ask → Confirm → Implement.  
**Rationale**: Codifying the protocol in a file ensures all future AI agent interactions follow the same pattern, reducing miscommunication and wasted effort.

### Decision 4: Blog vs Resources — Purpose Distinction
**Issue**: Both Blog and Resources pages seemed to serve similar informational purposes. Needed clarity on their distinct roles.  
**Analysis**: After reviewing the codebase:
- **Blog** (`blogTopics.ts`): 21 thought-leadership topics organized by category, each with structured content (overview, benefits, approaches). Purpose: establish expertise, SEO, evergreen content.
- **Resources** (`ResourcesSection.tsx`): Community tools hub with tabs for Tools, Guides, Partners, Videos, News. Purpose: practical utility, curated links, actionable resources.  
**Decision**: Keep them separate with clear roles:
- Blog = "Learn & Discover" (thought leadership, industry insights)
- Resources = "Use & Connect" (practical tools, directories, downloads)  
**Rationale**: Different user intents — someone reading a blog wants to learn; someone visiting resources wants to find a tool, download a guide, or contact a partner.

### Decision 5: Blog Content Strategy
**Options Discussed**:
1. Add static content now for all blog posts
2. Keep topics as placeholders, plan dynamic content for later
3. Fetch external content via APIs
4. Mix: static content now + dynamic content pipeline for future  
**Decision**: **Option 4 — Mix: static + dynamic**. Populated all 21 blog topics with full content immediately, while planning an n8n automation pipeline for future dynamic content.  
**Rationale**: Having real content now improves SEO and user experience, while the automation pipeline (n8n → AI → Supabase → website) will keep content fresh long-term without manual effort.

### Decision 6: Blog Automation Architecture (n8n Pipeline)
**Context**: User wanted automated blog updates via cron jobs.  
**Architecture Designed**:
```
[n8n Cron Trigger] → [AI Content Generation (Perplexity/OpenAI)] → [Supabase Edge Function] → [blog_posts table] → [Website renders from DB]
```
**Decision**: Plan now, implement later. User is not using n8n yet.  
**Rationale**: Full architecture documented so implementation can proceed step-by-step when ready. The pipeline allows daily/biweekly automated content without manual intervention.

### Decision 7: Resources Page Structure
**Options Discussed**:
1. Build out one section fully first
2. Create all sections with real content
3. Create all sections as placeholders for future development  
4. Have all sections — mix of real and placeholder  
**Decision**: **Option 3 — All sections as placeholders**. Created 5 tabs: Tools & Links, Guides & Downloads, Partner Directory, Video Library, Latest News.  
**Rationale**: Establishes the full information architecture upfront so each section can be independently developed and populated over time without restructuring.

### Decision 8: Contact Section Social Media Platforms
**Options Discussed**:
1. X (Twitter) — modern, professional reach
2. WhatsApp — direct messaging, popular in Germany
3. Telegram — privacy-focused, community channels
4. Discord — community building, younger audience
5. LinkedIn — B2B networking
6. Facebook/Instagram — legacy platforms  
**Decision**: **X (Twitter) + Telegram** only.  
**Rationale**: User specifically chose these two. X for public-facing communication and thought leadership; Telegram for privacy-conscious community engagement. Dropped legacy platforms (Facebook, Instagram, LinkedIn) that were previously hardcoded.

### Decision 9: Resources "Contact Our Team" Button
**Options Discussed**:
1. Navigate to `/contact` page
2. Scroll to homepage contact section
3. Open a contact modal  
**Decision**: **Option 1 — Navigate to `/contact` page**.  
**Rationale**: Consistent with the dedicated contact page that already exists. Simpler UX than modals, and the contact page has full form + social links.

### Decision 10: About/Mission Section Scope
**Issue**: The About section headline and mission text only mentioned "sustainable products" — too narrow for a platform with 5 distinct verticals.  
**Decision**: Expanded headline to "Empowering Communities Through Sustainable Innovation" and added visible badges for all 5 verticals (Farm-to-Home, Urban Gardening, Barter & Exchange, Youth Freelancing, M&A Ecosystem).  
**Rationale**: The platform's value proposition spans multiple domains. The mission statement should reflect the full scope so visitors immediately understand the breadth of the ecosystem.

### Decision 11: Website Type — Static vs Dynamic
**Context**: User asked whether the site is static or dynamic.  
**Analysis**: Currently a **static single-page application (SPA)** — React renders client-side, all data is in static `.ts` files, no real-time database reads for main content. Supabase is integrated but only used for auth and news articles.  
**Decision**: Acknowledged current state and planned transition toward dynamic content (blog posts from Supabase, resources from DB) while keeping the SPA architecture.  
**Rationale**: Static is fine for the current scale. Dynamic content will be added incrementally as the n8n automation pipeline and Supabase tables are built out.

### Decision 12: Backend Tables for Content Management
**Context**: User wanted to build out the backend for resources, blogs, guides, videos, and news.  
**Options Discussed**:
1. Create one table at a time, test, then move to the next
2. Create all 4 tables (blog_posts, guides, videos, partners) at once  
**Decision**: **Option 2 — All 4 tables now**. Created all tables in a single migration with RLS policies, indexes, and auto-update triggers.  
**Rationale**: The table schemas were well-defined from planning. Creating them together ensures consistent patterns and allows parallel admin UI development.

### Decision 13: Admin UI Structure
**Options Discussed**:
1. Single admin page with tabs for all content types
2. Separate dedicated pages per content type  
**Decision**: **Option 2 — Separate pages**. Created individual CRUD pages for News, Blog, Guides, Videos, and Partners.  
**Rationale**: Each content type has different fields and workflows. Separate pages provide cleaner UX and are easier to maintain and extend independently.

### Decision 14: Admin Dashboard Implementation
**Context**: User requested a full admin dashboard for content management.  
**Implementation**:
- Created `AdminLayout.tsx` with `AdminSidebar.tsx` for consistent navigation
- Built 6 admin routes: dashboard overview + 5 content management pages
- Each page features searchable lists, Dialog-based forms, and CRUD operations
- Dashboard shows content count statistics from Supabase
- All routes protected with `ProtectedRoute` component  
**Rationale**: Provides a professional content management interface that enables the user to manage all platform content without direct database access.

### Decision 15: Admin Role Assignment
**Context**: User needed admin access to manage content via the dashboard.  
**Action**: Assigned admin role to `versaprav@gmail.com` (ID: `0611d7d8-a694-4376-a1c6-15b52ba29ecc`) via migration insert into `user_roles` table.  
**Note**: Admin routes use `ProtectedRoute requireAdmin`, which calls the same `has_role` RPC as the navbar. Non-admins are redirected to `/access-denied`. Database RLS remains the authoritative backstop for mutations.

### Decision 16: Frontend-Supabase Data Integration
**Context**: Blog and Resources pages were reading from static files only.
**Decision**: Created hybrid React Query hooks that prioritize Supabase data and merge with static fallbacks.
**Implementation**: `useBlogPosts`, `useBlogPost`, `useGuides`, `usePartners`, `useVideos` hooks. Blog and Resources components updated to use these hooks with skeleton loaders and empty states.
**Rationale**: Enables admin-managed content to appear immediately while preserving static content as fallback during the transition period.

### Decision 17: Navbar Dashboard Link — Admin-Only Visibility
**Context**: Dashboard link in navbar was visible to all authenticated users.
**Options Discussed**:
1. Keep visible to all authenticated users
2. Check admin role via `has_role` RPC and only show to admins
**Decision**: **Option 2 — Admin-only**. Added `useEffect` in Navbar that calls `has_role` RPC when user changes.
**Rationale**: Non-admin users shouldn't see admin navigation. Defense-in-depth alongside ProtectedRoute.

### Decision 18: M&A Vertical Implementation Strategy
**Context**: User wanted to start building out the M&A Ecosystem vertical. Web research was conducted on platforms like Flippa, ClearlyAcquired, and Axial to understand M&A marketplace patterns.
**Options Discussed**:
1. **Option A — Content/Directory (Phase 1)**: Use existing `guides`, `blog_posts`, and `partners` tables to provide informational content, advisor directory, and related resources. No new backend tables needed.
2. **Option B — Listing Marketplace (Phase 2)**: Create a new `business_listings` table with revenue, EBITDA, asking price, industry fields. Add buyer browsing and inquiry system.
3. **Option C — Full Platform (Phase 3)**: Add secure document sharing via Supabase Storage, NDA signing workflows, AI-powered business matching, and deal tracking.
**Decision**: **Option A now**, keep B and C as future phases.
**Rationale**: Option A leverages existing infrastructure (tables already created in Session 7). Gets the M&A vertical live with meaningful content immediately — advisor profiles, due diligence guides, market insights blog posts — while Option B/C can be built incrementally as user demand grows.

### Decision 19: Documentation Inventory
**Context**: User asked what documentation files exist in the project.
**Inventory**: 7 markdown files found:
- `plan.md` — roadmap, architecture, decision log (actively maintained)
- `progress.md` — implementation timeline, completed work, pending items (actively maintained)
- `must_do.md` — mandatory 4-step agent workflow protocol (actively maintained)
- `doc.md` — ⚠️ **OUTDATED** — still references sports medicine from the original project. Content pivoted to sustainable ecosystem.
- `architecture-blueprint.md` — reusable architecture patterns from the original platform
- `deployment-setup.md` — deployment configuration notes
- `website-development.md` — development guidelines
- `website-replication-blueprint.md` — blueprint for replicating the platform
**Action**: Flagged `doc.md` as outdated. All active documentation consolidated in `plan.md` and `progress.md`.

### Decision 20: M&A Marketing Landing — Component Architecture (concept from Lovable)
**Context**: User paused M&A work in Lovable and captured a Next.js-oriented marketing-page pattern: focused route, declarative page composition, section components, local typed content, finance-grade Tailwind styling, light interaction.

**Stack note**: This repository uses **React + Vite + React Router**, not Next.js App Router. The same pattern maps as:
- **Route**: e.g. `/m-and-a` → `src/pages/MAndA.tsx` (or similar), registered in `App.tsx`; optional thin `layout` = shared wrapper (Navbar/Footer) like other pages.
- **Components**: `src/components/mna/` (Hero, TrustStrip, ProcessPipeline, ListingsPreview, AudienceSplit, SectorFocus, SecuritySection, ConfidentialIntake, Faq, FinalCta, plus SectionShell, Badge, ListingCard, PipelineStep).
- **Content**: `src/components/mna/content.ts` (or co-located typed arrays) for hero copy, pipeline steps, listing mocks, sectors, FAQs until Supabase wiring.

**Relationship to existing M&A vertical**: See **Decision 21** for canonical URLs. The landing and service page work as a pair: funnel first, directory depth second.

**Principles adopted from the concept**:
- Page file stays **declarative** (section composition only).
- **Trust-first** sections (TrustStrip, SecuritySection, FAQ) support confidentiality objections.
- **Dual audience** (Hero + AudienceSplit) aligned with seller/buyer CTAs.
- **ListingsPreview**: mock teaser cards first (`codename`, sector, location, revenue/EBITDA ranges, dealType, verified).
- **ConfidentialIntake**: short form, static v1, architect for future Supabase or API route.
- **Styling**: discreet, neutral palette, restrained accent, strong typography, minimal motion (hover on cards, subtle pipeline progression, accordion FAQ).

**Build order** (when implemented): Hero → TrustStrip → ProcessPipeline → ListingsPreview → AudienceSplit → SecuritySection → ConfidentialIntake → Faq → FinalCta; SectorFocus optional if strategically needed.

### Decision 21: M&A Canonical URLs (funnel vs directory)
**Context**: Needed a single primary entry for campaigns and nav without duplicating “home” stories for M&A.

**Decision**:
- **`/m-and-a`** — **Primary marketing funnel** (short URL, campaign-friendly). Implement as `src/pages/MAndA.tsx` + `src/components/mna/*`.
- **`/services/merger-acquisitions`** — **Ecosystem / directory depth** (Phase A: advisors, guides, blog from Supabase). Unchanged role.

**CTA continuity**: On the landing, **primary** actions point to the confidential intake (same next step throughout hero → final CTA). **Secondary** action: link to **`/services/merger-acquisitions`** (e.g. “Explore directory” / ecosystem). The service page should link back to **`/m-and-a`** where it helps (e.g. “Start confidential intake”) once the landing exists.

**Rationale**: Keeps Decision 18’s Phase A page valuable while giving marketing a dedicated, composable landing without merging two mental models into one URL.

### Decision 22: Login Redirect by Role + M&A Funnel Brand Alignment
**Context**: After sign-in, all users were sent to `/admin`, so non-admins hit `ProtectedRoute` and were redirected to `/access-denied`. The M&A landing (`/m-and-a`) had been styled with a separate neutral/stone palette (Decision 20) and felt disconnected from the rest of the site.

**Login / OAuth**:
- **`PostAuthRedirect`** on `/login`: after session exists, call `has_role` for `admin` → **`/admin`** if true, else **`/`**.
- Password sign-in relies on auth state update + `PostAuthRedirect` (no direct `navigate("/admin")`).
- **OAuth** `redirectTo` = **`{origin}/login`** so the same redirect runs after provider return.

**M&A styling**:
- **`MAndA.tsx`** and **`src/components/mna/*`** use shared primitives: `editorial-section`, `gradient-bg`, `tag-primary` / `tag-accent`, `btn-primary`, `feature-card`, `editorial-divider`, `font-display`, theme colors (`primary`, `secondary`, `accent`, `muted`), gradient hero title and final CTA band—aligned with the coral/warm design system while keeping Decision 20 section structure and copy.

---

## Roadmap

### Phase 1–9: ✅ COMPLETED
See progress.md for detailed completion history.

---

## Upcoming Work

### High Priority
- [x] Role-based access guard on navbar Dashboard link (admin-only)
- [x] Role-based guard on ProtectedRoute (`requireAdmin` + `has_role` RPC; non-admins → `/access-denied`)
- [x] Post-login redirect by role (`PostAuthRedirect` on `/login`: admin → `/admin`, else `/`; OAuth → `/login`)
- [x] M&A `/m-and-a` funnel restyled to match site design tokens (Decision 22)
- [ ] Complete German translations for service pages
- [x] Connect frontend Blog/Resources pages to Supabase data (hybrid hooks)
- [ ] Partner application form → Supabase database
- [x] Fix navigation issues (Learn More button — fixed)
- [ ] SEO optimization (JSON-LD, canonical tags, OG images)
- [ ] Blog automation pipeline (see Blog Automation Architecture below)
- [ ] Resources page rework (see Resources Page Architecture below)

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

### Service Verticals Content
- [x] All 5 verticals have complete content sections: hero, audience, outcomes, process, features, testimonials, case studies, key metrics, FAQ, CTA (EN + DE)

### M&A Vertical Phases
- [x] **Phase A (Content/Directory)**: Enriched service page with advisor directory, guides, blog posts from existing Supabase tables
- [x] **Phase A+ (Marketing landing)**: Dedicated `/m-and-a` route, `src/pages/MAndA.tsx`, and `src/components/mna/*` (Hero → TrustStrip → ProcessPipeline → ListingsPreview → AudienceSplit → SecuritySection → ConfidentialIntake → FAQ → FinalCta); intake form is static with toast (Supabase wiring deferred); service page links to `/m-and-a#intake` and anchors advisor block `#mna-advisors`
- [ ] **Phase B (Listing Marketplace)**: `business_listings` table, buyer browsing, inquiry system
- [ ] **Phase C (Full Platform)**: Document sharing, NDA workflows, AI matching, deal tracking

---

## Blog Automation Architecture

### Vision
Automated blog content pipeline: n8n cron → AI content generation → Supabase → website.

### Pipeline Flow
```
[n8n Cron Trigger] → [AI Content Generation] → [Supabase Edge Function] → [blog_posts table] → [Website renders from DB]
    (daily/biweekly)     (Perplexity/OpenAI)      (news-webhook pattern)      (public read)         (React + TanStack Query)
```

### Implementation Steps
1. ✅ Create `blog_posts` table + RLS policies in Supabase
2. ☐ Create `blog-webhook` edge function
3. ☐ Migrate static `blogTopics.ts` data → Supabase
4. ☐ Update Blog page to read from Supabase (with static fallback)
5. ☐ Set up n8n instance + workflow
6. ☐ Test end-to-end pipeline
7. ☐ Add German translation support to blog posts

---

## Resources Page Architecture

### Content Types

| Tab | Description | Data Source | Status |
|-----|-------------|-------------|--------|
| Tools & Links | Curated external tools, apps, websites per vertical | Static → Supabase | 🔄 Placeholder |
| Guides & Downloads | PDFs, how-to documents, checklists | Supabase Storage | 🔄 Placeholder |
| Partner Directory | Local farms, gardens, exchange platforms | Supabase table | 🔄 Placeholder |
| Video Library | YouTube embeds, tutorials, webinars | Static → Supabase | 🔄 Placeholder |
| Latest News | Auto-updated sustainability news | Supabase + n8n cron | ✅ Working |

### Implementation Steps
1. ✅ Create Supabase tables: `blog_posts`, `guides`, `videos`, `partners` (with RLS, indexes, triggers)
2. ✅ Create admin CRUD pages for each content type
3. ☐ Create frontend hooks to fetch from Supabase (hybrid: DB + static fallback)
4. ☐ Populate Tools & Links with real curated resources
5. ☐ Set up Supabase Storage bucket for downloadable guide files
6. ☐ Add video embed support (YouTube/Vimeo URLs)
7. ☐ Set up n8n cron workflows for automated news + blog updates
8. ☐ Create Edge Functions for content webhooks (blog, guides, videos)

---

## Admin Dashboard

### Routes

| Route | Page | Function |
|-------|------|----------|
| `/admin` | Dashboard | Content count statistics |
| `/admin/news` | News Manager | CRUD for news articles |
| `/admin/blog` | Blog Manager | CRUD for blog posts |
| `/admin/guides` | Guides Manager | CRUD for guides |
| `/admin/videos` | Videos Manager | CRUD for videos |
| `/admin/partners` | Partners Manager | CRUD for partners |
| `/access-denied` | Access denied | Logged-in non-admins blocked from admin |

### Components
- `AdminLayout.tsx` — sidebar + header wrapper
- `AdminSidebar.tsx` — navigation with icons, back-to-site link, sign out

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
| M&A marketing landing (primary funnel) | `/m-and-a` | ✅ — Decision 20–21 Phase A+ |
| M&A ecosystem / directory | `/services/merger-acquisitions` | ✅ — Decision 18 Phase A |
| Login | `/login` | ✅ |
| Reset Password | `/reset-password` | ✅ |
| Access denied | `/access-denied` | ✅ (signed-in non-admin) |
| Admin Dashboard | `/admin` | ✅ (admin only) |
| Admin News | `/admin/news` | ✅ (admin only) |
| Admin Blog | `/admin/blog` | ✅ (admin only) |
| Admin Guides | `/admin/guides` | ✅ (admin only) |
| Admin Videos | `/admin/videos` | ✅ (admin only) |
| Admin Partners | `/admin/partners` | ✅ (admin only) |

---

*Last Updated*: April 2026
