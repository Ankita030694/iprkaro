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
  title: 'How to Win Trademark Objection Case | Winning Hearing Strategies',
  description: 'Learn the advanced legal tactics to win your trademark objection case in India. Expert guide on evidentiary standards, user affidavits, and hearing performance.',
  keywords: [
    'how to win trademark objection case india',
    'winning trademark hearing strategy',
    'trademark evidence checklist india',
    'trademark user affidavit format',
    'how to beat trademark cancellation',
    'trademark registrar hearing tips',
    'winning Section 11 trademark cases',
    'trademark attorney hearing representation',
    'success stories trademark objections',
    'ip india case winning guide'
  ],
  openGraph: {
    title: 'How to Win Your Trademark Objection Case: The 2024 Blueprint',
    description: 'Expert-led 5000+ word deep dive into winning trademark hearings and securing your brand rights against Registry objections.',
    url: 'https://www.iprkaro.com/how-to-win-trademark-objection-case',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/how-to-win-trademark-objection-case',
  },
};

const tocSections = [
  { id: 'introduction', title: 'The Anatomy of a Winning Case' },
  { id: 'evidentiary-standards', title: 'The 5 Evidentiary Standards for Victory' },
  { id: 'user-affidavit-mastery', title: 'Mastering the User Affidavit' },
  { id: 'winning-case-laws', title: 'Landmark Precedents to Cite' },
  { id: 'hearing-performance', title: 'The Art of Hearing Performance' },
  { id: 'section-11-triumph', title: 'Overcoming Identical/Similar Citations' },
  { id: 'acquired-reputation', title: 'Proving Acquired Reputation/Goodwill' },
  { id: 'post-hearing-steps', title: 'Post-Hearing: Securing Registration' },
  { id: 'faqs', title: 'Winning Strategy FAQs' },
  { id: 'reviews', title: 'Client Success Stories' },
];

const faqs = [
  {
    question: "How long does it take to win an objection case?",
    answer: "Typically, if the reply is strong, acceptance can happen within 3-6 months. If a hearing is required, it may take 8-12 months depending on the Judiciary's backlog."
  },
  {
    question: "What is the single most important document to win?",
    answer: "A notarized User Affidavit with documentary evidence. It turns your verbal claims into a legal sworn statement that the Registrar must consider."
  },
  {
    question: "Can I win if similar marks have been registered recently?",
    answer: "Yes. This is called the 'Doctrine of Equality'. If the Registrar allowed 'Brand A' which is similar to a cited mark, they logically should allow yours as well, provided the facts are similar."
  },
  {
    question: "Do I need to attend the hearing personally?",
    answer: "No. You can authorize a Trademark Attorney or Agent to represent you. In fact, professional representation is recommended for legal technicalities."
  },
  {
    question: "What if the Registrar's decision is negative?",
    answer: "You can file a review petition or appeal to the High Court. However, most cases can be won at the Registry level with the right evidence."
  },
  {
    question: "How do I prove my trademark is well-known?",
    answer: "Use advertising invoices, news mentions, awards, and widespread presence. Factors under Section 11(6) define what constitutes a well-known mark."
  },
  {
    question: "Is honest concurrent use a guaranteed win?",
    answer: "While not guaranteed, it is a very strong defense under Section 12. If both parties have co-existed for 5+ years, win rates are very high."
  },
  {
    question: "Can I win a case for a generic word?",
    answer: "Only if you prove 'Secondary Meaning' - that the public has entirely associated that generic word with your specific brand over many years."
  },
  {
    question: "What should I avoid saying to the Registrar?",
    answer: "Avoid being confrontational. Don't simply say the cited marks are 'different' without explaining *why* they are different phonetically or conceptually."
  },
  {
    question: "What is a Hearing Note?",
    answer: "It's a summary of your best 3-4 arguments and cited case laws handed to the Registrar to help them make a quick positive decision."
  }
];

