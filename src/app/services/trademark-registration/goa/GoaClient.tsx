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

export default function GoaClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Comprehensive Overview of Trademark Registration in Goa' },
      { id: 'importance', title: 'Why Trademark Registration is Crucial for Goan Businesses' },
      { id: 'benefits', title: 'Strategic Benefits of Trademark Protection' },
      { id: 'eligibility', title: 'Who Can Apply for a Trademark in Goa?' },
      { id: 'process', title: 'Detailed Step-by-Step Registration Process' },
      { id: 'documents', title: 'Complete List of Required Documents' },
      { id: 'search', title: 'The Importance of a Trademark Search' },
      { id: 'classes', title: 'Trademark Classes Relevant to Goa\'s Economy' },
      { id: 'objections', title: 'Navigating Objections and Oppositions' },
      { id: 'renewal', title: 'Trademark Renewal and Restoration' },
      { id: 'assignment', title: 'Assignment and Transmission of Trademarks' },
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
          blogTitle="Trademark Registration in Goa"
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
              <span className="text-[#FFB703] font-medium">Goa</span>
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
                    { "@type": "ListItem", "position": 4, "name": "Goa", "item": "https://iprkaro.com/services/trademark-registration/goa" }
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
                Trademark Registration in Goa: Secure Your Brand Identity
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
                Goa, globally celebrated as the "Pearl of the Orient," is much more than a premier tourist destination. It is a rapidly evolving economic hub with a diverse industrial landscape that includes pharmaceuticals, biotechnology, information technology, and a vibrant startup ecosystem. From the bustling markets of Mapusa and Margao to the tech parks in Verna and the serene beach shacks of North Goa, the spirit of entrepreneurship is alive and thriving. In such a dynamic and competitive environment, your brand is your most valuable intangible asset. It distinguishes your goods and services from those of your competitors and serves as a beacon of quality and trust for your customers.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Trademark registration in Goa is the definitive legal step to secure this asset. It grants you, the owner, the exclusive right to use your brand name, logo, slogan, or sound mark, and provides you with powerful legal tools to prevent unauthorized use or counterfeiting. Whether you are a heritage Feni distiller, a boutique hotelier, or a cutting-edge software developer, registering your trademark is essential for long-term business sustainability and growth. This comprehensive guide delves deep into the nuances of trademark registration in Goa, covering the legal framework, procedural steps, documentation, and the strategic advantages of protecting your intellectual property.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Comprehensive Overview of Trademark Registration in Goa
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a unique identifier—a "brand" in layman's terms. It can be a word, phrase, symbol, design, or a combination of these things that identifies your goods or services. It’s how customers recognize you in the marketplace and distinguish you from your competitors. In India, the registration and protection of trademarks are governed by the **Trade Marks Act, 1999** and the **Trade Marks Rules, 2017**. This central legislation ensures that trademark rights are uniform across the country, including the state of Goa.
              </p>
              <h3 className="text-white font-nunito text-xl font-semibold mb-2 mt-4">Jurisdiction: The Mumbai Connection</h3>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For administrative purposes, the Trade Marks Registry in India is divided into five geographical zones. The state of Goa falls under the jurisdiction of the **Mumbai Trademark Registry**. This means that the "Appropriate Office" for all trademark applications originating from Goa is the office located at Antop Hill, Mumbai.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Address of the Jurisdiction Office:**<br />
                Trade Marks Registry,<br />
                Boudhik Sampada Bhawan,<br />
                S. M. Road, Antop Hill,<br />
                Mumbai – 400 037.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                However, in today's digital age, the physical location of the registry is largely a formality for filing purposes. The entire trademark registration process—from the initial search and application filing to responding to examination reports and receiving the registration certificate—is conducted online through the official IP India portal. This digital infrastructure ensures that an entrepreneur in a remote village in South Goa has the same access to trademark protection as a multinational corporation in Mumbai. You do not need to travel to Mumbai; the process can be managed entirely from your office or home in Goa.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                The Controller General of Patents, Designs, and Trademarks (CGPDTM) oversees the functioning of the registry. Once registered, a trademark is valid for **10 years** and can be renewed indefinitely, making it a perpetual asset for your business as long as it is kept alive.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Trademark Registration is Crucial for Goan Businesses
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Goa's economy is a unique blend of traditional industries and modern service sectors. In each of these domains, intellectual property plays a pivotal role. Here’s why specific industries in Goa need to prioritize trademark registration:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Tourism & Hospitality</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Goa attracts millions of domestic and international tourists annually. In such a crowded market, the name of your hotel, resort, beach shack, or tour company is your primary identity. A registered trademark prevents unscrupulous competitors from using a confusingly similar name to siphon off your customers. It ensures that the reputation you build for hospitality and service remains exclusively yours.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Food & Beverages (Feni & Cuisine)</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Goa is famous for its distinct culinary heritage, including Feni, Bebinca, and Khaje. While Geographical Indications (GI) protect the regional identity of these products, individual producers need trademarks to protect their specific brand names. For instance, while "Goan Feni" is a GI, your specific brand of Feni needs a trademark to stand out on the shelf and command a premium price.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Pharmaceuticals & Biotech</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Goa is a significant hub for pharmaceutical manufacturing in India. For pharma companies, trademarks are critical for both corporate identity and individual drug names. In an industry where trust and safety are paramount, a registered trademark assures patients and healthcare providers of the authenticity of the medicine, protecting public health and company revenue.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">IT & Startups</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    With the government's push for IT and the emergence of startup hubs in Panaji and Verna, tech companies are on the rise. For a startup, the brand name is often its most valuable asset before it even has significant revenue. Registering a trademark early protects the brand equity, makes the company more attractive to investors, and prevents rebranding nightmares later.
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
                Strategic Benefits of Trademark Protection
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Beyond just legal compliance, trademark registration offers tangible business advantages that can directly impact your bottom line:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Exclusive Legal Rights", icon: "fas fa-gavel", desc: "You get the sole right to use the mark for your goods/services. You can sue anyone who tries to copy it." },
                  { title: "Asset Valuation", icon: "fas fa-chart-line", desc: "A trademark is an intangible asset. As your business grows, the value of your brand grows, which can be leveraged for loans or during a business sale." },
                  { title: "Trust and Credibility", icon: "fas fa-handshake", desc: "The ® symbol is a badge of trust. It tells your customers that you are a serious, established business that cares about its reputation." },
                  { title: "Global Expansion", icon: "fas fa-globe", desc: "A registered Indian trademark can serve as the basis for international registration in other countries via the Madrid Protocol." },
                  { title: "Deterrent to Infringers", icon: "fas fa-shield-alt", desc: "The mere existence of your mark on the public register deters others from adopting similar names, saving you from potential legal battles." },
                  { title: "Licensing and Franchising", icon: "fas fa-file-contract", desc: "You can license your trademark to others for a fee (royalty), creating an additional revenue stream for your business." }
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
                Who Can Apply for a Trademark in Goa?
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The Trade Marks Act is inclusive, allowing a wide range of entities to own intellectual property. In the context of Goa, the following can apply:
              </p>
              <ul className="space-y-3 text-white/90 font-nunito text-sm">
                <li className="flex items-start gap-2">
                  <i className="fas fa-user text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Individuals & Sole Proprietors:</strong>
                    <p className="text-xs text-white/70 mt-1">Artists, freelance designers, home bakers, and owners of small shops or shacks.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-building text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Companies (Pvt Ltd, Public Ltd, OPC):</strong>
                    <p className="text-xs text-white/70 mt-1">Corporate entities engaged in manufacturing, trading, or services.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-users text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Partnership Firms & LLPs:</strong>
                    <p className="text-xs text-white/70 mt-1">Law firms, architectural firms, and joint business ventures.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-hand-holding-heart text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>NGOs & Trusts:</strong>
                    <p className="text-xs text-white/70 mt-1">Charitable organizations and educational trusts.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-globe text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Foreign Entities:</strong>
                    <p className="text-xs text-white/70 mt-1">International companies looking to protect their brand in the Indian market.</p>
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
                Detailed Step-by-Step Registration Process
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-6">
                The journey from application to registration involves several legal stages. Understanding this workflow helps in setting realistic expectations regarding timelines and outcomes.
              </p>
              <div className="relative space-y-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'rgba(255, 183, 3, 0.3)', opacity: 0.5 }} />
                
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>1</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Comprehensive Trademark Search</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      Before filing, it is imperative to conduct a thorough search on the IP India database. This step identifies any identical or phonetically similar marks that are already registered or pending. A proper search report analyzes the risk of objection and helps in deciding whether to proceed with the chosen name or modify it.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>2</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Filing the Application (Form TM-A)</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      The application is filed online using Form TM-A. You must provide details of the applicant, a clear representation of the mark (logo/word), the list of goods/services, and the user date (date of first use). If you are claiming prior use, a User Affidavit is mandatory. Once filed, you receive an official receipt with the application number, and you can start using the ™ symbol.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>3</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Vienna Codification</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If your trademark includes a logo or figurative elements, the Registry assigns it a Vienna Code based on the visual features (e.g., animals, shapes, celestial bodies). This is an internal process for indexing and searching purposes.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>4</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Examination & Objection</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      A Trademark Officer examines the application to check if it complies with the Trade Marks Act. They check for distinctiveness (Section 9) and similarity with existing marks (Section 11). If they find issues, they issue an Examination Report raising objections. The applicant must file a written legal reply within 30 days to overcome these objections.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>5</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Publication in Trademark Journal</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If the Registrar is satisfied with the application (or the reply to the objection), the mark is published in the official Trademark Journal. This serves as a public notice. For a period of 4 months, any third party can oppose the registration if they believe it infringes on their rights.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>6</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Registration & Certification</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If there is no opposition within 4 months, or if the opposition is decided in your favor, the Registrar issues the Registration Certificate. You can now use the ® symbol next to your brand name. The trademark is valid for 10 years from the date of filing.
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
                Complete List of Required Documents
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The documentation required depends on the type of applicant. Ensuring you have the correct documents ready can prevent delays.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">For Individuals & Sole Proprietors</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Logo/Mark:</strong> A high-resolution image of the logo (JPEG format) or the exact word mark.</li>
                    <li className="flex items-start gap-2">• <strong>Identity Proof:</strong> PAN Card, Aadhaar Card, Passport, or Voter ID of the proprietor.</li>
                    <li className="flex items-start gap-2">• <strong>Address Proof:</strong> Recent utility bill, bank statement, or Aadhaar card showing the business or residential address.</li>
                    <li className="flex items-start gap-2">• <strong>Form-48:</strong> Power of Attorney authorizing the trademark attorney to file on your behalf (no notarization required, just simple signature).</li>
                    <li className="flex items-start gap-2">• <strong>User Affidavit:</strong> If you have been using the mark prior to the application date, a notarized affidavit proving usage is required.</li>
                  </ul>
                </div>
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">For Companies, LLPs & Startups</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Registration Certificate:</strong> Certificate of Incorporation or Partnership Deed.</li>
                    <li className="flex items-start gap-2">• <strong>Udyam/Startup India Certificate:</strong> Mandatory to avail the 50% government fee concession for MSMEs and Startups.</li>
                    <li className="flex items-start gap-2">• <strong>Signatory's ID:</strong> ID and address proof of the authorized signatory (Director/Partner).</li>
                    <li className="flex items-start gap-2">• <strong>Board Resolution:</strong> A resolution authorizing the signatory to file the trademark application.</li>
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
                Many applicants skip the search phase, only to face rejection months later. A trademark search is not just a Google search; it is a specialized query of the Trademark Registry's database.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **What does a search reveal?**
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4 mb-4">
                <li>**Identical Marks:** Marks that are exactly the same as yours.</li>
                <li>**Phonetic Similarity:** Marks that sound the same (e.g., "Kwik" vs "Quick").</li>
                <li>**Visual Similarity:** Logos that look confusingly similar.</li>
                <li>**Well-known Marks:** Famous marks that are protected across all classes.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Conducting a search helps you assess the "registrability" of your mark. If the search reveals conflicts, you can tweak your brand name or logo before investing time and money in the application. It is the foundation of a successful registration strategy.
              </p>
            </div>
          </section>

          {/* Classes Section */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Classes Relevant to Goa's Economy
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Trademarks are registered under specific "Classes" of goods and services. There are 45 classes in total (1-34 for goods, 35-45 for services). Selecting the wrong class can leave your brand unprotected. Here are the most relevant classes for businesses in Goa:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { class: "Class 33", desc: "Alcoholic beverages (except beers). Essential for Feni, Urrack, and wine producers." },
                  { class: "Class 43", desc: "Services for providing food and drink; temporary accommodation. Crucial for Hotels, Resorts, Restaurants, Cafes, and Beach Shacks." },
                  { class: "Class 30", desc: "Coffee, tea, cocoa, rice, flour, bread, pastries, confectionery. Relevant for bakeries making Bebinca, Khaje, and spice traders." },
                  { class: "Class 5", desc: "Pharmaceuticals, medical and veterinary preparations. Vital for Goa's pharmaceutical manufacturing units." },
                  { class: "Class 39", desc: "Transport; packaging and storage of goods; travel arrangement. For Tour Operators, Taxi Services, and Logistics companies." },
                  { class: "Class 35", desc: "Advertising; business management; business administration; office functions. For Retail Stores, E-commerce, and Consultants." },
                  { class: "Class 42", desc: "Scientific and technological services and research and design relating thereto. For IT companies, Software Developers, and Tech Startups." },
                  { class: "Class 31", desc: "Agricultural, horticultural and forestry products. For Cashew, Mango (Mankurad), and Coconut farmers/traders." },
                  { class: "Class 41", desc: "Education; providing of training; entertainment; sporting and cultural activities. For Event Management, Water Sports, and Yoga Centers." }
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
                The path to registration is not always smooth. You may encounter hurdles in the form of Objections or Oppositions.
              </p>
              
              <h4 className="text-white font-nunito text-lg font-semibold mb-2 mt-4">Trademark Objection</h4>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                An objection is raised by the Trademark Registry itself during the examination phase. Common reasons include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/90 font-nunito text-sm ml-4 mb-3">
                <li>**Section 9 (Absolute Grounds):** The mark is not distinctive, is descriptive (e.g., "Best Pizza"), or hurts religious sentiments.</li>
                <li>**Section 11 (Relative Grounds):** The mark is similar to an already existing trademark on the register.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Solution:** You must file a comprehensive legal reply (Examination Report Reply) citing relevant case laws and evidence of usage to prove why your mark deserves registration.
              </p>

              <h4 className="text-white font-nunito text-lg font-semibold mb-2 mt-4">Trademark Opposition</h4>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                An opposition is filed by a third party (e.g., a competitor or another brand owner) after your mark is published in the journal. They may claim that your mark damages their brand or causes confusion.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                **Solution:** This initiates a quasi-judicial process involving counter-statements, evidence submission, and hearings. It is a legal battle that requires professional representation.
              </p>
            </div>
          </section>

          {/* Renewal Section */}
          <section id="renewal" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Renewal and Restoration
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A registered trademark is valid for **10 years**. To keep it active, you must renew it before the expiry date.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Renewal Window:** You can file for renewal up to 1 year before the expiry date.</li>
                <li>**Grace Period:** If you miss the deadline, you can still renew it within 6 months after expiry by paying a surcharge.</li>
                <li>**Restoration:** If you miss the grace period, the mark is removed from the register. However, it can be "restored" within 1 year of expiry through a specific legal process.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                Failure to renew results in the loss of all legal rights, allowing others to potentially register your brand name.
              </p>
            </div>
          </section>

          {/* Assignment Section */}
          <section id="assignment" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Assignment and Transmission of Trademarks
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Since a trademark is an asset, it can be sold, transferred, or licensed.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Assignment:** This refers to the permanent transfer of ownership (e.g., selling your brand to another company). It can be done with or without the goodwill of the business.</li>
                <li>**Transmission:** This occurs when a trademark is transferred by operation of law, such as through inheritance or during a company merger/acquisition.</li>
                <li>**Licensing:** You can allow others to use your trademark for a specific period or region in exchange for royalties, without transferring ownership.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                All such changes must be recorded with the Trademark Registry to be legally valid.
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Goa</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Register Your Trademark?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Secure your business identity today. Our experts specialize in trademark registration for Goan businesses and can guide you through every step.
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
                  "name": "Trademark Registration Service in Goa",
                  "image": "https://iprkaro.com/assets/images/trademark-service.jpg",
                  "description": "Professional trademark registration services in Goa."
                },
                "author": {
                  "@type": "Person",
                  "name": "Savio Fernandes"
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
