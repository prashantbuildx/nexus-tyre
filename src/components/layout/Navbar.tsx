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
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
          : "bg-white border-b border-[var(--color-border)]"
      )}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <BrandLogo variant="dark" />

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/search"
              className="p-2 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-colors"
              aria-label="Search products"
            >
              <Search className="w-4.5 h-4.5" />
            </Link>

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#1ebe5d] transition-colors"
                aria-label="Enquire on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            )}

            {!whatsappUrl && (
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
            )}
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/search"
              className="p-2 text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
