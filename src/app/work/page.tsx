"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  SlidersHorizontal,
  Layers,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { projectsData, workCategories } from "@/content/projects";
import { ProjectItem } from "@/types";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  Badge,
  HandwrittenNote,
  PrimaryButton,
  SecondaryButton,
  RotatingBadge,
  CardStack,
  CardStackItem,
} from "@/components/ui";

const PROJECT_UNSPLASH_IMAGES: Record<string, string> = {
  "proj-alpha":
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  "proj-beta":
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
  "proj-gamma":
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  "proj-delta":
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
  "proj-epsilon":
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "proj-zeta":
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
};

type WorkCardStackItem = CardStackItem & {
  project: ProjectItem;
};

export default function WorkPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"stack" | "grid">("stack");

  // Filter projects dynamically based on selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter(
      (project) => project.projectCategory === activeCategory
    );
  }, [activeCategory]);

  // Map to CardStack items
  const cardStackItems: WorkCardStackItem[] = useMemo(() => {
    return filteredProjects.map((project) => ({
      id: project.id,
      title: project.projectName,
      description: project.description,
      imageSrc: PROJECT_UNSPLASH_IMAGES[project.id],
      href: `/work/${project.slug}`,
      tag: project.projectCategory,
      project,
    }));
  }, [filteredProjects]);

  const handleCardClick = (project: ProjectItem, isActive: boolean) => {
    if (isActive) {
      router.push(`/work/${project.slug}`);
    }
  };

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
              A little collection of things we&apos;ve made, built, designed and
              brought to life.
            </p>

            {/* Notice about Speculative / Concept Work */}
            <div className="pt-2 p-4 rounded-2xl bg-lavender/40 border border-ink/15 max-w-2xl flex items-start gap-3 text-xs font-mono text-ink/75 leading-relaxed">
              <span className="text-terracotta font-bold text-sm mt-0.5">*</span>
              <span>
                <strong>Initial Studio Archive:</strong> The entries below
                represent concept prototypes, exploratory benchmarks, and
                speculative design systems created by Oddlyyy while developing
                our studio portfolio.
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center shrink-0 pr-8">
            <RotatingBadge size="md" variant="mint" />
          </div>
        </div>
      </SectionContainer>

      {/* 2. CATEGORY FILTERS & VIEW TOGGLE BAR */}
      <SectionContainer
        paddingY="sm"
        className="border-b border-ink/10 sticky top-[73px] z-30 bg-cream/95 backdrop-blur-md"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink/60 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-terracotta" />
              <span className="font-semibold">Filter:</span>
            </div>

            {/* Filter Pills */}
            <div
              className="flex flex-wrap items-center gap-2"
              role="tablist"
              aria-label="Portfolio categories"
            >
              {workCategories.map((category) => {
                const isActive = activeCategory === category;
                const count =
                  category === "All"
                    ? projectsData.length
                    : projectsData.filter(
                        (p) => p.projectCategory === category
                      ).length;

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-primary font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                      isActive
                        ? "bg-ink text-cream shadow-ink-offset -translate-y-0.5"
                        : "bg-cream text-ink/80 border border-ink/15 hover:border-ink hover:text-ink hover:bg-cream/60"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`font-mono text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? "bg-terracotta text-cream"
                          : "bg-ink/10 text-ink/60"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 self-end md:self-auto bg-cream-50 p-1 rounded-full border border-ink/15">
            <button
              type="button"
              onClick={() => setViewMode("stack")}
              aria-pressed={viewMode === "stack"}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-primary font-medium transition-all ${
                viewMode === "stack"
                  ? "bg-ink text-cream shadow-sm"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D Stack View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              aria-pressed={viewMode === "grid"}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-primary font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-ink text-cream shadow-sm"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Archive Grid</span>
            </button>
          </div>
        </div>
      </SectionContainer>

      {/* 3. WORK SHOWCASE (3D CARD STACK OR GRID VIEW) */}
      <SectionContainer
        paddingY="xl"
        className="border-b border-ink/10 relative overflow-hidden"
      >
        {viewMode === "stack" ? (
          <div className="py-6 sm:py-10">
            <CardStack
              key={activeCategory}
              items={cardStackItems}
              cardWidth={580}
              cardHeight={480}
              overlap={0.44}
              spreadDeg={38}
              perspectivePx={1200}
              depthPx={140}
              tiltXDeg={10}
              activeLiftPx={26}
              activeScale={1.03}
              inactiveScale={0.93}
              springStiffness={260}
              springDamping={26}
              loop={true}
              showDots={true}
              cardClassName="rounded-3xl border-2 border-ink/20 shadow-2xl overflow-hidden"
              renderCard={(item, { active: isActive }) => {
                const project = item.project;
                const cardBg =
                  project.cardColor === "lavender"
                    ? "bg-lavender"
                    : project.cardColor === "mint"
                    ? "bg-mint"
                    : "bg-[#FAF3EE]";

                return (
                  <div
                    onClick={(e) => {
                      if (isActive) {
                        e.stopPropagation();
                        handleCardClick(project, true);
                      }
                    }}
                    className={`w-full h-full p-6 sm:p-7 flex flex-col justify-between select-none ${cardBg} ${
                      isActive ? "cursor-pointer" : ""
                    }`}
                  >
                    {/* Top Header with Badges */}
                    <div className="flex items-center justify-between pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-ink text-cream">
                          {project.year}
                        </span>
                        <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-terracotta text-cream">
                          {project.badge || "Speculative Concept"}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink/60 font-semibold">
                        ODD-SPEC // {project.projectCategory}
                      </span>
                    </div>

                    {/* Middle Graphic Preview Area */}
                    <div className="relative rounded-2xl bg-cream/90 backdrop-blur-sm border border-ink/15 p-5 sm:p-6 shadow-sm overflow-hidden flex flex-col justify-between flex-1 my-3">
                      {/* Subtle image watermark */}
                      {item.imageSrc && (
                        <img
                          src={item.imageSrc}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none mix-blend-multiply"
                        />
                      )}

                      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto space-y-2">
                        <div className="size-10 rounded-full bg-ink text-cream flex items-center justify-center shadow-md">
                          <Layers className="size-5 text-terracotta" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink/60">
                          ODD-SPEC // {project.year} &bull;{" "}
                          {project.projectCategory.toUpperCase()}
                        </span>
                        <h3 className="font-primary font-bold text-2xl sm:text-3xl text-ink tracking-tight leading-tight">
                          {project.projectName}
                        </h3>
                        <span className="inline-flex items-center bg-cream border border-ink/15 text-xs text-ink/80 px-3 py-1 rounded-full font-primary">
                          {project.industry}
                        </span>
                      </div>

                      <div className="relative z-10 flex justify-end pt-2">
                        <div className="size-8 rounded-full bg-cream border border-ink/20 flex items-center justify-center text-ink shadow-sm group-hover:bg-terracotta group-hover:text-cream transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Lower Frame: Work Noted on It */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                        <span className="font-bold text-terracotta">
                          Category: {project.projectCategory}
                        </span>
                        <span className="text-ink/60 truncate max-w-[200px]">
                          {project.client}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-primary line-clamp-2">
                        {project.description}
                      </p>

                      {/* Deliverables Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.deliverables.slice(0, 3).map((d) => (
                          <span
                            key={d}
                            className="inline-flex items-center text-[10px] sm:text-[11px] font-primary font-medium px-2 py-0.5 rounded-lg bg-cream/80 text-ink border border-ink/15"
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* Action Link Bar */}
                      <div className="pt-2 border-t border-ink/15 flex items-center justify-between text-xs font-primary font-medium text-ink uppercase tracking-wider">
                        <span className="flex items-center gap-1.5 text-ink hover:text-terracotta transition-colors">
                          <span>View Case Study Architecture</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                        <span className="font-mono text-[10px] text-ink/40">
                          Deep Dive &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        ) : (
          /* Archive Grid View fallback */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const isWide = project.gridSpan === "wide" || idx === 0;
                const colSpanClass = isWide
                  ? "md:col-span-12 lg:col-span-8"
                  : "md:col-span-6 lg:col-span-4";
                const aspectClass = isWide
                  ? "aspect-[16/9] lg:aspect-[21/9]"
                  : "aspect-[16/10]";

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
                    <Link
                      href={`/work/${project.slug}`}
                      className="block flex-1"
                    >
                      {/* Visual Asset Preview Frame */}
                      <div
                        className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden border border-ink/15 mb-6 flex items-center justify-center bg-gradient-to-br from-cream via-cream/80 to-lavender/30`}
                      >
                        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-ink text-cream">
                            {project.year}
                          </span>
                          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-terracotta text-cream">
                            {project.badge || "Speculative Concept"}
                          </span>
                        </div>

                        {/* Card Center Identity Block */}
                        <div className="relative z-10 text-center px-4 max-w-md space-y-2">
                          <div className="size-10 rounded-full bg-ink text-cream flex items-center justify-center shadow-md mx-auto mb-2">
                            <Layers className="size-5 text-terracotta" />
                          </div>
                          <span className="text-xs font-mono uppercase tracking-[0.2em] text-ink/60 block">
                            ODD-SPEC // {project.year} &bull;{" "}
                            {project.projectCategory.toUpperCase()}
                          </span>
                          <h3 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
                            {project.projectName}
                          </h3>
                          <span className="inline-block bg-cream border border-ink/15 text-xs text-ink/80 px-3 py-1 rounded-full font-primary">
                            {project.industry}
                          </span>
                        </div>

                        {/* Action Arrow Icon */}
                        <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-cream border border-ink/20 flex items-center justify-center text-ink shadow-sm group-hover:bg-terracotta group-hover:text-cream transition-colors">
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
        )}
      </SectionContainer>

      {/* 4. ENQUIRY CALL TO ACTION AT THE BOTTOM */}
      <SectionContainer paddingY="xl" className="border-b border-ink/10">
        <div className="relative rounded-3xl p-6 sm:p-12 lg:p-20 bg-ink text-cream border-2 border-ink shadow-ink-offset-lg overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="terracotta" withDot dotColor="mint">
                Collaborate With Oddlyyy
              </Badge>
              <HandwrittenNote
                direction="left"
                color="terracotta"
                className="text-lavender"
              >
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
              Whether you are preparing to launch a new digital platform,
              reposition a legacy brand, or engineer an unconventional AI
              workflow, we bring the brains and the craft.
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
