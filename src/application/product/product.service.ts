// Product application service
// All product-related operations go through here — not directly from components

import { productRepository } from "@/infrastructure/repositories/static/static-product.repository";
import {
  filterProducts,
  sortProducts,
  getRelatedProducts,
} from "@/domain/product/product.rules";
import type {
  Product,
  ProductFilters,
  ProductSortOption,
} from "@/domain/product/product.types";

export function getAllProducts(): Product[] {
  return productRepository.getAll();
}

export function getProductBySlug(slug: string): Product | undefined {
  return productRepository.getBySlug(slug);
}

export function getFeaturedProducts(): Product[] {
  return productRepository.getFeatured();
}

export function getProductsByCategory(categoryId: string): Product[] {
  return productRepository.getByCategory(categoryId);
}

export function searchAndFilterProducts(
  query: string,
  filters: ProductFilters,
  sort: ProductSortOption = "featured"
): Product[] {
  // Start from all products, then apply search + filter + sort
  const base = query.trim()
    ? productRepository.search(query)
    : productRepository.getAll();

  const filtered = filterProducts(base, filters);
  return sortProducts(filtered, sort);
}

export function getRelatedProductsForProduct(
  product: Product,
  limit = 4
): Product[] {
  const all = productRepository.getAll();
  return getRelatedProducts(all, product, limit);
}

export function getAllProductSlugs(): string[] {
  return productRepository.getAll().map((p) => p.slug);
}
