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
  faRocket, 
  faMoneyBillWave, 
  faCertificate, 
  faPhone,
  faChevronRight,
  faLightbulb,
  faScaleBalanced,
  faHandshakeAngle,
  faExclamationCircle,
  faLandmark,
  faBriefcase,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Types of Trademark Classes in India | Complete Guide (Classes 1-45)',
  description: 'Understand the 45 types of trademark classes in India. Comprehensive list of goods and service classes for SEO-optimized trademark registration. Protect your brand correctly.',
  keywords: [
    'types of trademark classes',
    'trademark classification india',
    'nice classification system',
    'trademark goods classes',
    'trademark service classes',
    'trademark class list',
    'brand registration classes',
    'consequences of not paying emi',
    'trademark 45 classes',
    'tm class finder'
  ],
  alternates: {
    canonical: 'https://www.iprkaro.com/types-of-trademark-classes',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'why-classification-matters', title: 'Why Classification Matters' },
  { id: 'nice-classification-overview', title: 'Nice Classification' },
  { id: 'goods-classes-1-34', title: 'Goods Classes (1-34)' },
  { id: 'service-classes-35-45', title: 'Service Classes (35-45)' },
  { id: 'business-case-studies', title: 'Sectoral Case Studies' },
  { id: 'international-trademark-protection', title: 'International Protection' },
  { id: 'strategic-trademark-management', title: 'Strategic Risk Mitigation' },
  { id: 'choosing-correct-class', title: 'Choice of Right Class' },
  { id: 'multi-class-filing', title: 'Multi-Class Filing' },
  { id: 'common-mistakes', title: 'Common Mistakes' },
  { id: 'class-finder-tools', title: 'Class Finder Tools' },
  { id: 'client-success-stories', title: 'Success Stories' },
  { id: 'emi-consequences-business', title: 'EMI & Business Risks' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "What are the types of trademark classes?",
    answer: "There are 45 types of trademark classes based on the International Nice Classification system. They are divided into two main categories: Goods (Classes 1 to 34) and Services (Classes 35 to 45). Selecting the correct class is vital because your legal protection is primarily bound to the specific categories you choose during the application phase."
  },
  {
    question: "How do I find my trademark class?",
    answer: "You can find your trademark class by identifying whether your business provides a physical product (goods) or a professional activity (services), and then matching your specific offering with the descriptions in the Nice Classification list."
  },
  {
    question: "What is Nice Classification in trademarks?",
    answer: "The Nice Classification is an international standard used for the classification of goods and services for the purposes of registering trademarks. It was established by the Nice Agreement in 1957."
  },
  {
    question: "Can I register a trademark in multiple classes?",
    answer: "Yes, businesses often register in multiple classes if their trademark covers both goods and services or multiple types of either. This is called a multi-class application."
  },
  {
    question: "What happens if I choose the wrong trademark class?",
    answer: "Choosing the wrong class can lead to an examination objection, rejection of your application, or legal vulnerability if a competitor uses your mark in the correct class."
  },
  {
    question: "Is class 35 mandatory for all retail brands?",
    answer: "Class 35 covers advertising and business management. It is highly recommended for retail stores and e-commerce platforms, even if the goods sold are registered in other classes."
  },
  {
    question: "What is the consequence of not paying EMIs for a business?",
    answer: "Late payments can lead to a drop in CIBIL score, high penalties, and the loan being classified as an NPA, which can severely impact a business's ability to secure future intellectual property funding."
  },
  {
    question: "Does the class affect the trademark registration fee?",
    answer: "Yes, the government filing fee for trademark registration is charged per class per application. Higher number of classes lead to higher total filing fees."
  },
  {
    question: "Can I add more classes after filing?",
    answer: "No, you cannot add classes to an existing application after it has been filed with the trademark registry. If you realize you missed a category, you must file a fresh application for those additional classes, which will have its own application number and priority date."
  },
  {
    question: "How long is a trademark class selection valid?",
    answer: "The selection is valid as long as the trademark registration remains active, which is ten years from the filing date, renewable indefinitely."
  }
];

