'use client'
import React from "react";
import SmallCtaNote from "./SmallCtaNote";
import { info } from "@/data/reservationInfo";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-1 flex flex-col gap-10">
      {/* Hours */}
      <div>
        <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-5">
          Opening Hours
        </p>
        <div className="flex flex-col gap-4">
          {info.hours.map(({ label, value }) => (
            <div key={label}>
              <p className="text-2xs tracking-widest uppercase font-body text-stone-400 mb-1">
                {label}
              </p>
              <p className="text-sm text-stone-600">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-stone-100" />

      {/* Contact */}
      <div>
        <p className="text-xs tracking-widest2 uppercase font-body text-brand mb-5">
          Prefer to Call?
        </p>
        <a
          href={`tel:${info.phone}`}
          className="block text-sm text-stone-600 hover:text-brand transition-colors mb-2"
        >
          {info.phone}
        </a>
        <a
          href={`mailto:${info.email}`}
          className="block text-sm text-stone-600 hover:text-brand transition-colors"
        >
          {info.email}
        </a>
      </div>

      <div className="h-px bg-stone-100" />
      <SmallCtaNote />
    </div>
  );
}
