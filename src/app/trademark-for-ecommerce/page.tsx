import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  faCheck,
  faSearch,
  faFileContract,
  faShoppingCart,
  faGlobe,
  faShieldAlt,
  faGavel,
  faRocket,
  faLock,
  faChartLine,
  faUserShield,
  faStore,
  faLaptopCode,
  faMobileAlt,
  faCertificate,
  faSync,
  faHandshake,
  faExclamationTriangle,
  faAward,
  faPhone,
  faBolt
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark for Ecommerce | Protect Your Online Brand',
  description: 'Complete guide to trademark registration for e-commerce businesses. Secure your online store, marketplace, or D2C brand under Class 35 and 42. Expert legal filing from ₹1499.',
  keywords: [
    'trademark for ecommerce',
    'class 35 trademark registration india',
    'online brand protection',
    'amazon brand registry trademark',
    'flipkart seller trademark',
    'd2c brand trademark registration',
    'e-commerce trademark lawyer',
    'digital brand security india',
    'domain name vs trademark',
    'e-commerce legal compliance india'
  ],
  openGraph: {
    title: 'Ecommerce Brand Protection | Expert Class 35 & 42 Registration',
    description: 'Protect your digital storefront. Secure your e-commerce, marketplace, or D2C brand with India\'s premier IP legal firm.',
    url: 'https://www.iprkaro.com/trademark-for-ecommerce',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-for-ecommerce',
  },
};

const tocSections = [
  { id: 'digital-gold-rush', title: 'Digital Brand Security' },
  { id: 'class-35-decoding', title: 'Class 35 Decoded' },
  { id: 'amazon-brand-registry', title: 'Amazon Golden Ticket' },
  { id: 'domain-vs-trademark', title: 'Domain vs Trademark' },
  { id: 'd2c-brand-moats', title: 'D2C IP Moats' },
  { id: 'counterfeiting-remedies', title: 'Fighting Counterfeits' },
  { id: 'social-media-handles', title: 'Social Media Security' },
  { id: 'global-expansion-madrid', title: 'Global E-commerce IP' },
  { id: 'it-act-compliance', title: 'IT Act & E-commerce' },
  { id: 'naming-psychology', title: 'Naming Strategies' },
  { id: 'madrid-step-by-step', title: 'Global Filing Guide' },
  { id: 'mobile-app-branding', title: 'App IP (Class 9 & 42)' },
  { id: 'influencer-marketing-ip', title: 'Influencer Compliance' },
  { id: 'handling-objections-ecommerce', title: 'Registry Objections' },
  { id: 'user-dates-digital', title: 'Proving Priority' },
  { id: 'ai-impact-ecommerce', title: 'AI & E-commerce IP' },
  { id: 'privacy-data-assets', title: 'Data as IP' },
  { id: 'vienna-code-logos', title: 'Logo Visual Search' },
  { id: 'business-structure-ip', title: 'Marketplace vs D2C' },
  { id: 'trademark-watch-defensive', title: 'Watching & Defense' },
  { id: 'reviews-section', title: 'Merchant Reviews' },
  { id: 'faqs', title: 'Ecommerce FAQs' },
];

const faqs = [
  {
    question: "What is the most important trademark class for e-commerce?",
    answer: "Class 35 is the primary class as it covers retail services, advertising, and marketplace operations. However, if you develop software or an app, Class 9 and Class 42 are also essential for comprehensive protection."
  },
  {
    question: "Do I need a trademark to sell on Amazon or Flipkart?",
    answer: "While not legally mandatory to start, Amazon Brand Registry requires a registered trademark (or a pending application) to protect your listings from hijackers and access advanced marketing tools like A+ Content."
  },
  {
    question: "Can I trademark my domain name?",
    answer: "Yes, you can trademark the name used in your domain if it is used to identify your goods or services. A domain registration alone does not grant any trademark rights."
  },
  {
    question: "How long does it take to register an e-commerce trademark?",
    answer: "With IPR Karo, we file your application in 24 hours. The final certificate typically takes 6-12 months, but you can use the ™ symbol immediately after filing."
  },
  {
    question: "What is the Madrid Protocol for e-commerce?",
    answer: "It is an international system that allows Indian e-commerce brands to extend their trademark protection to 130+ countries through a single application filed from India."
  },
  {
    question: "Can I trademark a social media handle?",
    answer: "You cannot trademark a social media handle directly as a functional element, but you can trademark the brand name used in the handle. This helps in recovering the handle from squatters."
  },
  {
    question: "What is the difference between Class 35 and Class 42?",
    answer: "Class 35 covers the retail and business aspect of selling, while Class 42 covers the technical software-as-a-service (SaaS) or hosting services provided by an e-commerce platform."
  },
  {
    question: "How do I fight counterfeit products on e-commerce sites?",
    answer: "With a registered trademark, you can use the 'Notice and Takedown' mechanisms of marketplaces or obtain 'John Doe' orders from courts to stop unauthorized sellers instantly."
  },
  {
    question: "What happens if my trademark is objected to under Section 9?",
    answer: "Section 9 objections are for descriptive names (e.g., 'Best Online Shop'). We overcome this by proving 'Acquired Distinctiveness' through digital proof of massive sales and advertising."
  },
  {
    question: "Is MSME certificate useful for trademark filing?",
    answer: "Absolutely. Having an MSME/Udyam certificate entitles you to a 50% waiver on government filing fees, making the process much more affordable for startups."
  },
  {
    question: "Does my trademark protect my website layout?",
    answer: "A trademark protects the logo and name. For website layout and UI/UX, you may need to look at 'Trade Dress' protection or Copyright, depending on the uniqueness of the design."
  },
  {
    question: "Can I trademark a common word for my e-commerce brand?",
    answer: "Yes, as long as it is 'Arbitrary' (unrelated to the product, like 'Apple' for phones) or 'Suggestive'. Generic words directly describing the service are difficult to monopolize."
  },
  {
    question: "What documents are needed for an e-commerce trademark?",
    answer: "Identity proof, business registration proof (GST/Incorporation), logo image, and digital proof of your first sale or domain registration (User Affidavit)."
  },
  {
    question: "What is a Trademark Watch service?",
    answer: "It is an automated monitoring service that scans the Trademark Journal to identify any new applications that are similar to your brand, allowing you to oppose them early."
  },
  {
    question: "Can I change my e-commerce logo after registration?",
    answer: "Minor changes are allowed, but significant modifications require a new trademark filing. It is best to file for both the word mark and the logo to ensure maximum flexibility."
  }
];

