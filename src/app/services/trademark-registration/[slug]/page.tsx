import React from 'react';
import { Metadata } from 'next';
import TrademarkRegistrationClient from './TrademarkRegistrationClient';

// Convert slug to proper state name
function getStateName(slug: string): string {
  const stateSlug = slug.replace('trademark-registration-in-', '');
  return stateSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate dynamic metadata for SEO and AEO optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const stateName = getStateName(slug);
  
  // Use shorter format for very long state names to keep under 60 chars
  const baseTitle = `TM Registration ${stateName} | IPR Karo`;
  const title = baseTitle.length > 60 ? `${stateName} TM | IPR Karo` : baseTitle;
  const description = `Get your trademark registered in ${stateName} with AI-powered search, expert guidance & 24/7 support. Starting at ₹1999. Fast processing, 100% secure. Register your brand today!`;
  
  return {
    title,
    description,
    keywords: [
      `trademark registration ${stateName}`,
      `trademark registration in ${stateName}`,
      `${stateName} trademark filing`,
      `register trademark ${stateName}`,
      `brand registration ${stateName}`,
      `TM registration ${stateName}`,
      `trademark lawyer ${stateName}`,
      `trademark attorney ${stateName}`,
      `online trademark registration ${stateName}`,
      `affordable trademark services ${stateName}`,
      `fast trademark registration`,
      'AI-powered trademark search',
      'trademark protection India'
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
          alt: `Trademark Registration in ${stateName}`,
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
      canonical: `https://iprkaro.com/services/trademark-registration/${slug}`,
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
      'article:section': 'Trademark Registration Services',
      'article:tag': `Trademark Registration ${stateName}`,
      'geo.region': 'IN',
      'geo.placename': stateName,
    },
  };
}

export default async function TrademarkRegistrationSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stateName = getStateName(slug);

  return <TrademarkRegistrationClient stateName={stateName} />;
}
