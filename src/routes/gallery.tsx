import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { CTABanner, Container, PageHero } from "@/components/Sections";
import jan1 from "@/assets/gallery/jan2026-1.webp";
import jan2 from "@/assets/gallery/jan2026-2.webp";
import jan3 from "@/assets/gallery/jan2026-3.webp";
import jan4 from "@/assets/gallery/jan2026-4.webp";
import jan5 from "@/assets/gallery/jan2026-5.webp";
import jan6 from "@/assets/gallery/jan2026-6.webp";
import jan7 from "@/assets/gallery/jan2026-7.webp";
import jan8 from "@/assets/gallery/jan2026-8.webp";
import jan11 from "@/assets/gallery/jan2026-11.webp";
import jan12 from "@/assets/gallery/jan2026-12.webp";
import jan13 from "@/assets/gallery/jan2026-13.webp";
import jan15 from "@/assets/gallery/jan2026-15.webp";
import jan16 from "@/assets/gallery/jan2026-16.webp";
import jan17 from "@/assets/gallery/jan2026-17.webp";
import jan18 from "@/assets/gallery/jan2026-18.webp";
import jan19 from "@/assets/gallery/jan2026-19.webp";
import jan20 from "@/assets/gallery/jan2026-20.webp";
import jan21 from "@/assets/gallery/jan2026-21.webp";
import jan22 from "@/assets/gallery/jan2026-22.webp";
import jan23 from "@/assets/gallery/jan2026-23.webp";
import jan25 from "@/assets/gallery/jan2026-25.webp";
import feb11 from "@/assets/gallery/feb2026-1_1.webp";
import feb12 from "@/assets/gallery/feb2026-1_2.webp";
import feb21 from "@/assets/gallery/feb2026-2_1.webp";
import feb22 from "@/assets/gallery/feb2026-2_2.webp";
import feb31 from "@/assets/gallery/feb2026-3_1.webp";
import feb32 from "@/assets/gallery/feb2026-3_2.webp";
import feb41 from "@/assets/gallery/feb2026-4_1.webp";
import feb42 from "@/assets/gallery/feb2026-4_2.webp";
import feb5 from "@/assets/gallery/feb2026-5-2.webp";
import feb6 from "@/assets/gallery/feb2026-6.webp";
import feb7 from "@/assets/gallery/feb2026-7-2.webp";
import feb8 from "@/assets/gallery/feb2026-8-2.webp";
import feb9 from "@/assets/gallery/feb2026-9.webp";
import feb10 from "@/assets/gallery/feb2026-10.webp";
import feb12b from "@/assets/gallery/feb2026-12-3.webp";
import feb13 from "@/assets/gallery/feb2026-13-2.webp";
import feb14 from "@/assets/gallery/feb2026-14.webp";
import feb15 from "@/assets/gallery/feb2026-15-2.webp";
import feb16 from "@/assets/gallery/feb2026-16-2.webp";
import feb17 from "@/assets/gallery/feb2026-17.webp";
import feb18 from "@/assets/gallery/feb2026-18.webp";
import feb19 from "@/assets/gallery/feb2026-19.webp";
import feb20 from "@/assets/gallery/feb2026-20.webp";
import febTwentyOne from "@/assets/gallery/feb2026-21.webp";
import febTwentyTwo from "@/assets/gallery/feb2026-22.webp";
import feb23 from "@/assets/gallery/feb2026-23.webp";
import feb24 from "@/assets/gallery/feb2026-24.webp";
import feb25 from "@/assets/gallery/feb2026-25.webp";
import apr1 from "@/assets/gallery/apr2026-1.webp";
import apr2 from "@/assets/gallery/apr2026-2.webp";
import apr3 from "@/assets/gallery/apr2026-3.webp";
import apr4 from "@/assets/gallery/apr2026-4.webp";
import apr5 from "@/assets/gallery/apr2026-5.webp";
import apr6 from "@/assets/gallery/apr2026-6.webp";
import apr7 from "@/assets/gallery/apr2026-7.webp";
import apr8 from "@/assets/gallery/apr2026-8.webp";
import apr9 from "@/assets/gallery/apr2026-9.webp";
import apr10 from "@/assets/gallery/apr2026-10.webp";
import apr11 from "@/assets/gallery/apr2026-11.webp";
import apr12 from "@/assets/gallery/apr2026-12.webp";
import apr13 from "@/assets/gallery/apr2026-13.webp";
import apr14 from "@/assets/gallery/apr2026-14.webp";
import apr15 from "@/assets/gallery/apr2026-15.webp";
import apr16 from "@/assets/gallery/apr2026-16.webp";
import apr17 from "@/assets/gallery/apr2026-17.webp";
import apr18 from "@/assets/gallery/apr2026-18.webp";
import apr19 from "@/assets/gallery/apr2026-19.webp";
import apr20 from "@/assets/gallery/apr2026-20.webp";
import apr21 from "@/assets/gallery/apr2026-21.webp";
import apr22 from "@/assets/gallery/apr2026-22.webp";
import apr23 from "@/assets/gallery/apr2026-23.webp";
import apr24 from "@/assets/gallery/apr2026-24.webp";
import apr25 from "@/assets/gallery/apr2026-25.webp";
import apr26 from "@/assets/gallery/apr2026-26.webp";
import apr27 from "@/assets/gallery/apr2026-27.webp";
import apr28 from "@/assets/gallery/apr2026-28.webp";
import apr29 from "@/assets/gallery/apr2026-29.webp";
import apr30 from "@/assets/gallery/apr2026-30.webp";
import jun1 from "@/assets/gallery/june2026-1.webp";
import jun2 from "@/assets/gallery/june2026-2.webp";
import jun3 from "@/assets/gallery/june2026-3.webp";
import jun4 from "@/assets/gallery/june2026-4.webp";
import jun5 from "@/assets/gallery/june2026-5.webp";
import jun6 from "@/assets/gallery/june2026-6.webp";
import jun7 from "@/assets/gallery/june2026-7.webp";
import jun8 from "@/assets/gallery/june2026-8.webp";
import jun9 from "@/assets/gallery/june2026-9.webp";
import jun10 from "@/assets/gallery/june2026-10.webp";
import jun11 from "@/assets/gallery/june2026-11.webp";
import jun12 from "@/assets/gallery/june2026-12.webp";
import jun13 from "@/assets/gallery/june2026-13.webp";
import jun14 from "@/assets/gallery/june2026-14.webp";
import jun15 from "@/assets/gallery/june2026-15.webp";
import jun16 from "@/assets/gallery/june2026-16.webp";
import jun17 from "@/assets/gallery/june2026-17.webp";
import jun18 from "@/assets/gallery/june2026-18.webp";
import jun19 from "@/assets/gallery/june2026-19.webp";
import jun20 from "@/assets/gallery/june2026-20.webp";
import jun21 from "@/assets/gallery/june2026-21.webp";
import jun22 from "@/assets/gallery/june2026-22.webp";
import jun23 from "@/assets/gallery/june2026-23.webp";
import jun24 from "@/assets/gallery/june2026-24.webp";
import jun25 from "@/assets/gallery/june2026-25.webp";
import jun26 from "@/assets/gallery/june2026-26.webp";
import jun27 from "@/assets/gallery/june2026-27.webp";
import jun28 from "@/assets/gallery/june2026-28.webp";
import jun29 from "@/assets/gallery/june2026-29.webp";
import jun30 from "@/assets/gallery/june2026-30.webp";
import jun31 from "@/assets/gallery/june2026-31.webp";
import jun32 from "@/assets/gallery/june2026-32.webp";
import jul1 from "@/assets/gallery/july2026-1.webp";
import jul2 from "@/assets/gallery/july2026-2.webp";
import jul3 from "@/assets/gallery/july2026-3.webp";
import jul4 from "@/assets/gallery/july2026-4.webp";
import jul5 from "@/assets/gallery/july2026-5.webp";
import jul6 from "@/assets/gallery/july2026-6.webp";
import jul7 from "@/assets/gallery/july2026-7.webp";
import jul8 from "@/assets/gallery/july2026-8.webp";
import jul9 from "@/assets/gallery/july2026-9.webp";
import jul10 from "@/assets/gallery/july2026-10.webp";
import jul11 from "@/assets/gallery/july2026-11.webp";
import jul12 from "@/assets/gallery/july2026-12.webp";
import jul13 from "@/assets/gallery/july2026-13.webp";
import jul14 from "@/assets/gallery/july2026-14.webp";
import jul15 from "@/assets/gallery/july2026-15.webp";
import jul16 from "@/assets/gallery/july2026-16.webp";
import jul17 from "@/assets/gallery/july2026-17.webp";
import jul18 from "@/assets/gallery/july2026-18.webp";
import jul19 from "@/assets/gallery/july2026-19.webp";
import jul20 from "@/assets/gallery/july2026-20.webp";
import jul21 from "@/assets/gallery/july2026-21.webp";
import jul22 from "@/assets/gallery/july2026-22.webp";
import jul23 from "@/assets/gallery/july2026-23.webp";
import jul24 from "@/assets/gallery/july2026-24.webp";
import jul25 from "@/assets/gallery/july2026-25.webp";
import jul26 from "@/assets/gallery/july2026-26.webp";
import jul27 from "@/assets/gallery/july2026-27.webp";
import jul28 from "@/assets/gallery/july2026-28.webp";
import jul29 from "@/assets/gallery/july2026-29.webp";
import oct1 from "@/assets/gallery/oct2026-1.webp";
import oct2 from "@/assets/gallery/oct2026-2.webp";
import oct3 from "@/assets/gallery/oct2026-3.webp";
import oct4 from "@/assets/gallery/oct2026-4.webp";
import oct5 from "@/assets/gallery/oct2026-5.webp";
import oct6 from "@/assets/gallery/oct2026-6.webp";
import oct7 from "@/assets/gallery/oct2026-7.webp";
import oct8 from "@/assets/gallery/oct2026-8.webp";
import oct9 from "@/assets/gallery/oct2026-9.webp";
import oct10 from "@/assets/gallery/oct2026-10.webp";
import oct11 from "@/assets/gallery/oct2026-11.webp";
import oct12 from "@/assets/gallery/oct2026-12.webp";
import dec1 from "@/assets/gallery/dec2026-1.webp";
import dec2 from "@/assets/gallery/dec2026-2.webp";
import dec3 from "@/assets/gallery/dec2026-3.webp";
import dec4 from "@/assets/gallery/dec2026-4.webp";
import dec5 from "@/assets/gallery/dec2026-5.webp";
import dec6 from "@/assets/gallery/dec2026-6.webp";
import dec7 from "@/assets/gallery/dec2026-7.webp";
import dec8 from "@/assets/gallery/dec2026-8.webp";
import dec9 from "@/assets/gallery/dec2026-9.webp";
import dec10 from "@/assets/gallery/dec2026-10.webp";
import dec11 from "@/assets/gallery/dec2026-11.webp";
import dec12 from "@/assets/gallery/dec2026-12.webp";
import dec13 from "@/assets/gallery/dec2026-13.webp";
import dec14 from "@/assets/gallery/dec2026-14.webp";
import dec15 from "@/assets/gallery/dec2026-15.webp";
import dec16 from "@/assets/gallery/dec2026-16.webp";
import dec17 from "@/assets/gallery/dec2026-17.webp";
import dec18 from "@/assets/gallery/dec2026-18.webp";
import dec19 from "@/assets/gallery/dec2026-19.webp";
import dec20 from "@/assets/gallery/dec2026-20.webp";
import dec21 from "@/assets/gallery/dec2026-21.webp";
import dec22 from "@/assets/gallery/dec2026-22.webp";
import dec23 from "@/assets/gallery/dec2026-23.webp";
import dec24 from "@/assets/gallery/dec2026-24.webp";
import dec25 from "@/assets/gallery/dec2026-25.webp";
import dec26 from "@/assets/gallery/dec2026-26.webp";
import dec27 from "@/assets/gallery/dec2026-27.webp";
import dec28 from "@/assets/gallery/dec2026-28.webp";
import dec29 from "@/assets/gallery/dec2026-29.webp";
import reelDara from "@/assets/gallery/reel-dara.mp4";
import reelDaraPoster from "@/assets/gallery/reel-dara-poster.webp";

