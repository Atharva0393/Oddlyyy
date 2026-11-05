import React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps {
  as?: "section" | "div" | "article" | "aside";
  variant?: "cream" | "ink" | "mint" | "lavender" | "transparent";
  containerWidth?: "agency" | "narrow" | "wide" | "full";
  paddingY?: "sm" | "md" | "lg" | "xl" | "none";
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  as: Component = "section",
  variant = "transparent",
  containerWidth = "agency",
  paddingY = "lg",
  id,
  className,
  children,
}) => {
  const variantClasses = {
    cream: "bg-cream text-ink",
    ink: "bg-ink text-cream",
    mint: "bg-mint text-ink",
    lavender: "bg-lavender text-ink",
    transparent: "",
  };

  const paddingYClasses = {
    none: "py-0",
    sm: "py-6 sm:py-8 md:py-12",
    md: "py-10 sm:py-12 md:py-16",
    lg: "py-12 sm:py-16 md:py-24",
    xl: "py-14 sm:py-20 md:py-32",
  };

  const containerWidthClasses = {
    narrow: "max-w-4xl mx-auto px-4 sm:px-6",
    agency: "max-w-agency mx-auto px-4 sm:px-6 lg:px-12",
    wide: "max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12",
    full: "w-full px-0",
  };

  return (
    <Component
      id={id}
      className={cn(variantClasses[variant], paddingYClasses[paddingY], className)}
    >
      <div className={containerWidthClasses[containerWidth]}>{children}</div>
    </Component>
  );
};

