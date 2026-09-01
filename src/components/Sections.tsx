import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { CurveDivider } from "@/components/CurveDivider";
import heroImage from "@/assets/hero-canopy.webp";


export function Eyebrow({
  text,
  align = "center",
}: {
  text: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}
    >
      {align === "center" && <span className="h-px w-10 bg-trust/40 sm:w-[60px]" />}
      <span className="text-[11px] font-medium uppercase tracking-[3px] text-trust">{text}</span>
      <span className="h-px w-10 bg-trust/40 sm:w-[60px]" />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  height = "45vh",
  titleClassName,
  curveFill,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  height?: string;
  titleClassName?: string;
  curveFill?: string;
}) {
  return (
    <section
      className="relative flex items-center overflow-hidden px-5 pt-32 pb-20"
      style={{ minHeight: height }}
    >
      <img
        src={heroImage}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="hero-photo-scrim absolute inset-0" />
      <div className="hero-ambient pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] text-center">
        {eyebrow && <Eyebrow text={eyebrow} />}
        <h1 className={`display-lg mt-6 text-white uppercase ${titleClassName ?? ""}`}>{title}</h1>
        <p className="mx-auto mt-5 max-w-[40rem] text-[17px] font-light leading-[1.7] text-white/60">
          {subtitle}
        </p>
      </div>
      {curveFill && <CurveDivider fill={curveFill} />}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  dark = false,
  accentColor = "trust",
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  dark?: boolean;
  accentColor?: "brand" | "trust";
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow text={eyebrow} align={align} />}
      <h2
        className={`display-md mt-5 uppercase ${dark ? "text-white" : "text-trust-dark"}`}
      >
        {title}
        {titleAccent && (
          <span className={`block ${accentColor === "trust" ? "text-trust" : "text-trust"}`}>
            {titleAccent}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-[16px] font-light leading-[1.7] ${
            dark ? "text-white/50" : "text-muted-ink"
          } ${centered ? "mx-auto max-w-[560px]" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CTABanner() {
  return (
    <section className="atmos-cta-strong px-5 py-20">
      <div className="glass-card-blue mx-auto max-w-[800px] rounded-[24px] px-8 py-14 text-center md:px-12 md:py-16">
        <div className="flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-trust" />
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-white/50">
            Ready to Start
          </span>
        </div>

        <h2 className="mx-auto mt-5 max-w-[640px] text-[26px] font-extrabold leading-[1.2] text-white md:text-[34px]">
          Get Your Kitchen <span className="text-trust">Professionally Cleaned</span> — Starting
          Tonight.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[16px] font-light text-white/50">
          Free, no-obligation quote within 24 hours. Fully insured. After-hours service.
        </p>

        <Link
          to="/contact"
          className="mt-7 inline-flex rounded-full bg-brand px-9 py-4 text-[13px] font-semibold uppercase tracking-[1.5px] text-white shadow-[0_4px_20px_rgba(245,130,32,0.3)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(245,130,32,0.45)]"
        >
          Request Your Free Quote
        </Link>

        <p className="mt-3 text-[14px] text-white/40">
          Or call us directly:{" "}
          <a href={site.phoneHref} className="text-white/60 transition-colors hover:text-white">
            {site.phone}
          </a>
        </p>
      </div>
    </section>
  );
}


export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-[1200px] px-5 ${className}`}>{children}</div>;
}
