import React from 'react';
import { Metadata } from 'next';
import CheapTrademarkRegistrationClient from './CheapTrademarkRegistrationClient';

export const metadata: Metadata = {
  title: 'Cheap Trademark Registration India | Affordable & Fast Filing',
  description: 'Looking for cheap trademark registration in India? Get affordable, professional trademark filing services starting at ₹4500. Save money with MSME & Startup benefits.',
  keywords: ['cheap trademark registration', 'low cost trademark registration india', 'affordable trademark filing', 'trademark registration cost india', 'cheapest way to register trademark'],
  alternates: {
    canonical: 'https://www.iprkaro.com/cheap-trademark-registration',
  },
  openGraph: {
    title: 'Cheap Trademark Registration India | Affordable & Fast Filing',
    description: 'Save on trademark registration costs in India. Expert filing services for Startups, MSMEs, and Individuals at the lowest government fees.',
    url: 'https://www.iprkaro.com/cheap-trademark-registration',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://www.iprkaro.com/og-cheap-trademark.jpg',
        width: 1200,
        height: 630,
        alt: 'Cheap Trademark Registration India',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheap Trademark Registration India | Affordable & Fast Filing',
    description: 'Save on trademark registration costs in India. Expert filing services for Startups, MSMEs, and Individuals.',
    images: ['https://www.iprkaro.com/og-cheap-trademark.jpg'],
  },
};

export default function CheapTrademarkRegistrationPage() {
  return <CheapTrademarkRegistrationClient />;
}
