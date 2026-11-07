"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IgnitionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  isExternal?: boolean;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

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
  vec3 col = vec3(0.012, 0.011, 0.014);
  float hz = fbm(uv * 2.6 + vec2(t * 0.35, 1.7));
  col += vec3(0.13, 0.06, 0.032) * hz * (0.7 + 0.6 * u_warp);

  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float ringN = 26.0 + fi * 9.0;
    vec2 sp = vec2(
      (a / 6.28318 + 0.5) * ringN,
      (0.3 + fi * 0.22) / rr + t * (2.0 + fi * 1.2)
    );
    vec2 cell = floor(sp);
    vec2 f = fract(sp);
    float h = hash(cell + fi * 17.31);
    float on = step(0.68, h);
    vec2 c = vec2(0.2 + 0.6 * hash(cell + 4.7), 0.5);
    vec2 dlt = f - c;
    float sy = mix(130.0, 8.0, u_warp);
    float star = on * exp(-(dlt.x * dlt.x * 150.0 + dlt.y * dlt.y * sy));
    float tw = 0.7 + 0.3 * sin(h * 81.0 + t * 9.0);
    tw = mix(tw, 1.0, u_warp);
    vec3 sCol = mix(vec3(1.0, 0.94, 0.85), vec3(1.0, 0.6, 0.33), step(0.9, h));
    float fade = smoothstep(0.02, 0.25, r);
    col += sCol * star * tw * fade * (1.1 + 0.7 * u_warp);
  }

  col += vec3(1.0, 0.8, 0.58) * u_warp * 0.32 * exp(-r * 4.0);
  vec2 e = sc * (1.0 - sc);
  col *= 0.3 + 0.7 * pow(e.x * e.y * 16.0, 0.3);
  col = mix(col, vec3(1.0, 0.97, 0.92), clamp(u_flash, 0.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
}
`;

export const IgnitionButton: React.FC<IgnitionButtonProps> = ({
  href,
  isExternal = false,
  showArrow = true,
  size = "md",
  className,
  children = "Let's make something odd",
  onClick,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
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

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center border-0 cursor-pointer outline-none select-none",
    "transition-all duration-300 ease-[cubic-bezier(.34,1.4,.5,1)]",
    "hover:-translate-y-[2px] active:translate-y-[1px] active:scale-[0.985]",
    "focus-visible:outline-2 focus-visible:outline-[#d43d17] focus-visible:outline-offset-[3px]",
    // Tactile gunmetal / graphite bezel
    "bg-[linear-gradient(180deg,#3c3f46_0%,#15171b_55%,#2a2d33_100%)]",
    "shadow-[0_12px_28px_rgba(15,12,10,.35),0_2px_8px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.16)]",
    "hover:shadow-[0_18px_38px_rgba(212,61,23,.35),0_3px_12px_rgba(0,0,0,.45),inset_0_1px_0_rgba(255,255,255,.22)]",
    sizeClasses[size],
    className
  );

  const innerContent = (
    <span
      className={cn(
        "relative flex items-center justify-center w-full h-full overflow-hidden bg-[#06050a]",
        "shadow-[inset_0_2px_8px_rgba(0,0,0,.9)]",
        innerSizeClasses[size]
      )}
    >
      {/* Raw WebGL Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
        aria-hidden="true"
      />

      {/* Ember-Glow Label Text */}
      <span
        className="relative z-10 flex items-center gap-1.5 font-primary font-medium tracking-wide text-[#fdf6ee]"
        style={{
          textShadow:
            "0 0 14px rgba(255, 170, 100, .55), 0 1px 6px rgba(0, 0, 0, .9)",
        }}
      >
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#ffc49e]" />
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
