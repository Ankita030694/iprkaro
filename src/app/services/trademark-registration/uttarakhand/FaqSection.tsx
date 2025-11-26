import React from 'react';

export default function FaqSection() {
  const faqData = [
    {
      question: "Which Trademark Registry covers Uttarakhand?",
      answer: "Uttarakhand falls under the jurisdiction of the **Delhi Trademark Registry**. The appropriate office is located at Plot No. 32, Sector 14, Dwarka, New Delhi. However, applicants from Uttarakhand can file and manage their applications entirely online."
    },
    {
      question: "What documents are needed for trademark registration in Uttarakhand?",
      answer: "The essential documents include:\n1. **Applicant Details:** Name, address, and nationality.\n2. **Identity Proof:** PAN Card, Aadhaar Card, or Passport.\n3. **Business Proof:** Udyam Registration, Incorporation Certificate, or Partnership Deed.\n4. **Brand Logo:** A clear soft copy of the logo or word mark.\n5. **Power of Attorney:** Form-48 authorizing an attorney.\n6. **User Affidavit:** If claiming prior use of the mark."
    },
    {
      question: "How much time does the registration process take?",
      answer: "In a straightforward case with no objections or oppositions, the process takes about **6 to 8 months**. If there are legal hurdles, it can extend to 18 months or more."
    },
    {
      question: "Is it necessary to visit the Delhi office?",
      answer: "No, physical presence is rarely required. The entire process, from filing (Form TM-A) to hearings (via video conferencing), can be handled digitally from Dehradun, Haridwar, or anywhere in Uttarakhand."
    },
    {
      question: "What is the validity period of a trademark?",
      answer: "A registered trademark is valid for **10 years** from the date of filing. It can be renewed every 10 years indefinitely by paying the prescribed renewal fees."
    },
    {
      question: "Can I register a trademark for my Homestay or Yoga Retreat?",
      answer: "Yes, absolutely. Hospitality services (Homestays, Hotels) fall under **Class 43**, and Educational/Training services (Yoga schools) fall under **Class 41**. Registering your brand name is crucial to distinguish your services in Uttarakhand's competitive tourism sector."
    },
    {
      question: "What if someone opposes my trademark application?",
      answer: "If a third party files an opposition, the Registrar initiates a legal proceeding. Both parties must submit evidence and arguments. It is highly advisable to hire a trademark attorney to represent your case effectively."
    },
    {
      question: "Does a trademark protect my brand globally?",
      answer: "No, trademark rights are territorial. A registration in India protects you only within the country. For international protection, you can apply via the **Madrid Protocol** or file directly in target countries."
    },
    {
      question: "Can I sell my registered trademark?",
      answer: "Yes, a trademark is an intellectual property asset that can be sold, assigned, or franchised. You can transfer ownership with or without the goodwill of the business."
    },
    {
      question: "Why should I conduct a trademark search?",
      answer: "A comprehensive search helps identify existing similar marks. This prevents accidental infringement and reduces the chances of your application being rejected by the Registry."
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
