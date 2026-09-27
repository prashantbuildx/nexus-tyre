// Repository interface for categories

import type { Category } from "@/domain/category/category.types";

export interface CategoryRepository {
  getAll(): Category[];
  getById(id: string): Category | undefined;
  getBySlug(slug: string): Category | undefined;
  getFeatured(): Category[];
  getActive(): Category[];
}
