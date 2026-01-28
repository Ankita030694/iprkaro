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
  faLightbulb, 
  faRocket, 
  faMoneyBillWave, 
  faCertificate, 
  faFileSignature,
  faPhone,
  faChevronRight,
  faCalendarAlt,
  faHandshake,
  faCogs,
  faHourglassHalf,
  faMicroscope
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Patent Registration in India (2025) | Cost, Process & Filing',
  description: 'File your Patent in India with IPR Karo. Low-cost filing for Startups & MSMEs. Expert Patent Agents for Provisional/Complete specifications, Patent Search, and Expedited Examination.',
  keywords: [
    'patent registration india',
    'patent filing cost india',
    'provisional patent application',
    'patent process india 2025',
    'patent agent near me',
    'patent search india',
    'software patent india',
    'patent fees for startups',
    'expedited patent examination',
    'pct filing india'
  ],
  openGraph: {
    title: 'Patent Registration in India (2025) | Secure Your Tech',
    description: 'Turn your invention into a valuable asset. Comprehensive patent filing, drafting, and prosecution services. 80% Fee Rebate for Startups/MSMEs.',
    url: 'https://iprkaro.com/service/patent-filing',
    type: 'article',
    images: [
      {
        url: 'https://iprkaro.com/assets/patent-registration-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Patent Filing Services India',
      },
    ],
  },
  alternates: {
    canonical: 'https://iprkaro.com/service/patent-filing',
  },
};

const tocSections = [
  { id: 'why-patent-invention', title: 'Why Patent?' },
  { id: 'patent-fees-cost', title: 'Fees & Costs (2025)' },
  { id: 'filing-process-roadmap', title: 'Filing Roadmap' },
  { id: 'provisional-vs-complete', title: 'Prov. vs Complete' },
  { id: 'documents-checklist', title: 'Documents Checklist' },
  { id: 'patent-examination', title: 'Examination & Grant' },
  { id: 'fast-track-patents', title: 'Fast-Track (Expedited)' },
  { id: 'pct-international', title: 'International (PCT)' },
  { id: 'commercialization', title: 'Commercialization' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "How much does it cost to file a patent in India?",
    answer: "The government fee for filing an online patent application (Form 1) is ₹1,600 for Individuals, Startups, and MSMEs, and ₹8,000 for Large Entities. Professional fees for drafting and prosecution are additional. Startups and MSMEs enjoy an 80% rebate on government fees."
  },
  {
    question: "Can I patent an idea without a prototype?",
    answer: "Yes, you can file a patent for an idea as long as you can describe it in sufficient detail (enablement) so that a person skilled in the field can make it. You do typically need a physical prototype at the time of filing, but detailed drawings and a theoretical working model are essential."
  },
  {
    question: "What is the timeline for a patent grant in India?",
    answer: "The normal route takes 3-5 years from filing to grant. However, by using 'Expedited Examination' (Form 18A), Startups, MSMEs, and female applicants can often obtain a patent grant in as little as 12-18 months."
  },
  {
    question: "Is software patentable in India (Section 3k)?",
    answer: "Computer programs *per se* are not patentable under Section 3(k). However, if the software has a 'technical effect' or is used in conjunction with novel hardware to solve a tangible technical problem, it may be patentable. Expert drafting is crucial here."
  },
  {
    question: "What is the difference between Provisional and Complete Specification?",
    answer: "A Provisional Application is a cheaper, preliminary filing to secure a 'Priority Date'. You get 12 months to refine your invention and file the Complete Specification (final document). If you miss the 12-month deadline, your application is abandoned."
  },
  {
    question: "Does an Indian patent protect me globally?",
    answer: "No, patents are territorial. An Indian patent protects you only in India. To protect globally, you can file a PCT (Patent Cooperation Treaty) application within 12 months, giving you access to 150+ countries."
  },
  {
    question: "What happens if I disclose my invention before filing?",
    answer: "Public disclosure (publishing, selling, or exhibiting) before filing destroys 'Novelty', making your invention non-patentable. Always file a Provisional Application *before* any public disclosure or marketing."
  },
  {
    question: "Who can apply for a patent?",
    answer: "The true and first inventor, their assignee (company), or legal representative. If you are an employee, your employment contract usually claims the patent rights for the employer."
  },
  {
    question: "What are the renewal fees?",
    answer: "Renewal fees are payable annually from the 3rd year onwards to keep the patent alive for the full 20-year term. If fees are not paid, the patent lapses."
  },
  {
    question: "Can I sell or license my patent?",
    answer: "Yes, a patent is intellectual property that can be sold (Assigned) for a lump sum or Licensed (rented) in exchange for Royalties. Assignment requires filing Form 16."
  }
];


