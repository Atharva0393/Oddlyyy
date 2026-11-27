"use client";

import React from "react";
import PushpinTearFooter from "@/components/ui/pushpin-tear-footer";
import { OddlyyyLogo } from "@/components/ui/OddlyyyLogo";
import { siteConfig } from "@/lib/siteConfig";

export const Footer: React.FC = () => {
  return (
    <PushpinTearFooter
      brand="oddlyyy."
      name="Be the exception."
      logoHref="/"
      logo={<OddlyyyLogo size="sm" variant="cream" interactive={false} />}
      sheet="#A94F35"
      paper="#F7F6F0"
      sheetInk="#F7F6F0"
      paperInk="#222126"
      seed={42}
      email={siteConfig.email}
      newsletter={null}
      status={{ label: "accepting select partnerships for 2026", href: "/contact" }}
      mark=""
      timeZone=""
      timeLabel=""
      socials={[
        { icon: "x", label: "X / Twitter", href: siteConfig.social.twitter },
        { icon: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
        { icon: "github", label: "GitHub", href: siteConfig.social.github },
        { icon: "ig", label: "Instagram", href: siteConfig.social.instagram },
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
          cta: { label: "talk.", href: `mailto:${siteConfig.email}` },
        },
        {
          title: "studio",
          links: [
            { label: "Services", href: "/services" },
            { label: "Selected Work", href: "/work" },
            { label: "About Oddlyyy", href: "/about" },
            { label: "Start a Project", href: "/contact" },
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
