// Category application service

import { categoryRepository } from "@/infrastructure/repositories/static/static-category.repository";
import { productRepository } from "@/infrastructure/repositories/static/static-product.repository";
import type { Category } from "@/domain/category/category.types";

export function getAllCategories(): Category[] {
  return categoryRepository.getActive();
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categoryRepository.getBySlug(slug);
}

export function getFeaturedCategories(): Category[] {
  return categoryRepository.getFeatured();
}

export function getAllCategorySlugs(): string[] {
  return categoryRepository.getActive().map((c) => c.slug);
}

/**
 * Returns count of active products in this category
 * Used to display counts in category views
 */
export function getProductCountForCategory(categoryId: string): number {
  return productRepository.getByCategory(categoryId).length;
}
