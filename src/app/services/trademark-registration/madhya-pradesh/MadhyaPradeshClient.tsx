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

export default function MadhyaPradeshClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Overview of Trademark Registration in MP' },
      { id: 'importance', title: 'Why Register Trademark in Madhya Pradesh?' },
      { id: 'benefits', title: 'Key Benefits for MP Businesses' },
      { id: 'eligibility', title: 'Who Can Apply?' },
      { id: 'process', title: 'Registration Process Step-by-Step' },
      { id: 'documents', title: 'Required Documents' },
      { id: 'search', title: 'Trademark Search Guide' },
      { id: 'classes', title: 'Trademark Classes for MP Industries' },
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
          blogTitle="Trademark Registration in Madhya Pradesh"
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
              <span className="text-[#FFB703] font-medium">Madhya Pradesh</span>
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
                    { "@type": "ListItem", "position": 4, "name": "Madhya Pradesh", "item": "https://iprkaro.com/services/trademark-registration/madhya-pradesh" }
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
                Trademark Registration in Madhya Pradesh: Secure Your Brand
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
                Madhya Pradesh, the "Heart of India," is a rapidly growing industrial hub with a rich legacy of traditional arts and agriculture. From the bustling commercial capital of Indore and the administrative center of Bhopal to the historical cities of Gwalior and Jabalpur, the state is witnessing a surge in entrepreneurship. Whether you are a manufacturer of Chanderi sarees, a producer of Ratlami Sev, or a tech startup in Indore's IT park, protecting your brand identity is paramount.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Trademark registration in Madhya Pradesh provides legal ownership of your brand name, logo, or slogan, safeguarding it from unauthorized use and imitation. This guide offers a comprehensive overview of the trademark registration process in Madhya Pradesh, detailing the steps, required documents, fees, and the immense value it adds to your business in this competitive market.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Overview of Trademark Registration in MP
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a unique visual symbol—a word, name, device, label, or numeral—used by a business to distinguish its goods or services from those of others. It serves as a badge of origin and quality. In India, trademarks are governed by the Trade Marks Act, 1999.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For businesses in Madhya Pradesh, the **Trademark Registry in Mumbai** holds territorial jurisdiction. This means that administrative matters regarding trademarks from MP are handled by the Mumbai office. However, the entire application process is now online, allowing applicants from any district in Madhya Pradesh—be it Ujjain, Satna, or Rewa—to file for registration digitally without physical visits.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Registration grants the owner exclusive rights to use the mark and legal recourse against infringement. It is a critical asset for building brand value and consumer trust.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Register Trademark in Madhya Pradesh?
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Madhya Pradesh's diverse economy requires robust brand protection strategies across various sectors:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Textile & Handloom Sector</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    MP is famous for Chanderi and Maheshwari sarees. While these have GI tags, individual weavers and cooperatives need trademarks to distinguish their specific brands and quality in the national market, preventing cheap imitations.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Food Processing & Agriculture</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    From the famous Ratlami Sev to Sharbati Wheat and Kadaknath Chicken products, the food processing industry is booming. Trademarks are essential for packaging and branding these local delicacies for wider distribution.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Indore's Startup Ecosystem</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Indore has emerged as a major startup hub in central India. For tech companies and service providers, a registered trademark is vital for protecting software names, app logos, and corporate identities from day one.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Manufacturing & MSMEs</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    With industrial belts in Pithampur and Mandideep, manufacturing units produce everything from auto parts to pharmaceuticals. Trademarks ensure that these industrial goods are recognized for their quality and origin.
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
                Key Benefits for MP Businesses
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Legal Protection", icon: "fas fa-shield-alt", desc: "Exclusive right to use the mark and sue for infringement." },
                  { title: "Brand Recognition", icon: "fas fa-bullhorn", desc: "Distinguishes your products in the crowded marketplace." },
                  { title: "Asset Value", icon: "fas fa-chart-line", desc: "Intellectual property that adds valuation to your company." },
                  { title: "Consumer Trust", icon: "fas fa-thumbs-up", desc: "Signifies quality and authenticity to customers." },
                  { title: "Global Expansion", icon: "fas fa-globe", desc: "Basis for international registration in other countries." },
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
                Who Can Apply for Trademark in Madhya Pradesh?
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Any person or entity claiming to be the owner of a trademark can apply. In Madhya Pradesh, this typically includes:
              </p>
              <ul className="space-y-2 text-white/90 font-nunito text-sm">
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Individuals:</strong> Artisans, freelancers, and sole proprietors.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Startups:</strong> New ventures registered with DIPP.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>MSMEs:</strong> Small and medium enterprises with Udyam Registration.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Companies:</strong> Private Limited, Public Limited, and One Person Companies.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>Partnership Firms & LLPs:</strong> Business partnerships.</span></li>
                <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#FFB703] mt-1"></i><span><strong>NGOs & Trusts:</strong> Charitable organizations.</span></li>
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
                  { step: "2. Filing Application (Form TM-A)", desc: "File the application online with the Mumbai Registry, providing applicant details and trademark representation." },
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
                Trademark Classes for MP Industries
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Choosing the correct class is vital for protection. Here are common classes relevant to Madhya Pradesh:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { class: "Class 24", desc: "Textiles and fabrics (Chanderi/Maheshwari Sarees)" },
                  { class: "Class 25", desc: "Clothing, Footwear, Headgear" },
                  { class: "Class 30", desc: "Coffee, Tea, Spices, Namkeen (Ratlami Sev)" },
                  { class: "Class 29", desc: "Meat, fish, poultry (Kadaknath Chicken products)" },
                  { class: "Class 35", desc: "Advertising, Business Management, Retail" },
                  { class: "Class 41", desc: "Education, Training, Cultural Activities" },
                  { class: "Class 42", desc: "Scientific and technological services (IT/Software)" },
                  { class: "Class 5", desc: "Pharmaceuticals and medical preparations" },
                  { class: "Class 12", desc: "Vehicles; apparatus for locomotion (Auto components)" }
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Madhya Pradesh</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Register Your Trademark?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Secure your business identity today. Our experts specialize in trademark registration for MP businesses and can guide you through every step.
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
                  "name": "Trademark Registration Service in Madhya Pradesh",
                  "image": "https://iprkaro.com/assets/images/trademark-service.jpg",
                  "description": "Professional trademark registration services in Madhya Pradesh."
                },
                "author": {
                  "@type": "Person",
                  "name": "Anjali Sharma"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4.8",
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
