export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export const newsCategories = [
  "All",
  "Zero Waste & Sustainability",
  "Farm to Table",
  "Urban Gardening",
  "Circular Economy & Barter",
  "Youth & Entrepreneurship",
];

export const latestNews: NewsItem[] = [
  // Zero Waste & Sustainability
  {
    id: "news-1",
    title: "Zero-Waste Movement Gaining Steam Again Worldwide",
    summary: "Communities across Malaysia and Southeast Asia are reviving the zero-waste movement with refill stations, bulk stores, and grassroots campaigns pushing for reduced single-use plastics.",
    source: "The Star",
    sourceUrl: "https://www.thestar.com.my/news/nation/2025/01/27/zero-waste-movement-gaining-steam-again",
    date: "2025-01-27",
    category: "Zero Waste & Sustainability",
  },
  {
    id: "news-2",
    title: "Zero Waste Myths and Realities in 2026 — What's Actually Changed",
    summary: "A deep dive into what's real and what's marketing hype in the zero waste space. Progress is being made, but misconceptions still hold many people back from starting.",
    source: "Mipa Overseas",
    sourceUrl: "https://mipaoverseas.com/zero-waste-myths-realities-2026/",
    date: "2026-01-15",
    category: "Zero Waste & Sustainability",
  },
  {
    id: "news-3",
    title: "Consumers Demand Sustainable Packaging — Companies Respond",
    summary: "Major food brands are shifting to compostable and reusable packaging as consumer demand for sustainability reaches an all-time high, reshaping supply chains globally.",
    source: "The Packer",
    sourceUrl: "https://www.thepacker.com/news/sustainability/consumers-want-sustainable-packaging-and-companies-are-making-it-happen",
    date: "2025-11-20",
    category: "Zero Waste & Sustainability",
  },
  {
    id: "news-4",
    title: "What's Next in Recycling? Sustainability Predictions for 2026",
    summary: "From AI-powered sorting to extended producer responsibility laws, the recycling industry is undergoing a transformation that could redefine waste management worldwide.",
    source: "Bay Area Recycling",
    sourceUrl: "https://mybarc.org/sustainability-predictions-for-2026/",
    date: "2026-01-06",
    category: "Zero Waste & Sustainability",
  },

  // Farm to Table
  {
    id: "news-5",
    title: "Farm-to-Table Dining Conversations Up 31% Year Over Year",
    summary: "Social media buzz around farm-to-table dining has surged, reflecting growing consumer interest in knowing where their food comes from and supporting local agriculture.",
    source: "Coeur d'Alene Press",
    sourceUrl: "https://cdapress.com/news/2025/oct/07/farm-to-table-dining-exploring-this-popular-culinary-movement/",
    date: "2025-10-07",
    category: "Farm to Table",
  },
  {
    id: "news-6",
    title: "2025 Local Food Initiative Builds Stronger Food Systems",
    summary: "King Conservation District launches comprehensive programs connecting local farms with schools and communities, creating resilient regional food networks.",
    source: "King Conservation District",
    sourceUrl: "https://kingcd.org/2025-local-food-initiative-building-a-stronger-more-sustainable-local-food-system/",
    date: "2025-12-04",
    category: "Farm to Table",
  },
  {
    id: "news-7",
    title: "Bipartisan Bills Introduced to Support Local Food Purchasing",
    summary: "New legislation with support in both the Senate and House proposes a permanent grant program for states and Tribal governments to purchase local food for schools and community programs.",
    source: "National Farm to School Network",
    sourceUrl: "https://www.farmtoschool.org/news-and-articles/just-introduced-bipartisan-bills-to-support-local-food-purchasing",
    date: "2025-09-15",
    category: "Farm to Table",
  },
  {
    id: "news-8",
    title: "Small Farms Growing Stronger Roots in Farm-to-Table Movement",
    summary: "Small-scale farmers in South Dakota and across the Midwest are finding new opportunities through direct-to-consumer sales and restaurant partnerships.",
    source: "Akron Legal News",
    sourceUrl: "https://www.akronlegalnews.com/editorial/37730",
    date: "2025-08-20",
    category: "Farm to Table",
  },

  // Urban Gardening
  {
    id: "news-9",
    title: "How Urban Gardens Can Bolster American Democracy",
    summary: "MIT professor Kate Brown's new book 'Tiny Gardens Everywhere' explores how urban gardening transforms communities, builds social bonds, and strengthens civic engagement.",
    source: "Civil Eats",
    sourceUrl: "https://civileats.com/2026/01/07/how-urban-gardens-can-bolster-american-democracy/",
    date: "2026-01-07",
    category: "Urban Gardening",
  },
  {
    id: "news-10",
    title: "New Community Gardens Coming to Guelph in 2026",
    summary: "The City of Guelph announces two new community gardens with public input sessions, expanding urban growing spaces for residents of all experience levels.",
    source: "City of Guelph",
    sourceUrl: "https://guelph.ca/2026/02/calling-all-gardeners-new-community-gardens-are-coming-to-guelph/",
    date: "2026-02-09",
    category: "Urban Gardening",
  },
  {
    id: "news-11",
    title: "Downtown Grand Rapids Community Garden Returns for 2026",
    summary: "The DDA approved $53,000 for workshops, programming, and new equipment for a downtown community garden, demonstrating growing municipal investment in urban agriculture.",
    source: "MLive",
    sourceUrl: "https://www.mlive.com/news/grand-rapids/2025/12/downtown-grand-rapids-community-garden-to-return-in-2026.html",
    date: "2025-12-15",
    category: "Urban Gardening",
  },
  {
    id: "news-12",
    title: "City Plans Half-Acre Urban Farm to Combat Food Insecurity",
    summary: "Boston's Mattapan neighborhood is getting a half-acre farm as part of a city initiative to address food deserts and bring fresh produce to underserved communities.",
    source: "Dorchester Reporter",
    sourceUrl: "https://www.dotnews.com/2026/city-plan-calls-for-half-acre-farm-in-mattapan-to-combat-food-insecurity/",
    date: "2026-02-01",
    category: "Urban Gardening",
  },

  // Circular Economy & Barter
  {
    id: "news-13",
    title: "Community Exchange System Gets Major Upgrade",
    summary: "The CES platform — a global barter and community exchange network — is undergoing a state-of-the-art mobile app overhaul, with phased rollouts through 2025 and 2026.",
    source: "Community Exchange",
    sourceUrl: "https://www.community-exchange.org/home/ces-upgrade/",
    date: "2025-07-01",
    category: "Circular Economy & Barter",
  },
  {
    id: "news-14",
    title: "African Founder Redefines Value Exchange Through TradeByBartr",
    summary: "Nigerian entrepreneur Ifunanya Ofodile is building a digital barter platform connecting people across Africa, enabling cashless trade of goods and services.",
    source: "Nairametrics",
    sourceUrl: "https://nairametrics.com/2025/12/02/how-african-female-founder-ifunanya-ofodile-is-redefining-value-exchange-through-tradebybartr/",
    date: "2025-12-02",
    category: "Circular Economy & Barter",
  },
  {
    id: "news-15",
    title: "Territories Committed to Operational Circular Economy",
    summary: "GRET launches TEECO project supporting communities in building practical circular economy systems, from waste reduction to local material reuse networks.",
    source: "GRET",
    sourceUrl: "https://gret.org/en/projet/territories-committed-to-an-operational-circular-economy/",
    date: "2025-10-15",
    category: "Circular Economy & Barter",
  },

  // Youth & Entrepreneurship
  {
    id: "news-16",
    title: "Kenya's Young Green Entrepreneurs Driving Sustainable Change",
    summary: "Young entrepreneurs tackling waste management in Kenya were celebrated at the BeGreen Recognition Ceremony for transforming waste into economic opportunities.",
    source: "Kenya News Agency",
    sourceUrl: "https://www.kenyanews.go.ke/kenyas-young-green-entrepreneurs-recognized-for-driving-sustainable-change/",
    date: "2025-03-28",
    category: "Youth & Entrepreneurship",
  },
  {
    id: "news-17",
    title: "Young People Are Today's Social Innovators",
    summary: "The World Economic Forum highlights how young people are building social enterprises, with platforms like Zlto rewarding community engagement through digital currency.",
    source: "World Economic Forum",
    sourceUrl: "https://weforum.org/stories/2025/08/young-people-are-todays-social-innovators",
    date: "2025-08-15",
    category: "Youth & Entrepreneurship",
  },
  {
    id: "news-18",
    title: "From Hustle Culture to Systems Change: Youth Leading Social Innovation",
    summary: "A WEF report argues that supporting youth entrepreneurship in the Global South requires more than individual hustle — it needs capital, context-sensitive education, and community.",
    source: "World Economic Forum",
    sourceUrl: "https://weforum.org/stories/2025/08/youth-global-south-social-innovation",
    date: "2025-08-20",
    category: "Youth & Entrepreneurship",
  },
];
