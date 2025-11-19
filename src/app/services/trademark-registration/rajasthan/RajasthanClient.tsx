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

export default function RajasthanClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'introduction', title: 'Introduction to Trademark Registration' },
      { id: 'rajasthan-business', title: 'Trademark Registration in Rajasthan' },
      { id: 'benefits', title: 'Benefits of Registration' },
      { id: 'eligibility', title: 'Who Can Apply?' },
      { id: 'types', title: 'Types of Trademarks' },
      { id: 'process', title: 'Registration Process' },
      { id: 'step-by-step', title: 'Step-by-Step Guide' },
      { id: 'documents', title: 'Required Documents' },
      { id: 'classification', title: 'Trademark Classes' },
      { id: 'timeline', title: 'Processing Timeline' },
      { id: 'challenges', title: 'Common Challenges' },
      { id: 'renewal', title: 'Renewal Process' },
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
      question: "How can I register a trademark in Rajasthan?",
      answer: "To register a trademark in Rajasthan, begin by conducting a thorough trademark search on the IP India portal to ensure your mark is available and unique. Prepare necessary documents including identity proof, business registration certificates, and clear trademark representation. File Form TM-A online through the IP India website or submit physically at the Delhi Trademark Registry which handles applications from Rajasthan. Pay applicable government fees based on your category. The Trademark Examiner will review your application and issue an examination report if objections arise. Respond to objections within the specified timeframe. Once accepted, your mark will be published in the Trademark Journal. After the opposition period, if no objections are raised, you will receive your registration certificate."
    },
    {
      question: "Which trademark office handles Rajasthan applications?",
      answer: "Trademark applications from Rajasthan are processed by the Delhi Trademark Registry Office located at Boudhik Sampada Bhawan, Plot No. 32, Sector 14, Dwarka, New Delhi. This office has jurisdiction over North Indian states including Rajasthan. However, the most convenient method is online filing through the IP India portal, which allows businesses in Jaipur, Jodhpur, Udaipur, Kota, Ajmer, and other Rajasthan cities to file applications from their location without visiting the registry office. All correspondence, objection replies, and status tracking can be managed online, making the process seamless for Rajasthan-based applicants."
    },
    {
      question: "What documents do I need for trademark registration in Rajasthan?",
      answer: "Essential documents for trademark registration in Rajasthan include applicant identity proof such as Aadhar card, PAN card, passport, or driving license, proof of address through utility bills or property documents not older than two months, clear trademark logo in JPEG format with at least 300 DPI resolution if registering a design mark, detailed description of goods or services you will offer under the trademark, business registration documents like Certificate of Incorporation for companies or partnership deed for firms, Power of Attorney on Form TM-48 if appointing an agent or attorney, user affidavit with supporting evidence if the mark is already in use, and signed declaration confirming the accuracy of information provided in the application."
    },
    {
      question: "How much time does trademark registration take in Rajasthan?",
      answer: "The complete trademark registration process in Rajasthan typically takes 12 to 18 months from application filing to certificate issuance. This includes immediate acknowledgment upon online filing, 2 to 3 months for initial formality checks by the registry, 8 to 12 months for substantive examination by the Trademark Examiner, 30 to 60 days for filing objection replies if examination reports are issued, 2 to 4 months for publication in the Trademark Journal after acceptance, a mandatory 4-month opposition period during which third parties can challenge your application, and finally 1 to 2 months for certificate generation and dispatch if no opposition is filed or if oppositions are successfully defended."
    },
    {
      question: "Are there reduced fees for Rajasthan startups and small businesses?",
      answer: "Yes, the Indian government offers significant fee concessions for startups and small enterprises from Rajasthan. Individuals, startups recognized under the Startup India initiative, and small enterprises pay only rupees 4,500 per class for online trademark applications, which is 50 percent less than the standard fee of rupees 9,000 charged to other entities. To claim this benefit, applicants must provide valid documentation such as DPIIT startup recognition certificate, MSME or Udyam registration certificate, or individual identity proof. This reduced fee structure applies to initial application filing, renewal applications, and various other trademark-related services, making intellectual property protection more accessible and affordable for Rajasthan's growing entrepreneurial ecosystem."
    },
    {
      question: "Can I file trademark application online from Rajasthan?",
      answer: "Absolutely, online trademark filing is fully available and highly recommended for applicants in Rajasthan. The IP India portal provides comprehensive online services accessible 24/7 from anywhere including Jaipur, Jodhpur, Udaipur, and all other cities. You can conduct trademark searches, file new applications, upload documents digitally, make online payments through various methods, track application status in real-time, receive examination reports electronically, file objection replies and other documents, and download registration certificates once issued. Online filing offers numerous advantages including instant acknowledgment with application number, lower government fees compared to physical filing, convenience of filing from home or office, faster processing times, and complete transparency with digital tracking throughout the registration journey."
    },
    {
      question: "What is the validity period of a trademark registered in Rajasthan?",
      answer: "A trademark registered by a Rajasthan-based business is valid for 10 years from the date of application filing, not from the registration date. This 10-year protection extends across entire India, not limited to Rajasthan state. The trademark can be renewed indefinitely for successive 10-year periods by filing renewal application Form TM-R along with prescribed renewal fees. It is advisable to file for renewal 6 months before the expiry date, though you can file up to 6 months after expiry by paying additional late fees. Failure to renew within this grace period results in trademark removal from the register, though restoration may be possible within one year of expiry under specific circumstances with penalty fees."
    },
    {
      question: "How does trademark registration benefit my Rajasthan business?",
      answer: "Trademark registration provides numerous strategic benefits for businesses operating in Rajasthan. You gain exclusive nationwide rights to use your mark, preventing competitors from using identical or similar marks for related goods or services. Legal protection enables you to take swift action against infringers through civil and criminal remedies available under the Trademarks Act. Registered marks with the ® symbol enhance brand credibility and customer trust, particularly important for Rajasthan businesses expanding beyond state boundaries. Your trademark becomes a valuable intangible asset that can be sold, licensed, or franchised, creating additional revenue streams. Registration facilitates e-commerce operations on platforms requiring brand registry. It also serves as foundation for international trademark protection through Madrid Protocol, crucial for Rajasthan's export-oriented industries like handicrafts, textiles, and gems."
    },
    {
      question: "What happens if someone opposes my trademark in Rajasthan?",
      answer: "If a third party files an opposition against your trademark application in Rajasthan, you will receive an official notice of opposition from the Trademark Registry. You have two months from receiving this notice to file a counter-statement defending your application and explaining why the opposition should be rejected. After your counter-statement, the opponent has two months to submit evidence supporting their opposition. You then get another two months to file your evidence supporting your application. Both parties may request hearings before the Trademark Registrar. The Registrar reviews all evidence, hears both sides, and issues a decision either allowing your trademark to proceed to registration or refusing it based on the opposition merits. Professional legal representation is strongly recommended for opposition proceedings to maximize your chances of success."
    },
    {
      question: "Do Rajasthan traditional crafts and heritage brands need trademark protection?",
      answer: "Yes, trademark protection is especially crucial for Rajasthan's rich heritage industries including handicrafts, textiles, jewelry, pottery, and traditional art forms. Registering trademarks for authentic Rajasthani products prevents unauthorized use and counterfeiting, which is rampant in handicraft sectors. Collective marks can be registered by artisan associations to protect regional specialties like Jaipur blue pottery, Bagru prints, Sanganeri textiles, Meenakari work, and Makrana marble products. Certification marks can authenticate traditional manufacturing methods and quality standards. Trademark registration enables Rajasthani artisans and businesses to build strong brands, command premium prices, access organized retail and e-commerce channels, and protect their reputation from inferior imitations. It also facilitates geographic indication protection for region-specific products, preserving Rajasthan's cultural heritage while enabling economic growth for traditional communities."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Rajasthan"
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
              <span className="text-[#FFB703] font-medium">Rajasthan</span>
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
                Trademark Registration in Rajasthan: Complete Guide 2025
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
                Rajasthan, renowned for its vibrant culture, rich heritage, and thriving business landscape, is home to major commercial centers including Jaipur, Jodhpur, Udaipur, Kota, and Ajmer. The state has emerged as a significant player in sectors such as tourism, handicrafts, textiles, gems and jewelry, information technology, education, and manufacturing. For businesses operating in this diverse economy, protecting brand identity through trademark registration is essential for growth, market differentiation, and legal security.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                This comprehensive guide walks you through every aspect of trademark registration in Rajasthan, from understanding the basics to successfully obtaining your registration certificate. Whether you operate a traditional handicraft business, modern startup, manufacturing unit, or service enterprise, this guide provides the knowledge and steps needed to protect your brand effectively across India.
              </p>
            </div>
          </section>

          {/* Introduction */}
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
                Understanding Trademark Registration
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
                A trademark is a distinctive sign that identifies and distinguishes your business offerings from competitors. It encompasses words, phrases, symbols, logos, designs, colors, sounds, or any unique combination representing your brand identity. Trademarks create the vital link between your business and customers, fostering recognition, trust, and long-term loyalty in competitive markets.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Registration provides legal ownership and nationwide exclusive rights under the Trademarks Act, 1999. Once registered, you possess the legal authority to prevent others from using identical or confusingly similar marks for related goods or services. This protection extends across all Indian states and territories, ensuring your brand remains secure regardless of where you conduct business operations.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                For Rajasthan enterprises, trademark registration transcends legal compliance, becoming a strategic asset. It safeguards brand equity built through years of quality service, enables customer identification of genuine products, facilitates expansion through licensing and franchising arrangements, enhances business valuation for investment opportunities, and creates competitive differentiation in markets ranging from traditional crafts to modern technology services.
              </p>
            </div>
          </section>

          {/* Rajasthan Business Context */}
          <section id="rajasthan-business" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Rajasthan Businesses Need Trademark Protection
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
                Rajasthan presents a unique economic landscape combining centuries-old traditional industries with rapidly growing modern sectors. With over 400,000 registered MSMEs and thriving sectors including tourism, handicrafts, gems and jewelry, IT services, education, textiles, and manufacturing, the state offers immense entrepreneurial opportunities that necessitate robust trademark protection for sustainable competitive advantage.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-palette text-[#FFB703]" aria-hidden="true"></i>
                    Heritage Handicrafts
                  </h4>
                  <p className="text-white/90 font-nunito text-sm">
                    Rajasthan is globally famous for blue pottery from Jaipur, block prints from Bagru and Sanganer, Meenakari jewelry, miniature paintings, and marble crafts. Trademark protection helps authentic artisans combat counterfeiting, command premium prices, and preserve cultural heritage.
                  </p>
                </div>

                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-gem text-[#FFB703]" aria-hidden="true"></i>
                    Gems and Jewelry
                  </h4>
                  <p className="text-white/90 font-nunito text-sm">
                    Jaipur processes over 80 percent of the world's emeralds and is a major diamond cutting center. Jewelry brands require strong trademarks to establish identity, prevent counterfeits, and maintain quality reputation in domestic and international markets.
                  </p>
                </div>

                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-code text-[#FFB703]" aria-hidden="true"></i>
                    Technology Sector
                  </h4>
                  <p className="text-white/90 font-nunito text-sm">
                    Jaipur hosts over 8,000 IT companies and startups. Technology businesses need trademark protection for software names, mobile applications, SaaS platforms, technology brands, and digital services to secure market position and attract venture capital investment.
                  </p>
                </div>

                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-book-reader text-[#FFB703]" aria-hidden="true"></i>
                    Education Industry
                  </h4>
                  <p className="text-white/90 font-nunito text-sm">
                    Kota attracts 2.5 lakh students annually for competitive exam coaching. Educational institutions, coaching centers, online learning platforms, and content publishers require trademark protection to establish brand recognition and prevent unauthorized use of their names.
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
                Benefits of Trademark Registration for Rajasthan Businesses
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
                    icon: "fas fa-lock",
                    title: "Exclusive Legal Rights",
                    description: "Registration grants you sole authority to use your trademark throughout India for specified goods or services. This exclusivity prevents competitors from adopting similar marks and protects your market share across Rajasthan and beyond."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Legal Enforcement Power",
                    description: "Registered marks enable swift legal action including filing infringement suits, obtaining search and seizure orders, claiming damages, and securing injunctions. Rajasthan's commercial courts provide effective remedies for trademark violations."
                  },
                  {
                    icon: "fas fa-trophy",
                    title: "Enhanced Brand Credibility",
                    description: "The registered trademark symbol ® signals legitimacy and quality to customers, partners, and investors. For Rajasthan businesses expanding nationally or internationally, this credibility is crucial for market acceptance and trust building."
                  },
                  {
                    icon: "fas fa-coins",
                    title: "Valuable Business Asset",
                    description: "Registered trademarks are intangible assets that appreciate over time with brand building. They can be valued, sold, inherited, or pledged as security for loans, significantly enhancing your business balance sheet."
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Licensing and Franchising",
                    description: "Trademarks enable business expansion through licensing agreements and franchise models without capital expenditure. Rajasthan businesses can replicate successful models across India while maintaining brand control and generating royalty income."
                  },
                  {
                    icon: "fas fa-shield-alt",
                    title: "Counterfeit Prevention",
                    description: "Particularly vital for Rajasthan's handicraft and jewelry sectors, registration helps combat counterfeiting through legal deterrence, customs protection, and ability to delis counterfeit products from online marketplaces."
                  },
                  {
                    icon: "fas fa-shopping-cart",
                    title: "E-commerce Advantages",
                    description: "Major platforms including Amazon, Flipkart, and Meesho require trademark registration for brand registry programs offering enhanced content, counterfeit removal, and advertising privileges essential for online business growth."
                  },
                  {
                    icon: "fas fa-globe",
                    title: "International Protection",
                    description: "Indian registration serves as foundation for international trademark protection through Madrid Protocol covering 130+ countries. Critical for Rajasthan's export industries including handicrafts, textiles, gems, and marble products."
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

          {/* Types of Trademarks */}
          <section id="types" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Types of Trademarks You Can Register in Rajasthan
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
                Indian trademark law recognizes various types of marks for registration, accommodating different business needs and brand strategies. Understanding these categories helps Rajasthan businesses choose appropriate protection for their unique brand elements.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: "fas fa-tag",
                    title: "Word Marks",
                    description: "Pure text trademarks consisting of words, letters, numbers, or combinations without design elements. Examples include company names, product names, and slogans. Particularly useful for Rajasthan businesses wanting simple, memorable brand names like coaching institute names in Kota or hotel brands in Udaipur."
                  },
                  {
                    icon: "fas fa-palette",
                    title: "Device Marks (Logos)",
                    description: "Visual design marks including logos, symbols, graphics, and artistic representations. Essential for Rajasthan's handicraft sector, jewelry brands, and hospitality businesses. Blue pottery makers, textile exporters, and gem traders benefit from distinctive logo protection."
                  },
                  {
                    icon: "fas fa-layer-group",
                    title: "Composite Marks",
                    description: "Combination of words and design elements forming a unified mark. Most common type chosen by Rajasthan businesses combining brand name with visual identity. Offers comprehensive protection for both textual and graphical brand components."
                  },
                  {
                    icon: "fas fa-briefcase",
                    title: "Service Marks",
                    description: "Marks identifying and distinguishing services rather than products. Critical for Rajasthan's tourism, hospitality, education, IT services, and professional services sectors. Tour operators, hotels, coaching institutes, and software companies register service marks."
                  },
                  {
                    icon: "fas fa-certificate",
                    title: "Collective Marks",
                    description: "Marks owned by associations or groups indicating membership or origin. Valuable for Rajasthan artisan cooperatives, industry associations, and craft clusters. Blue pottery artisans or block printing communities can use collective marks to indicate authentic regional products."
                  },
                  {
                    icon: "fas fa-check-circle",
                    title: "Certification Marks",
                    description: "Marks certifying specific characteristics like quality, origin, or manufacturing method. Important for Rajasthan's traditional crafts and agricultural products. Can certify authentic Rajasthani handicraft methods, organic farming practices, or quality standards."
                  },
                  {
                    icon: "fas fa-cube",
                    title: "Three-Dimensional Marks",
                    description: "Protection for unique product shapes and packaging designs. Applicable to distinctive bottle shapes, product containers, or architectural designs. Rajasthan marble sculptors and packaging designers can protect unique three-dimensional designs."
                  },
                  {
                    icon: "fas fa-volume-up",
                    title: "Sound Marks",
                    description: "Distinctive sounds associated with brands like jingles, musical notes, or audio signatures. Increasingly relevant for Rajasthan's media, entertainment, and advertising industries. Radio stations, production houses, and brands can register unique audio identities."
                  }
                ].map((type, index) => (
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
                        <i className={`${type.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-base font-semibold mb-2">
                          {type.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-sm leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Registration Process Overview */}
          <section id="process" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Registration Process Overview for Rajasthan
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
                The trademark registration journey involves multiple stages managed by the Indian Trademark Registry. For Rajasthan businesses, understanding this process ensures smooth navigation through each phase, from initial search to final certificate receipt. The entire procedure is governed by the Trademarks Act, 1999, and Trademark Rules, 2017, ensuring standardized processing across India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    phase: "Pre-Filing Stage",
                    description: "Conduct trademark search on IP India portal to verify availability. Analyze similar existing marks to assess registration risks. Select appropriate Nice Classification class for your goods or services. Prepare trademark representation meeting technical specifications. Gather required documents for application submission."
                  },
                  {
                    phase: "Application Filing",
                    description: "Complete Form TM-A with accurate applicant and mark details. Upload supporting documents in prescribed formats. Pay government fees through online payment gateway. Receive instant acknowledgment with unique application number. Application enters queue for examination by Trademark Registry."
                  },
                  {
                    phase: "Examination Phase",
                    description: "Vienna-assigned examiner reviews application for compliance and conflicts. Examination typically completed within 8-12 months of filing. Clean applications proceed directly to publication stage. Objected applications receive detailed examination reports requiring responses within 30 days."
                  },
                  {
                    phase: "Objection Resolution",
                    description: "File comprehensive reply addressing each objection raised. Provide legal arguments, precedents, and supporting evidence. Request hearing if written reply insufficient for clarification. Examiner reviews response and decides acceptance or further objections."
                  },
                  {
                    phase: "Publication Stage",
                    description: "Accepted marks published in weekly Trademark Journal. Publication allows public scrutiny and opposition filing. Journal accessible online for transparency and monitoring. Published marks considered for registration pending opposition period completion."
                  },
                  {
                    phase: "Opposition Window",
                    description: "Four-month period for third parties to challenge registration. Opposition based on prior rights, similarity, or statutory grounds. Counter-statement filing mandatory to defend application. Evidence submission and hearings follow for contested applications."
                  },
                  {
                    phase: "Registration Certificate",
                    description: "Unopposed applications proceed to registration after four months. Registry generates registration certificate with unique number. Certificate available for immediate download from IP India portal. Physical certificate dispatched to registered business address."
                  },
                  {
                    phase: "Post-Registration",
                    description: "Trademark protection effective from original filing date. Valid for 10 years with unlimited renewal options. Continuous use mandatory to maintain rights. Monitor for infringements and take action when necessary."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-md"
                    style={{ 
                      background: index % 2 === 0 ? 'rgba(255, 183, 3, 0.06)' : 'rgba(255, 255, 255, 0.02)',
                      border: index % 2 === 0 ? '1px solid rgba(255, 183, 3, 0.15)' : '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                      <i className="fas fa-arrow-circle-right text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {item.phase}
                    </h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Step-by-Step Guide */}
          <section id="step-by-step" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Detailed Step-by-Step Trademark Registration Guide
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
                    step: "Conduct Comprehensive Trademark Search",
                    description: "Begin with thorough search on IP India public search portal. Check for identical, similar, and phonetically equivalent marks. Examine registered, pending, and abandoned applications. Analyze marks in your class and related classes. Consider hiring professionals for detailed conflict analysis. Document search results for future reference."
                  },
                  {
                    step: "Determine Correct Classification",
                    description: "Identify appropriate Nice Classification class for offerings. Review class descriptions carefully for proper fit. Consider multiple classes if offering diverse products or services. Note that each class requires separate fee payment. Incorrect class selection leads to objections and delays. Consult classification manuals or professionals for complex cases."
                  },
                  {
                    step: "Prepare Trademark Representation",
                    description: "Create clear, high-resolution logo image if registering device mark. Ensure minimum 300 DPI resolution in JPEG format. Wordmarks typed in clear, standard fonts. Specify colors if claiming color as trademark element. Prepare multiple views for three-dimensional marks. Ensure representation meets Registry technical requirements."
                  },
                  {
                    step: "Compile Required Documentation",
                    description: "Gather identity proof of applicant with clear visibility. Collect address proof documents not older than two months. Prepare business registration certificates as applicable. Draft Power of Attorney if filing through agent. Create user affidavit if mark already in commercial use. Organize documents in prescribed digital formats."
                  },
                  {
                    step: "Complete Application Form TM-A",
                    description: "Access IP India portal and create account or login. Navigate to trademark section and select new application. Fill applicant details accurately with current information. Enter mark details, class, and goods/services description. Specify basis as proposed or already in use. Review all entries thoroughly before proceeding."
                  },
                  {
                    step: "Upload Documents and Pay Fees",
                    description: "Attach all prepared documents in correct file formats. Verify document clarity and completeness before upload. Calculate applicable fees based on applicant category. Make online payment through credit card, debit card, or net banking. Save payment confirmation for records. Download acknowledgment immediately after successful submission."
                  },
                  {
                    step: "Track Application Status",
                    description: "Note application number from acknowledgment receipt. Regularly check status through IP India portal. Monitor for examination report issuance typically within 8-12 months. Set up email alerts for important notifications. Maintain correspondence file for all Registry communications. Respond promptly to any queries or objections."
                  },
                  {
                    step: "Respond to Examination Objections",
                    description: "Carefully review examination report if objections raised. Identify specific grounds cited by examiner. Prepare point-by-point reply addressing each objection. Include legal arguments, precedents, and evidence. File response within 30-day deadline to avoid abandonment. Consider requesting hearing for complex objections requiring oral submissions."
                  },
                  {
                    step: "Monitor Publication and Opposition",
                    description: "Check Trademark Journal weekly for application publication. Publication indicates preliminary acceptance of application. Opposition period runs for four months from publication. Monitor for any opposition notices during this window. If opposition filed, engage legal counsel immediately. Prepare defense strategy with counter-statement and evidence."
                  },
                  {
                    step: "Receive Registration Certificate",
                    description: "After successful opposition period completion, registration proceeds. Certificate generated typically within 1-2 months. Download digital certificate from IP India portal immediately. Physical certificate arrives at registered address via post. Verify all details on certificate for accuracy. Begin using registered trademark symbol ® with your mark."
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
                      className="flex-1 p-4 rounded-md transition-all duration-300"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.02)',
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

          {/* Eligibility */}
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
                Who Can Apply for Trademark Registration in Rajasthan?
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
                Indian trademark law provides broad eligibility for registration, welcoming diverse business entities and individuals. Any person or organization using or intending to use a trademark in commerce can seek registration protection.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Individual Entrepreneurs",
                    description: "Sole proprietors, freelancers, artisans, craftspeople, and individual service providers can register trademarks in their personal names for business activities."
                  },
                  {
                    title: "Partnership Firms",
                    description: "Registered and unregistered partnerships can apply jointly in firm name or individual partner names with partnership deed documentation."
                  },
                  {
                    title: "Corporate Entities",
                    description: "Private limited, public limited, one-person companies, and Section 8 companies can register trademarks with Certificate of Incorporation."
                  },
                  {
                    title: "LLPs and Cooperatives",
                    description: "Limited Liability Partnerships and cooperative societies can apply with relevant registration certificates and governing documents."
                  },
                  {
                    title: "Trusts and NGOs",
                    description: "Registered trusts, societies, and non-profit organizations can protect their names, logos, and service marks with trust deeds."
                  },
                  {
                    title: "Foreign Applicants",
                    description: "International individuals and companies can register trademarks in India, with or without local presence, through authorized agents."
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
          <section id="documents" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Essential Documents for Trademark Registration in Rajasthan
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
                    title: "Personal Identification",
                    items: ["Aadhar card with clear photo", "PAN card for tax identification", "Passport for international applicants", "Driving license as alternative ID", "Voter ID card"]
                  },
                  {
                    title: "Address Verification",
                    items: ["Recent electricity or water bill", "Property tax receipt", "Rental agreement with landlord details", "Bank statement with address", "Telephone or internet bill"]
                  },
                  {
                    title: "Trademark Materials",
                    items: ["Logo in JPEG format (300+ DPI)", "Wordmark in standard typography", "Color specifications if applicable", "Multiple angles for 3D marks", "Sound file for audio marks"]
                  },
                  {
                    title: "Business Registration",
                    items: ["Certificate of Incorporation", "Partnership deed with stamp", "LLP agreement", "MSME/Udyam certificate", "GST registration certificate"]
                  },
                  {
                    title: "Authorization Documents",
                    items: ["Power of Attorney Form TM-48", "Board resolution for companies", "Partner authorization letter", "Authorized signatory proof", "Specimen signature"]
                  },
                  {
                    title: "Supporting Documents",
                    items: ["User affidavit if mark in use", "Sales invoices or bills", "Marketing materials showing mark", "Website screenshots", "Export documents for international trade"]
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
                      <i className="fas fa-folder text-[#FFB703] text-sm" aria-hidden="true"></i>
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

          {/* Classification */}
          <section id="classification" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Understanding Trademark Classification System
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
                The Nice Classification system categorizes all goods and services into 45 classes, providing standardized international framework for trademark protection. Classes 1-34 cover goods (physical products), while classes 35-45 cover services. Correct class selection is crucial for proper protection scope and application success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div 
                  className="p-4 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">
                    Popular Classes for Rajasthan Businesses
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-angle-right text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 14:</strong> Jewelry, precious stones, gems - Essential for Jaipur jewelry manufacturers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-angle-right text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 25:</strong> Clothing, textiles, apparel - Key for Rajasthan textile businesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-angle-right text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 20:</strong> Furniture, handicrafts - Important for artisan communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-angle-right text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 19:</strong> Marble, stone, building materials - Relevant for Makrana marble</span>
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
                    Service Classes for Rajasthan
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-angle-right text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 43:</strong> Hotels, restaurants, tourism - Critical for hospitality sector</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-angle-right text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 41:</strong> Education services - Essential for Kota coaching institutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-angle-right text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 42:</strong> IT services, software development - Key for Jaipur tech companies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-angle-right text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                      <span><strong>Class 35:</strong> Business services, retail - Important for commercial enterprises</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.1)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                <p className="text-white/95 font-nunito text-sm">
                  <i className="fas fa-info-circle text-[#FFB703] mr-2" aria-hidden="true"></i>
                  <strong>Important:</strong> Separate fees apply for each class. Multi-class applications provide comprehensive protection but increase costs proportionally. Professional guidance ensures optimal class selection avoiding unnecessary expenses.
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
                Trademark Registration Timeline for Rajasthan Applicants
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
                Understanding the registration timeline helps Rajasthan businesses plan their brand strategy effectively. The complete process typically spans 12 to 18 months, though variations occur based on application complexity, objections, and oppositions.
              </p>

              <div className="space-y-3">
                {[
                  { stage: "Application Submission", duration: "Instant (Online) / 3-5 days (Physical)", description: "Online applications receive immediate acknowledgment. Physical submissions at Delhi Registry take 3-5 days for processing and acknowledgment generation with application number." },
                  { stage: "Formality Examination", duration: "2-3 months", description: "Registry verifies application completeness, correct fee payment, and basic compliance. Deficiency reports issued if corrections needed with additional time for resubmission." },
                  { stage: "Substantive Examination", duration: "8-12 months", description: "Trademark Examiner conducts detailed review for distinctiveness, similarity with existing marks, and statutory compliance. Examination reports issued for applications with objections." },
                  { stage: "Objection Reply Window", duration: "30 days (extendable to 60)", description: "Applicants have 30 days to respond to objections, extendable by another 30 days on request. Quality of reply significantly impacts acceptance chances." },
                  { stage: "Hearing (if required)", duration: "Variable", description: "Complex objections may require hearings before Registrar. Hearing dates scheduled based on Registry workload, adding 2-6 months to timeline." },
                  { stage: "Journal Publication", duration: "2-4 months post-acceptance", description: "Accepted marks published in weekly Trademark Journal. Publication confirms preliminary registration approval subject to opposition." },
                  { stage: "Opposition Period", duration: "4 months", description: "Statutory window for third-party opposition filing. Majority of applications face no opposition and proceed smoothly to registration." },
                  { stage: "Registration Issuance", duration: "1-2 months", description: "Post-opposition period, Registry issues registration certificate. Digital certificate immediately downloadable, physical copy dispatched by post to registered address." }
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
                Common Challenges and Solutions in Trademark Registration
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
                    challenge: "Similarity with Existing Marks",
                    solution: "Conduct comprehensive trademark search before filing. Analyze phonetic, visual, and conceptual similarities. Modify mark design or wording to create distinctiveness. Consult trademark professionals for conflict assessment."
                  },
                  {
                    challenge: "Descriptive or Generic Marks",
                    solution: "Avoid purely descriptive terms for goods or services. Add unique elements creating distinctive character. Consider coined words or arbitrary combinations. Build secondary meaning through extensive use and marketing."
                  },
                  {
                    challenge: "Incorrect Class Selection",
                    solution: "Study Nice Classification manual thoroughly. Identify all relevant classes for comprehensive protection. Seek professional guidance for complex product or service categories. File multi-class applications to avoid gaps."
                  },
                  {
                    challenge: "Inadequate Documentation",
                    solution: "Prepare complete document set before filing. Ensure clarity and legibility of all submissions. Maintain digital copies in prescribed formats. Update documents if business details change."
                  },
                  {
                    challenge: "Objection Reports",
                    solution: "Review objections carefully and understand grounds. Prepare detailed point-by-point responses. Provide legal precedents and evidence supporting registration. Consider requesting hearings for complex issues."
                  },
                  {
                    challenge: "Opposition by Third Parties",
                    solution: "Engage experienced trademark attorneys immediately. File strong counter-statement within deadline. Gather evidence demonstrating mark distinctiveness. Prepare for hearings and present compelling arguments."
                  },
                  {
                    challenge: "Delayed Processing",
                    solution: "File applications online for faster processing. Respond promptly to all Registry communications. Track status regularly through IP India portal. Follow up on pending matters through proper channels."
                  },
                  {
                    challenge: "Renewal Management",
                    solution: "Maintain reminder system for renewal deadlines. File renewals 6 months before expiry. Set up multiple alerts to avoid lapses. Consider professional renewal management services."
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
                    <h4 className="text-white font-nunito text-base font-semibold mb-2 flex items-center gap-2">
                      <i className="fas fa-exclamation-triangle text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {item.challenge}
                    </h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      <strong className="text-[#FFB703]">Solution:</strong> {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Renewal Process */}
          <section id="renewal" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Renewal and Maintenance in Rajasthan
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
                Registered trademarks require renewal every 10 years to maintain protection. Rajasthan businesses must implement systematic renewal management to avoid inadvertent lapses that can result in loss of trademark rights and potential brand hijacking by competitors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Renewal Timeline",
                    points: ["Initial registration valid for 10 years", "File renewal 6 months before expiry", "Grace period of 6 months with late fees", "Restoration possible within 1 year of expiry", "Indefinite renewals possible"]
                  },
                  {
                    title: "Renewal Process",
                    points: ["File Form TM-R online through IP India", "Pay prescribed renewal fees", "Submit within renewal window", "Receive renewal certificate", "Update trademark records"]
                  },
                  {
                    title: "Continuous Use Requirement",
                    points: ["Maintain active use of trademark", "Non-use for 5 years risks removal", "Document usage through invoices and marketing", "Prevent abandonment claims", "Preserve trademark rights"]
                  },
                  {
                    title: "Monitoring and Enforcement",
                    points: ["Watch for infringement by competitors", "Monitor marketplace for unauthorized use", "Take action against counterfeiters", "Send cease and desist notices", "File infringement suits when necessary"]
                  }
                ].map((section, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-md"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-base font-semibold mb-3 flex items-center gap-2">
                      <i className="fas fa-sync text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/90 font-nunito text-sm">
                          <i className="fas fa-check-circle text-[#FFB703] text-xs mt-1" aria-hidden="true"></i>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
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
                  Secure Your Brand in Rajasthan Today
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Professional trademark registration assistance for businesses across Jaipur, Jodhpur, Udaipur, Kota, and all of Rajasthan.
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
                  Get Expert Help
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
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
