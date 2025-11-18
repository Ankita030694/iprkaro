'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function DelhiClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    // Define sections for TOC
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Overview of Trademark Registration' },
      { id: 'why-register', title: 'Why Register in Delhi' },
      { id: 'benefits', title: 'Key Benefits' },
      { id: 'eligibility', title: 'Eligibility Criteria' },
      { id: 'registration-process', title: 'Registration Process' },
      { id: 'required-documents', title: 'Required Documents' },
      { id: 'trademark-search', title: 'Trademark Search Process' },
      { id: 'classes', title: 'Trademark Classes Guide' },
      { id: 'timeline', title: 'Registration Timeline' },
      { id: 'post-registration', title: 'Post-Registration Steps' },
      { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
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

  const faqs = [
    {
      question: "How do I register a trademark in Delhi?",
      answer: "To register a trademark in Delhi, follow these steps: 1) Conduct a thorough trademark search through the IP India portal to verify availability, 2) Prepare all necessary documents including identity proof, business documents, and trademark representation, 3) File Form TM-A online through the IP India website or seek professional assistance, 4) Track your application through examination, publication, and opposition stages, 5) Respond promptly to any objections raised by the Trademark Examiner, 6) Once approved, your trademark will be published in the Trademark Journal for opposition, and 7) If no opposition arises within four months, you will receive your registration certificate. The entire process typically takes 12 to 18 months."
    },
    {
      question: "What documents are needed for trademark registration in Delhi?",
      answer: "Essential documents for trademark registration in Delhi include: Applicant identity proof such as Aadhar card, PAN card, passport, or driving license, Address proof including utility bills or rental agreement, Business registration documents like Certificate of Incorporation for companies or Partnership Deed for partnerships, Clear representation of your trademark in JPG or PNG format with high resolution, Description of goods or services covered by the trademark, Power of Attorney on Form TM-48 if filing through a trademark agent or attorney, and User affidavit if claiming prior use of the trademark. All documents should be self-attested and clearly scanned for online submission."
    },
    {
      question: "Can I file trademark application online from Delhi?",
      answer: "Yes, trademark applications can be filed completely online from Delhi through the official IP India portal at ipindiaservices.gov.in. The online filing process offers several advantages including faster processing, instant acknowledgment, lower government fees, convenient document upload, online payment options, and real-time application tracking. You need to create an account on the IP India portal, fill Form TM-A with accurate details, upload all required documents, and make online payment. The entire process can be completed from your home or office in Delhi without visiting the trademark office."
    },
    {
      question: "How long does trademark registration take in Delhi?",
      answer: "Trademark registration in Delhi typically takes 12 to 18 months from application filing to certificate issuance. The timeline breaks down as follows: Application filing and acknowledgment takes 1 to 2 weeks, Examination by the Trademark Registry takes 8 to 12 months, Response to objections if any takes 1 to 2 months, Publication in Trademark Journal takes 1 to 2 months after acceptance, Opposition period lasts 4 months from publication date, and Certificate issuance takes 1 to 2 months after opposition period concludes. The actual timeline may vary depending on objections, oppositions, workload at the registry, and complexity of your application."
    },
    {
      question: "What are the benefits of registering trademark in Delhi?",
      answer: "Registering a trademark in Delhi provides multiple benefits: Exclusive legal rights to use your mark across India, not just Delhi, Legal protection against infringement and unauthorized use by competitors, Ability to take legal action and claim damages against infringers, Enhanced brand credibility and market recognition in the competitive Delhi NCR market, Valuable intangible asset that adds to your business valuation, Licensing and franchising opportunities to generate additional revenue, Deterrent effect preventing others from using similar marks, Priority claim if you expand to international markets through Madrid Protocol, Easy access to Delhi Trademark Office for any physical requirements, and Strong foundation for building long-term brand equity in one of India's largest business hubs."
    },
    {
      question: "Which trademark office handles Delhi applications?",
      answer: "Trademark applications from Delhi are handled by the Trade Marks Registry located at Baudhik Sampada Bhawan in New Delhi. This office has jurisdiction over Delhi, Haryana, Himachal Pradesh, Jammu and Kashmir, Punjab, Chandigarh, and Uttarakhand. However, with the online filing system through IP India portal, applicants from Delhi can file applications electronically without physically visiting the office. For queries or physical submissions, you can visit the Delhi Trademark Office during working hours. The office processes applications, conducts examinations, issues examination reports, publishes accepted marks, handles oppositions, and issues registration certificates."
    },
    {
      question: "Can startups in Delhi get any benefits for trademark registration?",
      answer: "Yes, startups in Delhi recognized under the Startup India program receive significant benefits for trademark registration. The benefits include 50 percent rebate on trademark application fees, making it more affordable, Fast-track examination facility for quicker processing, Panel of facilitators providing free professional assistance for filing and prosecution, Exemption from showing proof of use for first three years, and Access to Intellectual Property Rights facilitation cell for guidance. To avail these benefits, your startup must be registered with the Department for Promotion of Industry and Internal Trade and have a valid recognition certificate. These benefits make trademark protection more accessible and affordable for Delhi-based startups and entrepreneurs."
    },
    {
      question: "What happens if my trademark application gets objected in Delhi?",
      answer: "If your trademark application receives an objection from the Examiner in Delhi, you must respond within 30 days from the date of objection notice. Common objections include similarity with existing marks, lack of distinctiveness, descriptive nature of the mark, or procedural deficiencies. To respond effectively: Carefully analyze the objection grounds mentioned in the examination report, Prepare a comprehensive reply addressing each objection with legal arguments and evidence, Cite relevant case laws and legal precedents supporting your position, Provide evidence of use, acquired distinctiveness, or coexistence agreements if applicable, File the response within the stipulated time through the IP India portal, and Request a hearing if necessary to present your case personally. Professional legal assistance significantly improves chances of overcoming objections successfully."
    },
    {
      question: "Can I use TM symbol before registration in Delhi?",
      answer: "Yes, you can use the TM symbol immediately after filing your trademark application in Delhi, even before registration is complete. The TM symbol indicates that you are claiming rights to the mark as a trademark, though it is not yet registered. However, you cannot use the registered trademark symbol R in a circle until your trademark registration is complete and you receive the registration certificate. Using the R symbol without registration is a legal offense and may attract penalties. Once your trademark is successfully registered, you should switch from TM to R symbol to indicate registered trademark status and gain full legal protection."
    },
    {
      question: "Do I need a lawyer for trademark registration in Delhi?",
      answer: "While hiring a lawyer or trademark agent is not mandatory for trademark registration in Delhi, professional assistance is highly recommended for several reasons: Trademark attorneys conduct comprehensive searches to identify potential conflicts, ensure proper class selection to provide complete protection, draft applications accurately to avoid objections, handle examination objections with legal expertise and case law citations, manage opposition proceedings effectively if someone challenges your application, save time and reduce chances of errors or rejections, provide strategic advice on trademark portfolio management, and offer ongoing support for renewals, infringement actions, and licensing. The investment in professional services often prevents costly mistakes and significantly improves registration success rates, especially for businesses serious about brand protection in the competitive Delhi market."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {/* Table of Contents */}
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Delhi"
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
              <span className="text-[#FFB703] font-medium">Delhi</span>
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
                Trademark Registration in Delhi: Complete Guide for 2025
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
                Delhi, as the national capital and a thriving business center of India, hosts thousands of startups, established businesses, and entrepreneurs who understand the critical importance of protecting their brand identity. The Delhi NCR region, encompassing Gurugram, Noida, Ghaziabad, and Faridabad, represents one of the country's largest commercial ecosystems, making trademark registration essential for competitive advantage and legal protection.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                This detailed guide covers everything you need to know about trademark registration in Delhi, including the complete registration process, required documentation, eligibility criteria, timeline expectations, post-registration maintenance, common pitfalls to avoid, and professional assistance options. Whether you operate a tech startup in Connaught Place, a manufacturing unit in Okhla, or a retail business in Karol Bagh, understanding trademark registration is fundamental to securing your brand's future.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Understanding Trademark Registration in Delhi
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
                A trademark represents any distinctive sign, symbol, word, phrase, design, logo, or combination that identifies and distinguishes your goods or services from those offered by competitors. In India, trademarks are governed by the Trademarks Act of 1999, which provides comprehensive legal framework for registration, protection, and enforcement of trademark rights. The Office of the Controller General of Patents, Designs and Trademarks under the Ministry of Commerce and Industry administers trademark registrations throughout India.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                When you register a trademark in Delhi through the Trade Marks Registry at Baudhik Sampada Bhawan, you secure nationwide protection that extends across all Indian states and territories. The Delhi Trademark Office has jurisdiction over applications from Delhi, Haryana, Punjab, Himachal Pradesh, Jammu and Kashmir, Chandigarh, and Uttarakhand, serving as a key hub for intellectual property protection in North India.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Trademark registration grants you exclusive legal rights to use your mark in connection with specified goods or services, prevents unauthorized use by others, provides legal recourse against infringement, and establishes your brand as a valuable business asset. For businesses operating in Delhi's competitive market across sectors like technology, e-commerce, manufacturing, healthcare, education, hospitality, and professional services, trademark protection is not optional but essential for long-term success and brand building.
              </p>
            </div>
          </section>

          {/* Why Register in Delhi */}
          <section id="why-register" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Delhi Businesses Need Trademark Registration
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
                Delhi's business landscape presents unique challenges and opportunities that make trademark registration particularly important. The national capital region witnesses intense competition across all business sectors, with new ventures launching daily and established players constantly innovating. In this environment, your brand name, logo, and identity are your most valuable assets that differentiate you from competitors and create lasting customer relationships.
              </p>

              <div className="space-y-3 mb-4">
                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-building text-[#FFB703]" aria-hidden="true"></i>
                    Strategic Business Hub
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Delhi serves as headquarters for numerous national and international companies, government institutions, and emerging startups. This concentration of business activity makes brand protection critical, as similar sounding or looking marks can easily cause market confusion. Registered trademarks help establish clear brand identity and prevent customer confusion in crowded marketplaces like Connaught Place, Nehru Place, Chandni Chowk, and emerging business districts.
                  </p>
                </div>

                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-rocket text-[#FFB703]" aria-hidden="true"></i>
                    Startup Ecosystem
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Delhi NCR ranks among India's top startup ecosystems, with thriving tech hubs in sectors like fintech, edtech, healthtech, logistics, and consumer services. For startups seeking venture capital funding or participating in accelerator programs, registered trademarks demonstrate professionalism, protect investor interests, and increase business valuation. Many investors specifically look for trademark registration as part of due diligence before funding decisions.
                  </p>
                </div>

                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-gavel text-[#FFB703]" aria-hidden="true"></i>
                    Legal Protection Framework
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Delhi houses important judicial forums including Delhi High Court, which has specialized Intellectual Property Rights Division for trademark disputes. Having a registered trademark strengthens your legal position significantly when enforcing rights against infringers, passing-off cases, or defending against opposition. The Delhi High Court has delivered numerous landmark judgments protecting registered trademark owners and granting injunctions against infringers.
                  </p>
                </div>

                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-globe text-[#FFB703]" aria-hidden="true"></i>
                    International Expansion Gateway
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Many Delhi-based businesses use the city as a launchpad for national and international expansion. A registered trademark in India serves as foundation for international trademark protection through treaties like Madrid Protocol, enabling you to extend protection to multiple countries efficiently. As you scale beyond Delhi NCR to other Indian states or overseas markets, your trademark registration provides consistent brand protection.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
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
                Key Benefits of Trademark Registration for Delhi Businesses
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
                    icon: "fas fa-certificate",
                    title: "Exclusive Ownership Rights",
                    description: "Registration grants you exclusive nationwide rights to use your trademark for specified goods or services. No other entity can legally use an identical or deceptively similar mark within the same class, providing complete monopoly over your brand identity."
                  },
                  {
                    icon: "fas fa-shield-alt",
                    title: "Strong Legal Protection",
                    description: "Registered trademarks receive stronger legal protection compared to unregistered marks. You can file infringement suits, seek statutory damages, obtain injunctions, and enforce rights more effectively through civil and criminal remedies available under the Trademarks Act."
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Enhanced Brand Value",
                    description: "A registered trademark adds tangible value to your business as an intangible asset. It enhances brand credibility, builds customer trust, differentiates you from competitors, and contributes significantly to overall business valuation for funding, mergers, or acquisition purposes."
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Licensing Revenue Streams",
                    description: "Registered trademarks can be licensed to other businesses, creating additional revenue streams without operational involvement. Franchising opportunities also expand significantly with registered trademarks, as franchisees gain confidence from protected intellectual property."
                  },
                  {
                    icon: "fas fa-search",
                    title: "Market Visibility",
                    description: "Registered trademarks appear in official databases, enhancing your market presence and professional image. The R symbol alongside your brand signals established presence, legal compliance, and serious commitment to business, attracting quality customers and business partners."
                  },
                  {
                    icon: "fas fa-ban",
                    title: "Deterrent Against Infringement",
                    description: "Registration creates strong deterrent effect, discouraging others from adopting similar marks. Potential infringers think twice before using marks similar to registered trademarks due to legal consequences, reducing instances of brand confusion and unauthorized use."
                  },
                  {
                    icon: "fas fa-stamp",
                    title: "Legal Presumption of Ownership",
                    description: "Registered trademarks carry legal presumption of ownership and validity. In disputes, the burden shifts to the opposing party to prove otherwise, simplifying legal proceedings and reducing the need to establish prior use or reputation separately."
                  },
                  {
                    icon: "fas fa-sync",
                    title: "Perpetual Protection",
                    description: "Trademarks can be renewed indefinitely every ten years, providing perpetual protection for your brand. Unlike patents or copyrights that expire after fixed periods, trademarks continue protecting your brand as long as you maintain and renew registration."
                  },
                  {
                    icon: "fas fa-balance-scale",
                    title: "Border Protection Rights",
                    description: "Registered trademark owners can record their marks with Customs authorities to prevent import of counterfeit goods. This provides additional layer of protection against parallel imports and counterfeit products entering Indian markets through Delhi ports and borders."
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

          {/* Eligibility Section */}
          <section id="eligibility" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Eligibility Criteria for Trademark Registration in Delhi
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
                The Trademarks Act provides broad eligibility for trademark registration, allowing diverse entities to protect their brands. Understanding who can apply and what types of marks qualify for registration helps ensure smooth application process.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-users text-[#FFB703]" aria-hidden="true"></i>
                    Eligible Applicants
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Individual proprietors and sole traders",
                      "Partnership firms registered or unregistered",
                      "Private Limited and Public Limited Companies",
                      "Limited Liability Partnerships (LLPs)",
                      "Hindu Undivided Families (HUFs)",
                      "Trusts and Societies registered under applicable laws",
                      "Foreign individuals and companies",
                      "Joint applicants with common interest",
                      "Government departments and statutory bodies"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/90 font-nunito text-sm">
                        <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-tag text-[#FFB703]" aria-hidden="true"></i>
                    Registrable Mark Types
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Wordmarks - brand names and taglines",
                      "Device marks - logos and graphics",
                      "Composite marks - combination of words and devices",
                      "Three-dimensional marks - product shapes",
                      "Sound marks - distinctive audio signatures",
                      "Color marks - specific color combinations",
                      "Service marks - for service businesses",
                      "Collective marks - for associations",
                      "Certification marks - quality standards"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/90 font-nunito text-sm">
                        <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-info-circle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Important Note:</strong> The applicant must have a genuine intention to use the trademark in connection with goods or services. Applications can be filed on "proposed to be used" basis even before actual commercial use begins, which is particularly beneficial for startups and new ventures in Delhi.
                </p>
              </div>
            </div>
          </section>

          {/* Registration Process */}
          <section id="registration-process" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Complete Trademark Registration Process in Delhi
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
                    step: "Comprehensive Trademark Search",
                    description: "Begin with thorough trademark search across official databases, business directories, domain registrations, and social media platforms. Search for identical and phonetically similar marks in your product or service class to assess registration prospects. Professional search reports analyze legal risks and suggest modifications if needed. This critical step prevents application rejection and future legal disputes with existing trademark owners."
                  },
                  {
                    step: "Class Selection and Specification",
                    description: "Identify appropriate classes from the 45-class Nice Classification system covering your goods or services. Classes 1 to 34 cover products while Classes 35 to 45 cover services. Draft precise specifications describing goods or services clearly and comprehensively. Proper class selection ensures adequate protection scope and avoids future limitations. Professional assistance helps identify all relevant classes for comprehensive brand protection."
                  },
                  {
                    step: "Document Preparation and Organization",
                    description: "Compile all required documents including identity proofs, business registration certificates, address proofs, and trademark representation. Ensure high-quality trademark logo in prescribed format with clear visibility and appropriate dimensions. Prepare Power of Attorney on Form TM-48 if filing through authorized agent. Organize documents systematically for smooth online submission and quick processing."
                  },
                  {
                    step: "Online Application Filing (Form TM-A)",
                    description: "File trademark application through IP India portal at ipindiaservices.gov.in after creating user account. Fill Form TM-A with accurate applicant details, trademark representation, class selection, and goods or services specification. Upload all supporting documents in prescribed format. Review application thoroughly before final submission to avoid errors and objections. Make online payment of prescribed government fees based on applicant category."
                  },
                  {
                    step: "Application Acknowledgment and Journal Publication",
                    description: "Receive acknowledgment with unique application number within 1 to 2 weeks of successful filing. The application number allows tracking status online through IP India portal. Your application details are published in the Trademark Journal, making it publicly available for inspection. This initial publication allows third parties to monitor new applications and identify potential conflicts with their marks."
                  },
                  {
                    step: "Examination by Trademark Registry",
                    description: "A designated Trademark Examiner reviews your application for compliance with legal requirements, distinctiveness, and conflicts with existing marks. The examination process takes 8 to 12 months typically. If the Examiner identifies issues, an Examination Report lists objections that must be addressed. Common objections include similarity with existing marks, lack of distinctiveness, or specification issues."
                  },
                  {
                    step: "Responding to Examination Objections",
                    description: "If objections are raised, prepare comprehensive reply within 30 days addressing each ground of objection. Include legal arguments, supporting case laws, evidence of use, distinctiveness proof, or consent letters as applicable. Request personal hearing if needed to present your case before the Examiner. Professional legal assistance significantly improves chances of overcoming objections successfully. The Examiner reviews your response and decides whether to accept or maintain rejection."
                  },
                  {
                    step: "Acceptance and Journal Publication",
                    description: "Upon acceptance after initial examination or after successfully overcoming objections, your trademark is published in the Trademark Journal for public opposition. This publication invites objections from any person who believes your trademark conflicts with their rights. The mark remains open for opposition for four months from publication date in the Journal."
                  },
                  {
                    step: "Opposition Period Monitoring",
                    description: "During the four-month opposition window, any person can file opposition against your trademark registration. If opposition is filed, you receive notice and must file counter-statement defending your application. The opposition process involves submitting evidence, attending hearings, and legal arguments. If no opposition is filed within four months, your application proceeds to registration. Successfully defended oppositions also lead to registration."
                  },
                  {
                    step: "Registration Certificate Issuance",
                    description: "After completing all stages without opposition or after successfully defending opposition, the Trademark Registry issues registration certificate. The certificate confirms your exclusive rights to use the trademark throughout India for registered goods or services. Registration is effective from the original application filing date, providing retroactive protection. You can now use the R symbol with your trademark indicating registered status."
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

          {/* Required Documents */}
          <section id="required-documents" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Required Documents for Trademark Registration in Delhi
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
                Proper documentation is crucial for smooth trademark registration process. Here is a comprehensive list of documents required based on applicant type:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Identity Proof of Applicant",
                    icon: "fas fa-id-card",
                    items: [
                      "Aadhar Card with clear photograph",
                      "PAN Card issued by Income Tax Department",
                      "Passport (valid Indian or foreign passport)",
                      "Driving License issued by RTO",
                      "Voter ID Card",
                      "Any government-issued photo identification"
                    ]
                  },
                  {
                    title: "Address Proof Documentation",
                    icon: "fas fa-home",
                    items: [
                      "Recent electricity or water bill (within 3 months)",
                      "Property tax receipt or ownership documents",
                      "Registered rental or lease agreement",
                      "Bank statement with address (within 3 months)",
                      "Telephone or internet bill",
                      "Aadhar card with current address"
                    ]
                  },
                  {
                    title: "Business Entity Documents",
                    icon: "fas fa-building",
                    items: [
                      "Certificate of Incorporation (for companies)",
                      "Partnership Deed (for partnerships)",
                      "LLP Agreement (for LLPs)",
                      "Trust Deed (for trusts and societies)",
                      "GST Registration Certificate",
                      "Udyam Registration Certificate (if applicable)"
                    ]
                  },
                  {
                    title: "Trademark Representation",
                    icon: "fas fa-image",
                    items: [
                      "High-resolution logo in JPG or PNG format",
                      "Wordmark in standard font if text only",
                      "Clear image with minimum 300 DPI resolution",
                      "Color specifications if claiming color",
                      "Multiple views for 3D marks",
                      "Transliteration for non-English text"
                    ]
                  },
                  {
                    title: "Authorization Documents",
                    icon: "fas fa-file-signature",
                    items: [
                      "Power of Attorney on Form TM-48",
                      "Authorization letter on company letterhead",
                      "Board resolution authorizing filing",
                      "Signed and notarized where required",
                      "Applicant signature on all pages",
                      "Digital signature certificate (for online filing)"
                    ]
                  },
                  {
                    title: "Additional Supporting Documents",
                    icon: "fas fa-folder-open",
                    items: [
                      "User affidavit if claiming prior use",
                      "Evidence of first use date and place",
                      "Consent letter from similar mark owner",
                      "Priority documents for convention applications",
                      "Translation of foreign language marks",
                      "Series application details if applicable"
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
                      <i className={`${doc.icon} text-[#FFB703] text-sm`} aria-hidden="true"></i>
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

              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-lightbulb text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Pro Tip:</strong> Keep all documents in digital format with high-quality scans. Color scans are preferable for better clarity. Ensure all documents are valid, recent, and clearly visible. Self-attest all documents before uploading. Organize documents in a dedicated folder for easy access during application filing.
                </p>
              </div>
            </div>
          </section>

          {/* Trademark Search Section */}
          <section id="trademark-search" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Conducting Effective Trademark Search in Delhi
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
                Trademark search is the most critical preliminary step before filing application. Comprehensive search helps avoid application rejection, legal disputes, and rebranding costs. Here is how to conduct effective trademark search:
              </p>

              <div className="space-y-3">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-search text-[#FFB703]" aria-hidden="true"></i>
                    Official Trademark Database Search
                  </h3>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed mb-2">
                    Access the official trademark search at ipindiaservices.gov.in and search for identical and similar marks. Use different search criteria including wordmark search, Vienna code search for devices, phonetic search for sound-alike marks, and class-wise search. Check both registered marks and pending applications. Search across all classes, not just your intended class, as some marks enjoy cross-class protection.
                  </p>
                </div>

                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-globe text-[#FFB703]" aria-hidden="true"></i>
                    Commercial and Online Search
                  </h3>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed mb-2">
                    Search for business names in directories like Justdial, Indiamart, and Google My Business for Delhi businesses. Check domain name availability through WHOIS databases and domain registrars. Review social media platforms including Facebook, Instagram, Twitter, and LinkedIn for existing brand presence. Search e-commerce platforms like Amazon, Flipkart, and Myntra for product listings. This comprehensive commercial search identifies common law rights and unregistered mark usage.
                  </p>
                </div>

                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-chart-bar text-[#FFB703]" aria-hidden="true"></i>
                    Analysis and Risk Assessment
                  </h3>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Analyze search results for phonetic similarity, visual similarity, and conceptual similarity with existing marks. Assess likelihood of confusion based on mark similarity, goods or services similarity, and trade channels overlap. Evaluate priority dates of conflicting marks and their registration status. Consider geographical market presence and reputation of similar marks. Professional trademark search reports provide detailed risk analysis and registration success probability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trademark Classes */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Understanding Trademark Classes for Delhi Applications
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
                The Nice Classification system divides all goods and services into 45 international classes. Proper class selection is critical for adequate trademark protection and avoiding future limitations. Here is a guide to important classes relevant for Delhi businesses:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3">
                    Popular Goods Classes (1-34)
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 3:</strong> Cosmetics, toiletries, cleaning products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 5:</strong> Pharmaceuticals, dietary supplements, medical products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 9:</strong> Software, mobile apps, electronics, computers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 25:</strong> Clothing, footwear, fashion accessories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 29:</strong> Processed foods, dairy products, meat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 30:</strong> Bakery products, snacks, beverages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 32:</strong> Non-alcoholic beverages, mineral water</span>
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
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3">
                    Important Services Classes (35-45)
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 35:</strong> Advertising, marketing, business management, retail services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 36:</strong> Financial services, banking, insurance, real estate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 41:</strong> Education, training, entertainment, sports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 42:</strong> IT services, software development, technical consulting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 43:</strong> Restaurant services, catering, hotel services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 44:</strong> Medical services, healthcare, beauty treatments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 45:</strong> Legal services, security services, personal services</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-exclamation-triangle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Important:</strong> You can file trademark application in multiple classes, but separate fees apply for each class. E-commerce businesses typically need Class 35 for online retail services plus classes for actual products. Tech startups often need Class 9 for software and Class 42 for IT services. Professional consultation ensures you select all relevant classes for comprehensive protection without unnecessary expense.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
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
                Trademark Registration Timeline in Delhi
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
                Understanding the trademark registration timeline helps set realistic expectations and plan your brand protection strategy. Here is the typical timeline for trademark registration in Delhi:
              </p>

              <div className="space-y-3">
                {[
                  { stage: "Trademark Search and Preparation", duration: "1-2 weeks", description: "Conduct comprehensive trademark search, analyze results, select appropriate classes, prepare documentation, and organize application materials. Professional search services provide detailed reports with risk analysis." },
                  { stage: "Application Filing and Acknowledgment", duration: "1-2 weeks", description: "File Form TM-A online through IP India portal, upload all documents, make fee payment, and receive application number. The acknowledgment confirms that your application is accepted for processing by the Delhi Trademark Office." },
                  { stage: "Formality Check and Journal Publication", duration: "2-4 weeks", description: "The Registry conducts initial formality check to verify completeness of application. Upon passing formality check, your application details are published in the Trademark Journal for public record and transparency." },
                  { stage: "Examination by Trademark Registry", duration: "8-12 months", description: "A Trademark Examiner reviews your application thoroughly for compliance with legal requirements, distinctiveness, and conflicts with existing marks. The examiner may accept the application directly or issue examination report with objections." },
                  { stage: "Objection Reply and Hearing", duration: "1-3 months", description: "If objections are raised, file comprehensive reply within 30 days addressing each objection. Request personal hearing if needed to present arguments. The Examiner reviews your response and makes final decision on acceptance or rejection." },
                  { stage: "Acceptance and Publication in Journal", duration: "1-2 months", description: "Once accepted, your trademark is published in the Trademark Journal inviting public opposition. This publication allows interested parties to review new trademark registrations and file oppositions if they have legitimate grounds." },
                  { stage: "Opposition Period", duration: "4 months", description: "A mandatory four-month opposition window during which any person can oppose your trademark registration. If opposition is filed, counter-statement must be filed within two months. Opposition proceedings may extend timeline significantly." },
                  { stage: "Registration and Certificate Issuance", duration: "1-2 months", description: "If no opposition is filed or opposition is successfully defended, the Registry issues registration certificate. The certificate grants exclusive rights to use the trademark throughout India from the original application filing date." }
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

              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-info-circle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Total Timeline:</strong> The complete trademark registration process in Delhi typically takes 12 to 18 months from filing to certificate issuance. This timeline assumes no major objections or oppositions. Applications with objections or oppositions may take 18 to 24 months or longer. Fast-track examination is available for eligible startups, potentially reducing timeline by several months.
                </p>
              </div>
            </div>
          </section>

          {/* Post-Registration Section */}
          <section id="post-registration" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Post-Registration Maintenance and Protection
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
                Receiving your trademark registration certificate is just the beginning of brand protection journey. Active maintenance and enforcement ensure your trademark rights remain strong and effective. Here are critical post-registration steps:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "fas fa-sync",
                    title: "Trademark Renewal Management",
                    description: "Trademarks are valid for 10 years from registration date and must be renewed before expiry. Start renewal process 6 months before expiry date by filing Form TM-R with prescribed fees. Renewals can be filed up to 6 months after expiry with additional late fees. Missing renewal deadline results in trademark removal from register."
                  },
                  {
                    icon: "fas fa-eye",
                    title: "Market Monitoring and Watch Services",
                    description: "Regularly monitor marketplace for unauthorized use of your trademark or confusingly similar marks. Use watch services to track new trademark applications that may conflict with your mark. Monitor online platforms, social media, e-commerce sites, and physical markets in Delhi for infringement."
                  },
                  {
                    icon: "fas fa-exclamation-circle",
                    title: "Enforcement Against Infringement",
                    description: "Take prompt action against trademark infringement to maintain rights and prevent dilution. Send cease and desist notices to infringers demanding immediate stoppage. File infringement suits in Delhi High Court seeking injunctions, damages, and account of profits. Criminal complaints can be filed for deliberate trademark counterfeiting."
                  },
                  {
                    icon: "fas fa-edit",
                    title: "Trademark Records Updates",
                    description: "Update trademark records whenever there are changes in ownership, business name, address, or authorized signatory. File Form TM-23 for assignment or transmission, Form TM-24 for address changes, and Form TM-54 for name changes. Keeping records current ensures you receive important communications from the Registry."
                  },
                  {
                    icon: "fas fa-file-contract",
                    title: "Usage Documentation",
                    description: "Maintain comprehensive documentation of trademark use including invoices, advertisements, product catalogs, marketing materials, and sales records. Usage evidence is crucial if you need to defend against non-use cancellation actions. Document first use date, continuous use, and geographical extent of use."
                  },
                  {
                    icon: "fas fa-shield-alt",
                    title: "Quality Control and Licensing",
                    description: "If licensing your trademark to others, ensure proper license agreements with quality control provisions. Monitor licensee usage to ensure they maintain quality standards and use trademark correctly. Improper licensing or lack of quality control can jeopardize trademark rights and lead to registration cancellation."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-md"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
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
                        <i className={`${item.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-base font-semibold mb-2">
                          {item.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section id="common-mistakes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Common Mistakes to Avoid During Trademark Registration
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
                Avoiding common mistakes during trademark registration saves time, money, and prevents application rejection. Here are critical errors to avoid:
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: "fas fa-times-circle",
                    title: "Inadequate Trademark Search",
                    description: "Filing application without comprehensive search is the most common mistake. Many applicants rely only on simple Google searches or basic database searches, missing similar marks that could cause rejection. Always conduct thorough professional trademark search covering phonetic variants, visual similarities, and related classes before filing.",
                    severity: "high"
                  },
                  {
                    icon: "fas fa-font",
                    title: "Choosing Generic or Descriptive Names",
                    description: "Generic terms, common surnames, and direct descriptions of products or services are not registrable as trademarks. Avoid marks like Delhi Pizza, Best Garments, or Quick Delivery Service. Choose distinctive, invented, or suggestive marks that can be protected. Add unique elements to common words to create distinctiveness.",
                    severity: "high"
                  },
                  {
                    icon: "fas fa-list",
                    title: "Incorrect Class Selection",
                    description: "Selecting wrong classes or inadequate classes limits protection scope and creates future problems. Many applicants file in single class when multiple classes are needed, leaving business vulnerable in other areas. E-commerce businesses particularly need careful class selection covering retail services and actual products.",
                    severity: "medium"
                  },
                  {
                    icon: "fas fa-file-alt",
                    title: "Poor Quality Trademark Representation",
                    description: "Submitting low-resolution logos, unclear designs, or improper file formats leads to objections and delays. Trademark representation should be high-quality JPG or PNG format with clear visibility of all elements. If claiming specific colors, provide exact color codes. Three-dimensional marks need multiple views.",
                    severity: "medium"
                  },
                  {
                    icon: "fas fa-language",
                    title: "Vague Goods and Services Description",
                    description: "Broad, unclear, or improper descriptions of goods and services invite objections and limit protection. Be specific and precise in describing what your trademark covers. Use standard terminology from Nice Classification. Avoid overly broad claims that extend beyond your actual business.",
                    severity: "medium"
                  },
                  {
                    icon: "fas fa-hourglass-half",
                    title: "Delaying Response to Objections",
                    description: "Missing deadlines for responding to examination objections results in application abandonment. Respond to objections within 30 days or request extension well in time. Prepare comprehensive responses addressing all objection grounds with legal arguments and supporting evidence. Never ignore objection notices.",
                    severity: "high"
                  },
                  {
                    icon: "fas fa-user-slash",
                    title: "Filing Without Professional Assistance",
                    description: "While self-filing is possible, lack of professional expertise often leads to rejections, inadequate protection, or costly mistakes. Professional trademark attorneys understand examination standards, have experience handling objections, and ensure proper filing that maximizes registration success probability.",
                    severity: "low"
                  },
                  {
                    icon: "fas fa-ban",
                    title: "Using Prohibited or Offensive Matter",
                    description: "Marks containing national emblems, religious symbols, scandalous matter, or misleading representations are prohibited under Section 9 and Section 11 of Trademarks Act. Avoid using Ashoka Chakra, Indian flag, state emblems, religious symbols, or any matter that hurts religious sentiments or public morality.",
                    severity: "high"
                  },
                  {
                    icon: "fas fa-map-marked",
                    title: "Ignoring Geographical Indications",
                    description: "Certain geographical names and indications are protected and cannot be registered as trademarks by unauthorized parties. Be careful when using place names in your trademark. Delhi itself cannot be monopolized, but creative combinations with other distinctive elements may be acceptable.",
                    severity: "medium"
                  },
                  {
                    icon: "fas fa-calendar-times",
                    title: "Neglecting Post-Registration Maintenance",
                    description: "Many trademark owners neglect renewal deadlines, fail to monitor for infringement, or do not update records for business changes. Active trademark management is essential for maintaining rights. Set calendar reminders for renewal deadlines and maintain proper usage documentation.",
                    severity: "medium"
                  }
                ].map((mistake, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-md flex items-start gap-3"
                    style={{ 
                      background: mistake.severity === 'high' 
                        ? 'rgba(239, 68, 68, 0.08)' 
                        : 'rgba(255, 255, 255, 0.02)',
                      border: mistake.severity === 'high'
                        ? '1px solid rgba(239, 68, 68, 0.2)'
                        : '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: mistake.severity === 'high'
                          ? 'rgba(239, 68, 68, 0.15)'
                          : 'rgba(255, 183, 3, 0.15)',
                        border: mistake.severity === 'high'
                          ? '1px solid rgba(239, 68, 68, 0.3)'
                          : '1px solid rgba(255, 183, 3, 0.3)'
                      }}
                    >
                      <i className={`${mistake.icon} ${mistake.severity === 'high' ? 'text-red-400' : 'text-[#FFB703]'} text-base`} aria-hidden="true"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-nunito text-base font-semibold mb-2">
                        {mistake.title}
                      </h4>
                      <p className="text-white/90 font-nunito text-sm leading-relaxed">
                        {mistake.description}
                      </p>
                    </div>
                  </div>
                ))}
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
                  <span className="text-white font-nunito text-base font-semibold">Secure Your Brand in Delhi Today</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Get Expert Assistance for Trademark Registration in Delhi
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Protect your business identity and brand reputation with professional trademark registration services tailored for Delhi businesses. Our experienced trademark attorneys provide comprehensive support from search to registration and beyond, ensuring your intellectual property is fully protected in India's competitive capital market.
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
                    Get Professional Help
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
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Frequently Asked Questions About Trademark Registration in Delhi
              </h2>
            </div>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 3px 14px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <h3 className="text-white font-nunito text-base font-semibold mb-2 flex items-start gap-2">
                    <i className="fas fa-question-circle text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                    {faq.question}
                  </h3>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

