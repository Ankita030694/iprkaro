import React from 'react';
import { Metadata } from 'next';
import RegisterTrademarkOnlineClient from './RegisterTrademarkOnlineClient';

export const metadata: Metadata = {
  title: 'Register Trademark Online India | Step-by-Step Guide & Filing',
  description: 'Learn how to register a trademark online in India. A complete guide covering the process, documents, fees, and expert assistance for hassle-free filing.',
  keywords: ['register trademark online', 'online trademark registration India', 'trademark filing process', 'brand registration online', 'trademark application steps', 'IP India online filing'],
  openGraph: {
    title: 'Register Trademark Online India | Step-by-Step Guide & Filing',
    description: 'Secure your brand identity with our comprehensive guide to online trademark registration in India. Expert tips and seamless filing assistance.',
    url: 'https://www.iprkaro.com/register-trademark-online',
    siteName: 'IPR Karo',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register Trademark Online India | Step-by-Step Guide & Filing',
    description: 'Secure your brand identity with our comprehensive guide to online trademark registration in India. Expert tips and seamless filing assistance.',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/register-trademark-online',
  },
};

export default function RegisterTrademarkOnlinePage() {
  return <RegisterTrademarkOnlineClient />;
}
