import { 
  Activity, Heart, Dumbbell, Brain, Leaf, Sparkles,
  Wind, Droplets, Sun, Moon, Flame, Waves, HandMetal,
  Eye, Zap, Target, Shield, Flower2, Users, BookOpen
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface BlogTopic {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  gradient: string;
  content?: {
    overview: string;
    benefits: string[];
    approaches: string[];
  };
}

export const blogCategories = [
  "All Topics",
  "Movement & Body Mechanics",
  "Manual & Bodywork Therapies",
  "Eastern & Alternative Medicine",
  "Mind-Body Practices",
  "Athletic & Performance",
  "Therapeutic Modalities"
];

export const blogTopics: BlogTopic[] = [
  // Movement & Body Mechanics
  {
    id: "pain-management",
    title: "Pain Management",
    description: "Natural approaches to managing chronic and acute pain without invasive procedures",
    icon: Shield,
    category: "Movement & Body Mechanics",
    gradient: "from-red-500 to-orange-500",
    content: {
      overview: "Pain management encompasses various natural and holistic approaches to reduce discomfort and improve quality of life. Understanding the root causes of pain and addressing them through multiple modalities can lead to lasting relief.",
      benefits: [
        "Reduced reliance on medications",
        "Improved mobility and function",
        "Better quality of life",
        "Long-term pain relief",
        "Enhanced body awareness"
      ],
      approaches: [
        "Physical therapy and movement",
        "Mind-body techniques",
        "Manual therapy",
        "Lifestyle modifications",
        "Natural supplements"
      ]
    }
  },
  {
    id: "chiropractice",
    title: "Chiropractic Care",
    description: "Spinal alignment and adjustment techniques for optimal nervous system function",
    icon: Activity,
    category: "Movement & Body Mechanics",
    gradient: "from-blue-500 to-cyan-500",
    content: {
      overview: "Chiropractic care focuses on the diagnosis and treatment of musculoskeletal disorders, particularly those affecting the spine. Through manual adjustments and manipulations, chiropractors help restore proper alignment and function.",
      benefits: [
        "Improved spinal alignment",
        "Reduced back and neck pain",
        "Enhanced nervous system function",
        "Better posture",
        "Increased range of motion"
      ],
      approaches: [
        "Spinal adjustments",
        "Soft tissue therapy",
        "Rehabilitative exercises",
        "Postural training",
        "Lifestyle counseling"
      ]
    }
  },
  {
    id: "fascia-health",
    title: "Fascia Health",
    description: "Understanding and treating the connective tissue network throughout the body",
    icon: Waves,
    category: "Movement & Body Mechanics",
    gradient: "from-purple-500 to-pink-500",
    content: {
      overview: "Fascia is the web-like connective tissue that surrounds muscles, bones, and organs. Healthy fascia is essential for pain-free movement, flexibility, and overall body function.",
      benefits: [
        "Improved flexibility and mobility",
        "Reduced muscle tension",
        "Better posture and alignment",
        "Enhanced athletic performance",
        "Decreased pain and stiffness"
      ],
      approaches: [
        "Myofascial release",
        "Foam rolling and self-massage",
        "Stretching and mobility work",
        "Hydration and nutrition",
        "Movement practices"
      ]
    }
  },
  {
    id: "knee-health",
    title: "Knee Health & Joint Care",
    description: "Comprehensive approaches to maintaining healthy knees and preventing injury",
    icon: Target,
    category: "Movement & Body Mechanics",
    gradient: "from-green-500 to-emerald-500",
    content: {
      overview: "Knee health is crucial for maintaining an active lifestyle. Through proper strengthening, mobility work, and preventive care, you can keep your knees healthy and pain-free for years to come.",
      benefits: [
        "Reduced knee pain",
        "Improved stability and balance",
        "Enhanced athletic performance",
        "Injury prevention",
        "Better quality of life"
      ],
      approaches: [
        "Strengthening exercises",
        "Mobility and flexibility training",
        "Proper biomechanics",
        "Weight management",
        "Anti-inflammatory nutrition"
      ]
    }
  },
  {
    id: "postural-alignment",
    title: "Postural Alignment",
    description: "Correcting posture for better health, reduced pain, and improved function",
    icon: Users,
    category: "Movement & Body Mechanics",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: "biomechanics",
    title: "Biomechanics & Movement",
    description: "Understanding how the body moves for optimal performance and injury prevention",
    icon: Zap,
    category: "Movement & Body Mechanics",
    gradient: "from-yellow-500 to-orange-500",
  },

  // Manual & Bodywork Therapies
  {
    id: "massage-therapy",
    title: "Massage Therapy",
    description: "Therapeutic touch techniques for relaxation, pain relief, and healing",
    icon: HandMetal,
    category: "Manual & Bodywork Therapies",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: "myofascial-release",
    title: "Myofascial Release",
    description: "Gentle sustained pressure to release fascial restrictions and restore motion",
    icon: Waves,
    category: "Manual & Bodywork Therapies",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "trigger-point-therapy",
    title: "Trigger Point Therapy",
    description: "Targeted treatment of muscle knots and tender points for pain relief",
    icon: Target,
    category: "Manual & Bodywork Therapies",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: "reflexology",
    title: "Reflexology",
    description: "Pressure point therapy on feet, hands, and ears for whole-body wellness",
    icon: Sparkles,
    category: "Manual & Bodywork Therapies",
    gradient: "from-purple-500 to-indigo-500",
  },

  // Eastern & Alternative Medicine
  {
    id: "acupuncture",
    title: "Acupuncture & TCM",
    description: "Traditional Chinese Medicine approaches to balance energy and promote healing",
    icon: Zap,
    category: "Eastern & Alternative Medicine",
    gradient: "from-amber-500 to-red-500",
  },
  {
    id: "herbal-medicine",
    title: "Herbal Medicine",
    description: "Plant-based remedies and natural supplements for health and wellness",
    icon: Leaf,
    category: "Eastern & Alternative Medicine",
    gradient: "from-green-500 to-lime-500",
  },
  {
    id: "ayurveda",
    title: "Ayurveda",
    description: "Ancient Indian medicine system focusing on balance and natural healing",
    icon: Flower2,
    category: "Eastern & Alternative Medicine",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    id: "energy-healing",
    title: "Energy Healing & Reiki",
    description: "Subtle energy work to promote balance, relaxation, and healing",
    icon: Sparkles,
    category: "Eastern & Alternative Medicine",
    gradient: "from-violet-500 to-purple-500",
  },

  // Mind-Body Practices
  {
    id: "yoga-therapy",
    title: "Yoga Therapy",
    description: "Therapeutic application of yoga practices for physical and mental health",
    icon: Heart,
    category: "Mind-Body Practices",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: "meditation",
    title: "Meditation & Mindfulness",
    description: "Mental training practices for stress reduction and enhanced well-being",
    icon: Brain,
    category: "Mind-Body Practices",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: "breathwork",
    title: "Breathing & Breathwork",
    description: "Conscious breathing techniques for stress relief and vitality",
    icon: Wind,
    category: "Mind-Body Practices",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: "pilates",
    title: "Pilates",
    description: "Low-impact exercises focusing on core strength, flexibility, and alignment",
    icon: Dumbbell,
    category: "Mind-Body Practices",
    gradient: "from-purple-500 to-pink-500",
  },

  // Athletic & Performance
  {
    id: "sports-wellness",
    title: "Natural Wellness in Sports",
    description: "Holistic approaches to athletic performance and recovery",
    icon: Activity,
    category: "Athletic & Performance",
    gradient: "from-green-500 to-blue-500",
  },
  {
    id: "sports-rehab",
    title: "Sports Rehabilitation",
    description: "Natural recovery protocols for athletic injuries and performance enhancement",
    icon: Shield,
    category: "Athletic & Performance",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: "injury-prevention",
    title: "Injury Prevention",
    description: "Proactive strategies to reduce injury risk and maintain peak performance",
    icon: Target,
    category: "Athletic & Performance",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: "recovery-protocols",
    title: "Recovery Protocols",
    description: "Natural methods for faster recovery and optimal performance",
    icon: Moon,
    category: "Athletic & Performance",
    gradient: "from-indigo-500 to-purple-500",
  },

  // Therapeutic Modalities
  {
    id: "cold-therapy",
    title: "Cold Therapy",
    description: "Cryotherapy and cold exposure for recovery, inflammation reduction, and vitality",
    icon: Droplets,
    category: "Therapeutic Modalities",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "heat-therapy",
    title: "Heat & Hydrotherapy",
    description: "Therapeutic use of heat and water for healing and relaxation",
    icon: Flame,
    category: "Therapeutic Modalities",
    gradient: "from-red-500 to-orange-500",
  },
  {
    id: "light-therapy",
    title: "Light Therapy",
    description: "Photobiomodulation and light exposure for health optimization",
    icon: Sun,
    category: "Therapeutic Modalities",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    id: "sound-therapy",
    title: "Sound Therapy",
    description: "Vibrational healing through sound frequencies and music",
    icon: Waves,
    category: "Therapeutic Modalities",
    gradient: "from-purple-500 to-pink-500",
  },
];
