export type MnaListingPreview = {
  codename: string;
  sector: string;
  location: string;
  revenueRange: string;
  ebitdaRange: string;
  dealType: string;
  verified: boolean;
};

export type MnaPipelineStep = {
  step: number;
  title: string;
  description: string;
};

export type MnaFaqItem = {
  question: string;
  answer: string;
};

export const mnaHero = {
  eyebrow: "Confidential M&A access",
  title: "Buy, sell, or partner—with discretion built in.",
  subtitle:
    "LocalGlobal connects serious sellers, buyers, and advisors in sustainable commerce. One intake, structured screening, and a directory when you are ready to go deeper.",
  primaryCta: "Start confidential intake",
  primaryHref: "#intake",
  secondaryCta: "Explore the ecosystem directory",
  secondaryHref: "/services/merger-acquisitions",
};

export const mnaTrustItems = [
  { label: "Screened introductions", detail: "No public listing required to start." },
  { label: "EU-first posture", detail: "Data minimization and clear retention." },
  { label: "Advisor-aligned", detail: "Partners and guides vetted for relevance." },
];

export const mnaPipelineSteps: MnaPipelineStep[] = [
  {
    step: 1,
    title: "Intake",
    description: "Share role, sector focus, and constraints in a short, private form.",
  },
  {
    step: 2,
    title: "Alignment",
    description: "We map your goals to the right pathway—buy-side, sell-side, or strategic partnership.",
  },
  {
    step: 3,
    title: "Introduction",
    description: "Curated matches and materials shared only with mutual consent.",
  },
  {
    step: 4,
    title: "Deepen",
    description: "Move to diligence, data room, and closing with your advisors in the lead.",
  },
];

export const mnaListingsPreview: MnaListingPreview[] = [
  {
    codename: "Project Birch",
    sector: "Regenerative food retail",
    location: "DACH",
    revenueRange: "€4–8M",
    ebitdaRange: "12–18%",
    dealType: "Majority sale",
    verified: true,
  },
  {
    codename: "Project River",
    sector: "Circular logistics",
    location: "Benelux",
    revenueRange: "€2–4M",
    ebitdaRange: "8–14%",
    dealType: "Strategic partnership",
    verified: true,
  },
  {
    codename: "Project Granite",
    sector: "Agtech hardware",
    location: "Nordics",
    revenueRange: "€6–12M",
    ebitdaRange: "15–22%",
    dealType: "Minority growth",
    verified: false,
  },
];

export const mnaAudience = {
  title: "Who this is for",
  subtitle: "Same platform, different jobs-to-be-done. Pick the path that matches you.",
  sellers: {
    title: "Owners & operators",
    description:
      "Planning partial liquidity, full exit, or bringing in a strategic operator without running a public process.",
    bullets: ["Confidential first", "Narrative + data prep", "Buyer shortlists"],
  },
  buyers: {
    title: "Strategic & financial buyers",
    description:
      "Sourcing durable cash-flow assets and mission-aligned teams in local and regional markets.",
    bullets: ["Thesis-led sourcing", "Intro-only with context", "Repeatable pipeline"],
  },
};

export const mnaSecurity = {
  title: "Security & confidentiality",
  subtitle:
    "Marketing pages are public; your deal is not. We design defaults so sensitive information stays behind explicit consent.",
  points: [
    {
      title: "Least exposure",
      body: "Share the minimum viable context until both sides opt in to a deeper conversation.",
    },
    {
      title: "Clear boundaries",
      body: "Materials belong to you. We do not substitute for legal, tax, or financial advice.",
    },
    {
      title: "Operational hygiene",
      body: "Access controls and logging patterns align with how we run the rest of the LocalGlobal stack.",
    },
  ],
};

export const mnaFaq: MnaFaqItem[] = [
  {
    question: "Is this a public marketplace?",
    answer:
      "No. Listings shown here are illustrative previews. Real opportunities are shared after intake and alignment—not as open listings.",
  },
  {
    question: "Do you replace my lawyer or M&A advisor?",
    answer:
      "No. We help you find the right ecosystem and structure first conversations. Your professionals remain in the lead for diligence and contracts.",
  },
  {
    question: "What happens after I submit the intake form?",
    answer:
      "We review fit and respond with next steps. Nothing is broadcast to third parties without your consent.",
  },
  {
    question: "How does this relate to the M&A service page?",
    answer:
      "This page is the campaign funnel. The service page hosts advisors, guides, and blog depth when you want to explore the directory.",
  },
];

export const mnaFinalCta = {
  title: "Ready for a private conversation?",
  subtitle: "Start with the intake. If we are not the right fit, we will say so quickly.",
  button: "Begin confidential intake",
  href: "#intake",
};
