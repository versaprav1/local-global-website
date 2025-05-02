
import { Resource } from "./types";
import { ShieldCheck, Truck, Globe, Leaf, MessageCircle, Zap, Palette, Wrench, Mic, Code, Camera, Gem } from "lucide-react";

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
