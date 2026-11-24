import React from "react";
import { cn } from "@/lib/utils";

export interface TagProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  variant?: "cream" | "lavender" | "mint" | "ink" | "yellow" | "pink" | "blue" | "peach";
  size?: "sm" | "md";
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  isActive = false,
  onClick,
  variant = "cream",
  size = "md",
  className,
}) => {
  const isClickable = Boolean(onClick);

  const baseVariantClasses = {
    cream: "bg-cream/70 text-ink border-ink/15 hover:border-ink",
    lavender: "bg-[#D6D0F9] text-ink border-ink/20 hover:border-ink shadow-[1.5px_1.5px_0px_rgba(34,33,38,0.12)] hover:-translate-y-0.5",
    mint: "bg-[#A9DCC4] text-ink border-ink/20 hover:border-ink shadow-[1.5px_1.5px_0px_rgba(34,33,38,0.12)] hover:-translate-y-0.5",
    ink: "bg-ink text-cream border-ink",
    yellow: "bg-[#FFD84D] text-ink border-ink/20 hover:border-ink shadow-[1.5px_1.5px_0px_rgba(34,33,38,0.12)] hover:-translate-y-0.5",
    pink: "bg-[#F3B5CB] text-ink border-ink/20 hover:border-ink shadow-[1.5px_1.5px_0px_rgba(34,33,38,0.12)] hover:-translate-y-0.5",
    blue: "bg-[#A9BAF0] text-ink border-ink/20 hover:border-ink shadow-[1.5px_1.5px_0px_rgba(34,33,38,0.12)] hover:-translate-y-0.5",
    peach: "bg-[#FED7AA] text-ink border-ink/20 hover:border-ink shadow-[1.5px_1.5px_0px_rgba(34,33,38,0.12)] hover:-translate-y-0.5",
  };

  const activeClasses =
    "bg-terracotta text-cream border-terracotta shadow-sm hover:bg-terracotta";

  const sizeClasses = {
    sm: "px-3 py-1 text-xs sm:text-[13px]",
    md: "px-3.5 py-1.5 text-xs md:text-sm",
  };

  const Component = isClickable ? "button" : "span";

  return (
    <Component
      type={isClickable ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "inline-flex items-center font-primary font-medium rounded-lg border transition-all duration-150",
        sizeClasses[size],
        isActive ? activeClasses : baseVariantClasses[variant],
        isClickable &&
          "cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta",
        className
      )}
    >
      {children}
    </Component>
  );
};

