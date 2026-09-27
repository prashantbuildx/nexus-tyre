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
    icon: <Truck className="w-5 h-5" />,
    title: "EV Mobility",
    description:
      "E-rickshaws and electric scooties for passenger transport, cargo, and last-mile delivery.",
    href: "/categories/e-rickshaw",
  },
  {
    icon: <Package className="w-5 h-5" />,
    title: "Tyre & Wheel Solutions",
    description:
      "Tyres, tubes, and rims for e-rickshaws, e-scooties, and light commercial vehicles.",
    href: "/categories/tyres",
  },
  {
    icon: <Battery className="w-5 h-5" />,
    title: "Battery & Charging",
    description:
      "EV batteries and chargers for electric three-wheelers and two-wheelers.",
    href: "/categories/ev-batteries",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Industrial Equipment",
    description:
      "Garbage collection vehicles, containers, vending machines, and industrial incinerators.",
    href: "/categories/garbage-solutions",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex items-center bg-[var(--color-bg)] border-b border-[var(--color-border)]"
        aria-labelledby="hero-heading"
      >
        <div className="container-site relative z-10 py-20 md:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text */}
            <div className="lg:col-span-6 space-y-8 animate-fade-in-up">
              {/* Eyebrow */}
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-[var(--color-border-strong)]" aria-hidden="true" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-text-muted)]">
                  EV • MOBILITY • INDUSTRIAL
                </span>
              </div>

              {/* Headline */}
              <h1
                id="hero-heading"
                className="text-6xl md:text-8xl font-serif text-[var(--color-text)] leading-[0.95] tracking-tight"
              >
                Solutions <br />
                <span className="italic text-[var(--color-text-muted)]">That Keep</span><br />
                Mobility Moving
              </h1>

              {/* Supporting copy */}
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-md pt-4">
                Explore commercial-grade e-rickshaws, electric scooties, heavy-duty tyres, batteries, and municipal equipment from Nexus Tyre.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-6 pt-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-dark-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)] transition-all duration-300 ease-out"
                >
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-3.5 border border-[var(--color-border-strong)] text-[var(--color-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-surface)] transition-all duration-300 ease-out"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Graphic (Asymmetric Layout) */}
            <div className="lg:col-span-6 lg:col-start-7 lg:pl-12 relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full aspect-[4/5] bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Text-based stylized placeholder */}
                  <div className="text-[10rem] font-serif text-[var(--color-text)] opacity-[0.03] uppercase tracking-tighter leading-none -rotate-90 origin-center whitespace-nowrap">
                    Nexus
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-1/2 aspect-square bg-[var(--color-surface-soft)] border border-[var(--color-border)] hidden md:block"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Category Cards ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--color-surface)] border-b border-[var(--color-border)]" aria-labelledby="categories-heading">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-text-muted)]">
                Browse Collection
              </span>
              <h2 id="categories-heading" className="text-4xl md:text-5xl font-serif text-[var(--color-text)] tracking-tight">
                Product Categories
              </h2>
            </div>
            <Link
              href="/categories"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] hover:gap-3 transition-all shrink-0"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                productCount={getCategoryCount(cat.id)}
                variant="featured"
              />
            ))}
          </div>

          <div className="flex md:hidden mt-12 justify-center border-t border-[var(--color-border)] pt-8">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
            >
              View all categories <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Solutions ────────────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 bg-[var(--color-bg)] border-b border-[var(--color-border)]"
        aria-labelledby="solutions-heading"
      >
        <div className="container-site">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-text-muted)]">
                What We Offer
              </span>
              <h2 id="solutions-heading" className="text-4xl md:text-5xl font-serif text-[var(--color-text)] tracking-tight">
                Product Solutions
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                From electric vehicles to industrial waste management — Nexus Tyre supplies across mobility and industrial categories.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border)]">
              {solutions.map((sol) => (
                <Link
                  key={sol.title}
                  href={sol.href}
                  className="group flex flex-col gap-6 p-10 bg-[var(--color-bg)] hover:bg-[var(--color-surface-soft)] transition-colors duration-500"
                  aria-label={sol.title}
                >
                  <div
                    className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-500"
                    aria-hidden="true"
                  >
                    {sol.icon}
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-serif text-[var(--color-text)]">
                      {sol.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-auto border-t border-[var(--color-border)]">
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                      Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Products ────────────────────────────────────────────────── */}
      {featuredProducts.length > 0 && (
        <section
          className="py-24 md:py-32 bg-[var(--color-bg)] border-b border-[var(--color-border)]"
          aria-labelledby="featured-heading"
        >
          <div className="container-site">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <div className="space-y-4 max-w-xl">
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-text-muted)]">
                  Selected Items
                </span>
                <h2 id="featured-heading" className="text-4xl md:text-5xl font-serif text-[var(--color-text)] tracking-tight">
                  Featured Products
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] hover:gap-3 transition-all shrink-0"
              >
                Browse all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <ProductGrid
              products={featuredProducts.slice(0, 6)}
              categories={allCategories}
              columns={3}
            />

            <div className="flex justify-center mt-16 pt-8 border-t border-[var(--color-border)]">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 px-8 py-3 border border-[var(--color-border-strong)] text-[var(--color-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-surface)] transition-all duration-300 ease-out"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ─── Why Nexus Tyre ──────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 bg-[var(--color-surface)] border-b border-[var(--color-border)]"
        aria-labelledby="why-heading"
      >
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-text-muted)]">
              Why Nexus Tyre
            </span>
            <h2 id="why-heading" className="text-4xl md:text-5xl font-serif text-[var(--color-text)] tracking-tight leading-none">
              Your Mobility & Industrial Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
                title: "Detailed Information",
                desc: "Browse specifications, features, and product categories before making an enquiry.",
              },
              {
                title: "Mobility & Industrial",
                desc: "From electric three-wheelers to industrial incinerators — a diverse product catalogue.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col space-y-6"
              >
                <div className="text-sm font-serif italic text-[var(--color-text-muted)]">
                  0{i + 1}
                </div>
                <div className="space-y-3 pt-6 border-t border-[var(--color-border)]">
                  <h3 className="text-xl font-serif text-[var(--color-text)] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ─────────────────────────────────────────────────────── */}
      <div className="bg-[var(--color-bg)]">
        <ContactCTA />
      </div>
    </>
  );
}
