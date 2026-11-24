"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  Code2,
  Layout,
  Calendar,
  Shield,
  Bot,
  Zap,
  FileText,
  Workflow,
  Search,
  Palette,
  Wand2,
  Layers,
  FileCode,
  Package,
  Printer,
  Megaphone,
  Target,
  PenTool,
  Video,
  TrendingUp,
  BarChart3,
  Puzzle,
  GitMerge,
  Server,
  CreditCard,
  RefreshCw,
  Key,
  Smartphone,
  Apple,
  WifiOff,
  Bell,
  Play,
  CheckCheck,
  Sparkles,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CtaSection } from "@/components/sections/CtaSection";
import { ServiceTactileCard } from "./TactileServiceIllustrations";
import { ServiceDetailConfig } from "@/content/service-details";
import { ProjectItem } from "@/types";
import { cn } from "@/lib/utils";
import { NoticeBoardPin, PinColor, WashiTape } from "@/components/ui/notebook";

// Dynamic Icon Helper
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  ShoppingBag,
  Code2,
  Layout,
  Calendar,
  Shield,
  Bot,
  Zap,
  FileText,
  Workflow,
  Search,
  Palette,
  Wand2,
  Layers,
  FileCode,
  Package,
  Printer,
  Megaphone,
  Target,
  PenTool,
  Video,
  TrendingUp,
  BarChart3,
  Puzzle,
  GitMerge,
  Server,
  CreditCard,
  RefreshCw,
  Key,
  Smartphone,
  Apple,
  WifiOff,
  Bell,
  Play,
  CheckCheck,
  Sparkles,
};

function getDeliverableIcon(iconName: string) {
  const IconComponent = iconMap[iconName] || Sparkles;
  return (
    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] transition-transform duration-200 group-hover:scale-105" />
  );
}

const deliverableTapeColors: ("yellow" | "mint" | "pink" | "lavender" | "blue" | "white")[] = [
  "yellow",
  "mint",
  "lavender",
  "pink",
  "blue",
  "yellow",
];

const pinColorCycle: PinColor[] = [
  "terracotta",
  "yellow",
  "blue",
  "mint",
];

const cardRotations = [
  "rotate-[-1deg] hover:rotate-0",
  "rotate-[1.2deg] hover:rotate-0",
  "rotate-[-0.75deg] hover:rotate-0",
  "rotate-[1deg] hover:rotate-0",
];

const badgeStyleMap: Record<string, string> = {
  terracotta: "bg-[#C2410C] text-cream border-[#222126]",
  yellow: "bg-[#FFD84D] text-[#222126] border-[#222126]",
  blue: "bg-[#4A69E2] text-white border-[#222126]",
  mint: "bg-[#10B981] text-white border-[#222126]",
  lavender: "bg-[#8B5CF6] text-white border-[#222126]",
  crimson: "bg-[#BE123C] text-white border-[#222126]",
};

const tagStyleMap: Record<string, { bg: string; text: string; border: string }> = {
  terracotta: { bg: "bg-[#FAF0EB]", text: "text-terracotta", border: "border-terracotta/30" },
  yellow: { bg: "bg-[#FFF9E6]", text: "text-amber-800", border: "border-amber-400/40" },
  blue: { bg: "bg-[#EFF4FF]", text: "text-[#2B4CBA]", border: "border-[#8299E8]/40" },
  mint: { bg: "bg-[#ECFDF5]", text: "text-[#065F46]", border: "border-[#10B981]/30" },
  lavender: { bg: "bg-[#F5F3FF]", text: "text-[#6D28D9]", border: "border-[#8B5CF6]/30" },
  crimson: { bg: "bg-[#FFF1F2]", text: "text-[#9F1239]", border: "border-[#E11D48]/30" },
};

