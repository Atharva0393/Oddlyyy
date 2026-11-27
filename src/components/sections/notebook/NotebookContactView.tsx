"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  X,
  Loader2,
} from "lucide-react";
import {
  WashiTape,
  HandAnnotation,
  YellowNote,
} from "@/components/ui/notebook";
import { projectsData } from "@/content/projects";

const serviceOptions = [
  "Web & Digital Platforms",
  "AI & Automation",
  "Branding & Identity",
  "Marketing & Content",
  "Business Systems",
  "Mobile Apps",
  "The Odd Jobs",
];

const SERVICE_SLUG_MAP: Record<string, string> = {
  "digital-platforms": "Web & Digital Platforms",
  "ai-automation": "AI & Automation",
  "brand-identity": "Branding & Identity",
  "content-campaigns": "Marketing & Content",
  "the-odd-jobs": "The Odd Jobs",
  "business-systems": "Business Systems",
  "mobile-app-development": "Mobile Apps",
};

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");
  const preselectedProject = searchParams.get("project");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<{
    slug: string;
    title: string;
  } | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Honeypot spam trap
  const [honeypot, setHoneypot] = useState("");
  // Mount timestamp for bot detection
  const mountTimestamp = useRef<number>(Date.now());

  // Handle service preselection from query params
  useEffect(() => {
    if (preselectedService) {
      const normalized = preselectedService.toLowerCase().trim();
      const mappedTitle = SERVICE_SLUG_MAP[normalized];
      if (mappedTitle) {
        setSelectedServices((prev) =>
          prev.includes(mappedTitle) ? prev : [...prev, mappedTitle]
        );
      } else {
        const match = serviceOptions.find((s) =>
          s.toLowerCase().includes(normalized.replace(/-/g, " "))
        );
        if (match) {
          setSelectedServices((prev) =>
            prev.includes(match) ? prev : [...prev, match]
          );
        }
      }
    }
  }, [preselectedService]);

  // Handle case study project preselection from query params
  useEffect(() => {
    if (preselectedProject) {
      const normalized = preselectedProject.toLowerCase().trim();
      const matched = projectsData.find(
        (p) =>
          p.slug.toLowerCase() === normalized ||
          p.title.toLowerCase() === normalized
      );
      if (matched) {
        setSelectedProject({ slug: matched.slug, title: matched.title });
      }
    }
  }, [preselectedProject]);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);

    // Basic client validation
    if (formData.name.trim().length < 2) {
      setErrorMessage("Please enter your name (at least 2 characters).");
      return;
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage(
        "Please provide a short description of your project (at least 10 characters)."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          message: formData.message.trim(),
          selectedServices,
          project: selectedProject?.title || undefined,
          website_hp: honeypot,
          mountTimestamp: mountTimestamp.current,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitted(true);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        const serverError =
          result?.error ||
          "Unable to send your inquiry at this moment. Please email us directly at hello@oddlyyy.studio.";
        setErrorMessage(serverError);
      }
    } catch {
      setIsSubmitting(false);
      setErrorMessage(
        "Network connection error. Please check your internet connection or email us directly at hello@oddlyyy.studio."
      );
    }
  };

  return (
    <div className="relative">
      {/* Taped top washi strip */}
      <WashiTape color="yellow" className="absolute -top-3 left-10" angle={-2} />

      <div className="bg-white border border-[#222126] rounded-xl p-6 sm:p-10 shadow-[5px_6px_0px_#222126]">
        {submitted ? (
          <div className="py-12 sm:py-16 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#FFD84D] border border-[#222126] flex items-center justify-center mx-auto text-[#222126] shadow-[2px_2px_0px_#222126]">
              <CheckCircle2 className="w-7 h-7 text-terracotta" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#222126]/60 font-bold block">
              MESSAGE RECEIVED // STUDIO INBOX
            </span>
            <h3 className="font-primary font-bold text-4xl sm:text-5xl text-[#222126] uppercase">
              NOTE RECEIVED.
            </h3>
            <p className="font-primary text-base sm:text-lg text-[#222126]/80 max-w-md mx-auto leading-relaxed">
              Thanks for reaching out! Your note has been delivered directly to
              the Oddlyyy studio team. We read every message and will get back
              to you within 24 hours.
            </p>
            {selectedProject && (
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#222126]/20 font-mono text-xs text-[#222126]/70">
                Referencing: <strong>{selectedProject.title}</strong>
              </div>
            )}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", company: "", message: "" });
                  setSelectedServices([]);
                  setSelectedProject(null);
                  setErrorMessage(null);
                  mountTimestamp.current = Date.now();
                }}
                className="font-mono text-xs font-bold uppercase tracking-wider text-terracotta underline hover:text-[#222126] transition-colors cursor-pointer"
              >
                Send another note
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-[#222126]/12 pb-4">
              <h3 className="font-display text-3xl sm:text-4xl text-[#222126] uppercase leading-tight">
                TELL US ABOUT YOUR PROJECT.
              </h3>
            </div>

            {/* Contextual Case Study Badge (if user arrived from a project) */}
            {selectedProject && (
              <div className="flex items-center justify-between gap-2 px-3.5 py-2 rounded-md bg-[#FFF8D6] border border-[#222126] text-xs font-mono text-[#222126] shadow-[2px_2px_0px_#222126]">
                <div className="flex items-center gap-1.5">
                  <span className="text-terracotta font-bold">✦</span>
                  <span>
                    Referencing Case Study:{" "}
                    <strong>{selectedProject.title}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-[#222126]/60 hover:text-terracotta p-0.5 rounded transition-colors cursor-pointer"
                  title="Remove case study reference"
                  aria-label="Remove case study reference"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Accessible Error Alert */}
            {errorMessage && (
              <div
                role="alert"
                className="p-4 rounded-md bg-[#FFF1F2] border border-[#BE123C] text-[#9F1239] text-xs sm:text-sm font-primary space-y-1 shadow-[2px_2px_0px_#BE123C]"
              >
                <div className="flex items-center gap-2 font-bold uppercase tracking-wide">
                  <AlertCircle className="w-4 h-4 text-[#BE123C] shrink-0" />
                  <span>Submission Notice</span>
                </div>
                <p className="leading-relaxed pl-6">{errorMessage}</p>
              </div>
            )}

            {/* Honeypot Spam Protection (Invisible to humans) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact_website_hp">Leave this field blank</label>
              <input
                id="contact_website_hp"
                type="text"
                name="website_hp"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* Discipline Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#222126]/70 mb-2.5 font-bold">
                WHAT ARE YOU EXPLORING?
              </label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((srv) => {
                  const active = selectedServices.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                        active
                          ? "bg-[#FFD84D] text-[#222126] border-[#222126] font-bold shadow-[2px_2px_0px_#222126] -translate-y-0.5"
                          : "bg-[#FAF7F2] text-[#222126]/80 border-[#222126]/20 hover:border-[#222126]"
                      }`}
                    >
                      {srv}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#222126]/70 mb-1.5 font-bold">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#FAF7F2] border border-[#222126]/20 rounded-md px-4 py-3 text-sm text-[#222126] placeholder:text-[#222126]/40 focus:border-[#222126] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#222126]/70 mb-1.5 font-bold">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Studio / Brand Name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full bg-[#FAF7F2] border border-[#222126]/20 rounded-md px-4 py-3 text-sm text-[#222126] placeholder:text-[#222126]/40 focus:border-[#222126] focus:bg-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#222126]/70 mb-1.5 font-bold">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="alex@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#FAF7F2] border border-[#222126]/20 rounded-md px-4 py-3 text-sm text-[#222126] placeholder:text-[#222126]/40 focus:border-[#222126] focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#222126]/70 mb-1.5 font-bold">
                What are you thinking? *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Give us the rough idea: goals, timeline, inspiration, or just say hello..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-[#FAF7F2] border border-[#222126]/20 rounded-md px-4 py-3 text-sm text-[#222126] placeholder:text-[#222126]/40 focus:border-[#222126] focus:bg-white focus:outline-none resize-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#222126] text-[#F7F6F0] font-bold text-sm sm:text-base uppercase tracking-wider rounded-md border border-[#222126] shadow-[4px_4px_0px_#FFD84D] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#FFD84D]" />
                    <span>SENDING NOTE...</span>
                  </>
                ) : (
                  <>
                    <span>SEND IT OUR WAY</span>
                    <ArrowRight className="w-4 h-4 text-[#FFD84D]" />
                  </>
                )}
              </button>

              <HandAnnotation arrow="left" color="text-terracotta" rotate={-2}>
                we read every note ✦
              </HandAnnotation>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export const NotebookContactView: React.FC = () => {
  return (
    <div className="relative min-h-screen py-12 sm:py-20 overflow-hidden bg-notebook-ruled">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h1 className="font-primary font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#222126] uppercase leading-[0.9] tracking-tight">
            GOT SOMETHING <br />
            <span className="font-recoleta italic font-normal text-terracotta lowercase">
              good in mind?
            </span>
          </h1>

          <p className="font-primary text-lg sm:text-xl text-[#222126]/80 max-w-xl mx-auto leading-relaxed">
            Tell us what you&apos;re thinking. Big idea, small idea, half-formed
            idea. We&apos;re listening.
          </p>
        </div>

        {/* 2-Column Grid: Form + Studio Scrapbook Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: The Interactive Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center font-mono">Loading form...</div>}>
              <ContactFormInner />
            </Suspense>
          </div>

          {/* Right Column: Studio Contact Plate & Sticky Notes */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Email Card */}
            <div className="relative bg-[#FAF7F2] border border-[#222126] rounded-xl p-6 sm:p-7 shadow-[4px_4px_0px_#222126] rotate-1">
              <WashiTape color="mint" className="absolute -top-3 right-8" angle={3} />

              <span className="font-mono text-xs uppercase tracking-widest text-[#222126]/60 font-bold block mb-2">
                DIRECT INBOX
              </span>

              <a
                href="mailto:hello@oddlyyy.studio"
                className="font-primary font-bold text-2xl sm:text-3xl text-[#222126] hover:text-terracotta transition-colors flex items-center justify-between group"
              >
                <span>hello@oddlyyy.studio</span>
                <ArrowUpRight className="w-5 h-5 text-terracotta transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <p className="font-primary text-xs sm:text-sm text-[#222126]/70 mt-2">
                Prefer email directly? Send us your brief or questions anytime.
              </p>
            </div>

            {/* Studio Info Yellow Sticky Note */}
            <YellowNote title="STUDIO DESK" rotate={-2} tapeColor="pink">
              <p className="mb-3">
                Oddlyyy is a distributed, remote-first independent creative studio.
              </p>
              <div className="space-y-1 font-mono text-xs text-[#222126]/80">
                <p>✦ Location: Remote-first &amp; Global</p>
                <p>✦ Response time: Under 24 hours</p>
                <p>✦ Capacity: Selected client partnerships</p>
              </div>
            </YellowNote>
          </div>
        </div>
      </div>
    </div>
  );
};
