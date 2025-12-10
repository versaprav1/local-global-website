import { Sprout, Repeat, Briefcase, Store, TrendingUp } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Vertical {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  features: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const verticals: Vertical[] = [
  {
    id: "farm-to-home",
    name: "Farm to Home",
    description: "Direct farm produce delivery reducing environmental pollution and supporting local farmers",
    icon: Store,
    gradient: "from-primary to-secondary",
    features: [
      "Fresh Local Produce",
      "Zero Waste Packaging",
      "Carbon Footprint Reduction",
      "Fair Farmer Prices"
    ],
    stats: [
      { label: "Local Farms", value: "2,500+" },
      { label: "Families Served", value: "50,000+" },
      { label: "CO2 Saved", value: "40%" }
    ]
  },
  {
    id: "urban-gardening",
    name: "Urban Gardening",
    description: "Transform any balcony or small space into a thriving garden ecosystem",
    icon: Sprout,
    gradient: "from-secondary to-accent",
    features: [
      "Balcony Garden Kits",
      "Vertical Farming Systems",
      "Flower & Vegetable Seeds",
      "Expert Growing Guides"
    ],
    stats: [
      { label: "Urban Gardens", value: "15,000+" },
      { label: "Plant Varieties", value: "500+" },
      { label: "Success Rate", value: "94%" }
    ]
  },
  {
    id: "barter-exchange",
    name: "Barter & Exchange",
    description: "Trade goods and services without money, building community and reducing waste",
    icon: Repeat,
    gradient: "from-accent to-primary",
    features: [
      "Skill Exchange Network",
      "Goods Trading Platform",
      "Community Building",
      "Zero Cash Transactions"
    ],
    stats: [
      { label: "Active Traders", value: "25,000+" },
      { label: "Successful Trades", value: "100,000+" },
      { label: "Resources Saved", value: "65%" }
    ]
  },
  {
    id: "youth-freelancing",
    name: "Youth Freelancing",
    description: "Empowering students and young people to freelance locally and globally",
    icon: Briefcase,
    gradient: "from-primary to-accent",
    features: [
      "Student Gig Marketplace",
      "Skill Development",
      "Safe Payment System",
      "Mentorship Programs"
    ],
    stats: [
      { label: "Young Freelancers", value: "30,000+" },
      { label: "Projects Completed", value: "75,000+" },
      { label: "Avg Earnings", value: "€500/mo" }
    ]
  },
  {
    id: "merger-acquisitions",
    name: "M&A Ecosystem",
    description: "Connecting local businesses with global opportunities for sustainable growth",
    icon: TrendingUp,
    gradient: "from-secondary to-primary",
    features: [
      "Business Matching",
      "Due Diligence Support",
      "Local-to-Global Expansion",
      "Sustainable Partnerships"
    ],
    stats: [
      { label: "Businesses Listed", value: "5,000+" },
      { label: "Deals Facilitated", value: "1,200+" },
      { label: "Growth Rate", value: "120%" }
    ]
  }
];
