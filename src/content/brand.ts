import { BrandInformation } from "@/types";

export const brandInformation: BrandInformation = {
  name: "Oddlyyy",
  tagline: "Be the exception.",
  foundedYear: "2024",
  industry: "Creative Digital Agency",
  mission:
    "To liberate ambitious brands from corporate mediocrity through unconventional visual identity, editorial art direction, and high-performance digital engineering.",
  description:
    "To liberate ambitious brands from corporate mediocrity through unconventional visual identity, editorial art direction, and high-performance digital engineering.",
  manifesto:
    "We believe the internet has grown overwhelmingly safe, sterile, and boring. Most digital agencies build for consensus; Oddlyyy builds for cultural distinction. Being 'odd' is not about superficial weirdness—it is about having the courage to possess an unmistakable point of view.",
  toneAndVoice: [
    "Quirky and irreverent, yet technically rigorous underneath",
    "Bold and confident without corporate jargon or buzzwords",
    "Clever, playful, and contemporary with an editorial sensibility",
    "Direct, transparent, and respectful of the audience's intelligence",
  ],
  contact: {
    email: "hello@oddlyyy.com",
    location: "Remote-First Creative Studio (Operating Globally)",
    responsePromise: "Within 24 business hours",
    workingHours: "Monday – Friday, 09:00 – 18:00 (UTC)",
  },
  contactEmail: "hello@oddlyyy.com",
  location: "Remote-First Creative Studio (Operating Globally)",
  socials: [
    { platform: "Instagram", href: "https://instagram.com", handle: "@oddlyyy" },
    { platform: "Twitter / X", href: "https://twitter.com", handle: "@oddlyyy" },
    { platform: "LinkedIn", href: "https://linkedin.com", handle: "Oddlyyy" },
    { platform: "Dribbble", href: "https://dribbble.com", handle: "oddlyyy" },
  ],
  palette: [
    {
      name: "Warm Cream",
      hex: "#F4E4DC",
      role: "Primary background across all pages",
    },
    {
      name: "Odd Ink",
      hex: "#202028",
      role: "Primary dark for typography, outlines, and inverted dark sections",
    },
    {
      name: "Terracotta",
      hex: "#A04C34",
      role: "Primary accent for buttons, highlights, badges, and micro-interactions",
    },
    {
      name: "Soft Lavender",
      hex: "#E4E0FC",
      role: "Secondary accent for cards, tags, and category chips",
    },
    {
      name: "Soft Mint",
      hex: "#E4F0E8",
      role: "Secondary background for capability cards and alternating sections",
    },
  ],
};

// Aliases for backwards compatibility with agencyInfo imports
export const agencyInfo = brandInformation;

export const threeYsMotif = [
  {
    letter: "Y¹",
    question: "WHY.",
    pillar: "Curiosity",
    meaning: "Interrogating the default",
    elaboration:
      "Why do all websites in your sector look and sound identical? Why does corporate communication feel so detached? We question every tired assumption before designing a single screen.",
  },
  {
    letter: "Y²",
    question: "WHY NOT.",
    pillar: "Unconventional Thinking",
    meaning: "Daring to be distinct",
    elaboration:
      "Why not build tactile friction and real joy into digital experiences? Why not pair editorial typography with instantaneous loading speeds? Why not create work that people actually remember?",
  },
  {
    letter: "Y³",
    question: "WHY SETTLE.",
    pillar: "High Standards",
    meaning: "Rigor beneath the playfulness",
    elaboration:
      "Why settle for bloated templates, generic cookie-cutter designs, or slow load times? We refuse consensus mediocrity in favor of meticulous craft, thoughtful execution, and measurable business outcomes.",
  },
] as const;
