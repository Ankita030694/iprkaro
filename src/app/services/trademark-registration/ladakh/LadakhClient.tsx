'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function LadakhClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    // Define sections for TOC
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Overview' },
      { id: 'why-register', title: 'Why Register in Ladakh' },
      { id: 'industry-focus', title: 'Industry Focus' },
      { id: 'benefits', title: 'Key Benefits' },
      { id: 'eligibility', title: 'Eligibility Criteria' },
      { id: 'registration-process', title: 'Registration Process' },
      { id: 'documents', title: 'Required Documents' },
      { id: 'search', title: 'Trademark Search' },
      { id: 'classes', title: 'Trademark Classes' },
      { id: 'timeline', title: 'Timeline' },
      { id: 'maintenance', title: 'Maintenance' },
      { id: 'mistakes', title: 'Common Mistakes' },
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
      question: "How to register a trademark in Ladakh?",
      answer: "To register a trademark in Ladakh, you need to: 1) Conduct a comprehensive trademark search to ensure availability, 2) Prepare all required documents including identity proof, address proof, and trademark representation, 3) File Form TM-A online through IP India portal or with professional assistance, 4) Pay the applicable fees, 5) Respond to any examination objections if raised, 6) Wait for publication in Trademark Journal, and 7) Receive registration certificate upon successful completion. Ladakh trademark applications are generally processed under the Delhi Trademark Registry jurisdiction."
    },
    {
      question: "What documents are required for trademark registration in Ladakh?",
      answer: "Required documents for trademark registration in Ladakh include: Identity proof of applicant (Aadhar card, PAN card, Voter ID), Address proof in Ladakh (utility bills, rental agreement), Clear representation of trademark (logo or wordmark), Description of goods/services, Power of Attorney (Form TM-48) if filing through an agent, Udyam Registration (for MSMEs/Startups to avail fee concession), and Incorporation certificate for companies/LLPs."
    },
    {
      question: "Can I file trademark application online from Leh?",
      answer: "Yes, you can file a trademark application completely online from Leh, Kargil, or any part of Ladakh through the official IP India portal (ipindiaservices.gov.in). The online filing process is efficient, paperless, and provides instant acknowledgment with a temporary application number. Professional trademark attorneys can assist you with the online filing process to ensure accuracy."
    },
    {
      question: "Which trademark office has jurisdiction over Ladakh?",
      answer: "The Trademark Registry in New Delhi typically has jurisdiction over trademark applications from the Union Territory of Ladakh. All physical documents (if not filed online) and hearings (if required) are handled by the Delhi office. However, with the digital system, most processes including filing, objection replies, and video-conference hearings can be managed remotely without visiting Delhi."
    },
    {
      question: "How long does trademark registration take in Ladakh?",
      answer: "Trademark registration in Ladakh typically takes 12 to 18 months from the date of filing to certificate issuance, provided there are no complex objections or third-party oppositions. If the application faces opposition or multiple objections, the timeline may extend beyond 18 months. Fast-track processing is available for startups and MSMEs."
    },
    {
      question: "Can I trademark the word 'Ladakh' or 'Pashmina'?",
      answer: "Generally, geographical names like 'Ladakh' or generic terms like 'Pashmina' cannot be trademarked as exclusive property for a single individual, as they indicate the origin or kind of goods. However, you can register a unique logo or a composite mark that includes these words as part of a distinctive design, provided you disclaim exclusive rights to the geographical or generic terms."
    },
    {
      question: "What is the cost of trademark registration in Ladakh?",
      answer: "The government fee for online filing is ₹4,500 per class for individuals, startups, and MSMEs, and ₹9,000 per class for other entities like companies. Physical filing is more expensive. Professional legal fees for trademark search, filing, and objection handling are additional and vary by service provider."
    },
    {
      question: "Do I need a lawyer in Delhi for Ladakh trademark registration?",
      answer: "While the jurisdiction is Delhi, you do not necessarily need a lawyer physically located in Delhi. You can hire a qualified trademark attorney or agent from anywhere in India who can handle the online filing and represent you in hearings via video conferencing, which is now standard practice."
    },
    {
      question: "What are the benefits for Ladakh tourism businesses?",
      answer: "For hotels, trekking agencies, and homestays in Ladakh, a registered trademark protects your brand name and logo from being copied by competitors. It builds trust with international and domestic tourists who look for authentic and reliable service providers. It also allows you to take legal action against anyone misusing your brand reputation."
    },
    {
      question: "Is trademark registration valid outside Ladakh?",
      answer: "Yes, a trademark registered in India is valid across the entire country, including all states and Union Territories. So, if you expand your Ladakh-based business to Delhi or Mumbai, your brand protection travels with you."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {/* Table of Contents */}
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Ladakh"
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
              <span className="text-[#FFB703] font-medium">Ladakh</span>
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
                Trademark Registration in Ladakh: Complete Guide for 2025
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
                Ladakh, known for its breathtaking landscapes and rich cultural heritage, is rapidly emerging as a hub for unique businesses ranging from sustainable tourism and high-altitude agriculture to exquisite handicrafts like Pashmina. As entrepreneurs in Leh and Kargil tap into global markets, protecting their unique brand identity becomes crucial.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Trademark registration in Ladakh offers a legal shield, ensuring that your hard-earned reputation stays yours. Whether you run a boutique homestay in Nubra Valley, process Seabuckthorn juice, or weave authentic Pashmina shawls, registering your trademark is the first step towards building a resilient and valuable brand. This guide covers the complete process, tailored for the unique business landscape of the Union Territory of Ladakh.
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
                Overview of Trademark Registration in Ladakh
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
                A trademark serves as a distinctive identifier for your goods or services, separating them from competitors in the marketplace. It can be a name, logo, slogan, sound, or even a specific color combination. In the Union Territory of Ladakh, trademark laws are governed by the central Trade Marks Act, 1999, applicable uniformly across India.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Jurisdiction:** Trademark applications from Ladakh fall under the jurisdiction of the **Trademark Registry in New Delhi**. While the physical office is in Delhi, the entire application process—from filing to hearing—has been digitized. This is a significant advantage for businesses in remote areas like Zanskar or Dras, as they do not need to travel to Delhi for routine procedures.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Registering your trademark not only protects you from local copycats but also secures your brand rights across India. This is particularly important for Ladakh's export-oriented businesses (like apricot jam or dried fruits) and tourism operators dealing with international clientele who value brand authenticity.
              </p>
            </div>
          </section>

          {/* Why Register in Ladakh */}
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
                Why Ladakh Businesses Need Trademark Protection
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
                Ladakh's economy is unique, driven by high-value niche products and premium tourism. As the region gains global popularity, the risk of brand imitation increases.
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
                    <i className="fas fa-mountain text-[#FFB703]" aria-hidden="true"></i>
                    Tourism & Hospitality Credibility
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Ladakh is a world-class destination. Hotels, eco-resorts, and adventure tour operators face intense competition. A registered trademark helps tourists distinguish genuine, quality service providers from fly-by-night operators, building long-term trust and recurring business.
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
                    <i className="fas fa-tshirt text-[#FFB703]" aria-hidden="true"></i>
                    Protecting Authentic Handicrafts
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Ladakh Pashmina and wool products are premium goods. Unregistered brands are vulnerable to cheap fakes flooding the market. A trademark on your label assures customers of authenticity, justifying the premium price of genuine hand-woven products.
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
                    <i className="fas fa-leaf text-[#FFB703]" aria-hidden="true"></i>
                    Agri-Processing & Exports
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    With the One District One Product (ODOP) initiative promoting Ladakhi Apricots (Raktsey Karpo) and Seabuckthorn, local processing units are branding their jams, juices, and oils. Trademark registration is essential for these brands to enter national retail chains and export markets securely.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Focus Section */}
          <section id="industry-focus" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Industry-Specific Trademark Insights
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-carrot"></i> Agriculture & Food Processing
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    For businesses dealing in dried apricots, walnuts, and seabuckthorn products. <strong>Class 29</strong> (preserved fruits, jams) and <strong>Class 31</strong> (raw agricultural produce) are critical. Registering a distinctive brand name prevents dilution by generic competitors.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-vest"></i> Handloom & Textiles
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Pashmina, yak wool, and sheep wool products. <strong>Class 24</strong> (Textiles) and <strong>Class 25</strong> (Clothing) are key. Trademarks help cooperative societies and private designers protect their unique labels and fight against machine-made counterfeits sold as 'Ladakh Art'.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-plane-departure"></i> Adventure Tourism
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Trekking agencies, bike rentals, and tour operators. <strong>Class 39</strong> (Transport/Travel Arrangement) is essential. A registered brand builds safety assurance for tourists booking high-altitude expeditions online.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-spa"></i> Wellness & Herbals
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Traditional Sowa-Rigpa medicine and herbal cosmetics. <strong>Class 3</strong> (Cosmetics) and <strong>Class 5</strong> (Pharmaceuticals) are relevant. As global interest in Himalayan wellness grows, protecting your brand ensures you capture the value of your traditional knowledge.
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
                Key Benefits for Ladakh Entrepreneurs
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
                    title: "National Protection",
                    description: "A trademark registered for a Ladakh business is valid throughout India. You can sell your products in Delhi haats or Mumbai boutiques with full legal protection against copycats."
                  },
                  {
                    icon: "fas fa-search-dollar",
                    title: "Brand Value & Premium Pricing",
                    description: "Tourists and international buyers pay a premium for authentic Ladakhi goods. A registered trademark acts as a seal of authenticity, justifying higher price points."
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Trust for Online Business",
                    description: "For businesses selling online or taking bookings via websites, a registered brand (®) builds immediate trust with customers who may never have visited your physical store."
                  },
                  {
                    icon: "fas fa-balance-scale",
                    title: "Legal Recourse",
                    description: "Without registration, fighting someone copying your brand name is difficult and expensive. With registration, you have clear legal rights to sue for infringement and claim damages."
                  },
                  {
                    icon: "fas fa-building",
                    title: "Asset for Loans",
                    description: "A strong brand is an intangible asset. Banks and investors view registered trademarks favorably when assessing business loans or funding for expansion."
                  },
                  {
                    icon: "fas fa-infinity",
                    title: "Perpetual Rights",
                    description: "Unlike patents which expire, a trademark can be renewed indefinitely every 10 years, allowing you to build a legacy brand that lasts for generations."
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
                Who Can Apply in Ladakh?
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
                The applicant base in Ladakh is diverse. The Trademark Act allows virtually any entity claiming ownership of a mark to apply.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-user text-[#FFB703]" aria-hidden="true"></i>
                    Small Businesses & Artisans
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Individual Artisans (Weavers, Painters)</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Homestay Owners</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Trekking Guides (Sole Proprietors)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-users text-[#FFB703]" aria-hidden="true"></i>
                    Groups & Organizations
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Cooperative Societies (e.g., for Dairy or Wool)</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Self Help Groups (SHGs)</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> NGOs and Trusts</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Private Limited Companies</li>
                  </ul>
                </div>
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
                Step-by-Step Registration Process
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="relative space-y-6">
                 <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'rgba(255, 183, 3, 0.3)', opacity: 0.5 }} />
                 
                 {[
                   {
                     step: "Step 1: Trademark Search",
                     desc: "Crucial first step. Check if your proposed brand name (e.g., 'Ladakh Gold Apricots') or logo conflicts with existing marks. A thorough search avoids rejection later."
                   },
                   {
                     step: "Step 2: Application Filing (TM-A)",
                     desc: "File Form TM-A online via the IP India portal. Select the appropriate class (e.g., Class 25 for clothing). You will receive an instant application number."
                   },
                   {
                     step: "Step 3: Examination",
                     desc: "The Delhi Registry examines your application. If your mark is too generic (like just 'Ladakh Wool') or similar to others, they will issue an objection report."
                   },
                   {
                     step: "Step 4: Response to Objection",
                     desc: "You must reply to any objections within 30 days, arguing why your mark is distinctive. Professional legal help is often needed here to draft a strong reply."
                   },
                   {
                     step: "Step 5: Publication",
                     desc: "Once accepted, the mark is published in the Trademark Journal. This opens a 4-month window for third parties to oppose the registration."
                   },
                   {
                     step: "Step 6: Registration",
                     desc: "If no oppositions are filed, the Registrar issues the Certificate of Registration. You can now use the ® symbol."
                   }
                 ].map((item, index) => (
                   <div key={index} className="relative flex gap-4">
                     <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>
                       {index + 1}
                     </div>
                     <div className="flex-1 p-4 rounded-md transition-all duration-300 hover:bg-white/5" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                       <h4 className="text-white font-nunito text-lg font-semibold mb-2">{item.step}</h4>
                       <p className="text-white/90 font-nunito text-sm leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </section>

          {/* Required Documents */}
          <section id="documents" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Required Documents</h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Identity Proof", items: ["Aadhar Card", "PAN Card", "Voter ID (for individuals)"] },
                  { title: "Address Proof", items: ["Electricity Bill", "Rental Agreement", "GST Registration Certificate"] },
                  { title: "Business Proof", items: ["Certificate of Incorporation", "Partnership Deed", "Udyam/MSME Certificate", "Start-up India Certificate"] },
                  { title: "Trademark Details", items: ["High-quality Logo (JPG/PNG)", "User Affidavit (if brand is already in use)", "Power of Attorney (TM-48)", "Goods/Services List"] }
                ].map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <h4 className="text-white font-nunito text-base font-semibold mb-3 text-[#FFB703]">{doc.title}</h4>
                    <ul className="space-y-1">
                      {doc.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/90 font-nunito text-sm">
                          <i className="fas fa-angle-right text-white/50 text-xs"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trademark Search */}
          <section id="search" className="mb-8 scroll-mt-32">
             <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Importance of Trademark Search</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Conducting a search before filing is vital, especially for tourism and handicraft businesses where names often overlap (e.g., many hotels use "Himalaya" or "Ladakh"). A search helps identify:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 text-sm ml-4">
                <li>Identical marks already registered.</li>
                <li>Phonetically similar marks (e.g., "Leh Berry" vs "Lay Berry").</li>
                <li>Potential conflicts in specific classes.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-4">
                You can perform a preliminary search on the IP India website, but a professional search report provides a deeper legal analysis of registrability.
              </p>
            </div>
          </section>

          {/* Trademark Classes */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Relevant Trademark Classes for Ladakh</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Selecting the correct class ensures your brand is protected for the specific goods or services you offer. Common classes for Ladakh include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 24: Textiles</h4>
                   <p className="text-white/80 text-sm">Pashmina shawls, woollen fabrics, carpets, and rugs.</p>
                 </div>
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 29: Food Products</h4>
                   <p className="text-white/80 text-sm">Dried apricots, walnuts, jams, seabuckthorn pulp, and dairy products.</p>
                 </div>
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 39: Travel Services</h4>
                   <p className="text-white/80 text-sm">Trekking agencies, tour operators, taxi services, and bike rentals.</p>
                 </div>
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 43: Hospitality</h4>
                   <p className="text-white/80 text-sm">Hotels, homestays, cafes, restaurants, and eco-resorts.</p>
                 </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section id="timeline" className="mb-8 scroll-mt-32">
             <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Registration Timeline</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <ul className="space-y-3">
                <li className="flex gap-3 text-white/90 text-sm">
                  <i className="fas fa-clock text-[#FFB703] mt-1"></i>
                  <div><strong>Filing:</strong> 1-2 days. Instant application number generation.</div>
                </li>
                <li className="flex gap-3 text-white/90 text-sm">
                  <i className="fas fa-clock text-[#FFB703] mt-1"></i>
                  <div><strong>Examination:</strong> 1-3 months. Review by the Delhi Registry.</div>
                </li>
                 <li className="flex gap-3 text-white/90 text-sm">
                  <i className="fas fa-clock text-[#FFB703] mt-1"></i>
                  <div><strong>Publication:</strong> 4 months. Mandatory public opposition period.</div>
                </li>
                 <li className="flex gap-3 text-white/90 text-sm">
                  <i className="fas fa-clock text-[#FFB703] mt-1"></i>
                  <div><strong>Certificate:</strong> 12-18 months total (if no opposition).</div>
                </li>
              </ul>
            </div>
          </section>

          {/* Maintenance */}
          <section id="maintenance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Maintenance & Renewal</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                A trademark is valid for 10 years. To keep it active:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/90 text-sm ml-4">
                <li>Renew every 10 years (indefinitely).</li>
                <li>Use the mark commercially. Non-use for 5 years allows others to petition for its removal.</li>
                <li>Update the registry if your business address or name changes.</li>
              </ul>
            </div>
          </section>

          {/* Common Mistakes */}
          <section id="mistakes" className="mb-8 scroll-mt-32">
             <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Common Mistakes to Avoid</h2>
            </div>
             <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   "Using purely descriptive names (e.g., 'Ladakh Hotel') which cannot be trademarked.",
                   "Failing to search for similar existing marks before filing.",
                   "Choosing the wrong class (e.g., protecting a hotel name under goods instead of services).",
                   "Ignoring objection notices from the Registry.",
                   "Waiting too long to file, allowing copycats to establish prior use."
                 ].map((mistake, i) => (
                   <div key={i} className="flex items-start gap-2 text-white/90 text-sm p-3 rounded bg-red-500/10 border border-red-500/20">
                     <i className="fas fa-times-circle text-red-400 mt-0.5"></i>
                     <span>{mistake}</span>
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Ladakh</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Expert Trademark Assistance for Ladakh Businesses
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  From Leh to Kargil, we help you secure your brand identity. Our experts handle the entire process online, ensuring a hassle-free experience for you.
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
                    Consult an Expert
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
                    Our Services
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

