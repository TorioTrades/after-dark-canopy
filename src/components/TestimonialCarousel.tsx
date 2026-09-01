import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  const go = (n: number) => setIndex(((n % count) + count) % count);

  useEffect(() => {
    if (paused || count < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(t);
  }, [paused, count]);

  return (
    <div
      className="relative mx-auto mt-12 max-w-[840px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ambient brand glow behind the card */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(8,119,185,0.20) 0%, transparent 60%), radial-gradient(ellipse at 75% 70%, rgba(245,130,32,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="overflow-hidden rounded-[24px]">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((t) => (
            <article
              key={t.name}
              className="glass-testimonial w-full shrink-0 grow-0 basis-full p-8 md:p-12"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} strokeWidth={1.5} className="fill-brand text-brand" />
                  ))}
                </div>
                <Quote size={34} strokeWidth={1.2} className="shrink-0 text-trust/35" />
              </div>

              <p className="mt-6 text-[16px] font-light italic leading-[1.85] text-white/75 md:text-[19px]">
                “{t.quote}”
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/[0.07] pt-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-trust to-[#065b8f] text-[15px] font-extrabold text-white shadow-[0_6px_18px_rgba(8,119,185,0.45)]">
                  {t.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] font-bold text-white">{t.name}</p>
                  <p className="mt-0.5 text-[13px] font-light text-white/45">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(index - 1)}
          className="carousel-arrow"
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>

        <div className="flex items-center gap-2">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`carousel-dot ${i === index ? "carousel-dot-active" : ""}`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(index + 1)}
          className="carousel-arrow"
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
