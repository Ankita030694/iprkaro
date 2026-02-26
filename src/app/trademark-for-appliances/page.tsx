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
    faLightbulb,
    faStar,
    faTools,
    faIndustry,
    faHome,
    faKitchenSet,
    faFan,
    faPlug,
    faFire,
    faSnowflake,
    faUserShield,
    faChartLine,
    faHandshake
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Appliances | Class 11, 7 & 9 Registration India',
    description: 'Complete guide to trademark registration for home, kitchen, and industrial appliances in India. Secure your appliance brand under Class 11, 7, and 9 today.',
    keywords: [
        'trademark for appliances',
        'home appliance brand registration india',
        'class 11 trademark india',
        'kitchen appliance trademark',
        'industrial appliance brand protection',
        'logo registration for home appliances',
        'appliance trademark search',
        'protect appliance brand india',
        'heating cooling apparatus trademark',
        'washing machine trademark class 7'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for Appliance Manufacturers',
        description: 'Protect your appliance innovation with India\'s leading IP legal team. 100% online process, same-day filing for home and kitchen brands.',
        url: 'https://www.iprkaro.com/trademark-for-appliances',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-appliances',
    },
};

const tocSections = [
    { id: 'importance-of-trademark', title: 'Strategic Importance' },
    { id: 'legal-landscape', title: 'Legal Landscape' },
    { id: 'classification-guide', title: 'Classification Guide' },
    { id: 'detailed-goods-list', title: 'Detailed Goods List' },
    { id: 'registration-process', title: 'Registration Process' },
    { id: 'documents-checklist', title: 'Required Documents' },
    { id: 'overcoming-objections', title: 'Handling Objections' },
    { id: 'global-protection', title: 'Global Protection' },
    { id: 'valuation-asset', title: 'Brand as an Asset' },
    { id: 'monitoring-enforcement', title: 'Post-Registration' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What is the primary trademark class for appliances in India?",
        answer: "Class 11 is the primary class for appliances relating to lighting, heating, cooling, cooking, refrigerating, drying, ventilating, and water supply. However, mechanical cleaning appliances like washing machines fall under Class 7, and smart appliances may require Class 9."
    },
    {
        question: "Does one trademark cover both a fridge and a washing machine?",
        answer: "Not necessarily. A fridge is Class 11, while a washing machine is Class 7. To protect both under the same brand name, you must file a multi-class application or two separate applications in those specific classes."
    },
    {
        question: "Can I trademark the design of a specialized mixer grinder?",
        answer: "A trademark protects the brand name and logo. For the aesthetic shape or 'look' of the appliance, you should file for a 'Design Registration' under the Designs Act. However, a 'Device Mark' can protect a stylized version of the product shape as a logo."
    },
    {
        question: "Is it possible to trademark 'Advanced Air Cooler'?",
        answer: "Terms that are descriptive of the product's function are difficult to trademark. 'Advanced Air Cooler' lacks distinctiveness. We recommend choosing a 'Coined' or 'Arbitrary' name like 'ZephyrChill' for stronger legal protection."
    },
    {
        question: "How long is my appliance trademark valid?",
        answer: "A trademark registration is valid for 10 years from the date of the application. It can be renewed indefinitely every 10 years by paying a renewal fee to the Trademark Registry."
    },
    {
        question: "What is the government fee for an MSME registering an appliance brand?",
        answer: "Under the Startup India and MSME schemes, the government filing fee is discounted by 50%, making it ₹4,500 per class instead of the standard ₹9,000 for large companies."
    },
    {
        question: "What happens if someone sells a counterfeit version of my appliance?",
        answer: "As a registered trademark owner, you have the right to file for a 'Suit for Infringement' and seek an immediate injunction to stop the sale. You can also claim damages for loss of business and reputation."
    },
    {
        question: "Do I need to register my appliance trademark globally?",
        answer: "If you plan to export your appliances, you should consider international registration. Through the Madrid Protocol, we can help you file a single application in India and extend it to over 130 countries."
    },
    {
        question: "Can I use the ™ symbol immediately?",
        answer: "Yes, once you have filed your trademark application and received the filing receipt (Form TM-A), you can legally use the ™ symbol next to your brand name and logo."
    },
    {
        question: "Why should appliance manufacturers choose IPR Karo?",
        answer: "We specialize in electronic and industrial IP. Our team understands the intersections between Classes 7, 9, 11, and 21, ensuring holistic protection for your entire product lineup."
    }
];

