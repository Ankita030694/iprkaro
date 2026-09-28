import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Trademark & IP Legal Support India | IPR Karo',
  description: validateAndNormalizeDescription('Get in touch with IPR Karo for expert trademark registration, copyright filing, and patent services in India. Instant AI trademark search & 15-min consultation response.', "app/contact-us/page.tsx "),
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'Contact Us | Trademark & IP Legal Support India | IPR Karo',
    description: validateAndNormalizeDescription('Consult with India\'s top trademark and patent attorneys at IPR Karo. 24/7 support, instant AI availability analysis, and fast 24-hour e-filing.', "app/contact-us/page.tsx "),
    url: 'https://www.iprkaro.com/contact-us',
    siteName: 'IPR Karo',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ContactPage() {
  // Enhanced Structured Data Schemas for SEO & Google Search Console
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.iprkaro.com/contact-us#webpage",
        "url": "https://www.iprkaro.com/contact-us",
        "name": "Contact IPR Karo | Trademark & IP Legal Experts India",
        "description": "Contact IPR Karo for expert legal assistance with trademark registration, copyright protection, patent filing, and trademark objection defense in India.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.iprkaro.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact Us",
              "item": "https://www.iprkaro.com/contact-us"
            }
          ]
        }
      },
      {
        "@type": "LegalService",
        "@id": "https://www.iprkaro.com/#organization",
        "name": "IPR Karo",
        "url": "https://www.iprkaro.com",
        "logo": "https://www.iprkaro.com/logo/iprlogoblack.svg",
        "image": "https://www.iprkaro.com/logo.png",
        "telephone": "+91-9289707648",
        "email": "info@iprkaro.com",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.4312",
          "longitude": "77.0864"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.iprkaro.com/contact-us#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How fast will an IP attorney respond to my inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our senior legal team typically reviews your details and responds within 15 to 30 minutes during business hours (Mon-Sat, 9 AM - 8 PM IST). For urgent trademark filing or pending hearing deadlines, you can also reach us directly via our helpline at +91-9289707648."
            }
          },
          {
            "@type": "Question",
            "name": "Is the initial trademark consultation and availability search free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Your initial consultation and comprehensive AI-powered trademark search report are 100% free of charge. Our legal experts evaluate whether your mark is distinct, check phonetic similarities in relevant classes, and advise you on registerability with zero upfront obligation."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to visit an office in person or is the entire process 100% online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The entire process is 100% digital and paperless. From preliminary search, document verification, power of attorney (Form TM-48) signing, to final government e-filing and receipt of your Trademark Application Number, everything is completed online from anywhere in India or abroad."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are required to start the registration process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You only need: (1) Brand name, logo, or slogan to be protected, (2) Identity proof of the applicant (PAN Card / Aadhaar for individuals, or Certificate of Incorporation for companies), (3) Address proof, (4) Udyam / MSME Registration Certificate (if applicable, to avail 50% government fee concession), and (5) Signed Form TM-48."
            }
          },
          {
            "@type": "Question",
            "name": "What happens after I submit the contact form?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once submitted, our legal desk assigns your inquiry to a specialized IP advocate. You will receive an instant confirmation, followed by a direct phone call or WhatsApp message with your free trademark search evaluation and a transparent quotation with zero hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "Can you assist with Trademark Objections, Opposition hearings, and Copyright filings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. In addition to fresh trademark applications, our litigation team specializes in drafting comprehensive examination objection replies (Section 9 & 11), attending Trademark Registry show-cause hearings, filing copyright applications, and international Madrid Protocol filings."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Server-side Schema for Google Search Console & Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <ContactClient />
    </>
  );
}
