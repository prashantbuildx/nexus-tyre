"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, MessageCircle, Phone } from "lucide-react";
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
        className="p-2 rounded-lg text-[var(--color-text)] hover:bg-[var(--color-surface-2)] transition-colors"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm animate-fade-in"
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
          "fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-[var(--color-border)]">
          <BrandLogo variant="dark" linkable={false} />
          <button
            onClick={close}
            className="p-2 rounded-lg text-[var(--color-muted)] hover:bg-[var(--color-surface-2)] transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-2)]"
              )}
            >
              {link.label}
              <ChevronRight className="w-4 h-4 opacity-40" />
            </Link>
          ))}
        </nav>

        {/* Contact CTAs */}
        <div className="p-4 border-t border-[var(--color-border)] flex flex-col gap-2">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
          )}
          {hasPhone && (
            <a
              href={`tel:${siteConfig.contact.phone}`}
              onClick={close}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[var(--color-primary)] text-[var(--color-primary)] font-medium text-sm hover:bg-[var(--color-primary)]/5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Nexus Tyre
            </a>
          )}
          {!whatsappUrl && !hasPhone && (
            <Link
              href="/contact"
              onClick={close}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[var(--color-primary)] text-white font-medium text-sm hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Contact Us
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
