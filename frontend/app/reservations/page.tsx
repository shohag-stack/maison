"use client";

import Image from "next/image";
import Link from "next/link";
import {info} from "@/data/reservationInfo"
import CheckIcon from "@/components/ui/CheckIcon";
import Field from "@/components/ui/Field";
import ReservationForm from "@/components/form/ReservationForm";
import SmallCtaNote from "@/components/SmallCtaNote";
import ContactInfo from "@/components/ContactInfo";


export default function ReservationsPage() {


  return (
    <div className="bg-stone-25 min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ paddingTop: "var(--nav-height)" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
            alt="Restaurant" fill style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 overlay-dark" />
        </div>
        <div className="site-container relative z-10 py-24 text-center flex flex-col items-center gap-4">
          <p className="label-text">Book a Table</p>
          <h1 className="font-display font-light tracking-tight text-stone-25"
              style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 1 }}>
            Reservations
          </h1>
          <p className="text-stone-300/70 text-lg max-w-md leading-loose">
            We'd love to welcome you. Fill in the form below and we'll confirm your booking within 24 hours.
          </p>
        </div>
      </div>

      {/* ── Main grid ────────────────────────────────────── */}
      <div className="site-container py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">
          {/* ── Sidebar info ───────────────────────────── */}
          <ContactInfo />
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}
