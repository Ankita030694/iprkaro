import React from 'react';
import { Metadata } from 'next';
import WatchClient from './WatchClient';

export const metadata: Metadata = {
  title: 'AI-Powered Trademark Watch & Monitoring Services India | 24/7 Brand Protection',
  description: 'Professional trademark watch and monitoring services in India. AI-powered 24/7 surveillance of trademark applications, domain registrations, and online infringement to protect your brand rights.',
  keywords: [
    'trademark watch service India',
    'trademark monitoring India',
    'trademark watch India',
    'brand monitoring services',
    'trademark surveillance',
    'AI trademark monitoring',
    'trademark journal monitoring',
    'domain name monitoring',
    'brand protection services',
    'trademark infringement monitoring',
    'e-commerce brand monitoring',
    'social media trademark watch',
    'trademark watch alert',
    'online brand protection',
    'counterfeit detection service',
    'trademark watch report',
    'brand surveillance India',
    'trademark watch India 2025',
    'IPRKaro watch service',
    'trademark monitoring cost'
  ],
  openGraph: {
    title: 'AI-Powered Trademark Watch & Monitoring Services | IPRKaro',
    description: '24/7 AI-powered trademark monitoring to detect conflicts, infringements, and brand misuse. Protect your trademark rights with instant alerts and expert analysis.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'IPRKaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Watch & Monitoring Services India',
    description: 'AI-powered brand protection with continuous monitoring of trademark applications, domain registrations, and online infringement.',
  },
  alternates: {
    canonical: 'https://iprkaro.com/services/trademark/watch',
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
};

export default function TrademarkWatchPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is trademark watch service in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark watch service is a proactive monitoring system that tracks new trademark applications filed in India. It alerts you when someone files a trademark similar to yours, allowing you to take timely action such as filing opposition before the conflicting mark gets registered and causes marketplace confusion."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I need trademark monitoring services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark monitoring helps protect your brand by identifying potential infringers early. Without active monitoring, you may miss conflicting applications during the 4-month opposition window. Once a similar mark is registered, it becomes much harder and expensive to remove it through rectification or cancellation proceedings."
        }
      },
      {
        "@type": "Question",
        "name": "How often are trademark watch reports provided?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark watch reports are typically provided weekly, bi-weekly, or monthly depending on your service package. Weekly monitoring is recommended for high-value brands or industries with frequent trademark filings. Reports include details of potentially conflicting applications with analysis and recommended actions."
        }
      },
      {
        "@type": "Question",
        "name": "What happens when a conflicting trademark is detected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When our AI-powered system detects a potentially conflicting trademark, we immediately alert you with a detailed report. Our experts analyze the similarity level, assess the infringement risk, and recommend appropriate actions such as filing opposition, sending cease and desist notice, or monitoring for further developments."
        }
      },
      {
        "@type": "Question",
        "name": "Can trademark watch service detect domain name squatting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, advanced trademark watch services include domain name monitoring to detect cybersquatting. We monitor new domain registrations that incorporate your trademark, alerting you to potential domain squatting, phishing attempts, or brand impersonation so you can take swift action through UDRP or legal proceedings."
        }
      },
      {
        "@type": "Question",
        "name": "How much does trademark watch service cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark watch service costs vary based on monitoring scope, frequency, and number of marks monitored. Basic monitoring for a single trademark starts affordably, while comprehensive monitoring including domain watch, social media monitoring, and marketplace surveillance is available at premium tiers. Custom packages are available for brand portfolios."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Watch & Monitoring Services",
    "provider": {
      "@type": "Organization",
      "name": "IPRKaro",
      "url": "https://iprkaro.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trademark Monitoring Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Journal Monitoring",
            "description": "Weekly monitoring of Trademark Journal publications for conflicting applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domain Name Monitoring",
            "description": "Continuous monitoring of domain registrations for cybersquatting and brand protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce & Social Media Watch",
            "description": "Monitoring online platforms for counterfeit products and brand infringement"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://iprkaro.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://iprkaro.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Trademark Services",
        "item": "https://iprkaro.com/services/trademark-registration"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Trademark Watch",
        "item": "https://iprkaro.com/services/trademark/watch"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <WatchClient />
    </>
  );
}

