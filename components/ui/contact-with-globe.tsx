"use client";

import * as React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, Phone, Headphones, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as d3 from "d3";
import { feature } from "topojson-client";
import type {
  Topology,
  GeometryCollection,
  GeometryObject,
} from "topojson-specification";
import type { GeoPermissibleObjects } from "d3";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export const DEFAULT_CONTACT_LINKS = [
  {
    icon: Mail,
    label: "hello@oddlyyy.studio",
    href: "mailto:hello@oddlyyy.studio",
  },
  {
    icon: Phone,
    label: "+1 (800) 321 XX21",
    href: "tel:+18003214321",
  },
  {
    icon: Headphones,
    label: "support@oddlyyy.studio",
    href: "mailto:support@oddlyyy.studio",
  },
];

export interface GlobeWireframeProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  graticuleColor?: string;
  graticuleOpacity?: number;
  sphereOutlineColor?: string;
  sphereOutlineWidth?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  rotateToLocation?: string | [number, number];
  rotateCities?: string[];
  rotationSpeed?: number;
  initialRotation?: [number, number];
  enableInteraction?: boolean;
  showGraticule?: boolean;
  animationDuration?: number;
  startAsGlobe?: boolean;
  countryFillColor?: string;
  countryHoverColor?: string;
  variant?: "wireframe" | "wireframesolid" | "solid";
  scale?: number;
  backgroundColor?: string;
}

export interface GeoFeature {
  type: string;
  geometry: GeometryObject;
  properties: Record<string, unknown>;
}

export interface WorldAtlasTopology extends Topology {
  objects: {
    countries: GeometryCollection;
  };
}

export interface CustomProjection extends d3.GeoProjection {
  alpha(value: number): CustomProjection;
  alpha(): number;
}

export const cityCoordinates: Record<string, [number, number]> = {
  "san francisco": [37.7749, -122.4194],
  "new york": [40.7128, -74.006],
  london: [51.5074, -0.1278],
  tokyo: [35.6762, 139.6503],
  paris: [48.8566, 2.3522],
  moscow: [55.7558, 37.6176],
  dubai: [25.2048, 55.2708],
  singapore: [1.3521, 103.8198],
  sydney: [-33.8688, 151.2093],
  mumbai: [19.076, 72.8777],
  "los angeles": [34.0522, -118.2437],
  chicago: [41.8781, -87.6298],
};

function orthographicRaw(x: number, y: number): [number, number] {
  const cosy = Math.cos(y);
  return [cosy * Math.sin(x), Math.sin(y)];
}

function equirectangularRaw(lambda: number, phi: number): [number, number] {
  return [lambda, phi];
}

function interpolateProjection(
  raw0: (lambda: number, phi: number) => [number, number],
  raw1: (lambda: number, phi: number) => [number, number],
): CustomProjection {
  let t = 0;

  const createRawProjection = (
    alpha: number,
  ): ((lambda: number, phi: number) => [number, number]) => {
    return (lambda: number, phi: number): [number, number] => {
      const [x0, y0] = raw0(lambda, phi);
      const [x1, y1] = raw1(lambda, phi);
      return [x0 + alpha * (x1 - x0), y0 + alpha * (y1 - y0)];
    };
  };

  const projection = d3.geoProjection(
    createRawProjection(t),
  ) as unknown as CustomProjection;

  const alphaMethod = ((value?: number): CustomProjection | number => {
    if (value !== undefined) {
      t = +value;
      const newProjection = d3.geoProjection(
        createRawProjection(t),
      ) as unknown as CustomProjection;

      if (projection.scale()) newProjection.scale(projection.scale());
      if (projection.translate())
        newProjection.translate(projection.translate());
      if (projection.rotate()) newProjection.rotate(projection.rotate());
      if (projection.precision())
        newProjection.precision(projection.precision());

      newProjection.alpha = alphaMethod as CustomProjection["alpha"];

      return newProjection;
    }
    return t;
  }) as CustomProjection["alpha"];

  projection.alpha = alphaMethod;

  return projection;
}

