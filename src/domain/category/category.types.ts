// Domain types for product categories

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  icon?: string;
  featured: boolean;
  active: boolean;
  sortOrder: number;
}
