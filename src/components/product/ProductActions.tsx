"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
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
        "flex gap-3",
        layout === "horizontal" ? "flex-row flex-wrap" : "flex-col",
        className
      )}
    >
      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe5d] transition-colors"
          aria-label={`Enquire about ${productName} on WhatsApp`}
        >
          <MessageCircle className="w-4 h-4" />
          Enquire on WhatsApp
        </a>
      )}

      {hasPhone && (
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold text-sm hover:bg-[var(--color-primary)]/5 transition-colors"
          aria-label="Call Nexus Tyre"
        >
          <Phone className="w-4 h-4" />
          Call Nexus Tyre
        </a>
      )}

      {!whatsappUrl && !hasPhone && (
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          Contact Nexus Tyre
        </Link>
      )}
    </div>
  );
}
