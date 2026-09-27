import type { Product } from "@/domain/product/product.types";
import type { Category } from "@/domain/category/category.types";
import { ProductCard } from "./ProductCard";
import { EmptyState } from "@/components/common/EmptyState";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  categories?: Category[];
  columns?: 2 | 3 | 4;
  className?: string;
  emptyTitle?: string;
  emptyDescription?: string;
}

function getCategoryName(
  categoryId: string,
  categories?: Category[]
): string | undefined {
  return categories?.find((c) => c.id === categoryId)?.name;
}

export function ProductGrid({
  products,
  categories,
  columns = 3,
  className,
  emptyTitle = "No products found",
  emptyDescription = "Try adjusting your search or filter criteria.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        actionLabel="Browse All Products"
        actionHref="/products"
      />
    );
  }

  return (
    <div
      className={cn(
        "grid gap-5",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 &&
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
      aria-label="Product listing"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          categoryName={getCategoryName(product.categoryId, categories)}
        />
      ))}
    </div>
  );
}
