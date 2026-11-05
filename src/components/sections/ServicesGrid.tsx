"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Code2,
  Bot,
  Wand2,
  Megaphone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag, HandwrittenNote } from "@/components/ui";
import { servicesData } from "@/content/services";

export const ServicesGrid: React.FC = () => {
  // Map icons and color assignments for the 5 requested categories
  const categoryConfigs: Record<
    string,
    {
      icon: React.ComponentType<{ className?: string }>;
      bgClass: string;
      textClass: string;
      borderClass: string;
      tagVariant: "cream" | "lavender" | "mint" | "ink";
      isDark?: boolean;
    }
  > = {
    "digital-platforms": {
      icon: Code2,
      bgClass: "bg-mint",
      textClass: "text-ink",
      borderClass: "border-ink/15 hover:border-ink",
      tagVariant: "cream",
    },
    "ai-automation": {
      icon: Bot,
      bgClass: "bg-lavender",
      textClass: "text-ink",
      borderClass: "border-ink/15 hover:border-ink",
      tagVariant: "cream",
    },
    "brand-identity": {
      icon: Wand2,
      bgClass: "bg-cream/90",
      textClass: "text-ink",
      borderClass: "border-ink/15 hover:border-ink",
      tagVariant: "lavender",
    },
    "content-campaigns": {
      icon: Megaphone,
      bgClass: "bg-lavender/60",
      textClass: "text-ink",
      borderClass: "border-ink/15 hover:border-ink",
      tagVariant: "mint",
    },
    "the-odd-jobs": {
      icon: Sparkles,
      bgClass: "bg-ink",
      textClass: "text-cream",
      borderClass: "border-ink/30 hover:border-cream/30",
      tagVariant: "ink",
      isDark: true,
    },
  };

  // Select the 5 core category services
  const coreServices = [
    servicesData.find((s) => s.slug === "digital-platforms")!,
    servicesData.find((s) => s.slug === "ai-automation")!,
    servicesData.find((s) => s.slug === "brand-identity")!,
    servicesData.find((s) => s.slug === "content-campaigns")!,
    servicesData.find((s) => s.slug === "the-odd-jobs")!,
  ].filter(Boolean);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <SectionContainer
      id="services-section"
      paddingY="xl"
      className="border-b border-ink/10 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-ink leading-[1.05]">
            Things we do.{" "}
            <span className="text-terracotta font-normal">
              And do rather well.
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          <HandwrittenNote direction="right" color="terracotta">
            zero corporate bloat
          </HandwrittenNote>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-primary font-medium text-terracotta hover:text-ink transition-colors pb-1"
          >
            <span>View all capability specs in detail</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Creative Asymmetrical Grid: 2 Large Cards on top, 3 Distinctive Cards on bottom */}
      <div className="space-y-6 sm:space-y-8">
        {/* Row 1: 7-col / 5-col split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {coreServices.slice(0, 2).map((service, idx) => {
            const config = categoryConfigs[service.slug] || categoryConfigs["digital-platforms"];
            const Icon = config.icon;
            const colSpan = idx === 0 ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <motion.article
                key={service.slug}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`${colSpan} group relative flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-3xl border-2 transition-all duration-300 ease-out hover:shadow-ink-offset hover:-translate-x-1 hover:-translate-y-1 ${config.bgClass} ${config.textClass} ${config.borderClass}`}
              >
                <div>
                  {/* Card Header: Category Tag & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-current/15 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider font-bold">
                        [{service.index}]
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider opacity-70">
                        {service.category}
                      </span>
                    </div>

                    <div className="w-11 h-11 rounded-2xl bg-ink text-cream flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-cream" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-primary font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-3">
                    {service.name}
                  </h3>
                  <p className="font-secondary text-sm sm:text-base opacity-80 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-sm sm:text-base opacity-85 leading-relaxed font-primary mb-8">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Footer: Deliverables & Link */}
                <div className="pt-6 border-t border-current/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <Tag
                        key={item}
                        size="sm"
                        variant={config.tagVariant}
                        className={
                          config.isDark
                            ? "bg-cream/10 text-cream border-cream/20"
                            : undefined
                        }
                      >
                        {item}
                      </Tag>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 font-primary font-medium text-xs sm:text-sm uppercase tracking-wider hover:underline underline-offset-4 shrink-0 transition-transform group-hover:translate-x-1"
                  >
                    <span>Discover more</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Row 2: 3 Cards (4-col / 4-col / 4-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coreServices.slice(2, 5).map((service) => {
            const config = categoryConfigs[service.slug] || categoryConfigs["the-odd-jobs"];
            const Icon = config.icon;

            return (
              <motion.article
                key={service.slug}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`group relative flex flex-col justify-between p-6 sm:p-8 md:p-9 rounded-3xl border-2 transition-all duration-300 ease-out hover:shadow-ink-offset hover:-translate-x-1 hover:-translate-y-1 ${config.bgClass} ${config.textClass} ${config.borderClass}`}
              >
                <div>
                  {/* Card Header: Category & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-current/15 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider font-bold">
                        [{service.index}]
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider opacity-70">
                        {service.category}
                      </span>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        config.isDark ? "bg-cream text-ink" : "bg-ink text-cream"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-primary font-semibold text-2xl sm:text-3xl tracking-tight mb-2">
                    {service.name}
                  </h3>
                  <p className="font-secondary text-xs sm:text-sm opacity-80 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm opacity-85 leading-relaxed font-primary mb-8">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Footer Link & Action */}
                <div className="pt-5 border-t border-current/15 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase opacity-60">
                    Bespoke Discipline
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 font-primary font-medium text-xs uppercase tracking-wider hover:underline underline-offset-4 transition-transform group-hover:translate-x-1"
                  >
                    <span>Discover more</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

