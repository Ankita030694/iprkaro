import React from 'react';
import { Metadata } from 'next';
import OnlineTrademarkRegistrationClient from './OnlineTrademarkRegistrationClient';

export const metadata: Metadata = {
  title: 'Online Trademark Registration India | File TM Application Online',
  description: 'Complete guide to Online Trademark Registration in India. Learn the step-by-step process, documents required, benefits, and how to file your trademark application online securely.',
  keywords: ['online trademark registration', 'trademark e-filing India', 'trademark search India', 'brand name registration', 'logo trademark registration', 'trademark application process', 'IP India portal'],
  openGraph: {
    title: 'Online Trademark Registration India | File TM Application Online',
    description: 'Secure your brand with our comprehensive guide to online trademark registration in India. Expert insights on process, documents, and benefits.',
    url: 'https://www.iprkaro.com/online-trademark-registration',
    siteName: 'IPR Karo',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Trademark Registration India | File TM Application Online',
    description: 'Secure your brand with our comprehensive guide to online trademark registration in India. Expert insights on process, documents, and benefits.',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/online-trademark-registration',
  },
};

export default function OnlineTrademarkRegistrationPage() {
  return <OnlineTrademarkRegistrationClient />;
}
