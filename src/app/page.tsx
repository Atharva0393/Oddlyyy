import React from "react";
import {
  NotebookHero,
  NotebookWhatWeMake,
  NotebookFeaturedWork,
  NotebookAboutPreview,
  NotebookLetsTalk,
} from "@/components/sections/notebook";

export default function HomePage() {
  return (
    <>
      {/* SECTION 01: NOTEBOOK HERO */}
      <NotebookHero />

      {/* SECTION 02: WHAT WE MAKE SCRAPBOOK */}
      <NotebookWhatWeMake />

      {/* SECTION 03: IDEAS MADE REAL */}
      <NotebookFeaturedWork />

      {/* SECTION 04: ABOUT STUDIO PREVIEW */}
      <NotebookAboutPreview />

      {/* SECTION 05: LET'S TALK */}
      <NotebookLetsTalk />
    </>
  );
}
