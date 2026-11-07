"use client";

import React from "react";
import {
  IgnitionButton,
  type NeuformIsolatedEffectProps,
} from "./neuform-isolated/NeuformIsolatedEffects";

export type ShaderButtonsVariant =
  | "ignition-button"
  | "induction-button"
  | "plasma-button"
  | "tactile-button"
  | "thinking-button"
  | "sliding-text-cta"
  | "floating-dots-cta"
  | "launch-button"
  | "dot-border-button"
  | "gradient-cta"
  | "spinning-border-button"
  | "glassmorphism-cta"
  | "generate-button"
  | "gradient-pill-button"
  | "gradient-beam-cta";

export type ShaderButtonsProps = NeuformIsolatedEffectProps & {
  variant?: ShaderButtonsVariant;
};

export function ShaderButtons({
  variant = "ignition-button",
  mode = "dark",
  hue = 0,
  saturation = 1,
  brightness = 1,
  className = "",
  style,
  ...props
}: ShaderButtonsProps) {
  return (
    <IgnitionButton
      mode={mode}
      hue={hue}
      saturation={saturation}
      brightness={brightness}
      className={className}
      style={style}
      {...props}
    />
  );
}

export default ShaderButtons;

