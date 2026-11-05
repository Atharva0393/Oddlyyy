"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, SlidersHorizontal, Check } from "lucide-react";
import { projectsData, workCategories } from "@/content/projects";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge, HandwrittenNote, PrimaryButton, SecondaryButton, RotatingBadge, FloatingAsterisk } from "@/components/ui";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Filter projects dynamically based on selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((project) => project.projectCategory === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* 1. HERO SECTION */}
      <SectionContainer
        paddingY="xl"
        className="border-b border-ink/10 relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="terracotta" withDot dotColor="mint">
                Portfolio &bull; Concept Archive
              </Badge>
              <HandwrittenNote direction="left" color="terracotta">
                Be the exception
              </HandwrittenNote>
            </div>

            <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[1.05]">
              Good ideas deserve{" "}
              <span className="font-secondary text-terracotta font-normal block sm:inline">
                the spotlight.
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-ink/80 leading-relaxed font-primary max-w-2xl font-normal">
              A little collection of things we&apos;ve made, built, designed and brought to life.
            </p>

            {/* Transparent Notice about Speculative / Concept Work */}
            <div className="pt-2 p-4 rounded-2xl bg-lavender/40 border border-ink/15 max-w-2xl flex items-start gap-3 text-xs font-mono text-ink/75 leading-relaxed">
              <span className="text-terracotta font-bold text-sm mt-0.5">*</span>
              <span>
                <strong>Initial Studio Archive:</strong> The entries below represent concept prototypes, exploratory benchmarks, and speculative design systems created by Oddlyyy while developing our studio portfolio.
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center shrink-0 pr-8">
            <RotatingBadge size="md" variant="mint" />
          </div>
        </div>
      </SectionContainer>

      {/* 2. CATEGORY FILTERS BAR */}
      <SectionContainer paddingY="sm" className="border-b border-ink/10 sticky top-[73px] z-30 bg-cream/95 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink/60">
            <SlidersHorizontal className="w-3.5 h-3.5 text-terracotta" />
            <span className="font-semibold">Filter by Category:</span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Portfolio categories">
            {workCategories.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === "All"
                  ? projectsData.length
                  : projectsData.filter((p) => p.projectCategory === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-primary font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                    isActive
                      ? "bg-ink text-cream shadow-ink-offset -translate-y-0.5"
                      : "bg-cream text-ink/80 border border-ink/15 hover:border-ink hover:text-ink hover:bg-cream/60"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`font-mono text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-terracotta text-cream" : "bg-ink/10 text-ink/60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* 3. VISUAL PORTFOLIO GRID WITH VARIED CARD SIZES */}
      <SectionContainer paddingY="xl" className="border-b border-ink/10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Varied card sizing and aesthetic palettes
              const isWide = project.gridSpan === "wide" || idx === 0;
              const colSpanClass = isWide ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4";
              const aspectClass = isWide ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[16/10]";

              const cardBg =
                project.cardColor === "lavender"
                  ? "bg-lavender"
                  : project.cardColor === "mint"
                  ? "bg-mint"
                  : "bg-cream/90";

              return (
                <motion.article
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`${colSpanClass} group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border-2 border-ink/15 transition-all duration-300 ease-out hover:shadow-ink-offset hover:-translate-x-1 hover:-translate-y-1 ${cardBg}`}
                >
                  <Link href={`/work/${project.slug}`} className="block flex-1">
                    {/* Visual Asset Preview Frame */}
                    <div
                      className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden border border-ink/15 mb-6 flex items-center justify-center bg-gradient-to-br from-cream via-cream/80 to-lavender/30`}
                    >
                      {/* Subtle Noise Texture */}
                      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

                      {/* Geometric Editorial Graphic Device */}
                      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center space-y-2 transition-transform duration-500 group-hover:scale-105">
                        <div className="w-12 h-12 rounded-2xl bg-ink text-cream flex items-center justify-center mb-1 shadow-sm">
                          <Layers className="w-6 h-6 text-terracotta" />
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50 font-semibold">
                          ODD-SPEC // {project.year} &bull; {project.projectCategory}
                        </span>
                        <h3 className="font-primary font-semibold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight max-w-md">
                          {project.projectName}
                        </h3>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-cream border border-ink/20 text-terracotta font-semibold">
                          {project.industry}
                        </span>
                      </div>

                      {/* Top-Right Concept Badge Overlay */}
                      <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-2">
                        <Badge variant="terracotta" size="sm">
                          {project.badge || "Concept Prototype"}
                        </Badge>
                      </div>

                      {/* Top-Left Year Stamp */}
                      <div className="absolute top-3.5 left-3.5 z-20">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-ink text-cream uppercase font-semibold">
                          {project.year}
                        </span>
                      </div>

                      {/* Bottom-Right Interactive View Pill */}
                      <div className="absolute bottom-3.5 right-3.5 z-20 w-11 h-11 rounded-full bg-cream text-ink border border-ink flex items-center justify-center opacity-90 group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta transition-all duration-200 shadow-sm">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Metadata & Narrative */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-ink/60 uppercase tracking-wider">
                        <span className="font-bold text-terracotta">
                          Category: {project.projectCategory}
                        </span>
                        <span>{project.client}</span>
                      </div>

                      <h2 className="font-primary font-semibold text-2xl sm:text-3xl text-ink tracking-tight group-hover:text-terracotta transition-colors">
                        {project.projectName}
                      </h2>

                      <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-primary line-clamp-2">
                        {project.description}
                      </p>

                      {/* Deliverables Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.deliverables.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center font-primary font-medium rounded-lg border transition-all px-2.5 py-1 text-xs bg-cream/70 text-ink border-ink/15"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Clickable Action Cue */}
                      <div className="pt-3 border-t border-ink/10 flex items-center justify-between">
                        <span className="font-primary font-medium text-xs sm:text-sm uppercase tracking-wider text-ink group-hover:text-terracotta flex items-center gap-1.5 transition-colors">
                          <span>View Case Study Architecture</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                        <span className="text-xs font-mono text-ink/40">
                          Deep Dive &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </SectionContainer>

      {/* 4. ENQUIRY CALL TO ACTION AT THE BOTTOM */}
      <SectionContainer paddingY="xl" className="border-b border-ink/10">
        <div className="relative rounded-3xl p-6 sm:p-12 lg:p-20 bg-ink text-cream border-2 border-ink shadow-ink-offset-lg overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="terracotta" withDot dotColor="mint">
                Collaborate With Oddlyyy
              </Badge>
              <HandwrittenNote direction="left" color="terracotta" className="text-lavender">
                let&apos;s build the next one together
              </HandwrittenNote>
            </div>

            <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-cream leading-[1.05]">
              Have a bold idea that needs{" "}
              <span className="text-terracotta font-normal block sm:inline">
                bringing to life?
              </span>
            </h2>

            <p className="text-base sm:text-xl text-cream/80 leading-relaxed font-primary max-w-2xl font-normal">
              Whether you are preparing to launch a new digital platform, reposition a legacy brand, or engineer an unconventional AI workflow, we bring the brains and the craft.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
              <PrimaryButton
                href="/contact"
                size="lg"
                className="bg-terracotta text-cream hover:bg-terracotta-hover shadow-lg hover:shadow-terracotta-offset text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>Let&apos;s talk about your project</span>
              </PrimaryButton>

              <SecondaryButton
                href="/services"
                variant="mint"
                size="lg"
                showArrow
                className="text-base sm:text-lg px-7 py-4 w-full sm:w-auto text-center justify-center"
              >
                <span>Explore our services</span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
