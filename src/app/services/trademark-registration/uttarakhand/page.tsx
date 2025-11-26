import React from 'react';
import { Metadata } from 'next';
import UttarakhandClient from './UttarakhandClient';

export const metadata: Metadata = {
  title: 'Trademark Registration in Uttarakhand | Brand Protection Services',
  description: 'Secure your brand with professional Trademark Registration services in Uttarakhand. Expert legal guidance for startups, hotels, and businesses. File your application today!',
  keywords: ['Trademark Registration in Uttarakhand', 'Brand Registration Uttarakhand', 'Trademark Attorney Dehradun', 'IPR Services Uttarakhand', 'Trademark Filing Online'],
  openGraph: {
    title: 'Trademark Registration in Uttarakhand | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Uttarakhand. Expert legal guidance for startups, hotels, and businesses.',
    url: 'https://iprkaro.com/services/trademark-registration/uttarakhand',
    siteName: 'IPR Karo',
    images: [
      {
        url: 'https://iprkaro.com/assets/og-uttarakhand-trademark.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration in Uttarakhand',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration in Uttarakhand | Brand Protection Services',
    description: 'Secure your brand with professional Trademark Registration services in Uttarakhand. Expert legal guidance for startups, hotels, and businesses.',
    images: ['https://iprkaro.com/assets/og-uttarakhand-trademark.jpg'],
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark-registration/uttarakhand',
  },
};

export default function UttarakhandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Trademark Registration in Uttarakhand",
            "description": "Comprehensive guide to trademark registration in Uttarakhand. Learn about the process, documents, and benefits for your business.",
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
              "@id": "https://iprkaro.com/services/trademark-registration/uttarakhand"
            }
          })
        }}
      />
      <UttarakhandClient />
    </>
  );
}
