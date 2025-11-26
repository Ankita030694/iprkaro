import React from 'react';

export default function FaqSection() {
  const faqData = [
    {
      question: "Which Trademark Registry has jurisdiction over Manipur?",
      answer: "Manipur falls under the jurisdiction of the **Kolkata Trademark Registry**. The office is located at Intellectual Property Building, CP-2, Sector V, Salt Lake City, Kolkata. However, applicants from Manipur can file and track their applications entirely online."
    },
    {
      question: "What are the documents required for trademark registration in Manipur?",
      answer: "The key documents include:\n1. **Identity Proof:** PAN Card, Aadhaar Card, or Passport.\n2. **Address Proof:** Utility bill, Driving License, or Bank Statement.\n3. **Logo/Brand Name:** A clear image of the logo or the word mark.\n4. **Business Proof:** Udyam Registration (for MSMEs), Incorporation Certificate, or Partnership Deed.\n5. **Power of Attorney (Form-48):** To authorize an attorney to file on your behalf.\n6. **User Affidavit:** If claiming prior usage of the mark."
    },
    {
      question: "How long does it take to register a trademark in Manipur?",
      answer: "The standard timeline is approximately **6 to 8 months** if there are no objections or oppositions. If legal hurdles arise, the process can take 12 to 18 months or longer."
    },
    {
      question: "Can I register a trademark for my Handloom or Handicraft business?",
      answer: "Yes, absolutely. Manipur is famous for its handlooms and handicrafts. You can register trademarks for your unique textile designs or brand names under **Class 24** (Textiles) or **Class 25** (Clothing). This protects your brand from cheap imitations."
    },
    {
      question: "Is the filing process online or offline?",
      answer: "The process is primarily **online**. You can file your application through the official IP India portal from Imphal or any other part of Manipur. Online filing is faster and provides an immediate digital receipt."
    },
    {
      question: "What is the validity of a registered trademark?",
      answer: "A registered trademark is valid for **10 years** from the date of application. It can be renewed indefinitely for subsequent periods of 10 years by paying the renewal fees."
    },
    {
      question: "What is the difference between a Trademark and a GI Tag?",
      answer: "A **Trademark** protects a specific brand name or logo of a business (e.g., a specific company selling Black Rice). A **GI (Geographical Indication) Tag** protects products specific to a region (e.g., 'Chak-Hao' itself). While the GI belongs to the community, your trademark belongs to you."
    },
    {
      question: "Can I sell my trademark later?",
      answer: "Yes, a trademark is an intellectual property asset. You can sell, assign, or license it to another party for a fee. This transfer must be recorded with the Trademark Registry."
    },
    {
      question: "What if my trademark application is objected to?",
      answer: "If the Registry raises an objection, you must file a legal reply within 30 days explaining why your mark should be accepted. Professional legal assistance is highly recommended for drafting this reply."
    },
    {
      question: "Why is a trademark search important?",
      answer: "A trademark search helps you check if your proposed brand name is already taken. This prevents rejection of your application and saves you from potential legal disputes with existing trademark owners."
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
