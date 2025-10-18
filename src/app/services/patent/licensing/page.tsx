import React from 'react';
import { Metadata } from 'next';
import LicensingClient from './LicensingClient';

export const metadata: Metadata = {
  title: 'Patent Licensing & Commercialization Support Services India | Monetize Your Patents',
  description: 'Professional patent licensing and commercialization services in India. Expert assistance for patent valuation, license agreements, royalty negotiation, technology transfer, and patent monetization strategies.',
  keywords: ['patent licensing India', 'patent commercialization', 'patent licensing services', 'patent licensing agreement', 'patent royalty India', 'technology transfer India', 'patent monetization', 'license patent India', 'patent valuation India', 'patent licensing consultant', 'exclusive patent license', 'non-exclusive patent license', 'patent royalty negotiation', 'patent commercialization India 2025', 'IPRKaro patent licensing', 'patent technology transfer', 'patent licensing fees', 'compulsory licensing India', 'patent license registration', 'patent commercialization support'],
  openGraph: { title: 'Patent Licensing & Commercialization Services | IPRKaro', description: 'Expert patent licensing and commercialization support. Monetize your patents through strategic licensing agreements and technology transfer.', type: 'article', locale: 'en_IN', siteName: 'IPRKaro' },
  alternates: { canonical: 'https://iprkaro.com/services/patent/licensing' },
  robots: { index: true, follow: true }
};

export default function PatentLicensingPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is patent licensing in India?", "acceptedAnswer": {"@type": "Answer", "text": "Patent licensing is a legal agreement where the patent owner (licensor) grants permission to another party (licensee) to make, use, sell, or import the patented invention under specified terms."}}, {"@type": "Question", "name": "How do I commercialize my patented invention?", "acceptedAnswer": {"@type": "Answer", "text": "Commercialization strategies include direct licensing to manufacturers, technology transfer to companies with market access, forming joint ventures, or selling patent rights."}}]};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LicensingClient />
    </>
  );
}
