import ServicesClient from './ServicesClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark, Copyright & Patent Services in India | IPR Karo',
  description: 'Explore IPR Karo\'s full range of IP services - trademark registration, copyright filing, and patent applications in India. Expert legal support from ₹1499.',
  alternates: {
    canonical: '/our-services',
  },
};

export default function ServicesPage() {
  // FAQ Schema for server-side rendering
  const servicesFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What IP services does IPR Karo provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IPR Karo offers comprehensive intellectual property services including trademark registration with AI-powered search, copyright protection for creative works, and patent services for inventions. All services include expert legal guidance and end-to-end support."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AI-powered trademark search work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI instantly scans millions of trademark records across databases to find identical and confusingly similar marks. It provides a detailed risk report with similarity scores, conflict analysis, and recommendations to help you decide whether to proceed with registration or modify your brand."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get all IP services in one place?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! IPR Karo is your one-stop solution for all intellectual property needs. From trademark registration to copyright filing and patent applications, we handle everything online with expert legal support, making IP protection simple and accessible."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical timeline for each service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration typically takes 12-18 months, copyright registration takes 4-6 months, and patent registration takes 3-5 years. However, our AI-powered search and expert guidance help minimize delays by identifying potential issues early in the process."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide support after registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer comprehensive post-registration support including trademark renewals, opposition handling, infringement monitoring, licensing assistance, and legal defense. Our 24/7 AI-powered monitoring keeps your intellectual property protected continuously."
        }
      }
    ]
  };


  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPR Karo - Professional IP Services",
    "image": "https://www.iprkaro.com/logo.png",
    "description": "Comprehensive trademark, copyright, and patent registration services in India with AI-powered search.",
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
      {/* Server-side FAQ Schema for Google Search Console */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesFaqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema),
        }}
      />
      
      <ServicesClient />
    </>
  );
}