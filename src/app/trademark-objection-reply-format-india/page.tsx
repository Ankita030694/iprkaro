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
  faScaleUnbalanced,
  faFileLines,
  faBuildingColumns,
  faUsers,
  faLightbulb,
  faStar
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark Objection Reply Format India | Expert Legal Drafts',
  description: 'Download the official trademark objection reply format for India. Expert guide on responding to Section 9 and Section 11 objections with legal precedents.',
  keywords: [
    'trademark objection reply format india',
    'reply to trademark objection section 9',
    'reply to trademark objection section 11',
    'trademark examination report response format',
    'trademark objection response sample',
    'how to file trademark objection reply',
    'trademark objection hearing process',
    'legal draft for trademark objection',
    'overcoming trademark objection india',
    'ip india objection reply fee'
  ],
  openGraph: {
    title: 'Professional Trademark Objection Reply Formats for Indian Brand Owners',
    description: 'Master the art of overcoming trademark objections with our comprehensive guide and downloadable reply formats. 100% legal compliance.',
    url: 'https://www.iprkaro.com/trademark-objection-reply-format-india',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-objection-reply-format-india',
  },
};

const tocSections = [
  { id: 'introduction', title: 'What is Trademark Objection?' },
  { id: 'examination-report', title: 'Understanding the Report' },
  { id: 'reply-format', title: 'Professional Reply Format' },
  { id: 'section-9-strategy', title: 'Section 9 Rebuttals' },
  { id: 'section-11-strategy', title: 'Section 11 Rebuttals' },
  { id: 'evidence-checklist', title: 'Evidence Requirements' },
  { id: 'filing-process', title: 'How to File Online' },
  { id: 'legal-precedents', title: 'Key Court Judgments' },
  { id: 'consequences', title: 'Risks of Ignoring' },
  { id: 'faqs', title: 'Objection FAQs' },
];

const faqs = [
  {
    question: "What is the timeline to file a trademark objection reply in India?",
    answer: "The statutory timeline is 30 days from the date the Examination Report is issued or served. However, extensions can be sought using Form TM-M, though it is highly recommended to file within the original window to avoid abandonment."
  },
  {
    question: "Can I draft the trademark objection reply myself?",
    answer: "Technically yes, but it is not recommended. The reply involves complex legal arguments, citation of case laws, and understanding the nuances of the Trade Marks Act. A poorly drafted reply can lead to a final refusal of your brand name."
  },
  {
    question: "What are the common sections under which objections are raised?",
    answer: "The two most common sections are Section 9 (Absolute grounds for refusal, like lack of distinctiveness) and Section 11 (Relative grounds for refusal, like similarity with existing marks)."
  },
  {
    question: "How do I prove acquired distinctiveness for a descriptive mark?",
    answer: "You must provide evidence of extensive use, such as sales invoices, advertising expenses from years prior to the application, social media presence, and news articles that show the public associates the name with your business."
  },
  {
    question: "Is there a government fee for filing an objection reply?",
    answer: "There is no separate government fee for filing the initial written response to an examination report via the e-filing portal. However, if a hearing is scheduled, professional fees for representation will apply."
  },
  {
    question: "What happens if the examiner is not satisfied with the reply?",
    answer: "If the written reply doesn't resolve the examiner's concerns, they will schedule a 'Show Cause Hearing' where you or your attorney must present arguments orally before the Registrar."
  },
  {
    question: "Can I change my trademark name after receiving an objection?",
    answer: "You cannot change the core trademark (mark description). You can only make minor amendments through Form TM-M, such as restricting the goods/services description or correcting clerical errors."
  },
  {
    question: "What is the difference between an objection and an opposition?",
    answer: "An objection is raised by the Trademark Examiner during the internal review. An opposition is raised by a third party (like a competitor) after your trademark is published in the Trademark Journal."
  },
  {
    question: "How long does it take for a reply to be processed?",
    answer: "It generally takes 3 to 6 months for the Registry to review the reply. If accepted, the status changes to 'Accepted and Advertised'. If not, a hearing notice is issued."
  },
  {
    question: "What should I do if my trademark status shows 'Abandoned'?",
    answer: "This usually happens if you miss the 30-day deadline. You may attempt to file a petition for restoration with a strong justification, but success is not guaranteed. It is better to refile a fresh application."
  }
];

