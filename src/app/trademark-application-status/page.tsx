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
  faInfoCircle,
  faQuestionCircle,
  faClock,
  faCheckCircle,
  faBan,
  faUserSlash,
  faHistory,
  faFileAlt,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark Application Status India | Track Your TM Online',
  description: 'How to check trademark application status online in India. Detailed guide on meanings of statuses like Objected, Exam Report Issued, Advertised and Registered. Track TM status now.',
  keywords: [
    'trademark application status',
    'check trademark status online',
    'trademark status india',
    'ip india trademark status',
    'trademark search application status',
    'trademark objection status',
    'monitor trademark application',
    'track trademark filing',
    'trademark journal status',
    'vienna codification trademark',
    'formalities check pass status'
  ],
  openGraph: {
    title: 'Monitor Your Trademark Application Status Online | IPR Karo',
    description: 'A comprehensive guide to understanding and tracking your trademark application status in India. Decipher statuses like Objected, Abandoned, and Registered.',
    url: 'https://www.iprkaro.com/trademark-application-status',
    type: 'article',
    images: [
      {
        url: 'https://www.iprkaro.com/assets/trademark-status-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Application Status Tracking',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-application-status',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'how-to-check', title: 'How to Check Status' },
  { id: 'status-meanings', title: 'Status Meanings' },
  { id: 'pre-examination', title: 'Pre-Examination Stages' },
  { id: 'objection-stages', title: 'Objection & Hearing' },
  { id: 'publication-opposition', title: 'Journal & Opposition' },
  { id: 'final-stages', title: 'Registration & Removal' },
  { id: 'common-pitfalls', title: 'Common Monitoring Mistakes' },
  { id: 'strategic-advice', title: 'Strategic Advice' },
  { id: 'litigation-perspective', title: 'Litigation & Enforcement' },
  { id: 'restoration-process', title: 'Restoration Process' },
  { id: 'enforcement-tools', title: 'Enforcement Tools' },
  { id: 'client-success-stories', title: 'Client Success Stories' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "Where can I check my trademark application status in India?",
    answer: "The official website to check the status of a trademark application in India is ipindia.gov.in. Navigate to the 'Trade Mark Status' link under the 'Related Links' section on the e-filing portal. You will need your 5-to-7-digit application number to view the current status and history."
  },
  {
    question: "What does 'Formalities Check Pass' mean?",
    answer: "This status indicates that your application has cleared the initial administrative screening. It means the Registry has verified that all basic documents like the power of attorney, user affidavit, and logo correctly meet the formal requirements. Your application will now move to substantive examination."
  },
  {
    question: "Why is my trademark status showing 'Objected'?",
    answer: "An 'Objected' status means the Examiner has raised legal concerns regarding your mark under Section 9 (absolute grounds like lack of distinctiveness) or Section 11 (relative grounds like similarity to an existing mark). You must file a detailed legal response within 30 days of receiving the examination report."
  },
  {
    question: "How long does it take for a trademark status to change to 'Registered'?",
    answer: "On average, it takes 6 to 18 months for a trademark to reach registration if no oppositions are filed. However, if the mark faces objections or third-party oppositions, the process can extend up to 36 months or longer, depending on the complexity of the legal proceedings."
  },
  {
    question: "What should I do if my trademark is 'Abandoned'?",
    answer: "If the status shows 'Abandoned,' it means a mandatory deadline was missed (like responding to an exam report or attending a hearing). In some cases, you can file a petition for revival if the delay was unintentional, but usually, a new application must be filed from scratch."
  },
  {
    question: "Can I use the ® symbol while the status is 'Accepted & Advertised'?",
    answer: "No. You can only use the ® symbol once the status officially changes to 'Registered' and you have received the registration certificate. Using the registration symbol while the application is still pending (even if advertised) is a punishable offence under the Trade Marks Act."
  },
  {
    question: "What is 'Vienna Codification' in trademark status?",
    answer: "This is a status assigned to trademarks that contain a logo or graphical element. The Registry assigns numerical codes to the figurative elements of your mark based on the international Vienna Classification to facilitate visual similarity searches."
  },
  {
    question: "How often should I monitor my trademark status?",
    answer: "It is highly recommended to monitor your trademark status at least once every month. Deadlines for responses (like 30 days for an exam report) are strict, and missing them can lead to the immediate abandonment of your valuable brand asset."
  },
  {
    question: "What is an 'Opposition' in trademark tracking?",
    answer: "An opposition occurs when a third party challenges your trademark registration after it is published in the Journal. This happens during the 4-month window after the 'Accepted & Advertised' status appears. You must file a counter-statement within 2 months to defend your mark."
  },
  {
    question: "Can I check someone else's trademark status?",
    answer: "Yes, the IP India portal is public. Anyone can search for the status of any trademark application using either the application number or the brand name through the public search feature."
  }
];

export default function TrademarkApplicationStatusPage() {
  const breadcrumbItems = [
    { label: "Resources", href: "/resources" },
    { label: "Trademark Application Status", href: "/trademark-application-status" },
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
    "headline": "Trademark Application Status India: The Comprehensive Monitoring Guide",
    "description": "Master the art of tracking your trademark application. Decipher every status update from IP India, avoid common monitoring mistakes, and protect your brand legally.",
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
    "datePublished": "2024-02-10",
    "dateModified": "2024-02-10"
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.iprkaro.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "Trademark Application Status", "item": "https://www.iprkaro.com/trademark-application-status" }
        ]
      })}} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Status Monitoring Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "840"
        }
      })}} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               Track Your <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Application Status</span> with Precision
             </h1>
             <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-300 font-light leading-relaxed px-2">
               Monitoring your trademark status is as critical as filing it. Don't let a missed deadline lead to an abandoned mark. Use our expert guide to navigate the IP India portal like a pro.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(110,94,147,0.4)] text-base md:text-lg">
                 Get Expert TM Assistance
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">
            
            {/* Left Column: Table of Contents */}
            <div className="hidden lg:block sticky top-32">
                <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-6 sticky top-[72px] z-20">
                  <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-6 md:p-16 rounded-2xl shadow-sm space-y-12 md:space-y-20 border border-gray-100">
                
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Introduction to Trademark Tracking</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Filing a trademark application is just the beginning of a long legal journey. In India, the path from "New Application" to "Registered" is paved with complex administrative checks, legal examinations, and public scrutiny. For a business owner, your brand is one of your most valuable intangible assets. Losing it due to a procedural oversight is not just a legal failure but a significant business loss.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Intellectual Property India (IP India) Registry operates through a series of status updates that signal where your application stands. Understanding these updates is crucial because each one often comes with a set of mandatory actions and strict statutory deadlines. A status of "Objected" requires a legal response within 30 days; an "Opposition" requires a counter-statement within two months. Missing these windows leads to the immediate "Abandonment" of your mark, rendering months of effort and significant government fees useless.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This comprehensive guide is designed to empower you with the knowledge to monitor your <strong>trademark application status</strong> effectively. We will break down every single term you might encounter on the IP India portal, provide strategic insights into handling objections, and offer a litigation perspective on why monitoring is the backbone of brand enforcement.
                  </p>
                </section>

                <section id="how-to-check" className="scroll-mt-32 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faSearch} className="w-6 h-6 md:w-10 md:h-10 text-[rgb(110,94,147)]" />
                    </div>
                    Step-by-Step Guide
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Checking your status is a simple but vital habit. Follow these steps to access the most up-to-date information directly from the government database.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative pt-12">
                      <span className="absolute top-4 left-6 text-4xl font-bold text-gray-100">01</span>
                      <h3 className="font-bold text-lg mb-3">Visit IPO Portal</h3>
                      <p className="text-sm text-gray-600">Navigate to the official e-filing portal at ipindiaonline.gov.in. This is the centralized hub for all trademark related searches and filings in India.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative pt-12">
                      <span className="absolute top-4 left-6 text-4xl font-bold text-gray-100">02</span>
                      <h3 className="font-bold text-lg mb-3">Trademark Status Link</h3>
                      <p className="text-sm text-gray-600">On the left-hand navigation menu, find the 'Related Links' section and click on 'Trade Mark Status'. Do not confuse this with 'Public Search'.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative pt-12">
                      <span className="absolute top-4 left-6 text-4xl font-bold text-gray-100">03</span>
                      <h3 className="font-bold text-lg mb-3">Enter Application ID</h3>
                      <p className="text-sm text-gray-600">Select 'National IRDI Number', enter your unique application number (usually 5 to 7 digits), and complete the Captcha to view your detailed history.</p>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-[rgb(110,94,147)]/10 border-l-4 border-[rgb(110,94,147)] text-sm text-gray-800 italic">
                    <strong>Pro Tip:</strong> Bookmark the status page. Many applicants forget their application number and lose access to their tracking. Keep your Form TM-A acknowledgment copy handy.
                  </div>
                </section>

                <section id="status-meanings" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Decoding 15+ Trademark Status Meanings</h2>
                  <p className="text-lg leading-relaxed mb-10 text-gray-700">
                    When you view your application profile, the "Status" field is the most important piece of data. Here is a deep dive into what each term means and what action is required.
                  </p>
                  
                  <div className="space-y-6">
                    {/* NEW APPLICATION */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white items-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center text-[rgb(110,94,147)] mt-1">
                        <FontAwesomeIcon icon={faRocket} className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">New Application</h3>
                        <p className="text-gray-700 mb-3">The application has been successfully filed and entered into the electronic database. It indicates that the government has received your fees and the basic data is stored.</p>
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center">
                          <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4" /> Action: Wait for Formalities Check
                        </div>
                      </div>
                    </div>

                    {/* SEND TO VIENNA CODIFICATION */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white items-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center text-[rgb(110,94,147)] mt-1">
                        <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Send to Vienna Codification</h3>
                        <p className="text-gray-700 mb-3">Exclusive to trademarks with logos. Figurative elements are assigned international codes (e.g., Code 1.1.1 for a star). This helps the registry perform visual similarity searches later in the process.</p>
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center">
                          <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4" /> Action: Internal Process, No Input Needed
                        </div>
                      </div>
                    </div>

                    {/* FORMALITIES CHK PASS */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-green-50/30 items-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center text-green-600 mt-1">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Formalities Chk Pass</h3>
                        <p className="text-gray-700 mb-3">Your documents are in order. The Registry has verified your name, address, Power of Attorney, and class selection. This is a positive sign that no clerical errors exist in your filing.</p>
                        <div className="text-xs font-bold text-green-600 uppercase tracking-widest flex items-center">
                          <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4" /> Action: Awaiting Substantive Examination
                        </div>
                      </div>
                    </div>

                    {/* FORMALITIES CHK FAIL */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 border border-red-100 rounded-xl hover:shadow-md transition-shadow bg-red-50/30 items-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center text-red-600 mt-1">
                        <FontAwesomeIcon icon={faBan} className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Formalities Chk Fail</h3>
                        <p className="text-gray-700 mb-3">Critical procedural error. Common reasons include missing a signed Power of Attorney, incorrect classification of goods, or using an outdated form. You must rectify this immediately.</p>
                        <div className="text-xs font-bold text-red-600 uppercase tracking-widest flex items-center">
                          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 w-4 h-4" /> Action: URGENT - Fix Administrative Errors
                        </div>
                      </div>
                    </div>

                    {/* MARKED FOR EXAM */}
                    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white items-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center text-[rgb(110,94,147)] mt-1">
                        <FontAwesomeIcon icon={faSearch} className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Marked for Exam</h3>
                        <p className="text-gray-700 mb-3">A substantive Examiner has been assigned. They are currently reviewing your mark for legal registrability under Section 9 (distinctiveness) and Section 11 (conflict with existing marks).</p>
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center">
                          <FontAwesomeIcon icon={faClock} className="mr-2 w-4 h-4" /> Action: Prepare for Potential Objection
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="pre-examination" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Navigating Pre-Examination Stages</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     The Pre-Examination phase is essentially an administrative filter. The goal of the Trademark Registry during these stages is to ensure that the data entering the system is accurate and that the application complies with the formal rules of the Trade Marks Act, 1999.
                   </p>
                   <div className="bg-purple-50 p-6 md:p-8 rounded-2xl border border-purple-100 shadow-sm">
                      <h3 className="text-xl font-bold mb-4 text-purple-900">Why 'Formalities' Matter</h3>
                      <p className="text-gray-700 mb-4">
                        Many applicants underestimate this stage. If you file as a "Small Entity" to save fees but fail to upload a valid MSME/Udyam certificate, your status will quickly turn to <strong>Formalities Chk Fail</strong>. Similarly, if your logo contains non-English words without a translation/transliteration, the registry will halt the process.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-4 text-sm text-purple-800">
                        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 w-4 h-4" /> Correct Applicant Category</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 w-4 h-4" /> Valid Power of Attorney</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 w-4 h-4" /> Accurate Description of Goods</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 w-4 h-4" /> Clear Graphical Representation</li>
                      </ul>
                   </div>
                </section>

                <section id="objection-stages" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Critical Objection & Hearing Phase</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Statistically, over 60% of trademark applications in India face an objection. This is where most brands are made or broken. Understanding the flow from "Objected" to "Accepted" is vital for strategic brand protection.
                  </p>

                  <div className="space-y-12">
                    <div className="relative pl-12 border-l-4 border-[rgb(110,94,147)]">
                      <div className="absolute -left-3 top-0 w-5 h-5 bg-[rgb(110,94,147)] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Status: Objected / Exam Report Issued</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Individual examiners review the mark against the law. If they find it is too descriptive (e.g., 'Cold Water' for beverages) or too similar to an existing mark (e.g., 'Nikee' vs 'Nike'), they issue an <strong>Examination Report</strong>.
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg text-red-900 text-sm font-semibold border border-red-100">
                        DEADLINE: You must file a written response within 30 days. No extensions are generally granted for this initial reply.
                      </div>
                    </div>

                    <div className="relative pl-12 border-l-4 border-yellow-500">
                      <div className="absolute -left-3 top-0 w-5 h-5 bg-yellow-500 rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Status: Ready for Show Cause Hearing</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        If your written response fails to convince the Examiner, they will list the matter for a personal hearing. This doesn't mean your mark is refused; it means you have a second chance to argue your case before a Senior Registrar or Hearing Officer.
                      </p>
                      <div className="bg-yellow-50 p-4 rounded-lg text-yellow-900 text-sm font-semibold border border-yellow-100">
                        ACTION: You or your attorney must attend the hearing (often virtual now) with case laws and usage evidence.
                      </div>
                    </div>

                    <div className="relative pl-12 border-l-4 border-green-500">
                      <div className="absolute -left-3 top-0 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Status: Accepted</h3>
                      <p className="text-gray-700 text-lg mb-4">
                        Success! The Registry is satisfied with your arguments and evidence. Your mark has survived the legal examination and will now move to public publication.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="publication-opposition" className="scroll-mt-32">
                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Journal Publication & Public Opposition</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     When your status changes to <strong>Accepted and Advertised</strong>, your mark is published in the weekly Trademark Journal. This is the "Speak now or forever hold your peace" phase of the registration.
                   </p>
                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)]/30 transition-all">
                        <div className="text-[rgb(110,94,147)] mb-4"><FontAwesomeIcon icon={faGlobe} size="2x" className="w-10" /></div>
                        <h4 className="text-xl font-bold mb-3">The 4-Month Window</h4>
                        <p className="text-gray-600">The mark remains in the journal for precisely four months. Any third party who believes your mark infringes on their existing rights can file an opposition during this time.</p>
                     </div>
                     <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:border-red-500/30 transition-all">
                        <div className="text-red-500 mb-4"><FontAwesomeIcon icon={faGavel} size="2x" className="w-10" /></div>
                        <h4 className="text-xl font-bold mb-3">Status: Opposed</h4>
                        <p className="text-gray-600">If challenged, your status changes to 'Opposed'. This initiates a quasi-judicial proceeding. You must file a counter-statement within 2 months or your mark is abandoned automatically.</p>
                     </div>
                   </div>
                </section>

                <section id="final-stages" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Final Outcomes: Registration, Renewal, and Removal</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    The final destination of a positive application is the "Registered" status. However, registration is not the end; it is the beginning of a 10-year cycle of maintenance and enforcement.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-900 text-white p-8 rounded-2xl">
                      <h4 className="text-xl font-bold mb-4 text-[#8A7AB5]">Registered</h4>
                      <p className="text-sm opacity-80 leading-relaxed">The ultimate victory. You receive a digital registration certificate. Exclusive rights are granted for 10 years from the date of application. You can now use the ® symbol to signify your legal ownership of the brand name and logo.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl text-center flex flex-col items-center">
                      <FontAwesomeIcon icon={faSync} size="2x" className="text-[rgb(110,94,147)] mb-4 w-10 h-10" />
                      <h4 className="text-xl font-bold mb-2">Renewal Due</h4>
                      <p className="text-sm text-gray-600">Appears every 10 years. Trademark protection is eternal, provided you keep paying the renewal fee within 6 to 12 months before the actual expiry date of the mark.</p>
                    </div>
                    <div className="bg-red-50 border border-red-100 p-8 rounded-2xl text-center flex flex-col items-center">
                      <FontAwesomeIcon icon={faUserSlash} size="2x" className="text-red-500 mb-4 w-10 h-10" />
                      <h4 className="text-xl font-bold mb-2 text-red-900">Removed</h4>
                      <p className="text-sm text-red-700">The mark is taken off the registry. This happens due to non-renewal or successful rectification (non-use) by a third party who proves the mark has not been used for 5 years.</p>
                    </div>
                  </div>
                  <div className="mt-12 space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Beyond the primary statuses, you might also encounter specialized entries like <strong>Abandoned</strong>, <strong>Withdrawn</strong>, and <strong>Refused</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="p-6 bg-white border border-gray-100 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">Abandoned Status</h4>
                          <p className="text-sm text-gray-600">The most common reason for this is a missed deadline. If you do not reply to an Examination Report within 30 days or fail to attend a hearing, the registry assumes you are no longer interested in the mark. Reversing an abandonment is exceptionally difficult and usually requires a high court petition if the delay was due to the registry's fault.</p>
                       </div>
                       <div className="p-6 bg-white border border-gray-100 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">Withdrawn Status</h4>
                          <p className="text-sm text-gray-600">This occurs when the applicant voluntarily files a request to cancel their current application. This often happens as part of a settlement agreement where a senior user demands you stop using a similar name in exchange for not pursuing damages.</p>
                       </div>
                       <div className="p-6 bg-white border border-gray-100 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">Refused Status</h4>
                          <p className="text-sm text-gray-600">A final refusal by the Registrar after a hearing. This means the legal arguments provided did not satisfy the requirements of the Trade Marks Act. You can appeal this decision before the High Court within 3 months, but the success rate depends on the factual distinctiveness of your mark.</p>
                       </div>
                       <div className="p-6 bg-white border border-gray-100 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">Rectification Filed</h4>
                          <p className="text-sm text-gray-600">This status appears even on registered marks. It means a third party has challenged your registration on grounds of non-use or that it was registered in bad faith. You must defend your registration certificate in court or the registry will cancel it.</p>
                       </div>
                    </div>
                  </div>
                </section>

                <section id="common-pitfalls" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="mr-4 text-red-500 w-10 h-10" />
                    Common Monitoring Mistakes to Avoid
                  </h2>
                   <p className="text-lg leading-relaxed mb-8 text-gray-700">
                     A trademark application fails more often due to negligence in monitoring than due to legal weakness. Avoid these five common pitfalls to ensure your brand remains safe.
                   </p>
                   <div className="space-y-4">
                      <div className="p-6 bg-white rounded-xl border-l-4 border-red-500 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2">Check-Once-A-Year Syndrome</h4>
                        <p className="text-sm text-gray-600">Objection responses are due in 30 days. If you only check once a year, you will almost certainly miss multiple deadlines, leading to permanent abandonment.</p>
                      </div>
                      <div className="p-6 bg-white rounded-xl border-l-4 border-red-500 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2">Misinterpreting 'Objected' as 'Refused'</h4>
                        <p className="text-gray-900 text-sm">'Objected' is a common hurdle, not a dead end. Many businesses panic and stop working on the mark, when they could have simply filed a legal reply to overcome the issue.</p>
                      </div>
                      <div className="p-6 bg-white rounded-xl border-l-4 border-red-500 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2">Ignoring Email Alerts</h4>
                        <p className="text-sm text-gray-600">The IP India server sends automated emails. Often these land in spam or are ignored by busy entrepreneurs. Relying solely on emails is a recipe for disaster; always check the portal manually.</p>
                      </div>
                      <div className="p-6 bg-white rounded-xl border-l-4 border-red-500 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2">Inaccurate Search Data</h4>
                        <p className="text-sm text-gray-600">Entering the wrong application number or missing a digit while checking status can lead to viewing the wrong file. Always double check your Form TM-A acknowledgment copy.</p>
                      </div>
                   </div>
                </section>

                <section id="strategic-advice" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Strategic Advice for Brand Owners</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Your trademark strategy should be proactive, not reactive. Monitoring is just the first step in a broader brand lifecycle management plan.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[rgb(110,94,147)]/5 p-8 rounded-2xl border border-[rgb(110,94,147)]/10">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">The Power of Prior Use</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        If your status shows 'Objected' due to similarity (Section 11), your best weapon is evidence of prior use. Collect all invoices, social media screenshots, and newspaper advertisements that show you used the mark before the other party. In India, 'First to Use' often trumps 'First to File'.
                      </p>
                    </div>
                    <div className="bg-[rgb(110,94,147)]/5 p-8 rounded-2xl border border-[rgb(110,94,147)]/10">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">MSME Benefits for Speed</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Status monitoring becomes easier if the process moves faster. If you are a startup or MSME, you can leverage the 'Expedited Examination' route. While it costs higher government fees, it reduces the wait time for the first examination report from 12 months to 3 months.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="litigation-perspective" className="scroll-mt-32">
                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Litigation Perspective: Why Tracking Saves Millions</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     From a legal standpoint, a registered trademark is a "chose in action"; it is a property right that can be enforced in court. However, your ability to enforce that right is directly tied to the status of your mark.
                   </p>
                   <div className="space-y-6">
                     <p className="text-lg text-gray-700 font-medium italic">"Registration is proof of ownership. Status is proof of validity and enforceability."</p>
                     <p className="text-gray-700 leading-relaxed">
                        In an infringement suit, the first thing a judge checks is the Trademark Certificate. If your status has been 'Removed' due to non-renewal, you lose the statutory power to sue for 'Infringement' and must fall back on 'Passing Off' (common law remedy), which is significantly harder and more expensive to prove in a court of law.
                     </p>
                     <p className="text-gray-700 leading-relaxed">
                        Continuous status monitoring also allows you to spot "Conflicting Marks" being filed by competitors. If you see a similar mark reach the 'Accepted' status, you can file an opposition and stop the threat immediately for a small administrative cost. If you miss that window and the competitor gets registered, you will have to file a 'Rectification' or 'Cancellation' petition, which can cost significantly more in legal fees and take years to conclude in the High Court.
                     </p>
                     <p className="text-gray-700 leading-relaxed">
                       Furthermore, the status of your mark impacts your ability to obtain interlocutory injunctions. A court is much more likely to grant an 'Ex-Parte' injunction if your mark shows a clean, 'Registered' status without any pending rectifications or challenges. If your status shows 'Objected' or 'Opposed', getting an immediate stay against an infringer becomes an uphill battle.
                     </p>
                     <p className="text-gray-700 leading-relaxed">
                       Global expansion also depends on your local status. Under the Madrid Protocol, your international trademark application is tethered to your 'Basic Application' in India for five years. If your Indian status turns to 'Abandoned' or 'Refused' during this period, your entire global portfolio of international registrations will also collapse. This 'Central Attack' mechanism makes local status monitoring the foundation of global brand security.
                     </p>
                   </div>
                </section>

                <section id="restoration-process" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Trademark Restoration: A Second Lease of Life</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If your status has already turned to "Removed" because you missed the renewal deadline, all is not lost. The Trademark Rules provide a window for <strong>Restoration</strong>. This is a special legal process where you can petition the Registrar to bring the mark back from the dead.
                  </p>
                  <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">How Restoration Works</h3>
                    <p className="text-gray-600 mb-6">
                      You can file for restoration between six months and one year after the expiration date of the mark. This requires filing Form TM-R along with the prescribed restoration fee and the renewal fee. The Registrar has the discretion to restore the mark if they are satisfied that the omission was unintentional and that no third-party rights will be unfairly prejudiced. 
                    </p>
                    <p className="text-gray-600 mb-6">
                      However, once the one-year mark has passed since removal, the status becomes permanent. At that point, the mark is legally "Dead" and anyone else can apply for it. This is why automated status monitoring is significantly cheaper than the legal costs of a restoration petition.
                    </p>
                    <div className="p-4 bg-[rgb(110,94,147)]/10 rounded-xl text-sm italic">
                      Warning: During the period your mark is removed and pending restoration, you lose the ability to file criminal complaints against counterfeiters. Your brand is essentially naked in the eyes of the law during this administrative gap.
                    </div>
                  </div>
                </section>

                <section id="enforcement-tools" className="scroll-mt-32">
                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Modern Tools for Trademark Enforcement</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     In the digital era, manual tracking is becoming obsolete. Sophisticated brand owners now use <strong>Trademark Watch Services</strong>. These services do not just check your status; they scan the weekly Trademark Journal for every single mark that might be phonetically or visually similar to yours.
                   </p>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gray-50 rounded-xl">
                         <h4 className="font-bold text-gray-900 mb-2">Automated Journal Scanning</h4>
                         <p className="text-sm text-gray-600">Every Sunday, the IP India registry releases thousands of marks in the journal. A watch service uses optical character recognition and phonetic algorithms to flag any mark that could potentially infringe on your territory, giving you the full 4-month window to file an opposition.</p>
                      </div>
                      <div className="p-6 bg-gray-50 rounded-xl">
                         <h4 className="font-bold text-gray-900 mb-2">Domain Name Monitoring</h4>
                         <p className="text-sm text-gray-600">Trademark infringement often starts with a domain name. By monitoring the WHOIS database for your brand keywords, you can block cybersquatters before they even launch a competing website, protecting your online reputation alongside your legal trademark status.</p>
                      </div>
                   </div>
                   <p className="mt-8 text-gray-700 leading-relaxed">
                     At IPR Karo, we combine these high-tech tools with the deep legal expertise of our attorneys. We ensure that your trademark application status is not just a number on a screen, but a robust shield that protects your business from the moment of filing to the day you become a household name.
                   </p>
                </section>

                <section id="client-success-stories" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Client Success Stories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative group transition-all hover:bg-white hover:shadow-xl">
                      <div className="text-6xl text-[rgb(110,94,147)] absolute top-6 right-8 opacity-10 serif">"</div>
                      <p className="text-gray-800 italic mb-8 relative z-10 text-lg leading-relaxed pt-4">
                        "I was struggling with a 'Formalities Chk Fail' status for months. IPR Karo identified the document error in minutes and fixed it. My mark is now advertised in the journal!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-[rgb(110,94,147)]/10 rounded-full flex items-center justify-center text-[rgb(110,94,147)] font-bold mr-4 text-xl">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">Ankit Sharma</p>
                          <p className="text-sm text-gray-500">Retail Brand Owner</p>
                          <div className="flex text-yellow-500 text-xs mt-1">
                             {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative group transition-all hover:bg-white hover:shadow-xl">
                      <div className="text-6xl text-[rgb(110,94,147)] absolute top-6 right-8 opacity-10 serif">"</div>
                      <p className="text-gray-800 italic mb-8 relative z-10 text-lg leading-relaxed pt-4">
                        "Received a similarity objection under Section 11. IPR Karo's attorney drafted a 15-page response with case laws. The objection was waived without even a hearing."
                      </p>
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-[rgb(110,94,147)]/10 rounded-full flex items-center justify-center text-[rgb(110,94,147)] font-bold mr-4 text-xl">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">Sneha Reddy</p>
                          <p className="text-sm text-gray-500">Fintech Founder</p>
                          <div className="flex text-yellow-500 text-xs mt-1">
                             {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-8 last:border-0 group">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-start group-hover:text-[rgb(110,94,147)] transition-colors">
                          <span className="text-[rgb(110,94,147)] mr-4 mt-1 opacity-50">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-10 text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA Section */}
                <section className="bg-gradient-to-br from-[#0C002B] via-[#160049] to-[#0C002B] rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] opacity-20 rounded-full blur-[100px]"></div>
                   <div className="absolute bottom-0 left-0 w-80 h-80 bg-[rgb(110,94,147)] opacity-20 rounded-full blur-[100px]"></div>
                   
                   <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Don't Leave Your Brand's Status to Chance</h2>
                    <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                      Whether you are facing a Section 9/11 objection or a third-party opposition, our team of former examiners and IP attorneys are ready to defend your brand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact-us" className="w-full sm:w-auto">
                        <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(130,114,167)] text-white font-bold py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg">
                          Fix Your Trademark Status Now
                        </button>
                      </Link>
                      <a href="tel:+919289707648" className="w-full sm:w-auto">
                         <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-gray-900 text-white font-bold py-5 px-12 rounded-full transition-all text-lg flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="mr-3 w-5 h-5" />
                          Call: +91-9289707648
                        </button>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <aside className="hidden lg:block space-y-10 sticky top-32">
              
              {/* Sidebar CTA Box */}
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Objection Recovery</h3>
                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                  Received an 'Objected' status? Our attorneys have a **98% success rate** in overcoming Section 9 & 11 objections.
                </p>
                <Link href="/contact-us" className="block relative z-10">
                  <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                    Reply to Objection
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
                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Related Services</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">How to Register Trademark</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-check-trademark-availability" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Check TM Availability</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gst-required-for-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">GST for Trademark</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/types-of-trademark-classes" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Trademark Classes Guide</span>
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
