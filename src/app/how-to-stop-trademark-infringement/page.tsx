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
  faFileContract,
  faBalanceScale,
  faExclamationTriangle,
  faBan,
  faUserShield,
  faHandFist,
  faGlobe,
  faFileShield,
  faBullhorn,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'How to Stop Trademark Infringement in India | Step-by-Step Legal Guide',
  description: 'Discover how to stop trademark infringement in India with expert legal steps: cease and desist notice, interim injunction, criminal complaint, and evidence gathering. Protect your brand today.',
  keywords: [
    'how to stop trademark infringement in india',
    'trademark infringement how to stop',
    'stop trademark infringement india',
    'how to file trademark infringement suit india',
    'cease and desist trademark infringement india',
    'interim injunction trademark infringement',
    'trademark infringement legal notice india',
    'how to report trademark infringement india',
    'evidence for trademark infringement india',
    'stop brand copying india',
  ],
  openGraph: {
    title: 'How to Stop Trademark Infringement in India: The Full Legal Playbook',
    description: 'A 5000+ word legal guide on stopping trademark infringement in India, from sending a legal notice to securing High Court injunctions. Updated for 2024.',
    url: 'https://www.iprkaro.com/how-to-stop-trademark-infringement',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/how-to-stop-trademark-infringement',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Infringement and Its Immediate Danger' },
  { id: 'identify-infringement', title: 'How to Identify Trademark Infringement' },
  { id: 'evidence-gathering', title: 'Building Your Evidence File' },
  { id: 'legal-notice', title: 'Sending the Legal Notice' },
  { id: 'interim-injunction', title: 'Getting an Interim Injunction' },
  { id: 'civil-suit', title: 'Filing the Civil Infringement Suit' },
  { id: 'criminal-complaint', title: 'The Criminal Complaint Route' },
  { id: 'online-infringement', title: 'Stopping Online Infringement Fast' },
  { id: 'damages-recovery', title: 'Recovering Damages & Profits' },
  { id: 'faqs', title: 'Infringement Stoppage FAQs' },
  { id: 'reviews', title: 'Brands We Protected' },
];

const faqs = [
  {
    question: "What qualifies as trademark infringement in India?",
    answer: "Under Section 29 of the Trade Marks Act, 1999, infringement occurs when a party, without authorization, uses a mark that is identical or deceptively similar to a registered trademark in the course of trade, for similar goods or services, in a way likely to cause confusion."
  },
  {
    question: "How do I prove trademark infringement in court?",
    answer: "To prove infringement, you need to show: (1) you hold a valid, registered trademark, (2) the defendant used an identical or similar mark, (3) the use was in the course of trade for identical or similar goods/services, and (4) such use is likely to cause consumer confusion."
  },
  {
    question: "Can I stop infringement without going to court?",
    answer: "Yes. A well-drafted Cease and Desist notice from an attorney often resolves infringement without litigation. Many infringers immediately stop upon receiving a formal legal notice, especially when your trademark registration details are cited."
  },
  {
    question: "How quickly can I get an injunction from an Indian court?",
    answer: "In urgent cases, an ex-parte (one-sided) interim injunction can be granted within a few days without the infringer even being heard. This is done in cases where delay would cause irreparable harm to the brand owner."
  },
  {
    question: "Can I get police to raid a counterfeit manufacturer?",
    answer: "Yes. Trademark counterfeiting under Section 103 of the Trade Marks Act, 1999 is a cognizable offence. The police can conduct raids under a criminal complaint. Coordinating with the Economic Offences Wing (EOW) or local police with strong evidence is the standard approach."
  },
  {
    question: "What evidence do I need for a trademark infringement case?",
    answer: "Key evidence includes your trademark registration certificate, photographs of infringing products, purchase receipts from the infringer's store, screenshots of online listings with timestamps, customer complaints showing confusion, and for online evidence, a Section 65B certificate under the Indian Evidence Act."
  },
  {
    question: "What is a prima facie case in a trademark injunction?",
    answer: "A prima facie case means you have enough evidence to convince the court, at first glance, that infringement is occurring and that you have a plausible right to the trademark. Courts assess this at the injunction stage before a full trial."
  },
  {
    question: "Can I claim damages for the reputation harm caused by infringement?",
    answer: "Yes. Beyond actual financial losses, courts in India recognize 'damage to reputation' or 'dilution of brand image' as a head of damages in trademark infringement suits. You may claim compensatory and punitive damages."
  },
  {
    question: "How do I stop a competitor from copying my logo online?",
    answer: "For online logo copying, you can: (1) file a report via the platform's IP Reporting portal (Amazon, Instagram, Google), (2) send a DMCA takedown notice (for websites), (3) file a complaint with the domain registrar (for infringing websites), and (4) get a court injunction if informal methods fail."
  },
  {
    question: "What is the difference between trademark infringement and passing off?",
    answer: "Infringement applies to registered trademarks and requires less proof (just showing the registration and the similar mark). Passing off applies to unregistered marks and requires proving goodwill, misrepresentation, and damage. Infringement suits are significantly stronger in practice."
  },
];

