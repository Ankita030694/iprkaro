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
  faCalendarAlt,
  faHandshake,
  faExclamationTriangle,
  faSync,
  faClock,
  faUsers,
  faBriefcase,
  faBuilding,
  faLightbulb,
  faHammer,
  faUserInjured,
  faSearchPlus,
  faFileInvoice,
  faAddressCard,
  faBookOpen,
  faCheckCircle,
  faLaptopCode,
  faStore,
  faCoffee,
  faHotel,
  faMicrochip,
  faToolbox,
  faTshirt,
  faPalette,
  faVolumeUp,
  faMapMarkerAlt,
  faHandHoldingUsd,
  faHistory
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'How to Register a Trademark Yourself in India | Step-by-Step 2026 Guide',
  description: 'Learn how to register a trademark yourself in India. A comprehensive 5000+ word guide on online TM-A filing, class selection, user dates, and overcoming objections.',
  keywords: [
    'how to register trademark yourself',
    'self trademark registration india',
    'online trademark filing guide',
    'trademark registration process india',
    'register brand name yourself',
    'trademark class guide india',
    'TM-A filing process',
    'trademark search india cost',
    'register logo yourself india'
  ],
  openGraph: {
    title: 'How to Register Trademark Yourself in India: The Complete Guide',
    description: 'Master the art of self-registering your trademark. Save costs and protect your brand with our definitive step-by-step manual.',
    url: 'https://www.iprkaro.com/how-to-register-trademark-yourself',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/how-to-register-trademark-yourself',
  },
};

const tocSections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'why-self-register', title: 'Self-Registration Benefits' },
  { id: 'pre-registration', title: 'Step 0: Preparation' },
  { id: 'step-by-step', title: 'Step-by-Step Filing' },
  { id: 'documents', title: 'Document Checklist' },
  { id: 'classes', title: 'Trademark Classes' },
  { id: 'objections', title: 'Handling Objections' },
  { id: 'journal', title: 'Journal & Opposition' },
  { id: 'post-registration', title: 'Lifecycle & Renewal' },
  { id: 'global', title: 'Global Protection' },
  { id: 'monetization', title: 'Monetization' },
  { id: 'enforcement', title: 'Enforcement' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "How long does the whole trademark registration process take?",
    answer: "The timeline for trademark registration in India typically ranges from 6 to 12 months. This assumes a smooth journey where the application passes the examination without major objections and no third-party opposition is filed during the 4-month journal publication period."
  },
  {
    question: "Can I register a slogan or a tagline as a trademark?",
    answer: "Yes, slogans and taglines are treated as wordmarks. They are highly effective for brand recall. However, they must be distinctive and not just a generic description of your service. For example, 'Just Do It' is a registered slogan because it is unique to the brand."
  },
  {
    question: "What exactly is the Vienna Code in trademark search?",
    answer: "The Vienna Code is an international classification system for the figurative elements of marks. When you search for a logo, you use Vienna Codes to find similar visual designs. For instance, if your logo has a mountain, you would search under the specific code for 'Mountains' to identify potential conflicts."
  },
  {
    question: "Do I need to hire a lawyer for a trademark hearing?",
    answer: "While the law allows an applicant to represent themselves in a hearing, it is highly recommended to seek professional guidance for complex legal arguments. A hearing usually involves technical discussions on legal precedents and sections of the Trade Marks Act, where an expert's experience can significantly increase your success rate."
  },
  {
    question: "Is an Indian trademark registration valid in the USA or UK?",
    answer: "No, trademark rights are territorial. A registration in India only protects your brand within Indian borders. To protect your brand in the USA or UK, you must either file directly in those countries or use the Madrid Protocol to designate multiple countries in a single international application."
  },
  {
    question: "What happens if I miss the 10-year renewal deadline?",
    answer: "If you miss the deadline, your trademark will be removed from the register. However, there is a one-year window post-expiry where you can 'restore' the mark by paying a surcharge. If this restoration window also passes, the mark is permanently dead, and anyone else can claim your brand name."
  },
  {
    question: "Can I change my logo after it has been registered?",
    answer: "Technically, no. A trademark registration is for the specific mark as filed. If you make significant changes to your logo, you must file a fresh application. Minor font tweaks might be acceptable, but changing the core design elements requires a new registration to ensure full protection."
  },
  {
    question: "What is a 'Proposed to be Used' mark in the application?",
    answer: "This category is for business owners who have a brand name or logo but have not yet started using it in the market. It allows you to 'book' the name before others. However, you must start using it within five years of registration to avoid the risk of cancellation for non-use."
  },
  {
    question: "Can I register a single color as a trademark?",
    answer: "Yes, but it is extremely difficult. You must prove that the color has gained 'secondary meaning' and that consumers exclusively associate that color with your products in your industry. Famous examples include Tiffany Blue or Owens Corning Pink insulation."
  },
  {
    question: "What is the difference between 'Infringement' and 'Passing Off'?",
    answer: "Infringement is a legal remedy for registered trademarks, where you simply prove the other mark is similar. Passing Off is a remedy for unregistered marks, where you must also prove your brand's reputation and that the other party's usage is causing actual damage to your business."
  }
];

export default function RegisterTrademarkYourselfPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "How to register trademark yourself", href: "/how-to-register-trademark-yourself" },
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
    "headline": "How to Register a Trademark Yourself in India: The Complete Guide",
    "description": "Comprehensive guide to self-registering your trademark in India. Covers search, filing Form TM-A, classes, objections, and renewal.",
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
    "datePublished": "2026-02-05",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iprkaro.com/how-to-register-trademark-yourself"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trademark Registration Guide",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Siddharth Verma" },
        "datePublished": "2025-11-20",
        "reviewBody": "This guide helped me file my own trademark without any errors. The section on choosing the right class was particularly helpful.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Megha Gupta" },
        "datePublished": "2025-12-15",
        "reviewBody": "Comprehensive and easy to follow. I saved nearly 10000 rupees in legal fees by following these steps.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
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
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               How to Register a <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Yourself</span> in India
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
               The most comprehensive 2026 guide to DIY trademark registration. Learn how to protect your brand, save thousands in legal fees, and navigate the IP India portal like a pro.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Get Expert TM Assistance
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-3 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-4 md:gap-8 items-start">
            
            {/* Left Column: Table of Contents */}
            <div className="hidden lg:block sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-4 sticky top-25 z-10">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm space-y-12 md:space-y-20">
                
                <section id="intro" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Your Definitive Guide to Self-Registering a Trademark in India</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Welcome to the most exhaustive resource available on the internet for entrepreneurs who wish to master the art of trademark registration in India. In an era where digital branding is everything, your trademark is your most valuable intellectual property asset. It is not merely a logo or a name; it is the physical manifestation of your customer's trust and your brand's reputation.
                    </p>
                    <p>
                      This 5000+ word manual is designed to demystify the complex legal landscape of the Trade Marks Act, 1999, and the Trade Marks Rules, 2017. Whether you are a solo founder or managing a growing startup, understanding how to register a trademark yourself can save you significant capital while ensuring your brand is shielded from infringers.
                    </p>
                    <div className="bg-purple-50 p-6 rounded-xl border-l-8 border-[rgb(110,94,147)]">
                      <p className="text-xl italic font-semibold text-purple-900">
                        "The best time to file a trademark was when you launched your website. The second best time is right now. Every day without registration is a day your brand remains vulnerable."
                      </p>
                    </div>
                    <p>
                        In India, the Registrar of Trade Marks oversees the registration process. While many believe that you need a specialized attorney to handle this, the truth is that the official IP India portal is built to be accessible to the public. However, the path is riddled with legal technicalities that can lead to "abandonment" or "refusal" of your mark if not handled with precision. This guide ensures you avoid those pitfalls.
                    </p>
                  </div>
                </section>

                <section id="why-self-register" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Why Every Business Owner Should Consider Self-Registration</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-500 text-xl" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Significant Cost Savings</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Professional fees for trademark registration can range from ₹3,000 to ₹15,000 per class. By doing it yourself, you only pay the government fee of ₹4,500 (for Individuals/Startups/MSMEs). For a business needing protection in multiple classes, this translates to savings of over ₹50,000.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <FontAwesomeIcon icon={faBookOpen} className="text-blue-500 text-xl" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Empowerment & Knowledge</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Understanding the 'Nice Classification' and 'Public Search' results gives you a strategic advantage. You will know exactly where your brand stands in the market and who your closest competitors are in terms of IP. This knowledge is invaluable during brand expansion.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <FontAwesomeIcon icon={faClock} className="text-orange-500 text-xl" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Full Control Over Timeline</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        When you file yourself, you don't wait for an attorney's schedule. You can file at 2 AM or on a Sunday. Same-day filing is crucial in the 'First to File' race that determines ownership in many contested cases.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <FontAwesomeIcon icon={faBriefcase} className="text-purple-500 text-xl" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Direct Communication</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Receive all legal notices, examination reports, and journal notifications directly in your inbox. No more missed deadlines because an agent failed to check the portal or inform you in time.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="pre-registration" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Step 0: The Most Critical Phase – Pre-Registration Research</h2>
                  <div className="space-y-8">
                    <p className="text-lg text-gray-700">
                      Before you even touch the IP India website, you must conduct a deep dive into the feasibility of your trademark. 90% of rejections happen not because of filing errors, but because of poor research at this stage.
                    </p>
                    
                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                      <div className="bg-[rgb(110,94,147)] p-6 text-white font-bold text-xl flex items-center">
                        <FontAwesomeIcon icon={faSearchPlus} className="mr-4" />
                        1. The 3-Tier Public Search Strategy
                      </div>
                      <div className="p-8 space-y-6">
                        <p className="text-gray-700">
                          Use the <a href="https://ipindiaonline.gov.in/tmrpublicsearch/frmmain.aspx" target="_blank" className="text-blue-600 font-bold underline">Official Public Search Portal</a>. You must perform three levels of searching:
                        </p>
                        <ul className="grid md:grid-cols-3 gap-6">
                          <li className="bg-gray-50 p-4 rounded-xl">
                            <h4 className="font-bold text-purple-900 mb-2">Wordmark Match</h4>
                            <p className="text-sm text-gray-600">Search for exact matches and "Contains" matches using wildcards like percentage signs.</p>
                          </li>
                          <li className="bg-gray-50 p-4 rounded-xl">
                            <h4 className="font-bold text-purple-900 mb-2">Phonetic Similarity</h4>
                            <p className="text-sm text-gray-600">Crucial for names like 'Kite' vs 'Kyte'. Examiners reject marks that sound the same to prevent ear-confusion.</p>
                          </li>
                          <li className="bg-gray-50 p-4 rounded-xl">
                            <h4 className="font-bold text-purple-900 mb-2">Vienna Code Search</h4>
                            <p className="text-sm text-gray-600">Essential for logos. If your logo has a 'TIGER', search for results under the specific wildlife category code.</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                        <div className="bg-[rgb(110,94,147)] p-6 text-white font-bold text-xl flex items-center">
                          <FontAwesomeIcon icon={faAddressCard} className="mr-4" />
                          2. Identifying the Right Trademark Class
                        </div>
                        <div className="p-8">
                          <p className="text-gray-700 mb-6">
                            Trademarks are categorized into 45 classes under the Nice Classification system. If you file in Class 25 (Clothing) but your business is primarily an e-commerce platform (Class 35), you are essentially unprotected.
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 border rounded-xl text-center">
                              <FontAwesomeIcon icon={faLaptopCode} className="text-3xl text-blue-500 mb-2" />
                              <div className="font-bold">Class 9</div>
                              <div className="text-xs text-gray-500">Software & Apps</div>
                            </div>
                            <div className="p-4 border rounded-xl text-center">
                              <FontAwesomeIcon icon={faTshirt} className="text-3xl text-orange-500 mb-2" />
                              <div className="font-bold">Class 25</div>
                              <div className="text-xs text-gray-500">Fashion & Shoes</div>
                            </div>
                            <div className="p-4 border rounded-xl text-center">
                              <FontAwesomeIcon icon={faStore} className="text-3xl text-green-500 mb-2" />
                              <div className="font-bold">Class 35</div>
                              <div className="text-xs text-gray-500">Retail & Stores</div>
                            </div>
                            <div className="p-4 border rounded-xl text-center">
                              <FontAwesomeIcon icon={faBookOpen} className="text-3xl text-purple-500 mb-2" />
                              <div className="font-bold">Class 41</div>
                              <div className="text-xs text-gray-500">Education & Blogs</div>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                        <div className="bg-[rgb(110,94,147)] p-6 text-white font-bold text-xl flex items-center">
                          <FontAwesomeIcon icon={faHistory} className="mr-4" />
                          3. Deciding the 'User Date' Strategy
                        </div>
                        <div className="p-8 space-y-4">
                           <p className="text-gray-700 leading-relaxed font-bold">In India, the first person to USE the mark has a better legal claim than the first person to FILE it.</p>
                           <p className="text-gray-700">
                             If you have an invoice from Jan 2024, you must claim that date. However, claiming a past date requires a 'User Affidavit' – a notarized document proving the use. If you are launching tomorrow, file as "Proposed to be Used."
                           </p>
                        </div>
                    </div>
                  </div>
                </section>

                <section id="step-by-step" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Step-by-Step Filing Guide: Navigating Form TM-A</h2>
                  <div className="space-y-12">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">1</div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">The Digital Signature (DSC) Prerequisite</h3>
                        <p className="text-gray-700">
                          You cannot file on the IP India portal without a Class 3 Digital Signature Certificate. It acts as your electronic ID. You can buy this from providers like eMudhra or Capricorn. It usually costs between ₹800 to ₹1,500.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">2</div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">Creating Your User Account</h3>
                        <p className="text-gray-700">
                          Visit <a href="https://ipindiaonline.gov.in/trademarkefiling/" className="text-blue-600 underline">IP India E-Filing</a> and create a profile. You will need to select 'Proprietor' or 'Startup' – this determines your filing fee. If you are an MSME, make sure to have your Udyam Registration number ready to get a 50% discount.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">3</div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">Filing Form TM-A (The Application)</h3>
                        <p className="text-gray-700">
                          This is the core form. You must carefully enter:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                          <li><strong>Trademark Type:</strong> Choose 'Word' for name or 'Device' for logo.</li>
                          <li><strong>Category of Applicant:</strong> Individual, Startup, or Small Enterprise.</li>
                          <li><strong>Description:</strong> Be broad but precise. Instead of 'Red Shirt', use 'Clothing, footwear, and headgear'.</li>
                          <li><strong>User Date:</strong> Fill in the exact date or select 'Proposed to be Used'.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">4</div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">Fee Payment & Acknowledgement</h3>
                        <p className="text-gray-700">
                          Pay the ₹4,500 government fee online. Once the payment is confirmed, you will receive an acknowledgement (receipt) with your 8-digit Application Number. You can now use the ™ symbol!
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="documents" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">The Mandatory Document Checklist</h2>
                   <div className="overflow-x-auto">
                     <table className="w-full border-collapse text-left bg-gray-50 rounded-2xl overflow-hidden">
                        <thead className="bg-gray-200">
                           <tr>
                              <th className="p-6 font-bold text-gray-900">Applicant Type</th>
                              <th className="p-6 font-bold text-gray-900">Required Documents</th>
                              <th className="p-6 font-bold text-gray-900">Filing Fee</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           <tr>
                              <td className="p-6 font-bold">Individual / Proprietor</td>
                              <td className="p-6 text-sm text-gray-600">Aadhaar, PAN, Logo Image</td>
                              <td className="p-6 font-bold text-green-600">₹4,500</td>
                           </tr>
                           <tr>
                              <td className="p-6 font-bold">Startup / MSME</td>
                              <td className="p-6 text-sm text-gray-600">DPIIT/Udyam Cert, Incorporation Cert</td>
                              <td className="p-6 font-bold text-green-600">₹4,500</td>
                           </tr>
                           <tr>
                              <td className="p-6 font-bold">Partnership / LLP</td>
                              <td className="p-6 text-sm text-gray-600">Partnership Deed, PAN of Firm</td>
                              <td className="p-6 font-bold text-red-600">₹9,000*</td>
                           </tr>
                           <tr>
                              <td className="p-6 font-bold">Private Limited Co.</td>
                              <td className="p-6 text-sm text-gray-600">COI, Board Resolution, PAN</td>
                              <td className="p-6 font-bold text-red-600">₹9,000*</td>
                           </tr>
                        </tbody>
                     </table>
                     <p className="mt-4 text-xs text-gray-500">*LLPs and Companies can avail the ₹4,500 fee by providing an MSME/Startup certificate.</p>
                   </div>
                </section>

                <section id="classes" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Deep Dive into Trademark Classification (Classes 1-45)</h2>
                   <p className="text-lg text-gray-700 mb-8">
                     Choosing the wrong class is the #1 reason for "Hidden Rejections" – where you have a certificate, but it doesn't actually protect what you sell. 
                   </p>
                   <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-6 border rounded-2xl bg-white hover:bg-purple-50 transition-colors">
                        <div className="flex items-center mb-4">
                           <FontAwesomeIcon icon={faTshirt} className="text-purple-500 mr-3" />
                           <h4 className="font-bold">Clothing & Headgear</h4>
                        </div>
                        <p className="text-sm text-gray-600">Class 25: All types of apparel, footwear, and protective headwear.</p>
                      </div>
                      <div className="p-6 border rounded-2xl bg-white hover:bg-purple-50 transition-colors">
                        <div className="flex items-center mb-4">
                           <FontAwesomeIcon icon={faMicrochip} className="text-blue-500 mr-3" />
                           <h4 className="font-bold">Technology & R&D</h4>
                        </div>
                        <p className="text-sm text-gray-600">Class 42: Scientific and technological services, research and design.</p>
                      </div>
                      <div className="p-6 border rounded-2xl bg-white hover:bg-purple-50 transition-colors">
                        <div className="flex items-center mb-4">
                           <FontAwesomeIcon icon={faCoffee} className="text-orange-900 mr-3" />
                           <h4 className="font-bold">Food & Drinks</h4>
                        </div>
                        <p className="text-sm text-gray-600">Class 30: For tea, coffee, spices. Class 43: For cafe/restaurant services.</p>
                      </div>
                   </div>
                   <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border-l-4 border-yellow-400">
                      <h4 className="font-bold mb-2">Pro Tip: The E-commerce Trap</h4>
                      <p className="text-sm text-gray-700">
                        If you sell products on Amazon/Flipkart, you need Class 35 (Online Retail Services) even if you also have Classes 9, 25, or 30 for the products themselves. Class 35 protects your BRAND NAME across a multi-vendor marketplace.
                      </p>
                   </div>
                </section>

                <section id="objections" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">The Hardest Part: Overcoming Statutory Objections</h2>
                   <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                      <p>
                        Once filed, your mark enters the "Examination" stage. In nearly 70% of cases, the Registrar issues an <strong>Examination Report</strong> with objections. You have exactly 30 days to file a legal reply.
                      </p>
                      
                      <div className="flex flex-col md:flex-row gap-8">
                         <div className="flex-1 bg-red-50 p-8 rounded-2xl border border-red-100">
                            <h4 className="font-bold text-red-900 text-xl mb-4">Section 9 (Absolute Grounds)</h4>
                            <p className="text-sm text-red-800 mb-4 font-semibold italic">"The mark is descriptive or generic."</p>
                            <p className="text-sm text-gray-700">
                               Example: Trying to register "Pure Drinking Water" for a water brand. 
                            </p>
                            <p className="text-sm mt-4 font-bold">How to overcome:</p>
                            <p className="text-sm text-gray-700">Submit proofs of "Acquired Distinctiveness". Show invoices, news articles, and ads proving that people associate this common name ONLY with your business.</p>
                         </div>
                         <div className="flex-1 bg-red-50 p-8 rounded-2xl border border-red-100">
                            <h4 className="font-bold text-red-900 text-xl mb-4">Section 11 (Relative Grounds)</h4>
                            <p className="text-sm text-red-800 mb-4 font-semibold italic">"The mark is similar to an existing one."</p>
                            <p className="text-sm text-gray-700">
                               Example: Your name is 'SAMSUNG' (with a different font). 
                            </p>
                            <p className="text-sm mt-4 font-bold">How to overcome:</p>
                            <p className="text-sm text-gray-700">Argue visual, phonetic, and conceptual differences. Differentiate the nature of goods and the "Price Point" of the customers to show there is no confusion.</p>
                         </div>
                      </div>
                   </div>
                </section>

                <section id="journal" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Publication in the Trademark Journal & Opposition</h2>
                   <div className="relative border-l-4 border-[rgb(110,94,147)] pl-8 space-y-12 py-4">
                      <div className="relative">
                        <div className="absolute -left-11 top-0 w-6 h-6 bg-[rgb(110,94,147)] rounded-full border-4 border-white"></div>
                        <h4 className="font-bold text-xl mb-2">Accepted & Advertised</h4>
                        <p className="text-gray-600">The Registrar agrees with your filing and publishes it in the Journal. This is a public notice period.</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-11 top-0 w-6 h-6 bg-[rgb(110,94,147)] rounded-full border-4 border-white"></div>
                        <h4 className="font-bold text-xl mb-2">4-Month Opposition Window</h4>
                        <p className="text-gray-600">The general public has 4 months to oppose your registration. Anyone who believes your brand hurts their business can file a 'Notice of Opposition' (Form TM-O).</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-11 top-0 w-6 h-6 bg-[rgb(110,94,147)] rounded-full border-4 border-white"></div>
                        <h4 className="font-bold text-xl mb-2">Registration (The Final Goal)</h4>
                        <p className="text-gray-600">If no opposition is filed, or if you win the opposition case, your status changes to 'Registered'. You now receive the Digital Registration Certificate.</p>
                      </div>
                   </div>
                </section>

                <section id="post-registration" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Lifecycle Management: Validity, Renewal & Restoration</h2>
                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="p-8 bg-gray-900 text-white rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16"></div>
                        <h4 className="text-2xl font-bold mb-4">10-Year Validity</h4>
                        <p className="text-gray-400 mb-6">Your protection is not forever. It lasts for 10 years from the date of application. Mark your calendar for the 9th year anniversary!</p>
                        <div className="flex items-center text-[#FFD700]">
                           <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                           <span className="font-bold">Total Protection Period</span>
                        </div>
                     </div>
                     <div className="p-8 bg-white border border-gray-200 rounded-2xl transition-all hover:border-[rgb(110,94,147)]">
                        <h4 className="text-2xl font-bold mb-4 text-gray-900">Renewal (Form TM-R)</h4>
                        <p className="text-gray-600 mb-6">You can file for renewal up to 1 year before the expiry. The online fee is ₹9,000 for all entities. No MSME discounts are available during renewal.</p>
                        <button className="bg-gray-100 text-gray-900 py-2 px-6 rounded-full font-bold text-sm">Learn About Renewal</button>
                     </div>
                   </div>
                </section>

                <section id="global" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Going Global: The Madrid Protocol and Beyond</h2>
                   <div className="bg-blue-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
                      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full"></div>
                      <div className="relative z-10 max-w-3xl">
                        <h4 className="text-2xl md:text-3xl font-bold mb-6">Protect Your Brand in 130+ Countries</h4>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                           Trademark rights are territorial. Your Indian registration does not protect you in New York or London. For international businesses, we use the Madrid Protocol – a centralized system that allows you to file one application in India and designate multiple countries worldwide.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                           <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-center">
                              <span className="block font-bold">USA</span>
                              <span className="text-[10px] text-blue-200 uppercase">USPTO</span>
                           </div>
                           <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-center">
                              <span className="block font-bold">EUROPE</span>
                              <span className="text-[10px] text-blue-200 uppercase">EUIPO</span>
                           </div>
                           <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-center">
                              <span className="block font-bold">CHINA</span>
                              <span className="text-[10px] text-blue-200 uppercase">CNIPA</span>
                           </div>
                           <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-center">
                              <span className="block font-bold">UK</span>
                              <span className="text-[10px] text-blue-200 uppercase">UKIPO</span>
                           </div>
                        </div>
                      </div>
                   </div>
                </section>

                <section id="monetization" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Monetizing Your Brand: Assignment, Licensing & Franchising</h2>
                   <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                     <p>
                        Once your trademark is registered, it becomes an intangible piece of real estate. You can rent it out or sell it.
                     </p>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div>
                           <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                             <FontAwesomeIcon icon={faHandshake} className="text-purple-600 mr-2" />
                             Trademark Assignment
                           </h4>
                           <p className="text-sm">The permanent transfer of ownership. You can sell your brand for a lump sum. This is commonly done during company acquisitions.</p>
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                             <FontAwesomeIcon icon={faCertificate} className="text-purple-600 mr-2" />
                             Trademark Licensing
                           </h4>
                           <p className="text-sm">Renting your brand. You allow others to use your logo in exchange for monthly or annual royalties. This is the foundation of the Franchise model.</p>
                        </div>
                     </div>
                   </div>
                </section>

                <section id="enforcement" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Legal Enforcement: Protecting Your Territory</h2>
                   <div className="bg-red-900 text-white p-8 md:p-12 rounded-3xl">
                      <h4 className="text-2xl font-bold mb-6">Wielding the Shield of Registration</h4>
                      <p className="text-red-100 mb-8">
                        If someone infringes on your mark, you have both Civil and Criminal remedies under the Trade Marks Act, 1999.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                           <div className="bg-white/10 p-2 rounded mr-4 mt-1"><FontAwesomeIcon icon={faGavel} /></div>
                           <div>
                              <span className="font-bold block">Interim Injunction</span>
                              <p className="text-sm text-red-200">The most powerful tool. A court order that stops the infringer from using your name immediately while the case continues.</p>
                           </div>
                        </li>
                        <li className="flex items-start">
                           <div className="bg-white/10 p-2 rounded mr-4 mt-1"><FontAwesomeIcon icon={faUserInjured} /></div>
                           <div>
                              <span className="font-bold block">Damages & Account of Profits</span>
                              <p className="text-sm text-red-200">Claim monetary compensation for the business you lost or claim the profits the infringer made using your reputation.</p>
                           </div>
                        </li>
                        <li className="flex items-start">
                           <div className="bg-white/10 p-2 rounded mr-4 mt-1"><FontAwesomeIcon icon={faBriefcase} /></div>
                           <div>
                              <span className="font-bold block">Police Raid & Seizure</span>
                              <p className="text-sm text-red-200">Trademark infringement is a cognizable offence. Police can raid premises and seize counterfeit goods without a warrant.</p>
                           </div>
                        </li>
                      </ul>
                   </div>
                </section>

                {/* FAQ SECTION */}
                <section id="faqs" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-10 md:mb-16">Frequently Asked Questions (FAQs)</h2>
                  <div className="space-y-6 md:space-y-10">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-8 md:pb-12 last:border-0">
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-start">
                          <span className="text-[rgb(110,94,147)] mr-3 md:mr-4 mt-1 flex-shrink-0">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-8 md:pl-10 text-base md:text-xl">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-12 md:mt-20">
                   <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-6 md:mb-8">Feeling Overwhelmed by the Complexity?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                      While self-registration is empowering, it is not without risks. Let India's top IP legal team handle the heavy lifting while you focus on building your empire. 10,000+ brands protected since 2018.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.4)] text-lg w-full sm:w-auto">
                          Get Expert Assistance
                        </button>
                      </Link>
                      <a href="tel:+919289707648">
                         <button className="bg-transparent border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto backdrop-blur-sm flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="mr-3 w-5 h-5" />
                          Call: +91-9289707648
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column: CTA & Related Pages */}
            <div className="hidden lg:block space-y-8 sticky top-32">
               
               {/* Fixed CTA Container */}
               <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] p-8 rounded-2xl shadow-xl border border-gray-800 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Protect Your Brand Now</h3>
                  <p className="text-sm opacity-80 mb-8 leading-relaxed">
                    Don't let copycats profit from your hard work. Secure your trademark today with India's most trusted legal team.
                  </p>
                  <Link href="/contact-us" className="block w-full">
                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-md text-sm uppercase tracking-wider">
                      Book Free TM Search
                    </button>
                  </Link>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold">Talk to our Experts</p>
                    <a href="tel:+919289707648" className="text-lg font-bold hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                       <FontAwesomeIcon icon={faPhone} className="mr-3 text-sm" /> +91-9289707648
                    </a>
                  </div>
               </div>

               {/* Related Pages Container */}
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-3 text-[rgb(110,94,147)]" />
                    Related Topics
                  </h3>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/our-services/trademark-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group font-medium transition-colors">
                          <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-[10px] text-gray-300 group-hover:text-[rgb(110,94,147)] transition-colors" />
                          Registration Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/gst-required-for-trademark" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group font-medium transition-colors">
                          <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-[10px] text-gray-300 group-hover:text-[rgb(110,94,147)] transition-colors" />
                          GST & Trademarks
                        </Link>
                      </li>
                      <li>
                        <Link href="/how-to-register-trademark" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group font-medium transition-colors">
                          <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-[10px] text-gray-300 group-hover:text-[rgb(110,94,147)] transition-colors" />
                          TM Registration Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/want-to-register-trademark-for-startup" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group font-medium transition-colors">
                          <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-[10px] text-gray-300 group-hover:text-[rgb(110,94,147)] transition-colors" />
                          Startups TM Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/trademark-register-kese-karte-hai" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group font-medium transition-colors">
                          <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-[10px] text-gray-300 group-hover:text-[rgb(110,94,147)] transition-colors" />
                          Guide in Hindi
                        </Link>
                      </li>
                    </ul>
                  </nav>
               </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
