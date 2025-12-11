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

export default function TrademarkRegistrationServicesClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'introduction', title: 'Introduction' },
      { id: 'our-services', title: 'Our Trademark Services' },
      { id: 'why-professional-services', title: 'Why You Need Professional Services' },
      { id: 'trademark-search', title: 'Comprehensive Trademark Search' },
      { id: 'filing-process', title: 'Trademark Filing & Registration' },
      { id: 'objection-handling', title: 'Objection Handling & Reply' },
      { id: 'opposition-proceedings', title: 'Opposition Proceedings' },
      { id: 'renewal-restoration', title: 'Renewal & Restoration' },
      { id: 'assignment-licensing', title: 'Assignment & Licensing' },
      { id: 'watch-services', title: 'Trademark Watch Services' },
      { id: 'international-filing', title: 'International Trademark Filing' },
      { id: 'litigation-support', title: 'Litigation Support' },
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
    "headline": "Trademark Registration Services in India: Expert Legal Solutions",
    "description": "Comprehensive trademark registration services in India including search, filing, objection handling, renewal, and litigation support.",
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
        "name": "Trademark Registration Services",
        "item": "https://www.iprkaro.com/trademark-registration-services"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trademark Registration Services",
    "image": "https://www.iprkaro.com/logo.png",
    "description": "Comprehensive trademark registration services including search, filing, objection handling, and litigation support.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
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
        "name": "What does a trademark registration service include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comprehensive service includes trademark search, class selection, application filing, responding to objections, handling opposition, and final registration certification."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I hire a professional for trademark registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professionals ensure accurate classification, conduct thorough searches to avoid rejection, draft strong legal replies to objections, and manage deadlines effectively."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle trademark objections?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our services include drafting and filing legal replies to examination reports issued by the Trademark Registry."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer international trademark registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we assist with international trademark filings through the Madrid Protocol or by filing direct applications in specific countries."
        }
      },
      {
        "@type": "Question",
        "name": "What is trademark watch service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is a monitoring service where we keep an eye on new trademark applications to identify potential infringements and file oppositions if necessary."
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
          blogTitle="Trademark Services Guide"
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
              <span className="text-[#FFB703] font-medium">Services</span>
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
                Trademark Registration Services: Expert Legal Protection for Your Brand
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
                Securing your intellectual property is the cornerstone of building a resilient business. Our comprehensive <strong>trademark registration services</strong> are designed to guide you through every step of the legal process, from the initial search to the final grant of the registration certificate. Whether you are a startup looking to protect your new logo or a multinational corporation managing a global portfolio, our team of expert trademark attorneys provides the strategic counsel you need to safeguard your brand assets effectively.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-1 text-[#FFB703]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-white/80 text-sm">Trusted by 1000+ Businesses</span>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12">
              
              {/* Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Introduction to Trademark Services</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    In the competitive landscape of modern business, a trademark is more than just a legal requirement; it is a powerful tool for brand differentiation and value creation. However, the path to obtaining a registered trademark is often fraught with legal complexities, procedural nuances, and strict deadlines. This is where professional trademark registration services play a pivotal role.
                  </p>
                  <p>
                    Navigating the Trademarks Act, 1999, requires specialized knowledge. A simple error in the application form or an incorrect classification of goods can lead to delays, objections, or even the rejection of your application. Our services are tailored to mitigate these risks. We provide end-to-end solutions that cover the entire lifecycle of a trademark.
                  </p>
                  <p>
                    From conducting exhaustive availability searches to handling complex litigation matters, our goal is to ensure that your brand remains protected against infringement and dilution. We understand that every business is unique, and therefore, we offer customized strategies that align with your specific commercial objectives.
                  </p>
                </div>
              </section>

              {/* Our Services */}
              <section id="our-services" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Our Trademark Services</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    We offer a full spectrum of intellectual property services focused on trademarks. Our expertise spans across various industries, ensuring that your specific sector needs are met with precision.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {[
                      { title: "Trademark Search", desc: "In-depth analysis of existing marks to assess registrability." },
                      { title: "Filing & Prosecution", desc: "Preparing and submitting applications to the Trademark Registry." },
                      { title: "Objection Handling", desc: "Drafting legal responses to examination reports." },
                      { title: "Opposition Management", desc: "Representing clients in opposition proceedings." },
                      { title: "Renewal Services", desc: "Timely filing of renewal requests to keep the mark active." },
                      { title: "Watch Services", desc: "Monitoring new filings to prevent conflicting registrations." },
                      { title: "Assignment", desc: "Legal documentation for transferring trademark ownership." },
                      { title: "Licensing", desc: "Drafting agreements for franchising and licensing deals." },
                      { title: "Litigation", desc: "Legal action against trademark infringement and passing off." }
                    ].map((service, idx) => (
                      <div key={idx} className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-[#FFB703]/50 transition-colors">
                        <h3 className="text-[#FFB703] font-bold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-white/80">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why Professional Services */}
              <section id="why-professional-services" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Why You Need Professional Services</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    While it is possible to file a trademark application on your own, the process is deceptive in its simplicity. Many applicants realize too late that a self-filed application has legal loopholes that make the trademark difficult to enforce. Here is why engaging professional trademark registration services is an investment, not an expense:
                  </p>
                  <ul className="space-y-4 mt-4">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Strategic Classification:</strong> Choosing the right class (NICE classification) is critical. A professional ensures your mark is protected for all relevant goods and services, including future expansions.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Risk Mitigation:</strong> A thorough pre-filing search by an expert can identify potential conflicts that a basic public search might miss, saving you from costly litigation later.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Legal Drafting:</strong> Responding to objections requires citing relevant case laws and legal provisions. Professionals draft persuasive arguments that significantly increase the chances of acceptance.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Deadline Management:</strong> The trademark process has strict timelines for replies and renewals. Missing a deadline can lead to the abandonment of your application. We track every date for you.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Comprehensive Trademark Search */}
              <section id="trademark-search" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Comprehensive Trademark Search</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    The foundation of a successful registration lies in a robust trademark search. Our search services go beyond the basic exact match check. We conduct a comprehensive analysis that includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li><strong>Phonetic Similarity:</strong> Checking for names that sound similar to your proposed mark.</li>
                    <li><strong>Visual Similarity:</strong> Analyzing logos and device marks for visual resemblances.</li>
                    <li><strong>Conceptual Similarity:</strong> Identifying marks that convey the same meaning or idea.</li>
                    <li><strong>Cross-Class Search:</strong> Checking related classes to ensure broad protection.</li>
                  </ul>
                  <p>
                    After the search, we provide a detailed opinion letter outlining the probability of registration and any potential risks. This allows you to make an informed decision before incurring filing costs.
                  </p>
                </div>
              </section>

              {/* Filing Process */}
              <section id="filing-process" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Trademark Filing & Registration</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Once the search is cleared, we proceed with the filing of the application (Form TM-A). Our team ensures that every detail is accurate to prevent clerical errors. We handle:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/5 p-4 rounded border-l-4 border-[#FFB703]">
                      <strong className="text-[#FFB703] block mb-1">Applicant Details</strong>
                      <p className="text-sm">Correctly identifying the legal status of the applicant (Individual, Startup, Company, Trust) to avail relevant fee concessions.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded border-l-4 border-[#FFB703]">
                      <strong className="text-[#FFB703] block mb-1">User Date Claim</strong>
                      <p className="text-sm">Strategically claiming prior use with proper evidence (User Affidavit) to establish priority rights over the mark.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded border-l-4 border-[#FFB703]">
                      <strong className="text-[#FFB703] block mb-1">Description of Goods</strong>
                      <p className="text-sm">Drafting a precise description of goods and services to avoid vagueness while ensuring broad coverage.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded border-l-4 border-[#FFB703]">
                      <strong className="text-[#FFB703] block mb-1">Digital Signature</strong>
                      <p className="text-sm">Applying with a valid Class 3 Digital Signature Certificate (DSC) for instant acknowledgement.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Objection Handling */}
              <section id="objection-handling" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Objection Handling & Reply</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Receiving an examination report with objections is a common part of the process. It does not mean your application is rejected. It simply means the Registrar requires clarification. Common grounds for objection include Section 9 (Absolute Grounds - lack of distinctiveness) and Section 11 (Relative Grounds - similarity to existing marks).
                  </p>
                  <p>
                    Our attorneys specialize in drafting comprehensive replies to these objections. We analyze the examiner's report, research precedents, and construct a legal argument proving the distinctiveness and validity of your mark. We also represent you at show-cause hearings if the written reply is not deemed sufficient.
                  </p>
                </div>
              </section>

              {/* Opposition Proceedings */}
              <section id="opposition-proceedings" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Opposition Proceedings</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Trademark opposition is a quasi-judicial process that occurs after your mark is published in the Trademark Journal. A third party may oppose your registration claiming it infringes on their rights. Conversely, you may need to oppose a competitor's mark that is too similar to yours.
                  </p>
                  <p>
                    Our services in this domain include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li><strong>Filing Notice of Opposition:</strong> Drafting and filing Form TM-O against conflicting marks.</li>
                    <li><strong>Filing Counter-Statement:</strong> Defending your application against an opposition filed by others.</li>
                    <li><strong>Evidence Submission:</strong> Compiling and submitting evidence under Rule 45, 46, and 47 to substantiate claims.</li>
                    <li><strong>Hearing Representation:</strong> Arguing the matter before the Registrar of Trademarks.</li>
                  </ul>
                </div>
              </section>

              {/* Renewal and Restoration */}
              <section id="renewal-restoration" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Renewal & Restoration</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    A trademark registration is valid for 10 years. To keep the rights alive, it must be renewed. We offer timely renewal services, notifying you well in advance of the expiry date.
                  </p>
                  <p>
                    If a trademark is not renewed within the stipulated time (plus the grace period), it is removed from the register. However, it can be restored within one year of expiry through a restoration application. We handle both standard renewals and restoration procedures to ensure your brand protection remains continuous.
                  </p>
                </div>
              </section>

              {/* Assignment and Licensing */}
              <section id="assignment-licensing" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Assignment & Licensing</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Trademarks are valuable assets that can be monetized.
                  </p>
                  <p>
                    <strong>Assignment:</strong> This involves transferring the ownership of the trademark to another entity. This can be done with or without the goodwill of the business. We draft the Deed of Assignment and file the necessary forms (TM-P) to record the change of ownership in the registry.
                  </p>
                  <p>
                    <strong>Licensing:</strong> You can license your trademark to others (e.g., franchisees) while retaining ownership. We draft robust User Agreements that define the scope of use, quality control measures, and royalty terms, ensuring your brand reputation is not compromised by the licensee.
                  </p>
                </div>
              </section>

              {/* Watch Services */}
              <section id="watch-services" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Trademark Watch Services</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Registration is not the end of the road; it requires vigilance. A Trademark Watch Service is a proactive monitoring system. We review the Trademark Journals published every week to identify any new applications that might be deceptively similar to your registered mark.
                  </p>
                  <p>
                    Early detection allows you to file an opposition within the statutory four-month window, preventing potential infringers from obtaining registration. This is a crucial service for brands looking to maintain a strong and exclusive market presence.
                  </p>
                </div>
              </section>

              {/* International Filing */}
              <section id="international-filing" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">International Trademark Filing</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    In a globalized economy, protecting your brand within India may not be enough. We assist businesses in expanding their footprint globally.
                  </p>
                  <p>
                    <strong>Madrid Protocol:</strong> We facilitate international registration through the Madrid System, allowing you to file a single application to register your mark in over 120 member countries. This is a cost-effective and streamlined route.
                  </p>
                  <p>
                    <strong>Direct Filing:</strong> For countries not part of the Madrid Protocol, we coordinate with our network of international associates to file direct national applications, ensuring compliance with local laws.
                  </p>
                </div>
              </section>

              {/* Litigation Support */}
              <section id="litigation-support" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Litigation Support</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    When your trademark rights are violated, legal action becomes necessary. Our litigation support services cover:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li><strong>Cease and Desist Notices:</strong> Sending formal legal warnings to infringers to stop unauthorized use immediately.</li>
                    <li><strong>Infringement Suits:</strong> Filing civil suits for trademark infringement to seek injunctions and damages.</li>
                    <li><strong>Passing Off Actions:</strong> Taking action against unregistered marks that are being misused to mislead the public.</li>
                    <li><strong>Domain Disputes:</strong> Handling disputes related to cybersquatting and unauthorized domain registration.</li>
                  </ul>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "What does a trademark registration service include?", a: "A comprehensive service includes trademark search, class selection, application filing, responding to objections, handling opposition, and final registration certification." },
                    { q: "Why should I hire a professional for trademark registration?", a: "Professionals ensure accurate classification, conduct thorough searches to avoid rejection, draft strong legal replies to objections, and manage deadlines effectively." },
                    { q: "Can you handle trademark objections?", a: "Yes, our services include drafting and filing legal replies to examination reports issued by the Trademark Registry." },
                    { q: "Do you offer international trademark registration?", a: "Yes, we assist with international trademark filings through the Madrid Protocol or by filing direct applications in specific countries." },
                    { q: "What is trademark watch service?", a: "It is a monitoring service where we keep an eye on new trademark applications to identify potential infringements and file oppositions if necessary." },
                    { q: "How much does trademark registration cost?", a: "Costs vary based on the applicant type (Individual/Company) and the number of classes. Professional fees are additional to government fees." },
                    { q: "What happens if I don't renew my trademark?", a: "If not renewed, the trademark will be removed from the register, and you lose your exclusive rights. It can then be registered by someone else." }
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
                  <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-4">Protect Your Brand with Expert Legal Services</h3>
                  <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                    Don't navigate the complex world of intellectual property alone. Partner with us for seamless, secure, and professional trademark registration services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-[#0C002B] bg-gradient-to-r from-[#FFB703] to-[#FFA000] hover:scale-105 transition-transform text-lg shadow-lg">
                      Consult an Attorney
                    </Link>
                    <Link href="/services" className="px-8 py-4 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors text-lg">
                      View Service Plans
                    </Link>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
