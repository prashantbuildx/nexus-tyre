"use client";

import { useState, useCallback } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ProductSearchProps {
  defaultValue?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  navigateToSearch?: boolean;
  className?: string;
}

export function ProductSearch({
  defaultValue = "",
  placeholder = "Search e-rickshaw, tyre, battery…",
  onSearch,
  navigateToSearch = false,
  className,
}: ProductSearchProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      if (!navigateToSearch && onSearch) {
        onSearch(value);
      }
    },
    [navigateToSearch, onSearch]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (navigateToSearch) {
        const q = query.trim();
        if (q) {
          router.push(`/search?q=${encodeURIComponent(q)}`);
        } else {
          router.push("/products");
        }
      } else if (onSearch) {
        onSearch(query);
      }
    },
    [query, navigateToSearch, router, onSearch]
  );

  const handleClear = useCallback(() => {
    setQuery("");
    if (onSearch) onSearch("");
  }, [onSearch]);

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative", className)}
      role="search"
      aria-label="Search products"
    >
      <label htmlFor="product-search" className="sr-only">
        Search products
      </label>
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)] pointer-events-none"
        aria-hidden="true"
      />
      <input
        id="product-search"
        type="search"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-11 pl-10 pr-10 rounded-xl border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all"
        autoComplete="off"
        spellCheck="false"
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:bg-[var(--color-border-strong)] transition-colors"
          aria-label="Clear search"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </form>
  );
}
