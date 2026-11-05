import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  isActive?: boolean;
  badge?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  isActive = false,
  badge,
  className,
  children,
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center gap-2 py-1 text-sm md:text-base font-primary font-medium tracking-normal transition-colors duration-150",
        isActive ? "text-terracotta" : "text-ink/80 hover:text-ink",
        className
      )}
    >
      <span className="relative">
        {children}
        {/* Animated underline indicator */}
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-200",
            isActive
              ? "w-full bg-terracotta"
              : "w-0 bg-ink group-hover:w-full"
          )}
        />
      </span>

      {/* Optional micro-badge (e.g. "NEW", count) */}
      {badge && (
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-lavender text-ink border border-ink/10 leading-none">
          {badge}
        </span>
      )}
    </Link>
  );
};

