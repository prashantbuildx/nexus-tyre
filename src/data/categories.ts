// Static category data — replace with API data in future phases

import type { Category } from "@/domain/category/category.types";

export const categoriesData: Category[] = [
  {
    id: "e-rickshaw",
    name: "E-Rickshaw",
    slug: "e-rickshaw",
    description:
      "Complete electric three-wheeler solutions for passenger and cargo transport, including vehicles and all related components.",
    image: "/images/categories/e-rickshaw.webp",
    icon: "Truck",
    featured: true,
    active: true,
    sortOrder: 1,
  },
  {
    id: "e-scooty",
    name: "E-Scooty",
    slug: "e-scooty",
    description:
      "Electric two-wheeler solutions for urban and last-mile mobility, with matching batteries and chargers.",
    image: "/images/categories/e-scooty.webp",
    icon: "Zap",
    featured: true,
    active: true,
    sortOrder: 2,
  },
  {
    id: "tyres",
    name: "Tyres",
    slug: "tyres",
    description:
      "Wide range of tyres for electric vehicles, three-wheelers, two-wheelers, and light commercial vehicles.",
    image: "/images/categories/e-rickshaw-tyre-1.webp",
    icon: "Circle",
    featured: true,
    active: true,
    sortOrder: 3,
  },
  {
    id: "tubes",
    name: "Tubes",
    slug: "tubes",
    description:
      "Quality inner tubes compatible with a variety of tyre sizes for EV and conventional vehicles.",
    image: "/images/categories/e-rickshaw-tube-1.webp",
    icon: "Circle",
    featured: false,
    active: true,
    sortOrder: 4,
  },
  {
    id: "rims",
    name: "Rims",
    slug: "rims",
    description:
      "Steel and alloy rims for e-rickshaws, electric scooties, and light vehicles.",
    image: "/images/categories/e-rickshaw-rim-1.webp",
    icon: "Circle",
    featured: false,
    active: true,
    sortOrder: 5,
  },
  {
    id: "ev-batteries",
    name: "EV Batteries",
    slug: "ev-batteries",
    description:
      "High-performance batteries for electric vehicles including e-rickshaws and e-scooties.",
    image: "/images/categories/e-rickshaw-battery-1.webp",
    icon: "Battery",
    featured: true,
    active: true,
    sortOrder: 6,
  },
  {
    id: "ev-chargers",
    name: "EV Chargers",
    slug: "ev-chargers",
    description:
      "Chargers for electric vehicle batteries, compatible with a range of e-rickshaw and e-scooty models.",
    image: "/images/categories/e-rickshaw-charger-1.webp",
    icon: "Zap",
    featured: false,
    active: true,
    sortOrder: 7,
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description:
      "EV accessories and spare parts to keep your electric vehicles running efficiently.",
    image: "/images/categories/electric-scooty1.webp",
    icon: "Package",
    featured: false,
    active: true,
    sortOrder: 8,
  },
  {
    id: "garbage-solutions",
    name: "Garbage Solutions",
    slug: "garbage-solutions",
    description:
      "Electric and manual garbage collection vehicles and containers for municipal and industrial waste management.",
    image: "/images/categories/garbage-vehicle-1.webp",
    icon: "Truck",
    featured: true,
    active: true,
    sortOrder: 9,
  },
  {
    id: "vending-machines",
    name: "Vending Machines",
    slug: "vending-machines",
    description:
      "Automated vending machine solutions for commercial and institutional use.",
    image: "/images/categories/vending-machine-1.webp",
    icon: "Package",
    featured: false,
    active: true,
    sortOrder: 10,
  },
  {
    id: "incinerators",
    name: "Incinerators",
    slug: "incinerators",
    description:
      "Industrial incinerators for efficient and environmentally managed waste disposal.",
    image: "/images/categories/incinerators.webp",
    icon: "Flame",
    featured: false,
    active: true,
    sortOrder: 11,
  },
  {
    id: "other-products",
    name: "Other Products",
    slug: "other-products",
    description:
      "Additional mobility and industrial products available through Nexus Tyre.",
    image: "/images/categories/garbage-container-1.webp",
    icon: "Package",
    featured: false,
    active: true,
    sortOrder: 12,
  },
];
