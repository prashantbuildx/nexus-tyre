import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center flex-wrap gap-1 text-sm", className)}
    >
      <Link
        href="/"
        className="flex items-center text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
        aria-label="Home"
      >
        <Home className="w-3.5 h-3.5" />
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <ChevronRight
            className="w-3.5 h-3.5 text-[var(--color-border-strong)]"
            aria-hidden="true"
          />
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className="text-[var(--color-text-secondary)] font-medium"
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
