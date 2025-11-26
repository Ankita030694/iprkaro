import React from 'react';
import type { Metadata } from 'next';
import ArunachalPradeshClient from './ArunachalPradeshClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Arunachal Pradesh | Protect Your Brand',
  description: 'Expert Trademark Registration services in Arunachal Pradesh. Secure your brand name, logo, and slogan in Itanagar, Tawang, Pasighat, and across the state. Online filing, search, and legal assistance available.',
  keywords: ['trademark registration in arunachal pradesh', 'brand registration itanagar', 'trademark consultant tawang', 'tm registration pasighat', 'ipr services arunachal', 'trademark attorney northeast india', 'logo registration ziro'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/arunachal-pradesh',
  },
  openGraph: {
    title: 'Trademark Registration in Arunachal Pradesh | Protect Your Brand',
    description: 'Expert Trademark Registration services in Arunachal Pradesh. Secure your brand name, logo, and slogan in Itanagar, Tawang, Pasighat, and across the state.',
    url: 'https://iprkaro.com/services/trademark-registration/arunachal-pradesh',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-arunachal.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Arunachal Pradesh',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ArunachalPradeshPage() {
  return <ArunachalPradeshClient />;
}
