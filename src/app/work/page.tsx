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
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Globe,
} from "lucide-react";
import { projectsData, workCategories, WorkCategory } from "@/content/projects";
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

type WorkCardStackItem = CardStackItem & {
  project: ProjectItem;
};

export default function WorkPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"stack" | "grid">("stack");

  // Filter projects dynamically based on selected category (matches primary or secondary category tags)
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter(
      (project) =>
        project.projectCategory === activeCategory ||
        project.categories?.includes(activeCategory)
    );
  }, [activeCategory]);

  // Map to CardStack items
  const cardStackItems: WorkCardStackItem[] = useMemo(() => {
    return filteredProjects.map((project) => ({
      id: project.id,
      title: project.projectName,
      description: project.description,
      imageSrc: project.images.cover,
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
                Client Portfolio &bull; Verified Work
              </Badge>
              <HandwrittenNote direction="left" color="terracotta">
                Be the exception
              </HandwrittenNote>
            </div>

            <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[1.05]">
              Work that does{" "}
              <span className="font-secondary text-terracotta font-normal block sm:inline">
                the talking.
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-ink/80 leading-relaxed font-primary max-w-2xl font-normal">
              Different industries. Different challenges. One thing in common —
              we like making things work beautifully.
            </p>

            {/* Verified Studio Proof Bar */}
            <div className="pt-2 p-4 rounded-2xl bg-mint/30 border border-ink/15 max-w-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-ink/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-terracotta shrink-0" />
                <span>
                  <strong>Official Client Showcase:</strong> 4 live deployments
                  spanning Full-Stack EdTech, Editorial Architecture, Luxury
                  Charters, and Clean Energy EPC.
                </span>
              </div>
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
                        (p) =>
                          p.projectCategory === category ||
                          p.categories?.includes(category)
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

      {/* 3. WORK SHOWCASE (3D CARD STACK OR EDITORIAL GRID VIEW) */}
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
                    <div className="flex items-center justify-between pb-3 border-b border-ink/10">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-ink text-cream">
                          {project.year}
                        </span>
                        <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-terracotta text-cream">
                          {project.badge || "Client Work"}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink/70 font-semibold truncate max-w-[200px]">
                        {project.projectCategory}
                      </span>
                    </div>

                    {/* Middle Graphic / Screenshot Preview Area */}
                    <div className="relative rounded-2xl bg-cream/90 backdrop-blur-sm border border-ink/15 shadow-sm overflow-hidden flex flex-col justify-between flex-1 my-3 group/preview">
                      {item.imageSrc && (
                        <img
                          src={item.imageSrc}
                          alt={project.projectName}
                          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/preview:scale-105"
                        />
                      )}

                      {/* Gentle dark gradient for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent pointer-events-none" />

                      {/* Top Action Pills over image */}
                      <div className="relative z-10 flex items-center justify-between p-3.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream/90 backdrop-blur-md text-[10px] font-mono font-bold text-ink border border-ink/15">
                          <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                          <span>{project.client}</span>
                        </span>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream/90 backdrop-blur-md text-[10px] font-mono font-bold text-ink border border-ink/15 hover:bg-terracotta hover:text-cream transition-colors shadow-sm"
                            title="Open live website"
                          >
                            <span>Live Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {/* Center Overlay Identity */}
                      <div className="relative z-10 p-4 text-cream space-y-1 mt-auto">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cream/70 block">
                          {project.industry}
                        </span>
                        <h3 className="font-primary font-bold text-xl sm:text-2xl text-cream tracking-tight drop-shadow-sm">
                          {project.projectName}
                        </h3>
                      </div>
                    </div>

                    {/* Lower Frame: Narrative & Deliverables */}
                    <div className="space-y-2 pt-1">
                      <p className="text-xs sm:text-sm text-ink/85 leading-relaxed font-primary line-clamp-2">
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
                        <span className="font-mono text-[10px] text-terracotta font-bold">
                          Client Verified &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        ) : (
          /* Archive Grid View — Art-Directed Editorial Layout */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                // The Chess Project (1st) spans full 12 cols for massive featured presence
                const isFeatured = idx === 0 && activeCategory === "All";
                const colSpanClass = isFeatured
                  ? "md:col-span-12"
                  : "md:col-span-6";
                const aspectClass = isFeatured
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
                    <div className="flex flex-col flex-1">
                      {/* Visual Asset Preview Frame */}
                      <div
                        className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden border border-ink/15 mb-6 flex items-center justify-center bg-cream shadow-sm`}
                      >
                        {/* Genuine Screenshot Image */}
                        {project.images.cover && (
                          <img
                            src={project.images.cover}
                            alt={`${project.projectName} by Oddlyyy`}
                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                        )}

                        {/* Scrim Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-ink text-cream">
                            {project.year}
                          </span>
                          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-terracotta text-cream">
                            {project.badge || "Client Work"}
                          </span>
                        </div>

                        {/* Top Right Live Website Pill */}
                        {project.liveUrl && (
                          <div className="absolute top-4 right-4 z-20">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/95 backdrop-blur-md text-xs font-mono font-bold text-ink border border-ink/20 hover:bg-terracotta hover:text-cream transition-colors shadow-sm"
                            >
                              <span>Visit Website</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}

                        {/* Bottom Left Title on Scrim */}
                        <div className="absolute bottom-4 left-4 z-10 max-w-lg text-cream">
                          <span className="text-xs font-mono uppercase tracking-[0.2em] text-cream/75 block mb-1">
                            {project.industry}
                          </span>
                          <h3 className="font-primary font-bold text-2xl sm:text-4xl text-cream tracking-tight">
                            {project.projectName}
                          </h3>
                        </div>

                        {/* Action Arrow Icon */}
                        <Link
                          href={`/work/${project.slug}`}
                          className="absolute bottom-4 right-4 z-20 w-11 h-11 rounded-full bg-cream border border-ink/20 flex items-center justify-center text-ink shadow-sm group-hover:bg-terracotta group-hover:text-cream transition-colors"
                          aria-label={`View ${project.projectName} Case Study`}
                        >
                          <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>

                      {/* Metadata & Narrative */}
                      <div className="space-y-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono text-ink/60 uppercase tracking-wider">
                            <span className="font-bold text-terracotta">
                              Category: {project.projectCategory}
                            </span>
                            <span>{project.client}</span>
                          </div>

                          <h2 className="font-primary font-semibold text-2xl sm:text-3xl text-ink tracking-tight group-hover:text-terracotta transition-colors">
                            <Link href={`/work/${project.slug}`}>
                              {project.projectName}
                            </Link>
                          </h2>

                          <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-primary">
                            {project.description}
                          </p>

                          {/* Deliverables Chips */}
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.deliverables.slice(0, 4).map((item) => (
                              <span
                                key={item}
                                className="inline-flex items-center font-primary font-medium rounded-lg border transition-all px-2.5 py-1 text-xs bg-cream/70 text-ink border-ink/15"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Clickable Action Cue */}
                        <div className="pt-4 mt-4 border-t border-ink/10 flex items-center justify-between">
                          <Link
                            href={`/work/${project.slug}`}
                            className="font-primary font-medium text-xs sm:text-sm uppercase tracking-wider text-ink group-hover:text-terracotta flex items-center gap-1.5 transition-colors"
                          >
                            <span>View Case Study Architecture</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-mono text-ink/60 hover:text-terracotta inline-flex items-center gap-1 transition-colors"
                            >
                              <span>{project.liveUrl.replace("https://", "")}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </SectionContainer>

      {/* 4. ENQUIRY CALL TO ACTION AT THE BOTTOM */}
      <SectionContainer paddingY="xl" className="bg-ink text-cream">
        <div className="max-w-4xl space-y-6">
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

          <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-cream tracking-tight leading-tight">
            Have a project that demands{" "}
            <span className="font-secondary text-terracotta block sm:inline">
              unconventional craft?
            </span>
          </h2>

          <p className="text-base sm:text-xl text-cream/80 leading-relaxed font-primary max-w-2xl font-normal">
            Whether you are launching a complex full-stack web platform,
            repositioning an architectural practice, or engineering a custom
            direct booking workflow, we bring the brains, the code, and the
            craft.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
            <PrimaryButton href="/contact" size="lg">
              Start an engagement &rarr;
            </PrimaryButton>
            <SecondaryButton href="/services" size="lg" variant="outline">
              Review studio disciplines
            </SecondaryButton>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
