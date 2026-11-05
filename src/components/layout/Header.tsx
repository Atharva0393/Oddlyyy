"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navItems, primaryNavCta } from "@/content/agency";
import { PrimaryButton, NavLink, OddlyyyLogo } from "@/components/ui";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Add subtle background shadow/backdrop filter on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200",
          isScrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-ink/10 shadow-sm py-3.5"
            : "bg-cream py-5"
        )}
      >
        <div className="max-w-agency mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo matching approved bubbly identity */}
          <Link
            href="/"
            title="oddlyyy. — Be the exception."
            className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded"
            aria-label="oddlyyy. — Return to Homepage"
          >
            <OddlyyyLogo size="md" variant="ink" interactive={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <PrimaryButton
              href={primaryNavCta.href}
              size="sm"
              className="text-xs px-5 py-2.5 font-medium"
            >
              {primaryNavCta.label}
            </PrimaryButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href={primaryNavCta.href}
              className="text-xs font-primary font-medium text-cream bg-terracotta px-3.5 py-1.5 rounded-full"
            >
              Let&apos;s talk
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Open mobile navigation menu"
              className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        pathname={pathname}
        cta={primaryNavCta}
      />
    </>
  );
};

