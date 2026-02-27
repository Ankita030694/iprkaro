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
    faUtensils,
    faCoffee,
    faStore,
    faUsers,
    faLightbulb,
    faStar,
    faLeaf,
    faBoxOpen,
    faAppleAlt,
    faWineGlass,
    faIndustry
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Processed Food in India | Register Class 29, 30, 31',
    description: 'Comprehensive guide to trademark registration for processed food brands in India. Secure your food brand under Class 29, 30, and 32. 100% online legal process.',
    keywords: [
        'trademark for processed food',
        'food brand registration india',
        'class 29 trademark india',
        'class 30 trademark registration',
        'processed food trademark search',
        'protect food brand name',
        'fssai vs trademark india',
        'packaged food brand protection',
        'trademark for food startups',
        'legal shield for food business'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for Processed Food Brands',
        description: 'Protect your culinary innovation with India\'s premier IP law firm. Same-day filing for food and beverage brands.',
        url: 'https://www.iprkaro.com/trademark-for-processed-food',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-processed-food',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Why Food Trademarks Matter' },
    { id: 'trademark-classes-food', title: 'Relevant Trademark Classes' },
    { id: 'registration-process', title: 'Step-by-Step Process' },
    { id: 'documents-required', title: 'Documents Needed' },
    { id: 'objections-and-rejections', title: 'Handling Legal Objections' },
    { id: 'fssai-vs-trademark', title: 'FSSAI vs. Trademark' },
    { id: 'benefits-of-registration', title: 'Key Benefits' },
    { id: 'global-expansion', title: 'Going Global' },
    { id: 'monitoring', title: 'Brand Monitoring' },
    { id: 'trade-dress', title: 'Trade Dress Protection' },
    { id: 'ai-impact', title: 'AI in Branding' },
    { id: 'counterfeiting', title: 'Digital Brand Security' },
    { id: 'brand-valuation', title: 'Business Valuation' },
    { id: 'government-fees', title: 'Costs and Fees' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What is the primary trademark class for processed food in India?",
        answer: "The primary classes are Class 29 for meat, dairy, and processed vegetables, and Class 30 for staples like rice, flour, spices, and bakery items. If you sell beverages, Class 32 is also applicable."
    },
    {
        question: "Is FSSAI license the same as trademark registration?",
        answer: "No. FSSAI is a mandatory safety permit for food operations, while a trademark provides exclusive ownership of your brand name and logo. A trademark protects you from copycats, which FSSAI does not."
    },
    {
        question: "Can I trademark a name that describes my food product?",
        answer: "Generally, no. Descriptive names like 'Healthy Biscuits' or 'Spicy Masala' are often rejected under Section 9 of the Trade Marks Act. You need a name that is distinctive and unique to your brand."
    },
    {
        question: "How long does the trademark registration process take for a food brand?",
        answer: "The process usually takes 6 to 12 months. However, you can start using the TM symbol immediately after filing the application, usually on the same day."
    },
    {
        question: "What documents are required for an individual to register a food trademark?",
        answer: "An individual needs a PAN card, Aadhaar card, a digital copy of the logo, and a signed Power of Attorney. If claiming prior use, a user affidavit with evidence is required."
    },
    {
        question: "Why should a food startup invest in a trademark early?",
        answer: "Early registration prevents others from hijacking your brand name as you scale. It builds brand equity, makes you attractive to investors, and simplifies the process of getting listed on platforms like Amazon or Swiggy."
    },
    {
        question: "Can I register a logo and a brand name together?",
        answer: "Yes, you can register a 'Device Mark' which includes both the logo and the brand name. This provides comprehensive protection for the visual and phonetic elements of your brand."
    },
    {
        question: "What happens if someone else uses my food brand name?",
        answer: "If you have a registered trademark, you can file an infringement suit and seek an injunction to stop them. Without registration, your legal options are much more limited and expensive."
    },
    {
        question: "How long is a trademark valid in the food industry?",
        answer: "A trademark is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years, ensuring permanent protection for your brand."
    },
    {
        question: "Which class applies to organic or fresh farm produce?",
        answer: "Raw agricultural products, fresh fruits, and vegetables fall under Class 31. If they are processed, canned, or dried, they move to Class 29 or 30 depending on the item."
    },
    {
        question: "Does a trademark help in international export of food products?",
        answer: "Yes, an Indian trademark is a prerequisite for filing international applications under the Madrid Protocol. It ensures your brand is protected before you enter foreign markets."
    },
    {
        question: "What is the government fee for trademark registration for an MSME?",
        answer: "The government fee for individuals, startups, and MSMEs (with a valid Udyam certificate) is â‚¹4,500 per class. For large companies, it is â‚¹9,000 per class."
    },
    {
        question: "Can I trademark a specific food recipe?",
        answer: "A trademark protects the brand name and logo, not the recipe itself. Recipes are generally protected under trade secrets or, in very rare cases, patents if they involve a novel technical process."
    },
    {
        question: "What is an Examination Report in the trademark process?",
        answer: "After filing, the Registrar examines the application for legal conflicts. If there are issues, they issue an Examination Report. You must file a professional response to overcome these objections."
    },
    {
        question: "Can cloud kitchens apply for food trademarks?",
        answer: "Absolutely. Cloud kitchens rely heavily on digital branding. Registering a trademark in Class 43 (services) and Classes 29/30 (if selling packaged food) is vital for their survival on delivery platforms."
    }
];

