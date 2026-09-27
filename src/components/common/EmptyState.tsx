import { cn } from "@/lib/utils";
import { SearchX } from "lucide-react";
import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  icon,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-20 px-6",
        className
      )}
    >
      <div className="w-16 h-16 rounded-2xl bg-[var(--color-surface-2)] flex items-center justify-center mb-5 text-[var(--color-muted)]">
        {icon ?? <SearchX className="w-7 h-7" strokeWidth={1.5} />}
      </div>
      <h3 className="text-h4 text-[var(--color-text)] mb-2">{title}</h3>
      {description && (
        <p className="text-[var(--color-muted)] max-w-xs">{description}</p>
      )}
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-medium text-sm hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
