import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  isExternal?: boolean;
  showArrow?: boolean;
  variant?: "outline" | "lavender" | "mint" | "ink";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  href,
  isExternal = false,
  showArrow = false,
  variant = "outline",
  size = "md",
  className,
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3.5 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const variantClasses = {
    outline:
      "border-2 border-ink text-ink bg-transparent hover:bg-ink hover:text-cream hover:shadow-ink-offset hover:-translate-x-1 hover:-translate-y-1",
    lavender:
      "bg-lavender text-ink border border-ink/20 hover:bg-lavender-hover hover:border-ink hover:shadow-ink-offset hover:-translate-x-1 hover:-translate-y-1",
    mint:
      "bg-mint text-ink border border-ink/20 hover:bg-mint-hover hover:border-ink hover:shadow-ink-offset hover:-translate-x-1 hover:-translate-y-1",
    ink:
      "bg-ink text-cream hover:bg-ink-800 hover:shadow-terracotta-offset hover:-translate-x-1 hover:-translate-y-1",
  };

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center font-primary font-medium tracking-normal",
    "rounded-full transition-all duration-200 ease-out",
    "active:translate-x-0 active:translate-y-0 active:shadow-none active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <span className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-1.5 group-hover:scale-110">
          <ArrowRight className="w-4 h-4 transition-transform duration-200" />
        </span>
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
};

