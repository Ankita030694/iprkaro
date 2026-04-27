import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Expert Trademark Guidance | IPR Karo',
  description: 'Unparalleled trademark registration, patent services, and copyright protection in India. Get expert legal guidance, comprehensive IP management, and 24/7 support from IPR Karo.',
  keywords: [
    'expert trademark guidance',
    'trademark registration',
    'patent services',
    'copyright protection',
    'trademark consultation',
    'ipr services india',
    'trademark objection reply',
    'brand protection strategy',
    'trademark attorney india',
    'intellectual property rights'
  ],
  openGraph: {
    title: 'Expert Trademark Guidance | IPR Karo',
    description: 'Get expert guidance for trademark registration, patent services, and copyright protection. Secure your IP assets with India\'s leading attorneys.',
    url: 'https://www.iprkaro.com/comprehensive-ip-protection-features/expert-trademark-guidance',
    type: 'article',
    images: [
      {
        url: 'https://www.iprkaro.com/assets/expert-trademark-guidance-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Expert Trademark Guidance Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/comprehensive-ip-protection-features/expert-trademark-guidance',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Power of Expert Guidance' },
  { id: 'tm-registration', title: 'Trademark Registration' },
  { id: 'patent-services', title: 'Patent Services' },
  { id: 'copyright-protection', title: 'Copyright Protection' },
  { id: 'search-analysis', title: 'Search & Analysis' },
  { id: 'objection-handling', title: 'Handling Objections' },
  { id: 'global-protection', title: 'Global IP Strategy' },
  { id: 'brand-valuation', title: 'Brand Valuation' },
  { id: 'client-stories', title: 'Success Stories' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "Why do I need expert guidance for trademark registration?",
    answer: "While the process may seem straightforward, trademark registration involves complex legal classifications and strategic decisions. Expert guidance ensures you file in the correct classes, conduct a thorough search to avoid infringement, and handle any objections professionally. This reduces the risk of rejection and saves you time and money in the long run."
  },
  {
    question: "What does your patent services package include?",
    answer: "Our patent services are comprehensive. They cover everything from the initial patentability search and prior art analysis to drafting the provisional and complete specifications. We also handle the filing process, respond to examination reports, and manage the grant procedure. We ensure your invention gets the strongest possible legal protection."
  },
  {
    question: "How does copyright protection differ from trademark registration?",
    answer: "Copyright protection is for original creative works like literature, music, art, and software code, whereas trademark registration protects brand identifiers like names, logos, and slogans. We provide guidance on both to ensure a holistic defense of your intellectual property assets."
  },
  {
    question: "Can you help if my trademark application is opposed?",
    answer: "Yes, handling oppositions is one of our core strengths. If a third party opposes your mark, our attorneys will draft a robust counter statement (Form TM-O), act as your legal representative during hearings, and submit evidence to defend your rights and secure your registration."
  },
  {
    question: "How long does the trademark registration process take?",
    answer: "In India, if there are no objections or oppositions, the process typically takes about 6 to 8 months. However, if legal hurdles arise, it can take longer. Our expert guidance helps navigate these hurdles efficiently to expedite the process as much as possible."
  },
  {
    question: "Do you offer international trademark and patent services?",
    answer: "Absolutely. We facilitate international trademark registration through the Madrid Protocol and patent filing via the PCT (Patent Cooperation Treaty). We also have a network of associates in key jurisdictions like the USA, Europe, and China to handle direct filings."
  },
  {
    question: "What is a trademark watch service?",
    answer: "A trademark watch service is a monitoring tool where we keep an eye on the Trade Marks Journal for any new applications that might be similar to yours. If we find a conflicting mark, we alert you immediately so you can file an opposition before it gets registered."
  },
  {
    question: "Is it possible to revive an abandoned trademark?",
    answer: "In many cases, yes. If your trademark was abandoned due to a missed deadline, we can file a petition for restoration depending on the time elapsed. Our experts will assess your case and guide you on the best course of action to reclaim your rights."
  }
];

export default function ExpertTrademarkGuidance() {
  const breadcrumbItems = [
    { label: "Features", href: "/comprehensive-ip-protection-features" },
    { label: "Expert Trademark Guidance", href: "/comprehensive-ip-protection-features/expert-trademark-guidance" },
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
    "headline": "Expert Trademark Guidance, Patent Services & Copyright Protection India",
    "description": "Comprehensive guide to intellectual property rights in India. detailed insights on trademark registration, patent filing services, and copyright protection strategies.",
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
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Expert IP Guidance Services",
    "description": "Professional consultation for trademark registration, patents, and copyright.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "890"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Vikram Singh" },
        "reviewBody": "The guidance I received for my patent filing was exceptional. The attorneys understood the technical nuances of my invention perfectly."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Meera Patel" },
        "reviewBody": "IPR Karo made trademark registration simple. Their expert advice on classification saved us from a potential rejection."
      }
    ]
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10 text-center">
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight mt-10 text-white">
               Expert Trademark Guidance & <br/>
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Legal Support in India</span>
             </h1>
             <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
               Navigate the complexities of intellectual property with confidence. From seamless <span className="text-white font-medium">trademark registration</span> to complex <span className="text-white font-medium">patent services</span> and robust <span className="text-white font-medium">copyright protection</span>, we are your strategic legal partners.
             </h2>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-lg">
                 Consult an Expert
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-6 sticky top-25 z-10">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Expert Legal Guidance: Your First Line of Defense</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Your intellectual property is the lifeblood of your business. In India's fiercely competitive market, a unique brand name, a groundbreaking invention, or original creative content is what sets you apart. But owning an idea and legally protecting it are two very different things. Without expert legal backing, your assets are vulnerable to theft, imitation, and misuse.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     We see it every day: businesses trying to save money by filing "cheap" trademark applications, only to face rejection months later because of a simple classification error or a missed conflict. The cost of fixing these mistakes—or worse, rebranding entirely—is far higher than getting it right the first time.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     IPR Karo provides the specialized legal armor you need. We move beyond basic filing. We scrutinize your business model to build a fortress around your brand. Whether it is navigating the intricacies of the Trade Marks Registry, drafting defensible patent claims, or securing your copyright against digital piracy, our senior attorneys are your strategic partners in growth.
                  </p>
                </section>

                <section id="tm-registration" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Mastering Trademark Registration</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Trademark registration is the foundation of brand security. It grants you the exclusive right to use your brand name, logo, or slogan and empowers you to stop others from using similar marks. However, securing this registration is a multi stage legal process that requires precision.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 my-8">
                     <div className="border border-gray-100 bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Classification Strategy</h3>
                        <p className="text-gray-700 leading-relaxed">
                           One of the most common reasons for trademark refusal is filing in the wrong Class. The NICE classification system has 45 classes of goods and services. A restaurant (Class 43) is different from a food product (Class 30). Our experts analyze your business activities to ensure you cover all relevant classes, providing a waterproof protection shield.
                        </p>
                     </div>
                     <div className="border border-gray-100 bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Distinctiveness Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                           Not all names can be trademarks. Generic terms (like "Best  Shoes" for a shoe brand) or descriptive terms are often rejected under Section 9 of the Trade Marks Act. We evaluate the distinctiveness of your proposed mark. If it is weak, we advise on adding unique elements or logos to enhance its registrability.
                        </p>
                     </div>
                  </div>

                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our trademark registration service is end to end. We start with a comprehensive search, proceed to drafting and filing the application with the correct user dates and descriptions, and monitor the application status daily. If the registry raises queries, we draft legally sound replies. We essentially take the burden off your shoulders, allowing you to focus on building your business while we build your legal fortress.
                  </p>
                </section>

                <section id="patent-services" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Comprehensive Patent Services for Innovators</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If your business thrives on innovation, a trademark is not enough. You need a patent. Patents protect the functionality and technical aspects of a product or process. It is a monopoly right granted by the government for 20 years. Our patent services are designed to turn your ideas into legally enforceable assets.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                       <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgb(110,94,147)] flex items-center justify-center text-white font-bold mt-1">1</div>
                       <div className="ml-4">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">Patentability Search & Prior Art Analysis</h4>
                          <p className="text-gray-700">
                             Before spending resources on filing, you must know if your invention is truly new. We conduct deep searches across global databases (USPTO, EPO, WIPO) to identify "prior art." This analysis tells us if your invention is novel and non obvious, the two key criteria for a patent grant.
                          </p>
                       </div>
                    </div>
                    <div className="flex items-start">
                       <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgb(110,94,147)] flex items-center justify-center text-white font-bold mt-1">2</div>
                       <div className="ml-4">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">Drafting Specifications</h4>
                          <p className="text-gray-700">
                             A patent is only as strong as its claims. Our team includes technical experts and patent agents who draft the "Provisional" and "Complete" specifications. We ensure the claims are broad enough to prevent competitors from working around your patent, yet specific enough to be defensible.
                          </p>
                       </div>
                    </div>
                    <div className="flex items-start">
                       <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgb(110,94,147)] flex items-center justify-center text-white font-bold mt-1">3</div>
                       <div className="ml-4">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">Prosecution & Maintenance</h4>
                          <p className="text-gray-700">
                             Filing is just the start. The Patent Office examines every application rigorously. We handle the "Prosecution" phase, responding to First Examination Reports (FER) and attending hearings. Once granted, we also manage annuity payments to keep the patent alive.
                          </p>
                       </div>
                    </div>
                  </div>
                </section>

                <section id="copyright-protection" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Robust Copyright Protection</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the digital age, content is king, and content theft is rampant. Copyright protection secures your original literary, dramatic, musical, and artistic works. This includes software code, website content, marketing videos, architectural designs, and much more.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    While copyright legally exists from the moment of creation, registration provides prima facie evidence of ownership. This is crucial if you ever need to sue an infringer. Our experts guide you through the registration process under the Copyright Act, 1957.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 list-none">
                     <li className="bg-gray-50 p-4 rounded border-l-4 border-[rgb(110,94,147)]">
                        <strong className="block text-gray-900 mb-1">Software & Apps</strong>
                        <span className="text-gray-600 text-sm">Protecting source code and object code as literary works.</span>
                     </li>
                     <li className="bg-gray-50 p-4 rounded border-l-4 border-[rgb(110,94,147)]">
                        <strong className="block text-gray-900 mb-1">Creative Designs</strong>
                        <span className="text-gray-600 text-sm">Securing 2D artworks, logos, and packaging designs.</span>
                     </li>
                     <li className="bg-gray-50 p-4 rounded border-l-4 border-[rgb(110,94,147)]">
                        <strong className="block text-gray-900 mb-1">Cinematograph Films</strong>
                        <span className="text-gray-600 text-sm">Protecting video content, advertisements, and movies.</span>
                     </li>
                     <li className="bg-gray-50 p-4 rounded border-l-4 border-[rgb(110,94,147)]">
                        <strong className="block text-gray-900 mb-1">Literary Works</strong>
                        <span className="text-gray-600 text-sm">Books, manuals, scripts, and website text content.</span>
                     </li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                     We also draft comprehensive assignments and licensing agreements, ensuring you can monetize your copyright safely while retaining control over your core assets.
                  </p>
                </section>

                <section id="search-analysis" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Strategic Search & Clearance</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     The old adage "prevention is better than cure" applies perfectly to IP. Before you invest in branding or manufacturing, you must know if you are free to operate. A superficial search is dangerous. Our expert guidance includes deep dive clearance searches.
                  </p>
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-lg">
                       <h3 className="text-xl font-bold mb-4 text-[#8A7AB5]">The IPR Karo Deep Search</h3>
                       <p className="mb-4 text-gray-300">
                          We do not just look for identical names. We analyze:
                       </p>
                       <ul className="space-y-3">
                          <li className="flex items-center"><span className="text-[#8A7AB5] mr-2">✓</span> Phonetic Similarities (Sound-alike names)</li>
                          <li className="flex items-center"><span className="text-[#8A7AB5] mr-2">✓</span> Visual Similarities (Logo conflicts)</li>
                          <li className="flex items-center"><span className="text-[#8A7AB5] mr-2">✓</span> Conceptual Conflicts (Same meaning in different words)</li>
                          <li className="flex items-center"><span className="text-[#8A7AB5] mr-2">✓</span> Domain Name Conflicts</li>
                       </ul>
                    </div>
                </section>

                <section id="objection-handling" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Expert Handling of Objections & Oppositions</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     Receiving an objection from the Registry or an opposition from a competitor can be stressful. It does not mean your application is dead. It means you need a legal argument. This is where our expertise shines.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     For <strong>Registry Objections</strong> (Examination Reports), we draft precise legal replies citing relevant case laws and precedents. We argue on grounds of distinctive character, honest concurrent use, or prior user rights to overcome the objection.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     For <strong>Third Party Oppositions</strong>, the stakes are higher. These are quasi judicial proceedings. We manage the entire lifecycle: filing the Notice of Opposition or Counter Statement, submitting Evidence by way of Affidavit, and presenting oral arguments at the hearing. Our goal is to either negotiate a favorable settlement (like a coexistence agreement) or win the case on merits.
                  </p>
                </section>

                 <section id="global-protection" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Global IP Strategy</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                      In a connected world, your market is global. But IP rights are territorial. A trademark in India does not protect you in Dubai or New York. We help you scale your protection strategy as you scale your business.
                   </p>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                      We utilize the <strong>Madrid Protocol</strong> for trademarks and the <strong>PCT</strong> for patents. These systems allow for a unified application process for multiple countries, saving immense time and cost. For specific regions, we leverage our network of trusted foreign associates to ensure local compliance and enforcement.
                   </p>
                 </section>

                <section id="brand-valuation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">IP Valuation & Monetization</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     Your IP is an asset on your balance sheet. It has tangible value. Our experts assist in IP valuation, crucial for mergers, acquisitions, or raising investment. We also guide you on monetization strategies through licensing and franchising.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     A well drafted license agreement allows you to rent out your brand or technology to others for a royalty fee, creating a new revenue stream while maintaining ownership. We ensure these agreements are watertight, protecting your quality standards and reputation.
                  </p>
                </section>

                <section id="client-stories" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                       <div className="text-6xl text-[rgb(110,94,147)] absolute top-4 left-4 font-serif opacity-20">"</div>
                      <p className="text-gray-800 italic mb-6 relative z-10 text-lg leading-relaxed pt-4">
                        "We had a complex trademark issue where a large multinational opposed our registration. The team at IPR Karo didn't back down. They built a solid case based on our prior use in the Indian market and won the opposition. Their expert guidance was the difference between keeping our brand and losing it."
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">Rohan Malhotra</p>
                          <p className="text-sm text-gray-500">Director, IT Services Firm</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                       <div className="text-6xl text-[rgb(110,94,147)] absolute top-4 left-4 font-serif opacity-20">"</div>
                      <p className="text-gray-800 italic mb-6 relative z-10 text-lg leading-relaxed pt-4">
                        "Patent filing is a nightmare of paperwork. IPR Karo handled everything for our new mechanical device. Their patent agent sat with our engineers to understand the tech and drafted a specification that was granted with minimal objections. Truly professional service."
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">Anjali Verma</p>
                          <p className="text-sm text-gray-500">Inventor & Entrepreneur</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[rgb(110,94,147)] mr-3 mt-1">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-xl md:rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden mt-12">
                   <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">Secure Your Intellectual Property Today</h2>
                    <p className="text-base md:text-xl opacity-90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                      Don't leave your brand, inventions, and creative works vulnerable. Partner with India's top IP experts for robust protection and peace of mind.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-8 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.4)] text-lg w-full sm:w-auto">
                          Get Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+919289707648">
                         <button className="bg-transparent border-2 border-white/30 hover:bg-white hover:text-white text-white font-bold py-4 px-8 md:px-12 rounded-full transition-all text-lg w-full sm:w-auto backdrop-blur-sm">
                          Call: +91-9289707648
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
                  <h3 className="text-xl font-bold mb-3">Expert Legal Advice</h3>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    Connect with senior attorneys for personalized trademark, patent, and copyright guidance.
                  </p>
                  <Link href="/contact-us" className="block w-full">
                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md text-sm">
                      Speak to an Expert
                    </button>
                  </Link>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a href="tel:+919289707648" className="text-sm font-semibold hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                      <span className="mr-2">📞</span> +91-9289707648
                    </a>
                  </div>
                </div>

                {/* Related Features */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/comprehensive-ip-protection-features/affordable-trademark-services" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center transition-colors">
                        <span className="mr-2 text-[rgb(110,94,147)]">›</span> Affordable Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/comprehensive-ip-protection-features/ai-powered-trademark-solutions" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center transition-colors">
                        <span className="mr-2 text-[rgb(110,94,147)]">›</span> AI Powered Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/comprehensive-ip-protection-features/247-trademark-protection" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center transition-colors">
                        <span className="mr-2 text-[rgb(110,94,147)]">›</span> 24/7 Protection
                      </Link>
                    </li>
                    <li>
                      <Link href="/comprehensive-ip-protection-features/fast-trademark-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center transition-colors">
                        <span className="mr-2 text-[rgb(110,94,147)]">›</span> Fast Registration
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
