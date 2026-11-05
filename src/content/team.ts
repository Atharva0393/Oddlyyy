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
    role: "Partner & Head of Digital Experience",
    discipline: "Digital Platforms & Experience Architecture",
    bio: "Obsessed with lightning-fast speeds, seamless mobile usability, tactile micro-interactions, and flawless customer journeys.",
    avatarPlaceholder: "/images/team/placeholder-tech.webp",
    quote: "If it stutters on a mobile phone, it's not ready to ship.",
    funFact: "Measures customer delight in seconds and coffee in grams.",
    socials: [
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
    discipline: "Interactive Experiences & Motion Design",
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
