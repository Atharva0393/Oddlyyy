import React from "react";
import { cn } from "@/lib/utils";
import { HandwrittenNote } from "@/components/ui";

export interface PageHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  annotation?: string;
  isDark?: boolean;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({
  eyebrow,
  title,
  description,
  annotation,
  isDark = false,
  align = "left",
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "py-10 md:py-16 space-y-4 border-b border-current/10 mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-4xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2",
            align === "center" ? "justify-center" : "justify-start"
          )}
        >
          <span
            className={cn(
              "text-xs md:text-sm font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5",
              isDark ? "text-lavender" : "text-terracotta"
            )}
          >
            <span>*</span>
            <span>{eyebrow}</span>
          </span>

          {annotation && (
            <HandwrittenNote
              direction="none"
              color={isDark ? "ink" : "terracotta"}
              className="ml-2"
            >
              {annotation}
            </HandwrittenNote>
          )}
        </div>
      )}

      <h1
        className={cn(
          "font-primary font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[0.98]",
          isDark ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h1>

      {description && (
        <p
          className={cn(
            "font-primary text-base sm:text-lg md:text-xl leading-relaxed pt-2",
            isDark ? "text-cream/80" : "text-ink/80",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl"
          )}
        >
          {description}
        </p>
      )}

      {children && <div className="pt-4">{children}</div>}
    </div>
  );
};

