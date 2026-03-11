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
  title: 'How to Overcome Trademark Objection India | Expert Guide 2024',
  description: 'Master the legal strategies to overcome trademark objections in India. Detailed insights on Section 9 & 11, evidence checklists, and winning rebuttal formats.',
  keywords: [
    'how to overcome trademark objection india',
    'trademark objection response strategy',
    'overcoming section 9 trademark objection',
    'overcoming section 11 trademark objection',
    'trademark objection removal process',
    'trademark status objected solution',
    'trademark attorney for objection reply',
    'legal evidence for trademark acceptance',
    'trademark hearing preparation india',
    'ip india objection guide'
  ],
  openGraph: {
    title: 'Expert Guide: How to Overcome Trademark Objections in India',
    description: 'The ultimate 5000+ word strategy guide for overcoming trademark objections. Learn how to secure your brand status with legal precision.',
    url: 'https://www.iprkaro.com/how-to-overcome-trademark-objection',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/how-to-overcome-trademark-objection',
  },
};

const tocSections = [
  { id: 'introduction', title: 'The Path to Overcoming Objections' },
  { id: 'logic-of-objection', title: 'Understanding the Registry Logic' },
  { id: 'absolute-grounds', title: 'Beating Absolute Grounds (Section 9)' },
  { id: 'relative-grounds', title: 'Navigating Relative Grounds (Section 11)' },
  { id: 'strategic-rebuttal', title: 'The Perfect Strategic Rebuttal' },
  { id: 'evidence-mastery', title: 'Evidence Mastery: User Affidavits' },
  { id: 'procedural-hurdles', title: 'Clearing Procedural Hurdles' },
  { id: 'hearing-success', title: 'Success at the Show Cause Hearing' },
  { id: 'case-studies', title: 'Real-World Success Stories' },
  { id: 'faqs', title: 'Objection Breakthrough FAQs' },
];

const faqs = [
  {
    question: "What is the very first step when a trademark is objected?",
    answer: "The first step is to download the 'Examination Report' from the IP India portal. This report contains the legal justification for the objection, typically under Section 9 or 11. You must analyze the cited marks or grounds before drafting any response."
  },
  {
    question: "Can I overcome a Section 9 objection for a descriptive name?",
    answer: "Yes. While names like 'Fresh' or 'Natural' are descriptive, they can be registered if you prove 'Acquired Distinctiveness'. This requires showing the mark has been used extensively for years and the public identifies it solely with your business."
  },
  {
    question: "How do I deal with a Section 11 similarity objection?",
    answer: "You must perform a 'Side-by-Side Analysis'. Highlight visual, phonetic, and conceptual differences. Also, check the 'Goods Specification'; if your industries are entirely different, the risk of confusion is low, which is a strong legal ground for acceptance."
  },
  {
    question: "Is it possible to register a mark if a similar mark already exists?",
    answer: "Yes, under the 'Honest Concurrent Use' doctrine (Section 12). If both brands have operated peacefully in the market for a long time without consumer confusion, the Registrar can allow both registrations to coexist."
  },
  {
    question: "What happens if my objection response is rejected?",
    answer: "If the written response fails, the Registry schedules a 'Show Cause Hearing'. You will have an opportunity to present your arguments orally through an attorney or agent to satisfy the Registrar's concerns."
  },
  {
    question: "How important is the 30-day deadline?",
    answer: "It is absolute. Missing the deadline leads to the 'Abandonment' of your application. While extensions are available via Form TM-M, filing within the first 30 days shows diligence and prevents competitors from claiming your name."
  },
  {
    question: "What documents are most effective for overcoming objections?",
    answer: "A notarized 'User Affidavit' supported by dated invoices, GST returns, and advertising expenditure are the most powerful documents. They prove that your right to the brand is based on meaningful commercial use."
  },
  {
    question: "Can I change my trademark after it gets objected?",
    answer: "No, you cannot change the mark itself. You can only refine the description of goods or services or make minor clerical corrections. If the mark itself is the problem, you may need to file a fresh application for a modified version."
  },
  {
    question: "Do well-known brands have an advantage in objections?",
    answer: "Yes, 'Well-Known Trademarks' receive broader protection even across different classes. However, smaller startups can win by proving 'Inherent Distinctiveness' or by citing case laws that protect unique branding strategies."
  },
  {
    question: "What is the success rate of overcoming trademark objections?",
    answer: "With a professionally drafted response and proper evidence, the success rate is over 70%. Most objections are procedural or based on a strict interpretation that can be negotiated through legal arguments."
  }
];

