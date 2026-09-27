// Static product repository — reads from local data file
// Future: replace with ApiProductRepository that calls GET /api/products

import type { ProductRepository } from "../interfaces/product.repository";
import type { Product } from "@/domain/product/product.types";
import { productsData } from "@/data/products";
import {
  getActiveProducts,
  getFeaturedProducts,
  getProductsByCategory,
  findProductBySlug,
  searchProducts,
} from "@/domain/product/product.rules";

class StaticProductRepository implements ProductRepository {
  private products: Product[] = productsData;

  getAll(): Product[] {
    return getActiveProducts(this.products);
  }

  getById(id: string): Product | undefined {
    return this.products.find((p) => p.id === id && p.active);
  }

  getBySlug(slug: string): Product | undefined {
    return findProductBySlug(this.products, slug);
  }

  getFeatured(): Product[] {
    return getFeaturedProducts(this.products);
  }

  getByCategory(categoryId: string): Product[] {
    return getProductsByCategory(this.products, categoryId);
  }

  search(query: string): Product[] {
    return searchProducts(this.products, query);
  }
}

// Singleton instance — swap this for ApiProductRepository when backend is ready
export const productRepository: ProductRepository =
  new StaticProductRepository();
