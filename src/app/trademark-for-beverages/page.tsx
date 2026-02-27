import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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
    faGlassWater,
    faBeer,
    faWineGlass,
    faMugHot,
    faWineBottle,
    faStore,
    faUsers,
    faLightbulb,
    faStar,
    faIndustry,
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Registration for Beverages in India | Class 32 & 33 Guide',
    description: 'Complete legal guide to trademark registration for beverages in India. Secure your soft drinks, juices, beer, and spirits under Class 32 and 33. 100% online filing.',
    keywords: [
        'trademark for beverages',
        'beverage brand registration india',
        'class 32 trademark india',
        'class 33 trademark spirits',
        'soft drink trademark search',
        'protect beverage brand name',
        'ip india beverage classes',
        'liquor brand protection india',
        'juice company trademark',
        'legal shield for beverage startup'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for Beverages in India',
        description: 'Protect your beverage innovation with India\'s premier IP law firm. Same-day filing for non-alcoholic and alcoholic beverage brands.',
        url: 'https://www.iprkaro.com/trademark-for-beverages',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-beverages',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Why Beverage Trademarks Matter' },
    { id: 'beverage-classes', title: 'Understanding Class 32 & 33' },
    { id: 'class-32-details', title: 'Class 32: Non-Alcoholic & Beer' },
    { id: 'class-33-details', title: 'Class 33: Alcoholic Spirits' },
    { id: 'not-covered', title: 'What is NOT Covered' },
    { id: 'registration-process', title: 'Step-by-Step Process' },
    { id: 'documents-checklist', title: 'Documents Needed' },
    { id: 'importance-for-startups', title: 'Strategy for Startups' },
    { id: 'legal-objections', title: 'Handling Objections' },
    { id: 'global-protection', title: 'Madrid Protocol' },
    { id: 'brand-monitoring', title: 'Enforcement Strategies' },
    { id: 'trade-dress-beverages', title: 'Bottle Design & Trade Dress' },
    { id: 'valuation-liquor', title: 'Business Valuation' },
    { id: 'tech-in-beverages', title: 'Tech & Traceability' },
    { id: 'government-fees', title: 'Costs and Fees' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Which trademark class is for cold drinks and juices in India?",
        answer: "Non-alcoholic beverages like cold drinks, soft drinks, fruit juices, and mineral water fall under Class 32 of the Nice Classification system."
    },
    {
        question: "Is beer included in Class 32 or Class 33?",
        answer: "Interestingly, beer is included in Class 32 along with non-alcoholic drinks. Class 33 is reserved for all other alcoholic beverages like whisky, wine, and gin."
    },
    {
        question: "Can I trademark the taste or recipe of my beverage?",
        answer: "No, trademark law protects brand identifiers like names, logos, and packaging. Recipes are better protected through trade secrets or, in very specific cases, patents."
    },
    {
        question: "What is 'Trade Dress' in the beverage industry?",
        answer: "Trade dress refers to the overall visual appearance of a product, such as a unique bottle shape (like Coca-Cola) or a specific label color scheme, which can be protected legally."
    },
    {
        question: "How long does it take to register a beverage brand?",
        answer: "The initial filing happens within 24 hours. The final registration certificate usually takes 6 to 12 months, assuming no major legal objections or oppositions arise."
    },
    {
        question: "Do I need separate trademarks for different flavors of the same drink?",
        answer: "Typically, you trademark the core brand name. Specific flavor names can also be trademarked if they are unique, but the main protection usually resides with the primary house brand."
    },
    {
        question: "Is MSME registration beneficial for beverage trademark filing?",
        answer: "Yes, MSME-registered startups get a 50% discount on government filing fees, making the process significantly more affordable for new beverage companies."
    },
    {
        question: "Can I use the TM symbol immediately after filing?",
        answer: "Yes, you can use the TM symbol right from the moment you receive your application acknowledgment number from the Trademark Registry."
    },
    {
        question: "What happens if another company uses a similar logo for water?",
        answer: "If you have a registered trademark, you can file a case for infringement and seek a court injunction to stop them from using the confusingly similar logo."
    },
    {
        question: "Can a foreign beverage brand register in India?",
        answer: "Absolutely. Foreign companies can register their trademarks in India either through a direct application or via the Madrid Protocol if they are based in a member country."
    },
    {
        question: "What is the difference between Class 30 and Class 32 for drinks?",
        answer: "Class 30 covers coffee, tea, and chocolate-based beverages. Class 32 is specifically for water, mineral water, juices, and soft drinks."
    },
    {
        question: "How do I protect my brand if I sell both juices and wine?",
        answer: "You would need to file in both Class 32 (for juices) and Class 33 (for wine) to ensure full legal protection across your entire product line."
    },
    {
        question: "Can I register a sound as a trademark for my beverage brand?",
        answer: "Yes, sound marks (like a specific jingle or the sound of a bottle opening) can be registered if they are distinctive and unique to your brand."
    },
    {
        question: "What is a 'Well-Known' trademark in the beverage sector?",
        answer: "A well-known trademark is one that is recognized by a large section of the public (e.g., Bisleri or Pepsi). These marks enjoy much broader protection across all classes."
    },
    {
        question: "Why is a trademark search critical for a new beverage startup?",
        answer: "The beverage market is crowded. A search ensures you aren't accidentally infringing on an existing brand, saving you from expensive rebranding and legal battles later."
    }
];

