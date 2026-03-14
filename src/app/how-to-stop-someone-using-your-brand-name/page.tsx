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
  faShieldAlt, 
  faBalanceScale, 
  faPhone,
  faStar,
  faHandPaper,
  faUserShield,
  faBriefcase,
  faScaleBalanced,
  faBuildingColumns
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'How to Stop Someone Using Your Brand Name in India | Legal Guide',
  description: 'Proactive legal strategies to stop trademark infringement in India. Learn about cease and desist notices, civil suits, criminal penalties, and brand protection under Trademarks Act 1999.',
  keywords: [
    'stop someone using my brand name',
    'trademark infringement india',
    'legal notice for brand misuse',
    'how to protect brand name',
    'cease and desist notice india',
    'trademark lawsuit india',
    'brand name theft legal action',
    'intellectual property protection',
    'section 29 trademarks act',
    'passing off action india'
  ],
  openGraph: {
    title: 'Definitive Guide: Stopping Brand Name Misuse in India',
    description: 'Expert legal roadmap to combat trademark infringement. Master the art of brand protection with cease and desist notices and litigation strategies.',
    url: 'https://www.iprkaro.com/how-to-stop-someone-using-your-brand-name',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/how-to-stop-someone-using-your-brand-name',
  },
};

const tocSections = [
  { id: 'legal-framework-infringement', title: 'Legal Framework' },
  { id: 'identifying-infringement', title: 'Spotting Misuse' },
  { id: 'gathering-legal-evidence', title: 'Evidence Gathering' },
  { id: 'cease-and-desist-notice', title: 'Cease & Desist' },
  { id: 'jurisdiction-advantage-section134', title: 'Jurisdiction Advantage' },
  { id: 'well-known-trademarks-doctrine', title: 'Well-Known Marks' },
  { id: 'transborder-reputation-doctrine', title: 'Trans-border Reputation' },
  { id: 'civil-litigation-remedies', title: 'Civil Suits' },
  { id: 'criminal-action-provisions', title: 'Criminal Action' },
  { id: 'administrative-remedies', title: 'TMR Remedies' },
  { id: 'online-brand-protection', title: 'Online Protection' },
  { id: 'border-enforcement-customs', title: 'Customs Actions' },
  { id: 'arbitration-vs-litigation', title: 'Strategy Choice' },
  { id: 'case-studies-india', title: 'Case Studies' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "What is the very first step to take if I find someone using my brand name?",
    answer: "The immediate first step is to gather evidence without alerting the infringer. Take high quality screenshots of their website, social media, and products. If possible, make a test purchase to obtain an invoice. Once evidence is secured, consult a trademark attorney to send a formal Cease and Desist notice."
  },
  {
    question: "Can I stop someone if my trademark is not yet registered?",
    answer: "Yes. Even if your trademark is unregistered, you can take action under the common law remedy of 'Passing Off'. You will need to prove that your brand has significant goodwill and reputation, and that the unauthorized use is causing consumer confusion and damage to your business."
  },
  {
    question: "How long does it take for a court to grant an injunction in India?",
    answer: "In urgent cases of blatant infringement, a District Court or High Court may grant an 'ex-parte ad-interim injunction' within a few days of filing the suit. This order temporarily stops the infringer from using the mark until the next hearing."
  },
  {
    question: "Is sending a legal notice mandatory before filing a court case?",
    answer: "While not strictly mandatory under the Trademarks Act, sending a Cease and Desist notice is highly recommended. It demonstrates your bona fide intent and often resolves the issue quickly and cost effectively without the need for prolonged litigation."
  },
  {
    question: "What are the criminal penalties for trademark infringement?",
    answer: "Sections 103 and 104 of the Trademarks Act, 1999, provide for imprisonment of 6 months to 3 years and a fine of Rs. 50,000 to Rs. 2,00,000 for falsifying or falsely applying a trademark."
  },
  {
    question: "Can the police conduct raids without a court order?",
    answer: "Trademark infringement is a cognizable offense in certain scenarios. A police officer of the rank of Deputy Superintendent or above can investigate and conduct raids if they have reason to believe that falsification is occurring, though having a court order (Anton Piller Order) is more common for civil raids."
  },
  {
    question: "Can I stop someone from using a similar domain name?",
    answer: "Yes. Domain names are treated similarly to trademarks in India. You can file a complaint under the INDRP (for .in domains) or UDRP (for .com domains) to seek the transfer of the infringing domain name."
  },
  {
    question: "What if the infringer is located in a different city or state?",
    answer: "Under Section 134 of the Trademarks Act, you can file a suit in a court where you (the plaintiff) reside or carry on business, regardless of where the infringer is located. This is a significant advantage for trademark owners."
  },
  {
    question: "How much compensation can I claim as damages?",
    answer: "Courts can award 'compensatory damages' based on your lost profits or 'punitive damages' aimed at punishing the infringer for intentional misconduct. In recent years, Indian courts have awarded substantial damages in high profile cases."
  },
  {
    question: "Does having a company name registration protect me from trademark infringement?",
    answer: "No. Registration under the Companies Act or MSME does not grant you proprietary rights to the brand name for commercial use. Trademark registration is the only way to gain exclusive rights to a name or logo."
  }
];

