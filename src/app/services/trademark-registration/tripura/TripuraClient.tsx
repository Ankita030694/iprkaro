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

export default function TripuraClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Registration in Tripura: An Overview' },
      { id: 'importance', title: 'Why Trademark Registration is Crucial for Tripura Businesses' },
      { id: 'benefits', title: 'Strategic Benefits of Brand Protection' },
      { id: 'eligibility', title: 'Who Can Apply for a Trademark in Tripura?' },
      { id: 'process', title: 'Step-by-Step Registration Process' },
      { id: 'documents', title: 'Required Documents for Filing' },
      { id: 'search', title: 'The Importance of a Trademark Search' },
      { id: 'classes', title: 'Key Trademark Classes for Tripura Industries' },
      { id: 'objections', title: 'Navigating Objections and Oppositions' },
      { id: 'renewal', title: 'Trademark Renewal and Maintenance' },
      { id: 'assignment', title: 'Trademark Assignment and Licensing' },
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
          blogTitle="Trademark Registration in Tripura"
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
              <span className="text-[#FFB703] font-medium">Tripura</span>
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
                    { "@type": "ListItem", "position": 4, "name": "Tripura", "item": "https://iprkaro.com/services/trademark-registration/tripura" }
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
                Trademark Registration in Tripura: Secure Your Brand Online
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
                Tripura, a state known for its majestic palaces like Neermahal and Ujjayanta, is also a rising star in India's economic landscape. With a strong focus on bamboo cultivation, rubber plantations, and organic farming, the state is creating unique products that have global appeal. The "Queen Pineapple" of Tripura is already a celebrated GI product, but individual businesses need more than just regional recognition—they need brand protection.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                In an era where local businesses are going digital and reaching customers worldwide, trademark registration is the first line of defense. Whether you are a handloom weaver in Agartala, a tea estate owner in Unakoti, or a tech startup in the capital, securing your brand name ensures that your reputation remains exclusively yours. This guide explores the nuances of trademark registration in Tripura, helping you navigate the legal landscape to build a resilient brand.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Registration in Tripura: An Overview
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a legal right that protects your brand identity—be it a name, logo, or slogan. Governed by the **Trade Marks Act, 1999**, a registered trademark gives you the exclusive right to use that mark for your goods or services across India.
              </p>
              <h3 className="text-white font-nunito text-xl font-semibold mb-2 mt-4">Jurisdiction: The Kolkata Registry</h3>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Tripura falls under the jurisdiction of the **Kolkata Trademark Registry**.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Address of the Appropriate Office:**<br />
                Trade Marks Registry,<br />
                Intellectual Property Building,<br />
                CP-2, Sector V, Salt Lake City,<br />
                Kolkata – 700091.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Online Filing:** You do not need to travel to Kolkata. The entire registration process is digital. From filing the application to receiving the registration certificate, everything can be done online from Tripura.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Once registered, your trademark is valid for **10 years** and can be renewed indefinitely. It becomes a permanent asset for your business.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Trademark Registration is Crucial for Tripura Businesses
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Tripura's economy is diversifying. Here is why trademark protection is vital for its key sectors:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Bamboo & Cane Industry</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Tripura produces world-class bamboo furniture and handicrafts. As these products reach international markets, a registered trademark ensures that your unique designs and brand name are not copied by mass manufacturers.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Rubber & Tea Plantations</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Tripura is the second-largest rubber producer in India. Tea estates like Durgabari are also gaining fame. Trademarks help these producers brand their raw materials and processed goods, commanding better prices in the market.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Handloom & Textiles</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Traditional attires like Rignai and Risa are cultural icons. Weavers and designers need trademarks to protect their labels, ensuring that customers get authentic Tripura handlooms and not power-loom imitations.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Tourism & Hospitality</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    With eco-tourism growing around Jampui Hills and Sepahijala, hotels and resorts need strong brand identities. A registered trademark builds trust with tourists and prevents confusion with similarly named establishments.
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
                Strategic Benefits of Brand Protection
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Registering your trademark is a smart business move:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Legal Ownership", icon: "fas fa-gavel", desc: "You become the legal owner of the brand. You can stop others from using it without your permission." },
                  { title: "Market Reputation", icon: "fas fa-star", desc: "A registered trademark enhances your brand's image. It signals quality and reliability to your customers." },
                  { title: "Asset Creation", icon: "fas fa-coins", desc: "Trademarks are valuable intangible assets. They can be sold, licensed, or used as collateral for loans." },
                  { title: "Global Expansion", icon: "fas fa-globe", desc: "It provides a basis for international registration, helping you export your products to neighboring countries like Bangladesh." },
                  { title: "E-commerce Protection", icon: "fas fa-shopping-cart", desc: "It is essential for Brand Registry on platforms like Amazon, protecting your listings from hijackers." },
                  { title: "Deterrence", icon: "fas fa-ban", desc: "The public record of your mark warns potential copycats to stay away, preventing disputes before they start." }
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
                Who Can Apply for a Trademark in Tripura?
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Anyone claiming to be the proprietor of a trademark can apply. In Tripura, common applicants include:
              </p>
              <ul className="space-y-3 text-white/90 font-nunito text-sm">
                <li className="flex items-start gap-2">
                  <i className="fas fa-user text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Individuals & Sole Proprietors:</strong>
                    <p className="text-xs text-white/70 mt-1">Artisans, farmers, and small business owners.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-users text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Partnership Firms & LLPs:</strong>
                    <p className="text-xs text-white/70 mt-1">Tea estates, rubber processing units, and law firms.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-building text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Private Limited Companies:</strong>
                    <p className="text-xs text-white/70 mt-1">Manufacturing companies and tech startups in Agartala.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-hand-holding-heart text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>NGOs & Trusts:</strong>
                    <p className="text-xs text-white/70 mt-1">Organizations working for tribal welfare and cultural preservation.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Step-by-Step Registration Process
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-6">
                The registration process is systematic and transparent. Here is the roadmap:
              </p>
              <div className="relative space-y-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'rgba(255, 183, 3, 0.3)', opacity: 0.5 }} />
                
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>1</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Trademark Search</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      Before filing, we conduct a thorough search on the IP India database. This helps identify any identical or similar marks that could block your application. A clean search report is the first step to success.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>2</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Filing Application (Form TM-A)</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      We file the application online with all necessary details—applicant info, mark image, and goods description. You get an immediate application number and can start using the ™ symbol.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>3</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Vienna Codification</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If your mark includes a logo, the Registry assigns a Vienna Code to it. This is an international classification for figurative elements, used for internal search and indexing.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>4</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Examination</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      The Registrar examines the application for legal compliance. They check for distinctiveness and similarity with existing marks. If objections are raised, an Examination Report is issued.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>5</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Publication</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If accepted, the mark is published in the Trademark Journal. This allows third parties to oppose the registration within 4 months if they believe it infringes their rights.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>6</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Registration</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If there is no opposition (or if it is resolved in your favor), the Registration Certificate is issued. You can now use the ® symbol.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Documents Section */}
          <section id="documents" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Required Documents for Filing
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Having the correct documents ready speeds up the process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">Individual / Sole Proprietor</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Logo/Mark:</strong> Soft copy of the logo (JPEG) or word mark.</li>
                    <li className="flex items-start gap-2">• <strong>Identity Proof:</strong> PAN Card, Aadhaar Card, or Passport.</li>
                    <li className="flex items-start gap-2">• <strong>Address Proof:</strong> Recent utility bill or bank statement.</li>
                    <li className="flex items-start gap-2">• <strong>Form-48:</strong> Power of Attorney (no legalization needed).</li>
                    <li className="flex items-start gap-2">• <strong>User Affidavit:</strong> If claiming prior usage of the mark.</li>
                  </ul>
                </div>
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">Company / LLP / Partnership</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Registration Certificate:</strong> Incorporation Cert or Partnership Deed.</li>
                    <li className="flex items-start gap-2">• <strong>Udyam Certificate:</strong> Mandatory for MSMEs to get 50% fee rebate.</li>
                    <li className="flex items-start gap-2">• <strong>Signatory's ID:</strong> ID and address proof of the authorized person.</li>
                    <li className="flex items-start gap-2">• <strong>Resolution:</strong> Board Resolution authorizing the filing.</li>
                    <li className="flex items-start gap-2">• <strong>Form-48:</strong> Power of Attorney signed by the authorized signatory.</li>
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
                The Importance of a Trademark Search
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark search is not just a formality; it is a risk management tool. It involves checking the Registry's records for conflicting marks.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Why is it important?**
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4 mb-4">
                <li>**Avoids Rejection:** Helps you identify potential conflicts before filing.</li>
                <li>**Saves Costs:** Prevents you from spending money on a brand name that cannot be registered.</li>
                <li>**Legal Safety:** Ensures you are not infringing on someone else's intellectual property.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Our team provides a detailed search report, giving you a clear picture of your mark's registrability.
              </p>
            </div>
          </section>

          {/* Classes Section */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Key Trademark Classes for Tripura Industries
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Choosing the right class is critical for protection. Here are the relevant classes for Tripura:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { class: "Class 20", desc: "Furniture, mirrors, picture frames. Essential for Bamboo and Cane furniture and handicrafts." },
                  { class: "Class 17", desc: "Rubber, gutta-percha, gum, asbestos, mica. Crucial for Rubber plantations and processing units." },
                  { class: "Class 30", desc: "Coffee, tea, rice, spices. For Tea estates and Queen Pineapple processed products." },
                  { class: "Class 24", desc: "Textiles and textile goods. For Rignai, Risa, and other handloom fabrics." },
                  { class: "Class 31", desc: "Agricultural, horticultural products. For fresh fruits like Pineapple and Jackfruit." },
                  { class: "Class 35", desc: "Advertising; business management; retail services. For shops and e-commerce sellers." },
                  { class: "Class 43", desc: "Services for providing food and drink. For hotels, resorts, and restaurants." },
                  { class: "Class 32", desc: "Beers; mineral waters; fruit beverages. For fruit juice and beverage manufacturers." },
                  { class: "Class 39", desc: "Transport; packaging and storage; travel arrangement. For logistics and tour operators." }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.05)', border: '1px solid rgba(255, 183, 3, 0.1)' }}>
                    <h5 className="text-[#FFB703] font-bold text-sm mb-1">{item.class}</h5>
                    <p className="text-white/80 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Objections Section */}
          <section id="objections" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Navigating Objections and Oppositions
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                The path to registration can have obstacles.
              </p>
              
              <h4 className="text-white font-nunito text-lg font-semibold mb-2 mt-4">Trademark Objection</h4>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Raised by the Registry if the mark is not distinctive or is similar to others. You must file a reply within 30 days.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Response:** A strong legal reply can clear the objection. If not, a hearing is scheduled.
              </p>

              <h4 className="text-white font-nunito text-lg font-semibold mb-2 mt-4">Trademark Opposition</h4>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Filed by a third party after publication. They may claim your mark hurts their business.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                **Response:** This is a legal battle requiring evidence and arguments. Professional help is mandatory.
              </p>
            </div>
          </section>

          {/* Renewal Section */}
          <section id="renewal" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Renewal and Maintenance
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Trademark rights need to be maintained.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Validity:** 10 years from the date of application.</li>
                <li>**Renewal:** Can be renewed every 10 years indefinitely.</li>
                <li>**Timeline:** Renewal window opens 1 year before expiry.</li>
                <li>**Grace Period:** 6 months after expiry (with late fee).</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                If not renewed, the mark is removed from the register, and you lose your rights.
              </p>
            </div>
          </section>

          {/* Assignment Section */}
          <section id="assignment" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Assignment and Licensing
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                You can monetize your trademark.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Assignment:** Selling the trademark to another entity. This can be done with or without the business goodwill.</li>
                <li>**Licensing:** Granting permission to others to use your mark (e.g., franchising) for a fee.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                These agreements must be recorded with the Registry to be effective.
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Tripura</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Secure Your Intellectual Property?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't leave your brand vulnerable. Our experts in Tripura specialize in trademark registration and can guide you through every step.
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
                  "name": "Trademark Registration Service in Tripura",
                  "image": "https://iprkaro.com/assets/images/trademark-service.jpg",
                  "description": "Professional trademark registration services in Tripura."
                },
                "author": {
                  "@type": "Person",
                  "name": "Biplab Debbarma"
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
