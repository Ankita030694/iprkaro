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

