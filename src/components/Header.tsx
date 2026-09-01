import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import adccLogo from "@/assets/adcc-logo.webp";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating glass capsule navbar */}
      <header className="nav-drop fixed top-3 md:top-4 inset-x-0 z-50 mx-auto w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1200px]">
        <div
          className={`flex items-center justify-between rounded-full border backdrop-blur-[20px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pl-5 pr-2.5 py-2.5 md:pl-6 md:pr-2 md:py-3 ${
            scrolled
              ? "border-white/10 bg-[#111111]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]"
              : "border-white/[0.08] bg-[#111111]/55 shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.04)]"
          }`}
          style={{ WebkitBackdropFilter: "blur(20px)" }}
        >
          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-2.5 whitespace-nowrap">
            <img
              src={adccLogo}
              alt="After Dark Canopy Cleaners logo"
              className="h-8 w-auto shrink-0 rounded-full object-cover md:h-9"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[13px] md:text-[15px] font-bold tracking-[0.5px] text-white">
                AFTER DARK
              </span>
              <span className="text-[13px] md:text-[15px] font-light tracking-[0.5px] text-white/50">
                CANOPY CLEANERS
              </span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-[12px] font-medium uppercase tracking-[1.5px] transition-colors duration-200 ${
                    active
                      ? "rounded-full border border-trust/20 bg-trust/15 px-4 py-1.5 text-white"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex rounded-full bg-brand px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-white shadow-[0_2px_12px_rgba(245,130,32,0.25)] transition-all duration-300 hover:bg-[#E07010] hover:shadow-[0_4px_20px_rgba(245,130,32,0.35)] hover:scale-[1.02]"
          >
            Get a Free Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="shrink-0 p-1 text-white lg:hidden"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen glass menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-[#0B0B0B]/95 backdrop-blur-[24px] transition-all duration-300 lg:hidden ${
          open ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-[0.98]"
        }`}
        style={{ WebkitBackdropFilter: "blur(24px)" }}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-white"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[24px] font-bold uppercase tracking-[1px] ${
                pathname === l.to ? "text-trust" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="mt-4 w-full max-w-[280px] rounded-full bg-brand px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[1.5px] text-white shadow-[0_2px_12px_rgba(245,130,32,0.25)]"
        >
          Get a Free Quote
        </Link>
        <div className="mt-6 flex gap-3">
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
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
