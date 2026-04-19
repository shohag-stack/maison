import React from "react";
import { about } from "@/data/about";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="section-pad bg-stone-25">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div className="lg:pr-8">
            <div className="section-label">
              <span className="label-text">{about.label}</span>
            </div>
            <h2
              className="font-display font-light tracking-tight text-stone-950 mb-6"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", lineHeight: 1.1 }}
            >
              {about.headline.split("\n").map((line, i) => (
                <span
                  key={i}
                  className={["block", i === 1 ? "italic text-brand" : ""].join(
                    " ",
                  )}
                >
                  {line}
                </span>
              ))}
            </h2>
            <p className="text-stone-500 text-lg leading-loose mb-10">
              {about.body}
            </p>
            <Link href="/about" className="btn-ghost">
              Discover Our Story →
            </Link>
          </div>

          {/* Image with decorative border */}
          <div className="relative">
            <div
              className="absolute -top-6 -right-6 w-2/3 h-2/3 rounded-sm pointer-events-none border"
              style={{ borderColor: "rgba(200,169,126,0.3)", zIndex: 0 }}
            />
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl-warm z-10">
              <Image
                src={about.image}
                alt="Chef in kitchen"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
