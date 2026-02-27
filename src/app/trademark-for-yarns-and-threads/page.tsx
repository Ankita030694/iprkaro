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
    faMicrochip,
    faLeaf
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Yarns and Threads | Register Class 23 Brand Online',
    description: 'Complete guide to trademark registration for yarns and threads in India. Secure your Class 23 textile brand with expert legal support and 100% online filing.',
    keywords: [
        'trademark for yarns and threads',
        'register yarn brand india',
        'textile thread trademark registration',
        'class 23 trademark search',
        'cotton yarn brand protection',
        'silk thread logo registration',
        'synthetic yarn trademark india',
        'wool thread brand legal protection',
        'embroidery thread trademark',
        'industrial yarn brand security'
    ],
    openGraph: {
        title: 'Premium Trademark Registration for Yarns and Threads',
        description: 'Protect your Class 23 textile assets with India\'s top IP legal team. High-authority brand protection for yarn and thread manufacturers.',
        url: 'https://www.iprkaro.com/trademark-for-yarns-and-threads',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-yarns-and-threads',
    },
};

const tocSections = [
    { id: 'importance-of-trademark', title: 'Why Protect Your Yarn Brand' },
    { id: 'class-23-overview', title: 'Scope of Class 23' },
    { id: 'covered-goods', title: 'List of Covered Goods' },
    { id: 'registration-steps', title: 'Step-by-Step Filing' },
    { id: 'required-docs', title: 'Document Checklist' },
    { id: 'legal-nuances', title: 'Legal Nuances' },
    { id: 'overcoming-objections', title: 'Handling Objections' },
    { id: 'global-strategy', title: 'Global Protection' },
    { id: 'business-valuation', title: 'Brand Valuation' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Which trademark class is applicable for yarns and threads in India?",
        answer: "Yarns and threads used for textile purposes are primarily classified under Class 23 of the International Nice Classification system."
    },
    {
        question: "Does Class 23 cover metallic threads for embroidery?",
        answer: "Yes, embroidery threads, including those made of metal or featuring metallic finishes, are generally covered under Class 23 when used for textile purposes."
    },
    {
        question: "Can I trademark a specific brand of organic cotton yarn?",
        answer: "Absolutely. You can trademark the brand name and logo. However, the term 'Organic Cotton' itself is descriptive and cannot be exclusively owned unless it's part of a distinctive logo."
    },
    {
        question: "What items are included under 'synthetic yarns' in Class 23?",
        answer: "This includes all man-made fibers used for spinning and weaving, such as polyester, nylon, acrylic, and rayon yarns."
    },
    {
        question: "How long does it take to register a Class 23 trademark?",
        answer: "The process typically takes 6 to 12 months if there are no objections or oppositions. Initial filing and use of the TM symbol happen within 24 hours."
    },
    {
        question: "Do I need separate trademarks for silk and wool threads?",
        answer: "No, both silk and wool threads are covered under the same Class 23. You can include both in a single application specification."
    },
    {
        question: "Are there any specific exclusions in Class 23?",
        answer: "Yes, strings for musical instruments (Class 15) and electric wires (Class 9) are excluded, even if they appear thread-like."
    },
    {
        question: "Can I protect a unique color combination for my yarn packaging?",
        answer: "Yes, unique packaging design can be protected as 'Trade Dress' under trademark law, provided it has achieved distinctiveness in the market."
    },
    {
        question: "Why is a trademark important for a yarn exporter?",
        answer: "It prevents 'trademark squatting' in foreign markets and is essential for establishing brand credibility with international textile buyers."
    },
    {
        question: "What is the government fee for Class 23 registration?",
        answer: "The fee is ₹4,500 for individuals/MSMEs/Startups and ₹9,000 for large companies per class."
    },
    {
        question: "Can a spinning mill trademark its name?",
        answer: "Yes, a spinning mill can and should trademark its name to protect its reputation in the B2B textile supply chain."
    },
    {
        question: "What happens if a competitor uses a similar name for sewing thread?",
        answer: "If you have a registered trademark, you can sue for infringement and seek an immediate injunction to stop their sales."
    }
];

