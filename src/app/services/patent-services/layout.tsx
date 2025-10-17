import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patent Services India | IPR Karo",
  description: "Professional patent filing and registration services in India. AI-powered patent search, expert drafting, and complete legal support for your inventions.",
  alternates: {
    canonical: "https://iprkaro.com/services/patent-services",
  },
};

export default function PatentServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // FAQ Schema for server-side rendering
  const patentFaqs = [
    {
      question: "What is a patent, and why should I register it?",
      answer: "A patent is a legal right granted for an invention that is novel, non-obvious, and useful. Registering a patent gives you exclusive rights to prevent others from making, using, selling, or importing your invention for 20 years, protecting your innovation and investment."
    },
    {
      question: "How long does it take to register a patent in India?",
      answer: "The patent registration process typically takes 3-5 years from filing to grant, depending on examination and objections. With IPRKaro's AI-driven prior art search, we minimize delays by ensuring strong applications from the start."
    },
    {
      question: "What documents are required for patent registration?",
      answer: "Complete patent specification, drawings (if applicable), inventor's details and assignments, prior art search report, Form-1 (application), Form-2 (provisional/complete specification), and Power of Attorney."
    },
    {
      question: "Can I register a patent online in India?",
      answer: "Yes. With IPRKaro, the entire patent registration process (from prior art search to filing and examination response) is managed 100% online with expert legal support and AI-powered tools."
    },
    {
      question: "How long is a patent valid in India?",
      answer: "A granted patent is valid for 20 years from the date of filing, after which it enters the public domain. Annual renewal fees must be paid to maintain the patent."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": patentFaqs.map((faq, index) => ({
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

