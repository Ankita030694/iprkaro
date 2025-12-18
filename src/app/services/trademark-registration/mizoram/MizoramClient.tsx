'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function MizoramClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'what-is-trademark', title: 'What is Trademark Registration?' },
      { id: 'benefits', title: 'Benefits of Registration' },
      { id: 'faq', title: 'FAQs' }
    ];
    setTocSections(sections);
    if (sections.length > 0) {
      setActiveSection(sections[0].id);
    }
  }, []);

  const faqs = [
    {
      question: "How to register a trademark in Mizoram?",
      answer: "To register a trademark in Mizoram, you need to: 1) Conduct a comprehensive trademark search to ensure availability, 2) Prepare all required documents including identity proof, address proof, and trademark representation, 3) File Form TM-A online through IP India portal or with professional assistance, 4) Respond to any examination objections if raised, 5) Wait for publication in Trademark Journal, and 6) Receive registration certificate upon successful completion."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Mizoram"
          sections={tocSections}
        />
      )}
      
      <div className="pb-16 pt-[180px]" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <section className="mb-6">
            <div className="flex items-center gap-2 text-sm text-white/80 font-nunito">
              <Link href="/" className="hover:text-[#FFB703] transition-colors">
                <i className="fas fa-home" aria-hidden="true"></i>
              </Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <Link href="/services" className="hover:text-[#FFB703] transition-colors">Services</Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <Link href="/services/trademark-registration" className="hover:text-[#FFB703] transition-colors">Trademark Services</Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <span className="text-[#FFB703] font-medium">Mizoram</span>
            </div>
          </section>

          <section className="mb-8">
            <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Trademark Registration in Mizoram: Complete Guide 2025
            </h1>
            <div className="p-4 lg:p-5 rounded-lg backdrop-blur-sm" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Mizoram is rapidly developing its commercial infrastructure, with Aizawl serving as the primary business hub. Protecting your brand through trademark registration is a critical step for any business in Mizoram.
              </p>
            </div>
          </section>

          <section id="what-is-trademark" className="mb-8 scroll-mt-32">
            <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold mb-3">What is Trademark Registration?</h2>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                A trademark is a unique identifier for your business. Registration provides legal protection and exclusive rights to your brand name, logo, or slogan across India.
              </p>
            </div>
          </section>

          <section id="faq" className="mb-8 scroll-mt-32">
            <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold mb-3">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                  <p className="text-white/80 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <div className="p-8 rounded-xl text-center" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '2px solid rgba(255, 183, 3, 0.3)' }}>
              <h3 className="text-white text-2xl font-bold mb-4">Secure Your Brand in Mizoram</h3>
              <Link href="/contact" className="inline-block px-8 py-3 rounded-lg font-bold text-[#0C002B]" style={{ background: '#FFB703' }}>Contact Us</Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
