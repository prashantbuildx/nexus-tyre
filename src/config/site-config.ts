// Site configuration - replace placeholder values with real business data

import type { SiteConfig } from "@/domain/contact/contact.types";

export const siteConfig: SiteConfig = {
  name: "Nexus Tyre",
  shortName: "Nexus Tyre",
  description:
    "Nexus Tyre supplies e-rickshaws, electric scooties, tyres, tubes, rims, EV batteries, chargers, and industrial equipment including garbage vehicles, vending machines, and incinerators.",
  tagline: "EV Mobility, Tyres & Industrial Solutions",
  url: "https://nexustyre.in", // Replace with actual domain

  contact: {
    phone: "", // e.g. "+91 98765 43210"
    whatsapp: "", // e.g. "919876543210"
    email: "", // e.g. "info@nexustyre.in"
  },

  location: {
    address: "", // e.g. "123, Industrial Area, Phase II"
    city: "", // e.g. "Delhi"
    state: "", // e.g. "Delhi"
    pincode: "", // e.g. "110001"
    mapsUrl: "", // Google Maps share URL
  },

  businessHours: {
    weekdays: "Monday – Saturday: 9:00 AM – 7:00 PM",
    saturday: "9:00 AM – 7:00 PM",
    sunday: "Closed",
  },

  social: {
    // Add social links when available
  },

  navigation: [
    { label: "Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