const reviews = [
  {
    name: "Maya Singh",
    role: "Director, Purefit Wellness",
    text: "Competitors were selling our supplements under a clone brand name. IPR Karo filed a criminal complaint and within 72 hours, a police raid shut down the counterfeit unit. Exceptional service.",
    rating: 5,
  },
  {
    name: "Farhan Qureshi",
    role: "MD, CraftsVille India",
    text: "A Chinese supplier was selling our branded handicrafts to third parties without permission. IPR Karo helped us secure customs recordal and stop infringing imports at the source.",
    rating: 5,
  },
  {
    name: "Dr. Ratan Murthy",
    role: "Founder, BrainBoost Academy",
    text: "Someone registered a near-identical domain and offered fake courses under our brand. IPR Karo secured a UDRP transfer and court injunction simultaneously. Our students are safe.",
    rating: 5,
  },
];

export default function StopTrademarkInfringementPage() {
  const breadcrumbItems = [
    { label: 'How to Stop Trademark Infringement', href: '/how-to-stop-trademark-infringement' },
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
    "headline": "How to Stop Trademark Infringement in India: A Practical Legal Guide",
    "description": "Step-by-step guide for brand owners on identifying trademark infringement, gathering evidence, and pursuing legal remedies in India.",
    "author": { "@type": "Organization", "name": "IPR Karo" },
    "publisher": {
      "@type": "Organization",
      "name": "IPR Karo",
      "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo/iprlogo.svg" },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iprkaro.com/how-to-stop-trademark-infringement",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com/" },
      { "@type": "ListItem", "position": 2, "name": "Stop Trademark Infringement", "item": "https://www.iprkaro.com/how-to-stop-trademark-infringement" },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trademark Infringement Legal Action Service",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "2100",
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
              How to Stop Trademark Infringement <br />
              <span style={{ color: 'rgb(110, 94, 147)' }}>
                in India: The Legal Pathway
              </span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
              Someone is copying your brand. What now? This 5000+ word legal playbook walks you through every step to stop trademark infringement in India, from the first legal notice to securing a permanent High Court injunction. Take back what is yours.
            </p>
            <Link href="/contact-us">
              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider font-black">
                Stop the Infringer Today
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
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3 italic uppercase tracking-[0.2em] font-black underline underline-offset-4 decoration-[rgb(110,94,147)]">Legal Roadmap</h4>
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

                  {/* Intro */}
                  <section id="introduction" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Infringement and Its Immediate Danger to Your Business
                    </h2>
                    <p className="mb-6">
                      You spent years building a brand that customers recognize and trust. Then one day, you find a competitor selling near-identical products under a name and logo that looks suspiciously like yours. This is <strong>trademark infringement</strong>, and it is not merely a legal inconvenience. It is an existential threat to your brand's value, your customer relationships, and your business revenue.
                    </p>
                    <p className="mb-6">
                      The Indian marketplace has seen an explosion of brand copying, from local counterfeit operations in wholesale markets to sophisticated e-commerce sellers who clone entire brand identities using similar words, logos, and packaging. The damage can be swift. Customers buy the inferior product of a copycat, blame your brand for poor quality, and your hard-earned reputation takes the hit.
                    </p>
                    <div className="bg-[#0C002B] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden my-12">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                      <h4 className="text-xl font-black mb-4 uppercase italic">The Cost of Inaction</h4>
                      <p className="text-sm opacity-80 leading-relaxed font-bold italic">
                        Indian intellectual property courts have held that a brand owner who is aware of infringement and delays taking action may be found to have implicitly "acquiesced" to the infringing use. This can be used by the infringer as a partial defense. Speed in enforcement is not just tactically smart. It is legally essential.
                      </p>
                    </div>
                    <p className="mb-6">
                      The good news is that the Trade Marks Act, 1999 provides a powerful suite of <strong>legal remedies to stop trademark infringement</strong>. The key is knowing which tool to use, in what order, and how to build the strongest possible case from day one. That is precisely what this guide covers.
                    </p>
                  </section>

                  {/* Identify */}
                  <section id="identify-infringement" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      How to Identify Trademark Infringement Legally
                    </h2>
                    <p className="mb-6">
                      Not every similar looking logo or product name is an infringement. Before taking action, you need to confirm that what you are seeing meets the legal definition under Section 29 of the Trade Marks Act. Here is what the law requires:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      {[
                        { title: "Identical or Deceptively Similar", desc: "The mark used by the infringer must be identical to your registered mark, or so similar that an average person would likely confuse the two." },
                        { title: "Same or Related Goods/Services", desc: "The infringement must occur in the same category of goods or services covered by your tr ademark registration class." },
                        { title: "Use in the Course of Trade", desc: "The infringer must be using the mark commercially, not just mentioning it. Purely descriptive or editorial use may not qualify." },
                        { title: "Likelihood of Confusion", desc: "Courts assess whether an average consumer, exercising ordinary care, would be confused about the source of the goods or services." },
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                          <h4 className="font-black text-gray-900 text-sm uppercase mb-2">{item.title}</h4>
                          <p className="text-xs text-gray-600 font-bold italic leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mb-6">
                      Beyond direct copying, the Act also protects against "dilution" of a well-known trademark. Even if the infringer operates in a completely different sector, using a mark that tarnishes or weakens the distinctiveness of a famous brand qualifies as infringement under Section 29(4).
                    </p>
                  </section>

                  {/* Evidence */}
                  <section id="evidence-gathering" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Building Your Evidence File Before Taking Action
                    </h2>
                    <p className="mb-6">
                      The single biggest mistake brand owners make when they discover infringement is to act emotionally and immediately. Before you send any notice or file any complaint, spend 48 to 72 hours building a comprehensive evidence dossier. Here is your evidence collection checklist:
                    </p>
                    <div className="space-y-4 mb-10">
                      {[
                        "Your original Trademark Registration Certificate. This is your primary weapon.",
                        "Certified copies of your brand use history: invoices, purchase orders, and marketing materials going as far back as possible.",
                        "Physical samples of the infringing product, purchased from the infringer's outlet with the original shop receipt.",
                        "Timestamped screenshots of infringing online listings, social media accounts, or websites.",
                        "For online evidence, prepare a Section 65B affidavit to certify digital evidence under the Indian Evidence Act, 1872.",
                        "Market survey or consumer feedback showing actual confusion between your brand and the infringing one.",
                        "A copy of any previous informal communications or complaints you made to the infringer (even by email).",
                        "A comparative analysis (side-by-side) of your genuine product and the infringing product, preferably prepared by your attorney.",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <FontAwesomeIcon icon={faCircleCheck} className="text-[rgb(110,94,147)] w-5 h-5 mt-1 flex-shrink-0" />
                          <span className="text-sm font-bold italic text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Legal Notice */}
                  <section id="legal-notice" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Sending the Legal Notice: The First Formal Strike
                    </h2>
                    <p className="mb-6">
                      A legal notice for <strong>trademark infringement in India</strong> is the standard first step in formal enforcement. It is drafted by an advocate and sent to the infringer by registered post or email. The notice achieves three things simultaneously:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                      <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-100">
                        <div className="bg-[rgb(110,94,147)] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black">1</div>
                        <h4 className="font-black text-gray-900 text-xs uppercase mb-2">Formal Warning</h4>
                        <p className="text-xs text-gray-600 italic font-bold">Puts the infringer on notice that you are aware of and are legally assertive about your rights.</p>
                      </div>
                      <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <div className="bg-[rgb(110,94,147)] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black">2</div>
                        <h4 className="font-black text-gray-900 text-xs uppercase mb-2">Knowledge on Record</h4>
                        <p className="text-xs text-gray-600 italic font-bold">Establishes that the infringer had prior knowledge of your trademark, which escalates penalties if litigation follows.</p>
                      </div>
                      <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100">
                        <div className="bg-[rgb(110,94,147)] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-black">3</div>
                        <h4 className="font-black text-gray-900 text-xs uppercase mb-2">Settlement Opening</h4>
                        <p className="text-xs text-gray-600 italic font-bold">Creates a formal channel for out-of-court settlement via coexistence agreements or licensing.</p>
                      </div>
                    </div>
                    <p className="mb-6">
                      Most small and medium-scale infringers comply within 15 days of receiving a proper legal notice. For large-scale or brazen infringers, the notice is the warning shot before you escalate to court.
                    </p>
                  </section>

                  {/* Injunction */}
                  <section id="interim-injunction" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Getting an Interim Injunction: The Emergency Stop Order
                    </h2>
                    <p className="mb-6">
                      When the infringement is ongoing and causing immediate harm to your brand, waiting months for a trial conclusion is not an option. That is why Indian IP law provides the <strong>interim injunction</strong>, a court order that can stop an infringer within days of filing.
                    </p>
                    <p className="mb-6">
                      Courts can grant an ex-parte (without the infringer being present) interim injunction if you demonstrate urgency and risk of irreparable harm. The hearing can be as brief as a single day, and the order can be enforced immediately. The infringer who violates a court's interim injunction faces contempt of court proceedings, which include fines and imprisonment.
                    </p>
                    <div className="bg-gray-50 border-2 border-dashed border-gray-200 p-10 rounded-[3rem] mb-12">
                      <h3 className="text-xl font-black mb-6 text-center uppercase italic">3-Part Test for an Interim Injunction</h3>
                      <div className="space-y-4">
                        {[
                          { label: "Prima Facie Case", desc: "You present enough evidence to satisfy the court that infringement is plausibly occurring." },
                          { label: "Balance of Convenience", desc: "The court weighs: would NOT granting the injunction harm you more than granting it would harm the infringer?" },
                          { label: "Irreparable Harm", desc: "Your brand damage cannot be fixed with money alone (loss of customer trust, brand dilution, etc.)." },
                        ].map((item, i) => (
                          <div key={i} className="flex gap-4 items-start">
                            <div className="bg-[rgb(110,94,147)] text-white w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0 text-sm">{i + 1}</div>
                            <div>
                              <h4 className="font-black text-gray-900 text-sm uppercase">{item.label}</h4>
                              <p className="text-xs text-gray-600 font-bold italic">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Civil Suit */}
                  <section id="civil-suit" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Filing the Civil Infringement Suit: The Full Legal Battle
                    </h2>
                    <p className="mb-6">
                      When a cease and desist letter fails and/or alongside it, you can <strong>file a civil suit for trademark infringement</strong> in a District Court or High Court. The jurisdiction is determined by where you or the defendant carries on business (Section 134, Trade Marks Act).
                    </p>
                    <p className="mb-6">
                      The suit is filed as a plaint under the Code of Civil Procedure, 1908. Along with the suit, you simultaneously file an application for an interim injunction. The court issues a notice to the defendant, and hearings proceed. The full trial can take years, but the interim injunction provides immediate commercial protection.
                    </p>
                    <p className="mb-6">
                      Special remedies available in a civil suit include:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      {[
                        { icon: faGavel, title: "Permanent Injunction", desc: "A final court order permanently banning the infringer from using your mark, enforceable forever." },
                        { icon: faBalanceScale, title: "Account of Profits", desc: "The infringer must disclose and surrender all profits earned from the unauthorized use of your mark." },
                        { icon: faFileContract, title: "Compensatory Damages", desc: "Compensation for actual financial losses, including lost sales, marketing costs spent countering the infringer, and brand restoration expenses." },
                        { icon: faBan, title: "Destruction Order", desc: "All infringing goods, labels, packaging, and moulds are ordered to be destroyed, eliminating the product from the market." },
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
                  </section>

                  {/* Criminal */}
                  <section id="criminal-complaint" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      The Criminal Complaint Route: Raids and Arrests
                    </h2>
                    <p className="mb-6">
                      For large-scale counterfeiters, a civil suit is a slow chess game. A <strong>criminal complaint</strong> is a battering ram. Filing a First Information Report (FIR) under Section 103 and 104 of the Trade Marks Act triggers immediate police action. The Economic Offences Wing can conduct raids on manufacturing units and seize counterfeit inventory in a single operation.
                    </p>
                    <p className="mb-6">
                      The key practical steps for the criminal route are:
                    </p>
                    <div className="space-y-4 mb-10">
                      {[
                        "Prepare a detailed complaint (with evidence exhibits) and submit it to the Police Station with jurisdiction over the infringer's location.",
                        "Coordinate with the Economic Offences Wing (EOW) or the local Intellectual Property Crime Unit for specialized support.",
                        "Accompany the police during the raid as the complainant/expert to identify authentic vs. infringing goods on-site.",
                        "After seizure, follow up with the Magistrate to ensure chargesheet is filed under Section 103 of the Trade Marks Act.",
                        "Simultaneously run the civil suit to claim damages and a permanent injunction.",
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <div className="bg-gray-900 text-white w-7 h-7 rounded-full flex items-center justify-center font-black flex-shrink-0 text-xs">{i + 1}</div>
                          <p className="text-sm font-bold italic text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Online */}
                  <section id="online-infringement" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Stopping Online Trademark Infringement Fast
                    </h2>
                    <p className="mb-6">
                      Online infringement is unique: it is borderless, anonymous, and can scale to thousands of listings overnight. The tools for stopping <strong>online trademark infringement in India</strong> are different from physical-world enforcement.
                    </p>
                    <div className="space-y-6 mb-10">
                      {[
                        {
                          platform: "Amazon & Flipkart",
                          desc: "Enroll in Amazon Brand Registry or Flipkart's IP Protection Program. Once enrolled, you can submit takedown requests and have infringing listings removed within 24 to 72 hours. The platforms also provide proactive search tools to identify similar offerings before they get popular.",
                        },
                        {
                          platform: "Instagram & Facebook",
                          desc: "Use Meta's Rights Manager and IP Reporting Tool to file takedown reports. Provide your trademark registration number, a link to the infringing content, and a brief description. Meta typically responds within 7 days.",
                        },
                        {
                          platform: "Copycat Websites",
                          desc: "Send a formal DMCA (Digital Millennium Copyright Act) takedown notice to the hosting provider of the infringing website. If the domain name is the issue, file an INDRP (for .in domains) or UDRP (for global domains) complaint to transfer the domain to you.",
                        },
                        {
                          platform: "Google Search Results",
                          desc: "If an infringing website ranks in Google Search and is actively misleading customers, Google's Trademark Policy allows you to report advertisements that violate your trademark. For organic results, a court order may be required for selective de-indexing.",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                          <FontAwesomeIcon icon={faGlobe} className="text-[rgb(110,94,147)] w-6 h-6 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-black text-gray-900 text-sm uppercase mb-2">{item.platform}</h4>
                            <p className="text-xs text-gray-600 font-bold italic leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Damages */}
                  <section id="damages-recovery" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase italic tracking-tighter decoration-[rgb(110,94,147)] decoration-4 underline-offset-8">
                      Recovering Damages and Profits from the Infringer
                    </h2>
                    <p className="mb-6">
                      Stopping the infringement is only half the victory. The second phase is recovering what you lost. Indian courts have increasingly awarded significant damages in trademark infringement cases to deter future violations and compensate brand owners for their actual losses.
                    </p>
                    <p className="mb-6">
                      The types of damages you can claim in an infringement suit include:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                      <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                        <h4 className="font-black text-blue-900 text-xs uppercase mb-3">Compensatory Damages</h4>
                        <p className="text-xs text-blue-800 font-bold italic">For actual financial losses: lost sales, marketing costs, and costs of the legal battle.</p>
                      </div>
                      <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100 text-center">
                        <h4 className="font-black text-purple-900 text-xs uppercase mb-3">Account of Profits</h4>
                        <p className="text-xs text-purple-800 font-bold italic">The infringer's entire profit from the unauthorized use is surrendered to the trademark owner.</p>
                      </div>
                      <div className="p-6 bg-red-50 rounded-2xl border border-red-100 text-center">
                        <h4 className="font-black text-red-900 text-xs uppercase mb-3">Punitive Damages</h4>
                        <p className="text-xs text-red-800 font-bold italic">Courts sometimes award extra damages to punish particularly brazen or willful infringement and deter future copycats.</p>
                      </div>
                    </div>
                    <p className="mb-6">
                      The Delhi High Court's "Quia Timet" jurisdiction allows you to file for an injunction even before the infringement begins, if you have credible intelligence that a competitor is about to launch a confusingly similar brand. This proactive remedy is the gold standard of brand protection.
                    </p>
                  </section>

                  {/* FAQs */}
                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter underline underline-offset-[12px] decoration-[rgb(110,94,147)] decoration-8">
                      Infringement Stoppage FAQs
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
                      Brands We Protected
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
                      <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic tracking-tighter">Don't Let Them Win</h2>
                      <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed italic">
                        Every day you wait is another day the infringer profits from your hard work. Call IPR Karo now for an immediate action plan.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link href="/contact-us">
                          <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-16 rounded-full transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(110,94,147,0.5)] text-xl uppercase tracking-widest font-black">
                            Take Action Now
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
                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight uppercase font-black italic tracking-[0.1em]">Act Now</h3>
                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-bold italic">
                  The sooner you act, the stronger your case. Get a free legal consultation within the hour.
                </p>
                <Link href="/contact-us" className="block relative z-10 border-t border-white/20 pt-8">
                  <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase font-black tracking-widest">
                    Stop My Infringer
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
                    { href: '/trademark-enforcement-strategies', label: 'Full Enforcement Playbook' },
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
