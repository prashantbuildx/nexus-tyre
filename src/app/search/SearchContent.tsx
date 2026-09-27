"use client";

import { useSearchParams } from "next/navigation";
import { ProductCatalogView } from "@/components/product/ProductCatalogView";
import type { Product } from "@/domain/product/product.types";
import type { Category } from "@/domain/category/category.types";

interface SearchContentProps {
  products: Product[];
  categories: Category[];
}

const POPULAR_SEARCHES = [
  "E-Rickshaw",
  "Passenger",
  "Loader",
  "E-Scooty",
  "Tyres",
  "Battery",
  "Charger",
  "Garbage",
  "Rims",
];

export function SearchContent({ products, categories }: SearchContentProps) {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q") || "";

  return (
    <div className="space-y-6">
      {/* Quick Search Chips */}
      <div className="flex items-center gap-2 flex-wrap text-xs text-[var(--color-muted)]">
        <span className="font-semibold uppercase tracking-wider">
          Suggested Searches:
        </span>
        {POPULAR_SEARCHES.map((term) => (
          <a
            key={term}
            href={`/search?q=${encodeURIComponent(term)}`}
            className="px-3 py-1 rounded-full bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all font-medium"
          >
            {term}
          </a>
        ))}
      </div>

      <ProductCatalogView
        key={queryParam}
        products={products}
        categories={categories}
        initialQuery={queryParam}
      />
    </div>
  );
}
