"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring configuration for fluid trailing feel
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    // Only enable on desktop pointer devices
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasFinePointer || prefersReduced) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a, button, input, textarea, select, [role='button'], .interactive-hover")
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible, prefersReduced]);

  if (!isMounted || prefersReduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-terracotta transition-colors duration-200"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: isHovered ? -22 : -5,
        translateY: isHovered ? -22 : -5,
        width: isHovered ? 44 : 10,
        height: isHovered ? 44 : 10,
        backgroundColor: isHovered ? "rgba(160, 76, 52, 0.15)" : "#A04C34",
        borderColor: isHovered ? "#A04C34" : "transparent",
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        width: { duration: 0.18, ease: "easeOut" },
        height: { duration: 0.18, ease: "easeOut" },
        opacity: { duration: 0.15 },
      }}
    />
  );
};

