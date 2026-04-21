import React from "react";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="section-pad bg-stone-25">
      <div className="site-container">
        <div className="text-center mb-4 md:mb-16">
          <div className="section-label justify-center">
            <span className="label-text">What They Say</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-stone-950">
            Voices from our guests
          </h2>
        </div>
        <div className="w-full">
          {testimonials.map(({ id, quote, author, source, url }, index) => (
            <div
              className={`w-full py-10 md:py-20 border-b border-b-brand`}
              key={id}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-3xl md:text-5xl mb-6">
                      Breathwork & Blue Lotus Retreat
                    </h3>
                    <p className="font-body text-lg font-medium">
                      A three-day immersive retreat combining somatic
                      breathwork, Kundalini yoga, sacred ceremony, and
                      integration practices. Designed to support nervous system
                      regulation, emotional release, and deep reconnection.
                    </p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="w-20 h-20 bg-brand rounded-full overflow-hidden mb-4">
                        <Image src={url} alt={author} width={100} height={100} />
                      </div>
                      <span className="font-display font-bold">Amara K.</span>
                      <p>The Times</p>
                    </div>

                    <div>
                      <span className="font-display font-bold">Date</span>
                      <p>April 10–12, 2026</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-500 h-full">
                  <Image
                    src={url}
                    alt={url}
                    className=""
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
