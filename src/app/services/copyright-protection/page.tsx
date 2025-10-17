import CopyrightProtectionPageClient from './CopyrightProtectionPageClient';

export default function CopyrightProtectionPage() {
  // FAQ Schema for server-side rendering
  const copyrightFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a copyright, and why should I register it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright is a legal right that protects original creative works such as literary, artistic, musical, and digital content. Registering it provides legal proof of ownership and exclusive rights to reproduce, distribute, and license your work."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to register copyright in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright registration in India typically takes 4-6 months from filing to certificate issuance. With IPRKaro's expert guidance, we ensure proper documentation for timely processing."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for copyright registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Identity proof (PAN/Aadhaar), Address proof, Work sample (manuscript, music file, software code, design), NOC from publisher/author (if applicable), Power of Attorney (if filed through attorney)"
        }
      },
      {
        "@type": "Question",
        "name": "Can I register copyright online in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With IPRKaro, the entire copyright registration process is managed 100% online with expert legal support for books, music, software, and all creative works."
        }
      },
      {
        "@type": "Question",
        "name": "How long is copyright protection valid in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copyright protection lasts for the lifetime of the author plus 60 years after their death. For works like films and sound recordings, it's 60 years from the date of publication."
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
          __html: JSON.stringify(copyrightFaqSchema),
        }}
      />
      
      <CopyrightProtectionPageClient />
    </>
  );
}
