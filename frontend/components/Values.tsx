import React from 'react'
const values = [
  {
    n: "01",
    title: "Seasonal Integrity",
    body: "We build every menu around what is growing and thriving right now — never what is merely available. Our suppliers include forty small-scale farms and fisheries.",
  },
  {
    n: "02",
    title: "Classical Devotion",
    body: "French classical technique is not a constraint for us — it is a language. Mastery of the foundations is what allows creative expression to be meaningful.",
  },
  {
    n: "03",
    title: "Generous Hospitality",
    body: "Every person who walks through our door deserves to feel genuinely welcomed. Service at Élara is attentive, knowledgeable, and never formal for formality's sake.",
  },
  {
    n: "04",
    title: "Zero Waste Commitment",
    body: "Respect for ingredients means using them fully. Stocks, preserves, ferments — we find a use for everything, because discarding good food is a form of ingratitude.",
  },
];

export default function Values() {
  return (
    <section className="section-pad bg-stone-25">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left sticky header */}
            <div className="lg:sticky lg:top-28">
              <h2
                className="font-display font-bold text-4xl md:text-6xl tracking-tight text-stone-950">
                Our guiding principles
              </h2>
                <p className="text-medium text-brand text-xl mt-4">Antoine Moreau spent twelve years in some of France&apos;s most celebrated kitchens before opening Maison Élara in 2012. Trained under the legendary Jean-Pierre Billoux in Dijon, he brought with him a profound respect for classical French technique and an equally deep conviction that great food must evolve with its moment.</p>
            </div>
            {/* Right values */}
            <div className="flex flex-col gap-10">

              {values.map(({ n, title, body }) => (
                <div key={n} className="flex flex-col md:flex-row gap-6 group bg-white p-10 overflow-hidden">
                  <div>
                    <span className="font-display text-5xl font-light leading-none text-stone-200 group-hover:text-brand transition-colors duration-300">
                      {n}
                    </span>
                  </div>
                  <div className="pt-1">
                    
                    <h3 className="font-display lowercase text-3xl md:text-4xl font-bold tracking-tight text-stone-950 mb-3">
                      {title}
                    </h3>
                    <div
                      className="w-10 h-px mb-4 transition-all duration-300 group-hover:w-16"
                      style={{ backgroundColor: "var(--color-brand)" }}
                    />
                    <p className="text-stone-500 leading-normal font-medium">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
