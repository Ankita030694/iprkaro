import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faSearch,
  faFileContract,
  faGavel,
  faGlobe,
  faShieldAlt,
  faBalanceScale,
  faRocket,
  faMoneyBillWave,
  faCertificate,
  faFileSignature,
  faPhone,
  faChevronRight,
  faCalendarAlt,
  faHandshake,
  faExclamationTriangle,
  faSync,
  faLightbulb,
  faUserTie,
  faBuilding,
  faFileAlt,
  faHandHoldingUsd,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'In India the Trademark Registration Should Be Renewed Every | Period, Fees & Process',
  description: 'Learn when trademark registration should be renewed in India. Complete guide on the 10-year renewal cycle, Form TM-R, government fees, and restoration process at IPR Karo.',
  keywords: [
    'in india the trademark registration should be renewed every',
    'trademark renewal period india',
    'trademark renewal process',
    'trademark renewal fees 2026',
    'restore trademark india',
    'form tm-r india',
    'trademark validity india',
    'ip india renewal status',
    'trademark renewal online',
    'o-3 notice trademark'
  ],
  openGraph: {
    title: 'In India the Trademark Registration Should Be Renewed Every 10 Years',
    description: 'A comprehensive guide to trademark renewal in India. Learn about the 10-year validity, renewal process, and how to protect your brand identity.',
    url: 'https://www.iprkaro.com/in-india-the-trademark-registration-should-be-renewed-every',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/in-india-the-trademark-registration-should-be-renewed-every',
  },
};

const tocSections = [
  { id: 'introduction', title: 'The Longevity of a Brand: Why Renewal Matters' },
  { id: 'renewal-cycle', title: 'The 10-Year Cycle: How the Law Works' },
  { id: 'legal-framework', title: 'Legal Provisions: Section 25 Explained' },
  { id: 'renewal-timeline', title: 'The Timeline: Pre-expiry to Post-expiry' },
  { id: 'step-by-step', title: 'Step-by-Step Guide to Renewal (Form TM-R)' },
  { id: 'documents', title: 'Documents Required Checklist' },
  { id: 'fees-breakdown', title: 'Government Fees and Surcharges 2026' },
  { id: 'ot-notice', title: 'Understanding the O-3 Notice' },
  { id: 'restoration', title: 'Restoration of Trademark: A Second Chance' },
  { id: 'benefits', title: 'Benefits of Timely Renewal' },
  { id: 'common-pitfalls', title: 'Common Reasons for Rejection' },
  { id: 'tmr-nuances', title: 'Technical Nuances: Mastering Form TM-R' },
  { id: 'startup-consequences', title: 'Impact: Consequences of Removal for Startups' },
  { id: 'global-renewal', title: 'Global Renewal: Madrid Protocol & Dependencies' },
  { id: 'why-iprkaro', title: 'Why Trust IPR Karo for Your Renewals?' },
  { id: 'faqs', title: 'Deep-Dive: Commonly Asked Questions' },
  { id: 'reviews', title: 'Client Reviews' },
  { id: 'conclusion', title: 'Securing Your Brand for the Future' },
];

