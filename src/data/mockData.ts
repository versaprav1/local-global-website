
import { MapPin, Globe, Truck, ShieldCheck, MessageCircle, Leaf, Zap, Scale } from "lucide-react";

export interface Producer {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  specialty: string;
  isVerified: boolean;
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
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  icon: any;
  link: string;
}

export const producers: Producer[] = [
  {
    id: "1",
    name: "Green Valley Farms",
    location: "Portland, Oregon",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80&w=800",
    description: "Sustainable farming collective specializing in organic produce with eco-friendly practices.",
    specialty: "Organic Vegetables",
    isVerified: true
  },
  {
    id: "2",
    name: "Blue Ocean Fishery",
    location: "Seattle, Washington",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800",
    description: "Family-owned sustainable seafood operation with focus on ethical fishing practices.",
    specialty: "Sustainable Seafood",
    isVerified: true
  },
  {
    id: "3",
    name: "Sunrise Dairy Co-op",
    location: "Madison, Wisconsin",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80&w=800",
    description: "Cooperative of small dairy farmers producing premium organic milk and cheese products.",
    specialty: "Dairy Products",
    isVerified: false
  },
  {
    id: "4",
    name: "Mountain Range Meats",
    location: "Denver, Colorado",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=800",
    description: "Free-range, ethically raised livestock with sustainable ranching practices.",
    specialty: "Ethical Meat Products",
    isVerified: true
  },
];

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Local Farmers Market Vendor",
    company: "City Fresh Markets",
    location: "Portland, Oregon",
    isLocal: true,
    description: "Weekly opportunity to sell at our premium farmers market with high foot traffic and community focus.",
    deadline: "2025-06-15",
    type: "Contract",
    tags: ["Farmers Market", "Direct Sales", "Local"]
  },
  {
    id: "2",
    title: "Regional Distribution Partnership",
    company: "Northwest Foods Distributors",
    location: "Pacific Northwest",
    isLocal: true,
    description: "Looking for producers to join our regional distribution network serving restaurants and small grocers.",
    deadline: "2025-06-30",
    type: "Partnership",
    tags: ["Distribution", "Regional", "Wholesale"]
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
    tags: ["Export", "International", "Asia"]
  },
  {
    id: "4",
    title: "National Organic Retailer Partner",
    company: "EcoMarket Chain",
    location: "United States",
    isLocal: false,
    description: "Seeking producers of verified organic goods for nationwide retail partnership and distribution.",
    deadline: "2025-07-10",
    type: "Contract",
    tags: ["Organic", "Retail", "National"]
  },
];

export const resources: Resource[] = [
  {
    id: "1",
    title: "Local Certification Guide",
    description: "Step-by-step guidance for obtaining local producer certifications and compliance requirements.",
    icon: ShieldCheck,
    link: "#"
  },
  {
    id: "2",
    title: "Distribution Networks",
    description: "Connect with established distribution networks to expand your reach within your region.",
    icon: Truck,
    link: "#"
  },
  {
    id: "3",
    title: "Global Market Analysis",
    description: "Market research and analytics to help you identify global opportunities that match your products.",
    icon: Globe,
    link: "#"
  },
  {
    id: "4",
    title: "Sustainability Practices",
    description: "Resources for implementing and certifying sustainable production practices.",
    icon: Leaf,
    link: "#"
  },
  {
    id: "5",
    title: "Producer Community",
    description: "Join our community forum to connect with other producers, share knowledge and collaborate.",
    icon: MessageCircle,
    link: "#"
  },
  {
    id: "6",
    title: "Efficient Operations",
    description: "Tools and guides for optimizing your operations and reducing production costs.",
    icon: Zap,
    link: "#"
  },
];
