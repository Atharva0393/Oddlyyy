import { TeamMember } from "@/types";

export interface FounderProfile extends TeamMember {
  expertise: string[];
  statusNote: string;
  isFounder: boolean;
}

export const foundersData: FounderProfile[] = [
  {
    id: "founder-1",
    name: "Atharva Kale",
    role: "Founder & Creative / Technical Lead",
    discipline: "Design Engineering & Creative Direction",
    bio: "Operates at the exact collision of brand identity and high-performance digital engineering. Believes the most compelling digital experiences happen when designers know how to code and engineers obsess over typography.",
    expertise: [
      "Creative Direction",
      "Full-Stack Architecture",
      "Interactive WebGL & Motion",
      "Brand Identity Systems",
    ],
    avatarPlaceholder: "/images/team/atharva-kale.webp",
    quote: "Safe work is the only genuine business risk.",
    funFact: "In the code and design every single day.",
    statusNote: "Direct Senior Collaboration",
    isFounder: true,
    socials: [
      { platform: "GitHub", href: "https://github.com/Atharva0393" },
      { platform: "LinkedIn", href: "https://linkedin.com" },
      { platform: "Twitter / X", href: "https://x.com" },
    ],
  },
  {
    id: "founder-2",
    name: "Senior Studio Practice",
    role: "Studio Partner & Experience Strategy",
    discipline: "Cultural Strategy & Digital Experience",
    bio: "Agile senior collaboration across visual identity, market positioning, and full-stack delivery. We eliminate agency account-manager layers so clients collaborate directly with senior makers who think, design, and ship.",
    expertise: [
      "Market Positioning",
      "Conversion UX & Funnels",
      "Bespoke Digital Flagships",
      "AI & Process Automation",
    ],
    avatarPlaceholder: "/images/team/studio-partner.webp",
    quote: "Close to the work. Close to the clients. Zero fluff.",
    funFact: "Operates in concentrated 2-week delivery sprints.",
    statusNote: "Open Senior Collaboration",
    isFounder: true,
    socials: [
      { platform: "LinkedIn", href: "https://linkedin.com" },
      { platform: "Studio Inquiry", href: "/contact" },
    ],
  },
];

// Backwards compatibility alias
export const teamData = foundersData;
