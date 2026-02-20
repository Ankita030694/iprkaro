import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
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
  faCalendarAlt,
  faHandshake,
  faExclamationTriangle,
  faSync,
  faLightbulb,
  faUserTie,
  faBuilding,
  faFileAlt,
  faHandHoldingUsd,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Registration of Trademark in India | Comprehensive Online Guide 2026',
  description: 'Master the registration of trademark process in Bharat. Get step-by-step guidance on filing, documents, fees, and legal protection. Secure your brand today with IPR Karo.',
  keywords: [
    'registration of trademark',
    'how to register trademark in india',
    'trademark registration process',
    'brand name registration',
    'logo registration india',
    'online trademark filing',
    'trademark law india',
    'ipr registration india',
    'trademark filing fees',
    'trademark search report'
  ],
  openGraph: {
    title: 'Complete Guide to Registration of Trademark in Bharat',
    description: 'Learn everything about the registration of trademark in India. From initial search to final certificate, we cover it all.',
    url: 'https://www.iprkaro.com/registration-of-trademark',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/registration-of-trademark',
  },
};

const tocSections = [
  { id: 'introduction', title: 'What is Registration of Trademark?' },
  { id: 'importance', title: 'Why Trademark Registration Matters' },
  { id: 'types-of-marks', title: 'Types of Trademarks You Can Register' },
  { id: 'eligibility', title: 'Who is Eligible for Registration?' },
  { id: 'classification', title: 'The Nice Classification (Classes 1-45)' },
  { id: 'pre-filing-search', title: 'Importance of a Pre-Filing Search' },
  { id: 'the-process', title: 'The 7-Step Registration Process' },
  { id: 'documents', title: 'Documents Required Checklist' },
  { id: 'fees-breakdown', title: 'Official Fees and Costs 2026' },
  { id: 'objections-oppositions', title: 'Handling Objections and Oppositions' },
  { id: 'post-registration', title: 'Post-Registration Maintenance' },
  { id: 'trademark-infringement', title: 'What is Trademark Infringement?' },
  { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
  { id: 'global-protection', title: 'Madrid Protocol: Global Registration' },
  { id: 'why-iprkaro', title: 'Why Choose IPR Karo for Registration?' },
  { id: 'faqs', title: 'Commonly Asked Questions' },
  { id: 'reviews', title: 'Client Reviews' },
  { id: 'conclusion', title: 'Closing Thoughts' },
];

const faqs = [
  {
    question: "How long does the registration of trademark take in India?",
    answer: "The entire lifecycle usually spans 6 to 12 months. This includes the examination phase, publication in the journal, and the mandatory 4-month opposition window. However, you can use the TM symbol immediately after filing the application, which usually takes less than 24 hours with IPR Karo."
  },
  {
    question: "Can I register a trademark as an individual?",
    answer: "Yes, any individual, whether a citizen or a foreign national, can apply for trademark registration. You do not necessarily need a business entity like a private limited company or an LLP to own a trademark."
  },
  {
    question: "What is the government fee for trademark registration?",
    answer: "For individuals, startups, and MSMEs (holding a Udyam certificate), the online filing fee is ₹4,500 per class. For all other entities, the fee is ₹9,000 per class. Physical filing is more expensive, costing ₹5,000 and ₹10,000 respectively."
  },
  {
    question: "What happens if my trademark application is objected to?",
    answer: "An objection (under Section 9 or 11) means the examiner needs clarification or finds similarities with existing marks. You must file a legal response within 30 days. If the response is satisfactory, the mark moves to the next stage; otherwise, a hearing might be required."
  },
  {
    question: "Does trademark registration offer global protection?",
    answer: "No, trademark rights are territorial. Registration in India only protects you within Bharat. However, you can use your Indian application as a basis for international filing in over 130 countries via the Madrid Protocol."
  },
  {
    question: "Can I change my logo after filing the registration?",
    answer: "No. You cannot make substantial changes to the trademark after filing. If the design changes significantly, you will need to file a fresh application. Minor clerical changes might be allowed through a Form TM-M."
  },
  {
    question: "What is the difference between TM and R symbols?",
    answer: "The TM symbol is used for marks that are in the application stage, indicating a claim of ownership. The R symbol (®) can only be used once the trademark is officially registered and you have the certificate. Using the R symbol before registration is a legal offense."
  },
  {
    question: "How long is a trademark registration valid?",
    answer: "A registered trademark is valid for 10 years from the date of filing. It can be renewed indefinitely every 10 years by paying the renewal fees."
  },
  {
    question: "Is it mandatory to register a trademark?",
    answer: "While not legally mandatory to operate a business, registration is highly recommended. It gives you the exclusive right to use the mark and provides a strong legal basis to sue for infringement. Without registration, protecting your brand name is significantly harder."
  },
  {
    question: "What items can be trademarked?",
    answer: "You can trademark brand names, logos, slogans, device marks, shapes of goods, sound marks, and even specific color combinations that have acquired distinctiveness."
  }
];

export default function RegistrationOfTrademarkPage() {
  const breadcrumbItems = [
    { label: "Registration of Trademark", href: "/registration-of-trademark" },
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
        "name": "Registration of Trademark",
        "item": "https://www.iprkaro.com/registration-of-trademark"
      }
    ]
  };

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
    "headline": "Registration of Trademark in India: The Definitive 2026 Guide",
    "description": "Comprehensive analysis of the trademark registration process in Bharat, covering legal frameworks, documents, costs, and strategic benefits for businesses.",
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
    "datePublished": "2026-02-20",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.iprkaro.com/registration-of-trademark"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Online Trademark Registration India",
    "image": "https://www.iprkaro.com/assets/trademark-registration-og.jpg",
    "description": "Top-rated legal service for brand and logo registration in India.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "3120"
    }
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               Expert Guide: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Registration of Trademark</span> in Bharat
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
               Secure your brand identity with the official registration of trademark process. From comprehensive public searches to successful certification, learn how to protect your intellectual property in the competitive Indian market.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Start Your Registration Now
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">
            
            {/* Left Column: Table of Contents */}
            <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-6 sticky top-[72px] z-20">
                  <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">
                
                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Strategic Power of Trademark Registration</h2>
                  <p className="mb-4 leading-relaxed text-lg">
                    In the rapidly evolving economic landscape of modern Bharat, the pehchan or identity of a business is its most valuable asset. When we talk about the <strong>registration of trademark</strong>, we are not merely discussing a legal formality; we are referring to the creation of a powerful shield that defends your innovation, your reputation, and your hard earned market share. A trademark is more than just a name or a logo; it is the visual and auditory representation of your promise to your customers. It sets you apart in a crowded marketplace, signaling quality and consistency. Whether you are selling a tangible consumer product or a highly specialized B2B service, your identity distinguishes you from generic competitors.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg">
                    The Trade Marks Act of 1999 provides a robust framework for brand protection in India. Through a centralized system managed by the Controller General of Patents, Designs and Trade Marks, businesses can secure exclusive rights that span across all states and union territories. At IPR Karo, we have simplified this complex legal journey, enabling entrepreneurs from diverse backgrounds whether they are in the tech hubs of Bangalore or the manufacturing clusters of Ludhiana to claim their rightful place in the market. The digital revolution in intellectual property filings has streamlined the once bureaucratic nightmare into a manageable, transparent digital workflow ensuring greater security for businesses nationwide.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg">
                    Consider for a moment the sheer scale of the Indian marketplace. With millions of new ventures launching every year, the risk of brand dilution or outright passing off is at an all time high. Registration provides you with prima facie evidence of ownership, a crucial leverage when navigating legal disputes or entering into partnership agreements. It transforms a simple brand name into a tangible asset that contributes to the overall valuation of your business. Investors and venture capitalists now scrutinize intellectual property portfolios before making funding decisions; lacking a registered trademark is often viewed as a serious liability. A registered brand name not only safeguards your current operations but sets the stage for future corporate scaling, franchise models, and public offerings.
                  </p>
                  <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                    <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                      "A trademark is the silent salesperson of your business. It communicates quality, origin, and trust without speaking a single word. Registering it is the ultimate act of business leadership."
                    </p>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    This guide is designed to be the only resource you need to understand the nuances of the trademark lifecycle. We will break down the barriers of legal jargon and provide you with actionable insights that empower you to take charge of your intellectual property. Whether you are a startup founder looking for early stage protection or an established enterprise seeking to diversify your portfolio, the principles of registration remain the same: distinctiveness, due diligence, and dedicated maintenance. From understanding the initial eligibility requirements to dealing with post-registration enforcement, every aspect of your IP journey is mapped out in this extensive 2026 manual.
                  </p>
                </section>

                <section id="importance" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why Registration is Non Negotiable for Your Brand</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Many entrepreneurs delay the registration of trademark, believing that it is a luxury reserved for large corporations or something that can be handled "later" when revenue increases. However, the reality is quite the opposite. Small and medium enterprises (SMEs) are often the most vulnerable to brand imitation. A successful SME draws attention quickly, and without protection, local competitors can siphon off your brand value by using a confusingly similar name.
                  </p>
                  <ul className="space-y-6 my-10 list-none p-0">
                    <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-xl mb-2">Legal Monopoly and Exclusive Rights</h4>
                        <p className="text-green-800">Once your mark is registered, you possess the exclusive right to use it in relation to the goods or services for which it is registered. This legal monopoly prevents others from profiting off your reputation. It legally prevents competitors from copying your identity and confusing your customers. Furthermore, under Section 29 of the Trade Marks Act, you gain the statutory right to sue for trademark infringement, meaning you do not have to prove "passing off" which is often a burden in common law courts.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faHandHoldingUsd} className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-xl mb-2">Asset Valuation and Financial Growth</h4>
                        <p className="text-green-800">Your trademark is an intangible asset that grows in value as your brand grows. Think of major multi-national brands where the logo and name hold billions in value independently of the physical product. It can be licensed, franchised, assigned, or even used as collateral for loans. In mergers and acquisitions, the strength of the trademark portfolio often dictates the final acquisition price or multiplier.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-xl mb-2">Platform Protection (Amazon, Flipkart, Instagram)</h4>
                        <p className="text-green-800">In the digital age, marketplace protection is an operational necessity. E-commerce platforms like Amazon have a 'Brand Registry' program that specifically requires a registered trademark to combat counterfeiters effectively. Without the coveted ® symbol, you are exposed to unauthorized sellers who can hijack your Buy Box, dilute your listings, sell sub-standard imitations, and ruin your review ratings. Social media networks also require a trademark certificate to verify profiles or take down imposter accounts.</p>
                      </div>
                    </li>
                  </ul>
                  <p className="mb-4 leading-relaxed text-lg">
                    Furthermore, a registered trademark acts as a powerful strategic deterrent. When competitors see the ® symbol, they are far less likely to attempt an imitation, knowing the weight of the legal consequences that follow. In India, trademark infringement can lead to an injunction, damages, and even the destruction of infringing goods. Registration is ultimately a critical investment in peace of mind, allowing you to focus completely on scaling your business while the law guards your identity.
                  </p>
                </section>

                <section id="types-of-marks" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Navigating the Spectrum: Types of Marks You Can Register</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    The scope of trademarking has expanded massively over the past decades. It's no longer just about standard names and simple designs. Understanding the nuances of what can be registered is the first step in creating a comprehensive intellectual property strategy that perfectly wraps around your business. 
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-10">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3">
                          <FontAwesomeIcon icon={faFileAlt} className="w-6 h-6 md:w-8 md:h-8 text-[#6E5E93]" />
                        </div>
                        Word Marks
                      </h4>
                      <p className="text-gray-600">The most common type, protecting the characters, letters, or numerals themselves regardless of how they are styled, colored, or presented. This offers the broadest possible protection for your brand name. Examples: 'Apple', 'Reliance', 'Tata'. If you have a word mark, you can change your logo font daily and still retain full protection over the spoken name.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3">
                          <FontAwesomeIcon icon={faBuilding} className="w-6 h-6 md:w-8 md:h-8 text-[#6E5E93]" />
                        </div>
                        Device Marks (Logos)
                      </h4>
                      <p className="text-gray-600">These protect the specific visual design, iconography, color schemes, and stylization of your brand. A strong logo becomes instantly recognizable even without the name attached. The 'Swoosh' of Nike or the iconic 'M' arch of McDonald's are classic examples of powerful device marks. We file these to protect your visual brand identity against copycats.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3">
                          <FontAwesomeIcon icon={faCertificate} className="w-6 h-6 md:w-8 md:h-8 text-[#6E5E93]" />
                        </div>
                        Certification & Collective Marks
                      </h4>
                      <p className="text-gray-600">Certification Marks are used to certify that goods or services comply with certain standards (e.g., AGMARK, ISO, ISI marks) signifying high quality, origin, or material. Collective Marks denote membership to an association or group (like 'CA' for Chartered Accountants). They protect public trust and collective interests.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3">
                          <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 md:w-8 md:h-8 text-[#6E5E93]" />
                        </div>
                        Non Conventional Marks
                      </h4>
                      <p className="text-gray-600">Modern IP law allows for the registration of 'Sound Marks' (like the iconic ICICI Bank jingle or the Yahoo! yodel), 'Smell Marks' (uncommon but legally possible if highly distinctive), 'Shape Marks' (the 3D shape of a Coca-Cola bottle or Toblerone chocolate), and specific unique 'Color Combinations'. This expanded definition allows brands to protect sensory elements.</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    Choosing between a word mark and a device mark is a critical strategic decision. Generally, we recommend filing for the Word Mark first if budget is a constraint, as it grants superior protective power over the name itself. However, to create an impenetrable legal fortress around your brand, filing for both the word mark and the device mark (logo) separately is considered the golden standard. This ensures protection against competitors who might attempt to use a phonetically similar name with a completely different logo design, or vice versa.
                  </p>
                </section>

                <section id="eligibility" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Who Can Apply for registration of trademark?</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    The Indian trademark system is inclusive and intentionally designed to support a vast spectrum of economic actors. You do not need to be a billionaire or a giant corporation to legally own a trademark. In fact, filing early in the life cycle of a business provides the best protection. The following categories of applicants can successfully file:
                  </p>
                  <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm my-10">
                    <div className="p-8 bg-gradient-to-r from-[#0C002B] to-[#160049] text-white">
                      <h4 className="text-xl font-bold">Categories of Eligible Applicants</h4>
                    </div>
                    <div className="p-8">
                      <dl className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        <div>
                          <dt className="font-bold text-[#6E5E93] text-lg mb-2">Individuals & Sole Proprietors</dt>
                          <dd className="text-gray-600">Freelancers, artists, consultants, and sole proprietors who want to own a brand in their personal capacity. If you run a business under a trade name, the trademark fundamentally belongs to you as the individual proprietor.</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-[#6E5E93] text-lg mb-2">Partnerships & LLPs</dt>
                          <dd className="text-gray-600">Collaborative ventures where the brand assets are shared by the partners. In a traditional partnership firmware, the constituent partners joint-own the brand, whereas an LLP holds the trademark in the name of the LLP entity itself.</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-[#6E5E93] text-lg mb-2">Private & Public Limited Companies</dt>
                          <dd className="text-gray-600">Legal corporate entities where the trademark is viewed as a corporate asset belonging exclusively to the shareholders. This protects founders from losing the brand if a single director leaves the company.</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-[#6E5E93] text-lg mb-2">Foreign Companies & Trusts</dt>
                          <dd className="text-gray-600">International businesses can file in India even if they don't have a registered office here, usually under a section claiming international reputation. Trusts and NGOs similarly protect their philanthropic identity.</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    A critical advantage for small businesses in India is the <strong>MSME (Micro, Small and Medium Enterprises) or Startup India registration</strong>. If you hold a valid Udyam certificate or a DPIIT Startup Recognition, the government heavily incentivizes your intellectual property journey by offering a massive 50% discount on the official government filing fees. This initiative is a significant boost for bootstrapped startups looking to conserve their precious working capital while strategically securing their long-term digital and physical future footprint.
                  </p>
                </section>

                <section id="classification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Nice Classification: Structuring Your Protection Strategy</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    One of the most complex, yet vital technical aspects of trademarking is the comprehensive classification system. Trademarks are never granted in a generic, universal vacuum; they are strictly granted for specific categories of goods and services. India complies with the international standard known as the Nice Classification (NCL), which breaks down modern commerce into 45 distinct classes:
                  </p>
                  <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200">
                    <table className="w-full text-left bg-white border-collapse">
                      <thead className="bg-[#6E5E93] text-white">
                        <tr>
                          <th className="p-5 font-bold border border-purple-700">Class Range</th>
                          <th className="p-5 font-bold border border-purple-700">Focus Area Overview</th>
                          <th className="p-5 font-bold border border-purple-700">Common Real-World Examples</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-base">
                        <tr>
                          <td className="p-4 font-bold border">Classes 1 - 34</td>
                          <td className="p-4 border">Tangible Goods (Products)</td>
                          <td className="p-4 border">Class 3 (Cosmetics/Soaps), Class 5 (Pharmaceuticals/Supplements), Class 9 (Electronics/Software), Class 25 (Apparel/Footwear/Fashion), Class 30 (Food/Coffee/Spices).</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold border">Classes 35 - 45</td>
                          <td className="p-4 border">Intangible Services</td>
                          <td className="p-4 border">Class 35 (Advertising/Retail/Business Mgt), Class 41 (Education/Training/Entertainment), Class 42 (IT Consulting/SaaS), Class 43 (Restaurants/Hotels), Class 45 (Legal/Security).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    Selecting the right class (or combination of classes) is paramount to building an effective legal blockade. If you register your innovative clothing brand under the wrong class (e.g., classifying it solely under retail services instead of the actual manufactured goods), you might suddenly find that while your logo is "registered", you have absolutely no legal standing to stop a competitor in your actual core industry from using a virtually identical name. This is an incredibly common trap for the legally inexperienced, often weaponized by competing businesses. At IPR Karo, our seasoned attorneys conduct a thorough, forensic analysis of both your present business activities and your 5-year future expansion plans to ensure you are covered securely in all relevant primary and secondary IP classes.
                  </p>
                </section>

                <section id="pre-filing-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Strategic Pre Filing: The Importance of a Public Search</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Filing a trademark without a search is like sailing into a storm without a compass. The IP India database contains millions of records. A public search allows us to identify potential conflicts before they become expensive failures.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                        <FontAwesomeIcon icon={faSearch} className="w-6 h-6 text-blue-600" />
                      </div>
                      <h5 className="font-bold mb-2">Identical Matches</h5>
                      <p className="text-sm opacity-80">Checking for names that are exactly the same as yours.</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                        <FontAwesomeIcon icon={faSync} className="w-6 h-6 text-blue-600" />
                      </div>
                      <h5 className="font-bold mb-2">Phonetic Similarity</h5>
                      <p className="text-sm opacity-80">Identifying names that sound similar (e.g., 'Kool' vs 'Cool').</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                        <FontAwesomeIcon icon={faFileSignature} className="w-6 h-6 text-blue-600" />
                      </div>
                      <h5 className="font-bold mb-2">Visual Elements</h5>
                      <p className="text-sm opacity-80">Ensuring your logo doesn't clash with existing registered designs.</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    At IPR Karo, our legal experts use advanced search algorithms and manual cross-referencing to provide you with a clearance report. We don't just give you data; we give you a probability of success. If a name is too risky, we will tell you upfront and help you brainstorm alternatives that are both marketable and protectable.
                  </p>
                </section>

                <section id="the-process" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Demystified: The 7 Step Lifecycle of Trademark Registration</h2>
                  <p className="mb-8 leading-relaxed text-lg">
                    The journey from application to certificate involves several gatekeepers. Understanding the timeline helps you manage expectations and plan your marketing activities.
                  </p>
                  <div className="space-y-12 my-12 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[31px] before:-z-10 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-200 before:via-purple-200 before:to-transparent">
                    {/* Step 1 */}
                    <div className="relative flex items-center gap-6 md:gap-10">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">1</div>
                      <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h4 className="font-bold text-[#0C002B] text-xl mb-2">Application Filing (TM-A)</h4>
                        <p className="text-gray-600 leading-relaxed">We file the application and generate your application number. You can now use the TM symbol. This marks the beginning of your priority date.</p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex items-center gap-6 md:gap-10">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">2</div>
                      <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h4 className="font-bold text-[#0C002B] text-xl mb-2">Formalities Check</h4>
                        <p className="text-gray-600 leading-relaxed">The registry verifies the documents and basics. If everything is in order, the status changes to 'Marked for Exam'. This is a quick administrative step.</p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex items-center gap-6 md:gap-10">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">3</div>
                      <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h4 className="font-bold text-[#0C002B] text-xl mb-2">Substantive Examination</h4>
                        <p className="text-gray-600 leading-relaxed">An examiner reviews the mark against Sections 9 and 11. They check for distinctiveness and potential confusion with earlier marks.</p>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="relative flex items-center gap-6 md:gap-10">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">4</div>
                      <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h4 className="font-bold text-[#0C002B] text-xl mb-2">Objection Handling (If Any)</h4>
                        <p className="text-gray-600 leading-relaxed">If the examiner raises concerns, we file a written response. A strong legal argument at this stage can save you from a hearing later.</p>
                      </div>
                    </div>
                    {/* Step 5 */}
                    <div className="relative flex items-center gap-6 md:gap-10">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">5</div>
                      <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h4 className="font-bold text-[#0C002B] text-xl mb-2">Publication in Trademark Journal</h4>
                        <p className="text-gray-600 leading-relaxed">The mark is advertised to the public for 4 months. This allows third parties to oppose the registration if they feel their rights are violated.</p>
                      </div>
                    </div>
                    {/* Step 6 */}
                    <div className="relative flex items-center gap-6 md:gap-10">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">6</div>
                      <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h4 className="font-bold text-[#0C002B] text-xl mb-2">Opposition Proceedings (Rare)</h4>
                        <p className="text-gray-600 leading-relaxed">If an opposition is filed, the case enters a mini trial. Parties submit evidence and arguments before the Registrar makes a final decision.</p>
                      </div>
                    </div>
                    {/* Step 7 */}
                    <div className="relative flex items-center gap-6 md:gap-10">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#6E5E93] text-white shadow-lg ring-8 ring-white font-bold text-lg md:text-2xl">7</div>
                      <div className="flex flex-col bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                        <h4 className="font-bold text-[#0C002B] text-xl mb-2">Registration and Certification</h4>
                        <p className="text-gray-600 leading-relaxed">Once all hurdles are cleared, the registration certificate is issued digitally. You can now use the ® symbol and enjoy full protection.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="documents" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Documents Required: Building Your Application Dossier</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    A successful application depends on the precision of your documents. Any mismatch in name or address can lead to lengthy delays. Here is what you need:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 my-10">
                    <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 h-full">
                      <h4 className="font-bold text-[#0C002B] text-2xl mb-4">Core Identity & Address</h4>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-indigo-500" /> Aadhaar Card & PAN Card of Applicant</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-indigo-500" /> Certificate of Incorporation (Companies)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-indigo-500" /> Partnership Deed (if applicable)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-indigo-500" /> Board Resolution (for legal entities)</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 h-full">
                      <h4 className="font-bold text-[#0C002B] text-2xl mb-4">Filing Specific Assets</h4>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[#6E5E93]" /> **Udyam/MSME Certificate** (Important)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[#6E5E93]" /> Logo File (Highest quality possible)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[#6E5E93]" /> Power of Attorney (TM-48 authorization)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[#6E5E93]" /> User Affidavit (for past dated usage)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    The <strong>User Affidavit</strong> is particularly critical if you have already been using the brand for several years. It allows you to claim "Prior Use", which gives you superiority over newcomers in a legal dispute. This affidavit must be accompanied by evidence like invoices, invoices, and advertisements.
                  </p>
                </section>

                <section id="fees-breakdown" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Transparency Matters: Government Fees Breakdown 2026</h2>
                  <p className="mb-8 leading-relaxed text-lg">
                    The cost of trademarking in India is very competitive compared to Western jurisdictions. However, price varies based on the legal status of the applicant and the method of filing.
                  </p>
                  <div className="flex flex-col md:flex-row gap-8 my-12">
                     <div className="flex-1 p-8 bg-gradient-to-br from-green-50 to-white rounded-3xl border-2 border-green-200 text-center shadow-lg hover:-translate-y-2 transition-transform">
                        <h4 className="font-bold text-green-700 text-4xl mb-2">₹4,500</h4>
                        <p className="font-bold text-green-900 text-xl mb-4">Startups & MSMEs</p>
                        <ul className="text-sm text-gray-600 text-left space-y-2 mt-4">
                           <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Requires Udyam Registration</li>
                           <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> 50% Subsidy provided by Govt.</li>
                           <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Includes Individual filings</li>
                        </ul>
                     </div>
                     <div className="flex-1 p-8 bg-gradient-to-br from-orange-50 to-white rounded-3xl border-2 border-orange-200 text-center shadow-lg hover:-translate-y-2 transition-transform">
                        <h4 className="font-bold text-orange-700 text-4xl mb-2">₹9,000</h4>
                        <p className="font-bold text-orange-900 text-xl mb-4">Standard Entities</p>
                        <ul className="text-sm text-gray-600 text-left space-y-2 mt-4">
                           <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> For Large Corporations</li>
                           <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Standard Corporate Rate</li>
                           <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Per Class E-filing Fee</li>
                        </ul>
                     </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg italic text-gray-600">
                    Pro Tip: Always opt for E filing. Not only is it cheaper (physical filing is 10% more expensive), but it also provides immediate acknowledgment and faster processing in the examiner's queue.
                  </p>
                </section>

                <section id="objections-oppositions" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Handling Hurdles: Objections and Oppositions</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    It is common for the Registrar to issue an 'Examination Report' with certain objections. This is not a rejection of your trademark, but rather a request for clarification.
                  </p>
                  <div className="space-y-8 my-10">
                    <div className="p-8 bg-white rounded-3xl border-l-[10px] border-l-[#0C002B] shadow-xl">
                       <h4 className="font-bold text-[#0C002B] text-2xl mb-4 flex items-center">
                         <FontAwesomeIcon icon={faScaleBalanced} className="w-6 h-6 mr-3 text-[#6E5E93]" />
                         Common Objection Grounds
                       </h4>
                       <dl className="space-y-4">
                         <div>
                           <dt className="font-bold text-gray-900">Descriptive Marks:</dt>
                           <dd className="text-gray-600">'The name describes the product too closely' (e.g. "Sweet Mango" for juice). We solve this by proving acquired distinctiveness through massive sales data.</dd>
                         </div>
                         <div>
                           <dt className="font-bold text-gray-900">Likelihood of Confusion:</dt>
                           <dd className="text-gray-600">'There is a similar mark already registered'. We solve this by highlighting differences in logos, price points, and target audiences.</dd>
                         </div>
                       </dl>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    If an <strong>opposition</strong> is filed by a third party, the stakes are higher. This is a formal legal contest that requires evidence of use and detailed legal arguments. IPR Karo's litigation team has a proven track record of defending brands against frivolous oppositions by large conglomerates.
                  </p>
                </section>

                <section id="post-registration" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Post Registration: Safeguarding Your Success</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Obtaining the certificate is a milestone, but maintenance is a lifelong commitment. You must actively use your trademark and protect it from encroachment.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 my-10">
                    <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-gray-200">
                      <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                        <FontAwesomeIcon icon={faCalendarAlt} className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-bold mb-1">Renewal Every 10 Years</h5>
                        <p className="text-sm text-gray-600">Mark your calendar. Failure to renew can lead to the removal of your mark from the register.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-gray-200">
                      <div className="w-12 h-12 shrink-0 bg-[#0C002B] rounded-xl flex items-center justify-center text-white">
                        <FontAwesomeIcon icon={faGavel} className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-bold mb-1">Enforcement and Anti Counterfeit</h5>
                        <p className="text-sm text-gray-600">Be vigilant. Send 'Cease and Desist' notices to anyone attempting to copy your brand name or logo.</p>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    Remember, "Trademark squatters" often target successful brands that have let their registrations lapse. Our automated monitoring services alert you well in advance of renewal deadlines and notify you of any new applications that might be encroaching on your branding.
                  </p>
                </section>

                <section id="trademark-infringement" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">What Constitutes Trademark Infringement?</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Trademark infringement occurs when an unauthorized party uses a mark that is identical or deceptively similar to a registered trademark, for goods or services that are identical or similar. This unauthorized use compromises the brand owner's rights and causes confusion among consumers regarding the origin of the products, ultimately damaging your brand's hard-earned reputation.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg">
                    Under Section 29 of the <strong>Trade Marks Act, 1999</strong>, infringement is a serious legal offense with robust civil and criminal remedies. In civil courts, brand owners can secure immediate injunctions (stop orders) against the infringing party, demand financial damages for lost revenue, or request an 'account of profits' taking away the illegal gains the infringer made. In severe cases involving counterfeiting, the law provides for criminal charges, which can lead to police raids, search and seizures, and imprisonment for the offenders. As a brand owner, your strongest and only proactive defense is an officially registered mark combined with regular market surveillance to detect imposters early.
                  </p>
                </section>

                <section id="common-mistakes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Common Mistakes to Avoid During Online Filing</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Despite the digitized nature of the modern filing system, a staggering percentage of applications are rejected or delayed due to easily avoidable manual errors. Navigating the legal technicalities requires precision. Here are the top pitfalls to actively avoid:
                  </p>
                  <ul className="space-y-6 my-8 p-0 list-none">
                    <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                      <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                      </div>
                      <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Skipping the Advanced Pre-Filing Search</strong> Filing blindly without checking the Intellectual Property India database comprehensively leads directly to Section 11 objections. Ensure you conduct phonetic, partial, and visual searches.</p>
                    </li>
                    <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                      <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                      </div>
                      <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Choosing Highly Descriptive Names</strong> Names that simply describe the product or quality (e.g., "Best Cotton Shirts" or "Fast Delivery Logistics") are considered inherently weak by examiners and face heavy Section 9 objections. Opt for coined, abstract, or arbitrary words.</p>
                    </li>
                    <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                      <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                      </div>
                      <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Incorrect Goods/Service Classification</strong> Registering in Class 25 (Clothing) when you are actually providing an e-commerce retail service for clothing (which falls under Class 35) makes your registration legally useless against actual competitors.</p>
                    </li>
                    <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                      <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                      </div>
                      <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Missing Strict Deadlines</strong> Failing to respond to an Examination Report within the rigid 30-day legal deadline will automatically lead to the application being marked as 'Abandoned' by the Registrar, wasting all fees paid.</p>
                    </li>
                  </ul>
                </section>

                <section id="global-protection" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Scaling Globally: The Madrid Protocol Strategy</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    If you are planning to take your brand to the global stage, you don't need to hire a separate lawyer in every country. India is a signatory to the <strong>Madrid Protocol</strong>.
                  </p>
                  <div className="bg-[#6E5E93]/10 p-8 rounded-3xl border border-[#6E5E93]/20 my-10">
                    <h4 className="text-[#0C002B] font-bold text-2xl mb-4">Benefits of International Filing</h4>
                    <p className="text-gray-800 leading-relaxed text-lg mb-4">
                      A single application filed through the Indian Trademark Registry can be extended to over 130 member countries, including the USA, UK, EU, China, and Japan. This significantly reduces administrative overheads and streamlines the management of your global IP portfolio.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium">Reduced Costs</span>
                      <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium">Single Currency Payment</span>
                      <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium">Fast Track Verification</span>
                    </div>
                  </div>
                </section>

                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Why Hundreds of Startups Trust IPR Karo</h2>
                   <p className="mb-10 leading-relaxed text-lg">
                     Legal processes shouldn't be a bottleneck for your business. We have engineered a technology-first approach to traditional law, making the <strong>registration of trademark</strong> seamless and efficient for modern founders.
                   </p>
                   <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                          <FontAwesomeIcon icon={faRocket} className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-xl">Same Day Filing</h4>
                        <p className="text-sm opacity-70">We understand that time is money. Once you provide the documents, we file within 24 hours.</p>
                      </div>
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                          <FontAwesomeIcon icon={faUserTie} className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-xl">Expert Attorneys</h4>
                        <p className="text-sm opacity-70">No bots or middlemen. Your application is reviewed by senior IP professionals with decades of experience.</p>
                      </div>
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                          <FontAwesomeIcon icon={faMoneyBillWave} className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-xl">Zero Hidden Fees</h4>
                        <p className="text-sm opacity-70">Transparent pricing from start to finish. You know exactly what goes to the govt. and what for our services.</p>
                      </div>
                   </div>
                </section>

                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center">Frequently Asked Questions</h2>
                  <div className="space-y-8 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start">
                          <span className="text-[#6E5E93] text-2xl">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                  <ReviewSnippets />
                </section>

                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Nishkarsh: Your Brand deserves the best protection</h2>
                  <p className="mb-4 leading-relaxed text-xl text-center">
                    In conclusion, the <strong>registration of trademark</strong> is an essential pillar of business sustainability. It is the bridge between a visionary idea and a respected brand name. The effort and investment you put into securing your IP today will pay dividends for decades to come, protecting your legacy and providing a solid foundation for growth.
                  </p>
                  <p className="mb-4 leading-relaxed text-xl text-center">
                    At IPR Karo, we are committed to being your long term IP partner. We don't just file forms; we build bridges to your future. Let us help you navigate the complexities of trademark law in Bharat so you can stay focused on what you do best: building a great business.
                  </p>
                </section>

                {/* Final CTA Strip */}
                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                   <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Claim Your Brand Name Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                      Don't let someone else own your brand. Get a Free Trademark Search report and start your registration in minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                          Start Registration Now
                        </button>
                      </Link>
                      <a href="tel:+919289707648">
                         <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                          Consult an Expert
                        </button>
                      </a>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E5E93]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                </div>

              </div>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <aside className="hidden lg:block space-y-10 sticky top-32">
              
              {/* Sidebar CTA Box */}
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Free Availability Check</h3>
                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                  Is your chosen brand name available? Get a **Detailed Legal Search Report** within 60 minutes.
                </p>
                <Link href="/contact-us" className="block relative z-10">
                  <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                    Check Now
                  </button>
                </Link>
                <div className="mt-6 pt-6 border-t border-white/10 relative z-10 text-center">
                  <a href="tel:+919289707648" className="text-indigo-300 font-bold hover:text-white transition-colors flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" /> +91-9289707648
                  </a>
                </div>
              </div>

              {/* Related Pages Widget */}
              <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Explore More</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/trademark-registration-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Trademark Registration India</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Public Search Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">What is Trademark?</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/e-filing-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">E-Filing Process</span>
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
