"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { ProductImage } from "@/domain/product/product.types";
import { ProductImagePlaceholder } from "@/components/common/ProductImagePlaceholder";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
  className?: string;
}

export function ProductGallery({
  images,
  productName,
  className,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const hasImages = images.length > 0;
  const selected = hasImages ? images[selectedIndex] : null;

  const prev = () =>
    setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!hasImages) {
    return (
      <div
        className={cn(
          "aspect-[4/3] rounded-2xl overflow-hidden",
          className
        )}
        aria-label="No product image available"
      >
        <ProductImagePlaceholder label="Product image coming soon" />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--color-surface-2)] group">
        <Image
          src={selected!.src}
          alt={selected!.alt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-[var(--color-text)] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-[var(--color-text)] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          role="list"
          aria-label="Product image thumbnails"
        >
          {images.map((img, index) => (
            <button
              key={img.id}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all",
                index === selectedIndex
                  ? "border-[var(--color-primary)]"
                  : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
              )}
              aria-label={`View image ${index + 1}: ${img.alt}`}
              aria-pressed={index === selectedIndex}
              role="listitem"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
