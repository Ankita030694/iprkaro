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
  faUserTie,
  faBuilding,
  faFileAlt,
  faHandHoldingUsd,
  faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark Register Kaise Karte Hai | Online Process',
  description: 'Bharat mein trademark register kaise karte hai? Janiye step-by-step registration process, documents list, government fees, aur expert tips. Get 100% success with IPR Karo.',
  keywords: [
    'trademark register kese karte hai',
    'how to register trademark in india hindi',
    'trademark registration process in hindi',
    'brand registration kaise kare',
    'logo registration process hindi',
    'trademark search kaise kare',
    'trademark fees india in hindi',
    'trademark classes list hindi',
    'online trademark filing india',
    'ipr registration process'
  ],
  openGraph: {
    title: 'Comprehensive Guide: Trademark Register Kaise Karte Hai in Bharat',
    description: 'Master the brand registration process in India. Hamari ultimate guide se janiye trademark filing se lekar certification tak ka pura safar.',
    url: 'https://www.iprkaro.com/trademark-register-kese-karte-hai',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-register-kese-karte-hai',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Prastavana (Intro)' },
  { id: 'what-is-trademark', title: 'Trademark Kya Hai?' },
  { id: 'why-register', title: 'Registration Kyun Kare?' },
  { id: 'trademark-types', title: 'Trademarks Ke Prakar' },
  { id: 'pre-filing-search', title: 'Brand Search Process' },
  { id: 'step-by-step-guide', title: 'Step-by-Step Filing' },
  { id: 'documents-required', title: 'Zaruri Documents' },
  { id: 'trademark-classes', title: 'Classes Ki Jankari' },
  { id: 'government-fees', title: 'Govt Fees List' },
  { id: 'objection-handling', title: 'Objection Ka Samna' },
  { id: 'opposition-process', title: 'Opposition Ki Prakriya' },
  { id: 'renewal-restoration', title: 'Renewal & Restoration' },
  { id: 'msme-startup-benefits', title: 'Startup Benefits' },
  { id: 'global-protection', title: 'Videshi Registration' },
  { id: 'legal-enforcement', title: 'Adhikar Suarkshit Kare' },
  { id: 'common-mistakes', title: 'Aam Galtiyan' },
  { id: 'conclusion', title: 'Nishkarsh' },
  { id: 'faqs', title: 'Sawaal Jawab' },
];

