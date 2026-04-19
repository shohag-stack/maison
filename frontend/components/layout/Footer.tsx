import Link from "next/link";

import { info, navLinks } from "@/data/footer";
// ─── SANITY HOOK: fetch footer settings ─────────────────────

export default function Footer({ name }: { name: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-stone-25">
      {/* Top gradient rule */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(to right, transparent, var(--color-brand), transparent)" }}
      />

      <div className="site-container py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20 pb-16 border-b border-stone-25/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-3xl font-light tracking-tight hover:text-brand transition-colors duration-200 block mb-3">
              {name}
            </Link>
            <p className="text-xs tracking-widest2 uppercase font-body text-stone-400 mb-6">
              Contemporary French Cuisine
            </p>
            <div className="brand-divider" />
            <p className="text-sm text-stone-400 leading-relaxed">{info.address}</p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-6">Explore</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-stone-400 hover:text-stone-25 transition-colors duration-150">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div>
            <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-6">Hours</p>
            <div className="flex flex-col gap-4">
              {info.hours.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-2xs tracking-widest uppercase font-body text-brand-light mb-1">{label}</p>
                  <p className="text-sm text-stone-400">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-6">Get in Touch</p>
            <div className="flex flex-col gap-3 mb-8">
              <a href={`tel:${info.phone}`} className="text-sm text-stone-400 hover:text-brand transition-colors duration-150">{info.phone}</a>
              <a href={`mailto:${info.email}`} className="text-sm text-stone-400 hover:text-brand transition-colors duration-150">{info.email}</a>
            </div>
            <div className="flex gap-3">
              {[
                { href: info.social.instagram, label: "Instagram", icon: <InstagramIcon /> },
                { href: info.social.facebook,  label: "Facebook",  icon: <FacebookIcon /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border rounded-sm text-stone-400 hover:text-brand hover:border-brand transition-all duration-150"
                  style={{ borderColor: "rgba(254,253,251,0.15)" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-stone-400 tracking-wide font-body">
            © {year} {name}. All rights reserved.
          </p>
          <p className="text-sm text-stone-400 font-body">
            Built with <span className="text-brand">♥</span> by{" "}
            <a href="https://rayso.studio" target="_blank" rel="noopener noreferrer" className="text-brand hover:opacity-70 transition-opacity">
              rayso.studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
