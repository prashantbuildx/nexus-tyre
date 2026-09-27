import { cn } from "@/lib/utils";
import { Package } from "lucide-react";

interface ProductImagePlaceholderProps {
  className?: string;
  label?: string;
}

export function ProductImagePlaceholder({
  className,
  label,
}: ProductImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "img-placeholder w-full h-full flex flex-col items-center justify-center gap-3 text-[var(--color-primary)]/40",
        className
      )}
      aria-hidden="true"
    >
      <Package
        strokeWidth={1.5}
        className="w-12 h-12 text-[var(--color-primary)]/30"
      />
      {label && (
        <span className="text-xs font-medium text-[var(--color-muted)] text-center px-4">
          {label}
        </span>
      )}
    </div>
  );
}
