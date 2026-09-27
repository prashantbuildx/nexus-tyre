import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { siteConfig } from "@/config/site-config";
import { isConfigured } from "@/lib/contact/phone";
import { buildWhatsAppUrl, buildGeneralEnquiryMessage } from "@/lib/contact/whatsapp";
import { Phone, MessageCircle, MapPin, Mail, ArrowRight } from "lucide-react";

const productLinks = [
  { label: "E-Rickshaw", href: "/categories/e-rickshaw" },
  { label: "E-Scooty", href: "/categories/e-scooty" },
  { label: "Tyres & Tubes", href: "/categories/tyres" },
  { label: "EV Batteries", href: "/categories/ev-batteries" },
  { label: "EV Chargers", href: "/categories/ev-chargers" },
  { label: "Garbage Solutions", href: "/categories/garbage-solutions" },
];

const companyLinks = [
  { label: "About Nexus Tyre", href: "/about" },
  { label: "All Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const hasPhone = isConfigured(siteConfig.contact.phone);
  const hasWhatsApp = isConfigured(siteConfig.contact.whatsapp);
  const hasEmail = isConfigured(siteConfig.contact.email);
  const hasAddress = isConfigured(siteConfig.location.address);
  const hasMapsUrl = isConfigured(siteConfig.location.mapsUrl);

  const whatsappUrl = hasWhatsApp
    ? buildWhatsAppUrl(siteConfig.contact.whatsapp, buildGeneralEnquiryMessage())
    : null;

  return (
    <footer
      style={{ background: "var(--color-dark)" }}
      className="text-white"
    >
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="container-site py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-[var(--color-muted-light)] text-sm mb-1">
                Looking for a specific product?
              </p>
              <h2 className="text-h3 text-white">Talk to Nexus Tyre.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-medium text-sm hover:bg-[#1ebe5d] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire on WhatsApp
                </a>
              )}
              {hasPhone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Nexus Tyre
                </a>
              )}
              {!whatsappUrl && !hasPhone && (
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-[var(--color-primary)] font-medium text-sm hover:bg-[var(--color-accent-dark)] transition-colors"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-site py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <BrandLogo variant="light" linkable={true} />
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>

            {/* Contact Info */}
            <div className="mt-6 flex flex-col gap-3">
              {hasPhone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              )}
              {hasEmail && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {siteConfig.contact.email}
                </a>
              )}
              {hasAddress && (
                <div className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.location.address}
                    {siteConfig.location.city && `, ${siteConfig.location.city}`}
                    {siteConfig.location.state && `, ${siteConfig.location.state}`}
                    {siteConfig.location.pincode && ` – ${siteConfig.location.pincode}`}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Products
            </h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Business Hours
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <p>{siteConfig.businessHours.weekdays}</p>
              <p>Sunday: {siteConfig.businessHours.sunday}</p>
            </div>

            {hasMapsUrl && (
              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors font-medium"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Nexus Tyre. All rights reserved.
          </p>
          <p>Product information is subject to change. Contact us for current availability.</p>
        </div>
      </div>
    </footer>
  );
}
