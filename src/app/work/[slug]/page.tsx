import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/content/projects";
import { CaseStudyLayout } from "@/components/sections/CaseStudyLayout";
import { getAbsoluteUrl, siteConfig } from "@/lib/siteConfig";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  generateBreadcrumbSchema,
  generateProjectSchema,
} from "@/lib/structuredData";

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

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | Oddlyyy" };

  const pageUrl = getAbsoluteUrl(`/work/${slug}`);
  const ogImageUrl = project.images?.cover || siteConfig.defaultOgImage;

  return {
    title: `${project.title} | ${project.projectCategory} Case Study | Oddlyyy`,
    description: project.summary,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${project.title} Case Study | Oddlyyy Creative Studio`,
      description: project.summary,
      url: pageUrl,
      siteName: siteConfig.name,
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study - Oddlyyy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | Oddlyyy`,
      description: project.summary,
      images: [ogImageUrl],
    },
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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: project.title, path: `/work/${slug}` },
  ]);

  const projectSchema = generateProjectSchema({
    title: project.title,
    summary: project.summary,
    path: `/work/${slug}`,
    image: project.images?.cover,
    client: project.client,
    industry: project.industry,
    year: project.year,
  });

  return (
    <>
      <JsonLd data={[breadcrumbSchema, projectSchema]} />
      <CaseStudyLayout
        project={project}
        nextProject={nextProject}
        relatedProjects={relatedProjects}
      />
    </>
  );
}
