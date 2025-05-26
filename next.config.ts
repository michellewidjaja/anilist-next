import type { NextConfig } from "next";

import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "anilist.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img1.ak.crunchyroll.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
});

export default nextConfig as NextConfig;
