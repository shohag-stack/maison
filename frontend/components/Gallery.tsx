import React from 'react'
import {gallery} from "@/data/gallery"
import Image from 'next/image'
import Link from 'next/link'


export default function Gallery() {

  return (
    <section className="section-pad bg-surface-warm">
        <div className="site-container">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <div className="section-label"><span className="label-text">Visual Diary</span></div>
              <h2 className="font-display font-light tracking-tight text-stone-950"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
                Life at Élara
              </h2>
            </div>
            <Link href="/gallery" className="btn btn-outline-dark">View Gallery</Link>
          </div>

          {/* Bento-style grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridTemplateRows: "260px 260px" }}>
            {gallery.map(({ id, image, alt }, i) => (
              <div key={id}
                className={[
                  "relative rounded-xl overflow-hidden img-zoom",
                  i === 0 ? "row-span-2" : "",
                ].join(" ")}>
                <Image src={image} alt={alt} fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
