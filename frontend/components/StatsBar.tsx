'use client'
import React from "react";
import { stats } from "@/data/stats";
import { delay, easeIn, motion } from "framer-motion";

export default function StatsBar() {
  return (
    <div
      className="border-y py-14"
      style={{ borderColor: "rgba(254,253,251,0.08)" }}
    >
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, easeIn, delay: 0.1 }}
                className="font-display font-bold text-6xl md:text-7xl leading-none"
              >
                {item.value}{" "}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, easeIn, delay: 0.1 }}
                
                className="text-2xs tracking-widest2 uppercase font-body text-stone-500">
                {item.label}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
