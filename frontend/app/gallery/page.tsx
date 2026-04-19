import type { Metadata } from "next";
// import { images } from "@/data/galleryImages";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual diary of life at Maison Élara.",
};

const OPTIONS = {next: {revalidate: 30}}

import GalleryClient from "./GalleryClient";
import { client } from "@/sanity/client";
import { GALLERY_QUERY } from "@/sanity/QUERY";

export default async function GalleryPage() {

  const gallery = await client.fetch(GALLERY_QUERY, {}, OPTIONS)

  return (
    <div className="bg-surface-dark min-h-screen">
      {/* Hero */}
      <div style={{ paddingTop: "calc(80px + 5rem)", paddingBottom: "4rem" }}>
        <div className="site-container text-center flex flex-col items-center gap-4">
          <p className="label-text">Visual Diary</p>
          <h1 className="font-display font-light tracking-tight text-stone-25"
              style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)", lineHeight: 1 }}>
            {gallery.title}
          </h1>
          <p className="text-stone-400 text-lg max-w-md leading-loose">
            Every corner of Élara has a story. Here are some of ours.
          </p>
        </div>
      </div>

      <GalleryClient images={gallery.images} />
    </div>
  );
}
