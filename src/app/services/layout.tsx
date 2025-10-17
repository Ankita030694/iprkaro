import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP Protection Services India | IPR Karo",
  description: "Comprehensive intellectual property services including trademark registration, copyright protection, and patent filing. AI-powered solutions with expert legal support.",
  alternates: {
    canonical: "https://iprkaro.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // FAQ Schema for server-side rendering
  const servicesFaqs = [
    {
      question: "What IP services does IPR Karo provide?",
      answer: "IPR Karo offers comprehensive intellectual property services including trademark registration with AI-powered search, copyright protection for creative works, and patent services for inventions. All services include expert legal guidance and end-to-end support."
    },
    {
      question: "How does the AI-powered trademark search work?",
      answer: "Our AI instantly scans millions of trademark records across databases to find identical and confusingly similar marks. It provides a detailed risk report with similarity scores, conflict analysis, and recommendations to help you decide whether to proceed with registration or modify your brand."
    },
    {
      question: "Can I get all IP services in one place?",
      answer: "Yes! IPR Karo is your one-stop solution for all intellectual property needs. From trademark registration to copyright filing and patent applications, we handle everything online with expert legal support, making IP protection simple and accessible."
    },
    {
      question: "What is the typical timeline for each service?",
      answer: "Trademark registration typically takes 12-18 months, copyright registration takes 4-6 months, and patent registration takes 3-5 years. However, our AI-powered search and expert guidance help minimize delays by identifying potential issues early in the process."
    },
    {
      question: "Do you provide support after registration?",
      answer: "Absolutely! We offer comprehensive post-registration support including trademark renewals, opposition handling, infringement monitoring, licensing assistance, and legal defense. Our 24/7 AI-powered monitoring keeps your intellectual property protected continuously."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": servicesFaqs.map((faq) => ({
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
      {children}
    </>
  );
}

