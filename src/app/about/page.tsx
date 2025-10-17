import AboutClient from './AboutClient';

export default function AboutPage() {
  // FAQ Schema for server-side rendering
  const aboutFaqs = [
    {
      question: "What is IPR Karo and how did it start?",
      answer: "IPR Karo was founded in 2019 with a mission to simplify and democratize trademark registration for businesses of all sizes in India. We launched India's first AI-powered trademark search in 2020, making it easy for anyone to understand how to register a trademark and get expert help online."
    },
    {
      question: "What makes IPR Karo different from traditional IP firms?",
      answer: "IPR Karo combines cutting-edge AI technology with expert legal guidance. Our AI instantly scans millions of trademarks, provides clear risk reports, and delivers results within minutes. We offer transparent pricing, 24/7 accessibility, and end-to-end support from search to registration to monitoring."
    },
    {
      question: "How many trademark registrations has IPR Karo completed?",
      answer: "IPR Karo has successfully completed over 5,000 trademark registrations since our inception. We've become India's leading online partner for trademark registration, trusted by startups and enterprises alike for AI-driven brand protection."
    },
    {
      question: "Is IPR Karo available across all of India?",
      answer: "Yes, IPR Karo provides 100% online trademark registration services across all states and union territories in India. You can access our AI-powered search, expert legal support, and filing services from anywhere in the country."
    },
    {
      question: "What services does IPR Karo offer?",
      answer: "IPR Karo offers comprehensive IP protection services including AI-powered trademark search and registration, copyright protection for creative works, patent services for inventions, ongoing brand monitoring, and legal support for objections and renewals."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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
      <AboutClient />
    </>
  );
}
