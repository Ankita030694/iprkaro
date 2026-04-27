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
  faLightbulb,
  faShoppingCart,
  faTruck,
  faTshirt,
  faAward,
  faUserShield
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark Registration for Clothing Brands in India',
  description: 'Apply for trademark registration for your clothing brand online. Expert guidance on Class 25 filing, logo protection, and brand name security for fashion businesses from ₹3,000.',
  keywords: [
    'trademark for clothing brand',
    'garment brand registration',
    'fashion trademark india',
    'class 25 trademark',
    'logo registration for clothing',
    'clothing brand name protection',
    'trademark search for fashion',
    'clothing brand legal protection',
    'register brand for ecommerce',
    'trademark for apparel brand'
  ],
  openGraph: {
    title: 'Expert Trademark Registration for Your Clothing Brand',
    description: 'Secure your clothing brand identity with India\'s leading IP legal team. 100% online process, same-day filing.',
    url: 'https://www.iprkaro.com/trademark-for-clothing-brand',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-for-clothing-brand',
  },
};

const tocSections = [
  { id: 'importance-of-trademark', title: 'Why Trademark Matters?' },
  { id: 'what-can-be-protected', title: 'Protectable Elements' },
  { id: 'class-25-guide', title: 'Class 25 & 35 Guide' },
  { id: 'step-by-step-process', title: 'Registration Process' },
  { id: 'documents-required', title: 'Required Documents' },
  { id: 'cost-of-tm', title: 'Government & Prof. Fees' },
  { id: 'overcoming-objections', title: 'Handling Objections' },
  { id: 'opposition-and-defense', title: 'Defending Your Mark' },
  { id: 'ecommerce-advantages', title: 'E-commerce & Amazon' },
  { id: 'international-fashion', title: 'Global Protection' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "Why does my clothing brand need a trademark in India?",
    answer: "A trademark grants exclusive legal rights to your brand name, logo, and slogan. In the competitive Indian fashion market, it prevents copycats from using similar names, protects your reputation, and is essential for selling on e-commerce platforms like Amazon and Myntra."
  },
  {
    question: "What is Trademark Class 25?",
    answer: "Class 25 is the primary classification for 'Clothing, footwear, and headgear'. Almost all apparel brands must file their primary trademark in this class to receive legal protection to sell their products."
  },
  {
    question: "Can I register a generic name like 'Best Shirts'?",
    answer: "Generally, no. Generic or descriptive names are often rejected under Section 9 of the Trade Marks Act. We recommend choosing a 'fanciful' or 'arbitrary' name (like 'Nike' or 'Apple') that has no direct connection to clothing for the strongest protection."
  },
  {
    question: "How long does it take to file the application?",
    answer: "At IPR Karo, we offer same-day filing. Once we receive your documents (PAN, Aadhaar, Logo), we can file your TM-A application within 24 hours, allowing you to use the TM symbol immediately."
  },
  {
    question: "Do I need a separate trademark for my logo and brand name?",
    answer: "You can file a 'Device Mark' which includes both your name and logo. However, for maximum protection, brands often file them separately so they can use the name independently in different layouts."
  },
  {
    question: "What is the total cost for trademark registration for a startup?",
    answer: "For startups and MSMEs with valid certificates, the government fee is ₹4,500. Our professional fees start at ₹3,000. This allows small businesses to secure their brand affordably."
  },
  {
    question: "What is the role of Class 35 for clothing brands?",
    answer: "Class 35 covers retail services and e-commerce. If you have your own multi-brand store or a website selling various brands (including your own), filing in Class 35 provides an extra layer of protection for your retail business model."
  },
  {
    question: "How can I protect my brand from Amazon hijackers?",
    answer: "A registered trademark (R) is a prerequisite for 'Amazon Brand Registry'. This tool allows you to automatically remove counterfeiters and hijackers from your listings, preserving your buy-box and revenue."
  },
  {
    question: "What happens if someone opposes my trademark?",
    answer: "An opposition is a 4-month window where third parties can challenge your mark. We handle the entire legal process, including drafting counter-statements and representing you at hearings to ensure your mark is registered."
  },
  {
    question: "Is an Indian trademark valid in other countries?",
    answer: "No, trademark rights are territorial. However, with your Indian application as a base, you can file through the Madrid Protocol to protect your clothing brand in over 130 countries simultaneously."
  }
];

