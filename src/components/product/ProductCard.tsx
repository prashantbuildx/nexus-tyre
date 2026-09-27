import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/domain/product/product.types";
import { ProductPrice } from "./ProductPrice";
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
      className={cn("group flex flex-col gap-4 w-full", className)}
    >
      {/* Image */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block w-full aspect-[4/5] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]"
        aria-label={`View ${product.name}`}
        tabIndex={-1}
      >
        {hasImage ? (
          <Image
            src={imageSrc!}
            alt={imageAlt}
            fill
            className="object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] sepia-[.1] grayscale hover:grayscale-0"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-[var(--color-surface)] flex items-center justify-center">
            <span className="text-[var(--color-text-muted)] font-serif text-sm uppercase tracking-widest">No Image</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-1.5 px-1">
        {categoryName && (
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            {categoryName}
          </span>
        )}
        
        <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-[var(--color-text)] leading-tight line-clamp-1">
          <Link
            href={`/products/${product.slug}`}
            className="hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            {product.name}
          </Link>
        </h3>

        <div className="text-[var(--color-text)] font-sans">
          <ProductPrice
            priceType={product.priceType}
            price={product.price}
            currency={product.currency}
            size="md"
          />
        </div>
      </div>
    </article>
  );
}
