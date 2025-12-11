import React from 'react';
import { Metadata } from 'next';
import TrademarkRegistrationServicesClient from './TrademarkRegistrationServicesClient';

export const metadata: Metadata = {
  title: 'Trademark Registration Services India | Expert IP Attorneys',
  description: 'Professional trademark registration services in India. Comprehensive solutions for trademark search, filing, objection handling, renewal, and litigation support by expert attorneys.',
  keywords: ['trademark registration services', 'trademark attorney India', 'trademark filing India', 'trademark objection reply', 'trademark renewal services', 'trademark watch service', 'IP litigation India'],
  openGraph: {
    title: 'Trademark Registration Services India | Expert IP Attorneys',
    description: 'Secure your brand with our expert trademark registration services. From search to registration and litigation, we cover all your IP needs.',
    url: 'https://www.iprkaro.com/trademark-registration-services',
    siteName: 'IPR Karo',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration Services India | Expert IP Attorneys',
    description: 'Secure your brand with our expert trademark registration services. From search to registration and litigation, we cover all your IP needs.',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-registration-services',
  },
};

export default function TrademarkRegistrationServicesPage() {
  return <TrademarkRegistrationServicesClient />;
}