const description =
  "See before-and-after results of our commercial kitchen cleaning services in Melbourne. Canopy, ductwork, and deep kitchen clean galleries organised by month.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Our Work | After Dark Canopy Cleaners — Melbourne Commercial Kitchen Cleaning" },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "kitchen canopy cleaning before and after, ductwork cleaning photos, Melbourne kitchen cleaning gallery",
      },
      { property: "og:title", content: "Our Work | After Dark Canopy Cleaners" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

/* ── Gallery data ─────────────────────────────────────────────────────────
 * To add a new month of photos, append a new group below:
 *   { month: "August", images: [ ... ] }
 * Each image: { src?: string (uploaded photo URL or omit for placeholder),
 *               label: string (shown in lightbox) }
 * ──────────────────────────────────────────────────────────────────────── */

export type GalleryImage = {
  /** Uploaded photo URL — omit while waiting for the real upload. */
  src?: string;
  label: string;
  /** When set, the item is a video reel; `src` acts as the poster frame. */
  video?: string;
};

export type GalleryMonth = {
  month: string;
  /** Chronological key "YYYY-MM" — tabs and the "All" grid are sorted by this. */
  date: string;
  images: GalleryImage[];
  /** Short-form vertical videos for this batch. */
  reels?: GalleryImage[];
};

/** January 2026 awareness/infographic batch. */
const jan2026: GalleryImage[] = [
  jan1, jan2, jan3, jan4, jan5, jan6, jan7, jan8,
  jan11, jan12, jan13, jan15, jan16, jan17, jan18, jan19, jan20, jan21,
  jan22, jan23, jan25,
].map((a, i) => ({
  src: a,
  label: `Canopy cleaning awareness graphic ${i + 1} — January 2026`,
}));

/** February 2026 awareness/service batch. */
const feb2026: GalleryImage[] = [
  feb11, feb12, feb21, feb22, feb31, feb32, feb41, feb42, feb5, feb6,
  feb7, feb8, feb9, feb10, feb12b, feb13, feb14, feb15, feb16,
  feb17, feb18, feb19, feb20, febTwentyOne, febTwentyTwo, feb23, feb24, feb25,
].map((a, i) => ({
  src: a,
  label: `Canopy cleaning awareness graphic ${i + 1} — February 2026`,
}));

/** April–May 2026 awareness/process batch. */
const apr2026: GalleryImage[] = [
  apr1, apr2, apr3, apr4, apr5, apr6, apr7, apr8, apr9, apr10,
  apr11, apr12, apr13, apr14, apr15, apr16, apr17, apr18, apr19, apr20,
  apr21, apr22, apr23, apr24, apr25, apr26, apr27, apr28, apr29, apr30,
].map((a, i) => ({
  src: a,
  label: `Canopy cleaning awareness graphic ${i + 1} — April–May 2026`,
}));

/** June 2026 compliance documents batch. */
const jun2026: GalleryImage[] = [
  jun1, jun2, jun3, jun4, jun5, jun6, jun7, jun8, jun9, jun10,
  jun11, jun12, jun13, jun14, jun15, jun16, jun17, jun18, jun19, jun20,
  jun21, jun22, jun23, jun24, jun25, jun26, jun27, jun28, jun29, jun30,
  jun31, jun32,
].map((a, i) => ({
  src: a,
  label: `Canopy cleaning awareness graphic ${i + 1} — June 2026`,
}));

/** July 2026 inspection-readiness batch. */
const jul2026: GalleryImage[] = [
  jul1, jul2, jul3, jul4, jul5, jul6, jul7, jul8, jul9, jul10,
  jul11, jul12, jul13, jul14, jul15, jul16, jul17, jul18, jul19, jul20,
  jul21, jul22, jul23, jul24, jul25, jul26, jul27, jul28, jul29,
].map((a, i) => ({
  src: a,
  label: `Canopy cleaning awareness graphic ${i + 1} — July 2026`,
}));

/** October 2026 compliance & team batch. */
const oct2026: GalleryImage[] = [
  oct1, oct2, oct3, oct4, oct5, oct6, oct7, oct8, oct9, oct10, oct11, oct12,
].map((a, i) => ({
  src: a,
  label: `Canopy cleaning awareness graphic ${i + 1} — October 2026`,
}));

/** October 2026 short-form video reels. */
const oct2026Reels: GalleryImage[] = [
  {
    label: "Dara talking head — After Dark Canopy Cleaners",
    src: reelDaraPoster,
    video: reelDara,
  },
];

/** December 2026 awareness/comparison batch. */
const dec2026: GalleryImage[] = [
  dec1, dec2, dec3, dec4, dec5, dec6, dec7, dec8, dec9, dec10,
  dec11, dec12, dec13, dec14, dec15, dec16, dec17, dec18,
  dec19, dec20, dec21, dec22, dec23, dec24, dec25, dec26, dec27,
  dec28, dec29,
].map((a, i) => ({
  src: a,
  label: `Canopy cleaning awareness graphic ${i + 1} — December 2026`,
}));



/**
 * Months are always displayed in chronological order (oldest → newest),
 * regardless of the order you add them here. To add a new batch, just append
 * a group anywhere in this list with the correct `date` key.
 */
const months: GalleryMonth[] = [
  {
    month: "January 2026",
    date: "2026-01",
    images: jan2026,
  },

  {
    month: "February 2026",
    date: "2026-02",
    images: feb2026,

  },
  {
    month: "April–May 2026",
    date: "2026-04",
    images: apr2026,
  },
  {
    month: "June 2026",
    date: "2026-06",
    images: jun2026,
  },
  {
    month: "July 2026",
    date: "2026-07",
    images: jul2026,

  },
  {
    month: "October 2026",
    date: "2026-10",
    images: oct2026,
    reels: oct2026Reels,
  },
  {
    month: "December 2026",
    date: "2026-12",
    images: dec2026,
    reels: [],
  },
];

/** Month groups in chronological order. */
const sortedMonths = [...months].sort((a, b) => a.date.localeCompare(b.date));

const PAGE_SIZE = 10;

type GalleryItem = GalleryImage & { month: string };

function GalleryPage() {
  const [active, setActive] = useState<string>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [shown, setShown] = useState(PAGE_SIZE);

  const all = useMemo<GalleryItem[]>(
    () => sortedMonths.flatMap((g) => g.images.map((img) => ({ ...img, month: g.month }))),
    []
  );

  const items = useMemo<GalleryItem[]>(
    () => (active === "All" ? all : all.filter((i) => i.month === active)),
    [active, all]
  );

  const reels = useMemo<GalleryItem[]>(
    () =>
      sortedMonths
        .filter((g) => active === "All" || g.month === active)
        .flatMap((g) => (g.reels ?? []).map((r) => ({ ...r, month: g.month }))),
    [active]
  );


  const visible = items.slice(0, shown);
  const hasMore = items.length > shown;

  const selectTab = (tab: string) => {
    setActive(tab);
    setShown(PAGE_SIZE); // reset pagination when switching groups
  };

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Our Work"
        subtitle="See the difference a professional clean makes."
        height="40vh"
        curveFill="#ffffff"
      />

      {/* Month filter tabs */}
      <section className="bg-background px-5 py-8 md:py-10">
        <Container className="flex flex-wrap justify-start gap-3 overflow-x-auto pb-1 md:justify-center md:overflow-visible">
          {["All", ...sortedMonths.map((m) => m.month)].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => selectTab(tab)}
              aria-pressed={active === tab}
              className={`shrink-0 rounded-full px-5 py-2 text-[13px] font-medium tracking-[0.5px] transition-all ${
                active === tab
                  ? "glass-card-blue text-trust"
                  : "glass-card-dark glass-hover-dark text-muted-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </Container>
      </section>

      {/* Reels */}
      {reels.length > 0 && (
        <section className="bg-background px-5 pb-4 pt-2">
          <Container>
            <h2 className="mb-5 text-center text-[12px] font-semibold uppercase tracking-[2px] text-trust">
              Reels
            </h2>
            <div className="flex flex-wrap items-start justify-center gap-4 pb-2 sm:gap-6">
              {reels.map((r, i) => (
                <button
                  key={`${r.label}-${i}`}
                  type="button"
                  onClick={() => setLightbox(r)}
                  aria-label={`Play ${r.label}`}
                  className="group relative aspect-[9/16] w-[160px] shrink-0 overflow-hidden rounded-xl bg-brand-dark shadow-[0_8px_28px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.03] sm:w-[200px]"
                >
                  {r.src && (
                    <img src={r.src} alt={r.label} loading="lazy" className="h-full w-full object-cover" />
                  )}
                  <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Gallery grid */}
      <section className="bg-background px-5 pb-24 pt-2 md:pb-28">

        <Container>
          {visible.length === 0 ? (
            <div className="glass-card-dark mx-auto max-w-md rounded-2xl px-8 py-14 text-center">
              <p className="text-[15px] font-semibold text-ink-900">Photos coming soon</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-ink">
                We haven't uploaded photos for {active} yet — check back after our next batch of jobs.
              </p>
            </div>
          ) : (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {visible.map((s, i) => (
              <Reveal key={`${s.label}-${i}`} delay={(i % 4) * 80}>
                <button
                  type="button"
                  onClick={() => setLightbox(s)}
                  aria-label={`View ${s.label}`}
                  className="zoom-img-target sheen-sweep group relative block w-full overflow-hidden rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] outline-none transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_36px_rgba(0,0,0,0.18)] focus-visible:ring-2 focus-visible:ring-trust"
                >
                  {/* Uniform aspect ratio cell — when real photos are uploaded,
                      the <img> uses object-cover so any aspect ratio crops
                      evenly and the grid never breaks. */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-dark">
                    {s.src ? (
                      <>
                        {/* Blurred fill so the cell stays uniform while the
                            full image is always visible uncropped. */}
                        <img
                          src={s.src}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-40 blur-xl"
                        />
                        <img
                          src={s.src}
                          alt={s.label}
                          loading="lazy"
                          className="zoom-img relative h-full w-full object-contain object-center"
                        />
                      </>
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink-900 to-ink-950 px-3 text-center">
                        <figcaption className="text-[12px] leading-tight text-white/40 sm:text-[13px]">
                          Before / After Photo
                          <span className="mt-2 block text-[10px] uppercase tracking-[1.5px] text-trust/70 sm:text-[11px]">
                            {s.month}
                          </span>
                        </figcaption>
                      </div>
                    )}

                    {/* Hover dark overlay (desktop) */}
                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
          )}

          {hasMore && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setShown((n) => n + PAGE_SIZE)}
                className="glass-card-dark glass-hover-dark rounded-full px-8 py-3 text-[13px] font-semibold tracking-[1px] text-ink-900"
              >
                Load More
              </button>
            </div>
          )}
        </Container>
      </section>

      <CTABanner />

      {/* Lightbox modal */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <figure
            className="relative flex max-h-[90vh] max-w-[95vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.video ? (
              <video
                src={lightbox.video}
                poster={lightbox.src}
                controls
                autoPlay
                playsInline
                className="max-h-[90vh] w-auto max-w-[95vw] rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              />
            ) : lightbox.src ? (
              <img
                src={lightbox.src}
                alt={lightbox.label}
                className="max-h-[90vh] w-auto max-w-[95vw] rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              />
            ) : (
              <div className="grid h-[60vh] w-[80vw] max-w-[640px] place-items-center rounded-2xl bg-gradient-to-br from-ink-900 to-ink-950 px-6 text-center">
                <figcaption className="text-white/50">
                  Before / After Photo
                  <span className="mt-3 block text-[12px] uppercase tracking-[1.5px] text-trust/80">
                    {lightbox.month}
                  </span>
                </figcaption>
              </div>
            )}
          </figure>

        </div>
      )}
    </>
  );
}
