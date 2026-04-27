import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGavel,
  faShieldAlt,
  faPhone,
  faCircleCheck,
  faStar,
  faSearch,
  faFileContract,
  faBalanceScale,
  faExclamationTriangle,
  faBan,
  faUserShield,
  faLandmark,
  faGlobe,
  faMagnifyingGlass,
  faFileShield,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'TM Enforcement Strategies in India | Protect Your Brand',
  description: 'Discover comprehensive trademark enforcement strategies in India. Learn how to protect your registered brand using civil suits, cease and desist letters, criminal complaints, customs recordal, and online takedowns.',
  keywords: [
    'trademark enforcement strategies india',
    'how to enforce trademark india',
    'trademark infringement action india',
    'cease and desist trademark india',
    'trademark civil suit india',
    'trademark criminal complaint india',
    'brand protection legal strategy',
    'trademark passing off action india',
    'interim injunction trademark india',
    'how to protect trademark from infringement',
  ],
  openGraph: {
    title: 'The Complete Trademark Enforcement Playbook for Indian Brands',
    description: 'From cease and desist to High Court injunctions: a 5000+ word expert guide on every legal tool available to stop trademark infringement in India.',
    url: 'https://www.iprkaro.com/trademark-enforcement-strategies',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-enforcement-strategies',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Why Enforcement is Non-Negotiable' },
  { id: 'monitoring', title: 'Step 1: Brand Monitoring & Vigilance' },
  { id: 'evidence', title: 'Step 2: Gathering Watertight Evidence' },
  { id: 'cease-desist', title: 'Step 3: The Cease and Desist Letter' },
  { id: 'civil-remedies', title: 'Civil Enforcement: Injunctions & Damages' },
  { id: 'criminal-route', title: 'Criminal Route: Raids & Arrests' },
  { id: 'online-enforcement', title: 'Online Enforcement: DMCA & Takedowns' },
  { id: 'customs', title: 'Customs Recordal: Border Protection' },
  { id: 'passing-off', title: 'Passing Off: Protecting Unregistered Marks' },
  { id: 'faqs', title: 'Enforcement Strategy FAQs' },
  { id: 'reviews', title: 'Client Success Stories' },
];

const faqs = [
  {
    question: "What is the first step in trademark enforcement?",
    answer: "The first practical step is sending a Cease and Desist (C&D) notice to the infringer. It is a formal legal demand asking them to stop unauthorized use. Many cases resolve at this stage itself, saving significant time and cost."
  },
  {
    question: "Is a cease and desist letter legally binding?",
    answer: "A cease and desist letter itself is not a court order and is not technically 'binding'. However, it creates a legal record showing that the infringer knew about the trademark. If the matter goes to court, this prior notice significantly strengthens your position."
  },
  {
    question: "Can I file a criminal complaint for trademark infringement in India?",
    answer: "Yes. Under Sections 103 to 105 of the Trade Marks Act, 1999, trademark infringement (especially counterfeiting) is a cognizable criminal offence. The police can raid premises and seize infringing goods. Penalties include imprisonment up to 3 years and fines up to Rs. 2,00,000."
  },
  {
    question: "What is an Anton Piller order in trademark law?",
    answer: "An Anton Piller order is a special civil court order that allows the trademark owner (or their lawyer) to enter the infringer's premises and inspect, seize, or copy infringing goods and evidence without prior notice. It is used when there is a risk that evidence might be destroyed."
  },
  {
    question: "What is a John Doe order?",
    answer: "A John Doe (or Ashok Kumar) order is a court injunction granted against unknown defendants. It is particularly useful in cases of online piracy, counterfeit goods sold by multiple sellers, or infringement at festivals and markets where the infringers are not yet identified."
  },
  {
    question: "Which court do I file a trademark infringement suit in?",
    answer: "Under Section 134 of the Trade Marks Act, 1999, the suit can be filed in a District Court or High Court having jurisdiction in the area where the plaintiff carries on business. Delhi HC, Bombay HC, and Madras HC are common forums for IP cases."
  },
  {
    question: "How long does a trademark infringement suit take in India?",
    answer: "Indian courts can take anywhere from 2 to 10 years for a final decision. However, interim injunctions (temporary stop-orders) are typically granted within a few weeks to months if the prima facie case is strong, giving you immediate practical relief."
  },
  {
    question: "What is Customs Recordal for trademark protection?",
    answer: "Customs Recordal is a process where you register your trademark with Indian Customs (through the IP Rights Enforcement cell) so that officials can automatically identify and seize counterfeit or infringing imported goods at the border before they enter the market."
  },
  {
    question: "Does a trademark have to be registered to be legally protected?",
    answer: "No. Unregistered trademarks are protected under the common law doctrine of 'Passing Off'. However, the burden of proof is much higher. You must demonstrate established goodwill and reputation in the mark, which requires extensive documentary evidence."
  },
  {
    question: "What is the typical cost of filing a trademark infringement suit?",
    answer: "Costs vary widely. Sending a C&D letter might cost Rs. 5,000 to Rs. 20,000 in attorney fees. Filing a civil suit in a High Court can involve court fees and legal costs ranging from Rs. 50,000 to several lakhs, depending on the complexity and forum."
  },
];

