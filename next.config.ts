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
        // Force indexing for all pages to override any platform defaults
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
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
        source: '/service/patent-services/patent-services-in-:state',
        destination: '/service/patent-services/:state',
        permanent: true,
      },
      // Redirect for moved trademark registration pages (trademark-registration-in-state -> state)
      {
        source: '/service/trademark-registration/trademark-registration-in-:state',
        destination: '/service/trademark-registration/:state',
        permanent: true,
      },
      // Redirect for moved copyright protection pages (copyright-protection-in-state -> state)
      {
        source: '/service/copyright-protection/copyright-protection-in-:state',
        destination: '/service/copyright-protection/:state',
        permanent: true,
      },
      // Redirect for Indore trademark page to Madhya Pradesh
      {
        source: '/service/trademark-registration/trademark-registration-in-indore',
        destination: '/service/trademark-registration/madhya-pradesh',
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
