import React from 'react';
import { Metadata } from 'next';
import LakshadweepClient from './LakshadweepClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Lakshadweep | Guide & Process 2025 | IPRKaro',
  description: 'Complete guide to trademark registration in Lakshadweep. Learn step-by-step process, documents required, and expert assistance for trademark registration.',
  keywords: [
    'trademark registration in lakshadweep',
    'trademark registration kavaratti',
    'how to register trademark in lakshadweep',
    'trademark registration process lakshadweep',
    'IPRKaro trademark registration lakshadweep'
  ],
  openGraph: {
    title: 'Trademark Registration in Lakshadweep | IPRKaro',
    description: 'Expert trademark registration services in Lakshadweep. Complete guide with step-by-step process and documents.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/lakshadweep',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LakshadweepTrademarkPage() {
  return <LakshadweepClient />;
}
