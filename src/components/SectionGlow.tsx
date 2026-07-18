import React from "react";
import { cn } from "@/lib/utils";

interface SectionGlowProps {
  className?: string;
  position?: "top" | "bottom" | "both";
  color?: "cyan" | "purple" | "emerald";
}

const glowColors = {
  cyan: "from-cyan-500/5 via-cyan-500/[0.02] to-transparent",
  purple: "from-purple-500/5 via-purple-500/[0.02] to-transparent",
  emerald: "from-emerald-500/5 via-emerald-500/[0.02] to-transparent",
};

export function SectionGlow({
  className,
  position = "both",
  color = "cyan",
}: SectionGlowProps) {
  const glowClass = glowColors[color];

  if (position === "top") {
    return (
      <div
        className={cn(
          "absolute top-0 inset-x-0 h-32 bg-gradient-to-b pointer-events-none",
          glowClass,
          className,
        )}
      />
    );
  }

  if (position === "bottom") {
    return (
      <div
        className={cn(
          "absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t pointer-events-none",
          glowClass,
          className,
        )}
      />
    );
  }

  return (
    <>
      <div
        className={cn(
          "absolute top-0 inset-x-0 h-24 bg-gradient-to-b pointer-events-none",
          glowClass,
          className,
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t pointer-events-none",
          glowClass,
          className,
        )}
      />
    </>
  );
}
