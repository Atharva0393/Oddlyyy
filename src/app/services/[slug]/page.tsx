import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/content/services";
import { projectsData } from "@/content/projects";
import { serviceDetailsData } from "@/content/service-details";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const detailedService = serviceDetailsData[slug];
  const legacyService = servicesData.find((s) => s.slug === slug);

  if (!detailedService && !legacyService) {
    return { title: "Service Not Found — Oddlyyy" };
  }

  const name = detailedService?.name || legacyService?.name || "Service";
  const description =
    detailedService?.introDescription || legacyService?.shortDescription || "";

  return {
    title: `${name} — Oddlyyy Services`,
    description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = serviceDetailsData[slug];

  if (!service) {
    notFound();
  }

  // Find related real projects from projectsData if configured
  const relatedProjects = (service.relatedProjectSlugs || [])
    .map((projSlug) => projectsData.find((p) => p.slug === projSlug))
    .filter((p): p is (typeof projectsData)[number] => Boolean(p));

  return (
    <ServiceDetailView
      service={service}
      relatedProjects={relatedProjects}
    />
  );
}
