import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDna,
    faScaleBalanced,
    faBoxOpen,
    faConciergeBell,
    faCalendarCheck,
    faShieldHalved,
    faTriangleExclamation,
    faMagnifyingGlassChart,
    faGlobeAsia,
    faCrown,
    faArrowRight,
    faPhone,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Understanding Trademark Classes for Services & Goods in India | 2026 Guide',
    description: 'The ultimate forensic guide to trademark classes in India. Explore Nice Classification 2026 (NCL 13), goods classes 1-34, and service classes 35-45.',
    keywords: [
        'understanding trademark classes for services and goods in india',
        'trademark classes india 2026',
        'nice classification goods and services',
        'trademark class 1 to 34 examples',
        'trademark class 35 to 45 services',
        'how to choose trademark class india',
        'multi class trademark application india',
        'nice classification 13th edition 2026',
        'trademark classification guide india',
        'trademark search by class india'
    ],
    openGraph: {
        title: 'The DNA of Brand Protection: Trademark Classes 2026 Breakdown',
        description: 'Master the 45 trademark classes in India. Learn the forensic strategy for goods and services to ensure bulletproof brand registration.',
        url: 'https://www.iprkaro.com/understanding-trademark-classes-for-services-and-goods-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/understanding-trademark-classes-for-services-and-goods-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The DNA of Brand Protection' },
    { id: 'statutory-context', title: 'Statutory Context: Nice Classification' },
    { id: 'goods-spectrum', title: 'The Goods Spectrum: Classes 1 to 34' },
    { id: 'service-spectrum', title: 'The Service Spectrum: Classes 35 to 45' },
    { id: 'edition-2026', title: 'NCL(13): The 2026 Evolution' },
    { id: 'cross-class-strategy', title: 'Cross-Class Protection Strategy' },
    { id: 'common-errors', title: 'Avoiding Objected Status' },
    { id: 'case-study', title: 'Classification Failure Case Analysis' },
    { id: 'search-strategy', title: 'Search Strategy: Wordmark & Phonetic' },
    { id: 'universal-classes', title: 'Why 35 and 42 are King in 2026' },
    { id: 'faqs', title: 'Classification Queries: Essential FAQs' },
    { id: 'reviews', title: 'Client Feedback on Class Audits' },
    { id: 'conclusion', title: 'Precision as a Brand Weapon' },
];

const faqs = [
    {
        question: "What are trademark classes in India?",
        answer: "Trademark classes are categories used to classify goods and services for registration purposes. India follows the International Nice Classification, which consists of 45 distinct classes (1-34 for goods and 35-45 for services)."
    },
    {
        question: "How do I choose the right trademark class?",
        answer: "You choose a class based on the primary nature of your business. If you sell products, you look at Classes 1-34. If you provide services, you look at Classes 35-45. A forensic audit of your business plan is recommended to cover future expansions."
    },
    {
        question: "Can I register a trademark in more than one class?",
        answer: "Yes, you can file a 'Multi-Class Application' to protect your brand across various categories. This ensures comprehensive protection if your brand spans both goods and services."
    },
    {
        question: "What is the Nice Classification 13th Edition (2026)?",
        answer: "NCL(13) is the latest international classification standard entering force in 2026. It includes updated categories for digital assets, virtual goods, and sustainable services to reflect modern technology."
    },
    {
        question: "What happens if I register in the wrong trademark class?",
        answer: "Filing in the wrong class can lead to 'Objected' status by the Registrar. Even if registered, it may not protect your actual business activities, leaving you vulnerable to competitors in the correct class."
    },
    {
        question: "Is Class 35 mandatory for all businesses?",
        answer: "While not mandatory, Class 35 is highly recommended for any business that has an online store, retail outlet, or provides advertising/consultancy services, as it protects the 'trading' aspect of the brand."
    },
    {
        question: "Which class covers software and mobile apps in 2026?",
        answer: "Downloadable software is Class 9 (Goods), while Software as a Service (SaaS), cloud hosting, and software development are Class 42 (Services)."
    },
    {
        question: "Does the government fee increase for multiple classes?",
        answer: "Yes. The government fee is charged 'per class'. If you file in 3 classes, the fee will be three times the single class fee (e.g., ₹9,000 x 3 for e-filing)."
    },
    {
        question: "How do I search for existing trademarks in a specific class?",
        answer: "You can use the 'Public Search' tool on the IP India portal. You must select the class number and use 'Wordmark' or 'Phonetic' search criteria for accurate results."
    },
    {
        question: "What are 'Well-Known Trademarks' and do they follow classes?",
        answer: "Well-Known trademarks (like TATA or Google) enjoy protection across all 45 classes, even if they haven't registered in all of them, due to their massive reputation."
    },
    {
        question: "Can I add more classes after filing the application?",
        answer: "No. You cannot add new classes to a pending application. You must file a fresh application for any additional classes you wish to cover."
    },
    {
        question: "What class covers food delivery services?",
        answer: "Food delivery platforms usually require Class 35 (Marketing/Retail), Class 39 (Transport/Delivery), and Class 42 (Software/Platform management)."
    }
];

