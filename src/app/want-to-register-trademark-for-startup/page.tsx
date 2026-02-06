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
  faScaleBalanced
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Want to Register Trademark for Startup in India? (2026 Guide)',
  description: 'Learn how to register a trademark for your startup in India. Get a 50% discount on government fees, fast-track processing, and expert brand protection strategies.',
  keywords: [
    'want to register trademark for startup',
    'trademark for startups india',
    'startup trademark benefits',
    'dpiit startup trademark fee',
    'trademark registration for new business',
    'brand protection for startups',
    'startup intellectual property'
  ],
  openGraph: {
    title: 'Registering a Trademark for Your Startup: The Ultimate Guide',
    description: 'Secure your startup\'s future with trademark registration. Learn about fee discounts and fast-track processing for DPIIT recognized startups.',
    url: 'https://www.iprkaro.com/want-to-register-trademark-for-startup',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/want-to-register-trademark-for-startup',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Why Startups Need Trademarks' },
  { id: 'startup-benefits', title: 'Government Benefits & Fees' },
  { id: 'registration-process', title: 'Step-by-Step for Startups' },
  { id: 'documents-checklist', title: 'Required Documents' },
  { id: 'naming-strategy', title: 'Naming & Class Strategy' },
  { id: 'industry-classification', title: 'Industry-Specific Classes' },
  { id: 'global-protection', title: 'Global Brand Protection' },
  { id: 'legal-enforcement', title: 'Enforcement & Litigation' },
  { id: 'assignment-licensing', title: 'IP Monetization' },
  { id: 'common-mistakes', title: 'Pitfalls to Avoid' },
  { id: 'funding-and-ip', title: 'IP & Investor Readiness' },
  { id: 'future-of-ip', title: 'Future of Brand Protection' },
  { id: 'faqs', title: 'FAQs for Startups' },
];

const faqs = [
  {
    question: "Do startups get a discount on trademark fees?",
    answer: "Yes, recognized startups (DPIIT) and MSMEs (Udyam) get a 50% reduction in government filing fees. Instead of ₹9,000, the fee is ₹4,500 per class."
  },
  {
    question: "How long does the trademark process take for startups?",
    answer: "While the standard process takes 6 to 12 months, recognized startups can opt for 'Fast-Track Examination,' potentially reducing the time significantly."
  },
  {
    question: "Can I use the ™ symbol immediately?",
    answer: "Yes, you can use the ™ symbol the moment you receive the application number, which usually happens within 24 hours of filing with IPR Karo."
  },
  {
    question: "What is the role of DPIIT recognition in trademarks?",
    answer: "DPIIT recognition is the gateway to fee concessions and expedited examination. It proves your status as a startup to the Trademark Registry."
  },
  {
    question: "Should I file a trademark for the logo or the name?",
    answer: "Ideally both. However, startups often start with the brand name (Word Mark) as it provides broader protection regardless of design changes."
  },
  {
    question: "Can I sell my startup's trademark?",
    answer: "Absolutely. A trademark is an asset. Many startups are acquired primarily for their protected brands and intellectual property."
  },
  {
    question: "What if my startup name is descriptive?",
    answer: "Descriptive names (like 'Fast Delivery') are hard to trademark. We recommend 'Arbitrary' or 'Coined' words for better legal protection."
  },
  {
    question: "What is a 'User Affidavit'?",
    answer: "If you've been using your brand before filing, you must submit an affidavit with evidence (invoices, ads) to claim 'prior use' rights."
  },
  {
    question: "Is one class enough for my startup?",
    answer: "Not always. For example, a food-tech startup might need Class 30 (food), Class 39 (delivery), and Class 42 (software/app)."
  },
  {
    question: "Can I register a global trademark directly?",
    answer: "No, you must have an Indian application filed first. Then you can use the Madrid Protocol to apply in multiple countries simultaneously."
  },
  {
    question: "What is the cost of expedited examination for startups?",
    answer: "The government fee for expedited examination for a recognized startup is ₹20,000 per class, in addition to the initial filing fee."
  },
  {
    question: "Can an LLP and a Private Limited Company both get startup benefits?",
    answer: "Yes, both LLPs and Private Limited Companies are eligible for DPIIT recognition and subsequent trademark fee benefits."
  },
  {
    question: "What happens if my trademark is opposed?",
    answer: "We file a counter-statement within 2 months. The case then moves to evidence and hearings. Our team represents you throughout this legal process."
  },
  {
    question: "Can I change my startup's trademark after filing?",
    answer: "Minor alterations can be made via Form TM-M, but any substantial change to the logo or name requires a fresh application."
  },
  {
    question: "What is the validity of a trademark registration?",
    answer: "A trademark is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years by paying the renewal fee."
  }
];

