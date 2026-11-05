export interface WhyPillar {
  index: string;
  title: string;
  tagline: string;
  description: string;
  cardVariant: "cream" | "lavender" | "mint" | "ink";
  badge?: string;
  annotation?: string;
}

export const whyPillars: WhyPillar[] = [
  {
    index: "01",
    title: "Creative Thinking",
    tagline: "Breaking free from boring corporate templates.",
    description:
      "Most agencies run to the same design libraries and produce cookie-cutter websites. We approach every brand with fresh eyes, distinctive typography, and playful visual wit that commands attention.",
    cardVariant: "lavender",
    badge: "Unconventional",
    annotation: "no safe mediocrity",
  },
  {
    index: "02",
    title: "Strategy-Led Execution",
    tagline: "Provocative creativity backed by commercial rigor.",
    description:
      "Being 'odd' is meaningless without strategic substance. Every font choice, micro-interaction, and layout shift is engineered to serve your business positioning and convert visitors into loyal advocates.",
    cardVariant: "mint",
    badge: "Calculated",
    annotation: "purpose in every pixel",
  },
  {
    index: "03",
    title: "Design & Development Under One Roof",
    tagline: "Zero friction between concept and codebase.",
    description:
      "We don't toss Figma files over a wall to third-party developers. Designers and software engineers work side-by-side, ensuring subtle hover physics, kinetic reveals, and responsive typography translate flawlessly to production.",
    cardVariant: "cream",
    badge: "Unified Craft",
    annotation: "Next.js + Tailwind native",
  },
  {
    index: "04",
    title: "Flexible Collaboration",
    tagline: "Direct creator access with zero bureaucratic bloat.",
    description:
      "You collaborate directly with the creators building your work—not junior account managers or endless committee layers. Agile sprints, transparent communication, and rapid turnaround cycles.",
    cardVariant: "mint",
    badge: "Direct Access",
    annotation: "talk straight to makers",
  },
  {
    index: "05",
    title: "Solutions Built Around Actual Business Needs",
    tagline: "Bespoke architectures that solve real operational problems.",
    description:
      "We don't push one-size-fits-all packages. From lightning-fast flagship web applications to custom AI workflow automations and brand systems, we build what directly moves your bottom line.",
    cardVariant: "ink",
    badge: "Commercial Value",
    annotation: "measurable return",
  },
];

