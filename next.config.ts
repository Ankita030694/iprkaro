import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    domains: [],
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true, // 301 redirect
      },
      {
        source: '/help',
        destination: '/contact',
        permanent: true, // 301 redirect
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
