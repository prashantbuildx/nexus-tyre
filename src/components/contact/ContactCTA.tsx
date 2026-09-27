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
        "rounded-2xl p-8 md:p-12",
        variant === "dark" && "bg-[var(--color-dark)]",
        variant === "light" && "bg-[var(--color-surface)] border border-[var(--color-border)]",
        variant === "accent" && "bg-[var(--color-primary)]",
        className
      )}
      aria-labelledby="contact-cta-heading"
    >
      <div className="max-w-2xl">
        <h2
          id="contact-cta-heading"
          className={cn(
            "text-h2 mb-3",
            variant === "light" ? "text-[var(--color-text)]" : "text-white"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mb-8 leading-relaxed",
            variant === "light"
              ? "text-[var(--color-muted)]"
              : "text-white/70"
          )}
        >
          {desc}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe5d] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire on WhatsApp
          </a>

          <a
            href={`tel:+${phoneNumber}`}
            className={cn(
              "flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-colors",
              variant === "light"
                ? "border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                : "border-white/30 text-white hover:bg-white/10"
            )}
          >
            <Phone className="w-4 h-4" />
            Call Nexus Tyre
          </a>

          <Link
            href="/contact"
            className={cn(
              "flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors",
              variant === "light"
                ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
            )}
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}