"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
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
                className="group p-6 sm:p-7 rounded-2xl bg-white/80 border border-ink/10 shadow-[0_4px_16px_rgba(32,32,40,0.03)] hover:shadow-ink-offset hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-terracotta/10 border border-terracotta/20 flex items-center justify-center mb-4 group-hover:bg-terracotta group-hover:text-cream transition-colors duration-200">
                    {getDeliverableIcon(item.iconName)}
                  </div>
                  <h3 className="font-primary font-bold text-lg sm:text-xl text-ink mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/70 leading-relaxed font-primary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION C : HOW WE WORK                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 border-b border-ink/10 bg-[#FAF3EE]/60">
        <SectionContainer>
          <div className="max-w-2xl mb-10 sm:mb-12 space-y-2">
            <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
              {service.processSectionTitle || "How we work together"}
            </h2>
            <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-primary">
              {service.processSectionSubtitle ||
                "A transparent four-step sequence from raw concept to launch-ready execution."}
            </p>
            {service.processSectionAnnotation && (
              <p className="font-accent text-lg sm:text-xl text-terracotta font-normal pt-1">
                {service.processSectionAnnotation}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white/75 border border-ink/10 flex flex-col justify-between hover:border-terracotta/40 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-ink/10">
                    <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider">
                      Stage [{step.step}]
                    </span>
                    <span className="text-ink/30 text-xs font-mono">&rarr;</span>
                  </div>
                  <h3 className="font-primary font-bold text-base sm:text-lg text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/70 leading-relaxed font-primary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION D : WHAT YOU GET                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 border-b border-ink/10">
        <SectionContainer>
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
              {service.benefitsSectionTitle || "What you actually get"}
            </h2>
            <p className="text-sm sm:text-base text-ink/70 leading-relaxed font-primary mt-2">
              {service.benefitsSectionSubtitle ||
                "Tangible commercial value designed for long-term growth, zero agency fluff."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-[#FAF3EE] border border-ink/12 shadow-[0_2px_8px_rgba(32,32,40,0.04)] hover:shadow-ink-offset hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-terracotta text-cream flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <h3 className="font-primary font-bold text-base sm:text-lg text-ink mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/70 leading-relaxed font-primary">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION E : FINAL UNIFIED CTA BANNER                               */}
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
