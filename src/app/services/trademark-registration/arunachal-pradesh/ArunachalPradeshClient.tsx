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

export default function ArunachalPradeshClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Overview of Trademark Registration in Arunachal' },
      { id: 'importance', title: 'Why Register Trademark in Arunachal Pradesh?' },
      { id: 'benefits', title: 'Key Benefits for Local Businesses' },
      { id: 'eligibility', title: 'Who Can Apply?' },
      { id: 'process', title: 'Registration Process Step-by-Step' },
      { id: 'documents', title: 'Required Documents' },
      { id: 'search', title: 'Trademark Search Guide' },
      { id: 'classes', title: 'Trademark Classes for Arunachal Industries' },
      { id: 'timeline', title: 'Timeline and Validity' },
      { id: 'objections', title: 'Handling Objections & Oppositions' },
      { id: 'reviews', title: 'Client Reviews' },
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
          blogTitle="Trademark Registration in Arunachal Pradesh"
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
              <span className="text-[#FFB703] font-medium">Arunachal Pradesh</span>
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
                    { "@type": "ListItem", "position": 4, "name": "Arunachal Pradesh", "item": "https://iprkaro.com/services/trademark-registration/arunachal-pradesh" }
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
                Trademark Registration in Arunachal Pradesh: Protect Your Legacy
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
                Arunachal Pradesh, the "Land of the Dawn-Lit Mountains," is a region of immense potential, rich in biodiversity, traditional craftsmanship, and cultural heritage. From the organic Kiwi farms of Ziro and the Orange orchards of Wakro to the intricate handlooms of the Idu Mishmi and the burgeoning tourism sector in Tawang, the state is witnessing a new wave of economic activity. As local businesses expand, protecting their unique identity becomes crucial.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Trademark registration in Arunachal Pradesh is the legal shield that safeguards your brand name, logo, or slogan from misuse. It grants you exclusive ownership, builds consumer confidence, and enhances the commercial value of your products. This comprehensive guide outlines the trademark registration process in Arunachal Pradesh, empowering entrepreneurs to secure their intellectual property rights effectively.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Overview of Trademark Registration in Arunachal
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a distinctive visual symbol—such as a word, name, device, label, or numeral—used by a business to distinguish its goods or services from those of competitors. It serves as a guarantee of origin and quality. In India, trademarks are governed by the Trade Marks Act, 1999.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For businesses in Arunachal Pradesh, the **Trademark Registry in Kolkata** holds territorial jurisdiction. This means that administrative matters regarding trademarks from the state are handled by the Kolkata office. However, the entire application process is completely online. Applicants from Itanagar, Pasighat, Bomdila, or any remote corner of the state can file for registration digitally without the need to visit Kolkata.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Registration grants the owner exclusive rights to use the mark and legal recourse against infringement. It is a critical asset for building brand value and establishing a distinct market presence.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Register Trademark in Arunachal Pradesh?
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Arunachal's unique economic landscape makes trademark protection vital for several key sectors:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Horticulture & Organic Produce</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Arunachal is famous for Kiwi, Oranges (Wakro), and Large Cardamom. While GI tags exist for some, individual farmers and cooperatives need trademarks to brand their specific organic produce and processed goods (jams, wines) for premium pricing.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Handlooms & Handicrafts</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    The state produces exquisite textiles like Idu Mishmi and Apatani weaves, and Wancho wood carvings. Trademarks help artisans and self-help groups (SHGs) distinguish their authentic handmade products from mass-produced imitations.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Eco-Tourism & Homestays</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    With tourism booming in places like Tawang and Mechuka, hotels, homestays, and tour operators need trademarks to protect their brand names and reputation in the competitive travel market.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Food Processing</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    The food processing industry, dealing with bamboo shoots, pickles, and traditional beverages, is growing. A registered trademark is essential for packaging and selling these products in national markets.
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
                Key Benefits for Local Businesses
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Legal Protection", icon: "fas fa-shield-alt", desc: "Exclusive right to use the mark and sue for infringement." },
                  { title: "Brand Identity", icon: "fas fa-fingerprint", desc: "Creates a unique identity for your products in the market." },
                  { title: "Asset Creation", icon: "fas fa-coins", desc: "A trademark is an intangible asset that can be sold or franchised." },
                  { title: "Consumer Trust", icon: "fas fa-handshake", desc: "Builds credibility and assures customers of quality." },
                  { title: "Global Reach", icon: "fas fa-globe-asia", desc: "Facilitates expansion into international markets." },
                  { title: "Use of ® Symbol", icon: "fas fa-registered", desc: "Legal right to display the ® symbol next to your brand." }
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
                Who Can Apply for Trademark in Arunachal?
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Any person or entity claiming to be the owner of a trademark can apply. In Arunachal Pradesh, this typically includes:
              </p>
              <ul className="space-y-2 text-white/90 font-nunito text-sm">
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Individuals:</strong> Farmers, weavers, artisans, and sole proprietors.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Startups:</strong> New ventures registered with DIPP.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>MSMEs:</strong> Small and medium enterprises with Udyam Registration.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Companies:</strong> Private Limited, Public Limited, and One Person Companies.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Partnership Firms & LLPs:</strong> Business partnerships.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>SHGs & Cooperatives:</strong> Self-Help Groups working in agriculture or textiles.</span></li>
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
                  { step: "1. Trademark Search", desc: "Conduct a comprehensive search to ensure your mark is unique and doesn't conflict with existing ones." },
                  { step: "2. Filing Application (Form TM-A)", desc: "File the application online with the Kolkata Registry, providing applicant details and trademark representation." },
                  { step: "3. Vienna Codification", desc: "If the mark contains a logo, it is indexed according to the Vienna Agreement." },
                  { step: "4. Examination", desc: "The Registrar examines the application for compliance with the Trade Marks Act. Objections may be raised." },
                  { step: "5. Publication", desc: "Accepted marks are published in the Trademark Journal for 4 months to invite public opposition." },
                  { step: "6. Registration", desc: "If no opposition is filed, the registration certificate is issued, valid for 10 years." }
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
                    <li>• Copy of Trademark/Logo</li>
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
                    <li>• Udyam Registration (for fee concession)</li>
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
                A trademark search is the first and most crucial step. It helps identify potential conflicts with existing marks. The search should cover:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Identical Marks:** Exact matches of your proposed name.</li>
                <li>**Phonetic Similarity:** Names that sound alike.</li>
                <li>**Visual Similarity:** Logos that look similar.</li>
                <li>**Similar Goods/Services:** Marks in the same class.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                Conducting a search minimizes the risk of objection and rejection. You can use the free public search on the IP India website or hire a professional for a detailed report.
              </p>
            </div>
          </section>

          {/* Classes Section */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Classes for Arunachal Industries
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Choosing the correct class is vital for protection. Here are common classes relevant to Arunachal Pradesh:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { class: "Class 31", desc: "Agricultural products, fresh fruits (Kiwi, Oranges)" },
                  { class: "Class 24", desc: "Textiles and fabrics (Idu Mishmi, Apatani weaves)" },
                  { class: "Class 20", desc: "Furniture, mirrors, wood articles (Wancho Wood Craft)" },
                  { class: "Class 30", desc: "Coffee, Tea, Spices (Large Cardamom, Ginger)" },
                  { class: "Class 33", desc: "Alcoholic beverages (Fruit Wines)" },
                  { class: "Class 35", desc: "Advertising, Business Management, Retail" },
                  { class: "Class 43", desc: "Services for providing food and drink; temporary accommodation (Homestays)" },
                  { class: "Class 41", desc: "Education, Training, Cultural Activities" },
                  { class: "Class 16", desc: "Paper, cardboard (Handmade Paper)" }
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
                **Timeline:** The registration process usually takes **12 to 18 months**. This duration can be extended if there are objections or oppositions.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Validity:** A registered trademark is valid for **10 years** from the date of application.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                **Renewal:** It can be renewed every 10 years indefinitely. Renewal ensures continuous protection of your brand rights.
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
                If the Registrar finds issues with your application, they will issue an Examination Report with objections. You must file a comprehensive legal reply within 30 days.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Additionally, during the 4-month publication period, third parties can oppose your mark. This leads to opposition proceedings. Expert legal guidance is essential to navigate these challenges and secure your registration.
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Arunachal</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Register Your Trademark?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Secure your business identity today. Our experts specialize in trademark registration for Arunachal businesses and can guide you through every step.
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
                  name: "Tage Taki",
                  location: "Itanagar",
                  rating: 5,
                  text: "Excellent trademark service in Itanagar. The team provided complete guidance and made the registration process very smooth for my handicraft business. Very professional."
                },
                {
                  name: "Lobsang Dorjee",
                  location: "Tawang",
                  rating: 5,
                  text: "Great experience with trademark registration in Tawang. They helped register my tourism brand successfully. Highly recommended for Arunachal Pradesh businesses."
                },
                {
                  name: "Kaling Dai",
                  location: "Pasighat",
                  rating: 5,
                  text: "Professional service for organic product branding in Pasighat. They handled everything efficiently and got my trademark registered. Very satisfied."
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

          {/* FAQ Section */}
          <FaqSection />


        </div>
      </div>
    </div>
  );
}
