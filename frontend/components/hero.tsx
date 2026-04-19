import {heroData} from "@/data/hero"
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] max-h-[1000px] flex items-end pb-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={heroData.image} alt="Restaurant" fill priority style={{ objectFit: "cover" }} />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="site-container relative z-10 w-full">
          <p className="label-text animate-fade-in-up mb-5">Est. 2012 · Paris</p>

          <h1 className="font-display font-light tracking-tight leading-none text-stone-25 mb-6"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}>
            {heroData.headline.split("\n").map((line:string, i:number) => (
              <span key={i} className={[
                "block animate-fade-in-up",
                i === 1 ? "italic pl-12 lg:pl-24 text-brand-light delay-200" : "delay-100",
              ].join(" ")}>
                {line}
              </span>
            ))}
          </h1>

          <p className="text-stone-200/70 text-lg max-w-md leading-relaxed mb-10 animate-fade-in-up delay-300">
            {heroData.subline}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
            <Link href={heroData.ctaPrimary.href}   className="btn btn-primary">{heroData.ctaPrimary.label}</Link>
            <Link href={heroData.ctaSecondary.href} className="btn btn-outline">{heroData.ctaSecondary.label}</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-8 lg:right-20 flex flex-col items-center gap-3 z-10 hidden sm:flex animate-fade-in-up delay-500">
          <div className="w-px h-14 scroll-line" style={{ background: "linear-gradient(to bottom, var(--color-brand), transparent)" }} />
          <span className="text-2xs tracking-widest2 uppercase font-body text-stone-400" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        </div>
      </section>
  )
}