const reviews = [
  {
    name: "Sahil Varma",
    role: "Founder, UrbanDrapes D2C",
    text: "IPR Karo saved our brand. We were being hijacked by three different sellers on Amazon. Within 24 hours of filing our trademark through them, we got our Brand Registry application started and the hijackers removed.",
    rating: 5
  },
  {
    name: "Sneha Kapoor",
    role: "CEO, TechMart Marketplace",
    text: "Navigating Class 35 and 42 for our multi-vendor platform was complex. The technical depth provided by their lawyers ensured we covered every aspect of our business architecture.",
    rating: 5
  },
  {
    name: "Arun Nair",
    role: "Director, GlobalBazaar Exports",
    text: "We expanding to the UK and USA. Their Madrid Protocol filing service was seamless and cost-effective. One application from India protected us in 10 different countries.",
    rating: 5
  },
  {
    name: "Meghna Reddy",
    role: "Founder, GlowSkin Beauty",
    text: "As a D2C brand, our logo is everything. They did a comprehensive visual search including the Vienna Code to ensure we weren't infringing on any global cosmetic giants.",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "Owner, FitQuest Apps",
    text: "The combination of Class 9 and Class 42 protection for our fitness e-commerce app gave us the legal moat we needed to secure venture capital funding. Extremely professional team.",
    rating: 5
  }
];

