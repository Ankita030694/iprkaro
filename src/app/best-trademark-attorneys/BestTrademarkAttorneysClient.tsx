'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function BestTrademarkAttorneysClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-hire-attorney', title: 'Why Hire a Trademark Attorney?' },
      { id: 'role-in-registration', title: 'Role in Registration Process' },
      { id: 'opposition-process', title: 'The Opposition Process' },
      { id: 'role-in-litigation', title: 'Role in Litigation & Enforcement' },
      { id: 'international-protection', title: 'International Trademark Protection' },
      { id: 'watch-services', title: 'Trademark Watch Services' },
      { id: 'selection-criteria', title: 'How to Choose the Best Attorney' },
      { id: 'services-offered', title: 'Key Services Offered' },
      { id: 'benefits', title: 'Benefits of Professional Representation' },
      { id: 'cost-vs-value', title: 'Cost vs. Value Analysis' },
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Trademark Attorneys in India: Expert Legal Protection",
    "description": "Find the best trademark attorneys in India. Learn about their role in registration, litigation, and how to select the right legal partner for your brand.",
    "author": {
      "@type": "Organization",
      "name": "IPR Karo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPR Karo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iprkaro.com/logo.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.iprkaro.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Trademark Registration",
        "item": "https://www.iprkaro.com/trademark-registration"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Best Trademark Attorneys",
        "item": "https://www.iprkaro.com/best-trademark-attorneys"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trademark Attorney Services",
    "image": "https://www.iprkaro.com/logo.png",
    "description": "Expert trademark attorney services for registration, litigation, and portfolio management in India.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1200",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I need a trademark attorney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A trademark attorney ensures accurate classification, conducts thorough searches, handles legal objections, and provides strategic advice to protect your brand effectively."
        }
      },
      {
        "@type": "Question",
        "name": "What services do trademark attorneys provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They offer services including trademark search, application filing, objection handling, opposition proceedings, renewal, and litigation support."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the best trademark attorney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for experience, specialization in IP law, a good track record of successful registrations, transparent pricing, and excellent communication skills."
        }
      },
      {
        "@type": "Question",
        "name": "Can a trademark attorney help with international registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, experienced attorneys can assist with international filings through the Madrid Protocol or by coordinating with foreign counsels."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of an attorney in trademark litigation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In litigation, an attorney represents you in court, files infringement suits, defends against challenges, and negotiates settlements to protect your rights."
        }
      }
    ]
  };

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Trademark Attorney Guide"
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
              <Link href="/trademark-registration" className="hover:text-[#FFB703] transition-colors">
                Trademark Registration
              </Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <span className="text-[#FFB703] font-medium">Attorneys</span>
            </div>
          </section>

          {/* Hero Section */}
          <section className="mb-12">
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
                Best Trademark Attorneys in India: Securing Your Intellectual Property
              </h1>
            </div>
            
            <div 
              className="p-6 lg:p-8 rounded-lg backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/95 font-nunito text-lg leading-relaxed mb-4">
                In the dynamic landscape of modern business, your brand is often your most valuable asset. Protecting it requires more than just filing a form; it demands the strategic insight and legal expertise of the <strong>best trademark attorneys</strong>. Whether you are a startup navigating the initial registration or a multinational corporation defending your portfolio in court, having a skilled legal partner is non-negotiable. This guide explores the critical role of trademark attorneys, how to select the right one, and the comprehensive services they provide to safeguard your business interests.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-1 text-[#FFB703]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-white/80 text-sm">Trusted by 1200+ Clients</span>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12">
              
              {/* Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Introduction</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    In the hyper-competitive Indian market, your brand is your identity. It is the trust signal that customers look for. Intellectual Property (IP) laws in India are complex, dynamic, and constantly evolving to keep pace with global standards. The Trade Marks Act, 1999, along with the Trade Marks Rules, 2017, provides the legal framework for brand protection, but navigating its provisions requires specialized knowledge and strategic foresight.
                  </p>
                  <p>
                    A trademark attorney is not just a legal consultant; they are the guardians of your brand's integrity. From the moment you conceive a brand name to the day you enforce your rights against an infringer in a High Court, an attorney's role is pivotal. They bridge the gap between your business goals and the rigid legal requirements of the Trademark Registry.
                  </p>
                  <p>
                    Whether you are a startup looking to secure your first logo or a multinational corporation managing a portfolio of hundreds of marks, the expertise of a seasoned trademark attorney is indispensable. This comprehensive guide delves deep into the world of trademark law, explaining why you need an expert, what services they offer, and how to choose the best legal partner to safeguard your intellectual property.
                  </p>
                </div>
              </section>

              {/* Why Hire Attorney */}
              <section id="why-hire-attorney" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Why Hire a Trademark Attorney?</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Many business owners attempt to file trademarks themselves (DIY) to save costs. While the online filing system is accessible, the legal implications are profound. A single error in classification or a weak response to an objection can lead to the abandonment of your application, wasting months of time and money. Here is why hiring a professional is a smart investment:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Expert Knowledge & Strategy</h3>
                      <p>Attorneys understand the nuances of Section 9 (Absolute Grounds for Refusal) and Section 11 (Relative Grounds for Refusal). They know how to draft a specification of goods that is broad enough to cover your future expansion but specific enough to be accepted.</p>
                    </div>
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Comprehensive Risk Assessment</h3>
                      <p>A simple Google search is not a trademark search. Attorneys use paid databases to conduct phonetic, visual, and conceptual searches. They analyze the "Vienna Codes" for logos to ensure your design doesn't infringe on existing artistic works.</p>
                    </div>
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Objection Management</h3>
                      <p>Over 60% of trademark applications face objections. An attorney knows how to draft a legal reply citing relevant case laws (precedents) to overcome these objections. A layperson's reply is often rejected for lacking legal merit.</p>
                    </div>
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Procedural Efficiency</h3>
                      <p>Trademark law is deadline-driven. Missing a deadline for a counter-statement or a renewal fee can be fatal. Attorneys use docketing software to manage these timelines, ensuring zero procedural lapses.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Role in Registration */}
              <section id="role-in-registration" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Role in Registration Process</h2>
                <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FFB703]/20 flex items-center justify-center shrink-0 text-[#FFB703] font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Search & Clearance Opinion</h3>
                        <p className="text-white/80">
                          The attorney conducts a multi-level search. They check the Trademark Registry, corporate names database, and even common law usage (unregistered marks). They provide a "Clearance Opinion" which gives you a probability score of registration success.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FFB703]/20 flex items-center justify-center shrink-0 text-[#FFB703] font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Strategic Filing</h3>
                        <p className="text-white/80">
                          They decide whether to file a wordmark, a device mark (logo), or a composite mark. They also advise on filing in multiple classes to create a "defensive wall" around your brand.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FFB703]/20 flex items-center justify-center shrink-0 text-[#FFB703] font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Objection Handling</h3>
                        <p className="text-white/80">
                          If the Registrar issues an examination report, the attorney drafts a detailed reply. This involves legal research to find favorable precedents and arguing on points of law to prove distinctiveness.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FFB703]/20 flex items-center justify-center shrink-0 text-[#FFB703] font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Hearing Representation</h3>
                        <p className="text-white/80">
                          If the written reply is not accepted, a hearing is scheduled. An attorney appears before the Registrar (physically or via video conference) to argue your case in person. This advocacy is often the difference between acceptance and refusal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Opposition Process */}
              <section id="opposition-process" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">The Opposition Process: A Legal Battlefield</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Trademark opposition is a quasi-judicial proceeding. It happens when a third party objects to your mark after it is published in the journal. This is where an attorney's skills are tested the most.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li><strong>Notice of Opposition:</strong> The attorney reviews the opponent's notice to understand their grounds (e.g., bad faith, similarity).</li>
                    <li><strong>Counter-Statement:</strong> They draft a counter-statement (Form TM-O) refuting every allegation point-by-point. This must be filed within 2 months.</li>
                    <li><strong>Evidence Stage:</strong> This is the core of the battle. The attorney collates evidence of your usage (invoices, ads, media coverage) and files it via affidavit under Rule 45.</li>
                    <li><strong>Hearing & Arguments:</strong> Finally, the matter is argued before the Registrar. The attorney presents legal arguments, distinguishes cited case laws, and fights for your registration.</li>
                  </ul>
                </div>
              </section>

              {/* Role in Litigation */}
              <section id="role-in-litigation" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Role in Litigation & Enforcement</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Registration is just the beginning. Enforcing your rights is equally important. When your brand is under threat, a trademark attorney steps in to enforce your rights through civil or criminal remedies.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li><strong>Cease & Desist Notices:</strong> The first step is often a stern legal notice. Attorneys draft these to demand immediate cessation of the infringing activity, often resolving the issue without court intervention.</li>
                    <li><strong>Infringement Suits:</strong> If the notice is ignored, the attorney files a suit in the District Court or High Court. They seek interim injunctions (stay orders) to stop the infringer immediately while the case is pending.</li>
                    <li><strong>Passing Off Actions:</strong> For unregistered marks, attorneys file "passing off" suits, proving that the infringer is misrepresenting their goods as yours and damaging your goodwill.</li>
                    <li><strong>Damages & Accounts of Profit:</strong> They argue for monetary compensation for the loss of business and reputation caused by the infringement.</li>
                    <li><strong>Criminal Raids:</strong> In cases of counterfeiting, attorneys work with the police to conduct raids and seize fake goods under the Copyright Act and Trademark Act.</li>
                  </ul>
                </div>
              </section>

              {/* International Protection */}
              <section id="international-protection" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">International Trademark Protection</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    In a globalized economy, protecting your brand in India is not enough. If you plan to export or expand, you need international protection.
                  </p>
                  <p>
                    <strong>The Madrid Protocol:</strong> India is a member of the Madrid Protocol, which allows you to file a single application to register your mark in up to 120+ countries. A trademark attorney manages this complex process, handling the WIPO (World Intellectual Property Organization) requirements and coordinating with foreign attorneys if objections arise in specific countries.
                  </p>
                </div>
              </section>

              {/* Watch Services */}
              <section id="watch-services" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Trademark Watch Services</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Prevention is better than cure. Top law firms offer "Watch Services". They use software to monitor the Trademark Journal every week. If a confusingly similar mark is advertised by a competitor, they alert you immediately so you can file an opposition within the statutory 4-month window. This proactive approach prevents potential infringers from getting registered.
                  </p>
                </div>
              </section>

              {/* Selection Criteria */}
              <section id="selection-criteria" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">How to Choose the Best Attorney</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Selecting the right legal partner is a critical decision. Consider these factors:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Specialization</h4>
                      <p className="text-sm text-white/80">Ensure they specialize in IP law, not just general practice.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Experience</h4>
                      <p className="text-sm text-white/80">Look for a track record of handling cases similar to yours.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Communication</h4>
                      <p className="text-sm text-white/80">They should be responsive and explain legal terms in plain English.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Transparency</h4>
                      <p className="text-sm text-white/80">Fee structures should be clear with no hidden costs.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Client Reviews</h4>
                      <p className="text-sm text-white/80">Check testimonials and ratings from previous clients.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Global Reach</h4>
                      <p className="text-sm text-white/80">If you plan to expand, check if they handle international filings.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Offered */}
              <section id="services-offered" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Key Services Offered</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Top trademark attorneys provide a holistic suite of services:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#FFB703]"></i>
                      <span>Comprehensive Trademark Search & Analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#FFB703]"></i>
                      <span>Application Filing & Prosecution</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#FFB703]"></i>
                      <span>Objection & Opposition Handling</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#FFB703]"></i>
                      <span>Trademark Watch & Monitoring Services</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#FFB703]"></i>
                      <span>Renewal & Restoration</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#FFB703]"></i>
                      <span>Assignment & Licensing Agreements</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#FFB703]"></i>
                      <span>International Filing (Madrid Protocol)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#FFB703]"></i>
                      <span>Litigation & Dispute Resolution</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Benefits of Professional Representation</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    <strong>Peace of Mind:</strong> Knowing that experts are handling your IP allows you to focus on your core business operations.
                  </p>
                  <p>
                    <strong>Higher Success Rate:</strong> Applications filed by attorneys have a significantly higher acceptance rate due to correct classification and legal vetting.
                  </p>
                  <p>
                    <strong>Long-Term Protection:</strong> Attorneys don't just register your mark; they help you build a strategy to protect it for decades, adding immense value to your company's valuation.
                  </p>
                </div>
              </section>

              {/* Cost vs Value */}
              <section id="cost-vs-value" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Cost vs. Value Analysis</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    It's natural to be concerned about legal fees. However, consider the cost of <em>not</em> hiring an attorney:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li><strong>Rejection Costs:</strong> If your application is rejected due to errors, you lose the government fee and have to start over.</li>
                    <li><strong>Rebranding Costs:</strong> If you unknowingly infringe on another mark, you might be forced to rebrand, costing millions in marketing and lost goodwill.</li>
                    <li><strong>Litigation Costs:</strong> Defending a weak trademark in court is far more expensive than registering a strong one initially.</li>
                  </ul>
                  <p>
                    The value of a secure, enforceable trademark far outweighs the initial legal investment.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "Why do I need a trademark attorney?", a: "A trademark attorney ensures accurate classification, conducts thorough searches, handles legal objections, and provides strategic advice to protect your brand effectively." },
                    { q: "What services do trademark attorneys provide?", a: "They offer services including trademark search, application filing, objection handling, opposition proceedings, renewal, and litigation support." },
                    { q: "How do I choose the best trademark attorney?", a: "Look for experience, specialization in IP law, a good track record of successful registrations, transparent pricing, and excellent communication skills." },
                    { q: "Can a trademark attorney help with international registration?", a: "Yes, experienced attorneys can assist with international filings through the Madrid Protocol or by coordinating with foreign counsels." },
                    { q: "What is the role of an attorney in trademark litigation?", a: "In litigation, an attorney represents you in court, files infringement suits, defends against challenges, and negotiates settlements to protect your rights." },
                    { q: "Is it mandatory to hire an attorney for trademark registration?", a: "No, it is not mandatory, but it is highly recommended to avoid legal pitfalls and ensure a smooth registration process." },
                    { q: "How much do trademark attorneys charge?", a: "Fees vary based on the complexity of the case and the attorney's experience. It's best to request a consultation to get a clear quote." }
                  ].map((faq, i) => (
                    <div key={i} className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <h3 className="text-[#FFB703] font-bold mb-2 text-lg">{faq.q}</h3>
                      <p className="text-white/90 text-base">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="mb-8">
                <div className="relative overflow-hidden p-8 rounded-xl text-center" style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)',
                  border: '2px solid rgba(255, 183, 3, 0.3)',
                  boxShadow: '0 8px 32px rgba(255, 183, 3, 0.3)'
                }}>
                  <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-4">Consult with Expert Trademark Attorneys</h3>
                  <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                    Don't leave your brand's future to chance. Partner with our experienced legal team for comprehensive trademark protection.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-[#0C002B] bg-gradient-to-r from-[#FFB703] to-[#FFA000] hover:scale-105 transition-transform text-lg shadow-lg">
                      Book Consultation
                    </Link>
                    <Link href="/services" className="px-8 py-4 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors text-lg">
                      View Services
                    </Link>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
