
import { Opportunity } from "./types";

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
