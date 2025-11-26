import React from 'react';
import type { Metadata } from 'next';
import GoaClient from './GoaClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Goa | Protect Your Brand',
  description: 'Expert Trademark Registration services in Goa. Secure your brand name, logo, and slogan in Panaji, Margao, Vasco, and across the state. Online filing, search, and legal assistance available.',
  keywords: ['trademark registration in goa', 'brand registration panaji', 'trademark consultant margao', 'tm registration vasco', 'ipr services goa', 'trademark attorney mapusa', 'logo registration goa'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/goa',
  },
  openGraph: {
    title: 'Trademark Registration in Goa | Protect Your Brand',
    description: 'Expert Trademark Registration services in Goa. Secure your brand name, logo, and slogan in Panaji, Margao, Vasco, and across the state.',
    url: 'https://iprkaro.com/services/trademark-registration/goa',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-goa.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Goa',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function GoaPage() {
  return <GoaClient />;
}
