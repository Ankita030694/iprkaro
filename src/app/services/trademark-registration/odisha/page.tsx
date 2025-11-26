import React from 'react';
import type { Metadata } from 'next';
import OdishaClient from './OdishaClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Odisha | Protect Your Brand Identity',
  description: 'Expert Trademark Registration services in Odisha. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Odisha districts including Bhubaneswar, Cuttack, and Rourkela.',
  keywords: ['trademark registration in odisha', 'brand registration odisha', 'trademark consultant bhubaneswar', 'tm registration odisha', 'ipr services eastern india', 'trademark attorney odisha', 'logo registration odisha'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/odisha',
  },
  openGraph: {
    title: 'Trademark Registration in Odisha | Protect Your Brand Identity',
    description: 'Expert Trademark Registration services in Odisha. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Odisha districts.',
    url: 'https://iprkaro.com/services/trademark-registration/odisha',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-odisha.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Odisha',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function OdishaPage() {
  return <OdishaClient />;
}
