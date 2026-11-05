import React from "react";
import { notFound } from "next/navigation";
import { projectsData } from "@/content/projects";
import { CaseStudyLayout } from "@/components/sections/CaseStudyLayout";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found — Oddlyyy" };

  return {
    title: `${project.title} — Oddlyyy Case Study`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const nextProject =
    projectsData[(projectIndex + 1) % projectsData.length];

  // Related projects: prioritize other projects from same category, or complementary disciplines
  const relatedProjects = projectsData
    .filter((p) => p.slug !== project.slug)
    .sort((a, b) => {
      if (a.projectCategory === project.projectCategory && b.projectCategory !== project.projectCategory) return -1;
      if (b.projectCategory === project.projectCategory && a.projectCategory !== project.projectCategory) return 1;
      return 0;
    })
    .slice(0, 2);

  return (
    <CaseStudyLayout
      project={project}
      nextProject={nextProject}
      relatedProjects={relatedProjects}
    />
  );
}

