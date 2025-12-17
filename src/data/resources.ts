import { Resource } from "./types";
import { 
  Calendar, Video, FileText, Shield, Users, MessageSquare,
  Leaf, TrendingUp, Apple, Recycle, Store, CreditCard,
  BookOpen, Wifi, Sprout, ShoppingCart, Database, Layers
} from "lucide-react";

export const resources: Resource[] = [
  // Marketplace Services
  {
    id: "1",
    title: "Farm-to-Table Ordering",
    description: "Order fresh produce directly from local farms with convenient delivery options.",
    icon: Calendar,
    link: "#",
    industries: ["Farm to Home"]
  },
  {
    id: "2",
    title: "Virtual Farm Tours",
    description: "Connect with farmers through live video tours and Q&A sessions.",
    icon: Video,
    link: "#",
    industries: ["Farm to Home", "Urban Gardening"]
  },
  {
    id: "3",
    title: "Produce Tracking",
    description: "Track your orders from farm to doorstep with real-time updates.",
    icon: FileText,
    link: "#",
    industries: ["Farm to Home"]
  },
  {
    id: "4",
    title: "Quality Certification",
    description: "Verified organic and sustainability certifications for all products.",
    icon: Shield,
    link: "#",
    industries: ["All Services"]
  },

  // Community Services
  {
    id: "5",
    title: "Community Network",
    description: "Connect with local gardeners, farmers, and sustainability enthusiasts.",
    icon: Users,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "6",
    title: "Discussion Forums",
    description: "Share tips, ask questions, and learn from the community.",
    icon: MessageSquare,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "7",
    title: "Barter Exchange",
    description: "Trade goods and services with community members without money.",
    icon: Recycle,
    link: "#",
    industries: ["Barter & Exchange"]
  },

  // Gardening Resources
  {
    id: "8",
    title: "Garden Planning Tools",
    description: "Design and plan your urban garden with our interactive tools.",
    icon: Sprout,
    link: "#",
    industries: ["Urban Gardening"]
  },
  {
    id: "9",
    title: "Growth Tracking",
    description: "Monitor your plants and track harvests with detailed analytics.",
    icon: TrendingUp,
    link: "#",
    industries: ["Urban Gardening", "Farm to Home"]
  },
  {
    id: "10",
    title: "Seasonal Guides",
    description: "Expert guides for what to plant and harvest each season.",
    icon: Apple,
    link: "#",
    industries: ["Urban Gardening", "Farm to Home"]
  },
  {
    id: "11",
    title: "Sustainability Tips",
    description: "Learn eco-friendly practices for home and garden.",
    icon: Leaf,
    link: "#",
    industries: ["All Services"]
  },

  // Business Services
  {
    id: "12",
    title: "Seller Dashboard",
    description: "Manage your products, orders, and customer relationships.",
    icon: Database,
    link: "#",
    industries: ["Farm to Home", "M&A Ecosystem"]
  },
  {
    id: "13",
    title: "Payment Processing",
    description: "Secure payments for buyers and fair compensation for sellers.",
    icon: CreditCard,
    link: "#",
    industries: ["All Services"]
  },

  // Educational & Community
  {
    id: "14",
    title: "Learning Library",
    description: "Courses and tutorials on sustainable living, gardening, and more.",
    icon: BookOpen,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "15",
    title: "Youth Programs",
    description: "Skill-building programs and opportunities for young people.",
    icon: Wifi,
    link: "#",
    industries: ["Youth Freelancing"]
  },

  // Marketplace Features
  {
    id: "16",
    title: "Local Marketplace",
    description: "Browse and buy from local producers in your area.",
    icon: Store,
    link: "#",
    industries: ["Farm to Home", "Barter & Exchange"]
  },
  {
    id: "17",
    title: "Equipment Sharing",
    description: "Borrow and share gardening tools and equipment with neighbors.",
    icon: ShoppingCart,
    link: "#",
    industries: ["Urban Gardening", "Barter & Exchange"]
  },
  {
    id: "18",
    title: "API Integrations",
    description: "Connect with other platforms and tools for seamless workflows.",
    icon: Layers,
    link: "#",
    industries: ["M&A Ecosystem"]
  },
];
