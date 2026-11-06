"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge, Tag, HandwrittenNote } from "@/components/ui";
import { projectsData } from "@/content/projects";

export const SelectedWork: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <SectionContainer
      id="selected-work"
      paddingY="xl"
      className="border-b border-ink/10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <h2 className="font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-ink leading-[1.05]">
            Less talking.{" "}
            <span className="text-terracotta font-normal">
              More showing.
            </span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <HandwrittenNote direction="right" color="terracotta">
            selected client work
          </HandwrittenNote>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-primary font-medium text-terracotta hover:text-ink transition-colors pb-1"
          >
            <span>Explore all case studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Portfolio Grid: 2 Column Asymmetrical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projectsData.slice(0, 4).map((project, idx) => {
          const cardBg =
            project.cardColor === "lavender"
              ? "bg-lavender"
              : project.cardColor === "mint"
              ? "bg-mint"
              : "bg-cream/90";

          return (
            <motion.article
              key={project.slug}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border-2 border-ink/15 transition-all duration-300 ease-out hover:shadow-ink-offset hover:-translate-x-1 hover:-translate-y-1 ${cardBg}`}
            >
              <Link href={`/work/${project.slug}`} className="block">
                {/* Visual Image / Interactive Asset Frame */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-ink/15 mb-6 flex items-center justify-center bg-cream shadow-sm">
                  {/* Real Website Cover Image */}
                  {project.images.cover ? (
                    <img
                      src={project.images.cover}
                      alt={`${project.projectName} by Oddlyyy`}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-ink text-cream flex items-center justify-center mb-1 shadow-sm">
                        <Layers className="w-6 h-6 text-terracotta" />
                      </div>
                      <h4 className="font-primary font-semibold text-xl text-ink tracking-tight">
                        {project.projectName}
                      </h4>
                    </div>
                  )}

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top-Right Badge */}
                  {project.badge && (
                    <div className="absolute top-3 right-3 z-20">
                      <Badge variant="terracotta" size="sm">
                        {project.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Top-Left Category */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-cream/90 backdrop-blur-sm text-ink border border-ink/15">
                      {project.projectCategory}
                    </span>
                  </div>

                  {/* Bottom-Right Interactive View Trigger Pill */}
                  <div className="absolute bottom-3 right-3 z-20 w-10 h-10 rounded-full bg-cream text-ink border border-ink flex items-center justify-center opacity-90 group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta transition-all duration-200 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Metadata & Narrative */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-ink/60 uppercase tracking-wider">
                    <span className="font-bold text-terracotta">
                      0{idx + 1} &bull; {project.projectCategory}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-primary font-semibold text-2xl sm:text-3xl text-ink tracking-tight group-hover:text-terracotta transition-colors">
                    {project.projectName}
                  </h3>

                  <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-primary line-clamp-2">
                    {project.description}
                  </p>

                  {/* Deliverables */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.deliverables.slice(0, 3).map((item) => (
                      <Tag key={item} size="sm" variant="cream">
                        {item}
                      </Tag>
                    ))}
                  </div>

                  {/* Explicit View Project Interaction Link */}
                  <div className="pt-3 border-t border-ink/10 flex items-center justify-between">
                    <span className="font-primary font-medium text-xs sm:text-sm uppercase tracking-wider text-ink group-hover:text-terracotta flex items-center gap-1.5">
                      <span>View Case Study Architecture</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono text-terracotta">
                      Verified Client
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>

      {/* Bottom Proof Note */}
      <div className="mt-12 p-4 rounded-2xl bg-cream/70 border border-ink/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ink/60 gap-3 text-center sm:text-left">
        <span>
          Note: The above entries represent verified production client platforms and corporate digital experiences delivered by Oddlyyy.
        </span>
        <Link
          href="/work"
          className="font-bold text-terracotta hover:underline shrink-0"
        >
          View Full Archive →
        </Link>
      </div>
    </SectionContainer>
  );
};

