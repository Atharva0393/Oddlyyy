import { TeamMember } from "@/types";

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "[Placeholder: Creative Director Name]",
    role: "Founder & Creative Director",
    discipline: "Creative Direction & Brand Identity",
    bio: "Focuses on unconventional editorial art direction, typography systems, and brand narratives that challenge corporate convention.",
    avatarPlaceholder: "/images/team/placeholder-cd.webp",
    quote: "Consensus is where good ideas go to die quietly.",
    funFact: "Believes 90% of serif fonts need more personality.",
    socials: [
      { platform: "Twitter / X", href: "https://twitter.com" },
      { platform: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
  {
    id: "team-2",
    name: "[Placeholder: Technical Lead Name]",
    role: "Partner & Head of Engineering",
    discipline: "Next.js & Frontend Architecture",
    bio: "Obsessed with sub-second performance, strict TypeScript types, micro-interactions, and accessible semantic markup.",
    avatarPlaceholder: "/images/team/placeholder-tech.webp",
    quote: "If it janks on a mid-tier phone, it's not ready to ship.",
    funFact: "Measures page transitions in milliseconds and caffeine in grams.",
    socials: [
      { platform: "GitHub", href: "https://github.com" },
      { platform: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
  {
    id: "team-3",
    name: "[Placeholder: Brand Strategist Name]",
    role: "Lead Brand Strategist",
    discipline: "Cultural Research & Brand Positioning",
    bio: "Translates cultural trends and complex market dynamics into sharp verbal identity, naming, and messaging architectures.",
    avatarPlaceholder: "/images/team/placeholder-strategy.webp",
    quote: "Strategy is choosing what you refuse to do.",
    funFact: "Collects obscure vintage brand identity manuals from the 1970s.",
    socials: [
      { platform: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
  {
    id: "team-4",
    name: "[Placeholder: Interactive Designer Name]",
    role: "Senior Interactive & Motion Designer",
    discipline: "Creative Coding & Micro-physics",
    bio: "Bridges the gap between static design and kinetic interactivity, choreographing tactile animations and experimental web moments.",
    avatarPlaceholder: "/images/team/placeholder-interactive.webp",
    quote: "Physics on the web shouldn't mimic reality—it should feel better.",
    funFact: "Writes custom GLSL shaders for fun on weekend mornings.",
    socials: [
      { platform: "Dribbble", href: "https://dribbble.com" },
      { platform: "Twitter / X", href: "https://twitter.com" },
    ],
  },
];
