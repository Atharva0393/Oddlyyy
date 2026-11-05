import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  isOptional?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      isOptional = false,
      id,
      className,
      rows = 4,
      disabled,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full space-y-1.5 text-left">
        <div className="flex items-center justify-between">
          <label
            htmlFor={textareaId}
            className="block text-xs md:text-sm font-primary font-medium text-ink tracking-normal"
          >
            {label}
          </label>
          {isOptional && (
            <span className="text-[11px] font-mono text-ink/50 uppercase">
              Optional
            </span>
          )}
        </div>

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-3 rounded-xl font-primary text-base text-ink resize-y",
            "bg-cream/60 border-2 transition-all duration-150 ease-out",
            "placeholder:text-ink/40",
            error
              ? "border-terracotta focus:border-terracotta focus:ring-1 focus:ring-terracotta"
              : "border-ink/20 focus:border-terracotta focus:bg-cream focus:ring-1 focus:ring-terracotta",
            "focus:outline-none",
            "disabled:opacity-50 disabled:bg-ink/5 disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />

        {error ? (
          <p className="text-xs font-mono text-terracotta flex items-center gap-1 mt-1">
            <span>!</span>
            <span>{error}</span>
          </p>
        ) : helperText ? (
          <p className="text-xs text-ink/60 mt-1">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

