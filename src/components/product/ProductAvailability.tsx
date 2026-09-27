import { cn } from "@/lib/utils";
import type { Availability } from "@/domain/product/product.types";

const AVAILABILITY_CONFIG: Record<
  Availability,
  { label: string; color: string }
> = {
  IN_STOCK: { label: "In Stock", color: "text-[var(--color-success)] bg-[var(--color-success-bg)]" },
  AVAILABLE: { label: "Available", color: "text-[var(--color-success)] bg-[var(--color-success-bg)]" },
  LIMITED: { label: "Limited Stock", color: "text-[var(--color-warning)] bg-[var(--color-warning-bg)]" },
  ON_ORDER: { label: "On Order", color: "text-[var(--color-info)] bg-[var(--color-info-bg)]" },
  CONTACT_US: { label: "Contact for Availability", color: "text-[var(--color-muted)] bg-[var(--color-surface-2)]" },
};

interface ProductAvailabilityProps {
  availability?: Availability;
  className?: string;
}

export function ProductAvailability({
  availability,
  className,
}: ProductAvailabilityProps) {
  if (!availability) return null;

  const config = AVAILABILITY_CONFIG[availability];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        config.color,
        className
      )}
    >
      <span
        className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0"
        aria-hidden="true"
      />
      {config.label}
    </span>
  );
}