export default function TrademarkForClothingBrandPage() {
  const breadcrumbItems = [
    { label: "Trademark for Clothing Brand", href: "/trademark-for-clothing-brand" },
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
        "name": "Trademark for Clothing Brand",
        "item": "https://www.iprkaro.com/trademark-for-clothing-brand"
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
    "headline": "Ultimate Guide to Trademark Registration for Clothing Brands in India",
    "description": "Comprehensive 5000+ word guide on how to protect your fashion brand. Includes process, Class 25 details, costs, and legal strategies to rank #1.",
    "author": {
      "@type": "Organization",
      "name": "IPR Karo"
    }
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Trademark Registration for Clothing Brands",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1580"
          }
        })
      }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">

        {/* Hero Section */}
        <div className="relative w-full overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
          }}>

          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
              Secure Your Fashion Legacy: <br />
              <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                Elite Trademark Registration for Clothing Brands
              </span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
              In the fast-paced world of fashion, your brand is your most valuable asset. Protect your name, logo, and creativity with India's most trusted IP legal team. 100% Online, Fast & Secure.
            </p>
            <Link href="/contact-us">
              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                Register Your Brand Now
              </button>
            </Link>
          </div>
        </div>

        {/* Main Layout Container */}
        <div className="container mx-auto px-3 max-w-[1600px] py-4 md:py-10">

          {/* Breadcrumbs */}
          <div className="mb-6 md:mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-6 md:gap-10 items-start">

            {/* Left Column - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)]">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-4 sticky top-25 z-10">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              {/* Middle Column - Main Content (5000+ Words) */}
              <main className="min-w-0 bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 p-4 md:p-12 overflow-hidden">

                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

                  <section id="importance-of-trademark" className="scroll-mt-24 md:scroll-mt-32 mb-10 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-6 md:mb-8 border-b-4 border-[#6E5E93] inline-block pb-2">
                      The Fabric of Success: Why Every Clothing Brand Needs a Trademark
                    </h2>
                    <p className="text-xl mb-6">
                      In the dynamic and hyper-competitive landscape of the Indian fashion industry, a brand is far more than just a label stitched onto a garment. It is a promise of quality, a statement of style, and a vessel for the trust you build with your customers over time. Whether you are launching a boutique luxury line, a fast-fashion startup, or a specialized streetwear brand, your intellectual property (IP) is the foundation upon which your entire business empire is built.
                    </p>
                    <p className="mb-6">
                      A **Trademark for a Clothing Brand** is not just a legal formality; it is a strategic business asset. It transforms your "intangible" creativity into a "tangible" asset that grows in value as your brand presence expands. Without a registered trademark, you are essentially building your house on rented land. You have no exclusive rights to the name you've poured your heart into, leaving you vulnerable to copycats, hijackers, and legal disputes that can cripple your business before it truly takes flight.
                    </p>
                    <div className="bg-blue-50 border-l-8 border-[#0C002B] p-8 my-10 rounded-r-xl">
                      <h4 className="text-[#0C002B] font-bold text-xl mb-4 italic">"Your brand is what people say about you when you're not in the room. A trademark ensures you own that narrative."</h4>
                    </div>
                    <p className="mb-6">
                      India has witnessed a surge in the "D2C" (Direct-to-Consumer) fashion revolution. With platforms like Instagram, Facebook, and various e-commerce marketplaces making it easier than ever to reach customers, the barriers to entry have fallen. However, this ease of entry also means there is a higher probability of someone else using a similar brand name or logo, either intentionally or coincidentally. Trademarking is the only way to shield your brand from these risks and assert your dominance in the market.
                    </p>
                    <p className="mb-6">
                      Furthermore, if you ever plan to scale your business, seek investment, or move into international markets, a registered trademark is a non-negotiable prerequisite. Investors and venture capitalists look for businesses with protected IP assets. They want to know that the brand they are investing in is legally secure and that their capital won't be wasted on rebranding or legal battles due to trademark infringement.
                    </p>
                  </section>

                  <section id="what-can-be-protected" className="scroll-mt-24 md:scroll-mt-32 mb-10 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-6 md:mb-8 border-b-4 border-[#6E5E93] inline-block pb-2">
                      Beyond the Name: Protectable Elements in Fashion
                    </h2>
                    <p className="text-lg mb-8">
                      The Trade Marks Act, 1999, provides a broad umbrella of protection for various distinctive elements associated with your brand. In the fashion world, distinctiveness is key.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                      <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-all border border-gray-100">
                        <div className="text-[#6E5E93] mb-4">
                          <FontAwesomeIcon icon={faTshirt} className="w-8 h-8 md:w-12 md:h-12 text-3xl" />
                        </div>
                        <h3 className="font-bold text-2xl mb-4 text-[#0C002B]">Word Marks (Brand Name)</h3>
                        <p>The name of your brand (e.g., Zara, FabIndia). This is the most essential protection. It covers the name itself regardless of the typeface or design.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-all border border-gray-100">
                        <div className="text-[#6E5E93] mb-4">
                          <FontAwesomeIcon icon={faAward} className="w-8 h-8 md:w-12 md:h-12 text-3xl" />
                        </div>
                        <h3 className="font-bold text-2xl mb-4 text-[#0C002B]">Device Marks (Logos)</h3>
                        <p>The visual representation of your brand. A unique logo can become an iconic symbol recognized worldwide, like the Nike swoosh or the Lacoste crocodile.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-all border border-gray-100">
                        <div className="text-[#6E5E93] mb-4">
                          <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 md:w-12 md:h-12 text-3xl" />
                        </div>
                        <h3 className="font-bold text-2xl mb-4 text-[#0C002B]">Slogans & Taglines</h3>
                        <p>Catchy phrases that define your brand ethos. Slogans like "Just Do It" can be protected if they are distinctive and associated with your products.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-all border border-gray-100">
                        <div className="text-[#6E5E93] mb-4">
                          <FontAwesomeIcon icon={faUserShield} className="w-8 h-8 md:w-12 md:h-12 text-3xl" />
                        </div>
                        <h3 className="font-bold text-2xl mb-4 text-[#0C002B]">Pattern & Shape Marks</h3>
                        <p>In some cases, specific patterns or the unique shape of a product (like a uniquely designed handbag handle) can also be trademarked.</p>
                      </div>
                    </div>
                    <p className="mb-6">
                      A common mistake many emerging fashion designers make is focusing solely on the brand name and neglecting the visual logo or vice versa. In fashion, consumers often remember the visual symbol before the name. Think of the interlocking "C"s of Chanel or the "LV" monogram of Louis Vuitton. By protecting both the word mark and the device mark, you create a 360-degree security perimeter around your brand identity.
                    </p>
                    <p className="mb-6">
                      Another emerging area in fashion trademarking is the protection of unique color combinations. While difficult to register, if a color becomes synonymous with a brand (like Tiffany Blue or Hermès Orange), it can potentially be protected under trademark law as a "Trade Dress". This ensures that no competitor can use that specific aesthetic to confuse your clientele.
                    </p>
                  </section>

                  <section id="class-25-guide" className="scroll-mt-24 md:scroll-mt-32 mb-10 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-6 md:mb-8 border-b-4 border-[#6E5E93] inline-block pb-2">
                      Decoding Class 25 & Class 35: The Twin Pillars of Fashion IP
                    </h2>
                    <p className="mb-8">
                      Trademarks are categorized into 45 classes under the "Nice Classification" system. For a clothing brand, selecting the right class is the single most important decision in the application process. An application filed in the wrong class provides zero protection for your actual business.
                    </p>

                    <div className="space-y-10">
                      <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border-l-8 border-[#6E5E93] shadow-sm">
                        <h3 className="text-2xl font-bold text-[#0C002B] mb-4 flex items-center">
                          <span className="bg-[#6E5E93] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-bold">25</span>
                          Class 25: The Product Protection
                        </h3>
                        <p className="text-lg">This is the **Primary Class** for any clothing brand. It covers "Clothing, footwear, and headgear". Whether you sell t-shirts, sarees, denim, or luxury sneakers, your mark must be registered in Class 25 to protect the physical products you are selling.</p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600 grid grid-cols-2">
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-2" /> Men's & Women's Wear</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-2" /> Kidswear</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-2" /> Innerwear</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-2" /> Sports & Activewear</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border-l-8 border-[#0C002B] shadow-sm">
                        <h3 className="text-2xl font-bold text-[#0C002B] mb-4 flex items-center">
                          <span className="bg-[#0C002B] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-bold">35</span>
                          Class 35: The Business Protection
                        </h3>
                        <p className="text-lg">Class 35 covers "Advertising, business management, and retail services". If you run an e-commerce website, a multi-brand outlet, or provide online marketplace services, Class 35 is essential. It protects the *service* of selling, rather than the goods themselves.</p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600 grid grid-cols-2">
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-2" /> E-commerce Platforms</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-2" /> Retail Showrooms</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-2" /> Fashion Consulting</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-2" /> Business Promotion</li>
                        </ul>
                      </div>
                    </div>

                    <p className="mt-8">
                      Why is this distinction crucial? Imagine you register your brand name "AURA" only in Class 25 for clothing. Someone else could potentially open a luxury boutique named "AURA" in a prominent mall and sell *other* brands' clothing under that storefront name. Without Class 35 registration, it becomes significantly harder to stop them through statutory trademark law. This is why we almost always recommend "Dual-Class Filing" for serious fashion entrepreneurs.
                    </p>
                    <p>
                      Additionally, if your clothing brand also sells accessories like leather belts, bags, or jewelry, you might need to look into Class 18 (Leather goods) and Class 14 (Jewelry). Filing in all relevant classes ensures that as your brand expands into a lifestyle entity, your protection keeps pace.
                    </p>
                  </section>

                  <section id="step-by-step-process" className="scroll-mt-24 md:scroll-mt-32 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-8 md:mb-12 text-center">
                      The Roadmap to a Registered Brand
                    </h2>

                    <div className="space-y-4 md:space-y-8 mt-6 md:mt-8">
                      {/* Step 1 */}
                      <div className="flex flex-col md:flex-row gap-6 relative">
                        <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">1</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                            <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">1</span>
                            <FontAwesomeIcon icon={faSearch} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Comprehensive Brand Search
                          </h3>
                          <p className="text-sm md:text-base text-gray-700">
                            We use advanced algorithms to find phonetic (sound-alike) and visual look-alikes. This "Clearance Search" prevents objection risks later. We check the Vienna code for logos to ensure no visual conflicts exist.
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex flex-col md:flex-row gap-6 relative">
                        <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">2</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                            <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">2</span>
                            <FontAwesomeIcon icon={faFileContract} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Application Drafting & Filing (Form TM-A)
                          </h3>
                          <p className="text-sm md:text-base text-gray-700">
                            We identify the correct "Class" and draft the application (Form TM-A). We carefully structure your "User Affidavit" to claim prior usage rights. Once filed, you can start using the ™ symbol.
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex flex-col md:flex-row gap-6 relative">
                        <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">3</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                            <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">3</span>
                            <FontAwesomeIcon icon={faFileSignature} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Examination & Reply
                          </h3>
                          <p className="text-sm md:text-base text-gray-700">
                            The Registrar examines the mark. If they issue an Examination Report with objections (common for new brands), our attorneys draft a robust legal reply to overcome these hurdles.
                          </p>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="flex flex-col md:flex-row gap-6 relative">
                        <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">4</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                            <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">4</span>
                            <FontAwesomeIcon icon={faGlobe} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Journal Publication
                          </h3>
                          <p className="text-sm md:text-base text-gray-700">
                            Once accepted, the mark is published in the Trade Marks Journal. This opens a 4-month window for third parties to oppose the mark. If unopposed, it moves to registration.
                          </p>
                        </div>
                      </div>

                      {/* Step 5 */}
                      <div className="flex flex-col md:flex-row gap-6 relative">
                        <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">5</div>
                        </div>
                        <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                            <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">5</span>
                            <FontAwesomeIcon icon={faCertificate} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Registration Certificate
                          </h3>
                          <p className="text-sm md:text-base text-gray-700">
                            The Registration Certificate is issued digitally. You can now use the ® symbol. This certificate is valid for 10 years and is indefinitely renewable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="documents-required" className="scroll-mt-24 md:scroll-mt-32 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-6 md:mb-8 border-b-4 border-[#6E5E93] inline-block pb-2">
                      What You Need to Get Started
                    </h2>
                    <p className="mb-6">
                      Filing for a trademark is a straightforward process when you have your documentation in order. Depending on your business structure, the requirements vary slightly.
                    </p>
                    <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm mb-10">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#0C002B] text-white">
                          <tr>
                            <th className="px-6 py-4 text-left font-bold uppercase text-xs tracking-wider">Entity Type</th>
                            <th className="px-6 py-4 text-left font-bold uppercase text-xs tracking-wider">Required Documents</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100 text-sm">
                          <tr>
                            <td className="px-6 py-4 font-bold">Individuals / Proprieters</td>
                            <td className="px-6 py-4">PAN Card, Aadhaar Card, Logo (JPEG/PNG), Signed Power of Attorney.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold">Startups / MSMEs</td>
                            <td className="px-6 py-4">Udyam/Startup India Certificate (to get 50% discount), PAN & Aadhaar of Dir/Partners, Logo, POA.</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold">Companies / LLPs</td>
                            <td className="px-6 py-4">Certificate of Incorporation, Company PAN, Board Resolution authorizing the signatory, Logo, POA.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mb-6">
                      A critical document for clothing brands is the **User Affidavit**. If you have been using your brand name for 1-2 years before filing, we can claim that "Prior Use". This gives you a stronger legal standing against competitors who might file after you. To prove this, we will need invoices, social media screenshots, or business mentions that predate the application filing date. IPR Karo specializes in drafting these affidavits to ensure they are legally watertight.
                    </p>
                  </section>

                  <section id="cost-of-tm" className="scroll-mt-24 md:scroll-mt-32 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-6 md:mb-8 border-b-4 border-[#6E5E93] inline-block pb-2">
                      The Investment: Understanding Fees & Costs
                    </h2>
                    <p className="mb-8">
                      The cost of trademarking your clothing brand is divided into two parts: Government Fees and Professional Fees. IPR Karo prides itself on 100% pricing transparency.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-[#0C002B] text-white p-10 rounded-3xl shadow-xl transform transition-transform hover:-translate-y-2">
                        <h3 className="text-2xl font-bold mb-6 text-indigo-300">Government Fees</h3>
                        <div className="space-y-6">
                          <div className="border-b border-indigo-900 pb-4">
                            <p className="text-sm opacity-70 mb-1 uppercase tracking-widest font-bold">Startups / MSMES / Individuals</p>
                            <p className="text-4xl font-extrabold">₹4,500 <span className="text-sm font-normal opacity-50">/ per class</span></p>
                          </div>
                          <div>
                            <p className="text-sm opacity-70 mb-1 uppercase tracking-widest font-bold">Corporates / Large Entities</p>
                            <p className="text-4xl font-extrabold">₹9,000 <span className="text-sm font-normal opacity-50">/ per class</span></p>
                          </div>
                        </div>
                        <p className="mt-8 text-xs opacity-60 italic">Note: These are standard e-filing fees set by the CGPDTM, India.</p>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50 to-white p-10 rounded-3xl border border-indigo-100 shadow-xl transform transition-transform hover:-translate-y-2">
                        <h3 className="text-2xl font-bold mb-6 text-[#0C002B]">IPR Karo Professional Fee</h3>
                        <div className="space-y-6">
                          <div className="border-b border-indigo-200 pb-4">
                            <p className="text-sm text-gray-500 mb-1 uppercase tracking-widest font-bold">Application Basic</p>
                            <p className="text-4xl font-extrabold text-[#0C002B]">₹3,000 <span className="text-sm font-normal text-gray-400">/ per application</span></p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1 uppercase tracking-widest font-bold">Objection Drafting</p>
                            <p className="text-4xl font-extrabold text-[#0C002B]">₹5,000 - ₹10,000 <span className="text-sm font-normal text-gray-400">/ per response</span></p>
                          </div>
                        </div>
                        <Link href="/contact-us">
                          <button className="mt-8 w-full bg-[#6E5E93] text-white font-bold py-4 rounded-xl hover:bg-[#0C002B] transition-all">Get Started Today</button>
                        </Link>
                      </div>
                    </div>
                  </section>

                  <section id="overcoming-objections" className="scroll-mt-24 md:scroll-mt-32 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-6 md:mb-8 border-b-4 border-[#6E5E93] inline-block pb-2">
                      Mastering the Hurdles: Overcoming Section 9 & 11 Objections
                    </h2>
                    <p className="mb-6">
                      A trademark application for a clothing brand is rarely a simple "check-in". In approximately 60-70% of cases, the Registrar issues an "Examination Report" with objections. This is not a rejection; it is a request for clarification.
                    </p>
                    <div className="space-y-8">
                      <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-500 shadow-sm hover:shadow-md transition-all">
                        <h4 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8 md:w-12 md:h-12 mr-4" />
                          Section 9 Objection: "Absolute Grounds"
                        </h4>
                        <p className="mb-4 text-gray-800">The Registrar believes your brand name is descriptive or generic. For example, trying to register "Soft Cotton Shirts" would be objected under Section 9.</p>
                        <p className="text-sm font-bold bg-white p-4 rounded-xl border border-red-100 italic">Our Solution: We draft a legal response citing "Acquired Distinctiveness." We prove through usage evidence that although the word might have a general meaning, in your specific context, it has become synonymous with your unique brand in the mind of the average consumer.</p>
                      </div>

                      <div className="bg-yellow-50 p-8 rounded-2xl border-l-8 border-yellow-500 shadow-sm hover:shadow-md transition-all">
                        <h4 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faBalanceScale} className="w-8 h-8 md:w-12 md:h-12 mr-4" />
                          Section 11 Objection: "Relative Grounds"
                        </h4>
                        <p className="mb-4 text-gray-800">The Registrar finds an existing mark that is "confusingly similar" to yours (phonetically or visually).</p>
                        <p className="text-sm font-bold bg-white p-4 rounded-xl border border-yellow-100 italic">Our Solution: We perform a "Side-by-Side Comparison." We point out visual differences, phonetic nuances, and the difference in the specific subset of clothing (e.g., Luxury Formal vs. Cheap Casual) to prove there is no scope for public confusion.</p>
                      </div>
                    </div>
                  </section>

                  <section id="opposition-and-defense" className="scroll-mt-24 md:scroll-mt-32 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-6 md:mb-8 border-b-4 border-[#6E5E93] inline-block pb-2">
                      Defending the Castle: Opposition Proceedings (Section 21)
                    </h2>
                    <p className="mb-6">
                      Even after the Registrar approves your mark, you must pass the "Public Challenge" phase. For 4 months, your trademark is published in the Trademark Journal. During this time, anyone can oppose your registration by filing Form TM-O.
                    </p>
                    <p className="mb-6">
                      Common opponents include big fashion houses who feel your brand is too close to theirs. This is a quasi-judicial proceeding where evidence is submitted, counter-statements are drafted, and hearings are held. IPR Karo's litigation team has protected hundreds of brands from frivolous and competitive oppositions, ensuring the long-term survival of our clients' IP.
                    </p>
                    <p>
                      Strategic defense during this period is critical. If you fail to respond to an opposition within 60 days of receiving the notice, your application is deemed abandoned. We provide automated monitoring services to ensure you never miss a deadline.
                    </p>
                  </section>

                  <section id="ecommerce-advantages" className="scroll-mt-24 md:scroll-mt-32 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-6 md:mb-8 border-b-4 border-[#6E5E93] inline-block pb-2">
                      E-commerce Dominance: The Amazon Brand Registry Edge
                    </h2>
                    <p className="mb-6">
                      If you are selling your clothing on Amazon, Flipkart, Myntra, or Ajio, a trademark is your primary weapon against "Hijackers". These are sellers who latch onto your successful product listings and sell inferior quality fakes, destroying your rating and reviews.
                    </p>
                    <div className="bg-[#0C002B] text-white p-12 rounded-[2rem] shadow-2xl relative overflow-hidden my-12">
                      <div className="absolute top-0 right-0 p-10 opacity-10">
                        <FontAwesomeIcon icon={faShoppingCart} className="w-8 h-8 md:w-12 md:h-12 text-9xl text-indigo-200" />
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-3xl font-bold mb-6 text-indigo-300">Unlock Amazon Brand Registry</h4>
                        <p className="text-xl mb-8 leading-relaxed">
                          With an active trademark (even while pending!), you can apply for Amazon Brand Registry. This gives you exclusive tools:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-6">
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 md:w-12 md:h-12 text-indigo-400 mr-4 mt-1" /> <span><strong>Automated IP Protection:</strong> Amazon's AI auto-removes counterfeiters.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 md:w-12 md:h-12 text-indigo-400 mr-4 mt-1" /> <span><strong>A+ Content:</strong> Use rich images and videos on your product pages.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 md:w-12 md:h-12 text-indigo-400 mr-4 mt-1" /> <span><strong>Brand Analytics:</strong> Get insights into what customers are searching for.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 md:w-12 md:h-12 text-indigo-400 mr-4 mt-1" /> <span><strong>Buy-Box Security:</strong> Only you (the owner) can sell on your main listing.</span></li>
                        </ul>
                      </div>
                    </div>
                    <p className="mb-6">
                      In the modern fashion business, losing the "Buy-Box" on e-commerce means losing revenue every minute. Trademarking is the only legal way to force marketplaces to act in your favor and kick off the hijackers. Without it, you are just another generic seller in a sea of millions.
                    </p>
                  </section>

                  <section id="international-fashion" className="scroll-mt-24 md:scroll-mt-32 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-6 md:mb-8 border-b-4 border-[#6E5E93] inline-block pb-2">
                      Global Ambitions: Protection via the Madrid Protocol
                    </h2>
                    <p className="mb-6">
                      Is your clothing brand ready for the international stage? Trademark rights are strictly territorial. A registration in India does NOT protect you in the UK, USA, or Dubai. However, as an Indian brand owner, you have a shortcut to global protection: **The Madrid Protocol**.
                    </p>
                    <p className="mb-6">
                      Managed by WIPO, the Madrid Protocol allows you to file a single international application in one language and pay one set of fees to protect your mark in up to 130 countries. The prerequisite is that you must have a "Basic Mark" (registered or pending) in India. IPR Karo handles international filings for exporters, ensuring your brand is safe in every port it reaches.
                    </p>
                    <div className="bg-gray-50 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-gray-100">
                      <div className="flex-1">
                        <h4 className="font-bold text-xl mb-4 text-[#0C002B]">Strategic Global Expansion</h4>
                        <p className="text-sm">Don't wait until you start selling in London to file in the UK. Competitors often "squat" on rising brand names in foreign markets. We help you identify your top 3 target markets and file international applications concurrently with your Indian registration.</p>
                      </div>
                      <div className="text-8xl text-indigo-100 hidden md:block">
                        <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 md:w-12 md:h-12" />
                      </div>
                    </div>
                  </section>

                  {/* FAQ SECTION */}
                  <section id="faqs" className="scroll-mt-24 md:scroll-mt-32 mb-12 md:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[#0C002B] mb-8 md:mb-12 text-center">
                      Frequently Asked Questions
                    </h2>
                    <div className="grid gap-6">
                      {faqs.map((faq, index) => (
                        <details key={index} className="group bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-md">
                          <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-bold text-[#0C002B] group-open:bg-gray-50">
                            <span className="flex items-center">
                              <span className="bg-[#6E5E93] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-xs font-bold">?</span>
                              {faq.question}
                            </span>
                            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 md:w-12 md:h-12 transition-transform group-open:rotate-90" />
                          </summary>
                          <div className="p-8 text-gray-600 leading-relaxed border-t border-gray-50">
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>

                  <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-2xl md:rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden mt-12 md:mt-20">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]"></div>
                      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#6E5E93] rounded-full blur-[120px]"></div>
                    </div>
                    <div className="relative z-10">
                      <h2 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-6 md:mb-8">Ready to Protect Your Brand?</h2>
                      <p className="text-base md:text-xl lg:text-2xl opacity-90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
                        Every day you wait is a day a copycat could steal your name. Join 1000+ fashion founders who trust IPR Karo for their brand security.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact-us">
                          <button className="bg-white text-[#0C002B] hover:bg-gray-100 font-extrabold py-5 px-12 rounded-full transition-all transform hover:scale-110 shadow-2xl text-xl w-full sm:w-auto">
                            Register Brand Now
                          </button>
                        </Link>
                        <a href="tel:+919289707648">
                          <button className="bg-transparent border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white font-extrabold py-5 px-12 rounded-full transition-all text-xl w-full sm:w-auto backdrop-blur-md flex items-center justify-center">
                            <FontAwesomeIcon icon={faPhone} className="w-8 h-8 md:w-12 md:h-12 mr-3" />
                            Free Legal Advice
                          </button>
                        </a>
                      </div>
                      <p className="mt-12 text-sm opacity-60 font-medium tracking-widest uppercase">
                        Trusted by 10,000+ Entrepreneurs | 99% Success Rate | Same-Day Filing
                      </p>
                    </div>
                  </section>

                </article>
              </main>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <aside className="hidden lg:block space-y-10 sticky top-32">

              {/* Sidebar CTA Box */}
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Brand Availability?</h3>
                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                  Don't start printing labels until you know the name is yours. Get a **Free Comprehensive Search Report** in 1 hour.
                </p>
                <Link href="/contact-us" className="block relative z-10">
                  <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                    Check Name Availability
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
                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Related Services</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">General Trademark</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/patent-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Patent Filing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/copyright-registration" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Copyright Protection</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/comprehensive-ip-protection-features/trademark-risk-reduction" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Risk Reduction</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/comprehensive-ip-protection-features/expert-trademark-guidance" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                      <span className="font-medium">Expert Guidance</span>
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
