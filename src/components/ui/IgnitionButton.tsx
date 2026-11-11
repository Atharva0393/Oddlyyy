"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type PastelColor = "lavender" | "mint" | "cream";

export interface IgnitionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  isExternal?: boolean;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "terracotta" | "ink";
  pastelColor?: PastelColor;
  children?: React.ReactNode;
}

export const PASTEL_PALETTES: Record<
  PastelColor,
  { bg: [number, number, number]; spark: [number, number, number] }
> = {
  lavender: {
    bg: [0.894, 0.878, 0.988], // #E4E0FC
    spark: [0.65, 0.31, 0.21], // #A04C34 Terracotta
  },
  mint: {
    bg: [0.894, 0.941, 0.910], // #E4F0E8
    spark: [0.65, 0.31, 0.21], // #A04C34 Terracotta
  },
  cream: {
    bg: [1.0, 0.976, 0.957], // #FFF9F4
    spark: [0.65, 0.31, 0.21], // #A04C34 Terracotta
  },
};

const VS_SOURCE = `
attribute vec2 p;
void main(){
  gl_Position = vec4(p, 0.0, 1.0);
}
`;

const FS_SOURCE = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_warp;
uniform float u_flash;
uniform vec3 u_bg_color;
uniform vec3 u_spark_color;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.07 + vec2(13.1, 5.7);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 sc = gl_FragCoord.xy / u_res;
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;
  float r = length(uv);
  float rr = max(r, 0.08);
  float a = atan(uv.y, uv.x);
  float t = u_time;

  // Silky pastel canvas with subtle fluid tonal drift
  vec3 base = u_bg_color;
  float hz = fbm(uv * 2.4 + vec2(t * 0.28, 1.4));
  // Fluid tone variation
  vec3 col = mix(base, base * 0.94 + vec3(0.04, 0.015, 0.035), hz * 0.45);

  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float ringN = 24.0 + fi * 8.0;
    vec2 sp = vec2(
      (a / 6.28318 + 0.5) * ringN,
      (0.3 + fi * 0.22) / rr + t * (1.8 + fi * 1.0)
    );
    vec2 cell = floor(sp);
    vec2 f = fract(sp);
    float h = hash(cell + fi * 17.31);
    float on = step(0.66, h);
    vec2 c = vec2(0.2 + 0.6 * hash(cell + 4.7), 0.5);
    vec2 dlt = f - c;
    float sy = mix(120.0, 8.0, u_warp);
    float star = on * exp(-(dlt.x * dlt.x * 140.0 + dlt.y * dlt.y * sy));
    float tw = 0.7 + 0.3 * sin(h * 81.0 + t * 9.0);
    tw = mix(tw, 1.0, u_warp);
    // Distinct embers: Terracotta (#A04C34) and warm Clay (#D68A68)
    vec3 sCol = mix(u_spark_color, vec3(0.84, 0.54, 0.41), step(0.65, h));
    float fade = smoothstep(0.02, 0.25, r);
    // Blend sparks onto the pastel surface
    col = mix(col, sCol, clamp(star * tw * fade * (0.85 + 0.45 * u_warp), 0.0, 1.0));
  }

  // Soft warm terracotta warp core glow when hovering
  col = mix(col, vec3(0.98, 0.88, 0.82), u_warp * 0.35 * exp(-r * 3.5));

  // Subtle clean edge framing
  vec2 e = sc * (1.0 - sc);
  col *= 0.96 + 0.04 * pow(clamp(e.x * e.y * 16.0, 0.0, 1.0), 0.2);

  // Tactile click flash
  col = mix(col, vec3(1.0, 1.0, 1.0), clamp(u_flash, 0.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
}
`;

export const IgnitionButton: React.FC<IgnitionButtonProps> = ({
  href,
  isExternal = false,
  showArrow = true,
  size = "md",
  variant = "terracotta",
  pastelColor = "lavender",
  className,
  children = "Let's make something odd",
  onClick,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pastelColorRef = useRef(pastelColor);
  pastelColorRef.current = pastelColor;

  const stateRef = useRef({
    warp: 0,
    warpTarget: 0,
    flash: 0,
    z: 0,
    last: 0,
    animId: 0,
    gl: null as WebGLRenderingContext | null,
    uRes: null as WebGLUniformLocation | null,
    uTime: null as WebGLUniformLocation | null,
    uWarp: null as WebGLUniformLocation | null,
    uFlash: null as WebGLUniformLocation | null,
    uBgColor: null as WebGLUniformLocation | null,
    uSparkColor: null as WebGLUniformLocation | null,
    isMounted: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    function compile(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vs = compile(gl.VERTEX_SHADER, VS_SOURCE);
    const fs = compile(gl.FRAGMENT_SHADER, FS_SOURCE);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const locP = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(locP);
    gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

    const state = stateRef.current;
    state.gl = gl;
    state.uRes = gl.getUniformLocation(prog, "u_res");
    state.uTime = gl.getUniformLocation(prog, "u_time");
    state.uWarp = gl.getUniformLocation(prog, "u_warp");
    state.uFlash = gl.getUniformLocation(prog, "u_flash");
    state.uBgColor = gl.getUniformLocation(prog, "u_bg_color");
    state.uSparkColor = gl.getUniformLocation(prog, "u_spark_color");
    state.last = performance.now();
    state.isMounted = true;

    function resize() {
      if (!canvas || !gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    resize();

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(canvas);

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function render(now: number) {
      if (!state.isMounted || !gl || !canvas) return;
      const dt = Math.min(0.05, (now - state.last) / 1000);
      state.last = now;

      state.warp += (state.warpTarget - state.warp) * Math.min(1, dt * 2.8);
      state.flash *= Math.exp(-4.5 * dt);
      state.z += dt * (0.06 + state.warp * 1.4);

      gl.uniform2f(state.uRes, canvas.width, canvas.height);
      gl.uniform1f(state.uTime, reducedMotion ? 4.0 : state.z);
      gl.uniform1f(state.uWarp, state.warp);
      gl.uniform1f(state.uFlash, state.flash);

      const pal =
        PASTEL_PALETTES[pastelColorRef.current] || PASTEL_PALETTES.lavender;
      if (state.uBgColor) {
        gl.uniform3f(state.uBgColor, pal.bg[0], pal.bg[1], pal.bg[2]);
      }
      if (state.uSparkColor) {
        gl.uniform3f(state.uSparkColor, pal.spark[0], pal.spark[1], pal.spark[2]);
      }

      gl.drawArrays(gl.TRIANGLES, 0, 3);

      state.animId = requestAnimationFrame(render);
    }

    state.animId = requestAnimationFrame(render);

    return () => {
      state.isMounted = false;
      cancelAnimationFrame(state.animId);
      resizeObserver.disconnect();
    };
  }, []);

  const handleMouseEnter = () => {
    stateRef.current.warpTarget = 1;
  };

  const handleMouseLeave = () => {
    stateRef.current.warpTarget = 0;
  };

  const handleFocus = () => {
    stateRef.current.warpTarget = 1;
  };

  const handleBlur = () => {
    stateRef.current.warpTarget = 0;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    stateRef.current.flash = 1;
    stateRef.current.warp = 0;
    stateRef.current.z = 0;
    if (onClick) {
      onClick(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  // Dimensions & padding matching the tactile ignition button aesthetic
  const sizeClasses = {
    sm: "h-[42px] p-[3px] rounded-[18px]",
    md: "h-[50px] p-[4px] rounded-[22px]",
    lg: "h-[64px] p-[6px] rounded-[24px]",
  };

  const innerSizeClasses = {
    sm: "px-4 rounded-[15px] text-xs gap-1.5",
    md: "px-5 rounded-[18px] text-sm gap-2",
    lg: "px-8 rounded-[20px] text-base gap-2.5",
  };

  // Color variant themes tailored to Oddlyyy brand identity
  const variantClasses = {
    terracotta: cn(
      // Tactile Oddly Terracotta burnished bezel with crisp warm ivory rim bevel
      "bg-[linear-gradient(180deg,#BA553B_0%,#A04C34_50%,#7A2E1A_100%)]",
      "shadow-[0_8px_22px_rgba(160,76,52,0.32),0_2px_6px_rgba(32,32,40,0.14),inset_0_1px_0_rgba(255,244,236,0.50),inset_0_-1px_0_rgba(74,22,11,0.60)]",
      "hover:shadow-[0_14px_32px_rgba(160,76,52,0.52),0_4px_12px_rgba(32,32,40,0.20),inset_0_1px_0_rgba(255,244,236,0.70)]",
      "focus-visible:outline-[#A04C34]"
    ),
    ink: cn(
      // Tactile Oddly Ink dark bezel
      "bg-[linear-gradient(180deg,#343442_0%,#202028_50%,#15151B_100%)]",
      "shadow-[0_8px_20px_rgba(32,32,40,0.28),0_2px_6px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.18)]",
      "hover:shadow-[0_14px_32px_rgba(160,76,52,0.35),0_4px_12px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.28)]",
      "focus-visible:outline-[#202028]"
    ),
  };

  const pastelChamberClasses: Record<PastelColor, string> = {
    lavender:
      "bg-[#E4E0FC] shadow-[inset_0_1px_3px_rgba(32,32,40,0.12),inset_0_0_0_1px_rgba(160,76,52,0.25)]",
    mint:
      "bg-[#E4F0E8] shadow-[inset_0_1px_3px_rgba(32,32,40,0.12),inset_0_0_0_1px_rgba(160,76,52,0.25)]",
    cream:
      "bg-[#FFF9F4] shadow-[inset_0_1px_3px_rgba(32,32,40,0.12),inset_0_0_0_1px_rgba(160,76,52,0.25)]",
  };

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center border-0 cursor-pointer outline-none select-none",
    "transition-all duration-300 ease-[cubic-bezier(.34,1.4,.5,1)]",
    "hover:-translate-y-[2px] active:translate-y-[1px] active:scale-[0.985]",
    "focus-visible:outline-2 focus-visible:outline-offset-[3px]",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const innerContent = (
    <span
      className={cn(
        "relative flex items-center justify-center w-full h-full overflow-hidden",
        pastelChamberClasses[pastelColor] || pastelChamberClasses.lavender,
        innerSizeClasses[size]
      )}
    >
      {/* Raw WebGL Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
        aria-hidden="true"
      />

      {/* Editorial Ink Text with Terracotta Accent Arrow */}
      <span
        className="relative z-10 flex items-center gap-1.5 font-primary font-semibold tracking-normal text-ink"
        style={{
          textShadow: "0 1px 1px rgba(255, 255, 255, 0.8)",
        }}
      >
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-terracotta group-hover:scale-110" />
        )}
      </span>
    </span>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleClick}
        >
          {innerContent}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={baseClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={baseClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      {...props}
    >
      {innerContent}
    </button>
  );
};

export default IgnitionButton;
