import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Truck, Headphones, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
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
    <div className="bg-[var(--color-bg)] min-h-screen text-[var(--color-text)]">
      <div className="container-site space-y-16 md:space-y-24 py-16 md:py-24">
        {/* Navigation & Breadcrumbs */}
        <div className="space-y-4">
          <Breadcrumbs items={breadcrumbs} />
          <div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:-translate-x-1 transition-all"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back to All Products</span>
            </Link>
          </div>
        </div>

        {/* Main Product Section: Gallery & Details */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start animate-fade-in-up">
          {/* Left Column: Gallery */}
          <div className="lg:w-1/2 w-full">
            <div className="overflow-hidden border border-[var(--color-border)]">
              <ProductGallery
                images={product.images}
                productName={product.name}
              />
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:w-1/2 w-full flex flex-col space-y-10">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                {category && (
                  <Link
                    href={`/categories/${category.slug}`}
                    className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {category.name}
                  </Link>
                )}
                {product.availability && (
                  <ProductAvailability availability={product.availability} />
                )}
              </div>

              {/* Title & Brand/Model */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-text)] tracking-tight leading-none">
                  {product.name}
                </h1>
                {(product.brand || product.model) && (
                  <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] pt-2">
                    {product.brand && <span>Brand: <strong className="text-[var(--color-text)] font-medium">{product.brand}</strong></span>}
                    {product.brand && product.model && <span className="mx-2">|</span>}
                    {product.model && <span>Model: <strong className="text-[var(--color-text)] font-medium">{product.model}</strong></span>}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="py-2 text-2xl font-serif text-[var(--color-text)]">
                <ProductPrice
                  priceType={product.priceType}
                  price={product.price}
                  currency={product.currency}
                  size="lg"
                />
              </div>

              {/* Short Description */}
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Quick Spec Highlights */}
              {product.specifications.length > 0 && (
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--color-border)]">
                  {product.specifications.slice(0, 4).map((spec, i) => (
                    <div key={i} className="flex flex-col space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                        {spec.label}
                      </span>
                      <span className="text-lg font-serif text-[var(--color-text)] truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA and Commercial Highlights */}
            <div className="space-y-8 pt-8 border-t border-[var(--color-border)]">
              <ProductActions
                productName={product.name}
                categoryName={category?.name || "Product"}
                layout="horizontal"
              />

              {/* Commercial Assurance Highlights */}
              <div className="flex flex-col space-y-4 pt-8 border-t border-[var(--color-border)] text-sm">
                <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <span className="leading-relaxed">Quality Inspected & Commercial Grade</span>
                </div>
                <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
                  <Truck className="w-5 h-5 shrink-0" />
                  <span className="leading-relaxed">Direct Delivery & Wholesale Logistics</span>
                </div>
                <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
                  <Headphones className="w-5 h-5 shrink-0" />
                  <span className="leading-relaxed">Dedicated B2B Support & Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description & Full Specifications */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 animate-fade-in-up border-t border-[var(--color-border)] pt-16">
          {/* Detailed Overview */}
          <div className="lg:w-7/12 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-text)] tracking-tight leading-none">
              Product Overview & Capabilities
            </h2>
            <div className="text-lg text-[var(--color-text-muted)] leading-relaxed space-y-6 whitespace-pre-line">
              {product.description}
            </div>

            {product.tags && product.tags.length > 0 && (
              <div className="pt-8 border-t border-[var(--color-border)] flex flex-wrap gap-3 items-center">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] mr-2">
                  Keywords:
                </span>
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-[var(--color-text)] font-medium uppercase tracking-widest"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Technical Specifications */}
          <div className="lg:w-5/12 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-text)] tracking-tight leading-none">
              Technical Specs
            </h2>
            {product.specifications.length > 0 ? (
              <div className="space-y-0 border-t border-[var(--color-border)]">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-[var(--color-border)] py-4">
                    <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">{spec.label}</span>
                    <span className="text-base text-[var(--color-text)] text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Detailed technical specifications and custom modifications are available on direct enquiry.
              </p>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-12 animate-fade-in-up border-t border-[var(--color-border)] pt-16">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--color-text-muted)]">
                  More Options
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-text)] tracking-tight leading-none">
                  Related Products
                </h3>
                <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                  Other options and complementary equipment in this category
                </p>
              </div>
              <Link
                href={category ? `/categories/${category.slug}` : "/products"}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] hover:gap-3 transition-all"
              >
                <span>View More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>

      {/* Bottom CTA */}
      <div className="animate-fade-in-up">
        <ContactCTA
          title={`Looking for Quotes on ${product.name}?`}
          subtitle="Connect directly with our commercial desk for volume pricing, compatibility advice, and delivery schedules."
        />
      </div>
    </div>
  );
}
