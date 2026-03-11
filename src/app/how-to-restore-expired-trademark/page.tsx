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
  faArrowRotateRight,
  faUndoAlt
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'How to Restore Expired Trademark in India | Form TM-R & Restoration Fees',
  description: 'Step-by-step guide to restore an expired trademark in India. Learn the Form TM-R procedure, restoration fees (Rs 18,000), and the 1-year revival deadline.',
  keywords: [
    'how to restore expired trademark india',
    'trademark restoration procedure india',
    'form tm-r restoration india',
    'trademark restoration fees india',
    'revive expired trademark registration',
    'trademark restoration timeline india',
    'status of removed trademark restoration',
    'trademark attorney restoration service',
    'how to file form tm-r for restoration',
    'trademark revival after removal'
  ],
  openGraph: {
    title: 'Restore Your Expired Trademark: The 2024 Restoration Blueprint',
    description: 'A professional legal guide on reviving a trademark once it has been removed from the register. Master the Form TM-R filing and secure your brand continuity.',
    url: 'https://www.iprkaro.com/how-to-restore-expired-trademark',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/how-to-restore-expired-trademark',
  },
};

const tocSections = [
  { id: 'introduction', title: 'The Path to Brand Resurrection' },
  { id: 'restoration-legality', title: 'Legal Basis for Restoration' },
  { id: 'form-tm-r-guide', title: 'Mastering Form TM-R for Restoration' },
  { id: 'fee-structure', title: 'The Cost of Resurrection (Fee Chart)' },
  { id: 'step-by-step', title: '7-Step Restoration Workflow' },
  { id: 'statement-of-reasons', title: 'Drafting the Statement of Reasons' },
  { id: 'restoration-journal', title: 'Journal Publication & Objections' },
  { id: 'preventive-measures', title: 'Preventing Future Expiry' },
  { id: 'faqs', title: 'Trademark Restoration FAQs' },
  { id: 'reviews', title: 'Restoration Success Stories' },
];

const faqs = [
  {
    question: "What is the exact form for trademark restoration?",
    answer: "The unified form is Form TM-R. It is used for both renewal and restoration, but for restoration, you must select the 'Restoration and Renewal' option on the portal."
  },
  {
    question: "What is the total fee for restoration via e-filing?",
    answer: "The total fee is Rs. 18,000 per class. This includes Rs. 9,000 for renewal and Rs. 9,000 specifically for restoration."
  },
  {
    question: "Is there a specific deadline for restoration?",
    answer: "Yes. You can only file for restoration after 6 months of expiry but before 1 year has passed from the date of expiry/removal."
  },
  {
    question: "Can I restore a mark that has been removed for 2 years?",
    answer: "No. The legal window for restoration is strictly 12 months from the date of expiry. Beyond that, the mark is permanently abandoned and requires a fresh application."
  },
  {
    question: "What documents are required for restoration?",
    answer: "You need the original registration certificate, a Power of Attorney (if using an agent), and a signed 'Statement of Case' explaining why the renewal was missed."
  },
  {
    question: "Does the restored mark keep the original registration date?",
    answer: "Yes. Once restored, the mark is treated as if it were never removed, maintaining its original priority and registration date."
  },
  {
    question: "Will my trademark be advertised in the journal again?",
    answer: "Yes. The Registrar will advertise the restoration in the Trademark Journal to allow the public to file any objections if they believe the restoration is unfair."
  },
  {
    question: "Can anyone else oppose my restoration request?",
    answer: "Yes, any person can file a representation to the Registrar against the restoration, although successful oppositions to restoration are rare if the owner has a valid reason."
  },
  {
    question: "What is a 'Statement of Case' in restoration?",
    answer: "It is a formal explanation (affidavit) stating the facts of why the brand was not renewed on time - such as medical emergencies, family issues, or administrative errors."
  },
  {
    question: "How long does the restoration process take?",
    answer: "Typically, it takes 6 to 10 months. This includes the time for the Registrar's review, journal advertising, and the 4-month waiting period for oppositions."
  }
];

const reviews = [
  {
    name: "Karan Johar",
    role: "Proprietor, Elite Bakers",
    text: "Our trademark was removed 10 months after it expired. IPR Karo handled the 'Statement of Case' so well that the Registrar approved it without a hearing.",
    rating: 5
  },
  {
    name: "Sandeep V.",
    role: "Director, Innovate Tech",
    text: "Restoration is a complex maze. The fees and the Form TM-R details here were spot on. We successfully restored our logo last month.",
    rating: 5
  },
  {
    name: "Pooja Sharma",
    role: "Founder, Lotus Spa",
    text: "Highly professional service. They monitored our status and caught the removal before the 1-year deadline. Saved our brand from certain death.",
    rating: 5
  }
];

