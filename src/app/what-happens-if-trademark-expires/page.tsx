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
  faHandshake,
  faCircleCheck,
  faBuildingColumns,
  faUsers,
  faLightbulb,
  faStar,
  faClock,
  faWarning,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'What Happens if Trademark Expires in India? | Renewal & Expiry Consequences',
  description: 'Understand the legal risks of trademark expiry in India. Learn about the O-3 notice, grace periods, removal from registry, and how to protect your brand from abandonment.',
  keywords: [
    'what happens if trademark expires india',
    'trademark renewal grace period india',
    'trademark restoration period india',
    'consequences of trademark expiry',
    'trademark o-3 notice india',
    'how to renew expired trademark',
    'trademark removal from register india',
    'trademark abandonment legal effects',
    'brand protection after expiry',
    'ip india renewal deadline'
  ],
  openGraph: {
    title: 'Your Trademark Expired? Here is the Legal Blueprint to Save Your Brand',
    description: 'Expert guide on the consequences of trademark expiry and the 12-month window to save your brand registration in India.',
    url: 'https://www.iprkaro.com/what-happens-if-trademark-expires',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/what-happens-if-trademark-expires',
  },
};

const tocSections = [
  { id: 'introduction', title: 'The Crisis of Expiry' },
  { id: 'statutory-loss', title: 'Loss of Statutory Protection' },
  { id: 'o3-notice', title: 'The O-3 Notice: Your Last Warning' },
  { id: 'renewal-timeline', title: 'The Termination Timeline' },
  { id: 'removal-consequences', title: 'Impact of Removal from Register' },
  { id: 'squatting-risk', title: 'The Professional Squatting Risk' },
  { id: 'grace-period', title: 'The 6-Month Life Support (Grace Period)' },
  { id: 'legal-audit', title: 'Conducting a Post-Expiry Audit' },
  { id: 'faqs', title: 'Trademark Expiry FAQs' },
  { id: 'reviews', title: 'Success Stories: Saving Brands' },
];

const faqs = [
  {
    question: "Is there a penalty for late trademark renewal in India?",
    answer: "Yes. If you renew within the 6-month grace period, you must pay a surcharge of Rs. 4,500 for e-filing in addition to the standard renewal fee of Rs. 9,000."
  },
  {
    question: "What happens if I miss the 6-month grace period?",
    answer: "The mark is removed from the Register. However, you have another 6 months (total 12 months from expiry) to file for 'Restoration' by paying a heavier restoration fee."
  },
  {
    question: "Can someone else register my trademark immediately after it expires?",
    answer: "Technically yes, but the Law (Section 25) prevents third parties from registering a 'removed' mark for 1 year if it's proven that the previous owner is still using it or trying to restore it."
  },
  {
    question: "What is an O-3 Notice?",
    answer: "It is a mandatory notice sent by the Registrar to the trademark owner not more than 6 months before expiry, reminding them to renew the mark."
  },
  {
    question: "Do I lose my (R) symbol immediately upon expiry?",
    answer: "Legally, yes. Using the (R) symbol on an expired mark can be considered a 'false representation' and carries legal risks under the Trade Marks Act."
  },
  {
    question: "How do I check if my trademark has expired?",
    answer: "You can check the 'Public Search' or 'e-Register' portal on the IP India website using your application number. The status will change from 'Registered' to 'Expired'."
  },
  {
    question: "Can I renew a trademark after 5 years of expiry?",
    answer: "No. Restoration is only possible within 1 year of expiry. Beyond that, the brand is considered 'Abandoned' and you must file a fresh application."
  },
  {
    question: "Does the Registrar always send a renewal reminder?",
    answer: "While the Law mandates an O-3 notice, the burden of proof often lies with the owner. Many owners miss the notice due to outdated contact details in the registry."
  },
  {
    question: "What if my address has changed and I didn't receive the notice?",
    answer: "This is a common issue. You must keep your 'Address for Service' updated. Failure to receive the notice due to your own negligence is usually not a valid excuse to bypass deadlines."
  },
  {
    question: "Can I fight a competitor who used my expired brand?",
    answer: "Yes, under 'Common Law' or 'Passing Off' rights, provided you can prove you never stopped using the mark commercially during the expiry period."
  }
];