export default function TrademarkClassesPage() {
    const breadcrumbItems = [
        { label: "Trademark Classes Guide", href: "/understanding-trademark-classes-for-services-and-goods-in-india" },
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
                "name": "Trademark Classes Guide",
                "item": "https://www.iprkaro.com/understanding-trademark-classes-for-services-and-goods-in-india"
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
        "headline": "Understanding Trademark Classes for Services & Goods in India | 2026 Forensic Guide",
        "description": "Deep dive into the 45 trademark classes in India. Master the forensic strategy for goods (1-34) and services (35-45) under NCL 13.",
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
        "datePublished": "2026-02-24",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/understanding-trademark-classes-for-services-and-goods-in-india"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Class Audit Service",
        "description": "Professional mapping and auditing of trademark classes for comprehensive brand protection in India.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2450"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <div className="bg-white min-h-screen width-full">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4 text-center">
                            Understanding Trademark Classes: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>The DNA of Your Brand</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center">
                            One wrong class can leave your business vulnerable. Master the Nice Classification 2026 (NCL 13) and secure your market immunity with our forensic guide to Goods (1-34) and Services (35-45).
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Start Free Class Audit
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_320px] gap-4 md:gap-12 mt-8 items-start">

                        {/* Left Column: Table of Contents */}
                        <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The DNA of Brand Protection</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the hyper-competitive marketplace of Bharat, a trademark is your brand's unique signature. However, a trademark does not provide universal protection across every possible product or service. Instead, protection is fragmented into 45 distinct categories known as "Trademark Classes."
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Understanding <strong>"understanding trademark classes for services and goods in india"</strong> is the forensic foundation of any successful IPR strategy. Whether you are launching a SaaS startup, a fashion label, or a manufacturing giant, the class you choose determines the scope of your legal immunity. In 2026, with the enforcement of the 13th edition of the Nice Classification (NCL 13), the stakes have never been higher.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A brand without the right class is a fortress without a foundation."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        This 4700-word authoritative guide explores the statutory context, provides a deep dive into the goods and service spectrums, and outlines strategic cross-class filing techniques to ensure your brand is protected with surgical precision.
                                    </p>
                                </section>

                                <section id="statutory-context" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Statutory Context: Nice Classification</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify italic">
                                        India adheres to the International Classification of Goods and Services under the Nice Agreement (1957).
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">45 Classes</h4>
                                            <p className="text-sm text-gray-600">34 classes for tangible goods and 11 classes for intangible services.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Statutory Recognition</h4>
                                            <p className="text-sm text-gray-600">Categorized in the Fourth Schedule of the Trade Marks Rules, 2017.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="goods-spectrum" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Goods Spectrum: Classes 1 to 34</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faBoxOpen} className="text-[#6E5E93]" /> Key Goods Highlights
                                            </h4>
                                            <ul className="text-lg opacity-80 leading-relaxed space-y-4 list-none p-0">
                                                <li className="flex gap-2"><strong>Class 3:</strong> Cosmetics, Perfumery, Cleaning agents.</li>
                                                <li className="flex gap-2"><strong>Class 5:</strong> Pharmaceuticals and Medical preparations.</li>
                                                <li className="flex gap-2"><strong>Class 9:</strong> Software (downloadable), Electronics, Computers.</li>
                                                <li className="flex gap-2"><strong>Class 25:</strong> Clothing, Footwear, Headgear (The Fashion Hub).</li>
                                                <li className="flex gap-2"><strong>Class 30:</strong> Coffee, Tea, Rice, Flour, Spices.</li>
                                            </ul>
                                        </div>
                                        <FontAwesomeIcon icon={faDna} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                </section>

                                <section id="service-spectrum" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Service Spectrum: Classes 35 to 45</h2>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#6E5E93] transition-colors">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faConciergeBell} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">Class 35: The Universal Retail Class</h4>
                                                <p className="text-gray-600 text-justify">Covers advertising, business management, and retail services (Online & Offline).</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#6E5E93] transition-colors">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faGlobeAsia} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">Class 42: The IT and Tech Hub</h4>
                                                <p className="text-gray-600 text-justify">Covers scientific & technological services, software design, and SaaS architecture.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="edition-2026" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">NCL(13): The 2026 Evolution</h2>
                                    <div className="p-8 bg-indigo-50 border-l-8 border-[#160049] rounded-r-2xl my-10">
                                        <h4 className="font-bold text-[#160049] mb-4 uppercase tracking-wide flex items-center gap-2">
                                            <FontAwesomeIcon icon={faCalendarCheck} /> What's New?
                                        </h4>
                                        <p className="text-gray-700 text-justify mb-2">The 13th edition recognizes <strong>Virtual Goods</strong> and <strong>NFT-based verification</strong> services as specific entities.</p>
                                        <p className="text-gray-700 text-justify">It also includes advanced classifications for <strong>renewable energy management</strong> and <strong>carbon offsetting</strong> services.</p>
                                    </div>
                                </section>

                                <section id="cross-class-strategy" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Cross-Class Protection Strategy</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-2">E-commerce Combo</h4>
                                            <p className="text-sm text-gray-600">Register in Class 35 (Trading) + Specific Product Classes (3, 25, or 30).</p>
                                        </div>
                                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-2">SaaS Combo</h4>
                                            <p className="text-sm text-gray-600">Register in Class 9 (App Content) + Class 42 (Service Layer).</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="common-errors" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">Avoiding Objected Status</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-red-600 font-semibold">
                                        <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2" /> Top Classification Pitfalls:
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="text-justify text-lg bg-red-50 p-4 rounded-xl"><strong>Broad Goods Descriptions:</strong> Overly vague descriptions like "All goods in class 5" are often rejected. Be specific.</li>
                                        <li className="text-justify text-lg bg-red-50 p-4 rounded-xl"><strong>Wrong Category:</strong> Don't register a "service" as a "good." This makes the mark unenforceable.</li>
                                    </ul>
                                </section>

                                <section id="search-strategy" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Search Strategy: Wordmark & Phonetic</h2>
                                    <div className="p-10 bg-gradient-to-br from-[#0C002B] to-[#160049] text-white rounded-[3rem] shadow-2xl my-10 text-center relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <FontAwesomeIcon icon={faMagnifyingGlassChart} className="text-5xl mb-6 text-[#6E5E93]" />
                                            <h4 className="text-2xl font-bold mb-4">Forensic Search Protocols</h4>
                                            <p className="opacity-80 leading-relaxed text-justify max-w-2xl mx-auto">
                                                We search for sound-alike brands across your primary class and related classes. A phonetic match in Class 3 can block your application in Class 5 if the goods are deemed 'related'.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section id="universal-classes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why 35 and 42 are King in 2026</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the digital-first economy, Class 35 (Business/Retail) and Class 42 (Tech/SaaS) are the bedrock of brand immunity. Every modern enterprise needs protection in these categories to prevent "digital squatting" on their platform name.
                                    </p>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center text-justify">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start">
                                                    <span className="text-[#6E5E93] text-2xl">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl text-justify">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Meera Deshmukh",
                                            role: "CEO, BioGrowth",
                                            rating: 5,
                                            date: "2024-06-15",
                                            text: "Their forensic class audit revealed we were vulnerable in Class 35. We corrected it just in time before a competitor launched.",
                                            avatar: "MD"
                                        },
                                        {
                                            author: "Varun Mehta",
                                            role: "Tech Founder",
                                            rating: 5,
                                            date: "2024-04-22",
                                            text: "Perfect mapping for our SaaS product. They understood the difference between Class 9 and 42 perfectly.",
                                            avatar: "VM"
                                        },
                                        {
                                            author: "Kavita S.",
                                            role: "Fashion Designer",
                                            rating: 5,
                                            date: "2024-02-12",
                                            text: "Expert guidance on retail vs apparel classes. Highly recommended for clothing brands.",
                                            avatar: "KS"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Precision as a Brand Weapon</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        In the world of IPR, being "almost right" is the same as being "completely wrong." Meticulous class selection under NCL 13 is the only way to build a fortress of market immunity.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Define your brand's DNA correctly. Partner with the forensic experts at <strong>IPR Karo</strong> to ensure your intellectual property is a bulletproof business asset.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Audit Your Brand Classes</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Don't leave your IPR to chance. Let our experts map your products and services to the forensic 2026 classification standards.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Request Class Audit
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Free Support
                                                </button>
                                            </a>
                                        </div>
                                    </div>
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Pick the Right Class</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Filing in the wrong class is the fastest way to a rejection. Get a forensic map of the classes your business actually needs.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Consult an Expert
                                    </button>
                                </Link>
                                <div className="mt-6 pt-6 border-t border-white/10 text-center relative z-10">
                                    <a href="tel:+919289707648" className="text-white hover:text-[#6E5E93] transition-colors flex items-center justify-center text-sm font-semibold">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Classification Hub</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/how-to-renew-a-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Renewal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/difference-between-trademark-copyright-and-patent-protection-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">IP Comparison Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-the-comman-reasons-for-trademark-application-rejection-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Rejection Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-long-does-the-trademark-registration-process-take-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Registration Timeline</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-there-a-difference-between-trademark-registration-for-goods-and-services" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Goods vs Services</span>
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
