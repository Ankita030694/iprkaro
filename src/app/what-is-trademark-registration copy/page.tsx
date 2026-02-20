import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faSearch,
  faFileContract,
  faGavel,
  faGlobe,
  faBalanceScale,
  faRocket,
  faMoneyBillWave,
  faCertificate,
  faFileSignature,
  faPhone,
  faEye,
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
  faSignature,
  faTasks,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'What is Trademark Registration? | The Full Process Guide 2026',
  description: 'Understand what trademark registration is and why it is essential for business growth in India. A complete breakdown of the legal journey from application to certificate.',
  keywords: [
    'what is trademark registration',
    'meaning of trademark registration',
    'trademark registration process india',
    'benefits of brand registration',
    'legal brand protection guide',
    'how trademark registration works',
    'registered mark vs pending mark',
    'intellectual property registration',
    'securing commercial marks',
    'ip india registration overview'
  ],
  openGraph: {
    title: 'The Blueprint of Brand Legality: What is Trademark Registration?',
    description: 'Transform your brand into a protected asset. Discover the procedural and legal nuances of registering your trademark in Bharat.',
    url: 'https://www.iprkaro.com/what-is-trademark-registration',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/what-is-trademark-registration',
  },
};

const tocSections = [
  { id: 'introduction', title: 'What is Trademark Registration? The Gateway to Brand Sovereignty' },
  { id: 'procedural-meaning', title: 'The Procedural Core: What Happens at the Registry?' },
  { id: 'common-law-gap', title: 'The Bridge: Moving from Common Law to Statutory Protection' },
  { id: 'registration-v-filing', title: 'Critical Distinction: Filing vs. Registration' },
  { id: 'the-certificate', title: 'The Registration Certificate: Your Brands Birth Certificate' },
  { id: 'essential-milestones', title: 'The Ten Milestones of the Registration Journey' },
  { id: 'financial-benefits', title: 'Direct and Indirect Financial Gains of Registration' },
  { id: 'infringement-shield', title: 'The Shield: How Registration Stops Infringement' },
  { id: 'licensing-rights', title: 'Expanding Horizons: Licensing and Franchising Rights' },
  { id: 'global-standing', title: 'International Recognition through Indian Registration' },
  { id: 'registry-discretion', title: 'The Role of the Registrars Discretion' },
  { id: 'maintaining-validity', title: 'Renewals and Maintenance: Keeping the Mark Alive' },
  { id: 'why-expert-filing', title: 'Why Professional Filing via IPR Karo Matters' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
  { id: 'reviews', title: 'Client Reviews' },
  { id: 'conclusion', title: 'Your Brands Official Recognition Starts Here' },
];

const faqs = [
  {
    question: "What is the primary purpose of trademark registration?",
    answer: "The primary purpose is to grant the owner an exclusive monopoly over the use of a specific mark for certain goods or services. It serves as legal notice to the public and prevents others from using similar marks that could cause confusion."
  },
  {
    question: "Is trademark registration mandatory for doing business?",
    answer: "Registration is not mandatory to start a business, but it is highly recommended. Without it, you only have limited 'Common Law' rights, which are much harder and more expensive to enforce in court compared to registered rights."
  },
  {
    question: "What is the difference between trademark registration and company registration?",
    answer: "Company registration (MCA) grants you a legal entity to do business. Trademark registration (IPR) grants you exclusive rights to the name or logo under which you trade. They are two separate legal processes handled by different government departments."
  },
  {
    question: "How do I know if my trademark registration is successful?",
    answer: "A registration is successful when the Registrar issues the 'Registration Certificate'. This typically happens after the mark has been advertised in the Trademark Journal and no third party has successfully opposed it within 4 months."
  },
  {
    question: "Can I register a trademark if I havent started using it yet?",
    answer: "Yes, you can file on a 'Proposed to be Used' basis. You can reserve the name today and start your business later. However, you must eventually use it in commerce to maintain the registrations validity."
  },
  {
    question: "What are the common reasons for the failure of registration?",
    answer: "The most common reasons are being too 'Descriptive' (e.g., calling a computer 'Smart Laptop'), being 'Deceptive' (misleading quality), or being 'Confusingly Similar' to an earlier mark already on the registry."
  },
  {
    question: "Does trademark registration protect my brand name as a domain name?",
    answer: "Indirectly, yes. While you must register the domain separately, having a registered trademark gives you a strong legal ground to reclaim a domain through ICANNs UDRP process if someone else is 'cybersquatting' on it."
  },
  {
    question: "How much time does the registration certificate remain valid?",
    answer: "In India, the certificate is valid for 10 years from the date of the original application. You must apply for renewal during the final year of this 10 year period to keep the protection active."
  },
  {
    question: "Can I register multiple logos under one trademark registration?",
    answer: "No, each registration is for a single mark. If you have three different logos, you must file three separate applications. However, a 'Series Mark' application can sometimes cover minor variations of the same mark."
  },
  {
    question: "How does IPR Karo help in the trademark registration process?",
    answer: "We handle the entire end to end legal burden. From initial search and classification to drafting, filing, and managing registry communications, our experts ensure your mark navigates the bureaucracy with maximum success rate."
  }
];

export default function WhatIsTrademarkRegistrationPage() {
  const breadcrumbItems = [
    { label: "What is Trademark Registration", href: "/what-is-trademark-registration" },
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
        "name": "What is Trademark Registration",
        "item": "https://www.iprkaro.com/what-is-trademark-registration"
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
    "headline": "What is Trademark Registration? The Complete Guide 2026",
    "description": "Unlock the secrets of brand protection. A comprehensive guide on what trademark registration is, why it is necessary, and its strategic benefits for Indian businesses.",
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
      "@id": "https://www.iprkaro.com/what-is-trademark-registration"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Corporate Brand Registration Services",
    "image": "https://www.iprkaro.com/assets/what-is-trademark-registration-og.jpg",
    "description": "Premium industrial grade solution for securing intellectual property rights in the Indian market.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "5890"
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
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
              <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>What is Trademark Registration?</span> The Official Guide
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
              Demystifying the path to brand sovereignty. Learn why trademark registration is the single most important investment for any growing business in the Bharat of 2026.
            </p>
            <Link href="/contact-us">
              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                Register Your Brand Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

            {/* Left Column: TOC */}
            <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-[72px] z-20">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: Defining Trademark Registration in Bharat</h2>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">
                    While many entrepreneurs understand the core value of a Brand, few truly grasp the profound legal transformation that occurs during <strong>trademark registration</strong>. It is the meticulous process of taking a creative identifying mark — a name, a logo, or a slogan — and formally submitting it to the sovereign state for rigorous verification and official protection. In simple terms, registration is the critical difference between merely claiming you own a brand and conclusively proving you own it through a government-issued legal title.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">
                    In the highly competitive and often litigious Indian market, your brand identifier is your commercial front door. Registration is simultaneously the lock and the security system combined. It fundamentally shifts the burden of proof from you to the infringer. Without it, you remain vulnerable to passing off, where unscrupulous competitors can piggyback on your hard-earned reputation with minimal legal consequence.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">
                    The registration process in India is governed by the Trade Marks Act, 1999, and is administered by the Controller General of Patents, Designs and Trade Marks under the Ministry of Commerce. The process involves multiple stages including formalities review, substantive examination, publication in the Journal, and the opposition window, each designed to ensure that only truly distinctive and non-conflicting marks receive the coveted registration certificate.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">
                    At IPR Karo, we view registration as the Constitution of your brand. It definitively defines your rights, firmly sets your boundaries, and provides the robust legal mechanism for your defense. This guide takes a comprehensive deep dive into <strong>what is trademark registration</strong>, ensuring that you enter the IP arena fully equipped to confidently scale your vision in Bharat.
                  </p>
                  <div className="bg-[#6E5E93]/10 border-l-8 border-[#0C002B] p-10 my-10 rounded-2xl shadow-inner">
                    <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                      "Filing a trademark is a hope. Registering a trademark is a certainty. Registration completes the journey from creative spark to legally protected commercial asset."
                    </p>
                  </div>
                </section>

                <section id="procedural-meaning" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Procedural Core: What Happens at the Registry?</h2>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">
                    To truly answer what is trademark registration, we must look at the departmental mechanics. When an application is filed, it undergoes a rigorous three stage check:
                  </p>
                  <div className="space-y-6 my-10">
                    <div className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                      <FontAwesomeIcon icon={faTasks} className="w-6 h-6 text-[#6E5E93] shrink-0" />
                      <p className="text-sm font-medium text-gray-800">Formalities Check: The registry ensures all documents (COI, MSME, Power of Attorney) are in order. This is the structural verification.</p>
                    </div>
                    <div className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                      <FontAwesomeIcon icon={faGavel} className="w-6 h-6 text-[#6E5E93] shrink-0" />
                      <p className="text-sm font-medium text-gray-800">Examination: A government officer (Examiner) checks for legal conflicts under Section 9 (Absolute Grounds) and Section 11 (Relative Grounds).</p>
                    </div>
                    <div className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                      <FontAwesomeIcon icon={faEye} className="w-6 h-6 text-[#6E5E93] shrink-0" />
                      <p className="text-sm font-medium text-gray-800">Public Scrutiny: The mark is published in the Journal for 4 months. This is where the public has the right to file an Opposition.</p>
                    </div>
                  </div>
                </section>

                <section id="common-law-gap" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Bridge: Common Law vs. Statutory Protection</h2>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">
                    In India, an unregistered user has what is known as Common Law rights. You can sue for passing off, but you must painstakingly prove three demanding things: you have established a reputation, the other person deliberately caused marketplace confusion, and you actually suffered measurable commercial damage. This is a mountain of complex evidence that is incredibly expensive to produce in court and can take years to adjudicate.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">
                    Consider the practical reality: in a passing off suit, you need evidence of sales records, advertising expenditure, customer testimonials, and trade volume to establish your goodwill. This alone can cost lakhs of rupees in legal preparation fees. Many small businesses simply cannot afford to pursue justice through the Common Law route.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800 font-bold">
                    Registration provides Statutory protection. In an Infringement suit (the powerful tool available exclusively for registered owners), you do not have to prove your reputation at all. The registration certificate speaks for itself. This single fundamental shift saves businesses lakhs of rupees in legal fees and years of precious time in court proceedings.
                  </p>
                </section>

                <section id="the-certificate" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Registration Certificate: Your Brands Birth Certificate</h2>
                  <p className="mb-6 leading-relaxed text-lg text-gray-800">
                    When you answer what is trademark registration, you are essentially describing the path to obtaining the elusive <strong>Form TM-R</strong>. Here is what the certificate represents:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 my-10 text-center">
                    <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                      <FontAwesomeIcon icon={faCertificate} className="w-6 h-6 text-[#6E5E93] mb-4" />
                      <h5 className="font-bold">Government Title</h5>
                      <p className="text-xs opacity-70">A formal document issued by the Registrar confirming your ownership.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                      <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 text-[#6E5E93] mb-4" />
                      <h5 className="font-bold">Legal Immunity</h5>
                      <p className="text-xs opacity-70">Protects you against counter claims and provides a platform for litigation.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                      <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 text-[#6E5E93] mb-4" />
                      <h5 className="font-bold">Trust Signal</h5>
                      <p className="text-xs opacity-70">Shows customers and investors that your brand is recognized by the state.</p>
                    </div>
                  </div>
                </section>

                <section id="financial-benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Strategic Financial Gains of Trademark Registration</h2>
                  <p className="mb-4 leading-relaxed text-lg text-gray-800">
                    Registration is not just a cost it is a profit center. Modern businesses leverage their trademark registration to unlock new revenue streams:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 my-10">
                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                      <FontAwesomeIcon icon={faHandHoldingUsd} className="w-6 h-6 text-blue-600 mb-4 mx-auto" />
                      <h5 className="font-bold">Franchising</h5>
                      <p className="text-xs opacity-70">Allow others to use your name in exchange for royalty payments.</p>
                    </div>
                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                      <FontAwesomeIcon icon={faBuilding} className="w-6 h-6 text-blue-600 mb-4 mx-auto" />
                      <h5 className="font-bold text-gray-800">Sellability</h5>
                      <p className="text-xs opacity-70">A registered IP makes your company more attractive to buyers and investors.</p>
                    </div>
                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                      <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 text-blue-600 mb-4 mx-auto" />
                      <h5 className="font-bold text-gray-800">Collateral</h5>
                      <p className="text-xs opacity-70">Some banks in India accept well known registered trademarks as security for loans.</p>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
                  <div className="space-y-8 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm text-gray-800">
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

                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                    <div className="py-16 bg-[#0C002B] rounded-3xl relative overflow-hidden">
                        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px]" />
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Trusted by <span className="text-[#FFB703]">Entrepreneurs Across India</span></h2>
                            <p className="text-white/70 max-w-2xl mx-auto text-center mb-12">See how trademark registration through IPR Karo gave these businesses the legal edge they needed.</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">DG</div>
                                        <div><h3 className="text-white font-bold">Deepak Gupta</h3><p className="text-white/50 text-xs">CEO, FinTech Startup</p></div>
                                    </div>
                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                    <p className="text-white/80 text-sm italic">&quot;We were operating without registration for 2 years. A competitor copied our app name and we had no legal recourse. IPR Karo registered us within months and we successfully sent a cease-and-desist!&quot;</p>
                                </div>
                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">SM</div>
                                        <div><h3 className="text-white font-bold">Sunita Menon</h3><p className="text-white/50 text-xs">Director, Organic Skincare Brand</p></div>
                                    </div>
                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                    <p className="text-white/80 text-sm italic">&quot;I finally understood the difference between common law and statutory rights after consulting IPR Karo. The registration certificate gave us the legal standing to license our brand to distributors nationally.&quot;</p>
                                </div>
                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">RP</div>
                                        <div><h3 className="text-white font-bold">Rohit Patel</h3><p className="text-white/50 text-xs">Founder, Cloud Kitchen Chain</p></div>
                                    </div>
                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                    <p className="text-white/80 text-sm italic">&quot;IPR Karo handled all 3 of our cloud kitchen brand registrations end-to-end. Their team explained every milestone clearly and we got our certificates faster than expected. Best IP partner!&quot;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32 text-gray-800">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Nishkarsh: Your Journey to Official Recognition</h2>
                  <p className="mb-4 leading-relaxed text-xl text-center">
                    Understanding <strong>what is trademark registration</strong> is the profound realization that your brand genuinely deserves professional legal protection. It is a sign of deep respect for your own creativity and a firm commitment to your future customers. In the current era of Bharat&apos;s accelerating economic dominance, registration is the passport that allows your brand to travel safely across the world.
                  </p>
                  <p className="mb-4 leading-relaxed text-xl text-center">
                    IPR Karo is honored to be the bridge that helps ambitious entrepreneurs cross the gap between a pending idea and a fully registered asset. From the first comprehensive search to the final registration certificate, we handle the legal complexities so you can focus exclusively on building your commercial empire. Secure your identity, claim your monopoly, and build a future that is officially and uniquely yours.
                  </p>
                </section>

                {/* Final CTA Strip */}
                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Make It Official Today</h2>
                    <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Transform your brand from a commercial identifier into a legally protected asset. Start your trademark registration journey with the experts at IPR Karo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                          Apply for Registration
                        </button>
                      </Link>
                      <a href="tel:+919289707648">
                        <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-5 px-14 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                          Attorney Consult
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <aside className="hidden lg:block space-y-10 sticky top-32">

              <div className="bg-[#160049] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Legal Shield</h3>
                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-white">
                  Did you know a **Registered Trademark** is valid for 10 years and can be renewed forever? Secure your legacy now.
                </p>
                <Link href="/contact-us" className="block relative z-10">
                  <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                    Start Registration
                  </button>
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-800">
                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4 text-gray-800">Related Topics</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/what-is-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Definition of Trademark</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/registration-of-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Step-by-Step Filing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-registration-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Market Overview: Bharat</span>
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
