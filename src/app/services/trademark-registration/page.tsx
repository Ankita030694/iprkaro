import TrademarkRegistrationPageClient from './TrademarkRegistrationPageClient';

export default function TrademarkRegistrationPage() {
  // FAQ Schema for server-side rendering
  const trademarkFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a trademark, and why should I register it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A trademark is a unique symbol, word, name, or logo that identifies your goods or services. Registering it gives you exclusive legal rights to use it, prevents misuse by others, and enhances your brand's credibility."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to register a trademark in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average time is 12 to 18 months, depending on objections or oppositions. With IPRKaro's AI-powered search reports, you can reduce risks of delay by identifying conflicts early."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Applicant's ID & Address Proof, Brand Logo / Wordmark (optional for wordmark filing), Incorporation Certificate (for companies), Power of Attorney (Form TM-48)"
        }
      },
      {
        "@type": "Question",
        "name": "Can I register a trademark online in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With IPRKaro, the entire process (from search to filing and objection handling) is managed 100% online with expert support."
        }
      },
      {
        "@type": "Question",
        "name": "How long is a trademark valid in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A registered trademark is valid for 10 years and can be renewed indefinitely every 10 years."
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
          __html: JSON.stringify(trademarkFaqSchema),
        }}
      />
      
      <TrademarkRegistrationPageClient />
    </>
  );
}
