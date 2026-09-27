// Static product data — placeholder products for development
// Replace or extend this data with real product information
// All prices marked CONTACT_FOR_PRICE are placeholders

import type { Product } from "@/domain/product/product.types";

export const productsData: Product[] = [
  // ─── E-RICKSHAW ──────────────────────────────────────────────────────────────
  {
    id: "er-001",
    slug: "passenger-e-rickshaw",
    name: "Passenger E-Rickshaw",
    shortDescription:
      "Electric three-wheeler for passenger transport with comfortable seating and reliable performance.",
    description:
      "A reliable electric three-wheeler designed for passenger transport in urban and semi-urban environments. Built for durability and economical daily operation. Specifications available on enquiry.",
    categoryId: "e-rickshaw",
    type: "VEHICLE",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "AVAILABLE",
    images: [
      {
        id: "er-001-img-1",
        src: "/images/products/erickshaw/passenger-e-rickshaw-1.webp",
        alt: "Passenger E-Rickshaw front view",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/erickshaw/passenger-e-rickshaw-1.webp",
    specifications: [
      { label: "Type", value: "Passenger", group: "General" },
      {
        label: "Seating Capacity",
        value: "Specification available on enquiry",
        group: "General",
      },
      {
        label: "Battery",
        value: "Specification available on enquiry",
        group: "Battery & Motor",
      },
      {
        label: "Motor",
        value: "Specification available on enquiry",
        group: "Battery & Motor",
      },
      {
        label: "Range",
        value: "Specification available on enquiry",
        group: "Performance",
      },
      {
        label: "Charging Time",
        value: "Specification available on enquiry",
        group: "Performance",
      },
    ],
    features: [
      "Electric powertrain for zero tailpipe emissions",
      "Low operating cost",
      "Suitable for urban and semi-urban routes",
      "Comfortable passenger seating",
    ],
    tags: ["EV", "Mobility", "Commercial", "E-Rickshaw", "Passenger"],
    featured: true,
    active: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "er-002",
    slug: "cargo-e-rickshaw",
    name: "Cargo E-Rickshaw",
    shortDescription:
      "Electric cargo three-wheeler for last-mile delivery and goods transport.",
    description:
      "An electric cargo three-wheeler designed for efficient goods transport and last-mile delivery. Ideal for commercial deliveries, municipal work, and small business logistics.",
    categoryId: "e-rickshaw",
    type: "VEHICLE",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "AVAILABLE",
    images: [
      {
        id: "er-002-img-1",
        src: "/images/products/erickshaw/cargo-e-rickshaw-1.webp",
        alt: "Cargo E-Rickshaw side view",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/erickshaw/cargo-e-rickshaw-1.webp",
    specifications: [
      { label: "Type", value: "Cargo", group: "General" },
      {
        label: "Payload Capacity",
        value: "Specification available on enquiry",
        group: "General",
      },
      {
        label: "Battery",
        value: "Specification available on enquiry",
        group: "Battery & Motor",
      },
      {
        label: "Motor",
        value: "Specification available on enquiry",
        group: "Battery & Motor",
      },
    ],
    features: [
      "High payload capacity for goods transport",
      "Electric powertrain — economical to operate",
      "Suitable for last-mile delivery",
      "Flat cargo platform available",
    ],
    tags: ["EV", "Mobility", "Commercial", "E-Rickshaw", "Cargo"],
    featured: false,
    active: true,
    sortOrder: 2,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },

  // ─── E-SCOOTY ─────────────────────────────────────────────────────────────────
  {
    id: "es-001",
    slug: "electric-scooty",
    name: "Electric Scooty",
    shortDescription:
      "Electric two-wheeler for urban commuting with modern design and efficient battery technology.",
    description:
      "A modern electric two-wheeler built for urban commuting. Lightweight, efficient, and easy to charge. Contact Nexus Tyre for model options and current availability.",
    categoryId: "e-scooty",
    type: "VEHICLE",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "AVAILABLE",
    images: [
      {
        id: "es-001-img-1",
        src: "/images/products/escooty/electric-scooty-1.webp",
        alt: "Electric Scooty side view",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/escooty/electric-scooty-1.webp",
    specifications: [
      {
        label: "Battery",
        value: "Specification available on enquiry",
        group: "Battery & Motor",
      },
      {
        label: "Motor",
        value: "Specification available on enquiry",
        group: "Battery & Motor",
      },
      {
        label: "Range",
        value: "Specification available on enquiry",
        group: "Performance",
      },
      {
        label: "Top Speed",
        value: "Specification available on enquiry",
        group: "Performance",
      },
    ],
    features: [
      "Zero emission urban commuting",
      "Lightweight and manoeuvrable",
      "Easy charging",
      "Modern styling",
    ],
    tags: ["EV", "Mobility", "E-Scooty", "Two-Wheeler"],
    featured: true,
    active: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },

  // ─── TYRES ────────────────────────────────────────────────────────────────────
  {
    id: "ty-001",
    slug: "e-rickshaw-tyre",
    name: "E-Rickshaw Tyre",
    shortDescription:
      "Durable tyres designed for e-rickshaw front and rear fitment.",
    description:
      "Purpose-built tyres for electric three-wheelers, engineered for durability and performance in Indian road conditions. Available in multiple sizes — enquire for current stock.",
    categoryId: "tyres",
    type: "PART",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "IN_STOCK",
    images: [
      {
        id: "ty-001-img-1",
        src: "/images/products/tyres/e-rickshaw-tyre-1.webp",
        alt: "E-Rickshaw Tyre",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/tyres/e-rickshaw-tyre-1.webp",
    specifications: [
      {
        label: "Size",
        value: "Available in multiple sizes — enquire",
        group: "Dimensions",
      },
      { label: "Type", value: "Bias / Radial", group: "Construction" },
      {
        label: "Tube Type",
        value: "Tube-type",
        group: "Construction",
      },
      {
        label: "Load Rating",
        value: "Specification available on enquiry",
        group: "Performance",
      },
    ],
    features: [
      "Engineered for Indian road conditions",
      "Durable compound for extended wear life",
      "Available for front and rear fitment",
      "Multiple sizes in stock",
    ],
    tags: ["Tyre", "E-Rickshaw", "Part"],
    featured: true,
    active: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "ty-002",
    slug: "e-scooty-tyre",
    name: "E-Scooty Tyre",
    shortDescription:
      "Quality tyres for electric two-wheelers in various sizes.",
    description:
      "Tyres suited to electric scooties and two-wheelers. Balanced for urban performance and durability. Multiple sizes available.",
    categoryId: "tyres",
    type: "PART",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "IN_STOCK",
    images: [
      {
        id: "ty-002-img-1",
        src: "/images/products/tyres/e-scooty-tyre-1.webp",
        alt: "E-Scooty Tyre",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/tyres/e-scooty-tyre-1.webp",
    specifications: [
      {
        label: "Size",
        value: "Available in multiple sizes — enquire",
        group: "Dimensions",
      },
      { label: "Type", value: "Tubeless / Tube-type", group: "Construction" },
    ],
    features: [
      "Suitable for electric two-wheelers",
      "Urban performance compound",
      "Multiple sizes available",
    ],
    tags: ["Tyre", "E-Scooty", "Two-Wheeler", "Part"],
    featured: false,
    active: true,
    sortOrder: 2,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },

  // ─── TUBES ────────────────────────────────────────────────────────────────────
  {
    id: "tb-001",
    slug: "e-rickshaw-tube",
    name: "E-Rickshaw Inner Tube",
    shortDescription:
      "Quality inner tubes for e-rickshaw tyres in multiple sizes.",
    description:
      "Reliable inner tubes for electric three-wheeler tyres. Available in sizes compatible with common e-rickshaw tyre fitments.",
    categoryId: "tubes",
    type: "PART",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "IN_STOCK",
    images: [
      {
        id: "tb-001-img-1",
        src: "/images/products/tubes/e-rickshaw-tube-1.webp",
        alt: "E-Rickshaw Inner Tube",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/tubes/e-rickshaw-tube-1.webp",
    specifications: [
      {
        label: "Compatibility",
        value: "E-Rickshaw tyres — multiple sizes",
        group: "Fitment",
      },
      {
        label: "Valve Type",
        value: "Specification available on enquiry",
        group: "Fitment",
      },
    ],
    features: [
      "Compatible with common e-rickshaw tyre sizes",
      "Durable rubber compound",
      "Resistant to puncture under normal conditions",
    ],
    tags: ["Tube", "E-Rickshaw", "Part"],
    featured: false,
    active: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },

  // ─── RIMS ─────────────────────────────────────────────────────────────────────
  {
    id: "rm-001",
    slug: "e-rickshaw-rim",
    name: "E-Rickshaw Rim",
    shortDescription:
      "Steel rims for electric three-wheelers, available in standard sizes.",
    description:
      "Durable steel rims designed for e-rickshaw front and rear wheels. Suitable for common tyre fitments.",
    categoryId: "rims",
    type: "PART",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "IN_STOCK",
    images: [
      {
        id: "rm-001-img-1",
        src: "/images/products/rims/e-rickshaw-rim-1.webp",
        alt: "E-Rickshaw Steel Rim",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/rims/e-rickshaw-rim-1.webp",
    specifications: [
      {
        label: "Material",
        value: "Steel",
        group: "Construction",
      },
      {
        label: "Compatibility",
        value: "E-Rickshaw — enquire for size",
        group: "Fitment",
      },
    ],
    features: [
      "Heavy-duty steel construction",
      "Compatible with standard e-rickshaw tyres",
      "Front and rear fitment options",
    ],
    tags: ["Rim", "E-Rickshaw", "Part", "Wheel"],
    featured: false,
    active: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },

  // ─── BATTERIES ────────────────────────────────────────────────────────────────
  {
    id: "bt-001",
    slug: "e-rickshaw-battery",
    name: "E-Rickshaw Battery",
    shortDescription:
      "High-capacity batteries for electric three-wheelers. Available in multiple voltage and Ah configurations.",
    description:
      "Batteries designed for e-rickshaw drivetrains, available in lead-acid and lithium configurations. Contact Nexus Tyre to enquire about current stock and compatible battery specifications.",
    categoryId: "ev-batteries",
    type: "BATTERY",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "AVAILABLE",
    images: [
      {
        id: "bt-001-img-1",
        src: "/images/products/batteries/e-rickshaw-battery-1.webp",
        alt: "E-Rickshaw Battery",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/batteries/e-rickshaw-battery-1.webp",
    specifications: [
      {
        label: "Type",
        value: "Lead-Acid / Lithium — enquire",
        group: "Chemistry",
      },
      {
        label: "Voltage",
        value: "Specification available on enquiry",
        group: "Electrical",
      },
      {
        label: "Capacity",
        value: "Specification available on enquiry",
        group: "Electrical",
      },
      {
        label: "Compatibility",
        value: "E-Rickshaw variants",
        group: "Fitment",
      },
    ],
    features: [
      "Multiple voltage and capacity options",
      "Compatible with major e-rickshaw models",
      "Lead-acid and lithium options available",
    ],
    tags: ["Battery", "EV", "E-Rickshaw", "Charging"],
    featured: true,
    active: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "bt-002",
    slug: "e-scooty-battery",
    name: "E-Scooty Battery",
    shortDescription:
      "Compact batteries for electric two-wheelers in multiple capacity options.",
    description:
      "Batteries for electric scooties and two-wheelers. Available in lithium and sealed lead-acid options. Enquire for compatibility with your e-scooty model.",
    categoryId: "ev-batteries",
    type: "BATTERY",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "AVAILABLE",
    images: [
      {
        id: "bt-002-img-1",
        src: "/images/products/batteries/e-scooty-battery-1.webp",
        alt: "E-Scooty Battery",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/batteries/e-scooty-battery-1.webp",
    specifications: [
      {
        label: "Type",
        value: "Lithium / SLA — enquire",
        group: "Chemistry",
      },
      {
        label: "Voltage",
        value: "Specification available on enquiry",
        group: "Electrical",
      },
      {
        label: "Capacity",
        value: "Specification available on enquiry",
        group: "Electrical",
      },
    ],
    features: [
      "Compact form factor for two-wheelers",
      "Lithium and SLA variants available",
      "Compatible with popular e-scooty models",
    ],
    tags: ["Battery", "EV", "E-Scooty", "Two-Wheeler"],
    featured: false,
    active: true,
    sortOrder: 2,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },

  // ─── CHARGERS ─────────────────────────────────────────────────────────────────
  {
    id: "ch-001",
    slug: "e-rickshaw-charger",
    name: "E-Rickshaw Battery Charger",
    shortDescription:
      "Battery chargers compatible with e-rickshaw battery packs.",
    description:
      "Chargers for e-rickshaw battery systems. Available in configurations suited to common battery voltages. Enquire for compatibility with your battery pack.",
    categoryId: "ev-chargers",
    type: "CHARGER",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "AVAILABLE",
    images: [
      {
        id: "ch-001-img-1",
        src: "/images/products/chargers/e-rickshaw-charger-1.webp",
        alt: "E-Rickshaw Battery Charger",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/chargers/e-rickshaw-charger-1.webp",
    specifications: [
      {
        label: "Input",
        value: "220V AC, 50Hz",
        group: "Electrical",
      },
      {
        label: "Output Voltage",
        value: "Specification available on enquiry",
        group: "Electrical",
      },
      {
        label: "Charging Time",
        value: "Specification available on enquiry",
        group: "Performance",
      },
    ],
    features: [
      "Compatible with e-rickshaw battery voltages",
      "Standard AC power input",
      "Protective charging circuits",
    ],
    tags: ["Charger", "EV", "E-Rickshaw", "Battery"],
    featured: false,
    active: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },

  // ─── GARBAGE SOLUTIONS ────────────────────────────────────────────────────────
  {
    id: "gs-001",
    slug: "garbage-collection-vehicle",
    name: "Garbage Collection Vehicle",
    shortDescription:
      "Electric garbage collection vehicle for municipal and institutional waste management.",
    description:
      "An electric garbage collection vehicle designed for efficient waste collection in urban areas, housing societies, and institutions. Specification and capacity details available on enquiry.",
    categoryId: "garbage-solutions",
    type: "VEHICLE",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "AVAILABLE",
    images: [
      {
        id: "gs-001-img-1",
        src: "/images/products/garbage/garbage-vehicle-1.webp",
        alt: "Electric Garbage Collection Vehicle",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/garbage/garbage-vehicle-1.webp",
    specifications: [
      {
        label: "Type",
        value: "Electric Garbage Collection Vehicle",
        group: "General",
      },
      {
        label: "Capacity",
        value: "Specification available on enquiry",
        group: "General",
      },
      {
        label: "Drive",
        value: "Electric",
        group: "Powertrain",
      },
    ],
    features: [
      "Electric powertrain for emission-free operation",
      "Suitable for municipal and institutional use",
      "Compact design for narrow lanes",
    ],
    tags: ["Garbage", "Waste Management", "EV", "Industrial", "Vehicle"],
    featured: true,
    active: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "gs-002",
    slug: "garbage-container",
    name: "Garbage Container",
    shortDescription:
      "Industrial waste containers for collection and storage in municipal and commercial settings.",
    description:
      "Durable garbage containers for municipal waste collection, housing societies, and industrial use. Available in various capacities.",
    categoryId: "garbage-solutions",
    type: "CONTAINER",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "AVAILABLE",
    images: [
      {
        id: "gs-002-img-1",
        src: "/images/products/garbage/garbage-container-1.webp",
        alt: "Garbage Container",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/garbage/garbage-container-1.webp",
    specifications: [
      {
        label: "Capacity",
        value: "Available in multiple capacities — enquire",
        group: "General",
      },
      {
        label: "Material",
        value: "Specification available on enquiry",
        group: "Construction",
      },
    ],
    features: [
      "Multiple capacity options",
      "Suitable for municipal and commercial use",
      "Durable construction",
    ],
    tags: ["Garbage", "Container", "Waste Management", "Industrial"],
    featured: false,
    active: true,
    sortOrder: 2,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },

  // ─── VENDING MACHINES ─────────────────────────────────────────────────────────
  {
    id: "vm-001",
    slug: "vending-machine",
    name: "Vending Machine",
    shortDescription:
      "Automated vending machine solutions for commercial and institutional deployment.",
    description:
      "Automated vending machines for deploying products at commercial and institutional locations. Multiple product category configurations available. Contact Nexus Tyre for details.",
    categoryId: "vending-machines",
    type: "MACHINE",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "ON_ORDER",
    images: [
      {
        id: "vm-001-img-1",
        src: "/images/products/vending/vending-machine-1.webp",
        alt: "Vending Machine",
        sortOrder: 1,
      },
    ],
    thumbnail: "/images/products/vending/vending-machine-1.webp",
    specifications: [
      {
        label: "Type",
        value: "Automated vending",
        group: "General",
      },
      {
        label: "Capacity",
        value: "Specification available on enquiry",
        group: "General",
      },
      {
        label: "Power",
        value: "Specification available on enquiry",
        group: "Electrical",
      },
    ],
    features: [
      "Multiple product configurations available",
      "Suitable for commercial and institutional locations",
      "Automated dispensing",
    ],
    tags: ["Vending", "Machine", "Commercial", "Industrial"],
    featured: false,
    active: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },

  // ─── INCINERATORS ─────────────────────────────────────────────────────────────
  {
    id: "in-001",
    slug: "industrial-incinerator",
    name: "Industrial Incinerator",
    shortDescription:
      "Industrial incinerators for controlled waste disposal in institutional and commercial settings.",
    description:
      "Industrial incinerators for efficient waste incineration at hospitals, institutions, and commercial facilities. Built to manage solid and bio-medical waste. Specification and capacity information available on enquiry.",
    categoryId: "incinerators",
    type: "INDUSTRIAL_EQUIPMENT",
    priceType: "CONTACT_FOR_PRICE",
    currency: "INR",
    availability: "ON_ORDER",
    images: [
      {
        id: "in-001-img-1",
        src: "/images/products/incinerators/industrial-incinerator-1.webp",
        alt: "Industrial Incinerator",
        sortOrder: 1,
      },
    ],
    thumbnail:
      "/images/products/incinerators/industrial-incinerator-1.webp",
    specifications: [
      {
        label: "Type",
        value: "Industrial / Bio-medical — enquire",
        group: "General",
      },
      {
        label: "Capacity",
        value: "Specification available on enquiry",
        group: "General",
      },
      {
        label: "Chamber Size",
        value: "Specification available on enquiry",
        group: "Dimensions",
      },
      {
        label: "Power",
        value: "Specification available on enquiry",
        group: "Electrical",
      },
    ],
    features: [
      "Suitable for hospitals and institutions",
      "Controlled combustion chamber",
      "Multiple capacity configurations",
    ],
    tags: ["Incinerator", "Industrial", "Waste Management", "Equipment"],
    featured: false,
    active: true,
    sortOrder: 1,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];
