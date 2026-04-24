'use client'
import Link from "next/link";
import { info, navLinks } from "@/data/footer";
import { Mail, MapPin, Phone } from "lucide-react";
import SplitTextReveal from "@/components/lenis/SplitTextReveal"
import {motion} from "framer-motion"

export default function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-stone-25">
      {/* Gradient line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-brand), transparent)",
        }}
      />

      <div className="site-container py-16 md:py-20 lg:py-28">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pb-10">
          
          {/* BRAND */}
          <div className="sm:col-span-2">
            <Link
              href="/"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight hover:text-brand transition mb-3 block"
            >
              <SplitTextReveal>{name}</SplitTextReveal>
            </Link>

            <p className="text-[10px] sm:text-xs tracking-widest uppercase font-bold text-stone-400 mb-6">
              Contemporary French Cuisine
            </p>

            {/* VIDEO */}
            <video
              className="mb-6 w-full sm:w-3/4 lg:w-1/2"
              src="/videos/footer.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* CONTACT */}
            <div className="flex flex-col gap-3 text-sm sm:text-lg">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-3">
                <Phone size={18} />
                <p>{info.phone}</p>
              </motion.div >


              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              
              className="flex items-center gap-3">
                <Mail size={18} />
                <p>{info.email}</p>
              </motion.div >
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              
              
              className="flex items-center gap-3">
                <MapPin size={18} />
                <p>{info.address}</p>
              </motion.div >
            </div>
          </div>

          {/* NAV */}
          <div>
            <p className="text-xs tracking-widest uppercase text-secondary-light mb-5">
              <SplitTextReveal>Explore</SplitTextReveal>
            </p>

            <nav className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-lg sm:text-2xl hover:text-secondary-light transition"
                >
                  <SplitTextReveal>{label}</SplitTextReveal>
                </Link>
              ))}
            </nav>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-xs tracking-widest uppercase text-secondary-light mb-5">
              <SplitTextReveal>Socials</SplitTextReveal>
            </p>

            <div className="flex flex-col gap-3">
              {info.social.map(({ label, value }) => (
                <Link
                  key={label}
                  href={value}
                  className="text-lg sm:text-lg uppercase tracking-wide hover:text-secondary-light transition"
                >
                  <SplitTextReveal>{label}</SplitTextReveal>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* HOURS SECTION */}
        <div className="bg-secondary-light p-6 sm:p-8 lg:p-10 rounded-md flex flex-col sm:flex-row flex-wrap gap-6">
          {info.hours.map(({ label, days, value }) => (
            <div key={label} className="min-w-[140px]">
              <p className="text-brand font-display font-bold text-lg">
                <SplitTextReveal>
                {label}</SplitTextReveal>
              </p>

              {days && (
                <p className="text-base text-brand font-semibold"><SplitTextReveal>{days}</SplitTextReveal></p>
              )}

              <p className="text-base text-brand"> <SplitTextReveal>{value}</SplitTextReveal></p>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
          <p className="text-secondary-light">
            © {year} {name}. All rights reserved.
          </p>

          <p className="text-stone-25">
            Built with <span className="text-secondary-light">♥</span> by{" "}
            <a
              href="https://rayso.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-light hover:opacity-70"
            >
              rayso.studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}