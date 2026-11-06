"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TeamLanyardRail, {
  LanyardMember,
} from "@/components/ui/team-lanyard-rail";

export const ODDLYYY_SERVICES_LANYARD: LanyardMember[] = [
  {
    id: "srv-digital-platforms",
    name: "Digital Platforms",
    role: "Websites & Digital Flagships",
    tone: 1, // Terracotta
    image: "",
    bio: "Bespoke business websites and interactive flagships engineered to elevate brand prestige, articulate your value proposition, and convert high-intent visitors into loyal clients.",
    tags: ["High Conversion", "Brand Flagship", "Mobile Elegance"],
    links: [
      { label: "View Details", href: "/services/digital-platforms" },
      { label: "Inquire", href: "/contact" },
    ],
  },
  {
    id: "srv-intelligent-automation",
    name: "Intelligent Automation",
    role: "Connected Operations & Smart Flows",
    tone: 2, // Odd Ink
    image: "",
    bio: "Tailored intelligent assistants and automated business workflows that eliminate repetitive busywork, unify daily software tools, and save teams dozens of hours weekly.",
    tags: ["Zero Busywork", "Unified Tools", "24/7 Operations"],
    links: [
      { label: "View Details", href: "/services/ai-automation" },
      { label: "Inquire", href: "/contact" },
    ],
  },
  {
    id: "srv-brand-identity",
    name: "Brand Identity Systems",
    role: "Visual Direction & Guidelines",
    tone: 3, // Soft Lavender
    image: "",
    bio: "Distinct visual identities, bold typography, memorable logo marks, and complete design toolkits that command immediate credibility and market recognition.",
    tags: ["Visual Identity", "Bespoke Logos", "Brand Standards"],
    links: [
      { label: "View Details", href: "/services/brand-identity" },
      { label: "Inquire", href: "/contact" },
    ],
  },
  {
    id: "srv-marketing-content",
    name: "Marketing & Content",
    role: "Campaigns & Creative Storytelling",
    tone: 4, // Soft Mint
    image: "",
    bio: "High-impact visual narratives, strategic launch campaigns, and engaging motion content designed to cut through market noise and build genuine customer loyalty.",
    tags: ["Launch Campaigns", "Brand Narratives", "Audience Growth"],
    links: [
      { label: "View Details", href: "/services/content-campaigns" },
      { label: "Inquire", href: "/contact" },
    ],
  },
  {
    id: "srv-the-odd-jobs",
    name: "The Odd Jobs",
    role: "Custom & Unconventional Solutions",
    tone: 5, // Terracotta Light
    image: "",
    bio: "Unconventional business challenges, rapid two-week prototype sprints, interactive installations, and bespoke solutions that defy standard agency formulas.",
    tags: ["Rapid Sprints", "Custom Prototypes", "Bespoke Solutions"],
    links: [
      { label: "View Details", href: "/services/the-odd-jobs" },
      { label: "Inquire", href: "/contact" },
    ],
  },
  {
    id: "srv-custom-portals",
    name: "Interactive Portals & Stores",
    role: "Frictionless Customer Journeys",
    tone: 1, // Terracotta
    image: "",
    bio: "Bespoke client portals, frictionless checkout flows, and self-service member hubs engineered for effortless customer journeys and measurable commercial conversion.",
    tags: ["Client Portals", "Secure Flows", "Customer Journeys"],
    links: [
      { label: "View Details", href: "/services/digital-platforms" },
      { label: "Inquire", href: "/contact" },
    ],
  },
  {
    id: "srv-smart-workflows",
    name: "Smart Operations & Sprints",
    role: "Time-Saving Internal Systems",
    tone: 2, // Odd Ink
    image: "",
    bio: "Automated client onboarding, smart document pipelines, and connected daily tools that free your team to focus exclusively on strategic, high-value client work.",
    tags: ["Instant Onboarding", "Document Pipelines", "Time Multipliers"],
    links: [
      { label: "View Details", href: "/services/ai-automation" },
      { label: "Inquire", href: "/contact" },
    ],
  },
  {
    id: "srv-brand-systems",
    name: "Strategic Brand Guidelines",
    role: "Unified Visual Collateral",
    tone: 3, // Lavender
    image: "",
    bio: "Comprehensive digital guidelines, presentation decks, and executive brand collateral ensuring uncompromising visual consistency across every client touchpoint.",
    tags: ["Pitch Decks", "Visual Toolkits", "Brand Growth"],
    links: [
      { label: "View Details", href: "/services/brand-identity" },
      { label: "Inquire", href: "/contact" },
    ],
  },
];

interface ServicesLanyardSectionProps {
  autoplay?: boolean;
}

export function ServicesLanyardSection({
  autoplay = true,
}: ServicesLanyardSectionProps) {
  return (
    <section className="w-full bg-cream py-14 sm:py-24 border-b border-ink/10 relative overflow-hidden">
      <TeamLanyardRail
        items={ODDLYYY_SERVICES_LANYARD}
        autoplay={autoplay}
        heading={
          <span className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink leading-[1.05]">
            Pick your service{" "}
            <span className="font-secondary text-terracotta font-normal">
              flip to inspect.
            </span>
          </span>
        }
        labels={{
          flip: "Click or press Enter to flip and inspect deliverables",
          back: "Click again or press Esc to turn it back",
          show: "Show service",
        }}
        action={
          <div className="flex items-center justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-primary font-medium text-sm bg-ink text-cream hover:bg-ink/90 transition-all shadow-md hover:shadow-ink-offset hover:-translate-y-0.5"
            >
              <span>Commission bespoke sprint</span>
              <ArrowUpRight className="w-4 h-4 text-terracotta" />
            </Link>
          </div>
        }
      />
    </section>
  );
}

export default ServicesLanyardSection;
