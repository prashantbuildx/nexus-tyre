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
    <footer className="bg-[var(--color-dark-section)] text-[var(--color-dark-text)]">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="container-site py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/50">
                Direct Contact
              </span>
              <h2 className="text-3xl font-serif text-[var(--color-dark-text)] tracking-tight">Talk to Nexus Tyre</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-dark-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)] transition-all duration-300 ease-out"
                >
                  Enquire on WhatsApp &rarr;
                </a>
              )}
              {hasPhone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-[var(--color-dark-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-white/5 transition-all duration-300 ease-out"
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
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <BrandLogo variant="light" linkable={true} />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs pr-4">
              {siteConfig.description}
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 pt-4">
              {hasPhone && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              )}
              {hasEmail && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {siteConfig.contact.email}
                </a>
              )}
              {hasAddress && (
                <div className="flex items-start gap-3 text-xs uppercase tracking-wider text-white/50 leading-relaxed">
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
            <h3 className="text-[10px] font-medium text-white/50 mb-6 uppercase tracking-[0.2em]">
              Products
            </h3>
            <ul className="flex flex-col gap-4">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[10px] font-medium text-white/50 mb-6 uppercase tracking-[0.2em]">
              Company
            </h3>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="text-[10px] font-medium text-white/50 mb-6 uppercase tracking-[0.2em]">
              Business Hours
            </h3>
            <div className="flex flex-col gap-3 text-xs uppercase tracking-widest text-white/70">
              <p>{siteConfig.businessHours.weekdays}</p>
              <p>Sunday: {siteConfig.businessHours.sunday}</p>
            </div>

            {hasMapsUrl && (
              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-accent)] hover:text-white transition-colors"
              >
                Get Directions <ArrowRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Nexus Tyre. All rights reserved.
          </p>
          <p className="text-center md:text-right">Product information is subject to change. <br className="md:hidden" />Contact us for current availability.</p>
        </div>
      </div>
    </footer>
  );
}
