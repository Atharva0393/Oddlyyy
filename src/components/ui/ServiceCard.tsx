import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tag } from "./Tag";

export interface ServiceCardProps {
  index: string | number;
  title: string;
  description: string;
  deliverables?: string[];
  href?: string;
  variant?: "mint" | "lavender" | "cream" | "ink";
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  title,
  description,
  deliverables = [],
  href,
  variant = "cream",
  className,
}) => {
  const isDark = variant === "ink";

  const variantClasses = {
    cream: "bg-cream/90 text-ink border-ink/15 hover:border-ink",
    mint: "bg-mint text-ink border-ink/15 hover:border-ink",
    lavender: "bg-lavender text-ink border-ink/15 hover:border-ink",
    ink: "bg-ink text-cream border-ink/30 hover:border-cream/40",
  };

  const formattedIndex =
    typeof index === "number" ? String(index).padStart(2, "0") : index;

  const content = (
    <div
      className={cn(
        "group relative flex flex-col justify-between p-7 md:p-9 rounded-2xl border transition-all duration-300 ease-out",
        "hover:shadow-ink-offset hover:-translate-x-1.5 hover:-translate-y-1.5",
        variantClasses[variant],
        className
      )}
    >
      <div>
        {/* Card Header: Index & Hover Arrow */}
        <div className="flex items-center justify-between pb-6 border-b border-current/10 mb-6">
          <span
            className={cn(
              "font-mono text-xs md:text-sm tracking-wider font-semibold uppercase transition-transform duration-200 group-hover:translate-x-1",
              isDark ? "text-cream/60" : "text-terracotta"
            )}
          >
            [{formattedIndex}]
          </span>

          <div
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-12",
              isDark
                ? "border-cream/20 bg-cream/10 text-cream group-hover:bg-cream group-hover:text-ink"
                : "border-ink/15 bg-cream/50 text-ink group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta"
            )}
          >
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-primary font-semibold text-2xl md:text-3xl tracking-tight mb-4 transition-colors",
            isDark ? "text-cream" : "text-ink group-hover:text-terracotta"
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "font-primary text-sm md:text-base leading-relaxed mb-8",
            isDark ? "text-cream/70" : "text-ink/80"
          )}
        >
          {description}
        </p>
      </div>

      {/* Deliverables / Scope Tags */}
      {deliverables.length > 0 && (
        <div className="pt-4 border-t border-current/10">
          <p
            className={cn(
              "text-[11px] font-mono uppercase tracking-wider mb-2.5",
              isDark ? "text-cream/50" : "text-ink/60"
            )}
          >
            Key Deliverables
          </p>
          <div className="flex flex-wrap gap-1.5">
            {deliverables.map((item) => (
              <Tag
                key={item}
                size="sm"
                variant={isDark ? "cream" : "cream"}
                className={
                  isDark
                    ? "bg-cream/10 text-cream border-cream/10 hover:border-cream/30"
                    : "bg-cream/80 text-ink/90 border-ink/10"
                }
              >
                {item}
              </Tag>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
};

