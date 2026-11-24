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
  return <IconComponent className="w-5 h-5 text-terracotta" />;
}

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
              />
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION B : WHAT WE CAN BUILD                                      */}
      {/* ------------------------------------------------------------------ */}
      <section id="what-we-build" className="py-14 sm:py-20 border-b border-ink/10 scroll-mt-24">
        <SectionContainer>
          <div className="max-w-2xl mb-10 sm:mb-12 space-y-2">
            <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
              {service.deliverablesSectionTitle || "What We Can Build For You."}
            </h2>
            <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-primary">
              {service.deliverablesSectionSubtitle ||
                "Concrete deliverables tailored to your business goals, never bloated, generic templates."}
            </p>
            {service.deliverablesSectionAnnotation && (
              <p className="font-accent text-lg sm:text-xl text-terracotta font-normal pt-1">
                {service.deliverablesSectionAnnotation}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {service.deliverables.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border-2 border-ink/25 hover:border-ink shadow-[3px_3px_0px_rgba(34,33,38,0.12)] hover:shadow-ink-offset hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-terracotta/10 border border-terracotta/20 flex items-center justify-center mb-4 group-hover:bg-terracotta group-hover:text-cream transition-colors duration-200">
                    {getDeliverableIcon(item.iconName)}
                  </div>
                  <h3 className="font-primary font-bold text-lg sm:text-xl text-ink mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                    {item.description}
                  </p>
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
          <>
            {service.ctaTitle.split(service.ctaHighlightWord)[0]}
            <span className="font-recoleta italic text-terracotta font-normal">
              {service.ctaHighlightWord}
            </span>
          </>
        }
        description={service.ctaDescription}
        primaryButtonLabel={service.ctaButtonLabel}
        primaryButtonHref={`/contact?service=${service.slug}`}
      />
    </article>
  );
};