const faqs = [
  {
    question: "In India the trademark registration should be renewed every how many years?",
    answer: "In India, the trademark registration should be renewed every 10 years. This 10 year period is calculated from the date of the original application filing, not from the date the certificate was issued."
  },
  {
    question: "When can I apply for trademark renewal in India?",
    answer: "You can apply for trademark renewal up to 6 months before the date of expiry. Applying early is recommended to ensure there is no lapse in protection."
  },
  {
    question: "What is the government fee for trademark renewal in India?",
    answer: "The government fee for filing a renewal application (Form TM-R) online is ₹9,000 per class. For physical filing, the fee is ₹10,000 per class."
  },
  {
    question: "What happens if I miss the trademark renewal deadline?",
    answer: "If you miss the deadline, you have a 6 month grace period to renew with a late fee. If you miss that, the mark is removed, but you can apply for restoration within 1 year of the expiry date."
  },
  {
    question: "Is it mandatory for the Registrar to send a renewal notice?",
    answer: "Yes, under Section 25(3), the Registrar is legally required to send a notice (Form O-3) at least 1 month before the expiry. If they do not, it can be a ground for restoration."
  },
  {
    question: "Can I change my logo during the renewal process?",
    answer: "No, you cannot make significant changes to the logo or name during renewal. Only minor clerical changes can be made via Form TM-M."
  },
  {
    question: "How long does it take for the renewal process to complete?",
    answer: "Once filed, the status usually updates on the IP India portal within 24 to 48 hours for e-filings, though the official certificate might take a few weeks."
  },
  {
    question: "Who can file the renewal application?",
    answer: "The registered proprietor of the trademark or an authorized trademark attorney/agent can file the renewal application."
  },
  {
    question: "Does trademark renewal provide global protection?",
    answer: "No, trademark rights are territorial. Renewal in India only protects you within Bharat. International protection requires individual filings or a Madrid Protocol application."
  },
  {
    question: "Can a removed trademark be restored?",
    answer: "Yes, a removed trademark can be restored within 1 year from the date of its expiration by filing Form TM-R along with the restoration fee and a valid reason for the delay."
  },
  {
    question: "What is the surcharge for late trademark renewal in India?",
    answer: "The surcharge for late renewal (within the 6-month grace period) is ₹4,500 for online filing and ₹5,000 for physical filing. This is added to the standard renewal fee of ₹9,000/₹10,000."
  },
  {
    question: "How does the Madrid Protocol affect trademark renewal?",
    answer: "If your Indian trademark is a 'base registration' for international marks under the Madrid Protocol, failing to renew it in India will cause all your international registrations to be cancelled automatically due to the 'dependency' rule."
  },
  {
    question: "Does the Registry send a physical copy of the renewal certificate?",
    answer: "Currently, the Trade Marks Registry primarily issues digital certificates. You can download the 'Renewal Certificate' or an updated 'Entry in the Register' directly from the IP India portal once the status is updated to 'Renewed'."
  },
  {
    question: "What if the trademark owner has died before the renewal?",
    answer: "In the case of the death of a proprietor, the legal heirs must first file for transmission of title (Form TM-P) to update the ownership records before or along with the renewal application (Form TM-R)."
  },
  {
    question: "Is there a limit to how many times I can renew a trademark?",
    answer: "No, there is no limit. As long as the trademark is in active use and the renewal fees are paid every 10 years, a trademark can stay valid indefinitely, potentially lasting for centuries."
  }
];

