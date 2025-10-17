import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact IPR Karo | Get Expert Help",
  description: "Contact IPR Karo for trademark registration assistance. Connect with our expert team for AI-powered trademark search, filing support, and brand protection guidance.",
  alternates: {
    canonical: "https://iprkaro.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // FAQ Schema for server-side rendering
  const contactFaqs = [
    {
      question: "How can I contact IPR Karo for support?",
      answer: "You can reach us via email at info@iprkaro.com, through our contact form on this page, or by calling our support team. We provide 24/7 online support for all trademark, copyright, and patent registration queries."
    },
    {
      question: "Do you have physical offices I can visit?",
      answer: "Yes, we have offices in major cities across India including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, and Kolkata. However, our services are 100% available online, so you can complete your entire trademark registration from anywhere in India."
    },
    {
      question: "What are your response times for queries?",
      answer: "We typically respond to all queries within 2-4 hours during business hours. For urgent matters, our AI-powered chat support is available 24/7 to provide instant answers and guidance on trademark searches and registration processes."
    },
    {
      question: "Can I schedule a consultation with an IP expert?",
      answer: "Yes! You can schedule a free consultation with our IP attorneys through our contact form or by emailing us. Our experts will review your trademark needs, discuss registration strategy, and provide personalized legal guidance."
    },
    {
      question: "How do I track my trademark application status?",
      answer: "Once you register with IPR Karo, you'll receive regular updates via email and SMS. You can also log into your dashboard to track your application status in real-time, view documents, and communicate directly with your assigned legal expert."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map((faq) => ({
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