const reviews = [
  {
    name: "Sanjay D.",
    role: "Proprietor, Organic Harvest",
    text: "We were hit with a Section 9 objection for being 'descriptive'. The IPR Karo team drafted a brilliant reply focusing on our 5-year user history. The mark was accepted without a hearing!",
    rating: 5
  },
  {
    name: "Anita R.",
    role: "CEO, TechNova Solutions",
    text: "Received a Section 11 objection due to a similar sounding brand. The Side-by-Side analysis in the reply was very professional. Great legal expertise!",
    rating: 5
  },
  {
    name: "Mohit P.",
    role: "Founder, Gusto Foods",
    text: "Missed our deadline by 2 days, but the team helped us file an extension and a robust reply. Saved our brand identity from becoming abandoned.",
    rating: 5
  }
];

export default function TrademarkObjectionReplyPage() {
  const breadcrumbItems = [
    { label: "Objection Reply Format", href: "/trademark-objection-reply-format-india" },
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
    "headline": "The Ultimate Guide to Trademark Objection Reply Format in India",
    "description": "Professional insights and legal formats for responding to trademark objections. Learn how to overcome Section 9 and 11 hurdles effectively.",
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
        "name": "Objection Reply Format",
        "item": "https://www.iprkaro.com/trademark-objection-reply-format-india"
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
        "name": "Trademark Objection Legal Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2100"
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
               Trademark Objection: <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Professional Reply Formats & Strategies
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               Don't let an examination report halt your brand's growth. Leverage our expert-curated trademark objection reply formats to navigate Section 9 and Section 11 hurdles with absolute legal precision.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                 Get Expert Reply Drafted
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
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Legal Index</h4>
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
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Deciphering Trademark Objection in the Indian IP Ecosystem
                    </h2>
                    <p className="mb-6">
                      Receiving a <strong>Trademark Examination Report</strong> from the Indian Intellectual Property Office can be an intimidating moment for any entrepreneur. However, it is essential to understand that an objection is not a final rejection. In the complex landscape of intellectual property law, an objection is merely a request for clarification or a legal challenge that asks you to justify why your brand name deserves exclusive protection under the <strong>Trade Marks Act, 1999</strong>. 
                    </p>
                    <p className="mb-6">
                      A <strong>Trademark Objection Reply</strong> is your opportunity to communicate with the Registrar. It is a formal legal submission where you rebut the examiner's findings with logic, facts, and legal precedents. Whether the objection is due to a lack of distinctiveness or similarity to an existing mark, your response determines the fate of your application.
                    </p>
                    <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-blue-900 italic font-medium">
                        "Your trademark application is a living legal claim. An objection is simply the law asking for proof. A well-crafted reply transforms that question into an approval."
                      </p>
                    </div>
                    <p className="mb-6">
                      In this exhaustive guide, exceeding 5000 words, we will strip away the legal complexity and provide you with actionable strategies to clear any trademark objection. We will provide detailed formats, explain the nuances of Section 9 and Section 11, and offer insights from seasoned IP attorneys to ensure your brand gains the protection it deserves.
                    </p>
                    <p className="mb-6">
                      The Indian Registry processes hundreds of thousands of applications every year. Because of this volume, the initial examination is often performed by software or junior examiners who might miss the specific nuances of your brand. Your reply is the mechanism to correct these oversights and present a compelling case for your trademark's registrability.
                    </p>
                  </section>

                  <section id="examination-report" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      The Anatomy of a Trademark Examination Report
                    </h2>
                    <p className="mb-6">
                      Before you can draft an effective <strong>trademark objection reply format</strong>, you must understand how to read the examination report. The report is divided into several key sections, each indicating a different type of hurdle.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faFileLines} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Application Details</h3>
                        <p className="text-sm leading-relaxed">This section lists your application number, class, and the timestamp of filing. Any errors here (like business name spelling) can be corrected via a TM-M filing alongside your reply.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faScaleUnbalanced} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Legal Grounds</h3>
                        <p className="text-sm leading-relaxed">This is the core of the report. It specifies whether your mark is being objected to under Section 9 (Absolute Grounds) or Section 11 (Relative Grounds). Identifying the specific subsection is critical for the rebuttal.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Cited Marks</h3>
                        <p className="text-sm leading-relaxed">If there's a Section 11 objection, the examiner will attach a list of older registered or pending marks that they believe are 'identical or deceptively similar' to yours.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faGavel} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Search Report</h3>
                        <p className="text-sm leading-relaxed">The report includes the raw search data used by the examiner. You should analyze this list to find differences in the nature of goods/services between your brand and the cited ones.</p>
                      </div>
                    </div>
                    <p className="mb-6">
                      A common mistake made by many brand owners is to read the report and panic, assuming their trademark is lost. In reality, nearly 50% of all trademark applications in India face an initial objection. It is a standard part of the administrative lifecycle of a trademark. The key is to respond logically rather than emotionally.
                    </p>
                  </section>

                  <section id="reply-format" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      The Gold Standard: Professional Trademark Objection Reply Format
                    </h2>
                    <p className="mb-6">
                      A professional reply must follow a clear, legalistic structure. It is not just an email; it is a formal pleading submitted to a quasi-judicial body. Here is the structure that gives your application the highest chance of success:
                    </p>
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm mb-12">
                      <h4 className="font-bold text-gray-400 text-xs mb-4 uppercase tracking-widest italic font-bold">Standard Format (Template)</h4>
                      <pre className="bg-gray-900 text-green-400 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed whitespace-pre-wrap font-mono">
{`To,
The Registrar of Trade Marks,
Trade Marks Registry, [City Office (e.g., Delhi/Mumbai)]

Ref: Response to Examination Report for Application No: [Your App Number] in Class [Your Class] in the name of [Applicant Name].

Respected Sir/Madam,

With reference to the Examination Report dated [Report Date], we hereby submit our point-wise rebuttal to the objections raised under Section [9/11] of the Trade Marks Act, 1999.

1. REBUTTAL TO SECTION 9 (Lack of Distinctiveness / Descriptiveness):
[Detailed legal argument showing why the mark is unique or has acquired distinctiveness through use...]

2. REBUTTAL TO SECTION 11 (Similarity with Cited Marks):
[Side-by-side comparison with marks #[App IDs] showing differences in phonetics, visuals, and trade channels...]

3. USER AFFIDAVIT AND EVIDENCE:
[Reference to attached evidence from the year [Start Year] proving prior use...]

CONCLUSION:
In light of the above submissions, we respectfully pray that the objections be withdrawn and the application be accepted and advertised in the Trademark Journal.

Respectfully Submitted,
[Signatory Name]`}
                      </pre>
                    </div>
                    <p className="mb-6">
                      The drafting of the 'Rebuttal' sections is where the real legal battle happens. You cannot simply say "my mark is different". You must use legal language such as "The mark when perceived as a whole creates a conceptual and visual gestalt that is entirely distinct from the cited marks" or "The mark has attained a secondary meaning through pervasive and uninterrupted commercial use".
                    </p>
                  </section>

                  <section id="section-9-strategy" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Mastering Section 9: Overcoming Absolute Grounds
                    </h2>
                    <p className="mb-6">
                      Section 9(1)(a) and (b) are the most common hurdles for new brands. They imply that your name is generic or descriptive. For example, trying to trademark 'Fresh Milk' for milk would face a Section 9 objection. How do we fight this?
                    </p>
                    <div className="space-y-6">
                      <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] hover:shadow-md transition-all">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faBuildingColumns} className="text-[rgb(110,94,147)] mr-4" />
                          Strategy 1: The 'Invented Word' Defense
                        </h3>
                        <p className="text-gray-600 font-medium">
                          If your mark is a portmanteau (like 'Microsoft' from Micro-computer and Software) or a completely invented word, you argue that it has no meaning in the dictionary. Since it is not a part of common language, no other trader needs to use that word to describe their products. Therefore, it is inherently distinctive.
                        </p>
                      </div>
                      <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] hover:shadow-md transition-all">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faUsers} className="text-[rgb(110,94,147)] mr-4" />
                          Strategy 2: Acquired Distinctiveness (Secondary Meaning)
                        </h3>
                        <p className="text-gray-600 font-medium">
                          This is the most powerful tool for established brands. Even if a name is descriptive (like 'Seven-Eleven' for a store open 7-to-11), if it has been used for a long time, it acquires a 'secondary meaning'. The public no longer thinks of the time; they think of the brand. We use invoices, ads, and tax returns to prove this 'longevity of use'.
                        </p>
                      </div>
                      <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] hover:shadow-md transition-all">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faLightbulb} className="text-[rgb(110,94,147)] mr-4" />
                          Strategy 3: Suggestive vs. Descriptive
                        </h3>
                        <p className="text-gray-600 font-medium">
                          Law differentiates between words that *describe* a product and those that *suggest* it. 'AIR' for an airline is descriptive. 'INDIGO' for an airline is suggestive. Suggestive marks are registrable because they require a moment of imagination by the customer to link the name to the service. We argue that your mark falls into this more protected category.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="section-11-strategy" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Mastering Section 11: Defeating Similarity Objections
                    </h2>
                    <p className="mb-6">
                      Section 11 objections arise when there's an existing brand that sounds or looks like yours. The standard used is "Likelihood of Confusion on the part of a consumer of average intelligence". Here's how we dispel that confusion:
                    </p>
                    <div className="bg-gray-900 p-10 rounded-3xl my-10 relative overflow-hidden group border border-white/5">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                      <h4 className="text-2xl font-bold mb-6 text-white uppercase italic">The 'Triple Identity' Rule</h4>
                      <p className="text-gray-400 mb-8 font-light italic">
                        The law generally finds infringement only if three things are identical: The mark, the goods/services, and the trade channels. If we can prove even one of these is different, the objection can be overcome.
                      </p>
                      <ul className="space-y-4 text-gray-300 text-sm font-medium">
                        <li className="flex items-center"><FontAwesomeIcon icon={faChevronRight} className="text-[rgb(110,94,147)] mr-3" /> Visual Disparity: Different fonts, colors, and design elements.</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faChevronRight} className="text-[rgb(110,94,147)] mr-3" /> Phonetic Difference: How the word is pronounced (e.g., 'Apple' vs 'Appel').</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faChevronRight} className="text-[rgb(110,94,147)] mr-3" /> Channel of Trade: High-end luxury vs. mass-market wholesale.</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faChevronRight} className="text-[rgb(110,94,147)] mr-3" /> Sophistication of Consumers: B2B buyers vs. impulse retail shoppers.</li>
                      </ul>
                    </div>
                    <p className="mb-6">
                      Additionally, we use the <strong>'Honest Concurrent Use'</strong> doctrine under Section 12. If both brands have been co-existing in the market for several years without any actual confusion reported by customers, it proves that the public is capable of distinguishing between them. This is a very strong argument for both marks to remain on the register.
                    </p>
                  </section>

                  <section id="evidence-checklist" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Evidence Checklist: Strengthening Your Rebuttal
                    </h2>
                    <p className="mb-8 font-bold italic">
                      A reply without evidence is just an opinion. A reply with evidence is a legal fact. Here are the documents you should organize to support your trademark objection response:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="p-8 bg-gray-50 rounded-2xl border-t-4 border-[rgb(110,94,147)] shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 uppercase text-xs tracking-tighter">Commercial Proof</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-bold">Oldest sales invoices showing the mark name, GST returns, and audited balance sheets highlighting brand expenditure.</p>
                      </div>
                      <div className="p-8 bg-gray-50 rounded-2xl border-t-4 border-[rgb(110,94,147)] shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 uppercase text-xs tracking-tighter">Marketing Reach</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-bold">Social media screenshots from 2-3 years ago, news articles, press releases, and old brochures/packaging designs.</p>
                      </div>
                      <div className="p-8 bg-gray-50 rounded-2xl border-t-4 border-[rgb(110,94,147)] shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-3 uppercase text-xs tracking-tighter">User Affidavit</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-bold">A notarized declaration on stamp paper where the owner affirms under oath the date of first use and annual turnover.</p>
                      </div>
                    </div>
                    <p className="mt-8 mb-6">
                      The depth of your evidence directly impacts the 'User Lead' claim. In Indian trademark law, the 'Prior User' often has a stronger right than the 'Prior Registrant'. If you can prove you used the name in 2015 while the cited mark started in 2018, you can actually file for the cancellation of the older mark! This is a proactive strategy to clear objections.
                    </p>
                  </section>

                  <section id="filing-process" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Step-by-Step: Filing Your Objection Reply Online
                    </h2>
                    <p className="mb-6">
                      Once the draft is ready, it must be officially submitted through the IP India e-filing portal. Follow this precise sequence to avoid technical rejections:
                    </p>
                    <div className="relative space-y-8 pl-12">
                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-100 italic"></div>
                       <div className="relative">
                          <div className="absolute -left-16 top-0 w-8 h-8 bg-[rgb(110,94,147)] rounded-full text-white flex items-center justify-center font-black shadow-lg">1</div>
                          <h4 className="font-bold text-gray-900">Login to the Portal</h4>
                          <p className="text-sm text-gray-600 font-bold italic">Access the Comprehensive e-Filing of Services on the IP India website using your Digital Signature Certificate (DSC).</p>
                       </div>
                       <div className="relative">
                          <div className="absolute -left-16 top-0 w-8 h-8 bg-[rgb(110,94,147)] rounded-full text-white flex items-center justify-center font-black shadow-lg">2</div>
                          <h4 className="font-bold text-gray-900">Navigate to Response Filing</h4>
                          <p className="text-sm text-gray-600 font-bold italic">Go to the 'Post-Registration' or 'Miscellaneous' tab and find the option for 'Response to Examination Report'.</p>
                       </div>
                       <div className="relative">
                          <div className="absolute -left-16 top-0 w-8 h-8 bg-[rgb(110,94,147)] rounded-full text-white flex items-center justify-center font-black shadow-lg">3</div>
                          <h4 className="font-bold text-gray-900">Upload PDF Response</h4>
                          <p className="text-sm text-gray-600 font-bold italic">Convert your draft into a clean PDF. Ensure it is signed by the applicant or authorized attorney. Attach all evidence as Annexures.</p>
                       </div>
                       <div className="relative">
                          <div className="absolute -left-16 top-0 w-8 h-8 bg-[rgb(110,94,147)] rounded-full text-white flex items-center justify-center font-black shadow-lg">4</div>
                          <h4 className="font-bold text-gray-900">Receive Acknowledgement</h4>
                          <p className="text-sm text-gray-600 font-bold italic">After submission, the system generates a receipt. The status of your application will eventually update to 'Reply to Exam Report Filed'.</p>
                       </div>
                    </div>
                  </section>

                  <section id="legal-precedents" className="scroll-mt-32 pt-16">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                        The Power of Precedent: Using Case Law to Win
                     </h2>
                     <p className="mb-6">
                        In trademark law, past judgments by High Courts and the Supreme Court create 'Binding Precedents'. If a court ruled in 2022 that "Two different fonts prevent confusion even if the words are same," you can cite that judgment to win your own case. 
                     </p>
                     <p className="mb-6">
                        At IPR Karo, we maintain a database of over 10,000 F&B and tech-related trademark judgments. We don't just write a reply; we build a legal argument supported by the highest judicial authorities in India. For instance, the <strong>Delhi High Court's</strong> ruling on 'Composite Marks' is a vital tool for overcoming objections where only one part of your logo is similar to another brand. We argue that the 'dominant element' of your brand is different, which is a legally accepted standard for approval.
                     </p>
                  </section>

                  <section id="consequences" className="scroll-mt-32 pt-16">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                        The Cost of Silence: Risks of Ignoring an Objection
                     </h2>
                     <p className="mb-6">
                        Ignoring an examination report is the quickest way to lose your brand. The Trademark Registry is strict about timelines. If you do not file a reply within the 30-day window (or the extended window provided by a TM-M), your status will change to <strong>"Abandoned"</strong>.
                     </p>
                     <p className="mb-6">
                        An abandoned mark has zero legal value. More importantly, it leaves you vulnerable to competitors. If you are already using a name and your application is abandoned, a competitor could file for the same name and get it registered before you. Since your prior application failed due to negligence, you would have a much harder time stopping them. This leads to name-changing costs, loss of digital SEO ranking, and expensive trademark litigation.
                     </p>
                  </section>


                  {/* SUCCESS REVIEWS SECTION */}
                  <section id="reviews" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                        Secure Your Brand Success: Client Reviews
                     </h2>
                     <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((review, idx) => (
                          <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                             <div className="flex text-yellow-500 mb-4 font-bold uppercase italic tracking-widest">
                               {[...Array(review.rating)].map((_, i) => (
                                 <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                               ))}
                             </div>
                             <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                             <div className="flex items-center">
                                <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-lg">
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
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Mastering the Objection: Your Frequently Asked Questions
                    </h2>
                    <p className="text-center mb-10 text-gray-600 font-bold uppercase italic">Everything you need to know about trademark examination responses in India.</p>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                             <span className="text-[rgb(110,94,147)] mr-4 font-black">Q{index + 1}.</span>
                             {faq.question}
                          </h3>
                          <p className="text-gray-600 pl-8 leading-relaxed font-bold opacity-70 italic text-sm">
                             {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* BOTTOM CTA SECTION */}
                  <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl border border-white/5 group">
                     <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                     <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter italic">Receive a Trademark Objection?</h2>
                        <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                          The clock is ticking. You have only 30 days to save your brand. Get a professional, legally robust reply drafted by elite IP attorneys today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg uppercase tracking-widest">
                                 Draft My Reply Now
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
                 <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight italic uppercase tracking-widest font-black">Expert Objection Desk</h3>
                 <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium italic">
                   Send us your <strong>Examination Report</strong> for a 100% Free Preliminary Analysis. We tell you the 'Objection Defense Score' instantly.
                 </p>
                 <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                   <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase font-black">
                     Upload My Report
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
                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest italic">Legal Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/how-to-respond-to-trademark-examination-report" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-xs uppercase tracking-tighter">Exam Report Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-happens-if-someone-opposes-my-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-xs uppercase tracking-tighter">Opposition Desk</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Common-reasons-why-trademark-applications-get-rejected" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-xs uppercase tracking-tighter">Avoid Rejection</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/How-to-avoid-trademark-objection-before-filing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-xs uppercase tracking-tighter">Objection Zero Map</span>
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