export function GlobeWireframe({
  width,
  height,
  className = "aspect-square w-full max-w-150",
  strokeColor = "currentColor",
  strokeWidth = 1.0,
  graticuleColor = "currentColor",
  graticuleOpacity = 0.2,
  sphereOutlineColor = "currentColor",
  sphereOutlineWidth = 1,
  autoRotate = true,
  autoRotateSpeed = 0.5,
  rotateToLocation,
  rotateCities = [],
  rotationSpeed = 3000,
  initialRotation = [0, 0],
  enableInteraction = true,
  showGraticule = true,
  animationDuration = 2000,
  startAsGlobe = true,
  countryFillColor,
  countryHoverColor,
  variant = "wireframe",
  scale = 1,
  backgroundColor,
}: GlobeWireframeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(startAsGlobe ? 0 : 100);
  const [worldData, setWorldData] = useState<GeoFeature[]>([]);
  const [rotation, setRotation] = useState<[number, number]>(initialRotation);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState([0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const rotationInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const rotationAnimFrame = useRef<number | null>(null);
  const rotationStartTime = useRef<number | null>(null);
  const rotationFrom = useRef<[number, number]>([0, 0]);
  const rotationTo = useRef<[number, number]>([0, 0]);
  const animationFrame = useRef<number | null>(null);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const resizeObserver = useRef<ResizeObserver | null>(null);
  const rotationRef = useRef(rotation);

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  const useResponsive = !width && !height;
  const finalWidth = useResponsive ? dimensions.width : width || 800;
  const finalHeight = useResponsive ? dimensions.height : height || 500;

  const defaultStrokeColor = strokeColor || "currentColor";
  const defaultGraticuleColor = graticuleColor || "currentColor";
  const defaultSphereOutlineColor = sphereOutlineColor || "currentColor";
  const defaultCountryFillColor =
    countryFillColor || (variant === "solid" ? "currentColor" : "none");
  const defaultBackgroundColor = backgroundColor || "transparent";

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const updateDimensions = () => {
      if (container && useResponsive) {
        const width = container.offsetWidth || 300;
        setDimensions({ width, height: width });
      }
    };

    updateDimensions();

    if (useResponsive) {
      resizeObserver.current = new ResizeObserver(updateDimensions);
      resizeObserver.current.observe(container);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(container);

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
      observer.unobserve(container);
    };
  }, [useResponsive]);

  useEffect(() => {
    const loadWorldData = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
        );
        const world = (await response.json()) as WorldAtlasTopology;
        const countries = feature(world, world.objects.countries)
          .features as unknown as GeoFeature[];
        setWorldData(countries);
      } catch (error) {
        console.error("Error loading world data:", error);
        const fallbackData: GeoFeature[] = [
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-180, -90],
                  [180, -90],
                  [180, 90],
                  [-180, 90],
                  [-180, -90],
                ],
              ],
            } as unknown as GeometryObject,
            properties: {},
          },
        ];
        setWorldData(fallbackData);
      }
    };
    loadWorldData();
  }, []);

  useEffect(() => {
    if (!autoRotate || !isVisible || isDragging || rotateCities.length > 0) {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
      return;
    }

    const rotate = () => {
      setRotation((prev) => [(prev[0] + autoRotateSpeed) % 360, prev[1]]);
      animationFrame.current = requestAnimationFrame(rotate);
    };

    animationFrame.current = requestAnimationFrame(rotate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [autoRotate, autoRotateSpeed, isVisible, isDragging, rotateCities.length]);

  const animateRotationTo = useCallback(
    (target: [number, number], duration = 1200) => {
      if (rotationAnimFrame.current) {
        cancelAnimationFrame(rotationAnimFrame.current);
      }

      rotationFrom.current = rotationRef.current;
      rotationTo.current = target;
      rotationStartTime.current = performance.now();

      const animate = (time: number) => {
        const elapsed = time - (rotationStartTime.current || 0);
        const t = Math.min(elapsed / duration, 1);

        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const lon =
          rotationFrom.current[0] +
          (rotationTo.current[0] - rotationFrom.current[0]) * eased;

        const lat =
          rotationFrom.current[1] +
          (rotationTo.current[1] - rotationFrom.current[1]) * eased;

        setRotation([lon, lat]);

        if (t < 1) {
          rotationAnimFrame.current = requestAnimationFrame(animate);
        }
      };

      rotationAnimFrame.current = requestAnimationFrame(animate);
    },
    [],
  );

  useEffect(() => {
    if (rotateCities.length === 0 || !isVisible) return;

    const rotateToNextCity = () => {
      const nextIndex = (currentCityIndex + 1) % rotateCities.length;
      const city = rotateCities[nextIndex].toLowerCase();
      const coordinates = cityCoordinates[city];

      if (coordinates) {
        animateRotationTo(
          [-coordinates[1], -coordinates[0]],
          rotationSpeed * 0.6,
        );
        setCurrentCityIndex(nextIndex);
      }
    };

    const city = rotateCities[currentCityIndex].toLowerCase();
    const coordinates = cityCoordinates[city];

    if (coordinates) {
      animateRotationTo(
        [-coordinates[1], -coordinates[0]],
        rotationSpeed * 0.6,
      );
    }

    rotationInterval.current = setInterval(rotateToNextCity, rotationSpeed);

    return () => {
      if (rotationInterval.current) clearInterval(rotationInterval.current);
    };
  }, [
    rotateCities,
    currentCityIndex,
    rotationSpeed,
    isVisible,
    animateRotationTo,
  ]);

  useEffect(() => {
    if (!rotateToLocation) return;

    let coordinates: [number, number];
    if (typeof rotateToLocation === "string") {
      const city = rotateToLocation.toLowerCase();
      coordinates = cityCoordinates[city] || [0, 0];
    } else {
      coordinates = rotateToLocation;
    }

    setRotation([-coordinates[1], -coordinates[0]]);
  }, [rotateToLocation]);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!enableInteraction) return;
    setIsDragging(true);
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      setLastMouse([event.clientX - rect.left, event.clientY - rect.top]);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !enableInteraction) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const currentMouse = [event.clientX - rect.left, event.clientY - rect.top];
    const dx = currentMouse[0] - lastMouse[0];
    const dy = currentMouse[1] - lastMouse[1];

    const t = progress / 100;
    let sensitivity: number;

    if (variant === "wireframe") {
      sensitivity = t < 0.5 ? 0.5 : 0.25;
    } else {
      sensitivity = 0.5;
    }

    setRotation((prev) => [
      prev[0] + dx * sensitivity,
      Math.max(-90, Math.min(90, prev[1] - dy * sensitivity)),
    ]);

    setLastMouse(currentMouse);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!svgRef.current || worldData.length === 0 || !isVisible) return;
    if (useResponsive && dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    let finalCountryFill = "none";
    let finalStrokeWidth = strokeWidth;
    let finalOpacity = 1.0;
    let renderGraticule = showGraticule;
    let finalGraticuleOpacity = graticuleOpacity;
    let finalSphereOutlineWidth = sphereOutlineWidth;

    if (variant === "wireframe") {
      finalCountryFill = "none";
      finalStrokeWidth = strokeWidth;
      finalOpacity = 1.0;
      renderGraticule = showGraticule;
      finalGraticuleOpacity = graticuleOpacity;
      finalSphereOutlineWidth = sphereOutlineWidth;
    } else if (variant === "wireframesolid") {
      finalCountryFill = "none";
      finalStrokeWidth = strokeWidth;
      finalOpacity = 1.0;
      renderGraticule = false;
      finalGraticuleOpacity = 0;
      finalSphereOutlineWidth = 1.5;
    } else if (variant === "solid") {
      finalCountryFill = defaultCountryFillColor;
      finalStrokeWidth = strokeWidth * 0.5;
      finalOpacity = 0.3;
      renderGraticule = false;
      finalGraticuleOpacity = 0;
      finalSphereOutlineWidth = 1.5;
    }

    if (defaultBackgroundColor !== "transparent") {
      const radius = (Math.min(finalWidth, finalHeight) / 2) * scale * 0.9;
      svg
        .append("circle")
        .attr("cx", finalWidth / 2)
        .attr("cy", finalHeight / 2)
        .attr("r", radius)
        .attr("fill", defaultBackgroundColor);
    }

    let projection: d3.GeoProjection | CustomProjection;
    const path = d3.geoPath();

    if (variant === "wireframe") {
      const t = progress / 100;
      const alpha = Math.pow(t, 0.5);

      const baseScale = Math.min(finalWidth, finalHeight) / 2;
      const scaleRange = d3
        .scaleLinear()
        .domain([0, 1])
        .range([baseScale * 0.9 * scale, baseScale * 0.54 * scale]);
      const baseRotate = d3.scaleLinear().domain([0, 1]).range([0, 0]);

      projection = interpolateProjection(orthographicRaw, equirectangularRaw)
        .scale(scaleRange(alpha))
        .translate([finalWidth / 2, finalHeight / 2])
        .rotate([baseRotate(alpha) + rotation[0], rotation[1]])
        .precision(0.1);

      (projection as CustomProjection).alpha(alpha);
      path.projection(projection);
    } else {
      projection = d3
        .geoOrthographic()
        .scale((Math.min(finalWidth, finalHeight) / 2) * scale * 0.9)
        .translate([finalWidth / 2, finalHeight / 2])
        .rotate([rotation[0], rotation[1]])
        .precision(0.1);

      path.projection(projection);
    }

    if (renderGraticule && finalGraticuleOpacity > 0) {
      try {
        const graticule = d3.geoGraticule();
        const graticulePath = path(graticule());
        if (graticulePath) {
          svg
            .append("path")
            .datum(graticule())
            .attr("d", graticulePath)
            .attr("fill", "none")
            .attr("stroke", defaultGraticuleColor)
            .attr("stroke-width", 1)
            .attr("opacity", finalGraticuleOpacity);
        }
      } catch (error) {
        console.error("Error creating graticule:", error);
      }
    }

    svg
      .selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d: GeoFeature) => {
        try {
          const pathString = path(d as unknown as GeoPermissibleObjects);
          if (!pathString) return "";
          if (
            typeof pathString === "string" &&
            (pathString.includes("NaN") || pathString.includes("Infinity"))
          ) {
            return "";
          }
          return pathString;
        } catch (error) {
          return "";
        }
      })
      .attr("fill", finalCountryFill)
      .attr("stroke", defaultStrokeColor)
      .attr("stroke-width", finalStrokeWidth)
      .attr("opacity", finalOpacity)
      .style("visibility", function (this: SVGPathElement) {
        const pathData = d3.select(this).attr("d");
        return pathData && pathData.length > 0 && !pathData.includes("NaN")
          ? "visible"
          : "hidden";
      })
      .on("mouseenter", function (this: SVGPathElement) {
        if (countryHoverColor && variant === "solid") {
          d3.select(this).attr("fill", countryHoverColor);
        }
      })
      .on("mouseleave", function (this: SVGPathElement) {
        if (variant === "solid") {
          d3.select(this).attr("fill", finalCountryFill);
        }
      });

    try {
      const sphereOutline = path({ type: "Sphere" });
      if (sphereOutline) {
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", defaultSphereOutlineColor)
          .attr("stroke-width", finalSphereOutlineWidth)
          .attr("opacity", variant === "wireframe" ? 1.0 : 0.8);
      }
    } catch (error) {
      console.error("Error creating sphere outline:", error);
    }
  }, [
    worldData,
    progress,
    rotation,
    isVisible,
    finalWidth,
    finalHeight,
    defaultStrokeColor,
    strokeWidth,
    defaultGraticuleColor,
    graticuleOpacity,
    defaultSphereOutlineColor,
    sphereOutlineWidth,
    showGraticule,
    defaultCountryFillColor,
    countryHoverColor,
    variant,
    scale,
    defaultBackgroundColor,
    useResponsive,
    dimensions.width,
  ]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        ref={svgRef}
        width={finalWidth}
        height={finalHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={
          useResponsive
            ? "w-full h-full opacity-0 transition-opacity duration-1000"
            : ""
        }
        style={{
          cursor: enableInteraction
            ? isDragging
              ? "grabbing"
              : "grab"
            : "default",
          opacity: useResponsive ? (dimensions.width > 0 ? 1 : 0) : 1,
        }}
      />
    </div>
  );
}

