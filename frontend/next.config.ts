import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com"
      },
      {
        hostname: "cdn.sanity.io"
      },
      {
        hostname: 'www.lummi.ai'
      }

    ]
  },

  experimental: {
    turbo: {
      enabled: false,
    },
  },

};

export default nextConfig;
