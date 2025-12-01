'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function MeghalayaClient() {
  const [activeSection, setActiveSection] = useState('overview');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Registration in Meghalaya' },
      { id: 'why-register', title: 'Why Register in Meghalaya?' },
      { id: 'industries', title: 'Key Sectors: Tourism & Spices' },
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
        blogTitle="Trademark Registration in Meghalaya"
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
              <span className="text-[#FFB703] font-medium">Meghalaya</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full relative bg-gradient-to-br from-[#FFB703] to-[#FFA000] shadow-[0_0_14px_rgba(255,183,3,0.6)]">
                <div className="absolute inset-0 rounded-full animate-ping bg-[#FFB703] opacity-40" />
              </div>
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold">
                Trademark Registration in Meghalaya
              </h1>
            </div>
            
            <div className="p-4 lg:p-5 rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-xl">
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed mb-3">
                From the rolling hills of Shillong to the spice-rich lands of Jaintia Hills, Meghalaya's businesses are unique. Protecting brands for Lakadong Turmeric, local honey, or eco-tourism ventures is essential for growth.
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
                Meghalaya falls under the **Kolkata Trademark Registry**. However, entrepreneurs in Shillong, Tura, or Jowai can easily file applications online.
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
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-leaf mr-2"></i>Spices & Agriculture</h3>
                <p className="text-white/90 text-sm">
                  Lakadong Turmeric and Ginger brands need trademark protection (Class 30) to prevent fake products in the market.
                </p>
              </div>
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-music mr-2"></i>Music & Arts</h3>
                <p className="text-white/90 text-sm">
                  Shillong is the rock capital of India. Bands and event organizers should register their names (Class 41) to protect their identity.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-8">
            <div className="relative overflow-hidden p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
              <div className="relative text-center">
                <h3 className="text-white font-nunito text-2xl font-bold mb-3">Protect Your Meghalaya Brand</h3>
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

