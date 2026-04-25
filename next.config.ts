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
      // Location-based redirects to resolve duplicates
      { source: '/trademark-by-location/andhra-pradesh', destination: '/trademark-registration-in-andhra-pradesh', permanent: true },
      { source: '/trademark-by-location/arunachal-pradesh', destination: '/trademark-registration-in-arunachal-pradesh', permanent: true },
      { source: '/trademark-by-location/assam', destination: '/trademark-registration-in-assam', permanent: true },
      { source: '/trademark-by-location/bihar', destination: '/trademark-registration-in-bihar', permanent: true },
      { source: '/trademark-by-location/goa', destination: '/trademark-registration-in-goa', permanent: true },
      { source: '/trademark-by-location/gujarat', destination: '/trademark-registration-in-gujrat', permanent: true },
      { source: '/trademark-by-location/haryana', destination: '/trademark-registration-in-haryana', permanent: true },
      { source: '/trademark-by-location/himachal-pradesh', destination: '/trademark-registration-in-himachal-pradesh', permanent: true },
      { source: '/trademark-by-location/jammu-and-kashmir', destination: '/trademark-registration-in-jammu-and-kashmir', permanent: true },
      { source: '/trademark-by-location/jharkhand', destination: '/trademark-registration-in-jharkhand', permanent: true },
      { source: '/trademark-by-location/karnataka', destination: '/trademark-registration-in-karnataka', permanent: true },
      { source: '/trademark-by-location/kerala', destination: '/trademark-registration-in-kerela', permanent: true },
      { source: '/trademark-by-location/madhya-pradesh', destination: '/trademark-registration-in-madhya-pradesh', permanent: true },
      { source: '/trademark-by-location/maharashtra', destination: '/trademark-registration-in-maharashtra', permanent: true },
      { source: '/trademark-by-location/manipur', destination: '/trademark-registration-in-manipur', permanent: true },
      { source: '/trademark-by-location/meghalaya', destination: '/trademark-registration-in-meghalaya', permanent: true },
      { source: '/trademark-by-location/mizoram', destination: '/trademark-registration-in-mizoram', permanent: true },
      { source: '/trademark-by-location/nagaland', destination: '/trademark-registration-in-nagaland', permanent: true },
      { source: '/trademark-by-location/odisha', destination: '/trademark-registration-in-odisha', permanent: true },
      { source: '/trademark-by-location/punjab', destination: '/trademark-registration-in-punjab', permanent: true },
      { source: '/trademark-by-location/rajasthan', destination: '/trademark-registration-in-rajasthan', permanent: true },
      { source: '/trademark-by-location/sikkim', destination: '/trademark-registration-in-sikkim', permanent: true },
      { source: '/trademark-by-location/tamil-nadu', destination: '/trademark-registration-in-tamil-nadu', permanent: true },
      { source: '/trademark-by-location/telangana', destination: '/trademark-registration-in-telangana', permanent: true },
      { source: '/trademark-by-location/tripura', destination: '/trademark-registration-in-tripura', permanent: true },
      { source: '/trademark-by-location/uttar-pradesh', destination: '/trademark-registration-in-uttar-pradesh', permanent: true },
      { source: '/trademark-by-location/uttarakhand', destination: '/trademark-registration-in-uttarakhand', permanent: true },
      { source: '/trademark-by-location/west-bengal', destination: '/trademark-registration-in-west-bengal', permanent: true },
      { source: '/trademark-by-location/delhi', destination: '/trademark-registration-in-delhi', permanent: true },
      { source: '/trademark-by-location/chandigarh', destination: '/trademark-registration-in-chandigarh', permanent: true },
      { source: '/trademark-by-location/hyderabad', destination: '/trademark-registration-in-hyderabad', permanent: true },
      { source: '/trademark-by-location/bengaluru', destination: '/trademark-registration-in-bengaluru', permanent: true },
      { source: '/trademark-by-location/mumbai', destination: '/trademark-registration-in-mumbai', permanent: true },
      { source: '/trademark-by-location/chennai', destination: '/trademark-registration-in-chennai', permanent: true },
      { source: '/trademark-by-location/ahmedabad', destination: '/trademark-registration-in-ahmedabad', permanent: true },
      { source: '/trademark-by-location/gurgaon', destination: '/trademark-registration-in-gurgaon', permanent: true },
      { source: '/trademark-by-location/noida', destination: '/trademark-registration-in-noida', permanent: true },
      { source: '/trademark-by-location/ghaziabad', destination: '/trademark-registration-in-ghaziabad', permanent: true },
      { source: '/trademark-by-location/faridabad', destination: '/trademark-registration-in-faridabad', permanent: true },
      { source: '/trademark-by-location/indore', destination: '/trademark-registration-in-indore', permanent: true },
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
