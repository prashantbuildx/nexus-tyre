import type { Metadata } from "next";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  Truck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site-config";
import { isConfigured } from "@/lib/contact/phone";
import { buildWhatsAppUrl, buildGeneralEnquiryMessage } from "@/lib/contact/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us & Commercial Enquiries | Nexus Tyre",
  description:
    "Get in touch with Nexus Tyre for commercial quotes, dealership inquiries, bulk orders of e-rickshaws, tyres, EV batteries, chargers, and industrial utility equipment.",
};

const FAQS = [
  {
    q: "Do you supply vehicles, batteries, and tyres for bulk fleet orders?",
    a: "Yes. We specialize in B2B supply contracts for commercial fleet operators, municipal bodies, and regional distributors. Volume-tiered commercial pricing and scheduled batch deliveries are available upon enquiry.",
  },
  {
    q: "Can I inspect the e-rickshaws or machinery before making a bulk purchase?",
    a: "Certainly. Buyers and institutional procurement representatives can schedule an in-person demonstration and physical vehicle inspection at our facility.",
  },
  {
    q: "Are your EV batteries and chargers compatible with other electric rickshaw brands?",
    a: "Our lithium and lead-acid battery packs and high-efficiency smart chargers are engineered with standard industrial connectors and voltage ratings compatible with major Indian e-rickshaw chassis.",
  },
  {
    q: "What is your typical delivery timeline for wholesale tyre and equipment orders?",
    a: "Standard in-stock tyres, tubes, rims, and battery units dispatch within 24 to 48 hours. Built-to-order vehicles, specialized garbage tippers, and custom industrial machinery adhere to scheduled manufacturing timelines agreed upon order confirmation.",
  },
  {
    q: "How can I apply for a regional dealership or franchise distribution?",
    a: "Select 'Dealership / Distribution' on our enquiry form or contact our commercial desk directly via phone or WhatsApp with your business profile and territory details.",
  },
];

export default function ContactPage() {
  const hasPhone = isConfigured(siteConfig.contact.phone);
  const hasWhatsApp = isConfigured(siteConfig.contact.whatsapp);
  const hasEmail = isConfigured(siteConfig.contact.email);
  const hasAddress = isConfigured(siteConfig.location.address);

  const whatsappUrl = hasWhatsApp
    ? buildWhatsAppUrl(
        siteConfig.contact.whatsapp,
        buildGeneralEnquiryMessage()
      )
    : "https://wa.me/";

  return (
    <div className="py-8 md:py-16 bg-[var(--color-bg)] min-h-screen">
      <div className="container-site space-y-12">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact Us" },
          ]}
        />

        {/* Hero Section */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
            Direct Commercial Assistance
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
            Connect With Our Commercial Desk
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
            Whether you require single vehicle units, tyre container shipments, EV battery replacement packs, or municipal utility solutions, our team is ready to assist.
          </p>
        </div>

        {/* Main Grid: Form + Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Info */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--color-border)] shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[var(--color-text)]">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/15 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#1ebe5d] uppercase tracking-wider">
                      Instant WhatsApp Chat
                    </div>
                    <div className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[#1ebe5d] transition-colors">
                      {hasWhatsApp ? siteConfig.contact.whatsapp : "Chat on WhatsApp"}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                {hasPhone && (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider">
                        Call Direct
                      </div>
                      <div className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                        {siteConfig.contact.phone}
                      </div>
                    </div>
                  </a>
                )}

                {/* Email */}
                {hasEmail && (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider">
                        Email Desk
                      </div>
                      <div className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors truncate">
                        {siteConfig.contact.email}
                      </div>
                    </div>
                  </a>
                )}

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider">
                      Facility & Showroom
                    </div>
                    <div className="text-sm text-[var(--color-text)] leading-relaxed">
                      {hasAddress ? (
                        <>
                          {siteConfig.location.address}
                          {siteConfig.location.city && `, ${siteConfig.location.city}`}
                          {siteConfig.location.state && `, ${siteConfig.location.state}`}
                          {siteConfig.location.pincode && ` - ${siteConfig.location.pincode}`}
                        </>
                      ) : (
                        "Commercial Industrial Hub, India"
                      )}
                    </div>
                    {siteConfig.location.mapsUrl && (
                      <a
                        href={siteConfig.location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xs font-semibold text-[var(--color-primary)] hover:underline pt-1"
                      >
                        View on Google Maps →
                      </a>
                    )}
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider">
                      Business Hours
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] space-y-0.5">
                      <div>{siteConfig.businessHours.weekdays}</div>
                      <div>Sunday: {siteConfig.businessHours.sunday}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wholesale & Fleet Supply Notice */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white shadow-md space-y-3">
              <div className="flex items-center gap-2 font-bold text-base">
                <Truck className="w-5 h-5 text-[var(--color-accent)]" />
                <span>Pan-India Logistics & Delivery</span>
              </div>
              <p className="text-xs text-white/85 leading-relaxed">
                We coordinate freight transit and container dispatch for tyre shipments, vehicle orders, and heavy equipment across regional depots and commercial transport terminals.
              </p>
            </div>
          </div>
        </div>

        {/* Commercial FAQs Section */}
        <div className="space-y-6 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text)]">
              Common Commercial Queries
            </h2>
            <p className="text-sm text-[var(--color-muted)]">
              Answers to frequent questions from fleet owners, procurement managers, and commercial dealers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[var(--color-border)] shadow-sm space-y-2"
              >
                <h3 className="font-bold text-sm sm:text-base text-[var(--color-text)] flex items-start gap-2">
                  <span className="text-[var(--color-primary)] font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
