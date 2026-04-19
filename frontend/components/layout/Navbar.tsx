"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/menu",         label: "Menu" },
  { href: "/about",        label: "Our Story" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/contact",      label: "Contact" },
];

export default function Navbar({ name }: { name: string }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname                  = usePathname();
  const isHome                    = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 h-20 transition-all duration-500",
        transparent
          ? "bg-transparent border-b border-transparent"
          : scrolled
          ? "bg-stone-25/90 backdrop-blur-xl border-b border-stone-100"
          : "bg-stone-25 border-b border-stone-100",
      ].join(" ")}
    >
      <div className="site-container h-full flex items-center justify-between gap-8">

        {/* Logo */}
        <Link
          href="/"
          className={[
            "font-display text-2xl font-light tracking-tight shrink-0 transition-colors duration-300",
            transparent ? "text-stone-25" : "text-stone-950",
          ].join(" ")}
        >
          {name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[
                "relative text-xs font-medium tracking-widest2 uppercase font-body transition-colors duration-200",
                "after:absolute after:-bottom-1 after:left-0 after:h-px after:transition-all after:duration-300",
                pathname === href
                  ? "text-brand after:w-full after:bg-brand"
                  : transparent
                  ? "text-stone-25/70 hover:text-brand after:w-0 hover:after:w-full after:bg-brand"
                  : "text-stone-500 hover:text-brand after:w-0 hover:after:w-full after:bg-brand",
              ].join(" ")}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Reserve button — desktop */}
        <Link
          href="/reservations"
          className={[
            "hidden md:inline-flex text-xs font-medium tracking-widest2 uppercase font-body",
            "px-5 py-3 rounded-sm border transition-all duration-300 shrink-0",
            transparent
              ? "border-brand text-brand hover:bg-brand hover:text-stone-950"
              : "border-stone-950 text-stone-950 hover:bg-stone-950 hover:text-stone-25",
          ].join(" ")}
        >
          Reserve a Table
        </Link>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-[5px] p-2 z-10"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={[
                "block w-6 h-[1.5px] transition-all duration-300 origin-center",
                transparent ? "bg-stone-25" : "bg-stone-950",
                menuOpen && i === 0 ? "translate-y-[6.5px] rotate-45"  : "",
                menuOpen && i === 1 ? "opacity-0"                       : "",
                menuOpen && i === 2 ? "-translate-y-[6.5px] -rotate-45": "",
              ].join(" ")}
            />
          ))}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        className={[
          "fixed inset-0 bg-surface-dark flex flex-col items-center justify-center gap-10",
          "transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="font-display text-5xl font-light text-stone-25 hover:text-brand transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
        <Link
          href="/reservations"
          className="mt-4 btn btn-outline"
        >
          Reserve a Table
        </Link>
      </div>
    </header>
  );
}
