import type { Metadata } from "next";
import { galleryImages } from "@/data/galleryImages";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual diary of life at Maison Élara.",
};

const OPTIONS = {next: {revalidate: 30}}

import GalleryClient from "./GalleryClient";
import { client } from "@/sanity/lib/client";
import { GALLERY_QUERY } from "@/sanity/lib/QUERY";
import PageHeader from "@/components/PageHeader";

export default async function GalleryPage() {

  let gallery = null;

  try {
    if (client) {
      gallery = await client.fetch(GALLERY_QUERY, {}, OPTIONS);
    }
  } catch (e) {
    console.log("Sanity fetch failed, using fallback");
  }

  const data = gallery ?? galleryImages;

  return (
    <div className="min-h-screen">
      <PageHeader title="Gallery" src="/img/gallery-header.jpg" />
      {/* Hero */}
      <div className="py-15 md:py-25">
        <div className="site-container text-center flex flex-col items-center gap-4">
          <p className="label-text text-sm">Visual Diary</p>
          <h1 className="font-display font-bold tracking-tight text-brand text-4xl md:text-6xl">
              
            {galleryImages.title}
          </h1>
          <p className="text-sbrand text-lg max-w-md leading-normal">
            Every corner of Élara has a story. Here are some of ours.
          </p>
        </div>
      </div>

      <GalleryClient images={data.images} />
    </div>
  );
}
