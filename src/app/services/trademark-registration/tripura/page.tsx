import React from 'react';
import { Metadata } from 'next';
import TripuraClient from './TripuraClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Tripura | Brand Protection Services',
  description: 'Secure your brand with professional Trademark Registration services in Tripura. Expert legal guidance for bamboo, rubber, and tea industries. File your application today!',
  keywords: ['Trademark Registration in Tripura', 'Brand Registration Tripura', 'Trademark Attorney Agartala', 'IPR Services Tripura', 'Trademark Filing Online'],
  openGraph: {
    title: 'Trademark Registration in Tripura | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Tripura. Expert legal guidance for bamboo, rubber, and tea industries.',
    url: 'https://iprkaro.com/services/trademark-registration/tripura',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/og-tripura-trademark.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Tripura',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Tripura | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Tripura. Expert legal guidance for bamboo, rubber, and tea industries.',
    images: ['https://iprkaro.com/assets/og-tripura-trademark.jpg'],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/tripura',
  },
};

export default function TripuraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Trademark Registration in Tripura",
            "description": "Comprehensive guide to trademark registration in Tripura. Learn about the process, documents, and benefits for your business.",
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
              "@id": "https://iprkaro.com/services/trademark-registration/tripura"
            }
          })
        }}
      />
      <TripuraClient />
    </>
  );
}
