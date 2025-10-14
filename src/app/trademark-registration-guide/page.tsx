import React from 'react';
import { Metadata } from 'next';
import TrademarkGuideClient from './TrademarkGuideClient';

export const metadata: Metadata = {
  title: 'Complete Trademark Registration Guide India 2025 | Process, Fees, Classes & Timeline',
  description: 'Comprehensive guide to trademark registration in India. Learn the complete process, fees, required documents, trademark classes, objection handling, and timelines. Expert guidance for 2025.',
  keywords: [
    'trademark registration India',
    'trademark registration process',
    'trademark registration fees',
    'trademark classes India',
    'trademark objection',
    'trademark application process',
    'how to register trademark',
    'trademark registration timeline',
    'trademark documents required',
    'trademark registration guide',
    'TM application India',
    'trademark class selection',
    'trademark registration cost',
    'trademark registration online',
    'intellectual property registration',
    'brand protection India',
    'trademark objection reply',
    'trademark registration form',
    'TM-A form',
    'trademark application India 2025'
  ],
  openGraph: {
    title: 'Complete Trademark Registration Guide India 2025 | IPRKaro',
    description: 'Step-by-step guide to trademark registration in India. Learn everything about the process, fees, classes, documents, objections & timelines.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
    images: [
      {
        url: '/figmacomp/iprhero.svg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration Guide India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Trademark Registration Guide India 2025',
    description: 'Step-by-step guide to trademark registration in India. Process, fees, classes, documents & more.',
    images: ['/figmacomp/iprhero.svg'],
  },
  alternates: {
    canonical: '/trademark-registration-guide',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    // AEO (Answer Engine Optimization) structured data
    'article:published_time': '2025-01-15T00:00:00Z',
    'article:modified_time': new Date().toISOString(),
    'article:section': 'Trademark Registration',
    'article:tag': 'Trademark Registration Guide, Intellectual Property, Brand Protection',
    'og:type': 'article',
  },
};

export default function TrademarkRegistrationGuidePage() {
  return <TrademarkGuideClient />;
}

