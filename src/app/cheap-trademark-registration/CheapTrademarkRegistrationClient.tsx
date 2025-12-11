'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function CheapTrademarkRegistrationClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'introduction', title: 'Introduction' },
      { id: 'understanding-costs', title: 'Understanding Trademark Costs' },
      { id: 'government-concessions', title: 'Government Concessions & Discounts' },
      { id: 'diy-vs-professional', title: 'DIY vs. Professional: The Real Cost' },
      { id: 'hidden-costs', title: 'Hidden Costs in "Cheap" Packages' },
      { id: 'risks-of-cheap-services', title: 'The High Price of Cheap Services' },
      { id: 'cost-effective-strategies', title: 'Smart Strategies to Save Money' },
      { id: 'step-by-step-process', title: 'Step-by-Step Process for Budget Filing' },
      { id: 'common-mistakes', title: 'Common Mistakes That Inflate Costs' },
      { id: 'choosing-attorney', title: 'How to Choose a Budget-Friendly Attorney' },
      { id: 'long-term-value', title: 'Long-Term Value Analysis' },
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
    "headline": "Cheap Trademark Registration in India: The Ultimate Cost-Saving Guide",
    "description": "A comprehensive guide to registering a trademark in India on a budget. Learn about government discounts, hidden costs, and how to save money without compromising legal protection.",
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
        "name": "Cheap Trademark Registration",
        "item": "https://www.iprkaro.com/cheap-trademark-registration"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Affordable Trademark Registration Services",
    "image": "https://www.iprkaro.com/logo.png",
    "description": "Cost-effective trademark registration services in India. Save money with expert guidance and government concessions.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "950",
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
        "name": "What is the absolute cheapest way to register a trademark in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The absolute cheapest way is to file the application yourself (DIY) online using the IP India portal. If you are an Individual, Startup, or MSME, the government fee is only ₹4,500. However, this method carries a high risk of errors and rejection if you are not familiar with trademark law."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reduce my trademark registration costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reduce costs by: 1) Registering as an MSME or Startup to get a 50% fee concession. 2) Filing online to get a 10% discount over physical filing. 3) Conducting a thorough search beforehand to avoid objection costs. 4) Filing in only one class initially."
        }
      },
      {
        "@type": "Question",
        "name": "Why do some agencies charge only ₹999 for trademark registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agencies charging ₹999 usually only cover their professional fee for filing. The government fee (₹4,500) is extra. Furthermore, these low-cost packages often exclude essential services like trademark search, objection handling, and hearing appearances, leading to higher costs later."
        }
      },
      {
        "@type": "Question",
        "name": "Is the government fee refundable if my application is rejected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the government fee paid to the Trademark Registry is strictly non-refundable. This applies even if your application is rejected, abandoned, or withdrawn. This is why getting it right the first time is crucial for saving money."
        }
      },
      {
        "@type": "Question",
        "name": "What is the SIPP scheme for Startups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Scheme for Facilitating Startups Intellectual Property Protection (SIPP) allows recognized Startups to file trademarks through government-appointed facilitators. The government pays the facilitator's professional fees, so the Startup only has to pay the statutory government fee."
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
          blogTitle="Cheap Registration Guide"
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
              <span className="text-[#FFB703] font-medium">Cheap Registration</span>
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
                Cheap Trademark Registration in India: The Ultimate Cost-Saving Guide
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
                In the competitive Indian market, securing your brand identity is non-negotiable. However, for startups, small businesses, and solo entrepreneurs, every rupee counts. The search for <strong>cheap trademark registration</strong> is not just about frugality; it's about smart resource allocation. But here is the catch: the cheapest option upfront often becomes the most expensive mistake later. This comprehensive guide is designed to navigate the complex pricing structures of trademark registration in India. We will uncover legitimate ways to slash costs, expose the hidden fees in "too-good-to-be-true" packages, and show you how to get premium legal protection on a budget.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-1 text-[#FFB703]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-white/80 text-sm">Trusted by 1000+ Budget-Conscious Businesses</span>
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
                    Intellectual Property (IP) is often seen as a luxury for established corporations. This misconception leaves thousands of small businesses vulnerable to brand theft every year. The reality is that the Indian government has made significant strides in democratizing IP protection. With the introduction of digital filing systems and special schemes for small enterprises, registering a trademark has never been more accessible.
                  </p>
                  <p>
                    However, the internet is flooded with advertisements promising trademark registration for as low as ₹499 or ₹999. While these offers are tempting, they often mask the true cost of the process. A trademark application is a legal procedure, not a simple form-filling exercise. A single error in classification or a poorly drafted description can lead to objections, hearings, and eventual rejection—all of which cost money to fix.
                  </p>
                  <p>
                    This guide aims to be your financial handbook for trademark registration. We will move beyond the marketing gimmicks and look at the hard numbers. We will discuss how you can legally reduce government fees by 50%, how to avoid the "hidden" costs that agencies charge, and how to make strategic decisions that save you money over the 10-year lifespan of your trademark. Whether you are a home baker, a tech startup, or a growing SME, this guide will help you protect your brand without breaking the bank.
                  </p>
                </div>
              </section>

              {/* Understanding Costs */}
              <section id="understanding-costs" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Understanding Trademark Costs</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    To effectively save money, you must first understand the cost structure. Trademark registration costs in India are not a single lump sum; they are a combination of statutory government fees and professional service charges. Understanding the difference is key to spotting a good deal.
                  </p>
                  
                  <h3 className="text-xl font-bold text-[#FFB703] mt-6 mb-2">1. Government Fees (Statutory)</h3>
                  <p>
                    These are mandatory fees paid directly to the Ministry of Commerce and Industry. They are non-negotiable and non-refundable. The amount depends on two factors: the type of applicant and the mode of filing.
                  </p>
                  <div className="overflow-x-auto mt-4 mb-6">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="p-4 text-[#FFB703] font-bold">Applicant Type</th>
                          <th className="p-4 text-[#FFB703] font-bold">E-Filing (Online)</th>
                          <th className="p-4 text-[#FFB703] font-bold">Physical Filing</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/80">
                        <tr className="border-b border-white/10 bg-white/5">
                          <td className="p-4"><strong>Individual / Sole Proprietor</strong></td>
                          <td className="p-4">₹4,500</td>
                          <td className="p-4">₹5,000</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-4"><strong>Startup / MSME (Small Enterprise)</strong></td>
                          <td className="p-4">₹4,500</td>
                          <td className="p-4">₹5,000</td>
                        </tr>
                        <tr className="border-b border-white/10 bg-white/5">
                          <td className="p-4"><strong>Company / LLP / Partnership / Others</strong></td>
                          <td className="p-4">₹9,000</td>
                          <td className="p-4">₹10,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-bold text-[#FFB703] mt-6 mb-2">2. Professional Fees</h3>
                  <p>
                    This is what you pay an attorney or agency to handle the process for you. This fee covers their expertise, time, and overheads.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Budget Agencies:</strong> ₹499 - ₹1,999 (Often automated, limited support).</li>
                    <li><strong>Mid-Range Firms:</strong> ₹2,000 - ₹5,000 (Includes search, drafting, and basic advice).</li>
                    <li><strong>Premium Law Firms:</strong> ₹10,000+ (Comprehensive strategy, senior attorney review).</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#FFB703] mt-6 mb-2">3. Miscellaneous Costs</h3>
                  <p>
                    These are often overlooked but can add up. They include Stamp Duty for the Power of Attorney (approx. ₹100-₹500 depending on the state), Notary charges, and courier fees if physical documents are needed.
                  </p>
                </div>
              </section>

              {/* Government Concessions */}
              <section id="government-concessions" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Government Concessions & Discounts</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    The Government of India has introduced several schemes to promote Intellectual Property Rights (IPR). Leveraging these concessions is the most legitimate way to reduce your trademark registration costs significantly.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h3 className="text-xl font-bold text-[#FFB703] mb-3">50% Fee Reduction for MSMEs</h3>
                      <p className="mb-4">
                        Micro, Small, and Medium Enterprises (MSMEs) are the backbone of the Indian economy. To support them, the government offers a flat 50% discount on trademark filing fees.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-white/80">
                        <li><strong>Standard Fee:</strong> ₹9,000</li>
                        <li><strong>MSME Fee:</strong> ₹4,500</li>
                        <li><strong>Requirement:</strong> Valid Udyam Registration Certificate.</li>
                        <li><strong>How to get it:</strong> Register for free on the Udyam Registration portal. It takes less than 30 minutes.</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h3 className="text-xl font-bold text-[#FFB703] mb-3">Startup India Scheme (SIPP)</h3>
                      <p className="mb-4">
                        Under the Scheme for Facilitating Startups Intellectual Property Protection (SIPP), recognized startups get massive benefits.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-white/80">
                        <li><strong>Fee Concession:</strong> 50% off on government filing fees (Pay ₹4,500).</li>
                        <li><strong>Free Professional Service:</strong> The government pays the attorney (facilitator) fees. You do not pay the lawyer for filing!</li>
                        <li><strong>Requirement:</strong> DPIIT Recognition Certificate.</li>
                        <li><strong>Benefit:</strong> Access to top-tier IP attorneys without the high price tag.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                    <h4 className="font-bold text-blue-400 mb-2">Digital India Discount</h4>
                    <p className="text-sm">
                      Regardless of who you are, filing online (E-filing) is always 10% cheaper than filing a physical application at the registry counter. This is an automatic saving that every applicant should utilize.
                    </p>
                  </div>
                </div>
              </section>

              {/* DIY vs Professional */}
              <section id="diy-vs-professional" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">DIY vs. Professional: The Real Cost</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    The most common question budget-conscious entrepreneurs ask is: "Can I file it myself?" The answer is yes, you can. But the more important question is: "Should you?" Let's compare the costs and risks.
                  </p>

                  <div className="overflow-x-auto mt-6">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="p-4 text-[#FFB703] font-bold">Feature</th>
                          <th className="p-4 text-[#FFB703] font-bold">DIY (Do It Yourself)</th>
                          <th className="p-4 text-[#FFB703] font-bold">Professional Service</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/80">
                        <tr className="border-b border-white/10 bg-white/5">
                          <td className="p-4 font-bold">Total Cost</td>
                          <td className="p-4">₹4,500 (Govt Fee Only)</td>
                          <td className="p-4">₹6,000 - ₹8,000 (Govt + Prof Fee)</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-4 font-bold">Trademark Search</td>
                          <td className="p-4">Basic (Public Search)</td>
                          <td className="p-4">Comprehensive (Phonetic + Visual)</td>
                        </tr>
                        <tr className="border-b border-white/10 bg-white/5">
                          <td className="p-4 font-bold">Class Selection</td>
                          <td className="p-4">High risk of error</td>
                          <td className="p-4">Expert classification</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-4 font-bold">Drafting</td>
                          <td className="p-4">Generic / Template based</td>
                          <td className="p-4">Customized for protection</td>
                        </tr>
                        <tr className="border-b border-white/10 bg-white/5">
                          <td className="p-4 font-bold">Objection Risk</td>
                          <td className="p-4">High (Due to technical errors)</td>
                          <td className="p-4">Low (Proactive avoidance)</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-4 font-bold">Time Investment</td>
                          <td className="p-4">10-20 Hours (Learning + Filing)</td>
                          <td className="p-4">30 Minutes (Consultation)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white mb-3">The Hidden Cost of DIY</h3>
                    <p>
                      Imagine you file a trademark yourself to save ₹2,000 in professional fees. You select Class 35 (Retail) instead of Class 25 (Clothing).
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li><strong>Scenario A:</strong> The registry objects to the wrong class. You cannot amend the class easily. You have to abandon the application (Loss: ₹4,500) and file a new one (Cost: ₹4,500). Total Cost: ₹9,000 + Time lost.</li>
                      <li><strong>Scenario B:</strong> The trademark gets registered in the wrong class. Two years later, a competitor copies your brand on clothing. You sue them, but the court rules your trademark is invalid for clothing because you registered it for retail services. <strong>Cost: Your entire brand value.</strong></li>
                    </ul>
                    <p className="mt-4 font-semibold text-[#FFB703]">
                      Conclusion: Professional help is an insurance policy against future legal disasters. It is often cheaper in the long run.
                    </p>
                  </div>
                </div>
              </section>

              {/* Hidden Costs */}
              <section id="hidden-costs" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Hidden Costs in "Cheap" Packages</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    If you decide to hire a professional, you will find agencies offering services at rock-bottom prices. "Trademark Registration @ ₹999!" sounds like a steal. But is it? Here is a breakdown of the hidden costs that often appear <em>after</em> you have paid the initial fee.
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="p-4 border-l-4 border-red-500 bg-white/5">
                      <h4 className="font-bold text-white">1. The "Search Fee" Trap</h4>
                      <p className="text-sm text-white/80 mt-1">
                        The ₹999 package often covers <em>only</em> filing. Once you pay, they ask: "Do you want us to check if the name is available?" That's an extra ₹500. Filing without a search is reckless, so you pay it.
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-red-500 bg-white/5">
                      <h4 className="font-bold text-white">2. Stamp Duty Surprises</h4>
                      <p className="text-sm text-white/80 mt-1">
                        To file on your behalf, the attorney needs a Power of Attorney (Form TM-48). This requires stamp paper. Many agencies don't include this in the package and bill you an extra ₹500 - ₹1,000 for "legal documentation charges."
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-red-500 bg-white/5">
                      <h4 className="font-bold text-white">3. The Objection Ransom</h4>
                      <p className="text-sm text-white/80 mt-1">
                        This is the biggest revenue stream for cheap agencies. They file your application carelessly, virtually guaranteeing an objection from the registry. When the objection comes, they demand ₹3,000 - ₹5,000 to file a reply. If you don't pay, your application is abandoned. You are held hostage.
                      </p>
                    </div>
                    <div className="p-4 border-l-4 border-red-500 bg-white/5">
                      <h4 className="font-bold text-white">4. Hearing & Appearance Fees</h4>
                      <p className="text-sm text-white/80 mt-1">
                        If the written reply isn't accepted, a hearing is scheduled. Cheap packages never cover this. Appearance fees can range from ₹2,000 to ₹10,000 per hearing.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Risks of Cheap Services */}
              <section id="risks-of-cheap-services" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">The High Price of Cheap Services</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Beyond the financial hidden costs, there are legal risks associated with using the cheapest service providers. These risks can jeopardize your brand's validity.
                  </p>
                  <ul className="list-disc pl-6 space-y-4 mt-4">
                    <li>
                      <strong>Automated Filing Errors:</strong> Many low-cost providers use bots to file applications. These bots often select the wrong "User Date" (the date since you've been using the brand). If you claim usage from 2020 but can't prove it, your mark can be cancelled for false information. A human attorney would verify your evidence first.
                    </li>
                    <li>
                      <strong>Generic Descriptions:</strong> To save time, cheap services use broad, generic descriptions for your goods. For example, describing a specialized SaaS product simply as "Software." This might be too vague for the registry, leading to a Section 9 objection (non-distinctive).
                    </li>
                    <li>
                      <strong>Missing Deadlines:</strong> Low-cost agencies operate on volume. They handle thousands of applications and often miss critical deadlines for responding to registry notices. If a deadline is missed, your application is treated as abandoned, and your money is lost.
                    </li>
                    <li>
                      <strong>Data Privacy:</strong> "Free" or extremely cheap services sometimes monetize your data. Your business details might be sold to lead aggregators, resulting in spam calls for loans, website design, and other services.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Cost Effective Strategies */}
              <section id="cost-effective-strategies" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Smart Strategies to Save Money</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    You don't have to choose between "expensive" and "risky." There is a middle path. Here are smart, legitimate strategies to keep your trademark registration costs low while ensuring high-quality protection.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h3 className="text-lg font-bold text-[#FFB703] mb-2">1. Prioritize Your Classes</h3>
                      <p className="text-sm">
                        Trademarks are filed by "Class." If you sell Coffee (Class 30) and run a Cafe (Class 43), you need two applications. This doubles the cost. <br/>
                        <strong>Strategy:</strong> File only for your core revenue stream first. Add the secondary class later when you have the budget.
                      </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h3 className="text-lg font-bold text-[#FFB703] mb-2">2. Invest in the Search</h3>
                      <p className="text-sm">
                        A comprehensive search might cost ₹500-₹1,000, but it saves you ₹4,500. If the search shows a conflict, you can change your name <em>before</em> filing. Filing a doomed application is the most expensive mistake you can make.
                      </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h3 className="text-lg font-bold text-[#FFB703] mb-2">3. Use Specific Descriptions</h3>
                      <p className="text-sm">
                        Avoid broad terms. Instead of "Electronics," use "Mobile Phone Chargers." Specific descriptions are less likely to conflict with existing marks, reducing the chance of objections and the associated legal fees.
                      </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h3 className="text-lg font-bold text-[#FFB703] mb-2">4. Negotiate an "All-Inclusive" Deal</h3>
                      <p className="text-sm">
                        Don't pay per step. Ask your attorney for a package that includes: Search + Filing + Reply to Examination Report (if any). This caps your liability and prevents surprise bills later.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step by Step Process */}
              <section id="step-by-step-process" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Step-by-Step Process for Budget Filing</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Follow this roadmap to ensure you are not spending a rupee more than necessary.
                  </p>
                  <div className="space-y-6 mt-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFB703] flex items-center justify-center shrink-0 text-[#0C002B] font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Get Your Documents Ready</h3>
                        <p className="text-white/80">Ensure you have your MSME (Udyam) certificate or DPIIT recognition ready <em>before</em> you start. This is your ticket to the 50% discount. Have your logo in a clear JPEG format.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFB703] flex items-center justify-center shrink-0 text-[#0C002B] font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Conduct a Free Public Search</h3>
                        <p className="text-white/80">Visit the IP India Public Search portal. It's free. Search for your name. If you see exact matches in your class, STOP. Pick a new name. This step alone saves thousands.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFB703] flex items-center justify-center shrink-0 text-[#0C002B] font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Create a Digital Signature (DSC)</h3>
                        <p className="text-white/80">To file online, you need a Class 3 Digital Signature Certificate. You can get this from vendors for around ₹1,000 - ₹1,500. This is a one-time cost and the DSC can be used for GST and Income Tax too.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFB703] flex items-center justify-center shrink-0 text-[#0C002B] font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">File Form TM-A</h3>
                        <p className="text-white/80">Log in to the IP India portal. Select Form TM-A. Fill in the details carefully. Upload your MSME certificate to trigger the fee reduction. Pay ₹4,500 via net banking.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#FFB703] flex items-center justify-center shrink-0 text-[#0C002B] font-bold">5</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Monitor Status Weekly</h3>
                        <p className="text-white/80">Don't wait for an email. Check the status online every week. If the status changes to "Objected," you have 30 days to reply. Missing this window will force you to file a costly extension request.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Common Mistakes That Inflate Costs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                    <h3 className="text-lg font-bold text-red-400 mb-2">Using "Descriptive" Words</h3>
                    <p className="text-sm text-white/80">
                      Naming your shoe brand "Best Shoes" is a guaranteed objection (Section 9). You will spend money filing replies and attending hearings, and you still might lose. <strong>Fix:</strong> Choose a distinctive name like "Nike" or "Adidas".
                    </p>
                  </div>
                  <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                    <h3 className="text-lg font-bold text-red-400 mb-2">Wrong User Date</h3>
                    <p className="text-sm text-white/80">
                      Claiming you have used the mark since 2010 without uploading invoices or bills as proof. The registry will ask for an affidavit (Form TM-M), which costs ₹900 (Govt fee) + Legal fees to draft. <strong>Fix:</strong> If you lack proof, file as "Proposed to be used".
                    </p>
                  </div>
                  <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                    <h3 className="text-lg font-bold text-red-400 mb-2">Ignoring Similar Marks</h3>
                    <p className="text-sm text-white/80">
                      Thinking "My spelling is different" is enough. "Sun" and "Son" are phonetically identical. The registry will cite the existing mark. <strong>Fix:</strong> Do a phonetic search, not just a spelling search.
                    </p>
                  </div>
                  <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                    <h3 className="text-lg font-bold text-red-400 mb-2">Forgetting to Renew</h3>
                    <p className="text-sm text-white/80">
                      Trademarks need renewal every 10 years. If you miss the window, you pay a surcharge. If you miss the surcharge period, you have to file for "Restoration," which is very expensive. <strong>Fix:</strong> Set a calendar reminder for 10 years from now.
                    </p>
                  </div>
                </div>
              </section>

              {/* Choosing Attorney */}
              <section id="choosing-attorney" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">How to Choose a Budget-Friendly Attorney</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Finding the balance between cost and quality is possible. Here is a checklist to use when evaluating a service provider:
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-400 mt-1"></i>
                      <div>
                        <strong>Transparency:</strong> Do they list the government fee and professional fee separately? Avoid anyone who gives a single "lumpsum" without breakdown.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-400 mt-1"></i>
                      <div>
                        <strong>Scope of Work:</strong> Does the quote include a trademark search? Does it include drafting the user affidavit? Get this in writing.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-400 mt-1"></i>
                      <div>
                        <strong>Objection Policy:</strong> Ask explicitly: "If an objection is raised, how much will you charge to file the reply?" If they say "we'll see then," walk away.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-green-400 mt-1"></i>
                      <div>
                        <strong>Credentials:</strong> Are they a registered Trademark Agent or Attorney? You can verify their name on the IP India website.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Long Term Value */}
              <section id="long-term-value" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Long-Term Value Analysis</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Let's zoom out and look at the bigger picture. A trademark is valid for 10 years.
                  </p>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-4">
                    <h3 className="text-xl font-bold text-white mb-4">The "Cost Per Year" Perspective</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-black/20 rounded">
                        <div className="text-sm text-white/60">Total Cost (Approx)</div>
                        <div className="text-2xl font-bold text-[#FFB703]">₹7,500</div>
                        <div className="text-xs text-white/40">(Govt Fee + Prof Fee)</div>
                      </div>
                      <div className="p-4 bg-black/20 rounded">
                        <div className="text-sm text-white/60">Validity</div>
                        <div className="text-2xl font-bold text-[#FFB703]">10 Years</div>
                        <div className="text-xs text-white/40">(Renewable indefinitely)</div>
                      </div>
                      <div className="p-4 bg-black/20 rounded">
                        <div className="text-sm text-white/60">Cost Per Year</div>
                        <div className="text-2xl font-bold text-green-400">₹750</div>
                        <div className="text-xs text-white/40">(₹2 per day)</div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">
                    When you view it as ₹2 per day, the cost of professional registration is negligible compared to the value it provides: exclusive rights to your brand, the ability to sue infringers, and the trust it builds with customers. <strong>Cheap trademark registration isn't about paying the lowest price today; it's about securing the highest value for the next decade.</strong>
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "What is the absolute cheapest way to register a trademark in India?", a: "The absolute cheapest way is to file the application yourself (DIY) online using the IP India portal. If you are an Individual, Startup, or MSME, the government fee is only ₹4,500. However, this method carries a high risk of errors and rejection if you are not familiar with trademark law." },
                    { q: "How can I reduce my trademark registration costs?", a: "You can reduce costs by: 1) Registering as an MSME or Startup to get a 50% fee concession. 2) Filing online to get a 10% discount over physical filing. 3) Conducting a thorough search beforehand to avoid objection costs. 4) Filing in only one class initially." },
                    { q: "Why do some agencies charge only ₹999 for trademark registration?", a: "Agencies charging ₹999 usually only cover their professional fee for filing. The government fee (₹4,500) is extra. Furthermore, these low-cost packages often exclude essential services like trademark search, objection handling, and hearing appearances, leading to higher costs later." },
                    { q: "Is the government fee refundable if my application is rejected?", a: "No, the government fee paid to the Trademark Registry is strictly non-refundable. This applies even if your application is rejected, abandoned, or withdrawn. This is why getting it right the first time is crucial for saving money." },
                    { q: "What is the SIPP scheme for Startups?", a: "The Scheme for Facilitating Startups Intellectual Property Protection (SIPP) allows recognized Startups to file trademarks through government-appointed facilitators. The government pays the facilitator's professional fees, so the Startup only has to pay the statutory government fee." },
                    { q: "Do I have to pay renewal fees?", a: "Yes, trademarks must be renewed every 10 years. The renewal fee is currently ₹9,000 (or ₹4,500 for individuals/MSMEs if filed online). This is a mandatory cost to keep your trademark active." },
                    { q: "Can I file a trademark for free?", a: "No, the government fee is mandatory. There is no waiver for the government fee under any scheme. However, under the SIPP scheme, Startups do not have to pay attorney fees, making the process significantly cheaper." },
                    { q: "What happens if I don't respond to an objection?", a: "If you don't file a reply to the examination report within 30 days, your application will be marked as 'Abandoned'. You will lose the government fee you paid and will have to start the process all over again." }
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
                  <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-4">Get Affordable, Expert Trademark Registration</h3>
                  <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                    Don't gamble with your brand. Get professional trademark registration services at transparent, pocket-friendly prices. No hidden costs, just expert protection.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-[#0C002B] bg-gradient-to-r from-[#FFB703] to-[#FFA000] hover:scale-105 transition-transform text-lg shadow-lg">
                      Get a Quote
                    </Link>
                    <Link href="/services" className="px-8 py-4 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors text-lg">
                      View Pricing
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