export default function TrademarkEcommercePage() {
  const breadcrumbItems = [
    { label: "Trademark for Ecommerce", href: "/trademark-for-ecommerce" },
  ];

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
        "name": "Trademark for Ecommerce",
        "item": "https://www.iprkaro.com/trademark-for-ecommerce"
      }
    ]
  };

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        })
      }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ultimate Guide to Trademark Registration for E-commerce and D2C Brands in India",
          "author": { "@type": "Organization", "name": "IPR Karo" },
          "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
          }
        })
      }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Trademark Registration for Ecommerce",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "5280"
          },
          "review": reviews.map(review => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": review.name },
            "reviewRating": { "@type": "Rating", "ratingValue": review.rating.toString() },
            "reviewBody": review.text
          }))
        })
      }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden"
          style={{ background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)' }}>
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white tracking-tight">
              Digital Domain Defense: <br />
              <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                Trademark Registration for E-commerce & D2C
              </span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
              Your digital brand is your most valuable asset. Secure your online store, marketplace, or specialized D2C brand with India\'s elite IP legal team. From Amazon Brand Registry to Global Madrid Filing.
            </p>
            <Link href="/contact-us">
              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                Secure Your Digital Brand Now
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

        {/* 3-Column Layout */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            {/* Left Column - TOC */}
            <aside className="hidden lg:block sticky top-32">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Digital Guide</h4>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* Middle Column - Main Content */}
            <main className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-24 z-20">
                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                  <TableOfContents sections={tocSections} orientation="horizontal" />
                </div>
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">
                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                  <section id="digital-gold-rush" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      The Digital Gold Rush: Why Brand Security is the Bedrock of E-commerce Success
                    </h2>
                    <p className="mb-6">
                      In the contemporary global marketplace, the shift towards e-commerce is not merely a trend; it is a fundamental transformation of how commerce is conducted. As businesses transition from brick-and-mortar setups to expansive digital storefronts, the most valuable asset they carry is not their inventory, but their brand. In a world where a customer\'s first interaction with a business is often a search query on Google or a product listing on Amazon, the brand name serves as the primary instrument of trust. Trademark registration for e-commerce is the bedrock upon which this digital trust is built.
                    </p>
                    <p className="mb-6">
                      The Indian e-commerce landscape is one of the most dynamic in the world. Driven by increasing internet penetration and a burgeoning middle class, online retail is expected to reach unprecedented heights. However, with this growth comes a significant risk of intellectual property theft. Copycats, counterfeiters, and "cyber-squatters" are constantly looking to capitalize on the hard-earned reputation of successful online brands. Without a registered trademark, an e-commerce business is essentially operating a multi-million dollar store on a foundation of sand. Every dollar spent on marketing, SEO, and social media advertising is at risk if the brand identity is not legally anchored.
                    </p>
                    <div className="bg-[rgb(110,94,147)]/10 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-[rgb(110,94,147)] italic font-semibold">
                        "In the digital era, your trademark is your deed of ownership to the internet. Without it, your brand is public property waiting to be claimed by competitors."
                      </p>
                    </div>
                    <p className="mb-6">
                      At IPR Karo, we understand that e-commerce brand protection requires a multi-faceted legal strategy. It is not just about filing a form with the Trademark Registry; it is about creating a legal fortress that protects your brand across multiple digital touchpoints. From Amazon Brand Registry to domain name disputes and social media handles, we provide the technical depth and legal expertise needed to safeguard your digital legacy.
                    </p>
                  </section>

                  <section id="class-35-decoding" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faStore} className="mr-4 text-indigo-600 w-10 h-10" /> Decoding Class 35: The Engine of E-commerce Marketplaces
                    </h2>
                    <p className="mb-6 font-medium">
                      For any business operating in the digital commerce space, understanding the Nice Classification system is critical. Specifically, Class 35 is the primary battlefield for e-commerce entities. In traditional retail, a store might be protected under various classes based on the goods it sells. However, in the e-commerce world, the service of bringing together various goods on a digital platform is what defines the business model.
                    </p>
                    <p className="mb-6">
                      Class 35 covers "Advertising; business management; business administration; office functions; retail and wholesale services." For an e-commerce marketplace, the registration under Class 35 ensures that the platform itself is protected. This prevents competitors from opening a website with a similar name that provides similar retail services. Whether you are a multi-vendor marketplace or a single-brand D2C (Direct-to-Consumer) store, Class 35 protection is non-negotiable.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-gray-50 p-8 rounded-3xl group hover:bg-[rgb(110,94,147)] hover:text-white transition-all shadow-md">
                        <h3 className="font-bold text-xl mb-4 group-hover:text-white flex items-center">
                          <FontAwesomeIcon icon={faShoppingCart} className="mr-3 w-6 h-6" /> Retail Operations
                        </h3>
                        <ul className="space-y-2 list-disc list-inside opacity-90 text-sm">
                          <li>Online Retail Storefronts</li>
                          <li>Multi-vendor Marketplaces</li>
                          <li>Aggregator Platforms</li>
                          <li>Wholesale Digital Trading</li>
                          <li>Business Management for Retail</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-3xl group hover:bg-[rgb(110,94,147)] hover:text-white transition-all shadow-md">
                        <h3 className="font-bold text-xl mb-4 group-hover:text-white flex items-center">
                          <FontAwesomeIcon icon={faLaptopCode} className="mr-3 w-6 h-6" /> Advertising & Management
                        </h3>
                        <ul className="space-y-2 list-disc list-inside opacity-90 text-sm">
                          <li>Digital Marketing Services</li>
                          <li>Search Engine Optimization</li>
                          <li>Business Administration of Apps</li>
                          <li>Sales Promotion for Others</li>
                          <li>Commercial Information Services</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mb-6">
                      However, the complexity of e-commerce often necessitates a **Multi-Class Strategy**. If your platform also includes integrated payment gateways, you might need **Class 36**. If you have developed a proprietary algorithm for personalized shopping experiences, **Class 42** (Software Services) becomes essential. IPR Karo performs a comprehensive audit of your digital business architecture to ensure that every layer of your e-commerce vertical is legally secured.
                    </p>
                  </section>

                  <section id="amazon-brand-registry" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faStar} className="mr-4 text-indigo-600 w-10 h-10" /> The Amazon Brand Registry: Why Trademark is the Golden Ticket
                    </h2>
                    <p className="mb-6">
                      In the world of e-commerce, Amazon is the undisputed giant. For millions of sellers, Amazon is their primary source of revenue. However, the platform is also a breeding ground for "listing hijackers" who sell counterfeit versions of popular products under the original brand\'s listing. This not only results in lost sales but also leads to negative reviews that can permanently damage a brand\'s reputation.
                    </p>
                    <p className="mb-6">
                      The Amazon Brand Registry is the most powerful tool available to sellers to combat this. It provides enhanced tools for brand protection, including automated counterfeit detection and the ability to report infringements directly to Amazon\'s legal team. But the "Golden Ticket" to enter the Amazon Brand Registry is a registered trademark (or a pending application in some jurisdictions).
                    </p>
                    <p className="mb-6 font-semibold text-indigo-900 border-l-4 border-indigo-600 pl-4 py-2 bg-indigo-50 rounded-r-xl">
                      Without a trademark, a seller on Amazon is essentially defenseless against hijackers. You cannot lock your listings, you cannot use A+ Content to improve your conversion rates, and you cannot access the advanced brand analytics.
                    </p>
                    <p className="mb-6">
                      At IPR Karo, we fast-track the trademark filing process, providing you with the application number in 24 hours so that you can apply for Amazon Brand Registry and secure your listings immediately. We have helped thousands of merchants reclaim their listings from shadow sellers and establish dominance in their niches.
                    </p>
                  </section>

                  <section id="domain-vs-trademark" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faGlobe} className="mr-4 text-indigo-600 w-10 h-10" /> Domain Names vs. Trademarks: Navigating the Digital Address Conflict
                    </h2>
                    <p className="mb-6">
                      One of the most common points of conflict in the e-commerce world is the intersection of domain names and trademarks. Many entrepreneurs mistakenly believe that registering a domain name (like www.yourbrand.com) gives them the legal right to use that name as a brand. This is a dangerous misconception. A domain name is merely a technical address; a trademark is a legal property right.
                    </p>
                    <p className="mb-6">
                      If you register a domain name that is identical or confusingly similar to another person\'s registered trademark, you could be guilty of "Cyber-squatting." The owner of the trademark can file a complaint under the Uniform Domain-Name Dispute-Resolution Policy (UDRP) or the .IN Dispute Resolution Policy (INDRP) to have your domain name transferred to them. Conversely, if you have a registered trademark, you can prevent others from using domain names that aim to mislead your customers or dilute your brand\'s presence.
                    </p>
                    <p className="mb-6">
                      We assist e-commerce brands in synchronizing their trademark and domain name strategies. We conduct searches not just in the Trademark Registry, but also across Global WHOIS databases to ensure that your digital address and your brand identity are in perfect alignment. If your domain name is being held hostage by a squatter, our IP litigation team provides the aggressive representation needed to recover your digital assets.
                    </p>
                  </section>

                  <section id="d2c-brand-moats" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faShieldAlt} className="mr-4 text-indigo-600 w-10 h-10" /> The Rise of D2C Brands and Intellectual Property Moats
                    </h2>
                    <p className="mb-6">
                      The Direct-to-Consumer (D2C) revolution has empowered brands to bypass traditional retail intermediaries and build direct relationships with their customers. From fashion and beauty to health and wellness, D2C brands are disrupting every category. In this model, the "Brand Experience" is the product. The unboxing experience, the website\'s visual identity (Trade Dress), and the brand\'s unique voice are all part of the intellectual property.
                    </p>
                    <p className="mb-6">
                      For a D2C brand, a trademark is more than a legal shield; it is an "IP Moat." It prevents competitors from imitating your brand\'s unique aesthetic and confusing your loyal customer base. We help D2C brands protect their non-conventional trademarks, including "Trade Dress" (the visual look and feel of the packaging or website) and "Shape Marks" (the unique design of the product itself).
                    </p>
                    <p className="mb-6">
                      Building a successful D2C brand requires significant investment in performance marketing. Every rupee spent on Instagram or Facebook ads is an investment in your brand\'s goodwill. If you do not own that brand legally via a trademark, you are essentially building a house on a rented lot. IPR Karo\'s specialized D2C IP consulting ensures that your marketing spend translates into long-term enterprise value by securing your brand\'s absolute ownership.
                    </p>
                  </section>

                  <section id="counterfeiting-remedies" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faGavel} className="mr-4 text-indigo-600 w-10 h-10" /> Counterfeiting in the Digital Age: Legal Remedies and Enforcement
                    </h2>
                    <p className="mb-6">
                      Counterfeiting is the single largest threat to the e-commerce industry. The digital landscape allows counterfeiters to operate with a level of anonymity and scale that was previously impossible. They can easily scrape your images, copy your product descriptions, and sell inferior imitations to unsuspecting customers.
                    </p>
                    <p className="mb-6">
                      The Trade Marks Act, 1999, provides robust remedies against such digital infringers. If you have a registered trademark, you can seek "John Doe" orders from the courts. These are unique injunctions that are issued against "unknown" defendants, allowing law enforcement to take down multiple infringing websites or listings simultaneously.
                    </p>
                    <p className="mb-6">
                      We provide end-to-end enforcement services for e-commerce brands. We monitor digital marketplaces, social media platforms, and search engines for any unauthorized usage of your mark. When an infringement is detected, we issue "Cease and Desist" notices and, if necessary, initiate civil or criminal proceedings to stop the theft of your brand value. In the e-commerce world, proactive enforcement is the only way to maintain the purity of your brand.
                    </p>
                  </section>

                  <section id="social-media-handles" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faUserShield} className="mr-4 text-indigo-600 w-10 h-10" /> Social Media Handles and Brand Integrity
                    </h2>
                    <p className="mb-6">
                      In the age of social commerce, a brand\'s presence on Instagram, TikTok, and Facebook is as important as its website. Social media handles (like @yourbrand) are high-value digital assets. However, many e-commerce brands find themselves in situations where a "handle-squatter" has already taken their name, even if they have no intention of using it.
                    </p>
                    <p className="mb-6">
                      While social media platforms have their own internal dispute resolution mechanisms, they almost always prioritize the holder of a registered trademark. If you can provide a trademark registration certificate, you have a much higher chance of claiming your brand\'s official handle from an unauthorized user.
                    </p>
                    <p className="mb-6">
                      We help brands secure their identity across all social media platforms. We advise on how to structure your social media presence to maximize brand protection and how to use the trademark as a lever to recover handles from squatters. Your social media presence is the face of your brand; it must be protected with the same rigor as your primary business name.
                    </p>
                  </section>

                  <section id="global-expansion-madrid" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faRocket} className="mr-4 text-indigo-600 w-10 h-10" /> Global E-commerce Expansion and the Madrid Protocol
                    </h2>
                    <p className="mb-6 text-gray-700">
                      The beauty of e-commerce is that it knows no borders. An Indian D2C brand can sell to customers in New York, London, or Dubai with ease. However, trademark rights are strictly territorial. Your Indian registration provides no protection in foreign markets. If you expand globally without securing your mark in those jurisdictions, you risk being sued for infringement in those countries or having your listings blocked by local authorities.
                    </p>
                    <p className="mb-6 text-gray-700">
                      The Madrid Protocol is the most efficient way for e-commerce brands to expand their IP protection internationally. It allows you to file one application to protect your brand in up to 130 countries. This is particularly vital for brands selling through Global Amazon stores or international shipping platforms.
                    </p>
                    <p className="mb-6 text-gray-700">
                      IPR Karo facilitates the entire Madrid Protocol filing process. We help you identify the key markets for your global expansion and ensure that your international brand portfolio is managed centrally from India. Whether you are targeting the Middle East, Europe, or the Americas, we provide the global IP expertise needed to power your international e-commerce journey.
                    </p>
                  </section>

                  <section id="it-act-compliance" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faLaptopCode} className="mr-4 text-indigo-600 w-10 h-10" /> The Intersection of E-commerce and the Information Technology Act
                    </h2>
                    <p className="mb-6">
                      E-commerce in India is governed by a complex web of laws, primarily the Information Technology Act, 2000, and the Consumer Protection (E-Commerce) Rules, 2020. These regulations place significant responsibility on e-commerce platforms (Intermediaries) to ensure that they are not facilitating IP infringement.
                    </p>
                    <p className="mb-6">
                      Under the "Safe Harbor" provisions, an e-commerce platform is generally not liable for the infringing content posted by third-party sellers, provided the platform has followed "Due Diligence" requirements. One of these requirements is having a robust "Notice and Takedown" mechanism where trademark owners can report infringements.
                    </p>
                    <p className="mb-6 font-semibold text-indigo-900 border-l-4 border-indigo-600 pl-4 py-2 bg-indigo-50 rounded-r-xl">
                      Safe harbor is a privilege, not a right. Platforms that fail to act on verified trademark infringement notices risk losing their immunity and being held liable for contributory infringement.
                    </p>
                    <p className="mb-6">
                      We help e-commerce marketplaces draft their IP policies and Terms of Service to ensure compliance with the IT Act while providing robust protection for legitimate brand owners. For sellers, we provide the legal guidance needed to navigate these platform-specific rules and ensure that their brand is protected through the platform\'s own internal compliance mechanisms.
                    </p>
                  </section>

                  <section id="naming-psychology" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">The Psychology of E-commerce Brand Names: Descriptive vs. Arbitrary Marks</h2>
                    <p className="mb-6">
                      The selection of a brand name is the first and perhaps the most critical decision in an e-commerce branding journey. In the Trademark Registry\'s eyes, not all names are created equal. Names are categorized on a spectrum of distinctiveness, ranging from "Generic" and "Descriptive" to "Suggestive," "Arbitrary," and "Fanciful" (Coined). For an e-commerce entrepreneur, understanding this spectrum is vital for ensuring a smooth registration process.
                    </p>
                    <p className="mb-6">
                      Descriptive marks, such as "Fast Delivery Shoes" or "Easy Shop Electronics," are often the first choice because they immediately tell the customer what the business does. However, these are the hardest to register. The Registry\'s logic is simple: a business should not be able to monopolize words that other businesses need to describe their own services. To register a descriptive mark, one must prove "Acquired Distinctiveness" through years of massive usage and advertising, which is a high legal bar.
                    </p>
                    <p className="mb-6 font-medium text-gray-600 italic">
                      On the other end of the spectrum are **Arbitrary** marks (like "Apple" for computers) or **Fanciful** marks (like "Exxon" or "Airtel"). These are the gold standard for trademark protection. They are inherently distinctive and receive the strongest legal protection from day one. At IPR Karo, we advise e-commerce startups on their naming strategies, helping them pivot from descriptive names to suggestive or arbitrary ones that will clear the Registry without objections.
                    </p>
                  </section>

                  <section id="madrid-step-by-step" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">The Global IP Protocol (Madrid)</h2>
                    <div className="relative space-y-12">
                      <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>
                      <div className="flex gap-8 items-start relative">
                        <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 text-center">
                          <FontAwesomeIcon icon={faCertificate} className="w-10 h-10" />
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl flex-1 hover:shadow-xl transition-shadow border border-gray-100">
                          <h3 className="text-xl font-bold mb-4 font-black">Basic Foundation</h3>
                          <p className="text-sm italic text-gray-600">The process begins with a Basic Application or registration in India. This serves as the 'Home' mark for global extensions.</p>
                        </div>
                      </div>
                      <div className="flex gap-8 items-start relative">
                        <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 text-center">
                          <FontAwesomeIcon icon={faFileContract} className="w-10 h-10" />
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl flex-1 hover:shadow-xl transition-shadow border border-gray-100">
                          <h3 className="text-xl font-bold mb-4 font-black">WIPO Transcription</h3>
                          <div className="text-sm italic text-gray-600">We file the International Application through IP India, specifying the target countries. The Indian Office verifies and forwards it to WIPO in Geneva.</div>
                        </div>
                      </div>
                      <div className="flex gap-8 items-start relative">
                        <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 text-center">
                          <FontAwesomeIcon icon={faGlobe} className="w-10 h-10" />
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl flex-1 hover:shadow-xl transition-shadow border border-gray-100">
                          <h3 className="text-xl font-bold mb-4 font-black">Global Recognition</h3>
                          <p className="text-sm italic text-gray-600">WIPO notifies respective national offices (USPTO, EUIPO, etc.). Each country performs its own check and grants protection under local law.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="mobile-app-branding" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faMobileAlt} className="mr-4 text-indigo-600 w-10 h-10" /> Mobile App Branding: Class 9 and 42 Protection
                    </h2>
                    <p className="mb-6">
                      For e-commerce giants, the mobile app is the primary touchpoint. The branding of a mobile app involves two distinct technical layers: the software itself (Class 9) and the platform/service of providing that software (Class 42).
                    </p>
                    <p className="mb-6">
                      Protecting the app icon and the app name in Class 9 prevents competitors from launching "Skin" apps or "Guide" apps that use your logo to mislead users into downloading malware or competing software. Class 42 registration ensures that the digital services provided through the app are secured against imitation.
                    </p>
                    <p className="mb-6 font-medium text-gray-700">
                      Furthermore, the **User Interface** (UI) and **User Experience** (UX) of a mobile app can sometimes reach the level of **Trade Dress**. If your app has a highly distinctive layout or a unique navigation paradigm that users associate exclusively with your brand, it can be protected. We provide integrated mobile IP consulting that ensures your app is secured from the source code to the splash screen.
                    </p>
                  </section>

                  <section id="influencer-marketing-ip" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faChartLine} className="mr-4 text-indigo-600 w-10 h-10" /> Influencer Marketing and Trademark Liabilities
                    </h2>
                    <p className="mb-6">
                      Influencer marketing has become the lifeblood of e-commerce growth. However, it also introduces significant IP risks. If an influencer uses your trademark in a way that is disparaging, or if they accidentally use a competitor\'s trademark in a "Comparison" video, the brand owner can be held liable for secondary infringement.
                    </p>
                    <p className="mb-6">
                      Furthermore, many brands fail to secure the IP rights to the content created by influencers. If an influencer takes a photo with your product and your logo, who owns the copyright to that photo? Can you use it in your paid FB ads? These questions must be addressed through robust "Influencer Agreements" that include clear trademark usage guidelines and IP assignment clauses.
                    </p>
                    <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-indigo-900 italic font-semibold">
                        "Your brand is in the hands of influencers. Without a legal anchor, their creative freedom can become your trademark liability."
                      </p>
                    </div>
                    <p className="mb-6">
                      We help e-commerce brands navigate this "Wild West" of digital marketing. We draft compliance frameworks for influencer campaigns, ensuring that your trademark is a tool for growth, not a liability. We also assist in "Brand Monitoring" on social media to ensure that influencers are respecting your intellectual property rights.
                    </p>
                  </section>

                  <section id="handling-objections-ecommerce" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Digital Defense: Overcoming Registry Objections in E-commerce</h2>
                    <p className="mb-6">
                      The Trademark Registry is particularly vigilant in Classes 35, 9, and 42 because of the high volume of applications. The two most common hurdles are **Section 9** (Absolute Grounds) and **Section 11** (Relative Grounds).
                    </p>
                    <p className="mb-6">
                      In Section 9, the examiner might argue that your e-commerce name is "Too Generic" for the retail sector. In Section 11, they might cite an existing mark in a completely different industry but in the same class. For instance, a "Tiger" brand for an e-commerce delivery app might be blocked by a "Tiger" brand for bookkeeping software, simply because both fall under Class 35. Overcoming these objections requires a technical legal touch. At IPR Karo, we use the "Principle of Specificity" to clear these hurdles.
                    </p>
                  </section>

                  <section id="user-dates-digital" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faBolt} className="mr-4 text-indigo-600 w-10 h-10" /> User Dates in E-commerce: Proving Prior Use in a Digital World
                    </h2>
                    <p className="mb-6">
                      India follows the "First to Use" principle. If you can prove that you used a brand name before someone else registered it, you may have "Common Law" rights that override their registration. In the e-commerce world, proving a "User Date" is significantly easier but requires careful organization of digital footprints.
                    </p>
                    <p className="mb-6">
                      Every digital transaction leaves a trail. Invoices, server logs, domain registration receipts, Google Search Console data, and Facebook Ad receipts are all potent evidence of brand usage. However, this evidence must be organized and presented to the Registry in a specific "User Affidavit" format. IPR Karo assists e-commerce brands in 'Mining' their digital history to establish the earliest possible user date.
                    </p>
                  </section>

                  <section id="ai-impact-ecommerce" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faLaptopCode} className="mr-4 text-indigo-600 w-10 h-10" /> The Impact of AI and Machine Learning on E-commerce IP
                    </h2>
                    <p className="mb-6 font-medium text-gray-700">
                      As Artificial Intelligence begins to assist in diagnostics, surgical planning, and patient monitoring, new intellectual properties are emerging. Technical brands for AI diagnostic tools; like 'NeuroSense AR' or 'CardioAI Diagnostics'; are becoming high-value assets. These names define the cutting edge of your medical capability.
                    </p>
                    <p className="mb-6">
                      These AI sub-brands need independent protection because they often have a different market life than the clinical service itself. We advise healthcare technology companies and hospitals developing in-house digital tools on how to brand these technical assets. This involves a convergence of medical IP and software IP. Securing these names early prevents 'Cyber-Squatting' and ensures that as your AI grows smarter, your brand grows more valuable.
                    </p>
                    <p className="mb-6">
                      In the era of Digital Health, your algorithms are as much a part of your reputation as your surgeons. Trademarking the branding of these algorithms ensures that you own the digital narrative of your medical expertise. IPR Karo provides the technical depth needed to navigate this complex intersection of technology and healthcare.
                    </p>
                  </section>

                  <section id="privacy-data-assets" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faUserShield} className="mr-4 text-indigo-600 w-10 h-10" /> Privacy Policies and IP: Protecting Data as an Asset
                    </h2>
                    <p className="mb-6">
                      In the digital economy, "Data is the new oil." However, data is only an asset if it is legally protected. For an e-commerce business, the customer list, the "Heat Maps" of user behavior, and the proprietary data processing methodologies are all intellectual properties.
                    </p>
                    <p className="mb-6">
                      While trademarks protect the brand, **Trade Secrets** protect the underlying data assets. We help e-commerce platforms draft Privacy Policies and Data Protection Agreements that go beyond just GDPR compliance. We integrate these documents with your IP strategy, ensuring that your proprietary data remains a unique competitive advantage that cannot be legally 'Scraped' or imitated by competitors.
                    </p>
                  </section>

                  <section id="vienna-code-logos" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faAward} className="mr-4 text-indigo-600 w-10 h-10" /> The Importance of "Vienna Code" for E-commerce Logos
                    </h2>
                    <p className="mb-6">
                      When you register a logo (Device Mark), the Registry assigns it a **Vienna Code** based on its visual elements (e.g., a circle, a star, a stylized letter). The search for logo similarities is conducted using these codes. Many e-commerce brands fail to realize that their logo might be visually similar to a famous brand in a completely different industry, leading to unexpected "Opposition" from large corporations.
                    </p>
                    <p className="mb-6 text-gray-600 italic">
                      We conduct specialized Vienna Code searches for all e-commerce logos. We analyze the visual geometry of your logo against existing marks to ensure that you are not accidentally stepping on the toes of a global giant.
                    </p>
                  </section>

                  <section id="business-structure-ip" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faHandshake} className="mr-4 text-indigo-600 w-10 h-10" /> Retail Services vs. Technical Services: The Class 35/42 Dilemma
                    </h2>
                    <p className="mb-6">
                      One of the most frequent mistakes in e-commerce filing is confusing Class 35 (Retail Services) with Class 42 (Software/Technical Services). If you are a platform that hosts other sellers (Marketplace), you must be in Class 35. If you are a SaaS platform that provides the 'Engine' for others to build their own stores (like Shopify), you must be in Class 42.
                    </p>
                    <p className="mb-6">
                      Filing in the wrong class is a fatal error that cannot be easily corrected. It can lead to your application being valid for the wrong service, leaving your actual business model unprotected. IPR Karo provides a structural IP audit for all e-commerce clients, ensuring that their filing strategy perfectly mirrors their revenue model and technical architecture.
                    </p>
                  </section>

                  <section id="trademark-watch-defensive" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                      <FontAwesomeIcon icon={faSync} className="mr-4 text-indigo-600 w-10 h-10" /> Trademark Watch Services: The Defensive Shield
                    </h2>
                    <p className="mb-6">
                      Registering a trademark is not the end of the journey; it is the beginning. The Trademark Registry publishes thousands of marks every week. Some of these might be dangerously similar to yours. If you do not **Oppose** these marks within 4 months, they will be registered and become a permanent threat to your brand.
                    </p>
                    <p className="mb-6 font-medium text-gray-700">
                      We provide delegated 'Trademark Watch' services for our premium e-commerce clients. Our AI-driven systems scan the Trademark Journal every Monday, identifying any new filings that could dilute your brand. We provide you with a weekly report and recommendations on whether to file an opposition, ensuring that your digital territory is never encroached upon.
                    </p>
                  </section>

                  <section id="reviews-section" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-12 text-center tracking-tighter">Merchant Voices: IPR Karo Success Stories</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                      {reviews.map((rev, i) => (
                        <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden group hover:bg-slate-50 transition-colors">
                          <div className="flex text-yellow-500 mb-6">
                            {[...Array(5)].map((_, j) => <FontAwesomeIcon key={j} icon={faStar} className="w-4 h-4 mr-1" />)}
                          </div>
                          <p className="text-gray-600 mb-8 font-medium italic">"{rev.text}"</p>
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black mr-4 shadow-lg">{rev.name[0]}</div>
                            <div>
                              <p className="font-black text-gray-900 text-sm">{rev.name}</p>
                              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{rev.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="faqs" className="scroll-mt-32 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-[0.3em] underline underline-offset-8 decoration-gray-200">The Intelligence Hub: Ecommerce FAQs</h2>
                    <div className="space-y-6">
                      {faqs.map((f, i) => (
                        <div key={i} className="group border-b border-gray-100 pb-8 last:border-0 p-4 transition-all rounded-3xl hover:bg-gray-50">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mr-4 font-black">Q</div>
                            {f.question}
                          </h3>
                          <p className="text-gray-600 pl-14 leading-relaxed font-medium">{f.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Final CTA in Middle Container */}
                  <section className="bg-indigo-950 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                    <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at center, #6E5E93 0%, transparent 70%)' }}></div>
                    <div className="relative z-10">
                      <h2 className="text-4xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">Own Your Digital Future.</h2>
                      <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                        Your e-commerce reputation is built on trust. Don\'t let it be diluted by digital copycats. Secure your legacy with India\'s most technical IP legal team.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link href="/contact-us">
                          <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(120,104,157)] text-white font-black py-6 px-20 rounded-full transition-all transform hover:scale-110 shadow-2xl text-xl uppercase tracking-widest">Connect to Digital Safety</button>
                        </Link>
                        <a href="tel:+919289707648" className="flex items-center justify-center font-bold text-2xl hover:text-[rgb(110,94,147)] transition-colors">
                          <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4" /> +91-9289707648
                        </a>
                      </div>
                    </div>
                  </section>
                </article>
              </div>
            </main>

            {/* Right Column - Sidebar Widgets (Sticky) */}
            <aside className="hidden lg:block space-y-8 sticky top-32">
              <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-gray-800 text-white group">
                <h3 className="text-2xl font-black mb-6 leading-tight">Brand Vitality Scan</h3>
                <p className="text-sm opacity-60 mb-10 leading-relaxed font-medium">Check your e-commerce or D2C brand name across Class 35 databases in 1 business day. Prevent rejection before you launch.</p>
                <Link href="/contact-us">
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl active:scale-95 text-xs uppercase tracking-[0.2em]">Start Free Clearance</button>
                </Link>
              </div>

              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-600 opacity-5 rounded-bl-full"></div>
                <h3 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.4em]">Digital Verticals</h3>
                <ul className="space-y-6">
                  {['D2C Fashion & Apparel', 'Tech & Gadgets', 'Health & Wellness', 'FMCG & Groceries', 'Handmade & Boutique'].map((item, idx) => (
                    <li key={idx} className="group">
                      <Link href="#" className="flex items-center text-gray-500 group-hover:text-indigo-600 transition-all font-bold">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-indigo-600 group-hover:scale-150 transition-all"></div>
                        <span>{item}</span>
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
