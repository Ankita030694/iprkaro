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

export default function TelanganaClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'introduction', title: 'Introduction to Trademark Registration' },
      { id: 'hyderabad-tech-hub', title: 'Hyderabad as Tech and Startup Hub' },
      { id: 'key-benefits', title: 'Key Benefits' },
      { id: 'eligibility-criteria', title: 'Eligibility Criteria' },
      { id: 'registration-process', title: 'Registration Process' },
      { id: 'required-documents', title: 'Required Documents' },
      { id: 'trademark-search', title: 'Trademark Search' },
      { id: 'trademark-classes', title: 'Trademark Classes' },
      { id: 'timeline', title: 'Registration Timeline' },
      { id: 'post-registration', title: 'Post-Registration' },
      { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
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
      question: "How do I register a trademark in Telangana?",
      answer: "To register a trademark in Telangana, follow these systematic steps: First, conduct a comprehensive trademark search through the IP India database to verify availability and identify potential conflicts. Next, determine the appropriate Nice Classification classes that correspond to your business activities, especially important for tech startups in Hyderabad who typically need Class 9 for software and Class 42 for IT services. Prepare all required documents including identity proofs, business registration certificates, and a clear representation of your trademark. File Form TM-A online through the IP India portal at ipindiaservices.gov.in. After filing, your application undergoes examination by a Trademark Examiner who reviews it for compliance and conflicts. If objections are raised, respond within 30 days with supporting arguments. Once accepted, the trademark is published in the Trademark Journal for a four-month opposition period. If no opposition is filed or if oppositions are successfully resolved, you receive the registration certificate. The entire process typically takes 12 to 18 months."
    },
    {
      question: "What documents are needed for trademark registration in Telangana?",
      answer: "Document requirements vary based on applicant type. For individual proprietors, you need identity proof such as Aadhaar card, PAN card, or passport, along with address proof like electricity bills or rental agreements. For companies, provide Certificate of Incorporation, company PAN card, and board resolution authorizing the trademark application. Partnership firms need partnership deed and partner identity proofs. All applicants require a clear, high-resolution trademark representation in JPG or PNG format meeting IP India specifications. Include detailed description of goods or services under appropriate Nice Classification classes. If filing through an attorney, provide Power of Attorney on Form TM-48. For marks already in use, prepare a user affidavit stating date and place of first use. Tech startups in Hyderabad should also include startup recognition certificate if registered under Startup India to avail fee benefits."
    },
    {
      question: "Can I file trademark application online from Telangana?",
      answer: "Yes, trademark applications can be filed completely online from anywhere in Telangana through the official IP India portal at ipindiaservices.gov.in. The online filing system offers significant advantages including lower government fees compared to physical filing, faster processing, instant acknowledgment with application number, convenient document upload facility, secure online payment options, and real-time application status tracking. Tech companies and startups in Hyderabad, Secunderabad, and other cities in Telangana can complete the entire process from their offices without visiting the trademark office. Simply create an account on the IP India portal, complete Form TM-A with accurate details, upload required documents, and make online payment. The system is user-friendly and allows you to track your application progress at every stage."
    },
    {
      question: "How long does trademark registration take in Telangana?",
      answer: "Trademark registration in Telangana typically takes 12 to 18 months from application filing to certificate issuance. The timeline includes: 1 to 2 weeks for application filing and acknowledgment, 8 to 12 months for examination by the Trademark Registry, 1 to 3 months for responding to objections if any are raised, 1 to 2 months for publication in Trademark Journal after acceptance, 4 months mandatory opposition period, and 1 to 2 months for certificate issuance after opposition period concludes. Startups registered under Startup India may benefit from fast-track examination, potentially reducing the timeline to 6 to 9 months. The actual duration depends on factors like workload at the registry, complexity of your application, objections raised, and whether oppositions are filed against your mark."
    },
    {
      question: "What are the benefits of registering trademark in Telangana?",
      answer: "Registering a trademark in Telangana provides comprehensive benefits that extend nationwide across India. Legal benefits include exclusive rights to use your mark for specified goods or services, strong legal protection against infringement through civil and criminal remedies, presumption of ownership and validity in disputes, and ability to claim statutory damages from infringers. For tech startups and IT companies in Hyderabad, trademark registration enhances brand credibility, attracts investors, facilitates partnerships, and protects intellectual property assets. Business advantages include enhanced market recognition, valuable intangible asset for business valuation, licensing and franchising opportunities, deterrent effect against competitors, and foundation for international expansion through Madrid Protocol. In competitive markets like Hyderabad's IT corridor, registered trademarks differentiate your brand and prevent customer confusion."
    },
    {
      question: "Which trademark office handles Telangana applications?",
      answer: "Trademark applications from Telangana are processed by the Trade Marks Registry in Mumbai, which has territorial jurisdiction over Maharashtra, Goa, Madhya Pradesh, Chhattisgarh, and Telangana. The Mumbai office is located at Central Building, Marine Lines in Mumbai. However, with the comprehensive online filing system, businesses and individuals from Telangana can complete the entire trademark registration process electronically without visiting the physical office. All applications, responses to objections, and communications can be managed through the IP India online portal, making the process convenient for applicants across Hyderabad, Secunderabad, Warangal, and other cities in Telangana. The online system ensures equal access to trademark registration services regardless of geographical location."
    },
    {
      question: "Can startups in Telangana get benefits for trademark registration?",
      answer: "Yes, startups in Telangana recognized under the Startup India program receive significant benefits for trademark registration. Eligible startups get 50 percent rebate on trademark filing fees, making intellectual property protection more affordable. They can access fast-track examination services, potentially reducing registration timeline from 12-18 months to 6-9 months. The government provides a panel of facilitators offering free professional guidance for filing applications, responding to objections, and handling oppositions. Startups are exempt from showing proof of use for the first three years, allowing them to file on proposed-to-be-used basis. To qualify, your startup must be registered with DPIIT, have a valid recognition certificate, be less than 10 years old, and have annual turnover not exceeding Rs 100 crores. These benefits are particularly valuable for tech startups in Hyderabad's thriving startup ecosystem."
    },
    {
      question: "What happens if my trademark application gets objected in Telangana?",
      answer: "If your trademark application receives an examination objection from the Mumbai Trademark Office, you must respond within 30 days from the objection date, though one extension may be requested. Common objections include similarity with existing marks, lack of distinctiveness, descriptiveness, prohibited matter, or specification issues. To respond effectively, carefully analyze the examination report to understand each objection ground and legal provisions cited. Research relevant case laws and precedents supporting your position. Prepare a comprehensive written response addressing each objection with legal arguments, evidence of use, distinctiveness proofs, or coexistence agreements. For tech startups in Hyderabad, if the objection relates to similarity with existing software or IT service marks, provide evidence showing material differences in services, target markets, or business models. Consider requesting a personal hearing for complex objections. Professional assistance from experienced trademark attorneys significantly improves success rates in overcoming objections."
    },
    {
      question: "Can I use TM symbol before registration in Telangana?",
      answer: "Yes, you can use the TM symbol immediately after filing your trademark application in Telangana, even before registration is complete. The TM symbol indicates you are claiming rights to the mark as a trademark, though it is not yet registered. This is particularly useful for tech startups in Hyderabad who want to signal brand protection while their application is pending. However, you cannot use the registered trademark symbol R in a circle until your trademark registration is complete and you receive the registration certificate. Using the R symbol without registration is a legal offense that may attract penalties. Once your trademark is successfully registered, you should switch from TM to R symbol to indicate registered status and gain full legal protection under the Trademarks Act."
    },
    {
      question: "Do I need a lawyer for trademark registration in Telangana?",
      answer: "While hiring a trademark attorney is not mandatory, professional legal assistance is highly recommended, especially for tech startups and businesses in Hyderabad's competitive market. Trademark attorneys conduct comprehensive searches across multiple databases to identify potential conflicts that basic searches might miss. They ensure accurate class selection under Nice Classification, preventing inadequate protection or unnecessary expenses. Experienced attorneys draft applications strategically to minimize objection risks and maximize protection scope. They handle examination objections with legal expertise, citing relevant case laws and preparing persuasive arguments. If oppositions are filed, professional representation becomes crucial for successful defense. Attorneys provide strategic guidance on trademark portfolio management, enforcement actions, licensing agreements, and renewal management. For businesses serious about brand protection in Hyderabad's tech ecosystem, the investment in professional services often prevents costly mistakes and significantly improves registration success rates."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Telangana"
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
              <span className="text-[#FFB703] font-medium">Telangana</span>
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
                Trademark Registration in Telangana: Complete Guide for Tech Startups and Businesses 2025
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
                Telangana, with Hyderabad as its dynamic capital, has emerged as one of India's premier technology and startup hubs, often called Cyberabad. The state hosts thousands of IT companies, innovative startups, biotechnology firms, pharmaceutical companies, and service enterprises that understand the critical importance of protecting their brand identity and intellectual property assets.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                This comprehensive guide provides detailed information about trademark registration specifically tailored for businesses operating in Telangana. Whether you run a tech startup in Hyderabad's HITEC City, a biotechnology company in Genome Valley, a pharmaceutical firm, or a service enterprise, understanding the trademark registration process is essential for protecting your brand, attracting investors, and building sustainable competitive advantage in one of India's most innovative business ecosystems.
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
                Understanding Trademark Registration in Telangana
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
                A trademark serves as a distinctive identifier that distinguishes your business, products, or services from competitors in the marketplace. It can be a word, phrase, logo, symbol, design, color combination, sound, or any unique sign that customers associate with your brand. In India, trademarks are governed by the Trademarks Act of 1999, which provides a comprehensive legal framework for registration, protection, and enforcement of trademark rights, administered by the Office of the Controller General of Patents, Designs and Trademarks.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For businesses in Telangana, trademark registration is processed through the Trade Marks Registry in Mumbai, which has territorial jurisdiction over Maharashtra, Goa, Madhya Pradesh, Chhattisgarh, and Telangana. However, the protection granted by registration extends nationwide across all Indian states and union territories, not just the jurisdictional area. This means a trademark registered from Telangana provides exclusive rights throughout India, making it particularly valuable for tech startups and companies planning national expansion.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Trademark registration provides exclusive legal rights to use your mark in connection with specified goods or services, prevents unauthorized usage by competitors, enables legal enforcement through courts, and establishes your brand as a valuable business asset. For businesses in Telangana operating across diverse sectors including information technology, biotechnology, pharmaceuticals, software development, mobile applications, cloud services, artificial intelligence, fintech, edtech, and professional services, trademark protection is fundamental for building sustainable competitive advantage, attracting investment, and ensuring long-term growth in India's most innovative business ecosystem.
              </p>
            </div>
          </section>

          {/* Hyderabad Tech Hub Section */}
          <section id="hyderabad-tech-hub" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Hyderabad: India's Premier Tech and Startup Hub
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
                Hyderabad, the capital of Telangana, has transformed into one of India's most dynamic technology and startup ecosystems, earning the nickname Cyberabad. The city hosts a thriving concentration of IT companies, innovative startups, multinational corporations, research institutions, and technology parks that make trademark registration essential for brand protection and competitive advantage.
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
                    <i className="fas fa-laptop-code text-[#FFB703]" aria-hidden="true"></i>
                    HITEC City and IT Corridor
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Hyderabad's HITEC City houses hundreds of IT companies, software development firms, and technology service providers. The area includes major tech parks like Cyber Towers, Cyber Gateway, and Raheja Mindspace, creating intense competition where brand differentiation through registered trademarks is crucial. Tech startups developing software, mobile applications, cloud services, and AI solutions need trademark protection to establish brand identity, prevent confusion, and attract venture capital funding that often requires intellectual property protection as part of due diligence.
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
                    Thriving Startup Ecosystem
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Hyderabad ranks among India's top startup destinations with thousands of innovative startups across fintech, edtech, healthtech, agritech, and enterprise software. The city hosts numerous incubators, accelerators, and co-working spaces supporting early-stage companies. For startups seeking seed funding, Series A funding, or participating in accelerator programs, registered trademarks demonstrate professionalism, protect investor interests, increase business valuation, and provide competitive moat essential for long-term success. Many investors specifically look for trademark registration as part of investment due diligence.
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
                    <i className="fas fa-dna text-[#FFB703]" aria-hidden="true"></i>
                    Genome Valley and Biotechnology
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Genome Valley in Hyderabad is one of India's largest biotechnology clusters, hosting pharmaceutical companies, biotech firms, research institutions, and life sciences companies. Companies in this sector require strong trademark protection for drug names, medical devices, diagnostic tools, and biotech products. Trademark registration helps establish brand credibility, meet regulatory requirements, prevent counterfeiting, and protect valuable intellectual property assets in highly competitive pharmaceutical and biotechnology markets.
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
                    <i className="fas fa-building text-[#FFB703]" aria-hidden="true"></i>
                    Multinational Corporation Presence
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Hyderabad hosts major multinational corporations including Microsoft, Google, Amazon, Facebook, Oracle, IBM, and numerous Fortune 500 companies with development centers and regional offices. This concentration of global tech leaders creates a competitive environment where local startups and businesses must protect their brands through trademark registration. Registered trademarks help smaller companies compete effectively, prevent larger entities from using similar marks, and establish credibility in markets dominated by international brands.
                  </p>
                </div>
              </div>
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
                Key Benefits of Trademark Registration for Telangana Businesses
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
                    icon: "fas fa-shield-alt",
                    title: "Exclusive Nationwide Rights",
                    description: "Trademark registration grants you exclusive rights to use your mark throughout India for specified goods or services. No other business can legally register or use an identical or confusingly similar mark in the same class, providing complete control over your brand identity and preventing unauthorized exploitation by competitors."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Strong Legal Protection",
                    description: "Registered trademark owners can file civil infringement suits seeking injunctions, damages, and account of profits. Criminal prosecution is available for deliberate counterfeiting. Courts presume validity of registered marks, placing burden of proof on defendants and simplifying enforcement proceedings significantly."
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Enhanced Business Valuation",
                    description: "A registered trademark becomes a valuable intangible asset that appreciates with business growth. For tech startups in Hyderabad seeking funding, registered trademarks increase business valuation, attract investors, facilitate mergers and acquisitions, and contribute substantially to overall company worth."
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Investor Attraction and Funding",
                    description: "Venture capitalists and angel investors often require trademark registration as part of due diligence. Registered trademarks demonstrate professionalism, protect investor interests, reduce legal risks, and signal serious commitment to brand building, making your startup more attractive for seed funding, Series A, and subsequent funding rounds."
                  },
                  {
                    icon: "fas fa-globe",
                    title: "International Expansion Foundation",
                    description: "Indian trademark registration serves as the basis for international protection through the Madrid Protocol, allowing you to extend trademark protection to over 120 countries through a single application. This facilitates seamless international business expansion for Hyderabad-based tech companies planning global markets."
                  },
                  {
                    icon: "fas fa-ban",
                    title: "Competitive Market Protection",
                    description: "In Hyderabad's competitive tech ecosystem with thousands of startups and IT companies, registered trademarks differentiate your offerings from competitors. Customers can easily identify authentic products and services, reducing confusion and building loyalty while preventing competitors from using similar marks that could divert your customers."
                  },
                  {
                    icon: "fas fa-certificate",
                    title: "Brand Credibility and Trust",
                    description: "Registered trademarks enhance your business reputation and customer confidence. The R symbol signals professionalism, quality commitment, and market permanence. For tech startups, this credibility is essential for attracting customers, partners, and talent in competitive markets like HITEC City and Genome Valley."
                  },
                  {
                    icon: "fas fa-sync",
                    title: "Perpetual Protection",
                    description: "Unlike patents that expire after 20 years, trademarks can be renewed indefinitely every 10 years, providing unlimited protection duration. As long as you use the mark and renew timely, your brand remains protected forever, building equity and recognition across generations of your business."
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

          {/* Required Documents Section */}
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
                Required Documents for Trademark Registration in Telangana
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
                Proper documentation is crucial for smooth application processing and timely registration. Requirements vary based on applicant type and business structure, with specific considerations for tech startups and IT companies in Hyderabad.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Identity Proof Documents",
                    icon: "fas fa-id-card",
                    items: [
                      "Aadhaar card with photograph and current address",
                      "PAN card issued by Income Tax Department",
                      "Valid passport for Indian or foreign nationals",
                      "Driving license issued by regional transport office",
                      "Voter ID card with photograph",
                      "Any other government-issued photo identification"
                    ]
                  },
                  {
                    title: "Business Entity Documents",
                    icon: "fas fa-briefcase",
                    items: [
                      "Certificate of Incorporation for companies",
                      "Partnership Deed for partnership firms",
                      "LLP Agreement for Limited Liability Partnerships",
                      "Trust Deed for trusts and societies",
                      "GST Registration Certificate",
                      "Startup India recognition certificate for eligible startups"
                    ]
                  },
                  {
                    title: "Address Verification Proofs",
                    icon: "fas fa-map-marker-alt",
                    items: [
                      "Electricity or water bill within three months",
                      "Property tax receipt or assessment document",
                      "Registered lease or rental agreement",
                      "Bank statement showing address within three months",
                      "Telephone or internet connection bill",
                      "Municipal corporation address proof"
                    ]
                  },
                  {
                    title: "Trademark Representation",
                    icon: "fas fa-image",
                    items: [
                      "High-resolution logo in JPG or PNG format",
                      "Minimum 300 DPI resolution for clarity",
                      "Maximum file size of 2 MB",
                      "Standard font wordmark for text-only marks",
                      "Color specifications with Pantone or RGB codes",
                      "Multiple angles for three-dimensional marks"
                    ]
                  },
                  {
                    title: "Authorization Documents",
                    icon: "fas fa-file-contract",
                    items: [
                      "Power of Attorney on Form TM-48",
                      "Board resolution for company applications",
                      "Partner authorization for partnership firms",
                      "Notarized documents where required",
                      "Digital signature certificate for online filing",
                      "Applicant signatures on all relevant forms"
                    ]
                  },
                  {
                    title: "Supporting Documents",
                    icon: "fas fa-folder-plus",
                    items: [
                      "User affidavit stating first use date",
                      "Evidence of trademark use if claiming prior use",
                      "Consent letter from similar mark owner",
                      "Priority documents for convention claims",
                      "Translation certificates for foreign language marks",
                      "Series application supporting documentation"
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
                  <strong>Document Preparation Tips:</strong> Maintain digital copies of all documents in high quality. Use color scans for better clarity. Self-attest all documents by signing across. Ensure document validity and currency. For tech startups in Hyderabad, include startup recognition certificate to avail 50 percent fee rebate. Keep documents organized in dedicated folders for easy access during application filing and subsequent communications with the Trademark Registry.
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
                Conducting Effective Trademark Search in Telangana
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
                Trademark search is the most critical preliminary step before filing application. Comprehensive search helps avoid application rejection, legal disputes, and rebranding costs. For tech startups in Hyderabad, thorough search is especially important given the competitive tech ecosystem with thousands of software companies and IT services providers.
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
                    Access the official trademark search at ipindiaservices.gov.in and search for identical and similar marks. Use different search criteria including wordmark search, Vienna code search for devices, phonetic search for sound-alike marks, and class-wise search. Check both registered marks and pending applications. For tech startups, search across Class 9 for software and Class 42 for IT services, as well as related classes. Search across all classes, not just your intended class, as some marks enjoy cross-class protection.
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
                    Search for business names in directories like Justdial, Indiamart, and Google My Business for Hyderabad businesses. Check domain name availability through WHOIS databases and domain registrars. Review social media platforms including Facebook, Instagram, Twitter, LinkedIn, and GitHub for existing brand presence, especially important for tech startups. Search e-commerce platforms like Amazon, Flipkart, and app stores for product listings and mobile applications. This comprehensive commercial search identifies common law rights and unregistered mark usage that could conflict with your proposed trademark.
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
                    Analyze search results for phonetic similarity, visual similarity, and conceptual similarity with existing marks. Assess likelihood of confusion based on mark similarity, goods or services similarity, and trade channels overlap. Evaluate priority dates of conflicting marks and their registration status. Consider geographical market presence and reputation of similar marks, particularly in Hyderabad's tech ecosystem. Professional trademark search reports provide detailed risk analysis, registration success probability, and strategic recommendations for proceeding or modifying your mark to avoid conflicts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trademark Classes Section */}
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
                Understanding Trademark Classes for Telangana Applications
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
                The Nice Classification system divides all goods and services into 45 international classes. Proper class selection is critical for adequate trademark protection and avoiding future limitations. Here is a guide to important classes relevant for businesses in Telangana, especially tech startups and IT companies in Hyderabad.
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
                    Important Goods Classes (1-34)
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 5:</strong> Pharmaceuticals, dietary supplements, medical products (Genome Valley companies)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 9:</strong> Software, mobile apps, electronics, computers, computer programs (essential for tech startups)</span>
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
                    Critical Services Classes (35-45)
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 35:</strong> Advertising, marketing, business management, retail services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 36:</strong> Financial services, banking, insurance, fintech services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 41:</strong> Education, training, entertainment, edtech services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 42:</strong> IT services, software development, technical consulting, cloud services (critical for Hyderabad tech companies)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 43:</strong> Restaurant services, catering, hotel services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-tag text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 44:</strong> Medical services, healthcare, healthtech services</span>
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
                  <strong>Important:</strong> You can file trademark application in multiple classes, but separate fees apply for each class. Tech startups in Hyderabad typically need Class 9 for software products and Class 42 for IT services. E-commerce businesses need Class 35 for online retail services plus classes for actual products. Biotechnology companies in Genome Valley often need Class 5 for pharmaceuticals and Class 44 for medical services. Professional consultation ensures you select all relevant classes for comprehensive protection without unnecessary expense.
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
                Trademark Registration Timeline in Telangana
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
                Understanding the trademark registration timeline helps set realistic expectations and plan your brand protection strategy. Here is the typical timeline for trademark registration in Telangana, with special considerations for startups.
              </p>

              <div className="space-y-3">
                {[
                  { stage: "Trademark Search and Preparation", duration: "1-2 weeks", description: "Conduct comprehensive trademark search, analyze results, select appropriate classes, prepare documentation, and organize application materials. Professional search services provide detailed reports with risk analysis. For tech startups, this includes searching software and IT service classes thoroughly." },
                  { stage: "Application Filing and Acknowledgment", duration: "1-2 weeks", description: "File Form TM-A online through IP India portal, upload all documents, make fee payment, and receive application number. The acknowledgment confirms that your application is accepted for processing by the Mumbai Trademark Office. Startups registered under Startup India receive 50 percent fee rebate." },
                  { stage: "Formality Check and Journal Publication", duration: "2-4 weeks", description: "The Registry conducts initial formality check to verify completeness of application. Upon passing formality check, your application details are published in the Trademark Journal for public record and transparency." },
                  { stage: "Examination by Trademark Registry", duration: "8-12 months", description: "A Trademark Examiner reviews your application thoroughly for compliance with legal requirements, distinctiveness, and conflicts with existing marks. The examiner may accept the application directly or issue examination report with objections. Startups may benefit from fast-track examination reducing this to 6-9 months." },
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
                  <strong>Total Timeline:</strong> The complete trademark registration process in Telangana typically takes 12 to 18 months from filing to certificate issuance. This timeline assumes no major objections or oppositions. Applications with objections or oppositions may take 18 to 24 months or longer. Fast-track examination is available for eligible startups registered under Startup India, potentially reducing timeline by several months.
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
                Receiving your trademark registration certificate is just the beginning of brand protection journey. Active maintenance and enforcement ensure your trademark rights remain strong and effective. Here are critical post-registration steps for businesses in Telangana.
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
                    description: "Regularly monitor marketplace for unauthorized use of your trademark or confusingly similar marks. Use watch services to track new trademark applications that may conflict with your mark. Monitor online platforms, social media, e-commerce sites, app stores, and physical markets in Hyderabad and across India for infringement."
                  },
                  {
                    icon: "fas fa-exclamation-circle",
                    title: "Enforcement Against Infringement",
                    description: "Take prompt action against trademark infringement to maintain rights and prevent dilution. Send cease and desist notices to infringers demanding immediate stoppage. File infringement suits in appropriate courts seeking injunctions, damages, and account of profits. Criminal complaints can be filed for deliberate trademark counterfeiting."
                  },
                  {
                    icon: "fas fa-edit",
                    title: "Trademark Records Updates",
                    description: "Update trademark records whenever there are changes in ownership, business name, address, or authorized signatory. File Form TM-23 for assignment or transmission, Form TM-24 for address changes, and Form TM-54 for name changes. Keeping records current ensures you receive important communications from the Registry."
                  },
                  {
                    icon: "fas fa-file-contract",
                    title: "Usage Documentation",
                    description: "Maintain comprehensive documentation of trademark use including invoices, advertisements, product catalogs, marketing materials, sales records, and app store listings. Usage evidence is crucial if you need to defend against non-use cancellation actions. Document first use date, continuous use, and geographical extent of use."
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
                Avoiding common mistakes during trademark registration saves time, money, and prevents application rejection. Here are critical errors to avoid, especially relevant for tech startups and businesses in Telangana.
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: "fas fa-search-minus",
                    title: "Inadequate Trademark Search",
                    description: "Filing application without comprehensive search is the most common mistake. Many applicants rely only on simple Google searches or basic database searches, missing similar marks that could cause rejection. For tech startups in Hyderabad, always conduct thorough professional trademark search covering phonetic variants, visual similarities, related classes, and common law usage before filing.",
                    severity: "high"
                  },
                  {
                    icon: "fas fa-font",
                    title: "Choosing Generic or Descriptive Names",
                    description: "Generic terms, common surnames, and direct descriptions of products or services are not registrable as trademarks. Avoid marks like Hyderabad Software, Best Tech, or Quick Service App. Choose distinctive, invented, or suggestive marks that can be protected. Add unique elements to common words to create distinctiveness.",
                    severity: "high"
                  },
                  {
                    icon: "fas fa-layer-group",
                    title: "Incorrect Class Selection",
                    description: "Selecting wrong classes or inadequate classes limits protection scope and creates future problems. Many tech startups file in single class when multiple classes are needed, leaving business vulnerable in other areas. Software companies need both Class 9 for products and Class 42 for services. E-commerce businesses particularly need careful class selection covering retail services and actual products.",
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
                    description: "While self-filing is possible, lack of professional expertise often leads to rejections, inadequate protection, or costly mistakes. Professional trademark attorneys understand examination standards, have experience handling objections, and ensure proper filing that maximizes registration success probability, especially important for tech startups in competitive markets.",
                    severity: "low"
                  },
                  {
                    icon: "fas fa-ban",
                    title: "Using Prohibited or Offensive Matter",
                    description: "Marks containing national emblems, religious symbols, scandalous matter, or misleading representations are prohibited under Section 9 and Section 11 of Trademarks Act. Avoid using Ashoka Chakra, Indian flag, state emblems, religious symbols, or any matter that hurts religious sentiments or public morality.",
                    severity: "high"
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Telangana</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Get Expert Trademark Registration Assistance for Tech Startups
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Whether you are a tech startup in Hyderabad's HITEC City, a biotechnology company in Genome Valley, or an innovative business across Telangana, our experienced trademark attorneys provide comprehensive support for trademark registration, objection handling, opposition defense, and brand protection tailored for the tech and startup ecosystem.
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
                    Start Your Registration
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
                Frequently Asked Questions About Trademark Registration in Telangana
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