const reviews = [
  {
    name: "Vikram A.",
    role: "CEO, TechNova Solutions",
    text: "Someone was selling fake software licenses using our name on LinkedIn. IPR Karo helped us send a strong notice and get the profile pulled down within 48 hours.",
    rating: 5
  },
  {
    name: "Sanjana K.",
    role: "Founder, Luxe Decor",
    text: "We discovered a copycat in another state. The legal strategy provided was excellent, and we secured a permanent injunction in the High Court.",
    rating: 5
  },
  {
    name: "Karan P.",
    role: "Director, FreshFast Foods",
    text: "The expertise in both civil and criminal trademark law is what sets this team apart. They protected our brand when we needed it most.",
    rating: 5
  }
];

export default function StopBrandMisusePage() {
  const breadcrumbItems = [
    { label: "Stop Brand Misuse", href: "/how-to-stop-someone-using-your-brand-name" },
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
    "headline": "How to Stop Someone from Using Your Brand Name: The Complete Legal Roadmap",
    "description": "Exhaustive legal guide on combating trademark infringement in India. Covers legal notices, court injunctions, and criminal actions.",
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
        "name": "Stop Brand Misuse",
        "item": "https://www.iprkaro.com/how-to-stop-someone-using-your-brand-name"
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
        "name": "Brand Protection Legal Services",
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
               Stop Unauthorized Use of Your Brand: <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Definitive Legal Shield for Your Identity
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               Discover the authoritative steps to combat trademark infringement and protect your business reputation. Don't let copycats dilute your hard-earned brand value. Take decisive legal action today with India's premier IP law specialists.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                 Get Legal Help Now
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
            <aside className="hidden lg:block sticky top-32 h-[calc(100vh-100px)] overflow-y-auto">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Content</h4>
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
                  
                  <section id="legal-framework-infringement" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      The Battle for Brand Sovereignty: Understanding Indian Trademark Law
                    </h2>
                    <p className="mb-6">
                      Every legacy business starts with a name. Whether it's a neighborhood bakery or a multinational software firm, your brand name represents the culmination of hours of labor, strategic marketing, and the consistent delivery of quality. In the eyes of the consumer, your brand name is not just a word; it is a promise. However, in India's rapid market expansion, this promise is constantly under threat from unauthorized users, copycats, and counterfeiters looking to capitalize on your reputation.
                    </p>
                    <p className="mb-6">
                      Stopping someone from using your brand name is not just a matter of ego; it is a critical business survival strategy. When a competitor uses a deceptively similar name, they dilute your brand equity, divert your potential revenue, and most damagingly, can tarnish your reputation by providing sub-par products or services under your identity. This is why the <strong>Trademarks Act, 1999</strong>, provides robust mechanisms for brand owners to reclaim their sovereignty.
                    </p>
                    <p className="mb-6">
                      Legally, the protection of a brand name in India follows two distinct paths: <strong>Infringement</strong> and <strong>Passing Off</strong>. Infringement is a statutory remedy available to owners of registered trademarks. Under Section 29 of the Act, if someone uses a mark that is identical or deceptively similar to your registered trademark for identical or similar goods, it constitutes a clear violation of your rights. On the other hand, Passing Off is a common law remedy available for unregistered trademarks. It is based on the principle that "no man is entitled to represent his goods as being the goods of another man." While harder to prove in court, it ensures that even startups with pending registrations have a legal shield against blatant theft.
                    </p>
                    <div className="bg-red-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-red-900 italic font-medium">
                        "A brand is no longer what we tell the consumer it is - it is what consumers tell each other it is. If someone else is whispering in your name, you must stop them immediately."
                      </p>
                    </div>
                    <p className="mb-6">
                      The legal landscape for trademark enforcement has evolved significantly in 2024 and 2025. With the High Courts setting up Dedicated Intellectual Property Divisions, justice is now faster than ever. However, success in a trademark battle is determined by the precision of your initial steps. From the moment you detect misuse to the final court decree, every action must be calculated to maximize your legal leverage.
                    </p>
                  </section>

                  <section id="identifying-infringement" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Anatomy of Misuse: How to Identify Trademark Infringement
                    </h2>
                    <p className="mb-8">
                      Identification is the foundation of enforcement. Infringement rarely happens in plain sight with an exact replica. Most infringers operate in the "grey zones" of similarity, hoping to confuse the "man of average intelligence and imperfect recollection" - the legal standard used in Indian courts.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Phonetic Similarity</h3>
                        <p className="text-sm leading-relaxed">The marks may be spelled differently but sound identical. For example, 'Klear' vs 'Clear'. In India, where multi-lingual consumers rely on verbal recommendations, phonetic similarity is a primary ground for legal action.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Visual Look-alikes</h3>
                        <p className="text-sm leading-relaxed">Using the same font, color scheme, or layout despite having a slightly different name. This is known as Trade Dress infringement. It aims to trick the consumer through visual association.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faHandPaper} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Deceptive Similarity</h3>
                        <p className="text-sm leading-relaxed">Creating a mark that is "deceptively similar" as per Section 2(h) of the Act. This means the mark is so similar that it is likely to deceive or cause confusion among the public.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Dilution of Reputation</h3>
                        <p className="text-sm leading-relaxed">When a well-known brand like 'Tata' or 'Reliance' is used for unrelated goods (e.g., 'Tata Pan Masala'). This dilutes the exclusive reputation of the brand, even if there is no direct competition.</p>
                      </div>
                    </div>
                    <p className="mb-6">
                      To successfully identify infringement, you must monitor your industry ecosystem. This includes regular searches on food delivery apps, e-commerce platforms like Amazon and Flipkart, social media hashtags, and the official Trademark Journal published every Monday. At IPR Karo, we provide automated monitoring services that alert you the moment a similar mark is published for opposition.
                    </p>
                  </section>

                  <section id="gathering-legal-evidence" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Evidence Gathering: Building Your Case Before the Strike
                    </h2>
                    <p className="mb-6">
                      In trademark litigation, the burden of proof lies heavily on the plaintiff (you). Before you send even a single WhatsApp message to the infringer, you must compile a robust 'Evidence Dossier'. Infringers often pull down their websites or delete social media posts as soon as they receive a warning. Without proof of their prior usage, your case becomes much harder to win.
                    </p>
                    <div className="space-y-6">
                      <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                          <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">1</span>
                          Digital Evidence (Screenshots & Archive)
                        </h3>
                        <p className="mb-4">
                          Take full-page screenshots of the infringer's website, contact page, and product listings. Use tools like the 'Wayback Machine' to document how long they have been operating. Ensure the URL and the system date/time are visible in your captures.
                        </p>
                      </div>
                      <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                          <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">2</span>
                          Physical Evidence (Test Purchases)
                        </h3>
                        <p className="mb-4">
                          Make a "Trap Purchase". Buy their product through a third party and secure a proper tax invoice. This invoice is the single most powerful piece of evidence in court as it proves "commercial use for profit". Save the packaging, labels, and the delivery box.
                        </p>
                      </div>
                      <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                          <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">3</span>
                          Proof of Confusion
                        </h3>
                        <p className="mb-4">
                          Gather customer complaints where people accidentally bought the infringer's product thinking it was yours. Emails, social media comments like "I thought this was your branch", or even negative reviews of the infringer's service that mention your brand are gold mines for proving 'likelihood of confusion'.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="cease-and-desist-notice" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                      The Cease & Desist Strike
                    </h2>
                    <div className="relative space-y-12">
                       <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faFileContract} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">What is a Cease and Desist Notice?</h3>
                             <p className="text-base text-gray-600 mb-4">
                                A Cease and Desist (C&D) notice is a formal legal document sent by a lawyer to the infringer. It serves two purposes: first, it formally notifies them of your rights and their violation; second, it demands that they stop the misuse immediately or face litigation. It is a "pre-litigation" move that resolves 90 percent of brand disputes in India without the parties ever stepping into a courtroom.
                             </p>
                          </div>
                       </div>

                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Essential Clauses of a Strong Notice</h3>
                             <p className="text-base text-gray-600 mb-4">
                                A weak notice is easily ignored. A professional C&D notice drafted by IPR Karo includes: proof of your registration/prior use, a side-by-side comparison of the marks, an 11th hour ultimatum (usually 7-15 days), a demand for an undertaking of non-use, and a claim for damages already caused. We ensure the tone is authoritative and legally unassailable.
                             </p>
                          </div>
                       </div>

                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Tactical Delivery</h3>
                             <p className="text-base text-gray-600 mb-4">
                                We send notices via Registered Post with Acknowledgment Due (RPAD) and email simultaneously. The 'Acknowledgment' card serves as proof in court that the infringer was aware of your rights. If the infringer is an online entity, we also send "Takedown Notices" to the hosting providers and platform owners (like Amazon, Meta, or Google) as per the IT Act.
                             </p>
                          </div>
                       </div>
                    </div>
                  </section>

                  <section id="civil-litigation-remedies" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Civil Litigation: Injunctions, Damages, and Beyond
                    </h2>
                    <p className="mb-8">
                      When a legal notice is ignored, or when the infringement is so massive that it threatens your business operations, civil litigation is the only answer. Under the Commercial Courts Act, intellectual property disputes are fast-tracked for resolution.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                          Interim Injunctions
                        </h3>
                        <p className="text-gray-600 mb-4">This is the most critical relief. It's a court order to stop the infringer IMMEDIATELY before the full trial starts. If you prove a prima facie case and "irreparable loss", the court can grant this within hours of filing.</p>
                      </div>
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                          Anton Piller Orders
                        </h3>
                        <p className="text-gray-600 mb-4">Commonly known as "Civic Raids". The court appoints a Local Commissioner to enter the infringer's premises without notice, search for infringing goods, and seize them as evidence.</p>
                      </div>
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                          Compensatory & Punitive Damages
                        </h3>
                        <p className="text-gray-600 mb-4">The court can order the infringer to pay you for your lost profits. In cases of intentional, "malafide" infringement, courts also award punitive damages as a deterrent.</p>
                      </div>
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                          John Doe Orders
                        </h3>
                        <p className="text-gray-600 mb-4">If the infringers are anonymous (e.g., several rogue websites), the court can issue an order against 'Unknown Persons' to stop the infringement wherever it occurs.</p>
                      </div>
                    </div>
                  </section>

                  <section id="criminal-action-provisions" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Criminal Prosecution: The Ultimate Deterrent
                    </h2>
                    <p className="mb-6">
                      While civil law aims to compensate the owner, criminal law aims to punish the offender. In cases of large-scale counterfeiting or intentional brand theft, criminal action is often more effective than a civil suit. The Trademarks Act, 1999, provides for criminal penalties under Sections 103 and 104.
                    </p>
                    <p className="mb-6">
                      <strong>Section 103</strong> deals with 'falsifying and falsely applying trademarks'. This includes making a mark that is identical or deceptively similar with the intent to defraud. <strong>Section 104</strong> deals with the 'selling of goods to which a false trademark is applied'. These are cognizable offenses, meaning the police can investigate and arrest the accused without a warrant in certain circumstances.
                    </p>
                    <p className="mb-6">
                      The process involves filing a criminal complaint before a Magistrate or reaching out to the police authorities of the rank of Deputy Superintendent. The police, often accompanied by the trademark owner's representatives, can conduct raids, seize the entire stock of counterfeit goods, and arrest the proprietors. Criminal prosecution can lead to imprisonment for up to <strong>3 years</strong> and significant fines. At IPR Karo, we handle the complex coordination between the IP owners and law enforcement agencies to ensure a successful raid operation.
                    </p>
                  </section>

                  <section id="administrative-remedies" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Administrative Remedies: Striking at the Root in the TMR
                    </h2>
                    <p className="mb-6">
                      Sometimes, the infringer attempts to gain legal legitimacy by applying for the registration of your name. This is a classic "squatting" move. You can fight this within the administrative framework of the Trademark Registry.
                    </p>
                    <p className="mb-6">
                      <strong>1. Trademark Opposition:</strong> When a mark is published in the Trademark Journal, you have a strict 4 month window to file an Opposition (Form TM-O). This delays their registration and forces them to prove their right to the mark in a trial before the Registrar.
                    </p>
                    <p className="mb-6">
                      <strong>2. Rectification of Register:</strong> If an infringer has already managed to register a similar mark, you can file a Rectification Petition (Section 57) to have it cancelled or removed from the register. You can argue that the mark was registered without sufficient cause or that it is deceptively similar to your prior mark.
                    </p>
                    <p className="mb-6">
                      These administrative battles are often highly technical. Success depends on showcasing your 'Prior Adoption' and 'Continuous Use'. We help you present a compelling case using your oldest invoices, tax registrations, and advertisements to prove that you are the lawful owner of the brand.
                    </p>
                  </section>

                  <section id="jurisdiction-advantage-section134" className="scroll-mt-32 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                        The "Home Court" Advantage: Understanding Section 134
                    </h2>
                    <p className="mb-6">
                        One of the most powerful provisions in the Trademarks Act, 1999, which is often overlooked by business owners, is <strong>Section 134</strong>. In standard civil litigation in India, you usually have to file a case in the court where the defendant (the person you are suing) resides or where the "cause of action" (the infringement) took place. This can be a logistical nightmare if you are based in Delhi and your infringer is in a remote town in Kerala.
                    </p>
                    <p className="mb-6">
                        However, Section 134 breaks this rule in favor of the trademark owner. It allows you to file a suit for trademark infringement in a District Court or High Court within whose jurisdiction the <strong>Plaintiff (you)</strong> resides or carries on business. This means if your corporate office is in Bangalore, you can drag an infringer from anywhere in India to the Bangalore courts. This "Home Court Advantage" significantly increases the pressure on the infringer, as they now have to bear the cost of travel and hire local lawyers in your city.
                    </p>
                    <p className="mb-6">
                        This provision is specifically designed to protect the rights of brand owners from being harassed by rogue elements across the country. At IPR Karo, we leverage this provision to ensure that our clients can defend their intellectual property with maximum convenience and minimum travel overheads. It is important to note that this benefit is strictly available for <strong>Registered Trademarks</strong>. For unregistered marks (passing off), the regular rules of jurisdiction apply, which is another compelling reason to get your trademark registered immediately.
                    </p>
                  </section>

                  <section id="well-known-trademarks-doctrine" className="scroll-mt-32 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                        Power of the Elite: The Doctrine of Well-Known Trademarks
                    </h2>
                    <p className="mb-6">
                        In the hierarchy of brand protection, a <strong>"Well-Known Trademark"</strong> sits at the absolute top. Under Section 2(1)(zg) of the Trademarks Act, a well-known mark is one which has become so popular among a substantial segment of the public that the use of such a mark for any other goods or services would be taken as indicating a connection with the original brand.
                    </p>
                    <p className="mb-6">
                        The advantage of being declared "well-known" is that your protection extends <strong>across all classes</strong> of goods and services. For instance, if 'Google' is a well-known trademark, no one can start a 'Google Bakery' or 'Google Cement', even though the original company doesn't operate in those sectors. The Registrar and the Courts look at several factors to grant this status: the extent of geographical use, the duration of use, the amount of money spent on promotion, and the successful record of enforcing the mark.
                    </p>
                    <p className="mb-6">
                        Securing a "Well-Known" status is a long-term goal for growing brands. It creates an invincible barrier around your identity. We assist brands in documenting their history and market reach to apply for this status under the Trademark Rules, 2017. Once your brand is on the official "Well-Known Marks List", even the Trademark Registry will automatically block any similar applications from third parties, acting as a permanent digital gatekeeper for your brand.
                    </p>
                  </section>

                  <section id="transborder-reputation-doctrine" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Global Fame, Local Protection: Trans-border Reputation
                     </h2>
                     <p className="mb-6">
                         In the age of the internet and global travel, a brand may be famous in India even before it has sold a single unit here. This is known as <strong>"Trans-border Reputation"</strong>. The Indian courts have consistently held that if a brand has a global reputation that has spilled over into India through advertisements, news, or tourism, it is entitled to protection against local infringers.
                     </p>
                     <p className="mb-6">
                         Famous cases like <em>N.R. Dongre vs Whirlpool</em> and <em>Milmet Oftho vs Allergan</em> have established that the "first in the world" often has priority over the "first in India" if the global brand can prove that Indian consumers were already aware of their identity. This doctrine is a double edged sword. If you are a local startup, you must ensure your name doesn't infringe on a global brand's reputation. If you are an international brand entering India, we help you assert this reputation to stop local "trademark squatters" from hijacking your identity.
                     </p>
                  </section>

                  <section id="online-brand-protection" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center">
                       Total Digital Defense
                    </h2>
                    <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                       In the digital age, your brand isn't just a sign on a shop. It's a URL, a handle, and a search result. Here is how we protect your digital footprint.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                           <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                              <FontAwesomeIcon icon={faScaleBalanced} className="text-2xl" />
                           </div>
                           <h4 className="font-bold text-xl mb-4">Domain Name Retrieval</h4>
                           <p className="text-sm text-gray-600 mb-6">If someone registers yourbrand.in or yourbrand.com, we file complaints under INDRP or UDRP. We have a high success rate in getting these domains transferred back to the rightful owners.</p>
                        </div>
                        <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                           <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                              <FontAwesomeIcon icon={faShieldAlt} className="text-2xl" />
                           </div>
                           <h4 className="font-bold text-xl mb-4">Social Media Takedowns</h4>
                           <p className="text-sm opacity-70 mb-6">Fake Instagram pages or Twitter handles can destroy trust. We work with platform legal teams to get infringing profiles disabled through established IPR complaint channels.</p>
                        </div>
                    </div>
                  </section>

                  <section id="border-enforcement-customs" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Border Enforcement: Turning Customs into Your Brand Watchdogs
                     </h2>
                     <p className="mb-6">
                         If you are an Indian manufacturer facing a flood of cheap counterfeits from overseas, your battle starts at the border. Under the <strong>Intellectual Property Rights (Imported Goods) Enforcement Rules, 2007</strong>, you can record your registered trademark with the Indian Customs Department.
                     </p>
                     <p className="mb-6">
                         Once recorded, the Customs authorities gain the power to intercept and seize goods that appear to be counterfeit at the ports of entry. They notify the brand owner, who can then inspect the goods and confirm if they are fakes. The importer must then prove their legitimacy or face seizure and destruction of the goods. This is a highly efficient way to stop a massive influx of infringing products without filing a separate lawsuit for every shipment.
                     </p>
                  </section>

                  <section id="arbitration-vs-litigation" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Strategic Choice: Litigation vs Alternative Dispute Resolution
                     </h2>
                     <p className="mb-6">
                         Not every brand battle needs to end in a high-octane courtroom trial. In many business relationships, such as with former partners, distributors, or franchisees, a <strong>Trademark License Agreement</strong> or a <strong>Franchise Agreement</strong> often contains an "Arbitration Clause". Arbitration is a private method of dispute resolution where an independent arbitrator makes a binding decision.
                     </p>
                     <p className="mb-6">
                         The advantage of arbitration is its <strong>confidentiality</strong> and <strong>speed</strong>. Public litigation can sometimes damage the brand's image if the dispute details are picked up by the media. Arbitration keeps the battle behind closed doors. However, arbitration cannot grant "Injunctions against the whole world"; it only binds the parties in the contract. If your infringer is a complete stranger (third party), litigation in the Commercial Courts is the only viable path. We help you choose the right battlefield based on the nature of the infringer and your business goals.
                     </p>
                  </section>

                  <section id="case-studies-india" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Landmark Battles: Learning from the Masters
                     </h2>
                     <p className="mb-6">
                         The history of Indian trademark law is written in the courtrooms. One of the most famous cases involved <strong>Toshiba (2024)</strong>, where the Delhi High Court protected the brand against a local player using the name 'Tosiba'. The court ruled that phonetic similarity, especially for an internationally famous brand, is a direct violation, even if the goods are slightly different.
                     </p>
                     <p className="mb-6">
                         In the recent <strong>Amazon vs Beverly Hills Polo Club (2025)</strong> case, the High Court imposed a whopping $39 million penalty on the e commerce giant for failing to stop the sale of products that used a deceptively similar logo. This case sent a shockwave through the industry, proving that even intermediaries (platforms) are responsible for brand protection.
                     </p>
                     <p className="mb-6">
                         Another notable victory was for <strong>India Gate Rice (2025)</strong>, where a competitor using the name 'Bharat Gate' was restrained. The court recognized that for a commodity like rice, branding is the only differentiator, and 'Bharat' was too conceptually close to 'India', leading to consumer confusion.
                     </p>
                  </section>

                  <section id="reviews" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                        Protecting Brands Across India
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

                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                      Your Questions Answered: Trademark Infringement FAQ
                    </h2>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                             <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                             {faq.question}
                          </h3>
                          <p className="text-gray-600 pl-8 leading-relaxed">
                             {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                     <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Stop the Misuse Before It's Too Late</h2>
                        <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                          Every day an infringer uses your brand, you lose customers and reputation. Start your legal action now and safeguard your professional identity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                 Consult Strategy Now
                              </button>
                           </Link>
                           <a href="tel:+919289707648">
                              <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
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
                 <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">File Your Brand Complaint</h3>
                 <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                   Get a **Strategic Assessment Report** from our senior IP attorneys within 24 hours. Know your legal standing.
                 </p>
                 <Link href="/contact-us" className="block relative z-10">
                   <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                     Talk to Attorney
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
                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Brand Legal</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/legal-rights-of-trademark-owner-in-india" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Owner Rights</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-to-do-if-someone-copies-your-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Dealing with Copies</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Trademark Opposition</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/expedited-process-of-trademark-filing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Fast-Track Filing</span>
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
