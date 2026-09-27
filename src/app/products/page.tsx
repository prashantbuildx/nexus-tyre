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
    <div className="py-8 md:py-12 bg-[var(--color-bg)] min-h-screen">
      <div className="container-site space-y-8">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products" },
          ]}
        />

        {/* Page Title & Intro */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
            Commercial & Retail Catalog
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] tracking-tight">
            Product Catalogue
          </h1>
          <p className="text-base md:text-lg text-[var(--color-muted)] max-w-3xl leading-relaxed">
            High-grade electric vehicles, industrial utility haulers, performance tyres, power storage systems, and essential components engineered for commercial endurance and Indian operating conditions.
          </p>
        </div>

        {/* Interactive Catalog View */}
        <ProductCatalogView
          products={products}
          categories={categories}
          initialCategory="all"
        />

        {/* Contact Banner */}
        <div className="pt-10">
          <ContactCTA
            title="Need Bulk Pricing or Custom Technical Specifications?"
            subtitle="Our commercial supply team assists fleet operators, institutional buyers, and dealers with tailored quotes and supply contracts."
          />
        </div>
      </div>
    </div>
  );
}
