import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Eye,
  Compass,
  Code2,
} from "lucide-react";
import { ProjectItem } from "@/types";
import { SectionContainer } from "@/components/layout/SectionContainer";
import {
  Badge,
  Tag,
  HandwrittenNote,
  ProjectCard,
  ScrollReveal,
  FloatingAsterisk,
  RotatingBadge,
} from "@/components/ui";
import { CtaSection } from "./CtaSection";
import { cn } from "@/lib/utils";

export interface CaseStudyLayoutProps {
  project: ProjectItem;
  nextProject?: ProjectItem;
  relatedProjects?: ProjectItem[];
}

/**
 * Visual graphic component tailored to each project's domain
 * Creates rich, bespoke editorial visuals without requiring missing raster images.
 */
const ProjectHeroGraphic: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const isAudio = project.slug === "project-alpha";
  const isTextile = project.slug === "project-beta";
  const isAI = project.slug === "project-gamma";
  const isHardware = project.slug === "project-delta";
  const isArchitecture = project.slug === "project-epsilon";
  const isType = project.slug === "project-zeta";

  return (
    <div
      className={cn(
        "relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border-2 border-ink/20 shadow-ink-offset transition-all duration-500",
        project.cardColor === "lavender"
          ? "bg-gradient-to-br from-lavender via-cream to-mint/30"
          : project.cardColor === "mint"
          ? "bg-gradient-to-br from-mint via-cream to-lavender/40"
          : "bg-gradient-to-br from-cream via-lavender/20 to-mint/30"
      )}
    >
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#202028_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

      {/* Domain-specific visual elements */}
      {isAudio && (
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 md:p-10 pointer-events-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-xs font-mono text-ink/60">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-terracotta animate-pulse" />
              LIVE SYNTHESIS ENGINE &bull; 96kHz / 24-BIT
            </span>
            <span className="hidden sm:inline">STEREO FIELD: 180&deg; EXPANSION</span>
          </div>

          <div className="flex items-end justify-center gap-1 sm:gap-2 h-24 sm:h-44 px-2 sm:px-4">
            {[40, 65, 30, 85, 95, 45, 70, 100, 60, 80, 50, 90, 75, 35, 60, 90, 100, 55, 80, 45, 65, 30].map(
              (height, i) => (
                <div
                  key={i}
                  className="w-1 sm:w-2.5 rounded-t-sm transition-all duration-300"
                  style={{
                    height: `${height}%`,
                    backgroundColor:
                      i % 3 === 0
                        ? "#A04C34"
                        : i % 2 === 0
                        ? "#202028"
                        : "#202028aa",
                  }}
                />
              )
            )}
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] text-ink/60 border-t border-ink/15 pt-2 sm:pt-3">
            <span>20 Hz [SUB-BASS]</span>
            <span>1.2 kHz [MIDS]</span>
            <span>20 kHz [AIR]</span>
          </div>
        </div>
      )}

      {isTextile && (
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 md:p-10 pointer-events-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-xs font-mono text-ink/60">
            <span>SPECIMEN LAB &bull; LOT #0924</span>
            <span className="hidden sm:inline">TENSILE: 420 MPa &bull; BIO-POLYMER</span>
          </div>

          <div className="flex flex-col items-center justify-center my-auto text-center space-y-1.5 sm:space-y-2">
            <span className="font-primary font-bold text-2xl sm:text-5xl lg:text-6xl text-ink tracking-tight uppercase">
              Velvet &amp; Matter
            </span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-terracotta font-semibold">
              Editorial Identity &bull; Material Science Lookbook
            </span>
            <div className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cream border border-ink/30 shadow-sm" title="Warm Cream" />
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-ink border border-ink/30 shadow-sm" title="Odd Ink" />
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-terracotta border border-ink/30 shadow-sm" title="Terracotta" />
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-lavender border border-ink/30 shadow-sm" title="Lavender" />
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-mint border border-ink/30 shadow-sm" title="Soft Mint" />
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] text-ink/60 border-t border-ink/15 pt-2 sm:pt-3">
            <span>THREAD DENSITY: 380 TPI</span>
            <span>CARBON OFFSET: 100% VERIFIED</span>
          </div>
        </div>
      )}

      {isAI && (
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 md:p-10 pointer-events-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-xs font-mono text-ink/60">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Cpu className="w-3.5 h-3.5 text-terracotta" />
              VECTOR SEARCH ACTIVE &bull; 1536-DIM
            </span>
            <span>LATENCY: 42ms</span>
          </div>

          <div className="max-w-xl mx-auto my-auto w-full p-3 sm:p-5 rounded-2xl bg-cream/90 border border-ink/20 shadow-sm space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-ink/60 pb-1.5 border-b border-ink/10">
              <span className="text-terracotta font-semibold">QUERY SYNTHESIS</span>
              <span className="px-1.5 py-0.5 rounded bg-mint font-bold text-ink text-[10px]">99.4% CONFIDENCE</span>
            </div>
            <p className="font-mono text-[11px] sm:text-sm text-ink/80 leading-relaxed line-clamp-3 sm:line-clamp-none">
              &quot;According to Exhibit 4.2 [Vector Reference #891], operational margin increased 14.2% following automated document pipeline deployment.&quot;
            </p>
            <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-mono text-ink/50">
              <span>SOURCE: SEC_10K_ARCHIVE.PDF</span>
              <span>&bull;</span>
              <span>VERIFIED CITATION ANCHOR</span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] text-ink/60 border-t border-ink/15 pt-2 sm:pt-3">
            <span>ZERO HALLUCINATION PROTOCOL</span>
            <span>DETERMINISTIC CITATIONS</span>
          </div>
        </div>
      )}

      {isHardware && (
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 md:p-10 pointer-events-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-xs font-mono text-ink/60">
            <span>MODULAR PINOUT SCHEMATIC 1.0</span>
            <span className="hidden sm:inline">REVERSIBLE BUS: TYPE-C 40Gbps</span>
          </div>

          <div className="flex items-center justify-center my-auto gap-3 sm:gap-8">
            <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-2xl border-2 border-dashed border-ink/40 flex flex-col items-center justify-center p-2 sm:p-3 text-center bg-cream/60">
              <Cpu className="w-6 h-6 sm:w-10 sm:h-10 text-terracotta mb-1 sm:mb-2" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-ink">CORE MODULE</span>
            </div>
            <div className="w-6 sm:w-16 h-0.5 bg-ink/30 relative">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-terracotta" />
            </div>
            <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-2xl border-2 border-ink/40 flex flex-col items-center justify-center p-2 sm:p-3 text-center bg-lavender/60">
              <Layers className="w-6 h-6 sm:w-10 sm:h-10 text-ink mb-1 sm:mb-2" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-ink">BATTERY PACK</span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] text-ink/60 border-t border-ink/15 pt-2 sm:pt-3">
            <span>MAGNETIC COUPLING: 14N</span>
            <span>STATUS: PRE-PRODUCTION BLUEPRINT</span>
          </div>
        </div>
      )}

      {isArchitecture && (
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 md:p-10 pointer-events-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-xs font-mono text-ink/60">
            <span>SPATIAL ELEVATION &bull; SECTION B-B</span>
            <span className="hidden sm:inline">SCALE: 1:50 &bull; 0.00 LAT / LONG</span>
          </div>

          <div className="my-auto mx-auto w-full max-w-lg space-y-2">
            <div className="h-24 sm:h-36 border border-ink/30 relative flex items-center justify-center">
              <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-ink/20" />
              <div className="absolute inset-y-0 left-1/3 border-l border-dashed border-ink/20" />
              <div className="absolute inset-y-0 right-1/3 border-l border-dashed border-ink/20" />
              <span className="font-primary font-bold text-xl sm:text-4xl text-ink tracking-widest uppercase">
                Studio Monolith
              </span>
            </div>
            <div className="flex justify-between font-mono text-[9px] sm:text-[10px] text-ink/50">
              <span>[0.00m FOUNDATION]</span>
              <span>[+4.20m MEZZANINE]</span>
              <span>[+8.40m ROOF]</span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] text-ink/60 border-t border-ink/15 pt-2 sm:pt-3">
            <span>NATURAL LIGHT: 340 LUX</span>
            <span>RAW FORM-TIE FINISH</span>
          </div>
        </div>
      )}

      {isType && (
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 md:p-10 pointer-events-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-xs font-mono text-ink/60">
            <span>VARIABLE AXIS PLAYGROUND</span>
            <span className="hidden sm:inline">AXES: [wght 100-900] [slnt -15]</span>
          </div>

          <div className="my-auto text-center space-y-1">
            <div className="font-primary font-bold text-5xl sm:text-8xl md:text-9xl text-ink tracking-tight select-none">
              Aa &amp; Qq
            </div>
            <p className="font-mono text-[10px] sm:text-xs text-terracotta uppercase tracking-widest font-bold">
              Dynamic Variable Typeface Specimen &bull; 16 Styles
            </p>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] text-ink/60 border-t border-ink/15 pt-2 sm:pt-3">
            <span>GLYPH COUNT: 842</span>
            <span>OPENTYPE: LIGATURES, INKTRAPS</span>
          </div>
        </div>
      )}

      {/* Default Fallback for other projects */}
      {!isAudio && !isTextile && !isAI && !isHardware && !isArchitecture && !isType && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none">
          <span className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">
            Oddlyyy Speculative Prototype Archive
          </span>
          <span className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
            {project.title}
          </span>
          <span className="text-sm font-primary text-ink/70 mt-2 max-w-md">
            {project.client} &bull; {project.industry}
          </span>
        </div>
      )}

      {/* Floating Corner Badges */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-ink text-cream font-bold">
          Oddlyyy Labs
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 hidden sm:block">
        <HandwrittenNote direction="right" color="terracotta">
          Be the exception
        </HandwrittenNote>
      </div>
    </div>
  );
};

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  project,
  nextProject,
  relatedProjects = [],
}) => {
  return (
    <article className="min-h-screen bg-cream text-ink">
      {/* ---------------------------------------------------- */}
      {/* SECTION 01 & 02: HERO & METADATA                     */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="sm" className="border-b border-ink/10">
        <div className="flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink/70 hover:text-terracotta transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Work</span>
          </Link>

          <span className="font-mono text-xs text-ink/50 uppercase tracking-widest hidden sm:inline">
            Case Archive &bull; {project.year}
          </span>
        </div>
      </SectionContainer>

      {/* Main Hero Header */}
      <SectionContainer paddingY="md">
        <div className="space-y-6 max-w-5xl">
          {/* Top Badges & Meta */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono text-terracotta uppercase tracking-widest font-bold">
              * Case Study / {project.year}
            </span>
            <Badge variant="outline">{project.projectCategory || project.category}</Badge>
            <Badge variant="terracotta">
              {project.badge || "Speculative Prototype"}
            </Badge>
            <span className="text-xs font-mono text-ink/60 uppercase">
              {project.industry}
            </span>
          </div>

          {/* Project Title (Oversized Headline) */}
          <h1 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[1.05]">
            {project.projectName || project.title}
          </h1>

          {/* Project Summary / Pitch */}
          <p className="text-lg sm:text-xl md:text-2xl text-ink/80 leading-relaxed max-w-3xl font-primary">
            {project.description || project.summary}
          </p>

          {/* Project Tag Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologiesUsed?.map((tech) => (
              <Tag key={tech} size="sm" variant="cream">
                {tech}
              </Tag>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Section 1 Visual Showcase (Large Immersive Frame) */}
      <SectionContainer paddingY="sm">
        <ProjectHeroGraphic project={project} />
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 03: PROJECT OVERVIEW & METADATA GRID          */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              Project Overview
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight leading-tight">
              An ambitious idea engineered without compromise.
            </h2>
            <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-primary">
              {project.description || project.summary}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-1 shadow-sm">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                Client / Organization
              </span>
              <span className="font-primary font-semibold text-lg text-ink block">
                {project.client}
              </span>
              <span className="text-xs font-mono text-terracotta block">
                {project.isConcept ? "Studio Speculative Project" : "Verified Client"}
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-1 shadow-sm">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                Industry &amp; Domain
              </span>
              <span className="font-primary font-semibold text-lg text-ink block">
                {project.industry}
              </span>
              <span className="text-xs font-mono text-ink/60 block">
                Specialized Sector
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-1 shadow-sm">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                Discipline &amp; Scope
              </span>
              <span className="font-primary font-semibold text-lg text-ink block">
                {project.projectCategory || project.category}
              </span>
              <span className="text-xs font-mono text-ink/60 block">
                Full Lifecycle Execution
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-1 shadow-sm">
              <span className="text-xs font-mono text-ink/50 uppercase tracking-wider block">
                Year &amp; Timeline
              </span>
              <span className="font-primary font-semibold text-lg text-ink block">
                {project.year} &bull; Active Archive
              </span>
              <span className="text-xs font-mono text-ink/60 block">
                Production-Ready Design System
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 04: THE CHALLENGE                            */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              01 / The Challenge
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight mt-2">
              Breaking the predictable pattern.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-xl text-ink/85 leading-relaxed font-primary">
              {project.challenge}
            </p>

            {/* Pull Quote Callout Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-lavender/40 border border-ink/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-terracotta" />
              <p className="font-secondary text-xl sm:text-2xl text-ink leading-snug">
                &ldquo;Most digital solutions in this industry default to predictable formulas. We started from the exact opposite premise.&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs font-mono text-ink/60">
                <span className="font-bold text-terracotta">&bull;</span>
                <span>Oddlyyy Core Creative Thesis</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 05: OUR APPROACH                             */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10 bg-mint/20">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              02 / Our Approach
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
              Thinking differently before writing a single line of code.
            </h2>
            <p className="text-lg sm:text-xl text-ink/80 leading-relaxed font-primary">
              {project.approach ||
                "We discarded generic templates in favor of bespoke materiality, tactile micro-interactions, and direct browser-native performance."}
            </p>
          </div>

          {/* Three Approach Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-cream border border-ink/15 space-y-3 shadow-sm hover:shadow-ink-offset hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-terracotta text-cream flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-primary font-semibold text-xl text-ink">
                Interrogate the Default
              </h3>
              <p className="text-sm text-ink/75 leading-relaxed font-primary">
                Every competitor in this category looks like a variation of the same theme. We ask what happens if you strip away the clichés and rebuild the user mental model from first principles.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-cream border border-ink/15 space-y-3 shadow-sm hover:shadow-ink-offset hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-ink text-cream flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-primary font-semibold text-xl text-ink">
                Tactile Material Craft
              </h3>
              <p className="text-sm text-ink/75 leading-relaxed font-primary">
                Digital interfaces shouldn&apos;t feel like flat glass. We build tactile friction, responsive audio/visual feedback, and tangible state transitions that reward exploration.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-cream border border-ink/15 space-y-3 shadow-sm hover:shadow-ink-offset hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-mint text-ink border border-ink/20 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-primary font-semibold text-xl text-ink">
                Zero-Bloat Engineering
              </h3>
              <p className="text-sm text-ink/75 leading-relaxed font-primary">
                Expressive creativity shouldn&apos;t come at the cost of slow loading speeds. We use modern web primitives, strict typing, and zero layout shift for lightning-fast responsiveness.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 06: THE SOLUTION                             */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              03 / The Solution
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight mt-2">
              Architecting the unexpected.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-xl text-ink/85 leading-relaxed font-primary">
              {project.solution}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-2">
                <span className="text-xs font-mono text-terracotta uppercase font-bold block">
                  Design Architecture
                </span>
                <h4 className="font-primary font-semibold text-lg text-ink">
                  Editorial Typography &amp; Layout
                </h4>
                <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                  High-contrast typography pairing Inter and Tempting with generous whitespace and deliberate asymmetrical composition.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-cream border border-ink/15 space-y-2">
                <span className="text-xs font-mono text-terracotta uppercase font-bold block">
                  Technical Architecture
                </span>
                <h4 className="font-primary font-semibold text-lg text-ink">
                  Next.js 15 &amp; Modern Web APIs
                </h4>
                <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                  Server-rendered static optimization paired with client-side interactive islands for instantaneous navigation and zero layout shift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 07: VISUAL GALLERY                           */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10 bg-lavender/20">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
                04 / Visual Archive &amp; System Specimens
              </span>
              <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
                Design system, schematics &amp; interface details.
              </h2>
            </div>
            <span className="text-xs font-mono text-ink/60 uppercase">
              3 Specimens Archival
            </span>
          </div>

          {/* Visual Gallery Grid */}
          <div className="space-y-8">
            {/* Gallery Item 1: Full-width Editorial Canvas */}
            <div className="space-y-3">
              <div className="w-full aspect-[16/9] rounded-3xl bg-ink text-cream p-8 sm:p-12 border-2 border-ink relative overflow-hidden flex flex-col justify-between shadow-ink-offset">
                <div className="flex items-center justify-between text-xs font-mono text-cream/60">
                  <span>FIG 01.1 &bull; SYSTEM PROTOTYPE</span>
                  <span className="text-terracotta font-bold">HIGH-CONTRAST CANVAS</span>
                </div>

                <div className="max-w-xl space-y-4 my-auto">
                  <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold block">
                    Interactive Component Architecture
                  </span>
                  <h3 className="font-primary font-bold text-3xl sm:text-5xl text-cream tracking-tight">
                    {project.projectName}
                  </h3>
                  <p className="text-sm sm:text-base text-cream/75 leading-relaxed font-primary">
                    A comprehensive inspection of the layout architecture, responsive token scales, and micro-interaction states.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-cream/60 border-t border-cream/20 pt-4">
                  <span>FRAMEWORK: NEXT.JS 15 + TAILWIND</span>
                  <span>VIEWPORT: FLUID SCALING [360px - 4K]</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 text-xs font-mono text-ink/70">
                <span>Fig. 01.1 &mdash; Primary flagship interface and editorial composition canvas.</span>
                <span className="text-terracotta">Oddlyyy Archive</span>
              </div>
            </div>

            {/* Gallery Item 2 & 3: Two-Column Split Specimens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Specimen 2: Design Tokens & Typography */}
              <div className="space-y-3">
                <div className="w-full aspect-[4/3] rounded-3xl bg-cream border-2 border-ink/20 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between text-xs font-mono text-ink/60">
                    <span>FIG 01.2 &bull; TOKENS &amp; SPECIMEN</span>
                    <span>TYPOGRAPHY</span>
                  </div>

                  <div className="space-y-3 my-auto">
                    <span className="text-xs font-mono text-terracotta uppercase font-bold block">
                      Type Scale Matrix
                    </span>
                    <div className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                      Inter
                    </div>
                    <div className="font-secondary text-xl text-ink/80">
                      Tempting &bull; Editorial script accent
                    </div>
                    <div className="font-accent text-terracotta text-2xl">
                      Caveat &bull; Handwritten warmth
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-ink/10">
                    <div className="w-6 h-6 rounded-md bg-[#F4E4DC] border border-ink/30" title="Warm Cream" />
                    <div className="w-6 h-6 rounded-md bg-[#202028]" title="Odd Ink" />
                    <div className="w-6 h-6 rounded-md bg-[#A04C34]" title="Terracotta" />
                    <div className="w-6 h-6 rounded-md bg-[#E4E0FC] border border-ink/30" title="Soft Lavender" />
                    <div className="w-6 h-6 rounded-md bg-[#E4F0E8] border border-ink/30" title="Soft Mint" />
                  </div>
                </div>
                <div className="px-2 text-xs font-mono text-ink/70">
                  Fig. 01.2 &mdash; Brand token suite, typography hierarchy, and strict 5-color palette.
                </div>
              </div>

              {/* Specimen 3: Blueprint / Component States */}
              <div className="space-y-3">
                <div className="w-full aspect-[4/3] rounded-3xl bg-mint/50 border-2 border-ink/20 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between text-xs font-mono text-ink/60">
                    <span>FIG 01.3 &bull; SCHEMATICS</span>
                    <span>STATE MATRIX</span>
                  </div>

                  <div className="space-y-4 my-auto">
                    <span className="text-xs font-mono text-terracotta uppercase font-bold block">
                      Interactive State Machine
                    </span>
                    <div className="p-4 rounded-xl bg-cream border border-ink/20 space-y-2">
                      <div className="flex justify-between items-center text-xs font-mono text-ink">
                        <span>DEFAULT STATE</span>
                        <span className="text-ink/60">0.00s</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-ink/10 overflow-hidden">
                        <div className="w-1/3 h-full bg-ink" />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-ink text-cream border border-ink space-y-2 shadow-ink-offset">
                      <div className="flex justify-between items-center text-xs font-mono text-cream">
                        <span className="text-terracotta font-bold">HOVER / ENGAGED</span>
                        <span>0.25s EASE-OUT</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-cream/20 overflow-hidden">
                        <div className="w-3/4 h-full bg-terracotta" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs font-mono text-ink/60 border-t border-ink/10 pt-4">
                    <span>MICRO-INTERACTION TESTED</span>
                    <span>TOUCH &amp; CURSOR READY</span>
                  </div>
                </div>
                <div className="px-2 text-xs font-mono text-ink/70">
                  Fig. 01.3 &mdash; Micro-interaction state transitions and tactile timing curves.
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 08: TECHNOLOGIES & DELIVERABLES              */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10">
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
              05 / System Capabilities &amp; Stack
            </span>
            <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
              What went into the build.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Column 1: Technologies Used */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-cream border-2 border-ink/15 space-y-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-terracotta" />
                <h3 className="font-primary font-semibold text-xl text-ink">
                  Technologies Used
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                Engineered with industry-standard frameworks and native web primitives for durability, speed, and clean maintainability.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologiesUsed?.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-ink/5 border border-ink/15 text-ink hover:border-terracotta hover:text-terracotta transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Deliverables */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-cream border-2 border-ink/15 space-y-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-terracotta" />
                <h3 className="font-primary font-semibold text-xl text-ink">
                  Key Deliverables
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-primary">
                Every asset, design component, and deployment artifact delivered to full production specifications.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.deliverables?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-ink/[0.03] border border-ink/10 text-xs sm:text-sm text-ink/90 font-primary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 09: PROJECT OUTCOME & VERIFIED BENCHMARKS    */}
      {/* ---------------------------------------------------- */}
      <SectionContainer paddingY="lg" className="border-t border-ink/10 bg-mint/30">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
            06 / Outcome &amp; Benchmarks
          </span>

          <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
            Measurable results &amp; verification.
          </h2>

          {/* Outcome Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-cream border-2 border-ink/20 shadow-ink-offset space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-terracotta font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Studio Audit Outcome</span>
            </div>

            <p className="font-primary font-semibold text-xl sm:text-2xl text-ink leading-snug">
              {project.outcome}
            </p>

            {/* Ethical Studio Transparency Note */}
            <div className="pt-4 border-t border-ink/15 text-xs font-mono text-ink/70 leading-relaxed space-y-1">
              <p>
                <strong className="text-ink font-primary">Transparency Statement:</strong> As an internal studio concept and speculative build, metrics reflect automated Lighthouse stress audits, Core Web Vitals profiling, and component unit benchmarks.
              </p>
              <p className="text-ink/60">
                In adherence to Oddlyyy studio ethics, client revenue and conversion claims are never fabricated. Verified commercial case study metrics are published only following full production deployment.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* ---------------------------------------------------- */}
      {/* SECTION 10: RELATED PROJECTS                         */}
      {/* ---------------------------------------------------- */}
      {relatedProjects.length > 0 && (
        <SectionContainer paddingY="lg" className="border-t border-ink/10">
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">
                  07 / Related Work
                </span>
                <h2 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight">
                  More things we&apos;ve built differently.
                </h2>
              </div>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase text-ink hover:text-terracotta transition-colors group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 2 Related Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((relProj) => (
                <ProjectCard
                  key={relProj.slug}
                  slug={relProj.slug}
                  title={relProj.projectName || relProj.title}
                  client={relProj.client}
                  categories={[relProj.projectCategory || relProj.category]}
                  year={relProj.year}
                  badge={relProj.badge}
                  summary={relProj.description || relProj.summary}
                  cardColor={relProj.cardColor || "cream"}
                />
              ))}
            </div>
          </div>
        </SectionContainer>
      )}

      {/* ---------------------------------------------------- */}
      {/* SECTION 11: NEXT PROJECT NAVIGATION                  */}
      {/* ---------------------------------------------------- */}
      {nextProject && (
        <SectionContainer paddingY="md" className="border-t border-ink/10">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block p-8 sm:p-14 rounded-3xl bg-lavender/50 border-2 border-ink/15 hover:border-ink hover:shadow-ink-offset hover:-translate-y-1 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta font-bold flex items-center gap-2">
                  <span>Next Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <h3 className="font-primary font-bold text-3xl sm:text-5xl text-ink tracking-tight group-hover:text-terracotta transition-colors">
                  {nextProject.projectName || nextProject.title}
                </h3>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-ink/70">
                  <span>{nextProject.client}</span>
                  <span>&bull;</span>
                  <span>{nextProject.projectCategory || nextProject.category}</span>
                </div>
              </div>

              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-ink flex items-center justify-center bg-cream group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta transition-all shadow-sm">
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:scale-110" />
              </div>
            </div>
          </Link>
        </SectionContainer>
      )}

      {/* ---------------------------------------------------- */}
      {/* SECTION 12: FINAL PROJECT ENQUIRY CTA                */}
      {/* ---------------------------------------------------- */}
      <CtaSection
        title="Ready to build something that refuses to blend in?"
        description="We turn ambitious digital ideas into things that actually work. No cookie-cutter templates, no corporate fluff, no boring solutions."
        primaryButtonLabel="Let's make something odd"
        primaryButtonHref={`/contact?project=${project.slug}`}
        secondaryButtonLabel="Explore all services"
        secondaryButtonHref="/services"
      />
    </article>
  );
};
