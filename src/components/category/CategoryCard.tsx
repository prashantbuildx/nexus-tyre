import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/domain/category/category.types";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  productCount?: number;
  className?: string;
  variant?: "default" | "featured";
}

export function CategoryCard({
  category,
  productCount,
  className,
  variant = "default",
}: CategoryCardProps) {
  const hasImage = Boolean(category.image);

  return (
    <Link
      href={`/categories/${category.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5",
        variant === "featured" ? "shadow-sm" : "shadow-sm",
        className
      )}
      aria-label={`Browse ${category.name} products`}
    >
      {/* Category Image Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {hasImage ? (
          <Image
            src={category.image!}
            alt={`${category.name} category`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-[var(--color-muted)]">
              {category.name}
            </span>
          </div>
        )}

        {/* Subtle gradient vignette at bottom of image for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Model count badge */}
        {productCount !== undefined && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
              {productCount} {productCount === 1 ? "Model" : "Models"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-2.5">
        <h3 className="font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors text-lg leading-snug">
          {category.name}
        </h3>

        <p className="text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2 flex-1">
          {category.description}
        </p>

        <div className="flex items-center justify-between pt-3 mt-1 border-t border-[var(--color-border)] text-sm font-semibold text-[var(--color-primary)]">
          <span>Explore Category</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
