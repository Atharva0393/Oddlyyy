import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isExternal?: boolean;
  showArrow?: boolean;
  variant?: "terracotta" | "ink";
  children: React.ReactNode;
}

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  isExternal = false,
  showArrow = false,
  variant = "terracotta",
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    terracotta:
      "text-terracotta hover:text-terracotta-hover after:bg-terracotta",
    ink: "text-ink hover:text-ink/80 after:bg-ink",
  };

  const linkClasses = cn(
    "relative inline-flex items-center gap-1 font-primary font-medium transition-colors duration-150",
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:transition-all after:duration-200 after:ease-out",
    variantClasses[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("group", linkClasses)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn("group", linkClasses)} {...props}>
      {content}
    </Link>
  );
};

