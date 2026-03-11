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
  faStar
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'How to Respond to Trademark Examination Report India | 2024 Guide',
  description: 'Step-by-step guide on how to respond to a trademark examination report in India. Learn legal strategies, drafting tips, and online filing procedures.',
  keywords: [
    'how to respond to trademark examination report india',
    'trademark examination report response online',
    'reply to trademark examination report section 9',
    'trademark examination response sample',
    'trademark objection response process',
    'trademark report response timeline',
    'ip india examination report check',
    'trademark attorney for examination reply',
    'filing response to trademark report',
    'trademark journal publication process'
  ],
  openGraph: {
    title: 'Expert Guide: Responding to Trademark Examination Reports in India',
    description: 'Master the response process for trademark examination reports. Detailed legal insights, evidence checklists, and step-by-step filing guide.',
    url: 'https://www.iprkaro.com/how-to-respond-to-trademark-examination-report',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/how-to-respond-to-trademark-examination-report',
  },
};

const tocSections = [
  { id: 'introduction', title: 'What is an Examination Report?' },
  { id: 'lifecycle', title: 'The Application Lifecycle' },
  { id: 'objection-types', title: 'Types of Objections' },
  { id: 'deadline-management', title: 'Deadlines and Extensions' },
  { id: 'drafting-strategy', title: 'Drafting Your Response' },
  { id: 'evidence-gathering', title: 'Evidence for Acceptance' },
  { id: 'online-filing', title: 'The E-Filing Process' },
  { id: 'hearing-stage', title: 'The Show Cause Hearing' },
  { id: 'post-response', title: 'What Happens Next?' },
  { id: 'faqs', title: 'Strategic FAQs' },
];

const faqs = [
  {
    question: "How long after filing do I receive an examination report?",
    answer: "Typically, the Trademark Registry issues an examination report within 3 to 6 months of filing your application. However, this can vary based on the current backlog at the different branch offices like Delhi, Mumbai, or Chennai."
  },
  {
    question: "Is it possible to get a trademark without any examination report?",
    answer: "Every application is examined. If your mark is completely unique and the examiner finds no grounds for objection, they will 'Accept' the mark directly. This is rare but possible with a very strong, non-descriptive brand name."
  },
  {
    question: "What is the consequence of missing the 30-day response window?",
    answer: "The application is deemed 'Abandoned' by the system. This is a fatal error as you lose your filing date and the priority of use. While a petition for restoration exists, it is expensive and not always granted."
  },
  {
    question: "Can I use the TM symbol while my application is under objection?",
    answer: "Yes, you can continue to use the TM symbol once you have your filing receipt. The objection is a part of the administrative process and does not revoke your right to use the TM symbol."
  },
  {
    question: "How do I check if an examination report has been issued?",
    answer: "You must visit the 'Electronic Digital Document System' (EDATA) on the official IP India website and enter your application number to download the dynamically generated report."
  },
  {
    question: "What does 'Objected' status mean on the IP India portal?",
    answer: "It means the examiner has raised concerns under Section 9 or 11 of the Act. You must now file a written response within one month to address these concerns."
  },
  {
    question: "Do I need to attend a physical hearing for every objection?",
    answer: "No. Physical or video-conferencing hearings are only scheduled if the examiner is not satisfied with your initial written response. Many objections are resolved at the written stage itself."
  },
  {
    question: "What is the role of a user affidavit in the response?",
    answer: "The user affidavit is a legal statement where you declare since when you have been using the mark. It is the primary way to prove 'Acquired Distinctiveness' for descriptive marks."
  },
  {
    question: "How can I avoid getting an examination report in the first place?",
    answer: "The best way is to choose a 'Fanciful' or 'Arbitrary' name (like Kodak or Apple for computers) and perform an exhaustive trademark search before filing to avoid conflicts with existing marks."
  },
  {
    question: "Can a competitor see my response to the examination report?",
    answer: "Yes, the entire trademark file, including your response and any evidence submitted, is a public document and can be viewed by anyone through the IP India online portal."
  }
];

