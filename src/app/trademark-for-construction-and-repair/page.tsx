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
    faBuilding,
    faTools,
    faWrench,
    faTruckPickup,
    faHardHat,
    faStore,
    faUsers,
    faLightbulb,
    faStar,
    faIndustry,
    faUserShield,
    faExclamationTriangle,
    faPaintRoller,
    faHammer
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Register Trademark for Construction & Repair Services in India | Class 37 Guide',
    description: 'Protect your building, infrastructure, and repair brand with India\'s leading IP firm. Comprehensive guide to Trademark Class 37 for construction, installation, and maintenance.',
    keywords: [
        'trademark for construction services',
        'class 37 trademark india',
        'building repair brand registration',
        'civil engineering trademark',
        'plumbing services trademark',
        'electrical installation brand protection',
        'hvac service trademark india',
        'construction company name registration',
        'maintenance service brand protection',
        'interior design vs construction trademark'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for Construction & Repair Brands in India',
        description: 'Secure your construction and repair business under Class 37. Expert legal assistance for infrastructure and service providers in India.',
        url: 'https://www.iprkaro.com/trademark-for-construction-and-repair',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-construction-and-repair',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Blueprint of Brand Protection' },
    { id: 'class-37-scope', title: 'What is Trademark Class 37?' },
    { id: 'construction-services', title: 'Construction & Civil Engineering' },
    { id: 'repair-maintenance', title: 'Repair, Refurbishment & Maintenance' },
    { id: 'installation-services', title: 'Installation & System Setup' },
    { id: 'what-is-excluded', title: 'Class 37 vs Class 42: Execution vs Design' },
    { id: 'registration-process', title: 'Step-by-Step Registration Guide' },
    { id: 'legal-requirements', title: 'Legal Pillars: Distinctiveness & Usage' },
    { id: 'search-importance', title: 'Strategic Trademark Search for Contractors' },
    { id: 'documents-checklist', title: 'Required Documents for Class 37' },
    { id: 'objections-handling', title: 'Navigating Registry Objections' },
    { id: 'global-protection', title: 'International Branding via Madrid Protocol' },
    { id: 'anti-counterfeiting', title: 'Defending Service Identity' },
    { id: 'licensing-franchise', title: 'Licensing & Franchise Scaling' },
    { id: 'valuation-asset', title: 'Service Brand Valuation' },
    { id: 'pricing-fees', title: 'Pricing and Registration Fees' },
    { id: 'faqs', title: 'Construction & Repair FAQs' },
];

