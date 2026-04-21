"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "all" | "dishesh" | "food" | "team" | "events";

interface GalleryImage {
  _id: string;
  _key: string;
  alt?: string;
  caption?: string;
  category?: string;
  image: {
    asset: {
      url: string;
    };
  };
}

const CATEGORIES: Category[] = ["all", "dishesh", "food", "team", "events"];

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  console.log("showing gallery images", images);

  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered =
    active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="site-container pb-10">
        <div className="flex flex-wrap gap-3 justify-center bg-white">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={[
                "text-sm font-bold tracking-widest2 uppercase font-body px-6 py-3 rounded-sm border transition-all duration-200",
                active === cat
                  ? "bg-brand text-stone-25 border-brand"
                  : "border-stone-25/20 text-brand hover:border-brand hover:text-brand",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <div className="site-container pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {filtered.map((img, index) => (
            <div
              key={img._key || index}
              onClick={() => setLightbox(img)}
              className="mb-4 break-inside-avoid overflow-hidden cursor-pointer group img-zoom relative"
            >
              {/* image wrapper */}
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src={img.image.asset.url}
                  alt={img.alt || img._key}
                  fill
                  className="object-cover"
                />
              </div>

              {/* hover overlay */}
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/40 transition-all duration-300 flex items-end p-6">
                <p className="text-stone-25 text-sm font-body opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-stone-25 text-xs tracking-widest2 uppercase font-body hover:text-brand transition-colors"
            onClick={() => setLightbox(null)}
          >
            Close ✕
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-5xl aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={lightbox.image.asset.url}
                alt={lightbox.alt || lightbox._key}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-stone-400 text-sm mt-4 font-body">
              {lightbox.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