const reviews = [
    {
        name: "Rajesh K.",
        role: "CEO, Krishna Textile Mills",
        text: "IPR Karo made our Class 23 registration effortless. Their deep understanding of the textile industry's legal requirements is unmatched.",
        rating: 5
    },
    {
        name: "Anjali M.",
        role: "Founder, Weaver Craft Yarns",
        text: "Fast, transparent, and professional. We got our TM number within a day, allowing us to launch our organic thread line with confidence.",
        rating: 5
    },
    {
        name: "Vikram S.",
        role: "Managing Partner, Indo-Global Fibers",
        text: "Their strategic advice on international trademarking helped us secure our brand across five countries under the Madrid Protocol.",
        rating: 5
    }
];

export default function TrademarkForYarnsAndThreadsPage() {
    const breadcrumbItems = [
        { label: "Trademark for Yarns and Threads", href: "/trademark-for-yarns-and-threads" },
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
        "headline": "2026 Legal Guide: Trademark Registration for Yarns and Threads in India",
        "description": "Exhaustive guide on Class 23 trademark protection for textile manufacturers. Covers registration steps, legal nuances, and global brand strategy.",
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
                "name": "Trademark for Yarns and Threads",
                "item": "https://www.iprkaro.com/trademark-for-yarns-and-threads"
            }
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration for Yarns and Threads",
        "description": "Professional Class 23 trademark filing for cotton, silk, wool, and synthetic yarn brands.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "920"
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
                            The Fabric of Trust: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Elite Trademark Filing for Yarns & Threads
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the competitive textile industry, your brand name is the thread that binds quality to recognition. Protect your yarn and thread assets under Class 23 with India's premier IP specialists. Secure, swift, and strictly compliant.
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
                                            The Strategic Imperative of Trademarking for Yarn and Thread Manufacturers
                                        </h2>
                                        <p className="mb-6">
                                            In the global textile supply chain, identity is everything. From the spinning mills of Coimbatore to the embroidery hubs of Surat, the brand name on a cone of yarn or a spool of thread serves as a silent guarantee of tensile strength, color fastness, and fiber purity. As India solidifies its position as a textile powerhouse, the risk of 'Brand Dilution' and 'Passing Off' has reached unprecedented levels. A manufacturers hard earned reputation for quality can be decimated in weeks if a competitor launches a low quality lookalike product under a deceptively similar name.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Yarns and Threads</strong> is not merely a legal formality; it is a defensive wall built around your market share. In Class 23, where products are often commodities, the brand name is the primary differentiator. When a garment manufacturer orders ten thousand spools of thread, they are not just buying polyester; they are buying the reliability associated with your mark. If that mark is not registered under the Trade Marks Act of 1999, you are essentially operating in a legal vacuum. You have no statutory right to stop others from using your name, leaving you with the long and arduous task of proving 'Passing Off' in common law courts.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "In the textile industry, the brand is the thread that binds the manufacturer to the customer. Without a trademark, that thread is constantly at risk of being cut by unscrupulous competitors."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Furthermore, a registered trademark is a prerequisite for participating in international textile exhibitions and securing orders from global fashion houses. These entities have strict 'Vendor Compliance' protocols that include IP verification. If you cannot prove ownership of your brand, you are often excluded from high value contracts. At IPR Karo, we help yarn producers transition from being local suppliers to global brands by securing their intellectual property with absolute precision.
                                        </p>
                                        <p className="mb-6">
                                            Beyond the physical product, the digital age has brought new challenges. B2B platforms like Indiamart and Alibaba are hotspots for trademark infringement. Having a registration certificate allows you to use 'IP Infringement Report' tools to take down unauthorized listings instantly. This level of control is essential for maintaining price stability and brand integrity in a crowded marketplace.
                                        </p>
                                    </section>

                                    <section id="class-23-overview" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Deep Dive into Trademark Class 23: The World of Textile Fibers
                                        </h2>
                                        <p className="mb-8">
                                            The International Classification of Goods (Nice Classification) designates <strong>Class 23</strong> specifically for yarns and threads for textile use. This class is distinct from Class 22 (raw fibers) and Class 24 (finished fabrics). It represents the intermediate stage of textile production, making it the most critical class for spinning mills and thread manufacturers.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faCertificate} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Natural Yarns</h3>
                                                <p className="text-sm leading-relaxed">Covers all plant and animal based yarns including cotton, silk, wool, linen, and jute yarns specifically processed for spinning or weaving into textiles.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faMicrochip} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Synthetic & Man-Made</h3>
                                                <p className="text-sm leading-relaxed">Includes polyester, nylon, rayon, and acrylic yarns. These high performance yarns often require specialized trademark protection due to their technical nature.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faCheck} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Embroidery & Sewing</h3>
                                                <p className="text-sm leading-relaxed">Specialized threads for embroidery, darning, and industrial sewing machines are protected here. This includes elastic and metallic threads for textile use.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faGlobe} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Industrial Applications</h3>
                                                <p className="text-sm leading-relaxed">Yarns used for industrial weaving, automotive upholstery, and specialized technical textiles are all centrally registered under Class 23.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            Understanding the boundaries of Class 23 is vital. While the thread itself is here, the raw cotton or jute fiber (Class 22) and the finished bedsheet or garment (Class 24/25) are in different classes. At IPR Karo, we perform a 'Vertical Industry Audit' to ensure that if your business grows from selling yarn to selling fabric, your brand remains protected throughout the expansion.
                                        </p>
                                    </section>

                                    <section id="covered-goods" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Definitive List: Goods Falling Under Class 23
                                        </h2>
                                        <p className="mb-6">
                                            A successful trademark application relies on a precise 'Specification of Goods.' Vague terms lead to delays, while overly specific terms might invite competitors to exploit gaps. In India, the following items are the primary pillars of Class 23.
                                        </p>
                                        <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm mb-12">
                                            <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-6 flex items-center">
                                                <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">23</span>
                                                Official Class 23 Goods Categories
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Cotton yarn and thread</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Silk yarn and thread</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Wool yarn and thread</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Synthetic yarns for textile use</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Embroidery thread and yarn</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Darning thread and yarn</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Sewing thread and yarn</span>
                                                </div>
                                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                    <FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12" />
                                                    <span className="text-gray-700 font-medium">Spun cotton / Spun silk</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            If your company produces specialized technical yarns (like fire resistant or moisture wicking threads), these can often be included as 'Technical Yarns for Textile Use'. IPR Karo's legal team works closely with your production heads to ensure that the descriptions we file mirror the technical reality of your product range, providing you with an ironclad monopoly in your niche.
                                        </p>
                                    </section>

                                    <section id="registration-steps" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Roadmap to Trademark Supremacy
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">1. Strategic Availability Search</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We begin with an exhaustive search of the Indian Trademark Database to identify any direct or phonetic conflicts. In the yarn industry, many names are descriptive (e.g., 'SoftTouch'). We analyze whether your chosen name has the 'inherent distinctiveness' required for registration. Our 'Search Report' identifies risks such as similar names in Class 23 or related classes like 22 and 24, giving you a clear go/no-go signal before you invest.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">2. Drafting & E-Filing (Form TM-A)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The way your application is drafted determines its future. If you have been using the brand name for years, we include 'Proof of Prior Use' through a detailed User Affidavit. This backdates your claim and provides a massive advantage during opposition. We handle the entire electronic filing process, ensuring your application is assigned a number and you can begin using the ™ symbol within 24 hours.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">3. Examination & Defense</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        After filing, the application is scrutinized by a Trademark Examiner. If they issue an 'Examination Report' with objections, our team of IP attorneys takes over. We draft robust legal replies citing relevant case law (like the famous 'Larsen & Toubro' or 'Raymond' cases) to prove that your mark is distinctive and not confusable with existing ones. We don't just file; we fight for your brand's right to exist.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="required-docs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Document Checklist for Your Intellectual Property File
                                        </h2>
                                        <p className="mb-8 font-medium">To avoid unnecessary office actions, your documentation must be precise. Whether you are an individual weaver or a large spinning corporation, follow this checklist.</p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-black text-[rgb(110,94,147)] mb-6 uppercase tracking-wider">Individuals / Small Firms</h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Identity Proof (Aadhaar & PAN)</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Udyam Registration (for 50% fee discount)</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> High resolution logo / brand artwork</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Signed Form-48 (Authorization)</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-black text-gray-400 mb-6 uppercase tracking-wider">LTD & Private LTD Companies</h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Certificate of Incorporation</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> MSME / Startup India Certificate</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Board Resolution for signatory</li>
                                                    <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 w-12 h-12 mr-3" /> Proof of brand use (Invoices, Ads)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="legal-nuances" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Legal Nuances in Class 23: Navigating Complex IP Landscapes
                                        </h2>
                                        <p className="mb-6">
                                            The textile industry is unique because of the concept of 'Cross-Class Association.' If you register a trademark for yarns in Class 23, but don't register it for fabrics in Class 24, a competitor might try to register your name in Class 24, claiming that the goods are different. However, the Trademark Registry often considers yarns and fabrics to be 'allied and cognizant goods' because they share the same consumer base and trade channels.
                                        </p>
                                        <div className="bg-[#0C002B] text-white p-10 rounded-3xl my-12 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(110,94,147)] rounded-full blur-[120px] opacity-20"></div>
                                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12 text-[rgb(110,94,147)] mr-4" />
                                                The Principle of 'Allied and Cognate' Goods
                                            </h3>
                                            <p className="text-lg opacity-90 leading-relaxed">
                                                In the landmark case of <em>Corn Products Refining Co. vs. Shangrila Food Products</em>, the Supreme Court of India established that if two goods are sold across the same counter and used together, they are allied. For Class 23 owners, this means your trademark protection often extends naturally into Class 24 and 25 to prevent customer confusion. At IPR Karo, we leverage this legal principle to block infringers who attempt to 'class hop' and steal your brand equity.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Another critical nuance is the use of 'Geographical Terms.' Many yarn brands use regional names (like 'Surat Silk' or 'Coimbatore Cotton'). Under Section 9 of the Act, purely geographical terms cannot be trademarked unless they have acquired 'Secondary Meaning' through decades of exclusive use. We advise manufacturers on how to combine these terms with arbitrary elements (e.g., 'Astra Coimbatore Silk') to create a mark that is both legally strong and commercially relevant.
                                        </p>
                                        <p className="mb-6">
                                            We also handle 'Trade Dress' for thread spools. If your thread is sold on a uniquely shaped spool or with a specific holographic label that makes it instantly recognizable in the market, this visual identity can be protected. This prevents competitors from launching 'counterfeit-clone' products that mimic your packaging to trick busy tailors or industrial buyers.
                                        </p>
                                    </section>

                                    <section id="global-strategy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Global Loom: International Trademark Strategy for Textile Exporters
                                        </h2>
                                        <p className="mb-6">
                                            India's textile story is not just a local narrative; it is a global epic. As a leading exporter of cotton yarn to Europe, synthetic threads to the Middle East, and silk fibers to North America, Indian manufacturers are increasingly finding themselves on the front lines of international intellectual property battles. For a manufacturer in Erode or Ludhiana, an Indian trademark is the starting block, but the finish line is a global brand portfolio. Without international protection, your brand is vulnerable to 'Trademark Squatting', where local distributors in foreign markets register your name before you do, effectively holding your export business hostage.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 my-10 relative overflow-hidden">
                                            <h3 className="font-bold text-xl mb-4 text-[rgb(110,94,147)]">The Madrid Protocol: A Gateway to 130+ Countries</h3>
                                            <p className="mb-6">
                                                Under the Madrid Protocol, governed by the World Intellectual Property Organization (WIPO), Indian businesses can leverage their domestic trademark application to seek protection in multiple countries simultaneously. This centralized system is a game changer for the spinning and thread industry. Instead of hiring separate legal counsel in every country, you file one application in one language and pay one set of fees. This is not only cost effective but also ensures a consistent legal status for your brand across the globe. At IPR Karo, we handle your Madrid Protocol filings with strategic foresight, choosing the countries that align with your export roadmap.
                                            </p>
                                            <ul className="space-y-4">
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</span>
                                                    <span className="text-gray-700"><strong>Linguistic and Cultural Clearance:</strong> Before entering a new market like China or Brazil, we check if your brand name has an unintended meaning or a phonetic clash in the local language. A name that sounds premium in India might be descriptive or even offensive elsewhere.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</span>
                                                    <span className="text-gray-700"><strong>Priority Rights (The Six Month Window):</strong> Under the Paris Convention, you have a six month 'priority window' after your Indian filing to seek protection in other member countries. This allows you to claim the 'Indian Filing Date' as your birth date in Europe or the US, effectively blocking anyone who tried to register during that interval.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</span>
                                                    <span className="text-gray-700"><strong>Customs Recordal:</strong> In many international markets, you can record your registered trademark with local Customs and Border Protection. This empowers authorities to seize counterfeit yarn shipments at the port, preventing fake goods from flooding your target market and undercutting your prices.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="business-valuation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Financial Power of the Mark: Brand Valuation and Monetization
                                        </h2>
                                        <p className="mb-6">
                                            In the traditional manufacturing mindset, assets are seen as yarn, looms, and factories. However, in the modern financial ecosystem, your most valuable asset is often your 'Intangible Property.' For a yarn brand that has spent decades building a reputation for high tensile strength or superior dye-absorption, the trademark is the legal container for that goodwill. When a company is valued for a merger, acquisition, or public listing (IPO), the trademark appears as a capital asset on the balance sheet. Investors and bankers view a registered Class 23 mark as a 'De-risked Asset' that guarantees future revenue streams.
                                        </p>
                                        <p className="mb-6">
                                            Beyond balance sheet valuation, trademarks open the door to 'Franchising and Licensing.' If you have a proprietary manufacturing process for specialized embroidery threads, you can license your brand name to other producers in different geographical regions. They produce the goods under your quality control, and you collect a royalty. This allows your brand to scale geographically without the massive capital expenditure of building new spinning mills. We at IPR Karo draft 'Trademark License Agreements' that protect your quality standards while maximizing your passive income, ensuring that your brand works as hard for you as your machines do.
                                        </p>
                                        <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-400 my-8">
                                            <h4 className="font-bold text-yellow-800 mb-2">The ROI of Registration</h4>
                                            <p className="text-yellow-900 text-sm">Every rupee spent on trademark registration typically generates a 10x return in terms of enterprise value. It is the cheapest and most effective way to protect your lifelong work from being stolen or diluted by opportunistic competitors.</p>
                                        </div>
                                    </section>

                                    <section id="overcoming-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Strategic Defense: Winning Office Actions and Oppositions
                                        </h2>
                                        <p className="mb-8 font-medium text-gray-900">
                                            Nearly 40% of trademark applications in the textile sector face some form of official objection. Knowing how to navigate these hurdles determines whether your brand survives or dies in the Registry.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-red-100 transition-colors">
                                                <h4 className="text-red-600 font-bold uppercase text-xs tracking-widest mb-4">Obstacle A</h4>
                                                <h3 className="text-xl font-bold mb-4 text-gray-900">Section 9: Descriptive Marks</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    The Registrar often objects to names that describe the product (e.g., 'HighStrength Thread'). We counter this by either proving the mark has a 'Suggestive' quality or by submitting evidence of long-standing use that has turned a descriptive name into a distinctive brand.
                                                </p>
                                            </div>
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-orange-100 transition-colors">
                                                <h4 className="text-orange-600 font-bold uppercase text-xs tracking-widest mb-4">Obstacle B</h4>
                                                <h3 className="text-xl font-bold mb-4 text-gray-900">Section 11: Similar Marks</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    If a similar mark exists, we analyze the specific goods. If their mark is for industrial sewing thread and yours is for luxury embroidery silk, we argue that the 'Sophistication of the Buyer' and 'Channels of Trade' are different enough to prevent confusion.
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            In cases of 'Third Party Opposition,' where a competitor tries to block your mark after it's published in the Journal, we provide aggressive representation. We draft the 'Counter Statement,' gather evidence of your brand's superior right, and represent you at the Trademark Tribunal. We ensure that frivolous attempts to stall your business are shut down with legal force.
                                        </p>
                                    </section>

                                    <section id="global-strategy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Global Loom: International Trademark Strategy for Exporters
                                        </h2>
                                        <p className="mb-6">
                                            India is a leading exporter of cotton yarn and synthetic threads to Europe, the MENA region, and North America. In these high value markets, trademark protection is not optional; it is a business requirement. Without international protection, your brand is vulnerable to 'Hijacking' by overseas distributors or competitors.
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 my-10 relative overflow-hidden">
                                            <h3 className="font-bold text-xl mb-4 text-[rgb(110,94,147)]">The Madrid Protocol Advantage</h3>
                                            <p className="mb-6">
                                                Under the Madrid Protocol, as an Indian entity, you can file a single application in India and designate over 130 member countries for protection. This is significantly more cost effective than filing separate applications in every country. We help Indian spinners leverage this system to secure their brands in markets like Germany, the USA, and China with a centralized legal team.
                                            </p>
                                            <ul className="space-y-4">
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</span>
                                                    <span className="text-gray-700"><strong>Linguistic Clearance:</strong> We check if your brand name has an unintended meaning in the languages of your target export markets.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</span>
                                                    <span className="text-gray-700"><strong>Convention Priority:</strong> Filing internationally within 6 months of your Indian application allows you to claim the 'Indian Filing Date' as your global birth date.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</span>
                                                    <span className="text-gray-700"><strong>Enforcement Abroad:</strong> We manage your global IP portfolio, alerting you to potential infringements across borders.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="business-valuation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Valuing the Thread: Intellectual Property as a Financial Asset
                                        </h2>
                                        <p className="mb-6">
                                            In the modern F&B and manufacturing world, a trademark is more than just a certificate; it is a 'Capital Asset.' When a spinning mill seeks funding from a bank or an investor, the registered trademark is listed as an 'Intangible Asset' on the balance sheet. This can significantly improve the company's valuation during a merger or acquisition.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, a registered trademark allows for 'Licensing.' You can authorize other manufacturers to produce yarns under your brand name in exchange for a royalty fee. This is a common way for high end thread brands to expand their footprint without the massive capital expenditure of building new factories. At IPR Karo, we draft 'Royalty Agreements' that protect your quality standards while maximizing your passive income stream.
                                        </p>
                                        <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-400 my-8">
                                            <h4 className="font-bold text-yellow-800 mb-2">Did You Know?</h4>
                                            <p className="text-yellow-900 text-sm">A well protected trademark can often be valued higher than the physical machinery of the spinning mill itself, because it represents the future cash flow from a loyal customer base.</p>
                                        </div>
                                    </section>

                                    <section id="sustainability" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Horizon: Sustainability and Smart Yarns
                                        </h2>
                                        <p className="mb-6">
                                            The future of Class 23 is being written in sustainable fibers and 'Smart Yarns.' As the world moves toward green textiles, brands that focus on recycled polyester, organic hemp, and biodegradable threads are gaining premium market share. Protecting these 'Green Identities' is a priority at IPR Karo. We help you trademark labels that highlight your ecological certifications without falling into the trap of 'Generic Description.'
                                        </p>
                                        <p className="mb-6">
                                            Moreover, the rise of 'Smart Yarns'—threads embedded with RFID chips or conductive materials—means your IP needs might span both Class 23 and Class 9 (Electronics). Our team is equipped to handle these 'Hybrid Intellectual Property' filings, ensuring that your high tech innovations are fully protected as both a product and a brand.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-8 border-b-4 border-[rgb(110,94,147)] pb-4 inline-block italic">
                                            The Voices of Industry Leaders
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
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                                            <p className="text-xs text-[rgb(110,94,147)]">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Expert Insights: FAQ on Class 23 Trademarks
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Weave a Legally Secure Future</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don't let your brand's thread be broken by copycats. Start your official Class 23 trademark application now and get pan-India brand supremacy.
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Protect Your Yarn Brand</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    In the textile world, your name is your bond. Get a **Free Class 23 Search Report** in 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                        Check Availability Now
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
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Industry Specific</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-clothing-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Clothing & Apparel</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-ropes-and-tents" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Ropes & Cordage</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-jewellery-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Jewellery & Luxury</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">All Registration Services</span>
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