const faqs = [
    {
        question: "Does Class 37 cover architectural design services?",
        answer: "No, architectural and engineering design services belong in Class 42. Class 37 is strictly for the physical execution of construction and repair work."
    },
    {
        question: "Can I register as both a construction company and a building materials seller?",
        answer: "Yes, but you would need a multi-class application. Class 37 covers the services, while Class 19 or Class 6 would cover the actual materials like cement or steel."
    },
    {
        question: "Does Class 37 include vehicle repair services?",
        answer: "Yes, vehicle maintenance, breakdown repair, and car detailing services are explicitly included in Class 37."
    },
    {
        question: "Are cleaning services part of Class 37?",
        answer: "Yes, building cleaning (interior and exterior), chimney sweeping, and boiler cleaning are classified under Class 37."
    },
    {
        question: "Can I trademark a specific construction method?",
        answer: "Trademarks protect brand names and logos. If you have a unique construction method, you should look into Patent protection, though you can trademark the name of that method."
    },
    {
        question: "How long is a construction trademark valid?",
        answer: "Like all Indian trademarks, it is valid for 10 years and can be renewed indefinitely every decade."
    },
    {
        question: "What is 'Prior Use' in the construction industry?",
        answer: "If your firm has been operating under a name for years before filing, you can claim 'Prior Use' with an affidavit to protect your brand against newer competitors."
    },
    {
        question: "Does Class 37 cover the rental of construction machinery?",
        answer: "Yes, the rental of bulldozers, cranes, and other construction equipment is a service covered under Class 37."
    },
    {
        question: "What happens if a competitor uses a similar logo to mine?",
        answer: "If your logo is registered in Class 37, you can file for trademark infringement and seek an injunction to stop them from using the confusingly similar mark."
    },
    {
        question: "Can an individual contractor apply for a trademark?",
        answer: "Absolutely. Any individual, sole proprietor, or partnership can apply. Individuals and MSMEs also benefit from a 50 percent discount on government fees."
    },
    {
        question: "Is 'Construction' a registrable trademark word?",
        answer: "The word 'Construction' alone is generic and cannot be trademarked. You must combine it with a distinctive brand name like 'BuildStrong Construction'."
    },
    {
        question: "What is an objection under Section 11?",
        answer: "A Section 11 objection is raised when your proposed mark is too similar to an existing registered or pending trademark in Class 37."
    },
    {
        question: "Does Class 37 cover solar panel installation?",
        answer: "Yes, the physical installation and maintenance of solar energy systems fall within the scope of Class 37."
    },
    {
        question: "Can I register my interior decoration firm in Class 37?",
        answer: "If your firm does the actual painting, carpentry, and physical work, Class 37 is correct. If you only provide design consultation, Class 42 is more appropriate."
    },
    {
        question: "How much does it cost to register a construction trademark?",
        answer: "The government fee is ₹4,500 for individuals/MSMEs and ₹9,000 for large companies. Professional fees for filing range around ₹2,999."
    }
];

const reviews = [
    {
        name: "Arjun R.",
        role: "CEO, Skyline Infrastructure",
        text: "IPR Karo helped us secure our Group's name across Class 37 and Class 42. Their multi-class strategy was flawless.",
        rating: 5,
        icon: faBuilding
    },
    {
        name: "Priya K.",
        role: "Founder, GreenBuild Repairs",
        text: "The transition from a local contractor to a national brand was made possible by their expert trademark filing. Highly recommended.",
        rating: 5,
        icon: faTools
    },
    {
        name: "Suresh P.",
        role: "MD, Precision Mechanicals",
        text: "We needed protection for our specialized HVAC installation brand. They handled the Section 11 objection with great legal precision.",
        rating: 5,
        icon: faWrench
    }
];

