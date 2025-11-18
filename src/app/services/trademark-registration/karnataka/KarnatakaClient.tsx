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

export default function KarnatakaClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'introduction', title: 'Introduction to Trademark Registration' },
      { id: 'karnataka-business-landscape', title: 'Karnataka Business Landscape' },
      { id: 'key-benefits', title: 'Key Benefits' },
      { id: 'eligibility-requirements', title: 'Eligibility Requirements' },
      { id: 'registration-procedure', title: 'Registration Procedure' },
      { id: 'essential-documents', title: 'Essential Documents' },
      { id: 'trademark-search', title: 'Trademark Search' },
      { id: 'classification-guide', title: 'Trademark Classification Guide' },
      { id: 'timeline-overview', title: 'Timeline Overview' },
      { id: 'post-registration', title: 'Post-Registration' },
      { id: 'avoiding-pitfalls', title: 'Avoiding Common Pitfalls' },
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
      question: "How do I register a trademark in Karnataka?",
      answer: "To register a trademark in Karnataka, follow these comprehensive steps: Begin by conducting a thorough trademark search through the IP India database to verify availability and identify potential conflicts with existing registrations. This is particularly important in Karnataka's competitive business environment, especially in tech hubs like Bangalore. Next, determine the appropriate Nice Classification classes that correspond to your business activities. Prepare all required documents including identity proofs, business registration certificates, and a clear representation of your trademark. File Form TM-A online through the IP India portal at ipindiaservices.gov.in. After filing, your application undergoes examination by a Trademark Examiner who reviews it for compliance and potential conflicts. If objections are raised, respond within 30 days with supporting arguments and evidence. Once accepted, the trademark is published in the Trademark Journal for a four-month opposition period. If no opposition is filed or if oppositions are successfully resolved, you receive the registration certificate. The entire process typically takes 12 to 18 months."
    },
    {
      question: "What documents are needed for trademark registration in Karnataka?",
      answer: "Document requirements vary based on applicant type. For individual proprietors operating businesses in Karnataka, you need identity proof such as Aadhaar card, PAN card, or passport, along with address proof like electricity bills, property documents, or rental agreements. For companies registered in Karnataka, provide Certificate of Incorporation, company PAN card, and board resolution authorizing the trademark application. Partnership firms need partnership deed and partner identity proofs. All applicants require a clear, high-resolution trademark representation in JPG or PNG format meeting IP India specifications. Include detailed description of goods or services under appropriate Nice Classification classes. If filing through an attorney, provide Power of Attorney on Form TM-48. For marks already in use, prepare a user affidavit stating date and place of first use. Tech startups in Bangalore should also include startup recognition certificate if registered under Startup India to avail fee benefits."
    },
    {
      question: "Can I file trademark application online from Karnataka?",
      answer: "Yes, trademark applications can be filed completely online from anywhere in Karnataka through the official IP India portal at ipindiaservices.gov.in. The online filing system offers significant advantages including lower government fees compared to physical filing, faster processing, instant acknowledgment with application number, convenient document upload facility, secure online payment options, and real-time application status tracking. Businesses and individuals from Bangalore, Mysore, Hubli, Mangalore, and other cities in Karnataka can complete the entire process from their offices without visiting the trademark office. Simply create an account on the IP India portal, complete Form TM-A with accurate details, upload required documents, and make online payment. The system is user-friendly and allows you to track your application progress at every stage."
    },
    {
      question: "How long does trademark registration take in Karnataka?",
      answer: "Trademark registration in Karnataka typically takes 12 to 18 months from application filing to certificate issuance. The timeline includes: 1 to 2 weeks for application filing and acknowledgment, 8 to 12 months for examination by the Trademark Registry, 1 to 3 months for responding to objections if any are raised, 1 to 2 months for publication in Trademark Journal after acceptance, 4 months mandatory opposition period, and 1 to 2 months for certificate issuance after opposition period concludes. Startups registered under Startup India may benefit from fast-track examination, potentially reducing the timeline to 6 to 9 months. The actual duration depends on factors like workload at the registry, complexity of your application, objections raised, and whether oppositions are filed against your mark."
    },
    {
      question: "What are the benefits of registering trademark in Karnataka?",
      answer: "Registering a trademark in Karnataka provides comprehensive benefits that extend nationwide across India. Legal benefits include exclusive rights to use your mark for specified goods or services, strong legal protection against infringement through civil and criminal remedies, presumption of ownership and validity in disputes, and ability to claim statutory damages from infringers. For tech companies and startups in Bangalore, trademark registration enhances brand credibility, attracts investors, facilitates partnerships, and protects intellectual property assets. Business advantages include enhanced market recognition, valuable intangible asset for business valuation, licensing and franchising opportunities, deterrent effect against competitors, and foundation for international expansion through Madrid Protocol. In competitive markets like Bangalore's IT corridor, registered trademarks differentiate your brand and prevent customer confusion."
    },
    {
      question: "Which trademark office handles Karnataka applications?",
      answer: "Trademark applications from Karnataka are processed by the Trade Marks Registry in Mumbai, which has territorial jurisdiction over Maharashtra, Goa, Madhya Pradesh, Chhattisgarh, and Karnataka. The Mumbai office is located at Central Building, Marine Lines in Mumbai. However, with the comprehensive online filing system, businesses and individuals from Karnataka can complete the entire trademark registration process electronically without visiting the physical office. All applications, responses to objections, and communications can be managed through the IP India online portal, making the process convenient for applicants across Bangalore, Mysore, Hubli, Mangalore, Belagavi, and other cities in Karnataka. The online system ensures equal access to trademark registration services regardless of geographical location."
    },
    {
      question: "Can startups in Karnataka get benefits for trademark registration?",
      answer: "Yes, startups in Karnataka recognized under the Startup India program receive significant benefits for trademark registration. Eligible startups get 50 percent rebate on trademark filing fees, making intellectual property protection more affordable. They can access fast-track examination services, potentially reducing registration timeline from 12-18 months to 6-9 months. The government provides a panel of facilitators offering free professional guidance for filing applications, responding to objections, and handling oppositions. Startups are exempt from showing proof of use for the first three years, allowing them to file on proposed-to-be-used basis. To qualify, your startup must be registered with DPIIT, have a valid recognition certificate, be less than 10 years old, and have annual turnover not exceeding Rs 100 crores. These benefits are particularly valuable for tech startups in Bangalore's thriving startup ecosystem."
    },
    {
      question: "What happens if my trademark application gets objected in Karnataka?",
      answer: "If your trademark application receives an examination objection from the Mumbai Trademark Office, you must respond within 30 days from the objection date, though one extension may be requested. Common objections include similarity with existing marks, lack of distinctiveness, descriptiveness, prohibited matter, or specification issues. To respond effectively, carefully analyze the examination report to understand each objection ground and legal provisions cited. Research relevant case laws and precedents supporting your position. Prepare a comprehensive written response addressing each objection with legal arguments, evidence of use, distinctiveness proofs, or coexistence agreements. For tech companies in Bangalore, if the objection relates to similarity with existing software or IT service marks, provide evidence showing material differences in services, target markets, or business models. Consider requesting a personal hearing for complex objections. Professional assistance from experienced trademark attorneys significantly improves success rates in overcoming objections."
    },
    {
      question: "Can I use TM symbol before registration in Karnataka?",
      answer: "Yes, you can use the TM symbol immediately after filing your trademark application in Karnataka, even before registration is complete. The TM symbol indicates you are claiming rights to the mark as a trademark, though it is not yet registered. This is particularly useful for tech startups in Bangalore who want to signal brand protection while their application is pending. However, you cannot use the registered trademark symbol R in a circle until your trademark registration is complete and you receive the registration certificate. Using the R symbol without registration is a legal offense that may attract penalties. Once your trademark is successfully registered, you should switch from TM to R symbol to indicate registered status and gain full legal protection under the Trademarks Act."
    },
    {
      question: "Do I need a lawyer for trademark registration in Karnataka?",
      answer: "While hiring a trademark attorney is not mandatory, professional legal assistance is highly recommended, especially for tech companies and businesses in Bangalore's competitive market. Trademark attorneys conduct comprehensive searches across multiple databases to identify potential conflicts that basic searches might miss. They ensure accurate class selection under Nice Classification, preventing inadequate protection or unnecessary expenses. Experienced attorneys draft applications strategically to minimize objection risks and maximize protection scope. They handle examination objections with legal expertise, citing relevant case laws and preparing persuasive arguments. If oppositions are filed, professional representation becomes crucial for successful defense. Attorneys provide strategic guidance on trademark portfolio management, enforcement actions, licensing agreements, and renewal management. For businesses serious about brand protection in Karnataka's tech ecosystem, the investment in professional services often prevents costly mistakes and significantly improves registration success rates."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Karnataka"
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
              <span className="text-[#FFB703] font-medium">Karnataka</span>
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
                Trademark Registration in Karnataka: Complete Guide & Process 2025
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
                Karnataka, home to India's Silicon Valley Bangalore and thriving business centers like Mysore, Hubli, and Mangalore, represents one of the country's most dynamic commercial ecosystems. With thousands of technology companies, manufacturing units, service providers, and innovative startups operating across the state, protecting brand identity through trademark registration has become essential for competitive advantage and legal security.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                This comprehensive guide provides detailed information about trademark registration in Karnataka, covering the complete registration process, required documentation, eligibility criteria, timeline expectations, post-registration maintenance, common challenges, and professional assistance options. Whether you operate a software company in Bangalore, a manufacturing unit in Mysore, or a retail business in Hubli, understanding trademark registration is fundamental to securing your brand's future in Karnataka's competitive marketplace.
              </p>
            </div>
          </section>

          {/* Introduction Section */}
          <section id="introduction" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Understanding Trademark Registration in Karnataka
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
                A trademark is a distinctive sign, symbol, word, phrase, logo, design, or combination thereof that identifies and distinguishes the goods or services of one business from those of others. Trademark registration in Karnataka grants you exclusive legal rights to use your trademark in connection with the specified goods or services throughout India, not just within Karnataka state boundaries.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                When you register a trademark in Karnataka, you obtain nationwide protection governed by the Trademarks Act, 1999, and administered by the Office of the Controller General of Patents, Designs, and Trademarks under the Ministry of Commerce and Industry, Government of India. The registration process is uniform across India, with applications from Karnataka being processed by the Mumbai Trademark Registry office.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Trademark registration provides legal recognition of your brand, prevents others from using similar marks, and establishes your ownership rights. This is particularly important in Karnataka's competitive business environment, where brand differentiation and protection are essential for market success, especially in technology hubs like Bangalore where intellectual property protection is crucial for attracting investment and partnerships.
              </p>
            </div>
          </section>

          {/* Karnataka Business Landscape */}
          <section id="karnataka-business-landscape" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Karnataka Business Landscape and Trademark Importance
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
                Karnataka stands as one of India's most economically significant states, with Bangalore serving as the nation's premier technology and startup hub. The state hosts numerous multinational corporations, domestic enterprises, and innovative startups across diverse sectors including information technology, biotechnology, manufacturing, textiles, agriculture, and services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-laptop-code text-[#FFB703]" aria-hidden="true"></i>
                    Technology Sector
                  </h3>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Bangalore's IT corridor hosts thousands of software companies, SaaS providers, and technology startups requiring strong trademark protection for their brand names, product names, and service marks. Trademark registration is essential for these companies to protect their intellectual property, attract investors, and establish market credibility.
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
                    <i className="fas fa-industry text-[#FFB703]" aria-hidden="true"></i>
                    Manufacturing Hub
                  </h3>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Cities like Mysore, Hubli, and Belagavi host significant manufacturing industries including automotive, textiles, and engineering goods. These businesses require trademark registration to protect their brand identity, prevent counterfeiting, and establish exclusive market presence.
                  </p>
                </div>
              </div>

              <p className="text-white/90 font-nunito text-base leading-relaxed">
                The competitive nature of Karnataka's business environment makes trademark registration crucial for businesses of all sizes. Whether you operate a small retail shop in Mangalore, a tech startup in Bangalore, or a manufacturing unit in Mysore, protecting your brand through trademark registration provides legal security and competitive advantage in the marketplace.
              </p>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section id="key-benefits" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Key Benefits of Trademark Registration in Karnataka
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
                    description: "Trademark registration grants you exclusive rights to use your mark in connection with specified goods or services. No other business can use an identical or confusingly similar mark for similar goods or services without your permission. This exclusive right is particularly valuable in Karnataka's competitive markets."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Legal Protection Against Infringement",
                    description: "Registered trademark owners can take legal action against infringers, seek damages, obtain injunctions, and prevent unauthorized use of their marks. This protection is crucial in Karnataka's competitive market, especially for tech companies in Bangalore facing global competition."
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Enhanced Brand Value",
                    description: "A registered trademark increases your brand's credibility, value, and market position. It signals to customers, investors, and partners that you are serious about protecting your intellectual property. This is essential for startups in Bangalore seeking funding and partnerships."
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Licensing and Franchising Opportunities",
                    description: "Registered trademarks can be licensed or franchised, creating additional revenue streams. This is particularly valuable for businesses expanding across Karnataka and India, allowing you to monetize your brand while maintaining quality control."
                  },
                  {
                    icon: "fas fa-globe",
                    title: "Nationwide Protection",
                    description: "Trademark registration in Karnataka provides protection across all of India, not just within the state. Your rights extend to every state and union territory, giving you comprehensive brand protection regardless of where you operate."
                  },
                  {
                    icon: "fas fa-dollar-sign",
                    title: "Asset Creation",
                    description: "A registered trademark is an intangible asset that can be valued, sold, transferred, or used as collateral. It adds significant value to your business balance sheet and is particularly important for valuation during funding rounds, mergers, or acquisitions."
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

          {/* Eligibility Requirements */}
          <section id="eligibility-requirements" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Eligibility Requirements for Trademark Registration
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
                Any person or entity can apply for trademark registration in Karnataka, provided they meet basic eligibility criteria. The Trademarks Act, 1999, allows various types of applicants to register trademarks for their goods or services.
              </p>

              <div className="space-y-3">
                {[
                  {
                    type: "Individual Proprietors",
                    description: "Sole proprietors operating businesses in Karnataka can register trademarks. You need valid identity proof, address proof, and a clear intention to use the trademark in connection with your goods or services. Individual applicants are common among small businesses, freelancers, and entrepreneurs in cities like Bangalore, Mysore, and Mangalore."
                  },
                  {
                    type: "Partnership Firms",
                    description: "Partnership firms registered in Karnataka can apply for trademark registration. The application should be filed in the name of the partnership firm, with partnership deed and partner identity proofs. Partnership firms are common in traditional businesses, professional services, and retail operations across Karnataka."
                  },
                  {
                    type: "Companies",
                    description: "Private limited companies, public limited companies, and one person companies registered in Karnataka or elsewhere in India can register trademarks. Companies need to provide Certificate of Incorporation, company PAN card, and board resolution authorizing the trademark application. Tech companies in Bangalore frequently register multiple trademarks for different products and services."
                  },
                  {
                    type: "Limited Liability Partnerships",
                    description: "LLPs registered under the Limited Liability Partnership Act can apply for trademark registration. LLPs need to provide LLP agreement, certificate of incorporation, and authorization documents. LLPs are popular among professional service providers and startups in Karnataka."
                  },
                  {
                    type: "Trusts and Societies",
                    description: "Registered trusts and societies operating in Karnataka can register trademarks for their services or products. They need to provide registration certificates, trust deeds or governing rules, and authorization from trustees or management bodies."
                  },
                  {
                    type: "Foreign Entities",
                    description: "Foreign individuals and companies can also register trademarks in Karnataka, provided they have a valid business address in India or appoint a legal representative. Foreign applicants must comply with Indian trademark laws and may need to provide authenticated documents from their home countries."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-base font-semibold mb-1 flex items-center gap-2">
                      <i className="fas fa-check-circle text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {item.type}
                    </h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Registration Procedure */}
          <section id="registration-procedure" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Step-by-Step Registration Procedure
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
                    step: "Step 1: Comprehensive Trademark Search",
                    description: "Before filing your application, conduct a thorough trademark search through the IP India database to ensure your proposed mark is available and does not conflict with existing registrations or pending applications. Search for identical marks, similar marks, and marks in related classes. Professional trademark search services can help identify potential conflicts early, saving time and preventing costly rejections. This step is crucial for businesses in Karnataka's competitive markets."
                  },
                  {
                    step: "Step 2: Determine Appropriate Trademark Classes",
                    description: "Identify the correct Nice Classification class or classes for your goods or services. The Nice Classification system divides all goods and services into 45 classes. Classes 1-34 cover goods, while classes 35-45 cover services. Selecting the correct class is crucial as it determines the scope of protection. Tech companies in Bangalore typically need Class 9 for software and Class 42 for IT services. You can file in multiple classes, but separate fees apply for each class."
                  },
                  {
                    step: "Step 3: Prepare Required Documents",
                    description: "Gather all necessary documents for trademark registration. This includes identity proof such as Aadhaar card, PAN card, or passport, address proof like utility bills or rental agreements, clear representation of your trademark in high resolution, description of goods or services, Power of Attorney on Form TM-48 if filing through an agent, incorporation certificate if you are a company, partnership deed if you are a partnership firm, and any evidence of trademark use if already in use."
                  },
                  {
                    step: "Step 4: File Trademark Application Online",
                    description: "File your trademark application using Form TM-A through the IP India online portal at ipindiaservices.gov.in. The application must include applicant details, trademark representation, description of goods or services, class number, basis of application, and payment of applicable fees. Online filing is faster, more convenient, and cost-effective compared to physical filing. After submission, you receive an acknowledgment with application number for tracking purposes."
                  },
                  {
                    step: "Step 5: Application Examination",
                    description: "The Trademark Registry examines your application within 8-12 months to check compliance with legal requirements, distinctiveness, and conflicts with existing marks. The Examiner issues an Examination Report if any objections are raised, which must be responded to within 30 days. The examination process ensures that only distinctive and non-conflicting marks are registered."
                  },
                  {
                    step: "Step 6: Respond to Examination Objections",
                    description: "If the Examiner raises objections, you must file a comprehensive reply addressing each objection. Common objections include lack of distinctiveness, similarity with existing marks, or incorrect class selection. A well-drafted objection reply with legal arguments, evidence, and case law citations can overcome most objections. Professional legal assistance significantly improves success rates in responding to objections."
                  },
                  {
                    step: "Step 7: Publication in Trademark Journal",
                    description: "If the application is accepted, it is published in the Trademark Journal for public inspection. The publication allows third parties to oppose your application if they believe it conflicts with their rights. The journal is published weekly, and your mark remains open for opposition for 4 months from the publication date."
                  },
                  {
                    step: "Step 8: Opposition Period",
                    description: "During the 4-month opposition period, any person can file an opposition against your trademark application. If an opposition is filed, you must defend your application by filing a counter-statement, submitting evidence, and attending hearings. If no opposition is filed or if you successfully defend against opposition, your application proceeds to registration."
                  },
                  {
                    step: "Step 9: Registration Certificate Issuance",
                    description: "Upon successful completion of all stages, the Trademark Registry issues your registration certificate. The certificate confirms your exclusive rights to use the trademark in connection with the specified goods or services. The registration is valid for 10 years from the date of application filing and can be renewed indefinitely for successive 10-year periods."
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

          {/* Essential Documents */}
          <section id="essential-documents" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Essential Documents Required
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
                    title: "Identity Proof",
                    items: ["Aadhaar card", "Passport", "Driving license", "Voter ID card", "PAN card"]
                  },
                  {
                    title: "Address Proof",
                    items: ["Utility bills (electricity, water, gas)", "Rental agreement", "Property ownership documents", "Bank statement", "Voter ID card"]
                  },
                  {
                    title: "Trademark Representation",
                    items: ["High-resolution logo image (if applicable)", "Wordmark in standard font", "Clear description of trademark", "Color specifications (if color claimed)"]
                  },
                  {
                    title: "Business Documents",
                    items: ["Incorporation certificate (for companies)", "Partnership deed (for partnerships)", "LLP agreement (for LLPs)", "Trust deed (for trusts)"]
                  },
                  {
                    title: "Other Documents",
                    items: ["Power of Attorney (Form TM-48) if filing through agent", "Evidence of use (if trademark already in use)", "Translation and transliteration (if applicable)", "Priority documents (if claiming priority)"]
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

          {/* Trademark Search */}
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
                Conducting Trademark Search
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
                Conducting a comprehensive trademark search before filing your application is crucial to avoid conflicts and rejections. A thorough search helps identify existing registrations, pending applications, and potential conflicts that could lead to objections or oppositions.
              </p>

              <div className="space-y-3">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">
                    Types of Trademark Searches
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Word Mark Search:</strong> Search for identical or similar word marks in the trademark database to identify potential conflicts with existing registrations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Device Mark Search:</strong> Search for logo or design marks that are visually similar to your proposed trademark.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Phonetic Search:</strong> Search for marks that sound similar to your proposed mark, as phonetic similarity can lead to confusion.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class-Specific Search:</strong> Search within specific Nice Classification classes relevant to your goods or services to identify marks in related categories.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-white/90 font-nunito text-base leading-relaxed">
                  Professional trademark search services provide comprehensive analysis covering multiple databases, including the official Trademark Registry database, pending applications, and common law uses. This thorough approach helps businesses in Karnataka make informed decisions about their trademark applications and reduces the risk of conflicts during the registration process.
                </p>
              </div>
            </div>
          </section>

          {/* Classification Guide */}
          <section id="classification-guide" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Classification Guide
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
                The Nice Classification system divides all goods and services into 45 classes. Classes 1-34 cover goods, while classes 35-45 cover services. Selecting the correct class or classes is crucial for proper trademark protection in Karnataka.
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
                    Examples relevant to Karnataka businesses:
                  </p>
                  <ul className="space-y-1 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 9: Software, electronics, computers (common for Bangalore tech companies)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 25: Clothing, footwear, headgear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 5: Pharmaceuticals, medical preparations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 29: Meat, fish, dairy products</span>
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
                    Examples relevant to Karnataka businesses:
                  </p>
                  <ul className="space-y-1 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 35: Advertising, business management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 42: Software development, IT services (essential for Bangalore tech companies)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 43: Restaurant, hotel services</span>
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
                  <strong>Important:</strong> You can register your trademark in multiple classes, but separate fees apply for each class. Professional assistance helps ensure you select all relevant classes for comprehensive protection of your brand in Karnataka and across India.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline Overview */}
          <section id="timeline-overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Registration Timeline
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
                The trademark registration process in Karnataka typically takes 12 to 18 months from filing to certificate issuance. However, the timeline can vary based on several factors including objections, oppositions, and complexity of the application.
              </p>

              <div className="space-y-3">
                {[
                  { stage: "Application Filing and Acknowledgment", duration: "1-2 months", description: "After filing your application, you receive an acknowledgment receipt with application number within 1-2 months. This confirms that your application has been accepted for processing by the Trademark Registry." },
                  { stage: "Examination by Trademark Registry", duration: "8-12 months", description: "The Trademark Examiner reviews your application for compliance, distinctiveness, and conflicts. An Examination Report is issued if any objections are raised, typically within 8-12 months of filing." },
                  { stage: "Response to Objections (if any)", duration: "1-2 months", description: "If objections are raised, you have 30 days (extendable by another 30 days) to file a comprehensive reply. The Examiner reviews your response and decides whether to accept or maintain objections." },
                  { stage: "Publication in Trademark Journal", duration: "2-4 months", description: "Once accepted, your trademark is published in the weekly Trademark Journal. This usually happens within 2-4 months after acceptance or after successfully overcoming objections." },
                  { stage: "Opposition Period", duration: "4 months", description: "After publication, there is a 4-month period during which any person can file an opposition against your application. If no opposition is filed, your application proceeds to registration." },
                  { stage: "Registration Certificate Issuance", duration: "1-2 months", description: "If no opposition is filed or if you successfully defend against opposition, the Trademark Registry issues your registration certificate within 1-2 months after the opposition period ends." }
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

          {/* Post-Registration */}
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
                After successfully registering your trademark in Karnataka, ongoing maintenance and protection are essential to preserve your rights and maximize the value of your intellectual property asset.
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: "Trademark Renewal",
                    description: "Your registered trademark is valid for 10 years from the date of application filing. To maintain protection, you must renew it every 10 years by filing a renewal application and paying renewal fees. Renewal applications should be filed 6 months before expiry or within 6 months after expiry with late fees. Failure to renew within the grace period will result in removal of the trademark from the register."
                  },
                  {
                    title: "Monitoring and Enforcement",
                    description: "Regularly monitor the marketplace and trademark databases for potential infringements or conflicting applications. If you discover unauthorized use of your trademark, take prompt legal action to protect your rights. This includes sending cease and desist notices, filing opposition proceedings, or initiating infringement lawsuits. For businesses in Karnataka's competitive markets, proactive monitoring is crucial."
                  },
                  {
                    title: "Use of Registered Mark",
                    description: "Use your registered trademark consistently in connection with the specified goods or services. Proper use includes displaying the R symbol to indicate registered status, maintaining quality standards, and ensuring the mark remains distinctive. Non-use of a registered trademark for 5 consecutive years may make it vulnerable to cancellation proceedings."
                  },
                  {
                    title: "Recordal of Changes",
                    description: "If there are changes in your business such as change of address, change of name, assignment, or licensing, you must record these changes with the Trademark Registry. Failure to record changes may affect your ability to enforce your trademark rights or renew your registration."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                      <i className="fas fa-shield-alt text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {item.title}
                    </h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Avoiding Pitfalls */}
          <section id="avoiding-pitfalls" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Avoiding Common Pitfalls
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
                Understanding common mistakes helps businesses in Karnataka avoid costly errors and improve their chances of successful trademark registration.
              </p>

              <div className="space-y-3">
                {[
                  {
                    mistake: "Insufficient Trademark Search",
                    solution: "Conduct comprehensive searches before filing to identify potential conflicts. Many applicants skip thorough searches and face objections or oppositions later, leading to wasted time and money."
                  },
                  {
                    mistake: "Incorrect Class Selection",
                    solution: "Selecting wrong classes can result in inadequate protection or unnecessary expenses. Tech companies in Bangalore must carefully choose between Class 9 for software products and Class 42 for IT services, or file in both if applicable."
                  },
                  {
                    mistake: "Descriptive or Generic Marks",
                    solution: "Avoid choosing marks that are merely descriptive of your goods or services. Descriptive marks face objections and are difficult to register. Choose distinctive, unique marks that can function as source identifiers."
                  },
                  {
                    mistake: "Missing Deadlines",
                    solution: "Failing to respond to examination objections or oppositions within prescribed timeframes can result in application abandonment. Set reminders and track all deadlines carefully."
                  },
                  {
                    mistake: "Incomplete Documentation",
                    solution: "Ensure all required documents are properly prepared, signed, and submitted. Incomplete or incorrect documentation can delay processing or lead to objections."
                  },
                  {
                    mistake: "Not Using Professional Assistance",
                    solution: "While self-filing is possible, professional trademark attorneys provide expertise in search, class selection, application drafting, and objection handling that significantly improves success rates."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md"
                    style={{ 
                      background: index % 2 === 0 
                        ? 'rgba(255, 183, 3, 0.08)'
                        : 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-base font-semibold mb-1 flex items-center gap-2">
                      <i className="fas fa-exclamation-triangle text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {item.mistake}
                    </h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed pl-6">
                      <strong>Solution:</strong> {item.solution}
                    </p>
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Karnataka</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Start Your Trademark Registration in Karnataka Today
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't wait to protect your brand identity. Our expert trademark attorneys provide comprehensive assistance for trademark registration in Karnataka, ensuring proper filing, class selection, and successful registration. Get started with professional trademark registration services today.
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

