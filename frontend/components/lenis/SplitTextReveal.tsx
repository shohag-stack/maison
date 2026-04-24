"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitLinesRevealProps {
  children: string | React.ReactNode;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  /** 0–1: how far into the viewport the element must be before triggering (default 0.15) */
  threshold?: number;
}

export default function SplitLinesReveal({
  children,
  as: Tag = "p",
  className = "",
  delay = 0,
  duration = 0.9,
  stagger = 0.12,
  ease = "expo.out",
  threshold = 0.15,
}: SplitLinesRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ── 1. Measure visual lines ──────────────────────────────────────────────
    const words = String(children).split(" ");

    el.innerHTML = words
      .map((w) => `<span class="gsap-word" style="display:inline;">${w}</span>`)
      .join("");

    const wordEls = Array.from(el.querySelectorAll<HTMLElement>(".gsap-word"));

    const lineMap = new Map<number, string[]>();
    wordEls.forEach((span) => {
      const top = Math.round(span.getBoundingClientRect().top);
      if (!lineMap.has(top)) lineMap.set(top, []);
      lineMap.get(top)!.push(span.innerText.trimEnd());
    });

    const lines = Array.from(lineMap.values()).map((w) => w.join(" "));

    // ── 2. Rebuild with mask wrappers ────────────────────────────────────────
    el.innerHTML = lines
      .map(
        (line) =>
          `<span style="display:block;overflow:hidden;line-height:inherit;">` +
          `<span class="gsap-line" style="display:block;">${line}</span>` +
          `</span>`
      )
      .join("");

    const lineEls = el.querySelectorAll<HTMLElement>(".gsap-line");

    // ── 3. Set initial hidden state ──────────────────────────────────────────
    gsap.set(lineEls, { yPercent: 110 });

    // ── 4. Animate only when element scrolls into view ───────────────────────
    const tween = gsap.to(lineEls, {
      yPercent: 0,
      duration,
      ease,
      stagger,
      delay,
      scrollTrigger: {
        trigger: el,
        // fires when the top of el crosses (1 - threshold) from the bottom of viewport
        start: `top ${(1 - threshold) * 100}%`,
        once: true, // only animate in, never reverse
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [children, delay, duration, stagger, ease, threshold]);

  return (
    <Tag ref={ref} className={className} aria-label={children}>
      {children}
    </Tag>
  );
}