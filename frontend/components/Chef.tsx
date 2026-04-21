import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const chef = {
  name: "Chef Antoine Moreau",
  title: "Executive Chef & Founder",
  bio: [
    "Antoine Moreau spent twelve years in some of France's most celebrated kitchens before opening Maison Élara in 2012. Trained under the legendary Jean-Pierre Billoux in Dijon, he brought with him a profound respect for classical French technique and an equally deep conviction that great food must evolve with its moment.",
    '"The best meal I ever had was at my grandmother\'s table in Lyon," he says. "I have spent my entire career trying to recreate that feeling — not the dish, but the sense that someone cooked something just for you."',
  ],
  image: "/img/chef.jpg",
};

export default function Chef() {
  return (
    <section className="section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Decorative border */}
              <div
                className="absolute -bottom-5 -left-5 w-1/2 h-1/2 rounded-sm pointer-events-none -z-10 border"
                style={{ borderColor: "var(--color-brand)" }}
              />
            </div>
            {/* Text */}
            <div>
              <div className="section-label">
                <span className="label-text">The Chef</span>
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight text-stone-950 mb-3">
                {chef.name}
              </h2>
              <p className="text-sm tracking-widest2 uppercase font-body text-brand mb-6">
                {chef.title}
              </p>
              <div className="brand-divider" />
              <div className="flex flex-col gap-4">
                {chef.bio.map((p, i) => (
                  <p
                    key={i}
                    className={[
                      "text-stone-500 font-medium leading-relaxed",
                      i === 1
                        ? "font-display italic text-2xl text-brand"
                        : "text-xl",
                    ].join(" ")}
                  >
                    {p}
                  </p>
                ))}
                <Link
                  href={"/reservations"}
                  className="btn btn-secondary w-fit mt-10"
                >
                  {" "}
                  Reserve now{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
