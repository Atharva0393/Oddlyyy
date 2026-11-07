"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projectsData } from "@/content/projects";
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

  // Map projects to CardStack items
  const cardStackItems: WorkCardStackItem[] = useMemo(() => {
    return projectsData.map((project) => ({
      id: project.id,
      title: project.projectName,
      description: project.description,
      imageSrc: project.images.cover,
      href: `/work/${project.slug}`,
      tag: project.projectCategory,
      project,
    }));
  }, []);

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
          </div>

          <div className="hidden lg:flex items-center justify-center shrink-0 pr-8">
            <RotatingBadge size="md" variant="mint" />
          </div>
        </div>
      </SectionContainer>

      {/* 2. WORK SHOWCASE: INTERACTIVE 3D CARD STACK & EDITORIAL ARCHIVE */}
      <SectionContainer
        paddingY="xl"
        className="border-b border-ink/10 relative overflow-hidden"
      >
        {/* Interactive 3D Card Stack */}
        <div className="py-4 sm:py-8">
          <CardStack
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

        {/* Editorial Case Studies Archive */}
        <div className="pt-16 sm:pt-20 border-t border-ink/10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-medium">
                Comprehensive Archive
              </span>
              <h2 className="font-primary font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                All Case Studies
              </h2>
            </div>
            <span className="font-mono text-xs text-ink/60">
              4 Verified Client Deployments
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
            {projectsData.map((project, idx) => {
              // The Chess Project (1st) spans full 12 cols for massive featured presence
              const isFeatured = idx === 0;
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
                <article
                  key={project.slug}
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
                </article>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* 3. ENQUIRY CALL TO ACTION AT THE BOTTOM */}
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
