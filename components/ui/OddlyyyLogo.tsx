"use client";

import * as React from "react";
import Link from "next/link";
import logoData from "./oddlyyy-logo-paths.json";

export interface OddlyyyLogoProps extends React.SVGProps<SVGSVGElement> {
  /** Size variant */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "hero" | "fluid";
  /** Color theme variant */
  variant?: "ink" | "cream" | "terracotta" | "current";
  /** Override ink letter color */
  inkColor?: string;
  /** Override period dot color */
  dotColor?: string;
  /** Whether to render as a clickable home link */
  asLink?: boolean;
  /** Link destination (defaults to "/") */
  href?: string;
  /** Show the hand-drawn terracotta star doodle in the upper right */
  showDoodle?: boolean;
  /** Enable subtle hover micro-bounce */
  interactive?: boolean;
  /** Accessible label */
  alt?: string;
}

const sizeClasses = {
  xs: "h-5 w-auto",
  sm: "h-7 w-auto",
  md: "h-8 sm:h-9 w-auto",
  lg: "h-11 sm:h-12 w-auto",
  xl: "h-14 sm:h-16 w-auto",
  hero: "h-20 sm:h-28 md:h-36 w-auto",
  fluid: "w-full h-auto max-w-full",
};

export const OddlyyyLogo: React.FC<OddlyyyLogoProps> = ({
  size = "md",
  variant = "ink",
  inkColor,
  dotColor,
  asLink = false,
  href = "/",
  showDoodle = false,
  interactive = true,
  alt = "oddlyyy.",
  className = "",
  style,
  ...svgProps
}) => {
  // Determine letter and dot fill colors based on variant
  let fillLetters = "#202028"; // Odd Ink
  let fillDot = "#A04C34"; // Terracotta

  if (variant === "cream") {
    fillLetters = "#F4E4DC";
    fillDot = "#A04C34";
  } else if (variant === "terracotta") {
    fillLetters = "#A04C34";
    fillDot = "#202028";
  } else if (variant === "current") {
    fillLetters = "currentColor";
    fillDot = "#A04C34";
  }

  // Explicit overrides take priority
  if (inkColor) fillLetters = inkColor;
  if (dotColor) fillDot = dotColor;

  const appliedClass = `${sizeClasses[size]} ${interactive ? "transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]" : ""} ${className}`;

  const svgContent = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={logoData.viewBox}
      className={appliedClass}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      role="img"
      aria-label={alt}
      {...svgProps}
    >
      <title>{alt}</title>
      {/* Lowercase bubbly lettering for oddlyyy */}
      <path
        d={logoData.letters}
        fill={fillLetters}
        fillRule="evenodd"
        className="transition-colors duration-200"
      />
      {/* Signature Terracotta Dot */}
      <path
        d={logoData.dot}
        fill={fillDot}
        fillRule="evenodd"
        className="transition-colors duration-200"
      />
      {/* Optional hand-drawn terracotta star doodle */}
      {showDoodle && (
        <path
          d={logoData.doodle}
          fill={fillDot}
          fillRule="evenodd"
          opacity={0.88}
        />
      )}
    </svg>
  );

  if (asLink) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-md"
        aria-label="oddlyyy. - Return to Homepage"
      >
        {svgContent}
      </Link>
    );
  }

  return svgContent;
};

export default OddlyyyLogo;
