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
    faStore,
    faUsers,
    faLightbulb,
    faStar,
    faSitemap,
    faHome,
    faLayerGroup,
    faThLarge,
    faThList,
    faBrush
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Carpets | Register Class 27 Rugs & Mats Online',
    description: 'Expert guide to trademark registration for carpets, rugs, mats, and floor coverings in Class 27. Secure your brand identity with India\'s top IP firm IPR Karo.',
    keywords: [
        'trademark for carpets',
        'register rugs brand india',
        'class 27 trademark registration',
        'floor covering brand protection',
        'gym mat logo registration',
        'yoga mat trademark online',
        'linoleum brand legal search',
        'vinyl flooring trademark india',
        'artificial turf brand security',
        'carpet manufacturer trademark'
    ],
    openGraph: {
        title: 'Premium Trademark Registration for Carpets & Rugs',
        description: 'Secure your Class 27 assets with India\'s leading IP legal team. High-authority brand protection for carpet and flooring manufacturers.',
        url: 'https://www.iprkaro.com/trademark-for-carpets',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-carpets',
    },
};

const tocSections = [
    { id: 'importance-of-trademark', title: 'Why Protect Your Carpet Brand' },
    { id: 'class-27-overview', title: 'Scope of Class 27' },
    { id: 'covered-goods', title: 'List of Covered Goods' },
    { id: 'registration-steps', title: 'Step-by-Step Filing' },
    { id: 'required-docs', title: 'Document Checklist' },
    { id: 'legal-nuances', title: 'Legal Nuances' },
    { id: 'overcoming-objections', title: 'Handling Objections' },
    { id: 'global-strategy', title: 'Global Protection' },
    { id: 'business-valuation', title: 'Brand Valuation' },
    { id: 'traditional-heritage', title: 'Heritage Rug Protection' },
    { id: 'digital-loom', title: 'The Digital Loom' },
    { id: 'trade-dress-nuances', title: 'Trade Dress & Patterns' },
    { id: 'enforcement-playbook', title: 'Enforcement Playbook' },
    { id: 'monetization', title: 'Monetizing the Brand' },
    { id: 'global-customs', title: 'Global Customs Guard' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Which trademark class is applicable for carpets and rugs in India?",
        answer: "Carpets, rugs, mats, and other floor coverings are classified under Class 27 of the Trademark Classification system."
    },
    {
        question: "Does Class 27 cover wooden or marble flooring?",
        answer: "No, wooden flooring is in Class 19 and marble or stone flooring is also in Class 19. Class 27 is for materials intended to cover existing floors, like carpets and vinyl."
    },
    {
        question: "Can I trademark a specific carpet pattern?",
        answer: "Yes, a distinctive and unique carpet design can be protected as a trademark (Trade Dress) or as a Design under the Designs Act. Trademarking is preferred for patterns that identify the brand."
    },
    {
        question: "Are yoga mats and gym mats included in Class 27?",
        answer: "Yes, all types of functional mats, including yoga mats, gym mats, and door mats, fall under Class 27."
    },
    {
        question: "What is the validity period of a carpet trademark?",
        answer: "A trademark registration is valid for 10 years from the date of application and can be renewed indefinitely every 10 years."
    },
    {
        question: "Can I register a trademark for 'Handmade Persian Carpet'?",
        answer: "You can trademark your unique brand name for Persian rugs, but you cannot exclusively claim the descriptive term 'Handmade Persian Carpet' itself."
    },
    {
        question: "Does Class 27 cover wall hangings?",
        answer: "Yes, but only non-textile wall hangings. Textile wall hangings are classified under Class 24."
    },
    {
        question: "How much is the government fee for filing in Class 27?",
        answer: "The fee is ₹4,500 for individuals, MSMEs, and Startups, and ₹9,000 for other entities."
    },
    {
        question: "Can I use the R symbol after filing?",
        answer: "No, you can only use the ® symbol after the trademark is successfully registered and you receive the certificate. You can use ™ after filing."
    },
    {
        question: "Is international registration necessary for carpet exporters?",
        answer: "If you export carpets to countries like the USA or Germany, it is highly recommended to file an international application via the Madrid Protocol to protect your brand globally."
    },
    {
        question: "What if a competitor uses a similar name for floor mats?",
        answer: "With a registered trademark, you can file a suit for infringement and seek an injunction to stop the competitor and claim damages."
    },
    {
        question: "Can I trademark a color for my carpets?",
        answer: "Color trademarks are possible but difficult. You must prove that the specific color has acquired 'Secondary Meaning' and consumers associate it only with your brand."
    }
];

