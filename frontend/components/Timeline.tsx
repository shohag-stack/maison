import React from 'react'
const timeline = [
  {
    year: "2012",
    event: "Maison Élara opens on Rue de la Paix with 40 covers.",
  },
  {
    year: "2014",
    event: "First Michelin Star awarded. Menu shifts to fully seasonal.",
  },
  {
    year: "2016",
    event: "Private dining room added. Farm partnerships reach 20 producers.",
  },
  {
    year: "2018",
    event: "Second Michelin Star. Chef Antoine named Restaurateur of the Year.",
  },
  {
    year: "2021",
    event: "Third Michelin Star. Restaurant expands to 80 covers.",
  },
  {
    year: "2024",
    event: "Launch of Élara at Home experience and cooking classes.",
  },
];



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
              <h2 className="font-display text-6xl font-bold tracking-tight text-stone-950">
                We have Twelve years in the making
              </h2>
        </div>

          <div className="flex flex-col">
            {timeline.map(({ year, event }, i) => (
              <div
                key={i}
                className={`relative
        flex justify-between items-center
        py-6 gap-20
        bg-white border-t-2 border-t-brand
        -mt-8 first:mt-0
        transition-all duration-300 ease-out
        hover:-translate-y-6 ${hoverColors[i % hoverColors.length]} `}
              >
                {/* Year */}
                <span className="font-display text-3xl font-bold text-brand">
                  {year}
                </span>
                {/* Event */}
                <p className="w-full font-display text-3xl font-bold text-brand">
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
