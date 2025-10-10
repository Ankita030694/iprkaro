import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    domains: [],
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
  /* config options here */
};

export default nextConfig;
