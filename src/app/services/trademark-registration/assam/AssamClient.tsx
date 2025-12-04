'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';
import FaqSection from './FaqSection';

interface TOCSection {
  id: string;
  title: string;
}

export default function AssamClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Registration in Assam' },
      { id: 'why-register', title: 'Why Register in Assam?' },
      { id: 'industries', title: 'Key Sectors: Tea, Oil & More' },
      { id: 'benefits', title: 'Business Benefits' },
      { id: 'eligibility', title: 'Who Can Apply?' },
      { id: 'process', title: 'Registration Process' },
      { id: 'documents', title: 'Required Documents' },
      { id: 'search', title: 'Trademark Search' },
      { id: 'classes', title: 'Relevant Classes' },
      { id: 'reviews', title: 'Client Reviews' },
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
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Assam"
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
              <span className="text-[#FFB703] font-medium">Assam</span>
            </div>
          </section>

          {/* Hero */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full relative bg-gradient-to-br from-[#FFB703] to-[#FFA000] shadow-[0_0_14px_rgba(255,183,3,0.6)]">
                <div className="absolute inset-0 rounded-full animate-ping bg-[#FFB703] opacity-40" />
              </div>
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold">
                Trademark Registration in Assam
              </h1>
            </div>
            
            <div className="p-4 lg:p-5 rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-xl">
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed mb-3">
                Assam is the economic engine of Northeast India. From the historic tea gardens of Upper Assam to the bustling commercial hub of Guwahati, the state offers immense business potential. Protecting your brand here is not just about legal compliance; it's about securing your identity in a market rich with heritage and innovation.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                We help Assam's tea planters, oil ancillary units, handloom weavers, and new-age startups secure their trademarks efficiently.
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
                Businesses in Assam fall under the jurisdiction of the **Kolkata Trademark Registry**. While the physical office is in Salt Lake, Kolkata, the entire filing and prosecution process is digital.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                This means an entrepreneur in Dibrugarh or Silchar can file for a trademark just as easily as someone in a metro city. IPRKaro facilitates this online process, ensuring your application is error-free and filed promptly.
              </p>
            </div>
          </section>

          {/* Industries */}
          <section id="industries" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB703] shadow-[0_0_14px_rgba(255,183,3,0.6)]" />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Key Sectors in Assam</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-leaf mr-2"></i>Tea Industry</h3>
                <p className="text-white/90 text-sm">
                  While 'Assam Tea' is a GI, individual tea estates and packaging brands need their own trademarks (Class 30) to build brand loyalty and export value.
                </p>
              </div>
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-oil-can mr-2"></i>Oil & Gas Ancillaries</h3>
                <p className="text-white/90 text-sm">
                  With major refineries in Digboi and Numaligarh, ancillary service providers need to protect their trade names (Class 35, 37) for vendor contracts.
                </p>
              </div>
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-tshirt mr-2"></i>Handloom & Silk</h3>
                <p className="text-white/90 text-sm">
                  Sualkuchi's Muga and Eri silk weavers face stiff competition from imitations. Trademarks (Class 24, 25) help distinguish authentic Assamese handlooms.
                </p>
              </div>
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h3 className="text-[#FFB703] font-bold text-lg mb-2"><i className="fas fa-mountain mr-2"></i>Tourism</h3>
                <p className="text-white/90 text-sm">
                  Resorts near Kaziranga and river cruise operators on the Brahmaputra need service marks (Class 39, 43) to protect their reputation in the travel market.
                </p>
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
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 30:</strong> Tea, Rice, Spices</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 24:</strong> Textiles (Muga Silk)</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 31:</strong> Agricultural Products</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 35:</strong> Retail & Trading</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 39:</strong> Transport & Tourism</li>
                <li className="bg-white/5 p-3 rounded border border-white/10 text-white/90 text-sm"><strong>Class 43:</strong> Hotels & Restaurants</li>
              </ul>
            </div>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Client Reviews
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Pranab Sharma",
                  location: "Guwahati",
                  rating: 5,
                  text: "Excellent trademark registration service in Guwahati. They helped me register my tea brand successfully and provided complete guidance throughout. Highly professional team."
                },
                {
                  name: "Ritu Baruah",
                  location: "Dibrugarh",
                  rating: 5,
                  text: "Great experience with trademark registration in Dibrugarh. The team was very supportive and handled all the documentation efficiently. Recommended for Assam businesses."
                },
                {
                  name: "Kamal Das",
                  location: "Silchar",
                  rating: 5,
                  text: "Professional service for silk product branding in Silchar. They completed my trademark registration smoothly and answered all my queries. Very satisfied with the service."
                }
              ].map((review, index) => (
                <div key={index} className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star text-sm ${i < review.rating ? 'text-[#FFB703]' : 'text-gray-600'}`}></i>
                    ))}
                  </div>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB703] to-[#FFA000] flex items-center justify-center text-[#0C002B] font-bold font-nunito">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-nunito text-sm font-semibold">{review.name}</h4>
                      <p className="text-white/60 font-nunito text-xs">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FaqSection />

          {/* CTA */}
          <section className="mb-8">
            <div className="relative overflow-hidden p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
              <div className="relative text-center">
                <h3 className="text-white font-nunito text-2xl font-bold mb-3">Secure Your Brand in Assam</h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-6">
                  From Guwahati to Tinsukia, we help businesses across Assam secure their intellectual property.
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
