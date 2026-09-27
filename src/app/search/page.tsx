import { Suspense } from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { SearchContent } from "./SearchContent";
import { getAllProducts } from "@/application/product/product.service";
import { getAllCategories } from "@/application/category/category.service";

export const metadata: Metadata = {
  title: "Search Products | Nexus Tyre",
  description:
    "Search across the entire Nexus Tyre catalog of EV mobility vehicles, tyres, batteries, chargers, and industrial utility equipment.",
};

export default function SearchPage() {
  const products = getAllProducts();
  const categories = getAllCategories();

  return (
    <div className="py-8 md:py-12 bg-[var(--color-bg)] min-h-screen">
      <div className="container-site space-y-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Search" },
          ]}
        />

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] tracking-tight">
            Search Catalogue
          </h1>
          <p className="text-base text-[var(--color-muted)] max-w-2xl">
            Find products by vehicle model, tyre size, battery chemistry, voltage, application, or technical specifications.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="p-12 text-center text-[var(--color-muted)]">
              Loading search catalog...
            </div>
          }
        >
          <SearchContent products={products} categories={categories} />
        </Suspense>
      </div>
    </div>
  );
}
