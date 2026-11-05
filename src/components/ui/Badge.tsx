import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "terracotta" | "lavender" | "mint" | "ink" | "outline";
  size?: "sm" | "md";
  withDot?: boolean;
  dotColor?: "terracotta" | "mint" | "lavender";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "outline",
  size = "md",
  withDot = false,
  dotColor = "terracotta",
  className,
}) => {
  const variantClasses = {
    terracotta: "bg-terracotta text-cream border-transparent",
    lavender: "bg-lavender text-ink border-ink/10",
    mint: "bg-mint text-ink border-ink/10",
    ink: "bg-ink text-cream border-transparent",
    outline: "bg-cream/40 text-ink border-ink/20",
  };

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-xs md:text-sm",
  };

  const dotClasses = {
    terracotta: "bg-terracotta",
    mint: "bg-[#2E7D32]",
    lavender: "bg-lavender-dark",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-primary font-medium tracking-normal rounded-full border transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {withDot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              dotClasses[dotColor]
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              dotClasses[dotColor]
            )}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};

