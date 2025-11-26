import React from 'react';
import { Metadata } from 'next';
import ManipurClient from './ManipurClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Manipur | Brand Protection Services',
  description: 'Secure your brand with professional Trademark Registration services in Manipur. Expert legal guidance for artisans, MSMEs, and businesses. File your application today!',
  keywords: ['Trademark Registration in Manipur', 'Brand Registration Manipur', 'Trademark Attorney Imphal', 'IPR Services Manipur', 'Trademark Filing Online'],
  openGraph: {
    title: 'Trademark Registration in Manipur | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Manipur. Expert legal guidance for artisans, MSMEs, and businesses.',
    url: 'https://iprkaro.com/services/trademark-registration/manipur',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/og-manipur-trademark.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Manipur',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Manipur | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Manipur. Expert legal guidance for artisans, MSMEs, and businesses.',
    images: ['https://iprkaro.com/assets/og-manipur-trademark.jpg'],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/manipur',
  },
};

export default function ManipurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Trademark Registration in Manipur",
            "description": "Comprehensive guide to trademark registration in Manipur. Learn about the process, documents, and benefits for your business.",
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
              "@id": "https://iprkaro.com/services/trademark-registration/manipur"
            }
          })
        }}
      />
      <ManipurClient />
    </>
  );
}
