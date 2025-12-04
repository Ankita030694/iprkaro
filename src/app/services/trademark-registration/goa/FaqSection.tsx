import React from 'react';

export default function FaqSection() {
  const faqs = [
    {
      question: "How do I register a trademark in Goa?",
      answer: "To register a trademark in Goa, you can file an application online through the IP India portal. The Mumbai Trademark Registry has jurisdiction over Goa. The process involves a trademark search, filing Form TM-A, examination, publication, and registration."
    },
    {
      question: "Which Trademark Registry office covers Goa?",
      answer: "The Trademark Registry in Mumbai (Antop Hill) has territorial jurisdiction over Goa. However, the entire filing process is digital, allowing you to apply from Panaji, Margao, Vasco da Gama, or anywhere in the state without visiting the Mumbai office."
    },
    {
      question: "What documents are required for trademark registration in Goa?",
      answer: "Key documents include: 1) Identity proof (PAN, Aadhaar), 2) Address proof, 3) Brand logo/image, 4) User Affidavit (if claiming prior usage), 5) MSME/Start-up certificate (for fee discounts), and 6) Form TM-48 (Power of Attorney) if hiring a consultant."
    },
    {
      question: "Can I register a GI tag for my product in Goa?",
      answer: "GI tags are for community-owned products like Goan Feni, Khaje, or Harmal Chilli. As an individual or business, you cannot own a GI tag, but you can register a trademark to protect your specific brand name or logo associated with these products."
    },
    {
      question: "What is the validity of a trademark registered in Goa?",
      answer: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely for subsequent 10-year periods by paying the renewal fees."
    },
    {
      question: "Is it mandatory to hire a trademark attorney in Goa?",
      answer: "It is not mandatory but highly recommended. An experienced attorney can help with a comprehensive search, correct class selection (e.g., Class 33 for Feni/Alcohol or Class 43 for Hotels/Shacks), and legally handle objections, ensuring a smoother registration process."
    },
    {
      question: "How long does the trademark registration process take?",
      answer: "The process typically takes 12 to 18 months if there are no complications. However, if there are objections from the registry or oppositions from third parties, it can take longer."
    },
    {
      question: "What are the government fees for trademark registration?",
      answer: "The government fee for online filing is ₹4,500 per class for Individuals, Startups, and MSMEs. For other entities like Private Limited Companies, the fee is ₹9,000 per class. Physical filing costs slightly more."
    },
    {
      question: "Can I file for a trademark online from Panaji or Margao?",
      answer: "Yes, the trademark filing system in India is centralized and online. You can file your application from Panaji, Margao, Mapusa, or any other town in Goa through the official website ipindiaservices.gov.in."
    },
    {
      question: "What happens if my trademark application is objected to?",
      answer: "If your application status shows 'Objected', it means the Registrar has raised queries. You must file a legal reply within 30 days of receiving the Examination Report to justify why your mark should be registered."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="mb-8 scroll-mt-32">

      <div className="flex items-center gap-2 mb-4">
        <div 
          className="w-2 h-2 rounded-full"
          style={{
            background: '#FFB703',
            boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
          }}
        />
        <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
          Frequently Asked Questions (FAQs)
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/5"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <details className="group">
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <h3 className="text-white font-nunito text-base lg:text-lg font-semibold pr-4">
                  {faq.question}
                </h3>
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-[#FFB703]">
                  <i className="fas fa-chevron-down" aria-hidden="true"></i>
                </span>
              </summary>
              <div className="px-4 pb-4 text-white/80 font-nunito text-sm lg:text-base leading-relaxed border-t border-white/10 pt-3">
                {faq.answer}
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
