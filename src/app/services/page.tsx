import ServicesClient from './ServicesClient';

export default function ServicesPage() {
  // FAQ Schema for server-side rendering
  const servicesFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What IP services does IPR Karo provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IPR Karo offers comprehensive intellectual property services including trademark registration with AI-powered search, copyright protection for creative works, and patent services for inventions. All services include expert legal guidance and end-to-end support."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AI-powered trademark search work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI instantly scans millions of trademark records across databases to find identical and confusingly similar marks. It provides a detailed risk report with similarity scores, conflict analysis, and recommendations to help you decide whether to proceed with registration or modify your brand."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get all IP services in one place?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! IPR Karo is your one-stop solution for all intellectual property needs. From trademark registration to copyright filing and patent applications, we handle everything online with expert legal support, making IP protection simple and accessible."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical timeline for each service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration typically takes 12-18 months, copyright registration takes 4-6 months, and patent registration takes 3-5 years. However, our AI-powered search and expert guidance help minimize delays by identifying potential issues early in the process."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide support after registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer comprehensive post-registration support including trademark renewals, opposition handling, infringement monitoring, licensing assistance, and legal defense. Our 24/7 AI-powered monitoring keeps your intellectual property protected continuously."
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
          __html: JSON.stringify(servicesFaqSchema),
        }}
      />
      
      <ServicesClient />
    </>
  );
}
