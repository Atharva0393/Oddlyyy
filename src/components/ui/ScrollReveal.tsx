"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 24,
  className,
  direction = "up",
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: yOffset };
      case "down":
        return { opacity: 0, y: -yOffset };
      case "left":
        return { opacity: 0, x: yOffset };
      case "right":
        return { opacity: 0, x: -yOffset };
      case "none":
        return { opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "none":
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

