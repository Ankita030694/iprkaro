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
    faShieldAlt,
    faBalanceScale,
    faRocket,
    faMoneyBillWave,
    faCertificate,
    faFileSignature,
    faPhone,
    faStar,
    faPaintRoller,
    faFlask,
    faBuilding,
    faTags,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Paints & Coatings | Protect Your Paint Brand',
    description: 'Exhaustive guide to trademark registration for paints, coatings, and varnishes in India. Secure your brand name and logo under Class 2 with IPR Karo experts.',
    keywords: [
        'trademark for paints',
        'paints and coatings trademark india',
        'class 2 trademark registration',
        'paint brand protection india',
        'industrial coatings trademark',
        'decorative paints brand registration',
        'trademark search for paints',
        'protect paint brand name india',
        'chemical coatings intellectual property',
        'varnish brand legal protection'
    ],
    openGraph: {
        title: 'Expert Trademark Registration for Paints & Coatings Brands',
        description: 'Secure your chemical identity with India\'s leading IP legal team. 100% online process, expert filing for paint manufacturers.',
        url: 'https://www.iprkaro.com/trademark-for-paints-coatings',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-paints-coatings',
    },
};

const tocSections = [
    { id: 'industry-overview', title: 'Industry Overview' },
    { id: 'importance-of-trademark', title: 'Why It Matters' },
    { id: 'trademark-class-2', title: 'Class 2 Explained' },
    { id: 'registration-process', title: 'Registration Process' },
    { id: 'documents-checklist', title: 'Required Documents' },
    { id: 'handling-objections', title: 'Overcoming Objections' },
    { id: 'brand-valuation', title: 'Brand Valuation' },
    { id: 'enforcement-strategies', title: 'Protective Strategies' },
    { id: 'global-protection', title: 'Global Registration' },
    { id: 'costs-and-fees', title: 'Costs and Fees' },
    { id: 'reviews', title: 'Reviews' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Which trademark class is applicable for paints and coatings in India?",
        answer: "Trademark Class 2 is the primary class for paints, varnishes, lacquers, and preservatives against rust and wood deterioration. It also covers colorants, dyes, and raw natural resins."
    },
    {
        question: "Does Class 2 cover industrial coatings for specialized machinery?",
        answer: "Yes, Class 2 covers a wide range of industrial coatings, including anti-corrosive preparations, waterproof paints, and protective coatings for various surface types."
    },
    {
        question: "Can I trademark a specific color shade for my paint brand?",
        answer: "While you can attempt to trademark a 'color mark', it is legally challenging and requires proving that the specific shade has acquired distinctiveness solely associated with your brand. Usually, people trademark the brand name and logo first."
    },
    {
        question: "Is MSME certificate useful for paint manufacturers in trademark filing?",
        answer: "Absolutely. For Small Enterprises and Startups with an MSME (Udyam) certificate, the government fee is reduced by 50 percent, bringing it down from 9000 to 4500 rupees per class."
    },
    {
        question: "How long is a trademark valid for a coatings company?",
        answer: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years to maintain exclusive ownership."
    },
    {
        question: "What if my company provides painting services along with selling paints?",
        answer: "Selling the physical paint falls under Class 2. However, providing painting or application services falls under Class 37. For full protection, we recommend filing in both classes."
    },
    {
        question: "Can I use the TM symbol immediately after applying?",
        answer: "Yes, once you receive the application number from the Trademark Registry, you can start using the TM symbol next to your brand name to put the world on notice."
    },
    {
        question: "How do I deal with another brand using a similar name for chemicals?",
        answer: "If they are in a related class like Class 1 (Chemicals), there might be a conflict. A through search helps identify such risks before you invest in branding."
    },
    {
        question: "Do I need a trademark for each variant of paint I sell?",
        answer: "No, one trademark for the principal brand name covers all products sold under that brand. However, if you have sub-brands or unique product names, you might consider separate registrations."
    },
    {
        question: "What are the common reasons for rejection in the paint industry?",
        answer: "Rejections often occur if the name is descriptive (e.g., 'Shining Wall Paint') or if it is too similar to an existing established brand in the chemical sector."
    }
];

