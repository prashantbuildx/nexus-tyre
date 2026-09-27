import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Truck, Headphones, ChevronRight, ArrowLeft } from "lucide-react";
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProductsForProduct,
} from "@/application/product/product.service";
import { getCategoryBySlug, getAllCategories } from "@/application/category/category.service";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductPrice } from "@/components/product/ProductPrice";
import { ProductAvailability } from "@/components/product/ProductAvailability";
import { ProductSpecifications } from "@/components/product/ProductSpecifications";
import { ProductActions } from "@/components/product/ProductActions";
import { ProductCard } from "@/components/product/ProductCard";
import { ContactCTA } from "@/components/contact/ContactCTA";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Nexus Tyre",
    };
  }

  return {
    title: `${product.name} | Nexus Tyre`,
    description: product.shortDescription || product.description,
    openGraph: {
      title: `${product.name} | Nexus Tyre`,
      description: product.shortDescription,
      images: product.images[0]?.src ? [{ url: product.images[0].src }] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allCategories = getAllCategories();
  const category = allCategories.find((c) => c.id === product.categoryId);
  const relatedProducts = getRelatedProductsForProduct(product, 3);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    ...(category
      ? [{ label: category.name, href: `/categories/${category.slug}` }]
      : []),
    { label: product.name },
  ];

  return (
    <div className="py-8 md:py-12 bg-[var(--color-bg)] min-h-screen">
      <div className="container-site space-y-10">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Back link */}
        <div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Main Product Section: Gallery & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[var(--color-border)] shadow-sm">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-6">
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {category && (
                  <Link
                    href={`/categories/${category.slug}`}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--color-primary)]/15 transition-colors"
                  >
                    {category.name}
                  </Link>
                )}
                {product.availability && (
                  <ProductAvailability availability={product.availability} />
                )}
                {product.featured && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 text-xs font-semibold">
                    Featured Model
                  </span>
                )}
              </div>

              {/* Title & Brand/Model */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--color-text)] tracking-tight leading-tight">
                  {product.name}
                </h1>
                {(product.brand || product.model) && (
                  <p className="text-sm font-medium text-[var(--color-muted)] mt-1">
                    {product.brand && <span>Brand: <strong className="text-[var(--color-text)]">{product.brand}</strong></span>}
                    {product.brand && product.model && <span> • </span>}
                    {product.model && <span>Model: <strong className="text-[var(--color-text)]">{product.model}</strong></span>}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="py-2">
                <ProductPrice
                  priceType={product.priceType}
                  price={product.price}
                  currency={product.currency}
                  size="lg"
                />
              </div>

              {/* Short Description */}
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Quick Spec Highlights */}
              {product.specifications.length > 0 && (
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  {product.specifications.slice(0, 4).map((spec, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col"
                    >
                      <span className="text-[11px] font-semibold uppercase text-[var(--color-muted)] tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-sm font-bold text-[var(--color-text)] mt-0.5 truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA and Commercial Highlights */}
            <div className="space-y-6 pt-4 border-t border-[var(--color-border)]">
              {/* Action Buttons */}
              <ProductActions
                productName={product.name}
                categoryName={category?.name || "Product"}
                layout="horizontal"
              />

              {/* Commercial Assurance Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs">
                <div className="flex items-center gap-2.5 text-[var(--color-text-secondary)]">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                  <span>Quality Inspected & Commercial Grade</span>
                </div>
                <div className="flex items-center gap-2.5 text-[var(--color-text-secondary)]">
                  <Truck className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                  <span>Direct Delivery & Wholesale Logistics</span>
                </div>
                <div className="flex items-center gap-2.5 text-[var(--color-text-secondary)]">
                  <Headphones className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                  <span>Dedicated B2B Support & Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description & Full Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Detailed Overview */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-text)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
              <span>Product Overview & Capabilities</span>
            </h2>
            <div className="text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
              {product.description}
            </div>

            {product.tags && product.tags.length > 0 && (
              <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap gap-1.5 items-center">
                <span className="text-xs font-semibold text-[var(--color-muted)] mr-2">
                  Keywords:
                </span>
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[var(--color-surface-2)] text-xs text-[var(--color-muted)] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Technical Specifications */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[var(--color-border)] shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-text)]">
              Technical Specifications
            </h2>
            {product.specifications.length > 0 ? (
              <ProductSpecifications specifications={product.specifications} />
            ) : (
              <p className="text-sm text-[var(--color-muted)]">
                Detailed technical specifications and custom modifications are available on direct enquiry.
              </p>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-text)]">
                  Related Products
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Other options and complementary equipment in this category
                </p>
              </div>
              <Link
                href={category ? `/categories/${category.slug}` : "/products"}
                className="flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                <span>View More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  categoryName={category?.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="pt-6">
          <ContactCTA
            title={`Looking for Quotes on ${product.name}?`}
            subtitle="Connect directly with our commercial desk for volume pricing, compatibility advice, and delivery schedules."
          />
        </div>
      </div>
    </div>
  );
}
