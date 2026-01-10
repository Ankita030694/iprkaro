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

export default function TamilNaduClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Overview' },
      { id: 'why-tamil-nadu', title: 'Why Register in Tamil Nadu' },
      { id: 'benefits', title: 'Key Benefits' },
      { id: 'eligibility', title: 'Eligibility Criteria' },
      { id: 'process', title: 'Registration Process' },
      { id: 'documents', title: 'Required Documents' },
      { id: 'search', title: 'Trademark Search' },
      { id: 'classes', title: 'Trademark Classes' },
      { id: 'timeline', title: 'Timeline' },
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
          blogTitle="Trademark Registration in Tamil Nadu"
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
          
          {/* Breadcrumbs */}
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
              <span className="text-[#FFB703] font-medium">Tamil Nadu</span>
            </div>
          </section>

          {/* Hero Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full relative" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }}>
                <div className="absolute inset-0 rounded-full animate-ping" style={{ background: '#FFB703', opacity: 0.4 }} />
              </div>
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Trademark Registration in Tamil Nadu: <span className="text-[#FFB703]">Complete Guide 2025</span>
              </h1>
            </div>
            
            <div className="p-6 lg:p-8 rounded-2xl backdrop-blur-md" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/95 font-nunito text-lg leading-relaxed mb-4">
                Tamil Nadu, a powerhouse of industrial and economic activity in South India, is home to a vibrant ecosystem of manufacturing, textiles, automobiles, and information technology. From the bustling streets of Chennai to the textile hubs of Tiruppur and Coimbatore, businesses are increasingly recognizing the value of intellectual property. Securing a trademark registration in Tamil Nadu is the first definitive step towards protecting your brand identity, building consumer trust, and establishing a monopoly over your unique trade name or logo.
              </p>
              <p className="text-white/95 font-nunito text-lg leading-relaxed">
                This comprehensive guide details the nuances of trademark registration specifically for businesses in Tamil Nadu. We cover the procedural requirements at the Chennai Trademark Registry, the specific benefits for local industries, and how to navigate the legal landscape to secure your brand effectively.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section id="overview" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Overview of Trademark Registration in Tamil Nadu</h2>
            </div>
            <div className="p-6 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                A trademark is a unique identifier, be it a word, logo, symbol, sound, or even a specific color combination, that distinguishes your goods or services from those of your competitors. In India, the Trade Marks Act, 1999, governs the registration and protection of trademarks. For businesses in Tamil Nadu, the process is administered by the <strong>Trademark Registry, Chennai</strong>, located in Guindy. This office holds jurisdiction not only over Tamil Nadu but also neighboring southern states.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Registering your trademark provides you with the exclusive legal right to use the mark in connection with the goods or services for which it is registered. It empowers you to take legal action against anyone who attempts to copy or misuse your brand, thereby safeguarding your market reputation and goodwill. Whether you are a software startup in OMR, Chennai, or a heavy engineering firm in Coimbatore, a registered trademark is a critical asset.
              </p>
            </div>
          </section>

          {/* Why Register in Tamil Nadu */}
          <section id="why-tamil-nadu" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Why Tamil Nadu Businesses Need Trademark Protection</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl" style={{ background: 'rgba(255, 183, 3, 0.05)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                <h3 className="text-white font-nunito text-xl font-bold mb-3 flex items-center gap-2">
                  <i className="fas fa-industry text-[#FFB703]"></i> Industrial Leadership
                </h3>
                <p className="text-white/90 font-nunito text-sm leading-relaxed">
                  Tamil Nadu is often called the "Detroit of India" due to its massive automobile industry. It is also a global leader in textiles and garments (Tiruppur) and pumps and motors (Coimbatore). In such highly competitive manufacturing sectors, a brand name is often the primary differentiator. Trademark registration ensures that your hard-earned reputation is not exploited by counterfeiters or imitators.
                </p>
              </div>
              <div className="p-5 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 className="text-white font-nunito text-xl font-bold mb-3 flex items-center gap-2">
                  <i className="fas fa-laptop-code text-[#FFB703]"></i> IT & SaaS Hub
                </h3>
                <p className="text-white/90 font-nunito text-sm leading-relaxed">
                  Chennai is a major SaaS capital. For software and service-based companies, the brand name is the product. Protecting your software name, logo, and service marks prevents confusion in the digital marketplace and is crucial for attracting international investors who value protected IP.
                </p>
              </div>
              <div className="p-5 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 className="text-white font-nunito text-xl font-bold mb-3 flex items-center gap-2">
                  <i className="fas fa-store text-[#FFB703]"></i> Retail & E-commerce
                </h3>
                <p className="text-white/90 font-nunito text-sm leading-relaxed">
                  With the boom in e-commerce and D2C brands in Tamil Nadu, online visibility is paramount. A registered trademark allows you to enroll in Amazon Brand Registry and other platform-specific protection programs, giving you control over your product listings and preventing unauthorized sellers.
                </p>
              </div>
              <div className="p-5 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 className="text-white font-nunito text-xl font-bold mb-3 flex items-center gap-2">
                  <i className="fas fa-balance-scale text-[#FFB703]"></i> Legal Recourse
                </h3>
                <p className="text-white/90 font-nunito text-sm leading-relaxed">
                  The Madras High Court has a dedicated Intellectual Property Division (IPD), making the enforcement of trademark rights in Tamil Nadu faster and more specialized. A registered trademark is a prerequisite for filing infringement suits and obtaining injunctions effectively.
                </p>
              </div>
            </div>

            {/* Unique Tamil Nadu Content: Chennai IP Hub & GI Registry */}
            <div className="mt-6 p-5 rounded-xl border border-[#FFB703]/30 bg-[#FFB703]/5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#FFB703]/20 text-[#FFB703]">
                  <i className="fas fa-landmark text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-nunito text-lg font-bold mb-2">The IP Capital of the South</h3>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    <strong>Did you know?</strong> Chennai is often called the "Intellectual Property Capital of South India." It houses the <strong>Head Office of the Geographical Indications (GI) Registry</strong> for the entire country. Tamil Nadu leads India in GI tags (e.g., Kancheepuram Silk, Thanjavur Paintings). This rich culture of IP protection makes the <strong>Chennai Trademark Registry</strong> one of the most efficient and active offices in the nation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section id="benefits" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Key Benefits of Registration</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Exclusive Rights", desc: "Sole ownership of the mark nationwide.", icon: "fas fa-crown" },
                { title: "Asset Value", desc: "Intangible asset that appreciates over time.", icon: "fas fa-chart-line" },
                { title: "Trust & Credibility", desc: "Builds customer confidence in your quality.", icon: "fas fa-handshake" },
                { title: "Legal Protection", desc: "Right to sue for infringement.", icon: "fas fa-gavel" },
                { title: "Global Access", desc: "Basis for international registration.", icon: "fas fa-globe" },
                { title: "Deterrence", desc: "Warns off potential copycats.", icon: "fas fa-ban" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(255, 183, 3, 0.15)', color: '#FFB703' }}>
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="text-white font-nunito font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section id="eligibility" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Who Can Apply?</h2>
            </div>
            <div className="p-6 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 mb-4">In Tamil Nadu, any individual or business entity claiming to be the proprietor of a trademark can apply. This includes:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {["Individuals (Sole Proprietors)", "Partnership Firms", "Private Limited Companies", "Limited Liability Partnerships (LLPs)", "Trusts and Societies", "Joint Owners", "Foreign Companies"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/80">
                    <i className="fas fa-check text-[#FFB703] text-xs"></i> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Registration Process */}
          <section id="process" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Registration Process in Tamil Nadu</h2>
            </div>
            <div className="space-y-4">
              {[
                { step: "1", title: "Trademark Search", desc: "Conduct a thorough search in the IP India database to ensure your mark is unique." },
                { step: "2", title: "Filing Application (Form TM-A)", desc: "Submit the application online or at the Chennai Registry with required fees." },
                { step: "3", title: "Examination", desc: "The Registrar examines the application for any discrepancies or objections." },
                { step: "4", title: "Publication", desc: "If accepted, the mark is published in the Trademark Journal for 4 months." },
                { step: "5", title: "Registration", desc: "If no opposition is filed, the registration certificate is issued." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[#0C002B]" style={{ background: '#FFB703' }}>{item.step}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section id="documents" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Required Documents</h2>
            </div>
            <div className="p-6 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#FFB703] font-bold mb-3">For Individuals/Sole Proprietors</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Copy of Logo/Trademark</li>
                    <li>• Identity Proof (Aadhaar/PAN/Passport)</li>
                    <li>• Address Proof</li>
                    <li>• User Affidavit (if claiming prior use)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#FFB703] font-bold mb-3">For Companies/LLPs</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Certificate of Incorporation/Partnership Deed</li>
                    <li>• MSME/Startup Certificate (for fee concession)</li>
                    <li>• Signed Form TM-48 (Power of Attorney)</li>
                    <li>• Identity Proof of Signatory</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Trademark Classes */}
          <section id="classes" className="mb-12 scroll-mt-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Relevant Trademark Classes for Tamil Nadu</h2>
            </div>
            <div className="p-6 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 mb-4">Choosing the right class is vital. Here are common classes for Tamil Nadu's key industries:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { class: "Class 24", label: "Textiles", desc: "Fabrics, bed covers (Tiruppur/Coimbatore)" },
                  { class: "Class 25", label: "Clothing", desc: "Readymade garments, footwear, headgear" },
                  { class: "Class 12", label: "Automobiles", desc: "Vehicles, apparatus for locomotion (Chennai)" },
                  { class: "Class 7", label: "Machinery", desc: "Pumps, motors, agricultural implements" },
                  { class: "Class 42", label: "IT Services", desc: "Software development, SaaS, technology services" },
                  { class: "Class 35", label: "Retail/Business", desc: "Advertising, business management, retail stores" }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded border border-white/10 bg-white/5">
                    <span className="text-[#FFB703] font-bold block">{item.class}</span>
                    <span className="text-white font-semibold block">{item.label}</span>
                    <span className="text-white/60 text-xs">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <div className="relative overflow-hidden p-8 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)', border: '2px solid rgba(255, 183, 3, 0.3)' }}>
              <div className="relative z-10">
                <h2 className="text-white font-nunito text-3xl font-bold mb-4">Ready to Protect Your Brand in Tamil Nadu?</h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">Don't leave your intellectual property vulnerable. Our experts at IPRKaro can guide you through the entire registration process at the Chennai Registry.</p>
                <Link href="/contact" className="inline-block px-8 py-3 rounded-full font-bold text-[#0C002B] transition-transform hover:scale-105" style={{ background: 'linear-gradient(90deg, #FFB703, #FFA000)' }}>
                  Start Registration Now
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <FaqSection />
          </section>

        </div>
      </div>
    </div>
  );
}
