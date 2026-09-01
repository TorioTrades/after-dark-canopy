import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-top-accent bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-5 pb-12 pt-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-[20px] uppercase tracking-[2px]">
              <span className="font-bold text-white">After Dark</span>{" "}
              <span className="font-light text-white/35">Canopy Cleaners</span>
            </p>
            <p className="mt-4 max-w-[280px] text-[13px] font-normal leading-[1.7] text-white/30">
              Melbourne's specialist commercial kitchen cleaning team. Fully insured.
              After-hours service. No shortcuts.
            </p>
          </div>


          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[2px] text-white/30">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[14px] text-white/45 transition-colors hover:text-trust"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[2px] text-white/30">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5 text-[14px] text-white/45">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-trust">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-trust"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
              <li className="pt-1 text-white/35">{site.hours}</li>
            </ul>
            <div className="mt-5 flex gap-3">
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
                  aria-label={label}
                  className="social-glow grid h-9 w-9 place-items-center rounded-full border border-white/[0.08] bg-white/[0.08] text-white/70 transition-all"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.04] pt-6 text-[12px] text-white/25 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            <a href="https://stalliongraphics.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-trust">
              Website by Stallion Graphics
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
