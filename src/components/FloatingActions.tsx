import { ChevronUp, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {showTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[rgba(29,29,29,0.6)] text-white backdrop-blur-md transition-colors hover:border-trust/50"
        >
          <ChevronUp size={18} strokeWidth={1.5} />
        </button>
      )}
      <a
        href={site.phoneHref}
        aria-label="Call now"
        className="call-pulse pointer-events-auto grid h-14 w-14 place-items-center rounded-full bg-brand text-white md:hidden"
      >
        <Phone size={22} strokeWidth={1.5} />
      </a>
    </div>
  );
}
