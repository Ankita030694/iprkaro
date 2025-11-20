import BlogListingClient from './BlogListingClient';

export default function BlogPage() {
  // FAQ Schema for server-side rendering
  const blogFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What topics are covered in the IPR Karo blog?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The IPR Karo blog covers comprehensive topics on intellectual property including trademark registration tips, copyright protection strategies, patent filing guidance, AI-powered IP solutions, legal updates, and best practices for protecting your brand and innovations in India."
        }
      },
      {
        "@type": "Question",
        "name": "How often is the IPR Karo blog updated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We regularly update our blog with fresh insights on trademark registration, intellectual property trends, legal changes, and expert guidance. Our team of IP attorneys and specialists publish new articles to keep you informed about the latest developments in IP protection."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get expert IP advice from the blog articles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our blog articles are written by experienced IP attorneys and trademark experts. Each article provides actionable insights, step-by-step guides, and expert recommendations for trademark registration, copyright protection, and patent filing in India."
        }
      },
      {
        "@type": "Question",
        "name": "Are the blog articles relevant for trademark registration in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! All our blog content is specifically tailored for trademark registration and IP protection in India. We cover Indian trademark laws, registration procedures, AI-powered search techniques, and practical tips for protecting your brand under the Indian Trademarks Act, 1999."
        }
      },
      {
        "@type": "Question",
        "name": "How can I stay updated with new blog posts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can stay updated by regularly visiting our blog page, subscribing to our newsletter, or following us on social media. We cover the latest trends in trademark registration, copyright protection, patent services, and AI-driven IP solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does trademark registration take in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trademark registration in India typically takes 12-18 months from application to final registration. The process includes application filing, examination, publication, and registration stages. IPR Karo streamlines this process with AI-powered pre-filing searches to reduce objections and expedite approval."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need your trademark logo/image (if applicable), applicant's identity proof, address proof, business registration certificate (for companies), and a signed authorization form. IPR Karo provides a complete checklist and helps you prepare all necessary documents for seamless filing."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my trademark application is rejected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your trademark application faces objections or opposition, IPR Karo's legal experts help you respond with proper documentation and arguments. Our AI-powered search reduces rejection risks by identifying conflicts before filing, and our attorneys provide expert guidance throughout the process."
        }
      },
      {
        "@type": "Question",
        "name": "Can I register a trademark for multiple classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can register your trademark across multiple classes under the Nice Classification system. Each class requires a separate application fee. IPR Karo helps you identify the relevant classes for your business and provides cost-effective multi-class registration services."
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
          __html: JSON.stringify(blogFaqSchema),
        }}
      />
      
      <BlogListingClient />
    </>
  );
}

