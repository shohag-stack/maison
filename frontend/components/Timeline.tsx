import React from 'react'
import SplitTextReveal from "@/components/lenis/SplitTextReveal"
import { timeline } from '@/data/timeline';



export default function Timeline() {

  const hoverColors = [
  "hover:bg-red-300",
  "hover:bg-blue-300",
  "hover:bg-green-300",
  "hover:bg-yellow-300",
  "hover:bg-purple-300",
  "hover:bg-pink-300",
];


  return (
    <section className="pb-24 bg-white">
        <div className="site-container">
          <div className="text-center py-24 md:pt-32 max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-stone-950">
                <SplitTextReveal>We have Twelve years in the making</SplitTextReveal>
              </h2>
        </div>

          <div className="flex flex-col">
            {timeline.map(({ year, event }, i) => (
              <div
                key={i}
                className={`relative
                            flex flex-col md:flex-row justify-between items-start md:items-center
                            py-6 gap-4 md:gap-20
                            bg-white border-t-2 border-t-brand
                            mt-2 md:-mt-8 first:mt-0
                            transition-all duration-300 ease-out
                            hover:-translate-y-6 ${hoverColors[i % hoverColors.length]} `}
              >
                {/* Year */}
                <span className="font-display text-3xl font-bold text-brand">
                  {year}
                </span>
                {/* Event */}
                <p className="w-full font-display text-2xl md:text-3xl font-bold text-brand">
                  {event}
                </p>
                <p className='font-display text-3xl font-bold text-brand'>{i+1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