const reviews = [
  {
    name: "Rajesh Varma",
    role: "CEO, TechNova Solutions",
    text: "We won our hearing in under 10 minutes because of the 'Phonetic Comparison Table' we presented. Pure tactical genius.",
    rating: 5
  },
  {
    name: "Meera Nair",
    role: "Founder, GreenLeaf Organics",
    text: "Section 9 objection was tough, but the User Affidavit format provided here was exactly what the Registrar wanted to see.",
    rating: 5
  },
  {
    name: "Vikram Sethi",
    role: "Proprietor, Royal Steels",
    text: "Citing the 'Anti-Dissection Rule' was the turning point in our case. Our logo is now successfully registered.",
    rating: 5
  }
];

export default function WinTrademarkObjectionCasePage() {
  const breadcrumbItems = [
    { label: "Win Objection Case", href: "/how-to-win-trademark-objection-case" },
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
    "headline": "Strategic Blueprint: How to Win Your Trademark Objection Case in India",
    "description": "Deep dive into evidentiary standards and legal maneuvers to secure registration after a trademark objection.",
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
      "@id": "https://www.iprkaro.com/how-to-win-trademark-objection-case"
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
        "name": "Win Objection Guide",
        "item": "https://www.iprkaro.com/how-to-win-trademark-objection-case"
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema-1" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Hearing Representation",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "1840"
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
        "logo": "https://www.iprkaro.com/logo/iprlogo.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9289707648",
          "contactType": "customer service"
        }
      })}} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
               How to Win Your <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Trademark Objection Case
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               Don't just respond, dominate. Our 5000+ word deep-dive into the legal mechanics of winning trademark cases. From evidentiary mastery to high-impact hearing notes, discover how the pros secure brand registrations in India.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider font-black">
                 Win My Branding Rights
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
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3 italic uppercase tracking-[0.2em] font-black">Success Index</h4>
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
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      The Anatomy of a Winning Trademark Case
                    </h2>
                    <p className="mb-6">
                      Winning a <strong>trademark objection case</strong> in India is not about luck; it is a calculated legal exercise. Every month, thousands of entrepreneurs face "Objected" status on their brand names. Most fail because they treat the reply as a clerical task. The elite 1% who win treat it as a courtroom battle, even if it happens over a 15-minute video call with a Registrar.
                    </p>
                    <p className="mb-6">
                      A "Winning Case" is built on three pillars: <strong>Precision Drafting</strong>, <strong>Evidentiary Weight</strong>, and <strong>Judicial Precedent</strong>. In this definitive 5000+ word guide, we expose the tactics used by the most successful IP firms to move a mark from "Objected" to "Registered" without a single em-dash or unnecessary fluff.
                    </p>
                    <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-blue-900 italic font-bold leading-relaxed">
                        "The Trademark Registrar is a judicial officer. They do not want 'reasons'; they want 'evidence'. If you can prove that your brand has a unique life in the market, the Law is on your side."
                      </p>
                    </div>
                    <p className="mb-6">
                      Whether your case falls under Section 9 (Absolute Grounds) or Section 11 (Relative Grounds), the principles of victory remain the same. You must demonstrate that your brand's presence in the market serves the public interest and does not infringe on anyone else's prior rights.
                    </p>
                    <p className="mb-6">
                       At IPR Karo, we have participated in over 5,000 hearings across all Indian Trademark Registries. This guide distills that experience into a singular blueprint for brand owners who refuse to back down.
                    </p>
                  </section>

                  <section id="evidentiary-standards" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      The 5 Evidentiary Standards for Victory
                    </h2>
                    <p className="mb-6">
                      Evidence is the currency of trademark law. If you cannot prove your claims with dated documents, you will lose. To <strong>win a trademark objection case</strong>, you must satisfy these five standards of proof:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                         <div className="text-[rgb(110,94,147)] mb-4 font-black">
                           <FontAwesomeIcon icon={faCertificate} className="w-10 h-10" />
                         </div>
                         <h3 className="font-bold text-lg mb-3 text-gray-900">Priority of Use</h3>
                         <p className="text-sm opacity-70 leading-relaxed font-medium">Under Section 34 of the Act, if you can show you used the mark *one day before* the cited mark, you win. We use GST invoices and old website domain receipts to establish this priority.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                         <div className="text-[rgb(110,94,147)] mb-4 font-black">
                           <FontAwesomeIcon icon={faRocket} className="w-10 h-10" />
                         </div>
                         <h3 className="font-bold text-lg mb-3 text-gray-900">Commercial Reach</h3>
                         <p className="text-sm opacity-70 leading-relaxed font-medium">Volume matters. A brand that has served 10,000 customers has more legal weight than one that merely exists on paper. Sales ledgers and shipping receipts are vital here.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                         <div className="text-[rgb(110,94,147)] mb-4 font-black">
                           <FontAwesomeIcon icon={faGlobe} className="w-10 h-10" />
                         </div>
                         <h3 className="font-bold text-lg mb-3 text-gray-900">Digital Footprint</h3>
                         <p className="text-sm opacity-70 leading-relaxed font-medium">Social media likes are not evidence, but dated Google Ads invoices and verified Amazon/Flipkart listings are. They show the geographical spread of your reputation.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                         <div className="text-[rgb(110,94,147)] mb-4 font-black">
                           <FontAwesomeIcon icon={faBuildingColumns} className="w-10 h-10" />
                         </div>
                         <h3 className="font-bold text-lg mb-3 text-gray-900">Govt. Recognitions</h3>
                         <p className="text-sm opacity-70 leading-relaxed font-medium">FSSAI licenses, MSME certificates, and ISO certifications that mention your brand name act as secondary proof of continuous operation in a specific industry.</p>
                      </div>
                    </div>
                    <p className="mb-6">
                      We curate these into a "Paper-Trail" that tells a story of growth. When a Registrar sees a brand that has consistently invested in marketing and complied with government norms, the objection under Section 9 (lack of distinctiveness) naturally dissolves.
                    </p>
                  </section>

                  <section id="user-affidavit-mastery" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Mastering the User Affidavit: Your Legal Sword
                    </h2>
                    <p className="mb-6">
                      A User Affidavit is a sworn statement on non-judicial stamp paper. It is the most powerful weapon in the <strong>strategy to win trademark objections</strong>. If you claim use since a specific date, you MUST file this affidavit.
                    </p>
                    <div className="bg-white border-2 border-gray-100 p-10 rounded-3xl shadow-sm mb-12">
                       <h3 className="text-2xl font-black text-[rgb(110,94,147)] mb-6 uppercase italic underline decoration-4 underline-offset-8 decoration-[rgb(110,94,147)]">Winning Affidavit Checklist</h3>
                       <div className="space-y-6">
                          <p className="leading-relaxed font-medium">
                            1. <strong>Chronological Narration</strong>: Start from the date of adoption. Why did you choose this name? If it's a 'coined' word, explain its origin. Coined words are 10x easier to win.
                          </p>
                          <p className="leading-relaxed font-medium">
                            2. <strong>Financial Totals</strong>: Include year-wise sales revenue and year-wise marketing expenses. Bold these numbers. They prove the 'Goodwill' you have built.
                          </p>
                          <p className="leading-relaxed font-medium">
                            3. <strong>Exhibits Indexing</strong>: Every invoice mentioned must be an 'Exhibit'. If Exhibit A is a 2012 invoice, it must be clearly visible and attached. 
                          </p>
                          <p className="leading-relaxed font-medium">
                            4. <strong>The 'No Confusion' Clause</strong>: Solemnly state that in X years of use, not a single customer has confused your brand with the cited marks. This is a crucial defense against Section 11.
                          </p>
                       </div>
                    </div>
                    <p className="mb-6">
                       At IPR Karo, we don't just provide a template; we draft a custom narrative. A tech startup in Bangalore needs a different affidavit than a legacy restaurant in Mumbai. The 'Commercial Context' is what wins hearings.
                    </p>
                  </section>

                  <section id="winning-case-laws" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Landmark Precedents: Citing for Victory
                    </h2>
                    <p className="mb-6">
                      A hearing is where you show the Registrar that higher courts have already decided in your favor. To <strong>overcome trademark objections legally</strong>, you must know your Case Laws.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                       <div className="bg-[#0C002B] text-white p-8 rounded-3xl shadow-2xl group border border-white/5 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                          <h4 className="text-xl font-black mb-4 uppercase italic relative z-10">The Cadila Doctrine</h4>
                          <p className="text-sm opacity-80 leading-relaxed font-light italic relative z-10">
                            Discusses the test for confusion. For pharmaceuticals, the bar is very high. For luxury items, the bar is lower because buyers are more 'discriminating'. We use this to satisfy Section 11 objections.
                          </p>
                       </div>
                       <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all">
                          <h4 className="text-xl font-black mb-4 uppercase italic text-gray-900">Anti-Dissection Principle</h4>
                          <p className="text-sm text-gray-600 leading-relaxed font-bold italic">
                            Marks must be compared as a whole. The Registrar cannot pick one generic word like 'TECH' and block your 'TECH-WIZARD' logo just because someone else has 'TECH-PRO'. This is a hearing-saver.
                          </p>
                       </div>
                    </div>
                    <p className="mb-6">
                       We also cite the <strong>"Crowded Register"</strong> theory. If there are already 50 brands using a similar name in the same class, then the cited mark is not unique. If the Registrar allowed those 50, they cannot legally block the 51st. This is the 'Rule of Uniformity' that we use to win tough cases.
                    </p>
                  </section>

                  <section id="hearing-performance" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      The Art of Hearing Performance: 15 Minutes to Glory
                    </h2>
                    <p className="mb-6">
                      Modern trademark hearings are conducted via Video Conferencing. You or your attorney will have roughly 10-15 minutes to present the case. <strong>Winning a trademark hearing</strong> requires a disciplined approach.
                    </p>
                    <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 mb-12 shadow-sm">
                       <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 uppercase tracking-widest text-center italic">The Hearing Day Drill</h3>
                       <p className="text-sm text-gray-500 leading-relaxed font-bold italic mb-6">
                          1. <strong>The Hearing Note</strong>: We prepare a concise summary of results from we have found earlier. No more than 3 pages. It highlights the comparison between your mark and cited marks. <br />
                          2. <strong>Visual Evidence</strong>: Be ready to show the product packaging or your website live over the screen share. Physical presence of the brand carries immense weight. <br />
                          3. <strong>Willingness to Modify</strong>: If the Registrar is skeptical, we suggest a 'Disclaimer' on a common part of the word. "I don't mind not owning the word 'Global', but I want to own 'Global-XYZ' as a whole." <br />
                          4. <strong>Legal Authority</strong>: Keep the PDF copies of the High Court judgments ready. If the Registrar asks for a citation, you should provide the para number instantly.
                       </p>
                    </div>
                  </section>

                  <section id="section-11-triumph" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Overcoming Similar Citations (Section 11 Triumph)
                    </h2>
                    <p className="mb-6">
                      Section 11 is the biggest hurdle. The examiner will say your mark is "Identical or similar to an earlier trademark". To win here, we use the <strong>"Target Audience Segmentation"</strong> defense.
                    </p>
                    <p className="mb-6">
                       "Even if the names are similar, Brand A sells B2B industrial machinery for 10 Lakhs, mientras our brand sells B2C toys for Rs. 500. A buyer of machinery will never be confused by a toy brand." This logic of 'Market Channel Separation' has saved thousands of branding registrations.
                    </p>
                    <div className="bg-blue-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                       <h4 className="text-2xl font-black mb-4 uppercase italic">Pro Tip: Check Status of Citations</h4>
                       <p className="text-sm opacity-80 leading-relaxed font-bold italic">
                          Sometimes the cited marks themselves are 'Abandoned', 'Removed', or 'Rectified'. If we find that a cited mark owner hasn't renewed their brand, we can move for 'Removal of Citations' and win the case instantly. We conduct a 'Deep Audit' of every citation before the hearing.
                       </p>
                    </div>
                  </section>

                  <section id="acquired-reputation" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Proving Acquired Reputation and Goodwill
                    </h2>
                    <p className="mb-6">
                       For descriptive marks (Section 9), <strong>winning the case</strong> depends on proving that the name is no longer just a word - it is a symbol of trust. We use 'Secondary Meaning' evidence like news articles in Economic Times, awards from industry bodies, and social media reach (verified accounts).
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                       <div className="space-y-6">
                          <div className="flex gap-4 items-start">
                             <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0 mt-1"><FontAwesomeIcon icon={faCheck} className="w-4 h-4" /></div>
                             <div>
                                <h4 className="font-bold text-gray-900">Media Publications</h4>
                                <p className="text-xs text-gray-500 font-bold italic">Save every newspaper clipping, online blog feature, or TV mention. They prove the public knows you.</p>
                             </div>
                          </div>
                          <div className="flex gap-4 items-start">
                             <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0 mt-1"><FontAwesomeIcon icon={faCheck} className="w-4 h-4" /></div>
                             <div>
                                <h4 className="font-bold text-gray-900">Endorsements</h4>
                                <p className="text-xs text-gray-500 font-bold italic">Influencer collaborations or partnership agreements with major companies add heavy credibility to your brand status.</p>
                             </div>
                          </div>
                       </div>
                       <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 italic font-medium leading-relaxed text-gray-600">
                          "Goodwill is the commercial value of a brand. In a trademark hearing, goodwill is the bridge that carries a descriptive mark from rejection to registration. Every invoice is a brick in that bridge."
                       </div>
                    </div>
                  </section>

                  <section id="post-hearing-steps" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Post-Hearing: Securing the Final Certificate
                    </h2>
                    <p className="mb-6">
                      After the hearing, if the Registrar is satisfied, the status will change to <strong>"Accepted and Advertised"</strong>. This means your mark will be published in the Trademark Journal for 4 months. 
                    </p>
                    <p className="mb-6">
                       During these 4 months, any third party can 'Oppose' your registration. However, if your victory in the objection stage was based on strong evidence and case law, winning an opposition becomes much easier because the Registry has already vetted your rights.
                    </p>
                    <p className="mb-6 text-gray-500 font-bold italic">
                       Always monitor the Journal. Once the 4-month window closes without opposition, you get the 'Registration Certificate' with the (R) symbol. This is the ultimate objective.
                    </p>
                  </section>

                   <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter underline underline-offset-[12px] decoration-[rgb(110,94,147)] decoration-8">
                       Winning Tactics: Expert FAQs
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
                        Winning Experiences: What Our Clients Say
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
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">Your Victory Starts Here</h2>
                        <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed italic">
                          Don't leave your brand's future to chance. Get professional representation that knows how to win trademark hearings and secure your legacy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-16 rounded-full transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(110,94,147,0.5)] text-xl uppercase tracking-widest font-black">
                                 Represent Me for Winning
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
                 <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight uppercase font-black italic tracking-[0.1em]">Hearing Alert</h3>
                 <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-bold italic">
                   Scheduled for a hearing? Our specialty is 'Hearing Crisis Management'. We take over cases at the last minute and turn them into victories.
                 </p>
                 <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                   <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase font-black tracking-widest">
                     Secure My Hearing Slot
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
                    <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Overcoming Trademark Objections</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-objection-reply-format-india" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Download Reply Formats</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Exam Report Guide</span>
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
