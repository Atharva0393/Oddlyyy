"use client";

import React from "react";
import { ServiceCard } from "@/components/ui/service-card";

const Demo = () => {
  const services = [
    {
      title: "Gamification Marketing",
      href: "/services/gamification",
      imgSrc:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=320&auto=format&fit=crop&q=80",
      imgAlt: "Bowling pins and retro arcade illustration",
      variant: "red",
    },
    {
      title: "Graphic Design",
      href: "/services/design",
      imgSrc:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=320&auto=format&fit=crop&q=80",
      imgAlt: "Paint bucket and creative tools illustration",
      variant: "default",
    },
    {
      title: "Analytics and Tracking",
      href: "/services/analytics",
      imgSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&auto=format&fit=crop&q=80",
      imgAlt: "Megaphone and growth charts illustration",
      variant: "gray",
    },
    {
      title: "Content Creation",
      href: "/services/content",
      imgSrc:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=320&auto=format&fit=crop&q=80",
      imgAlt: "Notebook and pen illustration",
      variant: "blue",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            href={service.href}
            imgSrc={service.imgSrc}
            imgAlt={service.imgAlt}
            variant={service.variant as "red" | "default" | "gray" | "blue"}
            className="min-h-[180px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Demo;
export { Demo };

