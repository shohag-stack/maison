import { Menus } from "@/types/menusSection";
import Image from "next/image";
import React from "react";





export default function MenuSections({_id, title, subtitle, items}: Menus ) {
  return (
    <section
      key={_id}
      className="mb-20 pb-16 border-b border-stone-100 last:border-none"
    >
      {/* Section header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h2
            className="font-display font-light tracking-tight text-stone-950"
            style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
          >
            {title}
          </h2>
          <p className="text-xs tracking-widest2 uppercase font-body text-brand mt-1">
            {subtitle}
          </p>
        </div>
        <span
          className="font-display text-stone-200 font-light leading-none hidden sm:block"
          style={{ fontSize: "clamp(3rem, 4vw, 4rem)" }}
        >
          {String(Number(_id) + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Items */}
      <div className="divide-y divide-stone-100">
        {items.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row items-center gap-4 py-5 group hover:bg-surface-warm hover:-mx-4 hover:px-4 rounded-sm transition-all duration-150"
          >
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="aspect-4/3 md:w-30 md:h-30 overflow-hidden relative">
                  <Image src={item.thumbnail.asset.url} fill alt={item.name} unoptimized className="object-cover"/>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-stone-950">
                      {item.name}
                    </h3>
                    {item.dietary.map((d) => (
                      <span
                        key={d}
                        className="text-2xs font-medium tracking-wide uppercase font-body px-2 py-0.5 rounded-sm border"
                        style={{
                          borderColor: "rgba(200,169,126,0.3)",
                          color: "var(--color-brand-dark)",
                          backgroundColor: "rgba(200,169,126,0.08)",
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <p className="text-xl text-stone-400 leading-relaxed italic">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Dotted line */}
            <div
              className="hidden sm:block flex-1 max-w-[100px] mb-2 h-px"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #d1d5db 0px, #d1d5db 3px, transparent 3px, transparent 8px)",
              }}
            />

            <span className="font-display text-xl font-bold text-brand shrink-0">
              ${item.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