const faqs = [
  {
    question: "Trademark register karne mein kitna samay lagta hai?",
    answer: "Bharat mein trademark registration ki prakriya aam taur par 6 se 12 mahine leti hai. Isme examination, journal publication, aur 4 mahine ka opposition period shamil hota hai. Halanki, IPR Karo ke saath aap application file karte hi, yani 24 ghante ke andar, TM symbol ka istemal shuru kar sakte hai."
  },
  {
    question: "Hinglish: Trademark registration ki sarkari fees kya hai?",
    answer: "Individuals, startups, aur MSMEs ke liye (jinke paas Udyam certificate hai), online filing ki sarkari fees ₹4,500 hai. Badi companies aur anay entities ke liye ye fees ₹9,000 prati class hai. Professional fees isse alag hoti hai jo search aur drafting ke kaam aati hai."
  },
  {
    question: "Kya main khud se trademark apply kar sakta hoon?",
    answer: "Technically haan, lekin trademark law kafi complex hai. Agar class selection ya user date mein koi galti ho jaye, toh application reject hone ka darr rehta hai. Experts ki madad lene se aapki application technical grounds par mazboot banti hai aur success ke chances badh jate hai."
  },
  {
    question: "Trademark class kya hoti hai aur ye kyun zaruri hai?",
    answer: "Trademarks ko 45 alag categories mein banta gaya hai, jinhe 'Classes' kehte hai. Goods ke liye class 1 se 34 aur services ke liye class 35 se 45 hai. Sahi class choose karna isliye zaruri hai taki aapka brand sahi business area mein legally protect ho sake."
  },
  {
    question: "TM aur R symbol mein kya antar hai?",
    answer: "TM symbol aap tabhi se laga sakte hai jab aapne application file kar di ho. Ye logo ko batata hai ki aapne is naam par haq jataya hai. R (®) symbol ka istemal aap tabhi kar sakte hai jab aapko Trademark Registry se official registration certificate mil jaye. Certificate milne se pehle R use karna illegal hai."
  },
  {
    question: "Agar koi mera brand name copy kare toh kya karein?",
    answer: "Agar aapka trademark registered hai, toh aap Section 29 ke tahat uspar 'Infringement' ka case kar sakte hai. Court usse kaam rokne ka orders (Injunction) de sakti hai aur aap damages bhi claim kar sakte hai. Bin-registered marks ke liye 'Passing Off' ki karwai ki jati hai."
  },
  {
    question: "क्या हिंदी नाम का ट्रेडमार्क हो सकता है?",
    answer: "Haan, kisi bhi bhasha (Hindi, English, Regional) ke shabd ya script ka trademark ho sakta hai. Bas wo naam kisi dusre registered brand se milta-julta nahi hona chahiye aur kafi unique hona chahiye."
  },
  {
    question: "Trademark kitne saal tak chalta hai?",
    answer: "Ek baar register hone par trademark 10 saal tak valid rehta hai. 10 saal pure hone par aap ise har bar 10 saal ke liye renew karwa sakte hai. Agar aapne renewal nahi kiya, toh aapka brand surakshit nahi rahega."
  },
  {
    question: "Objection aane par kya karna chahiye?",
    answer: "Objection aane par humein 30 din ke andar ek legal reply file karni hoti hai. Is reply mein humein samjhana hota hai ki hamara brand kyu unique hai. Agar reply se registrar santusht nahi hota, toh hearing bulayi jati hai jahan humein arguments pesh karne hote hai."
  },
  {
    question: "Madrid Protocol kya hai?",
    answer: "Madrid Protocol ek international system hai jiske zariye aap Bharat mein baith kar hi ek single application se duniya ke 130 se zyada deshon mein apna trademark protect karwa sakte hai. Isse har desh mein alag vakil karne ka kharcha bach jata hai."
  }
];

