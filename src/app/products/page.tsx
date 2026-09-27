import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductCatalogView } from "@/components/product/ProductCatalogView";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { getAllProducts } from "@/application/product/product.service";
import { getAllCategories } from "@/application/category/category.service";

export const metadata: Metadata = {
  title: "Products Catalogue | Nexus Tyre",
  description:
    "Explore our complete range of EV mobility solutions, e-rickshaws, e-scooties, heavy-duty tyres, tubes, rims, EV lithium & lead-acid batteries, chargers, and industrial utility equipment.",
};

export default function ProductsPage() {
  const products = getAllProducts();
  const categories = getAllCategories();

  return (
    <div className="bg-[var(--color-bg)] min-h-screen text-[var(--color-text)]">
      <div className="container-site space-y-16 md:space-y-24 py-16 md:py-24">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products" },
          ]}
        />

        {/* Page Title & Intro */}
        <div className="space-y-8 animate-fade-in-up">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-text-muted)]">
            Our Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-text)] tracking-tight leading-none max-w-4xl">
            Product Catalogue
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            High-grade electric vehicles, industrial utility haulers, performance tyres, power storage systems, and essential components engineered for commercial endurance and Indian operating conditions.
          </p>
        </div>

        {/* Interactive Catalog View */}
        <div className="animate-fade-in-up pt-8 border-t border-[var(--color-border)]">
          <ProductCatalogView
            products={products}
            categories={categories}
            initialCategory="all"
          />
        </div>

        {/* Contact Banner */}
        <div className="pt-16 animate-fade-in-up">
          <ContactCTA
            title="Need Bulk Pricing or Custom Technical Specifications?"
            subtitle="Our commercial supply team assists fleet operators, institutional buyers, and dealers with tailored quotes and supply contracts."
          />
        </div>
      </div>
    </div>
  );
}
