import { FaqItem } from "@/types";

export const faqCategories = [
  "General",
  "Services & Process",
  "Pricing & Engagements",
  "Technical Standards",
] as const;

export const faqsData: FaqItem[] = [
  // General
  {
    id: "faq-1",
    category: "General",
    question: "What does 'Be the exception' mean for your clients?",
    answer:
      "Most digital agencies design to fit comfortably into current aesthetic trends. Oddlyyy designs to deliberately deviate—creating high-contrast, memorable digital identities and web platforms that command market attention while maintaining pristine technical execution.",
  },
  {
    id: "faq-2",
    category: "General",
    question: "Where is Oddlyyy located and how do you work with remote clients?",
    answer:
      "We operate as a remote-first creative studio with collaborators across global hubs. We collaborate synchronously via brief milestone sprints and asynchronously via collaborative tools like Figma, GitHub, and dedicated project hubs.",
  },

  // Services & Process
  {
    id: "faq-3",
    category: "Services & Process",
    question: "How do we get started on a project together?",
    answer:
      "Every project begins with an initial inquiry via our contact form. We review your goals and schedule a 30-minute discovery conversation to assess mutual fit, scope, and target timelines before presenting a focused proposal.",
  },
  {
    id: "faq-4",
    category: "Services & Process",
    question: "What is your typical project timeline?",
    answer:
      "Brand identity engagements typically run 4 to 8 weeks. Custom Next.js web platforms generally span 6 to 12 weeks depending on custom 3D/motion requirements and CMS architecture. Focused Odd Job sprints run 1 to 2 weeks.",
  },
  {
    id: "faq-5",
    category: "Services & Process",
    question: "Will we work directly with the creators or through an account manager?",
    answer:
      "You collaborate directly with the creative directors, strategists, and engineers designing and writing the code for your project. We do not use intermediary account managers.",
  },

  // Pricing & Engagements
  {
    id: "faq-6",
    category: "Pricing & Engagements",
    question: "How are your projects scoped and priced?",
    answer:
      "We operate primarily on fixed-scope, milestone-based project engagements with clear deliverables and transparent payment schedules. For ongoing initiatives, we offer dedicated quarterly advisory retainers.",
  },
  {
    id: "faq-7",
    category: "Pricing & Engagements",
    question: "What size clients do you typically partner with?",
    answer:
      "We work with ambitious early-stage founders launching new ventures, established companies undergoing strategic repositioning, and cultural institutions seeking unconventional digital activations.",
  },

  // Technical Standards
  {
    id: "faq-8",
    category: "Technical Standards",
    question: "What web frameworks and technologies do you standardize on?",
    answer:
      "Our standard web development stack is Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. We prioritize semantic HTML, minimal third-party dependencies, and sub-second load times.",
  },
  {
    id: "faq-9",
    category: "Technical Standards",
    question: "Do you build for accessibility (WCAG compliance)?",
    answer:
      "Yes. Every component in our design system is audited for keyboard navigation, focus indicators, semantic ARIA roles, and high-contrast color ratios conforming to WCAG 2.1 AA standards.",
  },
];

