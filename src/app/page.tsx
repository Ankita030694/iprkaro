import { HeroSection, WhyTrademark, OurServices, SimplePlans, Faq, ReviewSnippets } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trademark Registration India | IPR Karo - AI-Powered IP Protection",
  description: "Instant trademark search, risk checks, and online registration. Register your trademark with AI-powered reports for fast, secure brand protection. Start in under 60 seconds with IPR Karo.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trademark Registration India | IPR Karo",
    description: "AI-powered trademark registration, patent services, and copyright protection in India.",
    url: "https://iprkaro.com",
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

  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPR Karo - Legal Services",
    "image": "https://iprkaro.com/logo.png",
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
    <>
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
      <WhyTrademark />
      <div className="-mt-10">
      <OurServices />

      </div>
      <ReviewSnippets />
      <SimplePlans />
      <Faq />
    </>
  );
}
