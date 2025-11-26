'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function PuducherryClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    // Define sections for TOC
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Overview' },
      { id: 'why-register', title: 'Why Register in Puducherry' },
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
      question: "How to register a trademark in Puducherry?",
      answer: "To register a trademark in Puducherry, you need to: 1) Conduct a comprehensive trademark search to ensure availability, 2) Prepare all required documents including identity proof, address proof, and trademark representation, 3) File Form TM-A online through IP India portal or with professional assistance, 4) Pay the applicable fees, 5) Respond to any examination objections if raised, 6) Wait for publication in Trademark Journal, and 7) Receive registration certificate upon successful completion. The process is handled by the Chennai Trademark Registry jurisdiction."
    },
    {
      question: "What documents are required for trademark registration in Puducherry?",
      answer: "Required documents for trademark registration in Puducherry include: Identity proof of applicant (Aadhar card, PAN card), Address proof in Puducherry (utility bills, rental agreement), Clear representation of trademark (logo or wordmark), Description of goods/services, Power of Attorney (Form TM-48) if filing through an agent, Udyam Registration (for MSMEs to avail fee concession), and Incorporation certificate for companies/LLPs."
    },
    {
      question: "Can I file trademark application online from Pondicherry?",
      answer: "Yes, you can file a trademark application completely online from Pondicherry, Auroville, or any part of the Union Territory through the official IP India portal (ipindiaservices.gov.in). The online filing process is efficient, paperless, and provides instant acknowledgment. Professional trademark attorneys can assist you with the online filing process to ensure accuracy and compliance."
    },
    {
      question: "Which trademark office has jurisdiction over Puducherry?",
      answer: "The Trademark Registry in Chennai has jurisdiction over trademark applications from the Union Territory of Puducherry. All physical documents (if not filed online) and hearings (if required) are handled by the Chennai office. However, with the digital system, most processes including filing, objection replies, and hearings (via video conferencing) can be managed remotely."
    },
    {
      question: "How long does trademark registration take in Puducherry?",
      answer: "Trademark registration in Puducherry typically takes 12 to 18 months from the date of filing to certificate issuance, provided there are no complex objections or third-party oppositions. If the application faces opposition or multiple objections, the timeline may extend beyond 18 months."
    },
    {
      question: "Can I register a trademark for my boutique hotel or cafe in French Quarter?",
      answer: "Yes, absolutely. Hospitality businesses in the French Quarter (White Town) benefit significantly from trademark registration. You can register your hotel or cafe name and logo under Class 43 (Services for providing food and drink; temporary accommodation). This protects your brand from being copied by other establishments."
    },
    {
      question: "Is my trademark valid only in Puducherry?",
      answer: "No, a trademark registered in India is valid throughout the entire country. So, if you register your brand in Puducherry, you have exclusive rights to use it in Tamil Nadu, Kerala, Delhi, or any other state in India."
    },
    {
      question: "Can Auroville-based units register trademarks?",
      answer: "Yes, commercial units based in Auroville can register trademarks for their products (like incense, candles, clothing, or organic food). However, the name 'Auroville' itself is protected under special legislation (The Auroville Foundation Act), so using 'Auroville' as part of your private trademark requires specific authorization."
    },
    {
      question: "What is the cost of trademark registration in Puducherry?",
      answer: "The government fee for online filing is ₹4,500 per class for individuals, startups, and MSMEs, and ₹9,000 per class for other entities like companies. Professional fees for trademark attorneys are additional and depend on the services provided."
    },
    {
      question: "Do I need a local lawyer in Puducherry?",
      answer: "You do not strictly need a lawyer physically located in Puducherry. Since the jurisdiction is Chennai and the process is online, you can hire a qualified trademark attorney from anywhere in India to handle your application."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {/* Table of Contents */}
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Puducherry"
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
              <span className="text-[#FFB703] font-medium">Puducherry</span>
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
                Trademark Registration in Puducherry: Complete Guide for 2025
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
                Puducherry (formerly Pondicherry) is a unique blend of spiritual heritage, French colonial architecture, and bustling tourism. From the serene manufacturing units of Auroville to the boutique cafes of White Town and the industrial estates of Sedarapet, the Union Territory offers a diverse business environment.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Whether you are launching a handmade paper brand in Auroville, running a heritage hotel, or starting a tech firm, protecting your brand identity is crucial. Trademark registration in Puducherry safeguards your logo, name, and reputation from infringement, allowing you to build a distinct presence in the market. This guide provides a comprehensive walkthrough of the registration process, legal requirements, and industry-specific insights for businesses in Puducherry.
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
                Overview of Trademark Registration in Puducherry
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
                A trademark is a legal protection for your brand's intellectual property—specifically your name, logo, slogan, or unique symbol. It grants you exclusive rights to use that mark commercially and prevents others from trading on your goodwill. In Puducherry, as in the rest of India, this is governed by the Trade Marks Act, 1999.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Jurisdiction:** Puducherry falls under the jurisdiction of the **Chennai Trademark Registry**. This means that the administrative processing of your application happens in Chennai. However, the entire application process—from filing Form TM-A to receiving your certificate—can be completed online through the IP India portal, eliminating the need for physical visits.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Given Puducherry's popularity as a tourist destination and a hub for high-quality handicrafts and lifestyle products, trademark registration is essential to distinguish genuine local brands from cheap imitations.
              </p>
            </div>
          </section>

          {/* Why Register in Puducherry */}
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
                Why Puducherry Businesses Need Trademark Protection
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
                The business landscape in Puducherry is vibrant and competitive. Here's why securing a trademark is particularly important for entrepreneurs in the Union Territory:
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
                    <i className="fas fa-umbrella-beach text-[#FFB703]" aria-hidden="true"></i>
                    Tourism & Hospitality Brand Value
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Puducherry attracts millions of tourists. Heritage hotels, cafes, and homestays rely heavily on online reviews and word-of-mouth. A registered trademark protects your establishment's name from being used by inferior competitors trying to confuse tourists.
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
                    <i className="fas fa-hands text-[#FFB703]" aria-hidden="true"></i>
                    Auroville & Handicraft Products
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Products from Auroville—handmade paper, incense, ceramics, and clothing—are world-renowned for quality. Trademark registration ensures that your unique product line is legally protected against counterfeits that dilute the premium value of "Made in Auroville/Pondicherry" goods.
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
                    <i className="fas fa-industry text-[#FFB703]" aria-hidden="true"></i>
                    SME & Industrial Sector
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    With industrial estates in Sedarapet and Mettupalayam, Puducherry has a strong SME base in IT, electronics, and chemicals. B2B businesses need trademarks to secure their reputation in supply chains and tenders across India.
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
                    <i className="fas fa-coffee"></i> Hospitality & Cafes
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    For the famous cafes and boutique hotels in White Town. <strong>Class 43</strong> (Services for providing food and drink; temporary accommodation) is essential. Registering unique cafe names and logos prevents copycats.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-spa"></i> Lifestyle & Wellness
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    For businesses dealing in handmade soaps, essential oils, and spa products. <strong>Class 3</strong> (Cosmetics, cleaning preparations) and <strong>Class 5</strong> (Pharmaceuticals/Ayurvedic) are critical for protecting your brand.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-tshirt"></i> Fashion & Leather
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Puducherry is known for high-quality leather goods and textiles. <strong>Class 18</strong> (Leather and imitations of leather) and <strong>Class 25</strong> (Clothing) help designers protect their labels.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-paint-brush"></i> Art & Pottery
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    For ceramic studios and art galleries. <strong>Class 21</strong> (Household or kitchen utensils; glassware/porcelain) allows potters to brand their unique creations distinctively.
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
                Key Benefits for Puducherry Businesses
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
                    title: "Exclusive Rights",
                    description: "Grants you the sole right to use the mark for your goods/services. You can legally stop others from using a confusingly similar name or logo."
                  },
                  {
                    icon: "fas fa-globe",
                    title: "Pan-India Recognition",
                    description: "A trademark registered in Puducherry is valid across all of India, supporting your business expansion to Chennai, Bangalore, and beyond."
                  },
                  {
                    icon: "fas fa-hand-holding-usd",
                    title: "Asset Value",
                    description: "A registered trademark is an intangible asset. It increases your business valuation and can be sold, licensed, or franchised."
                  },
                  {
                    icon: "fas fa-gavel",
                    title: "Legal Protection",
                    description: "Provides a solid legal basis to sue for infringement and claim damages against counterfeiters, which is harder with an unregistered mark."
                  },
                  {
                    icon: "fas fa-check-circle",
                    title: "Trust & Credibility",
                    description: "The ® symbol signals professionalism and longevity to customers, especially important for brands targeting tourists and international export markets."
                  },
                  {
                    icon: "fas fa-sync",
                    title: "Perpetual Validity",
                    description: "Trademarks can be renewed indefinitely every 10 years, ensuring your brand legacy is protected for generations."
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
                Who Can Apply in Puducherry?
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
                Any person or entity claiming to be the owner of a trademark can apply.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-user text-[#FFB703]" aria-hidden="true"></i>
                    Individuals & Small Businesses
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Artists, Designers, Freelancers</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Sole Proprietorships (Shop Owners)</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Joint Owners</li>
                  </ul>
                </div>

                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-building text-[#FFB703]" aria-hidden="true"></i>
                    Corporate Bodies
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Partnership Firms & LLPs</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Private Limited Companies</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> NGOs, Trusts, and Societies</li>
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
                     desc: "Conduct a thorough search on the IP India database to check if your proposed mark is available. This prevents rejection due to similarity with existing marks."
                   },
                   {
                     step: "Step 2: Filing Application (TM-A)",
                     desc: "File the application online. You will need to identify the correct class of goods/services. Upon filing, you receive an application number and can use the 'TM' symbol."
                   },
                   {
                     step: "Step 3: Examination",
                     desc: "The Chennai Registry examines the application. If there are any objections (e.g., descriptive terms), an examination report is issued."
                   },
                   {
                     step: "Step 4: Response to Objections",
                     desc: "If objected, you must file a legal reply within 30 days justifying why your mark should be registered. A hearing may be scheduled if required."
                   },
                   {
                     step: "Step 5: Journal Publication",
                     desc: "Once accepted, the mark is published in the Trademark Journal for 4 months. This allows third parties to oppose the registration if they have valid grounds."
                   },
                   {
                     step: "Step 6: Registration",
                     desc: "If no opposition is filed (or if decided in your favor), the Registrar issues the Registration Certificate. You can now use the ® symbol."
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
                  { title: "Identity Proof", items: ["PAN Card (Mandatory)", "Aadhar Card", "Voter ID/Passport"] },
                  { title: "Address Proof", items: ["GST Certificate", "Udyam Registration", "Electricity/Water Bill"] },
                  { title: "Business Proof", items: ["Incorporation Certificate", "Partnership Deed", "MSME Certificate"] },
                  { title: "Trademark Details", items: ["Logo Image (JPG/PNG)", "User Affidavit (if prior use claimed)", "Power of Attorney (Form TM-48)"] }
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
                Before filing, it is crucial to ensure your brand name or logo is not already taken. A comprehensive search helps you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 text-sm ml-4">
                <li>Avoid objections from the Registry.</li>
                <li>Prevent future legal disputes with other brand owners.</li>
                <li>Save time and money by getting it right the first time.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-4">
                You can perform a basic search on the IP India website, but professional assistance ensures a deep check across all relevant classes and phonetic similarities.
              </p>
            </div>
          </section>

          {/* Trademark Classes */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Relevant Trademark Classes</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Choose the right class to protect your specific goods or services. Common classes for Puducherry businesses include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 3: Cosmetics</h4>
                   <p className="text-white/80 text-sm">Soaps, perfumery, essential oils, and incense sticks.</p>
                 </div>
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 16: Paper Goods</h4>
                   <p className="text-white/80 text-sm">Handmade paper, stationery, and printed matter.</p>
                 </div>
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 25: Clothing</h4>
                   <p className="text-white/80 text-sm">Readymade garments, footwear, and headgear.</p>
                 </div>
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 43: Hospitality</h4>
                   <p className="text-white/80 text-sm">Hotels, restaurants, cafes, and homestays.</p>
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
                  <div><strong>Filing:</strong> 1-2 days. You get the application number immediately.</div>
                </li>
                <li className="flex gap-3 text-white/90 text-sm">
                  <i className="fas fa-clock text-[#FFB703] mt-1"></i>
                  <div><strong>Examination:</strong> 1-3 months. Registry reviews the application.</div>
                </li>
                 <li className="flex gap-3 text-white/90 text-sm">
                  <i className="fas fa-clock text-[#FFB703] mt-1"></i>
                  <div><strong>Publication:</strong> 4 months. Mandatory opposition period.</div>
                </li>
                 <li className="flex gap-3 text-white/90 text-sm">
                  <i className="fas fa-clock text-[#FFB703] mt-1"></i>
                  <div><strong>Registration:</strong> 12-18 months total (if no opposition).</div>
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
                A trademark is valid for <strong>10 years</strong> from the filing date. To keep it active:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/90 text-sm ml-4">
                <li>Renew every 10 years indefinitely.</li>
                <li>Use the mark in commerce; non-use for 5 years can lead to removal.</li>
                <li>Update the registry if your business address changes.</li>
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
                   "Choosing a descriptive name (e.g., 'Pondicherry Cafe') which is hard to trademark.",
                   "Filing in the wrong class (e.g., registering a hotel under goods instead of services).",
                   "Ignoring the trademark search and facing objections later.",
                   "Failing to respond to examination reports within the deadline.",
                   "Not using the 'TM' symbol while the application is pending."
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Puducherry</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Expert Trademark Assistance for Your Business
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  From Pondicherry to Karaikal, we help you secure your brand identity. Our experts handle the entire process online, ensuring a hassle-free experience for you.
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

