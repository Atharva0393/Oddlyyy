"use client";

import React from "react";
import PushpinTearFooter from "@/components/ui/pushpin-tear-footer";
import { OddlyyyLogo } from "@/components/ui/OddlyyyLogo";

export const Footer: React.FC = () => {
  return (
    <PushpinTearFooter
      brand="oddlyyy."
      name="Be the exception."
      logoHref="/"
      logo={<OddlyyyLogo size="sm" variant="cream" interactive={false} />}
      sheet="#A04C34"
      paper="#F4E4DC"
      sheetInk="#F4E4DC"
      paperInk="#202028"
      seed={42}
      email="hello@oddlyyy.studio"
      newsletter={{ label: "clever little systems, once a month", placeholder: "your@email.com" }}
      status={null}
      mark=""
      timeZone=""
      timeLabel=""
      socials={[
        { icon: "x", label: "X / Twitter", href: "https://twitter.com" },
        { icon: "dribbble", label: "Dribbble", href: "https://dribbble.com" },
        { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
        { icon: "ig", label: "Instagram", href: "https://instagram.com" },
      ]}
      columns={[
        {
          title: "capabilities",
          links: [
            { label: "Digital Platforms", href: "/services/digital-platforms" },
            { label: "AI & Automation", href: "/services/ai-automation" },
            { label: "Brand Identity", href: "/services/brand-identity" },
            { label: "The Odd Jobs", href: "/services/the-odd-jobs" },
          ],
          cta: { label: "talk.", href: "mailto:hello@oddlyyy.studio" },
        },
        {
          title: "studio",
          links: [
            { label: "Services", href: "/services" },
            { label: "Selected Work", href: "/work" },
            { label: "About Oddlyyy", href: "/about" },
            { label: "Style Guide", href: "/playground" },
          ],
          cta: { label: "brief us.", href: "/contact" },
        },
      ]}
      sideLinks={[]}
      chat={{ label: "say hi", href: "/contact" }}
      copyright="© 2026 Oddlyyy. All rights reserved."
      credit=""
      handle={{ label: "@oddlyyy.studio", href: "/contact" }}
      height="min(880px, 100svh)"
    />
  );
};
