import React from 'react';
import TrademarkRegistrationClient from './TrademarkRegistrationClient';

// Convert slug to proper state name
function getStateName(slug: string): string {
  const stateSlug = slug.replace('trademark-registration-in-', '');
  return stateSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function TrademarkRegistrationSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stateName = getStateName(slug);

  // State-specific FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How can I register a trademark in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can register a trademark in ${stateName} online through IPRKaro. Our AI-powered platform provides instant trademark search, conflict detection, and complete filing assistance with expert legal support for businesses across ${stateName}.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the cost of trademark registration in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Trademark registration costs in ${stateName} start from ₹1,999 including government fees, professional fees, and GST. IPRKaro offers transparent pricing with AI-powered search reports and expert legal guidance throughout the registration process.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does trademark registration take in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Trademark registration in ${stateName} typically takes 12-18 months from filing to final registration. With IPRKaro's AI-powered conflict detection and expert guidance, you can minimize delays and improve your chances of successful registration.`
        }
      },
      {
        "@type": "Question",
        "name": `Do I need a lawyer for trademark registration in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `While not mandatory, having legal expertise significantly improves your trademark registration success. IPRKaro provides experienced trademark attorneys who review your application, handle objections, and ensure proper filing for businesses in ${stateName}.`
        }
      },
      {
        "@type": "Question",
        "name": `Can I register a trademark online in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! IPRKaro offers 100% online trademark registration services for ${stateName}. From AI-powered search to filing and monitoring, complete your entire trademark registration process from anywhere in ${stateName} with our digital platform.`
        }
      }
    ]
  };

  return (
    <>
      {/* Server-side FAQ Schema for Google Search Console */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <TrademarkRegistrationClient stateName={stateName} />
    </>
  );
}
