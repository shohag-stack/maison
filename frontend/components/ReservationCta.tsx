'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ReservationCta() {
  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/img/cta-cover.jpg"
          alt="Restaurant atmosphere"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Floating white card */}
      <div
        className="relative z-10 bg-white mx-4 md:mx-12 lg:mx-24 px-8 md:px-20 pt-16 pb-28 text-center max-w-4xl w-full"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
      >
        <p
          className="text-label font-bold tracking-[0.25em] uppercase mb-6"
        >
          Join Us
        </p>
        <h2
          className="font-display uppercase leading-[0.92] mb-4 text-6xl"
        >
          A Devotion to the<br />Craft of Cooking
        </h2>
        <p
          className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Tables available Tuesday through Saturday, lunch and dinner.
          Private dining for groups of eight or more.
        </p>

        {/* CTA button — outlined, light yellow-green fill like the design */}
        <Link
          href="/reservations"
          className="btn btn-secondary"
        >
          Reserve A Table →
        </Link>
      </div>
    </section>
  )
}