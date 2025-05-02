
import { LucideIcon } from "lucide-react";

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
  icon: LucideIcon;
  link: string;
  industries: string[];
}
