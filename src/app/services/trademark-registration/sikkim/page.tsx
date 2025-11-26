import React from 'react';
import { Metadata } from 'next';
import SikkimClient from './SikkimClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Sikkim | Brand Protection Services',
  description: 'Secure your brand with professional Trademark Registration services in Sikkim. Expert legal guidance for organic, pharma, and tourism businesses. File your application today!',
  keywords: ['Trademark Registration in Sikkim', 'Brand Registration Sikkim', 'Trademark Attorney Gangtok', 'IPR Services Sikkim', 'Trademark Filing Online'],
  openGraph: {
    title: 'Trademark Registration in Sikkim | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Sikkim. Expert legal guidance for organic, pharma, and tourism businesses.',
    url: 'https://iprkaro.com/services/trademark-registration/sikkim',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/og-sikkim-trademark.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Sikkim',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Sikkim | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Sikkim. Expert legal guidance for organic, pharma, and tourism businesses.',
    images: ['https://iprkaro.com/assets/og-sikkim-trademark.jpg'],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/sikkim',
  },
};

export default function SikkimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Trademark Registration in Sikkim",
            "description": "Comprehensive guide to trademark registration in Sikkim. Learn about the process, documents, and benefits for your business.",
            "author": {
              "@type": "Organization",
              "name": "IPR Karo"
            },
            "publisher": {
              "@type": "Organization",
              "name": "IPR Karo",
              "logo": {
                "@type": "ImageObject",
                "url": "https://iprkaro.com/logo.png"
              }
            },
            "datePublished": "2024-11-26",
            "dateModified": "2024-11-26",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://iprkaro.com/services/trademark-registration/sikkim"
            }
          })
        }}
      />
      <SikkimClient />
    </>
  );
}