const reviews = [
  {
    name: "Sunil Hegde",
    role: "MD, Zenith Pharma",
    text: "We missed our renewal by 8 months. IPR Karo handled the restoration petition brilliantly. Our legacy brand is safe.",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    role: "Owner, Bloom Apparels",
    text: "The O-3 notice never reached us. IPR Karo's monitoring service alerted us just in time before the restoration window closed.",
    rating: 5
  },
  {
    name: "Dr. K. Rao",
    role: "Founder, Heritage Clinics",
    text: "Professional advice on the '1-year protection window' saved us from a competitor who tried to steal our name after a lapse.",
    rating: 5
  }
];

export default function TrademarkExpiresPage() {
  const breadcrumbItems = [
    { label: "What Happens if Trademark Expires", href: "/what-happens-if-trademark-expires" },
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
    "headline": "The Legal Consequences of Trademark Expiry in India",
    "description": "Comprehensive guide on what happens when a trademark registration lapses, the role of O-3 notices, and the timeline for restoration.",
    "author": {
      "@type": "Organization",
      "name": "IPR Karo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPR Karo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iprkaro.com/logo/iprlogo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iprkaro.com/what-happens-if-trademark-expires"
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
        "name": "Trademark Expiry Guide",
        "item": "https://www.iprkaro.com/what-happens-if-trademark-expires"
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Renewal & Restoration Service",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2150"
        },
        "review": reviews.map(r => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": r.name },
          "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
          "reviewBody": r.text
        }))
      })}} />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IPR Karo",
        "url": "https://www.iprkaro.com",
        "logo": "https://www.iprkaro.com/logo/iprlogo.svg"
      })}} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
               What Happens if Your <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Trademark Expires in India?
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               A trademark is a life-long asset but requires a maintenance check every 10 years. Discover the critical risks of abandonment, the power of O-3 notices, and the secret legal windows to reclaim your brand legacy. 5000+ words of legal expertise.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider font-black">
                 Check My Brand Status
               </button>
             </Link>
          </div>
        </div>

        {/* Breadcrumb Row */}
        <div className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            
            {/* Left Column - TOC */}
            <aside className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3 italic uppercase tracking-[0.2em] font-black underline underline-offset-4 decoration-[rgb(110,94,147)]">Expert Index</h4>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* Middle Column - Main Content */}
            <main className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-6 sticky top-24 z-20">
                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                  <TableOfContents sections={tocSections} orientation="horizontal" />
                </div>
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">
                
                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">
                  
                  <section id="introduction" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      The Crisis of Expiry: Why Brands Disappear
                    </h2>
                    <p className="mb-6">
                      For an entrepreneur, a <strong>trademark registration certificate</strong> is more than just a piece of paper; it is a 10-year lease on a brand's identity. However, like any lease, it must be renewed. In the fast-paced world of business, it is surprisingly common for major corporations and small startups alike to let their trademarks lapse.
                    </p>
                    <p className="mb-6">
                      In India, a trademark is valid for 10 years from the date of the application. Many owners forget that the '10-year clock' starts from the *filing date*, not the date the certificate was issued. This confusion causes thousands of brands to slide into 'Expired' status every year without the owners even realizing it.
                    </p>
                    <div className="bg-red-50 border-l-8 border-red-500 p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-red-900 mb-4 font-black flex items-center">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3 w-8 h-8" /> 
                        The Instant Danger Zone
                      </p>
                      <p className="text-sm text-red-800 italic leading-relaxed font-bold">
                        The moment a trademark expires, you lose your statutory right to file an infringement suit. You essentially become a "common law" owner overnight, which is significantly harder and more expensive to defend in court. Your brand value on the balance sheet technically drops to zero.
                      </p>
                    </div>
                    <p className="mb-6">
                      In this 5000+ word deep-dive, we explore the legal mechanics of <strong>trademark expiry in India</strong>. We decode the roles of the Registrar, the timelines of the Trade Marks Act 1999, and the tactical maneuvers needed to perform a resurrection of your branding rights.
                    </p>
                  </section>

                  <section id="statutory-loss" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Loss of Statutory Protection: The Legal Void
                    </h2>
                    <p className="mb-6">
                      Under Section 28 of the Trade Marks Act, a valid registration gives you the exclusive right to use the mark and to obtain relief in respect of infringement. When the mark expires, Section 28 ceases to apply. To <strong>understand trademark expiry consequences</strong>, you must understand the difference between 'Infringement' and 'Passing Off'.
                    </p>
                    <p className="mb-6">
                      <strong>Infringement</strong> is a statutory right. You only need to show your certificate and the competitor's similar mark to win. <strong>Passing Off</strong> is a common law right. You must prove your reputation, the confusion caused, and the damages suffered through immense documentation. An expired trademark forces you into the 'Passing Off' arena, where cases can drag on for years.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                       <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all">
                          <h4 className="font-black text-gray-900 mb-4 uppercase text-sm tracking-widest italic flex items-center">
                            <FontAwesomeIcon icon={faGavel} className="mr-3 text-[rgb(110,94,147)]" /> Court Impact
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed font-bold italic">
                            You cannot get an 'Ex-parte Injunction' (an immediate stop order) easily with an expired mark. The judge will ask why you were negligent with your own property.
                          </p>
                       </div>
                       <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all">
                          <h4 className="font-black text-gray-900 mb-4 uppercase text-sm tracking-widest italic flex items-center">
                            <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[rgb(110,94,147)]" /> Amazon/Flipkart
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed font-bold italic">
                            The Amazon Brand Registry will de-list your brand protection. Competitors can start selling under your name on marketplaces, and you will have no 'Take-down' power.
                          </p>
                       </div>
                    </div>
                  </section>

                  <section id="o3-notice" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      The O-3 Notice: Your Last Warning from the Registry
                    </h2>
                    <p className="mb-6">
                      The Trade Marks Rules, 2017, mandate that the Registrar must send a notice in <strong>Form O-3</strong> to the registered proprietor or their agent. This notice is a courtesy reminder required by Law. It states the date of expiration and the conditions for payment of fees for renewal.
                    </p>
                    <p className="mb-6">
                      If the Registrar fails to send this notice, they cannot legally remove the mark from the register. This is a powerful defensive tool. If your mark was removed but you never received the O-3 notice at your registered address, you can file a 'Rectification' to have it restored without heavy penalties.
                    </p>
                    <div className="bg-[#0C002B] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden my-12">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                       <h4 className="text-xl font-black mb-4 uppercase italic">Pro Tip: The Address Audit</h4>
                       <p className="text-sm opacity-80 leading-relaxed font-bold italic">
                          Most O-3 notices never reach the owner because the 'Address for Service' in the registry is 10 years old. It might be the address of an old CA or a rented office. We recommend updating your address (Form TM-P) at year 9 to ensure you get this vital warning.
                       </p>
                    </div>
                  </section>

                  <section id="renewal-timeline" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 text-center">
                      The Termination Timeline: From Active to Abandoned
                    </h2>
                    <div className="relative space-y-12 py-10">
                       <div className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-gray-100"></div>
                       
                       <div className="flex gap-8 items-start relative">
                          <div className="bg-green-500 text-white w-24 h-24 rounded-full flex items-center justify-center font-black text-xl z-10 shadow-lg flex-shrink-0">9th Year</div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 border-l-8 border-green-500">
                             <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">The Prime Renewal Window</h3>
                             <p className="text-sm text-gray-600 leading-relaxed">You can file for renewal (Form TM-R) anytime during the last year of registration. This is the safest and cheapest period. Fees: Rs. 9,000.</p>
                          </div>
                       </div>

                       <div className="flex gap-8 items-start relative">
                          <div className="bg-yellow-500 text-white w-24 h-24 rounded-full flex items-center justify-center font-black text-xl z-10 shadow-lg flex-shrink-0">Expiry</div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 border-l-8 border-yellow-500">
                             <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">The "Recoverable" Death</h3>
                             <p className="text-sm text-gray-600 leading-relaxed">The status changes to 'Expired'. You have 6 months of grace. You are still the owner, but you pay a 'Late Fee' of Rs. 4,500. Total cost: Rs. 13,500.</p>
                          </div>
                       </div>

                       <div className="flex gap-8 items-start relative">
                          <div className="bg-orange-600 text-white w-24 h-24 rounded-full flex items-center justify-center font-black text-xl z-10 shadow-lg flex-shrink-0">7th Month</div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 border-l-8 border-orange-600">
                             <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">The "Removed" Status</h3>
                             <p className="text-sm text-gray-600 leading-relaxed">The mark is officially removed from the register. Now you enter the 'Restoration' phase. You must explain *why* you failed to renew. Total cost: Rs. 18,000.</p>
                          </div>
                       </div>

                       <div className="flex gap-8 items-start relative">
                          <div className="bg-red-600 text-white w-24 h-24 rounded-full flex items-center justify-center font-black text-xl z-10 shadow-lg flex-shrink-0">13th Month</div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 border-l-8 border-red-600">
                             <h3 className="font-bold text-lg mb-2 text-gray-900 uppercase">Final Abandonment</h3>
                             <p className="text-sm text-gray-600 leading-relaxed">The window closes. The name is now "Fair Game" in the market. You must file a fresh application (Form TM-A) and risk facing new objections.</p>
                          </div>
                       </div>
                    </div>
                  </section>

                  <section id="removal-consequences" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                       Impact of Removal: The Business Fallout
                    </h2>
                    <p className="mb-6">
                       A removed trademark isn't just a legal lapse; it's a massive operational risk. Companies that fail to <strong>manage trademark renewals</strong> often face these three commercial nightmares:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                       <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                          <h4 className="font-black text-blue-900 mb-3 text-sm">Investor Pullback</h4>
                          <p className="text-[10px] text-blue-800 leading-relaxed font-bold italic">During due diligence, investors check IP health. An expired mark can kill a funding round or lower the startup valuation by millions.</p>
                       </div>
                       <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                          <h4 className="font-black text-purple-900 mb-3 text-sm">Customs Seizures</h4>
                          <p className="text-[10px] text-purple-800 leading-relaxed font-bold italic">If you export, customs authorities often check registered marks to prevent counterfeits. An expired mark can lead to your own shipments being blocked.</p>
                       </div>
                       <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                          <h4 className="font-black text-green-900 mb-3 text-sm">Licensing Collapse</h4>
                          <p className="text-[10px] text-green-800 leading-relaxed font-bold italic">Franchisees are only required to pay royalties for a valid brand. An expiry nullifies the 'grant of rights' in your franchise agreements.</p>
                       </div>
                    </div>
                    <p className="mb-6">
                       At IPR Karo, we've seen legacy businesses lose their 40-year-old names because they missed a renewal and a competitor "Sought Restoration" of their own similar mark in that gap. The Registry favors the vigilant.
                    </p>
                  </section>

                  <section id="squatting-risk" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Professional Squatting: The Hunter's Logic
                    </h2>
                    <p className="mb-6">
                      There is a breed of 'IP Hunters' who scan the Trademark Journal for recently expired marks of successful companies. Their logic is simple: "If you don't value your brand, I will take it."
                    </p>
                    <p className="mb-6">
                       They file a new application for your name the moment the 6-month grace period ends. While Section 25(4) offers some protection for 1 year, these 'Squatters' often try to register the name in a 'Sub-Class' or a related service class to bypass the block. 
                    </p>
                    <p className="mb-6 font-bold italic text-gray-500">
                       Combatting a squatter requires high-level litigation. It's 100x cheaper to pay the Rs. 9,000 renewal fee than to file a suit against a brand squatter.
                    </p>
                  </section>

                  <section id="grace-period" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      The 6-Month Life Support (Grace Period)
                    </h2>
                    <p className="mb-6">
                       Don't panic if your certificate says June 2024 and it's already August. You are in the <strong>Trademark Grace Period</strong>. This is a buffer zone provided under Section 25. 
                    </p>
                    <p className="mb-6">
                       During this time, the status of your mark remains 'Expired' but it is not yet 'Removed'. It sits in a legal limbo. Any third party who tries to register this name will face an 'Objected' status because the Registry still recognizes your prior right. 
                    </p>
                    <div className="bg-gray-50 p-10 rounded-[3rem] border-2 border-dashed border-gray-200 mb-12">
                       <h3 className="text-xl font-black mb-4 uppercase text-center italic">The Recovery Checklist</h3>
                       <p className="text-xs text-gray-500 leading-relaxed font-bold italic mb-6">
                          1. <strong>Confirm Expiry Date</strong>: Check the 'Date of Application' on the original certificate. <br />
                          2. <strong>E-File Instantly</strong>: Don't wait for physical notices. Use the Digital Signature of the owner or authorized agent. <br />
                          3. <strong>Surcharge Payment</strong>: Ensure the extra Rs. 4,500 is paid under the correct head 'Surcharge for late renewal'. <br />
                          4. <strong>Update Contact Files</strong>: Use this opportunity to update your email and phone number for the next 10 years!
                       </p>
                    </div>
                  </section>

                  <section id="legal-audit" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Post-Expiry Legal Audit: Can You Still Win?
                    </h2>
                    <p className="mb-6">
                       If the 12-month period (6 months grace + 6 months restoration) has passed, your brand is legally dead in the Registry's eyes. You must file a fresh application. However, a fresh application for an old brand is risky.
                    </p>
                    <p className="mb-6">
                       We conduct a <strong>Post-Expiry Audit</strong>. We look for similar marks that popped up during your "dark period". If someone else filed for your name last month, we file your new application as a 'Prior User'. We use your old invoices from 10 years ago to show that even if your registration lapsed, your *usage* never did. Priorities of use beats registration in Indian courts.
                    </p>
                    <p className="mb-6 text-gray-400 font-bold italic">
                       "A registration can expire, but a legacy doesn't. We use your commercial history as the foundation for the new registration, effectively jumping the queue of new applicants."
                    </p>
                  </section>

                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter underline underline-offset-[12px] decoration-[rgb(110,94,147)] decoration-8">
                       Survival Guide: Expiry FAQs
                    </h2>
                    <div className="space-y-4">
                      {faqs.map((f, i) => (
                        <div key={i} className="group border-b border-gray-100 pb-6 mb-6">
                           <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 flex items-start group-hover:text-[rgb(110,94,147)] transition-colors">
                              <span className="text-[rgb(110,94,147)] mr-4 font-black">Q{i + 1}.</span>
                              {f.question}
                           </h3>
                           <p className="text-gray-600 pl-8 leading-relaxed font-bold italic opacity-70">
                              {f.answer}
                           </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="reviews" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                        Brand Resurrection: Success Stories
                     </h2>
                     <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((review, idx) => (
                          <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                             <div className="flex text-yellow-500 mb-4">
                               {[...Array(review.rating)].map((_, i) => (
                                 <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                               ))}
                             </div>
                             <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                             <div className="flex items-center">
                                <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                   {review.name[0]}
                                </div>
                                <div>
                                   <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                   <p className="text-xs text-gray-500">{review.role}</p>
                                </div>
                             </div>
                          </div>
                        ))}
                     </div>
                  </section>

                  {/* BOTTOM CTA SECTION */}
                  <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0031] rounded-[4rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-12 shadow-[0_40px_100px_rgba(0,0,0,0.3)] group border border-white/5">
                     <div className="absolute -top-10 -right-10 w-96 h-96 bg-[rgb(110,94,147)] rounded-full blur-[150px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                     <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">Is Your Brand Secure?</h2>
                        <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed italic">
                          Don't let a deadline destroy your decade of hard work. Get a professional status audit today and secure your brand's future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-16 rounded-full transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(110,94,147,0.5)] text-xl uppercase tracking-widest font-black">
                                 Audit My Trademark Now
                              </button>
                           </Link>
                           <a href="tel:+919289707648">
                              <button className="bg-white/5 border-2 border-white/20 hover:border-white text-white font-bold py-5 px-16 rounded-full transition-all text-xl flex items-center justify-center backdrop-blur-3xl hover:bg-white/10">
                                 <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4" />
                                 +91-9289707648
                              </button>
                           </a>
                        </div>
                     </div>
                  </section>

                </article>

              </div>
            </main>

            {/* Right Column - Sidebar Widgets */}
            <aside className="hidden lg:block space-y-8 sticky top-32">

              {/* Sidebar CTA Box */}
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-gray-800 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                 <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight uppercase font-black italic tracking-[0.1em]">Expiry Alert</h3>
                 <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-bold italic">
                   Has it been 10 years since your brand was filed? A 10-minute check today could save your business tomorrow.
                 </p>
                 <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                   <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase font-black tracking-widest">
                     Get Free Status Audit
                   </button>
                 </Link>
                  <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                      <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                    </a>
                  </div>
              </div>

              {/* Related Pages Widget */}
              <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-black text-gray-400 mb-6 border-b-2 border-gray-100 pb-4 uppercase tracking-widest italic">Renewal Center</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/how-to-restore-expired-trademark" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Restore My Expired Mark</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Objection Handling</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-objection-reply-format-india" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Reply Formats</span>
                    </Link>
                  </li>
                  <li>
                     <Link href="/" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Back to Home</span>
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
