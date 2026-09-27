"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import { isConfigured } from "@/lib/contact/phone";
import {
  buildWhatsAppUrl,
  buildProductEnquiryMessage,
} from "@/lib/contact/whatsapp";
import { cn } from "@/lib/utils";

interface ProductActionsProps {
  productName: string;
  categoryName: string;
  layout?: "horizontal" | "vertical";
  className?: string;
}

export function ProductActions({
  productName,
  categoryName,
  layout = "horizontal",
  className,
}: ProductActionsProps) {
  const hasPhone = isConfigured(siteConfig.contact.phone);
  const hasWhatsApp = isConfigured(siteConfig.contact.whatsapp);

  const whatsappUrl = hasWhatsApp
    ? buildWhatsAppUrl(
        siteConfig.contact.whatsapp,
        buildProductEnquiryMessage(productName, categoryName)
      )
    : null;

  return (
    <div
      className={cn(
        "flex gap-4",
        layout === "horizontal" ? "flex-row flex-wrap items-center" : "flex-col",
        className
      )}
    >
      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-dark-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)] transition-all duration-300 ease-out"
          aria-label={`Enquire about ${productName} on WhatsApp`}
        >
          Enquire Now &rarr;
        </a>
      )}

      {hasPhone && (
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-border-strong)] text-[var(--color-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-surface)] transition-all duration-300 ease-out"
          aria-label="Call Nexus Tyre"
        >
          Call Us
        </a>
      )}

      {!whatsappUrl && !hasPhone && (
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-dark-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)] transition-all duration-300 ease-out"
        >
          Contact Us &rarr;
        </Link>
      )}
    </div>
  );
}