export default function TrademarkForConstructionRepairPage() {
    const breadcrumbItems = [
        { label: "Construction & Repair", href: "/trademark-for-construction-and-repair" },
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
        "headline": "Definitive Guide to Trademark Registration for Construction and Repair (Class 37) in India",
        "description": "Exhaustive legal guide on securing construction, repair, and installation brands. Expert analysis of Class 37, multi-class strategies, and asset protection.",
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
                "name": "Construction & Repair Trademark",
                "item": "https://www.iprkaro.com/trademark-for-construction-and-repair"
            }
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Class 37 Trademark Services for Construction Firms",
        "image": "https://www.iprkaro.com/logo.png",
        "description": "Expert legal services for registering building company names, logos, and repair service brands in India.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "url": "https://www.iprkaro.com/trademark-for-construction-and-repair",
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
                            Building a Legacy: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Expert Trademark Protection for Construction & Repair
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-200 font-medium leading-relaxed px-2 text-center drop-shadow-md">
                            In the bedrock of the infrastructure industry, your brand name is your reputation. Secure your construction projects, repair services, and installation firm under Class 37 with India's premier IP professionals. Build equity that lasts as long as your structures.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Cement Your Brand Property
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Chapters</h4>
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
                                            The Strategic Value of Brand Equity in Construction and Repair
                                        </h2>
                                        <p className="mb-6">
                                            The construction and repair industry in India is the second-largest employer after agriculture and a primary driver of the nation's GDP. In a sector dominated by massive infrastructure projects, specialized repair contractors, and high-tech installation firms, the brand name serves as the ultimate guarantee of reliability and engineering excellence. When clients invite tenders or homeowners search for "Reputation-Backed Contractors," it is the registered trademark that distinguishes a professional entity from an unorganized setup.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Construction</strong> under Class 37 is the legal bedrock for any building business. Whether you are constructing multi-story apartments, maintaining municipal bridges, or providing specialized HVAC repair services, your brand is what bridges the gap between a successful project and an anonymous service. Without a registered trademark, you risk losing your identity to "Look-Alike" competitors who can easily replicate your aesthetic but not your commitment to quality.
                                        </p>
                                        <div className="bg-indigo-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-indigo-900 italic font-medium">
                                                "Buildings crumble, but brands endure. A trademark in Class 37 is the only asset that grows in value with every brick laid and every system repaired."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we recognize that branding in the build industry is complicated. It involves not just a name, but a reputation for safety, punctuality, and technical brilliance. Protecting a construction brand requires a meticulous understanding of Class 37, which covers the execution-based services that make human habitation possible. From civil engineering giants to the specialized elevator maintenance firm, we provide the legal framework to ensure your brand name is exclusively yours across the length and breadth of the country.
                                        </p>
                                        <p className="mb-6">
                                            In an era of digital discovery, an unprotected brand is a liability. Every time you finish a project, you leave behind a physical testament to your brand. If that name isn't trademarked, you are essentially building a reputation that someone else could eventually hijack. Registration allows you to scale your business, license your expertise, and build a corporate asset that can be valued, leased, or sold for a premium.
                                        </p>
                                    </section>

                                    <section id="class-37-scope" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight font-sans">
                                            Understanding Trademark Class 37: The Domain of Execution
                                        </h2>
                                        <p className="mb-6 text-gray-600 font-medium italic">
                                            Standardized under the Nice Classification, Class 37 is specifically reserved for services related to building construction, repair, and installation services.
                                        </p>
                                        <p className="mb-6">
                                            Class 37 is often misunderstood. It is the class of "Doing." It does not cover the design of the building (which belongs in Class 42) or the materials used (Class 19 or 6). Instead, it covers the actual physical labor and management involved in building, repairing, or installing. At IPR Karo, we ensure your application correctly captures the scope of your operations, preventing the common mistake of misclassifying service-based firms in goods-based classes.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, Class 37 is expansive. It includes the maintenance of existing structures, the cleaning of buildings, and even the repair of vehicles. For a diversified service group, registration in Class 37 is the most critical step toward preventing market confusion and securing service exclusivity.
                                        </p>
                                    </section>

                                    <section id="construction-services" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Construction & Civil Engineering: Protecting Infrastructure Brands
                                        </h2>
                                        <p className="mb-8">
                                            Class 37 is the primary home for construction companies involved in building the future.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faBuilding} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Building Construction</h3>
                                                <p className="text-sm leading-relaxed">Covers the construction of high-rises, residential complexes, and individual houses. This is where most real estate developer brands fall.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faIndustry} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Civil Engineering Projects</h3>
                                                <p className="text-sm leading-relaxed">Includes the construction of bridges, dams, roads, and tunnels. Essential for large-scale government contractors and EPC firms.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faPaintRoller} className="text-xl" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Specialized Sub-Contracting</h3>
                                                <p className="text-sm leading-relaxed">Covers painting, plastering, interior renovation, and roofing services. Crucial for specialized trade brands.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faHardHat} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Construction Supervision</h3>
                                                <p className="text-sm leading-relaxed">Includes the management and oversight of building sites, ensuring that the physical execution matches the technical specs.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="repair-maintenance" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Repair, Refurbishment & Maintenance: The Lifecycle Class
                                        </h2>
                                        <p className="mb-6">
                                            Modern commerce is as much about maintaining existing assets as it is about building new ones. Class 37 provides a robust shield for repair service brands across diverse industries.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10">
                                            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">Essential Repair Services</h4>
                                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium text-gray-600">
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Machinery Repair</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Vehicle Maintenance</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Electronic Repairs</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> HVAC Maintenance</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Elevator Servicing</li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Building Cleaning</li>
                                            </ul>
                                        </div>
                                        <p className="mb-6">
                                            For vehicle repair networks and AMC (Annual Maintenance Contract) providers, your trademark is the only way a customer can distinguish your professional service from a local unbranded workshop. We help maintenance giants and startup repair apps secure their names, enabling them to build nationwide service networks with confidence.
                                        </p>
                                    </section>

                                    <section id="installation-services" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Installation & System Setup: Bridging the Gap
                                        </h2>
                                        <p className="mb-6">
                                            Installation services are the crucial final step in any infrastructure or appliance purchase. Class 37 protects brands that specialize in the setup of complex systems.
                                        </p>
                                        <p className="mb-6">
                                            From installing sophisticated kitchen appliances and industrial air conditioning to the setup of renewable energy systems like solar panels, Class 37 ensures your installation team's brand name is protected. This is particularly vital for companies that don't manufacture the goods but provide the "Expert Setup" that makes them work. At IPR Karo, we help installation specialists carve out a unique brand space in the service economy.
                                        </p>
                                    </section>

                                    <section id="what-is-excluded" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Class 37 vs Class 42: The Execution vs Design Dilemma
                                        </h2>
                                        <p className="mb-6 text-gray-600 font-medium">
                                            One of the most frequent causes of trademark objections in the construction industry is confusing physical labor with intellectual design.
                                        </p>
                                        <div className="bg-red-50 border border-red-100 p-8 rounded-2xl space-y-6 shadow-sm">
                                            <div className="flex items-start">
                                                <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">37</div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">The "Doers" (Class 37)</h4>
                                                    <p className="text-sm text-gray-600 font-medium">If your business physically builds, paints, repairs, installs, or maintains, it belongs here. It is about the "Hammer and Wrench."</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">42</div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">The "Designers" (Class 42)</h4>
                                                    <p className="text-sm text-gray-600 font-medium">Architectural planning, engineering design, urban planning, and interior design consultation belong here. It is about the "Blueprint and Software."</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-8 mb-6">
                                            Most modern firms are integrated; they design AND build. In such cases, filing only in Class 37 leaves your "Design Division" unprotected. We typically recommend a multi-class strategy for professional building firms to ensure 360-degree brand safety.
                                        </p>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">
                                            The 5-Step Process to Cement Your Brand
                                        </h2>
                                        <div className="relative space-y-8">
                                            {/* Step 1 */}
                                            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-8 rounded-3xl border-2 border-transparent hover:border-[rgb(110,94,147)] transition-all">
                                                <div className="bg-[rgb(110,94,147)] text-white w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg flex-shrink-0">01</div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-3 font-sans">Precision Name Search</h3>
                                                    <p className="text-base text-gray-600">We crawl the IP India database to ensure your construction name isn't already taken. In Class 37, names like 'Reliable' or 'Supreme' are often contested. We provide a 'Registrability Report' within hours, helping you avoid legal landmines before you spend on stationary and site boards.</p>
                                                </div>
                                            </div>
                                            {/* Step 2 */}
                                            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-8 rounded-3xl border-2 border-transparent hover:border-[rgb(110,94,147)] transition-all">
                                                <div className="bg-[rgb(74,59,115)] text-white w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg flex-shrink-0">02</div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-3 font-sans">Expert TM-A Drafting</h3>
                                                    <p className="text-base text-gray-600">Filing for construction requires a specialized 'Statement of Services'. We ensure your application covers everything from 'Civil Works' to 'Building Maintenance', using legal terminology that maximizes your protective scope while minimizing examiner queries.</p>
                                                </div>
                                            </div>
                                            {/* Step 3 */}
                                            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-8 rounded-3xl border-2 border-transparent hover:border-[rgb(110,94,147)] transition-all">
                                                <div className="bg-[rgb(74,59,115)] text-white w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg flex-shrink-0">03</div>
                                                <div>
                                                    <h3 className="text-xl font-bold mb-3 font-sans">Examination Response</h3>
                                                    <p className="text-base text-gray-600">If the Registrar issues a Section 9 or 11 objection, our attorneys jump into action. We draft comprehensive legal replies, often attending hearings to explain the distinctiveness of your contractor brand and its established market presence.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="legal-requirements" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Legal Pillars: Distinctiveness & Prior Use
                                        </h2>
                                        <p className="mb-6">
                                            To successfully register a trademark in Class 37, your brand must stand out from the crowd. The Trademark Registry often rejects names that are purely descriptive of the services (e.g., "Best Quality Repairs").
                                        </p>
                                        <p className="mb-6">
                                            <strong>Distinctiveness</strong> is key. Combine common industry terms with unique identifiers or visual logos to create a mark that is "Capable of Distinguishing." If you have been using a name for decades, we help you file a 'User Affidavit' supported by project invoices and tax returns to prove that your mark has acquired distinctiveness through long-term market presence.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Prior Use</strong> is a powerful defensive tool in Indian law. Even if you haven't registered, if you were the first to use a name in a specific region, you have rights over it. However, registration turns these common-law rights into statutory rights, making it significantly easier and cheaper to stop infringers.
                                        </p>
                                    </section>

                                    <section id="search-importance" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Strategic Trademark Search: Avoiding Foundation Failures
                                        </h2>
                                        <p className="mb-6 max-w-4xl mx-auto text-center opacity-80 font-medium italic">
                                            A building is only as strong as its foundation. A brand search is the foundation of your IP security.
                                        </p>
                                        <p className="mb-6 text-center">
                                            We don't just search for exact names. We look for phonetic similarities (e.g., 'Build' vs 'Billed') and visual similarities in logos. In the construction sector, where region-specific firms are common, we cross-check records to ensure the name you choose doesn't conflict with a major player in another state who might have national expansion plans.
                                        </p>
                                        <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 my-10 shadow-sm">
                                            <h4 className="flex items-center text-blue-800 font-bold mb-4 text-xl">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3" />
                                                The Crossing Classes Check
                                            </h4>
                                            <p className="text-blue-900 leading-relaxed font-normal">
                                                We also verify Class 42 (Design) and Class 35 (Business Consultancy) because many construction companies provide these services under the same name. Our comprehensive search approach eliminates the risk of being blindsided by a design firm with a similar name.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="documents-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Checklist for Filing a Class 37 Trademark
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all">
                                                <h3 className="font-bold text-xl text-[rgb(110,94,147)] mb-6">For Individual Contractors</h3>
                                                <ul className="space-y-4 text-sm text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> PAN and Aadhaar for identity verification.</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> MSME Udyam Certificate (Crucial for fee discount).</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> Logo JPG/PNG for device mark filing.</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> User Affidavit (if claiming prior use).</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all">
                                                <h3 className="font-bold text-xl text-gray-500 mb-6">For Pvt Ltd/LLP/Partnerships</h3>
                                                <ul className="space-y-4 text-sm text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> Certificate of Incorporation or Partnership Deed.</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> Board Resolution authorizing a signatory.</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> MSME Certificate (for corporate fee discount).</li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> Signed Power of Attorney (Form 48).</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="objections-handling" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Registry Objections: Navigating the Legal Scaffolding
                                        </h2>
                                        <p className="mb-6">
                                            The Trademark Registry often flags construction names for being "Descriptive" (Section 9) or "Confusingly Similar" (Section 11). Handling these requires specialized legal drafting.
                                        </p>
                                        <p className="mb-6">
                                            In a <strong>Section 9 Objection</strong>, we argue that your name has become a household name in your region or that the logo is sufficiently unique to override the descriptiveness of the words. In a <strong>Section 11 Objection</strong>, we provide 'Co-existence Agreements' or highlight differences in the actual services provided (e.g., one firm constructs roads while the other repairs cars) to prove there is no likelihood of consumer confusion.
                                        </p>
                                    </section>

                                    <section id="global-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Madrid Protocol: Building a Global Engineering Brand
                                        </h2>
                                        <p className="mb-6">
                                            Indian infrastructure firms are now competing on the global stage, especially in the Middle East, Africa, and Southeast Asia. If you are tendering for international projects, your brand name must be protected in those jurisdictions.
                                        </p>
                                        <p className="mb-6">
                                            The <strong>Madrid Protocol</strong> allows you to file a single international application in India to seek trademark protection in over 120 countries. This is highly cost-effective and simplifies the management of an international IP portfolio. We help you map out your global expansion plan and secure your brand in all target markets simultaneously.
                                        </p>
                                        <div className="bg-[#0C002B] p-12 rounded-[3.5rem] text-white my-12 relative overflow-hidden shadow-2xl">
                                            <h3 className="text-3xl font-bold mb-6 text-indigo-400">Expansion Strategy</h3>
                                            <p className="text-lg opacity-80 leading-relaxed font-light">
                                                If you provide specialized repair services for patented machinery, protect your brand in the countries where those machines are manufactured. It prevents local copycats from posing as your "Authorized Service Representative."
                                            </p>
                                            <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 bg-[rgb(74,59,115)] rounded-full blur-[80px] opacity-20"></div>
                                        </div>
                                    </section>

                                    <section id="anti-counterfeiting" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Defending Service Identity: Countering 'Impersonator' Firms
                                        </h2>
                                        <p className="mb-6">
                                            The most common form of "Counterfeiting" in the construction sector is not a fake product, but a fake service provider. Unqualified contractors often use the name of a reputable firm to win trust and jobs. This leads to poor-quality work and massive legal liability for the original brand owner.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark in Class 37 allows you to take immediate legal action against such impersonators. You can secure 'John Doe' orders or ex-parte injunctions to stop them from using your name, protecting your reputation and ensuring that your clients receive the service quality they expect from your brand.
                                        </p>
                                    </section>

                                    <section id="licensing-franchise" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Licensing & Franchise Models: Scaling Your Service Empire
                                        </h2>
                                        <p className="mb-6">
                                            In the maintenance and repair world, franchising is a highly successful model. Whether it's a car repair chain or an AC maintenance network, you can scale rapidly by licensing your brand to local partners. This is only possible if you own a registered trademark.
                                        </p>
                                        <p className="mb-6">
                                            We assist in drafting <strong>Service Licensing Agreements</strong> that protect your brand equity. We ensure that franchisees adhere to your quality standards and that the license is revocable if the service quality fails, ensuring that your national brand remains respected regardless of which partner is executing the work.
                                        </p>
                                    </section>

                                    <section id="valuation-asset" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Brand Valuation: The Multi-Crore Goodwill of Build Firms
                                        </h2>
                                        <p className="mb-6">
                                            A construction company's balance sheet is more than its plant and machinery. A huge portion of a firm's value is stored in its 'Brand Weight'. Major players like L&T or Tata Projects have brand values that often exceed the value of their physical assets.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark in Class 37 is a 'Tangible Financial Asset'. It can be used as collateral for bank loans, its value can be monetized during a corporate buyout, and it provides significant tax advantages through amortization. Your brand is not just a name; it is the most valuable property you will ever build.
                                        </p>
                                    </section>

                                    <section id="pricing-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Transparent Pricing for Build Professionals
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-8 my-12">
                                            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 text-center flex flex-col items-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md rotate-6">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Official Gov. Fee</h4>
                                                <p className="text-sm opacity-60 mb-8 font-medium italic">Standard Class 37 Registry Fee.</p>
                                                <div className="space-y-4 w-full text-center">
                                                    <div className="flex justify-between p-4 bg-white rounded-2xl border border-gray-100">
                                                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">MSME/Individuals</span>
                                                        <span className="font-black text-xl">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between p-4 bg-white rounded-2xl border border-gray-100">
                                                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Standard Companies</span>
                                                        <span className="font-black text-xl">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-10 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl text-center flex flex-col items-center relative overflow-hidden">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-2xl flex items-center justify-center mb-6 shadow-md -rotate-6">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">IPR Karo Prof. Fee</h4>
                                                <p className="text-sm opacity-70 mb-8 font-medium italic">Expert filing for the build sector.</p>
                                                <div className="flex items-center justify-center p-6 bg-white/10 rounded-2xl backdrop-blur-md w-full border border-white/10">
                                                    <span className="text-3xl font-black italic underline decoration-4 underline-offset-8">₹2,999</span>
                                                </div>
                                                <p className="mt-8 text-[10px] opacity-60 font-medium leading-relaxed italic">Includes detailed Class 37 search, multi-class advice, precision drafting, and 24/7 legal support.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Industry Standard in Protection
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-50 shadow-sm hover:shadow-xl hover:border-[rgb(110,94,147)] transition-all flex flex-col">
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div className="flex text-yellow-500">
                                                            {[...Array(review.rating)].map((_, i) => (
                                                                <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                            ))}
                                                        </div>
                                                        <FontAwesomeIcon icon={review.icon} className="text-[rgb(110,94,147)] text-2xl opacity-10" />
                                                    </div>
                                                    <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center pt-6 border-t border-gray-50">
                                                        <div className="w-12 h-12 bg-[rgb(110,94,147)] rounded-2xl flex items-center justify-center text-white font-bold mr-4 rotate-3">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900">{review.name}</p>
                                                            <p className="text-[10px] text-[rgb(110,94,147)] font-black uppercase tracking-widest">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Industry Insights: Construction IP FAQ
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

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a1a1a] rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Armor Your Building Authority</h2>
                                            <p className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                                                Don't let your hard-earned reputation crumble. Partner with India's most precise IP firm to secure your Class 37 legacy today.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-12 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg uppercase tracking-widest">
                                                        Consult Build IP Specialist
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-white/5 border border-white/20 hover:border-white text-white font-bold py-5 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group">
                                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3 rotate-12 group-hover:rotate-0 transition-transform" />
                                                        +91-9289707648
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                        <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 bg-gray-600 rounded-full blur-[120px] opacity-10"></div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2rem] shadow-2xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Secure Your Service Mark Today</h3>
                                <p className="text-xs opacity-60 mb-8 leading-relaxed relative z-10 font-light italic">
                                    In Class 37, similarity leads to instant legal liability. Get a professional search report in 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-[10px] uppercase tracking-wider text-center">
                                        Check Service Mark Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/5 relative z-10 text-center">
                                    <p className="text-[10px] opacity-40 uppercase tracking-widest mb-3 font-semibold">Specialist Hotline</p>
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-[2rem] shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-tighter text-sm">Our Industry Focus</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-raw-agricultural-products" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-[rgb(110,94,147)] rounded-full mr-4 group-hover:scale-150 transition-all"></div>
                                            <span className="font-bold text-base">Raw Agri Products</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-beverages" className="group flex items-center text-gray-600 hover:text-[rgb(74,59,115)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(74,59,115)] transition-all"></div>
                                            <span className="font-bold text-base">Beverages</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-alcoholic-drinks" className="group flex items-center text-gray-600 hover:text-[rgb(74,59,115)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(74,59,115)] transition-all"></div>
                                            <span className="font-bold text-base">Alcoholic Drinks</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-tobacco" className="group flex items-center text-gray-600 hover:text-[rgb(74,59,115)] transition-all">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(74,59,115)] transition-all"></div>
                                            <span className="font-bold text-base">Tobacco Products</span>
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
