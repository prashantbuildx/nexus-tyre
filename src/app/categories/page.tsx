import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CategoryCard } from "@/components/category/CategoryCard";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { getAllCategories, getProductCountForCategory } from "@/application/category/category.service";
import { Zap, Truck, ShieldCheck, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Categories | Nexus Tyre",
  description:
    "Explore our complete category catalogue: E-Rickshaws, E-Scooties, Automotive Tyres, Tubes, Rims, EV Batteries, Chargers, Waste Management Equipment, and Industrial Solutions.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="py-8 md:py-12 bg-[var(--color-bg)] min-h-screen">
      <div className="container-site space-y-12">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Categories" },
          ]}
        />

        {/* Page Title & Intro */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
            Broad Industry Classification
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
            Product Categories
          </h1>
          <p className="text-base md:text-lg text-[var(--color-muted)] max-w-3xl leading-relaxed">
            From electric passenger mobility and heavy-duty cargo haulers to commercial tyres, industrial power packs, and municipal utility solutions, browse our comprehensive business verticals.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const count = getProductCountForCategory(category.id);
            return (
              <CategoryCard
                key={category.id}
                category={category}
                productCount={count}
                variant={category.featured ? "featured" : "default"}
              />
            );
          })}
        </div>

        {/* Category Capabilities Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-white border border-[var(--color-border)] shadow-sm">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[var(--color-text)] text-lg">
              EV & Clean Mobility
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Complete vehicle ecosystems including passenger e-rickshaws, cargo loaders, e-scooties, high-density batteries, and intelligent smart chargers.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[var(--color-text)] text-lg">
              Tyres, Tubes & Wheel Assemblies
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              High mileage rubber compounds, reinforced sidewalls, heavy load tubes, and impact-resistant steel and alloy rims for tough Indian road terrains.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
              <Factory className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[var(--color-text)] text-lg">
              Industrial & Municipal Equipment
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Electric waste collection tippers, hydraulic garbage tippers, institutional vending machines, and compliant industrial incineration equipment.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <ContactCTA
          title="Looking for a Custom Product or Specific Model?"
          subtitle="If you don't see the exact specifications or part numbers you need, get in touch with our product specialists."
        />
      </div>
    </div>
  );
}
