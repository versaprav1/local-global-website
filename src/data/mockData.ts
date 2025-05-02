
import { MapPin, Globe, Truck, ShieldCheck, MessageCircle, Leaf, Zap, Scale, Palette, Wrench, Microphone, Code, Camera, Gem } from "lucide-react";

export interface Producer {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  specialty: string;
  isVerified: boolean;
  industry: string;
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  isLocal: boolean;
  description: string;
  deadline: string;
  type: 'Contract' | 'Full-time' | 'Partnership';
  tags: string[];
  industryFocus: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  icon: any;
  link: string;
  industries: string[];
}

export const producers: Producer[] = [
  {
    id: "1",
    name: "Green Valley Farms",
    location: "Portland, Oregon",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80&w=800",
    description: "Sustainable farming collective specializing in organic produce with eco-friendly practices.",
    specialty: "Organic Vegetables",
    isVerified: true,
    industry: "Agriculture"
  },
  {
    id: "2",
    name: "Blue Ocean Fishery",
    location: "Seattle, Washington",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800",
    description: "Family-owned sustainable seafood operation with focus on ethical fishing practices.",
    specialty: "Sustainable Seafood",
    isVerified: true,
    industry: "Fishery"
  },
  {
    id: "3",
    name: "Artisanal Crafts Collective",
    location: "Santa Fe, New Mexico",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80&w=800",
    description: "Cooperative of skilled artisans creating handcrafted goods using traditional techniques.",
    specialty: "Handmade Crafts",
    isVerified: false,
    industry: "Artisan Crafts"
  },
  {
    id: "4",
    name: "TechSolutions Studio",
    location: "Austin, Texas",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=800",
    description: "Independent software development studio creating innovative digital products and solutions.",
    specialty: "Software Development",
    isVerified: true,
    industry: "Technology"
  },
  {
    id: "5",
    name: "Creative Media Productions",
    location: "Los Angeles, California",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=800",
    description: "Independent media production company specializing in documentary and commercial content.",
    specialty: "Media Production",
    isVerified: true,
    industry: "Entertainment"
  },
  {
    id: "6",
    name: "Mountain Textile Works",
    location: "Denver, Colorado",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=800",
    description: "Family-owned textile studio producing handwoven fabrics and sustainable clothing items.",
    specialty: "Sustainable Textiles",
    isVerified: true,
    industry: "Textiles"
  },
];

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Local Marketplace Vendor",
    company: "City Fresh Markets",
    location: "Portland, Oregon",
    isLocal: true,
    description: "Weekly opportunity to sell at our premium marketplace with high foot traffic and community focus.",
    deadline: "2025-06-15",
    type: "Contract",
    tags: ["Marketplace", "Direct Sales", "Local"],
    industryFocus: ["Agriculture", "Artisan Crafts", "Food & Beverage"]
  },
  {
    id: "2",
    title: "Regional Distribution Partnership",
    company: "Northwest Distributors Network",
    location: "Pacific Northwest",
    isLocal: true,
    description: "Looking for producers to join our regional distribution network serving retailers and businesses.",
    deadline: "2025-06-30",
    type: "Partnership",
    tags: ["Distribution", "Regional", "Wholesale"],
    industryFocus: ["All Industries"]
  },
  {
    id: "3",
    title: "International Export Program",
    company: "Global Goods Exchange",
    location: "Multiple Countries",
    isLocal: false,
    description: "Export opportunity for qualified producers looking to enter Asian markets with premium products.",
    deadline: "2025-07-15",
    type: "Partnership",
    tags: ["Export", "International", "Asia"],
    industryFocus: ["Technology", "Textiles", "Artisan Crafts", "Entertainment"]
  },
  {
    id: "4",
    title: "Digital Marketplace Integration",
    company: "TechConnect Platform",
    location: "United States",
    isLocal: false,
    description: "Seeking software and digital product creators for nationwide digital marketplace partnership.",
    deadline: "2025-07-10",
    type: "Contract",
    tags: ["Digital", "Technology", "National"],
    industryFocus: ["Technology", "Entertainment", "Digital Products"]
  },
];

export const resources: Resource[] = [
  {
    id: "1",
    title: "Industry Certification Guide",
    description: "Step-by-step guidance for obtaining industry-specific certifications and compliance requirements.",
    icon: ShieldCheck,
    link: "#",
    industries: ["All Industries"]
  },
  {
    id: "2",
    title: "Distribution Networks",
    description: "Connect with established distribution networks to expand your reach within your region.",
    icon: Truck,
    link: "#",
    industries: ["All Industries"]
  },
  {
    id: "3",
    title: "Global Market Analysis",
    description: "Market research and analytics to help you identify global opportunities that match your products.",
    icon: Globe,
    link: "#",
    industries: ["All Industries"]
  },
  {
    id: "4",
    title: "Sustainability Practices",
    description: "Resources for implementing and certifying sustainable production practices.",
    icon: Leaf,
    link: "#",
    industries: ["Agriculture", "Textiles", "Manufacturing"]
  },
  {
    id: "5",
    title: "Producer Community",
    description: "Join our community forum to connect with other producers, share knowledge and collaborate.",
    icon: MessageCircle,
    link: "#",
    industries: ["All Industries"]
  },
  {
    id: "6",
    title: "Efficient Operations",
    description: "Tools and guides for optimizing your operations and reducing production costs.",
    icon: Zap,
    link: "#",
    industries: ["All Industries"]
  },
  {
    id: "7",
    title: "Creative Portfolio Development",
    description: "Build a compelling portfolio that showcases your creative work to potential clients and partners.",
    icon: Palette,
    link: "#",
    industries: ["Entertainment", "Artisan Crafts", "Technology"]
  },
  {
    id: "8",
    title: "Technical Skills Workshop",
    description: "Access tutorials and workshops to enhance your technical skills and production capabilities.",
    icon: Wrench,
    link: "#",
    industries: ["Technology", "Manufacturing"]
  },
];
