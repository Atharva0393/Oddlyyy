"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
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
import { ServiceDetailConfig, MAIN_SERVICES_LIST } from "@/content/service-details";
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
  relatedProjects: ProjectItem[];
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  relatedProjects,
}) => {
  const otherServices = MAIN_SERVICES_LIST.filter((s) => s.slug !== service.slug);

  return (
    <article className="min-h-screen bg-[#FAF3EE] text-ink selection:bg-terracotta selection:text-cream">
      {/* ------------------------------------------------------------------ */}
      {/* 0. TOP RETURN BAR                                                   */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-transparent">
        <SectionContainer paddingY="none" className="pt-2 pb-1">
          <div className="flex items-center justify-between">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink/60 hover:text-terracotta transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Services</span>
            </Link>
            <span className="text-xs font-mono text-ink/40 uppercase hidden sm:inline">
              {service.shortName}
            </span>
          </div>
        </SectionContainer>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION A : COMPACT SERVICE INTRODUCTION                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-ink/10 overflow-hidden">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Compact Information Hierarchy */}
            <div className="lg:col-span-7 space-y-5">
              {/* Prominent Service Title */}
              <h1 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.08]">
                {service.name}
              </h1>

              {/* Editorial Tagline */}
              <p className="font-secondary italic text-xl sm:text-2xl md:text-3xl text-terracotta leading-snug">
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
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
              {service.deliverablesSectionTitle || "What we can build for you"}
            </h2>
            <p className="text-sm sm:text-base text-ink/70 leading-relaxed font-primary mt-2">
              {service.deliverablesSectionSubtitle ||
                "Concrete deliverables tailored to your business goals, never bloated, generic templates."}
            </p>
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
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
              {service.processSectionTitle || "How we work together"}
            </h2>
            <p className="text-sm sm:text-base text-ink/70 leading-relaxed font-primary mt-2">
              {service.processSectionSubtitle ||
                "A transparent four-step sequence from raw concept to launch-ready execution."}
            </p>
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
      {/* SECTION E : RELATED WORK (Only rendered when authentic work exists) */}
      {/* ------------------------------------------------------------------ */}
      {relatedProjects && relatedProjects.length > 0 && (
        <section className="py-14 sm:py-20 border-b border-ink/10 bg-[#FAF3EE]/40">
          <SectionContainer>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
              <div>
                <h2 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
                  Related work in action
                </h2>
                <p className="text-sm sm:text-base text-ink/70 leading-relaxed font-primary mt-1">
                  Real client projects delivered under this discipline.
                </p>
              </div>

              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-terracotta hover:text-ink transition-colors font-semibold self-start sm:self-auto"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group rounded-3xl overflow-hidden border-2 border-ink/15 bg-white/80 shadow-sm hover:shadow-ink-offset hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-cream border-b border-ink/10">
                    {project.images?.cover && (
                      <Image
                        src={project.images.cover}
                        alt={project.projectName}
                        fill
                        className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-cream/90 backdrop-blur-md border border-ink/10 text-ink shadow-sm uppercase">
                        {project.projectCategory}
                      </span>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-ink/50 uppercase mb-2">
                        <span>{project.client}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-primary font-bold text-xl sm:text-2xl text-ink group-hover:text-terracotta transition-colors mb-2">
                        {project.projectName}
                      </h3>
                      <p className="text-xs sm:text-sm text-ink/70 leading-relaxed font-primary line-clamp-2">
                        {project.summary || project.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-ink/10 flex items-center justify-between text-xs font-mono text-terracotta font-semibold">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SectionContainer>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* QUICK SWITCHER: EXPLORE OTHER DISCIPLINES                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-12 border-b border-ink/10 bg-[#FAF3EE]">
        <SectionContainer>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-ink/50 font-semibold">
              Explore Other Disciplines
            </span>
            <Link
              href="/services"
              className="text-xs font-mono uppercase tracking-wider text-terracotta hover:underline"
            >
              All 6 Services Overview &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group p-4 rounded-xl bg-white/60 border border-ink/10 hover:border-ink hover:shadow-sm hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <span className="font-primary font-bold text-xs sm:text-sm text-ink group-hover:text-terracotta transition-colors line-clamp-2 leading-snug">
                  {other.shortName}
                </span>
              </Link>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION F : FINAL UNIFIED CTA BANNER                               */}
      {/* ------------------------------------------------------------------ */}
      <CtaSection
        id="service-final-cta"
        title={
          <>
            {service.ctaTitle.split(service.ctaHighlightWord)[0]}
            <span className="font-secondary text-terracotta font-normal">
              {service.ctaHighlightWord}
            </span>
          </>
        }
        description={service.ctaDescription}
        primaryButtonLabel={service.ctaButtonLabel}
        primaryButtonHref={`/contact?service=${service.slug}`}
        secondaryButtonLabel="Explore All Services"
        secondaryButtonHref="/services"
      />
    </article>
  );
};