export default function TrademarkRegisterKeseKarteHaiPage() {
  const breadcrumbItems = [
    { label: "Trademark Register Kaise Karte Hai", href: "/trademark-register-kese-karte-hai" },
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
        "name": "Trademark Register Kaise Karte Hai",
        "item": "https://www.iprkaro.com/trademark-register-kese-karte-hai"
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
    "headline": "Trademark Register Kaise Karte Hai: Bharat Mein Brand Protection Ka Pura Guide",
    "description": "Step-by-step jankari trademark registration process, costs, aur documents ke baare mein. Apne brand ko aaj hi surakshit karein.",
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
    "datePublished": "2026-02-04",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iprkaro.com/trademark-register-kese-karte-hai"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trademark Registration Service India",
    "image": "https://www.iprkaro.com/assets/trademark-registration-og.jpg",
    "description": "Best online trademark registration service for startups and individuals in India.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2850"
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
              Trademark <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Register Kaise Karte Hai?</span> (Puri Jankari)
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
              Apne brand name aur logo ko copy hone se bachayein. Hamari guide se janiye trademark filing ki step-by-step process, fees aur zaruri documents ke baare mein.
            </p>
            <Link href="/contact-us">
              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                Abhi Apply Karein
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

            {/* Left Column: Table of Contents */}
            <div className="hidden lg:block sticky top-32">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-6 sticky top-[100px] z-20">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Prastavana: Bharat Mein Brand Registration Ka Safar</h2>
                  <p className="mb-4 leading-relaxed text-lg">
                    Aaj ke digital yug mein jab pehchan hi sab kuch hai, apne brand ko surakshit karna kisi bhi businessman ke liye chautari (top priority) honi chahiye. Jab hum puchte hai ki <strong>trademark register kaise karte hai</strong>, hum asal mein apne sapno ko chori hone se bachane ka rasta dhoond rahe hote hai. Ek trademark sirf ek registration nahi hai, ye aapki mehnat, aapki quality aur aapke grahakon (customers) ke bharose ka pratik (symbol) hai.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg">
                    Bharat mein trademark law bahut purana hai lekin Trade Marks Act 1999 ne ise modern aur digital banaya hai. Aaj IPR Karo ke saath aap ghar baithe Bharat ke kisi bhi kone se apna brand name aur logo register kar sakte hai. Is guide mein hum detail mein har us sawal ka jawab denge jo aapke mann mein trademarking ko lekar aata hai. Hum process ko itna aasan bana denge ki aapko legal drafting ki barikiyan samajhne mein koi dikat nahi hogi.
                  </p>
                  <p className="mb-4 leading-relaxed text-lg">
                    Startup India aur Make in India jaise initiative ke baad Bharat mein lakho naye brand har saal ban rahe hai. Aise mein competition kafi badh gaya hai. Adhiktam log wahi galti karte hai ki wo brand banane mein lakho kharch karte hai lekin uski legal safety par dhyan nahi dete. Yaad rakhiye, agar aapka trademark registered nahi hai, toh koi bhi badi company aapka naam use karke aapko market se bahar nikal sakti hai. Isliye samay par kadam uthana hi samajhdari hai.
                  </p>
                  <div className="bg-blue-50 border-l-8 border-[#0C002B] p-6 my-10 rounded-r-2xl shadow-inner">
                    <p className="text-xl text-[#160049] italic font-medium leading-relaxed">
                      "Apna brand banao nahi, use kanoon ki dhaal se surakshit bhi karo. Trademark registration hi asli malikana haq ki pehchan hai."
                    </p>
                  </div>
                </section>

                <section id="what-is-trademark" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Asal Mein Trademark Kya Hota Hai?</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Trademark ek aisi unique visual represention hai jo aapko apne prati-dwandi (competitors) se alag banati hai. Ye koi shabd (Word), chitra (Logo), tagline, ya phir in sabka mishran (combination) ho sakta hai. Jab aap puchte hai ki trademark kaise karein, toh samajhiye ki aap ek 'Source Identifier' banane ki koshish kar rahe hai.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-10">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3">
                          <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 md:w-8 md:h-8 text-[#6E5E93]" />
                        </div>
                        Word Marks
                      </h4>
                      <p className="text-gray-600">Ye brand name ko protect karta hai. Chahe aap kisi bhi font ya style mein likhe, naam safe rehta hai (Example: Google, Tata).</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3">
                          <FontAwesomeIcon icon={faBuilding} className="w-6 h-6 md:w-8 md:h-8 text-[#6E5E93]" />
                        </div>
                        Device Marks (Logo)
                      </h4>
                      <p className="text-gray-600">Ye aapke brand ke visual design ya logo ko protect karta hai. Isme colors aur shapes ka mahatva hota hai (Example: Nike ka Swish).</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3">
                          <FontAwesomeIcon icon={faHandshake} className="w-6 h-6 md:w-8 md:h-8 text-[#6E5E93]" />
                        </div>
                        Taglines/Slogans
                      </h4>
                      <p className="text-gray-600">Unique phrases jaise "Just Do It" ya "Thanda Matlab Coca-Cola" bhi trademark kiye ja sakte hai.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mr-3">
                          <FontAwesomeIcon icon={faCheck} className="w-6 h-6 md:w-8 md:h-8 text-[#6E5E93]" />
                        </div>
                        Shape Marks
                      </h4>
                      <p className="text-gray-600">Product ka unique shape ya packaging bhi register ho sakta hai (Example: Toblerone bar ka shape).</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    Bharat mein ab non-conventional marks bhi register hote hai, jaise sound marks (e.g., Nokia tune) aur 3D marks. Inka mukhya uddeshya yehi hai ki customer sirf dekh kar ya sunn kar samajh jaye ki ye product kis company ka hai.
                  </p>
                </section>

                <section id="why-register" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Registration Ke Bina Business Karna Khatarnak Kyun Hai?</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Bahut se businessmen sochte hai ki jab bada business hoga tab registration karwayenge. Lekin tab tak kafi der ho chuki hoti hai. Yahan kuch mukhya karan (reasons) hai ki registration kyun non-negotiable hai:
                  </p>
                  <ul className="space-y-6 my-10 list-none p-0">
                    <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-xl mb-2">Legal Monopoly (Akela Adhikar)</h4>
                        <p className="text-green-800">Registration ke baad aap ke paas poore Bharat mein us naam ko use karne ka exclusive right hota hai. Koi bhi dusra bina aapki permission ke ise use nahi kar sakta. Ye aapko market mein ek safe zone deta hai.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faHandHoldingUsd} className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-xl mb-2">Asset Valuation (Sampatti Ka Mulya)</h4>
                        <p className="text-green-800">Ek registered trademark ek 'Intangible Asset' hai. Jaise-jaise brand popular hoga, iska value badhega. Aap ise sell kar sakte hai, license par de sakte hai (Franchising), ya bank loan ke liye collateral ke taur par use kar sakte hai.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                      <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                        <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 text-xl mb-2">Global Protection (Duniya Bhar Mein Suraksha)</h4>
                        <p className="text-green-800">Agar aap exporter hai ya digital business karte hai, toh Bharat ka registration aapko Madrid Protocol ke zariye bahar ke deshon mein fast-track entry dilata hai. Ye aapki global brand image banane ka pehla kadam hai.</p>
                      </div>
                    </li>
                  </ul>
                  <p className="mb-4 leading-relaxed text-lg">
                    Sath hi, Amazon Brand Registry aur Flipkart jaise platform par fake sellers se bachne ke liye registered trademark ek anivarya (mandatory) shart hai. Bina iske, aap online marketplace mein counterfeiting ka samna nahi kar payenge.
                  </p>
                </section>

                <section id="pre-filing-search" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Filing Se Pehle Trademark Search Sabse Zaruri Kyun Hai?</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Jab log puchte hai <strong>trademark register kaise karte hai</strong>, hum unhe humesha suggest karte hai ki subse pehle 'Public Search' karein. Bina search kiye file karna andhere mein teer chalane jaisa hai. Search report se humein pata chalta hai ki humari raah mein kitni legal mushkilein aa sakti hai.
                  </p>
                  <p className="mb-6 leading-relaxed text-lg font-semibold text-[#6E5E93]">Search karte samay hum 3 mukhya cheezein dekhte hai:</p>
                  <ul className="grid md:grid-cols-3 gap-6 mb-10">
                    <li className="bg-purple-50 p-5 rounded-xl text-center border border-purple-100">
                      <h5 className="font-bold mb-2">Wordmark Match</h5>
                      <p className="text-sm">Exact naam check karna taki clash na ho.</p>
                    </li>
                    <li className="bg-purple-50 p-5 rounded-xl text-center border border-purple-100">
                      <h5 className="font-bold mb-2">Phonetic Match</h5>
                      <p className="text-sm">Bolne mein ek jaisa lagne wale naam (Ex: Kool vs Cool).</p>
                    </li>
                    <li className="bg-purple-50 p-5 rounded-xl text-center border border-purple-100">
                      <h5 className="font-bold mb-2">Vienna Code</h5>
                      <p className="text-sm">Logo ke elements (star, circle) ki similarity check karna.</p>
                    </li>
                  </ul>
                  <p className="mb-4 leading-relaxed text-lg">
                    IPR Karo ke expert lawyers AI tools aur manual cross-verification se aapko ek detailed clearance report dete hai. Isse aapki rejection ki probability 90% tak kam ho jati hai.
                  </p>
                </section>

                <section id="step-by-step-guide" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Puri Step-by-Step Registration Process (Simplified)</h2>
                  <p className="mb-8 leading-relaxed text-lg">
                    Trademark office ki bureaucracy ko samajhna mushkil ho sakta hai. Yahan humne pura lifecycle process simple terms mein samjhaya hai:
                  </p>
                  <div className="space-y-10 my-12">
                    <div className="flex gap-6 relative">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-[#6E5E93] text-white rounded-full flex items-center justify-center font-bold text-base md:text-2xl flex-shrink-0 shadow-lg z-10">1</div>
                      <div className="absolute left-5 md:left-8 top-10 md:top-16 w-1 h-20 bg-gray-100 -z-0 hidden md:block"></div>
                      <div>
                        <h4 className="font-bold text-[#0C002B] text-xl md:text-2xl mb-2">Application Filing (Form TM-A)</h4>
                        <p className="leading-relaxed text-lg">Hum aapke bi-half par online portal par Form TM-A file karte hai. Iske liye humein class details aur user date ki zarurat hoti hai. Jaise hi application submit hoti hai, aapko ek application number mil jata hai aur aap TM symbol use kar sakte hai.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 relative">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-[#6E5E93] text-white rounded-full flex items-center justify-center font-bold text-base md:text-2xl flex-shrink-0 shadow-lg z-10">2</div>
                      <div className="absolute left-5 md:left-8 top-10 md:top-16 w-1 h-20 bg-gray-100 -z-0 hidden md:block"></div>
                      <div>
                        <h4 className="font-bold text-[#0C002B] text-xl md:text-2xl mb-2">Formalities Check Pass</h4>
                        <p className="leading-relaxed text-lg">Department check karta hai ki kya sabhi zaruri documents (jaise MSME certificate, POA) sahi se attach kiye gaye hai. Agar sab sahi hai toh status 'Marked for Exam' ho jata hai.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 relative">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-[#6E5E93] text-white rounded-full flex items-center justify-center font-bold text-base md:text-2xl flex-shrink-0 shadow-lg z-10">3</div>
                      <div className="absolute left-5 md:left-8 top-10 md:top-16 w-1 h-20 bg-gray-100 -z-0 hidden md:block"></div>
                      <div>
                        <h4 className="font-bold text-[#0C002B] text-xl md:text-2xl mb-2">Examination & Examination Report</h4>
                        <p className="leading-relaxed text-lg">Ek government officer aapke mark ko analyze karta hai. Agar koi similarity ya descriptive grounds milti hai, toh 'Examination Report' issue ki jati hai. Humein iska legal reply 30 din mein dena anivarya hai.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 relative">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-[#6E5E93] text-white rounded-full flex items-center justify-center font-bold text-base md:text-2xl flex-shrink-0 shadow-lg z-10">4</div>
                      <div className="absolute left-5 md:left-8 top-10 md:top-16 w-1 h-20 bg-gray-100 -z-0 hidden md:block"></div>
                      <div>
                        <h4 className="font-bold text-[#0C002B] text-xl md:text-2xl mb-2">Publication In Journal</h4>
                        <p className="leading-relaxed text-lg">Agar examination pass ho jata hai, toh mark 'Trademark Journal' mein dikhaya jata hai. Ye 120 dinon ke liye advertisemen ki tarah hota hai taaki janta (public) dekh sake.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 relative">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-[#6E5E93] text-white rounded-full flex items-center justify-center font-bold text-base md:text-2xl flex-shrink-0 shadow-lg z-10">5</div>
                      <div>
                        <h4 className="font-bold text-[#0C002B] text-xl md:text-2xl mb-2">Registration Certificate Issue</h4>
                        <p className="leading-relaxed text-lg">Jab 4 mahine tak koi third-party objection nahi aata, toh registrar seal maarkar 'Registration Certificate' issue kar dete hai. Ab aap legally Registered (®) ho gaye hai.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="documents-required" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Zaruri Documents Ki Checklist (Tayaar Rakhein)</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Process ko fast banane ke liye aapko ye documents scanned copy mein tayaar rakhne chahiye. Applicant ke type ke hisab se requirement thodi badal sakti hai:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 my-10">
                    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 h-full">
                      <h4 className="font-bold text-[#0C002B] text-2xl mb-4">Individuals/Sole Proprietors</h4>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500" /> Aadhar Card & PAN Card</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500" /> Soft copy of Logo (JPEG/PNG)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500" /> Signed Power of Attorney (TM-48)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-green-500" /> User Affidavit (agar brand purana hai)</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 h-full">
                      <h4 className="font-bold text-[#0C002B] text-2xl mb-4">MSMEs & Startups</h4>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#6E5E93]" /> Incorporation/Registration Certificate</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#6E5E93]" /> **Udyam/MSME Registration** (Must)</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#6E5E93]" /> Board Resolution/Partnership Deed</li>
                        <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#6E5E93]" /> PAN Card of the Entity</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg">
                    MSME/Udyam certificate isliye zaruri hai kyunki isse government application fees seedha aadhi (50%) ho jati hai. IPR Karo aapko MSME registration mein bhi help kar sakta hai.
                  </p>
                </section>

                <section id="trademark-classes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Trademark Classes: Sahi Chunav Kaise Karein?</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Bharat mein Nice Classification ka istemal kiya jata hai, jisme puri duniya ki goods aur services ko 45 categories (Classes) mein banta gaya hai. Galat class mein file karna yani brand ko insecurity mein dalna.
                  </p>
                  <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200">
                    <table className="w-full text-left bg-white border-collapse">
                      <thead className="bg-[#6E5E93] text-white">
                        <tr>
                          <th className="p-5 font-bold border border-purple-700">Class Type</th>
                          <th className="p-5 font-bold border border-purple-700">Categories (Example)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-base">
                        <tr><td className="p-4 font-bold border">Class 1 to 34</td><td className="p-4 border">Physical Products (Movable items like Chemicals, Tools, Electronics, Clothes).</td></tr>
                        <tr><td className="p-4 font-bold border">Class 35 to 45</td><td className="p-4 border">Services (Consultancy, IT, Education, Real Estate, Hotels, Legal).</td></tr>
                        <tr className="bg-gray-50"><td className="p-4 font-bold border text-[#6E5E93]">Class 25</td><td className="p-4 border">Readymade Garments & Footwear (Most Popular).</td></tr>
                        <tr className="bg-gray-50"><td className="p-4 font-bold border text-[#6E5E93]">Class 9</td><td className="p-4 border">Mobile Apps, Software, Computers.</td></tr>
                        <tr className="bg-gray-50"><td className="p-4 font-bold border text-[#6E5E93]">Class 42</td><td className="p-4 border">Software Design & Development Services.</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg italic text-gray-600">
                    Pro Tip: Humein 'Class Analysis' karna chahiye. Agar aap restaurant chalate hai toh aapko Class 43 (Services) ke sath-sath Class 30 (Spices/Packaged Food) mein bhi protection leni chahiye agar aap apna masala bechte hai.
                  </p>
                </section>

                <section id="government-fees" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Government Fees Breakdown (Latest 2026 Updates)</h2>
                  <p className="mb-8 leading-relaxed text-lg">
                    Trademark office ki fees fix hoti hai lekin ye applicant ke category par depend karti hai. Hum humesha 'E-filing' recommend karte hai kyunki ye sasti aur fast hoti hai.
                  </p>
                  <div className="flex flex-col md:flex-row gap-8 my-12">
                    <div className="flex-1 p-8 bg-gradient-to-br from-purple-100 to-white rounded-3xl border-2 border-purple-200 text-center shadow-lg hover:-translate-y-2 transition-transform">
                      <h4 className="font-bold text-[#0C002B] text-4xl mb-2">₹4,500</h4>
                      <p className="font-bold text-[#6E5E93] text-xl mb-4">Individuals / MSMEs / Startups</p>
                      <p className="text-sm text-gray-600">Ye discounted rate hai. Iske bina aapka kharcha double ho sakta hai. Aaj hi Udyam check karein.</p>
                    </div>
                    <div className="flex-1 p-8 bg-gray-50 rounded-3xl border border-gray-200 text-center shadow-md hover:-translate-y-2 transition-transform">
                      <h4 className="font-bold text-gray-800 text-4xl mb-2">₹9,000</h4>
                      <p className="font-bold text-gray-600 text-xl mb-4">Other Companies / Entities</p>
                      <p className="text-sm text-gray-500">Agar MSME status nahi hai toh aapko poori fees deni hogi. Physical filing mein ye Rs 10,000 ho jati hai.</p>
                    </div>
                  </div>
                </section>

                <section id="objection-handling" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0C002B] mb-8">Objection Aane Par Ghabrayein Nahi (Legal Handle Kaise Karein)</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Lagbhag 60% applications mein registrar 'Examination Report' issue karte hai. Iska matlab ye nahi ki reject ho gaya, iska matlab hai ki registrar aapse kuch sawal puch rahe hai. Inhe hum 2 Sections mein baant-te hai:
                  </p>
                  <div className="space-y-8 my-10">
                    <div className="p-8 bg-white rounded-3xl border-l-[10px] border-l-[#0C002B] shadow-xl">
                      <h4 className="font-bold text-[#0C002B] text-2xl mb-4 flex items-center">
                        <FontAwesomeIcon icon={faBalanceScale} className="w-4 h-4 mr-3 text-[#6E5E93]" />
                        Section 9 (Absolute Grounds)
                      </h4>
                      <p className="mb-4 text-gray-700 leading-relaxed">Jab examiner ko lagta hai ki aapka naam 'Generic' hai (e.g., 'Sweet Mango' for juice) ya koi 'Good Quality' jaisa descriptio hai. </p>
                      <p className="font-bold text-[#6E5E93]">Solving Strategy:</p>
                      <p className="text-gray-600 italic">Hum 'Acquired Distinctiveness' ke proofs dete hai, yani proof karte ki lambe samay se use karne se logo ke dhimag mein ye naam sirf aapke business se juda hai.</p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border-l-[10px] border-l-[#6E5E93] shadow-xl">
                      <h4 className="font-bold text-[#0C002B] text-2xl mb-4 flex items-center">
                        <FontAwesomeIcon icon={faScaleBalanced} className="w-4 h-4 mr-3 text-[#6E5E93]" />
                        Section 11 (Relative Grounds)
                      </h4>
                      <p className="mb-4 text-gray-700 leading-relaxed">Jab koi bilkul milta-julta naam pehle se registered find hota hai. Isme confusion hone ka khatra bataya jata hai.</p>
                      <p className="font-bold text-[#6E5E93]">Solving Strategy:</p>
                      <p className="text-gray-600 italic">Hum dono brands ke market, price point, audience aur visual difference ko argue karte hai taaki siddh (prove) ho sake ki koi confusion nahi hoga.</p>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-lg text-red-600 font-bold">
                    Dhyan Dein: Deadline miss karne par application 'Abandoned' ho jati hai, jise dobara revive karna bahut mushkil hai.
                  </p>
                </section>

                <section id="msme-startup-benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Startups Ke Liye Vishesh Suvidhayein Aur Chhutein</h2>
                  <p className="mb-8 leading-relaxed text-lg">
                    DPIIT Recognized Startups ke liye Bharat sarkar ne 'Fast Track Examination' ka rasta khola hai. Jahan aam logo ko mahino lagte hai, startups ke liye examination 30 se 60 dinon mein ho sakta hai.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-10 list-none p-0">
                    <div className="p-6 bg-purple-100/50 rounded-2xl border border-purple-200 text-center">
                      <div className="text-3xl mb-2">💰</div>
                      <h5 className="font-bold text-lg mb-1">50% Fee Rebate</h5>
                      <p className="text-sm">Seedha 4500 rupaye ki bachat.</p>
                    </div>
                    <div className="p-6 bg-purple-100/50 rounded-2xl border border-purple-200 text-center">
                      <div className="text-3xl mb-2">⚡</div>
                      <h5 className="font-bold text-lg mb-1">Priority Processing</h5>
                      <p className="text-sm">Examiner pehle aapki file dekhenge.</p>
                    </div>
                    <div className="p-6 bg-purple-100/50 rounded-2xl border border-purple-200 text-center">
                      <div className="text-3xl mb-2">⚖️</div>
                      <h5 className="font-bold text-lg mb-1">Free Facilitators</h5>
                      <p className="text-sm">Sarkar ke empanelled vakilon ki madad.</p>
                    </div>
                    <div className="p-6 bg-purple-100/50 rounded-2xl border border-purple-200 text-center">
                      <div className="text-3xl mb-2">🛡️</div>
                      <h5 className="font-bold text-lg mb-1">Stronger Defense</h5>
                      <p className="text-sm">Startup support se application ka wajan badhta hai.</p>
                    </div>
                  </div>
                </section>

                <section id="legal-enforcement" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Infringement Se Ladai: Kab Aur Kaise Action Lein?</h2>
                  <p className="mb-6 leading-relaxed text-lg">
                    Maatra certificate lena kafi nahi hai, use use karna aur defend karna asli dharam hai. Agar aapko koi imitator dikhta hai toh:
                  </p>
                  <h3 className="text-xl font-bold text-[#160049] mb-3 flex items-center">
                    <FontAwesomeIcon icon={faGavel} className="w-4 h-4 mr-3 text-red-600" />
                    Civil & Criminal Action
                  </h3>
                  <p className="mb-6 leading-relaxed text-lg">
                    Aap unhe 'Cease and Desist' notice bhej sakte hai. Bharat mein infringement ek 'Cognizable Offence' hai. Aap police raid bhi karwa sakte hai agar vo bade level par aapka fake maal bech rahe hai. Jail ki saza 6 mahine se 3 saal tak ho sakti hai.
                  </p>
                  <div className="bg-red-50 p-8 rounded-3xl border-l-[10px] border-red-600 my-10">
                    <h4 className="text-red-900 font-bold text-2xl mb-4 italic">Asli Power: Injunction Orders</h4>
                    <p className="text-red-800 leading-relaxed text-lg mb-4">
                      Court se aap 'Stay Order' le sakte hai jisse vo bina trial ke hi kaam rokne ko majboor honge. Isse unka stocks seize ho jata hai aur unka business stop ho jata hai. Bin-registered user ye power nahi rakhta.
                    </p>
                  </div>
                </section>

                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Nishkarsh: Apne Brand Ko Bharat Ki Shaan Banayein</h2>
                  <p className="mb-4 leading-relaxed text-xl">
                    Humein umeed hai ki is vishu-guide (comprehensive guide) se aap samajh gaye honge ki <strong>trademark register kaise karte hai</strong>. Ye sirf ek kanooni prakriya nahi hai, balki ye ek sapne ko haquikat mein badalne ka suraksha kavach hai.
                  </p>
                  <p className="mb-4 leading-relaxed text-xl">
                    Ek chota sa kadam aaj aapke business ko aane wale 100 saalon tak ek pehchan dilwa sakta hai. IPR Karo ke saath judkar aap nishchint (worry-free) hokar apne core business par dhyan de sakte hai, jabki hum aapke brand ki safety ka dhyan rakhenge. Same-day filing, expert drafting aur 100% transparency ke sath humne hazaro startups ko unka malikana haq dilwaya hai.
                  </p>
                  <p className="mb-6 leading-relaxed text-xl font-bold text-[#6E5E93]">
                    Inteaar mat kijiye, kyunki Intellectual Property mein 'First to File' hi sabse bada niyam hai.
                  </p>
                </section>

                {/* FAQ Section */}
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

                {/* Final CTA Strip */}
                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Aaj Hi Apna Brand Safe Karein</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                      5000+ businesses ne hum par bharosa kiya hai. Experts se baat karein aur same-day filing report payein.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                          Start Registration Now
                        </button>
                      </Link>
                      <a href="tel:+919289707648">
                        <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-3" />
                          Call: +91-9289707648
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