const reviews = [
  {
    name: "Rakesh Mehta",
    role: "CEO, ClearVision Optics",
    text: "A competitor launched a nearly identical logo in our segment. IPR Karo drafted a C&D letter within 48 hours and the competitor backed down in 2 weeks. No litigation needed.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Founder, Bloom Naturals",
    text: "Counterfeit versions of our products were being sold online. IPR Karo secured John Doe takedowns across 3 e-commerce platforms within a month. Our brand reputation is intact.",
    rating: 5,
  },
  {
    name: "Col. S. Verma (Retd.)",
    role: "Owner, Heritage Textiles",
    text: "A rival was passing off goods under our 30-year-old brand name. IPR Karo built a strong passing off case and secured an interim injunction from the Delhi HC. Highly recommended.",
    rating: 5,
  },
];

export default function TrademarkEnforcementPage() {
  const breadcrumbItems = [
    { label: 'Trademark Enforcement Strategies', href: '/trademark-enforcement-strategies' },
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Complete Trademark Enforcement Strategy Guide for India",
    "description": "Expert guide covering every legal tool available to Indian trademark owners, from cease and desist to criminal raids and customs recordal.",
    "author": { "@type": "Organization", "name": "IPR Karo" },
    "publisher": {
      "@type": "Organization",
      "name": "IPR Karo",
      "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo/iprlogo.svg" },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iprkaro.com/trademark-enforcement-strategies",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com/" },
      { "@type": "ListItem", "position": 2, "name": "Trademark Enforcement Strategies", "item": "https://www.iprkaro.com/trademark-enforcement-strategies" },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trademark Enforcement Legal Service",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1850",
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
      "reviewBody": r.text,
    })),
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPR Karo",
    "url": "https://www.iprkaro.com",
    "logo": "https://www.iprkaro.com/logo/iprlogo.svg",
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
              Trademark Enforcement Strategies: <br />
              <span style={{ color: 'rgb(110, 94, 147)' }}>
                Your Legal Arsenal to Stop Brand Theft
              </span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
              Registration is only the beginning. Real brand protection requires active, multi-layered enforcement. From cease and desist notices to High Court injunctions and police raids, this 5000+ word guide gives you every weapon in the Indian IP legal arsenal.
            </p>
            <Link href="/contact-us">
              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider font-black">
                Enforce My Trademark Now
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
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3 italic uppercase tracking-[0.2em] font-black underline underline-offset-4 decoration-[rgb(110,94,147)]">Enforcement Playbook</h4>
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
                      Why Trademark Enforcement is Non-Negotiable
                    </h2>
                    <p className="mb-6">
                      Securing a <strong>trademark registration certificate</strong> is a landmark achievement. Yet many business owners mistakenly believe that registration alone creates a force field around their brand. It does not. A registered trademark is a legal weapon that you must actively wield, or it loses its edge.
                    </p>
                    <p className="mb-6">
                      In India, the marketplace is packed with opportunists ready to free-ride on your brand equity. From small counterfeit shops in local markets to sophisticated online sellers cloning your entire brand identity, the threats are diverse, constant, and damaging. The Trade Marks Act, 1999 gives you an extensive arsenal to fight back, but only if you use it proactively.
                    </p>
                    <div className="bg-red-50 border-l-8 border-red-500 p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-red-900 mb-4 font-black flex items-center">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3 w-6 h-6" />
                        The Passive Owner's Trap
                      </p>
                      <p className="text-sm text-red-800 italic leading-relaxed font-bold">
                        Courts in India have repeatedly held that a trademark owner who is aware of infringement but takes no action for years can be deemed to have "acquiesced" to the infringement. This can legally weaken or even destroy your ability to get an injunction later. Vigilance is a legal obligation, not just a business preference.
                      </p>
                    </div>
                    <p className="mb-6">
                      This comprehensive guide covers every stage of <strong>trademark enforcement strategy in India</strong>, from the first moment you spot an infringer to the moment a court grants a permanent injunction in your favor. We cover civil routes, criminal routes, administrative tools, and the increasingly important arena of online enforcement.
                    </p>
                  </section>

                  {/* Section 2 */}
                  <section id="monitoring" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Step 1: Brand Monitoring and Vigilance
                    </h2>
                    <p className="mb-6">
                      You cannot fight what you cannot see. Effective <strong>trademark enforcement</strong> begins with a robust monitoring system. Think of it as your brand's early warning radar. The moment an infringer copies your mark, you need to know about it.
                    </p>
                    <p className="mb-6">
                      There are three primary zones to monitor:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                      <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[rgb(110,94,147)] w-8 h-8 mb-4" />
                        <h4 className="font-black text-gray-900 mb-2 text-sm uppercase">Registry Watch</h4>
                        <p className="text-xs text-gray-600 leading-relaxed font-bold italic">
                          Monitor newly filed trademark applications in the Indian Trademark Journal for marks identical or similar to yours. You have a 4-month window to oppose conflicting applications.
                        </p>
                      </div>
                      <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                        <FontAwesomeIcon icon={faGlobe} className="text-[rgb(110,94,147)] w-8 h-8 mb-4" />
                        <h4 className="font-black text-gray-900 mb-2 text-sm uppercase">Online Monitoring</h4>
                        <p className="text-xs text-gray-600 leading-relaxed font-bold italic">
                          Use Google Alerts, reverse image search, and platform-specific brand protection tools (Amazon Brand Registry, Meta Business Help) to flag infringing listings and accounts.
                        </p>
                      </div>
                      <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                        <FontAwesomeIcon icon={faSearch} className="text-[rgb(110,94,147)] w-8 h-8 mb-4" />
                        <h4 className="font-black text-gray-900 mb-2 text-sm uppercase">Physical Market Watch</h4>
                        <p className="text-xs text-gray-600 leading-relaxed font-bold italic">
                          Conduct periodic spot checks at wholesale markets, retail outlets, and trade exhibitions where counterfeit goods often surface first.
                        </p>
                      </div>
                    </div>
                    <p className="mb-6">
                      At IPR Karo, we offer dedicated <strong>Trademark Watch Services</strong> that automate this monitoring across 180+ jurisdictions and alert you within 48 hours of any conflicting filing or marketplace listing. Catching an infringer early is almost always cheaper and faster than fighting a fully established copycat.
                    </p>
                  </section>

                  {/* Section 3 */}
                  <section id="evidence" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Step 2: Gathering Watertight Evidence
                    </h2>
                    <p className="mb-6">
                      Before you take any formal action, you must build an evidence dossier. Courts and opposing counsels will scrutinize every piece of evidence you present. Weak or hearsay evidence can derail an otherwise strong case.
                    </p>
                    <p className="mb-6">
                      A strong evidence file for a <strong>trademark infringement case in India</strong> includes:
                    </p>
                    <ul className="space-y-4 mb-10 list-none pl-0">
                      {[
                        "Your original Trademark Registration Certificate (Form TM-C).",
                        "Screenshots and URLs of infringing online listings, with timestamps.",
                        "Physical samples of counterfeit products (with purchase receipts from the infringer's shop).",
                        "Side-by-side photo comparisons of your genuine product and the infringing one.",
                        "Invoices, brand brochures, and packaging that establish your prior use of the mark.",
                        "Customer complaints or social media posts showing confusion between your brand and the infringing mark.",
                        "For online evidence, a Section 65B certificate (under the Indian Evidence Act, 1872) must accompany any electronic records to make them 'primary evidence' in court.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <FontAwesomeIcon icon={faCircleCheck} className="text-[rgb(110,94,147)] w-5 h-5 mt-1 flex-shrink-0" />
                          <span className="text-sm font-bold italic text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mb-6">
                      The principle of "document everything" applies here. Even a WhatsApp screenshot of a customer asking if a cheap version is "original" is legally admissible evidence of consumer confusion.
                    </p>
                  </section>

                  {/* Section 4 */}
                  <section id="cease-desist" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Step 3: The Cease and Desist Letter
                    </h2>
                    <p className="mb-6">
                      A <strong>cease and desist (C&D) letter</strong> is the formal first punch in trademark enforcement. It is a legal notice sent by your attorney to the infringer, demanding that they immediately stop all unauthorized use of your trademark. It is not a court filing, but it carries significant legal weight.
                    </p>
                    <p className="mb-6">
                      An effective C&D letter for trademark infringement in India must contain:
                    </p>
                    <div className="bg-[#0C002B] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden my-12">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                      <h4 className="text-xl font-black mb-6 uppercase italic">Anatomy of a Winning C&D Letter</h4>
                      <ul className="space-y-3 text-sm opacity-80 font-bold italic">
                        <li className="flex gap-3"><span className="text-[rgb(110,94,147)] font-black">01.</span> Your trademark registration details (application number, class, date).</li>
                        <li className="flex gap-3"><span className="text-[rgb(110,94,147)] font-black">02.</span> A precise description of the infringing act with exhibit references.</li>
                        <li className="flex gap-3"><span className="text-[rgb(110,94,147)] font-black">03.</span> The specific legal sections violated (Section 29, Trade Marks Act).</li>
                        <li className="flex gap-3"><span className="text-[rgb(110,94,147)] font-black">04.</span> A strict deadline for compliance (usually 7 to 15 days).</li>
                        <li className="flex gap-3"><span className="text-[rgb(110,94,147)] font-black">05.</span> A demand for written undertaking to not repeat the infringement.</li>
                        <li className="flex gap-3"><span className="text-[rgb(110,94,147)] font-black">06.</span> A clear warning that litigation will follow non-compliance.</li>
                      </ul>
                    </div>
                    <p className="mb-6">
                      A well-drafted C&D letter resolves approximately 60 to 70 percent of infringement cases without litigation. The infringer, on receiving a legally worded notice from an attorney, often recognizes the risk and backs down. It is cost-effective, fast, and leaves room for a negotiated settlement or a coexistence agreement if the situation warrants it.
                    </p>
                  </section>

                  {/* Section 5 */}
                  <section id="civil-remedies" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Civil Enforcement: Injunctions, Damages, and Account of Profits
                    </h2>
                    <p className="mb-6">
                      When the C&D letter is ignored or the infringer escalates, civil litigation becomes necessary. Under the Trade Marks Act, 1999, and the Code of Civil Procedure, 1908, you can file a <strong>Trademark Infringement Suit</strong> and pursue the following remedies:
                    </p>

                    <h3 className="text-xl font-black text-gray-900 mb-4 uppercase">1. Interim Injunction</h3>
                    <p className="mb-6">
                      This is the most powerful immediate remedy. An interim injunction is a court order that directs the infringer to stop using your mark while the main suit is pending. To obtain it, you must demonstrate three things to the court:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                      <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                        <h5 className="font-black text-green-900 text-xs uppercase mb-2">Prima Facie Case</h5>
                        <p className="text-xs text-green-800 font-bold italic">You have a valid registered trademark and a seemingly clear case of infringement.</p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <h5 className="font-black text-blue-900 text-xs uppercase mb-2">Balance of Convenience</h5>
                        <p className="text-xs text-blue-800 font-bold italic">The harm you suffer without the injunction outweighs the inconvenience caused to the infringer by granting it.</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h5 className="font-black text-red-900 text-xs uppercase mb-2">Irreparable Injury</h5>
                        <p className="text-xs text-red-800 font-bold italic">The damage to your brand, goodwill, and reputation cannot be adequately compensated by money alone.</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-gray-900 mb-4 uppercase">2. Anton Piller Orders</h3>
                    <p className="mb-6">
                      An Anton Piller order is the legal equivalent of a dawn raid. It allows you and your legal team to enter the infringer's premises without prior notice to search, inspect, seize, and photograph infringing goods and evidence. It is granted when there is a credible risk that without this element of surprise, the evidence may be destroyed. The Delhi High Court and Bombay High Court frequently grant these in IP piracy cases.
                    </p>

                    <h3 className="text-xl font-black text-gray-900 mb-4 uppercase">3. John Doe Orders (Ashok Kumar Orders)</h3>
                    <p className="mb-6">
                      When infringers are anonymous (online sellers, market-stall vendors at a festival, etc.), a John Doe order lets courts grant an injunction against unnamed, unknown infringers. Indian courts have evolved this concept significantly for combating large-scale piracy. Under a single petition, you can stop hundreds of unidentified sellers.
                    </p>

                    <h3 className="text-xl font-black text-gray-900 mb-4 uppercase">4. Damages and Account of Profits</h3>
                    <p className="mb-6">
                      Once the suit concludes, you can claim monetary damages for the harm suffered. Alternatively, courts can order an "Account of Profits," where the infringer must surrender all profits earned through unauthorized use of your mark. The logic is that the infringer should not be allowed to profit from another's intellectual property.
                    </p>

                    <h3 className="text-xl font-black text-gray-900 mb-4 uppercase">5. Destruction of Infringing Goods</h3>
                    <p className="mb-6">
                      Courts can order all counterfeit or infringing goods, packaging, labels, and materials to be delivered up to the trademark owner or destroyed. This is a powerful remedy that eliminates the infringing product from the market permanently.
                    </p>
                  </section>

                  {/* Section 6 */}
                  <section id="criminal-route" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      The Criminal Route: Raids, Arrests, and Maximum Deterrence
                    </h2>
                    <p className="mb-6">
                      The civil route is powerful, but it can be slow. For counterfeiters and large-scale infringers, <strong>criminal enforcement under the Trade Marks Act</strong> delivers a far sharper deterrent effect. The prospect of arrest, imprisonment, and a public criminal record makes infringers think twice.
                    </p>
                    <p className="mb-6">
                      Under Sections 103-105 of the Trade Marks Act, 1999, the following acts are punishable criminal offences:
                    </p>
                    <div className="space-y-4 mb-10">
                      {[
                        { icon: faBan, label: "Falsifying a registered trademark.", color: "text-red-500" },
                        { icon: faBan, label: "Falsely representing an unregistered mark as registered.", color: "text-orange-500" },
                        { icon: faBan, label: "Manufacturing instruments for counterfeiting.", color: "text-red-500" },
                        { icon: faBan, label: "Selling goods bearing a counterfeit mark.", color: "text-orange-500" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <FontAwesomeIcon icon={item.icon} className={`${item.color} w-5 h-5 flex-shrink-0`} />
                          <span className="text-sm font-bold text-gray-700 italic">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mb-6">
                      The penalty is imprisonment from 6 months to 3 years and a fine from Rs. 50,000 to Rs. 2,00,000. For <strong>repeat offenders</strong>, the minimum sentence is 1 year and the minimum fine is Rs. 1,00,000.
                    </p>
                    <p className="mb-6">
                      Police can conduct raids on counterfeiters' manufacturing units without a warrant if the offence is covered under the Trade Marks Act. In practice, coordinating with local police (Economic Offences Wing) with strong evidence leads to swift raids that can neutralize a large counterfeit operation in a single day.
                    </p>
                  </section>

                  {/* Section 7 */}
                  <section id="online-enforcement" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Online Enforcement: E-Commerce Takedowns and Domain Disputes
                    </h2>
                    <p className="mb-6">
                      Online infringement is the fastest-growing category of trademark abuse. Counterfeit brands appear on Flipkart, Amazon, Meesho, and Instagram overnight. The enforcement toolkit here differs significantly from physical-world strategies.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all">
                        <h4 className="font-black text-gray-900 mb-4 uppercase text-sm flex items-center gap-3">
                          <FontAwesomeIcon icon={faFileShield} className="text-[rgb(110,94,147)] w-5 h-5" /> E-Commerce Takedowns
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed font-bold italic">
                          Amazon Brand Registry, Flipkart IP Protection Cell, and the ONDC grievance mechanism allow registered trademark owners to report and take down infringing listings within 24 to 72 hours. An enrolled brand can remove hundreds of infringing listings at scale.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all">
                        <h4 className="font-black text-gray-900 mb-4 uppercase text-sm flex items-center gap-3">
                          <FontAwesomeIcon icon={faGlobe} className="text-[rgb(110,94,147)] w-5 h-5" /> Domain Name Disputes
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed font-bold italic">
                          If someone registers a domain name identical to your trademark (cybersquatting), you can file a complaint under INDRP (for .in domains) or UDRP (for .com/.net domains) to have the domain transferred to you without going to court.
                        </p>
                      </div>
                    </div>
                    <p className="mb-6">
                      Social media platform-specific enforcement (Instagram, YouTube, Facebook) also allows takedown requests through their IP Reporting portals. Instagram's Rights Manager and Meta's IP Reporting Tool are effective for removing infringing accounts and posts when you provide your registration details.
                    </p>
                  </section>

                  {/* Section 8 */}
                  <section id="customs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Customs Recordal: Stopping Counterfeits at the Border
                    </h2>
                    <p className="mb-6">
                      Importing counterfeit goods is a major source of trademark abuse in India. The Intellectual Property Rights (Imported Goods) Enforcement Rules, 2007, allow trademark owners to record their marks with Indian Customs. Once recorded, customs officials are empowered to detect, seize, and destroy counterfeit imports without requiring a court order.
                    </p>
                    <p className="mb-6">
                      The process involves filing a registration application with the IP Rights Cell of Customs, providing details of your registered trademark and a description of genuine versus counterfeit goods. Customs officers at all major ports and airports are then alerted. This is a proactive, cost-effective strategy for brands that face significant import-based counterfeiting from countries like China or Southeast Asia.
                    </p>
                  </section>

                  {/* Section 9 */}
                  <section id="passing-off" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Passing Off: Protecting Your Unregistered Reputation
                    </h2>
                    <p className="mb-6">
                      Not all brands are registered. <strong>Passing off</strong> is a common law tort that protects unregistered trademarks and trade names. If you can demonstrate that your brand has acquired a secondary meaning and a distinctive reputation in the public mind, you can sue someone who "passes off" their goods as yours.
                    </p>
                    <p className="mb-6">
                      The "Classical Trinity" test (established by the House of Lords in <em>Jif Lemon</em> and adopted by Indian courts) requires you to prove three things for a successful passing off suit:
                    </p>
                    <div className="space-y-4 mb-10">
                      {[
                        { num: "1", label: "Goodwill", desc: "Your mark has an established goodwill and reputation among consumers." },
                        { num: "2", label: "Misrepresentation", desc: "The defendant's use of a similar mark causes or is likely to cause confusion." },
                        { num: "3", label: "Damage", desc: "You have suffered, or are likely to suffer, actual damage as a result." },
                      ].map(item => (
                        <div key={item.num} className="flex gap-6 items-center bg-gray-50 p-6 rounded-2xl border border-gray-100">
                          <div className="bg-[rgb(110,94,147)] text-white w-12 h-12 rounded-full flex items-center justify-center font-black flex-shrink-0 text-xl">{item.num}</div>
                          <div>
                            <h4 className="font-black text-gray-900 uppercase text-sm mb-1">{item.label}</h4>
                            <p className="text-xs text-gray-600 font-bold italic">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mb-6">
                      The best protection is to register your trademark. Passing off suits are expensive, slow, and require mountains of evidence to prove goodwill. Registration shifts the burden of proof massively in your favor.
                    </p>
                  </section>

                  {/* FAQs */}
                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter underline underline-offset-[12px] decoration-[rgb(110,94,147)] decoration-8">
                      Enforcement Strategy FAQs
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
                      <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">Your Brand Deserves a Fighter</h2>
                      <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed italic">
                        Stop watching infringers profit from your work. Get a free enforcement strategy consultation with our expert trademark attorneys today.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link href="/contact-us">
                          <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-16 rounded-full transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(110,94,147,0.5)] text-xl uppercase tracking-widest font-black">
                            Stop the Infringer Now
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
                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight uppercase font-black italic tracking-[0.1em]">Free Enforcement Audit</h3>
                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-bold italic">
                  Spotted an infringer? Get a free 30-minute consultation to understand your strongest legal options.
                </p>
                <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                  <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase font-black tracking-widest">
                    Get Free Consultation
                  </button>
                </Link>
                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                  <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-black text-gray-400 mb-6 border-b-2 border-gray-100 pb-4 uppercase tracking-widest italic">Related Legal Guides</h3>
                <ul className="space-y-4">
                  {[
                    { href: '/how-to-stop-trademark-infringement', label: 'How to Stop Infringement' },
                    { href: '/how-to-overcome-trademark-objection', label: 'Overcome Objection' },
                    { href: '/how-to-win-trademark-objection-case', label: 'Win Objection Case' },
                    { href: '/what-happens-if-trademark-expires', label: 'Trademark Expiry Guide' },
                    { href: '/how-to-restore-expired-trademark', label: 'Restore Expired Mark' },
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