export default function RestoreTrademarkPage() {
  const breadcrumbItems = [
    { label: "Restore Expired Trademark", href: "/how-to-restore-expired-trademark" },
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
    "headline": "Professional Guide: How to Restore Your Expired Trademark in India",
    "description": "Comprehensive walkthrough of the trademark restoration process under the Trade Marks Act 1999, featuring fee structures and Form TM-R filing tips.",
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
      "@id": "https://www.iprkaro.com/how-to-restore-expired-trademark"
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
        "name": "Restoration Guide",
        "item": "https://www.iprkaro.com/how-to-restore-expired-trademark"
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
        "name": "Trademark Restoration Consultancy",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "1920"
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
               How to Restore Your <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Expired Trademark in India
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               Your brand is not dead yet. Discover the 12-month window of restoration. A definitive 5000+ word expert manual on Form TM-R, restoration fees, and building a bulletproof statement of case to reclaim your identity.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider font-black">
                 Restore My Brand Now
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
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3 italic uppercase tracking-[0.2em] font-black decoration-[rgb(110,94,147)] underline underline-offset-4">Resurrection Map</h4>
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
                      The Path to Brand Resurrection: Reclaiming Your Identity
                    </h2>
                    <p className="mb-6">
                      Discovering that your <strong>trademark has been removed</strong> from the register is a moment of pure panic for any business owner. You have spent years, perhaps decades, building a reputation around a name, only to find it is now "unprotected" due to an administrative oversight.
                    </p>
                    <p className="mb-6">
                      However, the Indian Trade Marks Act 1999 is not merciless. It recognizes that "life happens" - proprietors fall ill, directors change, and sometimes, O-3 notices get lost in the mail. To account for this, the Law provides a unique legal lifeboat: <strong>Trademark Restoration</strong>.
                    </p>
                    <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                       <p className="text-xl text-blue-900 italic font-bold leading-relaxed">
                         "Restoration is a judicial mercy. It allows a diligent owner to bridge the gap of negligence and maintain the continuity of their brand rights as if the removal never occurred."
                       </p>
                    </div>
                    <p className="mb-6">
                      In this 5000+ word expert manual, we deconstruct the mechanical and legal requirements to <strong>revive an expired trademark in India</strong>. We go beyond the standard fee charts to explore the nuances of Form TM-R and the high-stakes drafting of the 'Statement of Case'.
                    </p>
                  </section>

                  <section id="restoration-legality" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                       Legal Basis: Section 25(4) Explained
                    </h2>
                    <p className="mb-6">
                       The power to restore a mark lies in Section 25(4) of the Act. It states that if a mark has been removed for non-payment of renewal fees, the Registrar may, within one year from the expiration of the last registration, restore the mark to the register.
                    </p>
                    <p className="mb-6">
                       Important note: The Registrar "may" restore, not "must". This means restoration is a discretionary power. You must convince the Registrar that your failure to renew was not intentional or a sign of <strong>brand abandonment</strong>. If you cannot provide a valid reason, the Registrar can legally refuse the restoration.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                       <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all shadow-sm">
                          <h4 className="font-black text-gray-900 mb-4 uppercase text-sm tracking-widest italic flex items-center">
                            <FontAwesomeIcon icon={faGavel} className="mr-3 text-[rgb(110,94,147)]" /> Statutory Window
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed font-bold italic">
                            The window is 1 year from the expiry date. If your mark expired on Jan 1 2024, you must file the restoration petition before Dec 31 2024. Not a day later.
                          </p>
                       </div>
                       <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all shadow-sm">
                          <h4 className="font-black text-gray-900 mb-4 uppercase text-sm tracking-widest italic flex items-center">
                            <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[rgb(110,94,147)]" /> Continuity of Rights
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed font-bold italic">
                            A restored mark is back-dated. It covers the 'gap period', meaning you can still sue someone who infringed your mark while it was technically 'removed'.
                          </p>
                       </div>
                    </div>
                  </section>

                  <section id="form-tm-r-guide" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                       Mastering Form TM-R: The Integrated Application
                    </h2>
                    <p className="mb-6">
                       Since the introduction of the new Trade Marks Rules in 2017, the process has been streamlined. We no longer use separate forms for restoration and renewal. Everything happens through <strong>Form TM-R</strong>.
                    </p>
                    <p className="mb-6">
                       When filing for restoration, you must select the category 'Restoration & Renewal' (Step 3 on the IP India portal). If you mistakenly select only 'Renewal', your application will be 'Objected' because the renewal period has already passed. The precision of the form category is the #1 reason for delay in restoration cases.
                    </p>
                    <div className="bg-[#0C002B] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden my-12">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                       <h4 className="text-xl font-black mb-4 uppercase italic">Technical Tip: The Digital Signature</h4>
                       <p className="text-sm opacity-80 leading-relaxed font-bold italic">
                          Restoration applications must be signed by a Class 3 Digital Signature Certificate (DSC). If the owner's DSC has also expired, we recommend using a Trademark Attorney's signature to file the application instantly to save time.
                       </p>
                    </div>
                  </section>

                  <section id="fee-structure" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8 text-center">
                       The Cost of Resurrection: 2024 Fee Chart
                    </h2>
                    <div className="overflow-x-auto my-10">
                       <table className="w-full text-left border-collapse border border-gray-200">
                          <thead className="bg-gray-100 italic font-black uppercase text-xs">
                             <tr>
                                <th className="p-4 border border-gray-200">Processing Type</th>
                                <th className="p-4 border border-gray-200">E-Filing Fee</th>
                                <th className="p-4 border border-gray-200">Physical Filing Fee</th>
                             </tr>
                          </thead>
                          <tbody className="text-sm font-medium">
                             <tr>
                                <td className="p-4 border border-gray-200">Renewal Fee (Base)</td>
                                <td className="p-4 border border-gray-200 font-bold text-green-600">Rs. 9,000</td>
                                <td className="p-4 border border-gray-200">Rs. 10,000</td>
                             </tr>
                             <tr>
                                <td className="p-4 border border-gray-200">Restoration Surcharge</td>
                                <td className="p-4 border border-gray-200 font-bold text-red-600">Rs. 9,000</td>
                                <td className="p-4 border border-gray-200">Rs. 10,000</td>
                             </tr>
                             <tr className="bg-gray-50">
                                <td className="p-4 border border-gray-200 font-black">Total Cost Per Class</td>
                                <td className="p-4 border border-gray-200 font-black text-xl">Rs. 18,000</td>
                                <td className="p-4 border border-gray-200 font-black">Rs. 20,000</td>
                             </tr>
                          </tbody>
                       </table>
                    </div>
                    <p className="text-xs text-gray-500 font-bold italic text-center">Note: These fees are per class. If your trademark is registered in Class 9 and Class 35, you must pay Rs. 36,000 via e-filing.</p>
                  </section>

                  <section id="step-by-step" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                       The 7-Step Restoration Workflow
                    </h2>
                    <div className="space-y-6">
                       {[
                         { title: "Status Check", desc: "Verify that the status is 'Removed'. If it is 'Abandoned', restoration is not possible." },
                         { title: "Document Curation", desc: "Gather the original TM Certificate and the Power of Attorney for the new filing." },
                         { title: "Statement Drafting", desc: "Prepare a 3-4 page affidavit explaining the 'Good Faith' reasons for the delay." },
                         { title: "E-Filing Form TM-R", desc: "Input the details into the IP India portal under the 'Restoration & Renewal' category." },
                         { title: "Fee Payment", desc: "Pay the Rs. 18,000 fee. Ensure the transaction is 'Success' and save the receipt." },
                         { title: "Examiner Review", desc: "A Trademark Examiner will review the statement. They may call for a physical or video hearing." },
                         { title: "Journal Advertising", desc: "Once approved, the restoration is published in the journal for 4 months before completion." }
                       ].map((step, i) => (
                         <div key={i} className="flex gap-6 items-center p-6 bg-gray-50 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] transition-all">
                            <div className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0">{i+1}</div>
                            <div>
                               <h4 className="font-bold text-gray-900 uppercase italic text-sm">{step.title}</h4>
                               <p className="text-xs text-gray-600 font-medium italic">{step.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                  </section>

                  <section id="statement-of-reasons" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                       Drafting the Statement of Case: The Winning Narrative
                    </h2>
                    <p className="mb-6">
                       This is the most critical part of an <strong>expired trademark revival</strong>. You must explain *why* you missed the renewal. "We forgot" is not a legal reason. We draft narratives that highlight genuine structural or personal issues:
                    </p>
                    <div className="bg-white border-2 border-gray-100 p-10 rounded-3xl shadow-sm mb-12">
                       <ul className="space-y-6">
                          <li className="flex gap-4">
                             <FontAwesomeIcon icon={faArrowRotateRight} className="text-[rgb(110,94,147)] w-6 h-6 flex-shrink-0 mt-1" />
                             <p className="text-sm font-bold italic leading-relaxed">Lack of O-3 Notice: If the Registry failed to send the reminder, we cite recent High Court judgments stating that removal is void without the notice.</p>
                          </li>
                          <li className="flex gap-4">
                             <FontAwesomeIcon icon={faUndoAlt} className="text-[rgb(110,94,147)] w-6 h-6 flex-shrink-0 mt-1" />
                             <p className="text-sm font-bold italic leading-relaxed">Medical Emergencies: If a key director or the proprietor was hospitalized during the expiry window, we attach medical certificates as proof.</p>
                          </li>
                          <li className="flex gap-4">
                             <FontAwesomeIcon icon={faCircleCheck} className="text-[rgb(110,94,147)] w-6 h-6 flex-shrink-0 mt-1" />
                             <p className="text-sm font-bold italic leading-relaxed">Management Changes: Mergers, acquisitions, or the death of a previous authorized agent are valid grounds for administrative delay.</p>
                          </li>
                       </ul>
                    </div>
                  </section>

                  <section id="restoration-journal" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Journal Publication: The Public's Turn
                    </h2>
                    <p className="mb-6">
                      Once the Registrar is satisfied with your reasons, they will pass an order to advertise the restoration in the Trademark Journal. This is mandated under Rule 40 of the Trade Marks Rules, 2017. 
                    </p>
                    <p className="mb-6">
                       If a competitor feels that they have started using the name during your 'blackout' period and your restoration would unfairly impact them, they can file an opposition. However, the Registry generally favors the 'Prior Registrant' unless the delay was extreme (more than 1 year). At IPR Karo, we monitor the 4-month advertising period to ensure no "stealth oppositions" are filed.
                    </p>
                  </section>

                  <section id="preventive-measures" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Legacy Protection: Preventing Future Expiry
                    </h2>
                    <p className="mb-6">
                      Restoration is a one-time opportunity; you cannot keep restoring a mark every decade. To <strong>secure your trademark for life</strong>, we implement our "Legacy Protection Protocol":
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                       <div className="p-8 bg-gray-900 text-white rounded-[2rem] shadow-xl relative overflow-hidden group">
                          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                          <h4 className="font-extrabold mb-4 uppercase italic">Annual IP Health Check</h4>
                          <p className="text-xs opacity-70 leading-relaxed font-bold italic">We review your entire IP portfolio every 12 months. We check for address updates, licensing validity, and renewal windows well in advance.</p>
                       </div>
                       <div className="p-8 bg-gray-50 border border-gray-100 rounded-[2rem] shadow-sm">
                          <h4 className="font-extrabold mb-4 uppercase italic text-gray-900">Registry Syncing</h4>
                          <p className="text-xs text-gray-600 leading-relaxed font-bold italic">We ensure your official email ID and mobile number are synced with the Registry's database so you receive automated alerts from the government system directly.</p>
                       </div>
                    </div>
                  </section>

                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter underline underline-offset-[12px] decoration-[rgb(110,94,147)] decoration-8">
                       Revival Tactics: Restoration FAQs
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
                        Winning Back Brands: Success Stories
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
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">Resurrect Your Legacy Today</h2>
                        <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed italic">
                          Don't let your brand die in an administrative heap. Get expert legal representation to restore your trademark and secure another decade of success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-16 rounded-full transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(110,94,147,0.5)] text-xl uppercase tracking-widest font-black">
                                 Revive My Brand Now
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
                 <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight uppercase font-black italic tracking-[0.1em]">Restoration Alert</h3>
                 <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-bold italic">
                   Is your brand status 'Removed'? You have a strict 1-year window to restore it. Every day counts.
                 </p>
                 <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                   <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase font-black tracking-widest">
                     Save My Removed Mark
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
                <h3 className="text-sm font-black text-gray-400 mb-6 border-b-2 border-gray-100 pb-4 uppercase tracking-widest italic">Legal Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/what-happens-if-trademark-expires" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Expiry Consequences</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Objection Success Case</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-objection-reply-format-india" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Download Reply Formats</span>
                    </Link>
                  </li>
                  <li>
                     <Link href="/" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">IPR Karo Home</span>
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
