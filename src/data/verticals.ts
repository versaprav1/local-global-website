import { Activity, Heart, Dumbbell } from "lucide-react";
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
    id: "sports-medicine",
    name: "Sports Medicine",
    description: "Advanced treatment and recovery for athletes at all levels",
    icon: Activity,
    gradient: "from-primary to-secondary",
    features: [
      "Injury Prevention & Treatment",
      "Performance Optimization",
      "Recovery Programs",
      "Sports Rehabilitation"
    ],
    stats: [
      { label: "Treatment Centers", value: "2,500+" },
      { label: "Specialists", value: "10,000+" },
      { label: "Recovery Rate", value: "94%" }
    ]
  },
  {
    id: "health-wellness",
    name: "Health & Wellness",
    description: "Comprehensive healthcare services from local to global providers",
    icon: Heart,
    gradient: "from-secondary to-accent",
    features: [
      "Primary Care",
      "Specialist Consultations",
      "Telemedicine Services",
      "Health Screening"
    ],
    stats: [
      { label: "Healthcare Providers", value: "15,000+" },
      { label: "Clinics", value: "5,000+" },
      { label: "Patient Satisfaction", value: "96%" }
    ]
  },
  {
    id: "fitness-performance",
    name: "Fitness & Performance",
    description: "Elite training and performance optimization resources",
    icon: Dumbbell,
    gradient: "from-accent to-primary",
    features: [
      "Personal Training",
      "Nutrition Coaching",
      "Performance Analytics",
      "Recovery & Wellness"
    ],
    stats: [
      { label: "Fitness Centers", value: "8,000+" },
      { label: "Certified Trainers", value: "20,000+" },
      { label: "Success Rate", value: "89%" }
    ]
  }
];