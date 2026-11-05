import React from "react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  variant?: "cream" | "lavender" | "mint" | "ink";
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  variant = "cream",
  className,
}) => {
  const isDark = variant === "ink";

  const variantClasses = {
    cream: "bg-cream/90 text-ink border-ink/15",
    lavender: "bg-lavender text-ink border-ink/15",
    mint: "bg-mint text-ink border-ink/15",
    ink: "bg-ink text-cream border-ink/30",
  };

  return (
    <figure
      className={cn(
        "relative flex flex-col justify-between p-7 sm:p-9 rounded-2xl border transition-all duration-300",
        "hover:shadow-ink-offset hover:-translate-x-0.5 hover:-translate-y-0.5",
        variantClasses[variant],
        className
      )}
    >
      <div>
        {/* Large Decorative Quotation Marker */}
        <span
          className={cn(
            "font-serif text-5xl leading-none select-none block mb-2",
            isDark ? "text-terracotta" : "text-terracotta"
          )}
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {/* Quote Body */}
        <blockquote
          className={cn(
            "font-primary font-medium text-lg sm:text-xl leading-relaxed mb-8",
            isDark ? "text-cream/90" : "text-ink/90"
          )}
        >
          {quote}
        </blockquote>
      </div>

      {/* Attribution Footer */}
      <figcaption className="pt-4 border-t border-current/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-1">
        <div>
          <span className="font-primary font-semibold text-sm block tracking-tight">
            {author}
          </span>
          <span className={isDark ? "text-cream/60" : "text-ink/60"}>
            {role}
          </span>
        </div>
        <span
          className={cn(
            "uppercase tracking-wider font-semibold",
            isDark ? "text-lavender" : "text-terracotta"
          )}
        >
          {company}
        </span>
      </figcaption>
    </figure>
  );
};

