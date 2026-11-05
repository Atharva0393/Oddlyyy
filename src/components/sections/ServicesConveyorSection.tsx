"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SushiConveyorMenu, {
  ConveyorDish,
} from "@/components/ui/sushi-conveyor-menu";

export const SERVICE_CONVEYOR_DISHES: ConveyorDish[] = [
  {
    id: "digital-platforms",
    name: "Digital Platforms",
    slug: "digital-platforms",
    href: "/services/digital-platforms",
    price: "$4,800+",
    tier: 1,
    description:
      "High-performance web flagships engineered with Next.js 15, strict TypeScript, and fluid kinetic physics.",
    details: [
      "Next.js 15 & React 19",
      "Sub-second load times",
      "Token Design Systems",
      "Headless CMS",
    ],
    image: "",
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    slug: "ai-automation",
    href: "/services/ai-automation",
    price: "$3,600+",
    tier: 2,
    description:
      "Intelligent workflows, AI agents, and bespoke business automations eliminating manual friction.",
    details: [
      "Autonomous Workflows",
      "Custom API Integrations",
      "Internal Operations AI",
      "Zero Manual Friction",
    ],
    image: "",
  },
  {
    id: "brand-identity",
    name: "Brand Identity",
    slug: "brand-identity",
    href: "/services/brand-identity",
    price: "$5,200+",
    tier: 3,
    description:
      "Distinct visual identities, Swiss editorial typography, and unmistakable design systems.",
    details: [
      "Editorial Typography",
      "Dynamic Design Tokens",
      "Motion Physics",
      "Brand Guidelines",
    ],
    image: "",
  },
  {
    id: "content-campaigns",
    name: "Marketing & Content",
    slug: "content-campaigns",
    href: "/services/content-campaigns",
    price: "$3,200+",
    tier: 4,
    description:
      "Organic narrative campaigns, copy architecture, and multi-channel campaign collateral built for conversion.",
    details: [
      "Copywriting Architecture",
      "Interactive Storytelling",
      "Campaign Creative",
      "Conversion Strategy",
    ],
    image: "",
  },
  {
    id: "the-odd-jobs",
    name: "The Odd Jobs",
    slug: "the-odd-jobs",
    href: "/services/the-odd-jobs",
    price: "$6,000+",
    tier: 5,
    description:
      "Experimental prototypes, WebGL shaders, spatial audio, and wild-card creative technology.",
    details: [
      "WebGL & 3D Interactive",
      "Spatial Audio Scoring",
      "Creative Engineering",
      "Rapid Prototyping",
    ],
    image: "",
  },
  {
    id: "nextjs-flagships",
    name: "Next.js Flagships",
    slug: "digital-platforms",
    href: "/services/digital-platforms",
    price: "$4,800+",
    tier: 1,
    description:
      "Engineered for sub-second speeds, flawless Lighthouse scores, and bespoke responsive layouts.",
    details: [
      "Micro-Interactions",
      "Edge SSR & ISR",
      "Modern WebGL",
      "Accessibility AAA",
    ],
    image: "",
  },
  {
    id: "autonomous-agents",
    name: "Autonomous Agents",
    slug: "ai-automation",
    href: "/services/ai-automation",
    price: "$3,600+",
    tier: 2,
    description:
      "Custom agentic systems and tool pipelines automating operations, data parsing, and triage.",
    details: [
      "LangChain & OpenAI",
      "Real-time RAG",
      "Human-in-the-Loop",
      "Self-Healing Pipelines",
    ],
    image: "",
  },
  {
    id: "design-systems",
    name: "Design Systems",
    slug: "brand-identity",
    href: "/services/brand-identity",
    price: "$5,200+",
    tier: 3,
    description:
      "Scalable design tokens, accessible UI kits, and unified brand governance across code and Figma.",
    details: [
      "Figma Variables",
      "Tailwind Multi-Theme",
      "Component Libraries",
      "Living Styleguides",
    ],
    image: "",
  },
];

export const SERVICE_BELT_LEGEND = {
  1: "$4,800+ (Web)",
  2: "$3,600+ (AI)",
  3: "$5,200+ (Brand)",
  4: "$3,200+ (Content)",
  5: "$6,000+ (Experimental)",
};

interface ServicesConveyorSectionProps {
  autoplay?: boolean;
}

export function ServicesConveyorSection({
  autoplay = true,
}: ServicesConveyorSectionProps) {
  const router = useRouter();

  const handleOpenDiscipline = (dish: ConveyorDish) => {
    const targetSlug = dish.slug || dish.id;
    router.push(`/services/${targetSlug}`);
  };

  return (
    <div className="w-full bg-[#0B0B0E] dark text-white py-12 sm:py-20 border-b border-white/10 relative overflow-hidden">
      <SushiConveyorMenu
        items={SERVICE_CONVEYOR_DISHES}
        legend={SERVICE_BELT_LEGEND}
        eyebrow="ODDLYYY DISCIPLINES // SPRINT ROTATION"
        heading="Pick your discipline off the belt."
        caption="Hover to pause the belt, flick to rotate, or click any plate to open its custom discipline spec."
        autoplay={autoplay}
        speed={24}
        onDishClick={handleOpenDiscipline}
        onAdd={handleOpenDiscipline}
        labels={{
          add: "Open Discipline Spec ↗",
          close: "Close",
          previous: "Previous discipline",
          next: "Next discipline",
          pause: "Pause belt",
        }}
        action={
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-primary font-medium text-sm bg-white text-black hover:bg-white/90 transition-all shadow-md"
            >
              <span>Commission bespoke sprint</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <span className="text-xs font-mono text-white/50">
              8 Disciplines &bull; Direct Senior Makers
            </span>
          </div>
        }
      />
    </div>
  );
}

export default ServicesConveyorSection;
