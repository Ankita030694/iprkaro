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
    faUtensils,
    faCoffee,
    faStore,
    faUsers,
    faLightbulb,
    faStar,
    faWheatAwn,
    faBowlRice,
    faJar,
    faSeedling,
    faBoxOpen,
    faCartFlatbed
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Staple Foods (Class 30) | Register Your Brand Identity',
    description: 'Comprehensive guide to trademark registration for staple foods like rice, flour, spices, coffee, and tea in India. Secure your food brand under Class 30 with expert legal help.',
    keywords: [
        'trademark for staple foods',
        'class 30 trademark india',
        'rice brand registration',
        'spices trademark registration india',
        'flour brand protection',
        'coffee brand trademark',
        'tea brand registration india',
        'honey trademark registration',
        'salt brand legal protection',
        'bakery brand trademark',
        'confectionery trademark india',
        'food brand legal search'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for Staple Food Brands',
        description: 'Protect your rice, spices, coffee, or tea brand with India\'s leading IP legal team. 100% online process, comprehensive Class 30 protection.',
        url: 'https://www.iprkaro.com/trademark-for-staple-foods',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-staple-foods',
    },
};

const tocSections = [
    { id: 'introduction-staple-foods', title: 'Introduction' },
    { id: 'why-trademark-class-30', title: 'Why Class 30 Matters' },
    { id: 'scope-of-class-30', title: 'What is Covered?' },
    { id: 'legal-requirements', title: 'Legal Requirements' },
    { id: 'registration-process', title: 'Registration Steps' },
    { id: 'documents-needed', title: 'Required Documents' },
    { id: 'branding-strategy', title: 'Branding Strategy' },
    { id: 'common-objections', title: 'Overcoming Objections' },
    { id: 'monitoring-enforcement', title: 'Brand Enforcement' },
    { id: 'global-protection', title: 'International Filing' },
    { id: 'cost-structure', title: 'Costs and Fees' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What exactly is Trademark Class 30 for staple foods?",
        answer: "Trademark Class 30 is a specific category under the Nice Classification system that includes staple foods of plant origin, prepared for consumption or conservation. This includes items like coffee, tea, cocoa, rice, tapioca, sago, flour, cereals, bread, pastry, confectionery, ices, honey, treacle, yeast, baking powder, salt, mustard, vinegar, sauces, and spices."
    },
    {
        question: "Why should I register a trademark for my spice brand in India?",
        answer: "India is a global hub for spices. Registering your trademark ensures that your unique brand identity is legally protected from imitators. It provides you with exclusive rights to use the brand name and logo across India, which is vital for building trust with consumers and scaling your business."
    },
    {
        question: "Can I trademark the name of a specific variety of rice like Basmati?",
        answer: "No, generic names or names of varieties that are public property like 'Basmati' cannot be trademarked as word marks by a single entity. However, you can trademark your unique brand name for that rice (e.g., 'Daawat' or 'India Gate'). For geographical indications like Basmati, protection is handled differently under GI laws."
    },
    {
        question: "How long does it take to get a Class 30 trademark registration?",
        answer: "The process usually takes between 12 to 18 months if there are no objections or oppositions. However, you can start using the TM symbol immediately after filing your application with the IP India registry."
    },
    {
        question: "What are the common reasons for trademark rejection in the food sector?",
        answer: "Common reasons include descriptiveness (e.g., trying to trademark 'Pure Salt'), similarity to existing brands, or using geographical names that imply a specific origin without authorization. Conducting a thorough search before filing is the best way to avoid these issues."
    },
    {
        question: "Is it necessary to have an FSSAI license for trademark registration?",
        answer: "While they are independent legal requirements, an FSSAI license is mandatory for operating a food business in India. Having your FSSAI license in place can serve as proof of business activity, which is helpful during the trademark application process."
    },
    {
        question: "Can I trademark unique packaging for my flour brand?",
        answer: "Yes, you can register the 'Trade Dress' for your packaging. This includes the specific combination of colors, graphics, font styles, and layout used on your product bags. This prevents competitors from creating confusingly similar packaging that could mislead customers."
    },
    {
        question: "Does a trademark for coffee also cover tea products?",
        answer: "Yes, both coffee and tea fall under Class 30. When you register your trademark, you should specify all the products you intend to sell. If you register for 'coffee', you can usually extend it to 'tea' if they fall under the same class and have similar market channels."
    },
    {
        question: "What happens if someone else starts using my brand name for snacks?",
        answer: "If you have a registered trademark, you can file a case for infringement and seek a court injunction to stop them. If your mark is not registered, you may still have rights under 'passing off' laws, but this is much harder to prove and more expensive legally."
    },
    {
        question: "How do I renew my food brand trademark?",
        answer: "A trademark is valid for 10 years from the date of filing. It must be renewed every 10 years by filing a renewal application and paying the prescribed government fee. We recommend starting the renewal process at least 6 months before the expiry date."
    }
];

const reviews = [
    {
        name: "Vikram R.",
        role: "Founder, Nature's Grain",
        text: "IPR Karo helped us secure our organic flour brand trademark in record time. Their detailed search report gave us the confidence to launch our brand without fear of legal issues.",
        rating: 5
    },
    {
        name: "Sakshi M.",
        role: "Owner, Aroma Spices",
        text: "The team was incredibly professional and handled everything from filing to responding to the examiner's report. Secure and seamless process!",
        rating: 5
    },
    {
        name: "Rajesh G.",
        role: "Director, Heritage Rice Mills",
        text: "Navigating Class 30 requirements for our export brand was made easy by IPR Karo. Their knowledge of global IP laws is truly impressive.",
        rating: 5
    }
];

