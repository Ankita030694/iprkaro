import React from 'react';
import type { Metadata } from 'next';
import AndhraPradeshClient from './AndhraPradeshClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Andhra Pradesh | Protect Your Brand',
  description: 'Expert Trademark Registration services in Andhra Pradesh. Secure your brand name, logo, and slogan in Visakhapatnam, Vijayawada, Tirupati, and across the state. Online filing, search, and legal assistance available.',
  keywords: ['trademark registration in andhra pradesh', 'brand registration vizag', 'trademark consultant vijayawada', 'tm registration tirupati', 'ipr services andhra', 'trademark attorney guntur', 'logo registration kurnool'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/andhra-pradesh',
  },
  openGraph: {
    title: 'Trademark Registration in Andhra Pradesh | Protect Your Brand',
    description: 'Expert Trademark Registration services in Andhra Pradesh. Secure your brand name, logo, and slogan in Visakhapatnam, Vijayawada, Tirupati, and across the state.',
    url: 'https://iprkaro.com/services/trademark-registration/andhra-pradesh',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-andhra.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Andhra Pradesh',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AndhraPradeshPage() {
  return <AndhraPradeshClient />;
}
