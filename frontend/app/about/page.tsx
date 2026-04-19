import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about Maison Élara — our history, our chef, and our philosophy.",
};

// ─── SANITY HOOK: fetch aboutPage document ──────────────────
const chef = {
  name:  "Chef Antoine Moreau",
  title: "Executive Chef & Founder",
  bio: [
    "Antoine Moreau spent twelve years in some of France's most celebrated kitchens before opening Maison Élara in 2012. Trained under the legendary Jean-Pierre Billoux in Dijon, he brought with him a profound respect for classical French technique and an equally deep conviction that great food must evolve with its moment.",
    '"The best meal I ever had was at my grandmother\'s table in Lyon," he says. "I have spent my entire career trying to recreate that feeling — not the dish, but the sense that someone cooked something just for you."',
    "At Élara, that philosophy manifests in menus that shift with the seasons and with what the market offers each morning. No two months are exactly alike.",
  ],
  image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
};

const values = [
  { n: "01", title: "Seasonal Integrity",     body: "We build every menu around what is growing and thriving right now — never what is merely available. Our suppliers include forty small-scale farms and fisheries." },
  { n: "02", title: "Classical Devotion",      body: "French classical technique is not a constraint for us — it is a language. Mastery of the foundations is what allows creative expression to be meaningful." },
  { n: "03", title: "Generous Hospitality",    body: "Every person who walks through our door deserves to feel genuinely welcomed. Service at Élara is attentive, knowledgeable, and never formal for formality's sake." },
  { n: "04", title: "Zero Waste Commitment",   body: "Respect for ingredients means using them fully. Stocks, preserves, ferments — we find a use for everything, because discarding good food is a form of ingratitude." },
];

const timeline = [
  { year: "2012", event: "Maison Élara opens on Rue de la Paix with 40 covers." },
  { year: "2014", event: "First Michelin Star awarded. Menu shifts to fully seasonal." },
  { year: "2016", event: "Private dining room added. Farm partnerships reach 20 producers." },
  { year: "2018", event: "Second Michelin Star. Chef Antoine named Restaurateur of the Year." },
  { year: "2021", event: "Third Michelin Star. Restaurant expands to 80 covers." },
  { year: "2024", event: "Launch of Élara at Home experience and cooking classes." },
];

export default function AboutPage() {
  return (
    <div className="bg-stone-25">

      {/* ── Dark Hero ─────────────────────────────────────── */}
      <div className="bg-surface-dark overflow-hidden" style={{ paddingTop: "var(--nav-height)" }}>
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            {/* Text */}
            <div className="flex flex-col justify-center gap-6 py-24 lg:pr-16">
              <p className="label-text">Our Story</p>
              <h1 className="font-display font-light tracking-tight text-stone-25"
                  style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", lineHeight: 1.1 }}>
                A kitchen built on<br />
                <em className="text-brand-light">conviction</em>
              </h1>
              <p className="text-stone-400 text-lg leading-loose max-w-md">
                Maison Élara was never meant to be a landmark. It was meant to be a place where food mattered deeply — to the people who made it and the people who ate it. Somehow, the rest followed.
              </p>
            </div>
            {/* Image */}
            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=900&q=80"
                alt="Restaurant interior" fill style={{ objectFit: "cover" }} priority />
              {/* Left fade */}
              <div className="absolute inset-0 pointer-events-none"
                   style={{ background: "linear-gradient(to right, var(--color-surface-dark) 0%, transparent 35%)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Chef Section ───────────────────────────────────── */}
      <section className="section-pad bg-surface-warm">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl-warm">
                <Image src={chef.image} alt={chef.name} fill style={{ objectFit: "cover" }} />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-5 -left-5 w-1/2 h-1/2 rounded-sm pointer-events-none -z-10 border"
                   style={{ borderColor: "var(--color-brand)" }} />
            </div>
            {/* Text */}
            <div>
              <div className="section-label"><span className="label-text">The Chef</span></div>
              <h2 className="font-display text-4xl lg:text-5xl font-light tracking-tight text-stone-950 mb-1">
                {chef.name}
              </h2>
              <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-6">{chef.title}</p>
              <div className="brand-divider" />
              <div className="flex flex-col gap-4">
                {chef.bio.map((p, i) => (
                  <p key={i} className={["text-stone-500 leading-loose", i === 1 ? "font-display italic text-xl text-stone-600" : "text-base"].join(" ")}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────── */}
      <section className="section-pad bg-stone-25">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left sticky header */}
            <div className="lg:sticky lg:top-28">
              <div className="section-label"><span className="label-text">What We Believe</span></div>
              <h2 className="font-display font-light tracking-tight text-stone-950"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", lineHeight: 1.1 }}>
                Our guiding<br />
                <em className="text-brand">principles</em>
              </h2>
            </div>
            {/* Right values */}
            <div className="flex flex-col gap-10">
              {values.map(({ n, title, body }) => (
                <div key={n} className="flex gap-6 group">
                  <div>
                    <span className="font-display text-5xl font-light leading-none text-stone-200 group-hover:text-brand transition-colors duration-300">
                      {n}
                    </span>
                  </div>
                  <div className="pt-1">
                    <div className="w-10 h-px mb-4 transition-all duration-300 group-hover:w-16"
                         style={{ backgroundColor: "var(--color-brand)" }} />
                    <h3 className="font-display text-2xl font-normal tracking-tight text-stone-950 mb-3">{title}</h3>
                    <p className="text-stone-500 leading-loose">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────── */}
      <section className="section-pad bg-surface-dark">
        <div className="site-container-narrow">
          <div className="mb-14">
            <div className="section-label"><span className="label-text">Our Journey</span></div>
            <h2 className="font-display font-light tracking-tight text-stone-25"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
              Twelve years in the making
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {timeline.map(({ year, event }, i) => (
              <div key={i} className="grid grid-cols-[80px_32px_1fr] items-start gap-x-4 group">
                {/* Year */}
                <span className="font-display text-2xl font-light text-brand text-right pt-0.5">{year}</span>
                {/* Line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0 border-2 border-brand bg-surface-dark group-hover:bg-brand transition-colors duration-200" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ backgroundColor: "rgba(254,253,251,0.12)", minHeight: "40px" }} />
                  )}
                </div>
                {/* Event */}
                <p className="text-stone-400 leading-loose pb-8 group-hover:text-stone-25 transition-colors duration-200">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section-pad bg-stone-25">
        <div className="site-container text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-light tracking-tight text-stone-950"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}>
            Come and see for yourself
          </h2>
          <p className="text-stone-500 text-lg leading-loose max-w-lg">
            The best way to understand what we do is to sit down, let us look after you, and taste the food.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/reservations" className="btn btn-primary">Reserve a Table</Link>
            <Link href="/menu"         className="btn btn-outline-dark">View the Menu</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
