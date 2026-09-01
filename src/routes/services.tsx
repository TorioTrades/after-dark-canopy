import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { CTABanner, Container, PageHero } from "@/components/Sections";

const description =
  "Specialist canopy cleaning, filter cleaning, exhaust ductwork cleaning, deep kitchen cleaning, and sanitisation services for commercial kitchens across Melbourne.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | After Dark Canopy Cleaners — Melbourne Commercial Kitchen Cleaning" },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "canopy cleaning Melbourne, filter cleaning, exhaust duct cleaning, deep kitchen clean, kitchen sanitisation, AS 1851",
      },
      { property: "og:title", content: "Our Services | After Dark Canopy Cleaners" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Cleaning Services"
        subtitle="Every service designed to protect your kitchen, your staff, and your compliance."
        height="62vh"
        titleClassName="display-xl"
        curveFill="#111111"
      />

      <section className="atmos-dark relative px-5 py-20 md:py-28">
        <Container className="relative z-10">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 120} className="h-full">
                <article
                  id={s.slug}
                  className="service-glow glass-card-light glass-hover-light flex h-full flex-col scroll-mt-32 p-8 md:p-10"
                >
                  <span
                    className="text-[11px] font-light uppercase tracking-widest text-trust"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
                  >
                    Service
                  </span>

                  <h2
                    className="mt-4 text-[clamp(1.6rem,2.4vw,2.2rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.02em] text-white"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800 }}
                  >
                    {s.title}
                  </h2>

                  <p
                    className="mt-5 max-w-[52ch] text-[14px] font-light leading-[1.85] text-white/55 md:text-[15px]"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
                  >
                    {s.long}
                  </p>

                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-trust/40"
                      >
                        <span className="check-badge">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <span
                          className="text-[13px] font-medium leading-snug text-white/85"
                          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-9">
                    <Link
                      to="/contact"
                      search={{ service: s.slug }}
                      className="quote-btn inline-flex rounded-full bg-brand px-8 py-3.5 text-[12px] font-bold uppercase tracking-[1.5px] text-white shadow-[0_4px_20px_rgba(245,130,32,0.3)]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      Get a Quote for This Service
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>


      <CTABanner />
    </>
  );
}
