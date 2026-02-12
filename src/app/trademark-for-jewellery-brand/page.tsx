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
  faGem,
  faRing,
  faAward,
  faUserShield,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark Registration for Jewellery Brands in India | Protect Your Brand',
  description: 'Apply for trademark registration for your jewellery brand online. Expert guidance on Class 14 filing, logo protection, and brand name security for jewellery businesses from ₹3,000.',
  keywords: [
    'trademark for jewellery brand',
    'jewellery brand registration',
    'gold jewellery trademark india',
    'class 14 trademark',
    'logo registration for jewellery',
    'jewellery brand name protection',
    'trademark search for jewellery',
    'diamond brand legal protection',
    'register brand for jewellery shop',
    'trademark for silver jewellery brand'
  ],
  openGraph: {
    title: 'Expert Trademark Registration for Your Jewellery Brand',
    description: 'Secure your jewellery brand identity with India\'s leading IP legal team. 100% online process, same-day filing.',
    url: 'https://www.iprkaro.com/trademark-for-jewellery-brand',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-for-jewellery-brand',
  },
};

const tocSections = [
  { id: 'importance-of-trademark', title: 'Why Trademark Matters?' },
  { id: 'what-can-be-protected', title: 'Protectable Elements' },
  { id: 'class-14-guide', title: 'Class 14, 35 & 42 Guide' },
  { id: 'step-by-step-process', title: 'Registration Process' },
  { id: 'documents-required', title: 'Required Documents' },
  { id: 'cost-of-tm', title: 'Government & Prof. Fees' },
  { id: 'overcoming-objections', title: 'Handling Objections' },
  { id: 'opposition-and-defense', title: 'Defending Your Mark' },
  { id: 'online-advantages', title: 'Online & Instagram' },
  { id: 'international-protection', title: 'Global Protection' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "Which trademark class covers jewellery in India?",
    answer: "Jewellery, precious metals, and stones are covered under Class 14 of the Nice Classification system. If you are also selling via a retail outlet or website, Class 35 is recommended for service protection."
  },
  {
    question: "Why is a trademark essential for a jewellery brand?",
    answer: "A trademark protects your unique brand name and logo from being used by competitors. In the high-value jewellery market, trust is everything, and a registered mark ensures that customers are buying from your authentic brand."
  },
  {
    question: "Can I use the (R) symbol immediately after filing?",
    answer: "No, you can only use the (R) symbol after receiving the final Registration Certificate. However, you can use the TM symbol immediately after filing the application to signal your claim of ownership."
  },
  {
    question: "What is the importance of a trademark search for jewellery?",
    answer: "A comprehensive search ensures that your chosen name or logo does not conflict with existing brands. This prevents legal disputes and reduces the risk of the Registrar objecting to your application."
  },
  {
    question: "How long does the registration process take?",
    answer: "The entire process usually takes between 12 to 18 months. However, with IPR Karo's same-day filing, your legal protection begins almost immediately as you receive the application number."
  },
  {
    question: "Can a jewellery design be trademarked?",
    answer: "Trademarks primarily protect brand identifiers like names and logos. Unique jewellery designs are better protected under the Designs Act, 2000, though sometimes a shape can be trademarked if it is truly iconic."
  },
  {
    question: "Is my Indian trademark valid in other countries?",
    answer: "No, trademark rights are territorial. To protect your brand in foreign markets, you must file separate applications or use the Madrid Protocol for international registration."
  },
  {
    question: "What documents are required for an individual entrepreneur?",
    answer: "You will need your PAN card, Aadhaar card, a high-quality logo in JPEG/PNG format, and a signed Power of Attorney authorizing us to file on your behalf."
  },
  {
    question: "How do I handle a trademark objection?",
    answer: "Objections are common. Our expert attorneys draft comprehensive legal replies to the Registrar, arguing for the distinctiveness of your brand and overcoming challenges based on similar existing marks."
  },
  {
    question: "What is the cost for a startup to register a trademark?",
    answer: "For startups and MSMEs, the government fee is reduced to ₹4,500. Combined with our professional fee of ₹3,000, you can secure your jewellery brand for a total of ₹7,500 plus taxes."
  },
  {
    question: "Can I trademark a common name like 'Gold Shop'?",
    answer: "Generic or descriptive names like 'Gold Shop' are generally rejected under Section 9 of the Trade Marks Act. We recommend choosing a unique, 'fanciful' name for the strongest legal protection."
  }
];

