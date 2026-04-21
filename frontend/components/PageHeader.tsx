import Image from "next/image";
import React from "react";

export default function PageHeader({
  title,
  src,
  desc,
}: {
  title: string;
  src: string;
  desc?: string;
}) {
  return (
    <div
      className="relative overflow-hidden mt-18"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      <div className="absolute inset-0">
        <Image
          src={`${src}`}
          alt="Restaurant"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="site-container relative z-10 py-24 text-center flex flex-col items-start justify-baseline gap-4">
        <h1 className="font-bold font-bolbo text-6xl md:text-[240px] leading-normal tracking-wider text-stone-25">
          {title}
        </h1>
        {desc && (
          <p className="text-stone-300/70 text-lg max-w-md leading-loose">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}
