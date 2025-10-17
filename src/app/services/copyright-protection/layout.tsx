import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright Protection India | IPR Karo",
  description: "Secure your creative works with copyright registration in India. AI-powered search, fast filing, and expert legal protection for your intellectual property.",
  alternates: {
    canonical: "https://iprkaro.com/services/copyright-protection",
  },
};

export default function CopyrightProtectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // FAQ Schema for server-side rendering
  const copyrightFaqs = [
    {
      question: "What is a copyright, and why should I register it?",
      answer: "Copyright is a legal right that protects original creative works such as literary, artistic, musical, and digital content. Registering it provides legal proof of ownership and exclusive rights to reproduce, distribute, and license your work."
    },
    {
      question: "How long does it take to register copyright in India?",
      answer: "Copyright registration in India typically takes 4-6 months from filing to certificate issuance. With IPRKaro's expert guidance, we ensure proper documentation for timely processing."
    },
    {
      question: "What documents are required for copyright registration?",
      answer: "Identity proof (PAN/Aadhaar), Address proof, Work sample (manuscript, music file, software code, design), NOC from publisher/author (if applicable), Power of Attorney (if filed through attorney)"
    },
    {
      question: "Can I register copyright online in India?",
      answer: "Yes. With IPRKaro, the entire copyright registration process is managed 100% online with expert legal support for books, music, software, and all creative works."
    },
    {
      question: "How long is copyright protection valid in India?",
      answer: "Copyright protection lasts for the lifetime of the author plus 60 years after their death. For works like films and sound recordings, it's 60 years from the date of publication."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": copyrightFaqs.map((faq, index) => ({
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