export default function TrademarkRenewalPage() {
  const breadcrumbItems = [
    { label: "Trademark Renewal Period", href: "/in-india-the-trademark-registration-should-be-renewed-every" },
  ];

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
        "name": "Trademark Renewal",
        "item": "https://www.iprkaro.com/in-india-the-trademark-registration-should-be-renewed-every"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "In India the Trademark Registration Should Be Renewed Every 10 Years: Comprehensive Guide",
    "description": "Examine the technical details of the trademark renewal cycle in Bharat, including government fees, legal procedures, and restoration of removed marks.",
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
    "datePublished": "2026-02-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iprkaro.com/in-india-the-trademark-registration-should-be-renewed-every"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trademark Renewal Service India",
    "image": "https://www.iprkaro.com/assets/trademark-renewal-og.jpg",
    "description": "Fast and reliable trademark renewal and restoration services in India.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2150"
    }
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
          }}>

          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
              Expert Analysis: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>In India the Trademark Registration Should Be Renewed Every</span> 10 Years
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
              Understand the fundamental lifecycle of your intellectual property. From tracking your renewal date to navigating the restoration process, ensure your brand identity remains protected forever with IPR Karo.
            </p>
            <Link href="/contact-us">
              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                Secure Your Renewal Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

            {/* Left Column: Table of Contents */}
            <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-6 sticky top-[100px] z-20">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Longevity of a Brand: Why Renewal is Vital</h2>
                  <p className="mb-4 leading-relaxed text-lg">
                    In the fast paced world of Indian commerce, a brand name is much more than a simple title; it is a promise of quality and trust that you make to your customers. However, many entrepreneurs often overlook a critical legal reality: intellectual property protection is not a one-time event. The question of when <strong>in India the trademark registration should be renewed every</strong> 10 years is at the heart of maintaining a successful business legacy. A registered trademark is a powerful legal instrument that grants you exclusive rights, but these rights come with an expiration date. Failing to monitor this date can lead to the sudden loss of your brand identity, allowing competitors to swoop in and capitalize on the reputation you have built over a decade.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg">
                    The Trade Marks Act of 1999 was designed to provide a fair and structured environment for brand protection. While the initial registration process can be rigorous, the renewal process is intended to be a straightforward maintenance step. Yet, thousands of trademarks are removed from the register every year simply because business owners miss the deadline. At IPR Karo, we believe that your identity is your most valuable asset. This guide is designed to provide you with a deep, comprehensive understanding of the trademark renewal ecosystem in Bharat, ensuring that your mark remains a permanent fixture in the market. We will explore the technical nuances of the law, the financial implications of late filing, and the strategic steps you need to take to safeguard your digital and physical footprint.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg">
                    One must understand that a trademark is an intangible asset that appreciates in value as your business grows. When you first file an application, the mark might represent a small startup idea. Ten years later, that same mark could be the face of a multi-million dollar enterprise. The renewal process is the legal renewal of your vows with your business identity. It is the moment where you reaffirm your commitment to your customers and your industry. In this definitive 2026 manual, we will break down every aspect of the renewal journey, from the initial calculation of the expiry date to the restoration of marks that have already been removed. Whether you are a sole proprietor or the CEO of a multi national corporation, the principles of renewal remain the same: vigilance, documentation, and timely action.
                  </p>
                  <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                    <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                      "A trademark certificate is a shield for your innovation, but a renewal certificate is a testament to your brand's endurance. Neglecting your renewal is like leaving the gates of your fortress unlocked."
                    </p>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    As we move through the sections of this guide, you will find that the law provides multiple layers of protection and opportunities for owners who act in good faith. From the mandatory O-3 notices sent by the Registrar to the generous grace periods, the system is designed to support legitimate brand owners. However, the ultimate responsibility for renewal lies with the proprietor. By the time you finish reading this 4000-word analysis, you will have all the tools necessary to manage your trademark portfolio with professional precision. You will understand why the 10-year cycle is established and how you can leverage it to maintain a competitive advantage in the globalized Indian market.
                  </p>
                </section>

                <section id="renewal-cycle" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The 10 Year Cycle: How the Law Works in India</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    The most fundamental rule to remember is that <strong>in India the trademark registration should be renewed every</strong> 10 years. This duration is standardized across almost all classes of goods and services. However, a common point of confusion for many business owners is the exact point from which this 10 year period is calculated. There is often a significant gap between the day you file your application and the day you finally receive your registration certificate. This gap can sometimes span several years if there were objections or oppositions.
                  </p>
                  <div className="bg-white border-2 border-dashed border-[#6E5E93] p-8 my-10 rounded-3xl">
                    <h4 className="font-bold text-[#0C002B] text-xl mb-4">The Priority Date Rule</h4>
                    <p className="text-gray-700 leading-relaxed">
                      According to the Trade Marks Act, the validity of a trademark begins from the **Date of Application**, not the date of registration. This date is also known as your "Priority Date." For example, if you filed your application on January 1, 2016, but only received your certificate in March 2019, your trademark is still only valid until January 1, 2026. You must apply for renewal before this first date. This rule ensures that your legal protection backdates to the very moment you entered the system, but it also means you might have fewer "active" years with the certificate than you initially anticipated.
                    </p>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    This 10-year cycle allows the Registry to clear "dead wood" or unused trademarks from the system. Often, businesses fail or pivot within a decade. By requiring a renewal every ten years, the government ensures that only active, relevant brands occupy space on the official register. This frees up valuable names and logos for new entrepreneurs who can genuinely use them in commerce. For a successful business, this cycle is simply a periodic administrative task that secures another decade of market exclusivity.
                  </p>
                </section>

                <section id="legal-framework" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Legal Framework: Section 25 of the Trade Marks Act 1999</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    To truly master your intellectual property, one must look at the statutory language. Section 25 of the Trade Marks Act, 1999, is the primary legal foundation for renewals. It outlines several critical points that every brand owner should be aware of:
                  </p>
                  <ul className="space-y-6 my-10 list-none p-0">
                    <li className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm border-l-[10px] border-l-blue-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faBalanceScale} className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 text-xl mb-2">Duration of Protection</h4>
                        <p className="text-blue-800">Small and large enterprises alike have the same duration: 10 years. The law does not discriminate based on the size of the entity. Section 25(1) explicitly states that the registration of a trade mark shall be for a period of ten years, but may be renewed from time to time in accordance with the provisions of this section.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm border-l-[10px] border-l-blue-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faGavel} className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 text-xl mb-2">The Renewal Application</h4>
                        <p className="text-blue-800">Section 25(2) gives the Registrar the power to renew the registration of a trademark for a period of ten years from the date of expiration of the original registration or of the last renewal of registration. This means you can keep a trademark alive indefinitely, passing it down through generations or corporate acquisitions, as long as you continue to pay the renewal fees every decade.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm border-l-[10px] border-l-blue-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faBuilding} className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 text-xl mb-2">Removal for Non-Renewal</h4>
                        <p className="text-blue-800">If the conditions for renewal are not met, the Registrar has the authority under Section 25(3) to remove the trade mark from the register. This is the ultimate "death sentence" for a brand name, but the law requires the Registrar to follow a specific process, including sending a formal notice, before taking this drastic step.</p>
                      </div>
                    </li>
                  </ul>
                  <p className="mb-4 leading-relaxed text-lg">
                    The Trade Marks Rules of 2017 further supplement these sections by providing the procedural layout for Form TM-R. Together, the Act and the Rules create a robust system that balances the rights of the brand owner with the public interest of keeping the register fresh and accurate. Understanding these sections provides you with the legal vocabulary needed to communicate effectively with IP professionals and the Registry itself.
                  </p>
                </section>

                <section id="renewal-timeline" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Renewal Timeline: From Pre Expiry to Restoration</h2>
                  <p className="mb-8 leading-relaxed text-lg">
                    The lifecycle of a trademark renewal is divided into several clear phases. Recognizing which phase your mark is currently in is crucial for calculating your fees and your legal risk.
                  </p>
                  <div className="space-y-12 my-12 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[31px] before:-z-10 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-200 before:via-purple-200 before:to-transparent">
                    {/* Phase 1 */}
                    <div className="relative flex items-center gap-6 md:gap-10">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">1</div>
                      <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h4 className="font-bold text-[#0C002B] text-xl mb-2">Proactive Filing (6 Months Before Expiry)</h4>
                        <p className="text-gray-600 leading-relaxed text-lg">This is the ideal window. You can file for renewal up to six months before the 10-year period ends. Filing at this stage ensures a seamless transition and zero interruption in your legal status. The trademark status on the IP India portal will usually update almost immediately.</p>
                      </div>
                    </div>
                    {/* Phase 2 */}
                    <div className="relative flex items-center gap-6 md:gap-10">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">2</div>
                      <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h4 className="font-bold text-[#0C002B] text-xl mb-2">Late Filing (6 Months After Expiry)</h4>
                        <p className="text-gray-600 leading-relaxed text-lg">If you miss the expiry date, you enter the "Grace Period." You can still renew your mark, but you must pay a surcharge (late fee). Your rights are technically in a vulnerable state during this time, but the Registry generally allows renewal if the required fees are paid.</p>
                      </div>
                    </div>
                    {/* Phase 3 */}
                    <div className="relative flex items-center gap-6 md:gap-10">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">3</div>
                      <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h4 className="font-bold text-[#0C002B] text-xl mb-2">Restoration Window (6-12 Months After Expiry)</h4>
                        <p className="text-gray-600 leading-relaxed text-lg">If the grace period also passes, the trademark is "Removed" from the register. However, all hope is not lost. You have a final window of six additional months (total 1 year from expiry) to apply for restoration by paying a significantly higher fee and providing a justification for your delay.</p>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    Missing the restoration window usually means your rights are permanently extinguished. At that point, any other business in India can apply for your name, and you would have to start from scratch with a new application with no priority date. This emphasizes why <strong>in India the trademark registration should be renewed every</strong> 10 years without exception. Proactive monitoring is the difference between a secure brand and a legal disaster.
                  </p>
                </section>

                <section id="step-by-step" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Step by Step: Filing Form TM R for Renewal</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    The technical process of renewal has been significantly streamlined by the Digital India initiative. Today, most renewals are handled electronically. Here is the detailed workflow:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-10">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3 bg-white rounded-lg shadow-sm">
                          <FontAwesomeIcon icon={faSearch} className="w-6 h-6 text-[#6E5E93]" />
                        </div>
                        1. Internal Audit
                      </h4>
                      <p className="text-gray-600">Review your portfolio. Has the business address changed? Is the entity still the same? Has the logo changed? If there are changes, you may need a TM-M filing before or alongside the renewal to ensure the details match the Registry's records.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3 bg-white rounded-lg shadow-sm">
                          <FontAwesomeIcon icon={faFileAlt} className="w-6 h-6 text-[#6E5E93]" />
                        </div>
                        2. Draft Form TM-R
                      </h4>
                      <p className="text-gray-600">The renewal application is filed via Form TM-R. It requires the basic details of the mark, including the application number and the class. You must also specify the nature of the renewal (standard, late, or restoration).</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3 bg-white rounded-lg shadow-sm">
                          <FontAwesomeIcon icon={faMoneyBillWave} className="w-6 h-6 text-[#6E5E93]" />
                        </div>
                        3. Fee Payment
                      </h4>
                      <p className="text-gray-600">Proceed to the payment gateway. For e-filing, the fee is ₹9,000. Ensure you generate the "Electronic Journal Acknowledgment" immediately after payment. This is your proof of filing.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3 bg-white rounded-lg shadow-sm">
                          <FontAwesomeIcon icon={faCertificate} className="w-6 h-6 text-[#6E5E93]" />
                        </div>
                        4. Final Status Update
                      </h4>
                      <p className="text-gray-600">The Registry will examine the application. Once approved, the status on the public portal changes from "Registered" to "Renewed." A fresh certificate is usually issued digitally within a few weeks, extending your protection for another decade.</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    At IPR Karo, we handle this entire sequence for you. We don't just file the form; we conduct a pre-renewal audit to ensure all your corporate details are up to date. This prevents administrative objections that can delay your renewal for months. Our automated systems also track the progress of the application until the status officially updates to "Renewed."
                  </p>
                </section>

                <section id="documents" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Documents Checklist for a Seamless Renewal</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    While the renewal process requires fewer documents than the initial application, precision is still the key. Any discrepancy in ownership details can lead to a "Formalities Check Fail" status. Here is the essential list:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 my-10">
                    <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 h-full">
                      <h4 className="font-bold text-[#0C002B] text-2xl mb-4">Core Essentials</h4>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-indigo-500" /> **Registration Certificate Copy** (Clear scan of the original)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-indigo-500" /> **Form TM-A Copy** (The original application for detail verification)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-indigo-500" /> **Power of Attorney (TM-48)** (If using an attorney/agent)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-indigo-500" /> **PAN/Aadhar or GST** of the Proprietor</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 h-full">
                      <h4 className="font-bold text-[#0C002B] text-2xl mb-4">Conditional Documents</h4>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[#6E5E93]" /> **Assignment Deeds** (If the mark was bought or transferred)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[#6E5E93]" /> **Trust Deeds/Partnership Deeds** (For non-corporate entities)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[#6E5E93]" /> **Board Resolution** (For private limited companies)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[#6E5E93]" /> **Restoration Affidavit** (For expired marks only)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    The <strong>Restoration Affidavit</strong> is a legal statement explaining why the renewal was missed. This is only required if you are renewing after the 6-month grace period has passed. The affidavit must be notarized and typically includes reasons like illness, absence from the country, or management changes. However, "I forgot" is rarely accepted by the Registrar as a valid reason for restoration.
                  </p>
                </section>

                <section id="fees-breakdown" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Government Fees and Surcharges: 2026 Price List</h2>
                  <p className="mb-8 leading-relaxed text-lg">
                    Cost is a major consideration for any business. The government fees for trademark renewal in India are structured to encourage electronic filing and timely compliance. Here is the breakdown per class:
                  </p>
                  <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200">
                    <table className="w-full text-left bg-white border-collapse">
                      <thead className="bg-[#6E5E93] text-white">
                        <tr>
                          <th className="p-5 font-bold border border-purple-700">Type of Filing</th>
                          <th className="p-5 font-bold border border-purple-700">E-Filing Fee (₹)</th>
                          <th className="p-5 font-bold border border-purple-700">Physical Filing Fee (₹)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-base">
                        <tr>
                          <td className="p-4 font-bold border">Standard Renewal (Form TM-R)</td>
                          <td className="p-4 border">₹ 9,000</td>
                          <td className="p-4 border">₹ 10,000</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold border">Late Renewal (with Surcharge)</td>
                          <td className="p-4 border">₹ 13,500 approx.</td>
                          <td className="p-4 border">₹ 15,000 approx.</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold border">Restoration (including Renewal fee)</td>
                          <td className="p-4 border">₹ 18,500 approx.</td>
                          <td className="p-4 border">₹ 20,000 approx.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg italic text-gray-600">
                    *Note: These fees are per class. If your trademark is registered in 3 classes, you will have to multiply the fee accordingly. E-filing is 10% cheaper and significantly faster.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg">
                    While these fees might seem high for a small business, it is important to divide the cost over the 10 year period. A standard renewal costs roughly ₹900 per year or less than ₹80 per month. This is a remarkably low price for the legal protection of your entire brand identity. Comparing this to the legal fees of an infringement lawsuit (which can cost lakhs of rupees), renewal is clearly the most cost effective insurance policy your brand can have.
                  </p>
                </section>

                <section id="ot-notice" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The O-3 Notice: Your Final Legal Safety Net</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    One of the most powerful provisions of the Trade Marks Act 1999 is Section 25(3). This section states that the Registrar <strong>must</strong> send a notice to the registered proprietor before removing a mark from the register. This notice is officially called the <strong>O-3 Notice</strong>.
                  </p>
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 italic my-10">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      "At the prescribed time before the expiration of the last registration of a trade mark, the Registrar shall send notice in the prescribed manner to the registered proprietor of the date of expiration and the conditions as to payment of fees... and if at the expiration of the time prescribed in that behalf those conditions have not been duly complied with, the Registrar may remove the trade mark from the register."
                    </p>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    This means if the Registry removes your trademark without sending you this notice at your registered address, you have a strong legal ground to demand its immediate restoration. However, there is a catch: the notice is sent to the address mentioned in the registration files. If you have moved your office and failed to update your address on the Registry (via Form TM-M), you cannot blame the Registrar for a notice that you never received. This is another reason why keeping your corporate details updated through IPR Karo is an essential part of your IP strategy.
                  </p>
                </section>

                <section id="restoration" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Restoration of Trademark: Bringing a Dead Mark Back to Life</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Sometimes, life gets in the way: a change in management, a merger, or simply a clerical error leads to a trademark falling off the register. If your status shows "Removed," you are in the restoration phase. This is the most complex part of the trademark lifecycle, but it is not impossible to navigate.
                  </p>
                  <div className="bg-white border-l-[10px] border-l-[#0C002B] p-8 my-10 rounded-r-3xl shadow-xl">
                    <h4 className="font-bold text-[#0C002B] text-2xl mb-4">The Restoration Procedure</h4>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      Application for restoration must be made using Form TM-R between 6 months and 1 year after the expiration date. You must provide a valid reason for the delay. The Registrar has the discretionary power to allow or refuse restoration based on the facts provided. If the Registrar is satisfied that it is "just" to restore the mark, they will issue an order to put the mark back on the register and publish the restoration in the Trademark Journal.
                    </p>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    At IPR Karo, we specialize in difficult restorations. We draft the necessary affidavits and represent you before the Registrar to prove that the brand is still active and that the failure to renew was unintentional. Successfully restoring a mark preserves your decadal history of use, which is vital if you ever need to take a competitor to court.
                  </p>
                </section>

                <section id="benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Unlocking Value: The 5 Major Benefits of Timely Renewal</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Why do successful brands like Tata, Reliance, and Amul never miss a renewal? Because they view renewal as a value generator, not a cost center.
                  </p>
                  <ul className="space-y-6 my-10 list-none p-0">
                    <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-xl mb-2">Perpetual Legal Monopoly</h4>
                        <p className="text-green-800">Registration gives you the exclusive right to use the mark. By renewing every 10 years, you maintain this monopoly forever. This prevents others from using your name and diluting your brand's market power.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faHandHoldingUsd} className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-xl mb-2">Asset Growth and Valuation</h4>
                        <p className="text-green-800">A registered and renewed mark is a tangible asset on your balance sheet. It can be sold, franchised, or used as collateral for bank loans. The longer the mark has been active, the higher its valuation.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-xl mb-2">Digital Ecosystem Protection</h4>
                        <p className="text-green-800">Domain names, social media handles, and e-commerce brand registries all require an active, registered trademark. If your renewal lapses, your Instagram verified badge could be at risk, and your Amazon Brand Registry account could be suspended.</p>
                      </div>
                    </li>
                  </ul>
                </section>

                <section id="common-pitfalls" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Avoid These Common Pitfalls in Online Trademark Renewal</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Even with an online system, mistakes are common. Here are the top errors we see at IPR Karo and how to avoid them:
                  </p>
                  <ul className="space-y-6 my-8 p-0 list-none">
                    <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                      <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                      </div>
                      <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Mismatch in Ownership Details</strong> If the company has changed its name from "ABC Pvt Ltd" to "ABC India Pvt Ltd" but the Registry still has the old name, the renewal will be stalled. Always update your corporate records with the Registry before filing for renewal.</p>
                    </li>
                    <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                      <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                      </div>
                      <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Incorrect Fee Calculation</strong> Physical filing requires an extra ₹1,000. Filing for renewal after the expiry date requires an additional surcharge. Paying the wrong amount leads to the application being rejected or ignored by the examiner.</p>
                    </li>
                    <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                      <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                      </div>
                      <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Ignoring Class Specificity</strong> If your mark is registered in multiple classes, you must renew it in all of them to maintain full protection. Forgetting even one class can leave your brand exposed in that specific segment of the market.</p>
                    </li>
                  </ul>
                </section>

                <section id="tmr-nuances" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Technical Nuances: Mastering Form TM-R</h2>
                  <p className="mb-4 leading-relaxed text-lg">
                    Filing Form TM-R is the singular pathway for all renewal related activities in Bharat. However, the form's complexity lies in its multi-functional nature. Depending on the timing of your filing, you must select the correct "Category of Mark" and "Request Type." A standard renewal is straightforward, but if you are filing for a "Collective Mark" or a "Certification Mark," the requirements for supporting documentation increase significantly. For these specialized marks, the Registrar may require an updated set of regulations governing the use of the mark to ensure that the standards haven't changed over the last decade.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg">
                    Furthermore, the digital filing portal (IP India) requires a valid Class 3 Digital Signature Certificate (DSC) for authentication. At IPR Karo, we ensure that the DSC is correctly mapped to the authorized agent's profile, avoiding common "Signature Verification Failed" errors that plague DIY filers. It is also worth noting that the Registry has recently automated the generation of O-3 notices, but the delivery remains dependent on the "Service Address" filed in the original application. If your digital contact details (email and mobile number) are not updated in the Registry's master database, you might miss critical alerts regarding your mark's expiration.
                  </p>
                </section>

                <section id="startup-consequences" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Impact: Consequences of Removal for Startups</h2>
                  <p className="mb-4 leading-relaxed text-lg">
                    For a startup, the trademark is often the most valuable asset during a funding round or an acquisition. If a due diligence team discovers that your primary brand name has been "Removed" from the register due to non-renewal, it can lead to a significant valuation "haircut" or even the cancellation of the deal. Investors view intellectual property hygiene as a proxy for overall management quality. A lapse in renewal suggests a lack of internal controls and exposes the company to "Passing Off" lawsuits from competitors who might attempt to register similar names the moment your mark enters the "Abandoned" state.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg">
                    Additionally, the loss of a trademark registration impacts your ability to enforce your rights on e-commerce platforms like Amazon, Flipkart, and Myntra. These platforms rely on a valid registration certificate to enable "Brand Registry" tools that protect you against counterfeiters. Without an active registration, you lose the "Fast-Track" takedown privileges, forcing you to engage in lengthy and expensive civil litigation to prove your common law rights. Timely renewal is thus a direct protector of your digital revenue streams.
                  </p>
                </section>

                <section id="global-renewal" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Global Renewals: Madrid Protocol & Dependencies</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    For businesses that have expanded internationally, renewal becomes more complex. If you have filed your international trademarks through the Madrid Protocol (using your Indian registration as a base), you must ensure your Indian mark is renewed on time. Under the Madrid Protocol, your international registration is linked to your "Basic Registration" (the Indian one) for a period of five years. This is known as the "Dependency Period."
                  </p>
                  <div className="bg-[#6E5E93]/10 p-8 rounded-3xl border border-[#6E5E93]/20 my-10">
                    <h4 className="text-[#0C002B] font-bold text-2xl mb-4">The Central Attack Risk</h4>
                    <p className="text-gray-800 leading-relaxed text-lg mb-4">
                      During these first 5 years, if your Indian trademark expires or is cancelled for any reason—including failure to renew—it triggers a "Central Attack." This means all your international protections across multiple countries will simultaneously collapse. While you can "Transform" these international marks into national ones in each country, the cost of doing so is astronomical compared to a simple ₹9,000 Indian renewal. After the 5-year dependency period, the international mark becomes independent, but the initial risk makes Indian renewals the highest priority in your global IP strategy.
                    </p>
                  </div>
                </section>

                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Why Hundreds of Brands Choose IPR Karo for Renewals</h2>
                  <p className="mb-10 leading-relaxed text-lg">
                    At IPR Karo, we move beyond the simple filing of forms. We provide a comprehensive IP management ecosystem that treats your brand with the respect it deserves.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                        <FontAwesomeIcon icon={faRocket} className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-xl">Rapid Processing</h4>
                      <p className="text-sm opacity-70">We file your renewal within 24 hours of receiving documentation, ensuring zero downtime in your protection.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                        <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-xl">Active Monitoring</h4>
                      <p className="text-sm opacity-70">Our proprietary systems monitor your mark's status 24/7. We notify you long before the deadline, preventing last-minute panics.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                        <FontAwesomeIcon icon={faScaleBalanced} className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-xl">Legal Expertise</h4>
                      <p className="text-sm opacity-70">Our team includes senior IP attorneys who can handle complex restorations and ownership discrepancies with ease.</p>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center">Frequently Asked Questions</h2>
                  <div className="space-y-8 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start">
                          <span className="text-[#6E5E93] text-2xl">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                  <ReviewSnippets reviews={[
                    {
                      author: "Sunil Mehta",
                      role: "MD, Heritage Textiles",
                      rating: 5,
                      date: "2024-02-15",
                      text: "We almost lost our 20-year-old brand because we forgot the 10-year renewal deadline. IPR Karo filed the restoration and saved our legacy within 48 hours. Absolute lifesavers!",
                      avatar: "SM"
                    },
                    {
                      author: "Priya Sharma",
                      role: "Founder, Glow & Lovely Cosmetics",
                      rating: 5,
                      date: "2024-01-10",
                      text: "The renewal process seemed daunting, but the team handled everything from DSC mapping to the fee payment. Their proactive monitoring means I never have to worry about deadlines again.",
                      avatar: "PS"
                    },
                    {
                      author: "Arjun Reddy",
                      role: "Director, TechVantage Solutions",
                      rating: 5,
                      date: "2023-12-20",
                      text: "Excellent service for renewal. They even helped us update our registered office address in the registry alongside the renewal. Very professional and efficient.",
                      avatar: "AR"
                    }
                  ]} />
                </section>

                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Securing Your Brand for the Future</h2>
                  <p className="mb-4 leading-relaxed text-xl text-center">
                    Ultimately, the question of when <strong>in India the trademark registration should be renewed every</strong> 10 years is about more than just a legal deadline. It is about the long-term value of your innovation and the trust you have built with your community. A decade is a long time in business; many things change, but the importance of your identity only increases. By treating your renewal with the seriousness it deserves, you ensure that the ® symbol remains a permanent feature of your branding.
                  </p>
                  <p className="mb-4 leading-relaxed text-xl text-center">
                    Don't let your hard-earned reputation slip through the cracks of administrative oversight. Let IPR Karo be your dedicated IP partner, managing the technicalities so you can focus on building the next great Indian enterprise. Whether you are nearing your first 10-year mark or need help restoring an old favorite, our experts are here to help you every step of the way.
                  </p>
                </section>

                {/* Final CTA Strip */}
                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Let Your Trademark Expire</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                      Check your renewal status today with our expert team. Secure another 10 years of brand protection in just a few clicks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                          Renew My Trademark
                        </button>
                      </Link>
                      <a href="tel:+919289707648">
                        <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                          Call an IP Expert
                        </button>
                      </a>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E5E93]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                </div>

              </div>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <aside className="hidden lg:block space-y-10 sticky top-32">

              {/* Sidebar CTA Box */}
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Free Status Audit</h3>
                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                  Not sure when your mark expires? Get a **Free Portal Audit** and renewal report today.
                </p>
                <Link href="/contact-us" className="block relative z-10">
                  <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                    Audit My Mark
                  </button>
                </Link>
                <div className="mt-6 pt-6 border-t border-white/10 relative z-10 text-center">
                  <a href="tel:+919289707648" className="text-indigo-300 font-bold hover:text-white transition-colors flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" /> +91-9289707648
                  </a>
                </div>
              </div>

              {/* Related Pages Widget */}
              <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Explore More</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/trademark-application-status" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Check Application Status</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/registration-of-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Registration Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Public Search Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-trademark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Understanding IP Law</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
