import {heroData} from "@/data/hero"
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end pb-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={heroData.image} alt="Restaurant" fill priority className="object-cover" />
        </div>   

        {/* Content */}
        <div className="site-container relative z-10 w-full">
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
            <Link href={heroData.ctaPrimary.href}   className="btn bg-white text-brand">{heroData.ctaPrimary.label}</Link>
            <Link href={heroData.ctaSecondary.href} className="btn btn-outline">{heroData.ctaSecondary.label}</Link>
          </div>

          <h1 className="text-stone-25 leading-[0.85] tracking-wide text-[60px] md:text-[290px] uppercase mt-4 md:mt-15 font-bolbo">
            
              {heroData.headline}
          </h1>

          
        </div>
      </section>
  )
}
