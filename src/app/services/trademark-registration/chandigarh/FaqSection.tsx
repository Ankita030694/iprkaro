import React from 'react';

export default function FaqSection() {
  const faqData = [
    {
      question: "Which Trademark Registry has jurisdiction over Chandigarh?",
      answer: "Chandigarh falls under the jurisdiction of the **Delhi Trademark Registry**. The appropriate office for filing applications from Chandigarh is located at Plot No. 32, Sector 14, Dwarka, New Delhi. However, the entire process can be completed online from Chandigarh without visiting the office."
    },
    {
      question: "What are the documents required for trademark registration in Chandigarh?",
      answer: "The key documents include: \n1. **Identity Proof:** PAN Card, Aadhaar Card, or Passport.\n2. **Address Proof:** Utility bill or Driving License.\n3. **Logo/Brand Name:** A clear image of the logo or the word mark.\n4. **Incorporation Certificate:** For companies and LLPs.\n5. **MSME/Udyam Registration:** To avail a 50% rebate on government fees.\n6. **Power of Attorney (Form-48):** To authorize an attorney to file on your behalf."
    },
    {
      question: "How long does it take to register a trademark in Chandigarh?",
      answer: "The standard timeline is approximately **6 to 8 months** if there are no objections or oppositions. If objections are raised by the registry or third parties, the process can take 12 to 18 months or longer."
    },
    {
      question: "Can I file a trademark application online from Chandigarh?",
      answer: "Yes, the entire trademark filing process in India is digital. You can file your application online through the official IP India portal from your office or home in Chandigarh. Digital filing is faster and provides immediate acknowledgement."
    },
    {
      question: "What is the validity of a registered trademark?",
      answer: "A registered trademark is valid for **10 years** from the date of application. It can be renewed indefinitely for subsequent periods of 10 years by paying the renewal fees."
    },
    {
      question: "Is a trademark search mandatory before filing?",
      answer: "While not legally mandatory, a **Comprehensive Trademark Search** is highly recommended. It helps identify existing similar marks that could lead to objections or rejections, saving you time and money."
    },
    {
      question: "What are the common reasons for trademark objection?",
      answer: "Common reasons include:\n1. **Similarity:** The mark is identical or deceptively similar to an existing registered mark.\n2. **Descriptiveness:** The mark describes the quality or nature of the goods (e.g., 'Sweet' for sugar).\n3. **Offensive Content:** The mark contains scandalous or obscene matter."
    },
    {
      question: "Does a trademark registered in Chandigarh protect my brand globally?",
      answer: "No, trademark protection is territorial. A trademark registered in India protects your brand only within India. For international protection, you can apply through the **Madrid Protocol** or file separate applications in each country."
    },
    {
      question: "Can I sell or transfer my trademark?",
      answer: "Yes, a trademark is an intellectual property asset that can be sold, licensed, or transferred. This process is known as **Trademark Assignment** or **Transmission**, and it must be recorded with the Trademark Registry."
    },
    {
      question: "What is the importance of the ® symbol?",
      answer: "The ® symbol indicates that your trademark is officially registered and protected under the Trade Marks Act. It serves as a warning to potential infringers and builds trust with customers. Using the ® symbol for an unregistered mark is an offence."
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
