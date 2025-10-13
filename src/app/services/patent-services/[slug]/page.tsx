import React from 'react';
import { Metadata } from 'next';
import PatentServicesClient from './PatentServicesClient';

// Convert slug to proper state name
function getStateName(slug: string): string {
  const stateSlug = slug.replace('patent-services-in-', '');
  return stateSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate dynamic metadata for SEO and AEO optimization
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const stateName = getStateName(params.slug);
  
  const title = `Patent Services in ${stateName} | Patent Filing & Registration India 2025`;
  const description = `Expert patent services in ${stateName}. File provisional, utility & design patents with complete IP protection. Get patent search, filing, and prosecution support. Starting at ₹9,999. Protect your innovation today!`;
  
  return {
    title,
    description,
    keywords: [
      `patent services ${stateName}`,
      `patent registration ${stateName}`,
      `${stateName} patent filing`,
      `file patent ${stateName}`,
      `patent application ${stateName}`,
      `provisional patent ${stateName}`,
      `utility patent ${stateName}`,
      `design patent ${stateName}`,
      `patent search ${stateName}`,
      `patent lawyer ${stateName}`,
      `patent attorney ${stateName}`,
      `patent agent ${stateName}`,
      `innovation protection ${stateName}`,
      'patent registration India',
      'intellectual property patent'
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_IN',
      siteName: 'IPRKaro',
      images: [
        {
          url: '/figmacomp/iprhero.svg',
          width: 1200,
          height: 630,
          alt: `Patent Services in ${stateName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/figmacomp/iprhero.svg'],
    },
    alternates: {
      canonical: `/services/patent-services/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      // AEO (Answer Engine Optimization) structured data
      'article:section': 'Patent Services',
      'article:tag': `Patent Services ${stateName}`,
      'geo.region': 'IN',
      'geo.placename': stateName,
    },
  };
}

export default function PatentServicesSlugPage({ params }: { params: { slug: string } }) {
  const stateName = getStateName(params.slug);

  return <PatentServicesClient stateName={stateName} />;
}

