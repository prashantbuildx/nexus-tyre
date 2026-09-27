// Repository interface for products
// This contract allows swapping StaticProductRepository for ApiProductRepository

import type { Product } from "@/domain/product/product.types";

export interface ProductRepository {
  getAll(): Product[];
  getById(id: string): Product | undefined;
  getBySlug(slug: string): Product | undefined;
  getFeatured(): Product[];
  getByCategory(categoryId: string): Product[];
  search(query: string): Product[];
}
