import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wind,
  Filter,
  Fan,
  Droplets,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  ImageIcon,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { CTABanner, Container, SectionHeading } from "@/components/Sections";

import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import heroImage from "@/assets/hero-cleaner.webp";
import nightKitchen from "@/assets/hero-canopy.webp";
import strip1 from "@/assets/gallery/jan2026-3.webp";
import strip2 from "@/assets/gallery/feb2026-6.webp";
import strip3 from "@/assets/gallery/apr2026-5.webp";
import strip4 from "@/assets/gallery/june2026-14.webp";
import strip5 from "@/assets/gallery/july2026-8.webp";
import strip6 from "@/assets/gallery/oct2026-1.webp";
import strip7 from "@/assets/gallery/oct2026-5.webp";
import strip8 from "@/assets/gallery/dec2026-5.webp";

const description =
  "Melbourne's trusted commercial kitchen cleaning specialists. Canopy cleaning, exhaust systems, and deep kitchen cleans done after hours. Fully insured. Get a free quote.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "After Dark Canopy Cleaners — Melbourne Commercial Kitchen Cleaning" },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "commercial kitchen cleaning Melbourne, canopy cleaning, exhaust cleaning, kitchen extraction cleaning, after hours kitchen cleaning",
      },
      {
        property: "og:title",
        content: "After Dark Canopy Cleaners — Melbourne Commercial Kitchen Cleaning",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const serviceIcons: Record<string, LucideIcon> = {
  Wind,
  Filter,
  Fan,
  Droplets,
  ShieldCheck,
  FileCheck,
};

type Chunk = { text: string; bold?: boolean };

const whyUs: { title: string; body: Chunk[] }[] = [
  {
    title: "We Work While You Sleep",
    body: [
      { text: "Our crews arrive " },
      { text: "after your kitchen closes", bold: true },
      { text: " and finish before your morning prep begins. " },
      { text: "Zero disruption", bold: true },
      { text: " to your daily operations." },
    ],
  },
  {
    title: "Fire Risk Elimination",
    body: [
      { text: "Grease buildup in exhaust systems is the " },
      { text: "#1 cause of commercial kitchen fires", bold: true },
      { text: ". Our deep-clean process eliminates that risk at the source." },
    ],
  },
  {
    title: "Documented Every Time",
    body: [
      { text: "Every job comes with " },
      { text: "timestamped before-and-after photos", bold: true },
      { text: " sent directly to you. Full transparency, full accountability." },
    ],
  },
  {
    title: "Fully Insured & Compliant",
    body: [
      { text: "We carry comprehensive public liability insurance and clean to " },
      { text: "AS 1851 standards", bold: true },
      { text: ". Your kitchen, your reputation — fully protected." },
    ],
  },
];

const testimonials = [
  {
    quote:
      "We run a 120-seat dining room seven nights a week. The After Dark crew comes in at 11pm and by the time our chefs walk in at 7am the canopy and filters look brand new — with the compliance certificate already in my inbox.",
    name: "Marco Ferretti",
    role: "Owner, Trattoria Bellini — Carlton",
  },
  {
    quote:
      "Our auditors want paperwork, not promises. The timestamped before-and-after photos have made our AS 1851 reporting painless, and their ductwork report picked up a grease build-up our previous contractor missed for two years.",
    name: "Priya Raman",
    role: "Executive Housekeeper, Southbank Riverside Hotel",
  },
  {
    quote:
      "In aged care, kitchen hygiene isn't negotiable. After Dark schedule around meal service and leave the area spotless — no chemical smell in the morning. Three years in and they've never rescheduled on us.",
    name: "Dean Whitmore",
    role: "Facilities Manager, Glenvale Aged Care — Ringwood",
  },
];

/**
 * Real photo per service slug. The project has no job photos for these yet, so
 * each card shows a neutral placeholder block until one is added here — e.g.
 * `"canopy-range-hood-cleaning": canopyPhoto`. Nothing else needs to change.
 */
const servicePhotos: Record<string, string> = {};

/**
 * Gallery preview strip. Sources are square, so a square tile crops nothing —
 * the artwork stays readable at this size.
 */
const galleryStrip = [
  { src: strip1, alt: "Canopy cleaning awareness graphic — January 2026" },
  { src: strip2, alt: "Canopy cleaning awareness graphic — February 2026" },
  { src: strip3, alt: "Canopy cleaning awareness graphic — April 2026" },
  { src: strip4, alt: "Canopy inspection graphic — June 2026" },
  { src: strip5, alt: "Kitchen fit-out graphic — July 2026" },
  { src: strip6, alt: "Fire damage awareness graphic — October 2026" },
  { src: strip7, alt: "Compliance and team graphic — October 2026" },
  { src: strip8, alt: "Fire compliance and food safety graphic — December 2026" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Professional commercial kitchen cleaner standing in a stainless steel kitchen at night"
          width={2528}
          height={1696}
          className="hero-photo-img hero-pan absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-photo-scrim absolute inset-0" />
        <div className="hero-ambient pointer-events-none absolute inset-0" />

        <Container className="relative z-10 w-full pb-24 pt-32 md:py-32">
          <div className="max-w-[650px] text-center md:text-left lg:pl-4">
            <div
              className="hero-in flex items-center justify-center gap-3 md:justify-start"
              style={{ animationDelay: "80ms" }}
            >
              <span className="h-px w-8 bg-trust/40 md:hidden" />
              <span className="text-[10px] font-medium uppercase tracking-[2.5px] text-trust sm:text-[11px] sm:tracking-[3px]">
                Melbourne's Trusted Kitchen Cleaning Specialists
              </span>
              <span className="h-px w-8 bg-trust/40 md:w-[60px]" />
            </div>

            <h1
              className="hero-in mt-6 text-[34px] font-extrabold uppercase leading-[1.06] tracking-[-0.5px] text-white sm:text-[42px] md:mt-7 md:text-[52px] lg:text-[64px]"
              style={{ animationDelay: "200ms" }}
            >
              Commercial Kitchen Cleaning Done Right —
              <span className="block text-brand">Every Night.</span>
            </h1>

            <p
              className="hero-in mx-auto mt-5 max-w-[520px] text-[15px] font-light leading-[1.75] text-white/70 md:mx-0 md:mt-6 md:text-[17px]"
              style={{ animationDelay: "340ms" }}
            >
              We deep-clean canopies, exhaust systems, and commercial kitchens after hours — so your
              business opens spotless, safe, and fully compliant every morning.
            </p>

            <div
              className="hero-in mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:mt-9 md:justify-start"
              style={{ animationDelay: "470ms" }}
            >
              <Link
                to="/contact"
                className="rounded-full bg-brand px-8 py-4 text-center text-[13px] font-semibold uppercase tracking-[1.5px] text-white shadow-[0_4px_20px_rgba(245,130,32,0.3)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#e07010] hover:shadow-[0_8px_30px_rgba(245,130,32,0.45)]"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/gallery"
                className="glass-button px-8 py-4 text-center text-[13px] font-semibold uppercase tracking-[1.5px]"
              >
                View Our Work
              </Link>
            </div>

            <div
              className="hero-in mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[1.5px] text-white/45 md:justify-start"
              style={{ animationDelay: "600ms" }}
            >
              <span>Fully Insured</span>
              <span className="h-1 w-1 rounded-full bg-trust/70" />
              <span>After Hours</span>
              <span className="h-1 w-1 rounded-full bg-trust/70" />
              <span>15+ Years</span>
            </div>
          </div>
        </Container>

        <div
          aria-hidden
          className="scroll-pulse absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 sm:flex"
        >
          <span className="h-8 w-[1.5px] bg-[rgba(8,119,185,0.6)]" />
          <span className="-mt-1 h-2 w-2 rotate-45 border-b-[1.5px] border-r-[1.5px] border-[rgba(8,119,185,0.6)]" />
        </div>
      </section>

      {/* Services */}
      <section className="atmos-dark relative px-5 py-20 md:py-28">
        <Container>
          <SectionHeading
            dark
            eyebrow="Our Services"
            title="Specialist Cleaning"
            titleAccent="For Melbourne Kitchens"
            accentColor="trust"
            subtitle="From canopy degreasing to full kitchen sanitisation — every service built around safety, compliance, and zero disruption."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon] ?? Wind;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 100} className="h-full">
                  <article className="glass-card-light glass-hover-light group relative flex h-full flex-col overflow-hidden">
                    {/* top sheen accent */}
                    <span
                      className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px opacity-60"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(8,119,185,0.6), transparent)",
                      }}
                    />
                    {/* ambient corner glow on hover */}
                    <span
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "rgba(8,119,185,0.14)" }}
                    />

                    {/* Fixed-height image area — reserves its space, so the
                        card never shifts while the photo loads. */}
                    <div className="relative h-[160px] w-full shrink-0 overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-[#1c1c1c] to-[#2b2b2b]">
                      {servicePhotos[s.slug] ? (
                        <img
                          src={servicePhotos[s.slug]}
                          alt={`${s.title} — After Dark Canopy Cleaners`}
                          loading="lazy"
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="absolute inset-0 grid place-items-center text-white/[0.14]"
                        >
                          <ImageIcon size={30} strokeWidth={1.2} />
                        </span>
                      )}
                    </div>

                    <div className="relative flex flex-1 flex-col p-8">
                      <div className="icon-badge h-16 w-16 rounded-[18px]">
                        <Icon
                          size={28}
                          strokeWidth={1.8}
                          className="transition-colors duration-500 group-hover:text-white"
                        />
                      </div>
                      <h3 className="mt-6 border-l-[3px] border-trust pl-3 text-[18px] font-extrabold leading-tight tracking-[0.2px] text-white">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[14px] font-light leading-[1.8] text-white/50">
                        {s.short}
                      </p>
                      <Link
                        to="/services"
                        hash={s.slug}
                        className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-trust transition-all duration-300 group-hover:gap-3 hover:brightness-125"
                      >
                        Learn More
                        <ArrowRight size={14} strokeWidth={2} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <span className="mx-auto block h-px w-[200px] max-w-full bg-[rgba(8,119,185,0.2)]" />
            <p className="mt-5 text-[15px] font-semibold tracking-[0.5px] text-white/40">
              500+ Commercial Kitchens Cleaned Across Melbourne
            </p>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="atmos-why px-5 py-24 md:py-[100px]">
        <div className="mx-auto max-w-[1000px]">
          <Reveal className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-trust" />
              <span className="text-[12px] font-medium uppercase tracking-[3px] text-trust">
                Why After Dark
              </span>
            </div>

            <h2 className="mx-auto mt-5 max-w-[820px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.015em] text-trust-dark md:text-[40px]">
              When Was the Last Time Your Kitchen Was{" "}
              <span className="italic text-trust">Truly Clean?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-[1.8] text-[#4B5563]">
              Most cleaning companies wipe surfaces. We{" "}
              <strong className="font-bold text-trust-dark">
                strip your extraction system back to bare metal
              </strong>
              , eliminate <strong className="font-bold text-trust-dark">hidden fire risks</strong>,
              and deliver{" "}
              <strong className="font-bold text-trust-dark">timestamped proof of every job</strong>.
              That's the After Dark difference.
            </p>

            <p className="mt-4 text-[16px] text-[#4B5563]">
              <span className="font-bold text-trust">Specialist. Compliant. After Hours.</span> For
              every commercial kitchen.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {whyUs.map((c, i) => (
              <Reveal key={c.title} delay={i * 120} className="h-full">
                <article className="feature-card h-full p-8">
                  <span className="block h-2 w-2 rounded-full bg-trust" />
                  <h3 className="mt-4 text-[18px] font-bold text-trust-dark">{c.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#6B7280]">
                    {c.body.map((chunk, ci) =>
                      chunk.bold ? (
                        <strong key={ci} className="font-bold text-trust-dark">
                          {chunk.text}
                        </strong>
                      ) : (
                        <span key={ci}>{chunk.text}</span>
                      ),
                    )}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 grid items-center gap-8 md:grid-cols-2 md:gap-10">
              {/* Fixed aspect ratio reserves the space before the photo loads. */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[20px] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.5)]">
                <img
                  src={nightKitchen}
                  alt="Commercial kitchen canopy and cooking line lit at night, ready for an after-hours clean"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:gap-6 sm:text-left md:flex-col md:items-start md:text-left">
                <span className="stat-number text-[56px] leading-none md:text-[72px]">15+</span>
                <span className="hidden h-10 w-px bg-[rgba(8,119,185,0.2)] sm:block md:hidden" />
                <p className="text-[14px] font-bold uppercase leading-[1.5] tracking-[2px] text-[#9CA3AF]">
                  Years Protecting
                  <span className="block">Melbourne Kitchens</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-white py-16 md:py-20">
        <Container className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-trust" />
              <span className="text-[12px] font-medium uppercase tracking-[3px] text-trust">
                Recent Work
              </span>
            </div>
            <h2 className="mt-4 text-[26px] font-extrabold uppercase tracking-[-0.015em] text-trust-dark md:text-[34px]">
              From the Field
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-white px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[1.5px] text-trust-dark transition-colors duration-200 hover:border-trust hover:text-trust"
          >
            View Full Gallery
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </Container>

        <div className="mt-10 overflow-x-auto pb-3">
          <div className="mx-auto flex w-max gap-4 px-5">
            {galleryStrip.map((g) => (
              <Link
                key={g.alt}
                to="/gallery"
                className="block h-[190px] w-[190px] shrink-0 overflow-hidden rounded-2xl bg-brand-dark shadow-[0_8px_28px_-16px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1 md:h-[220px] md:w-[220px]"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Testimonials */}
      <section className="atmos-testimonials px-5 py-24 md:py-[100px]">
        <Container>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-trust" />
              <span className="text-[12px] font-medium uppercase tracking-[3px] text-trust">
                Testimonials
              </span>
            </div>
            <h2 className="mt-5 text-[28px] font-extrabold uppercase tracking-[-0.015em] text-white md:text-[36px]">
              What Our Clients Say
            </h2>
          </div>

          <TestimonialCarousel items={testimonials} />
        </Container>
      </section>
    </>
  );
}
