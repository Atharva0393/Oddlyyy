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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
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

  // Reset clicked index when route changes
  useEffect(() => {
    setClickedIndex(null);
  }, [pathname]);

  // Current highlighted index (hover takes precedence, then clicked, then route activeIndex)
  const displayIndex =
    hoveredIndex !== null
      ? hoveredIndex
      : clickedIndex !== null
      ? clickedIndex
      : activeIndex;

  // Position and dynamically size limelight indicator above active/hovered nav item
  const updateLimelight = () => {
    const targetEl = navItemRefs.current[displayIndex];
    const limelight = limelightRef.current;
    if (targetEl && limelight) {
      limelight.style.left = `${targetEl.offsetLeft}px`;
      limelight.style.width = `${targetEl.offsetWidth}px`;

      if (!isLimelightReady) {
        setTimeout(() => setIsLimelightReady(true), 40);
      }
    }
  };

  useIsomorphicLayoutEffect(() => {
    updateLimelight();
  }, [displayIndex, isLimelightReady]);

  useEffect(() => {
    window.addEventListener("resize", updateLimelight);
    return () => window.removeEventListener("resize", updateLimelight);
  }, [displayIndex]);

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
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative hidden lg:inline-flex items-center h-11 rounded-full bg-[#FAF3EE]/90 dark:bg-card/90 backdrop-blur-md border border-ink/15 px-1.5 shadow-[0_2px_12px_rgba(32,32,40,0.05),inset_0_1px_0_rgba(255,255,255,0.7)] overflow-hidden"
          >
            {navItems.map((item, index) => {
              const isHighlighted = displayIndex === index;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => {
                    navItemRefs.current[index] = el;
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => {
                    console.log(
                      `[Oddly Navigation] Clicked navbar page: "${item.label}" -> ${item.href}`
                    );
                    setClickedIndex(index);
                    setHoveredIndex(null);
                  }}
                  className={cn(
                    "relative z-20 flex h-full items-center justify-center px-4 sm:px-4.5 py-1.5 text-xs sm:text-sm font-primary transition-colors duration-200 select-none",
                    isHighlighted
                      ? "text-terracotta font-semibold"
                      : "text-ink/70 hover:text-ink font-medium"
                  )}
                  aria-current={activeIndex === index ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Dynamic Width Limelight Spotlight Beam */}
            <div
              ref={limelightRef}
              className={cn(
                "absolute top-0 z-10 h-full pointer-events-none flex flex-col items-center",
                isLimelightReady
                  ? "transition-[left,width] duration-300 ease-in-out"
                  : ""
              )}
              style={{ left: "-999px", width: "0px" }}
              aria-hidden="true"
            >
              {/* Terracotta Emitter Bar spanning the width of the active/hovered word */}
              <div className="w-[74%] min-w-[42px] max-w-[64px] h-[3.5px] rounded-full bg-terracotta shadow-[0_0_12px_rgba(160,76,52,0.95),0_2px_8px_rgba(160,76,52,0.5)]" />

              {/* Downward Spotlight Cone spreading out to completely cover the entire word */}
              <div
                className="absolute left-[-22%] right-[-22%] top-[3.5px] h-11 pointer-events-none bg-gradient-to-b from-terracotta/45 via-terracotta/20 to-transparent"
                style={{
                  clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0% 100%)",
                }}
              />

              {/* Soft ambient light bath over the active text */}
              <div className="absolute inset-x-[-8%] top-[5px] bottom-1 rounded-full bg-terracotta/12 blur-sm pointer-events-none" />
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


