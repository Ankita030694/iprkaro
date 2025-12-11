import React from 'react';
import { Metadata } from 'next';
import BestTrademarkAttorneysClient from './BestTrademarkAttorneysClient';

export const metadata: Metadata = {
  title: 'Best Trademark Attorneys in India | Expert Legal Protection & Advice',
  description: 'Find the best trademark attorneys in India. Expert legal guidance for trademark registration, litigation, objection handling, and brand protection strategies.',
  keywords: ['best trademark attorneys India', 'trademark lawyers India', 'IP attorneys India', 'trademark litigation experts', 'brand protection lawyers', 'trademark registration attorney'],
  openGraph: {
    title: 'Best Trademark Attorneys in India | Expert Legal Protection & Advice',
    description: 'Secure your brand with the best trademark attorneys in India. Comprehensive legal services for registration, enforcement, and portfolio management.',
    url: 'https://www.iprkaro.com/best-trademark-attorneys',
    siteName: 'IPR Karo',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Trademark Attorneys in India | Expert Legal Protection & Advice',
    description: 'Secure your brand with the best trademark attorneys in India. Comprehensive legal services for registration, enforcement, and portfolio management.',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/best-trademark-attorneys',
  },
};

export default function BestTrademarkAttorneysPage() {
  return <BestTrademarkAttorneysClient />;
}
