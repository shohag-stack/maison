import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import type { PortableTextComponents } from "@portabletext/react";

type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
  };
};


export const components: PortableTextComponents = {
  types: {
    image: ({ value }: {value: string}) => (
      <Image
        src={urlFor(value).width(800).url()}
        alt="blog"
        width={800}
        height={500}
        className="my-8"
      />
    ),

    imageGrid: ({ value }: {value: {images: SanityImage[]}}) => {
      if (!value?.images) return null;

      return (<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {value.images.map((img, i) => {
          if (!img?.asset) return null;
          return (
            <Image
            key={i}
            src={urlFor(img).width(400).url()}
            alt=""
            className="w-full object-cover"
            width={400}
            height={300}
          />
          )
    })}
      </div>
  )},

    
  },
};