const reviews = [
    {
        name: "Arjun Mittal",
        role: "MD, Vista Coatings",
        text: "The search report for our industrial primer brand was exceptionally thorough. IPR Karo helped us avoid a major naming conflict early on.",
        rating: 5
    },
    {
        name: "Sonia Gupta",
        role: "CEO, EcoPaint India",
        text: "Filing was smooth and 100% online. We got our application number the same day and started our branding campaign with confidence.",
        rating: 5
    },
    {
        name: "Vikram Shah",
        role: "Director, ProShield Solutions",
        text: "Navigating Class 2 and Class 37 for our hybrid business model was complex, but their team handled it with professional ease.",
        rating: 5
    }
];

export default function TrademarkPaintsCoatingsPage() {
    const breadcrumbItems = [
        { label: "Trademark for Paints & Coatings", href: "/trademark-for-paints-coatings" },
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
        "headline": "Trademark Registration for Paints & Coatings Industry in India",
        "description": "The definitive guide to protecting your paint and coating brand. Covers Class 2 requirements, registration steps, costs, and legal strategies.",
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
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
                "name": "Trademark for Paints & Coatings",
                "item": "https://www.iprkaro.com/trademark-for-paints-coatings"
            }
        ]
    };

    const organizationSchema = {
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
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Trademark Registration for Paints & Coatings",
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
                            Coloring Your Future: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Trademark Registration for Paints & Coatings
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the vibrant world of surface finishes, your brand name is your promise of durability and brilliance. Secure your paint, varnish, and industrial coating identity with India's leading IP legal team. Professional Class 2 protection, 100% online.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Secure Your Brand Now
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
                        <aside className="hidden lg:block sticky top-32 transition-all duration-300">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</h4>
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

                                    {/* Content will be injected here */}
                                    <section id="industry-overview" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Evolution of India's Paints and Coatings Sector
                                        </h2>
                                        <p className="mb-6">
                                            The Indian paints and coatings industry is a dynamic and essential component of the nation's infrastructure and manufacturing landscape. Over the last few decades, it has transformed from a commodity driven market into a highly sophisticated, branding oriented ecosystem. This shift is primarily driven by the rapid pace of urbanization, a booming real estate sector, and the ever growing demands of the automotive and industrial segments. Whether it is a decorative emulsion for a modern home or a high performance anti corrosive coating for an offshore oil rig, the quality of the finish is everything.
                                        </p>
                                        <p className="mb-6">
                                            For a manufacturer or an entrepreneur in this space, your brand identity is more than just a name on a bucket. It is a symbol of durability, aesthetics, and reliability. When a consumer or a project manager chooses a specific brand of paint, they are essentially buying peace of mind. They are trusting that the coating will protect their surfaces for years against the harsh Indian weather, moisture, and wear. This level of psychological commitment from the consumer is built over years of consistent quality and strategic branding. This is why <strong>Trademark Registration for Paints and Coatings</strong> is not just a legal requirement but a fundamental pillar of business success.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "In the world of surface protection, your trademark is the legal guarantee that your formulations and your reputation are shielded from unauthorized exploitation."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The competition in the Indian market is fierce. Large multi national corporations compete with established domestic giants and hundreds of regional players. In such a fragmented market, brand confusion is a real and present danger. Small scale entities often attempt to mimic the logos or color schemes of successful brands to mislead consumers. Without a registered trademark, fighting these infringers is a long and expensive uphill battle. By securing your brand early, you create a legal moat that prevents others from diluting your market share and confusing your loyal customer base.
                                        </p>
                                    </section>

                                    <section id="importance-of-trademark" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Why Trademark Protection is Crucial for Chemical and Coating Brands
                                        </h2>
                                        <p className="mb-8">
                                            The intellectual property landscape in India is governed by the Trade Marks Act of 1999. This legislation provides a comprehensive shield for businesses to protect their unique identifiers. For the paint industry, where product performance is often invisible until years later, the brand name is the primary indicator of quality.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Preventing Brand Hijacking</h3>
                                                <p className="text-sm leading-relaxed">In the absence of a registration, a malicious competitor could potentially register your long standing brand name in their own name and then legally force you to stop using it. This is a nightmare scenario that can be avoided with timely filing.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faTags} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Enhancing Business Valuation</h3>
                                                <p className="text-sm leading-relaxed">Investors and venture capitalists value a company based on its intellectual assets. A registered trademark is a tangible representation of your goodwill and brand equity, making your company more attractive for funding or acquisition.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">National and Global Reach</h3>
                                                <p className="text-sm leading-relaxed">Registration provides you with pan India rights. Furthermore, an Indian registration serves as the foundation for international expansion through the Madrid Protocol, allowing you to protect your brand in over 130 countries.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faLightbulb} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Consumer Clarity</h3>
                                                <p className="text-sm leading-relaxed">A clear and protected brand name ensures that consumers are getting the genuine product they asked for. It eliminates confusion at the retail counter where multiple similar looking products are often displayed together.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="trademark-class-2" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Mastering Trademark Class 2: The Core Category for Coatings
                                        </h2>
                                        <p className="mb-6">
                                            For the purpose of trademark registration, goods and services are divided into 45 classes. For any company involved in the manufacturing of liquids or powders used for coloring or protecting surfaces, <strong>Trademark Class 2</strong> is the most critical category. Getting the classification right is essential because a trademark is only protected for the classes in which it is registered.
                                        </p>
                                        <p className="mb-6">
                                            Class 2 is remarkably broad and covers a wide spectrum of products. It includes paints for decorative and industrial use, varnishes that provide a protective finish, and lacquers that offer a high gloss. It also encompasses preservatives against rust and against the deterioration of wood, which are vital in the construction and furniture industries. Furthermore, this class includes colorants, dyes, and mordants used for various industrial applications.
                                        </p>
                                        <div className="bg-gray-50 border-2 border-[rgb(110,94,147)] p-8 rounded-3xl my-10">
                                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Detailed Breakdown of Class 2 Goods:</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-start">
                                                    <div className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">1</div>
                                                    <p><strong>Paints:</strong> All types of pigments, emulsions, enamels, and coatings used for houses, vehicles, equipment, and artistic purposes.</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">2</div>
                                                    <p><strong>Varnishes and Lacquers:</strong> Protective and decorative surface finishes for different materials including wood, metal, and stone.</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">3</div>
                                                    <p><strong>Preservatives:</strong> Substances that prevent rust on metal surfaces and rot or decay in wood products. These are crucial for long term structural integrity.</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">4</div>
                                                    <p><strong>Colorants and Dyes:</strong> Pigments and coloring materials used across industries, including textiles and food colorants that are not for human consumption.</p>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">5</div>
                                                    <p><strong>Natural Resins:</strong> Raw resins used as raw materials in the production of paints and various industrial coatings.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="mb-6">
                                            It is also important to identify what Class 2 does not cover. For instance, the raw chemicals used as binders or solvents in the manufacturing process often fall under Class 1. If your company provides painting services or surface preparation services, those are classified as services under Class 37. At IPR Karo, we perform a thorough 'Cross Class Analysis' to ensure that your business model is protected from every possible angle, preventing any legal gaps that competitors could exploit.
                                        </p>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Comprehensive Roadmap to Registration
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="font-bold text-xl mb-4 text-gray-900">Step 1: The Strategic Name Search</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Before you print thousands of labels or launch a digital campaign, you must know if the name is available. Our expert search process uses advanced AI to scan millions of records in the IP India database. We go beyond simple name matches to look for phonetic similarities and visual overlaps. In the paint industry, where many names evoke 'color', 'shine', or 'shield', a deep search is critical to ensure you are not stepping on the toes of an existing player.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="font-bold text-xl mb-4 text-gray-900">Step 2: Drafting and Filing Form TM-A</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once the search is clear, we proceed to draft the official application. This document requires precision in the 'specification of goods'. We ensure that the description covers the full range of your current and future products within Class 2. As soon as we file the application online, you receive an official acknowledgment and the right to use the ™ symbol. This immediately boosts your brand's credibility and warns others that you have initiated the legal protection process.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="font-bold text-xl mb-4 text-gray-900">Step 3: Navigating the Legal Examination</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Trademark Registrar will examine your application for any potential conflicts or legal deficiencies. If they raise any questions—known as a trademark objection—it is usually under Section 9 (Absolute Grounds) or Section 11 (Relative Grounds). Our team of senior trademark attorneys specializes in drafting robust, evidence based responses. We present arguments citing legal precedents and market usage to prove that your mark is distinctive and deserves registration.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Documentation Checklist: Preparing for Success
                                        </h2>
                                        <p className="mb-8">
                                            The efficiency of the registration process often depends on the accuracy of the initial documentation. Providing a clean and complete set of documents ensures there are no unnecessary delays in the processing of your application.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    For Individuals and Startups
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Scanned copy of the Applicant's PAN and Aadhaar Card.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Digital file of the proposed brand logo or brand name.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>MSME or Udyam Certificate (To avail the 50 percent fee discount).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Signed Power of Attorney authorizing us to file on your behalf.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-all">
                                                <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    For Partnership Firms and Companies
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Certificate of Incorporation or Partnership Deed copy.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Board Resolution or authorization letter for the signatory.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Company's PAN card and GST certificate details.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Proof of brand usage if you are claiming a 'User Date'.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="handling-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Overcoming Objections: The Expert Legal Approach
                                        </h2>
                                        <p className="mb-6">
                                            A significant percentage of trademark applications in the paint industry encounter some form of official objection. This is not necessarily a failure but a standard part of the examination process. The Registrar aims to prevent companies from owning common or descriptive terms that other businesses should also be free to use.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Absolute Grounds (Section 9):</strong> These objections often occur when a brand name is seen as too descriptive of the product's quality or characteristics. For example, trying to trademark 'Ultra White Wall Paint' would likely face an objection because the words simply describe the product. To overcome this, we argue for 'Acquired Distinctiveness'. We provide evidence like advertisements, sales invoices, and public recognition to show that through long term and extensive use, the public now associates these words exclusively with your brand.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Relative Grounds (Section 11):</strong> This is the most common hurdle in a mature industry. It happens when the Registrar finds an existing mark that is phonetically or visually similar to yours. Our legal strategy involves a detailed 'Comparative Analysis'. We demonstrate how your logo, color palette, target audience, and even the price point are distinct from the cited mark. We work to prove that there is no likelihood of 'Consumer Confusion', which is the ultimate test in trademark law.
                                        </p>
                                    </section>

                                    <section id="brand-valuation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Power of Brand Valuation and Asset Management
                                        </h2>
                                        <p className="mb-6">
                                            As your paint brand grows and expands across different states in India, its tangible assets—the factories, the machinery, the inventory—will increase in value. However, in many successful business exits or expansions, the 'Intangible Assets' often hold higher value. Your trademark is the legal container for your company's 'Goodwill'. This is the value of the trust that contractors, architects, and homeowners have in your brand initials.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The ROI of Registration</h3>
                                            <p className="opacity-80 leading-relaxed italic mb-6">
                                                A registered trademark transforms a name into a balance sheet asset. It can be used as collateral for business loans, it can be franchised to local manufacturing partners, and it can be sold as a standalone property. In the coatings industry, where brand loyalty is deep, the return on investment for a trademark registration is practically infinite.
                                            </p>
                                            <p className="text-sm opacity-60">
                                                Leading companies often spend millions in building their brand; the registration is the only way to ensure that investment is not legally stolen by a copycat.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="enforcement-strategies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Vigilant Enforcement: Protecting Your Domain in the Marketplace
                                        </h2>
                                        <p className="mb-6">
                                            Registration is just the first victory. In a world with thousands of new manufacturers entering every year, you must actively police your trademark. The Indian IP system is based on the principle of the 'vigilant owner'. If you do not actively stop others from using similar marks, your mark eventually becomes 'generic' or 'weak', and you lose the power to stop anyone at all.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we provide <strong>Trademark Watch Services</strong>. This is an automated and human intelligence system that scans the weekly Trademark Journal for any newly filed applications that conflict with your rights. When we spot a threat, we notify you immediately and file a 'Notice of Opposition' within the four month public window. This prevents the infringing mark from ever getting registered, saving you from a costly and time consuming courtroom drama in the future.
                                        </p>
                                        <p className="mb-6">
                                            If you discover an existing infringement in the physical market or on an ecommerce platform, our internal legal team assists in issuing a 'Cease and Desist' notice. This formal legal warning is often enough to stop a copycat in their tracks. For more stubborn infringers, we facilitate the process of obtaining 'Interim Injunctions' from the courts, which legally forces them to stop their operations immediately and withdraw their products from the market.
                                        </p>
                                    </section>

                                    <section id="global-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Going Beyond Borders: International Protection for Coatings
                                        </h2>
                                        <p className="mb-6">
                                            With India emerging as a global hub for chemical manufacturing, many domestic firms are now exporting their specialized coatings to markets in Southeast Asia, the Middle East, and beyond. If you are selling your products in a foreign territory without a local registration, you are at risk of having your brand 'squatted' upon by local entities in those countries. These entities may register your brand name locally and then demand a hefty 'ransom' to transfer it back, or worse, they may block your imports entirely, citing trademark infringement.
                                        </p>
                                        <p className="mb-6">
                                            The <strong>Madrid Protocol</strong> is an international treaty that makes global protection much simpler and far more cost effective. If you have an Indian trademark application or registration, you can use it as a 'Base Mark' to file for protection in multiple countries around one hundred and thirty nations through a single application. This centralized system managed by the World Intellectual Property Organization (WIPO) allows you to manage your entire global portfolio, including renewals and changes of address, through one portal. We specialize in assisting Indian manufacturers in building a worldwide IP portfolio that ensures their exports are protected from the moment they land in a foreign port.
                                        </p>

                                        <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">Trademark Lifecycle Management: From Application to Renewal</h3>
                                        <p className="mb-6">
                                            Securing a trademark is not a one time activity but a continuous lifecycle management process. For a paint company that may have dozens of product brands under one umbrella, keeping track of renewal dates, monitoring the market for infringements, and updating user date evidence is a significant administrative task. A trademark in India is valid for ten years from the date of the application. The renewal window opens six months before the expiry date. Missing this window can lead to the mark being 'removed' from the register, which is a catastrophic event for an established brand.
                                        </p>
                                        <p className="mb-6">
                                            We recommend that companies maintain a centralized 'IP Register' that lists every trademark, the classes it covers, the current status, and the next renewal date. Furthermore, as you expand your product lines, you must decide whether to file for new trademarks or rely on existing ones. For example, if 'Brand X' which was originally for wall paints now includes a 'Brand X Surface Primer', you may need to file an additional application if the original description was too narrow. This proactive management ensures that your legal umbrella expands at the same pace as your commercial operations.
                                        </p>

                                        <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">Legal Precedents: Understanding the 'Nervous' Nature of Chemical Trademarks</h3>
                                        <p className="mb-6">
                                            The Indian courts have often dealt with trademark disputes in the chemical and pharmaceutical sectors with a higher degree of scrutiny. This is because confusion in these sectors can lead to financial loss or safety risks. In the paint industry, while the safety risks are lower than in medicine, the financial implications for a large scale construction project using the 'wrong' type of specialized coating due to brand confusion are enormous.
                                        </p>
                                        <p className="mb-6">
                                            In several landmark cases, the courts have held that for 'goods of the same description'—which paints and varnishes certainly are—even a slight phonetic similarity can be grounds for an injunction. For instance, if a brand is called 'ColorShine' and a competitor launches 'KalaShine', the court is likely to rule in favor of the original owner because the average consumer or contractor might not distinguish between the two in a noisy marketplace or over a phone call. Understanding these legal nuances allows us to guide you in choosing names that are not just beautiful, but legally bulletproof from day one.
                                        </p>

                                        <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">Advanced Brand Valuation Methodologies</h3>
                                        <p className="mb-6">
                                            How do you put a price tag on a brand name? In the paints and coatings industry, brand valuation is typically done using three main approaches. The first is the <strong>'Cost Approach'</strong>, which calculates the total investment made in building the brand, including advertising, design, and legal fees. However, this often underestimates the true value because it doesn't account for market position.
                                        </p>
                                        <p className="mb-6">
                                            The second is the <strong>'Market Approach'</strong>, which looks at what similar brands have been sold for in recent industry acquisitions. This is more realistic but requires access to confidential transaction data. The third and most sophisticated is the <strong>'Income Approach'</strong>, specifically the 'Royalty Relief Method'. This calculates how much the company would have to pay in royalties to use the brand name if it didn't already own it. By discounting these future 'saved' royalties to today's value, we can arrive at a highly accurate financial figure for your trademark's worth. Seeing your brand value in crore of rupees often changes the way founders look at their IP legal budget.
                                        </p>

                                        <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">Protecting Specialized Coatings: Marine, Aerospace, and Beyond</h3>
                                        <p className="mb-6">
                                            The paints and coatings industry is not a monolith; it is a collection of highly specialized niches. For companies manufacturing marine coatings that prevent biofouling on ship hulls, or aerospace coatings that withstand extreme temperature fluctuations, the brand name carries a significant amount of specialized technical trust. In these sectors, the 'Specification of Goods' in the trademark application must be extremely precise.
                                        </p>
                                        <p className="mb-6">
                                            For instance, marine coatings often require resistance to saline environments and specific chemicals. A trademark application for such products should explicitly mention 'marine anti fouling compositions' or 'sea water resistant protective coatings'. Similarly, for the burgeoning electric vehicle (EV) market in India, specialized 'battery fire retardant coatings' and 'thermal management paints' are becoming distinct categories. Protecting these names prevents competitors from claiming your technical innovations through confusingly similar branding.
                                        </p>
                                        <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">Regulatory Synergy: BIS Standards and Trademark Quality</h3>
                                        <p className="mb-6">
                                            In India, the Bureau of Indian Standards (BIS) often mandates specific quality benchmarks for various types of paints and enamels. While a BIS certification is about technical compliance, a trademark is about commercial origin. However, the two often work in tandem. When a company advertises its products as 'BIS Certified' under a specific registered trademark, it creates a powerful 'Halo Effect' of quality and legality.
                                        </p>
                                        <p className="mb-6">
                                            We often advise our clients to mention their adherence to quality standards like ISO 9001 or specific BIS marks in their evidence of use documents when responding to trademark objections. This demonstrates to the Registrar that the brand is not a fly by night operator but a serious industrial entity committed to national standards. This synergy between regulatory compliance and intellectual property protection is a hallmark of a mature and well managed chemical business.
                                        </p>

                                        <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">Franchising and Licensing: Scaling the Paint Business</h3>
                                        <p className="mb-6">
                                            The capital intensive nature of paint manufacturing often leads companies to adopt a 'Hub and Spoke' model. A central brand owner may license its technology and its trademark to regional manufacturing units or franchise partners. In such scenarios, the <strong>Trademark Licensing Agreement</strong> is the most critical document. It ensures that the licensee produces the paint exactly as per the brand owner's specifications and does not dilute the brand's quality.
                                        </p>
                                        <p className="mb-6">
                                            Without a registered trademark, a licensing agreement has very little legal teeth. If a licensee starts selling sub standard product under your name, your only recourse might be a breach of contract, which is far harder to prove and enforce than trademark infringement. A registered mark allows the brand owner to exercise strict 'Quality Control', which is a mandatory requirement under Indian law to maintain the validity of a licensed trademark.
                                        </p>

                                        <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">The Digital Frontier: Online Brand Protection</h3>
                                        <p className="mb-6">
                                            With the rise of ecommerce platforms like Amazon, Flipkart, and specialized industrial B2B portals like IndiaMart, the paint industry has moved online. While this opens up new markets, it also makes brand monitoring more complex. Counterfeiters often use stolen brand images and descriptions to sell fake or expired paint products online.
                                        </p>
                                        <p className="mb-6">
                                            Platforms like Amazon have a 'Brand Registry' program that is only accessible to companies with a registered trademark. Once you are part of this program, you have powerful tools to instantly take down infringing listings without having to go through a long legal process. At IPR Karo, we assist our clients in integrating their registered trademarks with these digital registries, providing a 'Digital Shield' that protects their online sales and prevents customer disappointment.
                                        </p>

                                        <h3 className="text-xl font-bold mt-10 mb-6 text-gray-900">Conclusion: The Lasting brilliance of a Protected Brand</h3>
                                        <p className="mb-6">
                                            The journey of building a paint and coatings brand is one of patience, chemistry, and market intuition. It takes years to formulate the perfect product and even longer to earn the trust of the master painters and contractors of India. That trust is your most precious commodity. It is the intangible glue that holds your business together during market fluctuations and competitive pressures.
                                        </p>
                                        <p className="mb-6">
                                            By choosing to register and protect your trademark, you are making a profound statement about the future of your company. You are declaring that your brilliance is not for hire or for imitation. You are building an asset that will outlast your current product lines and even your physical facilities. At IPR Karo, we are honored to be the custodians of that brilliance, providing the legal expertise and the technological tools required to ensure your brand remains as vivid and durable as the coatings you manufacture.
                                        </p>
                                    </section>

                                    <section id="costs-and-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Financial Planning: Transparent Pricing for Brand Security
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            We believe that legal protection should be accessible and transparent. Our pricing model is designed to provide high end legal expertise without the traditional high end cost.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Official Government Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6">These are the statutory fees payable to the Trademark Registry for each class of goods applied for.</p>
                                                <div className="space-y-4 w-full text-left">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Individuals / MSMEs</span>
                                                        <span className="text-lg font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Non MSME Companies</span>
                                                        <span className="text-lg font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">IPR Karo Service Fees</h4>
                                                <p className="text-sm opacity-70 mb-6">Professional processing from expert search to final registration tracking.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                                                        <span className="text-xs font-bold uppercase tracking-tight opacity-70">Professional Filing</span>
                                                        <span className="text-lg font-black">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2">Includes comprehensive AI search, drafting, filing, and status updates through our secure dashboard.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Future Proofing Your Coatings Brand: A Long Term Perspective
                                        </h2>
                                        <p className="mb-6">
                                            The paint industry is currently witnessing a 'Green Revolution'. There is an increasing focus on Low VOC (Volatile Organic Compounds), non toxic formulations, and eco friendly packaging. If your brand is pivoting toward these sustainability goals, its identity must reflect that shift. Many manufacturers are creating eco sub brands or new logos to symbolize their green commitment.
                                        </p>
                                        <p className="mb-6">
                                            Every time you launch a new product line or a sub brand, the question of trademark protection must be at the forefront. Waiting until a product goes viral is a risky strategy. The most successful global chemical companies integrate their Intellectual Property strategy into their product R&D (Research and Development) cycle. This ensures that by the time a product reaches the market, its name is legally secured and ready to be defended.
                                        </p>
                                        <p className="mb-6">
                                            In conclusion, <strong>Trademark Registration for the Paints and Coatings sector</strong> is more than a legal checkbox. It is a strategic investment in the future of your company. It secures your market share, builds consumer trust, increases business valuation, and provides a platform for global growth. At IPR Karo, we are committed to being your legal partner in this journey, providing the expertise and technology required to protect your brilliance.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Voices of Success: Our Clients in the Paints & Coatings Sector
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-xs text-gray-500">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Expert Insights: FAQ on Paints and Coatings Trademarks
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Shield Your Coatings Brand Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                In the competitive paint industry, delay is the greatest risk to your identity. Start your official trademark application now.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Consult Expert Now
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" />
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Check Name Availability</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Do not launch your paint brand until you know the name is safe. Get a **Free Search Report** instantly.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                        Start Free Search
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest text-sm">Industrial Sectors</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-chemicals" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Chemicals Industry</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-furniture-shop" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Furniture & Finishes</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-business" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Manufacturing Business</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">All Services</span>
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
