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
    faCar,
    faTools,
    faPlug,
    faSatellite,
    faShieldVirus,
    faUsers,
    faLightbulb,
    faStar,
    faSnowflake,
    faChargingStation,
    faMicrochip
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Vehicles | Automotive Brand Protection India',
    description: 'Exhaustive guide to trademark registration for cars, electric vehicles, auto parts, and drones in India. Secure your Class 12 automotive brand today with expert IP attorneys.',
    keywords: [
        'trademark for vehicles',
        'automotive brand registration india',
        'class 12 trademark india',
        'electric vehicle trademark',
        'car brand protection',
        'auto parts trademark registration',
        'drone brand legal protection',
        'vehicle logo registration',
        'automotive hardware IP',
        'mobility startup trademark'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for Vehicles & Auto Brands',
        description: 'Protect your automotive innovation with India\'s leading IP legal bridge. Specialized support for EV startups and component manufacturers.',
        url: 'https://www.iprkaro.com/trademark-for-vehicles',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-vehicles',
    },
};

const tocSections = [
    { id: 'importance-of-trademark', title: 'Why It Matters' },
    { id: 'trademark-classes-auto', title: 'The Multi-Class Strategy' },
    { id: 'ev-and-smart-mobility', title: 'EV & Smart IP' },
    { id: 'registration-process', title: 'Registration Process' },
    { id: 'documents-checklist', title: 'Required Documents' },
    { id: 'legal-case-studies', title: 'Legal Case Studies' },
    { id: 'global-brand-protection', title: 'Global Protection' },
    { id: 'brand-valuation', title: 'Brand Valuation' },
    { id: 'cost-of-registration', title: 'Costs and Fees' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Which trademark class is most important for a vehicle manufacturer?",
        answer: "Class 12 is the primary class for vehicles and apparatus for locomotion by land, air, or water. However, for modern automotive brands, Class 9 (software/electronics) and Class 37 (charging/maintenance services) are equally critical."
    },
    {
        question: "Can I trademark a specific model name separately from my company name?",
        answer: "Yes, in the automotive industry, it is standard practice to register the 'House Mark' (company brand) and 'Model Marks' (specific car names) individually to ensure full protection against copycats."
    },
    {
        question: "How does the EV revolution change trademark requirements?",
        answer: "Electric vehicles often require additional protection in Class 9 for batteries and software, and Class 42 for over-the-air (OTA) update services, alongside the standard Class 12 registration."
    },
    {
        question: "Is a logo registration enough for an auto component brand?",
        answer: "No, we recommend registering both the Word Mark (name) and Device Mark (logo/emblem). In the parts industry, name-based counterfeiting is higher than logo mimicry."
    },
    {
        question: "What is the Madrid Protocol for international vehicle trademarks?",
        answer: "The Madrid Protocol allows you to protect your automotive brand in over 120 countries through a single application, which is vital for exporters of vehicles and spare parts."
    },
    {
        question: "Do I need separate trademarks for aircraft and marine vehicles?",
        answer: "All apparatus for locomotion by land, air, or water fall under Class 12, so a single multi-item application can cover various vehicle types if specified correctly."
    },
    {
        question: "Can I trademark a revolutionary engine technology?",
        answer: "Trademarks protect names and logos. The technology itself should be protected via a Patent. However, the specific brand name given to that technology (like 'VVT-i' or 'Quattro') can be trademarked."
    },
    {
        question: "What happens if my automotive trademark is similar to a non-competing brand?",
        answer: "Due to the high 'well-known' status of many auto brands, courts often grant broader protection even across different classes (Dilution Principle). Thorough search is mandatory."
    },
    {
        question: "How can I stop counterfeit auto parts using my brand name?",
        answer: "A registered trademark allows you to initiate criminal action, conduct police raids, and involve Customs (IPR Enforcement Rules) to seize counterfeit goods at ports."
    },
    {
        question: "Is there a discount for EV startups in govt fees?",
        answer: "Yes, if your startup is registered with DPIIT or possesses an MSME/Udyam certificate, the government filing fee is reduced by 50% (from ₹9,000 to ₹4,500 per class)."
    }
];

