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

export default function BiharClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    // Define sections for TOC
    const sections: TOCSection[] = [
      { id: 'what-is-trademark', title: 'What is Trademark Registration?' },
      { id: 'benefits', title: 'Benefits of Registration' },
      { id: 'steps-to-register', title: 'Steps to Register' },
      { id: 'how-to-register', title: 'How to Register' },
      { id: 'documents-required', title: 'Documents Required' },
      { id: 'timeline', title: 'Registration Timeline' },
      { id: 'trademark-classes', title: 'Trademark Classes' },
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
      
      // Check each section to see which one is currently in view
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
      
      {/* Table of Contents */}
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Bihar"
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
              <span className="text-[#FFB703] font-medium">Bihar</span>
            </div>
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
                Trademark Registration in Bihar: Complete Guide & Process 2025
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
                Bihar, a land of rich heritage and emerging economic potential, is witnessing a surge in entrepreneurial activities. From the traditional art of Madhubani and the famous Shahi Litchi of Muzaffarpur to the growing MSME sector in Patna and Begusarai, protecting intellectual property has never been more critical. Trademark registration in Bihar safeguards your brand identity, ensuring that your unique products and services stand out in the competitive marketplace.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Whether you are a local artisan, an agricultural exporter, or a tech startup in Bihar, securing a registered trademark provides you with exclusive legal rights and protection against infringement. This comprehensive guide details the trademark registration process in Bihar, including documents required, government fees, timeline, and how to navigate the legal framework under the Kolkata Trademark Registry jurisdiction.
              </p>
            </div>
          </section>

          {/* What is Trademark Registration */}
          <section id="what-is-trademark" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                What is Trademark Registration?
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a unique identifier—be it a word, logo, symbol, slogan, sound, or even a specific color combination—that distinguishes your goods or services from those of your competitors. In Bihar, where traditional craftsmanship meets modern business, a trademark acts as a badge of origin and quality. For instance, the specific branding of 'Sudha Dairy' distinguishes it from other dairy providers in the region.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Trademark registration is governed by the Trade Marks Act, 1999. Although the application is filed centrally or online, the jurisdiction for Bihar lies with the Trademark Registry in Kolkata. Once registered, you gain the exclusive right to use the ® symbol, which serves as a powerful deterrent against counterfeiting—a significant concern for Bihar's indigenous products like Bhagalpuri Silk and Tikuli Art.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                It is important to note the difference between a Trademark and a Geographical Indication (GI). While GI tags protect community rights for regional products (like Magahi Paan or Katarni Rice), a trademark protects your individual brand or company name under which you sell these or other products.
              </p>
            </div>
          </section>

          {/* Benefits of Trademark Registration in Bihar */}
          <section id="benefits" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Benefits of Trademark Registration in Bihar
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  {
                    icon: "fas fa-shield-alt",
                    title: "Legal Protection & Exclusivity",
                    description: "Registration gives you the sole right to use the mark in Bihar and across India. You can legally stop others from using a similar name or logo that could confuse your customers, which is vital in Bihar's bustling local markets."
                  },
                  {
                    icon: "fas fa-hand-holding-usd",
                    title: "Asset & Valuation",
                    description: "A registered trademark is an intangible asset. For startups in Patna or established businesses in Muzaffarpur, this adds significant value to the company's balance sheet and can be pivotal for attracting investors."
                  },
                  {
                    icon: "fas fa-check-circle",
                    title: "Builds Trust & Goodwill",
                    description: "Customers tend to trust registered brands more. The ® symbol assures quality, which is especially important for food processing and agricultural businesses in Bihar aiming for national expansion."
                  },
                  {
                    icon: "fas fa-globe-asia",
                    title: "Global Brand Protection",
                    description: "If you plan to export Bihar's famous products like Makhana or Silk, a national registration is the first step towards international protection under the Madrid Protocol."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Protection Against Infringement",
                    description: "In case of unauthorized use, you have the right to sue for damages. The Kolkata Registry and local courts in Bihar recognize your statutory rights, making enforcement easier compared to an unregistered mark."
                  },
                  {
                    icon: "fas fa-user-tie",
                    title: "Business Expansion",
                    description: "A registered trademark allows you to franchise or license your brand. This is an excellent model for expanding successful local businesses like restaurant chains or coaching institutes across the state."
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                    style={{ 
                      background: index === 0 
                        ? 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)'
                        : 'rgba(255, 255, 255, 0.03)',
                      border: index === 0 
                        ? '1px solid rgba(255, 183, 3, 0.2)'
                        : '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(255, 183, 3, 0.15)',
                          border: '1px solid rgba(255, 183, 3, 0.3)'
                        }}
                      >
                        <i className={`${benefit.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-base font-semibold mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Steps to Register Trademark in Bihar */}
          <section id="steps-to-register" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Step-by-Step Process to Register Trademark in Bihar
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="relative space-y-4">
                <div className="absolute left-4 top-0 bottom-0 w-0.5"
                  style={{
                    background: 'rgba(255, 183, 3, 0.3)',
                    opacity: 0.5
                  }}
                />
                
                {[
                  {
                    step: "Step 1: Public Search",
                    description: "The first step is to conduct a thorough public search on the IP India database. This ensures your proposed brand name or logo is not similar to any existing trademarks. For a business in Bihar, it's crucial to check both national and local conflicts."
                  },
                  {
                    step: "Step 2: Class Selection",
                    description: "Identify the correct class for your goods or services. For example, if you are selling 'Mithila Makhana', you would look at Class 29 (Food products). If you are a coaching centre in Patna, you would fall under Class 41 (Education)."
                  },
                  {
                    step: "Step 3: Filing the Application (Form TM-A)",
                    description: "File the application online or physically. For Bihar applicants, the physical jurisdiction is the Kolkata Registry. The application must include applicant details, the mark, user date (if already in use), and the prescribed government fee."
                  },
                  {
                    step: "Step 4: Vienna Codification",
                    description: "If your trademark includes a logo or figurative elements, it will be processed for Vienna Codification. This is an internal process where the registry classifies the visual elements of your mark."
                  },
                  {
                    step: "Step 5: Examination",
                    description: "A Trademark Officer will examine your application to check for compliance with the Trademark Act. They may issue an examination report with objections if they find the mark descriptive or similar to others."
                  },
                  {
                    step: "Step 6: Reply to Examination Report",
                    description: "If an objection is raised, you must file a reply within 30 days. You may need to provide evidence of usage or argue distinctiveness. A hearing may be scheduled at the Kolkata office or via video conferencing."
                  },
                  {
                    step: "Step 7: Publication in Journal",
                    description: "Once accepted, the mark is published in the Trademark Journal. This opens a 4-month window for third parties to oppose the registration if they believe it infringes on their rights."
                  },
                  {
                    step: "Step 8: Registration",
                    description: "If there are no oppositions (or if you win the opposition proceedings), the Registrar will issue the Trademark Registration Certificate. The mark is then valid for 10 years."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex gap-3">
                    <div 
                      className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm"
                      style={{ 
                        background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                        color: '#0C002B',
                        boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)'
                      }}
                    >
                      {index + 1}
                    </div>
                    
                    <div 
                      className="flex-1 p-4 rounded-md transition-all duration-300 hover:-translate-y-0.5"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <h4 className="text-white font-nunito text-base font-semibold mb-2">
                        {item.step}
                      </h4>
                      <p className="text-white/90 font-nunito text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How to Register Trademark in Bihar */}
          <section id="how-to-register" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                How to Register Trademark in Bihar: Online vs Physical
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Applicants in Bihar have two options for filing their trademark applications. While the physical office is in Kolkata, the online route is preferred for its speed and convenience.
              </p>

              <div className="space-y-4">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-laptop text-[#FFB703]" aria-hidden="true"></i>
                    Online Filing (Recommended)
                  </h3>
                  <p className="text-white/90 font-nunito text-sm mb-2">
                    The most efficient way is to file through the official IP India portal (ipindiaservices.gov.in).
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-white/90 font-nunito text-sm ml-4">
                    <li>Instant acknowledgment and generation of application number.</li>
                    <li>10% lower government fees compared to physical filing.</li>
                    <li>Real-time status tracking.</li>
                    <li>Digital signature (DSC) required for submission.</li>
                  </ul>
                </div>

                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-building text-[#FFB703]" aria-hidden="true"></i>
                    Physical Filing
                  </h3>
                  <p className="text-white/90 font-nunito text-sm mb-2">
                    You can visit the Trademark Registry office in Kolkata to submit your application manually.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-white/90 font-nunito text-sm ml-4">
                    <li>Requires physical visit or sending documents via post.</li>
                    <li>Higher government fees.</li>
                    <li>Slower processing of data entry into the system.</li>
                    <li>Address: Trademark Registry, Boudhik Sampada Bhawan, CP-2, Sector V, Salt Lake City, Kolkata - 700091.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Documents Required */}
          <section id="documents-required" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Documents Required for Trademark Registration in Bihar
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "For Individuals / Sole Proprietors",
                    items: ["Copy of Logo/Brand Name", "Identity Proof (Aadhaar/PAN/Passport)", "Address Proof", "Signed Form-48 (Authorization)", "Udyam Registration (optional, for fee concession)"]
                  },
                  {
                    title: "For Companies / LLPs",
                    items: ["Copy of Logo/Brand Name", "Certificate of Incorporation", "MSME Certificate (for 50% fee rebate)", "Board Resolution", "Identity Proof of Signatory", "Signed Form-48"]
                  },
                  {
                    title: "For Partnership Firms",
                    items: ["Copy of Logo/Brand Name", "Partnership Deed", "Identity Proof of Partners", "Udyam Registration (if applicable)", "Signed Form-48"]
                  },
                  {
                    title: "For Trusts / NGOs",
                    items: ["Copy of Logo/Brand Name", "Trust Deed / Registration Certificate", "Identity Proof of Managing Trustee", "Signed Form-48"]
                  }
                ].map((doc, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                      <i className="fas fa-file text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {doc.title}
                    </h4>
                    <ul className="space-y-1">
                      {doc.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/90 font-nunito text-sm">
                          <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section id="timeline" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Registration Timeline
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The timeline for trademark registration in Bihar generally ranges from 6 to 12 months, provided there are no objections or oppositions.
              </p>

              <div className="space-y-3">
                {[
                  { stage: "Filing", duration: "1-2 Days", description: "Submission of application and generation of TM application number." },
                  { stage: "Examination", duration: "1-3 Months", description: "Registry reviews the application and issues examination report." },
                  { stage: "Publication", duration: "3-5 Months", description: "If accepted, the mark is published in the journal for 4 months." },
                  { stage: "Registration", duration: "6-12 Months", description: "Issuance of certificate if no opposition is filed." }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md flex items-start gap-3"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(255, 183, 3, 0.15)',
                        border: '1px solid rgba(255, 183, 3, 0.3)'
                      }}
                    >
                      <i className="fas fa-clock text-[#FFB703] text-sm" aria-hidden="true"></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-nunito text-base font-semibold">
                          {item.stage}
                        </h4>
                        <span className="text-[#FFB703] font-nunito text-xs font-medium px-2 py-0.5 rounded" style={{ background: 'rgba(255, 183, 3, 0.2)' }}>
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-white/90 font-nunito text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trademark Classes */}
          <section id="trademark-classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Common Trademark Classes in Bihar
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Bihar's economy is diverse, ranging from agriculture to textiles and services. Here are some relevant classes for businesses in the state:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">
                    Product Classes
                  </h3>
                  <ul className="space-y-1 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 29:</strong> Processed foods, dairy (Sudha), Makhana products.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 30:</strong> Rice (Katarni), Sweets (Silao Khaja), Spices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 24/25:</strong> Textiles, Bhagalpuri Silk, Clothing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 31:</strong> Agricultural produce, grains, seeds.</span>
                    </li>
                  </ul>
                </div>

                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">
                    Service Classes
                  </h3>
                  <ul className="space-y-1 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 35:</strong> Business management, retail stores, advertising.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 41:</strong> Education (Coaching institutes in Patna), Training.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 43:</strong> Restaurants, Hotels, Food services.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 45:</strong> Legal services, consultancy.</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                  <span className="text-white font-nunito text-base font-semibold">Secure Your Brand Identity in Bihar</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Register Your Trademark?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  From Patna to Bhagalpur, we help businesses across Bihar protect their intellectual property. Get expert guidance, seamless filing, and complete support until registration.
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
                    Consult an Expert
                    <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                  </Link>
                  <Link
                    href="/services/trademark-registration"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-semibold text-base transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <i className="fas fa-info-circle text-sm" aria-hidden="true"></i>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-8 scroll-mt-32">
            <FaqSection />
          </section>

        </div>
      </div>
    </div>
  );
}
