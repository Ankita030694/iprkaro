import React from 'react';
import type { Metadata } from 'next';
import MadhyaPradeshClient from './MadhyaPradeshClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Madhya Pradesh | Protect Your Brand',
  description: 'Expert Trademark Registration services in Madhya Pradesh. Secure your brand name, logo, and slogan in Indore, Bhopal, Gwalior, and across MP. Online filing, search, and legal assistance available.',
  keywords: ['trademark registration in madhya pradesh', 'brand registration mp', 'trademark consultant indore', 'tm registration bhopal', 'ipr services madhya pradesh', 'trademark attorney gwalior', 'logo registration jabalpur'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/madhya-pradesh',
  },
  openGraph: {
    title: 'Trademark Registration in Madhya Pradesh | Protect Your Brand',
    description: 'Expert Trademark Registration services in Madhya Pradesh. Secure your brand name, logo, and slogan in Indore, Bhopal, Gwalior, and across MP.',
    url: 'https://iprkaro.com/services/trademark-registration/madhya-pradesh',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-mp.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Madhya Pradesh',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MadhyaPradeshPage() {
  return <MadhyaPradeshClient />;
}
