import { HeroSection, WhyTrademark, OurServices, SimplePlans, Faq, ReviewSnippets, StatesAndUTs, TrademarkClasses, BrandGrid, ResultsGrid, SmarterDecisions, WhatWeProtect, CtaSection, BuiltToProtect, SimplePricing, FaqSection, NewFooter } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trademark Registration India | AI Trademark Search – IPR Karo",
  description: "Start your trademark registration online in India with IPR Karo. AI-powered trademark search, brand name availability search, trademark availability check, and complete filing support. Know the trademark registration cost in India, govt fees, documents required, and the step-by-step trademark registration process. Serving Delhi, Noida, Gurgaon & PAN India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trademark Registration India | AI Trademark Search – IPR Karo",
    description: "AI-powered trademark registration, trademark search, brand name availability search, patent services, and copyright protection in India. Check trademark availability and register your trademark online.",
    url: "https://www.iprkaro.com",
    siteName: "IPR Karo",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  // FAQ Schema markup for SEO - must be server-side rendered
  const faqs = [
    {
      question: "What is IPR Karo?",
      answer: "IPR Karo is an AI-powered platform for trademark registration, trademark search, and brand name availability search in India. We help you check trademark availability, conduct a public trademark search by name or class, and complete the entire trademark registration process online - fast and secure."
    },
    {
      question: "How to register a trademark with IPR Karo?",
      answer: "To register a trademark, simply enter your brand name for an instant trademark search, review the AI-generated report for conflicts, and proceed with online filing. IPR Karo guides you through the complete trademark registration process in India - from document preparation to govt fee payment and e-filing."
    },
    {
      question: "What is the trademark registration cost in India?",
      answer: "The trademark registration price depends on the applicant type and number of classes. Trademark registration govt fees for individuals and startups start at ₹4,500 per class, while for companies it is ₹9,000 per class. IPR Karo offers affordable, transparent trademark registration pricing with no hidden costs."
    },
    {
      question: "What documents are required for trademark registration?",
      answer: "The trademark registration documents required include: your trademark logo or word mark, applicant identity proof (Aadhaar/PAN), address proof, business registration certificate, and a signed Form TM-48 (authorization). IPR Karo provides a complete checklist and helps prepare all documents for seamless filing."
    },
    {
      question: "How does AI help in trademark search and registration?",
      answer: "AI instantly scans trademark databases worldwide, detects similarities and conflicts, checks trademark availability, runs a brand name availability search, generates registerability scores, and guides users through every step - from trademark search to final registration. It also supports trademark search by class and international trademark search."
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

  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPR Karo - Legal Services",
    "image": "https://www.iprkaro.com/logo.png",
    "description": "AI-powered trademark registration and intellectual property protection services in India.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "6",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rajesh Kumar" },
        "datePublished": "2024-01-15",
        "reviewBody": "I was worried about the trademark process for my software company. IPR Karo's AI search was instant, and their team handled the objection so smoothly.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Anita Desai" },
        "datePublished": "2023-11-20",
        "reviewBody": "Copyrighting our ad campaigns used to be a headache. With IPR Karo, it's just a few clicks. The dashboard is super intuitive and the legal support is top-notch.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram Singh" },
        "datePublished": "2023-12-05",
        "reviewBody": "We needed to protect our brand across multiple categories. The team guided us on the right classifications and saved us money. Professional, transparent, and very effective service.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Dr. A. Mehra" },
        "datePublished": "2024-02-10",
        "reviewBody": "Filing a patent in India is complex. IPR Karo's patent agents understood my technical invention quickly and drafted a strong application.",
        "reviewRating": { "@type": "Rating", "ratingValue": "4" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "A Prominent Incubator" },
        "datePublished": "2024-01-30",
        "reviewBody": "We recommend IPR Karo to all our portfolio startups. Their automated watch services and startup-friendly pricing make them the best IP partner in the ecosystem.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Amit Verma" },
        "datePublished": "2024-02-15",
        "reviewBody": "The trademark monitoring service is a lifesaver. We were alerted about a similar brand filing within days and could take action immediately. Highly proactive team!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  };

  return (
    <div className="home-page-font">
      {/* Server-side rendered FAQ Schema for Google Search Console */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />

      <HeroSection />
      
      {/* Wrapper to prevent dark subpixel bleeding between white sections on mobile */}
      <div className="w-full bg-white flex flex-col">
        <BrandGrid />
        <ResultsGrid />
        <SmarterDecisions />
        <WhatWeProtect />
      </div>
      
      <CtaSection />
      <BuiltToProtect />
      <SimplePricing />
      <FaqSection />
      
      {/* Wrapper to handle white sections cleanly */}
      <div className="w-full bg-white flex flex-col">
          <StatesAndUTs />
          <TrademarkClasses />
      </div>

      {/* <WhyTrademark />
      <div className="-mt-10">
        <OurServices />

      </div>
      <ReviewSnippets />
      <SimplePlans />
     <Faq />*/}
    </div> 
  );
}
