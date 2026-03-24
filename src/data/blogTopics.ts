import { 
  Leaf, Sprout, Store, Users, Briefcase, TrendingUp,
  Recycle, Heart, Apple, Sun, Droplets, Home, Flower2,
  Globe, Lightbulb, BookOpen, Handshake, Target, Shield
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
  "Sustainable Living",
  "Urban Gardening",
  "Local Food Systems",
  "Community Building",
  "Youth & Education",
  "Business & Economy"
];

export const blogTopics: BlogTopic[] = [
  // Sustainable Living
  {
    id: "zero-waste-lifestyle",
    title: "Zero Waste Lifestyle",
    description: "Practical tips for reducing waste and living more sustainably",
    icon: Recycle,
    category: "Sustainable Living",
    gradient: "from-green-500 to-emerald-500",
    content: {
      overview: "Zero waste living is about reducing what we consume, reusing what we can, and recycling the rest. It's a journey toward a more sustainable lifestyle.",
      benefits: [
        "Reduced environmental impact",
        "Save money on unnecessary purchases",
        "Healthier living environment",
        "Support sustainable businesses",
        "Create positive community change"
      ],
      approaches: [
        "Start with one room or area",
        "Replace disposables with reusables",
        "Shop at bulk stores",
        "Compost food scraps",
        "Choose package-free products"
      ]
    }
  },
  {
    id: "sustainable-home",
    title: "Sustainable Home",
    description: "Create an eco-friendly home with simple, effective changes",
    icon: Home,
    category: "Sustainable Living",
    gradient: "from-amber-500 to-orange-500",
    content: {
      overview: "Making your home more sustainable doesn't require major renovations. Small changes in daily habits and product choices can make a big difference.",
      benefits: [
        "Lower energy bills",
        "Healthier indoor air quality",
        "Reduced carbon footprint",
        "Increased home value",
        "Better for family health"
      ],
      approaches: [
        "Switch to LED lighting",
        "Use natural cleaning products",
        "Improve insulation",
        "Install water-saving fixtures",
        "Choose sustainable materials"
      ]
    }
  },
  {
    id: "conscious-consumption",
    title: "Conscious Consumption",
    description: "Make mindful choices about what you buy and why",
    icon: Heart,
    category: "Sustainable Living",
    gradient: "from-pink-500 to-rose-500",
    content: {
      overview: "Conscious consumption is about being intentional with your purchases — considering the social, environmental, and economic impact of every buying decision.",
      benefits: [
        "Reduced environmental footprint",
        "Support ethical businesses",
        "Less clutter, more intentional living",
        "Save money by buying less but better",
        "Drive positive market change through demand"
      ],
      approaches: [
        "Research brands before buying",
        "Adopt a 'one in, one out' rule",
        "Prioritize quality over quantity",
        "Support local and fair-trade products",
        "Practice the 30-day rule for non-essential purchases"
      ]
    }
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy",
    description: "Understanding and adopting clean energy solutions",
    icon: Sun,
    category: "Sustainable Living",
    gradient: "from-yellow-500 to-amber-500",
    content: {
      overview: "Renewable energy sources like solar, wind, and hydro power are becoming more accessible for households. Understanding your options is the first step to reducing your carbon footprint.",
      benefits: [
        "Lower electricity costs long-term",
        "Energy independence",
        "Reduce carbon emissions",
        "Increase property value",
        "Government incentives available"
      ],
      approaches: [
        "Evaluate your energy usage patterns",
        "Research solar panel options for your home",
        "Switch to a green energy provider",
        "Consider community solar programs",
        "Invest in energy-efficient appliances"
      ]
    }
  },

  // Urban Gardening
  {
    id: "balcony-gardening",
    title: "Balcony Gardening",
    description: "Grow food and flowers in small spaces",
    icon: Sprout,
    category: "Urban Gardening",
    gradient: "from-green-500 to-lime-500",
    content: {
      overview: "You don't need a big yard to grow your own food. Balconies, windowsills, and small patios can become productive gardens.",
      benefits: [
        "Fresh herbs and vegetables at home",
        "Reduce grocery bills",
        "Therapeutic gardening experience",
        "Improve air quality",
        "Connect with nature in the city"
      ],
      approaches: [
        "Start with herbs and greens",
        "Use vertical space wisely",
        "Choose appropriate containers",
        "Ensure proper drainage",
        "Consider sunlight requirements"
      ]
    }
  },
  {
    id: "composting-basics",
    title: "Composting Basics",
    description: "Turn kitchen scraps into garden gold",
    icon: Leaf,
    category: "Urban Gardening",
    gradient: "from-emerald-500 to-green-500",
    content: {
      overview: "Composting transforms organic waste into nutrient-rich soil amendment. Whether you have a backyard or just a kitchen counter, there's a composting method for you.",
      benefits: [
        "Reduce household waste by up to 30%",
        "Create free, nutrient-rich fertilizer",
        "Improve soil health and water retention",
        "Reduce methane from landfills",
        "Complete the food cycle naturally"
      ],
      approaches: [
        "Start with a simple kitchen compost bin",
        "Try vermicomposting (worm composting) for apartments",
        "Learn the green-to-brown ratio (nitrogen vs carbon)",
        "Use bokashi for meat and dairy scraps",
        "Join a community composting program"
      ]
    }
  },
  {
    id: "seasonal-planting",
    title: "Seasonal Planting Guide",
    description: "What to plant and when for best results",
    icon: Flower2,
    category: "Urban Gardening",
    gradient: "from-purple-500 to-pink-500",
    content: {
      overview: "Knowing when to plant is just as important as knowing what to plant. A seasonal approach ensures higher yields and healthier plants.",
      benefits: [
        "Higher success rate for crops",
        "Year-round fresh produce",
        "Better pest and disease management",
        "Optimal use of growing conditions",
        "More diverse diet throughout the year"
      ],
      approaches: [
        "Learn your local frost dates",
        "Start seeds indoors 6-8 weeks early",
        "Use succession planting for continuous harvests",
        "Plant cool-season crops in spring and fall",
        "Extend the season with cold frames or row covers"
      ]
    }
  },
  {
    id: "water-conservation",
    title: "Water Conservation",
    description: "Smart watering techniques and water-wise gardening",
    icon: Droplets,
    category: "Urban Gardening",
    gradient: "from-blue-500 to-cyan-500",
    content: {
      overview: "Water is a precious resource. Smart watering techniques can dramatically reduce water usage while keeping your garden thriving.",
      benefits: [
        "Lower water bills",
        "Healthier, more drought-resistant plants",
        "Reduced environmental impact",
        "Less time spent watering",
        "Better soil structure over time"
      ],
      approaches: [
        "Install drip irrigation systems",
        "Mulch garden beds to retain moisture",
        "Collect rainwater in barrels",
        "Water early morning or late evening",
        "Choose drought-tolerant plant varieties"
      ]
    }
  },

  // Local Food Systems
  {
    id: "farm-to-table",
    title: "Farm to Table Movement",
    description: "Support local farmers and eat fresher food",
    icon: Store,
    category: "Local Food Systems",
    gradient: "from-orange-500 to-red-500",
    content: {
      overview: "The farm-to-table movement connects consumers directly with local food producers, creating a more sustainable and transparent food system.",
      benefits: [
        "Fresher, more nutritious food",
        "Support local economy",
        "Reduce food miles",
        "Know where food comes from",
        "Seasonal eating variety"
      ],
      approaches: [
        "Shop at farmers markets",
        "Join a CSA program",
        "Visit local farms",
        "Choose seasonal produce",
        "Build relationships with farmers"
      ]
    }
  },
  {
    id: "food-preservation",
    title: "Food Preservation",
    description: "Traditional methods to reduce food waste",
    icon: Apple,
    category: "Local Food Systems",
    gradient: "from-red-500 to-orange-500",
    content: {
      overview: "Food preservation techniques have been used for centuries. Learning these methods helps reduce waste and enjoy seasonal produce year-round.",
      benefits: [
        "Reduce food waste significantly",
        "Enjoy seasonal produce all year",
        "Save money on groceries",
        "Preserve nutritional value",
        "Connect with traditional food culture"
      ],
      approaches: [
        "Learn basic canning and jarring",
        "Try fermentation (sauerkraut, kimchi)",
        "Use dehydration for fruits and herbs",
        "Freeze produce at peak freshness",
        "Explore pickling and brining techniques"
      ]
    }
  },
  {
    id: "local-sourcing",
    title: "Local Sourcing Guide",
    description: "Find and support local food producers",
    icon: Target,
    category: "Local Food Systems",
    gradient: "from-teal-500 to-cyan-500",
    content: {
      overview: "Sourcing food locally strengthens your community's economy and reduces the environmental impact of transportation while giving you access to fresher products.",
      benefits: [
        "Fresher, better-tasting food",
        "Support local jobs and economy",
        "Lower carbon footprint from transport",
        "Build relationships with producers",
        "Greater food transparency"
      ],
      approaches: [
        "Map out farmers markets near you",
        "Join a local food co-op",
        "Subscribe to CSA (Community Supported Agriculture)",
        "Use apps that connect you with local producers",
        "Visit farms and attend open days"
      ]
    }
  },

  // Community Building
  {
    id: "community-gardens",
    title: "Community Gardens",
    description: "Growing food and friendships together",
    icon: Users,
    category: "Community Building",
    gradient: "from-indigo-500 to-purple-500",
    content: {
      overview: "Community gardens bring neighbors together to grow food, share knowledge, and build stronger local communities.",
      benefits: [
        "Access to gardening space",
        "Learn from experienced gardeners",
        "Build community connections",
        "Fresh food for families",
        "Green spaces in urban areas"
      ],
      approaches: [
        "Find local garden organizations",
        "Join waiting lists early",
        "Participate in work days",
        "Share your harvest",
        "Teach what you know"
      ]
    }
  },
  {
    id: "barter-exchange",
    title: "Barter & Exchange",
    description: "Trade goods and services without money",
    icon: Handshake,
    category: "Community Building",
    gradient: "from-cyan-500 to-blue-500",
    content: {
      overview: "Barter and exchange systems are making a comeback as communities seek alternatives to traditional commerce. Trading skills, goods, and time builds stronger local networks.",
      benefits: [
        "Access goods without spending money",
        "Build community trust and connections",
        "Reduce consumption and waste",
        "Value skills and time equally",
        "Create resilient local economies"
      ],
      approaches: [
        "Join local barter groups or apps",
        "Offer your skills in time banks",
        "Organize neighborhood swap events",
        "Start a tool or equipment sharing library",
        "Create a community skills directory"
      ]
    }
  },
  {
    id: "skill-sharing",
    title: "Skill Sharing Networks",
    description: "Teach what you know, learn what you don't",
    icon: Lightbulb,
    category: "Community Building",
    gradient: "from-yellow-500 to-orange-500",
    content: {
      overview: "Skill sharing networks connect people who want to learn with those who can teach. From cooking to coding, gardening to guitar — everyone has something valuable to share.",
      benefits: [
        "Learn new skills for free",
        "Meet people with shared interests",
        "Build confidence through teaching",
        "Strengthen community bonds",
        "Reduce reliance on paid services"
      ],
      approaches: [
        "Host a workshop at your local community center",
        "Join online skill-swap platforms",
        "Start a neighborhood learning circle",
        "Partner with local libraries for space",
        "Create a skills map of your community"
      ]
    }
  },

  // Youth & Education
  {
    id: "youth-entrepreneurship",
    title: "Youth Entrepreneurship",
    description: "Helping young people start sustainable businesses",
    icon: Briefcase,
    category: "Youth & Education",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: "environmental-education",
    title: "Environmental Education",
    description: "Teaching the next generation about sustainability",
    icon: BookOpen,
    category: "Youth & Education",
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: "student-programs",
    title: "Student Programs",
    description: "Opportunities for students to get involved",
    icon: Users,
    category: "Youth & Education",
    gradient: "from-purple-500 to-pink-500",
  },

  // Business & Economy
  {
    id: "sustainable-business",
    title: "Sustainable Business",
    description: "Building businesses that benefit people and planet",
    icon: TrendingUp,
    category: "Business & Economy",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: "circular-economy",
    title: "Circular Economy",
    description: "Design out waste and keep materials in use",
    icon: Recycle,
    category: "Business & Economy",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "local-economy",
    title: "Local Economy",
    description: "Supporting and strengthening local businesses",
    icon: Globe,
    category: "Business & Economy",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "impact-investing",
    title: "Impact Investing",
    description: "Investing in businesses that create positive change",
    icon: Shield,
    category: "Business & Economy",
    gradient: "from-indigo-500 to-purple-500",
  },
];