const reviews = [
    {
        name: "Vikram S.",
        role: "Founder, RefreshO Juices",
        text: "IPR Karo helped us secure our Class 32 registration in record time. Their detailed search gave us the confidence to launch our brand nationally without any fear of infringement.",
        rating: 5,
        icon: faGlassWater
    },
    {
        name: "Anjali M.",
        role: "Director, Stellar Spirits",
        text: "Registering a liquor brand in India is legally complex due to state regulations and IP laws. The team at IPR Karo handled our Class 33 filing with extreme precision. Exceptional service!",
        rating: 5,
        icon: faWineBottle
    },
    {
        name: "Rahul G.",
        role: "MD, BrewMaster Craft Beers",
        text: "Getting our beer brand protected was our priority. IPR Karo's knowledge of the beverage industry's specific IP needs Is unmatched. We got our TM number on day one.",
        rating: 5,
        icon: faBeer
    }
];

export default function TrademarkForBeveragesPage() {
    const breadcrumbItems = [
        { label: "Trademark for Beverages", href: "/trademark-for-beverages" },
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
        "headline": "The Ultimate Guide to Trademark Registration for Beverages (Class 32 & 33) in India",
        "description": "Comprehensive manual on securing beverage brand IP. Covers juices, soft drinks, beer, and spirits, including registration steps, costs, and legal strategies.",
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
                "name": "Trademark for Beverages",
                "item": "https://www.iprkaro.com/trademark-for-beverages"
            }
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration for Beverage Brands",
        "image": "https://www.iprkaro.com/logo.png",
        "description": "Professional legal services for registering beverage trademarks in India under Class 32 and 33.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "url": "https://www.iprkaro.com/trademark-for-beverages",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "2150"
        },
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.name
            },
            "publisher": {
                "@type": "Organization",
                "name": "IPR Karo"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating.toString(),
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": review.text
        }))
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <div className="bg-white min-h-screen font-sans text-gray-800">

                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
                            Quench the Thirst for Protection: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Elite Trademark Registration for Beverages
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the high-stakes beverage industry, your brand name is your identity. Secure your soft drinks, juices, energy drinks, and alcoholic spirits with India's leading IP law firm. Fast, 100% online, and expert-led protection.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Secure Your Beverage Brand
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Breadcrumb Row */}
                <div className="bg-gray-50 border-b border-gray-200 py-4 shadow-sm">
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

                                    <section id="introduction" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Value of Trademark Protection in the Beverage Industry
                                        </h2>
                                        <p className="mb-6">
                                            The beverage industry in India is a hyper-competitive battlefield. From the shelves of local kirana stores to the premium aisles of hypermarkets and the digital storefronts of e-commerce apps, thousands of brands are vying for consumer attention. In this crowded marketplace, your brand name, logo, and overall packaging identity are the only things that distinguish your innovation from a generic commodity.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Beverages</strong> is the legal foundation upon which a beverage empire is built. Whether you are launching a startup for organic kombucha, a premium craft beer brand, or a national line of mineral water, your brand identity is your most valuable asset. Without a registered trademark, you are essentially building a house on rented land. A competitor can easily copy your brand name, use similar packaging, and siphon off your hard-earned customer trust, often leaving you with little to no legal recourse if you haven't secured your rights.
                                        </p>
                                        <div className="bg-purple-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-purple-900 italic font-medium">
                                                "In the beverage world, you don't just sell a drink; you sell a brand experience. A trademark is the legal seal of that experience."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The risks of operating without a trademark in the beverage sector are particularly high. Product imitation and "passing off" are common tactics used by unscrupulous players. Imagine spending years developing a unique flavor profile and a loyal customer base, only to find a cheaper, inferior version of your drink being sold under a confusingly similar name. This not only results in direct financial loss but can permanently damage your brand's reputation for quality and safety.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, having a registered trademark is a prerequisite for most modern distribution channels. Large retail chains, airport kiosks, and e-commerce platforms like Amazon Fresh or BigBasket require registered trademarks to list your products and protect you through their internal brand registry programs. At IPR Karo, we ensure that your beverage brand is not just protected in name but is also ready for national and global market penetration.
                                        </p>
                                    </section>

                                    <section id="beverage-classes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Navigating the Nice Classification: Class 32 and Class 33
                                        </h2>
                                        <p className="mb-6 text-gray-600 font-medium italic">
                                            Choosing the right trademark class is the most critical technical step in your registration journey. For beverages, the world is divided into Class 32 and Class 33.
                                        </p>
                                        <p className="mb-6">
                                            The International Nice Classification system categorizes goods into 45 classes. For beverage companies, understanding the distinction between non-alcoholic and alcoholic categories is vital. A mistake here can lead to an invalid registration or a registration that provides zero protection for your actual products.
                                        </p>
                                        <p className="mb-6">
                                            While Class 32 covers most "soft" and non-alcoholic drinks, Class 33 is the exclusive domain of alcoholic spirits (excluding beer). At IPR Karo, we conduct a multi-layered analysis of your product line to determine if you need protection in one or both of these classes, often considering future brand extensions into mixers or related food categories as well.
                                        </p>
                                    </section>

                                    <section id="class-32-details" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Class 32: The Domain of Non-Alcoholic Drinks and Beer
                                        </h2>
                                        <p className="mb-8">
                                            Class 32 is a broad and diverse category. It covers everything from basic drinking water to complex energy drinks and, somewhat counter-intuitively, all types of beer.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faGlassWater} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Soft Drinks & Water</h3>
                                                <p className="text-sm leading-relaxed">Includes mineral water, aerated water, sodas, colas, lemonades, and sparkling water. This is the largest sub-category in the beverage sector.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faBeer} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Beer & Malt Beverages</h3>
                                                <p className="text-sm leading-relaxed">Covers all beers (ale, lager, stout, craft beer), non-alcoholic beers, and other malt-based non-alcoholic beverages.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faMugHot} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Juices & Nectars</h3>
                                                <p className="text-sm leading-relaxed">Includes all fruit juices, fruit nectars, smoothies, vegetable juices, and preparations for making such juices.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faRocket} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Energy & Isotonic Drinks</h3>
                                                <p className="text-sm leading-relaxed">Covers sports drinks, electrolyte drinks, energy shots, and glucose-based beverages for non-medical use.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="class-33-details" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Class 33: Alcoholic Spirits, Wines, and Liqueurs
                                        </h2>
                                        <p className="mb-6">
                                            Class 33 is exclusively dedicated to alcoholic beverages with the exception of beer. This class is critical for the spirits industry, including distillers, wineries, and liqueur producers.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faWineBottle} className="w-8 h-8 mr-4" />
                                                    Class 33 Inclusions
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-4">
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Distilled Spirits (Whisky, Vodka, Gin)</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Wines (Red, White, Sparkling)</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Liqueurs and Bitters</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Alcoholic Fruit Extracts</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Pre-mixed Alcoholic Cocktails</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Cider (Alcoholic)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="not-covered" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            What is NOT Covered in Beverage Classes?
                                        </h2>
                                        <p className="mb-6">
                                            Many liquid consumables fall outside Class 32 and 33. Proper classification prevents legal overlaps and ensures your registration is defensible.
                                        </p>
                                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100 space-y-4">
                                            <p className="flex items-start text-gray-700">
                                                <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs font-bold">!</span>
                                                <span><strong>Coffee, Tea, & Cocoa (Class 30)</strong>: Even if served as beverages, these primary ingredients place the brand in Class 30.</span>
                                            </p>
                                            <p className="flex items-start text-gray-700">
                                                <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs font-bold">!</span>
                                                <span><strong>Milk Beverages (Class 29)</strong>: Beverages where milk or dairy substitutes are the predominant ingredient fall under Class 29.</span>
                                            </p>
                                            <p className="flex items-start text-gray-700">
                                                <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs font-bold">!</span>
                                                <span><strong>Medicinal Beverages (Class 5)</strong>: Health tonics, dietetic beverages for medical use, and nutritional supplement drinks belong to Class 5.</span>
                                            </p>
                                        </div>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Roadmap to Beverage Brand Ownership
                                        </h2>
                                        <div className="relative space-y-12">
                                            {/* Line connecting steps */}
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 group hover:bg-[rgb(110,94,147)] hover:text-white transition-all">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-gray-200">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 1: Comprehensive Search & Clearance</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We perform a multi-class search to ensure your beverage name is unique. In the drinks industry, phonetic similarities (like "Fruity" vs "Fruitie") are huge causes of litigation. We use advanced search algorithms to find exact, phonetic, and visual conflicts before you spend a single rupee on marketing.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 group hover:bg-[rgb(110,94,147)] hover:text-white transition-all">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-gray-200">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 2: Filing Form TM-A</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We draft and file your application with the Trademark Registry. For beverages, the "Specification of Goods" must be precise. We ensure your filing covers not just your current drink, but also potential future variations (e.g., diet versions, flavored extensions). Once filed, you get your TM number and the right to use the ™ symbol immediately.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 group hover:bg-[rgb(110,94,147)] hover:text-white transition-all">
                                                    <FontAwesomeIcon icon={faCertificate} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-gray-200">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 3: Examination & Final Registration</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        An examiner reviews your application for distinctiveness. We handle all responses to Examination Reports, addressing any legal objections regarding descriptive or similar names. After passing examination and the 4-month advertisement period in the Trademark Journal, you receive your Registration Certificate, valid for 10 years.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Documentation Checklist: Speeding Up Your Filing
                                        </h2>
                                        <p className="mb-8 font-medium text-gray-700 italic">
                                            A beverage brand launch is fast-paced. Having your documents ready ensures your legal filing doesn't slow down your marketing launch.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Individuals / Proprietorships
                                                </h3>
                                                <ul className="space-y-4 text-gray-600 text-sm">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" /> <span>Aadhaar and PAN Card of the Applicant.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" /> <span>MSME/Udyam Registration (for 50% fee subsidy).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" /> <span>Digital copy of the logo (JPEG/PNG).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" /> <span>Signed Power of Attorney (Form 48).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Companies / Partnerships / LLPs
                                                </h3>
                                                <ul className="space-y-4 text-gray-600 text-sm">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" /> <span>Certificate of Incorporation / Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" /> <span>Company PAN and Address Proof.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" /> <span>Authorized Signatory details and Board Resolution.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" /> <span>User Affidavit (if claiming brand use before filing date).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="importance-for-startups" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The IP Strategy for Beverage Startups: Protecting the Future
                                        </h2>
                                        <p className="mb-6">
                                            For a new beverage brand, IP is not just a legal requirement; it is a vital part of your business's "Fundability". Venture capitalists and investors look closely at a startup's IP portfolio to assess risk. If your core brand name is not trademarked, or if it's too similar to an existing giant's name, you are a "high-risk" investment.
                                        </p>
                                        <p className="mb-6">
                                            We recommend a "House of Brands" or "Branded House" strategy depending on your growth plans. For startups, we often suggest registering a strong house brand first. As you expand into new flavor lines or different drink categories (like moving from energy drinks to alcoholic sprits), we help you register sub-brands or new classes, ensuring your legal umbrella grows with your business.
                                        </p>
                                        <p className="mb-6">
                                            Startups in India should also leverage the **Start-Up India Intellectual Property Protection (SIPP)** scheme. This program allows startups to navigate the trademark and patent process with significantly lower government fees and faster processing times. At IPR Karo, we are specialists in helping food and beverage startups maximize these government benefits while building a rock-solid IP shield.
                                        </p>
                                    </section>

                                    <section id="legal-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Handling Beverage Trademark Objections: Section 9 & 11
                                        </h2>
                                        <p className="mb-6">
                                            The beverage sector is notorious for descriptiveness and similarity issues. The Trademark Registry often issues objections that can derail your brand launch if not handled by experts.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 9 (Descriptive Goods)</strong>: If your brand name is a common word that describes your product (e.g., "Cold Water" or "Fresh Orange"), the Registrar will likely reject it. They argue that one business cannot have a monopoly on words that describe what they're selling. We help you overcome this by proving "Secondary Meaning" through evidence of your brand's unique market presence and consumer recognition.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 11 (Phonetic & Visual Similarity)</strong>: In a market with brands like "Bisleri" vs "Bislari" or "Pepsi" vs "Pipsi", similarity is a constant threat. The Registrar will object if your mark is "confusingly similar" to an existing one in the beverage classes. Our attorneys specialize in drafting complex legal rebuttals, using historical case law to show that your brand's overall visual "get-up" and marketplace target are distinct enough to avoid consumer confusion.
                                        </p>
                                    </section>

                                    <section id="global-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Going Global: The Madrid Protocol for Beverage Exports
                                        </h2>
                                        <p className="mb-6">
                                            The world developed a taste for Indian beverages, from packaged mango juices to premium Indian whiskeys. If you plan to export your beverage brand, you need more than just a domestic trademark. International IP protection is essential to prevent foreign entities from registering your name in their countries and holding your brand hostage.
                                        </p>
                                        <p className="mb-6">
                                            The <strong>Madrid Protocol</strong> is a cost-effective international filing system. It allows an Indian beverage company to file a single application in India and designate over 130 countries for protection. This system eliminates the need to hire separate attorneys in every country and simplifies the management of your global brand portfolio. We handle the entire international filing process, ensuring your brand name is protected from Singapore to San Francisco.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 rounded-3xl my-10 shadow-2xl relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20"></div>
                                            <h3 className="text-2xl font-bold mb-4">Export Strategy Fact</h3>
                                            <p className="opacity-80 leading-relaxed font-light">
                                                Over 40% of international trademark disputes for Indian FMCG brands occur in the beverage and food sectors. Early international registration via Madrid is the most effective way to preempt global IP hijacking.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="brand-monitoring" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Vigilance in the Market: Monitoring & Enforcement
                                        </h2>
                                        <p className="mb-6">
                                            Obtaining a trademark certificate is the start of your responsibility, not the end. The beverage market moves fast, and imitators move faster. A local producer might start selling a look-alike bottle in a different state, potentially causing health hazards that could be blamed on YOUR brand.
                                        </p>
                                        <p className="mb-6">
                                            We provide an 'Anti-Counterfeit & Monitoring Service'. We scan the Trademark Journal every week to detect any applications that are similar to yours. If we find a conflict, we file an immediate Opposition to stop the registration. Furthermore, we assist in sending "Cease and Desist" notices and initiating legal action against the physical manufacturing of counterfeit beverages, protecting both your revenue and your customers' safety.
                                        </p>
                                    </section>

                                    <section id="trade-dress-beverages" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Trade Dress: Protecting the Signature 'Look and Feel'
                                        </h2>
                                        <p className="mb-6">
                                            In the drinks industry, the shape of the bottle, the color of the cap, and the specific graphic layout of the label are often as recognizable as the brand name itself. This is called 'Trade Dress'. Think of the Coca-Cola contour bottle or the unique blue shade of a specific energy drink.
                                        </p>
                                        <p className="mb-6">
                                            A trademark can protect these non-traditional identifiers. We help beverage companies register 'Device Marks' for their label designs and 'Three-Dimensional Marks' for unique bottle shapes. This multi-layered approach ensures that even if an imitator uses a different name, their attempt to mimic your visual "vibe" can be legally halted for being a "deceptive similarity."
                                        </p>
                                    </section>

                                    <section id="valuation-liquor" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Financial Power: Valuation of Beverage Trademarks
                                        </h2>
                                        <p className="mb-6">
                                            Your beverage trademark appears as an "Intangible Asset" on your company's balance sheet. For many successful beverage giants, the brand valuation (the trademark's worth) is actually higher than the value of all their factories and trucks combined.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark can be licensed to franchises, allowing you to expand into new territories without managing the manufacturing yourself. It can also be used as collateral to secure business loans. By registering and building your brand early, you are creating a "Legacy Asset" that can be sold or passed down through generations, long after the physical products have been consumed.
                                        </p>
                                    </section>

                                    <section id="tech-in-beverages" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Technology and Transparency in Beverage Branding
                                        </h2>
                                        <p className="mb-6">
                                            The future of beverage branding is linked to "Traceability." Modern consumers want to know where their drink came from and if it is authentic. We advise brands on how to integrate QR codes and Blockchain-based verification into their trademarked packaging.
                                        </p>
                                        <p className="mb-6">
                                            When a customer scans a bottle, they should be directed to a digital interface that prominently features your registered trademark, verifying that the product is a genuine article from your brand. This synergy between digital tech and traditional IP law is how elite beverage brands stay ahead of the curve and maintain absolute consumer trust in a digitized market.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, we use AI-powered brand search tools that use deep learning to analyze millions of images and logos. This ensures that your beverage logo doesn't just pass the name test but is also visually unique enough to stand out on the shelves and satisfy the Trademark Registry's strict distinctiveness criteria.
                                        </p>
                                    </section>

                                    <section id="government-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Transparent Pricing for Beverage Brands
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            We believe in empowering the Indian beverage industry with elite legal protection that is both affordable and high-impact.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Official Government Fee</h4>
                                                <p className="text-sm text-gray-600 mb-6">Standardized fees for beverage class registration in India.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Individuals/MSMEs</span>
                                                        <span className="text-lg font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Companies/Non-MSME</span>
                                                        <span className="text-lg font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">IPR Karo Prof. Fee</h4>
                                                <p className="text-sm opacity-70 mb-6">Expert end-to-end handling of your drink brand's IP.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight opacity-70">Starting From</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 leading-relaxed italic">Includes deep cross-class search, professional drafting, same-day filing, and 24/7 status monitoring.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase">
                                            Trusted by Drink Innovators
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div className="flex text-yellow-500">
                                                            {[...Array(review.rating)].map((_, i) => (
                                                                <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                            ))}
                                                        </div>
                                                        <FontAwesomeIcon icon={review.icon} className="text-[rgb(110,94,147)] text-xl opacity-20" />
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-[10px] text-[rgb(110,94,147)] font-black uppercase tracking-widest">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Beverage Trademark: Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-gray-200 transition-all">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-sm">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Brand's Spirit Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto font-light">
                                                Don't let your innovation go unprotected. Join 2000+ beverage brands who trust IPR Karo for elite, end-to-end IP protection.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Consult Beverage Expert
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" />
                                                        +91-9289707648
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-20"></div>
                                        <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10"></div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Check Drink-Name Availability</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-light">
                                    The beverage market is crowded. Get a **Free Cross-Class Search Report** (Class 32 & 33) in 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase tracking-widest">
                                        Search Free Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest text-sm">Industry Specific</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-restaurant" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Restaurant Brand</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-processed-food" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Processed Foods</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-staple-foods" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Staple Foods</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-raw-agricultural-products" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Agri-Products</span>
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
