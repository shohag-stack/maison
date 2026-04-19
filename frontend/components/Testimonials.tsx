import React from 'react'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
          <section className="section-pad bg-stone-25">
        <div className="site-container-narrow">
          <div className="text-center mb-16">
            <div className="section-label justify-center"><span className="label-text">What They Say</span></div>
            <h2 className="font-display font-light tracking-tight text-stone-950"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
              Voices from our guests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ id, quote, author, source }) => (
              <blockquote key={id}
                className="p-8 border border-stone-100 rounded-xl hover:border-brand-light hover:shadow-md transition-all duration-300">
                <span className="font-display text-5xl leading-none block mb-4 text-brand">&ldquo;</span>
                <p className="font-display italic text-lg text-stone-500 leading-loose mb-6">{quote}</p>
                <footer>
                  <p className="text-sm font-medium text-stone-950">{author}</p>
                  <p className="text-2xs tracking-widest uppercase font-body text-brand mt-1">{source}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

  )
}
