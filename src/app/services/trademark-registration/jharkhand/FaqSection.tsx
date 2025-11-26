import React from 'react';

export default function FaqSection() {
  const faqs = [
    {
      question: "How do I register a trademark in Jharkhand?",
      answer: "To register a trademark in Jharkhand, you must follow the process laid out by the Trade Marks Registry. This involves conducting a trademark search, filing the application (Form TM-A) online via the IP India portal or physically at the Kolkata Trademark Registry (which has jurisdiction over Jharkhand), responding to examination reports, and handling any oppositions. The online process is recommended for faster processing."
    },
    {
      question: "Which Trademark Registry office has jurisdiction over Jharkhand?",
      answer: "The Trademark Registry in Kolkata has jurisdiction over trademark applications from Jharkhand. The office is located at Boudhik Sampada Bhawan, CP-2, Sector V, Salt Lake City, Kolkata - 700091. However, applicants can file online from anywhere in Jharkhand, including Ranchi, Jamshedpur, and Dhanbad."
    },
    {
      question: "What documents are needed for trademark registration in Jharkhand?",
      answer: "The essential documents include: 1) Identity proof of the applicant (PAN Card, Aadhaar, etc.), 2) Address proof (Electricity bill, etc.), 3) A clear image of the trademark/logo, 4) User Affidavit (if claiming prior use), 5) MSME/Start-up certificate (for fee concessions), and 6) Signed Power of Attorney (Form TM-48) if hiring an attorney."
    },
    {
      question: "Can I register a trademark for Jharkhand's traditional arts like Sohrai Khovar?",
      answer: "Sohrai Khovar painting is already a registered Geographical Indication (GI) of Jharkhand, which protects the community rights. However, individual artisans or businesses can register their own unique brand names or logos under trademarks to distinguish their specific products in the market."
    },
    {
      question: "What is the validity period of a trademark registered in Jharkhand?",
      answer: "A trademark registered in Jharkhand is valid for 10 years from the date of filing the application. It can be renewed indefinitely for subsequent periods of 10 years upon payment of the renewal fee."
    },
    {
      question: "Is it necessary to hire a trademark consultant in Jharkhand?",
      answer: "While not mandatory, hiring a professional trademark consultant or attorney is highly advisable. They can conduct a comprehensive search, ensure correct class selection (e.g., for mining or textiles), and effectively handle legal objections, significantly improving the chances of registration."
    },
    {
      question: "How long does the registration process take?",
      answer: "The process typically takes between 12 to 18 months if there are no major objections or oppositions. If the application is opposed by a third party, the process can take longer due to legal hearings."
    },
    {
      question: "What are the government fees for trademark registration?",
      answer: "The government fee varies by applicant type. Individuals, Startups, and MSMEs enjoy lower fees compared to large companies. Online filing is also cheaper than physical filing. It is best to check the latest fee structure on the IP India website or consult a professional."
    },
    {
      question: "Can I file for a trademark online from Jamshedpur or Ranchi?",
      answer: "Yes, the entire trademark filing process is digital. You can file your application from Jamshedpur, Ranchi, Bokaro, or any other part of Jharkhand through the official IP India website (ipindiaservices.gov.in)."
    },
    {
      question: "What should I do if my trademark application status shows 'Objected'?",
      answer: "An 'Objected' status means the Registrar has raised queries regarding your application, often about distinctiveness or similarity to existing marks. You must file a formal legal reply within 30 days of receiving the Examination Report to overcome the objection."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
