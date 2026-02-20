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
  faSync,
  faInfoCircle,
  faHammer,
  faGavel as faLegal,
  faFileInvoice,
  faUserShield
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'E-Filing Trademark India | Online Trademark Registration Guide',
  description: 'Complete guide to e-filing trademark in India. Learn the process, documents, costs, and benefits of online trademark registration. File your TM application today.',
  keywords: [
    'e-filing trademark',
    'online trademark registration',
    'trademark e-filing india',
    'how to file trademark online',
    'trademark registration process',
    'ip india e-filing',
    'brand registration online',
    'trademark application india'
  ],
  openGraph: {
    title: 'E-Filing Trademark India | Step-by-Step Online Guide',
    description: 'Master the process of e-filing your trademark in India. Fast, secure, and expert-backed registration services.',
    url: 'https://www.iprkaro.com/e-filing-trademark',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/e-filing-trademark',
  },
};

const tocSections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'benefits', title: 'Benefits' },
  { id: 'dsc', title: 'DSC Requirements' },
  { id: 'process', title: 'Step-by-Step Process' },
  { id: 'documents', title: 'Required Documents' },
  { id: 'classes', title: 'Trademark Classes' },
  { id: 'objections', title: 'Handling Objections' },
  { id: 'opposition', title: 'Opposition System' },
  { id: 'madrid', title: 'Madrid Protocol' },
  { id: 'infringement', title: 'Infringement & Remedies' },
  { id: 'case-laws', title: 'Landmark Case Laws' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "What exactly is e-filing of a trademark in the Indian context?",
    answer: "E-filing is the legally recognized process of submitting a trademark application (Form TM-A) electronically through the official IP India comprehensive portal. This system was introduced to streamline Intellectual Property management in India. It is significantly faster than traditional physical filing, as it bypasses manual data entry by the registry staff. Furthermore, it offers a direct 10 percent discount on official government fees, making it both a time-saving and cost-effective choice for modern businesses."
  },
  {
    question: "Why is a Class 3 Digital Signature Certificate (DSC) mandatory for online filing?",
    answer: "Under the provisions of the Information Technology Act of 2000, every legal document submitted electronically must be authenticated to ensure non-repudiation and data integrity. A Class 3 DSC provides the highest level of security available in India. It verifies the identity of the applicant or their authorized trademark attorney. Without mapping a valid DSC to your user profile on the IP India portal, the 'Sign' and 'Submit' functions remain inactive, effectively preventing the completion of the application."
  },
  {
    question: "What are the government fees for e-filing across different entity types?",
    answer: "The government fee structure is designed to incentivize smaller players. For Individuals, Sole Proprietorships, Startups (recognized by DPIIT), and Small Enterprises (possessing a valid Udyam certificate), the fee is ₹4,500 per class via e-filing. For all other entities, including large companies, Partnership firms, and Trusts, the fee is ₹9,000 per class. It is important to note that physical filing fees are 10 percent higher than these digital rates."
  },
  {
    question: "How long does the entire lifecycle from e-filing to registration take?",
    answer: "On average, the process takes anywhere between 6 to 18 months. If your application is unique and faces no objections from the examiner or oppositions from the public, you might receive your certificate closer to the 6 month mark. However, if legal arguments are required to overcome Section 9 or Section 11 objections, or if a third party files an opposition, the timeline can extend significantly as it moves into the quasi-judicial hearing phase."
  },
  {
    question: "Can I include multiple classes in a single electronic application?",
    answer: "Yes, the IP India portal supports multi-class applications through Form TM-A. While this allows you to manage multiple classes under a single application number, the government fee must still be paid for each class individually. For instance, an individual filing in 3 classes would pay ₹13,500 (4,500 x 3). Multi-class applications are efficient for brands that operate across diverse industries like clothing (Class 25) and retail services (Class 35)."
  },
  {
    question: "What are the specific stages an application goes through after e-filing?",
    answer: "Initially, the status shows 'Formalities Check Pass' if the basic documents are in order. Then, it moves to 'Marked for Exam', where a registrar reviews the mark against existing registrations. If they are satisfied, it becomes 'Accepted and Advertised', appearing in the Trademark Journal for a 4-month opposition period. If no one opposes the mark during this window, the status finally changes to 'Registered', and a digital registration certificate is issued."
  },
  {
    question: "What is an 'Objected' status in the examination report?",
    answer: "An 'Objected' status is a common administrative hurdle. It means the examiner has found legal grounds to pause your registration. This usually falls under Section 9 (lack of distinctiveness) or Section 11 (clash with an existing brand). You are then required to file a comprehensive legal response within 30 days. Failure to provide a convincing argument or missing the deadline leads to the automatic abandonment of your trademark application."
  },
  {
    question: "How can I track my trademark application status in real-time?",
    answer: "One of the greatest benefits of e-filing is 24/7 visibility. You can use the 'E-Register' or 'Trade Mark Status' tool on the official IP India website. By entering your unique 7-digit application number, you can view every document filed, every notice issued by the registry, and the current legal standing of your brand. We recommend checking this status once every two weeks to ensure no deadlines are missed."
  },
  {
    question: "Does e-filing help in securing international brand protection?",
    answer: "Absolutely. Once you have e-filed your 'Basic Application' in India, you can leverage the Madrid Protocol to expand your protection globally. This allows you to file one international application through the Indian Trademark Office, designating any of the 130 member countries. It is the most efficient and cost-effective method for Indian exporters and tech startups to build a global intellectual property portfolio."
  },
  {
    question: "When am I legally allowed to use the ® and ™ symbols?",
    answer: "This is a critical legal distinction. You can use the ™ (Trademark) symbol the very second you receive your e-filing receipt. It signifies that you have claimed ownership and an application is pending. However, you are strictly prohibited from using the ® (Registered) symbol until you have the final Registration Certificate in your hand. Using the ® symbol for an unregistered mark is a punishable offense under the Trade Marks Act."
  }
];

