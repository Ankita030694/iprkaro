import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
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
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      'framer-motion',
      'lucide-react',
    ],
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
        permanent: true,
      },
      {
        source: '/help',
        destination: '/contact-us',
        permanent: true,
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
      {
        source: '/pricing',
        destination: '/#pricing',
        permanent: true,
      },
      {
        source: '/trademark-for-startup',
        destination: '/want-to-register-trademark-for-startup',
        permanent: true,
      },
      {
        source: '/how-to-avoid-trademark-objection-before-filing',
        destination: '/How-to-avoid-trademark-objection-before-filing',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*\.(?:woff2?|ttf|eot|otf|mp4|webm|ogg))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
