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
    faSeedling,
    faLeaf,
    faAppleAlt,
    faCow,
    faWheatAwn,
    faStore,
    faUsers,
    faLightbulb,
    faStar,
    faIndustry,
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Raw Agricultural Products in India | Class 31 Guide',
    description: 'Complete guide to trademark registration for raw agricultural products in India. Secure your seeds, fresh produce, and livestock under Class 31. 100% online legal process.',
    keywords: [
        'trademark for raw agricultural products',
        'agricultural brand registration india',
        'class 31 trademark india',
        'seeds trademark registration',
        'fresh produce trademark search',
        'protect agricultural brand name',
        'ip india class 31 products',
        'livestock brand protection india',
        'horticultural products trademark',
        'legal shield for agri business'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for Raw Agricultural Products',
        description: 'Protect your agricultural innovation with India\'s premier IP law firm. Same-day filing for seeds, produce, and forestry brands.',
        url: 'https://www.iprkaro.com/trademark-for-raw-agricultural-products',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-raw-agricultural-products',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Why Agri Trademarks Matter' },
    { id: 'what-is-class-31', title: 'Understanding Class 31' },
    { id: 'covered-products', title: 'Products Covered' },
    { id: 'not-covered', title: 'What is NOT Covered' },
    { id: 'registration-process', title: 'Step-by-Step Process' },
    { id: 'documents-checklist', title: 'Documents Needed' },
    { id: 'importance-for-farmers', title: 'Importance for FPOs' },
    { id: 'legal-objections', title: 'Handling Objections' },
    { id: 'global-protection', title: 'Madrid Protocol' },
    { id: 'brand-monitoring', title: 'Enforcement Strategies' },
    { id: 'trade-dress-agri', title: 'Packaging & Trade Dress' },
    { id: 'valuation-agri', title: 'Business Valuation' },
    { id: 'geographical-indications', title: 'Agri Trademarks vs GI' },
    { id: 'government-fees', title: 'Costs and Fees' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What items fall under Trademark Class 31 in India?",
        answer: "Class 31 covers raw and unprocessed agricultural, horticultural, and forestry products. This includes fresh fruits, vegetables, seeds, live animals, natural plants, flowers, and animal foodstuffs like cattle feed."
    },
    {
        question: "Is class 31 applicable for organic packaged pulses?",
        answer: "No. If the pulses are processed, cleaned, and packaged for final consumption, they typically fall under Class 30. Class 31 is specifically for raw, unprocessed agricultural produce."
    },
    {
        question: "Can an individual farmer apply for a trademark in India?",
        answer: "Yes, any individual, farmer, or company can apply for a trademark. Farmers can benefit significantly from the 50% government fee subsidy available to individuals and MSMEs."
    },
    {
        question: "Why should a seed company register a trademark?",
        answer: "Seed technology and genetics are high-value IP. A trademark ensures that competitors cannot sell inferior seeds under your brand name, protecting both your reputation and the farmers' yields."
    },
    {
        question: "How long does it take to get a trademark for agricultural goods?",
        answer: "The process usually takes 6 to 12 months for final registration. However, you can start using the TM symbol and enjoy legal priority from the very day you file the application."
    },
    {
        question: "Can I trademark the name of a specific variety of fruit?",
        answer: "Generally, no. Generic variety names cannot be trademarked. However, you can trademark a unique brand name under which you sell that variety (e.g., 'Zespri' for Kiwifruit)."
    },
    {
        question: "What is the difference between a Trademark and a Geographical Indication (GI)?",
        answer: "A trademark belongs to a specific business or individual (e.g., a brand name), whereas a GI indicates that a product originates from a specific region and possesses qualities due to that origin (e.g., Darjeeling Tea)."
    },
    {
        question: "What documents are required for an Agricultural FPO to file a trademark?",
        answer: "FPOs need their Registration Certificate, PAN card of the organization, proof of address, the brand logo, and an authorization letter for the signatory. MSME registration can help reduce fees."
    },
    {
        question: "Can cattle feed brands be registered under Class 31?",
        answer: "Yes, all types of animal foodstuffs, including cattle feed, poultry feed, and pet food (unprocessed), are covered under Trademark Class 31."
    },
    {
        question: "Does a trademark protect my brand on e-commerce platforms like BigBasket?",
        answer: "Absolutely. A registered trademark is essential for 'Brand Registry' on e-commerce platforms, allowing you to remove unauthorized sellers and protect your listings."
    },
    {
        question: "What happens if my trademark application for 'Fresh Farm' is rejected?",
        answer: "Terms like 'Fresh Farm' are often considered descriptive. In such cases, we file a legal response to prove that your brand has acquired a unique identity through usage and marketing."
    },
    {
        question: "Can I register a logo for my nursery business?",
        answer: "Yes, you can register a 'Device Mark' which includes your nursery's name and its visual logo, providing protection for both the name and the artistic design."
    },
    {
        question: "Is there a renewal fee for agricultural trademarks?",
        answer: "A trademark is valid for 10 years. After 10 years, it can be renewed indefinitely by paying the prescribed renewal fee every decade."
    },
    {
        question: "Can I stop others from using a similar brand name in another state?",
        answer: "Yes, a registered trademark in India provides pan-India protection. You can legally stop anyone from using a similar name for similar products anywhere in the country."
    },
    {
        question: "Why is a trademark search important before filing in Class 31?",
        answer: "Many agricultural terms are common. A search ensures your brand name is unique and helps avoid legal battles with existing established brands in the same category."
    }
];

