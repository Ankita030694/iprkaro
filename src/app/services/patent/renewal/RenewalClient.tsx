'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RenewalClient() {
  const faqs = [
    {
      question: "How long is a patent valid in India?",
      answer: "Patents in India are valid for 20 years from the filing date of the application, subject to payment of annual renewal fees (annuities). After 20 years, the patent expires and the invention enters public domain. There is no provision to extend patent term beyond 20 years except for pharmaceutical patents under specific circumstances."
    },
    {
      question: "When do I need to pay patent renewal fees?",
      answer: "Patent renewal fees must be paid annually starting from the 2nd year after filing the patent application. Payment can be made in advance for multiple years. Grace period of 6 months with additional fee is available if deadline is missed. Non-payment leads to patent lapsing and loss of protection."
    },
    {
      question: "What happens if I miss patent renewal deadline?",
      answer: "If renewal fee is not paid by due date, you have 6-month grace period to pay with additional surcharge. If not paid within grace period, patent lapses and protection is lost. Restoration is possible within 18 months of lapse by filing Form 15 with restoration fee and showing sufficient cause for non-payment delay."
    },
    {
      question: "How much are patent renewal fees in India?",
      answer: "Patent renewal fees vary by year and entity type. For natural persons/startups/small entities, fees range from ₹800 (year 2) to ₹8,000 (years 17-20). Larger entities pay approximately 4x these amounts. Fees increase progressively with patent age to maintain protection."
    },
    {
      question: "Can I restore a lapsed patent in India?",
      answer: "Yes, lapsed patents can be restored within 18 months from the date when renewal was due by filing Form 15 for patent restoration along with pending renewal fees, restoration fee, and an affidavit showing sufficient cause for non-payment. The Controller examines reasons and may grant restoration if satisfied."
    },
    {
      question: "What is patent maintenance and why is it important?",
      answer: "Patent maintenance involves timely payment of annual renewal fees, keeping records updated, monitoring for infringement, and maintaining patent enforceability. Proper maintenance ensures continuous protection, prevents lapsing, and maximizes commercial value of patent assets throughout the 20-year term."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      <div className="pb-16 pt-[180px]" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-3 h-3 rounded-full relative"
                style={{
                  background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: '#FFB703', opacity: 0.4 }}
                />
              </div>
              <h1 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Patent Renewal & Maintenance Services India
              </h1>
            </div>
            
            <div 
              className="p-4 lg:p-5 rounded-lg backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed mb-3">
                Maintain your patent protection with <span className="font-bold text-[#FFB703]">timely renewal and professional maintenance services</span>. Annual renewal fees (annuities) are mandatory to keep patents in force throughout the 20-year protection period. Missing renewal deadlines results in patent lapsing and loss of valuable IP rights.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our patent maintenance services include renewal fee payment, deadline tracking, grace period management, lapsed patent restoration, and comprehensive portfolio maintenance. We ensure your patents remain protected and enforceable throughout their full term.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Patent Renewal Fee Structure in India
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/95 font-nunito text-sm leading-relaxed mb-4">
                Patent renewal fees in India increase progressively with patent age. Fees must be paid annually starting from the 2nd year after filing date. Entity type (natural person/startup vs company) significantly impacts fee amounts.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-user text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Natural Persons/Startups</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Lower fees for individuals, startups, and small entities. Years 2-3: ₹800/year, Years 4-6: ₹2,400/year, Years 7-10: ₹4,000/year, Years 11-20: ₹8,000/year.
                  </p>
                </div>

                <div className="p-3 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-building text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Companies/Large Entities</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Higher fees for companies and organizations. Approximately 4x individual rates. Years 2-3: ₹3,200/year, Years 4-6: ₹9,600/year, Years 7-10: ₹16,000/year, Years 11-20: ₹32,000/year.
                  </p>
                </div>

                <div className="p-3 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-clock text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Grace Period Surcharge</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    6-month grace period available after due date with 50% additional surcharge on renewal fee. Payment must be made within grace period to avoid patent lapsing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Patent Renewal Process
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="relative space-y-3">
                <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'rgba(255, 183, 3, 0.3)', opacity: 0.5 }} />
                
                {[
                  {
                    step: "Track Renewal Deadline",
                    description: "Monitor annual renewal due dates starting from 2nd year anniversary of patent filing date. Maintain calendar reminders well in advance."
                  },
                  {
                    step: "Calculate Applicable Fee",
                    description: "Determine renewal fee based on patent age (year) and entity type. Check current fee schedule on Patent Office website for accurate amounts."
                  },
                  {
                    step: "File Form 3 for Renewal",
                    description: "Submit Form 3 electronically through Indian Patent Office portal along with applicable renewal fee payment for the specific year or years."
                  },
                  {
                    step: "Make Fee Payment",
                    description: "Pay renewal fee through Patent Office online payment gateway. Multiple years can be paid in advance to avoid repeated filings."
                  },
                  {
                    step: "Receive Acknowledgment",
                    description: "Patent Office issues acknowledgment upon successful payment. Maintain records of all renewal payments and receipts for future reference."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex gap-3">
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>
                      {index + 1}
                    </div>
                    
                    <div className="flex-1 p-3 rounded-md transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <h4 className="text-white font-nunito text-sm font-semibold mb-1">{item.step}</h4>
                      <p className="text-white/90 font-nunito text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Lapsed Patent Restoration
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/95 font-nunito text-sm leading-relaxed mb-4">
                If renewal fee is not paid within grace period, patent lapses and protection ceases. However, lapsed patents can be restored within 18 months from the date of failure to pay renewal fee.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    icon: "fas fa-file-alt",
                    title: "File Form 15 for Restoration",
                    description: "Submit patent restoration application using Form 15 along with statement explaining reasons for non-payment of renewal fee."
                  },
                  {
                    icon: "fas fa-rupee-sign",
                    title: "Pay Pending Fees & Restoration Fee",
                    description: "Pay all pending renewal fees for lapsed period plus restoration fee as prescribed under Patent Rules."
                  },
                  {
                    icon: "fas fa-file-signature",
                    title: "Submit Affidavit with Sufficient Cause",
                    description: "Provide sworn affidavit explaining circumstances that led to non-payment and demonstrating it was unintentional or unavoidable."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Controller's Decision",
                    description: "Patent Controller examines restoration application and reasons. If satisfied with cause shown, patent is restored with retrospective effect."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300" style={{ background: index === 0 ? 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)' : 'rgba(255, 255, 255, 0.03)', border: index === 0 ? '1px solid rgba(255, 183, 3, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255, 183, 3, 0.15)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                        <i className={`${item.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-sm font-semibold mb-1">{item.title}</h4>
                        <p className="text-white/90 font-nunito text-xs">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Benefits of Timely Patent Renewal
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(255, 183, 3, 0.3)' }}>
              <div className="space-y-3">
                {[
                  {
                    title: "Continuous Patent Protection",
                    description: "Maintains exclusive rights to make, use, sell, and import patented invention throughout the 20-year term, preventing competitors from copying."
                  },
                  {
                    title: "Preserves Commercial Value",
                    description: "Lapsed patents lose all value instantly. Timely renewal preserves patent as valuable business asset for licensing, enforcement, or sale."
                  },
                  {
                    title: "Avoids Restoration Complications",
                    description: "Renewal before expiry avoids expensive restoration proceedings, additional fees, and uncertainty about restoration approval."
                  },
                  {
                    title: "Maintains Licensing Revenue",
                    description: "For monetized patents, renewal ensures continuous royalty income from licensees and maintains licensing agreements validity."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="p-3 rounded-md transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <h4 className="text-white font-nunito text-sm font-semibold mb-1 flex items-center gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {benefit.title}
                    </h4>
                    <p className="text-white/90 font-nunito text-xs pl-6">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div 
              className="relative overflow-hidden p-5 lg:p-6 rounded-xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)',
                border: '2px solid rgba(255, 183, 3, 0.3)',
                boxShadow: '0 8px 32px rgba(255, 183, 3, 0.3)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
                  style={{ background: 'rgba(255, 183, 3, 0.2)', border: '1px solid rgba(255, 183, 3, 0.4)' }}
                >
                  <i className="fas fa-sync-alt text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Keep Patents Active</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Professional Patent Renewal Services
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Never miss a renewal deadline. Our comprehensive maintenance services ensure continuous patent protection with timely fee payments and deadline tracking.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                    color: '#0C002B',
                    boxShadow: '0 6px 18px rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                  Contact Patent Team
                  <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 3px 14px rgba(0, 0, 0, 0.3)' }}>
                  <h3 className="text-white font-nunito text-sm font-semibold mb-2 flex items-start gap-2">
                    <i className="fas fa-question-circle text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                    {faq.question}
                  </h3>
                  <p className="text-white/90 font-nunito text-xs leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
      
    </div>
  );
}
