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
  async headers() {
    return [
      {
        // Cache static assets for 1 year (immutable)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images for 1 year with revalidation
        source: '/:path*.{jpg,jpeg,png,gif,svg,webp,avif,ico}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Cache font files for 1 year (immutable)
        source: '/:path*.{woff,woff2,ttf,otf,eot}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache other static assets for 1 year
        source: '/:path*.{css,js}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
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
      // Redirect for moved patent service pages (patent-services-in-state -> state)
      {
        source: '/services/patent-services/patent-services-in-:state',
        destination: '/services/patent-services/:state',
        permanent: true,
      },
      // Redirect for moved trademark registration pages (trademark-registration-in-state -> state)
      {
        source: '/services/trademark-registration/trademark-registration-in-:state',
        destination: '/services/trademark-registration/:state',
        permanent: true,
      },
      // Redirect for moved copyright protection pages (copyright-protection-in-state -> state)
      {
        source: '/services/copyright-protection/copyright-protection-in-:state',
        destination: '/services/copyright-protection/:state',
        permanent: true,
      },
      // Redirect for Indore trademark page to Madhya Pradesh
      {
        source: '/services/trademark-registration/trademark-registration-in-indore',
        destination: '/services/trademark-registration/madhya-pradesh',
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
