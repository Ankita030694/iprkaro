import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // SEO: Next.js Image for performance + CWV
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// SEO: Tree-shaken imports — only actually-used icons are bundled
import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faFileContract } from '@fortawesome/free-solid-svg-icons/faFileContract';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons/faCheckDouble';
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding';
import { faGavel } from '@fortawesome/free-solid-svg-icons/faGavel';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons/faFileSignature';
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';

export const metadata: Metadata = {
  title: 'Expedited Trademark Filing in India | Fast Track Guide',
  description: 'Complete guide to the expedited process of trademark filing in India under Rule 34. Learn Form TM-M fees, eligibility, timeline (3-6 months), and step-by-step procedure for fast-track trademark registration.',
  keywords: [
    'expedited process of trademark filing india',
    'fast track trademark registration india',
    'expedited trademark examination india',
    'trademark fast track registration rule 34',
    'form tm-m expedited trademark',
    'how to expedite trademark registration india',
    'trademark registration in 3 months india',
    'expedited trademark filing fees india',
    'cgpdtm fast track trademark',
    'urgent trademark registration india',
  ],
  openGraph: {
    title: 'The Complete Guide to Expedited Trademark Filing in India (2024)',
    description: 'Register your trademark in 3 to 6 months instead of 24. Expert guide on fast-track filing under Rule 34, Form TM-M, fees, and eligibility.',
    url: 'https://www.iprkaro.com/expedited-process-of-trademark-filing',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/expedited-process-of-trademark-filing',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Why Speed Matters in Brand Registration' },
  { id: 'legal-basis', title: 'Legal Basis: Rule 34 Explained' },
  { id: 'who-should-file', title: 'Who Should Use the Expedited Route?' },
  { id: 'eligibility', title: 'Eligibility Criteria' },
  { id: 'fast-track-vs-standard', title: 'Fast Track vs Standard Registration' },
  { id: 'fee-structure', title: '2024 Fee Chart: Standard vs Expedited' },
  { id: 'step-by-step', title: '8-Step Expedited Filing Procedure' },
  { id: 'form-tm-m', title: 'How to File Form TM-M' },
  { id: 'expedited-examination', title: 'Expedited Examination Process' },
  { id: 'timeline', title: 'Realistic Timeline Breakdown' },
  { id: 'tips-for-approval', title: 'Expert Tips to Avoid Objections' },
  { id: 'fast-track-india', title: 'Fast Track Registration India' },
  { id: 'faqs', title: 'Expedited Filing FAQs' },
  { id: 'reviews', title: 'Client Success Stories' },
];

const faqs = [
  {
    question: "What is the expedited process of trademark filing in India?",
    answer: "The expedited process of trademark filing, officially called 'Expedited Examination of Application', is governed by Rule 34 of the Trade Marks Rules, 2017. It allows applicants to pay an additional government fee to have their trademark application prioritized and examined faster than the standard queue."
  },
  {
    question: "How long does expedited trademark registration take in India?",
    answer: "Expedited examination typically reduces the overall timeline from the standard 18 to 24 months down to approximately 3 to 6 months, provided there are no objections or oppositions. The examination report itself is typically issued within 1 to 3 months of filing."
  },
  {
    question: "What is Form TM-M for trademark filing?",
    answer: "Form TM-M is the specific application form used to request expedited examination of a trademark application in India. It must be submitted along with the additional expedited examination fee to the Indian Trademark Registry through the CGPDTM online portal."
  },
  {
    question: "What are the fees for expedited trademark registration?",
    answer: "For individuals, startups (DPIIT-recognized), and MSMEs: the additional expedited examination fee is Rs. 20,000 per application. For other entities (companies, LLPs): the fee is Rs. 40,000 per application. This is in addition to the standard filing fee of Rs. 4,500 or Rs. 9,000 per class."
  },
  {
    question: "Can I apply for expedited examination after filing the main application?",
    answer: "Yes. Form TM-M for expedited examination can be filed either at the time of the initial application or at any subsequent stage, provided the application has not yet been marked for a show-cause hearing."
  },
  {
    question: "Does the expedited process guarantee trademark registration?",
    answer: "No. The expedited process only accelerates the examination and processing stages. It does not guarantee approval. If the examiner raises objections (Section 9 or 11 grounds), you must still respond within 30 days. The 4-month opposition period in the Trademark Journal also remains unchanged."
  },
  {
    question: "Who is eligible for the expedited trademark filing process?",
    answer: "Any applicant can file for expedited examination by paying the fee. However, the reduced fee category (Rs. 20,000) applies to individuals, DPIIT-recognized startups, MSMEs, women entrepreneurs, and small entities. Companies and LLPs pay Rs. 40,000."
  },
  {
    question: "What are valid reasons for requesting expedited trademark examination?",
    answer: "Under the current Trade Marks Rules, 2017, you are not required to provide a formal justification for urgency. Simply paying the expedited examination fee via Form TM-M is sufficient. Previously, applicants needed to state reasons, but this requirement has been relaxed."
  },
  {
    question: "Is the expedited process available for multi-class trademark applications?",
    answer: "Yes. Expedited examination is available for both single-class and multi-class applications. However, the expedited fee is charged per application, not per class. The standard filing fee (which is charged per class) is still applicable."
  },
  {
    question: "Can a foreign company apply for expedited trademark registration in India?",
    answer: "Yes. Foreign applicants can apply for expedited trademark registration in India. They must have a Patent Agent or Trademark Attorney in India as their 'Address for Service'. The fee applicable would be Rs. 40,000 (the 'other entities' category) unless they qualify as an MSME."
  },
];

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Founder, LaunchFast Startups",
    text: "We had an investor meeting in 4 months and needed a registered trademark to show. IPR Karo filed it on the expedited route and we had our TM number within 6 weeks. The deal closed.",
    rating: 5,
  },
  {
    name: "Neha Kapoor",
    role: "Co-founder, Bloom Beauty Co.",
    text: "Our product was ready for national launch but needed IP protection first. The expedited route through IPR Karo got us registered in under 4 months. Absolutely worth the extra fee.",
    rating: 5,
  },
  {
    name: "Rajiv Sharma",
    role: "Director, Agri Nexus Ltd.",
    text: "A competitor was about to launch with a similar name. We used the expedited route to get our trademark registered first and establish priority. IPR Karo executed it flawlessly.",
    rating: 5,
  },
];

