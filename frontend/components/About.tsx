import React from "react";
import { about } from "@/data/about";
import Image from "next/image";
import Link from "next/link";
import SplitTextReveal from "./lenis/SplitTextReveal";

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
              <SplitTextReveal className="font-display font-bold tracking-tight text-stone-950 mb-2 md:mb-6 text-4xl md:text-6xl">{about.headline}</SplitTextReveal>


            <SplitTextReveal className="text-stone-500 text-lg mb-10 font-medium">
              {about.body}
            </SplitTextReveal>
            <Image
              src={"/img/trust-badge.svg"}
              width={270}
              height={70}
              alt="trust-badge"
              className="mb-20"
            />
            <Link href="/about" className="btn btn-secondary">
              Discover Our Story →
            </Link>
          </div>

          {/* Image with decorative border */}
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden z-10">
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
