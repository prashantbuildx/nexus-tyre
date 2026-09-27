import Link from "next/link";
import { ArrowLeft, Home, Search, Package } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 md:py-32 bg-[var(--color-bg)] min-h-[70vh] flex items-center justify-center">
      <div className="container-site max-w-xl text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mx-auto text-3xl font-black">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-base text-[var(--color-muted)] leading-relaxed">
            The product, category, or page you are looking for might have been moved, renamed, or is currently unavailable in the catalogue.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text)] text-sm font-semibold hover:bg-[var(--color-surface-2)] transition-colors"
          >
            <Package className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text)] text-sm font-semibold hover:bg-[var(--color-surface-2)] transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search Catalogue</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
