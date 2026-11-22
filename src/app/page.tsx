import React from "react";
import {
  NotebookHero,
  NotebookWhatWeMake,
  NotebookFeaturedWork,
  NotebookDisciplines,
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

      {/* SECTION 03: FEATURED WORKS */}
      <NotebookFeaturedWork />

      {/* SECTION 04: CREATIVE DISCIPLINES */}
      <NotebookDisciplines />

      {/* SECTION 05: ABOUT STUDIO PREVIEW */}
      <NotebookAboutPreview />

      {/* SECTION 06: LET'S TALK */}
      <NotebookLetsTalk />
    </>
  );
}
