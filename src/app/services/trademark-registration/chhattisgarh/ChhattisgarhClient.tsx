'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function ChhattisgarhClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Registration in Chhattisgarh: An Overview' },
      { id: 'importance', title: 'Why Trademark Registration is Vital for Chhattisgarh Businesses' },
      { id: 'benefits', title: 'Strategic Benefits of Brand Protection' },
      { id: 'eligibility', title: 'Who Can Apply for a Trademark in Chhattisgarh?' },
      { id: 'process', title: 'Step-by-Step Registration Process' },
      { id: 'documents', title: 'Required Documents for Filing' },
      { id: 'search', title: 'The Critical Role of Trademark Search' },
      { id: 'classes', title: 'Key Trademark Classes for Chhattisgarh Industries' },
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

  const faqs = [
    {
      question: "How to register a trademark in Chhattisgarh?",
      answer: "To register a trademark in Chhattisgarh, businesses can file an application online through the IP India portal. The state falls under the jurisdiction of the Mumbai Trademark Registry. The process involves a trademark search, filing Form TM-A, examination, publication, and final registration."
    },
    {
      question: "Which Trademark Registry covers Chhattisgarh?",
      answer: "Chhattisgarh falls under the jurisdiction of the Trademark Registry in Mumbai. However, all filings and correspondence can be handled online, eliminating the need for physical visits to Mumbai for most routine matters."
    },
    {
      question: "What are the key industries for trademarks in Chhattisgarh?",
      answer: "Key industries seeking trademark protection in Chhattisgarh include Steel & Power (Bhilai/Korba), Cement, Mining, Rice Processing (Dhamtari/Raipur), and the growing Service sector in Naya Raipur."
    },
    {
      question: "Can I file a trademark for my rice mill brand?",
      answer: "Yes, trademarking rice brands is very common in Chhattisgarh. You would typically file under Class 30 (Rice, Spices, etc.). It helps protect your brand identity in the wholesale and retail markets across India."
    },
    {
      question: "Is MSME registration helpful for trademark filing in Chhattisgarh?",
      answer: "Yes, having a Udyam (MSME) registration allows businesses in Chhattisgarh to avail a 50% rebate on government trademark filing fees, reducing the cost from ₹9,000 to ₹4,500 per class."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Chhattisgarh"
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
              <span className="text-[#FFB703] font-medium">Chhattisgarh</span>
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
                Trademark Registration in Chhattisgarh: Secure Your Brand
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
                Chhattisgarh, often referred to as the "Rice Bowl of India" and the "Power Hub," is a state of immense economic potential. From the bustling steel plants of Bhilai and the power stations of Korba to the rapidly developing smart city of Naya Raipur, the state is witnessing a surge in industrial and commercial activity. In this dynamic environment, where traditional industries like mining and agriculture coexist with modern sectors like IT and services, establishing a unique brand identity is crucial.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Trademark registration in Chhattisgarh is the legal shield that protects your brand's reputation and market value. Whether you are a rice miller in Dhamtari, a steel manufacturer in Raigarh, or a tech startup in Raipur, securing your intellectual property rights ensures that your hard earned goodwill remains exclusively yours. This comprehensive guide details everything you need to know about registering a trademark in Chhattisgarh, from the process and documents to the strategic benefits for your business.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Registration in Chhattisgarh: An Overview
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a distinctive sign that identifies certain goods or services as those produced or provided by a specific person or enterprise. It can be a name, logo, slogan, sound, or even a smell. In India, the **Trade Marks Act, 1999** governs the registration and protection of trademarks.
              </p>
              <h3 className="text-white font-nunito text-xl font-semibold mb-2 mt-4">Jurisdiction: The Mumbai Connection</h3>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                The Trade Marks Registry in India is divided into five zones based on geography. Chhattisgarh falls under the jurisdiction of the **Mumbai Trademark Registry**.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Address of the Appropriate Office:**<br />
                Trade Marks Registry,<br />
                Boudhik Sampada Bhawan,<br />
                S. M. Road, Antop Hill,<br />
                Mumbai – 400037.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Digital Advantage:** Despite the registry being in Mumbai, businesses in Chhattisgarh do not need to travel there. The entire process, from filing the application (Form TM-A) to responding to objections and receiving the registration certificate, is conducted online through the IP India portal. This digital infrastructure has made trademark registration accessible to businesses in even the most remote parts of the state.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                A registered trademark is valid for **10 years** and can be renewed indefinitely, making it a perpetual asset for your business.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Trademark Registration is Vital for Chhattisgarh Businesses
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Chhattisgarh's economy is diverse, ranging from heavy industries to agriculture and services. Here is why trademark protection is essential for key sectors in the state:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Steel & Heavy Industries</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    For the ancillary units in Bhilai, Raipur, and Raigarh supplying to major PSUs and international markets, a trademark builds credibility. It assures buyers of the quality and origin of the industrial goods, distinguishing them from substandard local alternatives.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Rice & Food Processing</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    With Chhattisgarh being a major rice producer, there are thousands of rice mills in Dhamtari and surrounding areas. Branding non-basmati aromatic rice varieties and processed food products is key to capturing the retail market. A trademark protects these brands from imitation.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Mining & Logistics Services</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Companies providing mining consultancy, logistics, and equipment rental services need service marks to establish their corporate identity. In a competitive B2B market, a strong brand name signifies reliability and professionalism.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Startups & IT in Naya Raipur</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Naya Raipur is emerging as a smart city and IT hub. Tech startups need to protect their software names, app icons, and logos early on. Intellectual property valuation is often a key factor for attracting venture capital funding.
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
                Registering your trademark is a strategic move that offers long term advantages:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Exclusive Rights", icon: "fas fa-gavel", desc: "You get the sole right to use the mark across India. You can take legal action against anyone using a confusingly similar mark." },
                  { title: "Trust & Reputation", icon: "fas fa-handshake", desc: "A registered trademark signals that your business is established and follows legal norms, building trust with customers and partners." },
                  { title: "Intangible Asset", icon: "fas fa-coins", desc: "Your trademark is an asset that appreciates over time. It can be sold, franchised, or used as collateral for loans." },
                  { title: "Deterrent to Copycats", icon: "fas fa-shield-alt", desc: "The public record of your registration warns potential infringers to stay away from your brand name." },
                  { title: "Global Expansion", icon: "fas fa-globe", desc: "Your Indian registration can be the basis for filing international trademark applications under the Madrid Protocol." },
                  { title: "Use of ® Symbol", icon: "fas fa-registered", desc: "You can legally use the ® symbol, which adds a layer of professionalism and prestige to your brand." }
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
                Who Can Apply for a Trademark in Chhattisgarh?
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The eligibility is broad, covering various types of entities operating in the state:
              </p>
              <ul className="space-y-3 text-white/90 font-nunito text-sm">
                <li className="flex items-start gap-2">
                  <i className="fas fa-user text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Individuals & Sole Proprietors:</strong>
                    <p className="text-xs text-white/70 mt-1">Small shop owners, consultants, and freelancers.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-building text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Private Limited Companies:</strong>
                    <p className="text-xs text-white/70 mt-1">Startups and established businesses in industrial areas like Urla and Siltara.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-users text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Partnership Firms & LLPs:</strong>
                    <p className="text-xs text-white/70 mt-1">Joint ventures in construction, mining, and trading.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-university text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>NGOs and Trusts:</strong>
                    <p className="text-xs text-white/70 mt-1">Organizations working in social sectors or education.</p>
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
                The process is streamlined but requires attention to detail. Here is how it works:
              </p>
              <div className="relative space-y-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'rgba(255, 183, 3, 0.3)', opacity: 0.5 }} />
                
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>1</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Trademark Search</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      Before filing, we conduct a thorough search on the IP India database to ensure your proposed mark is not identical or similar to existing marks. This step is crucial to avoid objections.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>2</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Application Filing (Form TM-A)</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      We prepare and file the application online. This includes details of the applicant, the mark, the class of goods/services, and the user date (date of first use). An application number is generated immediately.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>3</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Examination</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      The Registrar examines the application for compliance with the Act. They check for distinctiveness and conflicts with other marks. If there are issues, an Examination Report is issued, which must be replied to within 30 days.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>4</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Publication</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If the application is accepted, it is published in the Trademark Journal. This gives the public an opportunity (4 months) to oppose the registration if they believe it infringes on their rights.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>5</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Registration</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If there is no opposition, or if the opposition is decided in your favor, the Registrar issues the Registration Certificate. The mark is now registered for 10 years.
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
                Having the right documents ready speeds up the process:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">Individual / Sole Proprietor</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Logo/Mark:</strong> Soft copy of the logo (JPEG) or word mark.</li>
                    <li className="flex items-start gap-2">• <strong>Identity Proof:</strong> PAN Card, Aadhaar Card, or Passport.</li>
                    <li className="flex items-start gap-2">• <strong>Address Proof:</strong> Recent utility bill or bank statement.</li>
                    <li className="flex items-start gap-2">• <strong>Form-48:</strong> Signed Power of Attorney.</li>
                    <li className="flex items-start gap-2">• <strong>User Affidavit:</strong> If claiming prior usage.</li>
                  </ul>
                </div>
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">Company / LLP / Startup</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Incorporation Certificate:</strong> Or Partnership Deed.</li>
                    <li className="flex items-start gap-2">• <strong>Udyam/Startup Certificate:</strong> Mandatory for 50% fee rebate.</li>
                    <li className="flex items-start gap-2">• <strong>Signatory's ID:</strong> ID and address proof of the Director/Partner.</li>
                    <li className="flex items-start gap-2">• <strong>Board Resolution:</strong> Authorizing the signatory.</li>
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
                A trademark search is the foundation of a successful application. It involves checking the registry for identical or phonetically similar marks that are already registered or pending.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Why is it important?**
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4 mb-4">
                <li>**Avoids Rejection:** Helps you identify potential conflicts before spending money on filing fees.</li>
                <li>**Saves Time:** Prevents months of delay caused by objections based on similarity.</li>
                <li>**Legal Safety:** Ensures you don't inadvertently infringe on someone else's rights.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Our team uses advanced search tools to provide a comprehensive report on the registrability of your mark.
              </p>
            </div>
          </section>

          {/* Classes Section */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Key Trademark Classes for Chhattisgarh Industries
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Choosing the right class is vital. Here are the most relevant classes for businesses in Chhattisgarh:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { class: "Class 6", desc: "Common metals and their alloys. Essential for steel manufacturers in Bhilai and Raigarh." },
                  { class: "Class 19", desc: "Building materials (non-metallic). Crucial for the cement industry." },
                  { class: "Class 30", desc: "Rice, spices, and flour. The primary class for rice mills and food processors." },
                  { class: "Class 35", desc: "Advertising, business management, and retail services. For shops, malls, and consultants." },
                  { class: "Class 37", desc: "Building construction and repair. For construction companies and contractors." },
                  { class: "Class 42", desc: "Scientific and technological services. For IT companies and startups in Naya Raipur." },
                  { class: "Class 7", desc: "Machines and machine tools. For heavy engineering units." },
                  { class: "Class 31", desc: "Agricultural, horticultural and forestry products. For agri-businesses." },
                  { class: "Class 39", desc: "Transport and storage. For logistics and warehousing companies." }
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
                Challenges can arise during the registration process.
              </p>
              
              <h4 className="text-white font-nunito text-lg font-semibold mb-2 mt-4">Trademark Objection</h4>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                This is raised by the Registry if the mark violates the Trade Marks Act (e.g., it is descriptive or similar to an existing mark). You must file a legal reply justifying why your mark should be registered.
              </p>

              <h4 className="text-white font-nunito text-lg font-semibold mb-2 mt-4">Trademark Opposition</h4>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                This is filed by a third party (competitor or brand owner) who feels your mark damages their rights. This leads to a legal proceeding where both sides present evidence.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Professional legal assistance is highly recommended to navigate these hurdles successfully.
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
                To keep your rights alive, you must renew your trademark.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Validity:** 10 years from the date of application.</li>
                <li>**Renewal:** Can be done every 10 years indefinitely.</li>
                <li>**Window:** You can file for renewal 1 year before the expiry date.</li>
                <li>**Consequence:** Failure to renew leads to the removal of the mark from the register.</li>
              </ul>
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
                Trademarks are transferable assets.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Assignment:** You can sell your trademark to another party. This is common during business acquisitions.</li>
                <li>**Licensing:** You can allow others to use your mark (e.g., franchising) in exchange for royalties.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                These agreements must be recorded with the Registry to be legally binding on third parties.
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
                Why Choose IPRKaro for Trademark Registration in Chhattisgarh?
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
                We simplify the complex legal process for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Expert Guidance", desc: "Our team understands the specific needs of Chhattisgarh's industries, from steel to rice." },
                  { title: "Transparent Pricing", desc: "No hidden costs. We offer affordable packages suitable for MSMEs and startups." },
                  { title: "Comprehensive Support", desc: "We handle everything: search, filing, objection replies, and renewal." },
                  { title: "Digital Convenience", desc: "Complete the entire process online without visiting any office." },
                  { title: "High Success Rate", desc: "Our thorough search and accurate filing minimize the chances of rejection." },
                  { title: "Dedicated Manager", desc: "Get a dedicated relationship manager to keep you updated on your application status." }
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
                  name: "Suresh Patel",
                  location: "Raipur",
                  rating: 5,
                  text: "Excellent trademark registration service in Raipur. The team handled everything professionally and got my manufacturing brand registered smoothly. Very satisfied."
                },
                {
                  name: "Anita Verma",
                  location: "Bhilai",
                  rating: 5,
                  text: "Great experience with trademark services in Bhilai. They provided complete guidance and successfully handled all documentation. Highly recommended for Chhattisgarh businesses."
                },
                {
                  name: "Rahul Tiwari",
                  location: "Bilaspur",
                  rating: 5,
                  text: "Professional service in Bilaspur. They helped me register my herbal product brand and overcame objections effectively. Very good support."
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Chhattisgarh</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Secure Your Intellectual Property?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't leave your brand vulnerable. Our experts in Chhattisgarh specialize in trademark registration and can guide you through every step of the process.
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
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Frequently Asked Questions (FAQs)
              </h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((item, index) => (
                <div 
                  key={index}
                  className="rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.01]"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                      <span className="text-white font-nunito text-base md:text-lg font-semibold pr-4">
                        {item.question}
                      </span>
                      <span className="transition-transform duration-300 group-open:rotate-180">
                        <i className="fas fa-chevron-down text-[#FFB703]"></i>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <div className="h-px w-full bg-white/10 mb-4"></div>
                      <p className="text-white/80 font-nunito text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
