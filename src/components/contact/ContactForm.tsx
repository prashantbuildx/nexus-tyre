"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  category: string;
  enquiryType: string;
  message: string;
}

const CATEGORIES = [
  "E-Rickshaw (Passenger / Loader)",
  "E-Scooty",
  "Tyres, Tubes & Rims",
  "EV Batteries & Power Packs",
  "EV Smart Chargers",
  "Garbage Collection Vehicles",
  "Vending Machines",
  "Incinerators",
  "Bulk Fleet / Dealership Enquiry",
  "Other Industrial Products",
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    category: "E-Rickshaw (Passenger / Loader)",
    enquiryType: "Commercial / Wholesale",
    message: "",
  });

  const phoneNumber = "919643285193"; // Your WhatsApp Number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the WhatsApp message format
    const text = `*New Website Enquiry - Nexus Tyre*
*Name:* ${formData.name.trim() || "Not specified"}
*Phone:* ${formData.phone.trim() || "Not specified"}
${formData.email.trim() ? `*Email:* ${formData.email.trim()}\n` : ""}*Enquiry Type:* ${formData.enquiryType}
*Category:* ${formData.category}
*Message:* ${formData.message.trim() || "Requesting product details and pricing quotation."}`;

    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");

    // Optional: Reset form after sending
    setFormData({
      name: "",
      phone: "",
      email: "",
      category: CATEGORIES[0],
      enquiryType: "Commercial / Wholesale",
      message: "",
    });
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[var(--color-border)] shadow-sm space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Send Product or Bulk Enquiry
        </h2>
        <p className="text-sm text-[var(--color-muted)]">
          Fill in your details below. Your enquiry will be sent directly to our commercial team via WhatsApp for an immediate response.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ramesh Kumar"
              className="w-full h-11 px-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className="w-full h-11 px-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. ramesh@example.com"
              className="w-full h-11 px-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
              Enquiry Type
            </label>
            <select
              value={formData.enquiryType}
              onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
              className="w-full h-11 px-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] cursor-pointer"
            >
              <option value="Commercial / Wholesale">Commercial Fleet / Wholesale</option>
              <option value="Retail / Individual Purchase">Retail / Individual Purchase</option>
              <option value="Dealership / Distribution">Dealership / Dealership Inquiry</option>
              <option value="Institutional / Government Tender">Institutional / Municipal Tender</option>
              <option value="Technical Support / Spares">Technical Support / Spares</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
            Product Category of Interest
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full h-11 px-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] cursor-pointer"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
            Requirement Details / Specifications
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Please specify quantity required, vehicle model preferences, battery capacity needs, destination city, or questions..."
            className="w-full p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all resize-none"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 h-14 px-6 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#1ebe5d] transition-colors shadow-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Enquiry via WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
}