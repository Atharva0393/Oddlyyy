"use client";

import React, { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/utils";

const POSITIVE_WORDS = [
  "oddly good! ✦",
  "pure craft ✨",
  "be the exception! ★",
  "10/10 vibe ♡",
  "iconic! ✦",
  "bold move! ✨",
  "unmistakable ★",
  "made with love ♥",
  "100% genuine ✦",
  "certified fresh ✨",
];

const PARTICLE_EMOJIS = ["❤️", "💖", "✨", "✦", "★", "🧡", "🌸"];

const BADGE_COLORS = [
  "bg-[#FFD84D] text-[#222126] border-[#222126]/20",
  "bg-[#A9DCC4] text-[#1D4A38] border-[#1D4A38]/20",
  "bg-[#F3B5CB] text-[#5C1D33] border-[#5C1D33]/20",
  "bg-[#A9BAF0] text-[#1E2C68] border-[#1E2C68]/20",
  "bg-[#D6D0F9] text-[#3D3373] border-[#3D3373]/20",
  "bg-[#FED7AA] text-[#7D2B1C] border-[#7D2B1C]/20",
];

interface FloatingParticle {
  id: number;
  type: "word" | "emoji";
  content: string;
  x: number;
  y: number;
  rotate: number;
  scale: number;
  colorClass?: string;
}

export const AboutWhyWeStarted: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [likes, setLikes] = useState(48);
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const lastHoverTime = useRef<number>(0);

  const spawnParticles = useCallback((count: number, includeWord = true) => {
    const newItems: FloatingParticle[] = [];
    const timestamp = Date.now();

    if (includeWord) {
      const randomWord = POSITIVE_WORDS[Math.floor(Math.random() * POSITIVE_WORDS.length)];
      const randomColor = BADGE_COLORS[Math.floor(Math.random() * BADGE_COLORS.length)];
      newItems.push({
        id: timestamp + Math.random(),
        type: "word",
        content: randomWord,
        x: (Math.random() - 0.5) * 130,
        y: -(90 + Math.random() * 60),
        rotate: (Math.random() - 0.5) * 24,
        scale: 1,
        colorClass: randomColor,
      });
    }

    for (let i = 0; i < count; i++) {
      const emoji = PARTICLE_EMOJIS[Math.floor(Math.random() * PARTICLE_EMOJIS.length)];
      newItems.push({
        id: timestamp + i + Math.random(),
        type: "emoji",
        content: emoji,
        x: (Math.random() - 0.5) * 160,
        y: -(80 + Math.random() * 80),
        rotate: (Math.random() - 0.5) * 36,
        scale: 0.8 + Math.random() * 0.4,
      });
    }

    setParticles((prev) => [...prev.slice(-18), ...newItems]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newItems.some((item) => item.id === p.id)));
    }, 1500);
  }, []);

  const handleStamp = () => {
    setLikes((prev) => prev + 1);
    spawnParticles(4, true);
  };

  const handleHover = () => {
    const now = Date.now();
    if (now - lastHoverTime.current > 600) {
      lastHoverTime.current = now;
      spawnParticles(2, true);
    }
  };

  return (
    <section
      id="about-why-we-started"
      className="relative overflow-hidden bg-transparent py-20 sm:py-28 md:py-36 border-b border-ink/10"
    >
      <SectionContainer paddingY="none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Span 7): Typography-led Narrative */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            {/* Small subtle label */}
            <span className="font-mono text-xs uppercase tracking-widest text-ink/50 font-semibold block">
              OUR ORIGIN
            </span>

            {/* Large Editorial Headline */}
            <h2 className="font-primary font-bold text-3xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-[1.08]">
              We started because the usual felt{" "}
              <span className="font-recoleta italic font-normal text-terracotta block sm:inline">
                a little too usual.
              </span>
            </h2>

            {/* Generously Spaced Narrative */}
            <div className="space-y-6 text-lg sm:text-xl md:text-[22px] text-ink/80 leading-relaxed font-primary font-normal max-w-2xl">
              <p className="text-xl sm:text-2xl font-medium text-ink leading-relaxed">
                Oddlyyy was born from that curiosity. A small, independent creative technology studio bringing together design, development, and unconventional thinking to create digital experiences that have both personality and purpose.
              </p>

              <p>
                We don&apos;t believe in doing things a certain way simply because that&apos;s how they&apos;ve always been done. We question, explore, experiment, and find solutions that make sense for the people and businesses behind every project.
              </p>
            </div>
          </div>

          {/* Right Column (Span 5): Tactile Editorial Centerpiece Graphic */}
          <div className="lg:col-span-5 pt-4 lg:pt-12 flex justify-center lg:justify-end">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { rotate: 1, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-sm rounded-[32px] p-8 sm:p-10 bg-[#FAF3EE] border border-ink/15 shadow-[0_12px_32px_rgba(32,32,40,0.06)] select-none overflow-visible"
            >
              {/* Corner Tape Detail */}
              <div
                className="absolute -top-3 left-8 w-20 h-6 bg-[#B596CA]/80 -rotate-6 rounded-[2px] shadow-sm pointer-events-none"
                style={{
                  clipPath:
                    "polygon(2% 0, 98% 0, 100% 20%, 98% 45%, 100% 70%, 98% 100%, 2% 100%, 0 75%, 2% 50%, 0 25%)",
                }}
              />

              {/* Floating particles & positive words fountain */}
              <AnimatePresence>
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.3, x: 0, y: 0, rotate: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0.3, p.scale * 1.15, p.scale, p.scale * 0.9],
                      x: p.x,
                      y: p.y,
                      rotate: p.rotate,
                    }}
                    exit={{ opacity: 0, scale: 0.2 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute pointer-events-none select-none z-30"
                    style={{ left: "50%", top: "30%" }}
                  >
                    {p.type === "word" ? (
                      <span
                        className={cn(
                          "inline-block px-3 py-1 rounded-full text-xs font-primary font-bold shadow-md border whitespace-nowrap -translate-x-1/2 -translate-y-1/2",
                          p.colorClass
                        )}
                      >
                        {p.content}
                      </span>
                    ) : (
                      <span className="text-2xl sm:text-3xl inline-block drop-shadow-sm -translate-x-1/2 -translate-y-1/2">
                        {p.content}
                      </span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Studio Mark Centerpiece */}
              <div className="space-y-6 text-center pt-2">
                <div className="relative mx-auto w-16 h-16">
                  <motion.button
                    type="button"
                    onClick={handleStamp}
                    onMouseEnter={handleHover}
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    whileTap={{ scale: 0.88, rotate: -6 }}
                    className="group w-16 h-16 rounded-full border-2 border-terracotta/40 hover:border-terracotta bg-[#FAF3EE] hover:bg-terracotta/10 flex items-center justify-center text-terracotta transition-all duration-200 cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta select-none"
                    aria-label="Tap to stamp"
                  >
                    {/* Idle asterisk, transforms to heart on hover */}
                    <span className="text-3xl font-serif leading-none italic font-normal transition-transform duration-200 group-hover:scale-0 group-hover:opacity-0 absolute">
                      *
                    </span>
                    <Heart className="w-7 h-7 fill-terracotta text-terracotta transition-all duration-200 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100" />
                  </motion.button>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50 block font-semibold">
                    STUDIO PHILOSOPHY
                  </span>
                  <p className="font-serif italic text-2xl sm:text-3xl text-ink leading-tight">
                    &ldquo;Be the exception.&rdquo;
                  </p>
                </div>

                {/* Interactive Like / Stamped Counter Pill */}
                <div className="pt-1">
                  <motion.button
                    type="button"
                    onClick={handleStamp}
                    onMouseEnter={handleHover}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.92 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0EB] hover:bg-terracotta border border-terracotta/30 hover:border-terracotta text-terracotta hover:text-cream font-primary font-semibold text-xs transition-colors duration-200 shadow-sm cursor-pointer select-none"
                    aria-label="Stamp of approval"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current transition-transform duration-200" />
                    <span>{likes} Exceptions Stamped</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

