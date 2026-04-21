import Chef from "@/components/Chef";
import CtaSection from "@/components/CtaSection";
import FeaturedDishesh from "@/components/FeaturedDishesh";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import Values from "@/components/Values";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about Maison Élara — our history, our chef, and our philosophy.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-stone-25 px-4 md:px-0">
        {/* ── Dark Hero ─────────────────────────────────────── */}
        <PageHeader title="About" src="/img/about-header.jpg" />

        <div className="text-center py-24 md:py-32 max-w-3xl mx-auto">
          <div className="section-label justify-center">
            <span className="label-text">What They Say</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-stone-950">
            A kitchen built on <br />
            conviction
          </h2>
          <p className="text-xl font-medium mt-4">
            Maison Élara was never meant to be a landmark. It was meant to be a
            place where food mattered deeply — to the people who made it and the
            people who ate it. Somehow, the rest followed.
          </p>
        </div>

        {/* ── Chef Section ───────────────────────────────────── */}
        <Chef />

        <div className="w-full h-[80vh]">
          <Image
            src={"/img/cta-full.jpg"}
            alt="cta"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>

        {/* ── Values ─────────────────────────────────────────── */}
        <Values />

        {/* ── Timeline ───────────────────────────────────────── */}
        <Timeline />
      </div>
      <div>
        {/* ── CTA ────────────────────────────────────────────── */}
        <FeaturedDishesh />
        <CtaSection />
      </div>
    </div>
  );
}
