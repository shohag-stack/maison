'use client'
import React from "react";
import SplitTextReveal from "@/components/lenis/SplitTextReveal";
import { values } from "@/data/Values";
import { easeInOut, motion } from "framer-motion";

export default function Values() {
  return (
    <section className="section-pad bg-stone-25">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left sticky header */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-stone-950">
              <SplitTextReveal>Our guiding principles</SplitTextReveal>
            </h2>
            <SplitTextReveal className="text-medium text-brand text-xl mt-4">
              Antoine Moreau spent twelve years in some of France&apos;s most
              celebrated kitchens before opening Maison Élara in 2012. Trained
              under the legendary Jean-Pierre Billoux in Dijon, he brought with
              him a profound respect for classical French technique and an
              equally deep conviction that great food must evolve with its
              moment.
            </SplitTextReveal>
          </div>
          {/* Right values */}
          <div className="flex flex-col gap-10">
            {values.map(({ n, title, body }) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                key={n}
                className="flex flex-col md:flex-row gap-6 group bg-white p-10 overflow-hidden"
              >
                <div>
                  <span className="font-display text-5xl font-light leading-none text-stone-200 group-hover:text-brand transition-colors duration-300">
                    <SplitTextReveal>{n}</SplitTextReveal>
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="font-display lowercase text-3xl md:text-4xl font-bold tracking-tight text-stone-950 mb-3">
                    <SplitTextReveal>{title}</SplitTextReveal>
                  </h3>
                  <div
                    className="w-10 h-px mb-4 transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: "var(--color-brand)" }}
                  />
                  <SplitTextReveal className="text-stone-500 leading-normal font-medium">
                    {body}
                  </SplitTextReveal>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
