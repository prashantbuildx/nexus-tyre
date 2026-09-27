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
    <div className="bg-[var(--color-bg)] min-h-screen text-[var(--color-text)]">
      <div className="container-site space-y-24 md:space-y-32 py-16 md:py-24">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 animate-fade-in-up items-center">
          <div className="md:w-5/12 flex flex-col justify-center space-y-8">
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--color-text-muted)]">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-text)] tracking-tight leading-none">
              Powering Transit
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
              Nexus Tyre is an established supplier and distribution partner in the electric mobility, automotive tyre, and industrial equipment sectors. We deliver dependable, cost-efficient, and durable equipment to commercial operators, fleet owners, municipalities, and retail customers.
            </p>
          </div>
          <div className="md:w-7/12 border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)] flex items-center justify-center p-12 min-h-[500px]">
             {/* Text-based stylized placeholder maintaining the premium look since we lack images */}
             <div className="text-4xl font-serif text-[var(--color-text)] opacity-10 uppercase tracking-widest hover:scale-105 transition-transform duration-700 ease-out">
                Nexus Tyre
             </div>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-[var(--color-border)] py-12 animate-fade-in-up">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col space-y-2">
              <div className="text-4xl md:text-5xl font-serif text-[var(--color-text)] tracking-tight">
                {stat.value}
              </div>
              <div className="font-medium text-[10px] uppercase tracking-[0.15em] text-[var(--color-text)]">
                {stat.label}
              </div>
              <div className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision Section (Feature Sections Alternative Layout) */}
        <div className="space-y-32 animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 space-y-8">
               <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-text)] tracking-tight leading-none">Our Mission</h2>
               <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                 To accelerate India's transition to electric mobility and clean municipal infrastructure by providing accessible, rugged, and high-performance commercial vehicles, durable tyres, and energy storage solutions backed by dependable aftermarket support.
               </p>
               <div className="pt-6 border-t border-[var(--color-border)] flex items-center gap-2 text-[10px] font-medium text-[var(--color-text)] uppercase tracking-[0.15em]">
                 <CheckCircle2 className="w-4 h-4" />
                 Empowering Drivers & Enterprises
               </div>
            </div>
            <div className="md:w-1/2 border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)] flex items-center justify-center p-12 min-h-[400px]">
               <Target className="w-16 h-16 text-[var(--color-text)] opacity-10 hover:scale-105 transition-transform duration-[800ms] ease-out" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="md:w-1/2 space-y-8">
               <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-text)] tracking-tight leading-none">Our Quality Standard</h2>
               <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                 Commercial vehicles and tyres endure severe stress daily. We prioritize robust build materials, reinforced suspension frameworks, high safety margins, and verified battery management standards so that our clients achieve maximum operating uptime and optimal return on investment.
               </p>
               <div className="pt-6 border-t border-[var(--color-border)] flex items-center gap-2 text-[10px] font-medium text-[var(--color-text)] uppercase tracking-[0.15em]">
                 <ShieldCheck className="w-4 h-4" />
                 Rigorous Mechanical Verification
               </div>
            </div>
            <div className="md:w-1/2 border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)] flex items-center justify-center p-12 min-h-[400px]">
               <Award className="w-16 h-16 text-[var(--color-text)] opacity-10 hover:scale-105 transition-transform duration-[800ms] ease-out" />
            </div>
          </div>
        </div>

        {/* Core Product Pillars */}
        <div className="flex flex-col md:flex-row gap-16 animate-fade-in-up border-t border-[var(--color-border)] pt-24">
          <div className="md:w-5/12 space-y-6">
             <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-text)] tracking-tight leading-none">Comprehensive Product Portfolio</h2>
             <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
               Four dedicated product divisions built to address every commercial, transit, and municipal demand.
             </p>
          </div>
          <div className="md:w-7/12 flex flex-col">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="group border-b border-[var(--color-border)] py-10 flex items-start gap-8 transition-colors duration-300 hover:bg-[var(--color-surface-soft)]">
                  <div className="mt-1">
                    <Icon className="w-6 h-6 text-[var(--color-text-muted)]" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-3xl font-serif text-[var(--color-text)] tracking-tight">{pillar.title}</h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="text-2xl font-light text-[var(--color-text)] opacity-30 group-hover:opacity-100 transition-opacity">+</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Nexus Tyre */}
        <div className="flex flex-col md:flex-row gap-16 animate-fade-in-up border-t border-[var(--color-border)] pt-24">
          <div className="md:w-5/12 space-y-6">
             <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-text)] tracking-tight leading-none">Why Commercial Buyers Rely On Us</h2>
             <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
               Tailored partnerships for logistics operators, dealership networks, and civic authorities.
             </p>
             <div className="pt-8">
               <Link
                 href="/contact"
                 className="inline-flex items-center gap-3 px-8 py-3 bg-[var(--color-accent)] text-[var(--color-dark-text)] uppercase tracking-widest text-xs font-medium rounded-sm hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)] transition-all duration-300 ease-out"
               >
                 <span>Commercial Desk</span>
                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
               </Link>
             </div>
          </div>
          <div className="md:w-7/12 flex flex-col">
            {WHY_CHOOSE_US.map((item, i) => (
              <div key={i} className="border-b border-[var(--color-border)] py-10 flex items-start gap-8">
                <div className="text-sm font-serif italic text-[var(--color-text-muted)] mt-1">
                  0{i + 1}
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-serif text-[var(--color-text)] tracking-tight">{item.title}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="animate-fade-in-up pt-12">
           <ContactCTA
             title="Discuss Your Fleet or Equipment Requirements"
             subtitle="Speak with our product experts to request specifications, arrange a visit, or obtain competitive commercial quotations."
           />
        </div>
      </div>
    </div>
  );
}
