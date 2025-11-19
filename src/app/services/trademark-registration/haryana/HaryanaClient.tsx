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

export default function HaryanaClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'what-is-trademark', title: 'What is Trademark Registration?' },
      { id: 'why-haryana', title: 'Why Trademark Registration in Haryana?' },
      { id: 'benefits', title: 'Key Benefits' },
      { id: 'eligibility', title: 'Eligibility Criteria' },
      { id: 'registration-process', title: 'Registration Process' },
      { id: 'detailed-steps', title: 'Detailed Step-by-Step Guide' },
      { id: 'documents-required', title: 'Required Documents' },
      { id: 'trademark-types', title: 'Types of Trademarks' },
      { id: 'classification', title: 'Trademark Classification' },
      { id: 'timeline', title: 'Registration Timeline' },
      { id: 'challenges', title: 'Common Challenges' },
      { id: 'renewal', title: 'Renewal and Maintenance' },
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
      question: "How do I register a trademark in Haryana?",
      answer: "To register a trademark in Haryana, conduct a comprehensive trademark search through the IP India portal to verify availability, prepare all required documents including identity proof, address proof, and trademark representation, file Form TM-A online through the IP India website or physically at the Delhi Trademark Registry which handles Haryana applications, pay the applicable government fees, respond to examination reports if objections are raised, wait for publication in the Trademark Journal, and receive your registration certificate after successful completion of all stages. The entire process takes approximately 12 to 18 months."
    },
    {
      question: "Which trademark registry office handles applications from Haryana?",
      answer: "Trademark applications from Haryana are processed by the Delhi Trademark Registry Office, which has jurisdiction over the National Capital Region including Haryana. The Delhi office is located at Boudhik Sampada Bhawan, Plot No. 32, Sector 14, Dwarka, New Delhi. However, applications can be filed online from anywhere in Haryana through the IP India portal, making the process convenient for businesses in Gurugram, Faridabad, Panipat, Ambala, Karnal, and other cities across the state."
    },
    {
      question: "What documents are needed for trademark registration in Haryana?",
      answer: "Required documents for trademark registration in Haryana include applicant identity proof such as Aadhar card, PAN card, passport, or driving license, address proof including utility bills, rental agreement, or property documents, clear trademark representation in JPEG format with minimum 300 DPI resolution, detailed description of goods or services with proper classification, Power of Attorney on Form TM-48 if filing through an authorized agent, incorporation certificate for companies or partnership deed for partnerships, user affidavit if claiming prior use of the trademark, and signed application form with accurate details."
    },
    {
      question: "How long does trademark registration take in Haryana?",
      answer: "Trademark registration in Haryana typically takes between 12 to 18 months from application filing to certificate issuance. The timeline includes application filing and acknowledgment within 1 to 2 days for online applications, examination by the Trademark Registry taking 8 to 12 months, response period for objections if raised requiring 30 days with possible extension, publication in Trademark Journal after acceptance taking 2 to 4 months, 4-month opposition period during which third parties can file opposition, and final certificate issuance within 1 to 2 months if no opposition is filed or successfully defended."
    },
    {
      question: "Can startups and MSMEs in Haryana get reduced trademark registration fees?",
      answer: "Yes, startups and MSMEs registered in Haryana are eligible for reduced trademark registration fees under government initiatives to promote entrepreneurship. Individuals, startups recognized by DPIIT, and small enterprises pay only rupees 4,500 per class for online filing compared to rupees 9,000 for other entities. To avail this benefit, applicants must provide valid startup recognition certificate from Department for Promotion of Industry and Internal Trade, MSME registration certificate, or Udyam registration number. This 50 percent fee reduction applies to application filing, renewal, and other trademark-related procedures."
    },
    {
      question: "Is online trademark registration available for Haryana businesses?",
      answer: "Yes, online trademark registration is fully available and recommended for businesses in Haryana. The IP India portal provides complete online services including trademark search, application filing, fee payment, document upload, status tracking, and correspondence with the registry. Online filing offers several advantages including faster processing with instant acknowledgment, lower fees compared to physical filing, 24/7 accessibility from anywhere in Haryana, digital document submission without courier costs, real-time application status tracking, and secure payment gateway options. The entire process can be completed online without visiting any office."
    },
    {
      question: "What is the validity of a registered trademark in Haryana?",
      answer: "A registered trademark in Haryana is valid for 10 years from the date of application filing, providing nationwide protection across all Indian states and union territories. The trademark can be renewed indefinitely for successive 10-year periods by filing renewal application Form TM-R along with prescribed fees. Renewal should be filed 6 months before expiry or within 6 months after expiry with additional late fees. Trademark owners must use the mark continuously to maintain rights, as non-use for 5 consecutive years can lead to removal proceedings. Proper maintenance and renewal ensure perpetual brand protection."
    },
    {
      question: "Can I protect my trademark in Haryana without registering it?",
      answer: "While unregistered trademarks can acquire limited common law rights through continuous use in Haryana, registered trademarks provide significantly stronger legal protection. Unregistered marks have protection only in geographical areas where they are used and require proof of prior use and reputation in infringement cases, making enforcement difficult and costly. Registered trademarks provide nationwide exclusive rights with legal presumption of ownership, easier enforcement against infringers, ability to use registered trademark symbol, better protection in e-commerce and online platforms, and foundation for international trademark protection. Registration is strongly recommended for comprehensive brand protection."
    },
    {
      question: "What happens if my trademark application is objected in Haryana?",
      answer: "If your trademark application receives an examination objection in Haryana, the Trademark Registry issues an examination report detailing the grounds for objection. You must file a comprehensive reply within 30 days, extendable by another 30 days, addressing each objection with legal arguments, supporting evidence, case law citations, and clarifications. Common objections include similarity with existing marks, lack of distinctiveness, descriptiveness, or incorrect classification. A well-drafted objection reply significantly improves chances of overcoming objections. If the reply is satisfactory, the application proceeds to publication; otherwise, a hearing may be scheduled. Professional legal assistance is highly recommended for complex objections."
    },
    {
      question: "Are there any special incentives for trademark registration in Haryana?",
      answer: "Haryana government provides various incentives for intellectual property protection as part of its startup and MSME policies. Benefits include reduced government fees for startups and MSMEs at 50 percent discount, financial assistance and subsidies under Haryana Enterprises and Employment Policy for patent and trademark costs, dedicated IPR facilitation centers in Gurugram and other industrial hubs providing free consultation, fast-track processing for priority sectors like IT, manufacturing, and biotechnology, and integration with Startup Haryana initiatives offering mentorship and legal support. Additionally, businesses can claim trademark registration expenses as deductible business expenditure for tax purposes, making brand protection more affordable."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Haryana"
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
              <span className="text-[#FFB703] font-medium">Haryana</span>
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
                Trademark Registration in Haryana: Complete Guide 2025
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
                Haryana stands as a powerhouse of industrial growth and entrepreneurship, home to major business hubs including Gurugram, Faridabad, Panipat, Ambala, and Karnal. As the state continues to attract startups, manufacturing units, IT companies, and service providers, protecting brand identity through trademark registration has become essential for sustainable business success and competitive advantage in the market.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                This comprehensive guide provides everything you need to know about trademark registration in Haryana, covering the complete registration process, eligibility requirements, required documentation, timelines, costs, and expert tips to help you successfully secure exclusive rights to your brand name, logo, or slogan across India.
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
                A trademark is a unique identifier that distinguishes your goods or services from those of competitors. It can be a word, phrase, symbol, logo, design, sound, color combination, or any distinctive feature that represents your brand identity. Trademark registration is the legal process of securing exclusive rights to use these identifiers in connection with specific products or services.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                In India, trademarks are governed by the Trademarks Act, 1999, and administered by the Controller General of Patents, Designs, and Trademarks under the Ministry of Commerce and Industry. When you register a trademark in Haryana, you obtain protection throughout India, not just within the state boundaries, ensuring your brand is safeguarded across all markets.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                The registration process involves filing an application with the Trademark Registry, undergoing examination, publication for opposition, and finally receiving a registration certificate valid for 10 years with unlimited renewal options. This legal protection prevents others from using identical or confusingly similar marks, giving you the power to take legal action against infringers and build a strong brand reputation.
              </p>
            </div>
          </section>

          {/* Why Trademark Registration in Haryana */}
          <section id="why-haryana" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Trademark Registration Matters for Haryana Businesses
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
                Haryana hosts over 100,000 registered MSMEs and thousands of startups, particularly concentrated in the Gurugram-Manesar-Faridabad industrial corridor. The state ranks among the top five in India for ease of doing business and has emerged as a preferred destination for technology companies, automotive manufacturers, pharmaceutical units, and textile industries. In this competitive landscape, trademark protection is no longer optional but essential.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-city text-[#FFB703]" aria-hidden="true"></i>
                    Major Business Hubs
                  </h4>
                  <p className="text-white/90 font-nunito text-sm">
                    Gurugram hosts headquarters of Fortune 500 companies and over 250 startups. Faridabad is a manufacturing powerhouse. Panipat dominates textile exports. Ambala specializes in scientific instruments. Each hub requires robust trademark protection for competitive advantage.
                  </p>
                </div>

                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-rocket text-[#FFB703]" aria-hidden="true"></i>
                    Startup Ecosystem
                  </h4>
                  <p className="text-white/90 font-nunito text-sm">
                    Startup Haryana initiative has catalyzed entrepreneurship across sectors. With dedicated incubation centers, funding support, and policy incentives, protecting intellectual property including trademarks becomes crucial for startups seeking investment and market expansion.
                  </p>
                </div>

                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-balance-scale text-[#FFB703]" aria-hidden="true"></i>
                    Legal Framework
                  </h4>
                  <p className="text-white/90 font-nunito text-sm">
                    Delhi Trademark Registry handles applications from Haryana efficiently. The state's proximity to national capital ensures faster processing, easier access to legal expertise, and streamlined coordination with trademark authorities for objections and hearings.
                  </p>
                </div>

                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-globe-asia text-[#FFB703]" aria-hidden="true"></i>
                    Export Orientation
                  </h4>
                  <p className="text-white/90 font-nunito text-sm">
                    Haryana contributes significantly to India's exports in automobiles, textiles, and electronics. Registered trademarks facilitate international market entry, enhance credibility with foreign buyers, and provide foundation for trademark protection in export markets through Madrid Protocol.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
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
                Key Benefits of Trademark Registration in Haryana
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
              <div className="space-y-4">
                {[
                  {
                    icon: "fas fa-certificate",
                    title: "Exclusive Ownership Rights",
                    description: "Registration grants you exclusive nationwide rights to use your trademark. In Haryana's competitive business environment, this exclusivity prevents competitors from using similar marks, protecting your market position and customer base across all Indian states."
                  },
                  {
                    icon: "fas fa-shield-virus",
                    title: "Legal Protection and Enforcement",
                    description: "Registered trademark owners can file infringement suits, seek damages, obtain injunctions, and prevent counterfeit products. Haryana's commercial courts provide swift remedies for trademark violations, making enforcement practical and effective for businesses of all sizes."
                  },
                  {
                    icon: "fas fa-award",
                    title: "Brand Identity and Recognition",
                    description: "A registered trademark with the ® symbol enhances brand credibility and consumer trust. For Haryana businesses expanding beyond state boundaries, registered trademarks signal professionalism, quality commitment, and legitimate business operations to customers nationwide."
                  },
                  {
                    icon: "fas fa-hand-holding-usd",
                    title: "Business Asset and Valuation",
                    description: "Registered trademarks are intangible assets that significantly increase business valuation. They can be sold, licensed, franchised, or used as collateral for loans. For Haryana startups seeking investment, strong trademark portfolios attract venture capital and strategic partners."
                  },
                  {
                    icon: "fas fa-handshake-alt",
                    title: "Licensing and Franchising Opportunities",
                    description: "Registered trademarks enable business expansion through licensing and franchising without capital investment. Haryana businesses can license their marks to partners across India, creating additional revenue streams while maintaining quality control through trademark agreements."
                  },
                  {
                    icon: "fas fa-map-marked-alt",
                    title: "Pan-India Protection",
                    description: "Trademark registration in Haryana provides protection across all Indian states and union territories. Your rights extend from Kashmir to Kanyakumari, enabling confident business expansion beyond Haryana without worrying about regional trademark conflicts."
                  },
                  {
                    icon: "fas fa-search",
                    title: "Online Marketplace Protection",
                    description: "E-commerce platforms including Amazon, Flipkart, and Meesho require trademark registration for brand registry programs. Registered marks enable delisting of counterfeit products, enhanced brand content, and priority support crucial for Haryana's digital-first businesses."
                  },
                  {
                    icon: "fas fa-globe-americas",
                    title: "International Expansion Foundation",
                    description: "Indian trademark registration is prerequisite for international protection through Madrid Protocol covering 130 countries. Haryana exporters can leverage domestic registration to protect brands in target markets efficiently and cost-effectively through single application."
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                    style={{ 
                      background: index === 0 
                        ? 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)'
                        : 'rgba(255, 255, 255, 0.02)',
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
                Eligibility Criteria for Trademark Registration in Haryana
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
                Trademark registration in India has inclusive eligibility criteria allowing diverse entities to protect their brands. Any person or organization conducting business or intending to use a trademark can apply for registration.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Individual Proprietors",
                    description: "Sole proprietors and individual entrepreneurs operating businesses in Haryana can register trademarks in their personal names."
                  },
                  {
                    title: "Partnership Firms",
                    description: "Registered and unregistered partnership firms can apply for trademarks with appropriate partnership deed documentation."
                  },
                  {
                    title: "Companies",
                    description: "Private limited, public limited companies, and startups incorporated under Companies Act are eligible with Certificate of Incorporation."
                  },
                  {
                    title: "Limited Liability Partnerships",
                    description: "LLPs registered with Ministry of Corporate Affairs can apply with LLP agreement and incorporation certificate."
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
                    <h4 className="text-white font-nunito text-base font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white/90 font-nunito text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
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
                Documents Required for Trademark Registration in Haryana
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
                    title: "Applicant Identification",
                    items: ["Aadhar card copy", "PAN card", "Passport", "Driving license", "Voter ID card"]
                  },
                  {
                    title: "Address Verification",
                    items: ["Electricity bill (within 2 months)", "Property tax receipt", "Rental agreement", "Bank statement with address", "Telephone bill"]
                  },
                  {
                    title: "Trademark Representation",
                    items: ["Logo in JPEG format (300 DPI minimum)", "Wordmark in standard font", "Color specifications if claiming color", "Trademark description", "Multiple views if applicable"]
                  },
                  {
                    title: "Business Registration",
                    items: ["Certificate of Incorporation for companies", "Partnership deed for partnerships", "LLP agreement for LLPs", "Udyam registration for MSMEs", "Startup recognition certificate"]
                  },
                  {
                    title: "Authorization Documents",
                    items: ["Power of Attorney Form TM-48", "Board resolution for companies", "Partner consent for partnerships", "Signed application form", "Authorized signatory proof"]
                  },
                  {
                    title: "Additional Documents",
                    items: ["User affidavit if mark in use", "Priority claim documents if any", "Translation and transliteration", "Consent letter for name/likeness", "Assignment deed if acquired"]
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
                          <i className="fas fa-check text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
                Trademark Registration Timeline for Haryana Businesses
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
                The complete trademark registration process in Haryana typically spans 12 to 18 months from initial application to certificate receipt. Understanding the timeline helps businesses plan accordingly and maintain realistic expectations throughout the registration journey.
              </p>

              <div className="space-y-3">
                {[
                  { stage: "Application Filing", duration: "1-2 days", description: "Online applications receive instant acknowledgment with application number. Physical applications take 3-5 days for processing and acknowledgment receipt." },
                  { stage: "Formality Check", duration: "2-3 months", description: "Registry verifies application completeness, fee payment, and basic compliance. Deficiency reports issued if corrections needed." },
                  { stage: "Substantive Examination", duration: "8-12 months", description: "Examiner reviews distinctiveness, similarity with existing marks, and statutory compliance. Examination report issued if objections exist." },
                  { stage: "Objection Reply Period", duration: "30-60 days", description: "Applicants have 30 days to reply, extendable by another 30 days. Well-drafted replies improve acceptance chances significantly." },
                  { stage: "Publication in Journal", duration: "2-4 months", description: "Accepted marks published weekly for public scrutiny. Publication confirms preliminary acceptance pending opposition." },
                  { stage: "Opposition Window", duration: "4 months", description: "Third parties can oppose within four months of publication. Most applications proceed without opposition." },
                  { stage: "Registration Certificate", duration: "1-2 months", description: "If unopposed, certificate issued and available for download. Physical copy dispatched to registered address." }
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
                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Start Your Trademark Registration in Haryana Today
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Protect your brand with expert trademark registration services for businesses across Haryana.
                </p>

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
                </Link>
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
