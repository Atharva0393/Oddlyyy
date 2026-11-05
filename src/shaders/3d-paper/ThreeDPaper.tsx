"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import threeDPaperSource from "./sources/3d-paper.html?raw";
import certificateSource from "./sources/3d-paper-certificate.html?raw";
import japaneseSource from "./sources/3d-paper-japanese.html?raw";
import siteOfTheYearSource from "./sources/3d-paper-site-of-the-year.html?raw";
import whySource from "./sources/3d-paper-why.html?raw";
import whyNotSource from "./sources/3d-paper-why-not.html?raw";
import whySettleSource from "./sources/3d-paper-why-settle.html?raw";

export type ThreeDPaperVariant =
  | "original"
  | "site-of-the-year"
  | "japanese"
  | "certificate"
  | "why"
  | "why-not"
  | "why-settle";

export type ThreeDPaperProps = {
  className?: string;
  style?: CSSProperties;
  variant?: ThreeDPaperVariant;
};

const sources: Record<ThreeDPaperVariant, string> = {
  original: whySource,
  "site-of-the-year": whyNotSource,
  japanese: whySource,
  certificate: whySettleSource,
  why: whySource,
  "why-not": whyNotSource,
  "why-settle": whySettleSource,
};

const titles: Record<ThreeDPaperVariant, string> = {
  original: "3D Paper — Oddlyyy WHY",
  "site-of-the-year": "3D Paper — Oddlyyy WHY NOT",
  japanese: "3D Paper — Oddlyyy WHY",
  certificate: "3D Paper — Oddlyyy WHY SETTLE",
  why: "3D Paper — Oddlyyy WHY",
  "why-not": "3D Paper — Oddlyyy WHY NOT",
  "why-settle": "3D Paper — Oddlyyy WHY SETTLE",
};

export function ThreeDPaper({ className = "", style, variant = "original" }: ThreeDPaperProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [documentVisible, setDocumentVisible] = useState(() => (
    typeof document === "undefined" || !document.hidden
  ));
  const [hostVisible, setHostVisible] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      setHostVisible(entry?.isIntersecting ?? true);
    }, { rootMargin: "80px" });
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    const update = () => setDocumentVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  const mounted = hostVisible && documentVisible;

  useEffect(() => {
    setReady(false);
  }, [mounted, variant]);

  return (
    <div
      ref={hostRef}
      className={`threeui-background three-d-paper${className ? ` ${className}` : ""}`}
      role="group"
      aria-label="Interactive translucent 3D paper certificate"
      data-state={!mounted ? "paused" : ready ? "ready" : "loading"}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#08080a",
        pointerEvents: "auto",
        ...style,
      }}
    >
      {mounted ? (
        <iframe
          title={titles[variant]}
          srcDoc={sources[variant]}
          sandbox="allow-scripts"
          loading="eager"
          onLoad={() => setReady(true)}
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
            width: "100%",
            height: "100%",
            border: 0,
            background: "#08080a",
            opacity: ready ? 1 : 0,
            pointerEvents: ready ? "auto" : "none",
            transition: "opacity 240ms ease-out",
          }}
        />
      ) : null}
    </div>
  );
}
