import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { WashiTape } from "./WashiTape";

interface PolaroidFrameProps {
  src: string;
  alt: string;
  caption?: string;
  tapeColor?: "mint" | "yellow" | "pink" | "blue" | "lavender";
  tapePosition?: "top" | "top-left" | "top-right" | "both";
  className?: string;
  rotate?: number;
  width?: number;
  height?: number;
}

export const PolaroidFrame: React.FC<PolaroidFrameProps> = ({
  src,
  alt,
  caption,
  tapeColor = "mint",
  tapePosition = "top",
  className,
  rotate = -2,
}) => {
  return (
    <div
      className={cn(
        "relative p-3 pb-5 bg-white border border-[#222126]/20 shadow-[3px_4px_12px_rgba(34,33,38,0.08)] transition-transform hover:rotate-0 duration-300",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Optional Washi Tape */}
      {(tapePosition === "top" || tapePosition === "both") && (
        <WashiTape
          color={tapeColor}
          className="absolute -top-2.5 left-1/2 -translate-x-1/2"
          angle={rotate > 0 ? -1 : 2}
        />
      )}
      {tapePosition === "top-left" && (
        <WashiTape
          color={tapeColor}
          className="absolute -top-2.5 -left-3"
          angle={-15}
        />
      )}
      {tapePosition === "top-right" && (
        <WashiTape
          color={tapeColor}
          className="absolute -top-2.5 -right-3"
          angle={15}
        />
      )}

      {/* Photo canvas */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EDE3] border border-[#222126]/10">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {caption && (
        <p className="mt-3 text-center font-accent text-sm sm:text-base text-[#222126]/80 font-medium">
          {caption}
        </p>
      )}
    </div>
  );
};

