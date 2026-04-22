'use client'
import {heroData} from "@/data/hero"
import Link from 'next/link'
import Image from 'next/image'
import {useAnimate, motion, stagger} from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap";

export default function Hero() {

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [scope, animate] = useAnimate();



  useEffect(() => {
    if (!headlineRef.current) return;
 
    // Split each character into its own span wrapped in an overflow-hidden mask
    const text = heroData.headline;
    headlineRef.current.innerHTML = text
      .split("")
      .map(
        (char, i) =>
          `<span class="char-mask" style="display:inline-block;overflow:hidden;vertical-align:bottom;"><span class="char" style="display:inline-block;">${
            char === " " ? "&nbsp;" : char
          }</span>`
      )
      .join("");
 
    const chars = headlineRef.current.querySelectorAll<HTMLElement>(".char");
 
    // Set initial state: chars translated down (hidden behind their mask)
    gsap.set(chars, { yPercent: 110, opacity: 1 });
 
    // Animate in: staggered slide-up from below the clip boundary
    gsap.to(chars, {
      yPercent: 0,
      opacity: 1,
      duration: 1.05,
      ease: "expo.out",
      stagger: {
        each: 0.045,
        from: "start",
      },
      delay: 0.2,
    });
  }, []);



  return (
    <section ref={scope} className="relative h-screen flex items-end pb-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={heroData.image} alt="Restaurant" fill priority className="object-cover" />
        </div>   

        {/* Content */}
        <div className="site-container relative z-10 w-full">
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <Link href={heroData.ctaPrimary.href}   className="btn bg-white text-brand">{heroData.ctaPrimary.label}</Link>
            <Link href={heroData.ctaSecondary.href} className="btn btn-outline">{heroData.ctaSecondary.label}</Link>
          </motion.div>

          <h1 ref={headlineRef} className="text-stone-25 leading-[0.85] tracking-wide text-[60px] md:text-[280px] uppercase mt-4 md:mt-15 font-bolbo">
            
              {heroData.headline}
          </h1>

          
        </div>
      </section>
  )
}
