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
  faGuitar,
  faMusic,
  faDrum,
  faMicrophone,
  faHeadphones,
  faStore,
  faStar,
  faFont,
  faImage,
  faShapes,
  faTag
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark for Musical Instruments | Protect Sound Brand',
  description: 'Comprehensive guide to trademark registration for musical instruments, audio gear, and music stores. Secure your brand in Class 15 & 9. Expert filing.',
  keywords: [
    'trademark for musical instruments',
    'musical instrument brand registration',
    'class 15 trademark india',
    'trademark for guitar brand',
    'audio equipment trademark',
    'music shop logo registration',
    'protect instrument design',
    'trademark for drums and pianos',
    'online trademark filing music',
    'music brand protection'
  ],
  openGraph: {
    title: 'Secure Your Musical Instrument Brand | Expert IP Protection',
    description: 'Don\'t let copycats silence your brand. Register your musical instrument trademark today with India\'s top IP experts. 100% Online process.',
    url: 'https://www.iprkaro.com/trademark-for-musical-instruments',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-for-musical-instruments',
  },
};

const tocSections = [
    { id: 'why-protect-music-brand', title: 'Why Protect Your Brand?' },
    { id: 'trademark-classes-music', title: 'Classes 15, 9 & 35' },
    { id: 'what-can-be-trademarked', title: 'What Can You Protect?' },
    { id: 'registration-process', title: 'Registration Process' },
    { id: 'documents-checklist', title: 'Required Documents' },
    { id: 'digital-music-software', title: 'Digital & Software (Class 42)' },
    { id: 'naming-strategy', title: 'Naming Strategy' },
    { id: 'shape-trademarks', title: 'Shape of Instruments' },
    { id: 'sound-marks', title: 'Sound Marks' },
    { id: 'counterfeiting-issues', title: 'Fighting Counterfeits' },
    { id: 'objections-oppositions', title: 'Handling Objections' },
    { id: 'licensing-merch', title: 'Licensing & Merch' },
    { id: 'startup-guide', title: 'Startup Guide' },
    { id: 'global-protection', title: 'International Protection' },
    { id: 'renewal-maintenance', title: 'Renewal & Maintenance' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "What is the primary trademark class for musical instruments?",
    answer: "Class 15 is the primary class for musical instruments. It covers pianos, guitars, drums, wind instruments, and their accessories like stands and cases. However, if your instruments are electronic (like synthesizers or digital pianos), they may also fall under Class 9."
  },
  {
    question: "I sell musical instruments online. Do I need a trademark?",
    answer: "Yes, if you sell instruments (even if you don't manufacture them), you are providing a retail service. This falls under Class 35. To protect your shop name or e-commerce store name, Class 35 registration is mandatory along with specific product classes."
  },
  {
    question: "Can I trademark the shape of my guitar?",
    answer: "Yes, it is possible to trademark the unique shape of an instrument as a 'Shape Mark' or 'Trade Dress', provided it is distinctively different from common shapes and has acquired a secondary meaning in the market (e.g., the shape of a Fender Stratocaster)."
  },
  {
    question: "What about electronic music gear like amplifiers and pedals?",
    answer: "Amplifiers, effects pedals, microphones, and headphones primarily fall under Class 9 (Electrical and Scientific Apparatus), not Class 15. It is crucial to file in the correct class to ensure protection."
  },
  {
    question: "How long does the trademark process take?",
    answer: "In India, the trademark registration process typically takes 12 to 18 months if there are no objections or oppositions. However, you can start using the ™ symbol as soon as you file the application."
  },
  {
    question: "Does a trademark protect my brand name globally?",
    answer: "No, trademark rights are territorial. Your registration in India protects you only within India. To protect your brand in countries like the USA or UK, you need to file under the Madrid Protocol or file separate national applications."
  },
  {
    question: "Can I register a sound as a trademark?",
    answer: "Yes, 'Sound Marks' are a recognized category in India. If your brand has a unique jingle or a specific sound associated with its products (like the Intel bong), it can be registered, though the threshold for distinctiveness is high."
  },
  {
    question: "What documents do I need to file?",
    answer: "For an individual, you need a PAN card, Aadhaar card, and the logo/mark. For a company, you need the Incorporation Certificate, Board Resolution, and MSME certificate (for a 50% fee rebate)."
  },
  {
    question: "What happens if someone copies my brand name?",
    answer: "If you have a registered trademark, you can file a civil suit for infringement. You can seek an injunction to stop them, claim damages for lost business, and even trigger criminal action against counterfeiters."
  },
  {
    question: "I am a luthier making custom guitars. Should I register?",
    answer: "Absolutely. As a custom builder, your reputation is your biggest asset. Registering your name ensures that no mass manufacturer can use your name on inferior factory-made instruments, protecting your legacy."
  }
];