export default function EFilingTrademarkPage() {
  const breadcrumbItems = [
    { label: "E-filing Trademark", href: "/e-filing-trademark" },
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
    "headline": "Strategic Guide to E-Filing Trademark in India",
    "description": "A comprehensive 5000+ word expert guide on the technical and legal nuances of online trademark registration in India.",
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
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com/" },
            { "@type": "ListItem", "position": 2, "name": "E-filing Trademark", "item": "https://www.iprkaro.com/e-filing-trademark" }
          ]
        })
      }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "E-Filing Trademark Services",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1540"
          },
          "review": [
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Vikram Singh" },
              "datePublished": "2024-01-20",
              "reviewBody": "Seamless experience. Their team handled my DSC and e-filing perfectly. Highly recommended for the efficiency.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            }
          ]
        })
      }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">

        {/* Centered Hero Section (No Grid) */}
        <div className="relative w-full overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
          }}>
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
              Master the Art of <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>E-Filing Trademark</span> in India
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
              A definitive 5000+ word strategic guide for startups, corporations, and legal practitioners. Protect your brand identity with precision through the digital ecosystem of IP India.
            </p>
            <Link href="/contact-us">
              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg text-center">
                Secure Your Brand Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1700px] py-12">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 items-start mt-8">

            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#6E5E93] w-12 h-12" />
                  Contents
                </h2>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Column: Main Content Area */}
            <main className="min-w-0 bg-white p-5 md:p-16 rounded-3xl shadow-sm border border-gray-100">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-4 sticky top-[100px] z-20">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    Introduction: The Digital Transformation of Trademark Law in India
                  </h2>
                  <p className="text-xl leading-relaxed mb-6">
                    The landscape of Intellectual Property Rights in India has undergone a seismic shift with the introduction of the comprehensive e-filing system. Gone are the days of manual submissions, bulky paper trails, and endless queues at the Trademark Registry. Today, the Office of the Controller General of Patents, Designs and Trademarks (CGPDTM) provides a robust, encrypted, and highly efficient portal for <strong>e-filing trademark</strong> applications. This digital revolution is governed by the Trade Marks Act of 1999 and the Trade Marks Rules of 2017, which combined to create a paperless environment that prioritizes speed and transparency.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    The history of trademark law in India dates back to the common law principles of passing off, but it was the 1940 Act that first codified the registration process. Subsequent iterations like the 1958 Act and finally the 1999 Act have refined the definitions of 'mark' and 'trade' to include everything from logos to 3D shapes and even sound marks. The transition to e-filing in the last decade has been part of the broader 'Digital India' initiative, making the Indian Trademark Registry one of the most modernized IP offices in the world.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    For a modern business, the trademark is not just a logo; it is the nucleus of brand equity. It is the legal shield that protects your goodwill from dilution and your market share from hijackers. Understanding the technical and legal intricacies of online registration is no longer optional for entrepreneurs; it is a fundamental survival skill in the digital economy. The process of e-filing allows an applicant to secure their brand identity across the vast Indian marketplace within a few clicks. However, this ease of access comes with a heightened responsibility to ensure that the application is legally sound and technologically accurate.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    This guide is crafted to serve as the ultimate authority on the subject. We will navigate through the prerequisites like the Digital Signature Certificate (DSC), deconstruct the 45 classes of the Nice Classification, and explore the litigation strategies required to overcome the complex web of objections and oppositions that occur in the registry. By the end of this deep dive, you will possess a professional-grade understanding of how to navigate the IP India portal to secure your intellectual property.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    In the current competitive environment, where startups are booming and MSMEs are going global, the necessity of a registered trademark cannot be overstated. A trademark serves as a source identifier, a quality assurance symbol, and a powerful marketing tool. E-filing has democratized access to these protections, allowing even the smallest business in a remote corner of India to file for a trademark with the same ease as a multinational corporation based in Mumbai or Delhi. This guide will walk you through every micro-step of this journey, ensuring that your brand is not just filed, but registered and robustly protected.
                  </p>
                </section>

                <section id="benefits" className="scroll-mt-32 mt-16">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    The Strategic Benefits of E-Filing vs. Physical Filing: A Comparative Analysis
                  </h2>
                  <p className="text-lg leading-relaxed mb-10">
                    While physical filing is still technically possible, it is rapidly becoming an obsolete practice. The Trademark Registry heavily incentivizes the digital path. Here is a deep dive into why <strong>e-filing your trademark</strong> is the only logical choice for a serious business owner.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                      <FontAwesomeIcon icon={faMoneyBillWave} className="text-3xl text-[rgb(110,94,147)] mb-5 w-10 h-10" />
                      <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">1. Significant Cost Efficiency</h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        The government encourages digital adoption by offering a flat 10 percent discount on official fees for e-filed applications. For individuals, startups, and small enterprises, the fee is ₹4,500 for e-filing versus ₹5,000 for physical filing.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                      <FontAwesomeIcon icon={faRocket} className="text-3xl text-[rgb(110,94,147)] mb-5 w-10 h-10" />
                      <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">2. Instant Priority and Timestamps</h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        Electronic applications receive an instant application number and a precise timestamp of filing. This allows you to claim seniority over rivals immediately and start using the ™ symbol with a verifiable legal receipt.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-3xl text-[rgb(110,94,147)] mb-5 w-10 h-10" />
                      <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">3. Real-Time Status Tracking</h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        E-filed applications are indexed in the real-time database of IP India. You do not have to wait for weeks for the registry to manually entry your data. This visibility is crucial for brand managers.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    Beyond these, e-filing eliminates the risk of physical loss of documents. Manual files can be misplaced in the archives of the registry, leading to years of delay. Digital files are mirrored on multiple government servers, ensuring permanent records.
                  </p>
                </section>

                <section id="dsc" className="scroll-mt-32 mt-16">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    Digital Signature Certificate (DSC): The Technical Keystone
                  </h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Before you login to the portal, the most critical piece of infrastructure you need is a Class 3 Digital Signature Certificate. Under the Information Technology Act of 2000, a DSC is the digital equivalent of a physical signature. It provides the highest level of non-repudiation and data integrity for your legal submissions.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Without a valid DSC registered on the IP India portal, the e-filing system will not allow you to finalize Form TM-A. It is the authentication layer that proves you or your authorized attorney is indeed the entity making the claim. At IPR Karo, we handle the procurement and integration of DSC tokens for our clients.
                  </p>
                </section>

                <section id="process" className="scroll-mt-32 mt-16">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    Step-by-Step Walkthrough: The Lifecycle of Trademark E-Filing
                  </h2>
                  <div className="space-y-16 mt-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="bg-[rgb(110,94,147)] text-white w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl flex-shrink-0 shadow-2xl">01</div>
                      <div>
                        <h3 className="text-2xl font-black mb-5 uppercase tracking-tight text-gray-900">Comprehensive Public Search</h3>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                          We conduct an exhaustive search using the IP India Public Search tool. This is not just a simple name check. We analyze phonetic similarities, visual look-alikes via the international Vienna Codification system, and conceptual translations to avoid Section 11 objections.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="bg-[rgb(110,94,147)] text-white w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl flex-shrink-0 shadow-2xl">02</div>
                      <div>
                        <h3 className="text-2xl font-black mb-5 uppercase tracking-tight text-gray-900">Portal Registration and User Setup</h3>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                          We register your entity as a 'User' on the IP India e-filing gateway. This involves choosing the correct category: Individual, Sole Proprietorship, Startup, or Company. We map your Class 3 DSC to the profile for secure authentication.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="bg-[rgb(110,94,147)] text-white w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl flex-shrink-0 shadow-2xl">03</div>
                      <div>
                        <h3 className="text-2xl font-black mb-5 uppercase tracking-tight text-gray-900">Legal Drafting of Form TM-A</h3>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                          Drafting the actual application is an art. We carefully select the mark type and draft the 'Statement of Use'. If the brand is already in the market, we provide an exact 'User Date' supported by a notarized affidavit.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="documents" className="scroll-mt-32 mt-16">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    Required Documents for Error-Free E-Filing
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative overflow-hidden group">
                      <FontAwesomeIcon icon={faFileContract} className="text-4xl text-green-500 mb-6 w-10 h-10" />
                      <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Identity Proof</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">PAN Card and Aadhaar Card of the applicant or authorized signatory. Mandatory for all legal entities.</p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative overflow-hidden group">
                      <FontAwesomeIcon icon={faCertificate} className="text-4xl text-blue-500 mb-6 w-10 h-10" />
                      <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Business Proof</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Certificate of Incorporation, Partnership Deed, or MSME registration certificate for startups.</p>
                    </div>
                  </div>
                </section>

                <section id="classes" className="scroll-mt-32 mt-16">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    Mastering the 45 Trademark Classes
                  </h2>
                  <p className="text-lg leading-relaxed mb-10">
                    The protection of your mark is only as strong as its classification. Filing in the wrong class is a fatal strategic error. The Nice Classification divides goods and services into 45 distinct silos.
                  </p>
                  <div className="space-y-6">
                    <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-black mb-4 text-[rgb(110,94,147)] uppercase">Goods Classes (1-34)</h3>
                      <p className="text-base text-gray-600 leading-relaxed">Includes Class 9 for software/electronics, Class 25 for clothing, and Class 5 for pharmaceuticals. We help you choose the primary and secondary classes based on your product roadmap.</p>
                    </div>
                    <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-black mb-4 text-[rgb(110,94,147)] uppercase">Service Classes (35-45)</h3>
                      <p className="text-base text-gray-600 leading-relaxed">Includes Class 35 for retail/e-commerce, Class 42 for SaaS/Tech, and Class 43 for hospitality. Strategic classification prevents competitor encroaching.</p>
                    </div>
                  </div>
                </section>

                <section id="objections" className="scroll-mt-32 mt-16">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    Mastering Trademark Objections: Section 9 & 11
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    After your e-filing, the status may change to 'Objected'. This requires a comprehensive legal response within 30 days. We specialize in dismantling both Absolute and Relative grounds of refusal.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 my-10">
                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                      <h4 className="text-lg font-black text-red-600 mb-3 uppercase">Section 9: Distinctiveness</h4>
                      <p className="text-sm text-gray-600">Raised when a mark is descriptive. We argue acquired distinctiveness through extensive user evidence and market presence.</p>
                    </div>
                    <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                      <h4 className="text-lg font-black text-orange-600 mb-3 uppercase">Section 11: Similarity</h4>
                      <p className="text-sm text-gray-600">Raised when a mark is similar to existing brands. We use phonetic analysis and trade channel differences to win.</p>
                    </div>
                  </div>
                </section>

                <section id="opposition" className="scroll-mt-32 mt-16">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    The Public Opposition System: Navigating Section 21 Litigation
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Surviving the examination is a victory, but it is not the end of the journey. Once the examiner is satisfied, your mark is 'Accepted & Advertised' in the Trademark Journal. This is a weekly digital publication that acts as a notice to the world. For 4 months, any third party who believes your mark infringes on their rights can file a 'Notice of Opposition' under Section 21 of the Act.
                  </p>
                  <div className="bg-[#0C002B] text-white p-10 rounded-2xl my-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] opacity-10 rounded-full blur-3xl"></div>
                    <h3 className="text-xl font-black mb-6 border-b border-white/10 pb-4 uppercase tracking-widest">The Opposition Timeline</h3>
                    <div className="space-y-6">
                      <div className="flex gap-5">
                        <div className="text-[rgb(110,94,147)] font-black text-xl uppercase tracking-tighter w-40 flex-shrink-0">Stage 1:</div>
                        <p className="text-base opacity-80 leading-relaxed">The Window of Opportunity for any third party to file a Notice of Opposition (Form TM-O). Any entity claiming prior use can intervene here to protect their market share.</p>
                      </div>
                      <div className="flex gap-5">
                        <div className="text-[rgb(110,94,147)] font-black text-xl uppercase tracking-tighter w-40 flex-shrink-0">Stage 2:</div>
                        <p className="text-base opacity-80 leading-relaxed">The Applicant must file a 'Counter Statement' within 2 months of receiving the notice. Failing to file this within this strict window leads to automatic abandonment.</p>
                      </div>
                      <div className="flex gap-5">
                        <div className="text-[rgb(110,94,147)] font-black text-xl uppercase tracking-tighter w-40 flex-shrink-0">Stage 3:</div>
                        <p className="text-base opacity-80 leading-relaxed">Evidence phase where both parties submit business records, invoices, and affidavits to verify their trademark claims before the Registrar.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Opposition proceedings are serious litigations that require a deep understanding of the 'Law of Passing Off' and 'Purity of the Register' principles. At IPR Karo, we assist brands in navigating these quasi-judicial trials with strategic evidence and expert legal arguments.
                  </p>
                </section>

                <section id="madrid" className="scroll-mt-32 mt-16">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    Global Brand Protection: E-Filing via the Madrid Protocol
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Your Indian trademark registration is your gateway to the world. India joined the Madrid Protocol in 2013, which allows Indian entities to protect their trademark in up to 130 countries by filing a single international application through the IP India portal. This system is extremely efficient for exporters and tech startups aiming for international markets like the USA, EU, and UAE.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The process involves using your Indian 'Basic Application' as a foundation. By filing through WIPO (World Intellectual Property Organization), you can designate multiple jurisdictions. One single set of fees, paid in Swiss Francs (CHF), covers all your selections. We manage the entire lifecycle of your Madrid application, from selecting countries to responding to international irregularities.
                  </p>
                </section>

                <section id="infringement" className="scroll-mt-32 mt-16">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    Infringement Jurisprudence: Using Your Mark as a Sword
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A registered trademark is not just a defensive shield; it is a formidable sword. If any entity uses a mark that is deceptively similar to yours without authorization, the Trade Marks Act of 1999 provides you with robust civil and criminal remedies. From permanent injunctions to police raids for counterfeit goods, the legal arsenal is comprehensive.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Common remedies include 'Quia Timet' actions to prevent threatened infringement and 'Anton Piller' orders for surprise inspections of infringer premises. We help you enforce your rights through strategic cease and desist notices and aggressive litigation in High Courts across India to protect your hard-earned reputation.
                  </p>
                </section>

                <section id="case-laws" className="scroll-mt-32 mt-16">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 border-l-8 border-[rgb(110,94,147)] pl-5">
                    Landmark Case Laws Shaping Indian Trademark Jurisprudence
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The application of trademark law in India is heavily guided by judicial precedents. In the landmark <em>Cadila Healthcare Ltd. vs. Cadila Pharmaceuticals Ltd.</em> case, the Supreme Court established strict rules for medicinal trademarks to prevent consumer confusion that could have life-threatening consequences. In <em>Nandhini Deluxe vs. Karnataka Co-operative Milk Producers</em>, the court clarified that similar marks can coexist if they operate in different industries without causing deception.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Another pillar is the <em>Toyota Jidosha Kabushiki Kaisha vs. Prius Auto Industries</em> case, which refined the 'Trans-border Reputation' doctrine in India, emphasizing that global fame must be backed by local reputation. Furthermore, the <em>Whirlpool Corporation vs. Registrar of Trademarks</em> case established that the non-renewal of a mark does not necessarily mean the loss of its reputation. The <em>Yahoo! Inc. vs. Akash Arora</em> case was the first to protect domain names as trademarks in India, paving the way for the digital brand era.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the <em>Bayerische Motoren Werke AG (BMW) vs. Om Balajee Automobile (India) Private Limited</em> case, the High Court protected the 'BMW' mark against an e-rickshaw manufacturer using the name 'DMW', reinforcing the protection against dilution. These cases form the backbone of our legal arguments during trademark hearings at the registry.
                  </p>
                </section>

                <section id="faqs" className="scroll-mt-32 mt-24">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-10">Expert FAQs on E-Filing Trademark</h2>
                  <div className="space-y-10">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-10 last:border-0">
                        <h3 className="text-xl font-black text-gray-900 mb-5 flex items-start">
                          <span className="text-[rgb(110,94,147)] mr-5 mt-1 opacity-40">Q.</span>
                          {faq.question}
                        </h3>
                        <div className="text-base text-gray-600 leading-relaxed pl-10 border-l-4 border-gray-50">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA for SEO/Conversion */}
                <div className="bg-gradient-to-br from-[#0C002B] to-[#160049] p-10 md:p-20 rounded-3xl text-center text-white mt-24 relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-black mb-6 leading-tight">Start Your Digital Brand Journey</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                      Don't leave your brand's future to chance. Let our expert attorneys handle the technical and legal complexities of your trademark e-filing.
                    </p>
                    <Link href="/contact-us">
                      <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(130,114,167)] text-white font-black py-5 px-16 rounded-full transition-all transform hover:scale-105 shadow-xl text-xl md:text-2xl uppercase tracking-widest">
                        Contact Expert Now
                      </button>
                    </Link>
                  </div>
                </div>

              </article>
            </main>

            {/* Right Column - Sidebar Widgets */}
            <aside className="hidden lg:block space-y-10 sticky top-32">

              {/* Sidebar CTA Box */}
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Protect Your Brand Now</h3>
                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                  Don't let copycats profit from your hard work. Secure your trademark today with India's most trusted legal team.
                </p>
                <Link href="/contact-us" className="block relative z-10">
                  <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                    Book Free TM Search
                  </button>
                </Link>
                <div className="mt-6 pt-6 border-t border-white/10 relative z-10 text-center">
                  <a href="tel:+919289707648" className="text-indigo-300 font-bold hover:text-white transition-colors flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" /> +91-9289707648
                  </a>
                </div>
              </div>

              {/* Related Pages Widget */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Related Topics</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Registration Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gst-required-for-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">GST & Trademarks</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-register-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">TM Registration Guide</span>
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
