import React from "react";
import { cn } from "@/lib/utils";

export interface TagProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  variant?: "cream" | "lavender" | "mint" | "ink";
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
    lavender: "bg-lavender text-ink border-ink/15 hover:border-ink",
    mint: "bg-mint text-ink border-ink/15 hover:border-ink",
    ink: "bg-ink text-cream border-ink",
  };

  const activeClasses =
    "bg-terracotta text-cream border-terracotta shadow-sm hover:bg-terracotta";

  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
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

