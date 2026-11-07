"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { PrimaryButton, HandwrittenNote, OddlyyyLogo, IgnitionButton } from "@/components/ui";

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
      className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-cream text-ink animate-in fade-in duration-200"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-ink/15">
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
          className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="px-6 py-8 flex-1 flex flex-col justify-center space-y-4">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "group flex items-center justify-between py-2 border-b border-ink/10 transition-colors",
                isActive ? "text-terracotta" : "text-ink hover:text-terracotta"
              )}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-ink/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-primary font-medium text-3xl sm:text-4xl tracking-tight">
                  {item.label}
                </span>
              </div>
              <ArrowUpRight
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                )}
              />
            </Link>
          );
        })}
      </nav>

      {/* Bottom CTA & Footer Info */}
      <div className="p-6 border-t border-ink/15 bg-cream/70 space-y-4">
        <div className="flex items-center justify-between">
          <HandwrittenNote direction="right" color="terracotta">
            Be the exception
          </HandwrittenNote>
          <span className="text-xs font-mono text-ink/50 uppercase">
            Creative Digital Agency
          </span>
        </div>

        <IgnitionButton
          href={cta.href}
          onClick={onClose}
          size="md"
          className="w-full justify-center"
        >
          {cta.label}
        </IgnitionButton>
      </div>
    </div>
  );
};

