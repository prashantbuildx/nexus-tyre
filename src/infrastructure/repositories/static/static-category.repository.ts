// Static category repository — reads from local data file
// Future: replace with ApiCategoryRepository that calls GET /api/categories

import type { CategoryRepository } from "../interfaces/category.repository";
import type { Category } from "@/domain/category/category.types";
import { categoriesData } from "@/data/categories";

class StaticCategoryRepository implements CategoryRepository {
  private categories: Category[] = categoriesData;

  getAll(): Category[] {
    return this.categories;
  }

  getById(id: string): Category | undefined {
    return this.categories.find((c) => c.id === id);
  }

  getBySlug(slug: string): Category | undefined {
    return this.categories.find((c) => c.slug === slug && c.active);
  }

  getFeatured(): Category[] {
    return this.categories
      .filter((c) => c.featured && c.active)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  getActive(): Category[] {
    return this.categories
      .filter((c) => c.active)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }
}

// Singleton instance — swap for ApiCategoryRepository when backend is ready
export const categoryRepository: CategoryRepository =
  new StaticCategoryRepository();
