'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function HimachalPradeshTrademarkClient() {
  const [activeSection, setActiveSection] = useState('overview');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Registration in Himachal' },
      { id: 'why-register', title: 'Why Register in Himachal?' },
      { id: 'industries', title: 'Key Sectors: Tourism & Pharma' },
      { id: 'benefits', title: 'Business Benefits' },
      { id: 'process', title: 'Registration Process' },
      { id: 'documents', title: 'Required Documents' },
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

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      <BlogTableOfContents 
        activeSection={activeSection} 
        blogTitle="Trademark Registration in Himachal Pradesh"
        sections={tocSections}
      />
      
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
              <Link href="/services/trademark-registration" className="hover:text-[#FFB703] transition-colors">Trademark</Link>
              <i className="fas fa-chevron-right text-xs text-white/50"></i>
              <span className="text-[#FFB703] font-medium">Himachal Pradesh</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full relative bg-gradient-to-br from-[#FFB703] to-[#FFA000] shadow-[0_0_14px_rgba(255,183,3,0.6)]">
                <div className="absolute inset-0 rounded-full animate-ping bg-[#FFB703] opacity-40" />
              </div>
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold">
                Trademark Registration in Himachal Pradesh
              </h1>
            </div>
            
            <div className="p-4 lg:p-5 rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-xl">
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed mb-3">
                Himachal Pradesh is more than just a tourist paradise; it is Asia's largest pharmaceutical hub and a major producer of apples and stone fruits. From Baddi's industrial belt to Shimla's orchards, protecting brand identity is crucial.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Secure your hotel brand, pharma company name, or agri-product logo with a registered trademark.
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
                Himachal Pradesh falls under the jurisdiction of the **Delhi Trademark Registry**. Businesses in Shimla, Manali, Dharamshala, and Baddi can file applications online without visiting Delhi.
              </p>
            </div>
          </section>

          {/* Industries */}
          <section id="industries" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Key Sectors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-pills mr-2"></i>Pharmaceuticals</h3>
                <p className="text-white/90 text-sm">
                  Baddi is a pharma hub. Trademarks (Class 5) are essential to protect medicine brand names from look-alikes.
                </p>
              </div>
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-hotel mr-2"></i>Tourism & Hospitality</h3>
                <p className="text-white/90 text-sm">
                  Hotels and travel agencies in Shimla/Manali need service marks (Class 43, 39) to protect their reputation online.
                </p>
              </div>
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-apple-alt mr-2"></i>Horticulture</h3>
                <p className="text-white/90 text-sm">
                  Apple growers and fruit processing units need trademarks (Class 31, 29, 32) for jams, juices, and packaged fruits.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-8">
            <div className="relative overflow-hidden p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
              <div className="relative text-center">
                <h3 className="text-white font-nunito text-2xl font-bold mb-3">Secure Your Brand in the Hills</h3>
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

