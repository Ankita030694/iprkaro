import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trademark Registration Service | IPR Karo",
  description: "Complete trademark registration service in India. AI-powered search, expert filing, and legal support. Register your trademark online with IPR Karo.",
  alternates: {
    canonical: "https://iprkaro.com/services/trademark-registration",
  },
};

export default function TrademarkRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // FAQ Schema for server-side rendering
  const trademarkFaqs = [
    {
      question: "What is a trademark, and why should I register it?",
      answer: "A trademark is a unique symbol, word, name, or logo that identifies your goods or services. Registering it gives you exclusive legal rights to use it, prevents misuse by others, and enhances your brand's credibility."
    },
    {
      question: "How long does it take to register a trademark in India?",
      answer: "The average time is 12 to 18 months, depending on objections or oppositions. With IPRKaro's AI-powered search reports, you can reduce risks of delay by identifying conflicts early."
    },
    {
      question: "What documents are required for trademark registration?",
      answer: "Applicant's ID & Address Proof, Brand Logo / Wordmark (optional for wordmark filing), Incorporation Certificate (for companies), Power of Attorney (Form TM-48)"
    },
    {
      question: "Can I register a trademark online in India?",
      answer: "Yes. With IPRKaro, the entire process (from search to filing and objection handling) is managed 100% online with expert support."
    },
    {
      question: "How long is a trademark valid in India?",
      answer: "A registered trademark is valid for 10 years and can be renewed indefinitely every 10 years."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": trademarkFaqs.map((faq, index) => ({
      "@type": "Question",
      "name": `Q${index + 1}. ${faq.question}`,
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
      {children}
    </>
  );
}

