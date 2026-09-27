// Domain types for product catalogue

export type ProductType =
  | "VEHICLE"
  | "PART"
  | "ACCESSORY"
  | "BATTERY"
  | "CHARGER"
  | "MACHINE"
  | "CONTAINER"
  | "INDUSTRIAL_EQUIPMENT"
  | "OTHER";

export type PriceType =
  | "FIXED"
  | "STARTING_FROM"
  | "ON_REQUEST"
  | "CONTACT_FOR_PRICE";

export type Availability =
  | "IN_STOCK"
  | "AVAILABLE"
  | "LIMITED"
  | "ON_ORDER"
  | "CONTACT_US";

export type Currency = "INR";

export interface Specification {
  label: string;
  value: string;
  group?: string;
}

export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sortOrder: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categoryId: string;
  subCategoryId?: string;
  type: ProductType;
  price?: number;
  priceType: PriceType;
  currency: Currency;
  availability?: Availability;
  images: ProductImage[];
  thumbnail?: string;
  specifications: Specification[];
  features: string[];
  tags: string[];
  brand?: string;
  model?: string;
  featured: boolean;
  active: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export type ProductSortOption =
  | "featured"
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc";

export interface ProductFilters {
  categoryId?: string;
  type?: ProductType;
  availability?: Availability;
  priceType?: PriceType;
  featured?: boolean;
}
