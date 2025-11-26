import React from 'react';

export default function FaqSection() {
  const faqData = [
    {
      question: "Which Trademark Registry has jurisdiction over Sikkim?",
      answer: "Sikkim falls under the jurisdiction of the **Kolkata Trademark Registry**. The office is located at Intellectual Property Building, CP-2, Sector V, Salt Lake City, Kolkata. However, the entire filing process can be done online from Gangtok or anywhere in Sikkim."
    },
    {
      question: "What are the documents required for trademark registration in Sikkim?",
      answer: "The key documents include:\n1. **Identity Proof:** PAN Card, Aadhaar Card, or Passport of the applicant.\n2. **Address Proof:** Utility bill, Driving License, or Bank Statement.\n3. **Logo/Brand Name:** A clear soft copy of the logo or word mark.\n4. **Business Proof:** Udyam Registration (for MSMEs), Incorporation Certificate, or Partnership Deed.\n5. **Power of Attorney (Form-48):** To authorize an attorney to file on your behalf.\n6. **User Affidavit:** If claiming prior usage of the mark."
    },
    {
      question: "How long does the trademark registration process take?",
      answer: "If there are no objections or oppositions, the process typically takes **6 to 8 months**. However, if legal hurdles arise, it can take 18 months or longer."
    },
    {
      question: "Can I register a trademark for my Organic Farm produce?",
      answer: "Yes, absolutely. Since Sikkim is an organic state, branding your agricultural produce is vital. You can register trademarks for your brand under **Class 31** (Agricultural products) or **Class 30** (Spices/Tea). This distinguishes your premium organic products from others."
    },
    {
      question: "Is the filing process completely online?",
      answer: "Yes, the process is digital-first. You can file applications, reply to examination reports, and receive certificates online through the IP India portal, eliminating the need to visit Kolkata."
    },
    {
      question: "What is the validity of a registered trademark?",
      answer: "A registered trademark is valid for **10 years** from the date of application. It can be renewed indefinitely for subsequent periods of 10 years."
    },
    {
      question: "What is the difference between a Trademark and a GI Tag?",
      answer: "A **Trademark** protects a specific brand name (e.g., a company selling Dalle Khursani pickles). A **GI (Geographical Indication) Tag** protects the regional product itself (e.g., 'Sikkim Large Cardamom'). The GI belongs to the community, while the trademark belongs to a specific business."
    },
    {
      question: "Can I sell or license my trademark?",
      answer: "Yes, a trademark is an asset. You can sell (assign) it to another party or license it (e.g., for franchising) in exchange for royalties. These agreements must be recorded with the Registry."
    },
    {
      question: "What happens if my application is objected to?",
      answer: "If the Registry raises an objection, you must file a legal reply within 30 days justifying why your mark should be accepted. It is best to seek professional legal help for this."
    },
    {
      question: "Why is a trademark search recommended?",
      answer: "A search helps identify if your proposed name is already taken. This prevents rejection of your application and potential legal disputes with existing brand owners."
    }
  ];

  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
          <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div className="grid gap-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.01]"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              <details className="group">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                  <span className="text-white font-nunito text-base md:text-lg font-semibold pr-4">
                    {item.question}
                  </span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <i className="fas fa-chevron-down text-[#FFB703]"></i>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <div className="h-px w-full bg-white/10 mb-4"></div>
                  <p className="text-white/80 font-nunito text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqData.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}
