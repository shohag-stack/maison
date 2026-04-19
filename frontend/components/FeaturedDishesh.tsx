import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dishes } from "@/data/dishes";

export default function FeaturedDishesh() {
  return (
    <section className="section-pad bg-surface-warm">
      <div className="site-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="section-label">
              <span className="label-text">From the Kitchen</span>
            </div>
            <h2
              className="font-display font-light tracking-tight text-stone-950"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
            >
              Signature Plates
            </h2>
          </div>
          <Link href="/menu" className="btn btn-outline-dark">
            Full Menu
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dishes.map(({ id, name, description, price, tag, image }) => (
            <div
              key={id}
              className="bg-stone-25 rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl-warm"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden img-zoom">
                <Image
                  src={image}
                  alt={name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className="absolute top-4 left-4 z-10 text-2xs font-medium tracking-widest uppercase font-body px-3 py-1 rounded-sm bg-brand text-stone-950">
                  {tag}
                </span>
              </div>
              {/* Info */}
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-2xl font-normal tracking-tight text-stone-950">
                    {name}
                  </h3>
                  <span className="font-display text-xl text-brand shrink-0">
                    ${price}
                  </span>
                </div>
                <p className="text-base text-stone-500 italic">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
