'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function ChhattisgarhClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    // Define sections for TOC
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Registration in Chhattisgarh' },
      { id: 'why-register', title: 'Why Register in Chhattisgarh?' },
      { id: 'industries', title: 'Industry-Specific Insights' },
      { id: 'benefits', title: 'Key Benefits' },
      { id: 'eligibility', title: 'Eligibility Criteria' },
      { id: 'process', title: 'Registration Process' },
      { id: 'documents', title: 'Required Documents' },
      { id: 'search', title: 'Trademark Search' },
      { id: 'classes', title: 'Relevant Trademark Classes' },
      { id: 'faq', title: 'FAQs' }
    ];
    setTocSections(sections);
    if (sections.length > 0) {
      setActiveSection(sections[0].id);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of tocSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocSections]);

  const faqs = [
    {
      question: "How to register a trademark in Chhattisgarh?",
      answer: "To register a trademark in Chhattisgarh, businesses can file an application online through the IP India portal. The state falls under the jurisdiction of the Mumbai Trademark Registry. The process involves a trademark search, filing Form TM-A, examination, publication, and final registration."
    },
    {
      question: "Which Trademark Registry covers Chhattisgarh?",
      answer: "Chhattisgarh falls under the jurisdiction of the Trademark Registry in Mumbai. However, all filings and correspondence can be handled online, eliminating the need for physical visits to Mumbai for most routine matters."
    },
    {
      question: "What are the key industries for trademarks in Chhattisgarh?",
      answer: "Key industries seeking trademark protection in Chhattisgarh include Steel & Power (Bhilai/Korba), Cement, Mining, Rice Processing (Dhamtari/Raipur), and the growing Service sector in Naya Raipur."
    },
    {
      question: "Can I file a trademark for my rice mill brand?",
      answer: "Yes, trademarking rice brands is very common in Chhattisgarh. You would typically file under Class 30 (Rice, Spices, etc.). It helps protect your brand identity in the wholesale and retail markets across India."
    },
    {
      question: "Is MSME registration helpful for trademark filing in Chhattisgarh?",
      answer: "Yes, having a Udyam (MSME) registration allows businesses in Chhattisgarh to avail a 50% rebate on government trademark filing fees, reducing the cost from ₹9,000 to ₹4,500 per class."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Chhattisgarh"
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
          
          {/* Breadcrumb */}
          <section className="mb-6">
            <div className="flex items-center gap-2 text-sm text-white/80 font-nunito">
              <Link href="/" className="hover:text-[#FFB703] transition-colors"><i className="fas fa-home"></i></Link>
              <i className="fas fa-chevron-right text-xs text-white/50"></i>
              <Link href="/services" className="hover:text-[#FFB703] transition-colors">Services</Link>
              <i className="fas fa-chevron-right text-xs text-white/50"></i>
              <span className="text-[#FFB703] font-medium">Chhattisgarh</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full relative bg-gradient-to-br from-[#FFB703] to-[#FFA000] shadow-[0_0_14px_rgba(255,183,3,0.6)]">
                <div className="absolute inset-0 rounded-full animate-ping bg-[#FFB703] opacity-40" />
              </div>
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold">
                Trademark Registration in Chhattisgarh
              </h1>
            </div>
            
            <div className="p-4 lg:p-5 rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-xl">
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed mb-3">
                From the steel city of Bhilai to the power capital Korba, and the fast-developing Naya Raipur, Chhattisgarh is an industrial powerhouse. Protecting your brand in this resource-rich state is crucial for maintaining a competitive edge.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Whether you operate a heavy engineering unit in Urla, a rice mill in Dhamtari, or a tech startup in Raipur, trademark registration is your first line of defense against brand imitation.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Overview</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 shadow-xl">
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Chhattisgarh falls under the jurisdiction of the **Mumbai Trademark Registry**. While the registry is physically located in Mumbai, the digital India initiative allows businesses in Chhattisgarh to file and manage their trademark applications entirely online.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                This digital convenience is a boon for the state's MSMEs, allowing them to secure national protection for their brands without leaving their local headquarters.
              </p>
            </div>
          </section>

          {/* Industries */}
          <section id="industries" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Industry Insights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-industry mr-2"></i>Steel & Heavy Industry</h3>
                <p className="text-white/90 text-sm">For ancillary units in Bhilai and Raigarh, a registered trademark (Class 6 for metals, Class 7 for machines) builds trust with large public sector undertakings and international buyers.</p>
              </div>
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-seedling mr-2"></i>Agri & Food Processing</h3>
                <p className="text-white/90 text-sm">With thousands of rice mills, having a unique brand for non-basmati aromatic rice varieties is key to capturing the consumer market. Class 30 is the go-to category here.</p>
              </div>
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-gem mr-2"></i>Mining Services</h3>
                <p className="text-white/90 text-sm">Companies providing mining consultancy, logistics, and equipment services need service marks (Class 35, 37, 42) to establish their corporate identity.</p>
              </div>
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-laptop mr-2"></i>Startups & IT</h3>
                <p className="text-white/90 text-sm">Naya Raipur is developing as a smart city hub. Tech startups need to protect their software (Class 9) and service brands (Class 42) early to attract venture capital.</p>
              </div>
            </div>
          </section>

          {/* Classes */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Relevant Classes</h2>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 6:</strong> Common Metals (Steel, Iron)</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 19:</strong> Building Materials (Cement)</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 30:</strong> Rice, Spices, Food</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 31:</strong> Agricultural Products</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 35:</strong> Advertising & Retail</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 37:</strong> Construction & Repair</li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">FAQs</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10 shadow-lg">
                  <h3 className="text-white font-nunito text-base font-semibold mb-2 flex items-start gap-2">
                    <i className="fas fa-question-circle text-[#FFB703] mt-1"></i>
                    {faq.question}
                  </h3>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-8">
            <div className="relative overflow-hidden p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
              <div className="relative text-center">
                <h3 className="text-white font-nunito text-2xl font-bold mb-3">Protect Your Chhattisgarh Brand</h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-6">
                  From Raipur to Raigarh, we help businesses across Chhattisgarh secure their intellectual property.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#FFB703] to-[#FFA000] text-[#0C002B]">
                  <i className="fas fa-phone"></i> Get Expert Assistance
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
