import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  isExternal?: boolean;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  href,
  isExternal = false,
  showArrow = true,
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

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center font-primary font-medium tracking-normal",
    "bg-terracotta text-cream rounded-full",
    "transition-all duration-200 ease-out",
    "hover:bg-terracotta-hover hover:shadow-ink-offset hover:-translate-x-1 hover:-translate-y-1",
    "active:translate-x-0 active:translate-y-0 active:shadow-none active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
    "disabled:opacity-50 disabled:pointer-events-none",
    sizeClasses[size],
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <span className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200" />
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

