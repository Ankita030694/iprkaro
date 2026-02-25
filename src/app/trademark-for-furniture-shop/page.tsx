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
  faCouch,
  faChair,
  faBed,
  faWarehouse,
  faPaintBrush,
  faStar,
  faTruckLoading,
  faStore
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark Registration for Furniture Shop in India',
  description: 'Complete guide to trademark registration for furniture businesses, showrooms, and carpenters in India. Secure your Class 20 & 35 brand identity today. Expert legal filing.',
  keywords: [
    'trademark for furniture shop',
    'furniture brand registration india',
    'trademark class 20',
    'furniture logo registration',
    'brand protection for furniture business',
    'class 35 for furniture retail',
    'trademark for interior design',
    'online trademark filing furniture',
    'protect furniture designs',
    'couch and sofa trademark'
  ],
  openGraph: {
    title: 'Secure Your Furniture Brand Identity | Expert Trademark Registration',
    description: 'Don\'t let copycats steal your furniture designs and brand name. File your Class 20 trademark application today with India\'s top IP experts.',
    url: 'https://www.iprkaro.com/trademark-for-furniture-shop',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-for-furniture-shop',
  },
};

const tocSections = [
  { id: 'why-register-furniture-trademark', title: 'Why Register?' },
  { id: 'anatomy-furniture-brand', title: 'What to Protect?' },
  { id: 'trademark-classes-furniture', title: 'Class 20 & More' },
  { id: 'registration-process-detailed', title: '5-Step Process' },
  { id: 'documentation-requirements', title: 'Documents Needed' },
  { id: 'legal-hurdles-objections', title: 'Handling Objections' },
  { id: 'trade-dress-designs', title: 'Designs vs Trademarks' },
  { id: 'enforcement-and-litigation', title: 'Stopping Copycats' },
  { id: 'global-protection', title: 'International Expansion' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "What is the trademark class for a furniture shop?",
    answer: "The primary class for furniture products is Class 20. This covers sofas, beds, chairs, mirrors, and frames. However, if you have a showroom or retail store where you sell these items, you must also register under Class 35 for retail and wholesale services. Many furniture businesses need a multi-class application."
  },
  {
    question: "Can I trademark a specific furniture design?",
    answer: "A trademark protects the 'Brand Name' and 'Logo'. The physical shape or aesthetic design of a piece of furniture is better protected under 'Design Registration' (The Designs Act, 2000). However, if a shape is incredibly unique and has become a brand identifier (like the shape of a Coca-Cola bottle), it might be eligible for a 'Shape Trademark', but this is rare and difficult to prove."
  },
  {
    question: "I am an online furniture seller (e.g., on Pepperfry/Amazon). Do I need a trademark?",
    answer: "Yes, absolutely. Online platforms like Amazon Brand Registry require a registered trademark to give you control over your product listings. Without it, anyone can map your ASINs, sell counterfeit versions of your furniture, and destroy your ratings."
  },
  {
    question: "How long does the registration process take?",
    answer: "The process typically takes 12-18 months in India if there are no legal hurdles. However, you can start using the ™ symbol usually within 24 hours of filing the application (Form TM-A)."
  },
  {
    question: "What if my furniture brand name is descriptive, like 'Best Teak Wood'?",
    answer: "Descriptive names face scrutiny under Section 9 of the Trade Marks Act. You cannot monopolize common words describing the quality or material. To register such a name, we must prove 'Acquired Distinctiveness' through long-term usage and market reputation."
  },
  {
    question: "Does a trademark protect my furniture brand globally?",
    answer: "No, trademark rights are territorial. Your Indian registration is valid only within India. To protect your brand in export markets like the USA or Dubai, you need to file under the Madrid Protocol or file separate national applications."
  },
  {
    question: "What is the penalty for someone copying my furniture brand logo?",
    answer: "Trademark infringement is a cognizable offence. You can file a civil suit for injunction (stopping them) and damages (compensation). Criminal remedies include imprisonment from 6 months to 3 years and fines up to ₹2 Lakhs."
  },
  {
    question: "Can I sell my furniture trademark later?",
    answer: "Yes, a trademark is an intangible asset. You can sell (assign) it to another company for a lump sum, or license it to other manufacturers for a royalty fee. This 'Assignment' needs to be recorded with the Registry."
  },
  {
    question: "Do I need a company to register a trademark?",
    answer: "No. You can register a trademark as an Individual or Sole Proprietor. In fact, individuals get a 50% concession on government fees (₹4,500 instead of ₹9,000)."
  },
  {
    question: "What happens if I don't renew my trademark?",
    answer: "A trademark is valid for 10 years. If not renewed within the deadline (or the grace period), it is removed from the register. Once removed, your brand name becomes public property, and anyone else can register it."
  }
];

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Owner, Urban Woodworks",
    text: "IPR Karo guided us perfectly on the Class 20 vs Class 35 confusion. We secured both and now our brand is safe on Amazon too.",
    rating: 5
  },
  {
    name: "Sana Khan",
    role: "Interior Designer & Retailer",
    text: "Fastest filing service! I got my application number in 4 hours. The team is very knowledgeable about the furniture industry's specific needs.",
    rating: 5
  },
  {
    name: "Rajesh Verma",
    role: "CEO, Verma Teak House",
    text: "We faced an objection because of a similar name. Their legal team drafted a brilliant reply and got our mark accepted without a hearing.",
    rating: 5
  }
];

