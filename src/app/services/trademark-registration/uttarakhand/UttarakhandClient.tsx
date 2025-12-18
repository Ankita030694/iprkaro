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

export default function UttarakhandClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Registration in Uttarakhand: An Overview' },
      { id: 'importance', title: 'Why Trademark Registration is Crucial for Uttarakhand Businesses' },
      { id: 'benefits', title: 'Strategic Benefits of Brand Protection' },
      { id: 'eligibility', title: 'Who Can Apply for a Trademark in Uttarakhand?' },
      { id: 'process', title: 'Step-by-Step Registration Process' },
      { id: 'documents', title: 'Required Documents for Filing' },
      { id: 'search', title: 'The Importance of a Trademark Search' },
      { id: 'classes', title: 'Key Trademark Classes for Uttarakhand Industries' },
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
          blogTitle="Trademark Registration in Uttarakhand"
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
              <span className="text-[#FFB703] font-medium">Uttarakhand</span>
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
                    { "@type": "ListItem", "position": 4, "name": "Uttarakhand", "item": "https://iprkaro.com/services/trademark-registration/uttarakhand" }
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
                Trademark Registration in Uttarakhand: Secure Your Brand
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
                Uttarakhand, known as "Devbhoomi" or the Land of Gods, is a state of immense natural beauty and spiritual significance. But beyond its Himalayan peaks and holy rivers lies a rapidly growing economy. From the industrial hubs of Pantnagar and Haridwar to the thriving tourism and wellness centers in Rishikesh and Nainital, Uttarakhand is witnessing a surge in entrepreneurial activity. The state's focus on organic farming, AYUSH (Ayurveda, Yoga, Unani, Siddha, and Homeopathy), and hydroelectric power has created a unique business ecosystem. In such a diverse market, your brand identity is your most valuable asset.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Trademark registration in Uttarakhand is the essential legal step to protect this asset. It grants you the exclusive right to use your brand name, logo, or slogan, safeguarding it from imitation and misuse. Whether you run a luxury resort in Mussoorie, an organic tea estate in Kausani, or a pharmaceutical unit in SIDCUL, registering your trademark ensures that the reputation you build remains yours alone. This comprehensive guide explores the trademark registration landscape in Uttarakhand, covering the process, benefits, and specific relevance to the state's key industries.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Registration in Uttarakhand: An Overview
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a distinctive sign that identifies certain goods or services as those produced or provided by a specific person or enterprise. In India, the **Trade Marks Act, 1999** provides the legal framework for the registration and protection of trademarks. This central legislation ensures that a trademark registered in Uttarakhand is valid across all 28 states and 8 union territories of India.
              </p>
              <h3 className="text-white font-nunito text-xl font-semibold mb-2 mt-4">Jurisdiction: The Delhi Registry</h3>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For administrative purposes, the Trade Marks Registry is divided into five zones. Uttarakhand falls under the jurisdiction of the **Delhi Trademark Registry**.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Address of the Appropriate Office:**<br />
                Trade Marks Registry,<br />
                Boudhik Sampada Bhawan,<br />
                Plot No. 32, Sector 14, Dwarka,<br />
                New Delhi – 110078.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Digital Advantage:** Despite the physical office being in Delhi, the entire registration process is online. Entrepreneurs in Dehradun, Haldwani, or remote hill stations can file applications, respond to objections, and receive certificates digitally. The Controller General of Patents, Designs, and Trademarks (CGPDTM) manages this efficient e-filing system.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Once registered, a trademark is valid for **10 years** and can be renewed indefinitely. It serves as a badge of origin and quality, crucial for building consumer trust.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Trademark Registration is Crucial for Uttarakhand Businesses
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Uttarakhand's economy is unique, driven by tourism, wellness, and specialized manufacturing. Here’s why trademark protection is vital for these specific sectors:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Tourism & Hospitality</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    With millions of pilgrims visiting Char Dham and tourists flocking to hill stations, the hospitality sector is highly competitive. Hotels, resorts, and adventure tour operators need registered trademarks to prevent brand dilution. A unique name ensures that tourists book the right "Hotel Paradise" and not a subpar copycat.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Yoga & Wellness (AYUSH)</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Rishikesh is the "Yoga Capital of the World." Yoga schools, ashrams, and Ayurvedic centers attract global clientele. Protecting the name of your yoga school or wellness brand is critical to maintaining its international reputation and preventing unauthorized use by others.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Pharmaceuticals & Manufacturing</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    The SIDCUL industrial estates in Pantnagar and Haridwar host major pharma and auto-component companies. For these businesses, trademarks protect product names and corporate identities, ensuring that their high-quality goods are not confused with counterfeits in the market.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Organic & Agri-Products</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Uttarakhand is famous for organic produce like Basmati rice, Rajma, and honey. While GI tags protect regional specialties, individual producers need trademarks to build their own brand equity. A registered brand helps in commanding a premium price in domestic and export markets.
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
                Registering your trademark offers more than just legal safety; it is a smart business move:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Exclusive Ownership", icon: "fas fa-gavel", desc: "You get the sole right to use the mark nationwide. You can legally stop others from using a similar mark." },
                  { title: "Brand Reputation", icon: "fas fa-star", desc: "A registered trademark builds trust. It signals to customers that you are a serious business committed to quality." },
                  { title: "Intangible Asset", icon: "fas fa-coins", desc: "Trademarks can grow in value over time. They can be sold, franchised, or used as collateral for securing business loans." },
                  { title: "Legal Protection", icon: "fas fa-shield-alt", desc: "The registration certificate is prima facie evidence of your ownership, making it easier to win legal battles against infringers." },
                  { title: "Global Expansion", icon: "fas fa-globe", desc: "Your Indian registration can serve as the basis for filing trademark applications in other countries under the Madrid Protocol." },
                  { title: "Deterrent Effect", icon: "fas fa-ban", desc: "The public record of your trademark warns potential infringers to stay away, preventing disputes before they happen." }
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
                Who Can Apply for a Trademark in Uttarakhand?
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The Trade Marks Act allows various entities to own intellectual property. In Uttarakhand, common applicants include:
              </p>
              <ul className="space-y-3 text-white/90 font-nunito text-sm">
                <li className="flex items-start gap-2">
                  <i className="fas fa-user text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Individuals & Sole Proprietors:</strong>
                    <p className="text-xs text-white/70 mt-1">Local artisans, homestay owners, yoga instructors, and small shopkeepers.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-building text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Private Limited Companies:</strong>
                    <p className="text-xs text-white/70 mt-1">Manufacturing units in SIDCUL, tech startups in Dehradun.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-users text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Partnership Firms & LLPs:</strong>
                    <p className="text-xs text-white/70 mt-1">Tour operators, law firms, and joint ventures in hospitality.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-hand-holding-heart text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>NGOs & Trusts:</strong>
                    <p className="text-xs text-white/70 mt-1">Charitable organizations, educational trusts, and ashrams.</p>
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
                The registration workflow is standardized across India. Here is the step-by-step journey:
              </p>
              <div className="relative space-y-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'rgba(255, 183, 3, 0.3)', opacity: 0.5 }} />
                
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>1</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Trademark Search</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      Before filing, conduct a comprehensive search on the IP India database. This helps identify identical or similar marks that could block your application. A proper search report assesses the risk of objection and saves time and money.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>2</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Filing Application (Form TM-A)</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      File the application online using Form TM-A. You need to provide applicant details, a clear image of the mark, goods/services description, and user date. Upon filing, you get an application number and can start using the ™ symbol.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>3</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Vienna Codification</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If your mark includes a logo, the Registry assigns a Vienna Code based on its figurative elements. This is an internal indexing step for search purposes.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>4</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Examination</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      The Registrar examines the application for compliance with the Trade Marks Act. They check for distinctiveness and similarity with existing marks. If issues are found, an Examination Report is issued, which must be replied to within 30 days.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>5</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Publication</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If accepted, the mark is published in the Trademark Journal. This invites third parties to oppose the registration within 4 months if they believe it infringes their rights.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>6</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Registration</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If no opposition is filed (or if it is decided in your favor), the Registration Certificate is issued. You can now use the ® symbol. The mark is valid for 10 years.
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
                Having the correct documents ready ensures a hassle-free filing process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">Individual / Sole Proprietor</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Logo/Mark:</strong> Soft copy of the logo (JPEG) or word mark.</li>
                    <li className="flex items-start gap-2">• <strong>Identity Proof:</strong> PAN Card, Aadhaar Card, or Passport.</li>
                    <li className="flex items-start gap-2">• <strong>Address Proof:</strong> Recent utility bill or bank statement.</li>
                    <li className="flex items-start gap-2">• <strong>Form-48:</strong> Signed Power of Attorney (no legalization needed).</li>
                    <li className="flex items-start gap-2">• <strong>User Affidavit:</strong> Only if claiming prior usage of the mark.</li>
                  </ul>
                </div>
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">Company / LLP / Startup</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Incorporation Certificate:</strong> Or Partnership Deed.</li>
                    <li className="flex items-start gap-2">• <strong>Udyam/Startup Certificate:</strong> Mandatory for claiming 50% fee rebate.</li>
                    <li className="flex items-start gap-2">• <strong>Signatory's ID:</strong> ID and address proof of the Director/Partner.</li>
                    <li className="flex items-start gap-2">• <strong>Board Resolution:</strong> Authorizing the signatory to file.</li>
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
                Skipping the search phase is a common mistake. A trademark search is a specialized query of the Trademark Registry's database to find identical or phonetically similar marks.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Why is it important?**
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4 mb-4">
                <li>**Avoids Rejection:** Identifies conflicts early, allowing you to modify your brand name if needed.</li>
                <li>**Saves Money:** Prevents you from spending on government fees for a mark that is likely to be refused.</li>
                <li>**Legal Safety:** Ensures you are not infringing on someone else's rights, avoiding potential lawsuits.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Our team conducts a thorough search and provides a detailed report on the registrability of your mark before filing.
              </p>
            </div>
          </section>

          {/* Classes Section */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Key Trademark Classes for Uttarakhand Industries
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Trademarks are categorized into 45 classes. Choosing the correct class is vital. Here are the most relevant classes for Uttarakhand's economy:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { class: "Class 43", desc: "Services for providing food and drink; temporary accommodation. Essential for Hotels, Resorts, Homestays, and Cafes." },
                  { class: "Class 41", desc: "Education; providing of training; sporting and cultural activities. Crucial for Yoga Schools, Adventure Sports, and Trekking Agencies." },
                  { class: "Class 5", desc: "Pharmaceuticals, medical and veterinary preparations. Vital for Pharma companies in SIDCUL and Ayurvedic product manufacturers." },
                  { class: "Class 30", desc: "Coffee, tea, rice, flour, honey, spices. For producers of Basmati Rice, Organic Honey, and Local Spices." },
                  { class: "Class 35", desc: "Advertising; business management; retail services. For Shops, E-commerce stores selling local crafts, and Consultants." },
                  { class: "Class 3", desc: "Bleaching preparations; soaps; perfumery; essential oils; cosmetics. For Herbal and Aromatic product manufacturers." },
                  { class: "Class 31", desc: "Agricultural, horticultural and forestry products. For Organic Farms and Seed producers." },
                  { class: "Class 32", desc: "Beers; mineral and aerated waters and other non-alcoholic beverages. For Mineral Water plants and Juice manufacturers." },
                  { class: "Class 39", desc: "Transport; packaging and storage of goods; travel arrangement. For Tour Operators and Logistics companies." }
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
                The path to registration can sometimes face hurdles.
              </p>
              
              <h4 className="text-white font-nunito text-lg font-semibold mb-2 mt-4">Trademark Objection</h4>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Raised by the Examiner during the examination stage. It could be due to lack of distinctiveness (Section 9) or similarity to existing marks (Section 11).
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Response:** You must file a legal reply within 30 days, arguing why your mark should be accepted. If the reply is satisfactory, the mark is accepted; otherwise, a hearing is scheduled.
              </p>

              <h4 className="text-white font-nunito text-lg font-semibold mb-2 mt-4">Trademark Opposition</h4>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Filed by a third party after the mark is published in the journal. They may claim your mark hurts their business or causes confusion.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                **Response:** This initiates a legal proceeding involving counter-statements and evidence. It requires professional legal handling to defend your rights.
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
                Trademark protection is not a one-time event; it requires maintenance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Validity:** 10 years from the date of application.</li>
                <li>**Renewal:** Can be done every 10 years indefinitely.</li>
                <li>**Timeline:** Renewal requests can be filed 1 year before expiry.</li>
                <li>**Grace Period:** 6 months after expiry (with a surcharge).</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                If not renewed, the mark is removed from the register, and you lose your exclusive rights.
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
                Your trademark is a transferable asset.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Assignment:** Selling your trademark to another entity (e.g., during a business acquisition). It can be done with or without goodwill.</li>
                <li>**Licensing:** Granting permission to others to use your mark (e.g., franchising your hotel brand) in return for royalties.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                All assignments and licenses must be recorded with the Registry to be effective against third parties.
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Uttarakhand</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Secure Your Intellectual Property?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't leave your brand vulnerable. Our experts in Uttarakhand specialize in trademark registration and can guide you through every step of the process.
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
                  "name": "Trademark Registration Service in Uttarakhand",
                  "image": "https://iprkaro.com/assets/images/trademark-service.jpg",
                  "description": "Professional trademark registration services in Uttarakhand."
                },
                "author": {
                  "@type": "Person",
                  "name": "Ramesh Singh"
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