const reviews = [
    {
        name: "Arjun V.",
        role: "MD, Royal Rugs Exports",
        text: "IPR Karo's handling of our Class 27 registration was flawless. They protected our brand across 15 countries through the Madrid Protocol.",
        rating: 5
    },
    {
        name: "Sonia M.",
        role: "Founder, Zenith Yoga Mats",
        text: "Building our yoga brand was easier knowing our logo was legally secure. The team is professional and the process was entirely digital.",
        rating: 5
    },
    {
        name: "Karan D.",
        role: "Director, FloorPro Linoleum",
        text: "Highly recommended for industrial floor covering brands. They cleared our descriptive objection with ease. Great legal strategy!",
        rating: 5
    }
];

export default function TrademarkForCarpetsPage() {
    const breadcrumbItems = [
        { label: "Trademark for Carpets", href: "/trademark-for-carpets" },
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
        "headline": "The Comprehensive 2026 Guide to Trademark Registration for Carpets and Rugs in India",
        "description": "Legal roadmap for protecting Class 27 brands, including carpets, rugs, mats, and linoleum. Learn about filing steps, costs, and market enforcement.",
        "author": {
            "@context": "https://schema.org",
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
                "name": "Trademark for Carpets",
                "item": "https://www.iprkaro.com/trademark-for-carpets"
            }
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Class 27 Trademark Registration Service",
        "description": "Expert trademark filing for carpet manufacturers, rug exporters, and floor covering brands in Class 27.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1150"
        },
        "review": reviews.map(r => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.name },
            "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
            "reviewBody": r.text
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
                            Grounding Your Identity: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Premium Trademark Filing for Carpets & Rugs
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            From hand knotted Persian rugs to industrial vinyl flooring, your brand is the soul of your product. Secure your Class 27 assets with India's most respected IP firm. 100% digital, legal excellence, and global protection strategies.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Register Your Brand Now
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Expert Guide</h4>
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

                                    <section id="importance-of-trademark" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Necessity of Trademark Registration for the Carpet and Floor Covering Industry
                                        </h2>
                                        <p className="mb-6">
                                            In the global market for home decor and industrial furnishings, a brand name is the ultimate anchor of trust. From the legendary weavers of Bhadohi and Mirzapur to the high tech flooring manufacturers of Haryana, the Indian carpet industry is a powerhouse of international export. However, this success makes the sector a primary target for brand hijacking and counterfeiting. In a marketplace where visual design is the core product, a brand name or a unique pattern serves as the critical identifier of origin and quality. Without a registered trademark, your carpet business is legally exposed to competitors who can profit off your years of hard work and investment in design.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Carpets</strong> is the most powerful legal shield available to manufacturers and exporters. Under Class 27 of the Trademark Act, registration provides you with the exclusive statutory right to use your brand name, logo, and even specific color combinations for floor coverings. In an industry where word of mouth and brand reputation drive high value wholesale orders, a trademark ensures that your customers always receive an authentic product. It prevents 'Passing Off', where a competitor uses a deceptively similar name to sell inferior rugs or mats, thereby eroding your brand equity and potentially leading to a permanent loss of market share.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "A trademark in the flooring industry is not just a legal formality, it is a business asset that transforms a perishable commodity into a permanent intellectual property legacy."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Furthermore, the shift toward organized retail and e-commerce has made trademark protection non negotiable. Online marketplaces like Amazon, Pepperfry, and Wayfair have strict 'Brand Registry' protocols. Without a registered Class 27 trademark, taking down infringing listings or counterfeit products is nearly impossible. With it, you have the legal power to enforce your rights across digital global marketplaces. At IPR Karo, we understand the specific nuances of the flooring industry, from hand knotted heritage collections to mass market vinyl rolls. We ensure that your brand is protected with surgical precision.
                                        </p>
                                        <p className="mb-6">
                                            Beyond protection, a trademark is a source of immense financial value. It is an intangible asset that appears on your balance sheet, increasing the enterprise value of your company. Whether you are looking for bank financing for factory expansion or preparing for a strategic merger, a robust portfolio of registered trademarks is a signal of business stability and legal maturity. We help businesses leverage their brand through licensing and franchising, allowing them to scale their footprint without the capital heavy requirements of building new looms or production lines.
                                        </p>
                                    </section>

                                    <section id="class-27-overview" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Understanding Trademark Class 27: The Domain of Floor Coverings
                                        </h2>
                                        <p className="mb-8">
                                            Trademarks are categorized into 45 classes under the International Nice Classification system. For any business involved in carpets, rugs, or materials for covering existing floors, <strong>Class 27</strong> is the primary legal territory. Understanding where your products fit is the first step in a successful legal strategy.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faLayerGroup} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Carpets & Rugs</h3>
                                                <p className="text-sm leading-relaxed">This is the heart of Class 27. It includes all types of decorative carpets, area rugs, and runners made from wool, silk, cotton, or synthetic fibers.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faThLarge} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Vinyl & Linoleum</h3>
                                                <p className="text-sm leading-relaxed">Industrial and household floor coverings like linoleum, vinyl, and other durable materials designed to cover existing floors fall here.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faThList} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Mats & Matting</h3>
                                                <p className="text-sm leading-relaxed">Functional items like door mats, bath mats, gym mats, and yoga mats are all classified under Class 27 for brand protection.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faBrush} className="w-10 h-10" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Artificial Turf</h3>
                                                <p className="text-sm leading-relaxed">Synthetic grass or artificial turf used for landscaping or sports surfaces is specifically included in Class 27.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            It is vital to distinguish Class 27 from related classes. For example, while the rug is in Class 27, the raw yarn used to weave it is in Class 23. If the material is a textile wall hanging rather than a floor covering, it moves to Class 24. For businesses with diverse portfolios, a 'Multi Class Strategy' is essential. IPR Karo conducts detailed classification audits to ensure your brand is protected across all relevant industry boundaries.
                                        </p>
                                    </section>

                                    <section id="covered-goods" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Inventory of Class 27: List of Protected Goods
                                        </h2>
                                        <p className="mb-6">
                                            When filing a trademark, the 'Specification of Goods' must be both comprehensive and legally precise. A narrow description can leave gaps for competitors, while a vague one can lead to office actions. Below is the detailed list of items covered under Class 27.
                                        </p>
                                        <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm mb-12">
                                            <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-6 flex items-center">
                                                <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">27</span>
                                                Official Goods categories in Class 27
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-5 h-5" />
                                                    <span className="text-gray-700 font-medium">Carpets, rugs, and mats</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-5 h-5" />
                                                    <span className="text-gray-700 font-medium">Linoleum and vinyl flooring</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-5 h-5" />
                                                    <span className="text-gray-700 font-medium">Matting for covering floors</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-5 h-5" />
                                                    <span className="text-gray-700 font-medium">Non-textile wall hangings</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-5 h-5" />
                                                    <span className="text-gray-700 font-medium">Artificial turf for sports/lawns</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-5 h-5" />
                                                    <span className="text-gray-700 font-medium">Bath mats and gym mats</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-5 h-5" />
                                                    <span className="text-gray-700 font-medium">Carpet tiles and underlays</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-5 h-5" />
                                                    <span className="text-gray-700 font-medium">Anti-slip floor coverings</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            A sophisticated strategy also includes 'Defensive Filings' for materials you might venture into later. For example, if you sell wool carpets today, you should include linoleum and artificial turf in your specification to prevent a competitor from launching those products under your brand name in the future. IPR Karo's drafting team ensures your 'List of Goods' is future proofed for business diversification.
                                        </p>
                                    </section>

                                    <section id="registration-steps" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Roadmap to Total Brand Immunity
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">1. Forensic Accessibility Audit</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We begin with a deep dive into the Indian Trademark Registry. This is not just a keyword search; our algorithms analyze phonetic similarities, visual likenesses (for logos), and cross class conflicts. For carpet brands, names like 'SoftStep' are often considered descriptive. We provide a risk assessment report that helps you refine your brand identity to ensure it meets the 'Distinctiveness' standards of Section 9. This saves you months of potential delays.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">2. Strategic E-Filing & User Proof</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once the brand is finalized, we draft the application with a focus on the 'User Date'—the date you first launched the brand in the market. In the flooring sector, prior use is a powerful legal right. We compile historical invoices, advertisements, and expo documents into a 'User Affidavit' to prove your history. This ensures you have priority over any later filers. You will receive your TM number within 24 hours, allowing immediate use of the ™ symbol.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">3. Examination Defense & Journal Publication</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Every application is examined by the Registrar for conflicts. In Class 27, similarity objections are common. Our IP attorneys draft powerful legal responses citing high court precedents to overcome these hurdles. After passing examination, the mark is published in the Trademark Journal for 4 months. If no one opposes, your Registration Certificate is issued, granting you a 10 year legal monopoly that is renewable indefinitely.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="required-docs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Document Checklist for Your Flooring Enterprise
                                        </h2>
                                        <p className="mb-8 font-medium">To ensure a friction free filing, your documentation must be absolute. The Trademark Registry is highly strict about authorizations and identification.</p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-black text-[rgb(110,94,147)] mb-6 uppercase tracking-wider">Individuals / MSMEs / Startups</h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Identity Proof (Aadhaar & PAN)</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Udyam Certificate (Critical for 50% discount)</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Brand logo in high resolution (PDF)</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Signed Power of Attorney (Form TM-48)</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-black text-gray-400 mb-6 uppercase tracking-wider">Companies & Large Partnerships</h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Certificate of Incorporation / Deed</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Board Resolution authorizing a signee</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> GST Certificate for business verification</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Proof of brand use (Historical invoices)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="legal-nuances" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Legal Nuances in Class 27: Design Protection and Trade Dress
                                        </h2>
                                        <p className="mb-6">
                                            The carpet industry is unique because the product itself is often decorative. This leads to a complex legal question: can a design be a trademark? While a logo is a traditional trademark, the overall 'look and feel' of your carpet, such as a signature border style or a specific weave pattern, can sometimes be protected as 'Trade Dress.' This prevents competitors from launching 'lookalike' collections that confuse consumers into believing they are buying your heritage creations. This is particularly vital in the luxury rug market where visual identity is everything.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 rounded-3xl my-12 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                                <FontAwesomeIcon icon={faBalanceScale} className="w-10 h-10 text-[rgb(110,94,147)] mr-4" />
                                                Avoiding the 'Descriptive' Trap
                                            </h3>
                                            <p className="text-lg opacity-90 leading-relaxed">
                                                Choosing a name that describes the product, such as 'RedWool Carpets' or 'SoftStep Mats', is a common error. Such marks are likely to face absolute refusal under Section 9. However, we assist brands in proving 'Acquired Distinctiveness' by showing that through years of consistent use and advertising, a descriptive term has come to be associated exclusively with one source. We help you move from 'Descriptive' to 'Suggestive' or 'Arbitrary' names that are legally far easier to protect.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Another nuance is 'Collective Marks' for weaver associations. If you represent a regional carpet making cluster (like the weavers of Bhadohi), we can help you register a mark that certifies the origin and quality for all your members. This is the cornerstone of protecting traditional knowledge from being exploited by industrial manufacturers selling machine made goods as 'Handwoven.' IPR Karo is dedicated to protecting both modern industrialists and traditional artisans.
                                        </p>
                                        <p className="mb-6">
                                            We also handle 'Well-known Mark' applications. If your flooring brand has attained nationwide or global recognition, we can apply for it to be recognized as a 'Well-known Trademark.' This gives you a supreme level of protection, allowing you to block registration of the same name even in completely unrelated classes (e.g., stopping a mobile phone company from using your luxury rug brand name). This is the highest level of IP security available under Indian law.
                                        </p>
                                    </section>

                                    <section id="overcoming-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Strategic Defense: Overcoming Registrar Objections
                                        </h2>
                                        <p className="mb-8 font-medium">
                                            In the flooring sector, nearly 30% of applications receive some form of office action. Your response strategy determines whether your application proceeds to registration or faces a permanent refusal.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-red-100 transition-colors shadow-sm">
                                                <h4 className="text-red-600 font-bold uppercase text-xs tracking-widest mb-4">Obstacle A</h4>
                                                <h3 className="text-xl font-bold mb-4 text-gray-900">Section 9: Descriptive Refusal</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    If the Registrar deems your mark non-distinctive, we counter by submitting a mountain of 'User Evidence', including 10 year old invoices, expo participations, and advertisements to prove that the mark has become distinctive through extensive market use.
                                                </p>
                                            </div>
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-orange-100 transition-colors shadow-sm">
                                                <h4 className="text-orange-600 font-bold uppercase text-xs tracking-widest mb-4">Obstacle B</h4>
                                                <h3 className="text-xl font-bold mb-4 text-gray-900">Section 11: Priority Objections</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    If a similar mark exists, we analyze the specific goods. If the cited mark is for industrial filter mats and yours is for luxury silk rugs, we argue that the 'Sophistication of the Buyer' and 'Channels of Trade' are different enough to prevent confusion.
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            In cases of persistent objections, we represent you in 'Personal Hearings' before the Registrar. Our IP advocates are trained to present complex legal arguments on classification and phonetic similarities directly to the Trademark Tribunal. We ensure that your brand's right to the marketplace is defended with unrelenting legal force, moving your application from objection to registration successfully.
                                        </p>
                                    </section>

                                    <section id="global-strategy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Global Reach: International Protection for Carpet Exporters
                                        </h2>
                                        <p className="mb-6">
                                            Indian carpets are prized across Europe, North America, and the Middle East. For any brand looking to expand globally, an Indian trademark is merely the starting point. Without international protection, your brand is vulnerable to 'Hijacking' in target markets. We utilize the 'Madrid Protocol' to secure your brand across 130+ countries through a single, centralized application filed in India. This is the most cost effective way to build a global intellectual property empire.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 my-10 relative overflow-hidden">
                                            <h3 className="font-bold text-xl mb-4 text-[rgb(110,94,147)]">Export Strategy Checklist</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</span>
                                                    <span className="text-gray-700"><strong>Priority Rights:</strong> We help you use your 'Indian Filing Date' to file overseas within 6 months, giving you backdated legal priority globally.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</span>
                                                    <span className="text-gray-700"><strong>Customs Recording:</strong> By recording your trademark with Customs in export countries, you can have counterfeit shipments of your brand seized at the border automatically.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</span>
                                                    <span className="text-gray-700"><strong>Linguistic Audit:</strong> We check if your name has a descriptive or negative meaning in the language of your target market (e.g., ensuring a name works in German as well as English).</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="business-valuation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Monetizing the Blueprint: Brand Valuation and Passive Revenue
                                        </h2>
                                        <p className="mb-6">
                                            A registered trademark is a high performing financial asset. In the luxury home decor market, the brand name can account for more than 50% of the company's total enterprise value. When seeking venture capital, private equity, or taking out business loans, a registered trademark is viewed as 'Collateral' that significantly de risks the investment and increases your borrowing power.
                                        </p>
                                        <p className="mb-6">
                                            Registration also enables 'Trademark Licensing.' You can authorize other manufacturers or designers to use your brand in specific regions or product sub categories in exchange for 'Royalty Payments.' This allows you to scale your brand footprint without the capital heavy requirements of building new factories or weaving centers. IPR Karo drafts bulletproof licensing agreements that ensure your quality standards are maintained while your passive income grows.
                                        </p>
                                        <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-400 my-8 shadow-sm">
                                            <h4 className="font-bold text-yellow-800 mb-2">The Multiplier Effect</h4>
                                            <p className="text-yellow-900 text-sm">Designers often forget that while looms and yarns are perishable, a well protected brand name is permanent and appreciates over time. Protecting your brand today is the most effective way to build long term wealth for your heirs and shareholders.</p>
                                        </div>
                                    </section>

                                    <section id="traditional-heritage" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Heritage Guard: Protecting Traditional Rug Weaving
                                        </h2>
                                        <p className="mb-6">
                                            India's richness in hand-knotted and hand-tufted carpets is a national treasure. For businesses specializing in heritage crafts, a trademark is the primary tool to prevent 'Deceptive Labeling.' We have seen instances where mass market factories use names associated with traditional clusters to sell machine made goods. A registered trademark in Class 27 allows an artisan collective or a heritage house to stop this exploitation and preserve the value of true craftsmanship.
                                        </p>
                                        <p className="mb-6">
                                            We assist in registrations that emphasize the 'Handcrafted' or 'Sustainable' nature of the product. As global consumers move toward conscious luxury, protecting these specific brand promises through trademarks becomes a competitive advantage. IPR Karo works with craft clusters to ensure their collective identity is legally anchored and commercially viable in the modern world.
                                        </p>
                                    </section>

                                    <section id="digital-loom" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Digital Loom: Protecting E-commerce and Virtual Floor Coverings
                                        </h2>
                                        <p className="mb-6">
                                            The modern carpet brand does not just live on showroom floors; it lives in the digital storefronts of global e-commerce. From Instagram lifestyle shots to 3D room simulators, your brand is being consumed digitally before a single thread is touched. This digital transition brings new legal challenges. 'Keyword Hijacking', where a competitor bids on your brand name in Google Ads or Amazon Search, can divert nearly 40% of your potential traffic to similar looking products.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark in Class 27 is your primary ticket to the Amazon Brand Registry and similar protection programs on Flipkart, Wayfair, and eBay. With registration, you gain the power to proactively block listings that use your brand name in their metadata or product descriptions. We help rug manufacturers file 'Takedown Notices' that are processed within hours, ensuring that your digital reputation remains untarnished.
                                        </p>
                                        <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 my-10 shadow-sm relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
                                            <h3 className="font-bold text-xl mb-4 text-indigo-900 flex items-center">
                                                <FontAwesomeIcon icon={faRocket} className="mr-3 w-10 h-10" />
                                                The Metaverse and Digital Rugs
                                            </h3>
                                            <p className="mb-6 italic text-indigo-950">
                                                As virtual reality and metaverses evolve, digital architecture requires digital furnishings. High end rug designers are now selling NFT (Non-Fungible Token) versions of their heritage patterns for virtual mansions. While Class 27 covers the physical rug, we advise forward thinking brands to also consider Class 9 (Virtual Goods) and Class 42 (Software Services) to prevent unauthorized digital cloning of their luxury designs.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Furthermore, 'Social Media Impersonation' is a rising threat. Accounts pretending to be official factory outlets often sell counterfeit rugs using snatched brand imagery. By submitting your trademark registration certificate to platforms like Meta and TikTok, we can secure your 'Verified Blue Tick' and shut down imposter accounts. This digital shield is essential for maintaining owner control in a world where a viral image can spawn a thousand clones in a single day.
                                        </p>
                                    </section>

                                    <section id="trade-dress-nuances" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Beyond the Name: Trade Dress and Pattern Protection
                                        </h2>
                                        <p className="mb-6">
                                            In the carpet industry, the visual essence of the product is often its most valuable feature. This leads to the complex legal territory of Trade Dress. While a trademark usually protects a word or a logo, Trade Dress protects the overall appearance and 'vibe' of a product that identifies it to consumers. For example, a specific combination of weave density, border geometry, and a unique color palette could constitute your brand's Trade Dress.
                                        </p>
                                        <p className="mb-6">
                                            Protecting a carpet pattern as a trademark is a strategic masterstroke. While design copyrights exist, they have a limited lifespan. A trademark, however, can be renewed indefinitely. If a pattern becomes so famous that customers recognize it as yours even without a label (think of the famous Burberry check or Vuitton monogram), it has acquired 'Secondary Meaning'. We assist luxury rug houses in building the evidentiary trail needed to register these iconic visual signatures as marks.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 my-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[rgb(110,94,147)] shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2 underline">Texture as a Mark</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">Recent legal shifts are opening the door for 'Non-Traditional Marks'. If your carpets have a specific, unique tactile feel created through a proprietary tufting method, and customers identify your brand by that touch, we can explore 'Touch Mark' registrations.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[rgb(110,94,147)] shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2 underline">Configuration Marks</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">The physical shape of a rug set or a modular carpet tile system can be registered as a 'Configuration Mark'. This prevents competitors from copying the functional yet distinctive shape of your flooring solutions.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            However, the barrier for Trade Dress protection is high. You must prove that the design is not purely functional. For example, you cannot trademark a standard square shape for a rug because squares are functional. But if your rug has a specific, ornamental jagged edge that serves no purpose other than branding, it is a prime candidate for protection. Our IP architects evaluate your collections to identify these high value protectable elements, ensuring that your creativity is locked behind a legal vault.
                                        </p>
                                    </section>

                                    <section id="enforcement-playbook" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Enforcement Playbook: Defending Your Market Share
                                        </h2>
                                        <p className="mb-6">
                                            A trademark registration is a powerful shield, but without active enforcement, it is merely a static document. In the high volume carpet markets of India like Panipat and Bhadohi, infringement often starts at the wholesale level. Competitors might use 'Phonetic Equivalents' (names that sound like yours but are spelled differently) to siphon off orders. Our Enforcement Playbook provides a multi-stage response to such threats.
                                        </p>
                                        <p className="mb-6">
                                            The first stage is Digital Surveillance. We use automated scrapers to monitor B2B portals like IndiaMart, TradeIndia, and Alibaba. When we detect a listing using your brand name to sell third-party rugs, we issue immediate, legally binding 'Cease and Desist' notices. In 85% of cases, this stops the infringement without the need for expensive court proceedings.
                                        </p>
                                        <div className="bg-red-50 p-10 rounded-3xl my-10 border-2 border-red-100 relative shadow-inner">
                                            <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faGavel} className="mr-4 w-10 h-10" />
                                                The 'Ex-Parte' Injunction
                                            </h3>
                                            <p className="text-red-950 font-medium leading-relaxed">
                                                In cases of large scale counterfeiting, we can approach the High Court for an 'Ex-Parte Interim Injunction'. This allows the court to appoint a 'Local Commissioner' who can raid the infringer's warehouse and seize all counterfeit goods before they can be hidden or moved. This is the most effective way to protect your brand during peak wedding or festival seasons when rug demand is at its zenith.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Furthermore, we handle 'Border Enforcement'. By recording your registered Class 27 trademark with the Indian Customs, we can have incoming or outgoing shipments of counterfeit goods seized at the ports. This is particularly vital for exporters who are seeing leur high end designs being cloned in neighboring markets and sent back to India or to their buyers in the USA and Europe. We turn the Indian border into a legal filter for your brand's authenticity.
                                        </p>
                                    </section>

                                    <section id="monetization" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Monetizing the Brand: Licensing and Financial Assets
                                        </h2>
                                        <p className="mb-6">
                                            A registered trademark is more than a legal right; it is a high performing financial asset. In the luxury flooring market, the brand name can account for a significant portion of the total enterprise value. When a company is evaluated for acquisition or venture funding, the depth and validity of its IP portfolio are scrutinized. A registered trademark is a 'Clean Asset' that provides confidence to investors and lenders alike.
                                        </p>
                                        <p className="mb-6">
                                            Registration also opens the door to Trademark Licensing. You can authorize other manufacturers or designers to use your brand in specific regions or for specific product sub-categories (like authorizing a furniture brand to use your rug brand name for a co-branded collection) in exchange for 'Royalty Payments'. This allows you to scale your brand footprint without the capital heavy requirements of building new factories. IPR Karo drafts bulletproof licensing agreements that ensure your quality standards are maintained while your passive income grows.
                                        </p>
                                        <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-400 my-8 shadow-sm">
                                            <h4 className="font-bold text-yellow-800 mb-2">Passive Income through IP</h4>
                                            <p className="text-yellow-900 text-sm italic">"Don't just sell carpets; lease your brand. A well-placed licensing deal can generate more profit than a year of manufacturing, with zero overheads. Your trademark is the key to this high-margin revenue stream."</p>
                                        </div>
                                        <p className="mb-6">
                                            We also assist in IP Valuation for mergers and acquisitions. Whether you are selling your business or merging with a larger textile conglomerate, we help you put a rupee value on your trademark. This ensures that you are compensated for the 'Goodwill' you have built over decades. In many cases, the trademark is valued higher than the land and machinery combined. By protecting your brand today, you are creating a retirement fund for yourself and a legacy for your family.
                                        </p>
                                    </section>

                                    <section id="global-customs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Global Customs Guard: Protection for International Exporters
                                        </h2>
                                        <p className="mb-6">
                                            For Indian rug exporters, the world is the playground. However, exporting to the USA, EU, or Gulf countries without trademark protection in those regions is a recipe for disaster. Competitors in those markets can register your name locally and then use the local law to block YOUR shipments from entering the country. This is a common and brutal tactic used to seize market share from unsuspecting Indian manufacturers.
                                        </p>
                                        <p className="mb-6">
                                            We utilize the Madrid Protocol to secure your brand across 130+ countries through a single application filed here in India. This provides you with global priority and prevents 'Trade Mark Squatting'. Additionally, we coordinate with international customs agencies to record your marks. This means if a 'lookalike' shipment from another country tries to enter your buyer's port using your brand name, it can be flagged and stopped.
                                        </p>
                                        <p className="mb-6">
                                            Our global strategy also includes 'Linguistic Search'. Before you launch a collection in a new country, we check if the brand name has any negative or descriptive meanings in the local language. For example, a name that sounds premium in Hindi might be a generic term in German. We ensure your brand's 'Cultural Distinctiveness' is as strong as its 'Legal Distinctiveness', paving the way for a smooth international launch.
                                        </p>
                                        <p className="mb-6">
                                            In the end, trademark registration is about Owner Control. It is the difference between being a temporary player in a commodity market and being a permanent leader in a branded industry. At IPR Karo, we are not just filing forms; we are building fortresses for your creativity. From the first search to the final registration and global enforcement, we are your partners in weaving a secure and profitable future for your flooring empire.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 border-b-4 border-[rgb(110,94,147)] pb-4 inline-block italic">
                                            Trusted by Indian Rug Manufacturers
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="flex text-yellow-400 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-inner">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 text-sm flex items-center">
                                                                {review.name}
                                                                <FontAwesomeIcon icon={faCheck} className="ml-2 text-green-500 w-3 h-3" />
                                                            </h4>
                                                            <p className="text-xs text-[rgb(110,94,147)] font-medium underline decoration-green-500/30">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Expert FAQ: Trademarking Carpets in Class 27
                                        </h2>
                                        <div className="space-y-4 max-w-4xl mx-auto">
                                            {faqs.map((faq, idx) => (
                                                <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                                    <div className="bg-gray-50 p-6">
                                                        <h3 className="font-bold text-lg text-gray-900">{faq.question}</h3>
                                                    </div>
                                                    <div className="p-6 bg-white border-t border-gray-100">
                                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Final CTA Section */}
                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Creative Legacy Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                In the carpet industry, your brand is your bond. Don't leave your reputation to chance. Get a registered trademark and enjoy absolute market control.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Consult Expert Now
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Is Your Brand Safe?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Counterfeiting in the flooring industry is at an all time high. Get a Free Class 27 Search Report to check for risks.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                        Verify Availability Now
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
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Industry Specific</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-fabrics" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Fabrics & Textiles</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-furniture-shop" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Furniture Upholstery</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-boutique" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Home Decor Boutique</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">View All Classes</span>
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
