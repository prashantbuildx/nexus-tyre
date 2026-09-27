import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Package,
  Battery,
  Truck,
  ChevronRight,
} from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CategoryCard } from "@/components/category/CategoryCard";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { getFeaturedProducts } from "@/application/product/product.service";
import { getFeaturedCategories, getAllCategories, getProductCountForCategory } from "@/application/category/category.service";
import type { Category } from "@/domain/category/category.types";

// ─── Data ─────────────────────────────────────────────────────────────────────
const featuredProducts = getFeaturedProducts();
const featuredCategories = getFeaturedCategories();
const allCategories = getAllCategories();

function getCategoryCount(catId: string) {
  return getProductCountForCategory(catId);
}

// ─── Solution areas for homepage ───────────────────────────────────────────────
const solutions = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "EV Mobility",
    description:
      "E-rickshaws and electric scooties for passenger transport, cargo, and last-mile delivery.",
    href: "/categories/e-rickshaw",
    color: "from-indigo-50 to-purple-50 border-indigo-100",
    iconColor: "text-indigo-600 bg-indigo-100",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Tyre & Wheel Solutions",
    description:
      "Tyres, tubes, and rims for e-rickshaws, e-scooties, and light commercial vehicles.",
    href: "/categories/tyres",
    color: "from-amber-50 to-yellow-50 border-amber-100",
    iconColor: "text-amber-600 bg-amber-100",
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: "Battery & Charging",
    description:
      "EV batteries and chargers for electric three-wheelers and two-wheelers.",
    href: "/categories/ev-batteries",
    color: "from-green-50 to-emerald-50 border-green-100",
    iconColor: "text-green-600 bg-green-100",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Industrial Equipment",
    description:
      "Garbage collection vehicles, containers, vending machines, and industrial incinerators.",
    href: "/categories/garbage-solutions",
    color: "from-blue-50 to-sky-50 border-blue-100",
    iconColor: "text-blue-600 bg-blue-100",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--color-dark)" }}
        aria-labelledby="hero-heading"
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        {/* Gradient accents */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at right top, var(--color-accent) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at left bottom, var(--color-primary-light) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="container-site relative py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                style={{
                  background: "rgba(255,206,72,0.15)",
                  color: "var(--color-accent)",
                  border: "1px solid rgba(255,206,72,0.3)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                EV • MOBILITY • INDUSTRIAL
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-display text-white mb-6 leading-tight"
            >
              Solutions That Keep{" "}
              <span style={{ color: "var(--color-accent)" }}>
                Mobility Moving.
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              Explore e-rickshaws, electric scooties, tyres, batteries,
              chargers, and industrial equipment from Nexus Tyre.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base transition-all"
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-primary)",
                }}
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Contact Nexus Tyre
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Category Cards ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-background)]" aria-labelledby="categories-heading">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                Browse by Category
              </p>
              <h2 id="categories-heading" className="text-h2 text-[var(--color-text)]">
                Product Categories
              </h2>
            </div>
            <Link
              href="/categories"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:gap-2 transition-all shrink-0"
            >
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCategories.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                productCount={getCategoryCount(cat.id)}
                variant="featured"
              />
            ))}
          </div>

          <div className="flex sm:hidden mt-6 justify-center">
            <Link
              href="/categories"
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-[var(--color-border)] text-sm font-semibold text-[var(--color-primary)]"
            >
              View all categories <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Solutions ────────────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "var(--color-surface)" }}
        aria-labelledby="solutions-heading"
      >
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 id="solutions-heading" className="text-h2 text-[var(--color-text)] mb-4">
              Product Solutions
            </h2>
            <p className="text-[var(--color-muted)] max-w-xl mx-auto">
              From electric vehicles to industrial waste management —
              Nexus Tyre supplies across mobility and industrial categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solutions.map((sol) => (
              <Link
                key={sol.title}
                href={sol.href}
                className={`group flex gap-4 p-6 rounded-2xl border bg-gradient-to-br transition-all hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 ${sol.color}`}
                aria-label={sol.title}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${sol.iconColor}`}
                  aria-hidden="true"
                >
                  {sol.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[var(--color-text)] mb-1.5 text-base group-hover:text-[var(--color-primary)] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {sol.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Products ────────────────────────────────────────────────── */}
      {featuredProducts.length > 0 && (
        <section
          className="section-padding bg-[var(--color-background)]"
          aria-labelledby="featured-heading"
        >
          <div className="container-site">
            <div className="flex items-end justify-between mb-10 gap-4">
              <div>
                <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                  Selected Products
                </p>
                <h2 id="featured-heading" className="text-h2 text-[var(--color-text)]">
                  Featured Products
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:gap-2 transition-all shrink-0"
              >
                Browse all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <ProductGrid
              products={featuredProducts.slice(0, 6)}
              categories={allCategories}
              columns={3}
            />

            <div className="flex justify-center mt-10">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Browse All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ─── Why Nexus Tyre ──────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "var(--color-surface)" }}
        aria-labelledby="why-heading"
      >
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
              Why Nexus Tyre
            </p>
            <h2 id="why-heading" className="text-h2 text-[var(--color-text)]">
              Your Mobility & Industrial Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Wide Product Range",
                desc: "EVs, tyres, batteries, chargers, and industrial equipment — all from one supplier.",
              },
              {
                title: "Direct Enquiry",
                desc: "Contact us directly via phone or WhatsApp for pricing and current availability.",
              },
              {
                title: "Detailed Product Information",
                desc: "Browse specifications, features, and product categories before making an enquiry.",
              },
              {
                title: "Mobility & Industrial",
                desc: "From electric three-wheelers to industrial incinerators — a diverse product catalogue.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)]"
              >
                <div
                  className="w-2 h-8 rounded-full mb-4"
                  style={{ background: "var(--color-accent)" }}
                  aria-hidden="true"
                />
                <h3 className="font-bold text-[var(--color-text)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ─────────────────────────────────────────────────────── */}
      <section className="section-padding-sm bg-[var(--color-background)]" aria-label="Contact Nexus Tyre">
        <div className="container-site">
          <ContactCTA />
        </div>
      </section>
    </>
  );
}
