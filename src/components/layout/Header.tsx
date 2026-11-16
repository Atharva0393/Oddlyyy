"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navItems, primaryNavCta } from "@/content/agency";
import { PrimaryButton, OddlyyyLogo } from "@/components/ui";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLimelightReady, setIsLimelightReady] = useState(false);
  const pathname = usePathname();

  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  // Compute active navigation index based on current pathname
  const activeIndex = React.useMemo(() => {
    const exactIndex = navItems.findIndex((item) => item.href === pathname);
    if (exactIndex !== -1) return exactIndex;

    if (pathname.startsWith("/services")) {
      const idx = navItems.findIndex((item) => item.href === "/services");
      if (idx !== -1) return idx;
    }
    if (pathname.startsWith("/work")) {
      const idx = navItems.findIndex((item) => item.href === "/work");
      if (idx !== -1) return idx;
    }
    if (pathname.startsWith("/about")) {
      const idx = navItems.findIndex((item) => item.href === "/about");
      if (idx !== -1) return idx;
    }
    if (pathname.startsWith("/contact")) {
      const idx = navItems.findIndex((item) => item.href === "/contact");
      if (idx !== -1) return idx;
    }

    return 0;
  }, [pathname]);

  // Position limelight indicator smoothly above active nav item
  const updateLimelight = () => {
    const activeEl = navItemRefs.current[activeIndex];
    const limelight = limelightRef.current;
    if (activeEl && limelight) {
      const newLeft =
        activeEl.offsetLeft + activeEl.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isLimelightReady) {
        setTimeout(() => setIsLimelightReady(true), 50);
      }
    }
  };

  useIsomorphicLayoutEffect(() => {
    updateLimelight();
  }, [activeIndex, isLimelightReady]);

  useEffect(() => {
    window.addEventListener("resize", updateLimelight);
    return () => window.removeEventListener("resize", updateLimelight);
  }, [activeIndex]);

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
          "top-0 z-40 w-full transition-all duration-200",
          pathname === "/" ? "fixed left-0 right-0" : "sticky",
          isScrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-ink/10 shadow-sm py-3"
            : pathname === "/"
              ? "bg-transparent border-transparent py-5"
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

          {/* Desktop Navigation Links — Oddlyyy Limelight Navigation */}
          <nav
            aria-label="Main Navigation"
            className="relative hidden lg:inline-flex items-center h-11 rounded-full bg-[#FAF3EE]/90 dark:bg-card/90 backdrop-blur-md border border-ink/15 px-1.5 shadow-[0_2px_12px_rgba(32,32,40,0.05),inset_0_1px_0_rgba(255,255,255,0.7)]"
          >
            {navItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => {
                    navItemRefs.current[index] = el;
                  }}
                  className={cn(
                    "relative z-20 flex h-full items-center justify-center px-4 sm:px-4.5 py-1.5 text-xs sm:text-sm font-primary transition-colors duration-200 select-none",
                    isActive
                      ? "text-terracotta font-semibold"
                      : "text-ink/70 hover:text-ink font-medium"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Limelight Spotlight Beam adapted for Oddlyyy Terracotta palette */}
            <div
              ref={limelightRef}
              className={cn(
                "absolute top-0 z-10 w-9 h-[3.5px] rounded-full bg-terracotta shadow-[0_0_12px_rgba(160,76,52,0.95),0_2px_8px_rgba(160,76,52,0.5)] pointer-events-none",
                isLimelightReady ? "transition-[left] duration-300 ease-in-out" : ""
              )}
              style={{ left: "-999px" }}
              aria-hidden="true"
            >
              <div className="absolute left-[-35%] top-[3.5px] w-[170%] h-11 [clip-path:polygon(10%_100%,30%_0,70%_0,90%_100%)] bg-gradient-to-b from-terracotta/30 via-terracotta/10 to-transparent pointer-events-none" />
            </div>
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <PrimaryButton
              href={primaryNavCta.href}
              size="sm"
              className="text-xs px-5 py-2.5 font-medium"
            >
              Contact Us
            </PrimaryButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={primaryNavCta.href}
              className="text-xs font-primary font-medium text-cream bg-terracotta px-3 py-1.5 rounded-full inline-flex items-center gap-1 shrink-0"
            >
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Contact</span>
              <span className="text-[10px]">↗</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Open mobile navigation menu"
              className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta shrink-0"
            >
              <Menu className="w-4 h-4" />
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


