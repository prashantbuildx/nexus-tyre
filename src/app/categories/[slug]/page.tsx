import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Tag } from "lucide-react";
import {
  getCategoryBySlug,
  getAllCategorySlugs,
  getAllCategories,
  getProductCountForCategory,
} from "@/application/category/category.service";
import { getProductsByCategory, getAllProducts } from "@/application/product/product.service";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductCatalogView } from "@/components/product/ProductCatalogView";
import { ContactCTA } from "@/components/contact/ContactCTA";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found | Nexus Tyre",
    };
  }

  return {
    title: `${category.name} Products | Nexus Tyre`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const allCategories = getAllCategories();
  const categoryProducts = getProductsByCategory(category.id);
  const otherCategories = allCategories.filter((c) => c.id !== category.id);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: category.name },
  ];

  return (
    <div className="py-8 md:py-12 bg-[var(--color-bg)] min-h-screen">
      <div className="container-site space-y-8">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Back Link */}
        <div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Categories</span>
          </Link>
        </div>

        {/* Category Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white p-8 md:p-12 shadow-md">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Tag className="w-3.5 h-3.5" />
              Category Portfolio
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              {category.name}
            </h1>
            <p className="text-base md:text-lg text-white/85 leading-relaxed">
              {category.description}
            </p>
            <div className="pt-2 text-sm font-semibold text-white/90">
              Total Models Available:{" "}
              <span className="text-[var(--color-accent)] font-bold">
                {categoryProducts.length}
              </span>
            </div>
          </div>

          {/* Decorative background shapes */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute right-32 top-0 -translate-y-16 w-64 h-64 rounded-full bg-[var(--color-accent)]/10 pointer-events-none" />
        </div>

        {/* Products in this category with filter and sort */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">
              Available {category.name} Models
            </h2>
          </div>

          <ProductCatalogView
            products={categoryProducts}
            categories={[category]}
            initialCategory={category.id}
            showCategoryFilter={false}
          />
        </div>

        {/* Other Categories explore */}
        <div className="pt-8 border-t border-[var(--color-border)] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-[var(--color-text)]">
                Explore Other Categories
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Discover complementary products and components across our product lines
              </p>
            </div>
            <Link
              href="/categories"
              className="text-sm font-semibold text-[var(--color-primary)] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {otherCategories.slice(0, 6).map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="p-3.5 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <span className="font-semibold text-xs text-[var(--color-text)] group-hover:text-[var(--color-primary)] line-clamp-1">
                  {cat.name}
                </span>
                <span className="text-[11px] text-[var(--color-muted)] mt-1">
                  {getProductCountForCategory(cat.id)} items
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ContactCTA
          title={`Order ${category.name} in Bulk?`}
          subtitle="Get priority supply pricing, customized branding, and logistics assistance for commercial quantities."
        />
      </div>
    </div>
  );
}