const reviews = [
    {
        name: "Vikram R.",
        role: "CEO, FreshFoods India",
        text: "The team at IPR Karo helped us navigate the complex Class 29 and 30 filings. Their search report was incredibly detailed and saved us from a major rebranding disaster later.",
        rating: 5,
        icon: faStore
    },
    {
        name: "Sneha G.",
        role: "Founder, SpiceCraft",
        text: "Professional, fast, and transparent. We got our TM number within 24 hours and could launch our spice line on Amazon without any hurdles. Highly recommended for startups!",
        rating: 5,
        icon: faUtensils
    },
    {
        name: "Arjun M.",
        role: "Director, Organic Bites",
        text: "Handling trademark objections was a breeze with their expert attorneys. They drafted a response that cleared our application in just one hearing. Excellent service.",
        rating: 5,
        icon: faLeaf
    }
];

export default function TrademarkForProcessedFoodPage() {
    const breadcrumbItems = [
        { label: "Services", href: "/our-services" },
        { label: "Trademark for Processed Food", href: "/trademark-for-processed-food" },
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
        "headline": "The 2025 Guide to Trademark Registration for Processed Food in India",
        "description": "An exhaustive manual on securing your food brand. Covers Class 29, 30, 31, 32, registration steps, costs, and overcoming legal objections.",
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
                "name": "Services",
                "item": "https://www.iprkaro.com/our-services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Trademark for Processed Food",
                "item": "https://www.iprkaro.com/trademark-for-processed-food"
            }
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Trademark Registration for Food Brands",
        "description": "Expert legal service for registering food trademarks in India Classes 29, 30, and 32.",
        "provider": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2150"
        },
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.name
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": "5"
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
                            Secure Your Food Empire: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Premium Trademark Registration for Processed Food
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            Your brand name is the secret ingredient of your success. Protect your snacks, dairy, staples, and beverages with India's leading IP legal experts. 100% online, 2025 updated process, and same-day filing.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Register Your Food Brand
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Menu</h4>
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
                                            Why Trademark Registration is Non-Negotiable for Food Brands
                                        </h2>
                                        <p className="mb-6">
                                            In the modern Indian market, the food industry is witnessing an unprecedented boom. From artisanal snacks to health-conscious processed meals, new brands are emerging every day. However, this growth brings a massive risk: brand theft. When you launch a food product, you are not just selling nourishment; you are selling a promise of quality, taste, and safety. This promise is encapsulated in your brand name and logo.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Processed Food</strong> is the only legal way to ensure that your promise remains exclusive to you. Many entrepreneurs confuse an FSSAI license with brand protection. While FSSAI ensures your food is safe to consume, it provides zero protection against a competitor across the street using your exact brand name to sell their products. Without a registered trademark, you are essentially building a house on a rented plot with no lease agreement.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "In the world of FMCG, your brand is your biggest asset. It is the bridge between your manufacturing unit and the consumer's dining table. Protect that bridge at all costs."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The F&B landscape in India is hyper-competitive. Large corporations often scan the market for emerging brands to acquisition or, unfortunately, to out-market with similar branding. For a small or medium-sized enterprise, a registered trademark is the 'Great Equalizer'. It gives you the legal power to stop even the largest conglomerate from using a name that is deceptively similar to yours. It is your shield in a market where brand recall is everything.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the rise of e-commerce platforms like Amazon, BigBasket, and Zepto has changed the rules of the game. These platforms require proof of trademark ownership to grant you 'Brand Registry' or to protect you from listing hijackers. If you want to scale your processed food business beyond your local city, a trademark is not just a luxury; it is a fundamental infrastructure requirement.
                                        </p>
                                    </section>

                                    <section id="trademark-classes-food" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Decoding Food Industry Classes: 29, 30, 31, and 32
                                        </h2>
                                        <p className="mb-8 font-medium text-gray-600 italic">
                                            Correct classification is the heartbeat of a strong trademark. If you file in the wrong class, your protection is virtually non-existent.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="flex items-center mb-4">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-md">29</span>
                                                    <h3 className="font-bold text-xl text-gray-900">Class 29: Animal-Based & Processed Veggies</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This class covers meat, fish, poultry, and game. It also includes preserved, frozen, dried, and cooked fruits and vegetables. If you sell milk, cheese, butter, yogurt, or edible oils and fats, this is your primary class.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="flex items-center mb-4">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-md">30</span>
                                                    <h3 className="font-bold text-xl text-gray-900">Class 30: Staples, Bakery & Spices</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">The most popular class for food startups. It covers coffee, tea, cocoa, rice, flour, and preparations made from cereals. Bread, pastries, confectionery, honey, salt, spices, and sauces also fall under this category.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="flex items-center mb-4">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-md">31</span>
                                                    <h3 className="font-bold text-xl text-gray-900">Class 31: Fresh & Unprocessed Goods</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Essential for raw agricultural products, fresh fruits, vegetables, and raw seeds. If your brand sells unprocessed farm-to-table produce or live animals, you must register here.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="flex items-center mb-4">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-md">32</span>
                                                    <h3 className="font-bold text-xl text-gray-900">Class 32: Beverages & Juices</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">For non-alcoholic drinks, including mineral waters, carbonated waters, and fruit juices. Beers also fall under this class. If your brand is a health-drink or juice startup, this is critical.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we perform a 'Multi-Class Strategy' for our clients. Many modern food brands are hybrid. For example, a brand that sells both protein bars (Class 30) and protein shakes (Class 29 or 32) needs protection across multiple classes. We ensure your brand's shield has no holes that a competitor could exploit.
                                        </p>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The 2025 Optimized Filing Workflow
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
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 1: Phonetic & Visual Search</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Before filing, we perform a deep search to ensure your name doesn't sound or look like an existing food giant's. For example, 'Koka-Bake' might face issues due to phonetic similarity with 'Coca-Cola'. We identify these risks early, saving you thousands in potential legal notices.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 group hover:bg-[rgb(110,94,147)] hover:text-white transition-all">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-gray-200">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 2: Digital Filing & TM Generation</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We file your application online with the Intellectual Property Office. Within 24 hours (often same day), you receive your application number. This allows you to legally use the ™ symbol
                                                        on your packaging, signage, and social media handles.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 group hover:bg-[rgb(110,94,147)] hover:text-white transition-all">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-gray-200">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 3: Legal Response & Registry Defense</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The government examiner may raise objections if your name is too descriptive (e.g., 'Fresh Orange Juice'). Our attorneys draft a robust legal response citing the Trade Marks Act to prove that your brand has acquired 'distinctiveness' through use.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-required" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Checklist: What You Need to Get Started
                                        </h2>
                                        <p className="mb-8">
                                            The Trademark Registry categorizes applicants into two main groups for fee purposes. Providing the right documentation is key to getting the 50% government fee subsidy.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border-2 border-dashed border-[rgb(110,94,147)] p-8 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-xl mr-3 flex items-center justify-center"><FontAwesomeIcon icon={faUsers} /></span>
                                                    For Individuals & Startups
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>PAN and Aadhaar Card of the owner.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>MSME/Udyam Certificate (Mandatory for fee rebate).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Digital Soft Copy of the brand logo.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Signed Power of Attorney (Form 48).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border-2 border-dashed border-gray-400 p-8 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-10 h-10 bg-gray-400 text-white rounded-xl mr-3 flex items-center justify-center"><FontAwesomeIcon icon={faIndustry} /></span>
                                                    For Companies & LLPs
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation (COI).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Company PAN and Address Proof.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Board Resolution for authorization.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>User Affidavit if brand is already in use.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="objections-and-rejections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Navigating Section 9 and Section 11 Objections
                                        </h2>
                                        <p className="mb-6">
                                            The food industry is one of the most litigious when it comes to trademarks. The Registry acts as a gatekeeper to ensure that common descriptors remain free for everyone to use. This is where most food brands hit a wall.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 9 (Absolute Grounds)</strong>: This is the most common hurdle for food brands. If you name your brand 'Sweet Mango', the Registry will object, saying 'Mango' is a fruit and 'Sweet' is a description. You cannot own a monopoly over these words. To bypass this, we focus on proving 'Acquired Distinctiveness'. We gather invoices, marketing spend data, and social media reach to show that while the words are common, they have come to represent uniquely 'your' brand in the consumer's mind.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 11 (Relative Grounds)</strong>: This happens when your brand is too similar to another. In the crowded F&B market, phonetic similarity is a huge issue. If you name your drink 'Pep-Co', the multi-national giant 'PepsiCo' will likely object. Our legal team performs a 'Global Search' and prepares a comparative matrix to show how your visual branding, target audience, and product nature are distinct from the existing mark. We fight for your brand's right to exist.
                                        </p>
                                    </section>

                                    <section id="fssai-vs-trademark" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            FSSAI vs. Trademark: Clearing the Confusion
                                        </h2>
                                        <p className="mb-6">
                                            There is a prevailing myth among small-scale producers that an FSSAI license provides brand protection. Let us be very clear: <strong>FSSAI and Trademark are two completely different legal domains.</strong>
                                        </p>
                                        <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-2xl my-10">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-[rgb(110,94,147)] text-white">
                                                        <th className="p-6 font-black uppercase tracking-widest text-sm">Feature</th>
                                                        <th className="p-6 font-black uppercase tracking-widest text-sm">FSSAI License</th>
                                                        <th className="p-6 font-black uppercase tracking-widest text-sm">Trademark (IPR)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr>
                                                        <td className="p-6 font-bold text-gray-900 italic">Purpose</td>
                                                        <td className="p-6 text-sm">Ensures Food Safety & Hygiene Standards</td>
                                                        <td className="p-6 text-sm">Ensures Exclusive Brand Name Ownership</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-6 font-bold text-gray-900 italic">Legal Scope</td>
                                                        <td className="p-6 text-sm">Mandatory Compliance (Regulatory)</td>
                                                        <td className="p-6 text-sm">Asset Creation (Intellectual Property)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-6 font-bold text-gray-900 italic">Protection</td>
                                                        <td className="p-6 text-sm">Prevents contamination and sub-standard food</td>
                                                        <td className="p-6 text-sm">Prevents competitors from using your name</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-6 font-bold text-gray-900 italic">Platform Req.</td>
                                                        <td className="p-6 text-sm">Required for all listings</td>
                                                        <td className="p-6 text-sm">Required for Brand Registry & Protection</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mb-6">
                                            If you have an FSSAI license in a name that infringes on a registered trademark, the trademark owner can legally force you to change your name. This means all your FSSAI licenses, GST registrations, and packaging would have to be scrapped and re-done. The smart move is to clear your trademark search BEFORE you even apply for your FSSAI license.
                                        </p>
                                    </section>

                                    <section id="benefits-of-registration" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            5 Strategic Benefits of a Registered Food Trademark
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-8 my-10">
                                            <div className="p-8 bg-blue-50 rounded-3xl">
                                                <h4 className="font-black text-blue-900 mb-3 uppercase tracking-tighter">1. Nationwide Exclusive Rights</h4>
                                                <p className="text-sm text-blue-800 opacity-80">Once registered, you have the sole right to use the brand name across all states in India. No one from Kerala to Kashmir can launch a product with your name.</p>
                                            </div>
                                            <div className="p-8 bg-purple-50 rounded-3xl">
                                                <h4 className="font-black text-purple-900 mb-3 uppercase tracking-tighter">2. Amazon/Flipkart Protection</h4>
                                                <p className="text-sm text-purple-800 opacity-80">E-commerce platforms prioritize registered trademark owners. It allows you to strike down 'map-hijackers' and unauthorized sellers of your products instantly.</p>
                                            </div>
                                            <div className="p-8 bg-indigo-50 rounded-3xl md:col-span-2">
                                                <h4 className="font-black text-indigo-900 mb-3 uppercase tracking-tighter">3. Investment & Funding Magnet</h4>
                                                <p className="text-sm text-indigo-800 opacity-80">Investors look for 'defensibility'. A solid trademark portfolio shows that your business is a professional entity with protected assets. It significantly increases your startup valuation during seed or Series A rounds.</p>
                                            </div>
                                            <div className="p-8 bg-green-50 rounded-3xl">
                                                <h4 className="font-black text-green-900 mb-3 uppercase tracking-tighter">4. Franchising Ready</h4>
                                                <p className="text-sm text-green-800 opacity-80">You cannot legally license a name you don't own. A trademark is the core of any franchise agreement, allowing you to scale your brand with zero legal risk.</p>
                                            </div>
                                            <div className="p-8 bg-orange-50 rounded-3xl">
                                                <h4 className="font-black text-orange-900 mb-3 uppercase tracking-tighter">5. Deterrence for Competitors</h4>
                                                <p className="text-sm text-orange-800 opacity-80">The mere presence of the Â® symbol acts as a visual deterrent. Most people will not dare copy a brand name that is clearly marked as registered property.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="global-expansion" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Scaling Beyond Borders: The Madrid Protocol
                                        </h2>
                                        <p className="mb-6">
                                            As Indian spices and snacks gain global popularity, many local brands are eyeing international markets like the USA, UK, and UAE. Protecting your brand in multiple countries used to be a nightmare of separate filings. However, with the Madrid Protocol, you can now file one application in India and designate it to over 130 countries.
                                        </p>
                                        <p className="mb-6">
                                            For a processed food exporter, this means you can protect your brand globally with a fraction of the cost. However, the caveat is that you MUST have a base application or registration in India. At IPR Karo, we specialize in international filings, ensuring your brand is ready for the global stage from day one. We handle the currency conversions, the local office communications, and the complex international laws so you can focus on building your export empire.
                                        </p>
                                    </section>

                                    <section id="monitoring" className="scroll-mt-24 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Importance of Monitoring and Post-Registration Enforcement
                                        </h2>
                                        <p className="mb-6">
                                            Obtaining a trademark registration certificate is not the finish line; it is the beginning of a long-term commitment to brand surveillance. The Trademark Registry is a dynamic database where thousands of new applications are filed every month. As a registered trademark owner in the food industry, you have a legal obligation to 'police' your marks. If you do not actively oppose similar marks that appear in the Trademark Journal, you run the risk of 'Brand Dilution'. This happens when multiple similar brands co-exist, confusing the consumer and weakening your brand's unique identity.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we provide a sophisticated 'Trademark Watch Service'. We use automated systems to monitor every weekly publication of the Trademark Journal for any marks that could potentially conflict with your Classes 29, 30, or 32 registrations. In the food sector, phonetic similarity is especially dangerous. If you own 'CrunchyBites' and someone files 'KrunchyBytes', our system will flag it immediately. We then file a 'Notice of Opposition' within the mandatory 4-month window to block their registration.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the digital age has brought the challenge of 'Cyber Squatting'. This involves third parties registering domain names or social media handles that are identical to your food brand name. With a registered trademark, you have the legal standing to file a complaint under the Uniform Domain-Name Dispute-Resolution Policy (UDRP) to reclaim these digital assets. Protecting your brand's digital footprint is as important as protecting the physical product on the shelf. We act as your brand's digital guardians, ensuring your online presence remains untainted.
                                        </p>
                                    </section>

                                    <section id="trade-dress" className="scroll-mt-24 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Trade Dress: Protecting the Visual 'Vibe' of Your Food Brand
                                        </h2>
                                        <p className="mb-6">
                                            While a standard trademark protects your name and logo, 'Trade Dress' protection goes a step further. In the processed food industry, the 'total image' of your productâ€”including the specific color combinations, the unique shape of the packaging (e.g., the iconic shape of a specific ketchup bottle), and even the layout of the graphics on the boxâ€”can be protected. Trade dress is what allows a consumer to recognize your product from a distance without even reading the name.
                                        </p>
                                        <p className="mb-6">
                                            Trade Dress is particularly vital for brands aiming for premium positioning. If a competitor uses different words but copies your exact secondary color palette and packaging font, they might still confuse consumers into thinking it is a 'budget' version of your brand. Under Indian law, you can protect this 'Total Visual Experience'. It requires proving that the visual elements have become so well-known that consumers associate that specific 'look' only with your company. Our attorneys help you document and build a case for Trade Dress protection during the registration phase, creating a multi-layered legal shield around your product's aesthetics.
                                        </p>
                                    </section>

                                    <section id="ai-impact" className="scroll-mt-24 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            AI in the Food Industry: Implications for Branding and IP
                                        </h2>
                                        <p className="mb-6">
                                            The integration of Artificial Intelligence in the food industry is not just about manufacturing or flavor profiling; it is also about brand creation. Many startups are now using AI-driven tools to generate brand names, logos, and even packaging designs. While these tools offer unprecedented efficiency, they also bring significant legal risks that many founders overlook in the rush to launch.
                                        </p>
                                        <p className="mb-6">
                                            AI-generated logos may inadvertently incorporate elements that are already copyrighted or trademarked by others, as these models are trained on existing data. Simply using an AI tool does not guarantee that the resulting output is 'registrable' or 'ownable'. At IPR Karo, we perform an 'AI-Audit' on modern food brands to ensure that their identity is truly unique and legally defensible. We bridge the gap between creative innovation and legal security, ensuring that your AI-powered brand has a solid legal foundation that can withstand scrutiny.
                                        </p>
                                    </section>

                                    <section id="counterfeiting" className="scroll-mt-24 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Counterfeiting in the Online Food Delivery Ecosystem
                                        </h2>
                                        <p className="mb-6">
                                            The explosion of online food delivery has unfortunately led to a rise in 'Digital Counterfeiting'. Unscrupulous sellers often create 'ghost listings' using your registered food brand's name or a slightly modified version to sell inferior quality products. This does more than just steal your sales; it destroys your brand's reputation for safety and quality. In the food industry, a single bad experience due to a counterfeit product can ruin years of brand building.
                                        </p>
                                        <p className="mb-6">
                                            With a registered trademark, you can leverage the 'Notice and Takedown' mechanisms of major delivery platforms like Swiggy, Zomato, and Amazon. We act as your brand's digital enforcement agents, identifying these fraudulent listings and ensuring they are permanently removed. Your trademark is your primary weapon to keep the digital marketplace clean and safe for your loyal customers.
                                        </p>
                                    </section>

                                    <section id="brand-valuation" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            The Financial Power of Brand Equity
                                        </h2>
                                        <p className="mb-6 text-center max-w-3xl mx-auto italic">
                                            "Your factory determines your capacity; your brand determines your value."
                                        </p>
                                        <p className="mb-6">
                                            In the consumer goods sector, the physical assets (machinery, building) often represent only 20% of the company's total value. The remaining 80% is 'Goodwill' and 'Intellectual Property'. A registered trademark allows you to move this intangible value onto your balance sheet. It is an asset that can be valued, sold, or even used as collateral for bank loans.
                                        </p>
                                        <p className="mb-6">
                                            Consider the world's most famous coffee or soda brands. Their physical recipes are simple, but their brand value is in the billions. By registering your trademark early, you are starting the process of compounding your brand equity. Over 10 or 20 years, your trademark will likely become the most valuable thing you own. It is the financial heart of your food empire.
                                        </p>
                                    </section>

                                    <section id="government-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Transparent Pricing: Investing in Your Future
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            We believe in complete transparency. No hidden costs, no surprise legal fees. Just professional IP protection for your food brand.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center hover:bg-white hover:shadow-2xl transition-all">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-gray-900">Official Government Fee</h4>
                                                <p className="text-sm text-gray-600 mb-6">Standardized fees across India (Updated 2025).</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm">
                                                        <span className="text-xs font-black uppercase text-gray-400">Individuals/MSMEs</span>
                                                        <span className="text-xl font-black text-[rgb(110,94,147)]">â‚¹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm">
                                                        <span className="text-xs font-black uppercase text-gray-400">Large Companies</span>
                                                        <span className="text-xl font-black text-gray-900">â‚¹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center transform hover:scale-105 transition-all">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">IPR Karo Service Fee</h4>
                                                <p className="text-sm opacity-80 mb-6">Expert end-to-end legal management.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                                                        <span className="text-xs font-black uppercase tracking-widest">Starting Only At</span>
                                                        <span className="text-2xl font-black underline decoration-2 underline-offset-8">â‚¹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-70 text-left pt-2 leading-relaxed">
                                                        Includes: 24h Public Search, Form Drafting, Filing, Status Tracking, and Objection Alerts.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">
                                            Your Questions, Our Expert Answers
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-gray-200 transition-all">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="bg-[rgb(110,94,147)] text-white w-8 h-8 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-xs font-black">?</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-12 leading-relaxed text-sm">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">
                                            What Our Clients Say
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, index) => (
                                                <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all flex flex-col h-full group">
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div className="flex text-yellow-400">
                                                            {[...Array(review.rating)].map((_, i) => (
                                                                <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-0.5" />
                                                            ))}
                                                        </div>
                                                        <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-[rgb(110,94,147)] group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-colors shadow-sm">
                                                            <FontAwesomeIcon icon={review.icon} className="w-5 h-5" />
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-black text-gray-900 leading-none mb-1">{review.name}</p>
                                                            <p className="text-[10px] text-[rgb(110,94,147)] font-black uppercase tracking-widest">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-[-20px_20px_60px_rgba(0,0,0,0.4)]">
                                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[100px]"></div>
                                            <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
                                        </div>
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">Your Food Brand Deserves <br /> Elite Protection</h2>
                                            <p className="text-lg md:text-2xl opacity-70 mb-12 max-w-3xl mx-auto font-light">
                                                Join over 5,000+ food businesses that secured their identity with IPR Karo. Don't wait for a legal notice to realize the value of your brand.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-2xl transition-all transform hover:scale-110 shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-widest">
                                                        Start Filing Today
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648" className="group">
                                                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xl group-hover:bg-white/10 transition-all">
                                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white animate-pulse">
                                                            <FontAwesomeIcon icon={faPhone} />
                                                        </div>
                                                        <div className="text-left">
                                                            <p className="text-[10px] uppercase font-black opacity-50">Speak to Attorney</p>
                                                            <p className="text-xl font-black">+91-9289707648</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Free Name Check</h3>
                                <p className="text-sm opacity-60 mb-10 leading-relaxed relative z-10 font-light">
                                    Is your brand name available? Get a Proprietary Search Report in Class 29, 30, and 31. Zero cost, zero commitment.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl transform hover:-translate-y-2 active:scale-95 text-sm uppercase tracking-widest">
                                        Search Now
                                    </button>
                                </Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10">
                                    <p className="text-[10px] uppercase font-black opacity-30 mb-4 tracking-widest">Instant Support</p>
                                    <a href="tel:+919289707648" className="text-white font-black text-lg hover:text-[rgb(110,94,147)] transition-colors flex items-center">
                                        <FontAwesomeIcon icon={faPhone} className="mr-3 text-green-500" /> +91 928 970 7648
                                    </a>
                                </div>
                            </div>

                            {/* Related Categories Widget */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-900 mb-8 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Sectors</h3>
                                <ul className="space-y-6">
                                    {['Restaurant', 'Oils & Lubricants', 'Cosmetics', 'FMCG Startups'].map((item, idx) => (
                                        <li key={idx}>
                                            <Link href={`/trademark-for-${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:w-4 transition-all"></div>
                                                <span className="font-bold text-sm">{item}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Trust Badge */}
                            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 shadow-sm">
                                <div className="flex justify-center mb-4 text-yellow-400">
                                    {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />)}
                                </div>
                                <p className="text-xs font-bold text-gray-900 mb-1 italic">"Highly Professional Service"</p>
                                <p className="text-[10px] text-gray-400 uppercase font-black">Trusted by 5000+ Brands</p>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
