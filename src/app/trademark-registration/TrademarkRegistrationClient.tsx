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

export default function TrademarkRegistrationClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'what-is-trademark', title: 'What is Trademark Registration?' },
      { id: 'why-register', title: 'Why Register a Trademark?' },
      { id: 'trademark-vs-copyright', title: 'Trademark vs Copyright' },
      { id: 'registration-process', title: 'Registration Process Step-by-Step' },
      { id: 'documents-required', title: 'Documents Required' },
      { id: 'costs-and-fees', title: 'Trademark Registration Cost 2025' },
      { id: 'timeline', title: 'How Long Does It Take?' },
      { id: 'trademark-classes', title: 'Trademark Classes' },
      { id: 'rejection-reasons', title: 'Common Rejection Reasons' },
      { id: 'objection-vs-opposition', title: 'Objection vs Opposition' },
      { id: 'international-registration', title: 'International Registration' },
      { id: 'renewal-maintenance', title: 'Renewal & Maintenance' },
      { id: 'digital-assets', title: 'Trademarks for Digital Assets & AI' },
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

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Registration Guide"
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
          
          {/* Breadcrumb */}
          <section className="mb-6">
            <div className="flex items-center gap-2 text-sm text-white/80 font-nunito">
              <Link href="/" className="hover:text-[#FFB703] transition-colors">
                <i className="fas fa-home" aria-hidden="true"></i>
              </Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <span className="text-[#FFB703] font-medium">Trademark Registration</span>
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
                Trademark Registration Online: The Ultimate Guide 2025
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
                In today's competitive digital marketplace, securing your brand identity matters more than ever. Trademark registration protects your brand name, logo, and business reputation from infringement and misuse. Whether you're a startup registering a trademark for your product or an established enterprise seeking global brand protection, understanding trademark filing is key.
              </p>
              <p className="text-white/95 font-nunito text-base lg:text-lg leading-relaxed">
                This guide covers everything you need to know about online trademark applications, from registration costs and filing fees to the step-by-step registration process. We also explore emerging topics like trademarks for digital assets and AI trademark infringement, so you're prepared to navigate the modern IP landscape.
              </p>
            </div>
          </section>

          {/* What is Trademark Registration */}
          <section id="what-is-trademark" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">What is Trademark Registration?</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is a unique identifier such as a word, phrase, symbol, design, or a combination of these that distinguishes your goods or services from those of other entities. Brand name registration or logo trademark registration grants you exclusive rights to use that mark, preventing others from using a confusingly similar mark.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                Business name trademark protection helps build brand loyalty and trust. When you file a trademark online, you're creating an intangible asset that can grow in value over time. It lets you take legal action against counterfeiters and is required for programs like Amazon Brand Registry, which offers enhanced protection for e-commerce sellers.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                The governing body for trademarks in India is the Controller General of Patents, Designs, and Trademarks (CGPDTM). Government trademark registration services allow both physical and online filing, with online filing being the preferred method because it's more efficient and costs less.
              </p>
            </div>
          </section>

          {/* Why Register */}
          <section id="why-register" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Why Register a Trademark?</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Registering your trademark offers many advantages beyond legal protection. It's a strategic business move that strengthens your market position.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Legal Protection", desc: "You get exclusive rights to use the mark and can sue for infringement. This gives you a solid legal foundation to stop copycats." },
                  { title: "Brand Asset", desc: "Builds value over time and can be sold, licensed, or franchised. A registered trademark is a valuable intangible asset on your balance sheet." },
                  { title: "Amazon Brand Registry", desc: "Unlocks powerful tools to protect your brand on Amazon. Essential for e-commerce sellers to prevent listing hijacking." },
                  { title: "Global Expansion", desc: "Forms the basis for international trademark registration through the Madrid Protocol. Simplifies registering your mark in other countries." },
                  { title: "Deterrence", desc: "Public notice of ownership prevents others from using your mark. The ® symbol warns potential infringers." },
                  { title: "Trust & Credibility", desc: "Boosts your professional image and customer confidence. Customers trust registered brands more." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <h3 className="text-[#FFB703] font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trademark vs Copyright */}
          <section id="trademark-vs-copyright" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Trademark vs Copyright</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Many business owners confuse these two forms of IP. Here's the difference:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-white/90 border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-3 text-[#FFB703]">Feature</th>
                      <th className="p-3 text-[#FFB703]">Trademark</th>
                      <th className="p-3 text-[#FFB703]">Copyright</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="p-3 font-semibold">Protects</td>
                      <td className="p-3">Brand names, logos, slogans, brand identifiers.</td>
                      <td className="p-3">Original artistic, literary, and musical works.</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-3 font-semibold">Purpose</td>
                      <td className="p-3">Identifies source of goods/services.</td>
                      <td className="p-3">Protects creative expression.</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-3 font-semibold">Example</td>
                      <td className="p-3">Nike Swoosh, Apple logo, "Just Do It".</td>
                      <td className="p-3">Books, songs, paintings, software code.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-white/80 text-sm">
                For a clothing brand, you might need both. Trademark protects the brand name and logo on the tag, while copyright might protect a unique graphic design printed on the shirt.
              </p>
            </div>
          </section>

          {/* Registration Process */}
          <section id="registration-process" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Trademark Registration Process Step-by-Step</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                The trademark registration process involves several stages. Understanding these helps you navigate the system more effectively.
              </p>
              <div className="space-y-4">
                {[
                  { step: "1. Trademark Search", desc: "Conduct a comprehensive trademark search or USPTO trademark search (for US) to ensure your mark is unique. This helps avoid rejection later. A thorough search includes checking for phonetic similarities and similar meanings." },
                  { step: "2. Application Filing", desc: "File your trademark online using Form TM-A (in India). Include applicant details, mark representation, and goods/services description. Make sure you select the correct class to avoid delays." },
                  { step: "3. Examination", desc: "The registry examines the application. If there are objections, you must file a reply. The examiner checks for distinctiveness and conflicts with existing marks." },
                  { step: "4. Publication", desc: "If accepted, the mark is published in the Trademark Journal for 4 months, allowing third parties to oppose. This is an important window for brand owners to monitor for conflicting marks." },
                  { step: "5. Registration", desc: "If no opposition (or if you win), the registration certificate is issued. Valid for 10 years. You can then use the ® symbol next to your trademark." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 p-3 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFB703] text-[#0C002B] flex items-center justify-center font-bold">{i+1}</div>
                    <div>
                      <h3 className="text-white font-bold">{s.step}</h3>
                      <p className="text-white/80 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Documents Required */}
          <section id="documents-required" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Documents Required</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                To file a trademark online, you need to have the following documents ready. Missing documents can lead to office actions and delays.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/90">
                <li className="flex items-center gap-2"><i className="fas fa-check text-[#FFB703]"></i> Applicant's Identity Proof (ID, Address)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-[#FFB703]"></i> Business Registration Document (if applicable)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-[#FFB703]"></i> Brand Logo / Wordmark Image (High Resolution)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-[#FFB703]"></i> Power of Attorney (Form TM-48) - Required for agents</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-[#FFB703]"></i> User Affidavit (if claiming prior use)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-[#FFB703]"></i> MSME/Startup Certificate (for 50% fee discount)</li>
              </ul>
            </div>
          </section>

          {/* Costs and Fees */}
          <section id="costs-and-fees" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Trademark Registration Cost & Fees 2025</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 mb-4">
                Understanding trademark registration costs is important. Costs vary by applicant type and mode of filing. Here's a breakdown of trademark filing fees for 2025:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md border border-[#FFB703]/30 bg-[#FFB703]/10">
                  <h3 className="text-[#FFB703] font-bold text-lg mb-2">Individuals / Startups / SMEs</h3>
                  <p className="text-white text-2xl font-bold mb-1">₹4,500 <span className="text-sm font-normal opacity-70">per class</span></p>
                  <p className="text-white/70 text-sm">Government Fee (Online Filing)</p>
                  <p className="text-white/60 text-xs mt-2">Physical filing: ₹5,000</p>
                </div>
                <div className="p-4 rounded-md border border-white/20 bg-white/5">
                  <h3 className="text-white font-bold text-lg mb-2">Other Entities (Companies)</h3>
                  <p className="text-white text-2xl font-bold mb-1">₹9,000 <span className="text-sm font-normal opacity-70">per class</span></p>
                  <p className="text-white/70 text-sm">Government Fee (Online Filing)</p>
                  <p className="text-white/60 text-xs mt-2">Physical filing: ₹10,000</p>
                </div>
              </div>
              <p className="mt-4 text-white/80 text-sm">
                Trademark lawyer fees or professional charges are additional but recommended. Affordable trademark filing services often bundle search, filing, and basic advisory. Trademark renewal costs are generally ₹9,000 per class every 10 years.
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section id="timeline" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">How Long Does Trademark Registration Take?</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                The standard timeline is 12 to 18 months. However, with fast trademark registration (expedited processing), this can be reduced, though it incurs significantly higher government fees.
              </p>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>• Filing to Examination: 1-3 months</li>
                <li>• Examination to Publication: 1-2 months (if no objections)</li>
                <li>• Opposition Period: 4 months (mandatory)</li>
                <li>• Registration Certificate: 1-2 months after opposition ends</li>
              </ul>
            </div>
          </section>

          {/* Trademark Classes */}
          <section id="trademark-classes" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Trademark Classes</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 mb-3">Choosing the right trademark class is important. There are 45 classes (1-34 for goods, 35-45 for services).</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-[#FFB703] font-bold">Class 9</span>
                  <p className="text-white/70 text-xs">Electronics, Software, Digital Assets</p>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-[#FFB703] font-bold">Class 25</span>
                  <p className="text-white/70 text-xs">Clothing, Footwear, Headgear</p>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-[#FFB703] font-bold">Class 35</span>
                  <p className="text-white/70 text-xs">Advertising, Business Management, Retail</p>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-[#FFB703] font-bold">Class 41</span>
                  <p className="text-white/70 text-xs">Education, Entertainment, Podcasts</p>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-[#FFB703] font-bold">Class 42</span>
                  <p className="text-white/70 text-xs">Technology Services, SaaS</p>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-[#FFB703] font-bold">Class 43</span>
                  <p className="text-white/70 text-xs">Food Services, Restaurants</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Rejection Reasons */}
          <section id="rejection-reasons" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Common Trademark Rejection Reasons</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                Understanding common trademark rejection reasons can save you time and money. The Trademark Registry often refuses applications on the following grounds:
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <i className="fas fa-exclamation-circle text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Descriptive Marks:</strong> Marks that describe the quality, quantity, or intended purpose of goods (e.g., "Best Quality Shoes") are usually rejected.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-exclamation-circle text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Similarity to Existing Marks:</strong> If your mark is confusingly similar to an already registered or pending mark in the same class (Section 11 objection).
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-exclamation-circle text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Generic Terms:</strong> Common names for goods or services cannot be trademarked (e.g., "Apple" for fruit, though "Apple" for computers is valid).
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-exclamation-circle text-[#FFB703] mt-1"></i>
                  <div>
                    <strong>Deceptive Marks:</strong> Marks that are likely to deceive the public regarding the nature, quality, or origin of goods.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Objection vs Opposition */}
          <section id="objection-vs-opposition" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Trademark Objection vs Opposition</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                It's important to distinguish between an objection and an opposition.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold mb-2">Trademark Objection</h3>
                  <p className="text-white/80 text-sm">
                    Raised by the trademark examiner during the examination stage. It usually concerns the mark's distinctiveness or similarity to existing marks. You must file a reply to the examination report.
                  </p>
                </div>
                <div className="p-4 rounded-md bg-white/5 border border-white/10">
                  <h3 className="text-[#FFB703] font-bold mb-2">Trademark Opposition</h3>
                  <p className="text-white/80 text-sm">
                    Filed by a third party (competitor or public) after the mark is published in the Trademark Journal. The trademark opposition process involves filing a counter-statement, evidence, and hearings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* International Registration */}
          <section id="international-registration" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">International Trademark Registration</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                If you plan to expand your business globally, international trademark registration through the Madrid Protocol is the most efficient route. It lets you file a single application to register your trademark in multiple member countries (over 120 countries).
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                To use the Madrid Protocol, you must first have a basic application or registration in your home country (e.g., India). This serves as the foundation for your international application. This centralized process saves time and reduces the cost of hiring separate attorneys in each country.
              </p>
            </div>
          </section>

          {/* Renewal and Maintenance */}
          <section id="renewal-maintenance" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Trademark Renewal & Maintenance</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                A trademark is valid for 10 years from the date of filing. To keep it active, you must pay the trademark renewal cost every 10 years. You can file for renewal 6 months before the expiry date.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Trademark monitoring services are also important to ensure no one else registers a similar mark. Regular monitoring helps you identify potential infringements early and take timely legal action to protect your brand.
              </p>
            </div>
          </section>

          {/* Digital Assets & AI */}
          <section id="digital-assets" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Digital Assets & Emerging Trends</h2>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="text-white/90 font-nunito text-base leading-relaxed mb-3">
                The IP landscape is evolving. Trademarks for digital assets like NFTs are now a reality, with brands registering marks for virtual goods in the metaverse. Similarly, AI trademark infringement is a growing concern that requires robust monitoring.
              </p>
              <p className="text-white/90 font-nunito text-base leading-relaxed">
                Creators should also consider trademarking podcast names (Class 41) and registering trademarks for social media handles to prevent impersonation. E-commerce trademark protection is important for online sellers to combat counterfeits.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-8 scroll-mt-32">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFB703', boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)' }} />
              <h2 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "How to register a trademark for free?", a: "You can't register a trademark for free. Government fees are mandatory. However, you can save on professional fees by filing it yourself, though this increases the risk of errors and rejection." },
                { q: "Do I need a lawyer to trademark?", a: "It's not legally required, but highly recommended. A good trademark attorney can help navigate complex objections, the trademark opposition process, and ensure proper class selection." },
                { q: "Can I trademark a slogan?", a: "Yes, slogans can be trademarked if they're distinctive and identify the source of goods or services. Generic phrases usually can't be trademarked." },
                { q: "What are common trademark rejection reasons?", a: "Common reasons include likelihood of confusion with existing marks, descriptive or generic terms, offensive content, or incorrect class selection." },
                { q: "How to protect my business name?", a: "Registering it as a trademark is the strongest protection. Registering a company name with the ROC or buying a domain name doesn't grant trademark rights." }
              ].map((faq, i) => (
                <div key={i} className="p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h3 className="text-[#FFB703] font-bold mb-2">{faq.q}</h3>
                  <p className="text-white/90 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-8">
            <div className="relative overflow-hidden p-6 rounded-xl text-center" style={{ 
              background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)',
              border: '2px solid rgba(255, 183, 3, 0.3)',
              boxShadow: '0 8px 32px rgba(255, 183, 3, 0.3)'
            }}>
              <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-3">Ready to Protect Your Brand?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Secure your business identity today with our trademark registration services. We offer affordable trademark filing with expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="px-6 py-3 rounded-lg font-bold text-[#0C002B] bg-gradient-to-r from-[#FFB703] to-[#FFA000] hover:scale-105 transition-transform">
                  Hire Trademark Lawyer
                </Link>
                <Link href="/services" className="px-6 py-3 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors">
                  View All Services
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
