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
  faLandmark,
  faCoins,
  faBriefcase,
  faChartLine,
  faBuilding,
  faHandHoldingUsd,
  faLaptopCode,
  faUniversity,
  faBullhorn,
  faMobileAlt,
  faAward,
  faFileInvoiceDollar,
  faUserTie,
  faChartPie,
  faSackDollar,
  faScaleUnbalanced
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark Registration for Financial Services | Class 36',
  description: 'Secure your financial brand, fintech app, or consultancy firm. Expert trademark registration for Class 36 & 35. Protect against copycats and build trust.',
  keywords: [
    'trademark for financial services',
    'class 36 trademark',
    'fintech trademark registration',
    'banking trademark india',
    'insurance brand protection',
    'investment firm logo registration',
    'real estate trademark class',
    'cryptocurrency trademark india',
    'financial consultancy brand',
    'wealth management trademark'
  ],
  openGraph: {
    title: 'Expert Trademark Registration for Financial Services',
    description: 'Trust is your currency. Protect your financial brand identity with India\'s top IP experts. Cover Class 36, 35, and more.',
    url: 'https://www.iprkaro.com/trademark-for-financial-services',
    type: 'article',
    images: [
      {
        url: 'https://www.iprkaro.com/assets/trademark-financial-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark for Financial Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-for-financial-services',
  },
};

const tocSections = [
  { id: 'trust-and-trademarks', title: 'Trust & Trademarks' },
  { id: 'class-36-explained', title: 'Class 36 & Beyond' },
  { id: 'what-can-you-register', title: 'What to Protect?' },
  { id: 'registration-process', title: 'Registration Process' },
  { id: 'fintech-challenges', title: 'Fintech Specifics' },
  { id: 'crypto-web3', title: 'Crypto & Web3' },
  { id: 'nbfc-regulations', title: 'NBFC Branding' },
  { id: 'investment-advisers', title: 'SEBI RIAs' },
  { id: 'insurance-branding', title: 'Insurance Agents' },
  { id: 'legal-hurdles', title: 'Handling Objections' },
  { id: 'case-studies', title: 'Famous Disputes' },
  { id: 'documents-required', title: 'Required Documents' },
  { id: 'international-protection', title: 'Global Banking' },
  { id: 'enforcement-strategies', title: 'Enforcement' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "What is the primary trademark class for financial services?",
    answer: "Class 36 is the primary class. It covers insurance, financial affairs, monetary affairs, and real estate affairs. This includes banking, wealth management, crypto exchanges, loan services, and insurance agencies."
  },
  {
    question: "I have a Fintech app. Do I need to register in Class 9?",
    answer: "Yes, absolutely. While your 'service' is financial (Class 36), your 'product' is a mobile application or software, which falls under Class 9. Additionally, Class 35 (Business Management) and Class 42 (Technological Services) might be relevant depending on your business model."
  },
  {
    question: "Can I trademark terms like 'Safe Invest' or 'Quick Loans'?",
    answer: "These are considered 'descriptive' marks under Section 9 of the Trade Marks Act. The Registry will likely object because these terms describe the quality or nature of the service. You would need to prove 'acquired distinctiveness' through long-term use to register them, or combine them with a unique logo."
  },
  {
    question: "Do I need a trademark to operate a Chit Fund or Nidhi Company?",
    answer: "While not mandatory for incorporation, it is crucial for brand protection. Trust is everything in these sectors. A registered trademark prevents others from using a similar name to dupe your customers, protecting your reputation from potential scams run by copycats."
  },
  {
    question: "How long does it take to register a financial trademark?",
    answer: "It typically takes 12-18 months. However, you can start using the ™ symbol usually within 24 hours of filing the application (Form TM-A)."
  },
  {
    question: "Does a trademark protect my financial advice or methodology?",
    answer: "No. A trademark protects your Brand Name, Logo, and Slogan. It does not protect your business ideas, algorithms, or financial strategies. For algorithms or software code, you might look into Copyright or Patent protection."
  },
  {
    question: "What documents are required for an NBFC to register a trademark?",
    answer: "You will need the COI (Certificate of Incorporation), PAN of the company, Board Resolution authorizing the signatory, and the Logo image. MSME/Udyam registration is recommended to save 50% on government fees."
  },
  {
    question: "Can I register a cryptocurrency name?",
    answer: "Yes, you can register the name of your crypto token or exchange. Class 36 covers 'financial services concerning cryptocurrencies'. However, regulatory clarity in India is evolving, so professional legal advice is highly recommended."
  },
  {
    question: "What if I operate globally?",
    answer: "Financial services are often borderless. You should use the Madrid Protocol to protect your brand in major financial hubs like the USA, UK, Singapore, and Dubai with a single application."
  },
  {
    question: "Can I transfer my trademark to another company?",
    answer: "Yes, trademarks are assets. You can assign (sell) them to another entity. In M&A deals, the valuation of the brand (trademark) is often a significant part of the deal."
  }
];

const reviews = [
  {
    name: "Sandeep Kumar",
    role: "Director, WealthWise Capital",
    text: "In the financial sector, trust is everything. IPR Karo helped us secure our brand name across Class 36 and 35. Their strategic advice on 'descriptive' terms was invaluable.",
    rating: 5
  },
  {
    name: "Anjali Desai",
    role: "Founder, PayQuick Fintech",
    text: "We needed protection for our App (Class 9) and Service (Class 36). The team clarified the multi-class filing process and handled it smoothly. Highly professional.",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "CEO, Malhotra Real Estate",
    text: "Real estate branding is competitive. IPR Karo secured our logo and tagline quickly. The 'Check Name Availability' feature saved us from a potential legal disaster.",
    rating: 5
  }
];

export default function TrademarkFinancialServicesPage() {
  const breadcrumbItems = [
    { label: "Our Services", href: "/our-services" },
    { label: "Trademark for Financial Services", href: "/trademark-for-financial-services" },
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
    "headline": "Trademark Registration for Financial Services in India",
    "description": "Comprehensive guide for Banks, NBFCs, Fintech, and Real Estate firms on securing their brand identity. Protect your trust capital.",
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
        "name": "Our Services",
        "item": "https://www.iprkaro.com/our-services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Trademark for Financial Services",
        "item": "https://www.iprkaro.com/trademark-for-financial-services"
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
        "name": "Trademark Registration for Financial Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "950"
        },
        "review": reviews.map(review => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": review.name },
          "reviewRating": { "@type": "Rating", "ratingValue": review.rating.toString() },
          "reviewBody": review.text
        }))
      })}} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section - No Grid */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white tracking-tight">
               Protecting the Currency of Trust: <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Trademark for Financial Services
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               In banking, insurance, and fintech, your reputation is your biggest asset. Don't let copycats dilute your credibility. Secure your brand in Class 36 with India's most trusted IP legal team.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                 Secure Your Brand Now
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
            <aside className="hidden lg:block sticky top-32">
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
                  
                  <section id="trust-and-trademarks" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Trust is Your Capital: Why Financial Brands Need Trademarks
                    </h2>
                    <p className="mb-6">
                      In the financial services industry, whether you are running a traditional bank, a boutique wealth management firm, or a cutting-edge fintech startup, your entire business model is built on one word: <strong>Trust</strong>. Customers entrust you with their life savings, their investments, and their future security. This high-stakes relationship relies heavily on brand recognition and reputation.
                    </p>
                    <p className="mb-6">
                      A <strong>Trademark</strong> is the legal embodiment of this trust. It is what separates a legitimate, regulated entity from a fly-by-night operator. In an era where phishing scams and fraudulent apps are rampant, having a registered trademark is not just about ownership; it is a signal of authenticity to your customers.
                    </p>
                    <div className="bg-blue-50 border-l-8 border-blue-600 p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-blue-900 italic font-medium">
                        "For a financial institution, a trademark is more than a logo. It is a promise of security, stability, and integrity."
                      </p>
                    </div>
                    <p className="mb-6">
                      Without trademark protection, you are vulnerable. Unscrupulous competitors can mimic your brand name, confuse your clients, and divert your business. Worse, if scammers use a name similar to yours to defraud people, your reputation takes the hit. Legal registration gives you the power to stop this swiftly and decisively.
                    </p>
                  </section>

                  <section id="class-36-explained" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Decoding Class 36: The Shield for Finance
                    </h2>
                    <p className="mb-8">
                      The Nice Classification system categorizes goods and services. For the financial sector, <strong>Class 36</strong> is the primary domain. However, modern financial businesses often span multiple classes.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="bg-white border-2 border-[rgb(110,94,147)] p-8 rounded-3xl shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[rgb(110,94,147)] text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Primary Class</div>
                        <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                          <FontAwesomeIcon icon={faLandmark} className="w-12 h-12 mr-3" /> Class 36
                        </h3>
                        <p className="mb-2 font-semibold text-gray-800">Insurance, Financial, Monetary & Real Estate Affairs</p>
                        <p className="text-gray-600 mb-4">
                          This is the core class covering the service of handling money or financial assets.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Banking Services</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Financial Consultancy</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Insurance Underwriting</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Real Estate Management & Brokerage</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Mutual Funds & Asset Management</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Cryptocurrency Exchange Services</li>
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm relative">
                           <div className="absolute top-0 right-0 bg-gray-600 text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Technology</div>
                           <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <FontAwesomeIcon icon={faLaptopCode} className="w-10 h-10 mr-3 text-gray-600" /> Class 9
                          </h3>
                          <p className="mb-2 font-semibold text-gray-800">Software & Apps</p>
                          <p className="text-gray-600 text-sm">
                            Essential for Fintech. If you have a mobile app, wallet, or trading software, that specific "product" is a digital good in Class 9.
                          </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm relative">
                           <div className="absolute top-0 right-0 bg-gray-600 text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Management</div>
                           <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <FontAwesomeIcon icon={faBriefcase} className="w-10 h-10 mr-3 text-gray-600" /> Class 35
                          </h3>
                          <p className="mb-2 font-semibold text-gray-800">Business Administration</p>
                          <p className="text-gray-600 text-sm">
                            If you provide accounting, tax preparation, or business auditing, these fall under business management in Class 35.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="what-can-you-register" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Anatomy of a Financial Brand: What to Protect?
                    </h2>
                    <p className="mb-8">
                       A comprehensive trademark portfolio protects more than just the name on your door.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faBuilding} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Brand Name (Word Mark)</h3>
                        <p className="text-sm leading-relaxed">The core name (e.g., "HDFC", "PolicyBazaar"). This offers the widest protection against phonetically similar names.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faCoins} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Logo (Device Mark)</h3>
                        <p className="text-sm leading-relaxed">Your visual identity. Financial logos often use symbols of stability (shields, pillars) or growth (graphs, arrows).</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faBullhorn} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Slogans & Taglines</h3>
                        <p className="text-sm leading-relaxed">"The Citi never sleeps" or "Mutual Funds Sahi Hai". Distinctive taglines build immense recall value.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faMobileAlt} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">App Icons</h3>
                        <p className="text-sm leading-relaxed">For modern fintech, the app icon on a user's phone screen is the most viewed brand element. It needs separate protection.</p>
                      </div>
                    </div>
                  </section>

                  <section id="registration-process" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                      The Registration Workflow
                    </h2>
                    <div className="relative space-y-12">
                       {/* Line connecting steps (Desktop) */}
                       <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                       {/* Step 1 */}
                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: Strategic Search</h3>
                             <p className="text-base text-gray-600 mb-4">
                                In finance, names are often similar (e.g., using "Invest", "Capital", "Wealth"). We conduct a deep search to ensure your specific combination is unique and available in Class 36.
                             </p>
                          </div>
                       </div>

                       {/* Step 2 */}
                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: Filing TM-A</h3>
                             <p className="text-base text-gray-600 mb-4">
                                We file the application with the Indian Trade Marks Registry. For startups, we ensure you get the 50% government fee concession. Once filed, you get a TM Application Number and can use the ™ symbol.
                             </p>
                          </div>
                       </div>

                       {/* Step 3 */}
                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Examination</h3>
                             <p className="text-base text-gray-600 mb-4">
                                The Registrar checks for conflicts. If they raise an objection (e.g., "Distinctiveness"), our legal team drafts a robust response citing your user data and market presence to overcome it.
                             </p>
                          </div>
                       </div>
                    </div>
                  </section>

                  <section id="fintech-challenges" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Fintech & Trademarks: Special Considerations
                     </h2>
                     <p className="mb-6">
                         The Fintech boom in India has led to a crowded marketplace. Brands like Paytm, PhonePe, and BharatPe have fought intense trademark battles over suffixes like "Pe". This highlights the importance of distinctiveness.
                     </p>
                     <div className="grid md:grid-cols-2 gap-8 my-8">
                        <div className="bg-purple-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-purple-900">Generic Terms Trap</h3>
                            <p className="text-sm text-purple-800">
                                Avoid names that purely describe the function, like "Fast Payment App" or "Easy Loans". These are almost impossible to protect. Aim for suggestive or arbitrary names (e.g., "Cred", "Zerodha").
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-purple-900">Domain Name Conflict</h3>
                            <p className="text-sm text-purple-800">
                                In fintech, your domain name constitutes your storefront. We align your trademark strategy with domain disputes, helping you recover domains from squatters using UDRP policies.
                            </p>
                        </div>
                     </div>
                  </section>

                  <section id="crypto-web3" className="scroll-mt-32 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Crypto, Web3 & The Metaverse: The New Frontier
                    </h2>
                    <p className="mb-6">
                      As decentralized finance (DeFi) grows, the lines between traditional banking and digital assets blur. Trademark laws are adapting to this shift. If you are launching a crypto exchange, NFT marketplace, or token, standard Class 36 protection might not be enough.
                    </p>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                         <div className="bg-[rgb(110,94,147)] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <FontAwesomeIcon icon={faCoins} className="w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Virtual Goods vs Real Services</h3>
                            <p className="text-gray-700">
                              For Web3 brands, we recommend a dual-filing strategy. File in <strong>Class 36</strong> for the financial services (e.g., "Digital Token Exchange") and <strong>Class 9</strong> for "Downloadable Virtual Goods" (e.g., NFTs, Digital Wallets). This ensures you are protected in both the real and virtual economy.
                            </p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="bg-[rgb(110,94,147)] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <FontAwesomeIcon icon={faGlobe} className="w-6 h-6" />
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Metaverse Banking</h3>
                            <p className="text-gray-700">
                              Major banks like JP Morgan and HSBC have entered the Metaverse. If you plan to offer virtual banking services in a digital environment (like Decentraland), you need specific trademark clauses covering "Financial services provided in a virtual environment".
                            </p>
                         </div>
                      </div>
                    </div>
                  </section>

                  <section id="nbfc-regulations" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                        NBFCs & Microfinance: RBI Naming Guidelines
                     </h2>
                     <p className="mb-6">
                        Non-Banking Financial Companies (NBFCs) operate under strict RBI regulations. This extends to your brand name. Before you file a trademark, you must ensure your name complies with the Reserve Bank of India's naming norms to avoid license rejection later.
                     </p>
                     <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                        <h3 className="text-red-900 font-bold text-lg mb-2 flex items-center">
                           <FontAwesomeIcon icon={faScaleUnbalanced} className="mr-2 w-12 h-12" />
                           Restricted Words
                        </h3>
                        <p className="text-red-800 text-sm">
                           You cannot use words like <strong>"Bank"</strong>, <strong>"Banking"</strong>, <strong>"Banker"</strong>, or <strong>"Microfinance"</strong> in your name unless explicitly authorized by the RBI. Using these in your trademark without a valid NBFC license can lead to immediate objection under Section 9(2) (Deceptive Marks).
                        </p>
                     </div>
                     <p className="mb-4">
                        We help NBFCs choose "Safe" names that are both marketable and compliant. For example, instead of "Easy Bank", use "Easy FinServe" or "Easy Credits".
                     </p>
                  </section>

                  <section id="investment-advisers" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                        SEBI Registered Investment Advisers (RIAs)
                     </h2>
                     <p className="mb-6">
                        For Stock Brokers, Portfolio Managers, and Investment Advisers, SEBI (Securities and Exchange Board of India) has its own code of conduct regarding advertisement and branding.
                     </p>
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                           <h3 className="font-bold text-green-900 mb-2"><FontAwesomeIcon icon={faChartLine} className="mr-2 w-12 h-12" /> Truth in Labeling</h3>
                           <p className="text-sm text-green-800">
                              Your brand name should not promise guaranteed returns. Names like "Doubler Money" or "Guaranteed Profit" are likely to be rejected by the Registrar as deceptive and by SEBI for misleading investors.
                           </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                           <h3 className="font-bold text-green-900 mb-2"><FontAwesomeIcon icon={faUserTie} className="mr-2 w-12 h-12" /> Adviser vs Advisor</h3>
                           <p className="text-sm text-green-800">
                              SEBI regulations specify the use of "Investment Adviser" (with an 'e'). While trademark law allows creative spellings, for regulated entities, aligning your trademark with your license category prevents regulatory friction.
                           </p>
                        </div>
                     </div>
                  </section>

                  <section id="insurance-branding" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                        Branding for Insurance Agents & Aggregators
                     </h2>
                     <p className="mb-6">
                        The insurance sector (Life, Health, General) is built on the concept of 'Indemnity'. Your trademark should convey protection and reliability.
                     </p>
                     <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                           <FontAwesomeIcon icon={faShieldAlt} className="text-[rgb(110,94,147)] w-6 h-6 mr-3 mt-1" />
                           <div>
                              <strong className="text-gray-900">Web Aggregators:</strong>
                              <p className="text-gray-600 text-sm">If you run a comparison site (like PolicyBazaar), you need Class 35 (Comparison Services) in addition to Class 36 (Insurance Info). This covers the "aggregation" aspect of your business.</p>
                           </div>
                        </li>
                        <li className="flex items-start">
                           <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-[rgb(110,94,147)] w-6 h-6 mr-3 mt-1" />
                           <div>
                              <strong className="text-gray-900">Corporate Agents:</strong>
                              <p className="text-gray-600 text-sm">Corporate agents often co-brand with insurers. We help draft "Co-existence Agreements" to ensure your brand doesn't get diluted when placed next to a giant insurer's logo.</p>
                           </div>
                        </li>
                     </ul>
                  </section>

                  <section id="legal-hurdles" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Beating the Odds: Handling Objections
                    </h2>
                    <p className="mb-6">
                      The Trademark Registry often objects to financial trademarks on the grounds that they are "Descriptive" (Section 9) or "Similar" to existing marks (Section 11).
                    </p>
                    <div className="space-y-6">
                       <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                          <h3 className="font-bold text-lg text-red-900 mb-2">Section 9: The "Descriptive" Hurdle</h3>
                          <p className="text-sm text-red-800">
                            <strong>Problem:</strong> You want to register "Secure Wealth". Registry says: "No, everyone should be allowed to use these words."
                          </p>
                          <p className="text-sm text-red-800 mt-2">
                            <strong>Solution:</strong> We prove "Secondary Meaning" - showing that through your extensive marketing and customer base, "Secure Wealth" has come to mean ONLY your company in the public eye.
                          </p>
                       </div>
                    </div>
                  </section>

                  <section id="case-studies" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                        Lessons from the Courtroom: Famous Financial Disputes
                     </h2>
                     <p className="mb-6">
                        The risks of trademark infringement in finance are real and costly. Here are two landmark cases that every financial brand founder should know.
                     </p>
                     
                     <div className="grid md:grid-cols-1 gap-6">
                        <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                           <div className="absolute top-0 right-0 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-bl-lg">PhonePe vs BharatPe</div>
                           <h3 className="text-xl font-bold text-gray-900 mb-2">The Battle for "Pe"</h3>
                           <p className="text-gray-700 mb-4 text-sm">
                              <strong>The Conflict:</strong> PhonePe sued BharatPe for using the suffix "Pe" (meaning 'Pay' in Hindi), claiming it had exclusive rights to it.
                           </p>
                           <p className="text-gray-700 mb-4 text-sm">
                              <strong>The Verdict:</strong> The Delhi High Court ruled that "Pe" is a descriptive, generic term for payment services and no single company can monopolize it.
                           </p>
                           <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900 italic">
                              <strong>Lesson:</strong> Don't build your brand identity solely on generic suffixes. Focus on the unique prefix (e.g., "Phone" or "Bharat" combined with valid logos).
                           </div>
                        </div>

                        <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all relative overflow-hidden">
                           <div className="absolute top-0 right-0 bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-bl-lg">Paytm Soundbox</div>
                           <h3 className="text-xl font-bold text-gray-900 mb-2">Non-Conventional Sound Marks</h3>
                           <p className="text-gray-700 mb-4 text-sm">
                              <strong>The Innovation:</strong> Paytm didn't just trademark its logo; it trademarked the specific notification sound of its Soundbox.
                           </p>
                           <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900 italic">
                              <strong>Lesson:</strong> In a crowded market, think beyond visual logos. Audio branding (Sound Marks) is the next frontier for trust.
                           </div>
                        </div>
                     </div>
                  </section>

                   <section id="documents-required" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Documentation Checklist
                     </h2>
                     <p className="mb-6">
                         Accuracy in documentation is vital to avoid administrative rejections.
                     </p>
                     <div className="grid md:grid-cols-2 gap-10">
                       <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                         <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                           <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                           Corporate Entities (Pvt Ltd / LLP)
                         </h3>
                         <ul className="space-y-4 text-gray-600">
                           <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation.</span></li>
                           <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Board Resolution.</span></li>
                           <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Udyam Registration (for fee waiver).</span></li>
                           <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Logo in High Resolution.</span></li>
                         </ul>
                       </div>
                       <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                         <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                           <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                           Individuals / Proprietors
                         </h3>
                         <ul className="space-y-4 text-gray-600">
                           <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>PAN & Aadhaar Card.</span></li>
                           <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Signed Form-48.</span></li>
                           <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>User Affidavit (if claiming prior use).</span></li>
                         </ul>
                       </div>
                     </div>
                  </section>

                  <section id="reviews" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                        Trusted by Financial Leaders
                     </h2>
                     <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((review, idx) => (
                          <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                             <div className="flex text-yellow-500 mb-4">
                               {[...Array(review.rating)].map((_, i) => (
                                 <FontAwesomeIcon key={i} icon={faAward} className="w-4 h-4 mr-1" />
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
                      Frequently Asked Questions
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
                  
                  {/* Final CTA */}
                  <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                     <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Legacy Today</h2>
                        <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                          In the world of finance, second place is often last. Secure your brand, protect your clients, and build a lasting legacy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                 Get Free Consultation
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
                 <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Check Name Availability</h3>
                 <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                   Launching a new fund, app, or firm? Ensure your name is safe to use. Get a comprehensive search report.
                 </p>
                 <Link href="/contact-us" className="block relative z-10">
                   <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                     Check Now
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
                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Sectors</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/trademark-for-business" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Business Registration</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Startup Filing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-for-legal-services" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Legal Services</span>
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