export interface ContactWithGlobeProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  contactLinks?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    href?: string;
  }>;
  serviceOptions?: string[];
  onSubmitSuccess?: (data: {
    services: string[];
    name: string;
    company: string;
    email: string;
    message: string;
  }) => void;
}

export default function ContactWithGlobe({
  title = "Get in touch with us.",
  description,
  className,
  contactLinks = DEFAULT_CONTACT_LINKS,
  serviceOptions = [
    "Brand Identity",
    "Digital Platforms",
    "AI & Automation",
    "Creative Direction",
    "Content & Campaigns",
    "The Odd Jobs",
  ],
  onSubmitSuccess,
}: ContactWithGlobeProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Digital Platforms",
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess({
        services: selectedServices,
        ...formData,
      });
    }
  };

  return (
    <section
      className={cn(
        "relative w-full bg-cream text-ink overflow-hidden pt-6 pb-16 sm:pt-8 sm:pb-20",
        className,
      )}
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header Block — Clean, bold title, subtext removed */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink font-primary"
          >
            {title}
          </motion.h1>

          {description ? (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
              className="text-sm sm:text-base text-ink/75 leading-relaxed font-secondary max-w-xl mx-auto mt-2"
            >
              {description}
            </motion.p>
          ) : null}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side: Unboxed Contact Channels & Floating Rotating Wireframe Globe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
            className="lg:col-span-5 flex flex-col gap-5 pt-1"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-ink font-primary">
                Get in touch
              </h2>
              <p className="text-xs sm:text-sm text-ink/70 leading-relaxed font-secondary max-w-xs">
                Reach out via any channel below. We typically reply within one business day.
              </p>
            </div>

            {/* Channels with rounded icon boxes */}
            <div className="flex flex-col gap-2.5">
              {contactLinks.map(({ icon: Icon, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href ?? "#"}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.08,
                    ease: smoothEase,
                  }}
                  className="group flex items-center gap-3 w-fit text-sm text-ink/80 hover:text-ink transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-xl bg-ink/5 border border-ink/10 group-hover:border-terracotta/40 group-hover:bg-terracotta/10 flex items-center justify-center shrink-0 transition-all duration-200 shadow-xs">
                    <Icon className="w-3.5 h-3.5 text-ink/65 group-hover:text-terracotta transition-colors duration-200" />
                  </div>
                  <span className="font-primary font-medium text-ink/90 group-hover:text-terracotta transition-colors">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Rotating Globe — UNBOXED, floating directly on cream background */}
            <div className="relative overflow-hidden h-64 sm:h-80 lg:h-96 w-full -mt-2">
              <GlobeWireframe
                className="w-full aspect-square max-w-full absolute top-0 left-0"
                variant="wireframesolid"
                autoRotate
                autoRotateSpeed={0.45}
                strokeColor="#202028"
                strokeWidth={0.7}
                graticuleColor="#202028"
                graticuleOpacity={0.12}
                sphereOutlineColor="#A04C34"
                sphereOutlineWidth={1.2}
                rotateCities={[
                  "new york",
                  "london",
                  "tokyo",
                  "paris",
                  "dubai",
                  "singapore",
                  "san francisco",
                  "mumbai",
                ]}
                rotationSpeed={3000}
              />
              {/* Fade gradient seamlessly merging into the warm cream background */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cream via-cream/80 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side: Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
            className="lg:col-span-7 rounded-3xl border border-ink/15 bg-white/70 backdrop-blur-sm p-6 sm:p-8 flex flex-col gap-5 shadow-xs"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 border border-terracotta/30 flex items-center justify-center mx-auto text-terracotta">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold block">
                  Enquiry Received
                </span>
                <h3 className="font-primary font-semibold text-2xl sm:text-3xl text-ink">
                  Thank you for reaching out.
                </h3>
                <p className="text-sm sm:text-base text-ink/75 font-secondary max-w-sm mx-auto leading-relaxed">
                  We have received your message and will get back to you promptly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        message: "",
                      });
                    }}
                    className="font-primary font-medium text-sm text-terracotta underline hover:text-ink transition-colors cursor-pointer"
                  >
                    Submit another message
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-0.5 font-primary">
                    Send a message
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/70 font-secondary">
                    Fill out the form and we&apos;ll get back to you promptly.
                  </p>
                </div>

                {/* Dotted line with terracotta center dot as in the reference image */}
                <div className="relative flex items-center justify-center my-0.5">
                  <div className="w-full border-t border-dotted border-ink/20" />
                  <div className="absolute w-2 h-2 rounded-full bg-terracotta shadow-xs" />
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Discipline Selection Chips */}
                  {serviceOptions.length > 0 && (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-widest text-ink/60 font-semibold">
                        Disciplines
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {serviceOptions.map((service) => {
                          const isActive = selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={cn(
                                "text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all duration-200 cursor-pointer",
                                isActive
                                  ? "bg-terracotta text-cream border-terracotta font-semibold shadow-xs"
                                  : "bg-cream/60 text-ink/80 border-ink/15 hover:border-ink hover:text-ink",
                              )}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-widest text-ink/60 font-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-cream/50 border border-ink/15 rounded-2xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/15 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-widest text-ink/60 font-semibold">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="ScrollX UI"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-cream/50 border border-ink/15 rounded-2xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/15 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-ink/60 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hello@oddlyyy.studio"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-cream/50 border border-ink/15 rounded-2xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/15 transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-ink/60 font-semibold">
                      Message
                    </label>
                    <textarea
                      required
                      placeholder="Type your message here..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-cream/50 border border-ink/15 rounded-2xl px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/15 resize-none transition-all duration-200"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-fit h-11 px-8 rounded-xl font-semibold text-sm bg-terracotta hover:bg-terracotta-hover text-cream group shadow-sm transition-all cursor-pointer mt-0.5"
                  >
                    <span>Submit</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
