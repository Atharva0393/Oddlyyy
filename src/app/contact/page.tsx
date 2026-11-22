import React from "react";
import type { Metadata } from "next";
import { NotebookContactView } from "@/components/sections/notebook";

export const metadata: Metadata = {
  title: "Contact Oddlyyy | Start a Project",
  description:
    "Got a project, a hard problem or a half-formed idea? Leave a note for the Oddlyyy studio team. We read and reply to every message.",
};

export default function ContactPage() {
  return <NotebookContactView />;
}