export default function PatentFilingPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/service" },
    { label: "Patent Filing", href: "/service/patent-filing" },
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Patent Registration",
    "provider": {
      "@type": "Organization",
      "name": "IPR Karo"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": "Professional patent drafting and filing services in India. Provisional, Complete, and PCT applications."
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Patent Registration in India (2025) | Cost, Process & Filing",
        "description": "File your Patent in India with IPR Karo. Expert Patent Agents for Provisional/Complete specifications, Patent Search, and Expedited Examination.",
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": { "@type": "Organization", "name": "IPR Karo", "logo": { "@type": "ImageObject", "url": "https://iprkaro.com/logo.png" } }
      })}} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Patent Filing Services",
        "image": "https://iprkaro.com/assets/patent-registration-og.jpg",
        "description": "Professional patent filing and prosecution services in India.",
        "brand": { "@type": "Brand", "name": "IPR Karo" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "620" },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Dr. Ramesh Gupta" },
            "datePublished": "2024-04-12",
            "reviewBody": "Excellent patent drafting! Their technical team understood my mechanical invention perfectly. We got the Expedited Examination status approved in 2 weeks.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "InnovateTech Labs" },
            "datePublished": "2024-03-30",
            "reviewBody": "We filed a Provisional Application for our IoT device. The guidance on 'Novelty' was crucial. Very professional and cost-effective for startups.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      })}} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               Transform Your Invention into <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>A 20-Year Asset</span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
               Expert Patent Drafting & Filing Services in India. Secure your technology, block competitors, and unlock licensing revenue. From Provisional to Grant, we are your R&D partners.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Book Patent Consultation
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-3 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-4 md:gap-8 items-start">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-4 sticky top-25 z-10">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm space-y-8 md:space-y-16">
                
                <section id="why-patent-invention" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Patent Your Invention?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    In the knowledge economy, ideas are currency. A patent is not just a certificate; it is the most powerful legal instrument available to protect technological innovation. Under the Patents Act, 1970, a granted patent gives you the **exclusive right** to prevent others from making, using, offering for sale, selling, or importing your invention in India.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Without a patent, your competitors can reverse-engineer your product and sell it at a lower price, as they haven't incurred your R&D costs. A patent levels the playing field and creates a "Legal Monopoly" for 20 years, allowing you to recover your investment and profit from your hard work.
                  </p>
                   <div className="bg-blue-50 border-l-4 border-[rgb(110,94,147)] p-4 md:p-8 my-6 md:my-8 rounded-r-lg">
                    <p className="text-base md:text-xl text-blue-900 italic leading-relaxed">
                      "A patent does not just protect a product; it creates a market barrier. It turns your technical advantage into a commercial fortress."
                    </p>
                  </div>
                </section>

                <section id="patent-fees-cost" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Patent Registration Fees & Costs (2025)</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      We believe in transparency. The cost of patenting includes **Government Fees** (paid to the IPO) and **Professional Fees** (for drafting and legal work). Startups and MSMEs get a massive **80% discount** on Govt fees.
                   </p>
                   
                   <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                      <table className="w-full text-left border-collapse text-sm md:text-base">
                        <thead className="bg-[#0C002B] text-white">
                           <tr>
                              <th className="p-4 border-b border-gray-700">Step / Form</th>
                              <th className="p-4 border-b border-gray-700">Individuals / Startups / MSMEs</th>
                              <th className="p-4 border-b border-gray-700">Large Entities (Companies)</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           <tr className="bg-white hover:bg-gray-50 transition-colors">
                              <td className="p-4 font-semibold text-gray-900">1. Filing Application (Form 1)</td>
                              <td className="p-4 text-green-600 font-bold">₹1,600</td>
                              <td className="p-4 text-gray-600">₹8,000</td>
                           </tr>
                           <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                              <td className="p-4 font-semibold text-gray-900">2. Early Publication (Form 9 - Optional)</td>
                              <td className="p-4 text-green-600 font-bold">₹2,500</td>
                              <td className="p-4 text-gray-600">₹12,500</td>
                           </tr>
                           <tr className="bg-white hover:bg-gray-50 transition-colors">
                              <td className="p-4 font-semibold text-gray-900">3. Request for Examination (Form 18)</td>
                              <td className="p-4 text-green-600 font-bold">₹4,000</td>
                              <td className="p-4 text-gray-600">₹20,000</td>
                           </tr>
                           <tr className="bg-purple-50 hover:bg-purple-100 transition-colors border-l-4 border-l-[rgb(110,94,147)]">
                              <td className="p-4 font-bold text-[rgb(110,94,147)]">Expedited Examination (Form 18A)</td>
                              <td className="p-4 text-[rgb(110,94,147)] font-bold">₹8,000</td>
                              <td className="p-4 text-gray-400">N/A (Generally)</td>
                           </tr>
                        </tbody>
                      </table>
                   </div>
                   <p className="text-sm text-gray-500 italic">* Fees are subject to change by the Indian Patent Office. Professional drafting fees are separate.</p>
                </section>

                <section id="patentability-criteria" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The "N.I.U" Criteria: Is Your Idea Patentable?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Not every idea can be patented. To qualify for a patent in India, your invention must meet the strict "N.I.U" test:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                     <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <div className="text-[rgb(110,94,147)] mb-4">
                            <FontAwesomeIcon icon={faLightbulb} className="w-10 h-10 mx-auto" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">1. Novelty (New)</h3>
                        <p className="text-gray-700 text-sm">The invention must not have been published or used anywhere in the world before the filing date. Even your own blog post or exhibition can destroy novelty!</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <div className="text-[rgb(110,94,147)] mb-4">
                            <FontAwesomeIcon icon={faMicroscope} className="w-10 h-10 mx-auto" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">2. Inventive Step</h3>
                        <p className="text-gray-700 text-sm">Also known as "Non-Obviousness". The invention must involve a technical advancement that isn't obvious to a person skilled in that field.</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <div className="text-[rgb(110,94,147)] mb-4">
                            <FontAwesomeIcon icon={faCogs} className="w-10 h-10 mx-auto" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">3. Industrial Use</h3>
                        <p className="text-gray-700 text-sm">The invention must be capable of being made or used in an industry. Abstract theories or mere artistic creations do not qualify.</p>
                     </div>
                  </div>
                </section>

                <section id="filing-process-roadmap" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Patent Lifecycle: From Idea to Grant</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Patent prosecution is a marathon, not a sprint. It involves strategic drafting and rigorous examination. Here is the standard roadmap:
                  </p>

                  <div className="space-y-4 md:space-y-8 mt-6 md:mt-8">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">1</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">1</span>
                             <FontAwesomeIcon icon={faSearch} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Prior Art Search (Novelty Check)
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                            Before spending money on filing, we conduct a global database search (USPTO, EPO, WIPO, Indian Patent Office) to ensure your idea is truly unique. This saves you from rejection later. A detailed "Patentability Opinion" helps refine your invention's scope.
                          </p>
                       </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">2</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">2</span>
                             <FontAwesomeIcon icon={faFileSignature} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Drafting & Filing (Form 1 & 2)
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             The most critical step. "Patent Drafting" is an art. We write the *Specification*, describing the invention, and the *Claims*, which define the legal boundaries. We file either a Provisional or Complete Specification along with Form 1 (Application) and Form 5 (Declaration of Inventorship).
                          </p>
                       </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">3</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">3</span>
                             <FontAwesomeIcon icon={faGlobe} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Publication (Form 9 - Optional)
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             The patent is published in the Official Journal after 18 months automatically. However, you can request an "Early Publication" using Form 9 to get it published within ~1 month. This is essential for asserting rights early.
                          </p>
                       </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">4</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">4</span>
                             <FontAwesomeIcon icon={faGavel} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Examination (FER Response)
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             A Patent Examiner reviews the application. They issue a "First Examination Report" (FER) listing objections (usually regarding novelty or clarity). We must file a technical and legal response to these objections within 6 months.
                          </p>
                       </div>
                    </div>

                    {/* Step 5 */}
                     <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">5</div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">5</span>
                             <FontAwesomeIcon icon={faCertificate} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Grant of Patent
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             If the Controller is satisfied with our response (and after a hearing if needed), the patent is granted. The certificate is issued, giving you exclusive rights for 20 years from the filing date.
                          </p>
                       </div>
                    </div>
                  </div>
                </section>

                <section id="provisional-vs-complete" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Provisional vs Complete Specification</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                      Understanding the difference is key to a cost-effective IP strategy.
                   </p>
                   
                   <div className="grid md:grid-cols-2 gap-8">
                       <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                           <h3 className="font-bold text-lg mb-4 text-green-900">Provisional Application</h3>
                           <ul className="space-y-3">
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-600 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Purpose:</strong> To lock in a "Priority Date" immediately.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-600 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Content:</strong> Broad description of invention concept. No claims required.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-600 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Cost:</strong> Lower upfront cost.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-600 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Advantage:</strong> Gives you 12 months to finalize R&D and funding before filing the final patent.</span>
                               </li>
                           </ul>
                       </div>

                       <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                           <h3 className="font-bold text-lg mb-4 text-blue-900">Complete Specification</h3>
                           <ul className="space-y-3">
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-blue-600 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Purpose:</strong> The final legal document for examination.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-blue-600 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Content:</strong> Detailed diagrams, examples, and precise LEGAL CLAIMS.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-blue-600 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Timing:</strong> Must be filed within 12 months of Provisional (or filed directly).</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-blue-600 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Risk:</strong> If not filed by 12 months, the priority date is lost.</span>
                               </li>
                           </ul>
                       </div>
                   </div>
                </section>

                <section id="documents-checklist" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Documents Checklist for Filing</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-lg mb-4 text-[rgb(110,94,147)]">Mandatory Documents</h3>
                          <ul className="space-y-3">
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Form 1:</strong> Application for Grant.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Form 2:</strong> Provisional/Complete Specification (The Code/Tech).</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Form 3:</strong> Foreign Filing Details (if applicable).</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Form 5:</strong> Declaration of Inventorship.</span>
                               </li>
                          </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-lg mb-4 text-[rgb(110,94,147)]">Identity & Discounts</h3>
                          <ul className="space-y-3">
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Identity Proof:</strong> PAN/Aadhaar for individuals.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Startup India Cert:</strong> For 80% Fee Rebate (if applicable).</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Udyam Registration:</strong> For MSME benefits.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700"><strong>Form 26:</strong> Power of Attorney (if hiring an agent).</span>
                               </li>
                          </ul>
                      </div>
                   </div>
                </section>

                <section id="fast-track-patents" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Fast-Track Your Patent (Expedited Examination)</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                      Standard patent grants can take 3-5 years. However, the Indian Patent Office allows **Expedited Examination (Form 18A)** for specific categories, reducing the grant time to as little as **1 year**.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700 font-bold">Who qualifies?</p>
                   <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="bg-gray-50 p-4 md:p-6 rounded-xl border-l-4 border-[rgb(110,94,147)]">
                         <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                            <FontAwesomeIcon icon={faRocket} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Startups & MSMEs
                         </h3>
                         <p className="text-gray-700 text-sm md:text-base">
                            Registered Startups (DPIIT recognized) and MSMEs (Udyam) are eligible for fast-tracking.
                         </p>
                      </div>
                      <div className="bg-gray-50 p-4 md:p-6 rounded-xl border-l-4 border-[rgb(110,94,147)]">
                         <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                            <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Female Applicants
                         </h3>
                         <p className="text-gray-700 text-sm md:text-base">
                            If at least one of the applicants is a female (natural person), provided she is major.
                         </p>
                      </div>
                   </div>
                </section>

                <section id="pct-international" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Global Protection: PCT Applications</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                      If you want to protect your invention in USA, Europe, or China, an Indian patent is not enough. You can use the **Patent Cooperation Treaty (PCT)** to file a single international application.
                   </p>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 border border-gray-100 rounded-lg">
                         <div className="text-[rgb(110,94,147)] mb-3">
                            <FontAwesomeIcon icon={faGlobe} className="text-2xl w-8 h-8" />
                         </div>
                         <h3 className="font-bold text-lg mb-2">The 30-Month Advantage</h3>
                         <p className="text-sm text-gray-600 mb-2">
                           Filing a PCT application gives you 30 or 31 months (from priority date) to decide which specific countries you want to enter. This buys you time to test the market and find investors before paying expensive foreign filing fees.
                         </p>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-lg">
                         <div className="text-[rgb(110,94,147)] mb-3">
                            <FontAwesomeIcon icon={faHourglassHalf} className="text-2xl w-8 h-8" />
                         </div>
                         <h3 className="font-bold text-lg mb-2">International Search Report</h3>
                         <p className="text-sm text-gray-600 mb-2">
                           You receive an ISR (International Search Report) which tells you the likelihood of your patent being granted in other countries. This is valuable intelligence.
                         </p>
                      </div>
                   </div>
                </section>

                <section id="commercialization" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Commercialization: Making Money from Patents</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      A patent is an asset. Once filed/granted, you can monetize it in multiple ways:
                   </p>
                   <div className="space-y-6">
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                            <FontAwesomeIcon icon={faHandshake} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Licensing (Royalty Income)
                         </h3>
                         <p className="text-gray-700 leading-relaxed">
                            You allow other companies to manufacture your product in exchange for a recurring royalty fee (e.g., 5% of sales). You retain ownership.
                         </p>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                            <FontAwesomeIcon icon={faMoneyBillWave} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Assignment (Selling the Patent)
                         </h3>
                         <p className="text-gray-700 leading-relaxed">
                            You sell the patent rights entirely to a larger company for a lump sum payment. This is a common exit for inventors who do not want to manufacture the product themselves.
                         </p>
                      </div>
                   </div>
                </section>

                <section id="review-section" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Client Success Stories</h2>
                   <div className="grid grid-cols-1 gap-6 md:gap-8">
                     <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                       <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 md:top-6 md:left-6 opacity-20 serif">"</div>
                       <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base md:text-lg leading-relaxed pt-4 md:pt-6 pl-2 md:pl-4">
                         "Excellent patent drafting! Their technical team understood my mechanical invention perfectly. We got the Expedited Examination status approved in 2 weeks."
                       </p>
                       <div className="flex items-center pl-2 md:pl-4">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 md:mr-4 text-base md:text-xl">D</div>
                         <div>
                           <p className="font-bold text-gray-900 text-base md:text-lg">Dr. Ramesh Gupta</p>
                           <p className="text-xs md:text-sm text-gray-500">Inventor, Pune</p>
                         </div>
                       </div>
                     </div>

                     <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                       <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 md:top-6 md:left-6 opacity-20 serif">"</div>
                       <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base md:text-lg leading-relaxed pt-4 md:pt-6 pl-2 md:pl-4">
                         "We filed a Provisional Application for our IoT device. The guidance on 'Novelty' was crucial. Very professional and cost-effective for startups."
                       </p>
                       <div className="flex items-center pl-2 md:pl-4">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 md:mr-4 text-base md:text-xl">I</div>
                         <div>
                           <p className="font-bold text-gray-900 text-base md:text-lg">InnovateTech Labs</p>
                           <p className="text-xs md:text-sm text-gray-500">Startup, Hyderabad</p>
                         </div>
                       </div>
                     </div>
                   </div>
                </section>

                {/* FAQ SECTION */}
                <section id="faqs" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 md:pb-8 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-4 flex items-start">
                          <span className="text-[rgb(110,94,147)] mr-2 md:mr-3 mt-1 text-sm md:text-base">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-6 md:pl-8 text-sm md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="why-choose-iprkaro" className="scroll-mt-24 md:scroll-mt-32 bg-black text-white p-6 md:p-8 rounded-xl md:rounded-2xl">
                  <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">Why Choose IPR Karo for Patents?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-2 md:p-4">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[rgb(110,94,147)]">
                         <FontAwesomeIcon icon={faRocket} className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="font-bold text-lg md:text-xl mb-2 text-[#FFD700]">Technical Expertise</h3>
                      <p className="text-gray-400 text-xs md:text-sm">Our team includes specialized patent agents (Engineers & PhDs) who understand your complex technology, not just the law.</p>
                    </div>
                    <div className="p-2 md:p-4">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[rgb(110,94,147)]">
                         <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="font-bold text-lg md:text-xl mb-2 text-[#FFD700]">Robust Drafting</h3>
                      <p className="text-gray-400 text-xs md:text-sm">We draft claims that are broad enough to prevent workarounds but specific enough to be granted. We aim for "litigation-grade" patents.</p>
                    </div>
                    <div className="p-2 md:p-4">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[rgb(110,94,147)]">
                         <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="font-bold text-lg md:text-xl mb-2 text-[#FFD700]">Fixed Pricing</h3>
                      <p className="text-gray-400 text-xs md:text-sm">Patent costs can spiral. We offer fixed-fee packages for drafting and filing, so you can budget your R&D effectively.</p>
                    </div>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-8 md:mt-12">
                   <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Protect Your Invention?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                      Don't disclose your idea before filing. Talk to our patent experts today and secure your priority date.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.4)] text-base md:text-lg w-full sm:w-auto">
                          File Patent Now
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                         <button className="bg-transparent border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all text-base md:text-lg w-full sm:w-auto backdrop-blur-sm flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="mr-2 w-5 h-5" />
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

             {/* Sidebar */}
             <div className="hidden lg:block space-y-8 sticky top-32">
                
                {/* Sidebar CTA */}
                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] p-6 rounded-xl shadow-lg border border-gray-800 text-white text-center">
                  <h3 className="text-xl font-bold mb-3">Patent Eligibility Check</h3>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    Not sure if your idea is patentable? Get a free 15-minute preliminary opinion.
                  </p>
                  <Link href="/contact-us" className="block w-full">
                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md text-sm">
                      Check Patentability
                    </button>
                  </Link>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a href="tel:+918700343611" className="text-sm font-semibold hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                      <span className="mr-2">
                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                      </span> +91-8700343611
                    </a>
                  </div>
                </div>

                {/* Related Features */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore More</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/service/trademark-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                        <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                          <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                        </span> Trademark Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/service/copyright-protection" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Copyright Protection
                      </Link>
                    </li>
                    <li>
                      <Link href="/features/trademark-risk-reduction" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Design Registration
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
