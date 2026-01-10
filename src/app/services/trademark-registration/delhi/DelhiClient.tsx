'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function DelhiClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'overview', title: 'Trademark Registration in Delhi NCR: An Overview' },
      { id: 'importance', title: 'Why Trademark Registration is Vital for Delhi Businesses' },
      { id: 'benefits', title: 'Strategic Benefits of Brand Protection' },
      { id: 'eligibility', title: 'Who Can Apply for a Trademark in Delhi?' },
      { id: 'process', title: 'Step-by-Step Registration Process' },
      { id: 'documents', title: 'Required Documents for Filing' },
      { id: 'search', title: 'The Critical Role of Trademark Search' },
      { id: 'classes', title: 'Key Trademark Classes for Delhi Industries' },
      { id: 'objections', title: 'Handling Objections and Oppositions' },
      { id: 'renewal', title: 'Trademark Renewal and Maintenance' },
      { id: 'assignment', title: 'Trademark Assignment and Licensing' },
      { id: 'why-choose-us', title: 'Why Choose IPRKaro?' },
      { id: 'testimonials', title: 'Client Testimonials' },
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
      question: "How do I register a trademark in Delhi?",
      answer: "To register a trademark in Delhi, follow these steps: 1) Conduct a thorough trademark search through the IP India portal to verify availability, 2) Prepare all necessary documents including identity proof, business documents, and trademark representation, 3) File Form TM-A online through the IP India website or seek professional assistance, 4) Track your application through examination, publication, and opposition stages, 5) Respond promptly to any objections raised by the Trademark Examiner, 6) Once approved, your trademark will be published in the Trademark Journal for opposition, and 7) If no opposition arises within four months, you will receive your registration certificate. The entire process typically takes 12 to 18 months."
    },
    {
      question: "What documents are needed for trademark registration in Delhi?",
      answer: "Essential documents for trademark registration in Delhi include: Applicant identity proof such as Aadhar card, PAN card, passport, or driving license, Address proof including utility bills or rental agreement, Business registration documents like Certificate of Incorporation for companies or Partnership Deed for partnerships, Clear representation of your trademark in JPG or PNG format with high resolution, Description of goods or services covered by the trademark, Power of Attorney on Form TM-48 if filing through a trademark agent or attorney, and User affidavit if claiming prior use of the trademark. All documents should be self-attested and clearly scanned for online submission."
    },
    {
      question: "Can I file trademark application online from Delhi?",
      answer: "Yes, trademark applications can be filed completely online from Delhi through the official IP India portal at ipindiaservices.gov.in. The online filing process offers several advantages including faster processing, instant acknowledgment, lower government fees, convenient document upload, online payment options, and real-time application tracking. You need to create an account on the IP India portal, fill Form TM-A with accurate details, upload all required documents, and make online payment. The entire process can be completed from your home or office in Delhi without visiting the trademark office."
    },
    {
      question: "How long does trademark registration take in Delhi?",
      answer: "Trademark registration in Delhi typically takes 12 to 18 months from application filing to certificate issuance. The timeline breaks down as follows: Application filing and acknowledgment takes 1 to 2 weeks, Examination by the Trademark Registry takes 8 to 12 months, Response to objections if any takes 1 to 2 months, Publication in Trademark Journal takes 1 to 2 months after acceptance, Opposition period lasts 4 months from publication date, and Certificate issuance takes 1 to 2 months after opposition period concludes. The actual timeline may vary depending on objections, oppositions, workload at the registry, and complexity of your application."
    },
    {
      question: "What are the benefits of registering trademark in Delhi?",
      answer: "Registering a trademark in Delhi provides multiple benefits: Exclusive legal rights to use your mark across India, not just Delhi, Legal protection against infringement and unauthorized use by competitors, Ability to take legal action and claim damages against infringers, Enhanced brand credibility and market recognition in the competitive Delhi NCR market, Valuable intangible asset that adds to your business valuation, Licensing and franchising opportunities to generate additional revenue, Deterrent effect preventing others from using similar marks, Priority claim if you expand to international markets through Madrid Protocol, Easy access to Delhi Trademark Office for any physical requirements, and Strong foundation for building long-term brand equity in one of India's largest business hubs."
    },
    {
      question: "Which trademark office handles Delhi applications?",
      answer: "Trademark applications from Delhi are handled by the Trade Marks Registry located at Baudhik Sampada Bhawan in New Delhi. This office has jurisdiction over Delhi, Haryana, Himachal Pradesh, Jammu and Kashmir, Punjab, Chandigarh, and Uttarakhand. However, with the online filing system through IP India portal, applicants from Delhi can file applications electronically without physically visiting the office. For queries or physical submissions, you can visit the Delhi Trademark Office during working hours. The office processes applications, conducts examinations, issues examination reports, publishes accepted marks, handles oppositions, and issues registration certificates."
    },
    {
      question: "Can startups in Delhi get any benefits for trademark registration?",
      answer: "Yes, startups in Delhi recognized under the Startup India program receive significant benefits for trademark registration. The benefits include 50 percent rebate on trademark application fees, making it more affordable, Fast-track examination facility for quicker processing, Panel of facilitators providing free professional assistance for filing and prosecution, Exemption from showing proof of use for first three years, and Access to Intellectual Property Rights facilitation cell for guidance. To avail these benefits, your startup must be registered with the Department for Promotion of Industry and Internal Trade and have a valid recognition certificate. These benefits make trademark protection more accessible and affordable for Delhi-based startups and entrepreneurs."
    },
    {
      question: "What happens if my trademark application gets objected in Delhi?",
      answer: "If your trademark application receives an objection from the Examiner in Delhi, you must respond within 30 days from the date of objection notice. Common objections include similarity with existing marks, lack of distinctiveness, descriptive nature of the mark, or procedural deficiencies. To respond effectively: Carefully analyze the objection grounds mentioned in the examination report, Prepare a comprehensive reply addressing each objection with legal arguments and evidence, Cite relevant case laws and legal precedents supporting your position, Provide evidence of use, acquired distinctiveness, or coexistence agreements if applicable, File the response within the stipulated time through the IP India portal, and Request a hearing if necessary to present your case personally. Professional legal assistance significantly improves chances of overcoming objections successfully."
    },
    {
      question: "Can I use TM symbol before registration in Delhi?",
      answer: "Yes, you can use the TM symbol immediately after filing your trademark application in Delhi, even before registration is complete. The TM symbol indicates that you are claiming rights to the mark as a trademark, though it is not yet registered. However, you cannot use the registered trademark symbol R in a circle until your trademark registration is complete and you receive the registration certificate. Using the R symbol without registration is a legal offense and may attract penalties. Once your trademark is successfully registered, you should switch from TM to R symbol to indicate registered trademark status and gain full legal protection."
    },
    {
      question: "Do I need a lawyer for trademark registration in Delhi?",
      answer: "While hiring a lawyer or trademark agent is not mandatory for trademark registration in Delhi, professional assistance is highly recommended for several reasons: Trademark attorneys conduct comprehensive searches to identify potential conflicts, ensure proper class selection to provide complete protection, draft applications accurately to avoid objections, handle examination objections with legal expertise and case law citations, manage opposition proceedings effectively if someone challenges your application, save time and reduce chances of errors or rejections, provide strategic advice on trademark portfolio management, and offer ongoing support for renewals, infringement actions, and licensing. The investment in professional services often prevents costly mistakes and significantly improves registration success rates, especially for businesses serious about brand protection in the competitive Delhi market."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration in Delhi"
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
              <span className="text-[#FFB703] font-medium">Delhi</span>
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
                Trademark Registration in Delhi: Secure Your Brand
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
                Delhi, the political and commercial heart of India, is a thriving ecosystem for businesses ranging from centuries old family firms in Chandni Chowk to cutting edge tech startups in Okhla and Nehru Place. In this hyper competitive market, your brand identity is your most valuable asset. Trademark registration in Delhi is not just a legal formality; it is a strategic necessity to protect your market share and reputation in the National Capital Region (NCR).
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                Whether you are a fashion designer in Hauz Khas, a manufacturer in Bawana, or a service provider in Dwarka, securing your intellectual property rights ensures that your hard earned goodwill remains exclusively yours. This comprehensive guide details everything you need to know about registering a trademark in Delhi, from the process at the local registry to the strategic benefits for your business.
              </p>
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Registration in Delhi NCR: An Overview
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a distinctive sign that identifies certain goods or services as those produced or provided by a specific person or enterprise. It can be a name, logo, slogan, sound, or even a smell. In India, the **Trade Marks Act, 1999** governs the registration and protection of trademarks.
              </p>
              <h3 className="text-white font-nunito text-xl font-semibold mb-2 mt-4">Jurisdiction: The Delhi Registry</h3>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                The Trade Marks Registry in India is divided into five zones. Delhi is home to one of the most active registries in the country.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Address of the Appropriate Office:**<br />
                Trade Marks Registry,<br />
                Boudhik Sampada Bhawan,<br />
                Plot No. 32, Sector 14, Dwarka,<br />
                New Delhi – 110075.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Jurisdiction:** This office handles applications from Delhi, Haryana, Punjab, Himachal Pradesh, Jammu & Kashmir, Chandigarh, and Uttarakhand.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Digital Advantage:** While the physical office is in Dwarka, the entire process is digitized. You can file your application (Form TM-A), respond to examination reports, and even attend hearings via video conferencing without visiting the office. This makes the process efficient and accessible for businesses across the NCR region.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                A registered trademark is valid for **10 years** and can be renewed indefinitely, making it a perpetual asset for your business.
              </p>
            </div>
          </section>

          {/* Importance Section */}
          <section id="importance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Trademark Registration is Vital for Delhi Businesses
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Delhi's market is dynamic and crowded. Here is why trademark protection is essential for key sectors in the capital:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.08)', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Retail & E-commerce</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    For sellers in wholesale hubs like Sadar Bazar or retailers in malls like Select Citywalk, a trademark protects against counterfeits. It is also mandatory for Brand Registry on platforms like Amazon and Flipkart.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Startups & Tech</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Delhi NCR is a startup hub. Investors in Okhla and Gurugram look for secured IP assets before funding. Protecting your app name or software brand is crucial for valuation.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Manufacturing & Exports</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Industrial units in Bawana, Narela, and Okhla need trademarks to build trust in export markets. A registered mark is proof of origin and quality for international buyers.
                  </p>
                </div>
                <div className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-white font-nunito text-lg font-semibold mb-2">Hospitality & Services</h3>
                  <p className="text-white/90 font-nunito text-sm">
                    Restaurants in Connaught Place and boutique hotels in South Delhi rely heavily on their brand reputation. A trademark prevents others from opening copycat outlets with similar names.
                  </p>
                </div>
              </div>

              {/* Unique Delhi Content: IPD */}
              <div className="mt-6 p-5 rounded-md border border-[#FFB703]/30 bg-[#FFB703]/5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#FFB703]/20 text-[#FFB703]">
                    <i className="fas fa-balance-scale text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-nunito text-lg font-bold mb-2">The Delhi High Court Advantage</h3>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      <strong>Did you know?</strong> Delhi is arguably the best jurisdiction for IP owners in India. The <strong>Delhi High Court</strong> was the first in the country to establish a dedicated <strong>Intellectual Property Division (IPD)</strong>. This means if your trademark is ever infringed, your case is heard by specialized judges with deep domain expertise, ensuring faster and more effective justice compared to regular commercial courts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Strategic Benefits of Brand Protection
              </h2>
            </div>
            
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Registering your trademark is a strategic move that offers long term advantages:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Exclusive Rights", icon: "fas fa-gavel", desc: "You get the sole right to use the mark across India. You can take legal action against anyone using a confusingly similar mark." },
                  { title: "Trust & Reputation", icon: "fas fa-handshake", desc: "A registered trademark signals that your business is established and follows legal norms, building trust with customers and partners." },
                  { title: "Intangible Asset", icon: "fas fa-coins", desc: "Your trademark is an asset that appreciates over time. It can be sold, franchised, or used as collateral for loans." },
                  { title: "Deterrent to Copycats", icon: "fas fa-shield-alt", desc: "The public record of your registration warns potential infringers to stay away from your brand name." },
                  { title: "Global Expansion", icon: "fas fa-globe", desc: "Your Indian registration can be the basis for filing international trademark applications under the Madrid Protocol." },
                  { title: "Use of ® Symbol", icon: "fas fa-registered", desc: "You can legally use the ® symbol, which adds a layer of professionalism and prestige to your brand." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255, 183, 3, 0.15)', border: '1px solid rgba(255, 183, 3, 0.3)' }}>
                      <i className={`${item.icon} text-[#FFB703] text-base`}></i>
                    </div>
                    <div>
                      <h4 className="text-white font-nunito text-base font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/90 font-nunito text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Eligibility Section */}
          <section id="eligibility" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Who Can Apply for a Trademark in Delhi?
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The eligibility is broad, covering various types of entities operating in the capital:
              </p>
              <ul className="space-y-3 text-white/90 font-nunito text-sm">
                <li className="flex items-start gap-2">
                  <i className="fas fa-user text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Individuals & Sole Proprietors:</strong>
                    <p className="text-xs text-white/70 mt-1">Designers, consultants, shop owners, and freelancers.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-building text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Private Limited Companies:</strong>
                    <p className="text-xs text-white/70 mt-1">Startups and established corporate houses.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-users text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Partnership Firms & LLPs:</strong>
                    <p className="text-xs text-white/70 mt-1">Professional firms (lawyers, CAs) and trading partnerships.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-university text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>NGOs and Trusts:</strong>
                    <p className="text-xs text-white/70 mt-1">Charitable organizations and educational institutions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Step-by-Step Registration Process
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-6">
                The process is streamlined but requires attention to detail. Here is how it works:
              </p>
              <div className="relative space-y-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: 'rgba(255, 183, 3, 0.3)', opacity: 0.5 }} />
                
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>1</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Trademark Search</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      Before filing, we conduct a thorough search on the IP India database to ensure your proposed mark is not identical or similar to existing marks. This step is crucial to avoid objections.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>2</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Application Filing (Form TM-A)</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      We prepare and file the application online. This includes details of the applicant, the mark, the class of goods/services, and the user date (date of first use). An application number is generated immediately.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>3</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Examination</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      The Registrar examines the application for compliance with the Act. They check for distinctiveness and conflicts with other marks. If there are issues, an Examination Report is issued, which must be replied to within 30 days.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>4</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Publication</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If the application is accepted, it is published in the Trademark Journal. This gives the public an opportunity (4 months) to oppose the registration if they believe it infringes on their rights.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-nunito font-bold text-sm" style={{ background: 'linear-gradient(135deg, #FFB703, #FFA000)', color: '#0C002B', boxShadow: '0 3px 10px rgba(255, 183, 3, 0.4)' }}>5</div>
                  <div className="flex-1">
                    <h4 className="text-white font-nunito text-lg font-semibold mb-2">Registration</h4>
                    <p className="text-white/90 font-nunito text-sm leading-relaxed">
                      If there is no opposition, or if the opposition is decided in your favor, the Registrar issues the Registration Certificate. The mark is now registered for 10 years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Documents Section */}
          <section id="documents" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Required Documents for Filing
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Having the right documents ready speeds up the process:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">Individual / Sole Proprietor</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Logo/Mark:</strong> Soft copy of the logo (JPEG) or word mark.</li>
                    <li className="flex items-start gap-2">• <strong>Identity Proof:</strong> PAN Card, Aadhaar Card, or Passport.</li>
                    <li className="flex items-start gap-2">• <strong>Address Proof:</strong> Recent utility bill or bank statement.</li>
                    <li className="flex items-start gap-2">• <strong>Form-48:</strong> Signed Power of Attorney.</li>
                    <li className="flex items-start gap-2">• <strong>User Affidavit:</strong> If claiming prior usage.</li>
                  </ul>
                </div>
                <div className="p-5 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 className="text-white font-nunito text-lg font-semibold mb-3 text-[#FFB703] border-b border-white/10 pb-2">Company / LLP / Startup</h4>
                  <ul className="space-y-3 text-white/90 font-nunito text-sm">
                    <li className="flex items-start gap-2">• <strong>Incorporation Certificate:</strong> Or Partnership Deed.</li>
                    <li className="flex items-start gap-2">• <strong>Udyam/Startup Certificate:</strong> Mandatory for 50% fee rebate.</li>
                    <li className="flex items-start gap-2">• <strong>Signatory's ID:</strong> ID and address proof of the Director/Partner.</li>
                    <li className="flex items-start gap-2">• <strong>Board Resolution:</strong> Authorizing the signatory.</li>
                    <li className="flex items-start gap-2">• <strong>Form-48:</strong> Power of Attorney signed by the authorized signatory.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Search Section */}
          <section id="search" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                The Critical Role of Trademark Search
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark search is the foundation of a successful application. It involves checking the registry for identical or phonetically similar marks that are already registered or pending.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                **Why is it important?**
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4 mb-4">
                <li>**Avoids Rejection:** Helps you identify potential conflicts before spending money on filing fees.</li>
                <li>**Saves Time:** Prevents months of delay caused by objections based on similarity.</li>
                <li>**Legal Safety:** Ensures you don't inadvertently infringe on someone else's rights.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Our team uses advanced search tools to provide a comprehensive report on the registrability of your mark.
              </p>
            </div>
          </section>

          {/* Classes Section */}
          <section id="classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Key Trademark Classes for Delhi Industries
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Choosing the right class is vital. Here are the most relevant classes for businesses in Delhi:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { class: "Class 25", desc: "Clothing, footwear, headgear. Vital for fashion brands in Karol Bagh and Lajpat Nagar." },
                  { class: "Class 9", desc: "Software, electronics, and apps. Key for tech startups in Okhla and Nehru Place." },
                  { class: "Class 35", desc: "Advertising, business management, and retail services. For shops, malls, and consultants." },
                  { class: "Class 43", desc: "Services for providing food and drink. For restaurants and cafes in CP and Hauz Khas." },
                  { class: "Class 41", desc: "Education and entertainment. For coaching centers and event management companies." },
                  { class: "Class 42", desc: "Scientific and technological services. For IT companies and software developers." },
                  { class: "Class 3", desc: "Cosmetics and cleaning preparations. For beauty brands." },
                  { class: "Class 5", desc: "Pharmaceuticals. For healthcare companies." },
                  { class: "Class 36", desc: "Insurance and financial affairs. For fintech and consultancy firms." }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-md" style={{ background: 'rgba(255, 183, 3, 0.05)', border: '1px solid rgba(255, 183, 3, 0.1)' }}>
                    <h5 className="text-[#FFB703] font-bold text-sm mb-1">{item.class}</h5>
                    <p className="text-white/80 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Objections Section */}
          <section id="objections" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Handling Objections and Oppositions
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Challenges can arise during the registration process.
              </p>
              
              <h4 className="text-white font-nunito text-lg font-semibold mb-2 mt-4">Trademark Objection</h4>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                This is raised by the Registry if the mark violates the Trade Marks Act (e.g., it is descriptive or similar to an existing mark). You must file a legal reply justifying why your mark should be registered.
              </p>

              <h4 className="text-white font-nunito text-lg font-semibold mb-2 mt-4">Trademark Opposition</h4>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                This is filed by a third party (competitor or brand owner) who feels your mark damages their rights. This leads to a legal proceeding where both sides present evidence.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Professional legal assistance is highly recommended to navigate these hurdles successfully.
              </p>
            </div>
          </section>

          {/* Renewal Section */}
          <section id="renewal" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Renewal and Maintenance
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                To keep your rights alive, you must renew your trademark.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Validity:** 10 years from the date of application.</li>
                <li>**Renewal:** Can be done every 10 years indefinitely.</li>
                <li>**Window:** You can file for renewal 1 year before the expiry date.</li>
                <li>**Consequence:** Failure to renew leads to the removal of the mark from the register.</li>
              </ul>
            </div>
          </section>

          {/* Assignment Section */}
          <section id="assignment" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Trademark Assignment and Licensing
              </h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Trademarks are transferable assets.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 font-nunito text-sm ml-4">
                <li>**Assignment:** You can sell your trademark to another party. This is common during business acquisitions.</li>
                <li>**Licensing:** You can allow others to use your mark (e.g., franchising) in exchange for royalties.</li>
              </ul>
              <p className="text-white/90 font-nunito text-base leading-relaxed mt-3">
                These agreements must be recorded with the Registry to be legally binding on third parties.
              </p>
            </div>
          </section>

          {/* Why Choose IPRKaro */}
          <section id="why-choose-us" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Choose IPRKaro for Trademark Registration in Delhi?
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
                We simplify the complex legal process for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Expert Guidance", desc: "Our team understands the specific needs of Delhi's diverse industries, from retail to tech." },
                  { title: "Transparent Pricing", desc: "No hidden costs. We offer affordable packages suitable for startups and SMEs." },
                  { title: "Comprehensive Support", desc: "We handle everything: search, filing, objection replies, and renewal." },
                  { title: "Digital Convenience", desc: "Complete the entire process online without visiting the Dwarka office." },
                  { title: "High Success Rate", desc: "Our thorough search and accurate filing minimize the chances of rejection." },
                  { title: "Dedicated Manager", desc: "Get a dedicated relationship manager to keep you updated on your application status." }
                ].map((item, index) => (
                  <div key={index} className="p-3 rounded-md bg-white/5 border border-white/10">
                    <h4 className="text-[#FFB703] font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/80 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section id="testimonials" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Arjun Sharma",
                  location: "Connaught Place",
                  rating: 5,
                  text: "Outstanding trademark registration service in Delhi. The team was very knowledgeable and helped me navigate through the entire process smoothly. My trademark got registered without any issues."
                },
                {
                  name: "Neha Gupta",
                  location: "Okhla",
                  rating: 5,
                  text: "Excellent service for startups in Delhi. They provided complete guidance on Startup India benefits and handled the entire application professionally. Highly recommended for Delhi NCR businesses."
                },
                {
                  name: "Vikram Singh",
                  location: "Dwarka",
                  rating: 5,
                  text: "Very professional trademark registration service. They successfully handled objections and got my brand registered. Great experience overall."
                }
              ].map((review, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg flex flex-col h-full"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star text-xs ${i < Math.floor(review.rating) ? 'text-[#FFB703]' : 'text-gray-600'}`}></i>
                    ))}
                  </div>
                  <p className="text-white/90 font-nunito text-sm italic mb-4 flex-grow">
                    "{review.text}"
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-white font-bold text-sm">{review.name}</h4>
                    <p className="text-white/60 text-xs">{review.location}</p>
                  </div>
                </div>
              ))}
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
                  <span className="text-white font-nunito text-base font-semibold">Protect Your Brand in Delhi NCR</span>
                </div>

                <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">
                  Ready to Secure Your Intellectual Property?
                </h3>
                <p className="text-white/90 font-nunito text-base max-w-2xl mx-auto mb-4">
                  Don't leave your brand vulnerable. Our experts in Delhi specialize in trademark registration and can guide you through every step of the process.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href="tel:+919289707648"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-base transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                      color: '#0C002B',
                      boxShadow: '0 6px 18px rgba(255, 183, 3, 0.4)'
                    }}
                  >
                    <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                    +91-9289707648
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-semibold text-base transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <i className="fas fa-envelope text-sm" aria-hidden="true"></i>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Frequently Asked Questions (FAQs)
              </h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((item, index) => (
                <div 
                  key={index}
                  className="rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.01]"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                      <span className="text-white font-nunito text-base md:text-lg font-semibold pr-4">
                        {item.question}
                      </span>
                      <span className="transition-transform duration-300 group-open:rotate-180">
                        <i className="fas fa-chevron-down text-[#FFB703]"></i>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <div className="h-px w-full bg-white/10 mb-4"></div>
                      <p className="text-white/80 font-nunito text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