export default function TrademarkClassesPage() {
  const breadcrumbItems = [
    { label: "Types of Trademark Classes", href: "/types-of-trademark-classes" },
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
        "name": "Types of Trademark Classes",
        "item": "https://www.iprkaro.com/types-of-trademark-classes"
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
    "headline": "Types of Trademark Classes: The Definitive Guide for 2024",
    "description": "A comprehensive deep dive into the 45 trademark classes in India. Learn how to classify your brand correctly to ensure maximum legal protection.",
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

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Classification Service",
        "image": "https://www.iprkaro.com/logo.png",
        "description": "Expert assistance in identifying and filing trademarks in correct classes.",
        "brand": {
          "@type": "Brand",
          "name": "IPR Karo"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2100"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Goel" },
            "datePublished": "2024-03-01",
            "reviewBody": "Extremely detailed guide. Their team helped me realize I needed 3 classes instead of just 1. Great legal foresight.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      })}} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               Mastering the <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>45 Types of Trademark Classes</span> for Ultimate Brand Power
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
               The accuracy of your trademark classification determines the strength of your legal protection. Dive into our comprehensive guide of all 45 classes to secure your business assets today. Expertly curated for Indian startups and established corporations.
             </p>
             <Link href="/contact-us">
                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg text-center">
                  Get Free Class Consultation
                </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-3 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 items-start mt-8">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-4 sticky top-[72px] z-20">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm space-y-8 md:space-y-16">
              
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                
                <section id="introduction" className="mb-20 scroll-mt-28">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faLightbulb} className="text-[#6E5E93] mr-4 w-10 h-10 md:w-12 md:h-12" />
                    Introduction to Trademark Classes in India
                  </h2>
                  <p className="mb-6">
                    In the dynamic landscape of Indian commerce, a brand is more than just a name. It represents the goodwill, quality, and identity of a business. To provide a structured legal framework for brand protection, the Indian Trade Marks Act, 1999, follows an international standard known as the Nice Classification. This system categorizes different types of goods and services into 45 distinct classes. Understanding these <strong>types of trademark classes</strong> is the very first step toward a successful registration journey.
                  </p>
                  <p className="mb-6">
                    Whether you are an entrepreneur launching a new startup or a seasoned business owner expanding your horizons, defining your niche within these classes is critical. A trademark registered in the wrong category is often as good as having no registration at all. It leaves you vulnerable to legal challenges and limits your ability to stop competitors from encroaching on your brand territory. In this definitive guide, we will explore every single class in detail, providing you with the clarity needed to safeguard your intellectual property.
                  </p>
                  <div className="bg-gradient-to-r from-[#6E5E93]/10 to-transparent p-6 rounded-2xl border-l-4 border-[#6E5E93] my-10">
                    <p className="text-[#160049] font-medium italic">
                      "A trademark is the most valuable intangible asset a company can own. Its core value lies in its exclusivity, which is strictly defined by the classes under which it is registered."
                    </p>
                  </div>
                </section>

                <section id="why-classification-matters" className="mb-20 scroll-mt-28">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faScaleBalanced} className="text-[#6E5E93] mr-4 w-10 h-10 md:w-12 md:h-12" />
                    Why Proper Classification Matters
                  </h2>
                  <p className="mb-6">
                    Why do we need 45 different classes? Imagine a world where a registration for "Royal" in the category of automobiles prevents someone else from using "Royal" for a bakery. This would lead to a monopoly on common words across unrelated industries. The classification system ensures that protection is targeted and fair. It allows businesses in different sectors to coexist while protecting consumers from confusion.
                  </p>
                  <p className="mb-6">
                    Proper classification is essential for three primary reasons. First, it defines the scope of your legal rights. Your exclusive right to use the mark is generally limited to the goods or services specified in your application. Second, it facilitates building a cleaner database. Without classes, the trademark registry would be a chaotic list of names with no context. Third, it helps in conducting effective trademark searches. Before filing, you must check if a similar mark already exists in your specific class.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 my-12">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                      <h3 className="font-bold text-[#160049] mb-3">Legal Enforceability</h3>
                      <p className="text-sm">Stop infringers effectively within your specific industry without overstepping legal boundaries.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                      <h3 className="font-bold text-[#160049] mb-3">Avoid Rejection</h3>
                      <p className="text-sm">A significant number of trademark objections are raised due to incorrect class selection or vague descriptions.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                      <h3 className="font-bold text-[#160049] mb-3">Cost Efficiency</h3>
                      <p className="text-sm">Avoid wasting government fees on unnecessary classes or being forced to refile from scratch.</p>
                    </div>
                  </div>
                </section>

                <section id="nice-classification-overview" className="mb-20 scroll-mt-28">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-[#6E5E93] mr-4 w-10 h-10 md:w-12 md:h-12" />
                    The Nice Classification System: A Global Standard
                  </h2>
                  <p className="mb-6">
                    India is a signatory to the Nice Agreement, which established the Nice Classification (NCL). This system is revised periodically by a committee of experts from the World Intellectual Property Organization (WIPO). As of today, the classification consists of 34 classes for goods and 11 classes for services. This globalization of trademark standards means that a brand owner in India follows the same fundamental categories as a brand owner in the USA or Japan, making international expansion much smoother.
                  </p>
                  <p className="mb-6">
                    The classification is organized by "Class Headers" which provide a general overview of what each class includes. However, these headers are not exhaustive. Below each header, there are thousands of specific items. When filing your application, you must be precise. Using terms that are too broad might invite a "Requirement for Clarification" from the trademark examiner, delaying your registration by several months.
                  </p>
                </section>

                <section id="goods-classes-1-34" className="mb-20 scroll-mt-28">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faBriefcase} className="text-[#6E5E93] mr-4 w-10 h-10 md:w-12 md:h-12" />
                    Detailed Breakdown of Goods Classes (1 to 34)
                  </h2>
                  <p className="mb-8">
                    Goods classes cover physical products, ranging from raw industrial chemicals to finished consumer items like tobacco or furniture. It is important to note that the primary purpose of the product determines its class.
                  </p>
                  
                  <div className="space-y-12">
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 1: Chemicals and Industrial Substances</h3>
                      <p className="mb-4">This class includes chemicals used in industry, science, and photography. It also covers agricultural chemicals (except fungicides and herbicides) and unprocessed resins. If you manufacture adhesives for industrial use, this is your primary class.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Sensitized paper, compost, animal manures, industrial adhesives, and tempering preparations.</li>
                        <li><strong>Important Exclusions:</strong> Natural resins (Class 2), chemical products for medical science (Class 5), and fungicides/herbicides (Class 5).</li>
                        <li><strong>Pro-Tip:</strong> For startups in the EV battery space, Class 1 is essential for chemical electrolytes and raw lithium compounds.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 2: Paints and Finishers</h3>
                      <p className="mb-4">Class 2 covers paints, varnishes, and lacquers. It also includes preservatives against rust and wood deterioration. Metals in foil or powder form for painters and decorators are also classified here.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Colorants for beverages and food, dyestuffs, mordants, and raw natural resins.</li>
                        <li><strong>Important Exclusions:</strong> Decorative glitters (Class 3), laundry blueing (Class 3), and insulating paints (Class 17).</li>
                        <li><strong>Pro-Tip:</strong> If you sell food dyes, Class 2 is your home, not Class 30, even though they are used in food.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 3: Cosmetics and Cleaning Preparations</h3>
                      <p className="mb-4">This is one of the most crowded classes. It covers non-medicated cosmetics, perfumes, soaps, and laundry preparations. If you are launching a skincare brand or a hair care line, Class 3 is where you need to be.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Deodorants for human beings, room fragrancing preparations, and abrasive papers (sandpaper).</li>
                        <li><strong>Important Exclusions:</strong> Medicated shampoos (Class 5), chemical chimney cleaners (Class 1), and scented candles (Class 4).</li>
                        <li><strong>Pro-Tip:</strong> D2C brands often overlook Class 35 (retail services) while registering in Class 3. You need both to protect your brand name on the website.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 4: Lubricants and Fuels</h3>
                      <p className="mb-4">Industrial oils, greases, lubricants, and fuels belong here. It also covers candles and wicks for lighting. Businesses in the energy or automotive lubricants sector should monitor this class closely.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Beeswax, wood briquettes, electrical energy, and non-chemical additives for fuels.</li>
                        <li><strong>Important Exclusions:</strong> Certain special industrial greases (Class 1) and essential oils (Class 3).</li>
                        <li><strong>Pro-Tip:</strong> Solar energy companies often register here for 'electrical energy' as a product, alongside Class 39 for distribution.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 5: Pharmaceuticals and Medical Supplies</h3>
                      <p className="mb-4">A high-stakes class covering medicines, veterinary preparations, and sanitary products for medical purposes. It also includes dietetic food for medical use and baby food.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Dietary supplements, diapers for babies, tobacco-free cigarettes for medical use, and medicated shampoos.</li>
                        <li><strong>Important Exclusions:</strong> Sanitary preparations as toiletries (Class 3), meal replacement bars (Class 30), and supportive bandages (Class 10).</li>
                        <li><strong>Pro-Tip:</strong> If your supplement is 'organic' or 'herbal,' it still belongs in Class 5 if you claim health benefits.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 6: Metal Goods and Hardware</h3>
                      <p className="mb-4">Unprocessed or semi-processed common metals and their alloys. It also includes metal building materials, transportable metal buildings, and small items of metal hardware.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Metal ores, safes, metal cables and wires (non-electric), and metal pipes.</li>
                        <li><strong>Important Exclusions:</strong> Bauxite (Class 1), mercury/antimony (Class 1), and insulation metal foils (Class 17).</li>
                        <li><strong>Pro-Tip:</strong> Smart locks go in Class 9 (electronics), but traditional metal locks stay in Class 6.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 7: Machines and Power Tools</h3>
                      <p className="mb-4">This class includes machines and machine tools, motors, and engines (excluding those for land vehicles). It also covers agricultural implements other than hand-operated ones.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> 3D printers, robotic mechanisms for manufacturing, and vending machines (not automatic).</li>
                        <li><strong>Important Exclusions:</strong> Hand tools (Class 8), motors for land vehicles (Class 12), and certain laboratory robots (Class 9).</li>
                        <li><strong>Pro-Tip:</strong> Drone manufacturers need a mix of Class 7 (industrial/agricultural drones) and Class 12 (transport drones).</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 8: Hand Tools and Cutlery</h3>
                      <p className="mb-4">Covers hand-operated tools and implements, including cutlery, side arms, and razors. If the tool is powered by hand rather than electricity or a motor, it generally falls here.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Garden tools (hand-operated), silver plate cutlery, and hand-operated hair clippers.</li>
                        <li><strong>Important Exclusions:</strong> Surgical knives (Class 10), machine tools (Class 7), and paper knives/letter openers (Class 16).</li>
                        <li><strong>Pro-Tip:</strong> Electric tasers go in Class 9, while non-electric side arms stay in Class 8.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 9: Computers, Software, and Electronics</h3>
                      <p className="mb-4">A critical class for the digital age. It covers scientific instruments, computers, recorded software, apps, and various electronic gadgets. Interestingly, fire extinguishers and diving suits are also in Class 9.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Smartwatches, VR headsets, downloadable music, digital wallets, and laboratory robots.</li>
                        <li><strong>Important Exclusions:</strong> Software as a Service (Class 42), clockworks (Class 14), and medical imaging devices (Class 10).</li>
                        <li><strong>Pro-Tip:</strong> AI algorithms as "downloadable code" are Class 9, but "AI as a Service" is Class 42. Most tech firms must file both.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 10: Surgical and Medical Apparatus</h3>
                      <p className="mb-4">Covers surgical, medical, dental, and veterinary apparatus and instruments. It also includes artificial limbs, eyes, and teeth, as well as orthopedic articles.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Contraceptive devices, therapeutic mattresses, robotic surgery equipment, and hearing aids.</li>
                        <li><strong>Important Exclusions:</strong> Medical furniture (e.g., dentist chairs without clinical parts) (Class 20) and nursing bras (Class 25).</li>
                        <li><strong>Pro-Tip:</strong> Health-tech wearable devices are often "borderline" between Class 9 (consumer tech) and Class 10 (medical diagnostic). File in both for full safety.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 11: Appliances for Heating and Cooling</h3>
                      <p className="mb-4">Apparatus for lighting, heating, steam generating, cooking, refrigerating, drying, and ventilating. Air conditioners, refrigerators, and even simple light bulbs are registered here.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Electric kettles, decorative fountains, luminous house numbers, and whirlpool-jet apparatus.</li>
                        <li><strong>Important Exclusions:</strong> Laboratory burners (Class 9), medical heating pads (Class 10), and steam-operated industrial machines (Class 7).</li>
                        <li><strong>Pro-Tip:</strong> LED lighting used in industrial signage is often borderline with Class 9. Register in both if you sell high-tech display solutions.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 12: Vehicles</h3>
                      <p className="mb-4">Apparatus for locomotion by land, air, or water. This includes cars, bicycles, boats, and airplanes. Note that parts of vehicles often fall into other classes.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Drones for delivery, mobility scooters, remote-controlled vehicles (except toys), and anti-glare devices for vehicles.</li>
                        <li><strong>Important Exclusions:</strong> Toy vehicles (Class 28), baby carriages (Class 12 - actually included, but specific strollers), and metallic parts like engines (Class 7).</li>
                        <li><strong>Pro-Tip:</strong> For EV startups, the charging infrastructure is Class 9, but the vehicle itself is Class 12.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 13: Firearms and Explosives</h3>
                      <p className="mb-4">Covers firearms, ammunition, projectiles, explosives, and fireworks. This is a highly specialized class with strict regulatory requirements beyond just trademark law.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Fog signals (explosive), spray for personal defense (pepper spray), and motorized weapons.</li>
                        <li><strong>Important Exclusions:</strong> Matches (Class 34) and bows/arrows for archery (Class 28).</li>
                        <li><strong>Pro-Tip:</strong> Defense technology companies often need Class 13 for hardware and Class 42 for the tactical software driving that hardware.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 14: Precious Metals and Jewelry</h3>
                      <p className="mb-4">Precious metals and their alloys, jewelry, precious stones, and horological instruments like watches and clocks. Brand prestige is paramount in this class.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Cuff links, tie pins, jewelry boxes of precious metal, and smartwatches (as horological instruments).</li>
                        <li><strong>Important Exclusions:</strong> Objects of art made of common metal (Class 6) and smartwatches (primarily as data processing devices) (Class 9).</li>
                        <li><strong>Pro-Tip:</strong> The 'Smartwatch Conflict' between Class 9 and Class 14 is a common source of litigation. A dual registration strategy is almost mandatory.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 15: Musical Instruments</h3>
                      <p className="mb-4">Covers musical instruments and their accessories, such as stands and conductors' batons. Whether it is a classical violin or a modern synthesizer, this is the class.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Electronic musical instruments, tuning forks, bellows for musical instruments, and music boxes.</li>
                        <li><strong>Important Exclusions:</strong> Loudspeakers and amplifiers (Class 9) and musical greeting cards (Class 16).</li>
                        <li><strong>Pro-Tip:</strong> If your brand produces digital music production software, you need Class 9, not Class 15.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 16: Paper, Stationery, and Printed Matter</h3>
                      <p className="mb-4">Includes paper, cardboard, and goods made from these materials. It covers printed matter, bookbinding material, photographs, stationery, and instructional materials.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Bags of paper or plastics for packaging, credit cards without magnetic coding, and office requisites (except furniture).</li>
                        <li><strong>Important Exclusions:</strong> Scientific instruments made of paper (rare) (Class 9) and paper used as insulating material (Class 17).</li>
                        <li><strong>Pro-Tip:</strong> Even for a digital-first company, Class 16 is vital for printing marketing collateral, brochures, and physical packaging.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 17: Rubber and Insulating Materials</h3>
                      <p>Covers rubber, gutta-percha, gum, asbestos, and mica. It also includes plastics in extruded form for use in manufacture, and various packing or insulating materials. Flexible pipes, not of metal, also fall here.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 18: Leather Goods</h3>
                      <p>Leather and imitations of leather. It specifically covers luggage, carrying bags, umbrellas, and walking sticks. Saddlery and harness for animals are also included here.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 19: Non-Metallic Building Materials</h3>
                      <p>Building materials (non-metallic), rigid pipes for building (non-metallic), and asphalt. It covers transportable buildings and monuments that are not made of metal. Concrete and bricks belong here.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 20: Furniture and Plastic Goods</h3>
                      <p>Furniture, mirrors, and picture frames. It also covers goods of wood, cork, reed, cane, and wicker. Essentially, any household furniture that is not strictly textile-based is registered here.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 21: Household Utensils</h3>
                      <p>Household or kitchen utensils and containers. It covers combs, sponges, brushes (except paintbrushes), and cleaning articles. Glassware, porcelain, and earthenware also belong in Class 21.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 22: Ropes, Tents, and Sacks</h3>
                      <p>Ropes, string, nets, tents, and tarpaulins. It also includes padding or stuffing materials (except those made of paper, rubber, or plastics). Raw fibrous textile materials are a key part of this class.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 23: Yarns and Threads</h3>
                      <p>A simple class focused solely on yarns and threads used for textile purposes. This is the foundation class for the garment and fashion industry.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 24: Textiles and Fabrics</h3>
                      <p>Covers textiles and textile goods not included in other classes. This includes bed covers, table covers, and curtains. It focuses on the fabric itself rather than the finished clothing.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 25: Clothing, Footwear, and Headwear</h3>
                      <p>Another high-volume class. It covers all types of finished clothing for men, women, and children. Shoes and hats are also registered here. If you are a fashion designer, Class 25 is essential.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 26: Lace, Ribbons, and Notions</h3>
                      <p>Covers lace, embroidery, ribbons, and bows. It also includes buttons, hooks, pins, and needles. Artificial flowers and hair decorations are interestingly placed here as well.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 27: Floor Coverings and Wall Hangings</h3>
                      <p>Carpets, rugs, mats, and linoleum. It covers materials for covering existing floors and wall hangings (non-textile). Basically, anything you use to finish a floor or wall after construction.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 28: Games, Toys, and Sports Equipment</h3>
                      <p>Covers games and playthings, gymnastic and sporting articles not included in other classes. It also includes decorations for Christmas trees. Modern video game consoles are usually in Class 9, while the physical toys are here.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 29: Meat, Fish, and Dairy</h3>
                      <p>Covers meat, fish, poultry, and game. It also includes meat extracts, preserved or dried fruits and vegetables, jellies, jams, eggs, milk, and milk products. Oils and fats for food belong here too.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 30: Spices, Grains, and Sweets</h3>
                      <p>Coffee, tea, cocoa, sugar, rice, tapioca, flour, and cereal preparations. It covers bread, pastry, confectionery, and salt. Your favourite brand of chocolate or biscuits is registered in Class 30.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 31: Raw Agricultural Products</h3>
                      <p>Grains and agricultural or horticultural products not included in other classes. It covers live animals, fresh fruits and vegetables, seeds, and foodstuffs for animals.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 32: Non-Alcoholic Beverages</h3>
                      <p>Beers, mineral and aerated waters, and other non-alcoholic drinks. It also covers fruit drinks and fruit juices, and syrups for making beverages. Even though beer contains alcohol, it is traditionally kept in this class separate from hard spirits.</p>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 17: Rubber and Plastics (Raw/Semi-Processed)</h3>
                      <p className="mb-4">Covers rubber, gutta-percha, gum, asbestos, and mica. It also includes semi-processed plastics for manufacture; packing, stopping, and insulating materials.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Hose pipes (not of metal), insulating gloves, and plastic films for wrapping (not for packaging).</li>
                        <li><strong>Important Exclusions:</strong> Surgical gloves (Class 10) and plastic bags for packaging (Class 16).</li>
                        <li><strong>Pro-Tip:</strong> This is a crucial class for manufacturing companies dealing with insulation or raw material supply chains.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 18: Leather and Imitation Leather</h3>
                      <p className="mb-4">Leather and imitations of leather; animal skins and hides; luggage and carrying bags; umbrellas and parasols; walking sticks; whips, harness and saddlery.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Wallet cases, motorized suitcases, clothing for pets, and leather for furniture.</li>
                        <li><strong>Important Exclusions:</strong> Leather clothing/footwear (Class 25) and chamois leather for cleaning (Class 21).</li>
                        <li><strong>Pro-Tip:</strong> Fashion brands must register in both Class 18 and Class 25 to protect both their bags and their apparel.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 19: Non-Metallic Building Materials</h3>
                      <p className="mb-4">Building materials (non-metallic); non-metallic rigid pipes for building; asphalt, pitch and bitumen; non-metallic transportable buildings; monuments, not of metal.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Paving blocks (non-metal), aquarium sand, and non-metal diving boards.</li>
                        <li><strong>Important Exclusions:</strong> Building timber (raw) (Class 31) and cement for medical use (Class 5).</li>
                        <li><strong>Pro-Tip:</strong> This is the primary class for heavy infrastructure and construction brands like cement, tiles, and non-metal pipes.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 20: Furniture and Plastic Goods</h3>
                      <p className="mb-4">Furniture, mirrors, picture frames; containers, not of metal, for storage or transport; unworked or semi-worked bone, horn, whalebone or mother-of-pearl.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Sleeping bags for camping, mattresses, bamboo curtains, and non-metal ID tags for pets.</li>
                        <li><strong>Important Exclusions:</strong> Special furniture for laboratories (Class 9), medical furniture (Class 10), and metal furniture (Class 20 - actually included, but metal structures can be 6).</li>
                        <li><strong>Pro-Tip:</strong> If you sell modular kitchens, you need Class 20 for the units and likely Class 11 for the integrated appliances.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 21: Household and Kitchen Utensils</h3>
                      <p className="mb-4">Household or kitchen utensils and containers; cookware and tableware, except forks, knives and spoons; combs and sponges; brushes; glassware, porcelain and earthenware.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Electric brushes (except parts of machines), cosmetic utensils, thermal insulated containers, and small hand-operated kitchen apparatus for mincing or pressing.</li>
                        <li><strong>Important Exclusions:</strong> Cleaning preparations (Class 3), kitchen knives (Class 8), and mirrors (Class 20).</li>
                        <li><strong>Pro-Tip:</strong> High-end glassware brands should also consider Class 14 if they use precious metal coatings.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 22: Ropes, Nets, and Sails</h3>
                      <p className="mb-4">Ropes and string; nets; tents and tarpaulins; sails; sacks for the transport and storage of materials in bulk; padding, cushioning and stuffing materials.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Raw fibrous textile materials and their substitutes, fishing nets, and mail bags.</li>
                        <li><strong>Important Exclusions:</strong> Metal ropes (Class 6), strings for musical instruments (Class 15), and sports nets (Class 28).</li>
                        <li><strong>Pro-Tip:</strong> Outdoor gear brands need Class 22 for tents and Class 20 for sleeping bags.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 23: Yarns and Threads</h3>
                      <p className="mb-4">Yarns and threads for textile use. This is a foundational class for the textile manufacturing industry in India.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Fiberglass thread, elastic thread, spun cotton, and silk yarn.</li>
                        <li><strong>Important Exclusions:</strong> Metal thread for embroidery (Class 26) and jewelry wire (Class 14/Class 6).</li>
                        <li><strong>Pro-Tip:</strong> Industrial thread manufacturers must distinguish between textile use (Class 23) and surgical use (Class 10).</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 24: Textiles and Fabric Goods</h3>
                      <p className="mb-4">Textiles and substitutes for textiles; household linen; curtains of textile or plastic. This class covers the finished fabric products that are not yet clothing.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Bed covers, table covers, sleeping bags (as textile liners), and mosquito nets.</li>
                        <li><strong>Important Exclusions:</strong> Electrically heated blankets for medical use (Class 10) and table linen of paper (Class 16).</li>
                        <li><strong>Pro-Tip:</strong> Home decor brands focusing on soft furnishings like curtains and bedsheets must prioritize Class 24.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 25: Clothing, Footwear, and Headwear</h3>
                      <p className="mb-4">Clothing, footwear, headwear. This is arguably the most registered class in the Indian Trademark Registry, covering the entire fashion industry.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Sports clothing, uniforms, baby clothes, and masquerade costumes.</li>
                        <li><strong>Important Exclusions:</strong> Specialized protective clothing against fire/radiation (Class 9) and orthopedic shoes (Class 10).</li>
                        <li><strong>Pro-Tip:</strong> Defensive filing in Class 35 (retail) is almost as important as Class 25 for fashion labels to prevent others from opening a store with the same name.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 26: Lace, Embroidery, and Ribbons</h3>
                      <p className="mb-4">Lace, braid and embroidery, and haberdashery ribbons and bows; buttons, hooks and eyes, pins and needles; artificial flowers; hair decorations; false hair.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Zippers, hair nets, false beards, and Charms (other than for jewelry).</li>
                        <li><strong>Important Exclusions:</strong> False eyelashes (Class 3) and hair clips as jewelry (Class 14).</li>
                        <li><strong>Pro-Tip:</strong> Accessory designers should monitor both Class 26 and Class 14 (jewelry) constantly.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 27: Carpets, Rugs, and Wall Hangings</h3>
                      <p className="mb-4">Carpets, rugs, mats and matting, linoleum and other materials for covering existing floors; wall hangings, not of textile.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Artificial turf, wallpaper, gym mats, and car mats.</li>
                        <li><strong>Important Exclusions:</strong> Wooden flooring (Class 19) and wall hangings of textile (Class 24).</li>
                        <li><strong>Pro-Tip:</strong> Wallpaper brands often registered in Class 16 should migrate or cross-register in Class 27.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 28: Games, Toys, and Sporting Articles</h3>
                      <p className="mb-4">Games, toys and playthings; video game apparatus; gymnastic and sporting articles; decorations for Christmas trees.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Playing cards, fitness machines, fishing tackle, and fairground rides.</li>
                        <li><strong>Important Exclusions:</strong> Video game software (Class 9), gym clothing (Class 25), and Christmas tree candles (Class 4).</li>
                        <li><strong>Pro-Tip:</strong> Gaming companies need Class 9 for the software and Class 28 for physical consoles or merchandise.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 29: Meat, Fish, and Poultry</h3>
                      <p className="mb-4">Meat, fish, poultry and game; meat extracts; preserved, frozen, dried and cooked fruits and vegetables; jellies, jams, compotes; eggs; milk, cheese, butter, yogurt and other milk products; oils and fats for food.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Milk-based beverages, seeds prepared for human consumption, and plant-based meat substitutes.</li>
                        <li><strong>Important Exclusions:</strong> Fresh fruits/vegetables (Class 31), baby food (Class 5), and salad dressings (Class 30).</li>
                        <li><strong>Pro-Tip:</strong> The 'Alternative Protein' industry lives in Class 29 for plant-based burgers and milks.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 30: Coffee, Tea, and Confectionery</h3>
                      <p className="mb-4">Coffee, tea, cocoa and artificial coffee; rice, pasta and noodles; tapioca and sago; flour and preparations made from cereals; bread, pastries and confectionery; chocolate; ice cream, sorbets and other edible ices; sugar, honey, treacle; yeast, baking-powder; salt, seasonings, spices, preserved herbs; vinegar, sauces and other condiments; ice (frozen water).</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Breakfast cereals, frozen pizza, processed seeds used as seasoning, and sandwiches.</li>
                        <li><strong>Important Exclusions:</strong> Raw cereals (Class 31) and medicinal teas (Class 5).</li>
                        <li><strong>Pro-Tip:</strong> Most FMCG food startups start in Class 30. Ensure your recipe doesn't drift into 'Health Supplements' (Class 5).</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 31: Raw Agricultural Products</h3>
                      <p className="mb-4">Raw and unprocessed agricultural, aquacultural, horticultural and forestry products; raw and unprocessed grains and seeds; fresh fruits and vegetables, fresh herbs; natural plants and flowers; bulbs, seedlings and seeds for planting; live animals; foodstuffs and beverages for animals; malt.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Pet food, live bait for fishing, unprocessed wood, and litter for animals.</li>
                        <li><strong>Important Exclusions:</strong> Rice (Class 30), tobacco (Class 34), and preserved vegetables (Class 29).</li>
                        <li><strong>Pro-Tip:</strong> Agri-tech startups should protect their proprietary seed names in Class 31.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 32: Non-Alcoholic Beverages</h3>
                      <p className="mb-4">Beers; non-alcoholic beverages; mineral and aerated waters; fruit beverages and fruit juices; syrups and other non-alcoholic preparations for making beverages.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Energy drinks, isotonic beverages, soy-based beverages (not milk substitutes), and de-alcoholized wine.</li>
                        <li><strong>Important Exclusions:</strong> Beverages for medical purposes (Class 5), milk-based beverages (Class 29), and coffee/tea-based beverages (Class 30).</li>
                        <li><strong>Pro-Tip:</strong> Beer is the only alcoholic beverage in Class 32. All other hard spirits go in Class 33.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 33: Alcoholic Beverages (Except Beer)</h3>
                      <p className="mb-4">Alcoholic beverages, except beers; alcoholic preparations for making beverages.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Wine, whiskey, vodka, gin, and alcoholic essences.</li>
                        <li><strong>Important Exclusions:</strong> Beer (Class 32) and alcoholic beverages for medical use (Class 5).</li>
                        <li><strong>Pro-Tip:</strong> If you sell cocktail mixers that are non-alcoholic, register in Class 32.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 34: Tobacco and Smokers' Articles</h3>
                      <p className="mb-4">Tobacco and tobacco substitutes; cigarettes and cigars; electronic cigarettes and oral vaporizers for smokers; smokers' articles; matches.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Flavorings for e-cigarettes, tobacco jars, and herbs for smoking.</li>
                        <li><strong>Important Exclusions:</strong> Tobacco-free cigarettes for medical use (Class 5).</li>
                        <li><strong>Pro-Tip:</strong> The vaping industry is currently seeing a surge of filings in Class 34.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="service-classes-35-45" className="mb-20 scroll-mt-28">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faBriefcase} className="text-[#6E5E93] mr-4 w-10 h-10 md:w-12 md:h-12" />
                    Detailed Breakdown of Service Classes (35 to 45)
                  </h2>
                  <p className="mb-8">
                    Services involve professional activities where no physical goods are transferred as the primary transaction. The service sector in India has grown exponentially, making these classes vital.
                  </p>
                  
                  <div className="space-y-12">
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 35: Business Management and Advertising</h3>
                      <p className="mb-4">The "Universal Class" for most modern businesses. It covers advertising, business management, business administration, and office functions. It includes the operation of retail stores and e-commerce websites.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Public relations, telemarketing services, tax filing services, and wholesale/retail services for third parties.</li>
                        <li><strong>Important Exclusions:</strong> Engineering services (Class 42), legal services (Class 45), and specialized bookkeeping (Class 35 - actually included, but specific financial auditing could be 36).</li>
                        <li><strong>Pro-Tip:</strong> Even if you only sell your own products, register Class 35 to protect your brand name as a "retail destination" or "online store."</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 36: Finance and Real Estate</h3>
                      <p className="mb-4">Covers insurance, financial affairs, monetary affairs, and real estate affairs. Banks, insurance companies, and real estate agencies operate primarily under this class.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Cryptocurrency exchange services, financial management of digital assets, real estate appraisal, and debt collection.</li>
                        <li><strong>Important Exclusions:</strong> Business evaluations (Class 35) and storage of goods in a warehouse (Class 39).</li>
                        <li><strong>Pro-Tip:</strong> Fintech startups need a heavy presence in Class 36 (financial services) and Class 42 (software infrastructure).</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 37: Construction and Repair</h3>
                      <p className="mb-4">Building construction, repair, and installation services. If you are a civil contractor or run an appliance repair service, this is where you belong.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Mining extraction, well drilling, repair of telecommunication apparatus, and specialized cleaning of buildings.</li>
                        <li><strong>Important Exclusions:</strong> Storage of goods (Class 39) and project management in construction (can be Class 35).</li>
                        <li><strong>Pro-Tip:</strong> Service centers for electronic giants must register in Class 37 to protect their repair wing.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 38: Telecommunications</h3>
                      <p className="mb-4">Services that allow people to communicate by sensory means. It covers radio broadcasting, television broadcasting, and internet service providers.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Video-on-demand transmission, cellular network services, and providing online forums for communication.</li>
                        <li><strong>Important Exclusions:</strong> Creating the content for broadcasting (Class 41) and telemarketing (Class 35).</li>
                        <li><strong>Pro-Tip:</strong> If you run a social media platform, Class 38 is essential for the communication part, but Class 42 is needed for the software.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 39: Transport and Storage</h3>
                      <p className="mb-4">Transport of passengers or goods by road, rail, air, or water. It also covers packaging and storage of goods, and travel arrangements.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Electricity distribution, water supplying, underwater salvage, and courier services.</li>
                        <li><strong>Important Exclusions:</strong> Travel insurance (Class 36) and hotel reservations (Class 43).</li>
                        <li><strong>Pro-Tip:</strong> Logistics giants like Delivery or BlueDart rely on Class 39 for the core of their operations.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 40: Treatment of Materials</h3>
                      <p className="mb-4">Services involving the mechanical or chemical transformation of inorganic or organic substances. This includes custom manufacturing and metal plating.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> 3D printing services, food smoking, metal recycling, and custom tailoring.</li>
                        <li><strong>Important Exclusions:</strong> Repair of buildings/goods (Class 37) and printing services (Class 40 - actually included, but digital design is 42).</li>
                        <li><strong>Pro-Tip:</strong> If you are a contract manufacturer for a third party, Class 40 is your primary service class.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 41: Education and Entertainment</h3>
                      <p className="mb-4">Covers education, providing of training, entertainment, sporting, and cultural activities. Schools and film production houses belong here.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> E-sports officiating, organizing beauty contests, animal training, and book publishing (as a service).</li>
                        <li><strong>Important Exclusions:</strong> Providing of technical scientific data (Class 42) and advertising (Class 35).</li>
                        <li><strong>Pro-Tip:</strong> YouTube creators and influencers should register their channel name in Class 41 for entertainment services.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 42: Software Development and Scientific Services</h3>
                      <p className="mb-4">Scientific and technological services and research. It specifically covers the design and development of computer hardware and software.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> SaaS (Software as a Service), PaaS (Platform as a Service), architectural design, and industrial design.</li>
                        <li><strong>Important Exclusions:</strong> Business research (Class 35) and surgical research/treatment (Class 44).</li>
                        <li><strong>Pro-Tip:</strong> This is the 'holy grail' for startups. Any app or website that has interactive functionality needs Class 42.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 43: Food Services and Accommodation</h3>
                      <p className="mb-4">Services for providing food and drink, and temporary accommodation. Restaurants, hotels, cafes, and cloud kitchens are all here.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Animal boarding, retirement home services (accommodation), and catering services.</li>
                        <li><strong>Important Exclusions:</strong> Real estate leasing (Class 36) and travel arrangements (Class 39).</li>
                        <li><strong>Pro-Tip:</strong> Cloud kitchens need Class 43 for the service and likely Class 29/30 for the 'packaged' food they sell under a brand name.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 44: Medical and Beauty Services</h3>
                      <p className="mb-4">Medical services, veterinary services, and hygienic and beauty care for human beings or animals. It also includes agriculture and forestry services.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Tele-medicine services, flower arranging, plastic surgery, and pest control in agriculture.</li>
                        <li><strong>Important Exclusions:</strong> Medical research (Class 42) and manufacturing of medical equipment (Class 10).</li>
                        <li><strong>Pro-Tip:</strong> Wellness spas and IVF clinics are major inhabitants of Class 44 in the Indian market.</li>
                      </ul>
                    </div>
                    <div className="border-b pb-8">
                      <h3 className="text-xl font-bold text-[#6E5E93] mb-4">Class 45: Legal and Security Services</h3>
                      <p className="mb-4">Legal services, security services for the physical protection of tangible property and individuals. It also covers matrimonial services.</p>
                      <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                        <li><strong>Key Inclusions:</strong> Private investigation, tracking of stolen property, horoscope casting, and funeral services.</li>
                        <li><strong>Important Exclusions:</strong> Computer security against hacking (Class 42) and insurance services (Class 36).</li>
                        <li><strong>Pro-Tip:</strong> Matrimonial websites usually register in Class 45 for 'matrimonial services' and Class 42 for the technology platform.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="business-case-studies" className="mb-20 scroll-mt-28">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faLightbulb} className="text-[#6E5E93] mr-4 w-10 h-10 md:w-12 md:h-12" />
                    Sectoral Case Studies: Choosing Classes Like a Pro
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 italic">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 not-italic">Scenario A: The Fintech Giant</h3>
                      <p className="text-gray-600 mb-4">
                        A startup launches an app for digital payments, insurance brokerage, and financial literacy blogs.
                      </p>
                      <ul className="text-sm text-gray-500 space-y-2 not-italic">
                        <li><strong>Class 9:</strong> For the downloadable mobile application software.</li>
                        <li><strong>Class 36:</strong> For the core financial and insurance services.</li>
                        <li><strong>Class 41:</strong> For the educational blogs and financial training videos.</li>
                        <li><strong>Class 42:</strong> For the secure SaaS platform and encryption technology.</li>
                      </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 italic">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 not-italic">Scenario B: The D2C Beauty Brand</h3>
                      <p className="text-gray-600 mb-4">
                        A brand selling organic lipsticks online, offering virtual try-on tools, and planning to open physical salons.
                      </p>
                      <ul className="text-sm text-gray-500 space-y-2 not-italic">
                        <li><strong>Class 3:</strong> For the physical cosmetics and lipsticks.</li>
                        <li><strong>Class 35:</strong> For the e-commerce store and retail management.</li>
                        <li><strong>Class 42:</strong> For the virtual try-on software (AI/AR tools).</li>
                        <li><strong>Class 44:</strong> For the physical beauty salon and skin consultation services.</li>
                      </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 italic">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 not-italic">Scenario C: The EdTech Platform</h3>
                      <p className="text-gray-600 mb-4">
                        A company providing live coding classes, selling physical workbooks, and offering job placement services.
                      </p>
                      <ul className="text-sm text-gray-500 space-y-2 not-italic">
                        <li><strong>Class 9:</strong> For the recorded course videos and downloadable apps.</li>
                        <li><strong>Class 16:</strong> For the physical workbooks and printed study material.</li>
                        <li><strong>Class 35:</strong> For the recruitment and job placement services.</li>
                        <li><strong>Class 41:</strong> For the live teaching, training, and certification.</li>
                      </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 italic">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 not-italic">Scenario D: The EV Infrastructure Startup</h3>
                      <p className="text-gray-600 mb-4">
                        A business manufacturing EV chargers, operating a network of charging stations, and providing fleet management software.
                      </p>
                      <ul className="text-sm text-gray-500 space-y-2 not-italic">
                        <li><strong>Class 9:</strong> For the electric charging hardware and data management software.</li>
                        <li><strong>Class 37:</strong> For the installation and maintenance of charging stations.</li>
                        <li><strong>Class 39:</strong> For the distribution of electricity (core recharging service).</li>
                        <li><strong>Class 42:</strong> For the cloud-based fleet monitoring dashboard.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="international-trademark-protection" className="mb-20 scroll-mt-28">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faBriefcase} className="text-[#6E5E93] mr-4 w-12 h-12" />
                    Expanding Globally: International Trademark Protection
                  </h2>
                  <p className="mb-6">
                    As businesses in India go global, protecting your brand in international markets becomes a necessity. Trademark rights are territorial, meaning your Indian registration only protects you within the borders of India. If you plan to export goods or provide services in the USA, Europe, or Southeast Asia, you must secure your brand in those jurisdictions as well. This is where the Madrid Protocol comes into play.
                  </p>
                  <p className="mb-6">
                    The Madrid Protocol is an international system managed by the World Intellectual Property Organization (WIPO) that allows brand owners to protect their marks in up to 130 countries by filing a single application. This system is highly efficient and cost-effective as it eliminates the need to hire local attorneys in every single country during the initial phase. However, a prerequisite for using the Madrid Protocol is that you must have a "Base Application" or registration in India.
                  </p>
                  <p className="mb-6">
                    When filing internationally, the classification system remains consistent. The types of trademark classes you choose in your Indian application will form the basis of your international filing. Therefore, getting the classification right at home is the foundation of your global brand strategy. At IPR Karo, we specialize in navigating these complex international waters, ensuring that your brand is as protected in Dubai or New York as it is in Delhi or Mumbai.
                  </p>
                  <p className="mb-6">
                    Another important aspect of international protection is "Prior Use". Indian law is very protective of prior users of a mark, even if they have not registered it yet. However, many foreign jurisdictions follow a "First-to-File" rule. This means that if someone else registers your brand name in their country before you do, they own the rights, regardless of how long you have been using it in India. This highlights the urgency of securing your trademark at the earliest possible stage.
                  </p>
                </section>

                <section id="choosing-correct-class" className="mb-20 scroll-mt-28">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faHandshakeAngle} className="text-[#6E5E93] mr-4 w-12 h-12" />
                    How to Choose the Right Class for Your Business
                  </h2>
                  <p className="mb-6">
                    Selecting the right class is part art and part science. Start by listing every single activity your business performs today. Then, look ahead two to five years. Do you plan to expand from selling organic tea (Class 30) to running a tea cafe (Class 43)? If so, it is better to file in both classes early on.
                  </p>
                  <p className="mb-6">
                    A common technique is to search for your closest competitors in the public trademark database. See which classes they have chosen. This often reveals industry standards that you might have missed. However, do not blindly copy them. Your business model might have subtle differences that require a unique classification strategy. At IPR Karo, we perform a multi-dimensional analysis to ensure no gaps are left in your brand's shield.
                  </p>
                </section>

                <section id="multi-class-filing" className="mb-20 scroll-mt-28">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="text-[#6E5E93] mr-4 w-12 h-12" />
                    The Strategy of Multi-Class Filing
                  </h2>
                  <p className="mb-6">
                    Modern businesses rarely fit into a single box. A fashion brand usually needs Class 25 (the clothes), Class 18 (the leather bags), and Class 35 (the retail showroom). Filing a multi-class application allows you to cover all these bases in a single filing process. While the government fee is cumulative, the administrative effort is reduced.
                  </p>
                  <p className="mb-6">
                    The biggest advantage of multi-class filing is brand uniformity. You ensure that your brand is protected across its entire ecosystem. This is particularly important for preventing "Trademark Squatting" where someone else registers your name in a related category before you get the chance to expand into it.
                  </p>
                </section>

                <section id="common-mistakes" className="mb-20 scroll-mt-28">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faExclamationCircle} className="text-[#6E5E93] mr-4 w-12 h-12" />
                    Common Mistakes in Trademark Classification
                  </h2>
                  <p className="mb-6">
                    The most common mistake is being too narrow. For example, a software company registering only for "Mobile Apps" in Class 9 might find itself unprotected if it expands into "Software as a Service" (SaaS) in Class 42. Another error is being too vague. Using terms like "all goods in this class" is no longer accepted by the Indian Trademark Registry. You must specify the items clearly.
                  </p>
                  <p className="mb-6">
                    Another frequent blunder is misidentifying the primary business activity. A company that makes custom furniture for offices is fundamentally a manufacturing unit (Class 20), but it also provides interior design services (Class 42). Neglecting either could lead to a legal blind spot. Always consult with a professional who understands the subtle overlaps between different types of trademark classes.
                  </p>
                  <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                    <h3 className="text-xl font-bold text-orange-900 mb-4">The 'Vague Description' Trap</h3>
                    <p className="text-gray-700 leading-relaxed">
                      In recent years, the Indian Trademark Registry has become increasingly strict about 'Vague Descriptions.' Previously, an applicant could simply state 'all goods included in Class 35.' Today, this will trigger an immediate formality check fail. You must specify whether you provide 'retail services,' 'wholesale services,' or 'advertising services.' Precision in drafting the 'Goods and Services' section of Form TM-A is what separates a amateur filing from a professional one.
                    </p>
                  </div>
                </section>

                <section id="class-finder-tools" className="mb-20 scroll-mt-28">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faSearch} className="text-[#6E5E93] mr-4 w-12 h-12" />
                    Advanced Trademark Class Finder Tools
                  </h2>
                  <p className="mb-6">
                    While our guide provides a comprehensive overview, the sheer volume of items in the Nice Classification (containing over 10,000 entries) means that manual lookup can sometimes be inefficient. Professional trademark attorneys use a variety of digital tools to ensure 100% accuracy. The most common tool is the WIPO MGS (Madrid Goods and Services) Manager, which provides real-time updates on accepted terms across all Madrid Protocol member countries.
                  </p>
                  <p className="mb-6">
                    In India, the Controller General of Patents, Designs, and Trade Marks provides an online "Public Search" and "Classification Search" tool. However, these tools require a high degree of technical knowledge to interpret correctly. For instance, a search for "Mobile Phone" might return results in Class 9, but a search for "Mobile Phone Repair" will correctly point you to Class 37. Vague or incorrect entries can lead to an "Examination Report" citing "Vague Goods Description," which is an easily avoidable hurdle.
                  </p>
                  <div className="bg-[#6E5E93] text-white p-10 rounded-[3rem] shadow-xl">
                    <h3 className="text-2xl font-bold mb-6">Why Use a Representative?</h3>
                    <p className="mb-8 opacity-90 leading-relaxed">
                      Statistically, trademark applications filed through experienced legal portals like IPR Karo have a 70% lower objection rate. Why? Because we don't just "copy-paste" descriptions. We craft "Custom Goods and Services Descriptions" that are broad enough to protect your future growth but specific enough to be accepted by the Registrar on the first attempt.
                    </p>
                    <Link href="/contact-us">
                      <button className="bg-white text-[#6E5E93] font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all shadow-lg">
                        Talk to a Classification Expert
                      </button>
                    </Link>
                  </div>
                </section>

                <section id="client-success-stories" className="mb-20 scroll-mt-28">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 flex items-center">
                    <FontAwesomeIcon icon={faRocket} className="text-[#6E5E93] mr-4 w-12 h-12" />
                    Visual Success Stories: Real Brands, Real Protection
                  </h2>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 relative group overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#6E5E93]/5 rounded-bl-full transition-all group-hover:bg-[#6E5E93]/10"></div>
                       <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic shadow-md">AS</div>
                          <div className="ml-5">
                            <h4 className="text-xl font-bold text-gray-900">Ananya Singh</h4>
                            <p className="text-sm text-[#6E5E93] font-semibold">Founder</p>
                          </div>
                       </div>
                       <p className="text-gray-600 italic leading-relaxed mb-6">
                        "I was confused between Class 3 and Class 35. IPR Karo's team explained that while Class 3 protects my shampoo bottles, Class 35 protects my online website portal. Filing in both classes has given me the confidence to aggressively market my brand without fear of copycats."
                       </p>
                       <div className="flex gap-2">
                          <div className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase">Class 3 Secured</div>
                          <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase">Multi-Class filing</div>
                       </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-100 relative group overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#6E5E93]/5 rounded-bl-full transition-all group-hover:bg-[#6E5E93]/10"></div>
                       <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-[#160049] rounded-2xl flex items-center justify-center text-white text-2xl font-bold italic shadow-md">VJ</div>
                          <div className="ml-5">
                            <h4 className="text-xl font-bold text-gray-900">Vikram Jain</h4>
                            <p className="text-sm text-[#6E5E93] font-semibold">CTO</p>
                          </div>
                       </div>
                       <p className="text-gray-600 italic leading-relaxed mb-6">
                        "Handling a Fintech app registration is tricky. We had to cover Class 9 for the software, 36 for payments, and 42 for encryption tech. IPR Karo managed the entire bundle with zero objections. Their understanding of 'associated marks' is unparalleled."
                       </p>
                       <div className="flex gap-2">
                          <div className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold uppercase">Tech-Stack Protection</div>
                          <div className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-bold uppercase">Zero Objection</div>
                       </div>
                    </div>
                  </div>
                </section>

                <section id="emi-consequences-business" className="mb-20 scroll-mt-28">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faLandmark} className="text-[#6E5E93] mr-4 w-12 h-12" />
                    Financial Health: Consequences of Not Paying EMIs for Businesses
                  </h2>
                  <p className="mb-6">
                    Securing your brand via trademark registration often requires capital. Many businesses take loans to fund their growth and intellectual property strategies. However, maintaining financial discipline is as important as legal discipline. What are the consequences of not paying EMIs on time? For a business, the repercussions are severe and multifaceted.
                  </p>
                  <p className="mb-6">
                    First, your credit score, specifically the CIBIL score for individuals or the CMR (CIBIL MSME Rank) for companies, will take a massive hit. A single missed payment can drop your score by several points, making future borrowing nearly impossible. Lenders view inconsistent EMI payments as a sign of business instability.
                  </p>
                  <p className="mb-6">
                    Second, if a loan remains unpaid for more than 90 days, it is classified as a Non-Performing Asset (NPA). This triggers aggressive recovery actions, including legal notices and the eventual seizure of collateral under the SARFAESI Act. For an entrepreneur, this could mean losing the very assets used to run the business.
                  </p>
                  <p className="mb-6">
                    Third, there are criminal implications. If the cheques you provided for your EMIs bounce due to insufficient funds, the lender can file a case under Section 138 of the Negotiable Instruments Act. This can lead to heavy fines or even imprisonment. In summary, a lapse in financial commitments can derail even the most well-protected business. Always prioritize your EMI payments to keep your business's reputation and assets secure.
                  </p>
                  <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mt-10">
                    <h4 className="text-red-800 font-bold mb-4">Key Risks of EMI Default:</h4>
                    <ul className="space-y-4 text-red-900/80">
                      <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-red-500 w-12 h-12" /> Massive drop in Credit Score (CIBIL).</li>
                      <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-red-500 w-12 h-12" /> High penal interest and late payment fees.</li>
                      <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-red-500 w-12 h-12" /> Asset seizure under SARFAESI Act for secured loans.</li>
                      <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-red-500 w-12 h-12" /> Criminal charges for cheque bounce (Section 138).</li>
                    </ul>
                  </div>
                </section>

                <section id="faqs" className="mb-20 scroll-mt-28">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">Expert Insights: Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group border-b border-gray-100 pb-8 last:border-0 transition-all">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start group-hover:text-[#6E5E93]">
                          <span className="text-[#6E5E93] mr-4 font-black">Q{index+1}.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 pl-11 text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
                <section id="strategic-trademark-management" className="mb-20 scroll-mt-28">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-[#6E5E93] mr-4 w-12 h-12" />
                    Strategic Trademark Management & Risk Mitigation
                  </h2>
                  <div className="space-y-8">
                    <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100">
                      <h3 className="text-2xl font-bold text-[#6E5E93] mb-4">The Doctrine of 'Associated Marks'</h3>
                      <p className="mb-4">In India, Section 15 of the Trade Marks Act, 1999, introduces the concept of Associated Marks. When a person applies for registration of a trademark which is identical or deceptively similar to another trademark of the same proprietor in respect of the same goods or services (or even similar ones), the Registrar may require them to be registered as associated marks. This is a critical strategic nuance because associated marks cannot be assigned separately; they must move together as a bundle of rights.</p>
                      <p>For a business, this means that if you have registered your main brand in Class 9 for software and then a sub-brand for a specific app in the same class, the registry will likely link them. This prevents the fragmentation of similar marks in the marketplace, which could lead to consumer confusion if owned by different entities.</p>
                    </div>

                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Impact of Class Selection on Infringement Litigation</h3>
                      <p className="mb-4">Your choice of class is the primary battlefield for future litigation. In the landmark case of <em>Renaissance Hotel Holdings Inc. v. B. Vijaya Sai</em>, the Supreme Court of India clarified that if the marks are identical and the goods/services are in the same class, infringement is almost a foregone conclusion. The burden of proof for the plaintiff is significantly lower when classes match perfectly.</p>
                      <p>Conversely, the <em>Amul v. Amul Macho</em> case illustrates the 'Class Barrier.' Even though 'Amul' is a household name in dairy (Class 29), the court recognized that use in the hosiery industry (Class 25) did not immediately constitute infringement because the classes of consumers and trade channels were distinct. However, for 'Well-Known Marks,' this barrier is non-existent, as they enjoy protection across all classes under Section 11(6) of the Act.</p>
                    </div>

                     <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                      <h3 className="text-2xl font-bold text-green-900 mb-4">The Madrid Protocol: Global Class Alignment</h3>
                      <p className="mb-4">India's accession to the Madrid Protocol allows Indian businesses to file a single international application in over 120 countries. But here is the catch: your international application MUST be based on a local 'Basic Application' in India. If your Indian application is filed in Class 9, your international protection is locked into Class 9 unless you file fresh applications.</p>
                      <p>Strategic tip: Ensure your Indian application is broad enough to cover future international expansion. If you plan to sell physical goods in Europe but only have service registration in India, your Madrid application will be rejected for those physical goods classes. Class alignment is the foundation of a global brand strategy.</p>
                    </div>

                    <div className="p-8 bg-yellow-50 rounded-3xl border border-yellow-100">
                      <h3 className="text-2xl font-bold text-yellow-900 mb-4">Class 35: The 'Universal' Shield for Business Names</h3>
                      <p className="mb-4">
                        One of the most strategic moves in trademark law is the use of Class 35 (Advertising and Business Management) as a supplementary class. Even if you manufacture goods in Class 3, 5, or 25, registering your brand name in Class 35 protects the 'retail' and 'online marketplace' aspect of your business. 
                      </p>
                      <p>
                        In the digital age, where every brand is an e-commerce brand, Class 35 ensures that no one else can open an online store with your brand name, even if they are selling completely different products. This 'Cross-Class Protection' through Class 35 is a cornerstone of modern brand enforcement strategies in India.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Final CTA in Middle */}
                <section className="bg-gray-900 rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
                   <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Secure Your Brand in the Right Class Today</h2>
                    <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto font-light">
                      Don't risk your business on a guess. Let our IP attorneys handle your classification and filing with 100% precision.
                    </p>
                    <Link href="/contact-us">
                      <button className="bg-white text-gray-900 font-black py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-2xl text-xl">
                        Schedule an Expert Call
                      </button>
                    </Link>
                  </div>
                </section>

              </article>
              </div>
            </div>
            {/* End of Main Content Area */}

            {/* Right Column - Sidebar Widgets */}
            <aside className="hidden lg:block space-y-10 sticky top-32">
              
              {/* Sidebar CTA Box */}
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Protect Your Brand Now</h3>
                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                  Don't let copycats profit from your hard work. Secure your trademark today with India's most trusted legal team.
                </p>
                <Link href="/contact-us" className="block relative z-10">
                  <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                    Book Free TM Search
                  </button>
                </Link>
                <div className="mt-6 pt-6 border-t border-white/10 relative z-10 text-center">
                  <a href="tel:+919289707648" className="text-indigo-300 font-bold hover:text-white transition-colors flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" /> +91-9289707648
                  </a>
                </div>
              </div>

              {/* Related Pages Widget */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Related Topics</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Registration Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gst-required-for-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">GST & Trademarks</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-register-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">TM Registration Guide</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </aside>

          </div>
        </div>

        {/* Floating Mobile CTA */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[100]">
          <Link href="/contact-us">
            <button className="w-full bg-[#6E5E93] text-white font-black py-4 rounded-2xl shadow-2xl flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} className="mr-3" /> Get Free Consultation
            </button>
          </Link>
        </div>

      </div>
    </>
  );
}
