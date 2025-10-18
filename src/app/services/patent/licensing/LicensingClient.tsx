'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LicensingClient() {
  const faqs = [
    {
      question: "What is patent licensing in India?",
      answer: "Patent licensing is a legal agreement where the patent owner (licensor) grants permission to another party (licensee) to make, use, sell, or import the patented invention under specified terms. The licensor retains ownership while licensing grants usage rights in exchange for royalties or fees."
    },
    {
      question: "What are the types of patent licenses?",
      answer: "Patent licenses can be exclusive (only licensee can use), non-exclusive (multiple licensees possible), or sole (licensor and one licensee can use). Licenses can be limited by territory, field of use, duration, or technology scope. Cross-licensing involves mutual exchange of patent rights between parties."
    },
    {
      question: "How do I commercialize my patented invention?",
      answer: "Commercialization strategies include direct licensing to manufacturers, technology transfer to companies with market access, forming joint ventures, starting own manufacturing, selling patent rights, or franchising. Proper valuation, marketing to potential licensees, and negotiation support are crucial for successful commercialization."
    },
    {
      question: "What is compulsory licensing of patents in India?",
      answer: "Compulsory licensing allows government to permit third parties to use patented invention without patent owner consent under specific circumstances like public health emergencies, unreasonable pricing, or non-working of patent. Patent owner receives reasonable compensation but loses exclusive rights for licensed use."
    },
    {
      question: "How are patent licensing royalties calculated?",
      answer: "Royalty structures include lump-sum payments, running royalties (percentage of sales), minimum guarantees, milestone payments, or hybrid models. Rates typically range from 2-10% of sales depending on technology sector, patent strength, market exclusivity, and bargaining power. Technical and market factors influence royalty negotiations."
    },
    {
      question: "Do I need to register patent license agreements?",
      answer: "Yes, patent license agreements should be recorded with the Patent Office by filing Form 27 along with the license agreement. Recording provides legal validity, protects licensee rights, and is required for enforcement. Non-recording may create disputes and affect license enforceability in legal proceedings."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      <div className="pb-16 pt-[180px]" style={{ background: '#0C002B', backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))', backgroundSize: '100% 100%', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full relative" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }}>
                <div className="absolute inset-0 rounded-full animate-ping" style={{ background: '#FFB703', opacity: 0.4 }} />
              </div>
              <h1 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Patent Licensing & Commercialization Support Services India
              </h1>
            </div>
            
            <div className="p-4 lg:p-5 rounded-lg backdrop-blur-sm" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed mb-3">
                Monetize your patented inventions with <span className="font-bold text-[#FFB703]">strategic licensing and commercialization support</span>. Transform patents into revenue through licensing agreements, technology transfer, joint ventures, or outright sales. Professional guidance maximizes returns while protecting IP rights.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our patent commercialization experts provide comprehensive services including patent valuation, licensee identification, license agreement drafting, royalty negotiation, technology marketing, and commercialization strategy development for successful monetization.
              </p>
            </div>
          </section>

          {/* Types of Patent Licensing */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Types of Patent Licensing
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    icon: "fas fa-star",
                    title: "Exclusive License",
                    description: "Licensee gets exclusive rights to use the patent within defined territory/field. Even licensor cannot grant rights to others or use patent in licensed territory."
                  },
                  {
                    icon: "fas fa-users",
                    title: "Non-Exclusive License",
                    description: "Multiple licensees can be granted simultaneously. Licensor retains right to license to unlimited parties and use patent themselves."
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Sole License",
                    description: "Only licensee and licensor can use the patent. Licensor cannot grant to others but retains own usage rights alongside licensee."
                  },
                  {
                    icon: "fas fa-exchange-alt",
                    title: "Cross-Licensing",
                    description: "Mutual licensing between two patent holders, each granting rights to the other. Common in technology sectors with overlapping patents."
                  },
                  {
                    icon: "fas fa-globe-asia",
                    title: "Territorial License",
                    description: "License limited to specific geographic regions. Licensor can grant different licenses in different territories for same patent."
                  },
                  {
                    icon: "fas fa-layer-group",
                    title: "Field-of-Use License",
                    description: "License restricted to specific application fields or industries. Same patent can be licensed to different parties for different uses."
                  }
                ].map((type, index) => (
                  <div key={index} className="p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300" style={{ background: index === 0 ? 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)' : 'rgba(255, 255, 255, 0.03)', border: index === 0 ? '1px solid rgba(255, 183, 3, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255, 183, 3, 0.15)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                        <i className={`${type.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-sm font-semibold mb-1">{type.title}</h4>
                        <p className="text-white/90 font-nunito text-xs">{type.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Commercialization Strategies */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Patent Commercialization Strategies
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="space-y-3">
                {[
                  {
                    strategy: "Direct Licensing to Manufacturers",
                    description: "License your patent to established manufacturers who have production capabilities, distribution networks, and market access. Collect royalties while they handle commercialization."
                  },
                  {
                    strategy: "Technology Transfer Agreements",
                    description: "Transfer technology know-how along with patent license to companies in exchange for upfront fees, royalties, or equity stake in commercialization venture."
                  },
                  {
                    strategy: "Joint Venture Partnerships",
                    description: "Form strategic partnerships with companies that bring complementary assets (capital, manufacturing, marketing) while you contribute patented technology."
                  },
                  {
                    strategy: "Patent Sale or Assignment",
                    description: "Sell patent outright for lump-sum payment if you lack resources for commercialization or want immediate returns instead of long-term royalties."
                  },
                  {
                    strategy: "Startup Formation",
                    description: "Launch startup around patented technology, raise venture capital, and build commercial product. Patent provides competitive moat and attracts investors."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-3 rounded-md transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <h4 className="text-white font-nunito text-sm font-semibold mb-1 flex items-center gap-2">
                      <i className="fas fa-lightbulb text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {item.strategy}
                    </h4>
                    <p className="text-white/90 font-nunito text-xs pl-6">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-8">
            <div className="relative overflow-hidden p-5 lg:p-6 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)', border: '2px solid rgba(255, 183, 3, 0.3)', boxShadow: '0 8px 32px rgba(255, 183, 3, 0.3)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3" style={{ background: 'rgba(255, 183, 3, 0.2)', border: '1px solid rgba(255, 183, 3, 0.4)' }}>
                  <i className="fas fa-handshake text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Monetize Your Patents</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Expert Patent Licensing & Commercialization
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Transform your patents into revenue streams. Our experts help you license technology, negotiate royalties, and commercialize innovations successfully.
                </p>

                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-sm transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 6px 18px rgba(255, 183, 3, 0.4)' }}>
                  <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                  Explore Licensing Opportunities
                  <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 3px 14px rgba(0, 0, 0, 0.3)' }}>
                  <h3 className="text-white font-nunito text-sm font-semibold mb-2 flex items-start gap-2">
                    <i className="fas fa-question-circle text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                    {faq.question}
                  </h3>
                  <p className="text-white/90 font-nunito text-xs leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
      

    </div>
  );
}
