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

export default function ChandigarhClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Registration in Chandigarh: An Overview' },
      { id: 'importance', title: 'Why Trademark Registration is Vital for Chandigarh Businesses' },
      { id: 'benefits', title: 'Strategic Benefits of Brand Protection' },
      { id: 'eligibility', title: 'Who Can Apply for a Trademark in Chandigarh?' },
      { id: 'process', title: 'Step-by-Step Registration Process' },
      { id: 'documents', title: 'Required Documents for Filing' },
      { id: 'search', title: 'The Critical Role of Trademark Search' },
      { id: 'classes', title: 'Key Trademark Classes for Chandigarh Industries' },
      { id: 'objections', title: 'Handling Objections and Oppositions' },
      { id: 'renewal', title: 'Trademark Renewal and Maintenance' },
      { id: 'assignment', title: 'Trademark Assignment and Licensing' },
      { id: 'why-choose-us', title: 'Why Choose IPRKaro?' },
      { id: 'testimonials', title: 'Client Testimonials' },
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
          blogTitle="Trademark Registration in Chandigarh"
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
              <span className="text-[#FFB703] font-medium">Chandigarh</span>
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
                Trademark Registration in Chandigarh: Protect Your Innovation
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
                Chandigarh, renowned as "The City Beautiful," is a unique urban experiment that serves as the capital for both Punjab and Haryana while being a Union Territory itself. Beyond its architectural marvels and planned infrastructure, Chandigarh has emerged as a robust economic powerhouse in North India. With the Rajiv Gandhi Chandigarh Technology Park (RGCTP) driving the IT revolution and the Industrial Area Phase I & II hosting a myriad of manufacturing units, the city is a melting pot of traditional businesses and modern startups. In such a thriving commercial ecosystem, establishing a distinct brand identity is not just an option, it is a necessity.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Trademark registration in Chandigarh is the legal fortress that guards your brand against infringement and counterfeiting. Whether you are a tech startup in the IT Park, a boutique in Sector 17, or a manufacturer in the Industrial Area, securing your intellectual property rights is the first step towards building a sustainable business legacy. This comprehensive guide explores the intricacies of trademark registration in Chandigarh, detailing the process, legal framework, and the immense value it adds to your business assets.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Registration in Chandigarh: An Overview
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a visual symbol, which may be a word, name, device, label, or numeral, used by a business to distinguish its goods or services from other similar goods or services originating from a different business. In India, the **Trade Marks Act, 1999** governs the registration and protection of trademarks. This central act ensures that a trademark registered in Chandigarh is valid and enforceable across the entire country.
              </p>
              <h3 className="text-white font-nunito text-xl font-semibold mb-2 mt-4">Jurisdiction: The Delhi Connection</h3>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                The Trade Marks Registry in India operates through five jurisdictional zones. Chandigarh, being a Union Territory in North India, falls under the jurisdiction of the **Delhi Trademark Registry**.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Address of the Appropriate Office:**<br />
                Trade Marks Registry,<br />
                Boudhik Sampada Bhawan,<br />
                Plot No. 32, Sector 14, Dwarka,<br />
                New Delhi – 110078.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Digital Transformation:** While the physical registry is in Delhi, the entire registration process is digital. The Controller General of Patents, Designs, and Trademarks (CGPDTM) has established a robust online filing system. This means entrepreneurs in Chandigarh can file applications, reply to examination reports, and receive certificates without ever visiting Delhi. The digital process is efficient, transparent, and time saving.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Once registered, a trademark is valid for **10 years** and can be renewed indefinitely. It becomes an intangible asset that adds valuation to your company's balance sheet.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Trademark Registration is Vital for Chandigarh Businesses
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Chandigarh boasts the highest per capita income in the country and a highly literate population. The consumer base here is brand conscious and quality oriented. Here’s why specific sectors in Chandigarh need trademark protection:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">IT & ITES Sector</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    With the Rajiv Gandhi Chandigarh Technology Park hosting giants like Infosys and Tech Mahindra, along with numerous startups, the IT sector is booming. For software companies, the brand name and product names are critical assets. Trademark registration protects software titles, app icons, and corporate identities from theft in the digital space.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Education & Coaching</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Chandigarh is a major education hub for North India, attracting students from Punjab, Haryana, and Himachal Pradesh. Coaching institutes and educational centers rely heavily on their reputation. A registered trademark prevents unauthorized use of your institute's name, ensuring that students are not misled by copycat centers.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Retail & Hospitality</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    From the upscale markets of Sector 17 to the vibrant Elante Mall, retail is a key driver. Restaurants, cafes, and boutiques need trademarks to protect their unique names and logos. In a city known for its food culture, protecting your restaurant's brand is as important as the quality of your food.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Manufacturing & MSMEs</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    The Industrial Area houses units manufacturing tractors, basic metals, and auto parts. For these B2B businesses, a trademark signifies quality and reliability to vendors and partners. It is essential for building trust in the supply chain.
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
                Registering your trademark is an investment that pays dividends in multiple ways:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Legal Exclusivity", icon: "fas fa-gavel", desc: "You gain the exclusive right to use the mark nationwide. You can legally stop others from using a similar mark." },
                  { title: "Brand Value & Goodwill", icon: "fas fa-chart-line", desc: "A registered trademark builds trust. It signals to customers that you are a legitimate and established business." },
                  { title: "Asset Creation", icon: "fas fa-coins", desc: "Trademarks are intellectual property assets. They can be sold, franchised, or used as collateral for securing business loans." },
                  { title: "Protection Against Infringement", icon: "fas fa-shield-alt", desc: "The registration certificate is prima facie evidence of your ownership, making it easier to win legal battles against infringers." },
                  { title: "Global Registration Basis", icon: "fas fa-globe", desc: "Your Indian registration can serve as the basis for filing trademark applications in other countries under the Madrid Protocol." },
                  { title: "Use of ® Symbol", icon: "fas fa-registered", desc: "You can proudly display the ® symbol next to your logo, which enhances your brand's professional image." }
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
                Who Can Apply for a Trademark in Chandigarh?
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Any person or entity claiming to be the proprietor of a trademark can apply. In Chandigarh, the common applicants include:
              </p>
              <ul className="space-y-3 text-white/90 font-nunito text-sm">
                <li className="flex items-start gap-2">
                  <i className="fas fa-user text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Individuals & Sole Proprietorships:</strong>
                    <p className="text-xs text-white/70 mt-1">Freelancers, consultants, shop owners in Sector 17/22, and small business owners.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-building text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Private Limited Companies:</strong>
                    <p className="text-xs text-white/70 mt-1">Startups and established corporate entities in the IT Park and Industrial Areas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-users text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Partnership Firms & LLPs:</strong>
                    <p className="text-xs text-white/70 mt-1">Law firms, architectural firms (Le Corbusier's legacy inspires many), and joint ventures.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-university text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Educational Trusts & Societies:</strong>
                    <p className="text-xs text-white/70 mt-1">Schools, colleges, and coaching institutes.</p>
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
                The registration process is systematic and transparent. Here is the roadmap from application to certification:
              </p>
              <div className="relative space-y-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'rgba(255, 183, 3, 0.3)', opacity: 0.5 }} />
                
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>1</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Trademark Search</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      The first and most crucial step is to conduct a comprehensive search on the IP India database. This checks for identical or similar marks already registered or pending. A thorough search minimizes the risk of objection and rejection later in the process.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>2</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Application Filing (Form TM-A)</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      Once the name is cleared, the application is filed online using Form TM-A. Essential details like applicant info, logo, goods/services description, and user date must be accurate. Upon filing, an official receipt with the application number is generated instantly.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>3</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Vienna Codification</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      For trademarks containing logos or figurative elements, the Registry assigns a Vienna Code. This is an international classification of the figurative elements of marks, used for indexing and searching.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>4</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Examination</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      The Registrar examines the application to ensure it complies with the Trade Marks Act. They check for distinctiveness and similarity with existing marks. If discrepancies are found, an Examination Report is issued. The applicant must reply to this report within 30 days.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>5</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Publication</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If the application is accepted, it is published in the Trademark Journal. This serves as a public notice, inviting third parties to oppose the registration if they believe it infringes on their rights. The opposition period lasts for 4 months.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>6</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Registration</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If there is no opposition (or if the opposition is decided in your favor), the Registrar issues the Registration Certificate. The trademark is now officially registered for 10 years.
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
                To ensure a smooth filing process, keep the following documents ready:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">Individual / Sole Proprietor</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Logo/Mark:</strong> Soft copy of the logo (JPEG) or word mark.</li>
                    <li className="flex items-start gap-2">• <strong>Identity Proof:</strong> PAN Card, Aadhaar Card, or Passport of the applicant.</li>
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
                    <li className="flex items-start gap-2">• <strong>Board Resolution:</strong> Authorizing the signatory to file the application.</li>
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
                The Critical Role of Trademark Search
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A common mistake many applicants make is skipping the search phase. A trademark search is not just about checking Google; it involves querying the Trademark Registry's database for identical and phonetically similar marks.
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
                Key Trademark Classes for Chandigarh Industries
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Trademarks are categorized into 45 classes. Choosing the correct class is vital for protection. Here are the most relevant classes for Chandigarh's economy:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { class: "Class 42", desc: "Scientific and technological services; software development. Essential for IT companies in RGCTP." },
                  { class: "Class 35", desc: "Advertising; business management; retail services. Crucial for shops, malls, and consultants." },
                  { class: "Class 41", desc: "Education; providing of training; entertainment. For coaching centers, schools, and event managers." },
                  { class: "Class 5", desc: "Pharmaceuticals and medical preparations. Relevant for pharma companies (often with units in nearby Baddi)." },
                  { class: "Class 43", desc: "Services for providing food and drink. For restaurants, cafes, and hotels in Sector 17/26/35." },
                  { class: "Class 9", desc: "Computer software; mobile apps; electronic devices. For tech startups and electronics manufacturers." },
                  { class: "Class 25", desc: "Clothing, footwear, headgear. For fashion boutiques and apparel brands." },
                  { class: "Class 12", desc: "Vehicles; apparatus for locomotion. For auto parts manufacturers in Industrial Area." },
                  { class: "Class 36", desc: "Insurance; financial affairs; real estate affairs. For property consultants and financial advisors." }
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
                Handling Objections and Oppositions
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
                <li>**Licensing:** Granting permission to others to use your mark (e.g., franchising your restaurant brand) in return for royalties.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                All assignments and licenses must be recorded with the Registry to be effective against third parties.
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
                Why Choose IPRKaro for Trademark Registration in Chandigarh?
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
                Navigating the legal intricacies of trademark registration can be challenging. IPRKaro offers a seamless, technology driven solution tailored for businesses in Chandigarh.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Expert Team", desc: "Our team comprises experienced trademark attorneys and agents who understand the nuances of IP law." },
                  { title: "Affordable Pricing", desc: "We offer transparent and competitive pricing with no hidden charges, suitable for startups and MSMEs." },
                  { title: "End-to-End Support", desc: "From the initial search to final registration and renewal, we handle everything." },
                  { title: "High Success Rate", desc: "Our thorough search and meticulous filing process ensure a high probability of registration." },
                  { title: "Personalized Service", desc: "We understand that every business is unique and provide tailored advice." },
                  { title: "Digital Process", desc: "Complete the entire process from the comfort of your home or office in Chandigarh." }
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
                  name: "Manish Kapoor",
                  location: "Chandigarh",
                  rating: 5,
                  text: "Excellent trademark service in Chandigarh. The team was very professional and helped me register my startup brand quickly. Great support throughout the process."
                },
                {
                  name: "Simran Kaur",
                  location: "Mohali",
                  rating: 5,
                  text: "Great experience with trademark registration. They handled everything professionally and got my brand registered without any issues. Highly recommended for Chandigarh businesses."
                },
                {
                  name: "Rohit Verma",
                  location: "Panchkula",
                  rating: 5,
                  text: "Professional and efficient service. They guided me through the entire trademark registration process and successfully handled objections. Very satisfied."
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Chandigarh</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Secure Your Intellectual Property?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't leave your brand vulnerable. Our experts in Chandigarh specialize in trademark registration and can guide you through every step of the process.
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
