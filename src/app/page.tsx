import { HeroSection, WhyTrademark, OurServices, SimplePlans, Faq } from "@/components";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Trademark Registration India | IPR Karo - AI-Powered IP Protection",
  description: "Instant trademark search, risk checks, and online registration. Register your trademark with AI-powered reports for fast, secure brand protection. Start in under 60 seconds with IPR Karo.",
  alternates: {
    canonical: "https://iprkaro.com",
  },
  openGraph: {
    title: "Trademark Registration India | IPR Karo",
    description: "AI-powered trademark registration, patent services, and copyright protection in India.",
    url: "https://iprkaro.com",
    siteName: "IPR Karo",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  // FAQ Schema markup for SEO - must be server-side rendered
  const faqs = [
    {
      question: "What is IPR Karo?",
      answer: "IPR Karo is a platform to search, register, and protect trademarks online using AI-powered search reports and expert legal support, making trademark registration fast and secure."
    },
    {
      question: "Who can use IPR Karo?",
      answer: "Startups, businesses, creative professionals, and entrepreneurs seeking hassle-free trademark registration, copyright filing, or patent protection online in India can use IPR Karo."
    },
    {
      question: "Is IPR Karo backed by legal experts?",
      answer: "Yes, all trademark and IP services with IPR Karo are reviewed by experienced attorneys to ensure complete legal compliance and robust intellectual property protection."
    },
    {
      question: "Why choose IPR Karo over traditional methods?",
      answer: "IPR Karo offers AI-driven trademark search, instant conflict checks, risk assessment reports, and seamless online filings, delivering faster results and more accurate protection than manual, offline methods."
    },
    {
      question: "How does AI help in trademark protection?",
      answer: "AI instantly scans trademark databases, detects similarities and conflicts, generates registerability scores, and guides users through every step to maximize the success of trademark registration."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
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
      {/* Server-side rendered FAQ Schema for Google Search Console */}
      <Script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="beforeInteractive"
      />

      <HeroSection />
      <WhyTrademark />
      <div className="-mt-10">
      <OurServices />

      </div>
      <SimplePlans />
      <Faq />
    </>
  );
}
