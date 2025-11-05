
import { Resource } from "./types";
import { 
  Calendar, Video, FileText, Shield, Users, MessageSquare,
  Activity, TrendingUp, Apple, Brain, Stethoscope, CreditCard,
  BookOpen, Wifi, FlaskConical, ShoppingCart, Database, Layers
} from "lucide-react";

export const resources: Resource[] = [
  // Provider & Patient Services
  {
    id: "1",
    title: "Appointment Booking System",
    description: "Integrated scheduling platform across all healthcare providers with real-time availability.",
    icon: Calendar,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "2",
    title: "Telehealth Platform",
    description: "Virtual consultations and follow-ups with secure video conferencing for remote care.",
    icon: Video,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "3",
    title: "Patient Records Portal",
    description: "Secure health data management system with instant access to medical history and records.",
    icon: FileText,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "4",
    title: "Insurance Verification",
    description: "Real-time eligibility checks and automated insurance benefit verification.",
    icon: Shield,
    link: "#",
    industries: ["All Services"]
  },

  // Care Coordination
  {
    id: "5",
    title: "Referral Network",
    description: "Seamless specialist referrals with integrated provider network and care transitions.",
    icon: Users,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "6",
    title: "Care Team Collaboration",
    description: "Multi-provider coordination tools for comprehensive patient care management.",
    icon: MessageSquare,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "7",
    title: "Treatment Plan Management",
    description: "Shared care protocols and treatment tracking across multiple healthcare providers.",
    icon: Stethoscope,
    link: "#",
    industries: ["All Services"]
  },

  // Wellness & Performance
  {
    id: "8",
    title: "Wearable Data Integration",
    description: "Connect fitness trackers and health devices for comprehensive wellness monitoring.",
    icon: Activity,
    link: "#",
    industries: ["Fitness & Performance"]
  },
  {
    id: "9",
    title: "Performance Analytics",
    description: "AI-powered health insights and performance tracking with actionable recommendations.",
    icon: TrendingUp,
    link: "#",
    industries: ["Sports Medicine", "Fitness & Performance"]
  },
  {
    id: "10",
    title: "Nutrition Coaching",
    description: "Personalized meal planning and dietary guidance from certified nutritionists.",
    icon: Apple,
    link: "#",
    industries: ["Health & Wellness", "Fitness & Performance"]
  },
  {
    id: "11",
    title: "Mental Health Support",
    description: "Professional therapy and counseling services with flexible scheduling options.",
    icon: Brain,
    link: "#",
    industries: ["Health & Wellness"]
  },

  // Business Services
  {
    id: "12",
    title: "Practice Management",
    description: "Complete scheduling, billing, and EMR integration tools for healthcare providers.",
    icon: Database,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "13",
    title: "Payment Processing",
    description: "Streamlined insurance claims processing and patient payment collection.",
    icon: CreditCard,
    link: "#",
    industries: ["All Services"]
  },

  // Educational & Community
  {
    id: "14",
    title: "Knowledge Library",
    description: "Evidence-based health resources and educational materials for patients and providers.",
    icon: BookOpen,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "15",
    title: "Community Forums",
    description: "Peer support groups and community discussions for patients with similar conditions.",
    icon: Wifi,
    link: "#",
    industries: ["All Services"]
  },

  // Technology Integrations
  {
    id: "16",
    title: "Lab Results Integration",
    description: "Direct delivery of laboratory test results with automated notifications.",
    icon: FlaskConical,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "17",
    title: "Medical Equipment Marketplace",
    description: "Rental and purchase platform for medical devices and healthcare equipment.",
    icon: ShoppingCart,
    link: "#",
    industries: ["All Services"]
  },
  {
    id: "18",
    title: "API Integration Platform",
    description: "Third-party app connections and custom integrations for seamless workflows.",
    icon: Layers,
    link: "#",
    industries: ["All Services"]
  },
];
