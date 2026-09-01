import { createFileRoute } from "@tanstack/react-router";
import { Shield, Eye, Star, BadgeCheck, ClipboardCheck, FileCheck, HeartPulse } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTABanner, Container, Eyebrow, PageHero, SectionHeading } from "@/components/Sections";
import teamPhoto from "@/assets/about-team-photo.webp";

const description =
  "15+ years cleaning and disinfecting Melbourne's commercial kitchens. Canopy and filter specialists — fully insured, OH&S compliant, and COVID-safe.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | After Dark Canopy Cleaners — Melbourne Commercial Kitchen Cleaning" },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "about After Dark Canopy Cleaners, Melbourne kitchen cleaning company, commercial kitchen disinfection, canopy and filter cleaning, insured kitchen cleaners, OH&S compliant cleaning",
      },
      { property: "og:title", content: "About Us | After Dark Canopy Cleaners" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    Icon: Shield,
    title: "Safety First",
    body: "Every decision starts with safety — for your kitchen, your staff, and our crew.",
  },
  {
    Icon: Eye,
    title: "Full Transparency",
    body: "Before-and-after documentation on every job. You see exactly what we did.",
  },
  {
    Icon: Star,
    title: "No Shortcuts",
    body: "We clean to standard, not to speed. If it's not done right, it's not done.",
  },
];

const badges = [
  { Icon: BadgeCheck, label: "Public Liability Insured" },
  { Icon: ClipboardCheck, label: "OH&S Compliant" },
  { Icon: FileCheck, label: "AS 1851 Aligned" },
  { Icon: HeartPulse, label: "COVID-Safe Certified" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About After Dark"
        subtitle="Melbourne's specialist commercial kitchen cleaning team — working after hours so your kitchen is ready before dawn."
        curveFill="#ffffff"
      />

      <section className="relative bg-background px-5 py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[55fr_45fr] lg:items-center">
          <Reveal>
            <Eyebrow text="Our Story" align="left" />
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.025em] text-trust-dark">
              Who We Are —
              <span className="block text-trust">After Dark</span>
            </h2>
            <div className="mt-7 space-y-6 text-[15px] font-light leading-[1.9] text-[#4B5563] md:text-[16px]">
              <p className="text-[17px] font-normal leading-[1.75] text-trust-dark md:text-[19px]">
                Commercial kitchens deserve specialist cleaning — not general-purpose crews who
                treat every job the same.
              </p>
              <p>
                After Dark Canopy Cleaners was founded on that idea. Over{" "}
                <strong className="font-bold text-trust-dark">15 years</strong>, we've built a team
                of trained technicians who understand the unique demands of kitchen extraction
                systems, grease management, and hygiene compliance.
              </p>
              <p>
                We work{" "}
                <strong className="font-bold text-trust-dark">exclusively after business hours</strong>{" "}
                because downtime costs you money. Our crews arrive when your kitchen closes and
                leave before your first prep cook walks in. No disruption, no compromise.
              </p>
              <p>
                Our work goes beyond degreasing. Every clean is paired with{" "}
                <strong className="font-bold text-trust-dark">sanitisation and disinfection</strong>{" "}
                — hospital-grade, COVID-safe treatment that stops mould and bacteria taking hold,
                clears the air your staff breathe through a full shift, and cuts the grease that
                turns a kitchen fire from unlikely into inevitable.
              </p>
              <p>
                Today we serve restaurants, hotels, hospitals, aged care facilities, and food
                production sites across Melbourne. Every kitchen we clean is a kitchen we'd be
                proud to cook in ourselves.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glow-blue">
              <div className="glass-card-dark overflow-hidden p-0 ring-1 ring-trust/20 shadow-float-lg">
                <img
                  src={teamPhoto}
                  alt="After Dark Canopy Cleaners technician in navy polo and ADCC-branded apron holding a pressure-washer nozzle"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="atmos-dark relative px-5 py-16 md:py-24">
        <Container>
          <SectionHeading dark eyebrow="Our Values" title="What We" titleAccent="Stand For" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 100}>
                <article className="glass-card-light glass-hover-light h-full p-9">
                  <div className="icon-badge">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-[19px] font-bold leading-tight text-white">{title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-white/55">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background px-5 py-12 md:py-16">
        <Container className="text-center">
          <SectionHeading eyebrow="Credentials" title="Fully Insured &amp; Certified" />
          <Reveal>
            <div className="mt-8 -mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:overflow-visible md:px-0">
              <div className="flex w-max min-w-full items-stretch justify-start gap-3 md:w-full md:justify-center">
                {badges.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="glass-card-dark glass-hover-dark flex shrink-0 items-center gap-2.5 rounded-full px-4 py-2.5"
                  >
                    <span className="icon-badge icon-badge-sm h-8 w-8 rounded-full">
                      <Icon size={15} strokeWidth={1.8} />
                    </span>
                    <span className="whitespace-nowrap text-[10.5px] font-semibold uppercase tracking-[1.2px] text-trust-dark">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>


      <CTABanner />
    </>
  );
}
