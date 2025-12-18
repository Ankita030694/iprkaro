import React from 'react';
import { Metadata } from 'next';
import AndamanClient from './AndamanClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Andaman and Nicobar Islands | Guide & Process 2025 | IPRKaro',
  description: 'Complete guide to trademark registration in Andaman and Nicobar Islands. Learn step-by-step process, documents required, and expert assistance for trademark registration in Port Blair and across the islands.',
  keywords: [
    'trademark registration in andaman and nicobar islands',
    'trademark registration andaman',
    'trademark registration port blair',
    'how to register trademark in andaman',
    'trademark registration process andaman',
    'trademark registration online andaman',
    'IPRKaro trademark registration andaman'
  ],
  openGraph: {
    title: 'Trademark Registration in Andaman and Nicobar Islands | IPRKaro',
    description: 'Expert trademark registration services in Andaman and Nicobar Islands. Complete guide with step-by-step process and documents.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/andaman-and-nicobar-islands',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AndamanTrademarkPage() {
  return <AndamanClient />;
}
