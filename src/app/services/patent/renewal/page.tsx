import React from 'react';
import { Metadata } from 'next';
import RenewalClient from './RenewalClient';

export const metadata: Metadata = {
  title: 'Patent Renewal & Maintenance Services India | Annual Fee Payment & Deadline Tracking',
  description: 'Professional patent renewal and maintenance services in India. Timely annual fee payment, deadline tracking, lapsed patent restoration, and comprehensive patent portfolio maintenance.',
  keywords: ['patent renewal India', 'patent maintenance', 'patent annuity payment', 'patent renewal fees India', 'patent renewal services', 'patent fee payment', 'lapsed patent restoration', 'patent renewal deadline', 'patent maintenance services', 'patent annuity India', 'renew patent India', 'patent renewal cost', 'patent maintenance fees', 'patent renewal India 2025', 'IPRKaro patent renewal', 'patent renewal consultant', 'patent portfolio maintenance', 'patent fee tracking', 'patent restoration India', 'annual patent fees'],
  openGraph: { title: 'Patent Renewal & Maintenance Services | IPRKaro', description: 'Expert patent renewal services. Timely fee payments, deadline tracking, and lapsed patent restoration.', type: 'article', locale: 'en_IN', siteName: 'IPRKaro' },
  alternates: { canonical: 'https://iprkaro.com/services/patent/renewal' },
  robots: { index: true, follow: true }
};

export default function PatentRenewalPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How long is a patent valid in India?", "acceptedAnswer": {"@type": "Answer", "text": "Patents in India are valid for 20 years from the filing date of the application, subject to payment of annual renewal fees (annuities)."}}, {"@type": "Question", "name": "When do I need to pay patent renewal fees?", "acceptedAnswer": {"@type": "Answer", "text": "Patent renewal fees must be paid annually starting from the 2nd year after filing the patent application."}}]};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RenewalClient />
    </>
  );
}
