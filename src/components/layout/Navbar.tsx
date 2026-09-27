"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, Phone, MessageCircle, X } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { siteConfig } from "@/config/site-config";
import { isConfigured } from "@/lib/contact/phone";
import {
  buildWhatsAppUrl,
  buildGeneralEnquiryMessage,
} from "@/lib/contact/whatsapp";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

const navLinks = siteConfig.navigation;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasWhatsApp = isConfigured(siteConfig.contact.whatsapp);
  const whatsappUrl = hasWhatsApp
    ? buildWhatsAppUrl(
        siteConfig.contact.whatsapp,
        buildGeneralEnquiryMessage()
      )
    : null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm py-2"
          : "bg-[var(--color-bg)] border-b border-[var(--color-border)] py-4"
      )}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-12 gap-4">
          {/* Logo */}
          <BrandLogo variant="dark" />

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-accent)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/search"
              className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="Search products"
            >
              <Search className="w-4 h-4" />
            </Link>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-dark-text)] uppercase tracking-widest text-[10px] font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)] transition-all duration-300 ease-out"
                aria-label="Enquire on WhatsApp"
              >
                Enquire
              </a>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[var(--color-dark-section)] text-[var(--color-dark-text)] uppercase tracking-widest text-[10px] font-medium rounded-sm hover:-translate-y-0.5 hover:bg-black transition-all duration-300 ease-out"
              >
                Contact
              </Link>
            )}
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/search"
              className="p-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
