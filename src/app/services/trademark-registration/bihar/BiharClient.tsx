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
      { id: 'importance-bihar', title: 'Importance for Bihar Businesses' },
      { id: 'benefits', title: 'Benefits of Registration' },
      { id: 'process-overview', title: 'Registration Process Overview' },
      { id: 'documents-required', title: 'Documents Required' },
      { id: 'trademark-classes', title: 'Trademark Classes' },
      { id: 'objection-opposition', title: 'Objection & Opposition' },
      { id: 'renewal-restoration', title: 'Renewal & Restoration' },
      { id: 'why-choose-us', title: 'Why Choose IPRKaro?' },
      { id: 'testimonials', title: 'Client Testimonials' },
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
                Bihar is currently experiencing a significant economic transformation. With a renewed focus on industrial growth, food processing, textiles, and information technology, the state is becoming a fertile ground for startups and established businesses alike. From the bustling markets of Patna to the industrial hubs of Begusarai and the agricultural heartlands of Muzaffarpur, entrepreneurs are creating unique brands that deserve legal protection. Trademark registration in Bihar is the most effective way to secure your brand identity, ensuring that your hard work and reputation are safeguarded against misuse and infringement.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                In a competitive marketplace, a distinctive brand name or logo is your most valuable asset. It distinguishes your products and services from those of your competitors and builds trust with your customers. Whether you are launching a new tech startup in Patna, a food processing unit in Hajipur, or a textile business in Bhagalpur, obtaining a registered trademark is a critical step in your business journey. This comprehensive guide will walk you through every aspect of trademark registration in Bihar, from the initial search to the final certification, empowering you to protect your intellectual property rights effectively.
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
                A trademark is a visual symbol, which may be a word, name, device, label, or numeral used by an undertaking to distinguish its goods or services from other similar goods or services originating from a different undertaking. In simpler terms, it is your brand's unique identity. For a consumer in Bihar, seeing a familiar logo on a packet of sattu or a box of sweets instills confidence in the quality of the product. That trust is what a trademark represents and protects.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Trademark registration provides the owner with the exclusive right to use the mark in relation to the goods or services for which it is registered. It also gives the owner the right to take legal action against anyone who uses the mark without authorization. In India, trademarks are governed by the Trade Marks Act, 1999, and the rules made thereunder. The registration is valid for ten years and can be renewed indefinitely.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                It is important to distinguish between a trademark, a copyright, and a patent. A trademark protects branding (logos, names, slogans). Copyright protects original artistic or literary works (like the content of a book or code of software). A patent protects new inventions. For most businesses in Bihar, starting with trademark registration is the priority to secure their market presence.
              </p>
            </div>
          </section>

          {/* Importance for Bihar Businesses */}
          <section id="importance-bihar" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why is Trademark Registration Crucial for Bihar Businesses?
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
                Bihar is home to a diverse range of industries, from traditional handicrafts like Madhubani paintings and Tikuli art to modern sectors like IT and food processing. As these industries grow and reach national and international markets, the risk of brand imitation increases.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-base">
                <li><strong>Protection of Heritage:</strong> For businesses dealing in traditional products, a trademark helps in distinguishing authentic goods from cheap imitations.</li>
                <li><strong>Startup Ecosystem:</strong> With the Bihar Startup Policy encouraging new ventures, registered trademarks help startups attract investors who value protected intellectual property.</li>
                <li><strong>Agricultural Exports:</strong> Bihar is a major producer of fruits and vegetables. Branding these products for export requires trademark protection to build a reputation in foreign markets.</li>
                <li><strong>Service Sector Growth:</strong> The education and healthcare sectors in cities like Patna and Kota are highly competitive. A strong brand name is essential for student and patient retention.</li>
              </ul>
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
                Benefits of Trademark Registration
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
                    title: "Exclusive Legal Rights",
                    description: "The owner of a registered trademark enjoys the exclusive right to use the mark across India. In Bihar, this means you can legally prevent any other business in Patna, Gaya, or elsewhere from using a confusingly similar name."
                  },
                  {
                    icon: "fas fa-hand-holding-usd",
                    title: "Intangible Asset Creation",
                    description: "A trademark is an intellectual property asset. It can be sold, franchised, or commercially contracted. For a growing restaurant chain in Bihar, franchising becomes a viable expansion model only with a registered trademark."
                  },
                  {
                    icon: "fas fa-check-circle",
                    title: "Trust and Credibility",
                    description: "The ® symbol acts as a seal of quality. Customers are more likely to trust a product that is legally registered. This is particularly important for food products and consumer goods where safety and quality are paramount."
                  },
                  {
                    icon: "fas fa-globe-asia",
                    title: "Global Registration Possibility",
                    description: "A trademark registered in India can serve as the basis for registering the trademark in other countries. This is beneficial for Bihar based exporters looking to tap into global markets like the Middle East or Europe."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Legal Protection Against Infringement",
                    description: "If someone uses your registered trademark without permission, you can sue them for infringement. The burden of proof is lighter compared to passing off actions for unregistered marks."
                  },
                  {
                    icon: "fas fa-user-tie",
                    title: "Attracting Talent and Investment",
                    description: "A strong brand image helps in attracting good employees and investors. It signals that the company is serious about its long term growth and reputation."
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

          {/* Registration Process Overview */}
          <section id="process-overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Registration Process in Bihar
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
                The trademark registration process is systematic and transparent. Although the physical jurisdiction for Bihar is the Trademark Registry in Kolkata, the entire process can be completed online through the IP India portal. Here is a step by step guide:
              </p>
              <div className="relative space-y-4">
                <div className="absolute left-4 top-0 bottom-0 w-0.5"
                  style={{
                    background: 'rgba(255, 183, 3, 0.3)',
                    opacity: 0.5
                  }}
                />
                
                {[
                  {
                    step: "Step 1: Trademark Search",
                    description: "Before filing, it is critical to conduct a comprehensive search of the trademark database. This helps identify if there are any existing marks that are identical or similar to yours. A thorough search minimizes the risk of objection and rejection later in the process."
                  },
                  {
                    step: "Step 2: Filing the Application",
                    description: "Once the search is clear, the application is filed using Form TM-A. This form requires details of the applicant, the mark, the goods or services (class), and the user date. For Bihar applicants, the appropriate jurisdiction code must be selected."
                  },
                  {
                    step: "Step 3: Vienna Codification",
                    description: "If the trademark contains a logo or figurative elements, the registry assigns a Vienna Code to it. This is an international classification system for the figurative elements of marks, used for search purposes."
                  },
                  {
                    step: "Step 4: Examination",
                    description: "The Registrar examines the application to ensure it complies with the Trade Marks Act. They check for distinctiveness and similarity with existing marks. If any discrepancies are found, an examination report is issued."
                  },
                  {
                    step: "Step 5: Reply to Examination Report",
                    description: "If the examination report contains objections, the applicant must file a written reply within 30 days, arguing why the mark should be registered. This often requires citing legal precedents and providing evidence of use."
                  },
                  {
                    step: "Step 6: Show Cause Hearing",
                    description: "If the Registrar is not satisfied with the written reply, a hearing may be scheduled. The applicant or their agent must appear (physically in Kolkata or via video conference) to present their case."
                  },
                  {
                    step: "Step 7: Publication in Trademark Journal",
                    description: "If the mark is accepted, it is published in the Trademark Journal. This serves as a public notice. Third parties have 4 months to oppose the registration if they believe it infringes on their rights."
                  },
                  {
                    step: "Step 8: Registration and Certification",
                    description: "If there are no oppositions within the 4 month period, or if the opposition is decided in favor of the applicant, the registration certificate is issued. The mark is then valid for 10 years."
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
                Documents Required for Registration
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
                To ensure a smooth filing process, it is essential to have all the necessary documents ready. The requirements vary slightly based on the type of applicant entity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "For Individuals / Sole Proprietorships",
                    items: [
                      "Copy of the Logo or Brand Name (Soft copy)",
                      "Identity Proof of the Applicant (Aadhaar Card, PAN Card, Passport, or Voter ID)",
                      "Address Proof of the Applicant",
                      "Signed Form-48 (Power of Attorney authorizing the agent)",
                      "Udyam Registration Certificate (Optional, but recommended for 50% government fee rebate)"
                    ]
                  },
                  {
                    title: "For Private Limited Companies / LLPs",
                    items: [
                      "Copy of the Logo or Brand Name",
                      "Certificate of Incorporation or Partnership Deed",
                      "MSME / Udyam Registration Certificate (Essential for claiming 50% fee rebate)",
                      "Board Resolution authorizing the signatory",
                      "Identity and Address Proof of the Authorized Signatory",
                      "Signed Form-48"
                    ]
                  },
                  {
                    title: "For Partnership Firms",
                    items: [
                      "Copy of the Logo or Brand Name",
                      "Partnership Deed",
                      "Identity and Address Proof of the Managing Partner",
                      "Udyam Registration Certificate (if available)",
                      "Signed Form-48"
                    ]
                  },
                  {
                    title: "For Trusts and NGOs",
                    items: [
                      "Copy of the Logo or Brand Name",
                      "Trust Deed or Registration Certificate",
                      "Identity and Address Proof of the Managing Trustee",
                      "Signed Form-48"
                    ]
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
                Trademarks are classified into 45 classes (34 for goods and 11 for services). Choosing the correct class is vital for protection. Here are the classes most relevant to Bihar's economy:
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
                    Goods (Classes 1-34)
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-cube text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 29:</strong> Meat, fish, poultry; preserved, frozen, dried and cooked fruits and vegetables. Relevant for Bihar's Litchi and Makhana processing units.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-cube text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 30:</strong> Coffee, tea, rice, flour and preparations made from cereals, spices. Relevant for rice mills and spice manufacturers in the state.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-cube text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 24 & 25:</strong> Textiles and clothing. Crucial for the Bhagalpuri silk industry and garment manufacturers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-cube text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 31:</strong> Raw agricultural, aquacultural, horticultural and forestry products.</span>
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
                    Services (Classes 35-45)
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-cogs text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 35:</strong> Advertising; business management; business administration; office functions. Relevant for retail stores and consultancy firms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-cogs text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 41:</strong> Education; providing of training; entertainment. Highly relevant for coaching institutes in Patna and other educational hubs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-cogs text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 43:</strong> Services for providing food and drink; temporary accommodation. For hotels, restaurants, and cafes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-cogs text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 44:</strong> Medical services; veterinary services; hygienic and beauty care. For hospitals and clinics.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Objection & Opposition */}
          <section id="objection-opposition" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Handling Objections and Oppositions
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
                It is common for trademark applications to face hurdles. An <strong>objection</strong> is raised by the Trademark Registry, usually due to lack of distinctiveness or similarity to existing marks. An <strong>opposition</strong> is filed by a third party (competitor or public) after the mark is published in the journal.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                In both cases, professional legal assistance is crucial. A well drafted reply to an examination report can clear objections. Similarly, a strong counter statement is needed to fight an opposition. Our team at IPRKaro specializes in handling complex trademark litigations and hearings at the Kolkata Registry, ensuring your brand rights are vigorously defended.
              </p>
            </div>
          </section>

          {/* Renewal & Restoration */}
          <section id="renewal-restoration" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Renewal and Restoration
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
                A registered trademark in India is valid for 10 years from the date of filing. To keep the rights active, it must be renewed every 10 years. The renewal application (Form TM-R) can be filed within six months before the expiry date.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                If you miss the renewal deadline, you can still renew it within six months after expiry with a surcharge. If even that period is missed, the mark is removed from the register. However, it can be <strong>restored</strong> by filing a restoration application within one year of expiry. Timely renewal is essential to maintain your brand's legal protection.
              </p>
            </div>
          </section>

          {/* Why Choose IPRKaro */}
          <section id="why-choose-us" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Choose IPRKaro for Trademark Registration in Bihar?
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
                Navigating the legal intricacies of trademark registration can be challenging. IPRKaro offers a seamless, technology driven solution tailored for businesses in Bihar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Expert Team", desc: "Our team comprises experienced trademark attorneys and agents who understand the nuances of IP law." },
                  { title: "Affordable Pricing", desc: "We offer transparent and competitive pricing with no hidden charges, suitable for startups and MSMEs." },
                  { title: "End-to-End Support", desc: "From the initial search to final registration and renewal, we handle everything." },
                  { title: "High Success Rate", desc: "Our thorough search and meticulous filing process ensure a high probability of registration." },
                  { title: "Personalized Service", desc: "We understand that every business is unique and provide tailored advice." },
                  { title: "Digital Process", desc: "Complete the entire process from the comfort of your home or office in Bihar." }
                ].map((item, index) => (
                  <div key={index} className="p-3 rounded-md bg-white/5 border border-white/10">
                    <h4 className="text-[#FFB703] font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/80 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section id="testimonials" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Abhishek Kumar",
                  location: "Patna",
                  rating: 5,
                  text: "Outstanding trademark registration service in Patna. The team was extremely professional and guided me through the entire process. Got my certificate without any hassles."
                },
                {
                  name: "Priya Singh",
                  location: "Muzaffarpur",
                  rating: 5,
                  text: "Great experience with trademark registration in Muzaffarpur. They handled all documentation and objections professionally. Highly recommended for Bihar businesses."
                },
                {
                  name: "Rajesh Yadav",
                  location: "Gaya",
                  rating: 5,
                  text: "Excellent service in Gaya. They provided complete guidance from search to registration. Very satisfied with their expertise and timely support."
                }
              ].map((review, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg flex flex-col h-full"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star text-xs ${i < Math.floor(review.rating) ? 'text-[#FFB703]' : 'text-gray-600'}`}></i>
                    ))}
                  </div>
                  <p className="text-white/90 font-nunito text-sm italic mb-4 flex-grow">
                    "{review.text}"
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-white font-bold text-sm">{review.name}</h4>
                    <p className="text-white/60 text-xs">{review.location}</p>
                  </div>
                </div>
              ))}
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
                  <a
                    href="tel:+919289707648"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-base transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                      color: '#0C002B',
                      boxShadow: '0 6px 18px rgba(255, 183, 3, 0.4)'
                    }}
                  >
                    <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                    +91-9289707648
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-semibold text-base transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <i className="fas fa-envelope text-sm" aria-hidden="true"></i>
                    Contact Us
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
