import React from "react";
import {stats} from "@/data/stats"

export default function StatsBar() {
  return (
    <div
      className="border-y py-14"
      style={{ borderColor: "rgba(254,253,251,0.08)" }}
    >
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label }: {value: string, label: string}, i: number) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2"
            >
              <span
                className="font-display font-bold text-6xl md:text-7xl leading-none "
              >
                {value}
              </span>
              <span className="text-2xs tracking-widest2 uppercase font-body text-stone-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
