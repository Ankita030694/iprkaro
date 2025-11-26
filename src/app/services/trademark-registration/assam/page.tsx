import React from 'react';
import type { Metadata } from 'next';
import AssamClient from './AssamClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Assam | Protect Your Brand Identity',
  description: 'Expert Trademark Registration services in Assam. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Assam districts including Guwahati, Dibrugarh, and Silchar.',
  keywords: ['trademark registration in assam', 'brand registration assam', 'trademark consultant guwahati', 'tm registration assam', 'ipr services northeast india', 'trademark attorney assam', 'logo registration assam'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/assam',
  },
  openGraph: {
    title: 'Trademark Registration in Assam | Protect Your Brand Identity',
    description: 'Expert Trademark Registration services in Assam. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Assam districts.',
    url: 'https://iprkaro.com/services/trademark-registration/assam',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-assam.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Assam',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AssamPage() {
  return <AssamClient />;
}