interface ServiceDetailViewProps {
  service: ServiceDetailConfig;
  relatedProjects?: ProjectItem[];
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  relatedProjects,
}) => {
  return (
    <article className="min-h-screen bg-paper bg-notebook-ruled text-ink selection:bg-yellow selection:text-ink">
      {/* ------------------------------------------------------------------ */}
      {/* SECTION A : COMPACT SERVICE INTRODUCTION                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 md:pt-16 border-b border-ink/10 overflow-hidden">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Compact Information Hierarchy */}
            <div className="lg:col-span-7 space-y-5">
              {/* Prominent Service Title */}
              <h1 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.08]">
                {service.name}
              </h1>

              {/* Editorial Tagline */}
              <p className="font-recoleta italic text-xl sm:text-2xl md:text-3xl text-terracotta leading-snug">
                {service.tagline}
              </p>

              {/* Concise Supporting Description */}
              <p className="text-sm sm:text-base md:text-lg text-ink/75 leading-relaxed font-primary max-w-xl">
                {service.introDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#FAF3EE] border-2 border-ink text-ink font-primary font-bold text-sm sm:text-base shadow-ink-offset hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <span>{service.primaryCtaLabel}</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Tactile Service Card Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
              <ServiceTactileCard
                slug={service.slug}
                index={service.index}
                title={service.name}
                description={service.tagline}
              />
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION B : WHAT WE CAN BUILD / DELIVERABLES                       */}
      {/* ------------------------------------------------------------------ */}
      <section id="what-we-build" className="py-16 sm:py-24 border-b border-ink/10 scroll-mt-24">
        <SectionContainer>
          <div className="max-w-2xl mb-12 sm:mb-16 space-y-2.5">
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink/65 font-bold">
                Tailored Deliverables &amp; Capabilities
              </span>
            </div>
            <h2 className="font-primary font-bold text-2xl sm:text-4xl lg:text-[42px] text-ink tracking-tight leading-[1.1]">
              {service.deliverablesSectionTitle || "What We Can Build For You."}
            </h2>
            <p className="text-base sm:text-lg text-ink/75 leading-relaxed font-primary">
              {service.deliverablesSectionSubtitle ||
                "Concrete deliverables tailored to your business goals, never bloated, generic templates."}
            </p>
            {service.deliverablesSectionAnnotation && (
              <p className="font-accent text-lg sm:text-xl text-terracotta font-normal pt-1">
                {service.deliverablesSectionAnnotation}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {service.deliverables.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative p-7 sm:p-8 lg:p-9 rounded-[26px] bg-[#FFFDF9] border-2 border-ink shadow-[4px_4px_0px_#222126] hover:shadow-[7px_7px_0px_#222126] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[300px] sm:min-h-[330px]"
              >
                {/* Scrapbook Washi Tape on alternating corners */}
                <WashiTape
                  color={deliverableTapeColors[idx % deliverableTapeColors.length]}
                  className={cn(
                    "absolute -top-2.5 w-16 h-4 pointer-events-none z-10",
                    idx % 2 === 0 ? "-right-3 rotate-12" : "-left-3 -rotate-12"
                  )}
                />

                <div>
                  {/* Top Row: Tactile Icon Stamp + Spec Number */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FAF0EB] border-2 border-terracotta/25 flex items-center justify-center text-terracotta shadow-sm group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta group-hover:-rotate-3 transition-all duration-300">
                      {getDeliverableIcon(item.iconName)}
                    </div>
                    <span className="font-mono text-xs sm:text-[13px] font-bold text-ink/40 group-hover:text-ink transition-colors tracking-widest px-2.5 py-1 rounded-md bg-ink/[0.04] border border-ink/10">
                      {String(idx + 1).padStart(2, "0")} /
                    </span>
                  </div>

                  {/* Title & Description with expanded typography */}
                  <h3 className="font-primary font-bold text-xl sm:text-2xl text-ink mb-3 leading-snug tracking-tight group-hover:text-terracotta transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-primary">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row: Spec status badge & Action indicator */}
                <div className="pt-5 mt-6 border-t border-ink/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-md border border-terracotta/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    <span>DELIVERABLE [{String(idx + 1).padStart(2, "0")}]</span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-ink/50 group-hover:text-ink transition-colors">
                    <span className="uppercase tracking-wider text-[11px]">SPECS</span>
                    <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION C : HOW WE WORK (STUDIO NOTICE BOARD PINNED PROCESS)       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 border-b-2 border-ink/15 bg-[#FAF3EE]/85 relative overflow-visible">
        <SectionContainer>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                <span className="font-mono text-xs uppercase tracking-widest text-ink/65 font-bold">
                  Studio Workflow Notice Board
                </span>
              </div>
              <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
                {service.processSectionTitle || "How we work together"}
              </h2>
              <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-primary">
                {service.processSectionSubtitle ||
                  "We keep communication open, feedback welcome, and progress visible throughout the project."}
              </p>
              {service.processSectionAnnotation && (
                <p className="font-accent text-lg sm:text-xl text-terracotta font-normal pt-1">
                  {service.processSectionAnnotation}
                </p>
              )}
            </div>

            {/* Pinned Sticky Note on Desktop */}
            <div className="hidden lg:block relative shrink-0">
              <NoticeBoardPin color="yellow" className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20" />
              <div className="bg-[#FFF6BF] border-2 border-ink rounded-xl p-3.5 sm:p-4 shadow-[3px_3px_0px_#222126] rotate-[-2deg] max-w-[220px]">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-ink/75 pb-1 border-b border-ink/15 mb-1.5">
                  <span className="text-terracotta">✳</span>
                  <span>ODDLYYY RULE</span>
                </div>
                <p className="font-accent text-base sm:text-lg text-ink leading-snug">
                  No black boxes. Direct access to your designers &amp; developers every week.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 pt-4">
            {service.process.map((step, idx) => {
              const colorKey = step.pinColor || pinColorCycle[idx % pinColorCycle.length];
              const rotation = cardRotations[idx % cardRotations.length];
              const badgeClass = badgeStyleMap[colorKey] || badgeStyleMap.terracotta;
              const tagStyle = tagStyleMap[colorKey] || tagStyleMap.terracotta;

              return (
                <div
                  key={step.step}
                  className={cn(
                    "group relative p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border-2 border-ink shadow-[4px_4px_0px_#222126] hover:shadow-[6px_6px_0px_#222126] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between",
                    rotation
                  )}
                >
                  {/* Notice Board Pushpin */}
                  <NoticeBoardPin
                    color={colorKey}
                    className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 z-20"
                  />

                  {/* Corner Washi Tape on Stage 02 and 04 */}
                  {idx === 1 && (
                    <WashiTape
                      color="yellow"
                      className="absolute -top-2.5 -right-3 w-14 h-3.5 rotate-12 z-10"
                    />
                  )}
                  {idx === 3 && (
                    <WashiTape
                      color="mint"
                      className="absolute -top-2.5 -right-3 w-14 h-3.5 -rotate-12 z-10"
                    />
                  )}

                  <div>
                    {/* Header: Stage Badge + Arrow */}
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-ink/10">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border shadow-[1.5px_1.5px_0px_#222126]",
                          badgeClass
                        )}
                      >
                        STAGE [{step.step}]
                      </span>
                      <span className="text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm font-mono font-bold">
                        ↗
                      </span>
                    </div>

                    <h3 className="font-primary font-bold text-base sm:text-lg text-ink mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Studio Tag Sticker */}
                  {step.tag && (
                    <div className="pt-4 mt-4 border-t border-ink/10">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border",
                          tagStyle.bg,
                          tagStyle.text,
                          tagStyle.border
                        )}
                      >
                        <span>✦</span>
                        <span>{step.tag}</span>
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION D : FINAL UNIFIED CTA BANNER                               */}
      {/* ------------------------------------------------------------------ */}
      <CtaSection
        id="service-final-cta"
        title={
          <div className="space-y-1">
            {service.ctaTitle.includes("\n") ? (
              <>
                <p className="font-primary font-bold text-lg sm:text-xl lg:text-2xl text-ink tracking-tight">
                  {service.ctaTitle.split("\n")[0]}
                </p>
                <p className="font-primary font-bold text-lg sm:text-xl lg:text-2xl text-ink tracking-tight">
                  {service.ctaHighlightWord &&
                  service.ctaTitle.split("\n")[1].includes(service.ctaHighlightWord) ? (
                    <>
                      {service.ctaTitle.split("\n")[1].split(service.ctaHighlightWord)[0]}
                      <span className="font-recoleta italic text-terracotta font-normal">
                        {service.ctaHighlightWord}
                      </span>
                      {service.ctaTitle
                        .split("\n")[1]
                        .split(service.ctaHighlightWord)
                        .slice(1)
                        .join(service.ctaHighlightWord)}
                    </>
                  ) : (
                    service.ctaTitle.split("\n")[1]
                  )}
                </p>
              </>
            ) : (
              <p className="font-primary font-bold text-lg sm:text-xl lg:text-2xl text-ink tracking-tight">
                {service.ctaHighlightWord &&
                service.ctaTitle.includes(service.ctaHighlightWord) ? (
                  <>
                    {service.ctaTitle.split(service.ctaHighlightWord)[0]}
                    <span className="font-recoleta italic text-terracotta font-normal">
                      {service.ctaHighlightWord}
                    </span>
                    {service.ctaTitle
                      .split(service.ctaHighlightWord)
                      .slice(1)
                      .join(service.ctaHighlightWord)}
                  </>
                ) : service.ctaHighlightWord ? (
                  <>
                    <span>{service.ctaTitle}</span>
                    <span className="block font-recoleta italic text-terracotta font-normal mt-0.5">
                      {service.ctaHighlightWord}
                    </span>
                  </>
                ) : (
                  service.ctaTitle
                )}
              </p>
            )}
          </div>
        }
        description={service.ctaDescription}
        primaryButtonLabel={service.ctaButtonLabel}
        primaryButtonHref={`/contact?service=${service.slug}`}
      />
    </article>
  );
};
