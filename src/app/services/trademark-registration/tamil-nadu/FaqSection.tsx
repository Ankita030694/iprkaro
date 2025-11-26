import React from 'react';

export default function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I register a trademark in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To register a trademark in Tamil Nadu, you must file an application with the Trademark Registry in Chennai. The process involves conducting a trademark search, filing Form TM-A, responding to examination reports, and handling any oppositions. You can file online through the IP India portal or physically at the IP Building in Guindy, Chennai."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the Trademark Office located in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Trademark Registry for Tamil Nadu is located at the Intellectual Property Building, G.S.T. Road, Guindy, Chennai - 600032. This office has jurisdiction over trademark applications from Tamil Nadu, Andhra Pradesh, Telangana, Karnataka, Kerala, and Lakshadweep."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of trademark registration in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The government fee for online trademark filing in Tamil Nadu is ₹4,500 per class for individuals, startups, and MSMEs. For other entities like private limited companies, the fee is ₹9,000 per class. Physical filing incurs slightly higher fees."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get a trademark registered in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The trademark registration process in Tamil Nadu typically takes between 12 to 18 months, provided there are no legal objections or third-party oppositions. If objections arise, the process may take longer depending on the hearings and legal proceedings at the Chennai Registry."
        }
      },
      {
        "@type": "Question",
        "name": "Can I file for a trademark online in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the most efficient way to file a trademark in Tamil Nadu is online through the official IP India website (ipindiaservices.gov.in). Online filing offers benefits like immediate acknowledgement, lower fees, and real-time status tracking."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for trademark registration in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include the applicant's identity and address proof (Aadhaar, PAN, GST certificate), a clear image of the trademark/logo, a user affidavit (if claiming prior use), and MSME/Startup certificate (if applicable for fee concession)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a lawyer to register a trademark in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While it is not mandatory to hire a lawyer, it is highly recommended. A trademark attorney can help with comprehensive searches, proper class selection, and legally drafting responses to objections, which significantly increases the chances of successful registration."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of registering a trademark in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Registration provides exclusive rights to use the mark, legal protection against infringement, enhanced brand value, and the ability to license or franchise your brand. It is essential for businesses in competitive hubs like Chennai, Coimbatore, and Tiruppur."
        }
      },
      {
        "@type": "Question",
        "name": "Can I register a trademark for my textile business in Tiruppur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, textile businesses in Tiruppur can register trademarks under Class 24 (Textiles) and Class 25 (Clothing). Registration protects your brand from counterfeits and establishes a unique identity in the global textile market."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my trademark application is objected to by the Chennai Registry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your application is objected to, you will receive an Examination Report. You must file a written response within 30 days explaining why your mark should be registered. If the Registrar is not satisfied, a hearing may be scheduled at the Chennai Trademark Office."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-4">
        {faqSchema.mainEntity.map((faq, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg transition-all duration-300 hover:bg-white/5"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
              <span className="text-[#FFB703] mt-1">Q.</span>
              {faq.name}
            </h3>
            <div className="text-white/80 leading-relaxed pl-7">
              <p>{faq.acceptedAnswer.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