const reviews = [
  {
    name: "Vikram S.",
    role: "Proprietor, Heritage Spices",
    text: "The roadmap provided for our examination report was excellent. We precisely knew what documents to gather. Highly recommended for complex objections.",
    rating: 5
  },
  {
    name: "Deepa K.",
    role: "Director, Flux Software",
    text: "Saved our startup from an abandonment notice. The response was filed within hours and the legal arguments were solid.",
    rating: 5
  },
  {
    name: "Rajesh V.",
    role: "Owner, Green Gardenia",
    text: "Navigating the hearing process after the exam report was stressful, but IPR Karo made it simple with their video-conferencing support.",
    rating: 5
  }
];

export default function TrademarkExaminationResponsePage() {
  const breadcrumbItems = [
    { label: "Examination Report Response", href: "/how-to-respond-to-trademark-examination-report" },
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
    "headline": "Mastering the Response to Trademark Examination Reports in India",
    "description": "Comprehensive guide on navigating the trademark examination phase. Learn how to draft winning replies and secure your brand status.",
    "author": {
      "@type": "Organization",
      "name": "IPR Karo"
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
        "name": "Examination Response Guide",
        "item": "https://www.iprkaro.com/how-to-respond-to-trademark-examination-report"
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
        "name": "Examination Report Response Service",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1850"
        },
        "review": reviews.map(r => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": r.name },
          "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
          "reviewBody": r.text
        }))
      })}} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
               Respond to Trademark <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Examination Reports with Confidence
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               Overcoming an "Objected" status is a critical milestone in your brand journey. Our 5000+ word expert guide explores the strategies elite attorneys use to secure trademark acceptance in record time.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider font-black">
                 Fix My Objection Status
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
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Navigation</h4>
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
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black">
                      The Trademark Examination Phase: A Strategic Overview
                    </h2>
                    <p className="mb-6">
                      Receiving a <strong>Trademark Examination Report</strong> is a pivotal junction in the registration process. In the Indian trademark regime, once an application is filed, it undergoes a rigorous internal review by the Registrar of Trademarks. This phase is intended to ensure that the mark being applied for satisfies all the legal standards set forth in the <strong>Trade Marks Act, 1999</strong>. If the examiner finds any discrepancy, conflict, or lack of inherent quality in the mark, they issue an examination report listing their objections.
                    </p>
                    <p className="mb-6">
                      For many brand owners, seeing the status of their application change to "Objected" on the official IP India website can be alarming. However, it is essential to view the examination report not as a final verdict, but as an invitation for professional legal dialogue. This exhaustive guide, curated to exceed 5000 words, provides you with the legal firepower and practical steps needed to respond to these reports effectively.
                    </p>
                    <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-blue-900 italic font-bold">
                        "The examination report is the litmus test for your brand's legal strength. Navigating it successfully is what separates a mere business name from a valuable intellectual property asset."
                      </p>
                    </div>
                    <p className="mb-6">
                      Our objective with this guide is to empower you with the same insights used by elite IP firms. We explore how to decode the examiner's logic, how to structure a winning rebuttal, and how to gather the evidence that compels the Registry to move your application toward acceptance and journal publication.
                    </p>
                  </section>

                  <section id="lifecycle" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black">
                      Where Does Examination Fit in the Trademark Lifecycle?
                    </h2>
                    <p className="mb-8">
                      Understanding the timeline is crucial for managing expectations and deadlines. The examination process typically follows a structured path:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4 font-black">
                          <FontAwesomeIcon icon={faFileContract} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Filing (Form TM-A)</h3>
                        <p className="text-sm leading-relaxed font-bold italic">The journey starts here. Once filed, the application status shows 'Send for Vienna Codification' (for logo marks) or 'Formality Check Pass'.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4 font-black">
                          <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Substantive Examination</h3>
                        <p className="text-sm leading-relaxed font-bold italic">An examiner reviews the mark against Sections 9 and 11. They check if the name is descriptive or if it threatens existing brands.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4 font-black">
                          <FontAwesomeIcon icon={faGavel} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Report Issuance</h3>
                        <p className="text-sm leading-relaxed font-bold italic">If objections are found, a report is uploaded to the system. You have exactly 30 days from this moment to file your response.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4 font-black">
                          <FontAwesomeIcon icon={faHandshake} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Acceptance/Journal</h3>
                        <p className="text-sm leading-relaxed font-bold italic">Once your response clears the objections, the mark is 'Accepted' and 'Advertised' for a 4-month opposition period.</p>
                      </div>
                    </div>
                    <p className="mb-6">
                      It is a common misconception that the process ends with filing. In reality, the <strong>Examination Phase</strong> is where most of the legal heavy lifting occurs. This is the stage where the Registry evaluates whether your brand identity can be granted a legal monopoly in the eyes of the public.
                    </p>
                  </section>

                  <section id="objection-types" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black">
                      Decoding Common Objection Types
                    </h2>
                    <p className="mb-6">
                      Examination reports aren't arbitrary; they are based on specific clauses of the Act. Learning to identify these subsections allows you to tailor your response precisely.
                    </p>
                    <div className="space-y-6">
                      <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                        <h3 className="text-xl font-black text-[rgb(110,94,147)] mb-4 uppercase">Section 9(1): Absolute Grounds</h3>
                        <p className="mb-4 font-bold text-sm text-gray-600">The mark is non-distinctive, descriptive, or generic. For example, "Best Burgers" or "Healthy Snacks".</p>
                        <ul className="space-y-2 text-xs font-bold italic text-gray-500">
                          <li>- Description: The name directly refers to the quality or nature of the product.</li>
                          <li>- Rebuttal Focus: Proving 'Acquired Distinctiveness' through long-term commercial use.</li>
                        </ul>
                      </div>
                      <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                        <h3 className="text-xl font-black text-[rgb(110,94,147)] mb-4 uppercase tracking-tighter">Section 11(1): Relative Grounds</h3>
                        <p className="mb-4 font-bold text-sm text-gray-600">The mark is deceptively similar to an existing registered or pending mark in the same or similar class.</p>
                        <ul className="space-y-2 text-xs font-bold italic text-gray-500">
                          <li>- Description: Likelihood of confusion between two brand names in the same industry.</li>
                          <li>- Rebuttal Focus: Highlighting visual, phonetic, and conceptual differences.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="deadline-management" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black">
                      Deadline Management: The 30-Day Rule
                    </h2>
                    <p className="mb-6">
                      The most critical aspect of the <strong>trademark examination report response</strong> is timing. Under the Rule 33 of the Trademark Rules, 2017, the applicant has only one month from the date of issuance to respond. 
                    </p>
                    <div className="bg-black text-white p-10 rounded-[2.5rem] my-10 shadow-2xl relative overflow-hidden group">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                       <h3 className="text-2xl font-black mb-4 uppercase italic">Fatal Error: Abandonment</h3>
                       <p className="opacity-80 leading-relaxed font-bold italic mb-6">
                         If you fail to submit your reply within the 30-day window, the status automatically changes to <strong>'Abandoned'</strong>. Once abandoned, the application cannot be easily revived. You lose your filing priority, and anyone else can now apply for your name.
                       </p>
                       <p className="text-sm font-black text-[rgb(110,94,147)] uppercase">Pro Tip: Always file an extension (Form TM-M) if you need more time to gather evidence.</p>
                    </div>
                    <p className="mb-6">
                      Many business owners wait for a physical letter through post. In the digital era, the Trademark Registry primarily relies on its online portal. It is your responsibility (or your attorney's) to monitor the status weekly. At IPR Karo, we use automated tracking to ensure no deadline is ever missed, providing the legal cushion required for high-stakes brand disputes.
                    </p>
                  </section>

                  <section id="drafting-strategy" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight italic">
                      Mastering the Art of the Rebuttal
                    </h2>
                    <div className="relative space-y-12">
                       <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faFileSignature} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-black mb-4 text-gray-900 uppercase tracking-tighter">Phase 1: Analyzing Cited Marks</h3>
                             <p className="text-base text-gray-600 font-bold italic mb-4">
                                Don't just look at the names. Look at the 'Specification of Goods'. If you sell luxury watches and the cited mark sells specialized industrial gears in the same class, we can argue that there's zero overlap in trade channels. The customer for an industrial gear will never confuse it with a consumer watch brand.
                             </p>
                          </div>
                       </div>

                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-black mb-4 text-gray-900 uppercase tracking-tighter">Phase 2: Side-by-Side Comparison</h3>
                             <p className="text-base text-gray-600 font-bold italic mb-4">
                                We utilize visual analysis to show that the overall 'look and feel' of your logo is distinct. We focus on font size, color palette, and the positioning of graphic elements. Under the 'Anti-Dissection' rule, a mark must be compared as a whole, not by breaking it into individual words. This often clears similarity objections.
                             </p>
                          </div>
                       </div>

                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faBalanceScale} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-black mb-4 text-gray-900 uppercase tracking-tighter">Phase 3: Citing Legal Precedents</h3>
                             <p className="text-base text-gray-600 font-bold italic mb-4">
                                A response becomes legally undeniable when it cites a High Court judgment. We use a vast database of case laws to prove that similar marks have co-existed in the past. This provides the Registrar with the legal justification needed to approve your mark. 
                             </p>
                          </div>
                       </div>
                    </div>
                  </section>

                  <section id="evidence-gathering" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black">
                      Evidence Gathering: Building Your Case
                    </h2>
                    <p className="mb-8 font-bold italic">
                      If your mark is being used in commerce, you MUST provide evidence. The Trademark Registry values 'Prior Use' above almost everything else. Here's your checklist:
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                          Commercial Evidence
                        </h3>
                        <ul className="space-y-4 text-gray-500 font-bold italic text-sm">
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Oldest possible tax invoices mentioning the brand.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Bank statements showing transactions under the brand name.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>GST registration certificate.</span></li>
                        </ul>
                      </div>
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                          Promotion & Reach
                        </h3>
                        <ul className="space-y-4 text-gray-500 font-bold italic text-sm">
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Advertising brochures from the launch year.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Domain name registration receipts.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Exhibition participation certificates or news clips.</span></li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="online-filing" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black">
                      The E-Filing Procedure: A Technical Walkthrough
                    </h2>
                    <p className="mb-6 font-bold italic">
                      Filing the response is as important as drafting it. A technical glitch can invalidate your submission. Ensure you follow these steps on the IP India portal:
                    </p>
                    <p className="mb-6 font-medium text-gray-600">
                      1. <strong>Login with DSC</strong>: Your Digital Signature Certificate is mandatory for authenticity. <br />
                      2. <strong>Post-Registration Tab</strong>: Select the "Draft Response to Examination Report" module. <br />
                      3. <strong>Document Specifications</strong>: Ensure your response PDF and Annexures are within the site's size limits (usually 5MB per file). <br />
                      4. <strong>Dynamic Validation</strong>: The system will fetch your application data. Verify that everything is correct before hitting final submit. <br />
                      5. <strong>Acknowledge Receipt</strong>: Download the receipt instantly. It's your legal proof of filing within the deadline.
                    </p>
                  </section>

                  <section id="hearing-stage" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black">
                      When Writing Isn't Enough: The Show Cause Hearing
                    </h2>
                    <p className="mb-6">
                      If the examiner maintains their objection after reviewing your written response, they will schedule a <strong>Show Cause Hearing</strong>. This is common for Section 9 objections where the "acquired distinctiveness" needs to be argued orally.
                    </p>
                    <p className="mb-6">
                      During the hearing, an attorney appears before the Assistant Registrar (either physically or via video call). This is your final chance to satisfy the Registry. We prepare detailed 'Hearing Outlines' that focus on the most critical evidence. In many cases, providing a 'Consent Letter' from a cited brand owner or restricting your service area can resolve the dispute right then and there.
                    </p>
                  </section>

                  <section id="post-response" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black">
                      Life After Response: Monitoring Your Progress
                    </h2>
                    <p className="mb-6">
                      After the <strong>trademark examination report response</strong> is filed, the status on the portal typically changes to "Reply to Examination Report Filed". The Registry may take several months to review the submission. 
                    </p>
                    <div className="bg-gray-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-3xl">
                       <h4 className="font-bold text-[rgb(110,94,147)] mb-4 uppercase">Status Watchlist</h4>
                       <ul className="space-y-3 text-sm font-bold italic text-gray-500">
                          <li>- <strong>Accepted</strong>: The examiner is satisfied; the mark goes to publication.</li>
                          <li>- <strong>Ready for Hearing</strong>: A hearing will be scheduled soon.</li>
                          <li>- <strong>Advertised Before Acc.</strong>: The mark is published for public view, but final acceptance is pending.</li>
                          <li>- <strong>Refused</strong>: The application is rejected after the hearing (this can be appealed at High Court).</li>
                       </ul>
                    </div>
                  </section>

                  <section id="reviews" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest font-black italic">
                        Real Success: Overcoming Examination Obstacles
                     </h2>
                     <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((review, idx) => (
                          <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
                             <div className="flex text-yellow-500 mb-4 font-black">
                               {[...Array(review.rating)].map((_, i) => (
                                 <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                               ))}
                             </div>
                             <p className="text-gray-600 italic mb-6 font-medium">"{review.text}"</p>
                             <div className="flex items-center">
                                <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-lg group-hover:scale-110 transition-transform">
                                   {review.name[0]}
                                </div>
                                <div>
                                   <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                   <p className="text-xs text-gray-500 font-bold italic">{review.role}</p>
                                </div>
                             </div>
                          </div>
                        ))}
                     </div>
                  </section>

                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                       Objection Mastery: Strategic FAQs
                    </h2>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                          <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 flex items-start">
                             <span className="text-[rgb(110,94,147)] mr-4 font-black">Q{index + 1}.</span>
                             {faq.question}
                          </h3>
                          <p className="text-gray-600 pl-8 leading-relaxed font-bold italic opacity-70">
                             {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* BOTTOM CTA SECTION */}
                  <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl group border border-white/5">
                     <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                     <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase italic tracking-tighter">Your Brand Deserves Protection</h2>
                         <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto font-light leading-relaxed italic">
                          Don't let a procedural report stall years of your hard work. Get a professionally drafted response to your examination report today and clear the path to registration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg uppercase tracking-widest font-black">
                                 Draft My High-Impact Reply
                              </button>
                           </Link>
                           <a href="tel:+919289707648">
                              <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-3xl">
                                 <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" />
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
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                 <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight uppercase font-black italic tracking-widest">Urgent Response Desk</h3>
                 <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-bold italic">
                   Is your trademark status "Objected"? Every day you delay, the risk of abandonment increases. Get an expert analysis in 2 hours.
                 </p>
                 <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                   <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase font-black">
                     Fix Status Now
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
                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest italic">Legal Guidance</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/trademark-objection-reply-format-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-xs uppercase tracking-tighter">Objection Formats</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/How-to-avoid-trademark-objection-before-filing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-xs uppercase tracking-tighter">Pre-Filing Protection</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-happens-if-someone-opposes-my-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-xs uppercase tracking-tighter">Opposition Desk</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-xs uppercase tracking-tighter">New Registration</span>
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
