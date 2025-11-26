import React from 'react';

export default function FaqSection() {
  const faqs = [
    {
      question: "How can I register a trademark in Assam?",
      answer: "To register a trademark in Assam, you need to follow the standard procedure defined by the Trade Marks Registry. This involves conducting a trademark search, filing the application (Form TM-A) either online through the IP India portal or physically at the Kolkata Trademark Registry (which has jurisdiction over Assam), responding to examination reports, and handling any oppositions. The process is streamlined online, allowing applicants from Assam to file without visiting Kolkata."
    },
    {
      question: "Which Trademark Registry office handles applications from Assam?",
      answer: "Trademark applications from Assam fall under the jurisdiction of the Trademark Registry in Kolkata. The address is: Boudhik Sampada Bhawan, CP-2, Sector V, Salt Lake City, Kolkata - 700091. However, the entire filing and prosecution process can be handled online through the official website ipindiaservices.gov.in."
    },
    {
      question: "What are the documents required for trademark registration in Assam?",
      answer: "The key documents required include: 1) Identity proof of the applicant (PAN Card, Aadhaar, Voter ID, etc.), 2) Address proof (Electricity bill, Bank statement, etc.), 3) A clear copy of the trademark/logo, 4) User Affidavit (if claiming prior use), 5) MSME/Start-up certificate (to avail fee concessions), and 6) Signed Power of Attorney (Form TM-48) if filing through an attorney."
    },
    {
      question: "Is it mandatory to hire a trademark attorney in Assam?",
      answer: "It is not legally mandatory to hire a trademark attorney, but it is highly recommended. A trademark attorney can help conduct a proper search, select the correct classes, draft the application accurately to avoid objections, and legally represent you during examination and opposition proceedings, significantly increasing the chances of successful registration."
    },
    {
      question: "What is the validity of a registered trademark in Assam?",
      answer: "A trademark registered in Assam (or anywhere in India) is valid for 10 years from the date of application filing. It can be renewed indefinitely for successive periods of 10 years by paying the prescribed renewal fees."
    },
    {
      question: "Can I register a trademark for Assam's traditional products like Gamosa or Muga Silk?",
      answer: "Yes, traditional products can be protected, often under Geographical Indications (GI) if they are specific to a region like Muga Silk of Assam. However, individual businesses can also register trademarks for their specific brands of these products to distinguish their goods from others in the market."
    },
    {
      question: "How long does the trademark registration process take in Assam?",
      answer: "The trademark registration process typically takes between 12 to 18 months, provided there are no serious objections or third-party oppositions. If the application faces opposition, the process can take longer depending on the legal proceedings."
    },
    {
      question: "What is the government fee for trademark registration in Assam?",
      answer: "The government fee depends on the type of applicant. For individuals, startups, and small enterprises (MSMEs), the fee is lower compared to other entities like large companies or partnerships. Filing online is also cheaper than physical filing. Please consult a professional for the current exact fee structure."
    },
    {
      question: "Can I file for a trademark online from Guwahati or other cities in Assam?",
      answer: "Yes, absolutely. The IP India portal allows applicants from Guwahati, Dibrugarh, Silchar, Jorhat, or any part of Assam to file trademark applications online. You do not need to travel to the Kolkata registry office."
    },
    {
      question: "What happens if my trademark application is objected to?",
      answer: "If your application receives an objection (Examination Report), you must file a written response within 30 days, addressing the concerns raised by the Registrar. If the response is satisfactory, the application proceeds to publication. If not, a hearing may be scheduled."
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