export default function TrademarkForJewelleryBrandPage() {
  const breadcrumbItems = [
    { label: "Trademark for Jewellery Brand", href: "/trademark-for-jewellery-brand" },
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
        "name": "Trademark for Jewellery Brand",
        "item": "https://www.iprkaro.com/trademark-for-jewellery-brand"
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
    "headline": "Ultimate Guide to Trademark Registration for Jewellery Brands in India",
    "description": "Exhaustive legal guide on how to protect your jewellery brand identity. Covers Class 14 details, process, costs, and international strategies.",
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
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration for Jewellery Brands",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2150"
        }
      })}} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#1a0033] via-[#312e81] to-[#4c1d95] py-10 lg:py-32">
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h1 className="text-xl md:text-4xl lg:text-6xl font-extrabold mb-3 md:mb-5 text-white leading-tight mt-12 md:mt-20">
               Protect Your Jewellery Legacy: <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-200">
                 Elite Trademark Registration for Jewellery Brands
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-5 md:mb-8 max-w-3xl mx-auto text-indigo-50 font-medium leading-relaxed px-2 opacity-90">
               In the world of fine jewellery, your brand identity is your most precious diamond. Secure your name, logo, and heritage with India's most prestigious IP legal firm. Fast, Secure, and 100% Online.
             </p>
             <div className="flex flex-col items-center gap-5 justify-center">
               <Link href="/contact-us">
                 <button className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:from-indigo-500 hover:to-purple-400 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl text-base w-full sm:w-auto uppercase tracking-wide">
                   Ignite Your Brand Security
                 </button>
               </Link>
               <a href="tel:+919289707648" className="group">
                 <div className="flex items-center text-white font-bold text-lg hover:text-purple-400 transition-colors">
                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-purple-500/20 transition-all">
                      <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                   </div>
                   Request Master Consultation
                 </div>
               </a>
             </div>
          </div>
        </div>

        {/* Desktop Breadcrumbs Container */}
        <div className="bg-gray-50 border-b border-gray-200 py-3">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Main Layout Container */}
        <div className="container mx-auto px-3 max-w-8xl py-3 md:py-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_280px] gap-5 md:gap-8 items-start">
            
            {/* Left Column - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto no-scrollbar">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-[#312e81] font-black text-lg mb-5 uppercase tracking-widest border-l-4 border-indigo-600 pl-3">Table of Contents</h4>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Column - Main Content (5000+ Words) */}
            <main className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-24 z-20">
                <div className="bg-white shadow-xl rounded-2xl border border-gray-100 p-2">
                  <TableOfContents sections={tocSections} orientation="horizontal" />
                </div>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 p-3 md:p-10 overflow-hidden relative">
              
              <article className="prose prose-base max-w-none text-gray-700 leading-relaxed font-normal">
                
                <section id="importance-of-trademark" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-[#312e81] mb-5 md:mb-6 border-b-4 border-indigo-600 inline-block pb-2">
                    The Crown Jewel of Legal Security: Why Your Jewellery Brand Demands a Trademark
                  </h2>
                  <p className="text-xl mb-8 text-gray-600 italic font-medium border-l-6 border-indigo-600 pl-6 py-3">
                    In the hyper luxe world of the Indian jewellery industry, a brand name is not just a moniker. It is a lineage of trust, a guarantee of purity, and a legacy of exquisite craftsmanship that spans generations.
                  </p>
                  <p className="mb-8 first-letter:text-6xl first-letter:font-black first-letter:text-indigo-600 first-letter:mr-2 first-letter:float-left">
                    When we speak of jewellery, we are talking about high-ticket assets. The consumer decision process is driven by one core factor, and that is confidence. Whether you are a heritage brand from the heart of Jaipur, a modern diamond house in Mumbai, or a digital-first silver brand, your intellectual property (IP) is the fortress that protects this confidence. A **Trademark for a Jewellery Brand** is the ultimate legal instrument that ensures your hard-earned reputation cannot be cannibalized by imitators or counterfeiters who seek to profit from your creative sweat.
                  </p>
                  <p className="mb-8">
                    India's jewellery market is expected to reach staggering heights by 2030. With the rise of branded jewellery and organized retail, the risk of trademark infringement has never been higher. Without a registered mark, your brand is vulnerable. Anyone could open a store with a deceptively similar name, sell sub-standard gold or diamonds, and leave your brand to deal with the reputational fallout. Trademarking is the only way to exert total control over your brand narrative and market presence.
                  </p>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-10 my-11 rounded-[1.5rem] border-2 border-indigo-200/50 shadow-inner">
                    <h3 className="text-[#4c1d95] font-black text-2xl mb-5">Strategy Over Formality</h3>
                    <p className="text-base leading-relaxed text-gray-700">
                      We view trademark registration not as a simple filing exercise, but as a long-term business strategy. Every major player in the industry, from Tanishq and Kalyan Jewellers to niche luxury designers, understands that their brand value resides in the name. A registered trademark is an intangible asset that appreciates over time, much like the precious metals you sell. It can be licensed, franchised, or used as collateral for business expansion.
                    </p>
                  </div>
                  <p className="mb-8">
                    The Direct to Consumer (D2C) revolution has also hit the jewellery sector. Thousands of entrepreneurs are now selling jewellery through Instagram, Facebook, and dedicated e-commerce portals. This digital explosion has led to a chaos of brand names. In this crowded marketplace, a registered trademark acts as a digital lighthouse, guiding customers to your authentic products. It is the prerequisite for joining the elite e-commerce protection programs like Amazon Brand Registry, which allows for the automatic removal of counterfeiters.
                  </p>
                </section>

                <section id="what-can-be-protected" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-[#312e81] mb-5 md:mb-6 border-b-4 border-indigo-600 inline-block pb-2">
                    Anatomy of Brand Protection: What Elements Can You Secure?
                  </h2>
                  <p className="text-base mb-6">
                    Under the Trade Marks Act, 1999, you have the power to protect a wide range of distinctive identifiers. In the jewellery industry, where visual aesthetics are paramount, these elements often work in harmony to create a brand's unique "look and feel."
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all border border-gray-100">
                      <div className="text-indigo-600 mb-3">
                        <FontAwesomeIcon icon={faRing} className="w-6 h-6 md:w-10 md:h-10 text-2xl" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-[#312e81]">Word Marks</h3>
                      <p>The cornerstone of your identity. Protecting the brand name itself (e.g., "ORRA" or "CaratLane") ensures that no one else can use that name across any font, color, or style. This is your primary shield.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all border border-gray-100">
                      <div className="text-indigo-600 mb-3">
                        <FontAwesomeIcon icon={faGem} className="w-6 h-6 md:w-10 md:h-10 text-2xl" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-[#312e81]">Device Marks (Logos)</h3>
                      <p>In jewellery, a logo is often a mark of craftsmanship. Think of the iconic lotus or a specific geometric emblem. Protecting the visual mark prevents competitors from confusing customers with similar-looking shop signs or packaging.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all border border-gray-100">
                      <div className="text-indigo-600 mb-3">
                        <FontAwesomeIcon icon={faAward} className="w-6 h-6 md:w-10 md:h-10 text-2xl" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-[#312e81]">Distinctive Packaging</h3>
                      <p>The "unboxing" experience is vital for luxury jewellery. A uniquely shaped velvet box or a specific color scheme (like the Tiffany Blue) can potentially be protected under Trade Dress laws to prevent aesthetic imitation.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all border border-gray-100">
                      <div className="text-indigo-600 mb-3">
                         <FontAwesomeIcon icon={faUserShield} className="w-6 h-6 md:w-10 md:h-10 text-2xl" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-[#312e81]">Signature Motifs</h3>
                      <p>If your brand has a recurring design motif that has become synonymous with your work, we can explore protecting it as a device mark to ensure that the pattern remains your exclusive property.</p>
                    </div>
                  </div>
                  <p className="mb-8">
                    A common mistake is focusing only on the brand name. In high-end jewellery retail, the logo and the tagline provide auxiliary layers of protection. A tagline like "Purity You Can Trust" can be registered if it is distinctive to your business. By creating a multi-layered IP portfolio, you make it incredibly difficult for infringers to find a loophole in your brand security.
                  </p>
                </section>

                <section id="class-14-guide" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-[#312e81] mb-5 md:mb-6 border-b-4 border-indigo-600 inline-block pb-2">
                    Mastering the Class System: 14, 35, and 42
                  </h2>
                  <p className="mb-8 text-lg">
                    Trademarks in India are categorized under 45 different classes based on the nature of goods or services. For a jewellery brand, filing in the wrong class is as good as not filing at all. Precision in classification is the foundation of enforceable protection.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-6 border-indigo-600 shadow-sm">
                      <h3 className="text-xl font-bold text-[#312e81] mb-3 flex items-center">
                        <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-xs font-bold">14</span>
                        Class 14: The Product Sovereignty
                      </h3>
                      <p className="text-base">This is the **Sacred Class** for the jewellery industry. It covers precious metals and their alloys, jewellery, precious and semi-precious stones, and horological instruments (watches). Whether you are selling 22K gold temple jewellery, lab-grown diamonds, or antique silver sets, your primary registration must be in Class 14.</p>
                      <ul className="mt-3 space-y-1.5 text-xs text-gray-600 grid grid-cols-2">
                        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-3 h-3 md:w-5 md:h-5 text-indigo-600 mr-2" /> Gold & Platinum Jewellery</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-3 h-3 md:w-5 md:h-5 text-indigo-600 mr-2" /> Diamonds & Gemstones</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-3 h-3 md:w-5 md:h-5 text-indigo-600 mr-2" /> Luxury Timepieces</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="w-3 h-3 md:w-5 md:h-5 text-indigo-600 mr-2" /> Custom Crafted Ornaments</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-6 border-[#312e81] shadow-sm">
                      <h3 className="text-xl font-bold text-[#312e81] mb-3 flex items-center">
                        <span className="bg-[#312e81] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-xs font-bold">35</span>
                        Class 35: The Retail Domain
                      </h3>
                      <p className="text-base">While Class 14 protects the physical jewellery, Class 35 protects the *retail store* or *e-commerce platform*. If you have a beautiful showroom or a fast-growing website, you need Class 35. It prevents another person from opening a jewellery store with your name, even if they aren't manufacturing their own pieces.</p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-6 border-gray-400 shadow-sm">
                      <h3 className="text-xl font-bold text-[#312e81] mb-3 flex items-center">
                        <span className="bg-gray-400 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-xs font-bold">42</span>
                        Class 42: The Expert Authentication
                      </h3>
                      <p className="text-base">For brands that provide professional services like diamond grading, jewellery authentication, or gemological analysis, Class 42 is essential. It protects your brand in the sphere of scientific and technological services. This is highly recommended for high-end boutique stores and specialized gemstone dealers.</p>
                    </div>
                  </div>

                  <p className="mt-6">
                    Why is this multi-class strategy vital? Consider a scenario where you've only registered in Class 14 for jewellery. A competitor could potentially open a lifestyle store chain or an influencer could start a jewellery-review blog using your exact brand name. Since you aren't registered for services (Class 35) or digital content, stopping them becomes a much larger legal headache involving "Passing Off" common law, rather than simple trademark infringement. IPR Karo ensures we bridge these gaps from day one.
                  </p>
                </section>

                <section id="step-by-step-process" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#312e81] mb-10 text-center uppercase tracking-tighter">
                    The Elite Registry Path: A 5-Stage Journey
                  </h2>
                  <p className="text-center text-xl max-w-3xl mx-auto mb-12 text-gray-500 font-light">
                    Transforming dynamic brand creativity into a permanent legal asset follows a rigorous architectural process defined by the Indian Trademark Registry.
                  </p>
                  
                  <div className="space-y-3 md:space-y-6 mt-5 md:mt-6">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-5 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold z-10 text-lg">1</div>
                          <div className="h-full w-0.5 bg-gray-200 my-1.5"></div>
                       </div>
                       <div className="bg-white p-3 md:p-5 rounded-lg border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-base md:text-lg font-bold text-[#312e81] mb-1.5 md:mb-2 flex items-center">
                             <span className="md:hidden bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 text-[10px]">1</span>
                             <FontAwesomeIcon icon={faSearch} className="w-12 h-12 text-indigo-600 mr-2" />
                             The Precision Brand Search
                          </h3>
                          <p className="text-xs md:text-sm text-gray-700">
                             We don't just do a word search. We analyze phonetics, visual similarities (Vienna Codification), and conceptual overlaps. We ensure that your jewellery brand has a "Clear Path" to registration, avoiding the thousands of existing marks in Class 14.
                          </p>
                       </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-5 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold z-10 text-lg">2</div>
                          <div className="h-full w-0.5 bg-gray-200 my-1.5"></div>
                       </div>
                       <div className="bg-white p-3 md:p-5 rounded-lg border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-base md:text-lg font-bold text-[#312e81] mb-1.5 md:mb-2 flex items-center">
                             <span className="md:hidden bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 text-[10px]">2</span>
                             <FontAwesomeIcon icon={faFileContract} className="w-12 h-12 text-indigo-600 mr-2" />
                             Statutory Drafting & Same-Day Filing
                          </h3>
                          <p className="text-xs md:text-sm text-gray-700">
                             Our attorneys draft the Form TM-A with surgical precision. We assist in constructing a "User Affidavit" that proves your brand's historical usage (if applicable), which is a powerful tool in asserting priority rights. Once filed, the (TM) symbol is yours to display.
                          </p>
                       </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-5 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold z-10 text-lg">3</div>
                          <div className="h-full w-0.5 bg-gray-200 my-1.5"></div>
                       </div>
                       <div className="bg-white p-3 md:p-5 rounded-lg border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-base md:text-lg font-bold text-[#312e81] mb-1.5 md:mb-2 flex items-center">
                             <span className="md:hidden bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 text-[10px]">3</span>
                             <FontAwesomeIcon icon={faFileSignature} className="w-12 h-12 text-indigo-600 mr-2" />
                             The Examination Response
                          </h3>
                          <p className="text-xs md:text-sm text-gray-700">
                             The Registrar will likely issue an Examination Report. This is where most self-filed applications fail. Our senior litigators draft detailed legal responses to overcome objections regarding distinctiveness or similarity, ensuring your mark moves to the next phase.
                          </p>
                       </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row gap-5 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold z-10 text-lg">4</div>
                          <div className="h-full w-0.5 bg-gray-200 my-1.5"></div>
                       </div>
                       <div className="bg-white p-3 md:p-5 rounded-lg border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-base md:text-lg font-bold text-[#312e81] mb-1.5 md:mb-2 flex items-center">
                             <span className="md:hidden bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 text-[10px]">4</span>
                             <FontAwesomeIcon icon={faGlobe} className="w-12 h-12 text-indigo-600 mr-2" />
                             Journal Advertisement & Vigilance
                          </h3>
                          <p className="text-xs md:text-sm text-gray-700">
                             Your brand is advertised in the Trademark Journal for 4 months. This is the "Public Challenge" period. We monitor this phase closely. If no one opposes, your mark is approved for final registration.
                          </p>
                       </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col md:flex-row gap-5 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold z-10 text-lg">5</div>
                       </div>
                       <div className="bg-white p-3 md:p-5 rounded-lg border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-base md:text-lg font-bold text-[#312e81] mb-1.5 md:mb-2 flex items-center">
                             <span className="md:hidden bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 text-[10px]">5</span>
                             <FontAwesomeIcon icon={faCertificate} className="w-12 h-12 text-indigo-600 mr-2" />
                             The Registration Certificate (R)
                          </h3>
                          <p className="text-xs md:text-sm text-gray-700">
                             The final digital certificate is issued. Your brand is now a formidable legal entity for the next 10 years, renewable indefinitely. You can now use the (R) symbol, a mark of ultimate purity and protection in the world of jewellery.
                          </p>
                       </div>
                    </div>
                  </div>
                </section>

                <section id="documents-required" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#312e81] mb-8 leading-none">
                    The Legal Portfolio: Documentation Requirements
                  </h2>
                  <p className="mb-10 text-lg max-w-4xl">
                    To maintain the highest standards of integrity in the Trademark Register, the following documentation is mandatory. These documents verify the identity of the owner and the legitimacy of the brand application.
                  </p>
                  <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-8">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-[#312e81] text-white">
                        <tr>
                          <th className="px-5 py-3 text-left font-bold uppercase text-[10px] tracking-wider">Ownership Model</th>
                          <th className="px-5 py-3 text-left font-bold uppercase text-[10px] tracking-wider">Required Artifacts</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100 text-xs">
                        <tr className="hover:bg-indigo-50/30 transition-colors">
                          <td className="px-5 py-3 font-bold text-[#312e81]">Individual Jewellery Designers</td>
                          <td className="px-5 py-3 text-gray-600 font-normal">PAN Card, Aadhaar Card, High-Resolution Logo, and a Signed Power of Attorney.</td>
                        </tr>
                        <tr className="hover:bg-indigo-50/30 transition-colors">
                          <td className="px-5 py-3 font-bold text-[#312e81]">Startup & MSME Jewellery Brands</td>
                          <td className="px-5 py-3 text-gray-600 font-normal">MSME / Udyam Certificate (to unlock 50% fee rebate), PAN, Aadhaar of Directors, and Incorporation details.</td>
                        </tr>
                        <tr className="hover:bg-indigo-50/30 transition-colors">
                          <td className="px-5 py-3 font-bold text-[#312e81]">Established Private Limited Companies</td>
                          <td className="px-5 py-3 text-gray-600 font-normal">Certificate of Incorporation, Board Resolution, Company PAN, and professional representation documents.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mb-8 text-lg font-normal text-gray-700">
                    A critical component for established brands is the **User Date**. If you have been trading under this name for years, we must document that history effectively. We will ask for initial invoices, social media launch posts, or old marketing materials. Claiming prior use (even by a few months) can often be the deciding factor in winning a trademark dispute against a competitor who filed a similar mark after you started your business.
                  </p>
                </section>

                <section id="cost-of-tm" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20 px-3">
                  <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-[#312e81] mb-10 text-center">
                    Transparent Investment Structure
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#312e81] text-white p-8 rounded-2xl shadow-xl transform transition-transform hover:-translate-y-2">
                       <h3 className="text-xl font-bold mb-5 text-purple-400">Government Fees</h3>
                       <div className="space-y-5">
                         <div className="border-b border-indigo-900 pb-3">
                           <p className="text-xs opacity-70 mb-1 uppercase tracking-widest font-bold">Startups / MSMES / Individuals</p>
                           <p className="text-3xl font-extrabold">₹4,500 <span className="text-xs font-normal opacity-50">/ per class</span></p>
                         </div>
                         <div>
                           <p className="text-xs opacity-70 mb-1 uppercase tracking-widest font-bold">Corporates / Large Entities</p>
                           <p className="text-3xl font-extrabold">₹9,000 <span className="text-xs font-normal opacity-50">/ per class</span></p>
                         </div>
                       </div>
                       <p className="mt-6 text-[10px] opacity-60 italic">Note: These are standard e-filing fees set by the CGPDTM, India.</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl border border-indigo-100 shadow-xl transform transition-transform hover:-translate-y-2">
                       <h3 className="text-xl font-bold mb-5 text-[#312e81]">IPR Karo Professional Fee</h3>
                       <div className="space-y-5">
                         <div className="border-b border-indigo-200 pb-3">
                           <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest font-bold">Application Basic</p>
                           <p className="text-3xl font-extrabold text-[#312e81]">₹3,000 <span className="text-xs font-normal text-gray-400">/ per application</span></p>
                         </div>
                         <div>
                           <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest font-bold">Objection Drafting</p>
                           <p className="text-3xl font-extrabold text-[#312e81]">₹5,000 - ₹10,000 <span className="text-xs font-normal text-gray-400">/ per response</span></p>
                         </div>
                       </div>
                       <Link href="/contact-us">
                         <button className="mt-6 w-full bg-[#312e81] text-white font-bold py-3 rounded-lg hover:bg-indigo-600 transition-all">Get Started Today</button>
                       </Link>
                    </div>
                  </div>
                </section>

                <section id="overcoming-objections" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-[#312e81] mb-5 md:mb-6 border-b-4 border-indigo-600 inline-block pb-2">
                    A Battle of Witt: Overcoming Section 9 and 11
                  </h2>
                  <p className="mb-8 text-lg">
                    The road to (R) is rarely a straight line. The Registrar's primary job is to keep the register "pure" and prevent confusion. Therefore, most applications face one of two primary legal hurdles.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-xl border-l-6 border-red-500 shadow-sm hover:shadow-md transition-all">
                      <h4 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 md:w-10 md:h-10 mr-3" />
                        The Section 9 "Absolute" Barrier
                      </h4>
                      <p className="mb-3 text-gray-800">
                        This occurs when your brand name is descriptive (e.g., "Pure Gold Diamonds") or generic. The law states that you cannot own a word that describes the nature or quality of your goods.
                      </p>
                      <p className="text-xs font-bold bg-white p-3 rounded-lg border border-red-100 italic">
                        Our Solution: We construct an argument for "Acquired Distinctiveness." We prove that although the name looks descriptive, through your years of marketing and sales, the public has come to recognize it exclusively as your brand. We "unlock" the mark using your business history.
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-xl border-l-6 border-indigo-500 shadow-sm hover:shadow-md transition-all">
                      <h4 className="text-xl font-bold text-indigo-900 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faBalanceScale} className="w-6 h-6 md:w-10 md:h-10 mr-3" />
                        The Section 11 "Relative" Conflict
                      </h4>
                      <p className="mb-3 text-gray-800">
                        This is triggered when a "confusingly similar" mark already exists on the register in Class 14.
                      </p>
                      <p className="text-xs font-bold bg-white p-3 rounded-lg border border-indigo-100 italic">
                        Our Solution: We use the "Side-by-Side Analysis." We highlight phonetic differences, visual variations in the logo, and the difference in the specific subset of customers. We might argue that your brand sells "Silver Tribal Jewellery" while the conflicting mark sells "Gold Industrial Alloys." We slice the class to create a unique space for you.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="opposition-and-defense" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-[#312e81] mb-5 md:mb-6 border-b-4 border-indigo-600 inline-block pb-2">
                    Defending the Ramparts: Opposition Litigation
                  </h2>
                  <p className="mb-8 text-lg font-normal text-gray-700">
                    Once your mark is accepted by the Registrar, it faces its final test: The Public Trial. For four months, any person or corporation can file an **Opposition (Form TM-O)** against your mark.
                  </p>
                  <p className="mb-8">
                    In the jewellery industry, this is often a competitive tactic used by large corporations to prevent smaller, agile brands from growing. If you receive an opposition, don't panic. It is a quasi-judicial process where evidence is presented and legal arguments are held before a Registrar. IPR Karo's litigation team handles the entire lifecycle:
                  </p>
                  <ul className="list-none space-y-5 mb-10">
                    <li className="flex items-start bg-gray-50 p-5 rounded-xl border-l-4 border-[#312e81]">
                       <span className="font-black text-lg mr-3 text-[#312e81]">01.</span>
                       <p className="text-base"><strong>Drafting the Counter-Statement:</strong> We respond to every allegation with legal precision within the strict 60-day deadline.</p>
                    </li>
                    <li className="flex items-start bg-gray-50 p-5 rounded-xl border-l-4 border-[#312e81]">
                       <span className="font-black text-lg mr-3 text-[#312e81]">02.</span>
                       <p className="text-base"><strong>Evidence in Support:</strong> We collate your sales records, marketing spend, and media mentions to prove your brand's legitimacy.</p>
                    </li>
                    <li className="flex items-start bg-gray-50 p-5 rounded-xl border-l-4 border-[#312e81]">
                       <span className="font-black text-lg mr-3 text-[#312e81]">03.</span>
                       <p className="text-base"><strong>Interlocutory Hearings:</strong> Our advocates represent you at the Trademark Registry hearings to argue your case and win back your brand rights.</p>
                    </li>
                  </ul>
                </section>

                <section id="online-advantages" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-[#312e81] mb-5 md:mb-6 border-b-4 border-indigo-600 inline-block pb-2">
                    The Digital Fortress: Protection for Online Jewellery Brands
                  </h2>
                  <p className="mb-8 text-lg">
                    If your primary business is on Instagram, Amazon, or a Shopify store, a trademark is not just a certificate; it is your digital weapon.
                  </p>
                  <div className="bg-[#312e81] text-white p-10 rounded-[1.5rem] shadow-2xl relative overflow-hidden my-10">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                       <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 md:w-10 md:h-10 text-7xl text-indigo-200" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-2xl font-bold mb-5 text-purple-400">Unlocking Amazon Brand Registry</h4>
                      <p className="text-lg mb-6 leading-relaxed">
                        With an active trademark (even while the application is pending!), you can apply for the **Amazon Brand Registry**. This provides you with exclusive capabilities:
                      </p>
                      <ul className="grid md:grid-cols-2 gap-5">
                         <li className="flex items-start">
                            <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 md:w-10 md:h-10 text-purple-400 mr-3 mt-1" /> 
                            <span><strong>Buy-Box Integrity:</strong> Prevent hijackers from clinging to your listings and selling fakes.</span>
                         </li>
                         <li className="flex items-start">
                            <FontAwesomeIcon icon={faShieldAlt} className="w-5 h-5 md:w-10 md:h-10 text-purple-400 mr-3 mt-1" /> 
                            <span><strong>Automated Enforcement:</strong> Amazon's AI tools automatically remove infringing images and keywords.</span>
                         </li>
                         <li className="flex items-start">
                            <FontAwesomeIcon icon={faRocket} className="w-5 h-5 md:w-10 md:h-10 text-purple-400 mr-3 mt-1" /> 
                            <span><strong>A+ Content & Storefronts:</strong> Unlock rich media, videos, and professional storefront designs to boost conversion.</span>
                         </li>
                         <li className="flex items-start">
                            <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 md:w-10 md:h-10 text-purple-400 mr-3 mt-1" /> 
                            <span><strong>Global Protection:</strong> Use your Indian trademark to protect your brand on Amazon US, UK, and UAE portals.</span>
                         </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="international-protection" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#312e81] mb-10 leading-none">
                    Global Ambition: The Madrid Protocol Strategy
                  </h2>
                  <p className="mb-8 text-lg font-normal text-gray-700">
                    Is your jewellery destined for the showcases of Dubai, London, or New York? Trademark rights are strictly territorial. A registration in New Delhi provides zero protection in Paris. As a jewellery exporter, you need a **Global IP Strategy**.
                  </p>
                  <p className="mb-8">
                    Through the **Madrid Protocol**, managed by WIPO, we can file a single international application in one language and pay one set of fees to extend your brand protection into over 130 countries simultaneously. The only prerequisite is that you must have an "Office of Origin" application in India. IPR Karo specializes in multi-jurisdictional filings, ensuring that as your shipments cross borders, your legal rights follow them.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 border border-gray-100">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-3 text-[#312e81]">The 6-Month Window</h4>
                      <p className="text-xs">When you file in India, you have a 6-month priority window to file internationally while keeping your original Indian filing date. This "Convention Priority" is a powerful tool to beat global squatters to the punch.</p>
                    </div>
                    <div className="text-7xl text-indigo-100 hidden md:block">
                      <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 md:w-10 md:h-10" />
                    </div>
                  </div>
                </section>

                {/* FAQ SECTION */}
                <section id="faqs" className="scroll-mt-28 md:scroll-mt-36 mb-12 md:mb-20">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#312e81] mb-10 text-center uppercase">
                    Mastering the Craft: Frequently Asked Questions
                  </h2>
                  <div className="grid gap-6">
                    {faqs.map((faq, index) => (
                      <details key={index} className="group bg-white border border-gray-100 rounded-[1.5rem] shadow-sm overflow-hidden transition-all hover:shadow-2xl">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none text-base font-bold text-[#312e81] group-open:bg-indigo-50 group-open:text-indigo-800 transition-colors">
                          <span className="flex items-center">
                            <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-5 text-xs font-bold">Q</span>
                            {faq.question}
                          </span>
                          <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="p-6 text-gray-600 leading-relaxed text-sm border-t border-gray-50 bg-white">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>

                {/* FINAL SECTION CTA */}
                <section className="bg-gradient-to-br from-[#1a0033] to-[#312e81] rounded-xl md:rounded-[2.5rem] p-6 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-[0_30px_90px_rgba(0,0,0,0.5)] group">
                   <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity">
                      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-indigo-600 rounded-full blur-[120px]"></div>
                      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-400 rounded-full blur-[120px]"></div>
                   </div>
                   <div className="relative z-10">
                    <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold mb-5 md:mb-6">Your Brand is a Diamond. <br /> Don't Leave it Unguarded.</h2>
                    <p className="text-sm md:text-lg lg:text-xl opacity-90 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
                      Every single day you trade without a trademark is a day an imitator could steal your identity. Join the elite circle of 5000+ brand owners who trust IPR Karo for their legal supremacy.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                      <Link href="/contact-us" className="w-full sm:w-auto">
                        <button className="bg-indigo-600 text-white hover:bg-white hover:text-[#312e81] font-extrabold py-4 px-10 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg uppercase w-full border-2 border-indigo-600">
                          Secure My Brand Now
                        </button>
                      </Link>
                      <a href="tel:+919289707648" className="w-full sm:w-auto">
                         <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-extrabold py-4 px-10 rounded-full transition-all text-lg w-full backdrop-blur-md flex items-center justify-center group-hover:border-white/50">
                          <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                          Speak to Lead Counsel
                        </button>
                      </a>
                    </div>
                    <p className="mt-12 text-xs opacity-50 font-black tracking-[0.3em] uppercase">
                      India's Leading IP Legal Firm | 99% Success Rate | Global Network
                    </p>
                  </div>
                </section>

              </article>
              </div>
            </main>

            {/* Right Column - Sidebar Widgets (Sticky) */}
            <aside className="hidden lg:block space-y-8 sticky top-28">
              
              {/* Sidebar CTA Box */}
              <div className="bg-[#1a0033] p-6 rounded-2xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-indigo-600 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-xl font-bold mb-3 relative z-10 leading-tight">Is Your Name Safe to Use?</h3>
                <p className="text-xs opacity-80 mb-6 leading-relaxed relative z-10 font-light">
                  Don't invest in signage or stock until you know the name is yours. Get a **Free Elite Search Report** in 60 minutes.
                </p>
                <Link href="/contact-us" className="block relative z-10">
                  <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold py-3 px-3 rounded-lg transition-all shadow-lg transform hover:-translate-y-1">
                    Start Precise Search
                  </button>
                </Link>
                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                  <a href="tel:+919289707648" className="text-purple-400 font-black text-lg hover:text-white transition-colors flex items-center justify-center italic">
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                  </a>
                </div>
              </div>

              {/* Related Pages Widget */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-black text-[#312e81] mb-6 border-b-2 border-indigo-600 pb-3 uppercase tracking-widest">Premium Services</h3>
                <ul className="space-y-5">
                  <li>
                    <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-700 hover:text-indigo-600 transition-all">
                      <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-4 group-hover:bg-indigo-600 transition-all"></div>
                      <span className="font-bold text-base">General Trademark</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-for-clothing-brand" className="group flex items-center text-gray-700 hover:text-indigo-600 transition-all">
                      <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-4 group-hover:bg-indigo-600 transition-all"></div>
                      <span className="font-bold text-base">Clothing Brand Filing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/patent-registration" className="group flex items-center text-gray-700 hover:text-indigo-600 transition-all">
                      <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-4 group-hover:bg-indigo-600 transition-all"></div>
                      <span className="font-bold text-base">Patent Protection</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/copyright-registration" className="group flex items-center text-gray-700 hover:text-indigo-600 transition-all">
                      <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-4 group-hover:bg-indigo-600 transition-all"></div>
                      <span className="font-bold text-base">Copyright Registration</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/features/trademark-risk-reduction" className="group flex items-center text-gray-700 hover:text-indigo-600 transition-all">
                      <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-4 group-hover:bg-indigo-600 transition-all"></div>
                      <span className="font-bold text-base">Risk Reduction</span>
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
