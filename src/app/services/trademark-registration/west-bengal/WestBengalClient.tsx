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

export default function WestBengalClient() {
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

  const faqs = [
    {
      question: "How to register a trademark in West Bengal?",
      answer: "To register a trademark in West Bengal, you need to: 1) Conduct a comprehensive trademark search to ensure availability, 2) Prepare all required documents including identity proof, address proof, and trademark representation, 3) File Form TM-A online through IP India portal or with professional assistance, 4) Respond to any examination objections if raised, 5) Wait for publication in Trademark Journal, and 6) Receive registration certificate upon successful completion. The entire process typically takes 12-18 months."
    },
    {
      question: "What documents are required for trademark registration in West Bengal?",
      answer: "Required documents for trademark registration in West Bengal include: Identity proof of applicant (Aadhar card, passport, or driving license), Address proof (utility bills, rental agreement, or voter ID), Clear representation of trademark (logo image or wordmark in high resolution), Description of goods or services for which registration is sought, Power of Attorney (Form TM-48) if filing through an agent, Incorporation certificate if applicant is a company, Partnership deed if applicant is a partnership firm, and any supporting documents showing use of trademark if already in use."
    },
    {
      question: "How long does trademark registration take in West Bengal?",
      answer: "Trademark registration in West Bengal typically takes 12 to 18 months from the date of filing to final registration certificate issuance. The timeline includes: 1-2 months for application filing and acknowledgment, 8-12 months for examination and examination report, 1-2 months for responding to objections if any, 2-4 months for publication in Trademark Journal, 4 months opposition period, and 1-2 months for registration certificate issuance. The timeline may vary based on objections, oppositions, or other complications."
    },
    {
      question: "Can I register a trademark online in West Bengal?",
      answer: "Yes, you can register a trademark online in West Bengal through the official IP India website (ipindiaservices.gov.in). The online filing process is faster, more convenient, and cost-effective compared to physical filing. You can file Form TM-A online, upload required documents, make online payment, and track application status. However, professional assistance from trademark attorneys or consultants is recommended to ensure proper filing, correct class selection, and to handle any objections or oppositions that may arise during the process."
    },
    {
      question: "Who can apply for trademark registration in West Bengal?",
      answer: "Any person or entity can apply for trademark registration in West Bengal, including: Individuals (sole proprietors), Partnership firms, Companies (private limited, public limited, one person company), Limited Liability Partnerships (LLPs), Trusts and societies, Hindu Undivided Families (HUFs), Foreign individuals and companies, and Joint applicants. The applicant must have a valid business address or intend to use the trademark in connection with goods or services in India."
    },
    {
      question: "What is the validity period of a registered trademark in West Bengal?",
      answer: "A registered trademark in West Bengal is valid for 10 years from the date of registration. The trademark can be renewed indefinitely for successive periods of 10 years each by filing a renewal application and paying the renewal fees before the expiry date. Renewal applications should be filed 6 months before expiry or within 6 months after expiry (with late fees). Failure to renew within the grace period will result in removal of the trademark from the register."
    },
    {
      question: "What are the benefits of trademark registration in West Bengal?",
      answer: "Benefits of trademark registration in West Bengal include: Exclusive legal rights to use the trademark in connection with specified goods or services, Legal protection against infringement and unauthorized use, Right to sue for damages and seek injunctions against infringers, Enhanced brand value and credibility in the market, Ability to license or franchise the trademark, Protection across India (not limited to West Bengal), Deterrent effect against potential infringers, Asset creation for business valuation, and Foundation for international trademark protection through Madrid Protocol."
    },
    {
      question: "What happens if someone opposes my trademark application in West Bengal?",
      answer: "If someone files an opposition against your trademark application in West Bengal, you will receive a notice of opposition. You have 2 months from the date of receipt to file a counter-statement defending your application. The opponent then has 2 months to file evidence in support of opposition, followed by your opportunity to file evidence in support of application. The Trademark Registry will conduct a hearing and decide whether to register or refuse your trademark. Professional legal assistance is crucial to successfully defend oppositions."
    },
    {
      question: "Do I need a lawyer for trademark registration in West Bengal?",
      answer: "While it is not mandatory to hire a lawyer for trademark registration in West Bengal, professional assistance from trademark attorneys or consultants is highly recommended. They help with: Comprehensive trademark search and availability analysis, Proper class selection and application drafting, Filing error-free applications, Responding to examination objections effectively, Handling oppositions and legal proceedings, Ensuring compliance with trademark laws, Maximizing chances of successful registration, and Saving time and avoiding costly mistakes. Professional assistance significantly improves registration success rates."
    },
    {
      question: "What trademark classes are commonly used in West Bengal?",
      answer: "Common trademark classes used in West Bengal include Class 35 (advertising and business management services), Class 42 (software development and IT services), Class 43 (restaurant and hotel services), Class 25 (clothing and footwear), Class 9 (software and electronics), Class 5 (pharmaceuticals), and Class 29 (food products). The appropriate class depends on the nature of goods or services your business offers. Professional assistance helps ensure correct class selection for comprehensive protection."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {/* Table of Contents */}
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in West Bengal"
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
              <span className="text-[#FFB703] font-medium">West Bengal</span>
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
                Trademark Registration in West Bengal: Complete Guide & Process 2025
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
                West Bengal, with its rich cultural heritage and growing business ecosystem centered around Kolkata, Howrah, Durgapur, and Siliguri, presents numerous opportunities for entrepreneurs and businesses. As the state continues to develop its industrial and service sectors, protecting your brand identity through trademark registration becomes essential for establishing market presence and securing legal rights.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                This comprehensive guide provides detailed information about trademark registration in West Bengal, including step-by-step process, required documents, timeline, and expert assistance to help you successfully register your trademark and secure exclusive rights to your brand across India.
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
                A trademark serves as a distinctive identifier that distinguishes your products or services from those of competitors in the marketplace. It can manifest in various forms including words, logos, symbols, designs, color combinations, sounds, or even three-dimensional shapes. When you register a trademark in West Bengal, you obtain exclusive legal rights to use that mark in connection with your specified goods or services throughout the entire country of India.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                The trademark registration system in India operates under the Trademarks Act, 1999, which provides comprehensive legal framework for trademark protection. The Office of the Controller General of Patents, Designs, and Trademarks (CGPDTM), operating under the Ministry of Commerce and Industry, Government of India, administers the registration process. This centralized system ensures that once registered, your trademark receives nationwide protection, extending far beyond the geographical boundaries of West Bengal.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For businesses operating in West Bengal's diverse economic landscape, which includes traditional industries like jute and tea, modern IT and software services, manufacturing units, retail businesses, and service providers, trademark registration establishes legal ownership and prevents unauthorized use of your brand identity. This protection is particularly valuable in competitive markets where brand recognition and customer trust play crucial roles in business success.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Trademark registration creates a public record of your ownership, making it easier to enforce your rights against infringers. It also serves as a valuable business asset that can appreciate over time, contribute to your company's valuation, and be licensed or transferred to others. In West Bengal's evolving business environment, where startups and established businesses coexist, having a registered trademark provides a competitive advantage and legal security.
              </p>

              {/* Unique West Bengal Content: Heritage Brands & Tea Industry */}
              <div className="mt-6 p-5 rounded-md border border-[#FFB703]/30 bg-[#FFB703]/5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#FFB703]/20 text-[#FFB703]">
                    <i className="fas fa-leaf text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-nunito text-lg font-bold mb-2">Protecting Bengal's Legacy</h3>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      <strong>Did you know?</strong> West Bengal is home to India's first Geographical Indication (GI) – <strong>Darjeeling Tea</strong>. This legacy of IP protection extends to Kolkata's iconic sweet shops, textile houses, and publishing firms. The <strong>Kolkata Trade Marks Registry</strong> (Salt Lake) handles applications for the entire East and North-East region. For heritage brands, securing "continuous prior use" status is often key to winning trademark battles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of Trademark Registration in West Bengal */}
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
                Benefits of Trademark Registration in West Bengal
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
                Registering your trademark in West Bengal provides numerous advantages that extend beyond simple brand identification. These benefits are crucial for businesses looking to establish strong market presence, protect their intellectual property, and build long-term value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  {
                    icon: "fas fa-shield-alt",
                    title: "Exclusive Legal Rights",
                    description: "Trademark registration grants you exclusive rights to use your mark in connection with specified goods or services. No other business can use an identical or confusingly similar mark for similar goods or services without your permission. This exclusivity is particularly important in West Bengal's competitive business environment where brand differentiation is key to success."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Legal Protection Against Infringement",
                    description: "Registered trademark owners can take legal action against infringers, seek damages, obtain injunctions, and prevent unauthorized use of their marks. This protection is crucial in West Bengal's diverse market, where businesses need strong legal tools to defend their brand identity against copycats and unauthorized users."
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Enhanced Brand Value",
                    description: "A registered trademark increases your brand's credibility, value, and market position. It signals to customers, investors, and partners that you are serious about protecting your intellectual property. In West Bengal's business ecosystem, this credibility can be the difference between attracting investment and losing opportunities."
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Licensing and Franchising Opportunities",
                    description: "Registered trademarks can be licensed or franchised, creating additional revenue streams. This is particularly valuable for businesses expanding across West Bengal and India, allowing you to monetize your brand while maintaining quality control through licensing agreements."
                  },
                  {
                    icon: "fas fa-globe",
                    title: "Nationwide Protection",
                    description: "Trademark registration in West Bengal provides protection across all of India, not just within the state. Your rights extend to every state and union territory, making it an efficient way to secure comprehensive brand protection for businesses with national aspirations."
                  },
                  {
                    icon: "fas fa-dollar-sign",
                    title: "Asset Creation",
                    description: "A registered trademark is an intangible asset that can be valued, sold, transferred, or used as collateral. It adds significant value to your business balance sheet and can be particularly important during mergers, acquisitions, or when seeking business financing."
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

          {/* Steps to Register Trademark in West Bengal */}
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
                Step-by-Step Process to Register Trademark in West Bengal
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
                The trademark registration process in West Bengal follows a systematic approach designed to ensure proper examination and protection of your brand. Understanding each step helps you prepare adequately and navigate the process smoothly.
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
                    step: "Step 1: Conduct Comprehensive Trademark Search",
                    description: "Before filing your application, conduct a thorough trademark search to ensure your proposed mark is available and doesn't conflict with existing registrations or pending applications. Search the Trademark Registry database maintained by IP India, check for identical and similar marks across all 45 classes, analyze goods and services overlap, and assess registration risks. Professional trademark search services can help identify potential conflicts early, saving time and preventing costly rejections. This step is particularly important in West Bengal's competitive market where many businesses operate in similar sectors."
                  },
                  {
                    step: "Step 2: Prepare Required Documents",
                    description: "Gather all necessary documents for trademark registration. This includes identity proof such as Aadhar card, passport, or driving license, address proof like utility bills, rental agreement, or voter ID, clear representation of your trademark in high-resolution format (logo image or wordmark), detailed description of goods or services for which registration is sought, Power of Attorney (Form TM-48) if filing through an agent or attorney, incorporation certificate if you are a company, partnership deed if you are a partnership firm, and any evidence of trademark use if already in use. Ensure all documents are properly attested and in the required format."
                  },
                  {
                    step: "Step 3: Determine Appropriate Trademark Class",
                    description: "Identify the correct Nice Classification class or classes for your goods or services. The Nice Classification system divides all goods and services into 45 classes, with classes 1-34 covering goods and classes 35-45 covering services. Selecting the correct class is crucial as it determines the scope of protection. You can file in multiple classes if your business spans different categories, but separate applications are required for each class. Professional assistance helps ensure proper class selection, which is essential for comprehensive protection of your brand in West Bengal and across India."
                  },
                  {
                    step: "Step 4: File Trademark Application (Form TM-A)",
                    description: "File your trademark application using Form TM-A through the IP India online portal (ipindiaservices.gov.in) or physically at the Trademark Registry office. The application must include complete applicant details, trademark representation in the specified format, detailed description of goods or services, appropriate class number, basis of application (proposed to be used or already in use), and payment of applicable fees. Online filing is faster, more convenient, and allows you to track application status in real-time. Ensure all information is accurate and complete to avoid delays or objections."
                  },
                  {
                    step: "Step 5: Application Acknowledgment and Examination",
                    description: "After filing, you receive an acknowledgment receipt with your application number, which serves as proof of filing and allows you to track your application status. The Trademark Registry examines your application within 8-12 months to check compliance with legal requirements, assess distinctiveness of your mark, and identify any conflicts with existing registered or pending trademarks. The Examiner issues an Examination Report if any objections are raised, which must be responded to within 30 days (extendable by another 30 days upon request). Timely and comprehensive response is crucial for successful registration."
                  },
                  {
                    step: "Step 6: Respond to Examination Objections (if any)",
                    description: "If the Examiner raises objections, you must file a comprehensive reply addressing each objection with legal arguments, evidence, and case law citations where applicable. Common objections include lack of distinctiveness, similarity with existing marks, incorrect class selection, or descriptive nature of the mark. A well-drafted objection reply prepared by experienced trademark attorneys can overcome most objections. The Examiner reviews your response and decides whether to accept the application or maintain objections. Professional legal assistance significantly improves success rates in overcoming objections."
                  },
                  {
                    step: "Step 7: Publication in Trademark Journal",
                    description: "If the application is accepted (either initially or after successfully overcoming objections), it is published in the weekly Trademark Journal for public inspection. The publication allows third parties to view your trademark and file oppositions if they believe it conflicts with their existing rights. The journal is published weekly, and your mark remains open for opposition for 4 months from the publication date. This publication period is a critical stage where your trademark faces potential challenges from competitors or existing trademark owners."
                  },
                  {
                    step: "Step 8: Opposition Period and Resolution",
                    description: "During the 4-month opposition period, any person can file an opposition against your trademark application if they believe it conflicts with their rights. If an opposition is filed, you must defend your application by filing a counter-statement within 2 months, submitting evidence in support of your application, and attending hearings before the Trademark Registry. If no opposition is filed or if you successfully defend against opposition, your application proceeds to registration. Professional legal assistance is crucial during opposition proceedings to protect your interests."
                  },
                  {
                    step: "Step 9: Registration Certificate Issuance",
                    description: "Upon successful completion of all stages, the Trademark Registry issues your registration certificate, which confirms your exclusive rights to use the trademark in connection with the specified goods or services. The registration is valid for 10 years from the date of application filing and can be renewed indefinitely for successive periods of 10 years each. Once registered, you can use the registered trademark symbol (®) with your mark, which provides notice to others of your registered rights and enhances your brand's credibility in the marketplace."
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

          {/* How to Register Trademark in West Bengal */}
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
                How to Register Trademark in West Bengal: Detailed Guide
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
                Registering a trademark in West Bengal can be accomplished through two primary methods: online filing through the IP India portal or physical filing at the Trademark Registry office. Online filing is strongly recommended as it offers greater convenience, faster processing, and real-time application tracking.
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
                    Online Trademark Registration Process
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-white/90 font-nunito text-sm ml-6">
                    <li>Visit the official IP India website (ipindiaservices.gov.in) and create a new account or login if you already have one. The registration process requires basic information and email verification.</li>
                    <li>Navigate to the Trademark section and select "New Application" or "Form TM-A" from the dashboard menu. Familiarize yourself with the online interface before starting your application.</li>
                    <li>Fill in all required details systematically including applicant information (name, address, nationality), trademark representation (upload high-resolution image), goods or services description, and class selection. Ensure accuracy as corrections later can be time-consuming.</li>
                    <li>Upload scanned copies of required documents in the specified formats. Documents should be clear, legible, and properly formatted. Acceptable formats typically include PDF, JPG, or PNG files.</li>
                    <li>Review all information carefully to ensure accuracy and completeness. Double-check spelling, class selection, and document attachments before proceeding to payment.</li>
                    <li>Make online payment using credit card, debit card, net banking, or UPI. The payment gateway is secure and provides immediate confirmation. Save the payment receipt for your records.</li>
                    <li>Submit the application and download the acknowledgment receipt with your unique application number. This receipt serves as proof of filing and is essential for tracking your application status.</li>
                    <li>Track your application status regularly through the IP India portal using your application number. The portal provides real-time updates on examination, publication, and registration stages.</li>
                  </ol>
                </div>

                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-file-alt text-[#FFB703]" aria-hidden="true"></i>
                    Physical Trademark Registration Process
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-white/90 font-nunito text-sm ml-6">
                    <li>Download Form TM-A from the IP India website or obtain a physical copy from the Trademark Registry office. Ensure you have the latest version of the form to avoid rejection.</li>
                    <li>Fill in the form manually with all required details using black ink and block letters. Handwriting should be clear and legible. Avoid corrections and overwriting as they may lead to rejection.</li>
                    <li>Attach all required documents as self-attested copies. Documents should be properly organized and securely attached to the application form. Include identity proof, address proof, trademark representation, Power of Attorney if applicable, and business registration documents.</li>
                    <li>Prepare a demand draft or pay order for the applicable fees payable to the Registrar of Trademarks. Ensure the amount is correct and the draft is valid. Cross-check the payee name and amount before submission.</li>
                    <li>Submit the complete application package at the appropriate Trademark Registry office. For West Bengal, applications are typically handled by the Kolkata office or can be submitted to the nearest registry office. Obtain a receipt acknowledging submission.</li>
                    <li>Obtain acknowledgment receipt with application number and date of filing. This receipt is crucial for tracking your application and should be kept safely for future reference.</li>
                    <li>Track application status through the IP India portal using your application number or by visiting the registry office periodically. Physical filing may take longer for acknowledgment and processing compared to online filing.</li>
                  </ol>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-info-circle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Important Note:</strong> While you can file the application yourself, professional assistance from trademark attorneys or consultants is highly recommended. They ensure proper filing, correct class selection, comprehensive search, and effective handling of objections and oppositions, significantly improving your chances of successful registration. Professional guidance is particularly valuable for businesses in West Bengal navigating the trademark registration process for the first time.
                </p>
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
                Documents Required for Trademark Registration in West Bengal
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
                Preparing the correct documents is crucial for successful trademark registration in West Bengal. The required documents vary based on the type of applicant, but certain documents are mandatory for all applications. Ensure all documents are properly attested, clear, and in the required format.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Identity Proof",
                    items: ["Aadhar card (most commonly accepted)", "Passport (for Indian and foreign applicants)", "Driving license (valid and current)", "Voter ID card", "PAN card (for Indian applicants)"]
                  },
                  {
                    title: "Address Proof",
                    items: ["Utility bills (electricity, water, gas) dated within last 3 months", "Rental agreement (if renting business premises)", "Property ownership documents (if owning property)", "Bank statement (dated within last 3 months)", "Voter ID card with current address"]
                  },
                  {
                    title: "Trademark Representation",
                    items: ["High-resolution logo image (minimum 8cm x 8cm, 300 DPI)", "Wordmark in standard font (if text-only trademark)", "Clear description of trademark elements", "Color specifications (if color is claimed as part of trademark)", "Black and white version (if color trademark is filed)"]
                  },
                  {
                    title: "Business Documents",
                    items: ["Incorporation certificate (for companies registered under Companies Act)", "Partnership deed (for partnership firms)", "LLP agreement (for Limited Liability Partnerships)", "Trust deed (for trusts and societies)", "HUF declaration (for Hindu Undivided Families)"]
                  },
                  {
                    title: "Other Documents",
                    items: ["Power of Attorney (Form TM-48) if filing through an agent or attorney", "Evidence of use (if trademark is already in use, include invoices, advertisements, packaging)", "Translation and transliteration (if trademark contains non-English words)", "Priority documents (if claiming priority from foreign application)", "Consent letter (if using name or image of another person)"]
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
              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-exclamation-triangle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Document Requirements:</strong> All documents must be self-attested copies for online filing, or original copies with self-attested duplicates for physical filing. Documents in languages other than English or Hindi should be accompanied by certified translations. Ensure all documents are current and valid, as expired documents may lead to application rejection.
                </p>
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
                Trademark Registration Timeline in West Bengal
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
                The trademark registration process in West Bengal typically takes 12 to 18 months from filing to certificate issuance. However, the timeline can vary based on several factors including objections raised during examination, oppositions filed by third parties, complexity of the application, and workload at the Trademark Registry. Understanding the timeline helps you plan accordingly and set realistic expectations.
              </p>

              <div className="space-y-3">
                {[
                  { stage: "Application Filing and Acknowledgment", duration: "1-2 months", description: "After filing your application, you receive an acknowledgment receipt with application number within 1-2 months. This confirms that your application has been accepted for processing and assigned a unique application number for tracking purposes. Online applications typically receive acknowledgment faster than physical filings." },
                  { stage: "Examination by Trademark Registry", duration: "8-12 months", description: "The Trademark Examiner reviews your application for compliance with legal requirements, distinctiveness, and conflicts with existing marks. An Examination Report is issued if any objections are raised, typically within 8-12 months of filing. The examination process involves thorough checking of your mark against the trademark database." },
                  { stage: "Response to Objections (if any)", duration: "1-2 months", description: "If objections are raised, you have 30 days (extendable by another 30 days upon request) to file a comprehensive reply. The Examiner reviews your response and decides whether to accept or maintain objections. Well-prepared responses can significantly reduce this timeline, while inadequate responses may require additional submissions." },
                  { stage: "Publication in Trademark Journal", duration: "2-4 months", description: "Once accepted, your trademark is published in the weekly Trademark Journal for public inspection. This usually happens within 2-4 months after acceptance or after successfully overcoming objections. The publication allows third parties to view and potentially oppose your application." },
                  { stage: "Opposition Period", duration: "4 months", description: "After publication, there is a mandatory 4-month period during which any person can file an opposition against your application. If no opposition is filed, your application proceeds to registration. If opposition is filed, the timeline extends based on the complexity and duration of opposition proceedings." },
                  { stage: "Registration Certificate Issuance", duration: "1-2 months", description: "If no opposition is filed or if you successfully defend against opposition, the Trademark Registry issues your registration certificate within 1-2 months after the opposition period ends. The certificate confirms your exclusive rights and is valid for 10 years from the filing date." }
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
                Understanding Trademark Classes for West Bengal Registration
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
                The Nice Classification system divides all goods and services into 45 classes. Classes 1-34 cover goods (products), while classes 35-45 cover services. Selecting the correct class or classes is crucial for proper trademark protection in West Bengal, as it determines the scope of protection and prevents others from using similar marks for similar goods or services.
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
                    Goods Classes (1-34)
                  </h3>
                  <p className="text-white/90 font-nunito text-sm mb-2">
                    Examples commonly used in West Bengal include:
                  </p>
                  <ul className="space-y-1 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 25: Clothing, footwear, headgear (apparel businesses in Kolkata and other cities)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 9: Software, electronics, computers (IT companies in Salt Lake and other tech hubs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 5: Pharmaceuticals, medical preparations (healthcare businesses)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 29: Meat, fish, dairy products, edible oils (food processing industries)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 30: Tea, coffee, spices, confectionery (traditional industries in West Bengal)</span>
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
                    Services Classes (35-45)
                  </h3>
                  <p className="text-white/90 font-nunito text-sm mb-2">
                    Examples commonly used in West Bengal include:
                  </p>
                  <ul className="space-y-1 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 35: Advertising, business management, retail services (businesses in Kolkata and other commercial centers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 42: Software development, IT services, scientific research (tech companies and startups)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 43: Restaurant, hotel services, catering (hospitality businesses across West Bengal)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 41: Education, training, entertainment services (educational institutions and training centers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 44: Medical, veterinary, beauty services (healthcare and wellness businesses)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-info-circle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Important:</strong> You can register your trademark in multiple classes, but separate applications are required for each class. Professional assistance helps ensure you select all relevant classes for comprehensive protection of your brand in West Bengal and across India. Incorrect class selection can limit your protection scope or lead to objections during examination.
                </p>
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in West Bengal</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Start Your Trademark Registration in West Bengal Today
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't wait to protect your brand identity. Our expert trademark attorneys provide comprehensive assistance for trademark registration in West Bengal, ensuring proper filing, class selection, and successful registration. Get started with professional trademark registration services today and secure exclusive rights to your brand.
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
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Frequently Asked Questions
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

