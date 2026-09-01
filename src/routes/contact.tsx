import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Map,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { services, site } from "@/lib/site";
import { PageHero } from "@/components/Sections";

const description =
  "Get a free quote for commercial kitchen cleaning in Melbourne. Call +61 408 201 103 or fill out our online form. We respond within 24 hours.";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    const value = search["service"];
    return typeof value === "string" ? { service: value } : {};
  },
  head: () => ({
    meta: [
      { title: "Contact Us | After Dark Canopy Cleaners — Melbourne Commercial Kitchen Cleaning" },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "kitchen cleaning quote Melbourne, contact canopy cleaners, commercial kitchen cleaning contact",
      },
      { property: "og:title", content: "Contact Us | After Dark Canopy Cleaners" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const serviceOptions = [
  "Canopy Cleaning",
  "Filter Cleaning",
  "Exhaust & Ductwork",
  "Deep Kitchen Clean",
  "Sanitisation",
  "Compliance",
  "Other",
];

const steps = ["Service", "Details", "Send"];

// Map is derived from site.address so it can never drift from the rest of the NAP.
const mapQuery = encodeURIComponent(site.address);
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

const cardClass =
  "rounded-[22px] border border-black/[0.07] bg-white shadow-[0_1px_2px_rgba(29,29,29,0.03),0_14px_36px_-24px_rgba(29,29,29,0.22)]";

const labelClass = "mb-2 block text-[11px] font-semibold uppercase tracking-[1.2px] text-muted-ink";

const inputClass =
  "w-full rounded-xl border border-black/[0.09] bg-[#faf8f5] px-4 py-3.5 text-[15px] font-normal text-brand-dark outline-none transition-all duration-200 placeholder:text-muted-ink/55 focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(245,130,32,0.14)]";

const chipClass =
  "cursor-pointer inline-flex items-center rounded-full border border-black/[0.09] bg-white px-5 py-2.5 text-[13px] font-medium text-brand-dark transition-all duration-200 hover:border-brand/45 has-[:checked]:border-brand has-[:checked]:bg-brand/[0.08] has-[:checked]:text-brand has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand";

function ContactPage() {
  const { service } = Route.useSearch();
  const preselected = services.find((s) => s.slug === service)?.title ?? "";
  const firstWord = preselected.split(" ")[0] ?? "";
  const [selectedService, setSelectedService] = useState(
    (firstWord && serviceOptions.find((o) => o.startsWith(firstWord))) || "",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  // Step 1 is always filled. Step 2 fills as soon as a service chip is picked,
  // step 3 once the required details are in. Nothing is ever hidden.
  const detailsDone = Boolean(name.trim() && email.trim() && phone.trim());
  const reached = selectedService ? (detailsDone ? 2 : 1) : 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to Zoho CRM webhook + email notification
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    fbq?.("track", "Lead", {
      content_name: "Quote Request",
      content_category: selectedService,
    });
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Let's Talk"
        title="Get In Touch"
        subtitle="Request a free quote or ask us anything. We respond within 24 hours."
        height="40vh"
        curveFill="#ffffff"
      />

      <section className="relative overflow-hidden bg-background px-5 py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-trust/[0.06] blur-[110px]" />
          <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-brand/[0.05] blur-[120px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1240px]">
          <div className="grid items-start gap-8 min-[1080px]:grid-cols-[1.25fr_0.75fr] min-[1080px]:gap-12 [&>*]:min-w-0">
            {/* Form */}
            <div className={`${cardClass} p-7 md:p-10`}>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-brand">
                Free Quote
              </p>
              <h2 className="mt-3 text-[clamp(1.6rem,2.8vw,2.25rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.02em] text-brand-dark">
                Request a Free Quote
              </h2>

              {sent ? (
                <div className="mt-7 flex items-start gap-3 rounded-2xl border border-green-300/60 bg-green-50/70 p-6">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-green-600" strokeWidth={1.5} />
                  <p className="text-[16px] font-medium text-green-800">
                    Thank you! We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7">
                  <ol className="grid grid-cols-3 gap-2">
                    {steps.map((label, i) => {
                      const filled = i <= reached;
                      return (
                        <li key={label}>
                          <span
                            aria-current={i === reached ? "step" : undefined}
                            className={`block rounded-lg px-3 py-2.5 text-center text-[11px] font-bold uppercase tracking-[1.2px] transition-colors duration-300 ${
                              filled ? "bg-brand text-white" : "bg-black/[0.045] text-muted-ink"
                            }`}
                          >
                            {i + 1} · {label}
                          </span>
                        </li>
                      );
                    })}
                  </ol>

                  <div className="mt-7 space-y-[18px]">
                    <fieldset>
                      <legend className={labelClass}>Service Needed</legend>
                      <div className="flex flex-wrap gap-2.5">
                        {serviceOptions.map((o) => (
                          <label key={o} className={chipClass}>
                            <input
                              type="radio"
                              name="service"
                              value={o}
                              required
                              checked={selectedService === o}
                              onChange={() => setSelectedService(o)}
                              className="sr-only"
                            />
                            {o}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div className="grid gap-4 min-[720px]:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Jane Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="business" className={labelClass}>
                          Business Name
                        </label>
                        <input
                          id="business"
                          name="business"
                          type="text"
                          autoComplete="organization"
                          placeholder="Trattoria Bellini"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 min-[720px]:grid-cols-2">
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="jane@business.com.au"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="04XX XXX XXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <fieldset>
                      <legend className={labelClass}>Preferred Contact Method</legend>
                      <div className="flex flex-wrap gap-2.5">
                        {["Phone", "Email"].map((m) => (
                          <label key={m} className={chipClass}>
                            <input
                              type="radio"
                              name="contactMethod"
                              value={m}
                              defaultChecked={m === "Phone"}
                              className="sr-only"
                            />
                            {m}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your kitchen — size, current setup, how often you need cleaning."
                        className={inputClass}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-brand-dark px-8 py-[17px] text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-all duration-200 hover:bg-black hover:shadow-[0_10px_28px_-12px_rgba(29,29,29,0.6)]"
                    >
                      Send My Quote Request
                    </button>

                    <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[12px] font-light text-muted-ink">
                      <span>Fully insured</span>
                      <span aria-hidden className="h-1 w-1 rounded-full bg-brand/60" />
                      <span>AS 1851 compliant</span>
                      <span aria-hidden className="h-1 w-1 rounded-full bg-brand/60" />
                      <span>Reply within one business day</span>
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-3.5">
              {[
                { Icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
                { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                { Icon: MapPin, label: "Address", value: site.address },
                { Icon: Clock, label: "Hours", value: site.hours },
                { Icon: Map, label: "Service Area", value: site.serviceArea },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className={`${cardClass} p-6`}>
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[1.5px] text-brand">
                    <Icon size={13} strokeWidth={2.2} />
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-2.5 block break-words text-[15px] text-brand-dark transition-colors hover:text-brand"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-2.5 break-words text-[15px] leading-[1.6] text-brand-dark">
                      {value}
                    </p>
                  )}
                </div>
              ))}

              <div className={`${cardClass} relative overflow-hidden`}>
                <iframe
                  title="After Dark Canopy Cleaners location — Heidelberg West, VIC"
                  src={mapEmbedSrc}
                  loading="lazy"
                  className="block h-[260px] w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[1px] text-brand-dark shadow-[0_2px_10px_rgba(29,29,29,0.18)] transition-colors hover:text-brand"
                >
                  Open in Maps
                  <ExternalLink size={11} strokeWidth={2.4} />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { href: site.facebook, Icon: Facebook, label: "Facebook" },
                  { href: site.instagram, Icon: Instagram, label: "Instagram" },
                  { href: site.linkedin, Icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-black/[0.09] bg-white px-2 py-3 text-[10px] font-semibold uppercase tracking-[1.2px] text-muted-ink transition-colors duration-200 hover:border-brand hover:text-brand"
                  >
                    <Icon size={14} strokeWidth={2} />
                    <span className="hidden min-[420px]:inline min-[1080px]:hidden min-[1200px]:inline">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
