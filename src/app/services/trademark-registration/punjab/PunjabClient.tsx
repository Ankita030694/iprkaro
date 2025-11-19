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

export default function PunjabClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    // Define sections for TOC
    const sections: TOCSection[] = [
      { id: 'what-is-trademark', title: 'What is Trademark Registration?' },
      { id: 'benefits', title: 'Benefits of Registration' },
      { id: 'eligibility', title: 'Eligibility Criteria' },
      { id: 'steps-to-register', title: 'Steps to Register' },
      { id: 'how-to-register', title: 'How to Register' },
      { id: 'documents-required', title: 'Documents Required' },
      { id: 'timeline', title: 'Registration Timeline' },
      { id: 'trademark-classes', title: 'Trademark Classes' },
      { id: 'challenges', title: 'Common Challenges' },
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

  const faqs = [
    {
      question: "How to register a trademark in Punjab?",
      answer: "To register a trademark in Punjab, conduct a comprehensive trademark search through the IP India portal to ensure availability, prepare all required documents including identity proof, address proof, and trademark representation, file Form TM-A online through the IP India website or with professional assistance, pay the applicable government fees, respond to any examination objections if raised by the Trademark Registry, wait for publication in the Trademark Journal, and receive your registration certificate upon successful completion. The entire process typically takes 18 to 24 months depending on objections and oppositions."
    },
    {
      question: "What documents are required for trademark registration in Punjab?",
      answer: "Required documents for trademark registration in Punjab include applicant's identity proof such as Aadhar card, PAN card, or passport, address proof like utility bills or rental agreement, clear representation of the trademark in high resolution, description of goods or services for which registration is sought, Power of Attorney on Form TM-48 if filing through an agent, certificate of incorporation for companies, partnership deed for partnership firms, LLP agreement for LLPs, and evidence of trademark use if already using the mark in commerce."
    },
    {
      question: "Can I register a trademark online in Punjab?",
      answer: "Yes, you can register a trademark online in Punjab through the official IP India portal at ipindiaservices.gov.in. The online filing process is faster, more convenient, and cost-effective compared to physical filing. You can file Form TM-A, upload all required documents, make online payment, track application status, and receive updates electronically. However, professional assistance from trademark attorneys is recommended to ensure proper filing, correct class selection, and effective handling of objections or oppositions."
    },
    {
      question: "How long does trademark registration take in Punjab?",
      answer: "Trademark registration in Punjab typically takes 18 to 24 months from the date of filing to final registration certificate issuance. The timeline includes application filing and acknowledgment within 1-2 months, examination by the Trademark Registry within 8-12 months, response to objections if any within 1-2 months, publication in Trademark Journal within 2-4 months after acceptance, opposition period of 4 months, and registration certificate issuance within 1-2 months if no opposition is filed. The timeline may extend if objections or oppositions are encountered."
    },
    {
      question: "Who can apply for trademark registration in Punjab?",
      answer: "Any person or entity can apply for trademark registration in Punjab including individuals and sole proprietors, partnership firms, companies such as private limited, public limited, or one person company, Limited Liability Partnerships, trusts and societies, Hindu Undivided Families, foreign individuals and companies, and joint applicants. The applicant must have a valid business address or intend to use the trademark in connection with goods or services in India."
    },
    {
      question: "What is the validity period of a registered trademark in Punjab?",
      answer: "A registered trademark in Punjab is valid for 10 years from the date of application filing. The trademark can be renewed indefinitely for successive periods of 10 years each by filing a renewal application and paying the prescribed renewal fees. Renewal applications should be filed 6 months before the expiry date or within 6 months after expiry with additional late fees. Failure to renew within the permitted grace period will result in removal of the trademark from the register."
    },
    {
      question: "What are the benefits of trademark registration for Punjab businesses?",
      answer: "Benefits of trademark registration for Punjab businesses include exclusive legal rights to use the trademark throughout India, legal protection against infringement and unauthorized use, enhanced brand credibility and market recognition, ability to license or franchise the trademark for additional revenue, nationwide protection extending beyond Punjab, asset creation for business valuation and transfer, deterrent effect against potential infringers, easier access to legal remedies for infringement, and foundation for international trademark protection through the Madrid Protocol."
    },
    {
      question: "What happens if someone opposes my trademark application in Punjab?",
      answer: "If someone files an opposition against your trademark application in Punjab, you will receive a notice of opposition from the Trademark Registry. You have 2 months from receipt to file a counter-statement defending your application. The opponent then has 2 months to file evidence supporting their opposition, followed by your opportunity to file evidence supporting your application. The Trademark Registry conducts a hearing where both parties present arguments, and the Registrar decides whether to register or refuse your trademark. Professional legal representation is highly recommended for opposition proceedings."
    },
    {
      question: "Do I need a lawyer for trademark registration in Punjab?",
      answer: "While it is not legally mandatory to hire a lawyer for trademark registration in Punjab, professional assistance from trademark attorneys or consultants is highly recommended. They provide comprehensive trademark search and availability analysis, proper class selection based on your business, error-free application drafting and filing, effective responses to examination objections, professional handling of oppositions and hearings, compliance with trademark laws and procedures, significantly improved chances of successful registration, and help you avoid costly mistakes and delays in the registration process."
    },
    {
      question: "Can I use my trademark before registration in Punjab?",
      answer: "Yes, you can use your trademark before registration in Punjab. You can use the TM symbol to indicate that you are claiming rights to the mark once you file your trademark application. However, you can only use the registered symbol after your trademark is officially registered. Using the trademark before registration establishes prior use, which can strengthen your application and provide common law protection. However, only registration provides complete legal protection and exclusive rights to use the trademark throughout India."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {/* Table of Contents */}
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Punjab"
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
              <span className="text-[#FFB703] font-medium">Punjab</span>
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
                Trademark Registration in Punjab: Complete Guide & Process 2025
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
                Punjab, known as the land of five rivers and a thriving center for agriculture, manufacturing, and entrepreneurship, has emerged as a significant hub for business innovation in India. With major commercial centers in Ludhiana, Amritsar, Jalandhar, Patiala, and Mohali, Punjab hosts thousands of businesses ranging from textile manufacturing to technology startups. Protecting your brand identity through trademark registration is essential for business success in Punjab's competitive marketplace.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                This comprehensive guide provides detailed information about trademark registration in Punjab, covering the complete registration process, eligibility criteria, required documents, timeline, common challenges, and expert guidance to help you successfully register your trademark and secure exclusive legal rights to your brand across India.
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
                What is Trademark Registration in Punjab?
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
                A trademark is a distinctive sign, symbol, word, phrase, logo, design, or combination that identifies and distinguishes the goods or services of one business from those of others. Trademark registration in Punjab provides you with exclusive legal rights to use your trademark in connection with specified goods or services throughout India, not just within Punjab state boundaries.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                When you register a trademark in Punjab, the registration is processed through the Office of the Controller General of Patents, Designs, and Trademarks under the Ministry of Commerce and Industry, Government of India. The trademark system in India is governed by the Trademarks Act, 1999, which provides a comprehensive legal framework for trademark protection, registration, and enforcement.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For businesses operating in Punjab's diverse sectors such as textiles and garments in Ludhiana, agricultural products and food processing across the state, sports goods manufacturing in Jalandhar, technology and IT services in Mohali, tourism and hospitality in Amritsar, and pharmaceutical manufacturing in various industrial hubs, trademark registration provides critical brand protection and legal safeguards against infringement.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Trademark registration establishes legal ownership of your brand, prevents unauthorized use by competitors, and provides a foundation for brand building and business expansion in Punjab's competitive marketplace. It is particularly important given Punjab's strategic location, entrepreneurial culture, and growing domestic and international trade connections.
              </p>
            </div>
          </section>

          {/* Benefits of Trademark Registration in Punjab */}
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
                Benefits of Trademark Registration for Punjab Businesses
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
                    title: "Exclusive Legal Rights and Protection",
                    description: "Trademark registration grants you exclusive rights to use your mark throughout India for specified goods or services. No other business can legally use an identical or confusingly similar mark in the same category, protecting your brand from competitors and counterfeiters in Punjab and nationwide."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Legal Recourse Against Infringement",
                    description: "A registered trademark enables you to take legal action against infringers, seek monetary damages, obtain court injunctions to stop unauthorized use, and pursue criminal prosecution in cases of counterfeiting. This is crucial for protecting Punjab businesses from brand dilution and market confusion."
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Enhanced Brand Value and Credibility",
                    description: "A registered trademark significantly increases your brand's credibility, market value, and consumer trust. It demonstrates professionalism and commitment to quality, helping Punjab businesses compete effectively in domestic and international markets while attracting customers and investors."
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Licensing and Franchising Opportunities",
                    description: "Registered trademarks can be licensed or franchised to generate additional revenue streams without direct operational involvement. This is particularly valuable for successful Punjab businesses looking to expand through franchising across India while maintaining brand control and quality standards."
                  },
                  {
                    icon: "fas fa-globe",
                    title: "Nationwide and International Protection",
                    description: "Trademark registration in Punjab provides protection across all of India, not limited to state boundaries. Your rights extend to every state and union territory, and registration also facilitates international trademark protection through treaties like the Madrid Protocol for global expansion."
                  },
                  {
                    icon: "fas fa-dollar-sign",
                    title: "Valuable Business Asset",
                    description: "A registered trademark is an intangible asset that can be valued, sold, transferred, mortgaged, or used as collateral for business loans. It adds significant value to your business balance sheet and increases overall enterprise valuation for Punjab businesses seeking investment or acquisition."
                  },
                  {
                    icon: "fas fa-user-check",
                    title: "Consumer Trust and Brand Loyalty",
                    description: "A registered trademark helps consumers identify authentic products and services, building trust and loyalty over time. The symbol distinguishes your offerings from competitors and assures customers of consistent quality, which is essential in Punjab's relationship-driven business culture."
                  },
                  {
                    icon: "fas fa-search",
                    title: "Online Brand Protection",
                    description: "Registered trademarks help protect your brand in the digital marketplace, including e-commerce platforms, social media, and online advertising. You can enforce trademark rights against domain name squatters, counterfeit online sellers, and unauthorized use on digital platforms serving Punjab consumers."
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

          {/* Eligibility Criteria */}
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
                Who Can Apply for Trademark Registration in Punjab?
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
                The trademark registration system in India is inclusive and allows various types of individuals and entities to apply for trademark protection. Whether you are a small entrepreneur starting a business in Ludhiana, a partnership firm running a restaurant in Amritsar, or a large corporation with manufacturing facilities in Mohali, you can apply for trademark registration to protect your brand.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Individual Proprietors",
                    description: "Any individual conducting business as a sole proprietor can apply for trademark registration. This includes freelancers, consultants, artisans, craftspeople, and small business owners operating under their own name or a trade name in Punjab."
                  },
                  {
                    title: "Partnership Firms",
                    description: "Registered or unregistered partnership firms can apply for trademark registration. All partners must be included in the application, and the partnership deed should be submitted as supporting documentation for the registration process."
                  },
                  {
                    title: "Private and Public Companies",
                    description: "Companies incorporated under the Companies Act, including private limited companies, public limited companies, and one person companies, can apply for trademark registration by submitting their certificate of incorporation and other corporate documents."
                  },
                  {
                    title: "Limited Liability Partnerships",
                    description: "LLPs registered under the LLP Act can apply for trademark registration by providing their LLP agreement and certificate of incorporation. This is common for professional services firms and startups in Punjab's technology sector."
                  },
                  {
                    title: "Trusts and Societies",
                    description: "Non-profit organizations, charitable trusts, societies, and religious institutions can register trademarks to protect their organizational identity, logos, and service marks used in their charitable or social activities across Punjab."
                  },
                  {
                    title: "Hindu Undivided Families",
                    description: "HUFs conducting business activities can apply for trademark registration in the name of the HUF, provided they submit the necessary documentation establishing the existence and composition of the HUF."
                  },
                  {
                    title: "Foreign Entities",
                    description: "Foreign individuals and companies can apply for trademark registration in Punjab and India, either directly or through authorized representatives. They must provide registration documents from their home country and appoint an agent in India."
                  },
                  {
                    title: "Joint Applicants",
                    description: "Two or more persons or entities can jointly apply for trademark registration if they are using or intend to use the trademark together in their business operations. All joint applicants must be identified in the application."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {item.title}
                    </h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-info-circle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Important:</strong> The applicant must have a legitimate intention to use the trademark in connection with goods or services in India. Trademark applications filed in bad faith or without bona fide intention to use may be rejected or opposed.
                </p>
              </div>
            </div>
          </section>

          {/* Steps to Register Trademark in Punjab */}
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
                Step-by-Step Process to Register Trademark in Punjab
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
                    step: "Step 1: Conduct Comprehensive Trademark Search",
                    description: "Before filing your application, conduct a thorough trademark search through the IP India public search portal to check if your desired trademark or similar marks already exist. Search for identical marks, phonetically similar marks, visually similar marks, and marks with similar meanings. Professional trademark search services can identify potential conflicts and assess registration viability. This step is crucial for Punjab businesses to avoid application rejection and potential infringement issues."
                  },
                  {
                    step: "Step 2: Determine Appropriate Trademark Class",
                    description: "Identify the correct Nice Classification class or classes for your goods or services. The Nice Classification system divides all goods and services into 45 classes, with classes 1-34 for goods and classes 35-45 for services. For example, Class 25 covers textiles and garments common in Ludhiana, Class 30 covers food products prevalent in Punjab's agriculture sector, and Class 42 covers IT services growing in Mohali. Selecting the correct class is essential as protection is granted only for registered classes."
                  },
                  {
                    step: "Step 3: Prepare Required Documents",
                    description: "Gather all necessary documents for your trademark application. This includes applicant identity proof such as Aadhar card, PAN card, or passport, address proof like utility bills or rental agreement, clear high-resolution representation of your trademark logo or wordmark, detailed description of goods or services, Power of Attorney on Form TM-48 if filing through an agent, incorporation certificate for companies, partnership deed for partnerships, and any evidence of prior use if applicable."
                  },
                  {
                    step: "Step 4: File Trademark Application Form TM-A",
                    description: "File your trademark application using Form TM-A through the IP India online portal at ipindiaservices.gov.in or physically at the Trademark Registry office. The application must include complete applicant details, trademark representation, class selection, goods or services description, basis of application as proposed to be used or already in use, and payment of prescribed government fees. Online filing is recommended for Punjab applicants as it is faster and more convenient."
                  },
                  {
                    step: "Step 5: Receive Application Acknowledgment",
                    description: "After successful filing, you receive an acknowledgment receipt with a unique application number and filing date. This acknowledgment confirms that your application has been accepted for processing. You can use the TM symbol with your trademark after receiving acknowledgment, although you cannot use the registered symbol until formal registration is complete. Save the acknowledgment for all future correspondence with the Trademark Registry."
                  },
                  {
                    step: "Step 6: Examination by Trademark Registry",
                    description: "The Trademark Examiner reviews your application within 8-12 months to check compliance with the Trademarks Act, distinctiveness of the mark, and potential conflicts with existing registrations. The Examiner issues an Examination Report that either accepts the application or raises objections. Common objections include lack of distinctiveness, similarity with existing marks, descriptiveness, or procedural deficiencies. Punjab applicants should be prepared to address objections professionally."
                  },
                  {
                    step: "Step 7: Respond to Examination Objections if Raised",
                    description: "If objections are raised, you must file a comprehensive written reply within 30 days, which can be extended by another 30 days upon request. The reply should address each objection with legal arguments, supporting evidence, case law citations, and clarifications. If objections are not satisfactorily addressed in writing, a personal hearing may be scheduled at the Trademark Registry. Professional legal assistance significantly improves success rates in overcoming objections."
                  },
                  {
                    step: "Step 8: Publication in Trademark Journal",
                    description: "Once your application is accepted either initially or after successfully overcoming objections, it is published in the weekly Trademark Journal for public inspection. The publication allows third parties to file oppositions if they believe the trademark conflicts with their rights. The mark remains open for opposition for 4 months from the publication date. Punjab businesses should monitor the journal for potential oppositions."
                  },
                  {
                    step: "Step 9: Opposition Period and Defense if Necessary",
                    description: "During the 4-month opposition period, any person can file opposition against your trademark application. If opposition is filed, you receive a notice and must file a counter-statement within 2 months defending your application. This is followed by evidence submission, hearings, and a final decision by the Trademark Registry. If no opposition is filed, your application proceeds automatically to registration."
                  },
                  {
                    step: "Step 10: Registration Certificate Issuance",
                    description: "Upon successful completion of all stages with no opposition or after successfully defending against opposition, the Trademark Registry issues your registration certificate. The certificate confirms your exclusive rights to use the trademark in connection with specified goods or services throughout India. You can now use the registered symbol with your trademark. The registration is valid for 10 years from the application filing date and can be renewed indefinitely."
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

          {/* How to Register Trademark in Punjab */}
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
                How to Register Trademark in Punjab: Complete Methods
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
                Trademark registration in Punjab can be completed through two primary methods: online filing through the IP India portal or physical filing at the Trademark Registry office. For Punjab businesses and entrepreneurs, online filing is the preferred method as it offers greater convenience, faster processing, and the ability to track application status in real-time from anywhere in the state.
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
                    Online Trademark Registration Process for Punjab Businesses
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-white/90 font-nunito text-sm ml-6">
                    <li>Visit the official IP India website at ipindiaservices.gov.in and create a new account by providing your email address and mobile number, or login if you already have an account.</li>
                    <li>Navigate to the Trademarks section and select New Application or Form TM-A to begin your trademark registration process.</li>
                    <li>Fill in all required applicant details including name, address in Punjab, contact information, and applicant type such as individual, partnership, company, or LLP.</li>
                    <li>Upload a clear, high-resolution representation of your trademark in JPG or PNG format. For wordmarks, specify the text and font details.</li>
                    <li>Select the appropriate Nice Classification class or classes for your goods or services, and provide a detailed description of the goods or services you offer.</li>
                    <li>Upload all required supporting documents including identity proof, address proof, incorporation documents, Power of Attorney, and any evidence of prior use.</li>
                    <li>Review all entered information carefully to ensure accuracy and completeness before proceeding to payment.</li>
                    <li>Make online payment of the prescribed government fees using credit card, debit card, net banking, or UPI payment methods.</li>
                    <li>Submit the completed application and download the acknowledgment receipt with your unique application number and filing date.</li>
                    <li>Track your application status regularly through the IP India portal by entering your application number in the trademark search section.</li>
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
                    Physical Trademark Registration Process for Punjab Applicants
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-white/90 font-nunito text-sm ml-6">
                    <li>Download Form TM-A from the IP India website or obtain a physical copy from any trademark attorney or facilitator.</li>
                    <li>Fill in the form manually using black ink and block letters, ensuring all information is clear, legible, and complete.</li>
                    <li>Attach self-attested copies of all required documents including identity proof, address proof, trademark representation, and entity-specific documents.</li>
                    <li>Prepare a demand draft or pay order for the applicable government fees payable to the Registrar of Trademarks at any nationalized bank.</li>
                    <li>Submit the completed application package with all attachments and payment at the appropriate Trademark Registry office. Applications from Punjab are typically filed at the Chandigarh office or can be sent by registered post.</li>
                    <li>Obtain an acknowledgment receipt with application number and filing date from the registry office.</li>
                    <li>Track your application status periodically through the IP India website or by visiting the registry office with your application number.</li>
                  </ol>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-lightbulb text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Expert Recommendation:</strong> While self-filing is possible, professional assistance from trademark attorneys or consultants is highly recommended for Punjab businesses. They ensure proper class selection, conduct comprehensive searches, draft strong applications, and effectively handle objections or oppositions, significantly improving your chances of successful registration.
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
                Documents Required for Trademark Registration in Punjab
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
                The documentation requirements for trademark registration in Punjab vary based on the type of applicant. All documents must be clear, legible, and properly attested. Punjab businesses should ensure all documents are current and valid to avoid delays in processing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Identity Proof Documents",
                    items: ["Aadhar card with address", "PAN card", "Passport", "Driving license", "Voter ID card"]
                  },
                  {
                    title: "Address Proof Documents",
                    items: ["Recent utility bills such as electricity or water", "Rental agreement or lease deed", "Property ownership documents", "Bank statement from last 3 months", "Telephone or internet bills"]
                  },
                  {
                    title: "Trademark Representation",
                    items: ["High-resolution logo image in JPG or PNG format", "Wordmark specification if text-only trademark", "Clear description of trademark elements", "Color specifications if claiming color", "Dimensions and design details"]
                  },
                  {
                    title: "Business Entity Documents",
                    items: ["Certificate of incorporation for companies", "Partnership deed for partnership firms", "LLP agreement for LLPs", "Trust deed for trusts", "Society registration certificate"]
                  },
                  {
                    title: "Authorization Documents",
                    items: ["Power of Attorney on Form TM-48 if filing through agent", "Board resolution for companies", "Authorization letter from partners", "Letter of consent from trademark owner if applicable"]
                  },
                  {
                    title: "Supporting Documents",
                    items: ["Evidence of trademark use if already in use", "Sales invoices or bills", "Marketing materials and advertisements", "Website screenshots", "Product catalogs or brochures"]
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
                      <i className="fas fa-folder-open text-[#FFB703] text-sm" aria-hidden="true"></i>
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
                  <strong>Important Note:</strong> All documents should be self-attested by the applicant. For companies and LLPs, documents must be certified by authorized signatories. Foreign applicants must provide notarized and apostilled documents. Ensure all documents are clearly scanned or photographed for online filing.
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
                Trademark Registration Timeline in Punjab
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
                The trademark registration process in Punjab typically takes 18 to 24 months from filing to certificate issuance. However, the exact timeline varies based on several factors including examination objections, oppositions filed by third parties, complexity of the application, and workload at the Trademark Registry. Punjab applicants should be patient and proactive throughout the process.
              </p>

              <div className="space-y-3">
                {[
                  { stage: "Application Filing and Acknowledgment", duration: "1-2 months", description: "After filing your trademark application online or physically, you receive an acknowledgment receipt with a unique application number within 1-2 months. This confirms that your application has been accepted for processing by the Trademark Registry." },
                  { stage: "Examination by Trademark Registry", duration: "8-12 months", description: "The Trademark Examiner reviews your application for compliance with the Trademarks Act, distinctiveness of the mark, and conflicts with existing registrations. An Examination Report is issued typically within 8-12 months of filing. The report either accepts the application or raises objections that must be addressed." },
                  { stage: "Response to Objections if Raised", duration: "1-2 months", description: "If objections are raised, you have 30 days to file a comprehensive reply, which can be extended by another 30 days upon request. The Examiner reviews your response and decides whether to accept the application, maintain objections, or schedule a personal hearing. This stage typically takes 1-2 months." },
                  { stage: "Publication in Trademark Journal", duration: "2-4 months", description: "Once your application is accepted either initially or after overcoming objections, it is published in the weekly Trademark Journal. Publication usually happens within 2-4 months after acceptance. This allows public inspection and potential oppositions for 4 months." },
                  { stage: "Opposition Period", duration: "4 months", description: "After publication, there is a mandatory 4-month period during which any person can file an opposition against your application. If no opposition is filed, your application automatically proceeds to registration. If opposition is filed, it must be defended through counter-statements and hearings." },
                  { stage: "Registration Certificate Issuance", duration: "1-2 months", description: "If no opposition is filed or if you successfully defend against opposition, the Trademark Registry issues your registration certificate within 1-2 months after the opposition period ends. The certificate confirms your exclusive rights to use the trademark throughout India for 10 years from the application filing date." }
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
                Understanding Trademark Classes for Punjab Businesses
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
                The Nice Classification system divides all goods and services into 45 classes. Classes 1-34 cover goods (products), while classes 35-45 cover services. Selecting the correct class or classes is essential for proper trademark protection. Punjab businesses must carefully identify all relevant classes for comprehensive brand protection.
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
                    Goods Classes (1-34) - Relevant for Punjab
                  </h3>
                  <p className="text-white/90 font-nunito text-sm mb-2">
                    Common classes for Punjab businesses:
                  </p>
                  <ul className="space-y-1 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 25: Clothing, footwear, headgear (Ludhiana textiles)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 30: Food products, grains, baked goods (Punjab agriculture)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 28: Sports goods, games, toys (Jalandhar sports industry)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 7: Machines, agricultural equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 5: Pharmaceuticals, medical preparations</span>
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
                    Services Classes (35-45) - Relevant for Punjab
                  </h3>
                  <p className="text-white/90 font-nunito text-sm mb-2">
                    Common classes for Punjab service providers:
                  </p>
                  <ul className="space-y-1 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 43: Restaurant, hotel, hospitality services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 42: IT services, software development (Mohali tech)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 35: Advertising, business management, retail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 39: Transportation, logistics, travel services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 41: Education, training, entertainment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-info-circle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Important:</strong> You can register your trademark in multiple classes, but separate fees apply for each class. Professional assistance helps ensure you select all relevant classes for comprehensive protection of your Punjab business. Incorrect class selection can leave your brand vulnerable in unprotected categories.
                </p>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section id="challenges" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Common Challenges in Trademark Registration for Punjab Businesses
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
                Punjab businesses often encounter specific challenges during the trademark registration process. Understanding these common obstacles helps you prepare better and increases your chances of successful registration.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: "fas fa-clone",
                    title: "Similarity with Existing Trademarks",
                    description: "One of the most common challenges is discovering that your proposed trademark is similar to existing registrations. This is particularly common in Punjab's competitive sectors like textiles, food products, and sports goods. Solution: Conduct comprehensive trademark searches before filing and consider modifying your mark to ensure distinctiveness."
                  },
                  {
                    icon: "fas fa-comment-alt",
                    title: "Descriptive or Generic Marks",
                    description: "Marks that merely describe the goods or services, or are generic terms, are often refused registration. For example, using Wheat Flour for wheat flour products is too descriptive. Solution: Add distinctive elements, invented words, or unique designs to make your mark registrable."
                  },
                  {
                    icon: "fas fa-pen",
                    title: "Lack of Distinctiveness",
                    description: "Trademarks must be capable of distinguishing your goods or services from others. Common words, simple geometric shapes, or overly simplistic designs may be considered non-distinctive. Solution: Create unique, memorable marks that clearly identify your brand and distinguish it from competitors."
                  },
                  {
                    icon: "fas fa-exclamation-circle",
                    title: "Incorrect Class Selection",
                    description: "Selecting the wrong Nice Classification class can result in inadequate protection or outright rejection. Punjab businesses in multiple sectors must be especially careful. Solution: Consult with trademark professionals to identify all relevant classes for your business activities and future expansion plans."
                  },
                  {
                    icon: "fas fa-file-invoice",
                    title: "Incomplete or Incorrect Documentation",
                    description: "Applications with missing documents, unclear trademark representations, or incorrect applicant details face delays or rejection. Solution: Ensure all documents are complete, clear, properly attested, and match information provided in the application form."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Opposition from Third Parties",
                    description: "Even after acceptance and publication, third parties may oppose your application if they believe it conflicts with their rights. Solution: Be prepared to defend your application with strong legal arguments, evidence of distinctiveness, and proof of prior use if applicable."
                  }
                ].map((challenge, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-md hover:-translate-y-0.5 transition-all duration-300"
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
                        <i className={`${challenge.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-base font-semibold mb-2">
                          {challenge.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-sm leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Punjab</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Start Your Trademark Registration in Punjab Today
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't wait to protect your brand identity in Punjab's competitive market. Our expert trademark attorneys provide comprehensive assistance for trademark registration, ensuring proper filing, class selection, and successful registration. Get started with professional trademark registration services today.
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
                Frequently Asked Questions About Trademark Registration in Punjab
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