const reviews = [
    {
        name: "Rajesh V.",
        role: "MD, Crystal Appliances",
        text: "IPR Karo helped us secure our kitchen appliance brand across three different classes. Their deep search was instrumental in avoiding a potential conflict with a major international brand.",
        rating: 5
    },
    {
        name: "Meera S.",
        role: "Founder, EcoCool Systems",
        text: "Process was seamless and completely digital. We received our registration certificate for our air purifier line ahead of schedule. Highly recommended for hardware startups.",
        rating: 5
    },
    {
        name: "Amit K.",
        role: "Director, PowerLite Lighting",
        text: "The legal team at IPR Karo managed a complex objection regarding the descriptiveness of our brand. Their response was professional and legally sound. 5 stars.",
        rating: 5
    }
];

export default function TrademarkForAppliancesPage() {
    const breadcrumbItems = [
        { label: "Trademark for Appliances", href: "/trademark-for-appliances" },
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
        "headline": "Ultimate Guide to Trademark Registration for Appliances in India: Class 11, 7 & 9",
        "description": "Expert advice on protecting your appliance brand. Learn about trademark classification, the registration process, and legal strategies for home and industrial appliances.",
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
                "name": "Trademark for Appliances",
                "item": "https://www.iprkaro.com/trademark-for-appliances"
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
                    "name": "Trademark Registration for Appliances",
                    "image": "https://www.iprkaro.com/images/appliance-trademark.jpg",
                    "description": "Expert trademark registration for home, kitchen, and industrial appliances under Classes 11, 7, and 9.",
                    "brand": {
                        "@type": "Brand",
                        "name": "IPR Karo"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1850"
                    },
                    "review": reviews.map(r => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": r.name },
                        "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
                        "reviewBody": r.text
                    }))
                })
            }} />
            <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "IPR Karo",
                    "url": "https://www.iprkaro.com",
                    "logo": "https://www.iprkaro.com/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-9289707648",
                        "contactType": "customer service"
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
                            Power Your Brand Identity: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Elite Trademark for Appliances
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            From kitchen essentials to industrial HVAC systems, your appliance brand is a signal of durability and engineering excellence. Protect your logo and name with India's premier IP attorneys. 100% digital, same-day filing.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Secure Your Appliance Brand
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
                        <aside className="hidden lg:block sticky top-32 h-[calc(100vh-100px)] overflow-y-auto pr-4 scrollbar-hide">
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
                                            The Strategic Necessity of Trademark Registration for Appliance Brands
                                        </h2>
                                        <p className="mb-6">
                                            In the contemporary Indian market, the appliance industry is undergoing a massive transformation. Driven by rising disposable incomes and the rapid urbanization of tier 2 and tier 3 cities, the demand for everything from air purifiers to advanced robotic vacuum cleaners is at an all-time high. In this crowded marketplace, your brand name is not merely a label; it is the primary differentiator that communicates engineering precision, safety, and long-term reliability to the consumer. <strong>Trademark Registration for Appliances</strong> is the foundational step in protecting this intangible yet priceless asset.
                                        </p>
                                        <p className="mb-6">
                                            For an appliance manufacturer, a registered trademark acts as a legal fortress. The hardware sector is particularly vulnerable to 'Counterfeiting' and 'Grey Market' operations. Substandard electrical goods carrying a forged brand name can lead to serious safety hazards, including electrical fires or mechanical failures. If a consumer experiences such a failure with a counterfeit product bearing your name, the damage to your brand's reputation is often irreparable. A registered trademark grants you the power to engage law enforcement and customs authorities to seize such infringing products before they reach the domestic market or cross international borders.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-yellow-900 italic font-medium">
                                                "In the appliance world, your brand name is a proxy for the engineering quality hidden beneath the casing. A trademark ensures that your years of R&D are never compromised by low-quality imitators."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Beyond protection, a trademark is a significant commercial tool for scaling. Whether you are seeking distributive partnerships with major retailers like Croma or Reliance Digital, or aiming for a massive presence on e-commerce platforms like Amazon and Flipkart, a registered trademark is often a non-negotiable entry requirement. It provides 'Brand Registry' privileges on digital marketplaces, allowing you to control your product listings, eliminate unauthorized resellers, and access advanced marketing tools that drive sales.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, from an investment perspective, intellectual property is a key driver of valuation. During venture capital rounds or mergers and acquisitions, the clarity and strength of your trademark portfolio are under intense scrutiny. A well-protected brand demonstrates that the management has built the business on a defensible legal foundation, making it a much more attractive proposition for institutional investors.
                                        </p>
                                    </section>

                                    <section id="legal-landscape" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Legal Landscape: Navigating the Trade Marks Act for Hardware
                                        </h2>
                                        <p className="mb-6">
                                            The registration of an appliance brand in India is governed by the Trade Marks Act, 1999. This legislation provides the framework for what can be registered and how that registration is enforced. For hardware and appliances, the law recognizes not just the brand name (Word Mark) but also signs, logos, and even specialized packaging (Trade Dress) that helps a consumer identify the source of the product.
                                        </p>
                                        <p className="mb-6">
                                            Understanding the difference between 'Descriptive' and 'Distinctive' marks is critical. Many appliance startups fall into the trap of choosing names that describe the product's function (e.g., 'CoolAir' for an AC or 'FastBoil' for a kettle). Under Section 9 of the Act, such descriptive marks are often rejected because they lack the inherent ability to distinguish one company's goods from another. Our role at IPR Karo is to guide you toward 'Arbitrary' or 'Suggested' marks that are legally robust and easy to defend.
                                        </p>
                                        <p className="mb-6">
                                            The Act also provides for the protection of 'Well-known' marks. If your appliance brand achieves massive popularity across India, the law can grant it a status that prevents anyone else from using that name even in unrelated industries. This is the pinnacle of brand protection, and we help established manufactures build the necessary evidence to claim such status.
                                        </p>
                                    </section>

                                    <section id="classification-guide" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Mastering the Nice Classification: Classes 11, 7, and 9
                                        </h2>
                                        <p className="mb-8 font-medium italic">
                                            The appliance sector is unique because its products are spread across multiple trademark classes. A single brand often requires protection in at least three different categories to be fully secure.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faSnowflake} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Class 11: The Core Class</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">This is the 'Home and Kitchen' class. It covers ACs, refrigerators, ovens, heaters, geysers, LED lights, water purifiers, and fans. Almost all consumer appliances that use energy for heating, cooling, or lighting fall here.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faTools} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Class 7: Machines & Motors</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Mechanical and electromechanical devices live here. This includes washing machines, dishwashers, vacuum cleaners, and the electric motors that power them. Industrial machinery and robotic appliances are also classified broadly in Class 7.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faPlug} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Class 9: Smart Technology</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">In the era of IoT, Class 9 is vital. It covers the software, sensors, and electronic control systems embedded in smart appliances. This includes mobile apps that control your AC or the AI diagnostic systems in a smart fridge.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Failing to register in the correct class is a common 'Fatal Flaw'. If you only register your brand in Class 11 but launch a washing machine line, a competitor could register your same brand name in Class 7 and legally sell washing machines using your brand. This 'Class Clashing' can only be avoided by a multi-class filing strategy designed by IP experts.
                                        </p>
                                    </section>

                                    <section id="detailed-goods-list" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Exhaustive Goods List: Where Does Your Invention Sit?
                                        </h2>
                                        <p className="mb-6">
                                            Precision in the 'Statement of Goods' is what determines the width of your legal protection. A vague description might leave a loophole for a competitor, while a too-broad description might invite an official objection. Below is a categorized breakdown for appliance trademarking.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    Kitchen and Food Preparation (Class 11 & 7)
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-4 text-gray-600 font-medium list-none">
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faKitchenSet} className="text-orange-500 mr-2" /> Microwave ovens and Induction cooktops</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faKitchenSet} className="text-orange-500 mr-2" /> Electric coffee machines and Kettles</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faKitchenSet} className="text-orange-500 mr-2" /> Refrigerators and Deep freezers</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faKitchenSet} className="text-orange-500 mr-2" /> Electric mixers, blenders, and food processors</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faKitchenSet} className="text-orange-500 mr-2" /> Automatic dishwashers</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faKitchenSet} className="text-orange-500 mr-2" /> Air fryers and Bread makers</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    Climate Control and Lighting (Class 11)
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-4 text-gray-600 font-medium list-none">
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faFan} className="text-blue-500 mr-2" /> Air conditioners and HVAC systems</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faFan} className="text-blue-500 mr-2" /> Ceiling fans and Exhaust fans</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faFan} className="text-blue-500 mr-2" /> LED lighting fixtures and Smart bulbs</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faFan} className="text-blue-500 mr-2" /> Electric heaters and Room radiators</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faFan} className="text-blue-500 mr-2" /> Air purifiers and Humidifiers</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faFan} className="text-blue-500 mr-2" /> Solar thermal collectors</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    Utility and Home Maintenance (Class 7 & 11)
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-4 text-gray-600 font-medium list-none">
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faPlug} className="text-purple-500 mr-2" /> Automatic washing machines</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faPlug} className="text-purple-500 mr-2" /> Vacuum cleaners and Carpet sweepers</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faPlug} className="text-purple-500 mr-2" /> Water purifiers and RO systems</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faPlug} className="text-purple-500 mr-2" /> Electric geysers and Immersion heaters</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faPlug} className="text-purple-500 mr-2" /> Electric iron and Garment steamers</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faPlug} className="text-purple-500 mr-2" /> Floor polishing machines</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Architecture of a Protected Brand
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Stage 1: Multi-Class Clearance Search</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We begin with a deep diagnostic search across the Indian Trademark Registry. Unlike a standard search, an appliance search must be cross-referenced across Classes 7, 9, 11, and 21. We look for phonetic similarities, visual overlaps in logos, and potential conflicts with 'Well-known' brand names in the electronic space.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Stage 2: Filing Form TM-A</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once cleared, we file the official application. This includes the preparation of the 'Application Manifesto'-the legal document that defines your brand's scope. If you are an MSME or a Startup, we attach the necessary certificates to avail your 50% government fee rebate. Once filed, you can officially use the ™ symbol.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Stage 3: Examination and Journaling</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Registrar examines the mark for distinctiveness and similarity. If an 'Examination Report' is issued with objections, our senior IP attorneys draft a comprehensive rebuttal, citing past judicial precedents. Successful marks are then 'Advertised before Acceptance' in the Trademark Journal for a 4-month opposition period.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faCertificate} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Stage 4: Registration and Renewal</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        If no opposition is filed, the Registrar issues the Registration Certificate. Your brand is now a state-backed asset. You can use the ® symbol and enjoy exclusive rights for 10 years. We provide automated tracking for your renewal window to ensure your protection never lapses.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Documentation Checklist for Appliance Applicants
                                        </h2>
                                        <p className="mb-8">
                                            To ensure a hurdle-free filing, please keep these digital copies ready. The requirements vary depending on whether you are an individual innovator or a corporate manufacturer.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Innovators & MSMEs
                                                </h3>
                                                <ul className="space-y-4 text-gray-600 list-none font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Applicant's PAN and Aadhaar Card.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>MSME / Udyam Certificate (For the 50% fee discount).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Clear image of the logo or wordmark.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>User Affidavit (If the brand is already in the market).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-gray-400 transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Companies & LLPs
                                                </h3>
                                                <ul className="space-y-4 text-gray-600 list-none font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation or Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Company PAN Card and office address proof.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Board Resolution authorizing the signatory.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Signed Power of Attorney (Form 48).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="overcoming-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Overcoming Legal Hurdles: Handling Objections
                                        </h2>
                                        <p className="mb-6">
                                            The Trademark Registry is a gatekeeper. Approximately 30% of appliance applications receive an initial objection. Understanding the strategy behind our defense is key to your peace of mind.
                                        </p>
                                        <div className="bg-gray-50 p-10 rounded-[2.5rem] my-10 border border-gray-100">
                                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Relative Grounds (Section 11)</h3>
                                            <p className="mb-6 text-gray-600">
                                                This objection arises when 'Brand A' is similar to an existing 'Brand B' in the same class. In the appliance sector, where names often sound technical or futuristic (using prefixes like 'Electro' or 'Cyber'), phonetic similarity is a common trap. We defend this by demonstrating 'Conceptual Dissonance'-showing that while the names might sound similar, the target audiences or visual identities are distinct enough to prevent consumer confusion.
                                            </p>
                                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Absolute Grounds (Section 9)</h3>
                                            <p className="text-gray-600">
                                                This is the 'Descriptiveness' trap. If your name is 'Super Heat Geyser', the registrar will object because 'Heat' and 'Geyser' are common industry terms. Our defense relies on proving 'Acquired Distinctiveness'. We show that through extensive marketing and sales, the consumer has come to associate those specific words with *your* specific product, not the category as a whole.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="global-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Expansion Strategy: Global Protection for Appliance Exporters
                                        </h2>
                                        <p className="mb-6">
                                            India is a leading exporter of household appliances to the Middle East, Africa, and Southeast Asia. However, a trademark registered in India provides zero protection once your product reaches a foreign port. To prevent a foreign distributor from 'Highjacking' your brand name in their local market, international registration is a strategic necessity.
                                        </p>
                                        <p className="mb-6">
                                            The <strong>Madrid Protocol</strong> allows Indian manufacturers to file a single international application through the IP India portal, which can then be extended to over 130 member nations, including the USA, EU, and China. This is significantly more cost-effective than hiring local lawyers in every country. We manage the entire international lifecycle, ensuring your brand is ready for global shelves.
                                        </p>
                                    </section>

                                    <section id="valuation-asset" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Brand as a Balance Sheet Asset: Valuation and Licensing
                                        </h2>
                                        <p className="mb-6">
                                            In mature markets, the brand value of a company like Dyson or Samsung often exceeds the value of its physical factories. For an Indian SME, a registered trademark turns your brand from an intangible idea into a documented asset that can be valued, pledged for bank loans, or licensed out.
                                        </p>
                                        <p className="mb-6">
                                            If your appliance brand gains trust, you can expand via 'Franchising' or 'Brand Licensing'. You can allow other manufacturers to produce lower-tier appliances under your premium brand name in exchange for a royalty fee. Without a registered trademark, such lucrative licensing agreements are legally impossible and highly risky.
                                        </p>
                                    </section>

                                    <section id="monitoring-enforcement" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Post-Registration Vigilance: Monitoring and Enforcement
                                        </h2>
                                        <p className="mb-6">
                                            Securing your certificate is a milestone, not the finish line. The Trademark Registry is a dynamic database where thousands of new marks are applied for every month. Some of these may be deceptively similar to yours. We provide a 'Vigilance Service' that monitors new applications and alerts you to potential infringers before they get registered.
                                        </p>
                                        <p className="mb-6">
                                            Enforcement in India is robust. Courts frequently grant 'John Doe' orders (Ashok Kumar orders) to raid the premises of manufacturers of counterfeit electrical appliances. These orders are powerful because they allow for the seizure of infringing goods even if the exact identity of the counterfeiter is unknown at the time of the order.
                                        </p>
                                    </section>

                                    <section id="future-trends" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Future of Appliance IP: Smart Homes and AI Integration
                                        </h2>
                                        <p className="mb-6">
                                            The convergence of hardware and software is redefining the appliance industry. We are moving away from 'isolated machines' toward a 'Connected Ecosystem'. This shift brings new intellectual property challenges. If your refrigerator can now suggest recipes based on its contents using an onboard AI, is it still just a Class 11 appliance?
                                        </p>
                                        <p className="mb-6">
                                            Legal experts now argue that 'Smart Appliances' require a 'Hybrid IP Strategy'. You must protect the physical machine in Class 11, the embedded software in Class 9, and potentially the cloud-based data processing services in Class 42. Furthermore, as 'Voice Control' becomes standard, trademarking 'Auditory Trademarks' (sound marks) for your appliance's startup chime or notification tone is becoming a viable way to build brand recall.
                                        </p>
                                        <p className="mb-6">
                                            Sustainability and Energy Efficiency are also driving brand identity. Claims like 'Eco-Pulse' or 'Green-Freezer' are highly valuable but difficult to register if they are deemed descriptive. We help companies navigate the 'Green Branding' landscape, ensuring that your sustainability claims are distinct enough to receive full trademark protection without being rejected as mere functional descriptions.
                                        </p>
                                    </section>

                                    <section id="case-studies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Learning from the Giants: Appliance IP Case Studies
                                        </h2>
                                        <p className="mb-6">
                                            The history of the appliance industry is littered with legal battles that defines the boundaries of IP law. Consider the numerous litigations involving high-end vacuum cleaner brands. These cases often hinge on whether a specific feature-like the transparent dust bin or the specific clicking sound of a filter-can be grandfathered into trademark protection.
                                        </p>
                                        <p className="mb-6">
                                            In India, we have seen significant 'Passing Off' lawsuits in the fan and lighting industry. Smaller manufacturers often try to copy the 'Trade Dress' (the color scheme and packaging style) of established market leaders. The Indian courts have consistently protected the 'Overall Look and Feel' of appliance brands, provided they have a registered trademark to serve as the anchor for the legal claim. This highlights the importance of not just registering your name, but also your device marks and logos in full color.
                                        </p>
                                    </section>

                                    <section id="common-mistakes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Avoid These 5 Fatal Mistakes in Appliance Branding
                                        </h2>
                                        <ul className="space-y-6 list-none p-0">
                                            <li className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2">1. The 'Descriptive Name' Trap</h4>
                                                <p className="text-sm text-gray-600">Naming your juice extractor 'Ultra Squeezer' might seem good for marketing, but it's a nightmare for legal. Descriptive names are almost impossible to protect exclusively. Choose arbitrary names that create a unique mental space.</p>
                                            </li>
                                            <li className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2">2. Neglecting Class 7 for Class 11</h4>
                                                <p className="text-sm text-gray-600">Many founders assume all appliances are in Class 11. If your appliance has a major mechanical components (like a washing machine), omitting Class 7 leaves a massive hole in your defense that competitors will exploit.</p>
                                            </li>
                                            <li className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2">3. Delayed Filing Until Launch</h4>
                                                <p className="text-sm text-gray-600">In the appliance world, product lead times are long. If you wait until the product is on the boat from the factory to file your trademark, you risk someone else 'Squatting' on your name during your R&D phase.</p>
                                            </li>
                                            <li className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2">4. Forgetting the Logo (Device Mark)</h4>
                                                <p className="text-sm text-gray-600">An appliance is a physical object. The logo on the front panel is often what the consumer sees first. Only registering the word mark without the stylized logo is only half-protection.</p>
                                            </li>
                                            <li className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                                                <h4 className="font-bold text-gray-900 mb-2">5. Ignoring the Madrid Protocol</h4>
                                                <p className="text-sm text-gray-600">If you have any ambition to export, not considering international protection early is a mistake. Global brand protection is cheapest when done alongside your domestic filing.</p>
                                            </li>
                                        </ul>
                                    </section>
                                    <section id="pricing" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] underline-offset-8">
                                            Transparent Pricing for Premium Brand Protection
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-gray-900">Government Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6 font-medium">Standard statutory filing fees per class.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                                        <span className="text-xs font-bold uppercase text-gray-400">Individuals/Startups/MSMEs</span>
                                                        <span className="text-xl font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                                        <span className="text-xs font-bold uppercase text-gray-400">Large Private Companies</span>
                                                        <span className="text-xl font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[#0C002B] text-white rounded-3xl shadow-2xl flex flex-col items-center text-center relative border border-white/10">
                                                <div className="absolute top-4 right-4 bg-[rgb(110,94,147)] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Professional Choice</div>
                                                <div className="w-16 h-16 bg-white text-[#0C002B] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-gray-100">IPR Karo Service Fee</h4>
                                                <p className="text-sm opacity-80 mb-6 font-medium">End-to-end management by expert IP attorneys.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Appliance Launch Package</span>
                                                        <span className="text-2xl font-black text-[#8A7AB5]">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-70 text-left pt-2 leading-relaxed font-normal">Package covers comprehensive clearance search, TM-A drafting, electronic filing, and lifetime dashboard access for status tracking.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Trusted by Hardware Leaders
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                                                    <div className="flex text-yellow-400 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-8 leading-relaxed font-normal">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-12 h-12 bg-gray-100 group-hover:bg-[rgb(110,94,147)] transition-colors rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white font-black text-lg mr-4">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Appliances Intellectual Property: Expert FAQ
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-gray-200 transition-all group">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <div className="h-0.5 bg-gray-200 w-full mb-4 group-hover:bg-[rgb(110,94,147)] transition-colors"></div>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-base font-normal">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Call to Action Section */}
                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl border border-white/5">
                                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubic-mesh.png')] opacity-10"></div>
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Don't Let Your Innovation Go Unprotected</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                                                A single trademark conflict can stall your product launch and lead to massive renaming costs. Start your official clearance search today with India's most trusted IP legal bridge.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Consult IP Attorney
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md group">
                                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3 group-hover:animate-pulse" />
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
                        <aside className="hidden lg:block space-y-8 sticky top-32 h-[calc(100vh-100px)] overflow-y-auto pr-2 scrollbar-hide">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-2xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Verify Your Brand Availability</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">
                                    Avoid legal conflicts before they happen. Get a **Multi-Class Multi-Industry Search Report** delivered within 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-xs uppercase tracking-tighter">
                                        Request Free Brand Search
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-lg hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-2" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest text-xs">Industry Protection</h3>
                                <ul className="space-y-4 list-none p-0">
                                    <li>
                                        <Link href="/trademark-for-electronics-and-software" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Electronics & Software</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-medical-equipment" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Medical Devices</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-metal-goods" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Hardware & Metals</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-machinery" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Industrial Machinery</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Why IPR Karo Box */}
                            <div className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl relative overflow-hidden">
                                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-yellow-500/5 rounded-full blur-3xl"></div>
                                <h4 className="font-black text-gray-900 mb-4 uppercase tracking-widest text-xs">Why IPR Karo?</h4>
                                <ul className="space-y-3 list-none p-0">
                                    <li className="flex items-start text-xs text-gray-500 font-medium leading-relaxed">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-0.5" />
                                        15+ Years specialized Hardware & Tech IP experience.
                                    </li>
                                    <li className="flex items-start text-xs text-gray-500 font-medium leading-relaxed">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-0.5" />
                                        10,000+ Brands registered successfully across India.
                                    </li>
                                    <li className="flex items-start text-xs text-gray-500 font-medium leading-relaxed">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-0.5" />
                                        Complete digital infrastructure via senior legal experts.
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
