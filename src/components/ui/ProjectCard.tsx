import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Tag } from "./Tag";

export interface ProjectCardProps {
  slug: string;
  title: string;
  client: string;
  categories: string[];
  year?: string;
  badge?: string;
  summary?: string;
  coverImage?: string;
  aspectRatio?: "video" | "square" | "portrait";
  cardColor?: "cream" | "lavender" | "mint";
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  client,
  categories,
  year,
  badge,
  summary,
  coverImage,
  aspectRatio = "video",
  cardColor = "cream",
  className,
}) => {
  const aspectClasses = {
    video: "aspect-[16/10]",
    square: "aspect-square",
    portrait: "aspect-[4/5]",
  };

  const cardColorClasses = {
    cream: "bg-cream/90 border-ink/15",
    lavender: "bg-lavender border-ink/15",
    mint: "bg-mint border-ink/15",
  };

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border p-4 md:p-6 transition-all duration-300 ease-out",
        "hover:shadow-ink-offset hover:-translate-x-1.5 hover:-translate-y-1.5",
        cardColorClasses[cardColor],
        className
      )}
    >
      <Link href={`/work/${slug}`} className="block flex-1">
        {/* Visual Frame */}
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-xl bg-ink/5 border border-ink/10 mb-5 flex items-center justify-center",
            aspectClasses[aspectRatio]
          )}
        >
          {coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            // Creative geometric placeholder with agency branding
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-cream via-lavender/30 to-mint/40 group-hover:scale-105 transition-transform duration-500">
              <span className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-2">
                Case Study
              </span>
              <span className="font-primary font-semibold text-2xl md:text-3xl text-ink tracking-tight">
                {client}
              </span>
              <span className="font-accent text-terracotta text-lg mt-1">
                Oddlyyy Archive
              </span>
            </div>
          )}

          {/* Top-Right Badge Overlay */}
          {badge && (
            <div className="absolute top-3 right-3 z-10 transition-transform duration-300 group-hover:scale-105">
              <Badge variant="terracotta" size="sm">
                {badge}
              </Badge>
            </div>
          )}

          {/* Quick Hover Arrow Pill */}
          <div className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-cream text-ink border border-ink flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-sm">
            <ArrowUpRight className="w-5 h-5 text-terracotta" />
          </div>
        </div>

        {/* Project Meta & Details */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono text-ink/60 uppercase tracking-wider">
            <span>{client}</span>
            {year && <span>{year}</span>}
          </div>

          <h3 className="font-primary font-semibold text-xl md:text-2xl text-ink tracking-tight group-hover:text-terracotta transition-colors">
            {title}
          </h3>

          {summary && (
            <p className="font-primary text-sm text-ink/75 line-clamp-2 leading-relaxed">
              {summary}
            </p>
          )}

          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {categories.map((cat) => (
              <Tag key={cat} size="sm" variant="cream">
                {cat}
              </Tag>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

