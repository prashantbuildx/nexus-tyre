import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/domain/product/product.types";
import { ProductPrice } from "./ProductPrice";
import { ProductAvailability } from "./ProductAvailability";
import { ProductImagePlaceholder } from "@/components/common/ProductImagePlaceholder";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  categoryName?: string;
  className?: string;
}

export function ProductCard({
  product,
  categoryName,
  className,
}: ProductCardProps) {
  const hasImage =
    product.thumbnail ||
    (product.images.length > 0 && product.images[0].src);

  const imageSrc = product.thumbnail ?? product.images[0]?.src;
  const imageAlt = product.images[0]?.alt ?? product.name;

  return (
    <article
      className={cn("card-product group flex flex-col", className)}
    >
      {/* Image */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[var(--color-surface-2)]"
        aria-label={`View ${product.name}`}
        tabIndex={-1}
      >
        {hasImage ? (
          <Image
            src={imageSrc!}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <ProductImagePlaceholder />
        )}

        {/* Category badge */}
        {categoryName && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[var(--color-primary)]/90 text-white text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm">
              {categoryName}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex-1">
          <h3 className="font-semibold text-[var(--color-text)] leading-snug mb-1.5 line-clamp-2">
            <Link
              href={`/products/${product.slug}`}
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              {product.name}
            </Link>
          </h3>
          <p className="text-sm text-[var(--color-muted)] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex items-end justify-between gap-3 pt-2 border-t border-[var(--color-border)]">
          <div className="flex flex-col gap-1.5">
            <ProductPrice
              priceType={product.priceType}
              price={product.price}
              currency={product.currency}
              size="sm"
            />
            {product.availability && (
              <ProductAvailability availability={product.availability} />
            )}
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:gap-2 transition-all shrink-0"
            aria-label={`View ${product.name} details`}
          >
            View
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
