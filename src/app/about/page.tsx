import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Truck,
  Battery,
  Award,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactCTA } from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "About Us | Nexus Tyre",
  description:
    "Learn about Nexus Tyre, an established Indian supplier of EV mobility solutions, heavy-duty tyres, advanced battery systems, and industrial utility equipment.",
};

const STATS = [
  { value: "10+", label: "Product Categories", desc: "Covering mobility to industrial utility" },
  { value: "100%", label: "Quality Verified", desc: "Tested for rugged Indian road conditions" },
  { value: "B2B & B2C", label: "Procurement Models", desc: "Wholesale fleet & individual supply" },
  { value: "End-to-End", label: "Mobility Ecosystem", desc: "Vehicles, tyres, power & spares" },
];

const PILLARS = [
  {
    icon: Zap,
    title: "Electric Mobility Vehicles",
    desc: "From passenger e-rickshaws that empower urban transport operators to high-payload cargo loaders designed for last-mile logistics and e-commerce distribution.",
  },
  {
    icon: Truck,
    title: "Commercial Tyre & Wheel Tech",
    desc: "Engineered specifically for heavy loads, uneven roads, and high-mileage EV duty cycles with specialized tread compounds and reinforced beads.",
  },
  {
    icon: Battery,
    title: "Power Storage & Smart Charging",
    desc: "High-cycle battery systems and temperature-regulated chargers ensuring minimal downtime, dependable range, and extended operational lifespan.",
  },
  {
    icon: Building2,
    title: "Industrial & Municipal Solutions",
    desc: "Dedicated clean utility products including electric garbage tippers, institutional automated vending machines, and industrial waste incinerators.",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Commercial-Grade Reliability",
    desc: "Every model in our catalogue is selected and tested to meet high standards of mechanical durability, safety compliance, and continuous daily uptime.",
  },
  {
    title: "Direct B2B Wholesale Pricing",
    desc: "We work directly with fleet owners, municipal contractors, corporate facilities, and retail dealers to deliver transparent, volume-tiered pricing.",
  },
  {
    title: "Holistic Spare & Component Support",
    desc: "Never get stranded waiting for parts. We stock replacement tyres, matching tubes, rims, controllers, and battery packs for immediate dispatch.",
  },
  {
    title: "Indian Operating Context Expertise",
    desc: "We understand local road terrains, seasonal temperature variations, high payload demands, and operating economics for commercial profitability.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-8 md:py-16 bg-[var(--color-bg)] min-h-screen">
      <div className="container-site space-y-16">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
            About Nexus Tyre
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text)] tracking-tight leading-tight">
            Powering Sustainable Transit & Industrial Utility Across India
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-muted)] leading-relaxed">
            Nexus Tyre is an established supplier and distribution partner in the electric mobility, automotive tyre, and industrial equipment sectors. We deliver dependable, cost-efficient, and durable equipment to commercial operators, fleet owners, municipalities, and retail customers.
          </p>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-[var(--color-border)] shadow-sm text-center sm:text-left space-y-1"
            >
              <div className="text-3xl sm:text-4xl font-black text-[var(--color-primary)] tracking-tight">
                {stat.value}
              </div>
              <div className="font-bold text-sm sm:text-base text-[var(--color-text)]">
                {stat.label}
              </div>
              <div className="text-xs text-[var(--color-muted)]">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[var(--color-border)] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text)]">
                Our Mission
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                To accelerate India's transition to electric mobility and clean municipal infrastructure by providing accessible, rugged, and high-performance commercial vehicles, durable tyres, and energy storage solutions backed by dependable aftermarket support.
              </p>
            </div>
            <div className="pt-6 border-t border-[var(--color-border)] flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              Empowering Drivers & Enterprises
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-white backdrop-blur-sm">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Our Quality Standard</h2>
              <p className="text-white/85 leading-relaxed">
                Commercial vehicles and tyres endure severe stress daily. We prioritize robust build materials, reinforced suspension frameworks, high safety margins, and verified battery management standards so that our clients achieve maximum operating uptime and optimal return on investment.
              </p>
            </div>
            <div className="pt-6 border-t border-white/20 flex items-center gap-2 text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Rigorous Mechanical Verification
            </div>
          </div>
        </div>

        {/* Core Product Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text)]">
              Comprehensive Product Portfolio
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)]">
              Four dedicated product divisions built to address every commercial, transit, and municipal demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-[var(--color-border)] shadow-sm flex gap-4 sm:gap-5 items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[var(--color-text)]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Nexus Tyre */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[var(--color-border)] shadow-sm space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text)]">
              Why Commercial Buyers Rely On Us
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-muted)]">
              Tailored partnerships for logistics operators, dealership networks, and civic authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-xl bg-[var(--color-surface-2)] flex items-center justify-center text-[var(--color-primary)] font-bold text-sm shrink-0 border border-[var(--color-border)]">
                  {i + 1}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-[var(--color-text-secondary)]">
              Interested in becoming an authorized distributor or fleet supply partner?
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors shrink-0"
            >
              <span>Connect With Commercial Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <ContactCTA
          title="Discuss Your Fleet or Equipment Requirements"
          subtitle="Speak with our product experts to request specifications, arrange a visit, or obtain competitive commercial quotations."
        />
      </div>
    </div>
  );
}
