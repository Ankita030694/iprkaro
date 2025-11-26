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
      { id: 'overview', title: 'Overview of Trademark Registration in Assam' },
      { id: 'importance', title: 'Why Register Trademark in Assam?' },
      { id: 'benefits', title: 'Key Benefits for Assam Businesses' },
      { id: 'eligibility', title: 'Who Can Apply?' },
      { id: 'process', title: 'Registration Process Step-by-Step' },
      { id: 'documents', title: 'Required Documents' },
      { id: 'search', title: 'Trademark Search Guide' },
      { id: 'classes', title: 'Trademark Classes for Assam Industries' },
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
              <span className="text-[#FFB703] font-medium">Assam</span>
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
                    { "@type": "ListItem", "position": 4, "name": "Assam", "item": "https://iprkaro.com/services/trademark-registration/assam" }
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
                Trademark Registration in Assam: Secure Your Brand Identity
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
                Assam, the gateway to Northeast India, is witnessing a robust economic transformation. From its world-renowned tea gardens and oil refineries to a burgeoning startup ecosystem in Guwahati and traditional handloom industries in Sualkuchi, the state is a hub of diverse commercial activities. In this competitive landscape, protecting your intellectual property is paramount. Trademark registration in Assam is the first step towards securing your brand's legal rights, preventing unauthorized use, and building a trusted reputation in the market.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Whether you are a tea planter, a tech entrepreneur, a weaver of Muga silk, or a service provider, registering your trademark ensures that your unique identity remains exclusively yours. This comprehensive guide details everything you need to know about the trademark registration process in Assam, including eligibility, required documents, fees, and the benefits of securing your brand under the Trade Marks Act, 1999.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Overview of Trademark Registration in Assam
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a unique visual symbol, which may be a word, signature, name, device, label, numerals, or combination of colors used by one undertaking on goods or services or other articles of commerce to distinguish it from other similar goods or services originating from a different undertaking. In India, trademarks are governed by the Trade Marks Act, 1999, and the Trade Marks Rules, 2017.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For businesses in Assam, trademark jurisdiction lies with the **Trademark Registry in Kolkata**. However, the entire process of filing, examination, and registration has been digitized, allowing applicants from Assam to file their applications online without the need to physically visit the Kolkata office. This has significantly simplified the process for entrepreneurs in remote parts of the state.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Registration provides the owner with the exclusive right to use the mark in relation to the goods or services for which it is registered and to obtain relief in respect of infringement of the trademark. It is an intangible asset that adds value to the business and can be sold, licensed, or franchised.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Register Trademark in Assam?
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Assam's economy is unique, blending traditional heritage with modern industry. The need for trademark registration arises from the necessity to protect this unique blend and the commercial value it generates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Protection for Traditional Industries</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Assam is famous for Muga Silk, Eri Silk, and Assam Tea. While Geographical Indications (GI) protect the regional identity, individual producers and sellers need trademarks to build their specific brand reputation. A registered trademark helps a tea estate or a silk weaver distinguish their premium quality products from generic or counterfeit ones in the market.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Booming Startup Ecosystem</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    With Guwahati emerging as a startup hub in Northeast India, new ventures in technology, tourism, and logistics are springing up. For these startups, a brand name is their most valuable asset. Registering a trademark early prevents copycats and secures the brand for future investors.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Tourism and Hospitality</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Assam's tourism sector, centered around Kaziranga, Manas, and tea tourism, is highly competitive. Hotels, resorts, and travel agencies rely heavily on their brand reputation. A registered trademark ensures that tourists can identify and trust genuine service providers, avoiding confusion with fly-by-night operators.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Export Potential</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    For businesses looking to export products like organic tea, spices, or handicrafts to international markets, a registered Indian trademark is the foundation for seeking global protection under the Madrid Protocol. It establishes credibility with international buyers.
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
                Key Benefits for Assam Businesses
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
                Who Can Apply for Trademark in Assam?
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The Trademark Act allows a wide range of entities to apply for registration. In the context of Assam, this includes:
              </p>
              <ul className="space-y-2 text-white/90 font-nunito text-sm">
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Individuals/Sole Proprietors:</strong> Artisans, freelancers, and small shop owners.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Partnership Firms:</strong> Joint ventures in tea gardens or manufacturing units.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Limited Liability Partnerships (LLPs):</strong> Modern professional service firms.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Private/Public Limited Companies:</strong> Larger corporate entities and factories.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>NGOs and Trusts:</strong> Organizations working for social welfare or cultural preservation.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Cooperative Societies:</strong> Very common in Assam's agricultural and handloom sectors.</span></li>
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
                Trademark Classes for Assam Industries
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Trademarks are registered under 45 specific classes. Choosing the right class is vital. Here are common classes relevant to Assam's economy:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { class: "Class 30", desc: "Coffee, Tea, Rice, Spices (Crucial for Assam Tea & Joha Rice)" },
                  { class: "Class 24", desc: "Textiles and substitutes (Muga/Eri Silk fabrics, Gamosa)" },
                  { class: "Class 25", desc: "Clothing, Footwear, Headgear (Traditional attire)" },
                  { class: "Class 31", desc: "Agricultural, horticultural products (Fresh produce)" },
                  { class: "Class 33", desc: "Alcoholic beverages (Traditional rice wines like Judima)" },
                  { class: "Class 35", desc: "Advertising, Business Management, Retail Stores" },
                  { class: "Class 41", desc: "Education, Training, Entertainment, Cultural Activities" },
                  { class: "Class 43", desc: "Services for providing food and drink (Hotels, Restaurants)" },
                  { class: "Class 39", desc: "Transport, Packaging and Storage (Logistics, Tourism)" }
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Assam</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Register Your Trademark?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't leave your brand unprotected. Our experts specialize in Assam trademark registration and can guide you through the entire process, from search to certification.
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
                  "name": "Trademark Registration Service in Assam",
                  "image": "https://iprkaro.com/assets/images/trademark-service.jpg",
                  "description": "Professional trademark registration services in Assam."
                },
                "author": {
                  "@type": "Person",
                  "name": "Rahul Das"
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
