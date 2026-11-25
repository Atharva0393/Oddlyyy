import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/content/services";
import { projectsData } from "@/content/projects";
import { serviceDetailsData } from "@/content/service-details";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import { getAbsoluteUrl, siteConfig } from "@/lib/siteConfig";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFaqPageSchema,
} from "@/lib/structuredData";

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

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detailedService = serviceDetailsData[slug];
  const legacyService = servicesData.find((s) => s.slug === slug);

  if (!detailedService && !legacyService) {
    return { title: "Service Not Found | Oddlyyy" };
  }

  const name = detailedService?.name || legacyService?.name || "Service";
  const description =
    detailedService?.introDescription || legacyService?.shortDescription || "";
  const pageUrl = getAbsoluteUrl(`/services/${slug}`);

  return {
    title: `${name} | Services`,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${name} | Oddlyyy Services`,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${name} - Oddlyyy Creative Studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | Oddlyyy Services`,
      description,
      images: [siteConfig.defaultOgImage],
    },
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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${slug}` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.introDescription,
    path: `/services/${slug}`,
    serviceType: service.categoryLabel || "Digital Service",
  });

  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? generateFaqPageSchema(service.faqs)
      : null;

  return (
    <>
      <JsonLd
        data={
          faqSchema
            ? [breadcrumbSchema, serviceSchema, faqSchema]
            : [breadcrumbSchema, serviceSchema]
        }
      />
      <ServiceDetailView
        service={service}
        relatedProjects={relatedProjects}
      />
    </>
  );
}
