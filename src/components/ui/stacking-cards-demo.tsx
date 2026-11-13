// author: Khoa Phan <https://www.pldkhoa.dev>

"use client";

import { useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import StackingCards, {
  StackingCardItem,
} from "@/components/ui/stacking-cards";

const cards = [
  {
    bgColor: "bg-[#f97316]",
    title: "The Guiding Light",
    description:
      "Lighthouses have stood as beacons of hope for centuries, guiding sailors safely through treacherous waters. Their glowing light and towering presence serve as a reminder of humanity’s connection to the sea.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    bgColor: "bg-[#0015ff]",
    title: "Life Beneath the Waves",
    description:
      "From shimmering schools of fish to solitary hunters, the ocean is home to an incredible variety of marine life. Each species plays a vital role in maintaining the balance of underwater ecosystems.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    bgColor: "bg-[#ff5941]",
    title: "Alone on the Open Sea",
    description:
      "Drifting across the endless horizon, traveling alone on the sea is a test of courage and resilience. With nothing but the waves and the sky, solitude becomes both a challenge and a source of deep reflection.",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    bgColor: "bg-[#1f464d]",
    title: "The Art of Sailing",
    description:
      "Harnessing the power of the wind, sailing is both a skill and an adventure. Whether racing across the waves or leisurely cruising, it’s a timeless way to explore the vast blue expanse.",
    image:
      "https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    bgColor: "bg-[#0015ff]",
    title: "The Era of Whaling",
    description:
      "Once a thriving industry, whale hunting shaped economies and cultures across the world. Today, efforts to protect these majestic creatures highlight the shift toward conservation and respect for marine life.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function StackingCardsDemo() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      className="h-[620px] bg-white overflow-auto text-white rounded-2xl"
      ref={container}
    >
      <StackingCards
        totalCards={cards.length}
        scrollOptions={{ container: container }}
      >
        <div className="relative font-primary h-[110px] w-full z-10 text-xl md:text-3xl font-bold uppercase flex justify-center items-center text-[#ff5941] whitespace-pre">
          Scroll down ↓
        </div>
        {cards.map(({ bgColor, description, image, title }, index) => {
          return (
            <StackingCardItem key={index} index={index} className="h-[620px]">
              <div
                className={cn(
                  bgColor,
                  "h-[80%] sm:h-[70%] flex-col sm:flex-row aspect-video px-8 py-10 flex w-11/12 rounded-3xl mx-auto relative",
                )}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-2xl mb-5">{title}</h3>
                  <p>{description}</p>
                </div>

                <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </StackingCardItem>
          );
        })}

        <div className="w-full h-80 relative overflow-hidden">
          <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] text-[#ff5941] font-secondary">
            fancy
          </h2>
        </div>
      </StackingCards>
    </div>
  );
}
export { StackingCardsDemo };