const reviews = [
    {
        name: "Sandeep Y.",
        role: "Managing Director, GreenRoots Seeds",
        text: "IPR Karo guided us perfectly through the Class 31 registration process. Their deep search saved us from using a name that was already taken. Highly professional!",
        rating: 5,
        icon: faSeedling
    },
    {
        name: "Meenakshi K.",
        role: "Founder, OrganoFarms FPO",
        text: "As an FPO, we were worried about the legal complexities. The team made it so simple. We got our TM number on the same day as filing. Truly elite service.",
        rating: 5,
        icon: faLeaf
    },
    {
        name: "Rajesh G.",
        role: "Owner, PashuAhaar Solutions",
        text: "Getting a trademark for our cattle feed brand was seamless. Their expertise in overcoming registry objections is unmatched. I recommend them to every agri-entrepreneur.",
        rating: 5,
        icon: faCow
    }
];

export default function TrademarkForRawAgriPage() {
    const breadcrumbItems = [
        { label: "Trademark for Raw Agricultural Products", href: "/trademark-for-raw-agricultural-products" },
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
        "headline": "The Comprehensive Guide to Trademark Registration for Raw Agricultural Products (Class 31) in India",
        "description": "Exhaustive legal and strategic manual on securing agri-brands. Covers seeds, live animals, produce, registration steps, FPO benefits, and legal defenses.",
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
                "name": "Trademark for Raw Agricultural Products",
                "item": "https://www.iprkaro.com/trademark-for-raw-agricultural-products"
            }
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration for Agricultural Goods",
        "image": "https://www.iprkaro.com/logo.png",
        "description": "Expert legal service for registering agricultural trademarks in India under Class 31.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "url": "https://www.iprkaro.com/trademark-for-raw-agricultural-products",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "1840"
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
                            Sow the Seeds of Brand Security: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Elite Trademark Registration for Agricultural Products
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In India's growing agri-economy, your brand identity is your most valuable asset. Protect your seeds, fresh produce, livestock, and raw forestry products with India's premier IP law firm. 100% online, same-day filing.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Register Your Agri Brand
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
                                            The Vital Importance of Trademark Protection in Indian Agriculture
                                        </h2>
                                        <p className="mb-6">
                                            Agriculture is the backbone of the Indian economy, but for far too long, it has remained a sector of unbranded commodities. Today, that landscape is undergoing a radical shift. From organic farm startups to large-scale seed producers and Farmer Producer Organizations (FPOs), the industry is moving toward brand-led growth. This evolution brings a significant legal challenge: protecting the identity of those innovative agricultural brands.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Raw Agricultural Products</strong> is no longer just a trend; it is a fundamental business necessity. When you develop a high-quality seed variety, a unique horticultural plant, or a premium line of fresh produce, you are creating huge value. Without a registered trademark, that value is vulnerable. Competitors can easily use your brand name to sell sub-standard products, destroying your market reputation and hurting the farmers who rely on your quality.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "Agricultural innovation is useless if it cannot be legally defended. A trademark is the legal fence that protects your brand's field from being harvested by others."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The risks of operating without a trademark in the agri-sector are immense. Consider the rise of digital agri-marketplaces and export opportunities. International buyers and e-commerce platforms like Amazon Fresh require definitive proof of brand ownership. A registered trademark in <strong>Class 31</strong> provides that proof, opening doors to global markets and premium pricing that unbranded commodities can never achieve.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the Indian government has introduced various incentives for agri-entrepreneurs. Individuals, startups, and MSMEs (including many FPOs) are eligible for a 50% rebate on government filing fees. This makes trademark registration one of the most cost-effective investments you can make in the long-term health of your agricultural enterprise.
                                        </p>
                                    </section>

                                    <section id="what-is-class-31" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Decoding Trademark Class 31: The Agri-Standard
                                        </h2>
                                        <p className="mb-6 text-gray-600 font-medium italic">
                                            Navigating the Nice Classification system is critical for effective brand protection. Class 31 is the global standard for raw natural goods.
                                        </p>
                                        <p className="mb-6">
                                            Trademarks are categorized into 45 classes globally. For the agricultural sector, the vast majority of core products belong to Class 31. This class is designed specifically for products that have not undergone significant industrial processing. It includes raw agricultural, horticultural, and forestry products, along with live animals and animal feed.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we ensure that your registration strategy is holistic. Many modern agri-businesses operate across multiple classes. For example, if you sell raw rice (Class 31) and also processed, packaged Basmati rice (Class 30), you need protection in both classes. We help you identify these overlapping requirements so that your brand has no legal vulnerabilities.
                                        </p>
                                    </section>

                                    <section id="covered-products" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Comprehensive List: What Can You Register in Class 31?
                                        </h2>
                                        <p className="mb-8">
                                            The scope of Class 31 is surprisingly broad, covering everything from the seeds in the ground to the cattle in the barn.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faSeedling} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Seeds & Seedlings</h3>
                                                <p className="text-sm leading-relaxed">Protect your high-yield seed varieties, plant bulbs, and nursery saplings. In the agri-sector, seeds are the most targeted category for brand imitation.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faAppleAlt} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Fresh Produce</h3>
                                                <p className="text-sm leading-relaxed">Includes all fresh fruits, raw vegetables, and unwashed leafy greens. Whether it is premium mangoes or organic potatoes, your brand starts here.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faCow} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Live Animals & Feed</h3>
                                                <p className="text-sm leading-relaxed">Covers live cattle, poultry, and fish. It also includes all types of raw animal foodstuffs like bran, hay, and cattle meal.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faWheatAwn} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Raw Forestry & Flowers</h3>
                                                <p className="text-sm leading-relaxed">Includes raw timber, unsawn wood, and natural plants and flowers. Perfect for ornamental nurseries and sustainable timber businesses.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="not-covered" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            What is NOT Covered in Class 31?
                                        </h2>
                                        <p className="mb-6">
                                            Understanding the exclusions is as important as knowing the inclusions. The key differentiator for Class 31 is the 'Raw' state. Once a product is processed, it usually moves to another class.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <span className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">X</span>
                                                    Excluded Categories
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-4">
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-red-500 mr-2" /> Processed & Canned Foods (Class 29)</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-red-500 mr-2" /> Spices & Staple Grains (Class 30)</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-red-500 mr-2" /> Fertilizers & Agri-Chemicals (Class 1)</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-red-500 mr-2" /> Veterinary Medicines (Class 5)</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-red-500 mr-2" /> Semi-worked Wood/Furniture (Class 19/20)</li>
                                                    <li className="flex items-center text-sm font-medium text-gray-600"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-red-500 mr-2" /> Tobacco (Class 34)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Roadmap to Ownership
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
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 1: Deep Search & Conflict Analysis</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Agricultural branding often uses generic terms (e.g., 'Green', 'Farm'). We use advanced algorithms to find not just exact matches, but phonetic and visual look-alikes. This ensures your brand name doesn't lead to a legal battle with established agri-giants. A thorough search is the foundation of a successful application.
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
                                                        We prepare your application with a detailed 'Specification of Goods'. Precision here is key; we ensure your registration covers the widest possible range of agri-products within Class 31. Once we file, you immediately receive a TM number, allowing you to use the ™ symbol on your products.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 group hover:bg-[rgb(110,94,147)] hover:text-white transition-all">
                                                    <FontAwesomeIcon icon={faCertificate} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-gray-200">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 3: Examination & Certificate</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Trademark Registry will examine the application. We handle all legal responses to any Examination Reports or objections. Once cleared, your trademark is published in the Journal and eventually, the Registration Certificate is issued, giving you 10 years of exclusive rights.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Documentation: Securing the Rebate
                                        </h2>
                                        <p className="mb-8 font-medium text-gray-700 italic">
                                            Providing the right documents is not just about compliance; it is about saving money through government subsidies.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Individuals / MSMEs / Startups
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>PAN and Aadhaar Card of the Applicant.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>MSME/Udyam Certificate (Critical for 50% fee rebate).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Clear digital copy of the brand logo.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Signed Power of Attorney (Form 48).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    FPOs / Partnerships / Companies
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation or Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Organization PAN and proof of address.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>Board Resolution authorizing the signatory.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-12 h-12 text-green-500 mt-1 mr-3" /> <span>User Affidavit if the brand is already in use.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="importance-for-farmers" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Advantage for Farmer Producer Organizations (FPOs)
                                        </h2>
                                        <p className="mb-6">
                                            In recent years, the Indian government has placed massive emphasis on FPOs as a tool for agricultural reform. For an FPO, a trademark is its most powerful tool for market penetration. When farmers aggregate their produce, they stop being price-takers and start being brand-makers.
                                        </p>
                                        <p className="mb-6">
                                            A collective trademark for an FPO ensures that its members' produce is recognized for its quality. It creates a 'Consumer Trust Loop'. When a consumer buys fresh fruit with an FPO's brand logo, they know it met certain standards. This trust allows the FPO to bypass middle-men and sell directly to retail chains, e-commerce giants, and exporters at higher margins.
                                        </p>
                                        <p className="mb-6">
                                            We provide specialized consultancy for FPOs, helping them navigate the MSME benefits and choose brand names that have high cultural and market appeal. A registered trademark is not just legal paperwork; it is the first step toward transforming a local collective into a national brand.
                                        </p>
                                    </section>

                                    <section id="legal-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Overcoming Registry Objections: Section 9 & 11
                                        </h2>
                                        <p className="mb-6 text-gray-700 italic font-medium">
                                            The Trademark Registry acts as a gatekeeper. Understanding the law is the only way to get through the gates.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 9 (Absolute Grounds)</strong>: This is the most common reason for rejection in Class 31. Many agri-brands try to use descriptive words like 'Sweet Fruit' or 'Safe Seeds'. The Registrar will object because these words describe the quality or nature of the goods. To overcome this, our attorneys prove 'Acquired Distinctiveness' by showing evidence of extensive use and market recognition.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 11 (Relative Grounds)</strong>: This happens when your name is too similar to an existing one. In agriculture, where 'Farm', 'Green', and 'Nature' are everywhere, phonetic and visual similarities can be a nightmare. We conduct a 'Side-by-Side Analysis' to prove to the Registrar that your brand's overall impression, target market, and specific visuals are unique enough to avoid any consumer confusion.
                                        </p>
                                    </section>

                                    <section id="global-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Export Ready: The Madrid Protocol and International Filing
                                        </h2>
                                        <p className="mb-6">
                                            Indian agricultural exports are reaching new heights. Whether you are exporting Alphanso mangoes to the UK or organic seeds to the USA, global brand protection is essential. This is where the <strong>Madrid Protocol</strong> comes in. It allows you to file a single international application in India and designate over 130 countries for protection.
                                        </p>
                                        <p className="mb-6">
                                            Managing international IP is complex. You need to understand the local laws of every destination country. At IPR Karo, we handle the entire international filing process. We ensure your Indian trademark serves as a solid foundation for your global expansion, managing all communications with foreign trademark offices so you can focus on your logistics and supply chain.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Export Valuation</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                In international markets, an unbranded commodity sells at the market average. A branded, trademark-protected product from India can command a premium of 30-50%. Exporting without a trademark is leaving money on the table.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="brand-monitoring" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Vigilance in the Fields: Brand Monitoring & Enforcement
                                        </h2>
                                        <p className="mb-6">
                                            Getting your certificate is not the end of the journey; it is the beginning of your responsibility as a brand owner. The agri-sector is prone to local infringements. A small local seller might start using your brand name on a different variety of seeds, which could lead to massive crop failures and lawsuits against YOU.
                                        </p>
                                        <p className="mb-6">
                                            We provide an 'Agri-Vigilance Service' where we monitor the weekly Trademark Journal for any infringing applications. If we find a conflict, we alert you and file immediate oppositions. Furthermore, we assist in sending 'Cease and Desist' notices to local infringers, ensuring that your brand's reputation for quality remains untainted across the country.
                                        </p>
                                    </section>

                                    <section id="trade-dress-agri" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Trade Dress: Protecting the 'Look and Feel' of Agri-Packaging
                                        </h2>
                                        <p className="mb-6">
                                            In the crowded shelves of a seed store or a supermarket, visual recognition is everything. 'Trade Dress' involves protecting the overall visual appearance of your packagingâ€”the color combinations, the specific font style, and the graphic layout.
                                        </p>
                                        <p className="mb-6">
                                            If a competitor copies your pakaging's 'look' but changes the name, they are still stealing your customers' trust. We help you register your packaging designs as 'Device Marks' or 'Three-Dimensional Marks', providing a multi-layered legal shield that protects not just your name, but your entire brand aesthetic.
                                        </p>
                                    </section>

                                    <section id="valuation-agri" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Financial Power: Valuation of Agri-Trademarks
                                        </h2>
                                        <p className="mb-6">
                                            In the modern business world, trademarks are 'Intangible Assets'. They appear on your company balance sheet and increase your overall business valuation. When a venture capitalist or a large agri-conglomerate looks at your startup, they are not just looking at your warehouses and tractors; they are looking at your brand recall.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark is a piece of property. It can be sold, licensed to franchisees, or used as collateral for obtaining business loans from banks. By registering early, you are building an asset that compounds in value over time, often becoming the most valuable part of your company's net worth.
                                        </p>
                                        <p className="mb-6">
                                            For Farmer Producer Organizations (FPOs), brand valuation is a game-changer. When an FPO builds a brand, the valuation created belongs to the member farmers. This collective wealth creation is the ultimate goal of agricultural reforms in India. We help FPOs document their brand growth and usage to build a solid case for high brand valuation during audits and financial assessments.
                                        </p>
                                    </section>

                                    <section id="tech-in-agri-branding" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Role of Technology in Modern Agri-Branding
                                        </h2>
                                        <p className="mb-6">
                                            The integration of technology in agriculture, often referred to as 'Agri-Tech', is not limited to drones and IoT sensors. It extends deeply into how brands are built and protected. Blockchain technology, for instance, is being used to create 'Traceability Logs' that link a consumer's fresh produce directly back to the farm. When combined with a registered trademark, this creates an unbreakable bond of trust.
                                        </p>
                                        <p className="mb-6">
                                            QR codes on packaging are now a standard in premium agri-branding. When a customer scans a QR code on a bag of seeds or a box of mangoes, they should see your registered trademark prominently displayed on the digital landing page. This digital-physical integration is what defines a modern agri-brand. We advise our tech-forward agri-clients on how to synergize their digital IP with their physical trademark registrations to create a futuristic brand shield.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, AI-driven brand search tools have revolutionized the search phase. At IPR Karo, we use proprietary AI tools that can scan millions of records in seconds to find phonetic and visual similarities that traditional search methods might miss. This high-tech approach ensures that your agri-brand is built on a foundation of absolute uniqueness, minimizing the risk of future legal challenges from global or local competitors.
                                        </p>
                                    </section>

                                    <section id="geographical-indications" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Trademark vs. GI: Clearing the Agri-Confusion
                                        </h2>
                                        <p className="mb-6">
                                            Many people in the agricultural sector confuse Trademarks with Geographical Indications (GI). It is vital to understand the difference. A GI belongs to a REGION (e.g., Nagpur Orange, Darjeeling Tea, Basmati Rice). It protects all qualified producers in that specific area by ensuring that only products from that region can use the name.
                                        </p>
                                        <p className="mb-6">
                                            A Trademark, however, belongs to a specific BUSINESS or individual (e.g., 'NagpurGold' brand of oranges). Even if you are producing in a GI-protected region, you still need a unique trademark to differentiate your specific quality, packaging, and service from other producers in the same region. A GI tells the customer WHERE it came from; a Trademark tells them WHO produced it and WHOSE quality they can trust.
                                        </p>
                                        <p className="mb-6">
                                            The most successful agri-brands in India use a 'Dual Protection' strategy. They leverage the reputation of their region's GI while building their own private brand equity through trademark registration. This combination is the ultimate formula for premium market dominance, both in domestic retail and international exports. We help our clients navigate this intersection of regional pride and private brand ownership.
                                        </p>
                                    </section>

                                    <section id="government-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Transparent Pricing for Agri-Entrepreneurs
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            We believe in empowering the Indian agricultural sector with affordable, premium legal protection. No hidden costs, just expert results.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Official Government Fee</h4>
                                                <p className="text-sm text-gray-600 mb-6">Standardized fees set by the Ministry of Industry & Commerce.</p>
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
                                                <p className="text-sm opacity-70 mb-6">End-to-end expert handling of your agri-brand protection.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight opacity-70">Starting From</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 leading-relaxed">Includes deep search, drafting, filing, and 24/7 status tracking alerts.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase">
                                            Client Success Stories
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
                                            Agricultural Trademark: Frequently Asked Questions
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Harvest with Elite Protection</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto font-light">
                                                In the competitive agri-market, your brand identity is your reputation. Start your official application today and protect your legacy.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Consult Agri-Expert Now
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Check Agri-Name Availability</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-light">
                                    Don't launch your agri-brand before you know the name is yours. Get a **Free Class 31 Search Report** in 24 hours.
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
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">General Filing</span>
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
