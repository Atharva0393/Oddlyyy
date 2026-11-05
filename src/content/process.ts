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
      "We begin by deconstructing your ambitions, market conventions, and audience perceptions. We ask thoughtful questions, challenge 'industry standard' assumptions, and uncover the distinct angle that makes your business memorable.",
    deliverables: [
      "Strategic Immersion Workshop",
      "Competitor Convention Audit",
      "Creative Territory Directions",
    ],
    annotation: "where bold ideas live",
  },
  {
    step: "02",
    name: "The Game Plan",
    tagline: "Turning creative vision into structured execution.",
    description:
      "No endless meetings or bloated decks. We forge a razor-sharp strategy combining project roadmap, messaging hierarchy, visual moodboards, and a transparent milestone schedule with zero fluff.",
    deliverables: [
      "Solution Architecture & Roadmap",
      "Art Direction & Lookbook",
      "Milestone & Sprint Schedule",
    ],
    annotation: "clarity over complexity",
  },
  {
    step: "03",
    name: "The Making",
    tagline: "Bringing your brand and digital experience to life.",
    description:
      "This is where strategy becomes sensory. We craft your visual identity, intuitive customer journeys, tactile micro-interactions, and high-performance digital experience in lockstep.",
    deliverables: [
      "Interactive High-Fidelity Prototypes",
      "Production-Ready Digital Experience",
      "Seamless Multi-Device Testing",
    ],
    annotation: "obsessive craft only",
  },
  {
    step: "04",
    name: "The Big Reveal",
    tagline: "Deploying the exception to the world.",
    description:
      "A flawless launch with zero panic. We conduct rigorous quality checks, speed audits, multi-device verifications, and provide simple team training so you can manage your new solution with confidence.",
    deliverables: [
      "Speed & Search Optimization Sign-Off",
      "Live Public Launch & Handover",
      "Team Onboarding & Operating Guide",
    ],
    annotation: "ready for impact",
  },
];