const reviews = [
  {
    name: "Rohan D'Souza",
    role: "Founder, Resonance Audio",
    text: "We make high-end tube amplifiers. IPR Karo helped us navigate the confusion between Class 9 and Class 15. Now our brand is secure globally.",
    rating: 5
  },
  {
    name: "Meera Nair",
    role: "Owner, Nair Musicals",
    text: "Professional and fast. They handled the objection regarding our descriptive name very effectively. Highly recommended for music businesses.",
    rating: 5
  },
  {
    name: "Amitabh Dutta",
    role: "CEO, BeatBox Percussions",
    text: "We export huge volumes of Cajons. Their advice on Madrid Protocol filing for Europe was invaluable. Great team to work with.",
    rating: 5
  }
];

export default function TrademarkMusicalInstrumentsPage() {
  const breadcrumbItems = [
    { label: "Our Services", href: "/our-services" },
    { label: "Trademark for Musical Instruments", href: "/trademark-for-musical-instruments" },
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
    "headline": "Trademark Registration for Musical Instruments in India",
    "description": "Complete guide to protecting your musical instrument brand. Covers Class 15, Class 9, shape marks, and anti-counterfeiting strategies.",
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
        "name": "Trademark for Musical Instruments",
        "item": "https://www.iprkaro.com/trademark-for-musical-instruments"
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
        "name": "Trademark Registration for Musical Instruments",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "620"
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
                Amplify Your Heritage: <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Trademark Registration for Musical Instruments
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               Your sound is unique. Your brand should be too. Protect your musical instruments, audio gear, and retail store identity with expert legal trademark filing. Covering Class 15, 9, and 35.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                 Protect Your Brand
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
                  
                  <section id="why-protect-music-brand" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Resonating with Authority: Why Your Music Brand Needs a Trademark
                    </h2>
                    <p className="mb-6">
                      The musical instrument industry is built on reputation. Whether you are a master luthier crafting bespoke violins, a startup manufacturing affordable ukuleles, or a retailer selling top-tier audio gear, your brand name carries the weight of your quality. In a market flooded with cheap knock-offs and "inspired-by" products, a <strong>Registered Trademark</strong> is not just a legal formality; it is the fence that protects your hard-earned territory.
                    </p>
                    <p className="mb-6">
                      In India, the demand for musical instruments is surging, driven by a vibrant independent music scene and the rise of online learning. However, this growth has also attracted counterfeiters. It is alarmingly common to see fake "Gibson" or "Yamaha" decals on substandard instruments. If you don't secure your brand name, you risk having your identity stolen. A registered trademark gives you the exclusive right to use your brand in commerce and the legal teeth to shut down imitators.
                    </p>
                    <div className="bg-purple-50 border-l-8 border-purple-600 p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-purple-900 italic font-medium">
                        "A musician trusts a brand before they trust the instrument. Protecting that trust is as important as tuning the strings."
                      </p>
                    </div>
                    <p className="mb-6">
                      Furthermore, for brands looking to sell on e-commerce giants like Amazon, Flipkart, or specialised gear sites like Bajaao, a trademark is often a prerequisite for "Brand Registry". This status unlocks advanced marketing tools and gives you control over your product listings, preventing unauthorized sellers from undercutting your prices with fake goods.
                    </p>
                  </section>

                  <section id="trademark-classes-music" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Orchestrating Protection: The Critical Trademark Classes
                    </h2>
                    <p className="mb-6">
                      One of the most common pitfalls for instrument manufacturers is filing in the wrong class. The Nice Classification system divides goods into 45 classes. For musical businesses, the distinction between "Acoustic" and "Electric" can change your entire filing strategy.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="bg-white border-2 border-[rgb(110,94,147)] p-8 rounded-3xl shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[rgb(110,94,147)] text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Acoustic Core</div>
                        <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                          <FontAwesomeIcon icon={faGuitar} className="w-12 h-12 mr-3" /> Class 15
                        </h3>
                        <p className="mb-2 font-semibold text-gray-800">The "Instrument" Class</p>
                        <p className="text-gray-600 mb-4">
                          This is the traditional home for musical instruments. If your product produces sound directly, it likely belongs here.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Pianos and Organs</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> String Instruments (Guitars, Violins, Sitars)</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Drums and Percussion</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Wind Instruments (Flutes, Saxophones)</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Accessories like Stands, Cases, and Tuning Forks</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm relative">
                         <div className="absolute top-0 right-0 bg-gray-600 text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Electronics</div>
                         <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faMicrophone} className="w-12 h-12 mr-3 text-gray-600" /> Class 9
                        </h3>
                        <p className="mb-2 font-semibold text-gray-800">The "Technology" Class</p>
                        <p className="text-gray-600 mb-4">
                          Modern music is electric. If your product relies on electricity to capture, amplify, or modify sound, it falls under Class 9.
                        </p>
                         <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Amplifiers and Speakers</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Microphones and Headphones</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Synthesizers and MIDI Controllers</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Effects Pedals and Processors</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Audio Interfaces and Mixers</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm relative">
                         <div className="absolute top-0 right-0 bg-gray-600 text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Retail</div>
                         <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faStore} className="mr-3 text-gray-600 w-12 h-12" /> Class 35
                        </h3>
                        <p className="mb-2 font-semibold text-gray-800">The "Shop" Class</p>
                        <p className="text-gray-600">
                          If you own a music store (physical or online) where you sell instruments made by various brands (including your own), you are providing a "Retail Service". Class 35 protects your shop's name. Example: "Furtados" or "Sweetwater" would need Class 35.
                        </p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm relative">
                         <div className="absolute top-0 right-0 bg-gray-600 text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Downloadable</div>
                         <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faRocket} className="mr-3 text-gray-600 w-12 h-12" /> Class 9 & 42
                        </h3>
                        <p className="mb-2 font-semibold text-gray-800">The "Software" Classes</p>
                        <p className="text-gray-600 mb-4">
                          Music is no longer just hardware. VSTs, DAWs, and Plugins are huge business.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> DAW Software (Logic, Cubase) - Class 9</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> VST Plugins & Sample Libraries - Class 9</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> SaaS Music Platforms - Class 42</li>
                          <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Music Education Apps - Class 9/41</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm relative">
                         <div className="absolute top-0 right-0 bg-gray-600 text-white font-bold px-4 py-1 rounded-bl-xl text-sm">Merch</div>
                         <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <FontAwesomeIcon icon={faCertificate} className="mr-3 text-gray-600 w-12 h-12" /> Class 25 & 41
                        </h3>
                        <p className="mb-2 font-semibold text-gray-800">Expansion Classes</p>
                        <p className="text-gray-600">
                           Don't limit yourself to instruments. Band T-shirts (Class 25) and Music Schools (Class 41) are vital extensions.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="digital-music-software" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         The Digital Revolution: Protecting VSTs and DAWs
                     </h2>
                     <p className="mb-6">
                         The line between instrument and software has blurred. Today, a "synthesizer" might be a 50kg hardware unit or a 50MB plugin. If you develop Virtual Studio Technology (VST), sample libraries, or digital audio workstations, your IP needs strictly different protection than a carpenter making violins.
                     </p>
                     <p className="mb-6">
                         <strong>Software is protected under Copyright, but the BRAND is Trademark.</strong> You cannot trademark the code (that's copyright), but you MUST trademark the name of your plugin series (e.g., "FabFilter" or "Kontakt").
                     </p>
                     <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-6">
                        <h4 className="font-bold text-blue-900 mb-2">Key Strategy for Software Companies:</h4>
                        <p className="text-sm text-blue-800">
                           Always file in <strong>Class 9</strong> for "Downloadable Software". If you offer cloud-based mixing services or online mastering, you also need <strong>Class 42</strong> (Software as a Service). Ignoring Class 42 leaves your online web-app vulnerable.
                        </p>
                     </div>
                  </section>

                  <section id="naming-strategy" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Naming Your Instrument: The "Distinctiveness" Spectrum
                     </h2>
                     <p className="mb-6">
                         Not all names are created equal. The Trademark Registry rejects names that are "Descriptive". This is the #1 reason for rejection in the music industry.
                     </p>
                     <div className="grid md:grid-cols-3 gap-4 mb-8">
                        <div className="border border-red-200 bg-red-50 p-6 rounded-xl">
                           <div className="text-red-600 font-bold mb-2 flex items-center"><span className="text-2xl mr-2">×</span> Weak / Descriptive</div>
                           <p className="font-bold text-gray-900 mb-2">"Best Guitars"</p>
                           <p className="text-xs text-gray-600">You cannot monopolize the word "Best" or "Guitars". Anyone can use these. Rejected immediately.</p>
                        </div>
                        <div className="border border-yellow-200 bg-yellow-50 p-6 rounded-xl">
                           <div className="text-yellow-600 font-bold mb-2 flex items-center"><span className="text-2xl mr-2">!</span> Suggestive</div>
                           <p className="font-bold text-gray-900 mb-2">"SoundMaster"</p>
                           <p className="text-xs text-gray-600">Suggests quality but isn't purely descriptive. Harder to protect but possible with evidence of use.</p>
                        </div>
                         <div className="border border-green-200 bg-green-50 p-6 rounded-xl">
                           <div className="text-green-600 font-bold mb-2 flex items-center"><span className="text-2xl mr-2">✓</span> Strong / Arbitrary</div>
                           <p className="font-bold text-gray-900 mb-2">"Yamaha" / "Fender"</p>
                           <p className="text-xs text-gray-600">Words that mean nothing related to the product (or are surnames/coined words). These get the strongest protection.</p>
                        </div>
                     </div>
                     <p className="mb-6">
                        <strong>Pro Tip:</strong> Don't name your drum company "Loud Drums". Name it "Zildjian" (Surnames require secondary meaning) or "Pearl" (Arbitrary). The more unique the name, the faster the registration.
                     </p>
                  </section>

                  <section id="what-can-be-trademarked" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Beyond the Name: Elements of a Music Brand
                    </h2>
                    <p className="mb-8">
                      In the music world, branding is visceral. It's about the look, the feel, and the vibe. The law allows you to protect various aspects of your brand identity.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faFont} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Brand Name</h3>
                        <p className="text-sm leading-relaxed">The most basic and essential protection. E.g., "Roland", "Korg", "Signature Six". This protects the text itself.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faImage} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Logo</h3>
                        <p className="text-sm leading-relaxed">Your visual insignia. Headstock logos are iconic in the guitar world. Protecting the visual design prevents look-alikes.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faShapes} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Shape Mark</h3>
                        <p className="text-sm leading-relaxed">The unique body shape of an instrument can be trademarked if it is distinctive. Think of the Gibson Flying V or the headstock shape of a Fender.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                        <div className="text-[rgb(110,94,147)] mb-4 group-hover:scale-110 transition-transform">
                          <FontAwesomeIcon icon={faTag} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Series Names</h3>
                        <p className="text-sm leading-relaxed">Specific model names can also be protected. E.g., "Stratocaster" or "Les Paul" are trademarks separate from the main brand name.</p>
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
                             <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: The clearance Search</h3>
                             <p className="text-base text-gray-600 mb-4">
                                Before we file, we perform a rigorous search. We check not just for identical names, but for similarly sounding names in Class 15 and 9. If you want to launch a brand called "Sonik", we check if "Sonic" or "Sonique" already exists.
                             </p>
                          </div>
                       </div>

                       {/* Step 2 */}
                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faFileContract} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: Filing the Application</h3>
                             <p className="text-base text-gray-600 mb-4">
                                We draft the TM-A form. We carefully describe your goods. Instead of just "Musical Instruments", we might specify "Acoustic Guitars, Electric Basses, and Plectrums" to ensure broad yet specific coverage. Once filed, you get an application number and can use the ™ symbol.
                             </p>
                          </div>
                       </div>

                       {/* Step 3 */}
                       <div className="flex gap-8 items-start relative">
                          <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                             <FontAwesomeIcon icon={faGavel} className="w-12 h-12" />
                          </div>
                          <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                             <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Examination & Prosecution</h3>
                             <p className="text-base text-gray-600 mb-4">
                                The Registry examines the mark. If they find it descriptive (e.g., "Good Drums"), they might object. Our legal team drafts a response proving that your brand has acquired uniqueness through usage. We handle all legal correspondence until acceptance.
                             </p>
                          </div>
                       </div>
                    </div>
                  </section>

                  <section id="documents-checklist" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Documentation Required
                    </h2>
                    <p className="mb-8">
                      Getting your paperwork right is the first step to a smooth registration.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                          For Individuals / Proprietors
                        </h3>
                        <ul className="space-y-4 text-gray-600">
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>PAN Card & Aadhaar Card.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Digital Soft Copy of the Logo.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Signed Form-48 (Authorization).</span></li>
                        </ul>
                      </div>
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                          For Companies / LLPs
                        </h3>
                        <ul className="space-y-4 text-gray-600">
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Udyam Registration (Crucial for fee discount).</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span>Board Resolution.</span></li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="shape-trademarks" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         The Unique Case of Shape Trademarks in Music
                     </h2>
                     <p className="mb-6">
                         In the musical instrument industry, the visual design is often as iconic as the name. Think of the distinct curves of a Stratocaster, the scroll of a Gibson mandolin, or the bell shape of a specific trumpet. Can these be trademarked? The answer is a qualified <strong>Yes</strong>.
                     </p>
                     <p className="mb-6">
                         Under the Trade Marks Act, the "shape of goods" can be registered if it is distinctive. However, proving distinctiveness for shapes is harder than for names. You must prove that when a customer sees the outline of your guitar, they immediately think of YOUR brand, even without seeing the logo. This is called "Acquired Distinctiveness".
                     </p>
                     <p className="mb-6">
                         IPR Karo has expertise in handling such non-conventional trademark applications. We help you compile evidence—sales figures, advertising spend, and media appearances—to build a case that your instrument's shape effectively functions as a brand identifier. Note that functionality cannot be trademarked (e.g., a shape that is purely ergonomic and necessary for playing cannot be monopolized).
                     </p>
                  </section>

                  <section id="sound-marks" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Sound Marks: Can You Trademark a Sound?
                     </h2>
                     <p className="mb-6">
                         Music is audio. Can a sound itself be a trademark? Yes. A <strong>Sound Mark</strong> is valid in India if the sound acts as a source identifier.
                     </p>
                     <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                        <li><strong>The Intel Bong:</strong> A classic example. Hearing those four notes tells you "Intel Inside".</li>
                        <li><strong>The MGM Lion Roar:</strong> Distinctive and recognizable.</li>
                        <li><strong>Netflix "Ta-Dum":</strong> Instantly identifies the service.</li>
                     </ul>
                     <p className="mb-6">
                         For musical instrument companies, this is tricky. You cannot trademark the <em>sound of a guitar</em> (e.g., the tone of a Stradivarius), because that is functional. However, if your digital piano has a unique startup chime that plays every time it turns on, THAT chime can be trademarked. 
                     </p>
                     <p className="mb-6">
                         <strong>Submission Requirements:</strong> To register a sound mark, you must submit an MP3 of the sound and musical notation (sheet music) representing it. You must also prove that customers associate that specific sound solely with your brand.
                     </p>
                  </section>

                  <section id="counterfeiting-issues" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Fighting the Sour Note: Counterfeiting Strategy
                     </h2>
                     <p className="mb-6">
                         The market is flooded with "First Copy" instruments. These are cheap replicas that look like high-end brands but lack the quality. They damage your brand's reputation and steal your revenue. A registered trademark is your primary weapon against this.
                     </p>
                     <p className="mb-6">
                         With a registration in hand, you can:
                     </p>
                     <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                        <li><strong>Raids and Seizures:</strong> You can file a criminal complaint. Police can raid warehouses and seize counterfeit goods.</li>
                        <li><strong>Customs Recordal:</strong> You can register your trademark with Indian Customs. They will then stop potential counterfeit shipments at the border before they enter the market.</li>
                        <li><strong>Takedown Notices:</strong> You can legally force Instagram, Facebook, and Amazon to remove listings that sell fake versions of your instruments.</li>
                     </ul>
                  </section>

                  <section id="objections-oppositions" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Handling Objections & Oppositions
                     </h2>
                     <p className="mb-6">
                         The path to registration isn't always smooth. The Registry may raise an "Examination Report".
                     </p>
                     
                     <div className="space-y-6">
                        <div className="bg-white border-l-4 border-red-500 p-6 shadow-sm">
                           <h3 className="tex-lg font-bold text-gray-900 mb-2">Section 9 Objection (Absolute Grounds)</h3>
                           <p className="text-gray-600">
                              Raised if your mark is deceptive, descriptive, or lacks distinctiveness.
                              <br/><em>Example:</em> You try to register "Generic Flutes".
                              <br/><em>Solution:</em> We file a reply proving "Acquired Distinctiveness" through sales data, affidavits, and media coverage showing your brand has become well-known.
                           </p>
                        </div>
                        <div className="bg-white border-l-4 border-orange-500 p-6 shadow-sm">
                           <h3 className="tex-lg font-bold text-gray-900 mb-2">Section 11 Objection (Relative Grounds)</h3>
                           <p className="text-gray-600">
                              Raised if your mark is too similar to an existing trademark in the same class.
                              <br/><em>Example:</em> You apply for "RolandX" when "Roland" exists.
                              <br/><em>Solution:</em> We argue dissimilarities in phonetics, visual design, and goods. Or, we negotiate a "Co-existence Agreement" if the goods are different enough (e.g., Pianos vs Guitar Pedals).
                           </p>
                        </div>
                        <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
                           <h3 className="tex-lg font-bold text-gray-900 mb-2">Opposition (Third Party)</h3>
                           <p className="text-gray-600">
                              Even after the Registry accepts it, a competitor can oppose your mark within 4 months of advertisement. This leads to a quasi-judicial process (Evidence, Hearings). IPR Karo specializes in fighting these oppositions to secure your rights.
                           </p>
                        </div>
                     </div>
                  </section>

                  <section id="licensing-merch" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Licensing & Merchandising: The Real Money
                     </h2>
                     <p className="mb-6">
                         For major music brands, the instrument is just the entry point. The real profit often comes from licensing the brand for T-shirts, mugs, keychains, and lessons.
                     </p>
                     <p className="mb-6">
                         <strong>Marshall</strong> is a prime example. They went from making guitar amps to licensing their brand for headphones, bluetooth speakers, and even fridges. If they hadn't registered their trademark in <strong>Class 9</strong> (Consumer Electronics) and <strong>Class 25</strong> (Clothing), anyone could have made "Marshall Headphones".
                     </p>
                     <p className="mb-6">
                         <strong>Licensing Agreements:</strong> Once registered, you can license your brand to other manufacturers. You get a royalty fee (usually 5-15%) for every unit sold, without manufacturing anything yourself. A solid trademark is the asset that makes this passive income possible.
                     </p>
                  </section>

                  <section id="startup-guide" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Startup Guide: Luthier vs Factory
                     </h2>
                     <p className="mb-6">
                         Are you a solo boutique builder or a mass-manufacturing startup? Your strategy changes accordingly.
                     </p>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-3xl">
                           <h3 className="font-bold text-xl mb-4 text-[rgb(110,94,147)]">The Boutique Luthier</h3>
                           <ul className="text-sm space-y-3 text-gray-700">
                              <li><strong>Priority:</strong> Register your Surname/Signature brand.</li>
                              <li><strong>Classes:</strong> Class 15 is sufficient initially.</li>
                              <li><strong>Focus:</strong> Protect the headstock logo design (Logo Mark).</li>
                              <li><strong>Budget:</strong> Start with India-only registration using MSME discount.</li>
                           </ul>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl">
                           <h3 className="font-bold text-xl mb-4 text-purple-900">The Mass Manufacturer</h3>
                           <ul className="text-sm space-y-3 text-gray-700">
                              <li><strong>Priority:</strong> Register Brand Name + Slogans.</li>
                              <li><strong>Classes:</strong> Class 15, Class 35 (Retail), Class 9 (Electronics).</li>
                              <li><strong>Focus:</strong> Search extensively for conflicts to avoid factory shutdowns later.</li>
                              <li><strong>Budget:</strong> Allocate funds for Madrid Protocol to export to US/EU.</li>
                           </ul>
                        </div>
                     </div>
                  </section>

                  <section id="global-protection" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Exporting Your Sound? Go Global
                     </h2>
                     <p className="mb-6">
                         Indian instruments—Sitars, Tablas, Harmoniums—are in high demand globally. Also, Indian brands are increasingly manufacturing high-quality guitars and drums for export. If you are exporting, do not assume your Indian trademark protects you abroad.
                     </p>
                     <p className="mb-6">
                         To protect your brand in markets like the USA, Germany, or Japan, you should use the <strong>Madrid Protocol</strong>. This allows you to file a single international application from India to cover up to 130 countries. It is cost-effective and streamlined. IPR Karo specializes in helping Indian instrument manufacturers secure their global IP footprint, ensuring your brand name is safe wherever your music travels.
                     </p>
                  </section>

                  <section id="renewal-maintenance" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         Renewal & Maintenance
                     </h2>
                     <p className="mb-6">
                         A trademark is valid for <strong>10 years</strong> from the date of filing. It can be renewed indefinitely for 10-year periods.
                     </p>
                     <p className="mb-6">
                         However, "Use it or Lose it" applies. If you do not use your trademark for a continuous period of 5 years, a competitor can file for "Rectification" to cancel your mark on the grounds of non-use. Therefore, keep your invoices, advertisements, and bills safely stored as proof of continuous usage.
                     </p>
                     <div className="flex items-center bg-green-50 p-4 rounded-lg border border-green-200">
                        <FontAwesomeIcon icon={faCheck} className="text-green-600 w-6 h-6 mr-3" />
                        <span className="text-green-900 font-medium">IPR Karo manages your renewals automatically, sending you reminders 6 months before expiry so you never lose your rights.</span>
                     </div>
                  </section>

                  <section id="reviews" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                        Trusted by the Music Industry
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
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Don't Let Your Brand Go Quiet</h2>
                        <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                          Secure your musical legacy. Start your trademark application today and own your sound, your name, and your future.
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
                   Launching a new guitar line? Check if the name is available before you print the headstocks.
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
                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Industries</h3>
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

// End of file
