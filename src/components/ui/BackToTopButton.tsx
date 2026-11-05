"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BackToTopButtonProps {
  className?: string;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={cn(
        "group inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-current/20 font-mono text-xs uppercase tracking-wider transition-all duration-300",
        "hover:border-terracotta hover:text-terracotta hover:-translate-y-1 hover:shadow-sm active:translate-y-0",
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        className
      )}
    >
      <span>Back to top</span>
      <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};

