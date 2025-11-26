import React from 'react';
import { Metadata } from 'next';
import ChandigarhClient from './ChandigarhClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Chandigarh | Brand Protection Services',
  description: 'Secure your brand with professional Trademark Registration services in Chandigarh. Expert legal guidance for startups, businesses, and MSMEs. File your application today!',
  keywords: ['Trademark Registration in Chandigarh', 'Brand Registration Chandigarh', 'Trademark Attorney Chandigarh', 'IPR Services Chandigarh', 'Trademark Filing Online'],
  openGraph: {
    title: 'Trademark Registration in Chandigarh | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Chandigarh. Expert legal guidance for startups, businesses, and MSMEs.',
    url: 'https://iprkaro.com/services/trademark-registration/chandigarh',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/og-chandigarh-trademark.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Chandigarh',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Chandigarh | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Chandigarh. Expert legal guidance for startups, businesses, and MSMEs.',
    images: ['https://iprkaro.com/assets/og-chandigarh-trademark.jpg'],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/chandigarh',
  },
};

export default function ChandigarhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Trademark Registration in Chandigarh",
            "description": "Comprehensive guide to trademark registration in Chandigarh. Learn about the process, documents, and benefits for your business.",
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
              "@id": "https://iprkaro.com/services/trademark-registration/chandigarh"
            }
          })
        }}
      />
      <ChandigarhClient />
    </>
  );
}
