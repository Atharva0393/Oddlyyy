import React from "react";
import { PrimaryButton, HandwrittenNote, SecondaryButton, FloatingAsterisk } from "@/components/ui";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/utils";

export interface CtaSectionProps {
  title?: React.ReactNode;
  eyebrow?: string;
  description?: string;
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  annotation?: string;
  variant?: "ink" | "terracotta" | "lavender" | "mint";
  className?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = (
    <>
      Ready to be the <span className="text-terracotta italic font-normal">exception</span>?
    </>
  ),
  eyebrow = "Next Steps",
  description = "Whether you have a fully formed brief or an ambitious hunch that needs creative direction, we are ready to collaborate.",
  primaryButtonLabel = "Let's make something odd",
  primaryButtonHref = "/contact",
  secondaryButtonLabel = "Explore Our Services",
  secondaryButtonHref = "/services",
  annotation = "no corporate templates",
  variant = "ink",
  className,
}) => {
  const isDark = variant === "ink";

  return (
    <SectionContainer
      paddingY="xl"
      className={cn("overflow-hidden", className)}
    >
      <div
        className={cn(
          "relative rounded-3xl p-6 sm:p-12 md:p-16 border-2 transition-all",
          isDark
            ? "bg-ink text-cream border-ink"
            : variant === "lavender"
            ? "bg-lavender text-ink border-ink/15"
            : variant === "mint"
            ? "bg-mint text-ink border-ink/15"
            : "bg-terracotta text-cream border-terracotta"
        )}
      >
        {/* Floating Brand Asterisk */}
        <div className="absolute top-6 right-6 sm:top-10 sm:right-10 pointer-events-none opacity-60 sm:opacity-90">
          <FloatingAsterisk size="lg" color="terracotta" />
        </div>

        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-xs md:text-sm font-mono uppercase tracking-widest font-semibold",
                isDark ? "text-lavender" : "text-terracotta"
              )}
            >
              * {eyebrow}
            </span>

            {annotation && (
              <HandwrittenNote
                direction="left"
                color={isDark ? "ink" : "terracotta"}
                className={isDark ? "text-lavender" : "text-terracotta"}
              >
                {annotation}
              </HandwrittenNote>
            )}
          </div>

          <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]">
            {title}
          </h2>

          <p
            className={cn(
              "text-base sm:text-lg leading-relaxed max-w-2xl font-primary",
              isDark ? "text-cream/80" : "text-ink/80"
            )}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 w-full sm:w-auto">
            <PrimaryButton
              href={primaryButtonHref}
              size="lg"
              className={cn(
                "w-full sm:w-auto text-center justify-center",
                isDark ? "bg-terracotta text-cream" : undefined
              )}
            >
              {primaryButtonLabel}
            </PrimaryButton>

            {secondaryButtonLabel && (
              <SecondaryButton
                href={secondaryButtonHref}
                variant={isDark ? "mint" : "outline"}
                size="lg"
                showArrow
                className="w-full sm:w-auto text-center justify-center"
              >
                {secondaryButtonLabel}
              </SecondaryButton>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