export default function StartupTrademarkPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Register Trademark for Startup", href: "/want-to-register-trademark-for-startup" },
  ];

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
    "headline": "Want to Register a Trademark for Your Startup? The 2026 Legal Guide",
    "description": "Exhaustive guide for startups on trademark registration. Cover fees, DPIIT benefits, legal processes, and brand strategy for long-term growth.",
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
    "datePublished": "2026-02-04",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iprkaro.com/want-to-register-trademark-for-startup"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Startup Trademark Registration Service",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1850"
    }
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
        "name": "Want to Register Trademark for Startup",
        "item": "https://www.iprkaro.com/want-to-register-trademark-for-startup"
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               Want to Register <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark for Startup?</span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
               Secure your brand identity and unlock government benefits. Join 1500+ startups that have protected their logo and name with IPR Karo's expert legal guidance.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Start Registration Now
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12 max-w-8xl">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-4 md:gap-8 mt-8 items-start">
            {/* Table of Contents Column */}
            <div className="hidden lg:block sticky top-32">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Column */}
            <div className="min-w-0">
               {/* Mobile TOC */}
               <div className="lg:hidden mb-6 sticky top-24 z-20">
                   <TableOfContents sections={tocSections} orientation="horizontal" />
               </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-nunito">
                
                <section id="introduction" className="mb-20 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[#0C002B] mb-8 border-b-4 border-[#FFB703] pb-4 inline-block">Why Startups Need Trademark Protection Early</h2>
                  <p className="mb-8 leading-relaxed text-xl">
                    In the aggressive landscape of the Indian startup ecosystem, brand identity is often the most valuable asset an entrepreneur owns. You spend countless hours brainstorming the perfect name, designing a logo that resonates with your vision, and building a reputation in the market. However, without a registered trademark, you are building your castle on sand. Digital disruption and the ease of reaching millions of customers overnight have made brand theft more common than ever.
                  </p>
                  <p className="mb-8 leading-relaxed text-lg">
                    For a startup, a trademark is not just a legal shield; it is a business imperative. It distinguishes your innovative services from those of established giants and fellow contenders. It creates a sense of trust and professionalism that is crucial during the early stages of market entry. Many founders delay intellectual property registration to focus on product-market fit, only to find that another entity has already occupied their brand name space, leading to expensive rebranding or legal battles that can sink a young company.
                  </p>
                  <p className="mb-8 leading-relaxed text-lg">
                    The Importance of "First to Use" vs. "First to File": In India, the trademark law follows a combination of both principles. While being the first to file gives you a significant advantage in the registration process, the common law principle of 'prior use' also holds weight. Startups often begin operations informally on social media or local markets before formalizing their legal structure. Documenting this initial use through invoices, website domains, and advertising screenshots is vital. A registered trademark streamlines this by providing a prima facie evidence of ownership.
                  </p>
                  <p className="mb-8 leading-relaxed text-lg">
                    Securing Venture Funding: If you "want to register trademark for startup" to attract investment, you are making a smart move. Investors, especially in the Seed and Series A stages, conduct thorough due diligence on intellectual property. They want to ensure that the brand they are putting money into is legally secure and that no third party can stop the company's operations due to infringement. A clean IP portfolio, starting with a registered trademark, significantly increases your valuation and investor confidence.
                  </p>
                  <div className="bg-[#0C002B] p-12 my-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
                    <h4 className="text-[#FFB703] font-bold text-3xl mb-6 relative z-10">Strategic Insight</h4>
                    <p className="text-xl text-white leading-relaxed relative z-10 italic">
                      "Startups that overlook trademark registration often pay 10x more in legal settlement costs within Three years of launch. Brand protection is not a legal cost; it is a business insurance policy that pays dividends during scaling."
                    </p>
                  </div>
                </section>

                <section id="startup-benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Unlocking Government Benefits: 50% Fee Subsidy</h2>
                   <p className="mb-4 leading-relaxed text-base">
                      Recognizing the importance of IP in the digital economy, the Government of India offers massive incentives for startups. Under the 'Startup India' initiative, recognized entities (DPIIT) are eligible for a 50% discount on the official government filing fee.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 my-8">
                      <div className="p-5 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-center text-center">
                         <h4 className="font-bold text-purple-900 text-lg mb-1">Fee Rebate</h4>
                         <p className="text-purple-800 text-xs">₹4,500 instead of ₹9,000 for online filing if you have a DPIIT Recognition or MSME certificate.</p>
                      </div>
                      <div className="p-5 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-center text-center">
                         <h4 className="font-bold text-purple-900 text-lg mb-1">Fast-Track</h4>
                         <p className="text-purple-800 text-xs">Eligible for 'Expedited Examination' to get your mark processed faster than standard applications.</p>
                      </div>
                   </div>
                   <h3 className="text-3xl font-bold text-[#160049] mb-6">The SIPP Scheme (Scheme for IPR Protection)</h3>
                   <p className="mb-8 leading-relaxed text-lg">
                     Under the Startup Intellectual Property Protection (SIPP) scheme, the government facilitates free legal assistance. Recognized startups can work with empaneled 'facilitators' who will handle the search, drafting, and filing of your trademark application. While the government pays the professional fees of these facilitators, the startup only needs to pay the statutory government fee.
                   </p>
                   <div className="bg-red-50 p-12 rounded-[2rem] border-l-[16px] border-red-600 my-12 shadow-inner">
                    <h4 className="text-red-900 font-bold text-2xl mb-4 uppercase tracking-tighter">Immediate Action Required</h4>
                    <p className="text-red-800 leading-relaxed text-lg italic">
                      To avail these benefits, you must possess a valid DPIIT Recognition Certificate. The registration must be done through the Startup India portal (startupindia.gov.in). If you don't have this recognition yet, IPR Karo can assist you in obtaining it before we proceed.
                    </p>
                  </div>
                </section>

                <section id="registration-process" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">The Step-by-Step Registration Journey</h2>
                  <div className="space-y-6 my-10">
                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-[#FFB703] text-[#0C002B] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">1</div>
                       <div>
                          <h4 className="font-bold text-[#0C002B] text-lg mb-1">Advanced AI Search</h4>
                          <p className="leading-relaxed text-sm">We crawl the IP India database, including phonetic and Vienna Code matches, to ensure your name is unique and registrable.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-[#FFB703] text-[#0C002B] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">2</div>
                       <div>
                          <h4 className="font-bold text-[#0C002B] text-lg mb-1">E-Filing (Within 24 Hours)</h4>
                          <p className="leading-relaxed text-sm">Once the search is clear, we file Form TM-A electronically. You receive your application number on the same day.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-[#FFB703] text-[#0C002B] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">3</div>
                       <div>
                          <h4 className="font-bold text-[#0C002B] text-lg mb-1">Examination & Objections</h4>
                          <p className="leading-relaxed text-sm">A government examiner reviews the mark. If any objections (Section 9/11) are raised, our legal team drafts a persuasive response.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-[#FFB703] text-[#0C002B] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">4</div>
                       <div>
                          <h4 className="font-bold text-[#0C002B] text-lg mb-1">Journal Publication</h4>
                          <p className="leading-relaxed text-sm">Your mark is published in the TM Journal for 4 months. This is the 'Opposition Period' where the public can view your claim.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-[#FFB703] text-[#0C002B] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">5</div>
                       <div>
                          <h4 className="font-bold text-[#0C002B] text-lg mb-1">Final Registration</h4>
                          <p className="leading-relaxed text-sm">If no one opposes, you receive your Digital Registration Certificate. You can now use the ® symbol with pride.</p>
                       </div>
                    </div>
                  </div>
                </section>

                <section id="documents-checklist" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Required Documents Checklist</h2>
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 h-full">
                      <h4 className="font-bold text-[#0C002B] text-lg mb-3 underline">For Individual Founders</h4>
                      <ul className="space-y-2.5">
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4" /> Aadhaar Card or Voter ID</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4" /> PAN Card (Personal)</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4" /> Soft copy of Logo/Brand Name</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4" /> User Affidavit (for prior use)</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 h-full">
                      <h4 className="font-bold text-[#0C002B] text-lg mb-3 underline">For Companies / LLPs</h4>
                      <ul className="space-y-2.5">
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4" /> COI / Partnership Deed</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4" /> MSME / DPIIT Recognition</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4" /> Power of Attorney (Plain Paper)</li>
                        <li className="flex items-center gap-2 text-sm"><FontAwesomeIcon icon={faCheck} className="text-[#FFB703] w-4" /> PAN Card of the Entity</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="naming-strategy" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Naming & Class Strategy: The Power of Distinctiveness</h2>
                   <p className="mb-4 leading-relaxed text-base">
                     Not every name is protectable. In the legal world, trademarks exist on a 'Spectrum of Strength'.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 my-8">
                     <div className="p-5 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm">
                        <h4 className="font-bold text-[#0C002B] text-lg mb-1">Coined Marks</h4>
                        <p className="text-gray-600 text-xs italic">Words like 'Zomato' that have no dictionary meaning. These are the strongest assets because they are inherently unique.</p>
                     </div>
                     <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                        <h4 className="font-bold text-[#0C002B] text-lg mb-1">Arbitrary Marks</h4>
                        <p className="text-gray-600 text-xs italic">Common words in an uncommon context, like 'Apple' for computers. Highly distinctive and easy to enforce.</p>
                     </div>
                   </div>
                </section>

                <section id="industry-classification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Industry-Specific Classification Guide</h2>
                   <p className="mb-4 leading-relaxed text-base">
                     For a startup, choosing the right class is as important as the name itself. Here is a breakdown for key startup sectors in the 2026 economy.
                   </p>
                   <div className="grid md:grid-cols-3 gap-4 my-8">
                      <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                         <h4 className="font-bold text-[#0C002B] text-lg mb-1">FinTech</h4>
                         <p className="text-gray-600 text-xs">Class 36 (Finance) + Class 9 (Payments app) + Class 42 (Encryption Software)</p>
                      </div>
                      <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                         <h4 className="font-bold text-[#0C002B] text-lg mb-1">EdTech</h4>
                         <p className="text-gray-600 text-xs">Class 41 (Education) + Class 38 (Streaming) + Class 9 (Course Materials)</p>
                      </div>
                      <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                         <h4 className="font-bold text-[#0C002B] text-lg mb-1">D2C</h4>
                         <p className="text-gray-600 text-xs">Class 35 (Retail platform) + Class 25 (Apparel) + Class 3 (Skincare)</p>
                      </div>
                   </div>
                   <p className="mb-8 leading-relaxed text-lg">
                     Failure to file in secondary classes (like Class 35 for a manufacturer) is a common gateway for 'Trademark Trolls' to occupy your digital space. Our Multi-Class Audit ensures you own the entire ecosystem around your name.
                   </p>
                </section>

                <section id="global-protection" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Global Brand Protection: Madrid Protocol</h2>
                   <p className="mb-4 leading-relaxed text-base">
                     Indian startups are global from Day 1. The Madrid Protocol allows you to use your Indian application as a 'Base' to apply in up to 130 countries with a single application.
                   </p>
                   <div className="bg-[#160049] p-8 rounded-2xl text-white shadow-xl my-8">
                      <h4 className="text-xl font-bold mb-4">The Madrid Advantage</h4>
                      <ul className="space-y-3 text-sm">
                        <li className="flex gap-3"><FontAwesomeIcon icon={faGlobe} className="text-[#FFB703] mt-1 w-4 h-4" /> One application in one language (English)</li>
                        <li className="flex gap-3"><FontAwesomeIcon icon={faShieldAlt} className="text-[#FFB703] mt-1 w-4 h-4" /> Protected across 130+ countries</li>
                        <li className="flex gap-3"><FontAwesomeIcon icon={faSync} className="text-[#FFB703] mt-1 w-4 h-4" /> Centralized management of renewals</li>
                      </ul>
                   </div>
                </section>

                <section id="legal-enforcement" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Enforcement & Litigation: Protecting Your Moat</h2>
                   <p className="mb-4 leading-relaxed text-base">
                     A trademark is value-less if not enforced. For a startup, this means active monitoring of domains, social handles, and app stores.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 my-8">
                      <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                         <h5 className="font-bold text-[#0C002B] text-lg mb-1">Notice & Takedown</h5>
                         <p className="text-gray-600 text-xs">Reclaiming domains from cybersquatters via UDRP/INDRP and social media handle transfers.</p>
                      </div>
                      <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                         <h5 className="font-bold text-[#0C002B] text-lg mb-1">Cease & Desist</h5>
                         <p className="text-gray-600 text-xs">Sending formal legal notices to competitors using similar marks in bad faith.</p>
                      </div>
                   </div>
                </section>

                <section id="assignment-licensing" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">IP Monetization: Assignment and Licensing</h2>
                   <p className="mb-4 leading-relaxed text-base">
                     As your startup grows, your trademark becomes an asset. Assignment is common when transferring rights to the company, and licensing is key for franchise models.
                   </p>
                </section>

                <section id="common-mistakes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">Navigating the Minefield: Pitfalls to Avoid</h2>
                   <p className="mb-4 leading-relaxed text-base">
                     Avoid factors like waiting too long to file, ignoring phonetic results, and filing as an individual instead of the corporate entity.
                   </p>
                </section>

                <section id="funding-and-ip" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">IP & Investor Readiness</h2>
                   <p className="mb-4 leading-relaxed text-base">
                     Investors valuation increases by 20-30% for startups with clean, registered IP. A clear chain of title is a major trust signal.
                   </p>
                </section>

                <section id="future-of-ip" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-4">The Future of Brand Protection: AI and IP</h2>
                   <p className="mb-4 leading-relaxed text-base">
                     In 2026, the intersection of AI and IP is redefining brand protection. From AI searches to blockchain verification, we help you stay ahead.
                   </p>
                   <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 shadow-sm my-8">
                      <h4 className="text-lg font-bold text-amber-900 mb-4 uppercase tracking-widest text-center">Founder's Masterclass</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                         <div className="p-4 bg-white rounded-xl shadow-sm border border-amber-50">
                            <h5 className="font-bold text-base mb-1 text-[#0C002B]">Active Monitoring</h5>
                            <p className="text-gray-600 text-xs">Don't just register; watch. Use automated tools to monitor whenever a similar name is used.</p>
                         </div>
                         <div className="p-4 bg-white rounded-xl shadow-sm border border-amber-50">
                            <h5 className="font-bold text-base mb-1 text-[#0C002B]">Defensive Filing</h5>
                            <p className="text-gray-600 text-xs">Register secondary names and domains that a competitor might use.</p>
                         </div>
                      </div>
                   </div>
                </section>
  {/* FAQ Section */}
                <section id="faqs" className="bg-gray-50 py-16 mt-16 scroll-mt-24 md:scroll-mt-32">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#160049] mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-32">
                
                {/* CTA Container */}
                <div className="bg-[#0C002B] p-6 rounded-2xl shadow-2xl border border-gray-800 text-white text-center transform hover:scale-[1.02] transition-transform">
                  <div className="w-12 h-12 bg-[#FFB703] rounded-xl flex items-center justify-center mx-auto mb-4 rotate-3">
                    <FontAwesomeIcon icon={faRocket} className="text-[#0C002B] text-2xl w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fast Filing</h3>
                  <p className="text-xs opacity-80 mb-6 leading-relaxed">
                    Get your startup trademark application filed within 24 hours. Start using ™ today!
                  </p>
                  <Link href="/contact-us" className="block w-full">
                    <button className="w-full bg-[#FFB703] hover:bg-[#FFA000] text-[#0C002B] font-bold py-3 px-4 rounded-xl transition-all shadow-lg text-sm">
                      Apply Now
                    </button>
                  </Link>
                  <div className="mt-4 pt-4 border-t border-white/10">
                     <p className="text-[10px] text-gray-400 mb-1.5 uppercase tracking-widest font-bold">Expert Support</p>
                     <a href="tel:+919289707648" className="text-base font-bold hover:text-[#FFB703] transition-colors flex items-center justify-center">
                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-xs w-4 h-4" /> +91-9289707648
                     </a>
                  </div>
                </div>

                {/* Related Pages Container */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-[#0C002B] mb-6 flex items-center">
                    <FontAwesomeIcon icon={faLightbulb} className="mr-3 text-[#FFB703] w-4 h-4" />
                    Related Guides
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/how-to-register-trademark" className="text-gray-600 hover:text-[#0C002B] flex items-center group font-medium text-sm">
                        <span className="w-2 h-2 rounded-full bg-gray-300 mr-3 group-hover:bg-[#FFB703]"></span>
                        How to Register TM
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services/trademark-registration" className="text-gray-600 hover:text-[#0C002B] flex items-center group font-medium text-sm">
                        <span className="w-2 h-2 rounded-full bg-gray-300 mr-3 group-hover:bg-[#FFB703]"></span>
                        Trademark Filing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-[#0C002B] mb-2 w-4 h-4" />
                      <p className="text-[10px] font-bold uppercase text-gray-500">100% Secure</p>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                      <FontAwesomeIcon icon={faCertificate} className="text-[#0C002B] mb-2 w-4 h-4" />
                      <p className="text-[10px] font-bold uppercase text-gray-500">Certified</p>
                   </div>
                </div>

            </div>
            
          </div>
          
        </div>

      

        {/* Final CTA Container */}
        <div className="container mx-auto px-4 max-w-6xl py-16">
          <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Protect Your Brand?</h2>
              <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto leading-relaxed">
                Join 1500+ startups who secured their brand with IPR Karo. Get expert assistance and same-day filing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <button className="bg-[#FFB703] hover:bg-[#FFA000] text-[#0C002B] font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base">
                    Start Registration Now
                  </button>
                </Link>
                <a href="tel:+919289707648">
                   <button className="bg-transparent border-2 border-white/50 hover:bg-white hover:text-[#0C002B] text-white font-bold py-3 px-10 rounded-full transition-all text-base flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="mr-2.5 w-4 h-4" />
                    Call Experts
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
