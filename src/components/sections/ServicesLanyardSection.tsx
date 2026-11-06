"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import TeamLanyardRail, {
  LanyardMember,
} from "@/components/ui/team-lanyard-rail";
import { HandwrittenNote } from "@/components/ui";

export const ODDLYYY_SERVICES_LANYARD: LanyardMember[] = [
  {
    id: "srv-digital-platforms",
    name: "Digital Platforms",
    role: "Websites & Digital Flagships",
    team: "Oddlyyy · Discipline 01",
    tone: 1, // Terracotta
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
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
    team: "Oddlyyy · Discipline 02",
    tone: 2, // Odd Ink
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
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
    team: "Oddlyyy · Discipline 03",
    tone: 3, // Soft Lavender
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
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
    team: "Oddlyyy · Discipline 04",
    tone: 4, // Soft Mint
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
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
    team: "Oddlyyy · Discipline 05",
    tone: 5, // Terracotta Light
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
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
    team: "Oddlyyy · Core Offering",
    tone: 1, // Terracotta
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
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
    team: "Oddlyyy · Core Offering",
    tone: 2, // Odd Ink
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
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
    team: "Oddlyyy · Core Offering",
    tone: 3, // Lavender
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80",
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
      {/* Decorative Brand Accent Note */}
      <div className="max-w-agency mx-auto px-4 sm:px-6 lg:px-12 mb-4 flex justify-end">
        <HandwrittenNote direction="right" color="terracotta">
          tactile passes · pull to test tension
        </HandwrittenNote>
      </div>

      <TeamLanyardRail
        items={ODDLYYY_SERVICES_LANYARD}
        autoplay={autoplay}
        eyebrow="ODDLYYY DISCIPLINES // SPRINT SPECIFICATIONS"
        heading={
          <span className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink leading-[1.05]">
            Pick your pass.{" "}
            <span className="font-secondary text-terracotta font-normal">
              Flip to inspect.
            </span>
          </span>
        }
        caption="Brush along the rail to feel the tension, pull a pass down to stretch the cord, or click to flip and review business outcomes."
        labels={{
          flip: "Click or press Enter to flip and inspect deliverables",
          back: "Click again or press Esc to turn it back",
          show: "Show discipline",
        }}
        action={
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-primary font-medium text-sm bg-ink text-cream hover:bg-ink/90 transition-all shadow-md hover:shadow-ink-offset hover:-translate-y-0.5"
            >
              <span>Commission bespoke sprint</span>
              <ArrowUpRight className="w-4 h-4 text-terracotta" />
            </Link>
            <div className="flex items-center gap-2 text-xs font-mono text-ink/60 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-terracotta" />
              <span>Direct Senior Collaboration &bull; High Impact</span>
            </div>
          </div>
        }
      />
    </section>
  );
}

export default ServicesLanyardSection;
