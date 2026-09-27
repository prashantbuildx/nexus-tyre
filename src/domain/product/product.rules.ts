// Product domain rules - pure business logic, no React/browser dependencies

import type { Product, ProductFilters, ProductSortOption } from "./product.types";

/**
 * Returns only active products
 */
export function getActiveProducts(products: Product[]): Product[] {
  return products.filter((p) => p.active);
}

/**
 * Returns featured active products
 */
export function getFeaturedProducts(products: Product[]): Product[] {
  return products
    .filter((p) => p.active && p.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Returns products for a specific category
 */
export function getProductsByCategory(
  products: Product[],
  categoryId: string
): Product[] {
  return products
    .filter((p) => p.active && p.categoryId === categoryId)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Find a single product by slug
 */
export function findProductBySlug(
  products: Product[],
  slug: string
): Product | undefined {
  return products.find((p) => p.slug === slug && p.active);
}

/**
 * Search products by query string
 */
export function searchProducts(products: Product[], query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return getActiveProducts(products);

  return products.filter((p) => {
    if (!p.active) return false;
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.brand ?? "").toLowerCase().includes(q) ||
      (p.model ?? "").toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });
}

/**
 * Filter products by filter criteria
 */
export function filterProducts(
  products: Product[],
  filters: ProductFilters
): Product[] {
  return products.filter((p) => {
    if (!p.active) return false;
    if (filters.categoryId && p.categoryId !== filters.categoryId) return false;
    if (filters.type && p.type !== filters.type) return false;
    if (filters.availability && p.availability !== filters.availability)
      return false;
    if (filters.priceType && p.priceType !== filters.priceType) return false;
    if (filters.featured !== undefined && p.featured !== filters.featured)
      return false;
    return true;
  });
}

/**
 * Sort products by a sort option
 */
export function sortProducts(
  products: Product[],
  sort: ProductSortOption
): Product[] {
  const sorted = [...products];
  switch (sort) {
    case "featured":
      return sorted.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.sortOrder - b.sortOrder;
      });
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "price-asc":
      return sorted.sort((a, b) => {
        const pa = a.price ?? Infinity;
        const pb = b.price ?? Infinity;
        return pa - pb;
      });
    case "price-desc":
      return sorted.sort((a, b) => {
        const pa = a.price ?? -Infinity;
        const pb = b.price ?? -Infinity;
        return pb - pa;
      });
    default:
      return sorted;
  }
}

/**
 * Get related products: same category, exclude current, limit to 4
 */
export function getRelatedProducts(
  products: Product[],
  currentProduct: Product,
  limit = 4
): Product[] {
  return products
    .filter(
      (p) =>
        p.active &&
        p.id !== currentProduct.id &&
        (p.categoryId === currentProduct.categoryId ||
          p.tags.some((t) => currentProduct.tags.includes(t)))
    )
    .sort((a, b) => {
      // Prefer same category
      const aCategory = a.categoryId === currentProduct.categoryId ? 0 : 1;
      const bCategory = b.categoryId === currentProduct.categoryId ? 0 : 1;
      if (aCategory !== bCategory) return aCategory - bCategory;
      return a.sortOrder - b.sortOrder;
    })
    .slice(0, limit);
}

/**
 * Create a URL-safe slug from a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Count active products in a category
 */
export function countProductsByCategory(
  products: Product[],
  categoryId: string
): number {
  return products.filter((p) => p.active && p.categoryId === categoryId).length;
}
