"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { siteConfig } from "@/config/site-config";
import { isConfigured } from "@/lib/contact/phone";
import { buildWhatsAppUrl, buildGeneralEnquiryMessage } from "@/lib/contact/whatsapp";
import { cn } from "@/lib/utils";

const navLinks = siteConfig.navigation;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  const hasWhatsApp = isConfigured(siteConfig.contact.whatsapp);
  const whatsappUrl = hasWhatsApp
    ? buildWhatsAppUrl(siteConfig.contact.whatsapp, buildGeneralEnquiryMessage())
    : null;
  const hasPhone = isConfigured(siteConfig.contact.phone);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-[var(--color-dark-section)]/80 backdrop-blur-sm animate-fade-in"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-80 bg-[var(--color-bg)] border-l border-[var(--color-border)] shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-[var(--color-border)]">
          <BrandLogo variant="dark" linkable={false} />
          <button
            onClick={close}
            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col p-6 gap-6 flex-1 overflow-y-auto" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={cn(
                "flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] transition-colors pb-4 border-b border-[var(--color-border)]",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-[var(--color-accent)] border-[var(--color-accent)]"
                  : "text-[var(--color-text)] hover:text-[var(--color-accent)]"
              )}
            >
              {link.label}
              <ArrowRight className="w-4 h-4 opacity-40" />
            </Link>
          ))}
        </nav>

        {/* Contact CTAs */}
        <div className="p-6 border-t border-[var(--color-border)] flex flex-col gap-4">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-[var(--color-accent)] text-[var(--color-dark-text)] uppercase tracking-widest text-[10px] font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)] transition-all duration-300 ease-out"
            >
              Enquire on WhatsApp
            </a>
          )}
          {hasPhone && (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              onClick={close}
              className="flex items-center justify-center gap-3 px-6 py-4 border border-[var(--color-border-strong)] text-[var(--color-text)] uppercase tracking-widest text-[10px] font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-surface)] transition-all duration-300 ease-out"
            >
              Call Nexus Tyre
            </a>
          )}
          {!whatsappUrl && !hasPhone && (
            <Link
              href="/contact"
              onClick={close}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-[var(--color-dark-section)] text-[var(--color-dark-text)] uppercase tracking-widest text-[10px] font-medium rounded-sm hover:-translate-y-0.5 hover:bg-black transition-all duration-300 ease-out"
            >
              Contact Us
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
