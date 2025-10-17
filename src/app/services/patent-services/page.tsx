import PatentServicesPageClient from './PatentServicesPageClient';

export default function PatentServicesPage() {
  // FAQ Schema for server-side rendering
  const patentFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a patent, and why should I register it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A patent is a legal right granted for an invention that is novel, non-obvious, and useful. Registering a patent gives you exclusive rights to prevent others from making, using, selling, or importing your invention for 20 years, protecting your innovation and investment."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to register a patent in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The patent registration process typically takes 3-5 years from filing to grant, depending on examination and objections. With IPRKaro's AI-driven prior art search, we minimize delays by ensuring strong applications from the start."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for patent registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Complete patent specification, drawings (if applicable), inventor's details and assignments, prior art search report, Form-1 (application), Form-2 (provisional/complete specification), and Power of Attorney."
        }
      },
      {
        "@type": "Question",
        "name": "Can I register a patent online in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With IPRKaro, the entire patent registration process (from prior art search to filing and examination response) is managed 100% online with expert legal support and AI-powered tools."
        }
      },
      {
        "@type": "Question",
        "name": "How long is a patent valid in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A granted patent is valid for 20 years from the date of filing, after which it enters the public domain. Annual renewal fees must be paid to maintain the patent."
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
          __html: JSON.stringify(patentFaqSchema),
        }}
      />
      
      <PatentServicesPageClient />
    </>
  );
}
