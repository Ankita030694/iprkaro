import React from 'react';
import type { Metadata } from 'next';
import JharkhandClient from './JharkhandClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Jharkhand | Protect Your Brand Identity',
  description: 'Expert Trademark Registration services in Jharkhand. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Jharkhand districts including Ranchi, Jamshedpur, and Dhanbad.',
  keywords: ['trademark registration in jharkhand', 'brand registration jharkhand', 'trademark consultant ranchi', 'tm registration jharkhand', 'ipr services eastern india', 'trademark attorney jharkhand', 'logo registration jharkhand'],
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/jharkhand',
  },
  openGraph: {
    title: 'Trademark Registration in Jharkhand | Protect Your Brand Identity',
    description: 'Expert Trademark Registration services in Jharkhand. Secure your brand name, logo, and slogan with our professional assistance. Online filing available for all Jharkhand districts.',
    url: 'https://iprkaro.com/services/trademark-registration/jharkhand',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/images/og-trademark-jharkhand.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Jharkhand',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function JharkhandPage() {
  return <JharkhandClient />;
}
