"use client";

import { useState, useMemo, useTransition } from "react";
import { Filter, SlidersHorizontal, X, Search, RotateCcw } from "lucide-react";
import type { Product, ProductSortOption, Availability, PriceType } from "@/domain/product/product.types";
import type { Category } from "@/domain/category/category.types";
import { filterProducts, sortProducts, searchProducts } from "@/domain/product/product.rules";
import { ProductGrid } from "./ProductGrid";
import { cn } from "@/lib/utils";

interface ProductCatalogViewProps {
  products: Product[];
  categories: Category[];
  initialCategory?: string;
  initialQuery?: string;
  showCategoryFilter?: boolean;
}

export function ProductCatalogView({
  products,
  categories,
  initialCategory = "all",
  initialQuery = "",
  showCategoryFilter = true,
}: ProductCatalogViewProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedAvailability, setSelectedAvailability] = useState<string>("all");
  const [selectedPriceType, setSelectedPriceType] = useState<string>("all");
  const [sortOption, setSortOption] = useState<ProductSortOption>("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Derived filtered & sorted products
  const filteredProducts = useMemo(() => {
    let result = products;

    // Search query
    if (query.trim()) {
      result = searchProducts(result, query.trim());
    }

    // Category filter
    if (selectedCategory && selectedCategory !== "all") {
      result = filterProducts(result, { categoryId: selectedCategory });
    }

    // Availability filter
    if (selectedAvailability !== "all") {
      result = filterProducts(result, {
        availability: selectedAvailability as Availability,
      });
    }

    // Price type filter
    if (selectedPriceType !== "all") {
      result = filterProducts(result, {
        priceType: selectedPriceType as PriceType,
      });
    }

    // Sort
    result = sortProducts(result, sortOption);

    return result;
  }, [
    products,
    query,
    selectedCategory,
    selectedAvailability,
    selectedPriceType,
    sortOption,
  ]);

  const activeFiltersCount =
    (selectedCategory !== "all" && showCategoryFilter ? 1 : 0) +
    (selectedAvailability !== "all" ? 1 : 0) +
    (selectedPriceType !== "all" ? 1 : 0) +
    (query.trim() ? 1 : 0);

  const resetFilters = () => {
    setQuery("");
    setSelectedCategory("all");
    setSelectedAvailability("all");
    setSelectedPriceType("all");
    setSortOption("featured");
  };

  return (
    <div className="space-y-6">
      {/* Search & Top Controls */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[var(--color-border)] shadow-sm">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)] pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products by model, category, specs or keywords..."
              className="w-full h-11 pl-10 pr-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:bg-[var(--color-border-strong)] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Controls: Mobile filter trigger + Sort select */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 px-4 h-11 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-2)] transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 flex-1 sm:flex-none">
              <span className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider hidden sm:inline">
                Sort:
              </span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as ProductSortOption)}
                className="h-11 px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text)] font-medium focus:outline-none focus:border-[var(--color-primary)] cursor-pointer"
                aria-label="Sort products"
              >
                <option value="featured">Featured First</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills (horizontal scrollable) */}
        {showCategoryFilter && (
          <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
              <span className="text-[var(--color-muted)] font-semibold uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
                Category:
              </span>
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={cn(
                  "px-3.5 py-1.5 rounded-full font-medium transition-all shrink-0",
                  selectedCategory === "all"
                    ? "bg-[var(--color-primary)] text-white shadow-sm"
                    : "bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-3)]"
                )}
              >
                All Categories ({products.length})
              </button>
              {categories.map((cat) => {
                const count = products.filter((p) => p.categoryId === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full font-medium transition-all shrink-0",
                      selectedCategory === cat.id
                        ? "bg-[var(--color-primary)] text-white shadow-sm"
                        : "bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-3)]"
                    )}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Main Grid + Sidebar Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-1 bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2 font-bold text-[var(--color-text)]">
              <Filter className="w-4 h-4 text-[var(--color-primary)]" />
              <span>Refine Products</span>
            </div>
            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs text-[var(--color-primary)] hover:underline flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>

          {/* Availability */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
              Availability
            </h4>
            <div className="space-y-2">
              {[
                { label: "All Items", value: "all" },
                { label: "In Stock", value: "IN_STOCK" },
                { label: "Available", value: "AVAILABLE" },
                { label: "Made to Order", value: "MADE_TO_ORDER" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] cursor-pointer"
                >
                  <input
                    type="radio"
                    name="availability"
                    value={opt.value}
                    checked={selectedAvailability === opt.value}
                    onChange={(e) => setSelectedAvailability(e.target.value)}
                    className="accent-[var(--color-primary)] w-4 h-4"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pricing Model */}
          <div className="space-y-3 pt-4 border-t border-[var(--color-border)]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
              Pricing Model
            </h4>
            <div className="space-y-2">
              {[
                { label: "All Pricing", value: "all" },
                { label: "Fixed Listed Price", value: "FIXED" },
                { label: "Enquiry / Custom Quote", value: "CONTACT_FOR_PRICE" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] cursor-pointer"
                >
                  <input
                    type="radio"
                    name="priceType"
                    value={opt.value}
                    checked={selectedPriceType === opt.value}
                    onChange={(e) => setSelectedPriceType(e.target.value)}
                    className="accent-[var(--color-primary)] w-4 h-4"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Wholesale Notice */}
          <div className="p-4 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/15">
            <h5 className="font-semibold text-xs text-[var(--color-primary)] uppercase tracking-wider mb-1">
              Bulk & Fleet Orders
            </h5>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              Wholesale pricing, commercial fleet customization, and dealership procurement available upon direct enquiry.
            </p>
          </div>
        </aside>

        {/* Mobile Filter Drawer */}
        {showMobileFilters && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
            <div className="w-full max-w-xs bg-white h-full p-6 overflow-y-auto space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
                <span className="font-bold text-lg text-[var(--color-text)]">
                  Filter Catalog
                </span>
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(false)}
                  className="p-1 rounded-lg text-[var(--color-muted)] hover:bg-[var(--color-surface-2)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Category */}
              {showCategoryFilter && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                    Category
                  </h4>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[var(--color-border)] text-sm"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Mobile Availability */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Availability
                </h4>
                <div className="space-y-2">
                  {[
                    { label: "All Items", value: "all" },
                    { label: "In Stock", value: "IN_STOCK" },
                    { label: "Available", value: "AVAILABLE" },
                    { label: "Made to Order", value: "MADE_TO_ORDER" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="mob-availability"
                        value={opt.value}
                        checked={selectedAvailability === opt.value}
                        onChange={(e) => setSelectedAvailability(e.target.value)}
                        className="accent-[var(--color-primary)] w-4 h-4"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Price Type */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Pricing
                </h4>
                <div className="space-y-2">
                  {[
                    { label: "All Pricing", value: "all" },
                    { label: "Fixed Listed Price", value: "FIXED" },
                    { label: "Enquiry / Quote", value: "CONTACT_FOR_PRICE" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-2.5 text-sm cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="mob-priceType"
                        value={opt.value}
                        checked={selectedPriceType === opt.value}
                        onChange={(e) => setSelectedPriceType(e.target.value)}
                        className="accent-[var(--color-primary)] w-4 h-4"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-2">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="flex-1 py-2.5 rounded-xl border border-[var(--color-border)] text-sm font-semibold hover:bg-[var(--color-surface-2)]"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-dark)]"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid Area */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between text-sm text-[var(--color-muted)] px-1">
            <span>
              Showing <strong className="text-[var(--color-text)]">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? "product" : "products"}
              {query && ` matching "${query}"`}
            </span>
            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs text-[var(--color-primary)] hover:underline font-semibold"
              >
                Clear all filters
              </button>
            )}
          </div>

          <ProductGrid
            products={filteredProducts}
            categories={categories}
            columns={3}
            emptyTitle={
              query
                ? `No products matching "${query}"`
                : "No products match your filter criteria"
            }
            emptyDescription="Try selecting a different category, clearing your search query, or resetting filters."
          />
        </div>
      </div>
    </div>
  );
}
