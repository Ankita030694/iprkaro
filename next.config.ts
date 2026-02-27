import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/service',
        destination: '/our-services',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true, // 301 redirect
      },
      {
        source: '/help',
        destination: '/contact-us',
        permanent: true, // 301 redirect
      },
      {
        source: '/blog/:slug*',
        destination: '/resources/:slug*',
        permanent: true,
      },
      {
        source: '/trademark-registration-in-gaziabad',
        destination: '/trademark-registration-in-ghaziabad',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },

    ];
  },
  /* config options here */
};

export default nextConfig;
