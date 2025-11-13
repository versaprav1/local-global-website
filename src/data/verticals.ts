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
    name: "Performance Medicine",
    description: "Elite sports medicine and injury recovery for peak athletic performance",
    icon: Activity,
    gradient: "from-primary to-secondary",
    features: [
      "Advanced Injury Recovery",
      "Performance Optimization Protocols",
      "Science-Backed Treatment Plans",
      "Return-to-Sport Programs"
    ],
    stats: [
      { label: "Elite Athletes Served", value: "50,000+" },
      { label: "Performance Specialists", value: "10,000+" },
      { label: "Recovery Success", value: "96%" }
    ]
  },
  {
    id: "health-wellness",
    name: "Recovery & Wellness",
    description: "Comprehensive recovery systems and wellness optimization for athletes",
    icon: Heart,
    gradient: "from-secondary to-accent",
    features: [
      "Active Recovery Programs",
      "Sleep & Nutrition Optimization",
      "Mental Performance Coaching",
      "Longevity & Prevention"
    ],
    stats: [
      { label: "Recovery Centers", value: "15,000+" },
      { label: "Wellness Experts", value: "5,000+" },
      { label: "Performance Gain", value: "43%" }
    ]
  },
  {
    id: "fitness-performance",
    name: "Training & Performance",
    description: "Elite training systems and data-driven performance enhancement",
    icon: Dumbbell,
    gradient: "from-accent to-primary",
    features: [
      "Personalized Training Plans",
      "Performance Data Analytics",
      "Strength & Conditioning",
      "Movement Optimization"
    ],
    stats: [
      { label: "Training Facilities", value: "8,000+" },
      { label: "Elite Coaches", value: "20,000+" },
      { label: "Performance Improvement", value: "38%" }
    ]
  }
];