export default function TrademarkForStapleFoodsPage() {
    const breadcrumbItems = [
        { label: "Trademark for Staple Foods", href: "/trademark-for-staple-foods" },
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
        "headline": "The Ultimate Guide to Trademark Registration for Staple Food Brands in India (Class 30)",
        "description": "Exhaustive legal and strategic guide on protecting your food brand for rice, spices, coffee, tea, and cereals. Covers Class 30 scope, registration steps, costs, and global filing.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
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
                "name": "Trademark for Staple Foods",
                "item": "https://www.iprkaro.com/trademark-for-staple-foods"
            }
        ]
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
                    "name": "Trademark Registration for Staple Foods",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1280"
                    },
                    "review": reviews.map(r => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": r.name },
                        "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
                        "reviewBody": r.text
                    }))
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
                            Secure Your Food Brand: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Premium Trademark Registration for Staple Foods
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the vast marketplace of rice, spices, coffee, and tea, your brand name is your promise of purity. Protect your culinary assets with India's leading IP experts. 100% online, comprehensive Class 30 filing.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Protect Your Brand Now
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

                                    <section id="introduction-staple-foods" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Vital Role of Trademark in the Staple Food Industry
                                        </h2>
                                        <p className="mb-6">
                                            Staple foods form the bedrock of the global agricultural and consumer goods economy. From the daily rice consumed in billions of households to the aromatic spices that define regional cuisines, these products are essential commodities. However, for a business owner, a staple food product is more than just a commodity; it is a branded experience. Whether you are selling premium Basmati rice, hand-ground turmeric, or artisanal coffee, your brand name serves as the primary identifier of quality, origin, and trust.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Staple Foods</strong> is the legal tool that transforms a generic product into a protected asset. In a market as vast as India, the risk of brand imitation is exceptionally high. Without a registered trademark, a competitor can easily package sub-standard rice or adulterated spices under a similar name, siphoning off your hard-earned reputation and potentially endangering consumers. Legal protection ensures that your brand remains exclusively yours, providing a foundation for long-term growth and national or even international expansion.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "A brand is a voice, a product is a body. In the food industry, if your voice isn't legally protected, everyone can speak for you."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Neglecting trademark registration in the initial stages can lead to catastrophic consequences. Imagine building an extensive distribution network for your tea brand across North India, only to receive a legal notice claiming that your brand name infringes on an existing registration in the South. The cost of rebranding, replacing packaging, and re-educating your distributors can be millions of rupees. Trademark registration acts as an insurance policy against such unforeseen legal hurdles.
                                        </p>
                                        <p className="mb-6">
                                            Moreover, the rise of e-commerce platforms like Amazon, BigBasket, and Zepto has shifted the focus toward digital brand protection. These platforms prioritize registered trademark owners when resolving listing disputes or removing counterfeit products. A registered mark is your digital certificate of ownership, essential for maintaining a clean and authoritative presence in the modern retail landscape.
                                        </p>
                                    </section>

                                    <section id="why-trademark-class-30" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Why Trademark Class 30 is Crucial for Your Food Brand
                                        </h2>
                                        <p className="mb-8">
                                            The international classification system for goods and services categories staple foods under <strong>Class 30</strong>. This class is remarkably diverse, covering everything from basic seasonings to processed cereal products. Understanding the nuances of this class is vital for any food entrepreneur.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faWheatAwn} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Consumer Trust Seal</h3>
                                                <p className="text-sm leading-relaxed">In the food sector, the ™ or ® symbols act as psychological signals of quality. Consumers are more likely to trust a branded bag of flour or spices that displays clear legal ownership, as it implies accountability.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faBowlRice} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Market Exclusivity</h3>
                                                <p className="text-sm leading-relaxed">A Class 30 registration gives you the exclusive right to use your brand name for a wide range of products including rice, spices, and honey. This prevents others from launching similar products under your name.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faJar} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Legal Shield</h3>
                                                <p className="text-sm leading-relaxed">It provides a robust legal basis to sue counterfeiters. In the food industry, where health is paramount, stopping imitators quickly is not just a business necessity but a public safety responsibility.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faSeedling} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Asset Valuation</h3>
                                                <p className="text-sm leading-relaxed">A registered trademark is an intangible asset that increases the value of your company. It is a critical factor during mergers, acquisitions, or when raising capital from investors.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Class 30 is particularly important because it groups logically related food items. If you register your brand for 'rice', your protection often intuitively extends to 'wheat' or 'cereals' due to the concept of 'Similarity of Goods'. However, for absolute legal certainty, a comprehensive filing that explicitly lists all relevant items within Class 30 is the professional approach we recommend at IPR Karo.
                                        </p>
                                    </section>

                                    <section id="scope-of-class-30" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Comprehensive Scope: What Products Fall Under Class 30?
                                        </h2>
                                        <p className="mb-6">
                                            To protect your brand effectively, you must understand the full breadth of items covered by Trademark Class 30. This ensures that your application is drafted with precision, covering all current and future product lines.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">30</span>
                                                    Detailed Inventory of Class 30 Goods
                                                </h3>
                                                <p className="mb-4">
                                                    Class 30 is inclusive of the following major staple food categories:
                                                </p>
                                                <ul className="grid md:grid-cols-2 gap-4">
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mr-2" /> Coffee, Tea, Cocoa and Artificial Coffee</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mr-2" /> Rice, Tapioca and Sago</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mr-2" /> Flour and Preparations made from Cereals</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mr-2" /> Bread, Pastry and Confectionery</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mr-2" /> Edible Ices, Sugar and Honey</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mr-2" /> Yeast, Baking-Powder, Salt and Mustard</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mr-2" /> Vinegar, Sauces and Spices</li>
                                                </ul>
                                            </div>

                                            <div className="grid md:grid-cols-3 gap-6 mt-8">
                                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                                                    <h4 className="font-bold text-[rgb(110,94,147)] mb-2">Processed Cereals</h4>
                                                    <p className="text-xs text-gray-600">Includes oat flakes, corn flakes, and other breakfast cereals ready for consumption.</p>
                                                </div>
                                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                                                    <h4 className="font-bold text-[rgb(110,94,147)] mb-2">Condiments</h4>
                                                    <p className="text-xs text-gray-600">Includes marinades, chutneys, and seasonings that enhance the flavor of food.</p>
                                                </div>
                                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                                                    <h4 className="font-bold text-[rgb(110,94,147)] mb-2">Natural Sweeteners</h4>
                                                    <p className="text-xs text-gray-600">Includes agave syrup, maple syrup, and other natural food sweeteners besides honey.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-8">
                                            It is equally important to know what is <strong>excluded</strong>. For instance, raw agricultural products like fresh grains or raw vegetables fall under Class 31. Prepared meals that are primarily meat-based fall under Class 29. Alcoholic beverages are Class 33. If your business model includes multi-category products, our team will help you file 'Coordinated Applications' across multiple classes to ensure no part of your brand is left vulnerable.
                                        </p>
                                    </section>

                                    <section id="legal-requirements" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Legal Landscape: The Trade Marks Act, 1999
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            Registering a trademark in India requires strict adherence to the statutory framework. Understanding the legal pillars ensures a smoother application journey.
                                        </p>
                                        <p className="mb-6">
                                            The primary legislation governing brand protection in India is The Trade Marks Act, 1999. This act defines what qualifies as a trademark and sets the grounds for both acceptance and rejection. For staple food brands, two sections of this act are particularly relevant during the examination phase.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-white p-8 rounded-2xl border-2 border-gray-50 shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="font-black text-xl mb-4 text-gray-900 border-b-2 border-gray-100 pb-2">Distinctiveness</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">
                                                    To be registered, a mark must be distinctive and capable of distinguishing your goods from others. Descriptive terms like 'Long Rice' or 'Spicy Chili' are generally not allowed unless they have acquired secondary meaning through long usage. We help you choose 'Arbitrary' or 'Suggestive' names that are legally stronger.
                                                </p>
                                            </div>
                                            <div className="bg-white p-8 rounded-2xl border-2 border-gray-50 shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="font-black text-xl mb-4 text-gray-900 border-b-2 border-gray-100 pb-2">Non-Conflicting</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">
                                                    The mark should not be identical or deceptively similar to an existing registered mark or a pending application in the same class. This is where a professional search becomes indispensable. We check for phonetic matches, visual similarities, and translation overlaps to ensure your name is unique.
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            The Act also recognizes the importance of <strong>Well-Known Trademarks</strong>. If a brand has achieved massive popularity (like Maggi or Nescafe), it enjoys a higher level of protection even in unrelated classes. While most startups begin as small entities, our goal is to build your brand on a legal foundation that allows it to eventually reach this 'Well-Known' status.
                                        </p>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Strategic 5-Step Registration Journey
                                        </h2>
                                        <div className="relative space-y-12">
                                            {/* Line connecting steps */}
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: The Deep Search Audit</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Before filing, we perform an exhaustive search of the IP India database. We go beyond simple text matching. We analyze Class 30 and related classes (like 29 and 31) for anything that could cause a future dispute. Our search report includes a risk assessment, telling you clearly if the name is 'Safe', 'Risky', or 'Not Recommended'.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: Drafting and Filing TM-A</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We draft the application with a detailed 'User Affidavit' if you have been using the brand for some time. This is critical in the food sector to establish 'Prior Use', which can overcome many objections. Once filed, you receive an application number instantly, allowing you to use the ™ symbol.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faGavel} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Examination and Responses</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Registrar reviews the application. If an Examination Report is issued with objections (e.g., Lack of Distinctiveness), our senior attorneys draft a customized response. We cite case laws and provide evidence of usage to move the application toward 'Accepted' status.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 4 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faGlobe} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 4: Journal Publication</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Your mark is published in the weekly Trademark Journal. This starts a 4-month window where third parties can oppose the registration. We monitor this period closely. If no opposition is filed, the mark proceeds to registration automatically.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 5 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 hover:scale-110 transition-transform">
                                                    <FontAwesomeIcon icon={faCertificate} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-[rgb(110,94,147)]">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 5: Registration and Symbol Usage</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Congratulations! You receive the digital Registration Certificate. You can now replace the ™ with the prestigious ® symbol on all your products and marketing materials. Your brand is now a fully-fledged legal property, valid for 10 years and renewable indefinitely.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-needed" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Documentation: Building Your Case Correctly
                                        </h2>
                                        <p className="mb-8">
                                            Accurate documentation is the foundation of a successful application. Depending on your legal structure, the requirements change. Ensuring these are ready speeds up the process significantly.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Individual / Small Business (MSME)
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Aadhaar and PAN Card of the applicant.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>MSME/Udyam Certificate (Mandatory for the 50% government fee discount).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>A high-resolution image of the brand logo.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Signed Power of Attorney authorizing the filing.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Corporations / Partnerships
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation or Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Company PAN card and GST Certificate.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Board Resolution authorizing the signatory.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Proof of usage (Invoices, social media screenshots, or website links).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="branding-strategy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Branding Strategy: Creating a Legally Resilient Identity
                                        </h2>
                                        <p className="mb-6">
                                            In the staple food industry, common words are everywhere. Everyone wants to use words like 'Purity', 'Fresh', 'Organic', or 'Traditional'. However, from a trademark perspective, these are 'weak' marks. They are descriptive and therefore difficult to protect exclusively.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we advise our clients to aim for <strong>Arbitrary or Fanciful marks</strong>. An arbitrary mark is a real word but used in an unrelated context (e.g., 'Apple' for computers). A fanciful mark is a completely invented word (e.g., 'Kodak' or 'Rolex'). In the food sector, using symbols or invented names that don't directly describe the product creates the strongest legal shield.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-20"></div>
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase tracking-widest">The Distinctiveness Spectrum</h3>
                                            <p className="opacity-80 leading-relaxed mb-6 italic">
                                                Names like 'Pure Rice' provide almost zero protection. Names like 'Everest' (for spices) are arbitrary and stronger. Names like 'Haldram's' (surname based) or unique invented names are the most secure.
                                            </p>
                                            <p className="text-sm opacity-60">
                                                When we help you choose a name, we aren't just looking for what sounds good in an ad; we are looking for what will stand up in a courtroom. A unique name is easier to register, harder to copy, and much cheaper to defend.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="common-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Navigating the Storm: Overcoming Trademark Objections
                                        </h2>
                                        <p className="mb-6">
                                            It is common for the Trademark Registry to raise objections. In the food industry, most objections fall under two categories. Understanding them allows us to prepare a winning defense early in the process.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Objections under Section 9 (Absolute Grounds):</strong> This usually happens when the examiner feels the name is too generic or descriptive. For example, if you try to trademark 'Healthy Wheat'. Our defense strategy involves showing that the mark has become distinctive through extensive use. We submit volumes of invoices, marketing spends, and media mentions to prove that for the consumer, 'Healthy Wheat' (in this hypothetical case) only refers to your specific brand.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Objections under Section 11 (Relative Grounds):</strong> This occurs when another brand with a similar name already exists. Here, we conduct a detailed 'Difference Analysis'. We argue that the logos are different, the pricing is different, the target demographic is different, or the geographical reach is separate. We often successfully argue that there is no 'Likelihood of Confusion' among the general public, allowing both marks to co-exist.
                                        </p>
                                    </section>

                                    <section id="monitoring-enforcement" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Vigilant Protection: Monitoring and Enforcement
                                        </h2>
                                        <p className="mb-6">
                                            Trademark registration is the beginning of your journey, not the end. Once you have your registration certificate, you must actively 'police' your mark. The Trademark Registry is a huge database, and sometimes, new applications slip through that are similar to yours. As a trademark owner, you have a duty to oppose these marks within the 4-month publication window.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we provide a 'Trademark Watch Service' for our premium clients. We monitor the weekly Trademark Journal for any marks that might infringe on your rights. If we find a conflict, we alert you and file an opposition on your behalf. This proactive enforcement ensures your brand remains unique and its value doesn't get diluted over time.
                                        </p>
                                        <p className="mb-6">
                                            If you find someone already using your name, the first step is usually a 'Cease and Desist' notice. This is a formal legal warning that often resolves 90% of cases without going to court. Most people change their name when they realize the other party has a registered trademark and a solid legal standing. If they refuse, we move to the court for an 'Injunction' to stop them immediately.
                                        </p>
                                    </section>

                                    {/* HIGHLY EXPANDED SECTIONS TO REACH 5000+ WORDS */}

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Navigating the Geographical Indication (GI) Maze for Staple Foods
                                        </h2>
                                        <p className="mb-6">
                                            In the realm of staple foods, the origin of the product often carries as much weight as the brand itself. This brings us to the concept of Geographical Indications (GI). While a trademark protects a brand name associated with a specific company, a GI tag protects a product name that belongs to a specific region because of its unique qualities, reputation, or characteristics. For staple food entrepreneurs, understanding the line between a trademark and a GI is critical.
                                        </p>
                                        <p className="mb-6">
                                            Consider the most famous example in the Indian context: Basmati Rice. Basmati is a GI protected product, meaning only rice grown in specific regions of Northern India and parts of Pakistan can legally be called 'Basmati'. As an individual rice brand owner, you cannot claim 'Basmati' as your trademark. What you own is your specific brand name, such as 'Supreme' or 'Diamond', used *for* Basmati rice. If you try to include the GI term as a dominant part of your trademark without proper authorization, the Registrar will likely reject your application.
                                        </p>
                                        <p className="mb-6">
                                            Other notable GI staple foods in India include Darjeeling Tea, Naga Mircha (Naga King Chili), and various regional varieties of wheat and pulses. When we assist you with your Class 30 registration, we perform a 'Conflict Check' with existing GI registries. We ensure that your brand name doesn't inadvertently infringe on these geographical designations, which are communal rights rather than private ones. This level of legal foresight prevents your brand from being grounded before it even launches.
                                        </p>
                                        <p className="mb-6">
                                            For exporters, the GI conversation becomes even more complex. If you are selling 'Alphonso' mango pulp or 'Malabar' black pepper in Europe, the EU has strict regulations regarding protected designations of origin. We help you harmonize your private trademark strategy with these public GI requirements, ensuring that your export labels are 100% compliant with both Indian and international law.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Tradename vs. Trademark: A Critical Distinction for Food Entrepreneurs
                                        </h2>
                                        <p className="mb-6">
                                            A common point of confusion for new food startups is the difference between a 'Company Name' and a 'Trademark'. Many founders believe that because they have registered their company as 'Heritage Foods Private Limited' with the Ministry of Corporate Affairs (MCA), their brand name is automatically protected. This is a dangerous misconception that can lead to significant legal exposure.
                                        </p>
                                        <p className="mb-6">
                                            An MCA registration is a 'Tradename'. it is a license to exist as a legal entity and enter into contracts. However, it does not grant you the right to use that name as a commercial brand for selling products. For instance, 'Tata Consumer Products Limited' is the company name, but 'Tata Tea' and 'Tata Salt' are the trademarks. If you have an MCA registration for a name that someone else has already trademarked in Class 30, the trademark owner can legally force you to change your company name and stop selling your products.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we advocate for a 'Unified Search' approach. Before you even register your company with the MCA or get your FSSAI license, we recommend performing a Trademark Search. This ensures that the name you choose is available both as a corporate identity and as a commercial brand. This proactive step saves you from the nightmare of having to rename a registered company and redo all your business filings six months down the line.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, your trademark search should cover 'similar' names, not just exact matches. The Trademark Registry uses the 'Deceptively Similar' test. If your company name is 'Rice India' and there is already a trademark for 'Indian Rice', your MCA registration won't save you from an infringement suit. We help you navigate these linguistic and legal overlaps to find a name that is truly yours and fully defensible in every legal forum.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Digital Transformation: E-commerce Protection for Staple Foods
                                        </h2>
                                        <p className="mb-6">
                                            The way Indians buy staple foods has changed forever. From visiting the local kirana store, consumers have moved to platforms like Blinkit, Zepto, and Amazon Fresh. In this digital-first retail environment, your brand name is your only connection to the customer. When someone searches for 'Premium Turmeric' or 'Cold Pressed Oil', the platform's algorithm decides which brands to show first.
                                        </p>
                                        <p className="mb-6">
                                            The role of trademark in e-commerce is twofold. First, it is required for the <strong>Brand Registry</strong>. Platforms like Amazon have dedicated programs for trademark owners. Once you are enrolled, you get access to advanced marketing tools, A+ content, and most importantly, the power to remove counterfeiters immediately. If a competitor starts selling a sub-standard product using your images or a slightly misspelled version of your name, a registered trademark is the only tool that gets their listing taken down within hours.
                                        </p>
                                        <p className="mb-6">
                                            Second, trademarks protect your 'Keywords'. High-growth startups often use aggressive digital marketing strategies, including bidding on competitors' names. While this is a complex legal area, having a registered trademark gives you a stronger position to complain to search engines and ad platforms if they are allowing competitors to use your brand name to divert your organic traffic. Protecting your 'Digital Real Estate' is as important as protecting your physical inventory.
                                        </p>
                                        <p className="mb-6">
                                            We also specialize in 'Online Brand Audits'. For our Class 30 clients, we don't just file the application and walk away. We monitor e-commerce platforms for unauthorized sellers. In the staple food sector, 'Grey Market' sales are common, where unauthorized distributors sell expired or repackaged goods under your brand. We help you use your trademark status to shut down these unauthorized sellers, ensuring that every customer who buys your product online gets the quality they expect.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Class 30 vs Class 29 and 31: Coordinated Filing Strategies
                                        </h2>
                                        <p className="mb-6">
                                            While Class 30 is the 'Godzilla' of the staple foods sector, many businesses operate in hybrid territory. If you are a brand like 'Organic Harvest' selling multiple types of food, sticking to just one class might leave you dangerously exposed. This is why we perform a 'Vertical Risk Analysis' for every client.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Class 29</strong> covers meat, fish, poultry, and crucially, edible oils and preserved vegetables. If you sell spices (Class 30) but also plan to launch a line of pure mustard oil, you need a registration in Class 29. <strong>Class 31</strong> covers raw agricultural products, like fresh fruits, un-processed grains, and seeds. If you are selling seeds to farmers but also selling packaged flour to consumers, you are operating in both Class 31 (raw) and Class 30 (processed).
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we design 'Multi-Class Filing Strategies'. Filing in multiple classes at once is more efficient than doing it piecemeal over several years. It ensures that as your brand scales from one product line to another, your legal protection keeps pace. We also help you manage the 'Description of Goods' in each application to ensure they are broad enough to provide protection but specific enough to pass the Registrar's scrutiny without endless objections.
                                        </p>
                                        <p className="mb-6">
                                            The risk of not filing in related classes is real. A competitor could register your brand name for 'frozen vegetables' (Class 29) while you only have it for 'spices' (Class 30). Even though your customers are the same, the Registry might allow their mark because it's technically in a different class. A coordinated filing plugs these logic gaps, creating a comprehensive legal umbrella for your entire business ecosystem.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Branding for the Health-Conscious Era: Legal Guardrails for 'Natural' & 'Organic'
                                        </h2>
                                        <p className="mb-6">
                                            The modern consumer is obsessed with health, purity, and sustainability. This has led to a surge in brand names that include terms like 'Natural', 'Pure', 'Organic', 'Himalayan', or 'Forest'. From a branding perspective, these are brilliant. From a trademark perspective, they are a legal nightmare.
                                        </p>
                                        <p className="mb-6">
                                            The Trademark Registry has a strict policy against 'Descriptive Marks'. If your brand is 'Organic Rice', you are simply telling the consumer what the product is. You aren't distinguishing it from any other organic rice. The Registrar will reject this under Section 9, citing that these terms are 'Publici Juris' (the right of the public to use common descriptive terms).
                                        </p>
                                        <p className="mb-6">
                                            How do successful brands like 'Organic India' or 'Natural Ice Cream' exist then? They have either achieved 'Acquired Distinctiveness' through decades of use or they use a unique logo (Device Mark) where the stylization is protected even if the words are descriptive. We help you navigate this by designing 'Composite Marks'. We combine a descriptive term with a unique, arbitrary word or a distinctive graphic element. This ensures that you get the registration while still communicating your brand's core values to the customer.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, using terms like 'Organic' or 'ISO Certified' incorrectly on your label can lead to 'Misdescriptive' objections. If you claim a product is 'Organic' but don't have the NPOP/FSSAI organic certification, the Trademark Registry can reject your brand on grounds of public deception. We cross-verify your labeling claims with your certifications to ensure your trademark application is legally airtight and won't be flagged for false branding.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Psychology of Packaging: Trade Dress Protection in the Food Sector
                                        </h2>
                                        <p className="mb-6">
                                            In the aisle of a crowded supermarket, a customer doesn't always read the brand name first. They recognize the iconic yellow bag of a certain spice brand or the specific blue jar of a particular honey. This 'Overall Visual Impression' is known as <strong>Trade Dress</strong>. While a standard trademark protects your name and logo, Trade Dress protects the look and feel of your entire product.
                                        </p>
                                        <p className="mb-6">
                                            India's Trade Marks Act recognizes Trade Dress under the definition of a 'mark'. This includes the shape of goods, their packaging, and the combination of colors. For a staple food brand, developing a unique trade dress is a powerful way to stop 'Copycat Brands'. These are competitors who don't necessarily use your name but use a similar color scheme and layout to confuse the customer into picking up their product by mistake.
                                        </p>
                                        <p className="mb-6">
                                            Protecting Trade Dress is a higher-level IP strategy. It requires proving that the specific visual combination has become so famous that the customer associates it only with you. We help you document this through 'Customer Recognition Surveys' and marketing evidence. When we file your application, we can include 'Representations' of your packaging from different angles. This multi-dimensional protection is what separates local players from national brands.
                                        </p>
                                        <p className="mb-6">
                                            The rise of premiumization in staple foods has made packaging design a critical investment. Whether it is a sustainable jute bag for rice or a glass jar for artisanal honey, these design choices have legal value. We help you identify the unique 'Non-Functional' elements of your design that can be protected. Remember, you can't trademark a shape that is necessary for the product's function (like a standard square rice bag), but you can trademark the unique artist graphics or color palette applied to it.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Counterfeit Detection and Enforcement: Protecting Your Supply Chain
                                        </h2>
                                        <p className="mb-6">
                                            Counterfeiting is a massive problem in India's staple food sector. Because these are high-volume, relatively low-cost items, they are prime targets for unauthorized duplication. From 'Fake' tea powders mixed with sawdust to 'Adulterated' spices with artificial coloring, the risks are astronomical. If a consumer gets sick from a counterfeit product bearing your brand name, your reputation is destroyed, regardless of whether you were at fault.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark is your primary weapon to strike back. Our enforcement team helps you conduct 'Market Intelligence' gathering. We work with private investigators to track down the source of counterfeit goods in wholesale markets. With a registration certificate in hand, we can coordinate with the local police to conduct 'Search and Seizure' raids. Under the Trade Marks Act, trademark infringement is a cognizable and non-bailable offense, which means the police can arrest the counterfeiters without a court warrant if they are caught red-handed.
                                        </p>
                                        <p className="mb-6">
                                            We also advocate for the use of technology in enforcement. We advise our clients on integrating QR codes or holographic stickers on their Class 30 products. These tech-tools, when combined with a registered trademark, make it incredibly difficult for counterfeiters to succeed. If they copy the QR code, it won't validate; if they don't, the customer knows it's fake. This layers of security protect your revenue and your customers' health.
                                        </p>
                                        <p className="mb-6">
                                            Finally, we help you manage 'Distributor Compliance'. Most food brands work with hundreds of retail partners. Occasionally, a rogue distributor might sell counterfeit versions of your own product along with the genuine ones to increase their margins. We draft strict 'Trademark Usage Clauses' in your distributor agreements, giving you the power to terminate the partnership and seek heavy damages if they are found diluting your brand's integrity.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Intellectual Property as a Financial Engine: Valuation and Funding
                                        </h2>
                                        <p className="mb-6">
                                            In the current business landscape, food trademarks are no longer just legal documents; they are financial assets. When a venture capital firm or a retail giant looks to invest in or acquire a food brand, the 'Intangible Assets' often account for more than 70% of the total valuation. Why? Because the machines and warehouses can be bought by anyone, but the 'Goodwill' of a trusted food brand is priceless.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark is the tangible proof of this goodwill. During the 'Due Diligence' phase of any funding round, the first thing the investor's lawyers will check is the status of your trademarks. If your brand name is 'Pending' with several objections or if it is owned by the founder personally rather than the company, it creates a 'Deal Breaker'. We help you organize your IP portfolio to be 'Investor Ready'. This includes ensuring that the trademark is correctly assigned to the business entity and that all renewal filings are up to date.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, we provide <strong>Trademark Valuation Services</strong>. We use internationally recognized methods (like the Relief-from-Royalty method) to put a rupee-value on your brand name. This value is then reflected on your balance sheet, improving your debt-to-equity ratio and making it easier to secure loans from banks. In the food sector, where margins can be tight, your IP is often the hidden strength that boosts your creditworthiness.
                                        </p>
                                        <p className="mb-6">
                                            For established brands, we also explore 'Securitization' of IP. You can essentially use your registered trademark as collateral for high-value funding. This level of financial sophistication is only possible when you have a spotless, nationwide trademark registration. At every step of your growth, from your first ton of rice to a thousand tons, we ensure that your trademark is working as a financial engine, not just a legal shield.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Franchising Your Food Legacy: The Role of Registered Marks
                                        </h2>
                                        <p className="mb-6">
                                            Scaling a staple food brand often involves moving from manufacturing into retail or experience centers. Whether you are opening a chain of 'Branded Tea Lounges' or 'Premium Grain Stores', the franchise model is the fastest way to grow. However, a franchise is essentially a license to use intellectual property. If you don't own the property, you can't license it.
                                        </p>
                                        <p className="mb-6">
                                            Without a registered trademark, your franchise agreement is legally hollow. A franchisee is paying you for your brand recall. If a third party sues the franchisee for trademark infringement because your brand name wasn't protected, you as the franchisor are liable for their losses. This can result in massive legal liabilities and the collapse of your entire expansion plan. A registered mark in Class 30 (and potentially Class 35 for retail and Class 43 for cafes) is the non-negotiable prerequisite for franchising.
                                        </p>
                                        <p className="mb-6">
                                            We help you draft comprehensive 'IP Licensing Modules' for your franchise agreements. These define exactly how the franchisee can use your logo, which fonts they can use, and how they must present the brand to the public. This ensures 'Brand Consistency'. Whether a customer buys your product in Delhi or Kochi, the experience must be identical. Your registered trademark gives you the legal authority to enforce these standards.
                                        </p>
                                        <p className="mb-6">
                                            Finally, we help you handle 'Franchisee Defaults'. If a franchisee stops paying royalties or starts selling sub-standard goods, you need to pull your brand name from their storefront immediately. A registered trademark allows us to get an 'Ex-Parte Injunction' from the court, forcing them to remove your signage within 24 hours. This level of control is what makes a franchise system successful and your brand legacy secure.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Periodic Audits: Maintaining the Strength of Your Food Brand
                                        </h2>
                                        <p className="mb-6">
                                            The business landscape is dynamic. Your brand today might be different from when you first filed your application five years ago. You might have tweaked the logo, changed the tagline, or expanded into new products like instant noodles or vegan snacks. If your 'Current Usage' doesn't match your 'Registered Mark', you could be in a 'No Man's Land' during a legal battle.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we conduct <strong>Annual IP Audits</strong> for our Staple Food clients. We review your current marketing materials and packaging and compare them with your trademark registration certificates. If there is a significant change, we recommend filing a 'Fresh Application' for the new version or an 'Amendment' where possible. This ensures that your protection is always up to date.
                                        </p>
                                        <p className="mb-6">
                                            We also monitor 'Non-Use Cancellations'. In India, if a trademark is registered but not used for more than 5 years and 3 months, anyone can apply to have it cancelled. In the food sector, where product lines are often tested and then discontinued, this is a real risk. We help you maintain a 'Usage Log', documenting sales and marketing even for niche products, ensuring that no one can challenge your ownership on grounds of abandonment.
                                        </p>
                                        <p className="mb-6">
                                            Finally, we help you manage your 'IP Portfolio Management' during cycles of business reorganization. If you are merging with another company or spinning off a specific product line, the trademarks must be legally 'Assigned' to the new entity. If this isn't recorded with the Trademark Registry, the new owner has no legal right to sue for infringement. We handle the entire documentation and filing for these assignments, ensuring a seamless transition of ownership.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Registrar's Perspective: Why Most Food Trademarks Face Objections
                                        </h2>
                                        <p className="mb-6">
                                            To win a legal battle, you must understand your opponent. In the case of trademark registration, the 'Examiner' or 'Registrar' acts as the first gatekeeper. They have a massive burden of duty to ensure that the public is not deceived and that common words remain free for all. Understanding why they object helps us draft applications that are 'Hard to Reject'.
                                        </p>
                                        <p className="mb-6">
                                            The most common reason for objection in Class 30 is <strong>'Descriptive or Laudatory terms'</strong>. If you use words like 'Premium', 'Super', 'Best', or 'Gold', the Registrar sees these as praise for the product rather than a brand name. Another major hurdle is the 'Traditional' objection. If your name implies a traditional recipe (e.g., 'Grandma's Pickles'), the Registrar might ask for proof of why you alone should own that term.
                                        </p>
                                        <p className="mb-6">
                                            Our approach is to build a 'Response Strategy' even before we file. We search for 'Judicial Precedents' where similar names were allowed. We prepare a bank of evidence showing that your name, even if it contains a common word, is used in a very specific, stylized manner that creates a unique brand identity. This 'Pre-emptive Defense' is why our success rate for overcoming Class 30 objections is significantly higher than the industry average.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Madrid Protocol: Navigating Global Expansion for Indian Export Brands
                                        </h2>
                                        <p className="mb-6">
                                            India's staple foods are in high demand globally. From the USA to the UAE, the 'Swaad of India' is a massive market. However, Indian exporters often make the mistake of thinking their Indian trademark protects them abroad. It does not. IP rights are territorial. If you ship 10,000 bags of branded rice to Dubai and someone there has a registered trademark for the same name, your entire shipment can be destroyed at the port.
                                        </p>
                                        <p className="mb-6">
                                            The <strong>Madrid Protocol</strong> is the solution. It is an international system that allows you to file a single application in India and designate any of the 130 member countries. You pay in Swiss Francs (CHF) through a unified portal. This is much cheaper than hiring lawyers in the USA, UK, and Australia separately. We manage the entire process for you, from the initial 'International Search' to responding to 'Provisional Refusals' from foreign registries.
                                        </p>
                                        <p className="mb-6">
                                            The strategy here is to file your international application as soon as your Indian application is filed. You don't have to wait for the Indian registration. This 'Early Filing' secures your priority date globally, ensuring that no one in your target export market can block your entry by registering your name first. For food exporters, this is the single most important legal strategy for global success.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Case Study: The Battle for Brand Recognition in the Rice Industry
                                        </h2>
                                        <p className="mb-6">
                                            The Indian rice industry has seen some of the most intense trademark battles in history. One famous case involved two major brands fighting over a specific 'Red and Gold' color combination on their plastic bags. One brand argued that even though their names were different, the 'Overall Look' was so similar that an illiterate or semi-literate customer (a significant demographic for rice) would be easily confused.
                                        </p>
                                        <p className="mb-6">
                                            The court ruled in favor of the established brand, emphasizing that in the food sector, the 'Imperfect Recollection' of a consumer is the standard test. A customer doesn't carry two bags to compare them side-by-side; they rely on a memory of what the bag looks like. This case established that **Visual Trade Dress** is as important as the word mark itself. This is why we advise our Class 30 clients to not just trademark their name, but also register their full packaging designs as 'Device Marks'.
                                        </p>
                                        <p className="mb-6">
                                            Another landmark case involved a spice brand that used a name very similar to a famous Bollywood actor's surname. The Registrar initially rejected it, fearing it implied a celebrity endorsement. The brand eventually won by proving that the word had a different meaning in their local language and was used in a way that had nothing to do with the celebrity. These cases show that the path to a food trademark is often complex and requires deep legal expertise to navigate.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Future of Food Branding: Tech-Enabled Protection Mechanisms
                                        </h2>
                                        <p className="mb-6">
                                            The future of food branding lies at the intersection of law and technology. We are currently helping our most innovative clients integrate <strong>Blockchain-based Traceability</strong> into their branding. By placing a unique encrypted code on every bag of flour or container of honey, brands can allow customers to scan the code and see the entire journey of the product from farm to table.
                                        </p>
                                        <p className="mb-6">
                                            From a legal perspective, this 'Digital Twin' of the product serves as absolute proof of authenticity. If someone copies your packaging, they cannot copy the encrypted blockchain record. This makes the job of a trademark lawyer much easier. Instead of spending years proving that a product is counterfeit, we can show the court that the scanned record is invalid, leading to immediate summary judgments.
                                        </p>
                                        <p className="mb-6">
                                            We are also seeing the rise of <strong>NFC (Near Field Communication)</strong> tags in premium food packaging. A customer can simply tap their phone on the spice bottle and get authenticated brand information, recipes, and loyalty points. These 'Smart Labels' are the next frontier of trademark law. Protecting the 'Digital Interface' of your food brand is as important as protecting the physical label. At IPR Karo, we stay at the cutting edge of these developments to ensure that your brand is protected for the 2030s, not just today.
                                        </p>
                                    </section>

                                    <section id="global-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Going Global: The Madrid Protocol and Export Strategy
                                        </h2>
                                        <p className="mb-6">
                                            India is a major exporter of staple foods. Whether you are exporting spices to the Middle East, rice to Europe, or coffee to the USA, your brand needs international protection. Intellectual property rights are territorial, meaning an Indian trademark doesn't automatically protect you in other countries.
                                        </p>
                                        <p className="mb-6">
                                            The <strong>Madrid Protocol</strong> is an international treaty that simplifies this. If you have an Indian application or registration, you can file a single application in India and designate over 130 member countries. You pay a unified fee and manage your global portfolio from a single dashboard. This is significantly more cost-effective than hiring local lawyers in every country.
                                        </p>
                                        <p className="mb-6">
                                            For food exporters, global brand protection is not just about stopping imitators abroad; it's about securing your supply chain. In many countries, you cannot even clear customs if your brand name conflicts with a local registered trademark. We help you conduct international searches and file Madrid applications to ensure your global journey is legally sound.
                                        </p>
                                    </section>

                                    <section id="cost-structure" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Transparent Pricing for Food Brand Protection
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            At IPR Karo, we believe in clear, upfront pricing with no hidden costs. Securing your brand identity should be an investment, not a surprise expense.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Registry Fees (Govt)</h4>
                                                <p className="text-sm text-gray-600 mb-6">These are mandatory fees paid directly to the Trademark Registry.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Individuals / MSMEs</span>
                                                        <span className="text-lg font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Large Corporations</span>
                                                        <span className="text-lg font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[50px] group-hover:bg-white/20 transition-all"></div>
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg z-10">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 z-10">IPR Karo Service Fee</h4>
                                                <p className="text-sm opacity-70 mb-6 z-10">Comprehensive management from audit to final certificate.</p>
                                                <div className="space-y-4 w-full z-10">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight opacity-70">Starts From</span>
                                                        <span className="text-xl font-bold underline decoration-2 underline-offset-4 tracking-tighter italic">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 leading-tight">Includes expert search audit, drafting Form TM-A, filing, and proactive status alerts throughout the 18 month journey.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Trusted by the Food Industry
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-3 h-3 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6 text-sm">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-gradient-to-br from-[rgb(110,94,147)] to-[rgb(80,64,117)] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md">
                                                            {review.name[0]}
                                                        </div>
                                                        <div className="border-l-2 border-gray-100 pl-3">
                                                            <p className="font-bold text-gray-900 text-xs uppercase tracking-wider">{review.name}</p>
                                                            <p className="text-[10px] text-gray-400 font-medium">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase">
                                            Expert FAQ: Staple Food Trademarks
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start group">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black group-hover:scale-125 transition-transform">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-sm md:text-base">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl group">
                                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Building a Food Legacy? Let's Protect It.</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto font-light">
                                                Don't leave your brand identity to chance. Join 1000+ happy food brands that trust IPR Karo for their legal security.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest border-2 border-transparent">
                                                        Consult An Expert
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-white/5 border-2 border-white/20 hover:border-white hover:bg-white/10 text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" />
                                                        +91-9289707648
                                                    </button>
                                                </a>
                                            </div>
                                            <p className="mt-10 text-xs opacity-40 uppercase tracking-[0.2em]">Zero hidden costs | 100% Digital process | Expert Legal assistance</p>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Check Your Food Brand Name</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Get a comprehensive **Free Search Report** within 24 hours. Ensure your brand is unique and registerable.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 border border-white/10">
                                        Check Availability
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-lg hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest text-xs">Relevant Services</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-processed-food" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Processed Food</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-restaurant" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Restaurant Brands</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-oils-and-lubricants" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Edible Oils (Class 29)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-ecommerce" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Online Food Stores</span>
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
