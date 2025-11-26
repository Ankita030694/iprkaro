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

export default function JharkhandClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Overview of Trademark Registration in Jharkhand' },
      { id: 'importance', title: 'Why Register Trademark in Jharkhand?' },
      { id: 'benefits', title: 'Key Benefits for Jharkhand Businesses' },
      { id: 'eligibility', title: 'Who Can Apply?' },
      { id: 'process', title: 'Registration Process Step-by-Step' },
      { id: 'documents', title: 'Required Documents' },
      { id: 'search', title: 'Trademark Search Guide' },
      { id: 'classes', title: 'Trademark Classes for Jharkhand Industries' },
      { id: 'timeline', title: 'Timeline and Validity' },
      { id: 'objections', title: 'Handling Objections & Oppositions' },
      { id: 'faq', title: 'Frequently Asked Questions' }
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
          blogTitle="Trademark Registration in Jharkhand"
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
          
          {/* Breadcrumb Navigation */}
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
              <span className="text-[#FFB703] font-medium">Jharkhand</span>
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://iprkaro.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://iprkaro.com/services" },
                    { "@type": "ListItem", "position": 3, "name": "Trademark Services", "item": "https://iprkaro.com/services/trademark-registration" },
                    { "@type": "ListItem", "position": 4, "name": "Jharkhand", "item": "https://iprkaro.com/services/trademark-registration/jharkhand" }
                  ]
                })
              }}
            />
          </section>

          {/* Hero Section */}
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
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold">
                Trademark Registration in Jharkhand: Secure Your Brand Identity
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
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed mb-3">
                Jharkhand, known as the "Land of Forests," is a state brimming with industrial potential and cultural richness. From the steel city of Jamshedpur and the coal capital Dhanbad to the administrative hub of Ranchi, the state is a powerhouse of manufacturing, mining, and emerging MSMEs. In this competitive industrial landscape, protecting your business identity is crucial. Trademark registration in Jharkhand serves as a legal shield for your brand, preventing unauthorized use and establishing your unique presence in the market.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Whether you are a heavy engineering firm, a Tasar silk cooperative, or a tech startup in Ranchi, registering your trademark is the first step towards building a valuable intellectual property portfolio. This guide provides a detailed walkthrough of the trademark registration process in Jharkhand, covering eligibility, required documents, fees, and the strategic benefits of securing your brand under the Trade Marks Act, 1999.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Overview of Trademark Registration in Jharkhand
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a distinctive sign that identifies certain goods or services as those produced or provided by a specific person or enterprise. It can be a name, word, phrase, logo, symbol, design, image, or a combination of these elements. In India, trademarks are governed by the Trade Marks Act, 1999.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For businesses in Jharkhand, the **Trademark Registry in Kolkata** holds territorial jurisdiction. This means that while the physical office is in Kolkata, the administration of trademarks for Jharkhand falls under its purview. However, thanks to the digitization of the IP India services, applicants from Jamshedpur, Ranchi, Dhanbad, Bokaro, or any remote district can file their applications online without ever visiting the registry office.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Registration provides the owner with the exclusive right to use the mark in relation to the goods or services for which it is registered and to obtain relief in respect of infringement. It is a vital asset for any business looking to expand and protect its market share.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Register Trademark in Jharkhand?
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Jharkhand's economy is diverse, ranging from heavy industries to tribal handicrafts. Trademark registration offers specific advantages across these sectors:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Industrial & Manufacturing Sector</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    For the steel, mining, and automotive ancillary industries in Jamshedpur and Bokaro, a trademark represents quality and reliability. It distinguishes genuine industrial parts and machinery from counterfeits, ensuring safety and brand reputation.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Protection for Tribal Arts & Crafts</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Jharkhand is famous for Sohrai and Khovar paintings, bamboo crafts, and tribal jewelry. While Sohrai Khovar has a GI tag, individual artisans and cooperatives need trademarks to brand their specific product lines, enabling them to sell at premium prices in urban and international markets.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Tasar Silk Industry</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    As a leading producer of Tasar silk (Kuchai Silk), Jharkhand's textile businesses face competition from synthetic imitations. A registered trademark helps consumers identify authentic, high-quality silk products from the state.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Emerging Startups</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    With the government promoting startups in Ranchi and other cities, new ventures in IT, food processing, and services are rising. Registering a trademark early protects the startup's name and logo, which is critical for attracting investors and building brand equity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Key Benefits for Jharkhand Businesses
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Exclusive Rights", icon: "fas fa-crown", desc: "Sole ownership of the mark for your goods/services across India." },
                  { title: "Legal Protection", icon: "fas fa-gavel", desc: "Right to sue infringers and claim damages for unauthorized use." },
                  { title: "Brand Trust", icon: "fas fa-handshake", desc: "Builds customer confidence and distinguishes your quality products." },
                  { title: "Asset Creation", icon: "fas fa-coins", desc: "Intangible asset that appreciates in value and can be sold." },
                  { title: "Global Access", icon: "fas fa-globe-asia", desc: "Gateway to international registration via Madrid Protocol." },
                  { title: "Use of ® Symbol", icon: "fas fa-registered", desc: "Legal right to use the ® symbol, signaling professionalism." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255, 183, 3, 0.15)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                      <i className={`${item.icon} text-[#FFB703] text-base`}></i>
                    </div>
                    <div>
                      <h4 className="text-white font-nunito text-base font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/90 font-nunito text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Eligibility Section */}
          <section id="eligibility" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Who Can Apply for Trademark in Jharkhand?
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The Trademark Act allows a wide range of entities to apply for registration. In the context of Jharkhand, this includes:
              </p>
              <ul className="space-y-2 text-white/90 font-nunito text-sm">
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Individuals/Sole Proprietors:</strong> Artisans, freelancers, and small shop owners.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Partnership Firms:</strong> Joint ventures in mining, construction, or manufacturing.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Limited Liability Partnerships (LLPs):</strong> Professional service firms and startups.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Private/Public Limited Companies:</strong> Large corporate entities, steel plants, and factories.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>NGOs and Trusts:</strong> Organizations working for tribal welfare or social development.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Cooperative Societies:</strong> Common in the agricultural and silk sectors.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Self Help Groups (SHGs):</strong> Women-led groups producing local handicrafts and food products.</span></li>
              </ul>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Registration Process Step-by-Step
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="relative space-y-6">
                <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'rgba(255, 183, 3, 0.3)', opacity: 0.5 }} />
                {[
                  { step: "1. Trademark Search", desc: "Conduct a thorough search on the IP India database to ensure your mark is unique. This avoids rejection later." },
                  { step: "2. Filing Application (Form TM-A)", desc: "Submit the application online with applicant details, logo, and class of goods/services. Get an immediate application number." },
                  { step: "3. Vienna Codification", desc: "If your mark contains a logo, it is indexed according to the Vienna Agreement for figurative elements." },
                  { step: "4. Examination", desc: "The Registrar examines the application for legal compliance. An examination report is issued if there are objections." },
                  { step: "5. Publication", desc: "If accepted, the mark is published in the Trademark Journal for 4 months to invite public opposition." },
                  { step: "6. Registration", desc: "If no opposition is filed, the registration certificate is issued. The mark is now yours for 10 years." }
                ].map((item, index) => (
                  <div key={index} className="relative flex gap-4">
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>{index + 1}</div>
                    <div className="flex-1 p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <h4 className="text-white font-nunito text-base font-semibold mb-1">{item.step}</h4>
                      <p className="text-white/90 font-nunito text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Documents Section */}
          <section id="documents" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Required Documents
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-base font-semibold mb-3 text-[#FFB703]">For Individuals/Proprietors</h4>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li>• Copy of Logo/Trademark</li>
                    <li>• Form-48 (Power of Attorney)</li>
                    <li>• ID Proof (Aadhaar, PAN, Voter ID)</li>
                    <li>• Address Proof</li>
                    <li>• User Affidavit (if prior use claimed)</li>
                  </ul>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-base font-semibold mb-3 text-[#FFB703]">For Companies/LLPs</h4>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li>• Certificate of Incorporation/Partnership Deed</li>
                    <li>• MSME Certificate (for fee concession)</li>
                    <li>• ID & Address Proof of Signatory</li>
                    <li>• Board Resolution</li>
                    <li>• Form-48 (Power of Attorney)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Search Section */}
          <section id="search" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Search Guide
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Before filing, it is critical to check if your brand name is available. The Kolkata Registry rejects thousands of applications annually due to similarity with existing marks. A proper search involves checking for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Identical Marks:** Exact matches of your brand name.</li>
                <li>**Phonetic Similarity:** Names that sound similar (e.g., "Kool" vs "Cool").</li>
                <li>**Visual Similarity:** Logos that look deceptively similar.</li>
                <li>**Similar Goods:** Marks registered in the same class of goods/services.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                You can perform a free public search on the IP India website, but a professional search report is recommended for a comprehensive analysis.
              </p>
            </div>
          </section>

          {/* Classes Section */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Classes for Jharkhand Industries
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Trademarks are registered under 45 specific classes. Choosing the right class is vital. Here are common classes relevant to Jharkhand's economy:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { class: "Class 6", desc: "Common Metals and Alloys (Steel, Iron)" },
                  { class: "Class 24", desc: "Textiles and substitutes (Tasar/Kuchai Silk fabrics)" },
                  { class: "Class 25", desc: "Clothing, Footwear, Headgear (Traditional attire)" },
                  { class: "Class 14", desc: "Precious Metals & Jewellery (Tribal Jewellery)" },
                  { class: "Class 30", desc: "Coffee, Tea, Rice, Spices (Local produce)" },
                  { class: "Class 35", desc: "Advertising, Business Management, Retail Stores" },
                  { class: "Class 41", desc: "Education, Training, Entertainment, Cultural Activities" },
                  { class: "Class 42", desc: "Scientific and technological services (IT, Engineering)" },
                  { class: "Class 37", desc: "Building construction; repair; installation services (Mining services)" }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.05)', border: '1px solid rgba(255, 183, 3, 0.1)' }}>
                    <h5 className="text-[#FFB703] font-bold text-sm mb-1">{item.class}</h5>
                    <p className="text-white/80 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section id="timeline" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Timeline and Validity
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Timeline:** The standard time for trademark registration is **12 to 18 months**. However, this can be shorter if there are no objections, or longer if there are oppositions.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Validity:** Once registered, the trademark is valid for **10 years** from the date of filing.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                **Renewal:** It can be renewed indefinitely for blocks of 10 years. Renewal applications should be filed within 6 months before the expiry date.
              </p>
            </div>
          </section>

          {/* Objections Section */}
          <section id="objections" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Handling Objections & Oppositions
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                It is common for the Registrar to raise objections regarding the distinctiveness of the mark or its similarity to existing marks. When this happens, the status changes to "Objected". You must file a reply within 30 days.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Similarly, during the publication period, third parties can oppose your mark. This leads to a legal proceeding where both parties present evidence. Professional legal assistance is crucial in these stages to ensure your application is not abandoned.
              </p>
            </div>
          </section>

          {/* CTA Section */}
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
                  style={{
                    background: 'rgba(255, 183, 3, 0.2)',
                    border: '1px solid rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-shield-alt text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Jharkhand</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Register Your Trademark?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't leave your brand unprotected. Our experts specialize in Jharkhand trademark registration and can guide you through the entire process, from search to certification.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-base transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                      color: '#0C002B',
                      boxShadow: '0 6px 18px rgba(255, 183, 3, 0.4)'
                    }}
                  >
                    <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                    Get Expert Assistance
                    <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FaqSection />

          {/* Review Snippets Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Review",
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Trademark Registration Service in Jharkhand",
                  "image": "https://iprkaro.com/assets/images/trademark-service.jpg",
                  "description": "Professional trademark registration services in Jharkhand."
                },
                "author": {
                  "@type": "Person",
                  "name": "Ravi Soren"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.9",
                  "bestRating": "5"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "IPR Karo"
                }
              })
            }}
          />
        </div>
      </div>
    </div>
  );
}
