"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { headerNavItems, primaryNavCta } from "@/content/navigation";
import { OddlyyyLogo } from "@/components/ui";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Compute active navigation item
  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 border-b border-[#222126]/12 bg-[#F7F6F0]/95 backdrop-blur-md",
          isScrolled ? "shadow-sm py-2" : "py-2.5 sm:py-3"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              title="oddlyyy. | Creative Studio"
              className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded"
              aria-label="oddlyyy. | Return to Homepage"
            >
              <OddlyyyLogo size="md" variant="ink" interactive={true} />
            </Link>
          </div>

          {/* Desktop Notebook Divider Tabs */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1.5 lg:gap-2 pt-1"
          >
            {headerNavItems.map((item) => {
              const active = isItemActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs lg:text-sm uppercase tracking-wider font-semibold transition-all duration-150 select-none flex items-center gap-1.5 border",
                    active
                      ? "bg-[#FFD84D] text-[#222126] border-[#222126] rounded-t-md shadow-[1px_1px_0px_#222126] translate-y-[-1px]"
                      : "bg-transparent text-[#222126]/70 hover:text-[#222126] hover:bg-[#F2EDE3] border-transparent rounded-t-md"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      active ? "bg-[#222126]" : "bg-[#222126]/30"
                    )}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right: Contact Button */}
          <div className="hidden md:flex items-center">
            <Link
              href={primaryNavCta.href}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F7F6F0] bg-[#222126] hover:bg-[#A94F35] border border-[#222126] rounded-full shadow-[2px_2px_0px_#FFD84D] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{primaryNavCta.label}</span>
              <span className="text-[#FFD84D]">✦</span>
            </Link>
          </div>

          {/* Mobile Right: Small Contact + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={primaryNavCta.href}
              className="text-xs font-bold uppercase tracking-wider text-[#222126] bg-[#FFD84D] border border-[#222126] px-3 py-1 rounded-full shadow-[1.5px_1.5px_0px_#222126]"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Open mobile navigation menu"
              className="w-8 h-8 rounded-md border border-[#222126] bg-[#F7F6F0] flex items-center justify-center text-[#222126] shadow-[1.5px_1.5px_0px_#222126] active:translate-y-0.5"
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
        navItems={headerNavItems}
        pathname={pathname}
        cta={primaryNavCta}
      />
    </>
  );
};