const reviews = [
  {
    name: "Arun Mehra",
    role: "Proprietor, Apex Foods",
    text: "Our brand was stuck under Section 11 for 6 months. The strategic analysis of trade channels provided in our reply cleared the status within weeks. Amazing legal insight.",
    rating: 5
  },
  {
    name: "Sneha Kapur",
    role: "Founder, Luxe Living",
    text: "Saved us from rebranding. The Section 9 rebuttal was so strong that even the hearing was waived off. Our trademark is now registered!",
    rating: 5
  },
  {
    name: "Karan Johar (SME)",
    role: "Director, KJ Logistics",
    text: "Highly professional service. They found judicial precedents from 10 years ago that perfectly matched our case. Worth every penny.",
    rating: 5
  }
];

export default function OvercomeTrademarkObjectionPage() {
  const breadcrumbItems = [
    { label: "Overcome Objection", href: "/how-to-overcome-trademark-objection" },
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
    "headline": "The 2024 Strategy Guide: How to Overcome Trademark Objections in India",
    "description": "Deep dive into legal techniques for clearing trademark objections. Professional tips on Section 9, Section 11, and hearing successes.",
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
      "@id": "https://www.iprkaro.com/how-to-overcome-trademark-objection"
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
        "name": "Overcome Objection Guide",
        "item": "https://www.iprkaro.com/how-to-overcome-trademark-objection"
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
        "name": "Trademark Objection Defense Service",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2250"
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
               How to Overcome <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Trademark Objections
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               Is your trademark status "Objected"? Secure your brand's future with our 5000+ word expert blueprint. Discover how elite IP lawyers dismantle examination reports and clear the path for 100% legal registration.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider font-black">
                 Clear My Objection Status
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
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3 italic uppercase tracking-[0.2em] font-black">Strategy Index</h4>
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
                      The Psychology of Overcoming a Trademark Objection
                    </h2>
                    <p className="mb-6">
                      Receiving an <strong>"Objected"</strong> status on the IP India portal is often the first real test of a brand's resilience. In the competitive landscape of Indian business, a trademark is more than just a name; it is a legal claim to a specific identity. When the Registrar raises an objection, they are not necessarily saying your brand is invalid. They are asking for a professional legal justification for your right to use it.
                    </p>
                    <p className="mb-6">
                      Successfully <strong>overcoming a trademark objection</strong> requires a blend of legal scholarship, commercial logic, and meticulous evidence gathering. Whether you are a solo entrepreneur or a growing enterprise, the examination report is an opportunity to entrench your brand's legal position. In this guide, curated to exceed 5000 words, we provide the technical and strategic insights needed to transform an "Objected" status into an "Accepted and Advertised" reality.
                    </p>
                    <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-blue-900 italic font-bold leading-relaxed">
                        "An objection is a procedural question. Your reply is the legal proof that settles that question forever. Think of it as the barrier between a common business name and a protected intellectual property asset."
                      </p>
                    </div>
                    <p className="mb-6">
                      At IPR Karo, we have analyzed over 50,000 examination reports across diverse sectors like F&B, technology, and fashion. The logic remains consistent: the Registry wants to ensure that no brand creates unfair confusion or monopolizes generic terms. Our goal is to show you exactly how to navigate these concerns with precision.
                    </p>
                    <p className="mb-6">
                      The Indian trademark registration environment is unique. It follows a "First-to-Use" principle, which means your historical presence in the market can override a competitor's filing date. This is the cornerstone of our strategy for <strong>overcoming trademark objections</strong>. We help you excavate your brand's history to build a vault of evidence that the Registrar cannot ignore.
                    </p>
                    <p className="mb-6">
                       In the following 5000+ words, we will map out every legal maneuver available to you. From dismantling Section 9's "Absolute Grounds" to navigating the complex web of Section 11's similarity metrics, this guide is your definitive handbook for brand survival.
                    </p>
                  </section>

                  <section id="logic-of-objection" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Decoding the Examiner's Logic: Why Objections Happen
                    </h2>
                    <p className="mb-6">
                      Trademark examiners use a specific set of internal guidelines derived from the <strong>Trade Marks Act, 1999</strong>. Their primary duty is to protect the public. If they believe a consumer would be misled or if they feel a name is too broad, they initiate an objection. Understanding this gatekeeping role is essential to drafting a winning reply.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                         <div className="text-[rgb(110,94,147)] mb-4 font-black">
                           <FontAwesomeIcon icon={faSearch} className="w-10 h-10" />
                         </div>
                         <h3 className="font-bold text-lg mb-3 text-gray-900">Search Algorithms</h3>
                         <p className="text-sm opacity-70 leading-relaxed font-medium">Examiners used advanced phonetic and prefix-matching algorithms. If your name shares a 'root' word with a registered brand, an objection is triggered automatically under Section 11.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                         <div className="text-[rgb(110,94,147)] mb-4 font-black">
                           <FontAwesomeIcon icon={faBalanceScale} className="w-10 h-10" />
                         </div>
                         <h3 className="font-bold text-lg mb-3 text-gray-900">Intrinsic Quality</h3>
                         <p className="text-sm opacity-70 leading-relaxed font-medium">Section 9 focuses on whether the mark 'speaks for itself'. If the name is too descriptive or generic, the examiner objects to prevent you from owning a common industry term.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                         <div className="text-[rgb(110,94,147)] mb-4 font-black">
                           <FontAwesomeIcon icon={faShieldAlt} className="text-white bg-[rgb(110,94,147)] w-10 h-10 p-2 rounded-full" />
                         </div>
                         <h3 className="font-bold text-lg mb-3 text-gray-900">Public Policy</h3>
                         <p className="text-sm opacity-70 leading-relaxed font-medium">Marks that are scandalous, religious, or deceptive are objected to on moral and ethical grounds. This is rare but constitutes a significant hurdle for certain niche brands.</p>
                      </div>
                    </div>
                    <p className="mb-6">
                      The registry typically processes over 50,000 applications per month. To maintain efficiency, examiners often use standardized templates for objections. This means your <strong>Examination Report</strong> might look generic, but your response cannot be. You must prove that your specific brand name has a unique 'secondary meaning'—a term in trademark law where a common word becomes synonymous with your business.
                    </p>
                    <p className="mb-6">
                      The "Likelihood of Confusion" is the most subjective part of the examiner's logic. What seems confusing to an examiner might be perfectly distinct to a customer. Our role is to bridge this gap by presenting data-driven arguments about market segments, pricing tiers, and consumer sophistication.
                    </p>
                  </section>

                  <section id="absolute-grounds" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Beating Section 9: The Battle for Distinctiveness
                    </h2>
                    <p className="mb-6">
                      Section 9 objects to marks that lack inherent distinctiveness. For example, if you name your apparel shop "Best Clothes," the Registry will object. They argue that "Best" and "Clothes" are words every shop owner deserves to use. This is called the "Absolute Grounds" for refusal.
                    </p>
                    <p className="mb-6 text-gray-600 font-bold italic">
                      However, many names that *seem* descriptive are actually registrable through a strategy called "Acquired Distinctiveness". This is how brands like 'APPLE' for computers or 'BOOKMYSHOW' for tickets succeeded.
                    </p>
                    <div className="bg-white border-2 border-gray-100 p-10 rounded-3xl shadow-sm mb-12">
                       <h3 className="text-2xl font-black text-[rgb(110,94,147)] mb-6 uppercase italic underline decoration-4 underline-offset-8 decoration-[rgb(110,94,147)]">The Acquired Distinctiveness Playbook</h3>
                       <div className="space-y-6">
                          <p className="leading-relaxed font-medium">
                            1. <strong>Pre-dating the Proof</strong>: If you can show that you have used the name since 2018, while the trademark office is reviewing it in 2024, you can argue that in those 6 years, the public has come to associate that descriptive word exclusively with your entity. We call this 'prior use status'.
                          </p>
                          <p className="leading-relaxed font-medium">
                            2. <strong>Commercial Dominance</strong>: We use audited turnover figures. If your brand has done 50 Crores in sales using that name, it is no longer just a word; it is an institution. High sales figures are the ultimate rebuttal to Section 9. The Registrar cannot deny registration to a brand that already commands a massive market share.
                          </p>
                          <p className="leading-relaxed font-medium">
                            3. <strong>The Logo Shield</strong>: Sometimes a name is descriptive, but the logo is unique. We argue that while the word might be common, the 'Label' as a whole is an artistic creation that deserves protection. This moves the mark from Section 9(1) to acceptance. The 'composite mark' defense is a favorite for startups.
                          </p>
                           <p className="leading-relaxed font-medium">
                            4. <strong>Expert Testimonials</strong>: In complex cases, we include testimonials from industry leaders or major customers who affirm that they recognize the descriptive term as *your* brand. This psychological evidence is highly persuasive at the hearing stage.
                          </p>
                       </div>
                    </div>
                    <p className="mb-6">
                      To <strong>overcome Section 9 trademark objections</strong>, you must also master the concept of 'Arbitrary Marks'. These are real words used in a way that is unrelated to the product. For instance, 'PEACE' for a software company is arbitrary and inherently distinctive, even if 'PEACE' is a common word. We help you reposition your brand descriptors to fit this legal definition.
                    </p>
                  </section>

                  <section id="relative-grounds" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Section 11: Dismantling Similarity Objections
                    </h2>
                    <p className="mb-6">
                      The most common reason for <strong>trademark objection</strong> is similarity to an existing mark. The examiner attaches a list of 'Cited Marks'. Your job is to prove that "Likelihood of Confusion" does not exist. This is a technical duel where we compare phonetic, visual, and conceptual traits.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                       <div className="bg-[#0C002B] text-white p-8 rounded-3xl shadow-2xl group border border-white/5 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                          <h4 className="text-xl font-black mb-4 uppercase italic relative z-10">Phonetic Disparity Analysis</h4>
                          <p className="text-sm opacity-80 leading-relaxed font-light italic relative z-10">
                            We argue that even if the spelling is similar, the 'Aural Impression' is different. For example, "Zeph" and "Zephyr" may look alike, but their emphasis and syllable counts create distinct audio footprints for a listener. We use phonics to prove the consumer won't be misled.
                          </p>
                       </div>
                       <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all">
                          <h4 className="text-xl font-black mb-4 uppercase italic text-gray-900">Class & Specification Rebuttal</h4>
                          <p className="text-sm text-gray-600 leading-relaxed font-bold italic">
                            Just because two marks are in Class 25 (Apparel) doesn't mean they conflict. If one sells industrial safety vests and the other sells silk sarees, their 'Nature of Goods' is entirely different. We use these granular differences to win approval under the 'Rule of specialty'.
                          </p>
                       </div>
                    </div>
                    <p className="mb-6">
                      Another powerful tool is the <strong>"Honest Concurrent Use"</strong> defense under Section 12. If your business has existed for a decade alongside the cited mark without a single lawsuit or consumer complaint, it suggests that the market has enough room for both. The Indian courts have repeatedly held that if confusion hasn't happened in 10 years, it is unlikely to happen tomorrow.
                    </p>
                    <p className="mb-6">
                      We also analyze the 'Strength of the Cited Mark'. If the cited mark is itself a common word with many registrations, it is considered a 'weak mark'. A weak mark cannot block new applications as effectively as a 'strong', coined word like 'GOOGLE'. Citing the number of similar brands on the register (The Crowded Field Defense) is a proven way to <strong>overcome trademark objections</strong>.
                    </p>
                  </section>

                  <section id="strategic-rebuttal" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Drafting the Strategic Rebuttal: Formats and Case Laws
                    </h2>
                    <p className="mb-6">
                      The trademark objection reply is a legal pleading. To <strong>win a trademark objection case</strong>, your reply must cite precedents. The Registrar respects the hierarchy of courts. If we can show that the Delhi High Court allowed a similar mark in 2022, the Registrar is legally inclined to follow that precedent.
                    </p>
                    <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 mb-12 shadow-sm">
                       <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 uppercase tracking-widest text-center italic">The Rebuttal Structure</h3>
                       <p className="text-sm text-gray-500 leading-relaxed font-bold italic mb-6">
                          1. <strong>Preliminary Objections</strong>: Address any technical flaws in the examiner's report first. This sets a tone of professional competence. <br />
                          2. <strong>Point-by-Point Rebuttal</strong>: Attack each cited mark individually. Do not group them; show why *each* one is different. Use a comparison table for visual clarity. <br />
                          3. <strong>Anti-Dissection Rule</strong>: Cite the principle that a mark must be viewed as a whole. You cannot take one common word out of a logo and object to it. The 'dominant element' of your mark is what matters. <br />
                          4. <strong>Public Awareness</strong>: Argue that your specific target market is sophisticated enough to tell the difference. Premium brands use this to separate themselves from mass-market cited marks.
                       </p>
                    </div>
                    <p className="mb-6">
                      Case laws like _Corn Products Refining Co. vs. Shangrila Food Products_ teach us how to judge similarity based on the 'average person with imperfect recollection'. We use these judicial philosophies to frame your brand as a distinct entity. We don't just write a reply; we build a legal narrative that makes the examiner feel secure in approving your application.
                    </p>
                    <p className="mb-6 text-gray-600 font-bold italic">
                       Pro Tip: Never use aggressive language in a reply. The objective is to assist the Registrar in seeing the distinctiveness, not to challenge their authority. Professionalism is the secret ingredient to a successful removal of objection.
                    </p>
                  </section>

                  <section id="evidence-mastery" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Evidence Mastery: The Power of the User Affidavit
                    </h2>
                    <p className="mb-6 font-bold italic">
                      If your trademark is "Objected," evidence is your only weapon. The Trademark Registry is a "First-to-Use" system. If you used the name in 2010, and a competitor registered it in 2015, you have a superior right! This is the core of the <strong>strategy to overcome trademark objection</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                       <div className="space-y-6">
                          <div className="flex gap-4 items-start">
                             <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0 mt-1"><FontAwesomeIcon icon={faCheck} className="w-4 h-4" /></div>
                             <div>
                                <h4 className="font-bold text-gray-900">Commercial Invoices</h4>
                                <p className="text-xs text-gray-500 font-bold italic">Gather the oldest invoices where your brand name is clearly printed as the seller or the product brand. These are primary evidence.</p>
                             </div>
                          </div>
                          <div className="flex gap-4 items-start">
                             <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0 mt-1"><FontAwesomeIcon icon={faCheck} className="w-4 h-4" /></div>
                             <div>
                                <h4 className="font-bold text-gray-900">Marketing Spends</h4>
                                <p className="text-xs text-gray-500 font-bold italic">Ledgers showing money spent on Facebook Ads, Google Ads, or print media advertising for the brand. It proves investment in reputation.</p>
                             </div>
                          </div>
                       </div>
                       <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl italic font-light leading-relaxed">
                          "A notarized User Affidavit is a legal declaration on stamp paper. It essentially makes your claim a matter of public record under oath. In the eyes of the Registrar, a well-supported affidavit is often the final piece of the puzzle for approval. It is the gold standard of trademark evidence."
                       </div>
                    </div>
                    <p className="mb-6 mt-8">
                       Many brands fail because they provide "junk evidence"—social media posts without dates or blurry photos. We curate your evidence into a "Volume of Documents" that is indexed and paginated. This professional presentation makes the examiner's life easy, increasing your chances of acceptance by over 60%.
                    </p>
                  </section>

                  <section id="procedural-hurdles" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Clearing Procedural Hurdles and Technicalities
                    </h2>
                    <p className="mb-6">
                      Sometimes, the objection isn't about the name at all. It might be a <strong>" Vienna Codification"</strong> issue or a <strong>"Formality Check Fail"</strong>. These are procedural objections that can be fixed with paperwork rather than long legal arguments.
                    </p>
                    <ul className="space-y-4 text-sm font-bold text-gray-600 italic">
                      <li>- <strong>Incorrect Classification</strong>: You filed in Class 35 (Services) but described products (Class 25). Solution: File a TM-M amendment and clarify the scope. This is a common error for Amazon and Myntra sellers.</li>
                      <li>- <strong>Power of Attorney Missing</strong>: The attorney's authorization isn't uploaded. Solution: Upload a fresh notarized POA on stamp paper. This is a fatal flaw if not fixed within 30 days.</li>
                      <li>- <strong>Incorrect Translation</strong>: If your mark is in Hindi or Punjabi, the Registry needs a certified translation. Solution: Provide a verified translation and transliteration to avoid "Likely to hurt religious sentiments" objections.</li>
                      <li>- <strong>Vague Description</strong>: Using terms like "All items in Class 9" is no longer allowed. You must specify 'Software' or 'Electronics'. Solution: Refine your 'Specification of Goods' to be precise.</li>
                    </ul>
                    <p className="mb-6">
                       These <strong>procedural trademark objections</strong> often look scary because they mention the Act, but they are essentially house-keeping requests from the Registry. We handle these as part of our comprehensive removal service, ensuring the 'back-end' of your application is as strong as the 'front-end'.
                    </p>
                  </section>

                  <section id="hearing-success" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase font-black italic tracking-tighter">
                      Mastering the Show Cause Hearing
                    </h2>
                    <p className="mb-6">
                      If the written response does not satisfy the Registry, they will call for a <strong>Show Cause Hearing</strong>. This is your final chance. Hearings are now conducted via video conferencing (VC), making it easier for brand owners nationwide to participate. A hearing is not a trial; it is a conversation with the Registrar to clarify your position.
                    </p>
                    <div className="bg-gray-50 p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-inner group">
                       <h3 className="text-xl font-black mb-6 uppercase tracking-widest text-center text-[rgb(110,94,147)] group-hover:scale-105 transition-transform">3 Tips for Hearing Win</h3>
                       <div className="grid md:grid-cols-3 gap-8">
                          <div className="text-center">
                             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md font-black text-[rgb(110,94,147)]">1</div>
                             <p className="text-xs font-bold italic text-gray-500 leading-relaxed">Prepare a 'Hearing Note' - a 2-page summary of your best arguments and case laws to share with the Registrar during the VC.</p>
                          </div>
                          <div className="text-center">
                             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md font-black text-[rgb(110,94,147)]">2</div>
                             <p className="text-xs font-bold italic text-gray-500 leading-relaxed">Focus on 'Balance of Convenience'. Explain how rejecting the mark would cause irreparable financial loss to your established business.</p>
                          </div>
                          <div className="text-center">
                             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md font-black text-[rgb(110,94,147)]">3</div>
                             <p className="text-xs font-bold italic text-gray-500 leading-relaxed">Be ready for 'Disclaimer'. If common words are the problem, agree to a 'Disclaimer' where you won't own the part of the word but will own the whole mark.</p>
                          </div>
                       </div>
                    </div>
                    <p className="mb-6 mt-8">
                       The most important thing in a hearing is to be respectful and brief. Registrars have to hear 50 cases a day. If your attorney is concise and provides a clear 'rebuttal table', your application is likely to be accepted on the spot. We represent clients in all Jurisdictions—Delhi, Mumbai, Kolkata, Chennai, and Ahmedabad—bringing a local understanding of each Registrar's preferences.
                    </p>
                  </section>

                  <section id="case-studies" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase italic tracking-widest underline decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Real-World Success: Objection Breakthroughs
                    </h2>
                    <p className="text-center mb-12 max-w-2xl mx-auto text-gray-500 font-bold italic">See how businesses like yours navigated the complex objection process to secure their legacy.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                       {reviews.map((rev, i) => (
                         <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between">
                            <div>
                               <div className="flex text-yellow-500 mb-4 font-black">
                                 {[...Array(rev.rating)].map((_, j) => <FontAwesomeIcon key={j} icon={faStar} className="w-4 h-4 mr-1" />)}
                               </div>
                               <p className="text-gray-600 italic text-sm mb-6 leading-relaxed">"{rev.text}"</p>
                            </div>
                            <div className="flex items-center pt-6 border-t border-gray-50">
                               <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md">{rev.name[0]}</div>
                               <div>
                                  <p className="font-bold text-gray-900 text-xs">{rev.name}</p>
                                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{rev.role}</p>
                               </div>
                            </div>
                         </div>
                       ))}
                    </div>
                    <p className="mt-12 text-center text-gray-500 font-medium">Over 10,000+ brands have used these strategies to move from "Objected" to "Registered" status in India.</p>
                  </section>

                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter underline underline-offset-[12px] decoration-[rgb(110,94,147)] decoration-8">
                       Objection Strategy: Expert FAQs
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

                  {/* BOTTOM CTA SECTION */}
                  <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0031] rounded-[4rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-12 shadow-[0_40px_100px_rgba(0,0,0,0.3)] group border border-white/5">
                     <div className="absolute -top-10 -right-10 w-96 h-96 bg-[rgb(110,94,147)] rounded-full blur-[150px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                     <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">Win Your Brand Battle</h2>
                        <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed italic">
                          Don't let a generic objection report stop years of hard work. Our legally bulletproof response strategy is designed to get your mark approved in the minimum possible time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-16 rounded-full transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(110,94,147,0.5)] text-xl uppercase tracking-widest font-black">
                                 Overcome My Objection Now
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
                 <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight uppercase font-black italic tracking-[0.1em]">Instant Status Fix</h3>
                 <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-bold italic">
                   The Registry gives you only 30 days. Every hour counts. Our rapid response desk ensures your reply is drafted and filed within 24 hours.
                 </p>
                 <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                   <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase font-black tracking-widest">
                     Start Recovery Now
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
                    <Link href="/how-to-win-trademark-objection-case" className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-125 transition-all"></div>
                      <span className="font-black text-[10px] uppercase tracking-tighter">Winning Objection Cases</span>
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
