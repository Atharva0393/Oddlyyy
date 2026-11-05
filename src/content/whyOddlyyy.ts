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
    title: "Design & Digital Craft Under One Roof",
    tagline: "Zero friction between creative vision and the final experience.",
    description:
      "We never outsource or hand off files to disconnected third parties. Our strategists, designers, and digital makers work side-by-side, ensuring subtle details, intuitive interactions, and elegant typography translate flawlessly to reality.",
    cardVariant: "cream",
    badge: "Unified Craft",
    annotation: "from vision to reality",
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
    tagline: "Bespoke digital solutions that solve real operational challenges.",
    description:
      "We don't push one-size-fits-all packages. From captivating business websites to intelligent workflow automations and brand systems, we build what directly moves your bottom line.",
    cardVariant: "ink",
    badge: "Commercial Value",
    annotation: "measurable return",
  },
];

