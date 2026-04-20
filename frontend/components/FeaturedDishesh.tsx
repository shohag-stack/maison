import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dishes } from "@/data/dishes";
import ConveyorBelt from "./ConveyorBelt";

export default function FeaturedDishesh() {
  return (
    <section className="section-pad">
      <div className="site-container relative">
        {/* Header */}
        <ConveyorBelt />

      </div>
    </section>
  );
}
