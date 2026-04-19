import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ReservationCta() {
  return (
    <section className="relative py-44 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=1800&q=80"
            alt="Restaurant atmosphere" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="absolute inset-0 overlay-dark" />
        <div className="site-container relative z-10 text-center flex flex-col items-center">
          <p className="label-text mb-4">— Join Us —</p>
          <h2 className="font-display font-light tracking-tight text-stone-25 mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)", lineHeight: 1.1 }}>
            An evening to remember
          </h2>
          <p className="text-stone-300/70 text-lg leading-loose mb-10 max-w-lg">
            Tables available Tuesday through Saturday, lunch and dinner.<br />
            Private dining for groups of eight or more.
          </p>
          <Link href="/reservations" className="btn btn-primary">Make a Reservation</Link>
        </div>
      </section>
  )
}
