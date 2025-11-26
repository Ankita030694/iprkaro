'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function GujaratClient() {
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
      { id: 'gujarat-business-context', title: 'Gujarat Business Context' },
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
      question: "How to register a trademark in Gujarat?",
      answer: "To register a trademark in Gujarat, you need to: 1) Conduct a comprehensive trademark search to ensure availability, 2) Prepare all required documents including identity proof, address proof, and trademark representation, 3) File Form TM-A online through IP India portal or with professional assistance, 4) Respond to any examination objections if raised, 5) Wait for publication in Trademark Journal, and 6) Receive registration certificate upon successful completion. The entire process typically takes 12-18 months."
    },
    {
      question: "What documents are required for trademark registration in Gujarat?",
      answer: "Required documents for trademark registration in Gujarat include: Identity proof of applicant (Aadhar card, passport, or driving license), Address proof (utility bills, rental agreement, or voter ID), Clear representation of trademark (logo image or wordmark in high resolution), Description of goods or services for which registration is sought, Power of Attorney (Form TM-48) if filing through an agent, Incorporation certificate if applicant is a company, Partnership deed if applicant is a partnership firm, and any supporting documents showing use of trademark if already in use."
    },
    {
      question: "How long does trademark registration take in Gujarat?",
      answer: "Trademark registration in Gujarat typically takes 12 to 18 months from the date of filing to final registration certificate issuance. The timeline includes: 1-2 months for application filing and acknowledgment, 8-12 months for examination and examination report, 1-2 months for responding to objections if any, 2-4 months for publication in Trademark Journal, 4 months opposition period, and 1-2 months for registration certificate issuance. The timeline may vary based on objections, oppositions, or other complications."
    },
    {
      question: "Can I register a trademark online in Gujarat?",
      answer: "Yes, you can register a trademark online in Gujarat through the official IP India website (ipindiaservices.gov.in). The online filing process is faster, more convenient, and cost-effective compared to physical filing. You can file Form TM-A online, upload required documents, make online payment, and track application status. However, professional assistance from trademark attorneys or consultants is recommended to ensure proper filing, correct class selection, and to handle any objections or oppositions that may arise during the process."
    },
    {
      question: "Who can apply for trademark registration in Gujarat?",
      answer: "Any person or entity can apply for trademark registration in Gujarat, including: Individuals (sole proprietors), Partnership firms, Companies (private limited, public limited, one person company), Limited Liability Partnerships (LLPs), Trusts and societies, Hindu Undivided Families (HUFs), Foreign individuals and companies, and Joint applicants. The applicant must have a valid business address or intend to use the trademark in connection with goods or services in India."
    },
    {
      question: "What is the validity period of a registered trademark in Gujarat?",
      answer: "A registered trademark in Gujarat is valid for 10 years from the date of registration. The trademark can be renewed indefinitely for successive periods of 10 years each by filing a renewal application and paying the renewal fees before the expiry date. Renewal applications should be filed 6 months before expiry or within 6 months after expiry (with late fees). Failure to renew within the grace period will result in removal of the trademark from the register."
    },
    {
      question: "What are the benefits of trademark registration in Gujarat?",
      answer: "Benefits of trademark registration in Gujarat include: Exclusive legal rights to use the trademark in connection with specified goods or services, Legal protection against infringement and unauthorized use, Right to sue for damages and seek injunctions against infringers, Enhanced brand value and credibility in the market, Ability to license or franchise the trademark, Protection across India (not limited to Gujarat), Deterrent effect against potential infringers, Asset creation for business valuation, and Foundation for international trademark protection through Madrid Protocol."
    },
    {
      question: "What happens if someone opposes my trademark application in Gujarat?",
      answer: "If someone files an opposition against your trademark application in Gujarat, you will receive a notice of opposition. You have 2 months from the date of receipt to file a counter-statement defending your application. The opponent then has 2 months to file evidence in support of opposition, followed by your opportunity to file evidence in support of application. The Trademark Registry will conduct a hearing and decide whether to register or refuse your trademark. Professional legal assistance is crucial to successfully defend oppositions."
    },
    {
      question: "Do I need a lawyer for trademark registration in Gujarat?",
      answer: "While it is not mandatory to hire a lawyer for trademark registration in Gujarat, professional assistance from trademark attorneys or consultants is highly recommended. They help with: Comprehensive trademark search and availability analysis, Proper class selection and application drafting, Filing error-free applications, Responding to examination objections effectively, Handling oppositions and legal proceedings, Ensuring compliance with trademark laws, Maximizing chances of successful registration, and Saving time and avoiding costly mistakes. Professional assistance significantly improves registration success rates."
    },
    {
      question: "What are the major business cities in Gujarat where trademark registration is common?",
      answer: "Major business cities in Gujarat where trademark registration is common include Ahmedabad (commercial and industrial hub), Surat (diamond and textile industries), Vadodara (chemical and pharmaceutical industries), Rajkot (engineering and manufacturing), Gandhinagar (government and administrative services), Jamnagar (petroleum and refining), Bhavnagar (shipbuilding and port services), and Ankleshwar (chemical industries). Businesses in these cities frequently register trademarks to protect their brand identity and intellectual property."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {/* Table of Contents */}
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Gujarat"
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
              <span className="text-[#FFB703] font-medium">Gujarat</span>
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
                Trademark Registration in Gujarat: Complete Guide & Process 2025
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
                Gujarat, one of India's most economically vibrant states, is home to thriving business centers like Ahmedabad, Surat, Vadodara, and Rajkot. With a strong industrial base spanning textiles, chemicals, pharmaceuticals, engineering, and manufacturing, Gujarat sees thousands of businesses seeking trademark protection annually. Whether you operate a textile unit in Surat, a pharmaceutical company in Vadodara, or a startup in Ahmedabad, securing your brand identity through trademark registration is essential for long-term business success and legal protection.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                This comprehensive guide provides detailed information about trademark registration in Gujarat, including step-by-step process, required documents, timeline, and expert assistance to help you successfully register your trademark and secure exclusive rights to your brand across India.
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
                A trademark is a distinctive sign, symbol, word, phrase, logo, design, or combination thereof that identifies and distinguishes the goods or services of one business from those of others. Trademark registration in Gujarat grants you exclusive legal rights to use your trademark in connection with the specified goods or services throughout India.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                When you register a trademark in Gujarat, you obtain nationwide protection, not just limited to the state. The registration is governed by the Trademarks Act, 1999, and administered by the Office of the Controller General of Patents, Designs, and Trademarks (CGPDTM) under the Ministry of Commerce and Industry, Government of India.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Trademark registration provides legal recognition of your brand, prevents others from using similar marks, and establishes your ownership rights. This is particularly important in Gujarat's competitive business environment, where industries like textiles, chemicals, pharmaceuticals, and manufacturing require strong brand differentiation and protection for market success.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                In Gujarat's diverse industrial landscape, from the diamond polishing units of Surat to the pharmaceutical companies of Vadodara, trademark registration serves as a critical tool for brand protection. It helps businesses establish their unique identity in crowded markets and provides legal recourse against infringement, which is essential for maintaining competitive advantage in Gujarat's thriving economy.
              </p>
            </div>
          </section>

          {/* Benefits of Trademark Registration in Gujarat */}
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
                Benefits of Trademark Registration in Gujarat
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
                    description: "Trademark registration grants you exclusive rights to use your mark in connection with specified goods or services. No other business can use an identical or confusingly similar mark for similar goods or services without your permission. This is crucial for Gujarat businesses operating in competitive sectors like textiles, chemicals, and manufacturing."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Legal Protection Against Infringement",
                    description: "Registered trademark owners can take legal action against infringers, seek damages, obtain injunctions, and prevent unauthorized use of their marks. This protection is essential in Gujarat's industrial hubs where brand imitation can significantly impact business operations and market share."
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Enhanced Brand Value",
                    description: "A registered trademark increases your brand's credibility, value, and market position. It signals to customers, investors, and partners that you are serious about protecting your intellectual property. For Gujarat businesses, this is particularly valuable when dealing with international clients and investors."
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Licensing and Franchising Opportunities",
                    description: "Registered trademarks can be licensed or franchised, creating additional revenue streams. This is particularly valuable for businesses expanding across Gujarat and India, allowing you to monetize your brand while maintaining quality control."
                  },
                  {
                    icon: "fas fa-globe",
                    title: "Nationwide Protection",
                    description: "Trademark registration in Gujarat provides protection across all of India, not just within the state. Your rights extend to every state and union territory, which is essential for businesses with pan-India operations or expansion plans."
                  },
                  {
                    icon: "fas fa-dollar-sign",
                    title: "Asset Creation",
                    description: "A registered trademark is an intangible asset that can be valued, sold, transferred, or used as collateral. It adds significant value to your business balance sheet and can be crucial during mergers, acquisitions, or fundraising activities in Gujarat's dynamic business environment."
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

          {/* Steps to Register Trademark in Gujarat */}
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
                Step-by-Step Process to Register Trademark in Gujarat
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
                    step: "Step 1: Trademark Search and Availability Check",
                    description: "Before filing your application, conduct a comprehensive trademark search to ensure your proposed mark is available and doesn't conflict with existing registrations or pending applications. Search the Trademark Registry database, check for identical and similar marks, analyze goods/services overlap, and assess registration risks. Professional trademark search services can help identify potential conflicts early and save time and money. For Gujarat businesses, this is especially important given the competitive nature of industries like textiles, chemicals, and pharmaceuticals."
                  },
                  {
                    step: "Step 2: Prepare Required Documents",
                    description: "Gather all necessary documents for trademark registration. This includes identity proof (Aadhar card, passport, or driving license), address proof (utility bills, rental agreement, or voter ID), clear representation of your trademark (high-resolution logo image or wordmark), description of goods or services, Power of Attorney (Form TM-48) if filing through an agent, incorporation certificate if you are a company, partnership deed if you are a partnership firm, and any evidence of trademark use if already in use. Ensure all documents are properly attested and in the required format."
                  },
                  {
                    step: "Step 3: Determine Trademark Class",
                    description: "Identify the correct Nice Classification class or classes for your goods or services. The Nice Classification system divides all goods and services into 45 classes (1-34 for goods, 35-45 for services). Selecting the correct class is crucial as it determines the scope of protection. You can file in multiple classes, but separate fees apply for each class. Professional assistance helps ensure proper class selection. For Gujarat businesses, common classes include Class 25 for textiles, Class 5 for pharmaceuticals, Class 1 for chemicals, and Class 35 for business services."
                  },
                  {
                    step: "Step 4: File Trademark Application (Form TM-A)",
                    description: "File your trademark application using Form TM-A through the IP India online portal (ipindiaservices.gov.in) or physically at the Trademark Registry office. The application must include: applicant details, trademark representation, description of goods/services, class number, basis of application (proposed to be used or already in use), and payment of applicable fees. Online filing is faster, more convenient, and cost-effective. The Mumbai Trademark Registry office handles applications from Gujarat, though online filing eliminates the need for physical visits."
                  },
                  {
                    step: "Step 5: Application Acknowledgment and Examination",
                    description: "After filing, you receive an acknowledgment with application number. The Trademark Registry examines your application within 8-12 months to check compliance with legal requirements, distinctiveness, and conflicts with existing marks. The Examiner issues an Examination Report if any objections are raised, which must be responded to within 30 days (extendable by another 30 days). The examination process ensures that only distinctive and non-conflicting marks are registered."
                  },
                  {
                    step: "Step 6: Respond to Examination Objections (if any)",
                    description: "If the Examiner raises objections, you must file a comprehensive reply addressing each objection. Common objections include lack of distinctiveness, similarity with existing marks, or incorrect class selection. A well-drafted objection reply with legal arguments, evidence, and case law citations can overcome most objections. Professional legal assistance significantly improves success rates. For Gujarat businesses, having expert representation is crucial given the complexity of trademark law."
                  },
                  {
                    step: "Step 7: Publication in Trademark Journal",
                    description: "If the application is accepted (either initially or after overcoming objections), it is published in the Trademark Journal for public inspection. The publication allows third parties to oppose your application if they believe it conflicts with their rights. The journal is published weekly, and your mark remains open for opposition for 4 months from the publication date. This public scrutiny ensures transparency in the registration process."
                  },
                  {
                    step: "Step 8: Opposition Period",
                    description: "During the 4-month opposition period, any person can file an opposition against your trademark application. If an opposition is filed, you must defend your application by filing a counter-statement, submitting evidence, and attending hearings. If no opposition is filed or if you successfully defend against opposition, your application proceeds to registration. Professional legal assistance is essential during opposition proceedings to protect your rights."
                  },
                  {
                    step: "Step 9: Registration Certificate Issuance",
                    description: "Upon successful completion of all stages, the Trademark Registry issues your registration certificate. The certificate confirms your exclusive rights to use the trademark in connection with the specified goods or services. The registration is valid for 10 years from the date of application filing and can be renewed indefinitely. This certificate serves as legal proof of your trademark ownership and can be used in legal proceedings if needed."
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

          {/* How to Register Trademark in Gujarat */}
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
                How to Register Trademark in Gujarat: Detailed Guide
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
                Registering a trademark in Gujarat can be done through two methods: online filing through the IP India portal or physical filing at the Trademark Registry office. Online filing is recommended as it is faster, more convenient, and cost-effective. Gujarat businesses, especially those in Ahmedabad, Surat, and Vadodara, benefit significantly from online filing as it eliminates the need to travel to Mumbai for physical submission.
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
                    <li>Visit the official IP India website (ipindiaservices.gov.in) and create an account or login if you already have one.</li>
                    <li>Navigate to the Trademark section and select "New Application" or "Form TM-A".</li>
                    <li>Fill in all required details including applicant information, trademark representation, goods/services description, and class selection.</li>
                    <li>Upload scanned copies of required documents (identity proof, address proof, trademark image, Power of Attorney if applicable).</li>
                    <li>Review all information carefully to ensure accuracy and completeness, especially for Gujarat-specific business details.</li>
                    <li>Make online payment of applicable fees using credit card, debit card, net banking, or UPI.</li>
                    <li>Submit the application and download the acknowledgment receipt with application number.</li>
                    <li>Track your application status regularly through the IP India portal using your application number.</li>
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
                    <li>Download Form TM-A from the IP India website or obtain it from the Trademark Registry office.</li>
                    <li>Fill in the form manually with all required details in black ink and block letters.</li>
                    <li>Attach all required documents (self-attested copies of identity proof, address proof, trademark representation, Power of Attorney, etc.).</li>
                    <li>Prepare a demand draft or pay order for the applicable fees payable to the Registrar of Trademarks.</li>
                    <li>Submit the complete application package at the Mumbai Trademark Registry office (which handles Gujarat applications).</li>
                    <li>Obtain acknowledgment receipt with application number and date of filing.</li>
                    <li>Track application status through the IP India portal or by visiting the registry office.</li>
                  </ol>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-info-circle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Important Note:</strong> While you can file the application yourself, professional assistance from trademark attorneys or consultants is highly recommended. They ensure proper filing, correct class selection, comprehensive search, and effective handling of objections and oppositions, significantly improving your chances of successful registration. This is particularly valuable for Gujarat businesses operating in competitive industries.
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
                Documents Required for Trademark Registration in Gujarat
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
                    items: ["Aadhar card", "Passport", "Driving license", "Voter ID card", "PAN card"]
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
                Trademark Registration Timeline in Gujarat
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
                The trademark registration process in Gujarat typically takes 12 to 18 months from filing to certificate issuance. However, the timeline can vary based on several factors including objections, oppositions, and complexity of the application. Gujarat businesses should plan accordingly and maintain regular communication with their trademark attorneys throughout the process.
              </p>

              <div className="space-y-3">
                {[
                  { stage: "Application Filing and Acknowledgment", duration: "1-2 months", description: "After filing your application, you receive an acknowledgment receipt with application number within 1-2 months. This confirms that your application has been accepted for processing. Gujarat businesses can track this status online through the IP India portal." },
                  { stage: "Examination by Trademark Registry", duration: "8-12 months", description: "The Trademark Examiner reviews your application for compliance, distinctiveness, and conflicts. An Examination Report is issued if any objections are raised, typically within 8-12 months of filing. This stage requires careful attention to ensure all requirements are met." },
                  { stage: "Response to Objections (if any)", duration: "1-2 months", description: "If objections are raised, you have 30 days (extendable by another 30 days) to file a comprehensive reply. The Examiner reviews your response and decides whether to accept or maintain objections. Professional legal assistance is crucial at this stage for Gujarat businesses." },
                  { stage: "Publication in Trademark Journal", duration: "2-4 months", description: "Once accepted, your trademark is published in the weekly Trademark Journal. This usually happens within 2-4 months after acceptance or after successfully overcoming objections. The publication is a critical milestone in the registration process." },
                  { stage: "Opposition Period", duration: "4 months", description: "After publication, there is a 4-month period during which any person can file an opposition against your application. If no opposition is filed, your application proceeds to registration. Gujarat businesses should monitor this period closely." },
                  { stage: "Registration Certificate Issuance", duration: "1-2 months", description: "If no opposition is filed or if you successfully defend against opposition, the Trademark Registry issues your registration certificate within 1-2 months after the opposition period ends. This certificate grants you exclusive rights to use your trademark." }
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
                Understanding Trademark Classes for Gujarat Registration
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
                The Nice Classification system divides all goods and services into 45 classes. Classes 1-34 cover goods (products), while classes 35-45 cover services. Selecting the correct class or classes is crucial for proper trademark protection in Gujarat. Given Gujarat's diverse industrial base, businesses often need to register in multiple classes to protect their brand comprehensively.
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
                    Common classes for Gujarat businesses:
                  </p>
                  <ul className="space-y-1 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 25: Textiles, clothing, footwear (Surat textile industry)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 5: Pharmaceuticals, medical preparations (Vadodara pharma hub)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 1: Chemicals (Ankleshwar, Vadodara chemical industries)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 7: Machinery, engineering equipment (Rajkot manufacturing)</span>
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
                    Common classes for Gujarat businesses:
                  </p>
                  <ul className="space-y-1 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 35: Advertising, business management, retail services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 42: Software development, IT services, technical consulting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 43: Restaurant, hotel, catering services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span>Class 41: Education, training, entertainment services</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-info-circle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Important:</strong> You can register your trademark in multiple classes, but separate fees apply for each class. Professional assistance helps ensure you select all relevant classes for comprehensive protection of your brand in Gujarat and across India. Many Gujarat businesses operate across multiple sectors and require protection in several classes.
                </p>
              </div>
            </div>
          </section>

          {/* Gujarat Business Context */}
          <section id="gujarat-business-context" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Registration in Gujarat: Business Context and Importance
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
                Gujarat stands as one of India's most economically dynamic states, with a robust industrial ecosystem spanning multiple sectors. The state's business landscape makes trademark registration not just a legal formality but a strategic business necessity. Understanding the unique business context of Gujarat helps businesses appreciate why trademark protection is critical for their operations.
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
                    <i className="fas fa-industry text-[#FFB703]" aria-hidden="true"></i>
                    Key Industrial Hubs and Their Trademark Needs
                  </h3>
                  <div className="space-y-3 text-white/90 font-nunito text-sm">
                    <p>
                      <strong className="text-[#FFB703]">Ahmedabad:</strong> As Gujarat's largest city and commercial capital, Ahmedabad hosts diverse businesses ranging from textiles and chemicals to IT services and startups. The competitive market environment makes trademark registration essential for brand differentiation. Many Ahmedabad-based companies operate nationally and internationally, requiring strong trademark protection.
                    </p>
                    <p>
                      <strong className="text-[#FFB703]">Surat:</strong> Known as the diamond capital of India and a major textile hub, Surat sees intense competition in both sectors. Trademark registration helps diamond polishing units and textile manufacturers protect their brand identity in highly competitive markets. The city's export-oriented businesses particularly benefit from registered trademarks when dealing with international clients.
                    </p>
                    <p>
                      <strong className="text-[#FFB703]">Vadodara:</strong> Home to major pharmaceutical and chemical companies, Vadodara's businesses require trademark protection to safeguard their intellectual property in regulated industries. Pharmaceutical companies especially need trademark registration to protect drug names and brand identities in a highly regulated market.
                    </p>
                    <p>
                      <strong className="text-[#FFB703]">Rajkot:</strong> The engineering and manufacturing hub of Gujarat, Rajkot businesses produce machinery, auto parts, and engineering goods. Trademark registration helps these manufacturers establish brand credibility and protect their products from counterfeiting, which is crucial in B2B markets.
                    </p>
                  </div>
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
                    Industry-Specific Trademark Considerations
                  </h3>
                  <div className="space-y-2 text-white/90 font-nunito text-sm">
                    <p>
                      Gujarat's textile industry, concentrated in Surat and Ahmedabad, requires trademark protection for fabric brands, garment labels, and textile company names. With thousands of textile units operating in the state, brand differentiation through trademarks becomes crucial for market success.
                    </p>
                    <p>
                      The pharmaceutical industry in Vadodara and Ankleshwar needs comprehensive trademark protection for drug names, company brands, and medical device labels. Regulatory compliance and brand protection go hand in hand in this sector.
                    </p>
                    <p>
                      Chemical industries across Gujarat, particularly in Ankleshwar and Vadodara, require trademark registration for chemical product names, company brands, and safety-related branding. This helps in both domestic and export markets.
                    </p>
                    <p>
                      Gujarat's growing IT and startup ecosystem, especially in Ahmedabad and Gandhinagar, benefits from trademark registration to protect software names, service brands, and technology company identities in competitive markets.
                    </p>
                  </div>
                </div>

                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-globe-asia text-[#FFB703]" aria-hidden="true"></i>
                    Export and International Trade Considerations
                  </h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Gujarat is a major export hub, with businesses exporting textiles, chemicals, pharmaceuticals, engineering goods, and diamonds to international markets. Trademark registration in India provides the foundation for international trademark protection through the Madrid Protocol. Many Gujarat businesses expand globally, and having a registered trademark in India is often a prerequisite for international trademark applications. This is particularly important for businesses in Surat (diamonds and textiles), Vadodara (pharmaceuticals), and Rajkot (engineering goods) that have significant export operations.
                  </p>
                </div>
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Gujarat</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Start Your Trademark Registration in Gujarat Today
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't wait to protect your brand identity. Our expert trademark attorneys provide comprehensive assistance for trademark registration in Gujarat, ensuring proper filing, class selection, and successful registration. Whether you're in Ahmedabad, Surat, Vadodara, or any other city in Gujarat, get started with professional trademark registration services today.
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
