import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactCTAProps {
  title?: string;
  description?: string;
  subtitle?: string;
  variant?: "dark" | "light" | "accent";
  className?: string;
}

export function ContactCTA({
  title = "Need help finding the right product?",
  description,
  subtitle,
  variant = "dark",
  className,
}: ContactCTAProps) {
  const desc =
    description ??
    subtitle ??
    "Our team can help you find the right EV, tyre, battery, or industrial equipment for your needs.";

  const phoneNumber = "919643285193"; // Your WhatsApp Number with Country Code
  const defaultMessage = encodeURIComponent("Hi, I would like to enquire about your products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <section
      className={cn(
        "p-12 md:p-24 flex flex-col items-center text-center max-w-4xl mx-auto space-y-12 border-t border-[var(--color-border)]",
        className
      )}
      aria-labelledby="contact-cta-heading"
    >
      <div className="space-y-6">
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-text-muted)]">
          Commercial Inquiries
        </span>
        <h2
          id="contact-cta-heading"
          className="text-4xl md:text-6xl font-serif tracking-tight leading-none text-[var(--color-text)]"
        >
          {title}
        </h2>
        <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed">
          {desc}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-accent)] text-[var(--color-dark-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)] transition-all duration-300 ease-out"
        >
          Enquire on WhatsApp &rarr;
        </a>

        <a
          href={`tel:+${phoneNumber}`}
          className="inline-flex items-center justify-center px-8 py-3 border border-[var(--color-border-strong)] text-[var(--color-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-surface)] transition-all duration-300 ease-out"
        >
          Call Nexus Tyre
        </a>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-dark-section)] text-[var(--color-dark-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-black transition-all duration-300 ease-out"
        >
          Contact Us &rarr;
        </Link>
      </div>
    </section>
  );
}