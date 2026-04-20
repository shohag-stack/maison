"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const cards = [
  {
    type: "heading",
    eyebrow: "FROM THE KITCHEN",
    heading: "SIGNATURE\nPLATES",
    body: "We believe great food begins long before it reaches the plate — in the relationships with local farmers, the hours of preparation, and a deep respect for classical technique.",
  },
  {
    type: "dish",
    name: "DUCK CONFIT",
    price: "$32",
    description:
      "Slow-rendered duck leg, celeriac purée, pickled cherry, thyme jus",
    image:
      "/img/menu-1.jpg",
  },
  {
    type: "dish",
    name: "BOUILLABAISSE",
    price: "$54",
    description: "Marseille-style, saffron broth, rouille, grilled sourdough",
    image:
      "/img/menu-2.jpg",
  },
  {
    type: "dish",
    name: "CÔTE DE BOEUF",
    price: "$68",
    description: "28-day dry-aged, bordelaise sauce, pommes sarladaises",
    image:
      "/img/menu-3.jpg",
  },
];

export default function ConveyorBelt() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full bg-stone-25">
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex -ml-6">
          {cards.map((card, i) => (
            <div key={i} className="flex-none w-full md:w-1/2 lg:w-1/3 pl-6">
              {card.type === "heading" ? (
                <HeadingCard card={card as HeadingCardType} />
              ) : (
                <DishCard card={card as DishCardType} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Nav */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-auto">
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-14 h-14 bg-white flex items-center justify-center hover:bg-[#1B4D2E] hover:border-[#1B4D2E] transition-all duration-200 group"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M13 4L7 10L13 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#1B4D2E] group-hover:text-white transition-colors"
            />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="w-14 h-14 bg-white flex items-center justify-center hover:bg-[#1B4D2E] hover:border-[#1B4D2E] transition-all duration-200 group"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 4L13 10L7 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#1B4D2E] group-hover:text-white transition-colors"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Types ─────────────────────────────── */
type HeadingCardType = {
  type: "heading";
  eyebrow: string;
  heading: string;
  body: string;
};

type DishCardType = {
  type: "dish";
  name: string;
  price: string;
  description: string;
  image: string;
};

/* ─── Heading Card ──────────────────────── */
function HeadingCard({ card }: { card: HeadingCardType }) {
  return (
    <div className="lg:pr-8">
      <div className="section-label">
        <span className="label-text">{card.eyebrow}</span>
      </div>
      <h2
        className="font-display tracking-tight text-stone-950 mb-6"
        style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", lineHeight: 1.1 }}
      >
        {card.heading}
      </h2>
      <p className="text-stone-500 text-lg mb-10 font-medium">{card.body}</p>
    </div>
  );
}

/* ─── Dish Card ─────────────────────────── */
function DishCard({ card }: { card: DishCardType }) {
  return (
    <div
      className="h-full flex flex-col group overflow-hidden"
      style={{ minHeight: 460 }}
    >
      <div className="overflow-hidden relative w-full h-125">
        <Image
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          fill
        />
      </div>
      <div className="py-6">
        <div className="flex justify-between items-start mb-2">
          <h3
            className="text-lg font-black uppercase tracking-widest"
          >
            {card.name}
          </h3>
          <span
            className="text-lg font-bold "
          >
            {card.price}
          </span>
        </div>
        <p className="text-base leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  );
}