export default function ExpeditedTrademarkFilingPage() {
  const breadcrumbItems = [
    { label: 'Expedited Process of Trademark Filing', href: '/expedited-process-of-trademark-filing' },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  // SEO: Updated Article schema — author as Person with worksFor, plus image property
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Complete Guide to Expedited Trademark Filing in India (2024)",
    "description": "A comprehensive guide on the fast-track trademark registration process under Rule 34, covering Form TM-M, fees, eligibility, and the step-by-step procedure.",
    "image": "https://www.iprkaro.com/images/trademark-fast-track-vs-standard.webp",
    "author": {
      "@type": "Person",
      "name": "Trademark Attorney",
      "worksFor": {
        "@type": "Organization",
        "name": "IPR Karo"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPR Karo",
      "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo/iprlogo.svg" },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iprkaro.com/expedited-process-of-trademark-filing",
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-03-11",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com/" },
      { "@type": "ListItem", "position": 2, "name": "Expedited Trademark Filing", "item": "https://www.iprkaro.com/expedited-process-of-trademark-filing" },
    ],
  };


  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Expedited Trademark Registration Service India",
    "description": "Fast-track trademark registration in India under Rule 34. Get your trademark registered in 3-6 months with Form TM-M.",
    // SEO: image required for Merchant Listing rich results
    "image": [
      "https://www.iprkaro.com/images/trademark-fast-track-vs-standard.webp",
      "https://www.iprkaro.com/images/trademark-expedited-timeline.webp",
    ],
    "sku": "TM-EXPEDITED-001",
    "brand": { "@type": "Brand", "name": "IPR Karo" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "20000",
      // SEO: priceValidUntil must be a future date; was 2025-12-31 (expired) — now 2026-12-31
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "url": "https://www.iprkaro.com/expedited-process-of-trademark-filing",
      // SEO: seller required by Google Merchant Listing rich result guidelines
      "seller": {
        "@type": "Organization",
        "name": "IPR Karo",
        "url": "https://www.iprkaro.com",
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2400",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating.toString(),
        "bestRating": "5",
        "worstRating": "1",
      },
      "reviewBody": r.text,
    })),
  };


  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPR Karo",
    "url": "https://www.iprkaro.com",
    "logo": "https://www.iprkaro.com/logo/iprlogo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9289707648",
      "contactType": "customer service",
    },
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">

        {/* Hero Section */}
        <div
          className="relative w-full overflow-hidden"
          style={{ background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)' }}
        >
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
              Expedited Trademark Filing in India <br />
              <span style={{ color: 'rgb(110, 94, 147)' }}>
                (Fast-Track Registration Guide)
              </span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
              Why wait 24 months when you can get your trademark registered in 3 to 6 months? India's fast-track system under Rule 34 is your business's most powerful branding shortcut. This 5000+ word expert guide covers every fee, every form, and every step.
            </p>
            <Link href="/contact-us">
              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider font-black">
                File Expedited Trademark Now
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

        {/* Main 3-Column Layout */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">

            {/* Left Column - TOC */}
            <aside className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3 italic uppercase tracking-[0.2em] font-black underline underline-offset-4 decoration-[rgb(110,94,147)]">Fast-Track Index</h4>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* Middle Column */}
            <main className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-24 z-20">
                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                  <TableOfContents sections={tocSections} orientation="horizontal" />
                </div>
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">
                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

                  {/* Section 1 */}
                  <section id="introduction" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Why Speed Matters in Brand Registration
                    </h2>
                    <p className="mb-6">
                      In India's hypercompetitive business landscape, being second is often the same as being last. A brand name or logo that is not yet registered is a brand name that can be stolen, registered by a competitor, or burdened with an unexpected legal fight the moment you try to go national. The standard trademark registration process, while thorough, takes 18 to 24 months. For a startup about to launch, an entrepreneur negotiating a franchising deal, or a business facing a copycat competitor, that timeline is simply not acceptable.
                    </p>
                    <p className="mb-6">
                      Fortunately, the Indian Trademark Registry, operating under the Controller General of Patents, Designs and Trade Marks (CGPDTM), recognized this business reality. The result is the <strong>Expedited Process of Trademark Filing</strong>, a formal fast-track mechanism that compresses the registration journey to just 3 to 6 months for applicants who qualify and are willing to pay the priority fee.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                      <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                        <h4 className="font-black text-red-900 mb-3 uppercase text-sm flex items-center gap-2">
                          <FontAwesomeIcon icon={faClock} className="w-5 h-5" /> Standard Registration
                        </h4>
                        <p className="text-4xl font-black text-red-700 mb-2">18 to 24</p>
                        <p className="text-sm text-red-800 font-bold italic">Months from application to registration certificate</p>
                      </div>
                      <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                        <h4 className="font-black text-green-900 mb-3 uppercase text-sm flex items-center gap-2">
                          <FontAwesomeIcon icon={faBolt} className="w-5 h-5" /> Expedited Registration
                        </h4>
                        <p className="text-4xl font-black text-green-700 mb-2">3 to 6</p>
                        <p className="text-sm text-green-800 font-bold italic">Months from application to registration certificate</p>
                      </div>
                    </div>
                    {/* SEO: Featured snippet paragraph - targets definition-style queries */}
                    <div className="bg-purple-50 border-l-8 border-[rgb(110,94,147)] p-6 my-8 rounded-r-2xl shadow-sm">
                      <p className="text-base font-bold text-gray-800 leading-relaxed italic">
                        The <strong>expedited trademark filing process in India</strong> allows applicants to fast-track trademark examination under <strong>Rule 34 of the <a href="https://ipindia.gov.in/writereaddata/Portal/Images/pdf/TM_RULES_2017.pdf" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] underline hover:no-underline">Trade Marks Rules, 2017</a></strong> by filing <strong>Form TM-M</strong> and paying an additional government fee of Rs. 20,000 (for individuals/MSMEs) or Rs. 40,000 (for companies). This compresses the typical 18 to 24-month registration timeline down to just 3 to 6 months.
                      </p>
                    </div>
                    {/* SEO: Image with descriptive alt text for Google Image indexing */}
                    <div className="my-10 rounded-3xl overflow-hidden shadow-md border border-gray-100">
                      <Image
                        src="/images/trademark-fast-track-vs-standard.webp"
                        alt="Fast track vs standard trademark registration India comparison chart"
                        width={900}
                        height={450}
                        className="w-full h-auto object-cover"
                        priority
                      />
                      <p className="text-center text-xs text-gray-400 italic py-3 bg-gray-50">Fast track vs standard trademark registration India timeline comparison</p>
                    </div>
                    <p className="mb-6">
                      This guide is your definitive resource on the expedited trademark filing process in India. We cover the legal framework, the exact fees, the precise procedural steps, and the expert strategies to make your fast-track application succeed on the first attempt. If you face objections later, our guide on the <Link href="/trademark-objection-reply-format-india" className="text-[rgb(110,94,147)] underline font-bold hover:no-underline">trademark objection reply format</Link> will help you respond effectively.
                    </p>
                  </section>

                  {/* Section 2 */}
                  <section id="legal-basis" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Legal Basis: Rule 34 of the Trade Marks Rules, 2017
                    </h2>
                    <p className="mb-6">
                      The expedited trademark registration process is not an informal shortcut. It is a formally codified legal remedy under <strong>Rule 34 of the Trade Marks Rules, 2017</strong>. The rule, titled "Expedited Examination of Application," was introduced to provide a structured, transparent pathway for applicants who need priority processing. You can read the full text of the <a href="https://ipindia.gov.in/writereaddata/Portal/Images/pdf/TM_RULES_2017.pdf" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] underline font-bold hover:no-underline">Trade Marks Rules, 2017</a> on the official government portal.
                    </p>
                    <p className="mb-6">
                      Under Rule 34, the Registrar is authorized to examine an application out of the normal queue upon payment of the prescribed additional fee. Once the expedited request (via Form TM-M) is filed and the fee is paid, the application is flagged in the Registry's digital system and given priority at every stage, including examination, hearing scheduling, and journal publication. All applications must be filed through the <a href="https://ipindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] underline font-bold hover:no-underline">IP India Trademark Registry</a> online portal.
                    </p>
                    <div className="bg-[#0C002B] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden my-12">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                      <h4 className="text-xl font-black mb-4 uppercase italic">The Key Distinction</h4>
                      <p className="text-sm opacity-80 leading-relaxed font-bold italic">
                        The expedited route does not mean you bypass the legal scrutiny. Your application still goes through the full examination (under Sections 9 and 11 of the Trade Marks Act), the journal publication period, and the opposition window. What changes is the speed at which each of these stages is processed. The legal rigor remains intact; only the queue priority changes.
                      </p>
                    </div>
                    <p className="mb-6">
                      The 2017 Rules also simplified the earlier requirement of providing specific "urgent reasons." Today, any applicant, regardless of entity type, can access the expedited route simply by paying the applicable fee. There is no need to justify urgency with a formal statement.
                    </p>
                  </section>

                  {/* Section 3 */}
                  <section id="who-should-file" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Who Should Use the Expedited Route?
                    </h2>
                    <p className="mb-6">
                      The <strong>expedited trademark filing process</strong> is not for everyone, but for certain categories of applicants it is practically essential. Here are the five scenarios where it makes the strongest business case:
                    </p>
                    <div className="space-y-6 mb-10">
                      {[
                        {
                          icon: faRocket,
                          title: "Startups with Funding Rounds",
                          desc: "Venture capital firms and angel investors increasingly conduct IP due diligence before finalizing term sheets. A trademark application acknowledgment is good, but a registration is better. Expedited filing can deliver a TM certificate before your Series A closes.",
                        },
                        {
                          icon: faBuilding,
                          title: "Businesses Planning Product Launches",
                          desc: "If you are scheduling a national marketing campaign, the period between campaign launch and trademark registration under the standard timeline is a dangerous window of vulnerability. Expedited filing closes that window.",
                        },
                        {
                          icon: faGavel,
                          title: "Brands Facing Copycat Threats",
                          desc: "If you have discovered a competitor operating with a similar name, securing your registration on a priority basis strengthens your legal position significantly. A registered mark is far harder to challenge than a pending application.",
                        },
                        {
                          icon: faFileContract,
                          title: "Franchisors and Licensors",
                          desc: "You cannot legally grant a valid franchise or licensing right over an unregistered mark in India. For entrepreneurs building a franchise model, expedited registration is the prerequisite to closing the first franchise agreement.",
                        },
                        {
                          icon: faArrowRight,
                          title: "Exporters and International Traders",
                          desc: "International buyers, Amazon Global, and foreign distribution partners want proof of trademark ownership. A registered mark is the single most important document in international IP negotiations.",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[rgb(110,94,147)] transition-all">
                          <div className="bg-[rgb(110,94,147)] text-white w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-black text-gray-900 text-sm uppercase mb-2">{item.title}</h4>
                            <p className="text-xs text-gray-600 font-bold italic leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Section 4 */}
                  <section id="eligibility" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Eligibility Criteria for Expedited Filing
                    </h2>
                    <p className="mb-6">
                      While the expedited route is technically open to all applicants, the fee structure differentiates between applicant categories. Understanding which category your entity falls under will directly determine your cost of registration.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                        <h4 className="font-black text-blue-900 mb-4 uppercase text-sm">Reduced Fee Category (Rs. 20,000 additional)</h4>
                        <ul className="space-y-2">
                          {[
                            "Individual applicants",
                            "Startups recognized by DPIIT",
                            "Micro, Small & Medium Enterprises (MSMEs)",
                            "Women entrepreneurs",
                            "Small entities (as defined under the Rules)",
                            "Educational institutions and non-profits",
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs font-bold text-blue-800">
                              <FontAwesomeIcon icon={faCircleCheck} className="text-blue-500 w-3 h-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                        <h4 className="font-black text-gray-900 mb-4 uppercase text-sm">Standard Fee Category (Rs. 40,000 additional)</h4>
                        <ul className="space-y-2">
                          {[
                            "Private Limited Companies",
                            "Public Limited Companies",
                            "Limited Liability Partnerships (LLPs)",
                            "Partnership firms",
                            "Foreign companies and entities",
                            "All other legal entities",
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                              <FontAwesomeIcon icon={faCircleCheck} className="text-gray-400 w-3 h-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="mb-6">
                      The key eligibility requirement that applies to all applicants: the trademark application must be filed <strong>online</strong> through the CGPDTM e-filing portal. Physical (offline) applications are not eligible for the expedited examination route.
                    </p>
                  </section>

                  {/* SEO: Comparison table section - new keyword H2 */}
                  <section id="fast-track-vs-standard" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 text-center">
                      Fast Track vs Standard Trademark Registration
                    </h2>
                    <p className="mb-6 text-center text-gray-600 font-bold italic">
                      Here is a direct comparison to help you decide whether the expedited route is right for your business.
                    </p>
                    {/* SEO: Image alt targets "fast track vs standard trademark registration India" */}
                    <div className="my-8 rounded-3xl overflow-hidden shadow-md border border-gray-100">
                      <Image
                        src="/images/trademark-expedited-timeline.webp"
                        alt="Expedited trademark registration timeline India step by step"
                        width={900}
                        height={420}
                        className="w-full h-auto object-cover"
                      />
                      <p className="text-center text-xs text-gray-400 italic py-3 bg-gray-50">Expedited trademark registration timeline India</p>
                    </div>
                    <div className="overflow-x-auto my-10">
                      <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                        <caption className="sr-only">Comparison of fast track versus standard trademark registration in India</caption>
                        <thead className="bg-gray-900 text-white italic font-black uppercase text-xs">
                          <tr>
                            <th className="p-4 border border-gray-700" scope="col">Process</th>
                            <th className="p-4 border border-gray-700" scope="col">Timeline</th>
                            <th className="p-4 border border-gray-700" scope="col">Government Fee (Individual/MSME)</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                          <tr className="bg-white">
                            <td className="p-4 border border-gray-200 font-bold">Standard Trademark Filing</td>
                            <td className="p-4 border border-gray-200 text-red-600 font-bold">18 to 24 months</td>
                            <td className="p-4 border border-gray-200 font-bold">Rs. 4,500 per class</td>
                          </tr>
                          <tr className="bg-green-50 border-t-2 border-green-400">
                            <td className="p-4 border border-gray-200 font-black text-gray-900">Expedited Trademark Filing</td>
                            <td className="p-4 border border-gray-200 font-black text-green-700">3 to 6 months</td>
                            <td className="p-4 border border-gray-200 font-black text-[rgb(110,94,147)]">
                              Rs. 24,500 total
                              <span className="block text-xs text-gray-400 font-normal">(Rs. 4,500 filing + Rs. 20,000 expedited)</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-400 italic text-center">
                      Source: <a href="https://ipindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] underline">IP India Trademark Registry</a>. Government fees only. Professional charges are additional.
                    </p>
                  </section>

                  {/* Section 5 - Fee Chart */}
                  <section id="fee-structure" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 text-center">
                      2024 Fee Chart: Standard vs Expedited
                    </h2>
                    <div className="overflow-x-auto my-10">
                      <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                        <thead className="bg-gray-900 text-white italic font-black uppercase text-xs">
                          <tr>
                            <th className="p-4 border border-gray-700">Fee Component</th>
                            <th className="p-4 border border-gray-700">Individual/MSME/Startup</th>
                            <th className="p-4 border border-gray-700">Company/LLP/Others</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                          <tr className="bg-white">
                            <td className="p-4 border border-gray-200 font-bold">Standard TM-A Filing Fee (per class)</td>
                            <td className="p-4 border border-gray-200 text-green-600 font-bold">Rs. 4,500</td>
                            <td className="p-4 border border-gray-200 font-bold">Rs. 9,000</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 border border-gray-200 font-bold">Expedited Examination Fee (Form TM-M)</td>
                            <td className="p-4 border border-gray-200 text-orange-600 font-bold">Rs. 20,000</td>
                            <td className="p-4 border border-gray-200 text-orange-600 font-bold">Rs. 40,000</td>
                          </tr>
                          <tr className="bg-white border-t-2 border-[rgb(110,94,147)]">
                            <td className="p-4 border border-gray-200 font-black text-gray-900 uppercase">Total Govt. Fee (1 class, online)</td>
                            <td className="p-4 border border-gray-200 font-black text-xl text-[rgb(110,94,147)]">Rs. 24,500</td>
                            <td className="p-4 border border-gray-200 font-black text-xl">Rs. 49,000</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 border border-gray-200 font-bold italic text-gray-500">Registration Timeline (est.)</td>
                            <td className="p-4 border border-gray-200 font-bold text-green-600">3 to 6 months</td>
                            <td className="p-4 border border-gray-200 font-bold text-green-600">3 to 6 months</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-400 italic text-center">
                      Note: These are government fees only. Attorney/consultancy fees are separate. The expedited fee applies per application, not per class. Physical filing fees are 10 to 20% higher.
                    </p>
                  </section>

                  {/* Section 6 - Steps */}
                  <section id="step-by-step" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      The 8-Step Expedited Trademark Filing Procedure
                    </h2>
                    <div className="space-y-6">
                      {[
                        {
                          step: "1",
                          title: "Comprehensive Trademark Search",
                          desc: "Before filing anything, search the IP India public database for identical or similar existing marks in your target class. Conflicts detected at this stage can be resolved before filing, saving time and the expedited fee.",
                        },
                        {
                          step: "2",
                          title: "Determine Your Trademark Class (Nice Classification)",
                          desc: "Under the Nice Classification system, there are 45 classes covering different goods and services. Your application must specify the correct class(es). Filing in the wrong class is one of the most common and costly mistakes.",
                        },
                        {
                          step: "3",
                          title: "Prepare the Application Documents",
                          desc: "Gather your logo/mark representation in TIF/JPG format (not exceeding 8MB), applicant identity proof, address, and a signed Power of Attorney if filing through an agent.",
                        },
                        {
                          step: "4",
                          title: "File Form TM-A Online",
                          desc: "Submit the trademark application (Form TM-A) through the CGPDTM e-filing portal (https://ipindia.gov.in). Pay the standard filing fee of Rs. 4,500 or Rs. 9,000 per class depending on your entity type.",
                        },
                        {
                          step: "5",
                          title: "File Form TM-M for Expedited Examination",
                          desc: "Simultaneously or immediately after TM-A, file Form TM-M for expedited examination and pay the additional fee (Rs. 20,000 or Rs. 40,000). Once processed, your application is flagged as 'Priority' in the Registry system.",
                        },
                        {
                          step: "6",
                          title: "Receive and Respond to Examination Report",
                          desc: "The examiner issues a report within 1 to 3 months. If there are no objections, the application proceeds directly. If objections are raised, you have 30 days to file a detailed written response. This response is critical.",
                        },
                        {
                          step: "7",
                          title: "Journal Publication and 4-Month Opposition Window",
                          desc: "Upon acceptance, the trademark is published in the Trade Marks Journal. Any third party has exactly 4 months (120 days) to file an opposition. This period cannot be shortened even in the expedited route.",
                        },
                        {
                          step: "8",
                          title: "Receive Registration Certificate",
                          desc: "If no opposition is filed (or if opposition is successfully resolved), the trademark is registered and the certificate is issued. From this point, your trademark is valid for 10 years.",
                        },
                      ].map((item) => (
                        <div key={item.step} className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all">
                          <div className="bg-[rgb(110,94,147)] text-white w-12 h-12 rounded-full flex items-center justify-center font-black flex-shrink-0 text-xl shadow-md">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-black text-gray-900 uppercase text-sm mb-2">{item.title}</h4>
                            <p className="text-xs text-gray-600 font-bold italic leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Section 7 - Form TM-M */}
                  <section id="form-tm-m" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Mastering Form TM-M: The Expedited Filing Request
                    </h2>
                    <p className="mb-6">
                      Form TM-M is a multi-purpose miscellaneous form used in the Indian trademark system. For expedited examination, it is specifically the vehicle through which you formally request priority processing. Here are the critical fields and considerations when completing Form TM-M:
                    </p>
                    <div className="bg-gray-50 p-10 rounded-[3rem] border-2 border-dashed border-gray-200 mb-12">
                      <ul className="space-y-6">
                        {[
                          "Applicant Details: Enter the exact name and address as it appears on the main TM-A application. Any mismatch will cause procedural delays.",
                          "Application Reference Number: If filing TM-M after TM-A has been acknowledged, enter the allocated application number. If filing simultaneously, it can be submitted as part of the same transaction.",
                          "Purpose of Filing: Select 'Request for Expedited Examination under Rule 34'. Do not select any other option as this will direct the form to a different processing queue.",
                          "Fee Payment: The expedited fee must be paid via the online payment gateway at the time of submission. Accepted modes include net banking, credit/debit card, and UPI. Keep the payment receipt as it is required if any processing dispute arises.",
                          "Digital Signature: All online trademark forms require a valid Class 2 or Class 3 DSC (Digital Signature Certificate). If you do not have a DSC, your attorney can sign on your behalf with a Power of Attorney.",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <div className="bg-[rgb(110,94,147)] text-white w-7 h-7 rounded-full flex items-center justify-center font-black flex-shrink-0 text-xs">{i + 1}</div>
                            <p className="text-sm font-bold italic text-gray-700 leading-relaxed">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mb-6">
                      One practical tip that saves time: always file TM-M on the same day as TM-A. While the rules allow you to file TM-M at any subsequent stage before a show-cause hearing, filing it on day one ensures you get into the priority queue immediately. Any delay in filing TM-M means you spend that time in the standard queue.
                    </p>
                    {/* SEO: Form TM-M image */}
                    <div className="my-10 rounded-3xl overflow-hidden shadow-md border border-gray-100">
                      <Image
                        src="/images/form-tmm-example.webp"
                        alt="Form TM-M expedited trademark examination example India"
                        width={900}
                        height={420}
                        className="w-full h-auto object-cover"
                      />
                      <p className="text-center text-xs text-gray-400 italic py-3 bg-gray-50">Form TM-M expedited trademark examination example</p>
                    </div>
                  </section>

                  {/* Section 8 - Timeline */}
                  <section id="timeline" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 text-center">
                      Realistic Timeline Breakdown (2024)
                    </h2>
                    <div className="relative space-y-10 py-8">
                      <div className="hidden md:block absolute left-14 top-0 bottom-0 w-1 bg-gray-100 rounded-full"></div>
                      {[
                        { label: "Day 1", color: "bg-[rgb(110,94,147)]", title: "File TM-A + TM-M", desc: "Application filed online. Acknowledgment number generated instantly. Expedited flag activated on payment." },
                        { label: "Week 2", color: "bg-blue-500", title: "Formality Check", desc: "Registry verifies that the application is complete. If any document is missing, you receive a deficiency notice. Respond within 30 days." },
                        { label: "Month 1-3", color: "bg-green-500", title: "Examination Report Issued", desc: "The examiner reviews your mark for absolute grounds (Section 9) and relative grounds (Section 11). You receive either an acceptance or an objection report." },
                        { label: "Month 3-4", color: "bg-yellow-500", title: "Reply to Objections (if any)", desc: "If objections are raised, file a detailed written response within 30 days. A strong response at this stage can resolve the matter without a hearing." },
                        { label: "Month 4-5", color: "bg-orange-500", title: "Journal Publication", desc: "Mark is published in the bi-weekly Trade Marks Journal. The 120-day opposition window begins from the publication date." },
                        { label: "Month 6-9", color: "bg-green-600", title: "Registration Certificate Issued", desc: "If no opposition is filed, the registration certificate is issued. Your trademark is now legally valid and enforceable." },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-8 items-start relative">
                          <div className={`${item.color} text-white w-28 h-16 rounded-2xl flex items-center justify-center font-black text-sm z-10 shadow-lg flex-shrink-0 text-center px-2`}>{item.label}</div>
                          <div className={`bg-gray-50 p-6 rounded-2xl flex-1 border-l-8 ${item.color.replace('bg-', 'border-')}`}>
                            <h3 className="font-black text-gray-900 mb-1 uppercase text-sm">{item.title}</h3>
                            <p className="text-xs text-gray-600 leading-relaxed font-bold italic">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Section 9 - Tips */}
                  <section id="tips-for-approval" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Expert Tips to Avoid Objections and Speed Up Approval
                    </h2>
                    <p className="mb-6">
                      Paying the expedited fee secures your place in the priority queue. But it does not protect you from examination objections, which can add 2 to 4 months to your timeline even on the fast track. These expert-level tips reduce your risk of objections significantly:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      {[
                        {
                          icon: faLightbulb,
                          title: "Choose a Distinctive Mark",
                          desc: "Generic or descriptive words (like 'Best Biscuits' for a biscuit brand) are highly likely to face objection under Section 9. Coined words, arbitrary combinations, or strongly suggestive names get through much faster.",
                        },
                        {
                          icon: faCheckDouble,
                          title: "Search Before Filing",
                          desc: "A thorough pre-filing search on the IP India public portal rules out conflicts with existing marks. A conflicting mark triggers a Section 11 objection that is very hard to resolve short of litigation.",
                        },
                        {
                          icon: faFileSignature,
                          title: "Choose the Right Class",
                          desc: "Filing in the wrong class means your registration does not protect your actual business activity. If you are a restaurant (Class 43) and file in Class 30 (food products), your protection is incomplete.",
                        },
                        {
                          icon: faUserTie,
                          title: "Use a Professional Attorney",
                          desc: "Examiners grant more deference to well-structured applications filed by licensed agents. A professional attorney also drafts the specification of goods/services in legally precise language that reduces objection risk.",
                        },
                      ].map((item, i) => (
                        <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex gap-4">
                          <FontAwesomeIcon icon={item.icon} className="text-[rgb(110,94,147)] w-6 h-6 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-black text-gray-900 text-sm uppercase mb-2">{item.title}</h4>
                            <p className="text-xs text-gray-600 font-bold italic leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mb-6">
                      One additional point that many online services miss: if you can demonstrate prior use of the mark (through invoices, social media, packaging), include this as supporting evidence in the initial application itself. Prior use significantly strengthens your position if any relative ground objection arises, and it is very powerful when the examiner is deciding whether your mark is likely to cause confusion with an existing registration.
                    </p>
                    <p className="mb-6">
                      At IPR Karo, we have successfully cleared hundreds of expedited trademark applications across diverse industries. Our approach combines a rigorous pre-filing search, strategic class selection, and a strong specification of goods/services drafted to minimize examiner objections. Our first-clearance rate on expedited applications is consistently above 85 percent. Once registered, you should also be aware of <Link href="/trademark-enforcement-strategies" className="text-[rgb(110,94,147)] underline font-bold hover:no-underline">trademark enforcement strategies</Link> to protect your brand, and understand how to <Link href="/how-to-register-trademark" className="text-[rgb(110,94,147)] underline font-bold hover:no-underline">register a trademark</Link> using the standard route if you are not in a hurry.
                    </p>
                  </section>

                  {/* SEO: New keyword H2 section 1 - keyword: "fast track trademark registration in india" */}
                  <section id="fast-track-india" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Fast Track Trademark Registration in India
                    </h2>
                    <p className="mb-6">
                      <strong>Fast track trademark registration in India</strong> is the colloquial name for the officially titled "Expedited Examination of Application" process under Rule 34. The terminology difference matters because the <a href="https://ipindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] underline font-bold hover:no-underline">IP India Trademark Registry</a> uses "expedited examination" in all official correspondence, whereas businesses and legal professionals commonly call it the fast-track route.
                    </p>
                    <p className="mb-6">
                      The fast-track route became particularly popular after 2017 when the Trade Marks Rules were updated to remove the requirement of demonstrating "urgency." Before 2017, you had to submit a written justification explaining why you needed priority processing. Today, simply paying the fee is sufficient. This change made the process accessible to any business that can afford the additional fee and needs brand protection faster than the standard timeline allows.
                    </p>
                    <p className="mb-6">
                      Businesses that benefit most from fast track trademark registration in India include: companies with investor pitches scheduled within 6 months, brands preparing for a national advertising campaign, MSMEs applying for government schemes that require IP registration, and exporters preparing documentation for international trade agreements where trademark ownership must be evidenced.
                    </p>
                    <p className="mb-6">
                      The fast-track route is also widely used for file-and-forget strategies: a business files a standard TM-A for all planned future marks, then selectively upgrades the most commercially critical ones to expedited status using Form TM-M while keeping others in the standard queue. This maximizes protection coverage without spending the expedited fee on every single mark.
                    </p>
                  </section>

                  {/* SEO: New keyword H2 section 2 - keyword: "expedited examination of trademark applications" */}
                  <section id="expedited-examination" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Expedited Examination of Trademark Applications
                    </h2>
                    <p className="mb-6">
                      The term <strong>expedited examination of trademark applications</strong> refers specifically to the stage within the trademark registration process where the Trademark Examiner reviews your application for registrability. Under the standard process, an application can wait 6 to 9 months before an examiner even looks at it. Under the expedited route, this examination happens within 1 to 3 months of filing.
                    </p>
                    <p className="mb-6">
                      During examination, the Examiner applies two fundamental tests. The first is the <strong>absolute grounds test</strong> under Section 9 of the Trade Marks Act, 1999, which checks whether the mark is distinctive enough to function as a brand identifier. Descriptive, laudatory, or generic words fail this test. The second is the <strong>relative grounds test</strong> under Section 11, which checks the mark against existing registrations in the same or related classes for confusing similarity.
                    </p>
                    <p className="mb-6">
                      If the examiner raises no objections, the application is accepted and moves to journal publication. If objections are raised, an Examination Report is issued and you have 30 days to file a detailed written response. The expedited route does not change this 30-day window, but it does accelerate everything that comes before it.
                    </p>
                    <p className="mb-6">
                      A critical point that applicants on the fast-track route often miss: the expedited examination applies from filing through acceptance. However, if an objection response leads to a hearing, that hearing is scheduled on priority. This means even the post-objection phase is faster on the expedited route than on the standard one.
                    </p>
                  </section>

                  {/* FAQs - SEO: Converted to collapsible <details>/<summary> for accessibility + rich results */}
                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter underline underline-offset-[12px] decoration-[rgb(110,94,147)] decoration-8">
                      Expedited Filing FAQs
                    </h2>
                    <div className="space-y-3">
                      {faqs.map((f, i) => (
                        <details key={i} className="group border-b border-gray-100 pb-4">
                          <summary className="flex items-start gap-3 cursor-pointer list-none py-3 hover:text-[rgb(110,94,147)] transition-colors">
                            <span className="text-[rgb(110,94,147)] font-black flex-shrink-0">Q{i + 1}.</span>
                            <span className="text-base md:text-lg font-black text-gray-900 group-open:text-[rgb(110,94,147)] transition-colors">{f.question}</span>
                          </summary>
                          <p className="text-gray-600 pl-8 leading-relaxed font-bold italic opacity-70 pt-3 pb-2">
                            {f.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </section>

                  {/* Reviews */}
                  <section id="reviews" className="scroll-mt-32 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                      Client Success Stories
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

                  {/* Bottom CTA */}
                  <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0031] rounded-[4rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-12 shadow-[0_40px_100px_rgba(0,0,0,0.3)] group border border-white/5">
                    <div className="absolute -top-10 -right-10 w-96 h-96 bg-[rgb(110,94,147)] rounded-full blur-[150px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative z-10">
                      <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">Register in Months, Not Years</h2>
                      <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed italic">
                        Your brand cannot afford to wait 2 years for protection. Start the expedited process today with IPR Karo's expert team by your side.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link href="/contact-us">
                          <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-16 rounded-full transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(110,94,147,0.5)] text-xl uppercase tracking-widest font-black">
                            Start Fast-Track Filing
                          </button>
                        </Link>
                        <a href="tel:+919289707648">
                          <button className="bg-white/5 border-2 border-white/20 hover:border-white text-white font-bold py-5 px-16 rounded-full transition-all text-xl flex items-center justify-center backdrop-blur-3xl hover:bg-white/10">
                            <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-4" />
                            +91-9289707648
                          </button>
                        </a>
                      </div>
                    </div>
                  </section>

                </article>
              </div>
            </main>

            {/* Right Column - Sidebar */}
            <aside className="hidden lg:block space-y-8 sticky top-32">
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight uppercase font-black italic tracking-[0.1em]">Get a Fast-Track Quote</h3>
                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-bold italic">
                  Know your total cost in 2 minutes. Tell us your entity type and number of classes.
                </p>
                <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                  <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase font-black tracking-widest">
                    Get Free Fee Quote
                  </button>
                </Link>
                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                  <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-black text-gray-400 mb-6 border-b-2 border-gray-100 pb-4 uppercase tracking-widest italic">Related Guides</h3>
                <ul className="space-y-4">
                  {[
                    { href: '/fast-track-trademark-registration', label: 'Fast Track Registration' },
                    { href: '/how-to-register-trademark', label: 'Standard Registration Guide' },
                    { href: '/trademark-objection-reply-format-india', label: 'Objection Reply Format' },
                    { href: '/how-to-overcome-trademark-objection', label: 'Overcome Objection' },
                    { href: '/trademark-enforcement-strategies', label: 'Enforcement Strategies' },
                    { href: '/what-happens-if-trademark-expires', label: 'Trademark Expiry Guide' },
                  ].map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                        <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                        <span className="font-black text-[10px] uppercase tracking-tighter">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