export default function TrademarkFurnitureShopPage() {
  const breadcrumbItems = [
    { label: "Trademark for Furniture Shop", href: "/trademark-for-furniture-shop" },
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
    "headline": "Trademark Registration for Furniture Business in India",
    "description": "Comprehensive guide on protecting your furniture brand. Learn about Class 20, Class 35, design protection, and legal strategies for stopping copycats.",
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
        "name": "Trademark for Furniture Shop",
        "item": "https://www.iprkaro.com/trademark-for-furniture-shop"
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
        "name": "Trademark Registration for Furniture Shops",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "840"
        },
        "review": reviews.map(review => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": review.name },
          "reviewRating": { "@type": "Rating", "ratingValue": review.rating.toString() },
          "reviewBody": review.text
        }))
      })}} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white tracking-tight">
               Crafting Legacies: <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Trademark Registration for Furniture Brands
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               Your designs define your brand. Don't let cheap imitations dilute your craftsmanship. Secure your furniture shop's name and logo with India's most trusted IP legal team. 100% Online process, covering Class 20 & 35.
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
                  
                  <section id="why-register-furniture-trademark" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Structure and Stability: Why Your Furniture Brand Needs Protection
                    </h2>
                    <p className="mb-6">
                      The Indian furniture market is booming, driven by a rising middle class, rapid urbanization, and a boom in real estate. From bespoke woodworking shops in Jodhpur to modern modular furniture startups in Bangalore, the industry is more competitive than ever. In this crowded marketplace, your <strong>Brand Name</strong> is your most critical asset. It represents the quality of your wood, the durability of your joinery, and the comfort of your upholstery.
                    </p>
                    <p className="mb-6">
                      However, the furniture sector is heavily plagued by unorganized players and copycats. It is common to see local manufacturers replicating the designs of successful brands and even mimicking their names to confuse customers. <strong>Trademark Registration</strong> is the only legal fortress that protects your business identity. Without a registered trademark, you are vulnerable. If a competitor opens a shop with a similar name next door, or lists inferior products under your name on Amazon, you have little legal recourse without a registration certificate.
                    </p>
                    <div className="bg-amber-50 border-l-8 border-amber-600 p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-amber-900 italic font-medium">
                        "In furniture, reputation is everything. A trademark ensures that the reputation you build—one satisfied customer at a time—remains exclusively yours."
                      </p>
                    </div>
                    <p className="mb-6">
                      Moreover, with the shift to online sales (e-commerce), intellectual property rights have become the gatekeepers. Platforms like Flipkart, Amazon, and Myntra have strict policies. They give preferential treatment to registered brands (like Amazon Brand Registry) and actively remove infringing listings. If you want to scale your furniture business online, trademark registration is not optional; it is a prerequisite.
                    </p>
                  </section>

                  <section id="anatomy-furniture-brand" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      The Blueprint of Protection: What Can a Furniture Shop Trademark?
                    </h2>
                    <p className="mb-8">
                      When we talk about "Trademarks", most people think of just the logo. But for a furniture business, the scope of protection under the Trade Marks Act, 1999, is much broader. You can secure various elements that define your brand experience.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faStore} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Brand Name (Word Mark)</h3>
                        <p className="text-sm leading-relaxed">The name of your shop or brand (e.g., "Pepperfry", "Urban Ladder"). Protecting the word mark gives you the strongest protection, covering the name in any font or style.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faCouch} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Logo (Device Mark)</h3>
                        <p className="text-sm leading-relaxed">Your visual symbol. For furniture brands, this often includes stylized icons of chairs, houses, or abstract wood grain patterns. This prevents visual copycats.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faPaintBrush} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Product Series Names</h3>
                        <p className="text-sm leading-relaxed">If you have a popular collection (e.g., "The Royal Heritage Collection" or "SleepMax Series"), you can trademark these specific sub-brand names to prevent others from using them.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faStar} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Slogans & Taglines</h3>
                        <p className="text-sm leading-relaxed">Catchy phrases like "Comfort Redefined" or "Wood that Lasts Forever" can be registered if they are distinctive and intimately associated with your brand.</p>
                      </div>
                    </div>
                  </section>

                  <section id="trademark-classes-furniture" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Classification Decoded: Class 20 vs Class 35
                    </h2>
                    <p className="mb-6">
                      One of the most common mistakes furniture business owners make is filing in the wrong class. The Nice Classification system is specific, and choosing the right class is critical for enforcement. For a typical furniture business, a single class might not be enough.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="bg-white border-2 border-[rgb(110,94,147)] p-8 rounded-3xl shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[rgb(110,94,147)] text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Primary Class</div>
                        <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                          <FontAwesomeIcon icon={faChair} className="w-12 h-12 mr-3" /> Class 20
                        </h3>
                        <p className="mb-2 font-semibold text-gray-800">The "Product" Class</p>
                        <p className="text-gray-600 mb-4">
                          This is the core class for furniture. It covers the goods themselves.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Furniture (tables, chairs, sofas)</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Mirrors and Picture Frames</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Mattresses and Pillows</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Bamboo/Cane/Wicker products</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Office Furniture</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Plastic storage containers</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm relative">
                         <div className="absolute top-0 right-0 bg-gray-600 text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Retail Service</div>
                         <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faStore} className="w-12 h-12 mr-3 text-gray-600" /> Class 35
                        </h3>
                        <p className="mb-2 font-semibold text-gray-800">The "Service" Class</p>
                        <p className="text-gray-600 mb-4">
                          If you have a **Store**, **Showroom**, or **E-commerce Website** where you sell furniture (even if you manufacture it), you need Class 35. It protects the service of bringing goods together for the benefit of others to purchase.
                        </p>
                        <p className="text-sm italic text-gray-500">
                          Example: "IKEA" is registered in Class 20 (for the furniture) AND Class 35 (for the retail store service).
                        </p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm relative">
                         <div className="absolute top-0 right-0 bg-gray-600 text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Textiles</div>
                         <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faCouch} className="mr-3 text-gray-600 w-12 h-12" /> Class 24
                        </h3>
                        <p className="mb-2 font-semibold text-gray-800">The "Fabrics" Class</p>
                        <p className="text-gray-600">
                          If you also sell upholstery fabrics, curtains, bed covers, blankets, or cushion covers properly, you might need to add Class 24 to your portfolio.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="registration-process-detailed" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                      Seamless Registration Process
                    </h2>
                    <div className="relative space-y-12">
                       {/* Line connecting steps (Desktop) */}
                       <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                       {/* Step 1 */}
                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: Conflict Check (Search)</h3>
                             <p className="text-base text-gray-600 mb-4">
                                We perform a deep search in Class 20 and 35. We look for phonetically similar names (e.g., "Woody" vs "Woodie") to ensure your application doesn't get rejected later. A clear search report is the foundation of a successful trademark.
                             </p>
                          </div>
                       </div>

                       {/* Step 2 */}
                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faFileContract} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: Filing Application (TM-A)</h3>
                             <p className="text-base text-gray-600 mb-4">
                                We draft the application carefully, ensuring the "Goods Description" is comprehensive (e.g., listing "Sofas, Modular Kitchens, Wardrobes" specifically). Once filed, you get a TM Application Number immediately. You can now use the ™ symbol.
                             </p>
                          </div>
                       </div>

                       {/* Step 3 */}
                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faGavel} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Examination & Publication</h3>
                             <p className="text-base text-gray-600 mb-4">
                                The Registrar examines the mark. If unique, it gets "Accepted & Advertised". If they have questions, they issue an objection. Our lawyers handle these objections by filing a legal reply (Examination Response). Once advertised, it stays open for opposition for 4 months.
                             </p>
                          </div>
                       </div>
                    </div>
                  </section>

                  <section id="documentation-requirements" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Documentation: Getting it Right
                    </h2>
                    <p className="mb-8">
                      To file your trademark application, the documents required depend on your entity type.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                          Individuals / Proprietors
                        </h3>
                        <ul className="space-y-4 text-gray-600">
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>PAN Card & Aadhaar Card.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>MSME/Udyam Certificate (Optional, but recommended).</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Logo file (JPEG/PNG).</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Signed Form-48 (Power of Attorney).</span></li>
                        </ul>
                      </div>
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                          Companies / LLPs
                        </h3>
                        <ul className="space-y-4 text-gray-600">
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Incorporation Certificate (COI).</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Udyam Registration (for 50% govt fee waiver).</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Board Resolution.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>User Date Evidence (Invoices/Bills).</span></li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="legal-hurdles-objections" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Beating the Odds: Handling Objections
                    </h2>
                    <p className="mb-6">
                      The Trademark Registry is strict. In the furniture sector, objections are common because many businesses use generic names or copy trends.
                    </p>
                    <div className="space-y-6">
                       <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                          <h3 className="font-bold text-lg text-red-900 mb-2">Objection 1: Descriptive Marks (Section 9)</h3>
                          <p className="text-sm text-red-800">
                            <strong>Problem:</strong> You try to register "Luxury Sofas" or "Teak House". The Registry says these are descriptive of the goods.
                          </p>
                          <p className="text-sm text-red-800 mt-2">
                            <strong>Solution:</strong> We file a reply proving "Secondary Meaning". We show sales figures and ads to prove that customers identify "Teak House" specifically with YOU, not just any teak wood seller.
                          </p>
                       </div>
                       <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                          <h3 className="font-bold text-lg text-orange-900 mb-2">Objection 2: Similar Marks (Section 11)</h3>
                          <p className="text-sm text-orange-800">
                            <strong>Problem:</strong> You apply for "Urban Wood". There is already a registered mark "Urban Woods".
                          </p>
                          <p className="text-sm text-orange-800 mt-2">
                            <strong>Solution:</strong> We distinguish the marks. We argue on visual differences (logos are different), goods differences (maybe they sell raw wood, you sell tables), and customer base. We fight to prove "No Likelihood of Confusion".
                          </p>
                       </div>
                    </div>
                  </section>

                   <section id="trade-dress-designs" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Beyond Copyright: Trade Dress & Design Protection
                     </h2>
                     <p className="mb-6">
                         For furniture designers, a common confusion is between Trademark, Copyright, and Design Registration. A trademark protects the *logo* stamped on the chair. But what if you want to protect the *shape* of the chair itself?
                     </p>
                     <p className="mb-6">
                         This is where <strong>Industrial Design Registration</strong> comes in. Under the Designs Act, 2000, you can protect the aesthetic shape, pattern, and configuration of your furniture. This prevents others from manufacturing a chair that looks exactly like yours.
                     </p>
                     <p className="mb-6">
                         However, in rare cases, a product shape can become a trademark. This is called verified <strong>Trade Dress</strong>. If the shape of your furniture is so unique that customers recognize the brand just by the silhouette (like the Eames Lounge Chair), it can function as a trademark. This is a powerful, perpetual right, unlike copyright or design patents which expire. IPR Karo advises high-end furniture studios on building a portfolio that mixes Trademarks, Designs, and Copyrights for total protection.
                     </p>
                  </section>

                  <section id="enforcement-and-litigation" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Stopping the Copycats: Enforcement Strategies
                     </h2>
                     <p className="mb-6">
                         Getting the certificate is just step one. Using it to stop infringers is step two. In the furniture industry, infringement usually happens in two ways:
                     </p>
                     <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                        <li><strong>Counterfeits:</strong> Local workshops making cheap replicas and putting your brand sticker on them.</li>
                        <li><strong>Look-alikes:</strong> Competitors using a confusingly similar logo (e.g., using a similar tree icon and font) to ride on your goodwill.</li>
                     </ul>
                     <p className="mb-6">
                         With a registered trademark, you can send a <strong>Cease and Desist Notice</strong>. This legal warning is often enough to scare off small infringers. If they persist, you can file a suit for infringement. Indian courts are increasingly pro-brand owner. You can get an "Anton Piller Order" allowing court commissioners to raid the infringer's warehouse and seize fake goods without prior warning.
                     </p>
                  </section>

                  <section id="global-protection" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Exporting Furniture? Go Global with Madrid Protocol
                     </h2>
                     <p className="mb-6">
                         India is a major exporter of wooden and handicraft furniture to the US, Europe, and Middle East. If you are an exporter, your Indian trademark does not protect you in New York or London.
                     </p>
                     <p className="mb-6">
                         To protect your brand abroad, you should use the <strong>Madrid Protocol</strong> system. Administered by WIPO, it allows you to file a single application from India and select multiple countries (like USA, UK, Australia) for protection. This saves you the huge cost of hiring separate lawyers in every country. IPR Karo specializes in these international filings for Indian exporters, ensuring your brand travels as far as your shipments do.
                     </p>
                  </section>

                  <section id="reviews" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                        Trusted by Furniture Brands
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
                          Don't let your brand name become public property. Start your trademark application now and get Class 20 protection.
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
                   Before printing your catalogs, check if your brand name is available. Get a **Free Search Report**.
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
                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Similar Industries</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/trademark-for-restaurant" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Restaurants</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-for-clothing-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Clothing Brands</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-for-jewellery-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Jewellery</span>
                    </Link>
                  </li>
                   <li>
                    <Link href="/trademark-for-toys-sports-services" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Toys & Sports</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Startup Filing</span>
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
