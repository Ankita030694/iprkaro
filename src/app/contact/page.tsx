import ContactClient from './ContactClient';

export default function ContactPage() {
  // FAQ Schema for server-side rendering
  const contactFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I contact IPR Karo for support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach us via email at info@iprkaro.com, through our contact form on this page, or by calling our support team. We provide 24/7 online support for all trademark, copyright, and patent registration queries."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have physical offices I can visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have offices in major cities across India including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, and Kolkata. However, our services are 100% available online, so you can complete your entire trademark registration from anywhere in India."
        }
      },
      {
        "@type": "Question",
        "name": "What are your response times for queries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically respond to all queries within 2-4 hours during business hours. For urgent matters, our AI-powered chat support is available 24/7 to provide instant answers and guidance on trademark searches and registration processes."
        }
      },
      {
        "@type": "Question",
        "name": "Can I schedule a consultation with an IP expert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can schedule a free consultation with our IP attorneys through our contact form or by emailing us. Our experts will review your trademark needs, discuss registration strategy, and provide personalized legal guidance."
        }
      },
      {
        "@type": "Question",
        "name": "How do I track my trademark application status?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once you register with IPR Karo, you'll receive regular updates via email and SMS. You can also log into your dashboard to track your application status in real-time, view documents, and communicate directly with your assigned legal expert."
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
          __html: JSON.stringify(contactFaqSchema),
        }}
      />
      
      <ContactClient />
    </>
  );
}
