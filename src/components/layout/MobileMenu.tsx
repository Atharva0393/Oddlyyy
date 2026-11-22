"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { PrimaryButton, HandwrittenNote, OddlyyyLogo } from "@/components/ui";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  pathname: string;
  cta: {
    label: string;
    href: string;
  };
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  pathname,
  cta,
}) => {
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-paper bg-notebook-ruled text-[#222126] animate-in fade-in duration-200"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#222126]/15 bg-white/80 backdrop-blur-sm">
        <Link
          href="/"
          onClick={onClose}
          className="inline-flex items-center"
          aria-label="oddlyyy. Homepage"
        >
          <OddlyyyLogo size="sm" variant="ink" interactive={false} />
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="w-9 h-9 rounded-md border border-[#222126] bg-[#FFD84D] flex items-center justify-center text-[#222126] shadow-[2px_2px_0px_#222126] active:translate-y-0.5"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links with Notebook Tab Style */}
      <nav className="px-6 py-8 flex-1 flex flex-col justify-center space-y-3">
        {navItems.map((item, index) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "group flex items-center justify-between p-3.5 rounded-lg border transition-all select-none",
                isActive
                  ? "bg-[#FFD84D] text-[#222126] border-[#222126] shadow-[3px_3px_0px_#222126]"
                  : "bg-white/80 text-[#222126] border-[#222126]/20 hover:border-[#222126] shadow-sm hover:shadow-[2px_2px_0px_#222126]"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-[#222126]/10 text-[#222126]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl sm:text-3xl tracking-wide uppercase">
                  {item.label}
                </span>
              </div>
              <ArrowUpRight
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5"
                )}
              />
            </Link>
          );
        })}
      </nav>

      {/* Bottom CTA & Scrapbook Info */}
      <div className="p-6 border-t border-[#222126]/15 bg-white/70 space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-accent text-lg text-terracotta -rotate-1">
            Good things happen here ✦
          </span>
          <span className="text-xs font-mono text-[#222126]/60 uppercase">
            Oddlyyy Studio
          </span>
        </div>

        <Link
          href={cta.href}
          onClick={onClose}
          className="w-full justify-center text-center font-bold uppercase tracking-wider text-sm py-3.5 px-6 rounded-md bg-[#222126] text-[#F7F6F0] hover:bg-terracotta border border-[#222126] shadow-[3px_3px_0px_#FFD84D] block transition-transform active:translate-y-0.5"
        >
          {cta.label}
        </Link>
      </div>
    </div>
  );
};

