export interface ProcessStage {
  step: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  annotation?: string;
}

export const processStages: ProcessStage[] = [
  {
    step: "01",
    name: "The Brainstorm",
    tagline: "Unpacking the unusual and questioning the obvious.",
    description:
      "We begin by deconstructing your ambitions, market conventions, and audience perceptions. We ask awkward questions, challenge 'industry standard' assumptions, and uncover the distinct angle that makes your business memorable.",
    deliverables: [
      "Strategic Immersion Workshop",
      "Competitor Convention Audit",
      "Creative Territory Directions",
    ],
    annotation: "where weird ideas live",
  },
  {
    step: "02",
    name: "The Game Plan",
    tagline: "Turning chaotic brilliance into structured execution.",
    description:
      "No endless meetings or bloated decks. We forge a razor-sharp strategy combining technical architecture, messaging hierarchy, visual moodboards, and a transparent milestone roadmap with zero fluff.",
    deliverables: [
      "Technical Architecture Blueprint",
      "Art Direction & Lookbook",
      "Milestone & Sprint Schedule",
    ],
    annotation: "clarity over complexity",
  },
  {
    step: "03",
    name: "The Making",
    tagline: "Crafting pixels, micro-interactions, and resilient code.",
    description:
      "This is where strategy becomes sensory. Our multidisciplinary team designs and codes in lockstep—crafting custom typography hierarchies, tactile micro-animations, and production-ready Next.js components.",
    deliverables: [
      "Interactive High-Fidelity Prototypes",
      "Production-Grade Next.js Build",
      "Responsive Layout Testing across 360px–4K",
    ],
    annotation: "obsessive craft only",
  },
  {
    step: "04",
    name: "The Big Reveal",
    tagline: "Deploying the exception to the world.",
    description:
      "A flawless rollout with zero panic. We conduct rigorous cross-browser audits, accessibility validations, performance optimization, and provide clear documentation so your team can maintain the platform with ease.",
    deliverables: [
      "Performance & SEO Audit Sign-Off",
      "Production Cloud Deployment",
      "Documentation & Team Handover",
    ],
    annotation: "ready for impact",
  },
];

