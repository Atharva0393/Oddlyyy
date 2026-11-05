import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  annotation?: string;
  align?: "left" | "center" | "split";
  size?: "sm" | "md" | "lg" | "display";
  isDark?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  annotation,
  align = "left",
  size = "lg",
  isDark = false,
  className,
  children,
}) => {
  const sizeClasses = {
    sm: "text-heading-3 md:text-heading-2",
    md: "text-heading-2 md:text-heading-1",
    lg: "text-heading-1 md:text-display-lg",
    display: "text-display-lg md:text-display-xl",
  };

  const textColor = isDark ? "text-cream" : "text-ink";
  const descColor = isDark ? "text-cream/70" : "text-ink/75";
  const eyebrowColor = isDark ? "text-lavender" : "text-terracotta";

  if (align === "split") {
    return (
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 md:mb-16",
          className
        )}
      >
        <div className="lg:col-span-7 space-y-3">
          {eyebrow && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5" style={{ color: isDark ? "#E4E0FC" : "#A04C34" }}>
                <span>*</span>
                <span>{eyebrow}</span>
              </span>
              {annotation && (
                <span className="font-accent text-lg text-terracotta rotate-[-2deg] select-none">
                  {annotation}
                </span>
              )}
            </div>
          )}
          <h2
            className={cn(
              "font-primary font-bold tracking-tight",
              textColor,
              sizeClasses[size]
            )}
          >
            {title}
          </h2>
        </div>
        <div className="lg:col-span-5 space-y-4">
          {description && (
            <p className={cn("text-base md:text-lg leading-relaxed font-primary", descColor)}>
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "space-y-4 mb-12 md:mb-16",
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
              eyebrowColor
            )}
          >
            <span className="text-terracotta">*</span>
            <span>{eyebrow}</span>
          </span>
          {annotation && (
            <span className="font-accent text-lg text-terracotta rotate-[-2deg] select-none ml-1">
              {annotation}
            </span>
          )}
        </div>
      )}

      <h2
        className={cn(
          "font-primary font-bold tracking-tight",
          textColor,
          sizeClasses[size]
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed font-primary",
            descColor,
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
};

