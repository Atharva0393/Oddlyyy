/**
 * Oddlyyy Core TypeScript Definitions
 * Strict types for scalable multi-page agency architecture.
 */

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavigationConfig {
  headerNav: NavItem[];
  primaryCta: {
    label: string;
    href: string;
  };
  footerNav: {
    title: string;
    links: NavItem[];
  }[];
}

export type ServiceCategory =
  | "Digital & Development"
  | "AI & Automation"
  | "Branding & Creative"
  | "Marketing & Content"
  | "The Odd Jobs";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  title: string; // backwards compatibility alias for name
  slug: string;
  category: ServiceCategory;
  index: string;
  tagline: string;
  shortDescription: string;
  description: string; // backwards compatibility alias for shortDescription
  detailedDescription: string;
  detailedOverview: string; // backwards compatibility alias
  features: string[];
  servicesIncluded?: string[];
  problemsSolved?: string[];
  toolsAndTechnologies?: string[];
  deliverables: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  ctaText: string;
  illustration?: string;
  image?: string;
  cardVariant?: "cream" | "lavender" | "mint" | "ink";
}

export interface ProjectImages {
  cover?: string;
  hero?: string;
  gallery?: string[];
}

export interface ProjectItem {
  id: string;
  projectName: string;
  title: string; // backwards compatibility alias for projectName
  slug: string;
  client: string; // Clearly marked placeholder
  industry: string;
  projectCategory: string;
  category: string; // backwards compatibility alias
  year: string;
  description: string;
  summary: string; // backwards compatibility alias for description
  challenge: string;
  approach: string;
  solution: string;
  deliverables: string[];
  technologiesUsed: string[];
  tags: string[]; // backwards compatibility alias
  images: ProjectImages;
  outcome: string;
  badge?: string;
  cardColor?: "cream" | "lavender" | "mint";
  isConcept?: boolean;
  conceptNote?: string;
  gridSpan?: "wide" | "normal" | "tall";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry?: string;
  projectType?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  discipline: string;
  bio: string;
  avatarPlaceholder: string;
  socials?: {
    platform: string;
    href: string;
  }[];
  quote?: string;
  funFact?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Services & Process" | "Pricing & Engagements" | "Technical Standards";
}

export interface ThreeYsMotifItem {
  letter: string;
  question: string;
  pillar: string;
  meaning: string;
  elaboration: string;
}

export interface BrandInformation {
  name: string;
  tagline: string;
  foundedYear: string;
  industry: string;
  mission: string;
  description?: string; // backwards compatibility alias for mission
  manifesto: string;
  toneAndVoice: string[];
  contact: {
    email: string;
    location: string;
    responsePromise: string;
    workingHours: string;
  };
  contactEmail?: string; // backwards compatibility alias for contact.email
  location?: string; // backwards compatibility alias for contact.location
  socials: {
    platform: string;
    href: string;
    handle: string;
  }[];
  palette: {
    name: string;
    hex: string;
    role: string;
  }[];
}

export type AgencyInfo = BrandInformation; // Alias for agencyInfo compatibility