const reviews = [
    {
        name: "Vikram A.",
        role: "CEO, NexGen Electric",
        text: "IPR Karo helped us secure Class 12 and Class 9 marks for our EV fleet in record time. Their 24-hour search report saved us from a major litigation risk.",
        rating: 5
    },
    {
        name: "Sanjay G.",
        role: "VP Operations, AutoComponent Ltd",
        text: "The multi-class strategy provided by their attorneys was brilliant. We now have 360-degree protection for our components and spare parts export brand.",
        rating: 5
    },
    {
        name: "Anjali P.",
        role: "Founder, SkyMove Drones",
        text: "Protecting a drone startup requires niche expertise. IPR Karo understood the transition from Class 12 to Class 9 perfectly. Exceptional service.",
        rating: 5
    }
];

export default function TrademarkForVehiclesPage() {
    const breadcrumbItems = [
        { label: "Trademark for Vehicles", href: "/trademark-for-vehicles" },
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
        "headline": "The Ultimate Guide to Trademark Registration for Vehicles and Auto Brands in India",
        "description": "Comprehensive legal roadmap for automotive IP. Covers Class 12 registration, EV ip challenges, global protection via Madrid Protocol, and anti-counterfeiting strategies.",
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
        "datePublished": "2026-02-26",
        "dateModified": "2026-02-26"
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
                "name": "Trademark for Vehicles",
                "item": "https://www.iprkaro.com/trademark-for-vehicles"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Trademark Registration for Vehicles",
                    "description": "Professional trademark registration services for the automotive sector including EVs, auto parts, and marine vehicles.",
                    "brand": {
                        "@type": "Brand",
                        "name": "IPR Karo"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2240"
                    },
                    "review": reviews.map(r => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": r.name },
                        "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
                        "reviewBody": r.text
                    }))
                })
            }} />

            {/* Hero Section */}
            <div className="relative w-full overflow-hidden"
                style={{
                    background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                }}>

                <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
                        Drive Your Brand Forward: <br />
                        <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                            Elite Trademark for Vehicles
                        </span>
                    </h1>
                    <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium px-4 md:px-0">
                        From Electric Vehicles (EVs) to aerospace engineering and automotive spare parts. Protect your emblem, name, and innovation with India's premier IP attorneys. 100% digital, same-day filing.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Secure Your Automotive Brand
                        </button>
                    </Link>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4 py-4">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </div>

            {/* Main Content Layout */}
            <main className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column - TOC */}
                    <aside className="hidden lg:block sticky top-32 h-[calc(100vh-100px)] overflow-y-auto pr-4 scrollbar-hide">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Expert Guide</h4>
                            <TableOfContents sections={tocSections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle Column - Content */}
                    <div className="flex-1 max-w-full lg:max-w-4xl order-1">
                        <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                            <section id="importance-of-trademark" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    The Power of the Emblem: Why Your Automotive Brand Needs a Trademark
                                </h2>
                                <div className="mb-12 space-y-6">
                                    <p className="text-xl leading-relaxed font-medium text-gray-700 italic border-l-4 border-[rgb(110,94,147)] pl-6 bg-purple-50 py-4 rounded-r-xl">
                                        In the automotive world, the brand is often more valuable than the metal it is carved into. Whether it’s the prestige of a luxury sedan, the reliability of a truck, or the innovation behind a new EV startup, the trademark is the single most important asset your company owns.
                                    </p>
                                    <p>
                                        For a vehicle manufacturer or auto-parts supplier, a registered trademark acts as a legal iron curtain. The automotive sector is notoriously plagued by 'Counterfeiting' and 'Spurious Spare Parts'. Substandard brake pads or steering components carrying a forged brand name do not just cost revenue; they cost lives. If a consumer experiences a failure with a counterfeit part bearing your name, the legal and reputational liability could bankrupt your business.
                                    </p>
                                    <p>
                                        A registered trademark grants you the power to engage Indian Customs and law enforcement to seize infringing products before they hit the market. It turns your brand from a vulnerable target into a protected legal fortress.
                                    </p>
                                </div>
                            </section>

                            <section id="trademark-classes-auto" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    Beyond Class 12: The Multi-Class Strategy for Automotive Brands
                                </h2>
                                <p className="mb-6">
                                    One of the most common mistakes automotive startups make is assuming that a single registration in Class 12 is sufficient. While Class 12 is indeed the 'Heart' of the automotive industry, the modern mobility ecosystem is far more complex. To truly own your brand, you must protect it across several layers of the Nice Classification system.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 mb-12">
                                    <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                        <div className="text-[rgb(110,94,147)] mb-4">
                                            <FontAwesomeIcon icon={faCar} className="w-12 h-12" />
                                        </div>
                                        <h3 className="font-bold text-xl mb-3 text-gray-900">Class 12: Locomotion</h3>
                                        <p className="text-sm text-gray-700 leading-relaxed font-normal">
                                            The core class covering the final product. Everything from passenger cars and motorcycles to aircraft, drones, and e-bicycles falls here. If it moves people or cargo, it belongs in Class 12.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                        <div className="text-[rgb(110,94,147)] mb-4">
                                            <FontAwesomeIcon icon={faMicrochip} className="w-12 h-12" />
                                        </div>
                                        <h3 className="font-bold text-xl mb-3 text-gray-900">Class 9: Intelligent Systems</h3>
                                        <p className="text-sm text-gray-700 leading-relaxed font-normal">
                                            Crucial for EVs and autonomous vehicles. Class 9 covers battery management systems (BMS), sensors, navigation software, and the 'Brain' of the vehicle.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                        <div className="text-[rgb(110,94,147)] mb-4">
                                            <FontAwesomeIcon icon={faTools} className="w-12 h-12" />
                                        </div>
                                        <h3 className="font-bold text-xl mb-3 text-gray-900">Class 7: The Powerhouse</h3>
                                        <p className="text-sm text-gray-700 leading-relaxed font-normal">
                                            While land vehicle engines are in Class 12, components for manufacturing, machine tools, and certain types of industrial propulsion systems are protected under Class 7.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                        <div className="text-[rgb(110,94,147)] mb-4">
                                            <FontAwesomeIcon icon={faChargingStation} className="w-12 h-12" />
                                        </div>
                                        <h3 className="font-bold text-xl mb-3 text-gray-900">Class 37 & 35: Services</h3>
                                        <p className="text-sm text-gray-700 leading-relaxed font-normal">
                                            Class 37 is essential for vehicle repair and charging services, while Class 35 covers the retail dealership model and online marketplaces for auto parts.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section id="ev-and-smart-mobility" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    EV Revolution: New IP Challenges
                                </h2>
                                <p className="mb-6">
                                    The transition from Internal Combustion Engines (ICE) to Electric Vehicles (EV) has fundamentally shifted the trademark landscape. Unlike traditional car manufacturing, EV brands are as much tech companies as they are hardware companies. Your trademark strategy must reflect this dual identity.
                                </p>
                                <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                    <p className="text-xl text-blue-900 italic font-medium">
                                        "In the high-stakes world of EVs, the name is the tech. Recent rulings demonstrate that courts are willing to grant exhaustive protection to well-known EV brands."
                                    </p>
                                </div>
                                <p className="mb-8 font-medium text-gray-800">
                                    When launching an EV brand, you aren't just registering a 'Car Name'. You are protecting an entire ecosystem which includes:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-6 list-none p-0 mb-12">
                                    <li className="flex items-start bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                        <span className="w-10 h-10 bg-purple-100 text-[rgb(110,94,147)] rounded-full flex items-center justify-center font-black mr-4 flex-shrink-0 text-sm">01</span>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1 text-sm uppercase">Software Interface (UI/UX)</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed">The OS and user interface branding that drivers interact with daily.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                        <span className="w-10 h-10 bg-purple-100 text-[rgb(110,94,147)] rounded-full flex items-center justify-center font-black mr-4 flex-shrink-0 text-sm">02</span>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1 text-sm uppercase">Charging Infrastructure</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed">The naming for your proprietary charging stations and network apps.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                        <span className="w-10 h-10 bg-purple-100 text-[rgb(110,94,147)] rounded-full flex items-center justify-center font-black mr-4 flex-shrink-0 text-sm">03</span>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1 text-sm uppercase">Proprietary Battery Tech</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed">Names given to specific battery architectures (like 'Ultium' or 'Blade').</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                        <span className="w-10 h-10 bg-purple-100 text-[rgb(110,94,147)] rounded-full flex items-center justify-center font-black mr-4 flex-shrink-0 text-sm">04</span>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1 text-sm uppercase">Connected Services</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed">Branding for in-car subscription services and remote diagnostics.</p>
                                        </div>
                                    </li>
                                </ul>
                            </section>

                            <section id="registration-process" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    Step-by-Step Guide to Automotive Trademark Registration
                                </h2>
                                <div className="space-y-12">
                                    <div className="flex flex-col md:flex-row gap-8 items-start relative pb-12">
                                        <div className="md:w-16 h-16 bg-[#0C002B] text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-lg">1</div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-black text-gray-900 mb-4">Multi-Class Clearance Search</h3>
                                            <p className="text-gray-700 mb-4">
                                                In the vehicle sector, a simple Google search is not enough. We conduct a 'Deceptive Similarity' search across Classes 12, 9, 37, and 7. This identifies potential conflicts not just with car names, but with electronics and service brands that could block your registration.
                                            </p>
                                            <ul className="list-none p-0 space-y-2">
                                                <li className="flex items-center text-sm font-bold text-gray-500 italic"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Phonetic similarity analysis</li>
                                                <li className="flex items-center text-sm font-bold text-gray-500 italic"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Analysis of internationally well-known marks</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-8 items-start relative pb-12">
                                        <div className="md:w-16 h-16 bg-[#0C002B] text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-lg">2</div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-black text-gray-900 mb-4">Strategic TM-A Drafting</h3>
                                            <p className="text-gray-700 mb-4">
                                                We don't just list 'Vehicles'. We use precise terminology from the Nice Classification to cover future expansions - like autonomous kits, aftermarket parts, and custom interiors. This ensures your protection grows as your product line does.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-8 items-start relative pb-12">
                                        <div className="md:w-16 h-16 bg-[#0C002B] text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 shadow-lg">3</div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-black text-gray-900 mb-4">Handling Ministry Objections</h3>
                                            <p className="text-gray-700 mb-4">
                                                The Registrar often issues objections under Section 9 (distinctiveness) or Section 11 (similarity). Our attorneys draft robust legal responses, citing case laws like Toyota vs. Prius to prove your mark's distinct identity and protect your application's timeline.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="documents-checklist" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    Documentation Checklist for Auto Sector Applicants
                                </h2>
                                <p className="mb-8">
                                    Whether you are a garage-based EV innovator or a Tier-1 automotive manufacturer, keep these documents ready for a seamless electronic filing process.
                                </p>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                            <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                            Mobility Startups & MSMEs
                                        </h3>
                                        <ul className="space-y-4 text-gray-700 list-none font-medium">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Founder's Aadhaar and PAN Card.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>DPIIT Startup Recognition or MSME Udyam (For 50% fee discount).</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>High-resolution emblem/logo in JPEG/PNG.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>User Affidavit (If claiming use before today's date).</span></li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                            <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                            Established OEMs & LLPs
                                        </h3>
                                        <ul className="space-y-4 text-gray-700 list-none font-medium">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation or Partnership Deed.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Board Resolution authorizing the signatory.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Company PAN card and registered office proof.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Power of Attorney (Drafted by us).</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section id="legal-case-studies" className="scroll-mt-32 pt-12">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    Precedents That Define Automotive IP
                                </h2>
                                <div className="space-y-8">
                                    <div className="bg-gray-50 p-10 rounded-[2rem] border-2 border-dashed border-gray-200">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Toyota vs. Prius Auto: The Global Goodwill Test</h3>
                                        <p className="text-gray-700 leading-relaxed italic border-b border-gray-200 pb-6 mb-6">
                                            "In this landmark ruling, the Supreme Court of India clarified that global reputation alone is not enough. A brand must prove its trans-border reputation exists among Indian consumers to stop a local registrant. This makes early registration in India mandatory for global auto brands."
                                        </p>
                                        <div className="flex items-center text-sm font-bold text-[rgb(110,94,147)]">
                                            <FontAwesomeIcon icon={faGavel} className="mr-2" /> Landmark Judgment (Supreme Court of India)
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-10 rounded-[2rem] border-2 border-dashed border-gray-200">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">BMW vs. Om Balajee: The Phonetic Similarity Test</h3>
                                        <p className="text-gray-700 leading-relaxed italic border-b border-gray-200 pb-6 mb-6">
                                            "BMW successfully blocked an e-rickshaw manufacturer using the mark 'DMW'. The court ruled that 'DMW' was phonetically and visually deceptive, even though the products were different vehicle types. This protects the 'Sound' and 'Look' of established emblems."
                                        </p>
                                        <div className="flex items-center text-sm font-bold text-[rgb(110,94,147)]">
                                            <FontAwesomeIcon icon={faGavel} className="mr-2" /> Phonetic Similarity Precedent
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="vehicle-trade-dress" className="scroll-mt-32 pt-12">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    Vehicle Trade Dress: Protecting the Shape of Innovation
                                </h2>
                                <p className="mb-6">
                                    In the automotive world, a brand is often recognized by its silhouette before its logo. Think of the iconic front grille of a Rolls-Royce, the distinct curves of a Porsche 911, or the futuristic glass-canopy design of a modern EV. These aesthetic features, when they serve to identify the source of the product, fall under the category of 'Trade Dress'.
                                </p>
                                <p className="mb-6 font-medium">
                                    Under the Indian Trade Marks Act, 1999, the definition of a 'mark' includes the 'shape of goods'. This means that if your vehicle's design is unique enough to distinguish it from competitors, we can file for a 3D Trademark. This provides a significantly more robust layer of protection compared to a standard design registration.
                                </p>
                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10">
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                        <FontAwesomeIcon icon={faShieldAlt} className="text-[rgb(110,94,147)] mr-3" />
                                        The Distinctiveness Test for 3D Marks
                                    </h4>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                        To successfully register a vehicle's shape as a trademark in India, the applicant must overcome two major hurdles:
                                    </p>
                                    <ul className="list-none p-0 space-y-3">
                                        <li className="flex items-start text-xs font-bold text-gray-500"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" /> Non-Functionality: The shape should not be purely dictated by the technical function of the car.</li>
                                        <li className="flex items-start text-xs font-bold text-gray-500"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-1" /> Secondary Meaning: Consumers must identify the shape exclusively with your company.</li>
                                    </ul>
                                </div>
                                <p className="mb-8">
                                    Our legal team works with automotive designers and market researchers to establish 'Acquired Distinctiveness'. We use consumer survey data to prove to the Registrar that the 'Trade Dress' has become a trademark in the eyes of the public. This protects you against 'Copycat Manufacturers' who might not use your name but replicate your signature style.
                                </p>
                            </section>

                            <section id="spare-parts-legality" className="scroll-mt-32 pt-12">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    Spare Parts & The 'Fair Use' Doctrine
                                </h2>
                                <p className="mb-6">
                                    The aftermarket automotive industry in India is a multi-billion dollar sector. For independent manufacturers of brake pads, filters, and electronics, a critical legal question arises: Can you use a car manufacturer's trademark to sell your parts?
                                </p>
                                <div className="bg-yellow-50 border-l-8 border-yellow-400 p-8 my-10 rounded-r-2xl shadow-sm">
                                    <h4 className="font-black text-yellow-900 uppercase tracking-widest text-sm mb-4">Section 30(2)(d) of the Trade Marks Act</h4>
                                    <p className="text-lg text-yellow-800 leading-relaxed font-medium">
                                        "Indian law permits the use of a registered trademark to designate the intended purpose of an accessory or spare part, provided such use is 'reasonably necessary' and does not imply an official endorsement from the OEM."
                                    </p>
                                </div>
                                <p className="mb-6">
                                    Through IPR Karo, we advise spare part manufacturers on the 'Safe Harbor' rules. For instance, using the phrase "Oil Filter for Maruti Suzuki Swift" in plain text is generally permissible under nominative fair use. However, using the "S" logo of Suzuki on your packaging would constitute criminal infringement.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 mb-12">
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                                        <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Permissible Use</h4>
                                        <p className="text-xs text-green-600 font-bold mb-4 italic">"Brake Pads suitable for BMW 3-Series"</p>
                                        <p className="text-xs text-gray-500 font-normal">Informative, descriptive, and necessary for consumer choice.</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg border-t-4 border-t-red-500">
                                        <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Infringing Use</h4>
                                        <p className="text-xs text-red-600 font-bold mb-4 italic italic">"BMW Brake Pads" (with logo)</p>
                                        <p className="text-xs text-gray-500 font-normal">Misleads consumers into believing the part is an original factory fitment.</p>
                                    </div>
                                </div>
                                <p className="mb-8">
                                    For OEMs, we provide 'Trademark Vigilance' services. We monitor marketplaces and wholesale hubs to identify sellers who cross the line from 'compatibility descriptions' to 'brand exploitation'. This ensures your premium brand equity is not diluted by sub-standard aftermarket components.
                                </p>
                            </section>

                            <section id="policing-and-enforcement" className="scroll-mt-32 pt-12">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    Enforcement: Civil & Criminal Remedies
                                </h2>
                                <p className="mb-6">
                                    A trademark is only as strong as your willingness to defend it. In the high-volume vehicle industry, counterfeiting is not just a commercial crime; it is a safety hazard. Fake steering components or counterfeit wheel bearings lead to accidents.
                                </p>
                                <p className="mb-8 font-medium">
                                    When infringement is detected, IPR Karo deploys a multi-pronged enforcement strategy that includes:
                                </p>
                                <div className="space-y-6 mb-12">
                                    <div className="flex gap-6 items-start p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                                            <FontAwesomeIcon icon={faGavel} className="text-[rgb(110,94,147)]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">John Doe Orders (Ex-Parte Injunctions)</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed font-normal">
                                                In cases where the exact identity of multiple small-scale counterfeiters is unknown, we obtain 'John Doe' orders from High Courts. This allows law enforcement to raid any premises found storing infringing goods without needing to name every individual seller in the original suit.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                                            <FontAwesomeIcon icon={faShieldAlt} className="text-[rgb(110,94,147)]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Criminal Raids & Seizures</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed font-normal">
                                                Trademark infringement in India is a 'Cognizable Offense'. Our investigators coordinate with local police departments to conduct raids under the Trade Marks Act, leading to immediate seizure of inventory and arrest of perpetrators.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                                            <FontAwesomeIcon icon={faGlobe} className="text-[rgb(110,94,147)]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Customs Recordation</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed font-normal">
                                                We register your trademark with the Central Board of Indirect Taxes and Customs (CBIC). This enables customs officers at ports and airports to intercept and destroy imported counterfeit auto parts before they enter the Indian market.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="licensing-and-dealerships" className="scroll-mt-32 pt-12">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    Licensing: The OEM-Dealer Framework
                                </h2>
                                <p className="mb-6">
                                    The relationship between a vehicle manufacturer and its dealership network is a complex web of trademark licensing. When you grant a dealership, you aren't just selling cars; you are licensing the right to use your prestigious logo on billboards, letterheads, and service centers.
                                </p>
                                <p className="mb-8">
                                    At IPR Karo, we draft 'Iron-Clad' Licensing Agreements that protect the licensor (OEM) from liabilities. These agreements specify:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-4 list-none p-0 mb-12">
                                    <li className="flex items-center text-xs font-black text-gray-800 uppercase tracking-tighter border-l-4 border-[rgb(110,94,147)] pl-4">Territorial Exclusivity</li>
                                    <li className="flex items-center text-xs font-black text-gray-800 uppercase tracking-tighter border-l-4 border-[rgb(110,94,147)] pl-4">Brand Identity Standards</li>
                                    <li className="flex items-center text-xs font-black text-gray-800 uppercase tracking-tighter border-l-4 border-[rgb(110,94,147)] pl-4">Sub-Licensing Prohibitions</li>
                                    <li className="flex items-center text-xs font-black text-gray-800 uppercase tracking-tighter border-l-4 border-[rgb(110,94,147)] pl-4">Post-Termination Covenants</li>
                                </ul>
                                <div className="bg-[#0C002B] p-10 rounded-[2.5rem] text-white">
                                    <h4 className="text-xl font-bold mb-4">Protecting the 'Authorized' Status</h4>
                                    <p className="text-sm opacity-80 leading-relaxed font-normal mb-8">
                                        Many multi-brand service centers use the 'Authorized Service Center' tag without permission. This misleads consumers and risks damaging the vehicle. Our legal desk specializes in issuing 'Cease and Desist' notices to independent garages that infringe on OEM trademarks, ensuring that only genuine partners benefit from your brand's reputation.
                                    </p>
                                    <Link href="/contact-us">
                                        <button className="text-[rgb(110,94,147)] font-black text-xs uppercase tracking-widest border-b-2 border-transparent hover:border-[rgb(110,94,147)] transition-all">Draft Dealership Contract <FontAwesomeIcon icon={faChevronRight} className="ml-2" /></button>
                                    </Link>
                                </div>
                            </section>
                            <section id="global-brand-protection" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    The Madrid Protocol: Thinking Global
                                </h2>
                                <p className="mb-6">
                                    For vehicle manufacturers, the market is rarely limited to one country. If you are planning to export your vehicles or spare parts to the Middle East, Europe, or Southeast Asia, the Madrid Protocol is your best ally.
                                </p>
                                <p className="mb-8">
                                    Through IPR Karo, you can file a single 'International Application' that covers over 120 countries. This is significantly more cost-effective than hiring attorneys in every individual country.
                                </p>
                                <div className="bg-[#0C002B] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="flex items-start gap-6 relative z-10">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <FontAwesomeIcon icon={faGlobe} className="text-2xl text-[rgb(110,94,147)]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Exporting Parts or Vehicles?</h4>
                                            <p className="text-sm opacity-80 leading-relaxed font-normal mb-4">
                                                Don't wait for your containers to be seized at a foreign port. Secure your trademark in your target export markets today through our Madrid Protocol desk.
                                            </p>
                                            <Link href="/contact-us" className="text-[rgb(110,94,117)] hover:text-white transition-colors font-bold text-sm uppercase tracking-widest flex items-center">
                                                Explore International TM <FontAwesomeIcon icon={faChevronRight} className="ml-2 w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="brand-valuation" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                    Asset, Not Expense: Building Automotive Brand Value
                                </h2>
                                <p className="mb-6">
                                    In many automotive M&A deals, the brand value accounts for over 40% of the total acquisition price. A registered trademark is an intangible asset that stays on your balance sheet. It can be:
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mb-12">
                                    <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
                                        <FontAwesomeIcon icon={faMoneyBillWave} className="text-3xl text-[rgb(110,94,147)] mb-4" />
                                        <h4 className="font-bold text-gray-900 text-sm mb-2">Licensed</h4>
                                        <p className="text-xs text-gray-500">Allow others to produce accessories under your brand for a royalty.</p>
                                    </div>
                                    <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
                                        <FontAwesomeIcon icon={faShieldAlt} className="text-3xl text-[rgb(110,94,147)] mb-4" />
                                        <h4 className="font-bold text-gray-900 text-sm mb-2">Pledged</h4>
                                        <p className="text-xs text-gray-500">A registered TM can be used as collateral for specialized business loans.</p>
                                    </div>
                                    <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
                                        <FontAwesomeIcon icon={faRocket} className="text-3xl text-[rgb(110,94,147)] mb-4" />
                                        <h4 className="font-bold text-gray-900 text-sm mb-2">Hypothecated</h4>
                                        <p className="text-xs text-gray-500">Essential for raising venture capital (VC) for EV startups.</p>
                                    </div>
                                </div>
                            </section>

                            <section id="cost-of-registration" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                    Financial Planning for Brand Security
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                            <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                        </div>
                                        <h4 className="font-bold text-xl mb-4 text-gray-900">Government Fees</h4>
                                        <p className="text-sm text-gray-500 mb-8 leading-relaxed font-medium">Standard statutory charges for electronic filing per class.</p>
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
                                                <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Automotive Excellence Package</span>
                                                <span className="text-2xl font-black text-[#8A7AB5]">₹2,999</span>
                                            </div>
                                            <p className="text-[10px] opacity-70 text-left pt-2 leading-relaxed font-normal">Package covers comprehensive multi-class clearance search, TM-A drafting, electronic filing, and same-day diary number generation.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="reviews" className="scroll-mt-32 pt-12">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                    What Vehicle Brand Owners Say About Us
                                </h2>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {reviews.map((review, idx) => (
                                        <div key={idx} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                                            <div className="flex text-yellow-400 mb-4">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                ))}
                                            </div>
                                            <p className="text-gray-700 italic mb-8 leading-relaxed font-normal">"{review.text}"</p>
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

                            <section id="faqs" className="scroll-mt-32 pt-12">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                    Expert Insights: FAQ on Vehicle Trademarks
                                </h2>
                                <div className="space-y-6">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-gray-200 transition-all group">
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                {faq.question}
                                            </h3>
                                            <div className="h-0.5 bg-gray-200 w-full mb-4 group-hover:bg-[rgb(110,94,147)] transition-colors"></div>
                                            <p className="text-gray-700 pl-8 leading-relaxed text-base font-normal">
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
                                    <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">Accelerate Your Brand's Legal Journey</h2>
                                    <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                                        A trademark search today prevents a renaming lawsuit tomorrow. Connect with India's most trusted automotive IP legal team and file your application within hours.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                        <Link href="/contact-us">
                                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                Consult IP Counsel
                                            </button>
                                        </Link>
                                        <a href="tel:+919289707648">
                                            <button className="bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md group uppercase tracking-widest">
                                                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                                                Get Free Advice
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </section>

                        </article>
                    </div>

                    {/* Right Column - Sidebar Widgets */}
                    <aside className="lg:w-80 space-y-8 sticky top-32 h-[calc(100vh-100px)] overflow-y-auto pr-2 scrollbar-hide order-2 lg:order-3">
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
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest text-xs">Automotive Protection</h3>
                            <ul className="space-y-4 list-none p-0">
                                <li>
                                    <Link href="/trademark-for-electronics-and-software" className="group flex items-center text-gray-700 hover:text-[rgb(110,94,147)] transition-all">
                                        <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                        <span className="font-bold text-sm">Electronics & Software</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/trademark-for-machinery" className="group flex items-center text-gray-700 hover:text-[rgb(110,94,147)] transition-all">
                                        <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                        <span className="font-bold text-sm">Industrial Machinery</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/trademark-for-appliances" className="group flex items-center text-gray-700 hover:text-[rgb(110,94,147)] transition-all">
                                        <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                        <span className="font-bold text-sm">Home Appliances</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>

                </div>
            </main >
        </div >
    );
}
