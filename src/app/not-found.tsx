import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PrimaryButton, HandwrittenNote, Badge } from "@/components/ui";

export default function NotFound() {
  return (
    <SectionContainer paddingY="xl" className="my-auto py-20 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-2">
          <Badge variant="terracotta">Error 404</Badge>
          <HandwrittenNote direction="left" color="terracotta">
            lost in cyberspace
          </HandwrittenNote>
        </div>

        <div className="font-primary font-bold text-7xl sm:text-9xl text-ink tracking-tight">
          404<span className="text-terracotta">.</span>
        </div>

        <h1 className="font-primary font-bold text-2xl sm:text-4xl text-ink tracking-tight">
          This page does not exist (or it was too ordinary to survive).
        </h1>

        <p className="text-base sm:text-lg text-ink/75 leading-relaxed font-primary max-w-lg mx-auto">
          The link you followed might have been moved, deleted, or was never created in the first place.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <PrimaryButton href="/">
            Return to Homepage
          </PrimaryButton>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-primary font-medium border-2 border-ink text-ink hover:bg-ink hover:text-cream transition-all shadow-sm"
          >
            <span>Explore Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}

