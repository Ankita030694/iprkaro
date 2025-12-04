import React from 'react';

export default function FaqSection() {
  const faqs = [
    {
      question: "How do I register a trademark in Jammu and Kashmir?",
      answer: "To register a trademark in Jammu and Kashmir, you must follow the online process via the IP India portal. The steps include conducting a trademark search, filing Form TM-A, responding to examination reports, and handling any oppositions. The Delhi Trademark Registry has jurisdiction over applications from J&K."
    },
    {
      question: "Which Trademark Registry office covers Jammu and Kashmir?",
      answer: "The Trademark Registry in Delhi has jurisdiction over Jammu and Kashmir. However, the entire process is digital, so you can file your application online from Srinagar, Jammu, Anantnag, or anywhere in the UT without visiting the Delhi office."
    },
    {
      question: "What documents are required for trademark registration in J&K?",
      answer: "Key documents include: 1) Identity proof (PAN, Aadhaar), 2) Address proof, 3) Brand logo/image, 4) User Affidavit (if claiming prior usage), 5) MSME/Start-up certificate (for fee discounts), and 6) Form TM-48 (Power of Attorney) if hiring a consultant."
    },
    {
      question: "Can I register a GI tag for my traditional product in J&K?",
      answer: "GI tags are for community-owned products like Pashmina Shawls or Kashmir Saffron. As an individual or business, you cannot own a GI tag, but you can register a trademark to protect your specific brand name or logo associated with these products."
    },
    {
      question: "What is the validity of a trademark registered in Jammu and Kashmir?",
      answer: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely for subsequent 10-year periods by paying the renewal fees."
    },
    {
      question: "Is it mandatory to hire a trademark attorney in J&K?",
      answer: "It is not mandatory but highly recommended. An experienced attorney can help with a comprehensive search, correct class selection (e.g., Class 24 for Pashmina or Class 30 for Saffron), and legally handle objections, ensuring a smoother registration process."
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
      question: "Can I file for a trademark online from Srinagar or Jammu?",
      answer: "Yes, the trademark filing system in India is centralized and online. You can file your application from Srinagar, Jammu, Baramulla, or any other city in J&K through the official website ipindiaservices.gov.in."
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
