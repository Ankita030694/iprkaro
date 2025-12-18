import React from 'react';
import { Metadata } from 'next';
import DadraClient from './DadraClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Dadra and Nagar Haveli and Daman and Diu | Guide 2025 | IPRKaro',
  description: 'Complete guide to trademark registration in Dadra and Nagar Haveli and Daman and Diu. Learn step-by-step process, documents required, and expert assistance for trademark registration.',
  keywords: [
    'trademark registration in dadra and nagar haveli and daman and diu',
    'trademark registration daman',
    'trademark registration diu',
    'trademark registration silvassa',
    'how to register trademark in daman and diu',
    'IPRKaro trademark registration daman'
  ],
  openGraph: {
    title: 'Trademark Registration in Dadra and Nagar Haveli and Daman and Diu | IPRKaro',
    description: 'Expert trademark registration services in Dadra and Nagar Haveli and Daman and Diu. Complete guide with step-by-step process and documents.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/dadra-and-nagar-haveli-and-daman-and-diu',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DadraTrademarkPage() {
  return <DadraClient />;
}
