import React from 'react';
import type { Metadata } from 'next';
import JammuAndKashmirClient from './JammuAndKashmirClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Jammu and Kashmir | Protect Your Brand',
  description: 'Expert Trademark Registration services in Jammu and Kashmir. Secure your brand name, logo, and slogan in Srinagar, Jammu, Anantnag, and across J&K. Online filing, search, and legal assistance available.',
  keywords: ['trademark registration in jammu and kashmir', 'brand registration j&k', 'trademark consultant srinagar', 'tm registration jammu', 'ipr services kashmir', 'trademark attorney j&k', 'logo registration anantnag'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/jammu-and-kashmir',
  },
  openGraph: {
    title: 'Trademark Registration in Jammu and Kashmir | Protect Your Brand',
    description: 'Expert Trademark Registration services in Jammu and Kashmir. Secure your brand name, logo, and slogan in Srinagar, Jammu, Anantnag, and across J&K.',
    url: 'https://iprkaro.com/services/trademark-registration/jammu-and-kashmir',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-jk.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Jammu and Kashmir',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function JammuAndKashmirPage() {
  return <JammuAndKashmirClient />;
}
