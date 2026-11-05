import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FooterLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isExternal?: boolean;
  showArrow?: boolean;
  isDark?: boolean;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  isExternal = false,
  showArrow = false,
  isDark = true,
  className,
  children,
  ...props
}) => {
  const baseClasses = cn(
    "group inline-flex items-center gap-1 text-sm font-primary font-medium transition-colors duration-150",
    isDark
      ? "text-cream/70 hover:text-cream"
      : "text-ink/75 hover:text-terracotta",
    className
  );

  const content = (
    <>
      <span className="relative">
        {children}
        <span
          className={cn(
            "absolute -bottom-0.5 left-0 h-[1px] w-0 transition-all duration-200 group-hover:w-full",
            isDark ? "bg-cream" : "bg-terracotta"
          )}
        />
      </span>
      {showArrow && (
        <ArrowUpRight
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            isDark ? "text-cream/60 group-hover:text-cream" : "text-terracotta"
          )}
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses} {...props}>
      {content}
    </Link>
  );
};

