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
      "Bespoke business websites and digital platforms built to elevate your brand and drive customer growth.",
    details: [
      "Fast & Responsive",
      "Intuitive Editing",
      "Brand-Aligned Design",
      "Conversion Focused",
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
      "Intelligent customer assistants and automated business workflows that eliminate repetitive busywork.",
    details: [
      "Customer Support AI",
      "Lead Management",
      "Connected Systems",
      "Time-Saving Flows",
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
      "Distinct visual identities, memorable logos, and complete brand systems that stand out in any market.",
    details: [
      "Logo & Brand Suite",
      "Visual Guidelines",
      "Marketing Collateral",
      "Brand Consistency",
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
      "Strategic launch campaigns, sharp brand copywriting, and engaging social content designed to build real audience momentum.",
    details: [
      "Launch Microsites",
      "Brand Copywriting",
      "Social Motion Content",
      "Audience Growth",
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
      "Some ideas don't fit neatly into categories. That's where we come in. Tailored creative work and custom digital solutions.",
    details: [
      "Tailored Explorations",
      "Interactive Stunts",
      "Custom Solutions",
      "Rapid Prototypes",
    ],
    image: "",
  },
  {
    id: "custom-portals",
    name: "Custom Portals",
    slug: "digital-platforms",
    href: "/services/digital-platforms",
    price: "$4,800+",
    tier: 1,
    description:
      "Client portals, booking hubs, and e-commerce stores designed for effortless customer journeys and streamlined operations.",
    details: [
      "Seamless Checkout",
      "Client Portals",
      "Booking Systems",
      "Automated Orders",
    ],
    image: "",
  },
  {
    id: "smart-workflows",
    name: "Smart Workflows",
    slug: "ai-automation",
    href: "/services/ai-automation",
    price: "$3,600+",
    tier: 2,
    description:
      "Hands-free scheduling, automated document handling, and connected business tools that save dozens of hours weekly.",
    details: [
      "Automated Scheduling",
      "Document Routing",
      "Data Synchronization",
      "Zero Repetitive Work",
    ],
    image: "",
  },
  {
    id: "brand-systems",
    name: "Brand Systems",
    slug: "brand-identity",
    href: "/services/brand-identity",
    price: "$5,200+",
    tier: 3,
    description:
      "Comprehensive digital guidelines, presentation templates, and marketing toolkits ensuring unified brand recognition.",
    details: [
      "Presentation Decks",
      "Digital Toolkits",
      "Consistent Visuals",
      "Growth Ready",
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
