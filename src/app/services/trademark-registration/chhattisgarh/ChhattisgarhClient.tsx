'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function ChhattisgarhClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    // Define sections for TOC
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Overview of Trademark Registration' },
      { id: 'why-register', title: 'Why Register in Chhattisgarh' },
      { id: 'industry-insights', title: 'Industry-Specific Insights' },
      { id: 'benefits', title: 'Key Benefits' },
      { id: 'eligibility', title: 'Eligibility Criteria' },
      { id: 'registration-process', title: 'Registration Process' },
      { id: 'required-documents', title: 'Required Documents' },
      { id: 'trademark-search', title: 'Trademark Search' },
      { id: 'classes', title: 'Trademark Classes' },
      { id: 'timeline', title: 'Registration Timeline' },
      { id: 'post-registration', title: 'Post-Registration' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
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
      question: "How to register a trademark in Chhattisgarh?",
      answer: "To register a trademark in Chhattisgarh, you need to: 1) Conduct a comprehensive trademark search to ensure availability, 2) Prepare all required documents including identity proof, address proof, and trademark representation, 3) File Form TM-A online through IP India portal or with professional assistance, 4) Pay the applicable fees, 5) Respond to any examination objections if raised, 6) Wait for publication in Trademark Journal, and 7) Receive registration certificate upon successful completion. The process is handled by the Mumbai Trademark Registry jurisdiction."
    },
    {
      question: "What documents are required for trademark registration in Chhattisgarh?",
      answer: "Required documents for trademark registration in Chhattisgarh include: Identity proof of applicant (Aadhar card, PAN card), Address proof in Chhattisgarh (utility bills, rental agreement), Clear representation of trademark (logo or wordmark), Description of goods/services, Power of Attorney (Form TM-48) if filing through an agent, Udyam Registration (for MSMEs to avail fee concession), and Incorporation certificate for companies/LLPs."
    },
    {
      question: "Can I file trademark application online from Raipur?",
      answer: "Yes, you can file a trademark application completely online from Raipur or anywhere in Chhattisgarh through the official IP India portal (ipindiaservices.gov.in). The online filing process is efficient, paperless, and provides instant acknowledgment. Professional trademark attorneys can assist you with the online filing process to ensure accuracy and compliance."
    },
    {
      question: "Which trademark office has jurisdiction over Chhattisgarh?",
      answer: "The Trademark Registry in Mumbai has jurisdiction over trademark applications from the state of Chhattisgarh. All physical documents (if not filed online) and hearings (if required) are handled by the Mumbai office. However, with the digital system, most processes including filing, objection replies, and hearings (via video conferencing) can be managed remotely."
    },
    {
      question: "How long does trademark registration take in Chhattisgarh?",
      answer: "Trademark registration in Chhattisgarh typically takes 12 to 18 months from the date of filing to certificate issuance, provided there are no complex objections or third-party oppositions. If the application faces opposition or multiple objections, the timeline may extend beyond 18 months."
    },
    {
      question: "What is the cost of trademark registration in Chhattisgarh?",
      answer: "The government fee for online trademark filing is ₹4,500 per class for individuals, startups, and MSMEs, and ₹9,000 per class for other entities like companies. Physical filing incurs slightly higher fees. Professional fees for trademark attorneys or agents are additional and vary based on the services provided."
    },
    {
      question: "Can I use the TM symbol in Chhattisgarh before registration?",
      answer: "Yes, you can use the 'TM' symbol immediately after filing your trademark application and receiving the acknowledgment receipt. This indicates that you have claimed rights to the trademark. However, you can only use the ® (Registered) symbol once your trademark is officially registered and you have received the registration certificate."
    },
    {
      question: "What are the benefits of registering a trademark in Chhattisgarh?",
      answer: "Registering a trademark in Chhattisgarh provides exclusive rights to use the mark, legal protection against infringement, nationwide validity, enhanced brand value, and the ability to license or franchise your brand. It is crucial for businesses in competitive sectors like steel, power, agriculture, and retail to protect their identity."
    },
    {
      question: "Do I need a local lawyer in Chhattisgarh for trademark registration?",
      answer: "While it is not mandatory to have a lawyer physically located in Chhattisgarh, hiring a trademark attorney with experience in Indian trademark law is highly recommended. Since the jurisdiction is Mumbai and most processes are online, you can work with a specialized trademark attorney from anywhere who can effectively handle your application and any legal proceedings."
    },
    {
      question: "What if my trademark application is objected to?",
      answer: "If your application is objected to by the Examiner, you will receive an Examination Report. You must file a comprehensive reply justifying why your trademark should be registered within 30 days. If the reply is satisfactory, the objection may be waived. If not, a hearing may be scheduled. Professional assistance is crucial at this stage to draft a strong legal response."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {/* Table of Contents */}
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Chhattisgarh"
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
              <span className="text-[#FFB703] font-medium">Chhattisgarh</span>
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
                Trademark Registration in Chhattisgarh: Complete Guide for 2025
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
                Chhattisgarh, often referred to as the "Rice Bowl of India" and the powerhouse of the nation, is a rapidly developing state with a thriving industrial landscape. From the steel plants of Bhilai to the power hubs in Korba and the growing commercial ecosystem in Raipur, businesses in Chhattisgarh are expanding their footprint nationally and globally.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                In this competitive environment, protecting your brand identity is paramount. Trademark registration in Chhattisgarh provides the legal shield your business needs to safeguard its reputation, prevent unauthorized use of your brand name or logo, and build a valuable intangible asset. This comprehensive guide covers everything you need to know about the trademark registration process, documents, fees, and benefits specific to businesses operating in Chhattisgarh.
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
                Overview of Trademark Registration in Chhattisgarh
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
                A trademark is a unique visual symbol, which may be a word, signature, name, device, label, numerals, or combination of colors used by one undertaking on goods or services or other articles of commerce to distinguish it from other similar goods or services originating from a different undertaking. In Chhattisgarh, trademark registration is governed by the Trade Marks Act, 1999.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                For administrative purposes, the Trademark Registry in India is divided into five jurisdictions. Chhattisgarh falls under the jurisdiction of the **Mumbai Trademark Registry**. This means that while the application can be filed online from anywhere in Chhattisgarh—be it Raipur, Bilaspur, Durg, or Raigarh—any physical hearings or legal proceedings that require personal appearance (and cannot be done via video conferencing) would theoretically fall under the Mumbai office's purview. However, the modern digital infrastructure of the IP India portal allows almost the entire process to be handled remotely.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Whether you are a manufacturer in the Urla Industrial Area, a service provider in Naya Raipur, or a startup in Bhilai, registering your trademark ensures that your hard-earned brand reputation remains exclusively yours. It grants you the legal right to sue for infringement and claim damages, acting as a strong deterrent against copycats and counterfeiters.
              </p>
            </div>
          </section>

          {/* Why Register in Chhattisgarh */}
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
                Why Chhattisgarh Businesses Need Trademark Registration
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
                Chhattisgarh's economy is diverse, ranging from heavy industries like steel and aluminum to a burgeoning MSME sector and agriculture. The need for trademark protection arises from the intense competition and the necessity to build a distinct brand identity in a crowded marketplace.
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
                    <i className="fas fa-industry text-[#FFB703]" aria-hidden="true"></i>
                    Protection in Industrial Hubs
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    For industries in Bhilai, Raigarh, and Korba, brand reputation is tied to product quality. A registered trademark prevents unscrupulous competitors from selling inferior quality goods (like steel rods, cement, or machinery parts) under your trusted brand name, preserving your market share and customer trust.
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
                    <i className="fas fa-seedling text-[#FFB703]" aria-hidden="true"></i>
                    Agri-Business and Food Processing
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    With Chhattisgarh being a major producer of rice and forest produce, the food processing sector is growing. Trademarks help packaged food brands from the state distinguish themselves on retail shelves across India, ensuring that consumers recognize and choose their specific products over generic alternatives.
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
                    <i className="fas fa-store text-[#FFB703]" aria-hidden="true"></i>
                    Retail and Service Sector Growth
                  </h4>
                  <p className="text-white/90 font-nunito text-sm leading-relaxed">
                    Raipur is emerging as a major commercial trading hub for Central India. Retail chains, logistics companies, and service providers need trademarks to protect their trade names and logos. As businesses expand from local to regional players, a registered trademark becomes essential for franchising and licensing opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Specific Insights */}
          <section id="industry-insights" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Needs for Key Chhattisgarh Industries
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
                Chhattisgarh's industrial profile is unique, and so are the intellectual property needs of its businesses. Here is a deep dive into how trademark registration benefits specific sectors in the state:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-cogs"></i> Steel, Power & Mining
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    With industrial giants in Bhilai, Korba, and Raigarh, the sector relies heavily on B2B trust. Registering trademarks for <strong>Class 6 (Common Metals)</strong>, <strong>Class 37 (Construction/Repair)</strong>, and <strong>Class 40 (Treatment of Materials)</strong> ensures that your brand stands out in tenders and vendor listings. A registered logo on steel rods or cement bags acts as a seal of quality assurance against counterfeit construction materials.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-utensils"></i> Rice & Food Processing
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                     As the "Rice Bowl of India," Chhattisgarh has thousands of rice mills. Branding particular varieties of non-basmati rice (like Jeeraphool or Dubraj) under <strong>Class 30</strong> is essential for commanding premium prices in national markets. Trademarks protect your unique packaging designs from lookalikes, crucial for FMCG success.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-paint-brush"></i> Handicrafts & Textiles
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Chhattisgarh is famous for Kosa Silk (Champa), Dhokra Art (Bell Metal), and Terracotta. Artisans and cooperatives must register trademarks (and Geographical Indications where applicable) to protect their heritage crafts from mass-produced imitations. <strong>Class 24 (Textiles)</strong> and <strong>Class 21 (Household Utensils)</strong> are key here.
                  </p>
                </div>

                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="fas fa-laptop-code"></i> IT & Startups
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    With IT parks coming up in Naya Raipur and Bhilai, the tech sector is growing. Startups need to secure their brand names for software (<strong>Class 9</strong>) and IT services (<strong>Class 42</strong>) early on to attract investors. A clear trademark search is the first step for any new venture in the incubation centers of Chhattisgarh.
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
                Key Benefits of Trademark Registration
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
                    icon: "fas fa-gavel",
                    title: "Legal Protection",
                    description: "Registered owners have the right to sue for infringement and claim damages. The burden of proof is easier in court as registration serves as prima facie evidence of ownership."
                  },
                  {
                    icon: "fas fa-globe-americas",
                    title: "Nationwide Coverage",
                    description: "A trademark registered in Chhattisgarh is valid across all of India, allowing you to expand your business to other states without worrying about losing your brand rights."
                  },
                  {
                    icon: "fas fa-coins",
                    title: "Intangible Asset",
                    description: "A trademark is an intellectual property asset that can be valued, sold, franchised, or commercially contracted, adding to the overall valuation of your company."
                  },
                  {
                    icon: "fas fa-hand-holding-usd",
                    title: "Trust and Goodwill",
                    description: "Customers tend to trust registered brands more. The ® symbol communicates professionalism and quality assurance, helping to build long-term customer loyalty."
                  },
                  {
                    icon: "fas fa-ban",
                    title: "Deterrent to Copycats",
                    description: "Registration deters others from using similar marks. The public record of your trademark warns potential infringers that your brand is legally protected property."
                  },
                  {
                    icon: "fas fa-certificate",
                    title: "Use of ® Symbol",
                    description: "Only registered trademark owners can use the prestigious ® symbol. This symbol serves as a notice to the public of your legal rights and adds status to your brand."
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
                Eligibility Criteria for Trademark Registration
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
                In India, trademark laws are liberal regarding who can apply for registration. Any individual, company, or legal entity claiming to be the proprietor of a trademark can apply. Here is a list of eligible applicants in Chhattisgarh:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-user text-[#FFB703]" aria-hidden="true"></i>
                    Individuals & Proprietorships
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Individuals (e.g., Freelancers, Artists)</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Sole Proprietorship Firms</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Joint Owners (Two or more individuals)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-building text-[#FFB703]" aria-hidden="true"></i>
                    Corporate Entities
                  </h3>
                  <ul className="space-y-2 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Private Limited Companies</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Limited Liability Partnerships (LLPs)</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Partnership Firms</li>
                    <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> One Person Companies (OPC)</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-md md:col-span-2" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                   <h3 className="text-white font-nunito text-lg font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-hands-helping text-[#FFB703]" aria-hidden="true"></i>
                    Other Legal Entities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-white/90 font-nunito text-sm">
                      <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Trusts and NGOs</li>
                      <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Societies</li>
                    </ul>
                    <ul className="space-y-2 text-white/90 font-nunito text-sm">
                       <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Government Departments</li>
                       <li className="flex items-start gap-2"><i className="fas fa-check text-[#FFB703] mt-1"></i> Foreign Companies</li>
                    </ul>
                  </div>
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
                     desc: "Before filing, it is critical to conduct a comprehensive search on the IP India database to ensure your trademark is unique. This avoids rejection due to similarity with existing marks. For Chhattisgarh businesses, this means checking not just local brands but national ones as well."
                   },
                   {
                     step: "Step 2: Application Filing (Form TM-A)",
                     desc: "Once the search is clear, file Form TM-A online. You'll need to specify the class of goods/services. Chhattisgarh applicants fall under the Mumbai Registry jurisdiction. Upon filing, you get an application number and can start using the 'TM' symbol."
                   },
                   {
                     step: "Step 3: Examination by Registry",
                     desc: "The Trademark Office examines your application to check if it complies with the Trademark Act. If they find any objections (e.g., mark is descriptive or similar to others), they issue an Examination Report. You must reply to this within 30 days."
                   },
                   {
                     step: "Step 4: Publication in Journal",
                     desc: "If the Registrar accepts your application (or after you successfully answer objections), the trademark is published in the Trademark Journal. This creates a 4-month window for the public to oppose your registration if they believe it infringes their rights."
                   },
                   {
                     step: "Step 5: Registration & Certification",
                     desc: "If there are no oppositions within 4 months, or if you win the opposition proceedings, the Registrar issues the Registration Certificate. You can now use the ® symbol next to your brand name."
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
          <section id="required-documents" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Required Documents</h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Identity Proof", items: ["PAN Card", "Aadhar Card", "Passport", "Driving License"] },
                  { title: "Address Proof", items: ["Electricity Bill", "Rental Agreement", "GST Certificate", "Udyam Registration"] },
                  { title: "Business Proof", items: ["Certificate of Incorporation", "Partnership Deed", "MSME Certificate", "Shop & Establishment License"] },
                  { title: "Trademark Specifics", items: ["Logo Image (JPG/PNG)", "User Affidavit (if prior use)", "Power of Attorney (Form TM-48)", "List of Goods/Services"] }
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
          <section id="trademark-search" className="mb-8 scroll-mt-32">
             <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Importance of Trademark Search</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                A trademark search is not mandatory but is highly recommended. In a resource-rich state like Chhattisgarh, many businesses operate in similar sectors (e.g., multiple steel fabrication units in Bhilai). A search helps you ensure that your brand name is not identical or deceptively similar to an existing one.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                You can conduct a free public search on the <strong>IP India website</strong>. However, a professional search goes deeper, checking for phonetic similarities and analyzing the risk of objection. This small step can save months of legal hassle and application fees.
              </p>
            </div>
          </section>

          {/* Trademark Classes */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Relevant Trademark Classes for Chhattisgarh</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Trademarks are registered under 45 specific classes (1-34 for goods, 35-45 for services). Choosing the right class is vital. Here are some key classes relevant to Chhattisgarh's industries:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 6: Common Metals</h4>
                   <p className="text-white/80 text-sm">Crucial for steel, aluminum, and iron industries in Bhilai and Raigarh.</p>
                 </div>
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 19: Building Materials</h4>
                   <p className="text-white/80 text-sm">For cement manufacturers and non-metallic building materials.</p>
                 </div>
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 30: Food Products</h4>
                   <p className="text-white/80 text-sm">For rice mills, spices, and processed food units in the state.</p>
                 </div>
                 <div className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                   <h4 className="text-white font-bold mb-1">Class 35: Services</h4>
                   <p className="text-white/80 text-sm">Advertising, business management, and retail services (shops/malls).</p>
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
                  <div><strong>Filing:</strong> Immediate (1-2 days). You get the application number instantly.</div>
                </li>
                <li className="flex gap-3 text-white/90 text-sm">
                  <i className="fas fa-clock text-[#FFB703] mt-1"></i>
                  <div><strong>Examination:</strong> 1-3 months. Registry checks the application.</div>
                </li>
                 <li className="flex gap-3 text-white/90 text-sm">
                  <i className="fas fa-clock text-[#FFB703] mt-1"></i>
                  <div><strong>Publication:</strong> 4 months. Mandatory waiting period for opposition.</div>
                </li>
                 <li className="flex gap-3 text-white/90 text-sm">
                  <i className="fas fa-clock text-[#FFB703] mt-1"></i>
                  <div><strong>Registration:</strong> 12-18 months total. Certificate issued if no opposition.</div>
                </li>
              </ul>
              <div className="mt-4 p-3 rounded-md bg-white/5 border border-white/10">
                <p className="text-white/80 text-sm italic">Note: Timelines can vary depending on the backlog at the Mumbai Registry and if any objections are raised.</p>
              </div>
            </div>
          </section>

          {/* Post Registration */}
          <section id="post-registration" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Post-Registration Maintenance</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                A trademark is valid for <strong>10 years</strong> from the date of filing. It can be renewed indefinitely for subsequent 10-year periods. To maintain your rights, you must:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/90 text-sm ml-4">
                <li>File for renewal every 10 years (Form TM-R).</li>
                <li>Actively use the trademark in commerce; non-use for 5 years can lead to cancellation.</li>
                <li>Monitor the market for infringers and take legal action if necessary.</li>
              </ul>
            </div>
          </section>

          {/* Common Mistakes */}
          <section id="common-mistakes" className="mb-8 scroll-mt-32">
             <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Common Mistakes to Avoid</h2>
            </div>
             <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   "Skipping the trademark search and filing a name that already exists.",
                   "Choosing a descriptive name (e.g., 'Best Rice' for rice) which is likely to be rejected.",
                   "Filing in the wrong class (e.g., filing a steel brand under services instead of goods).",
                   "Ignoring examination reports or missing the 30-day deadline to reply.",
                   "Not using the 'TM' symbol during the application process."
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
                  <span className="text-white font-nunito text-base font-semibold">Secure Your Brand in Chhattisgarh</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Get Expert Assistance for Trademark Registration
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't leave your brand's safety to chance. Whether you are in Raipur, Bhilai, or Bilaspur, our expert trademark attorneys can handle the entire registration process for you—from search to certification.
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
