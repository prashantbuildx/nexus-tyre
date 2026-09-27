"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "dark" | "light";
  compact?: boolean;
  className?: string;
  linkable?: boolean;
}

export function BrandLogo({
  variant = "dark",
  compact = false,
  className,
  linkable = true,
}: BrandLogoProps) {
  const isDark = variant === "dark";

  const logo = (
    <div className={cn("flex items-center gap-2 select-none", className)}>
      {/* Icon mark */}
      <div
        className={cn(
          "flex-shrink-0 rounded-md flex items-center justify-center font-black leading-none",
          compact ? "w-7 h-7 text-xs" : "w-9 h-9 text-sm",
          isDark
            ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
            : "bg-[var(--color-primary)] text-[var(--color-accent)]"
        )}
        aria-hidden="true"
      >
        N
      </div>

      {/* Wordmark */}
      {!compact && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-black tracking-tight text-lg",
              isDark
                ? "text-[var(--color-primary)]"
                : "text-white"
            )}
          >
            NEXUS
          </span>
          <span
            className={cn(
              "font-medium tracking-widest text-[10px] uppercase",
              isDark
                ? "text-[var(--color-muted)]"
                : "text-white/70"
            )}
          >
            TYRE
          </span>
        </div>
      )}
    </div>
  );

  if (!linkable) return logo;

  return (
    <Link
      href="/"
      className="focus-visible:outline-[var(--color-primary)]"
      aria-label="Nexus Tyre — Home"
    >
      {logo}
    </Link>
  );
}
