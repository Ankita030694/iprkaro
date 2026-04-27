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
    faChartLine,
    faAd,
    faBullhorn,
    faLaptopCode,
    faUsers,
    faStar,
    faGlobe,
    faBuilding,
    faShieldVirus
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'TM for Digital Marketing Agency | Class 35 & 42 India',
    description: 'Expert guide to trademark registration for digital marketing agencies in India. Protect your SEO, SMM, and PPC brand identities under Class 35. 5000+ words of deep legal and strategic insights.',
    keywords: [
        'trademark for digital marketing agency',
        'digital agency brand registration india',
        'class 35 trademark india',
        'marketing agency name protection',
        'SEO agency trademark',
        'register digital agency logo',
        'social media marketing trademark',
        'PPC agency intellectual property',
        'digital agency brand security',
        'trademark for creative studios'
    ],
    openGraph: {
        title: 'Complete Trademark Guide for Digital Marketing Agencies in India',
        description: 'Secure your marketing agency identity with India\'s elite IP legal team. 100% online, same-day filing for Class 35 digital services.',
        url: 'https://www.iprkaro.com/trademark-for-digital-marketing-agency',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-digital-marketing-agency',
    },
};

const tocSections = [
    { id: 'strategic-necessity', title: 'Why It Matters' },
    { id: 'intellectual-property-landscape', title: 'The IP Landscape' },
    { id: 'class-classification', title: 'Trademark Classes' },
    { id: 'registration-lifecycle', title: 'Registration Steps' },
    { id: 'documentation-checklist', title: 'Legal Checklist' },
    { id: 'overcoming-objections', title: 'Handling Objections' },
    { id: 'digital-ecosystem-protection', title: 'Digital Assets' },
    { id: 'global-branding-strategy', title: 'Madrid Protocol' },
    { id: 'valuation-and-exit-strategy', title: 'Business Valuation' },
    { id: 'enforcement-and-litigation', title: 'Brand Enforcement' },
    { id: 'industry-best-practices', title: 'Best Practices' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "Under which class should a digital marketing agency register its trademark?",
        answer: "Digital marketing agencies primarily register under Class 35, which covers advertising, business management, and promotional services. If the agency also develops proprietary software or marketing tools, Class 42 (technological services) should also be considered."
    },
    {
        question: "Can I trademark individual digital marketing service names like 'SEO Boost'?",
        answer: "Yes, you can trademark specific service lines if they are unique and not purely descriptive. However, registering the agency's primary brand name is the first priority."
    },
    {
        question: "Is social media handle registration the same as a trademark?",
        answer: "No, social media handles are platform-specific usernames. A trademark is a legally recognized intellectual property right that gives you the authority to take down handles that infringe on your brand across all platforms."
    },
    {
        question: "How long does digital marketing trademark registration take in India?",
        answer: "The process typically takes 6 to 12 months. With IPR Karo, you receive the filing acknowledgment on the same day, allowing you to use the ™ symbol immediately."
    },
    {
        question: "What is a 'Well-Known' trademark status for an agency?",
        answer: "A well-known trademark is one that has achieved widespread recognition across India. While rare for smaller agencies, it provides the highest level of cross-industry protection."
    },
    {
        question: "Do I need a trademark if I already have a company registration?",
        answer: "Yes. Company registration prevents another person from registering a company with the same name, but it does not stop them from using that name as a brand or logo. Only a trademark provides brand exclusivity."
    },
    {
        question: "Can I trademark my agency's tagline or slogan?",
        answer: "Absolutely. Catchy taglines are vital for marketing firms. Trademarking them prevents competitors from capitalizing on your creative marketing efforts."
    },
    {
        question: "What happens if my agency's name is similar to an existing one?",
        answer: "The Trademark Registry may issue a Section 11 objection. We specialize in drafting responses that highlight the differences in service offerings and target audiences to secure your registration."
    },
    {
        question: "Should I register my logo or my agency's name?",
        answer: "Ideally, both. If budget is a constraint, we recommend registering the word mark (name) first, as it provides broader protection regardless of logo changes."
    },
    {
        question: "Is MSME registration beneficial for digital agencies?",
        answer: "Yes, MSME/Udyam registered agencies get a 50% discount on government trademark fees, reducing the statutory cost from ₹9,000 to ₹4,500."
    },
    {
        question: "What is 'Prior Use' in trademark law?",
        answer: "If your agency has been using its name for years before filing, you can claim 'prior use'. This provides a stronger legal standing against newer competitors who might try to register a similar name."
    },
    {
        question: "How do I protect my brand internationally through the Madrid Protocol?",
        answer: "If you have an Indian trademark application, you can use the Madrid Protocol to extend that protection to over 130 countries with a single application, saving thousands in international legal fees."
    }
];

const reviews = [
    {
        name: "Sandeep K.",
        role: "Founder, Digigrow Media",
        text: "IPR Karo's expertise in Class 35 nuances was exceptional. They handled our multi-class registration for our agency and our SaaS product seamlessly.",
        rating: 5
    },
    {
        name: "Anjali M.",
        role: "MD, Creative Pulse Agency",
        text: "The transition from ™ to ® was smooth. Their automated monitoring system alerted us twice about competitors trying to copy our logo. Remarkable service.",
        rating: 5
    },
    {
        name: "Rahul V.",
        role: "Director, NexGen SEO",
        text: "Professional, fast, and transparent. They explained the legal risks clearly and helped us choose a name that was easy to trademark and hard to copy.",
        rating: 5
    }
];

export default function TrademarkForDigitalMarketingAgencyPage() {
    const breadcrumbItems = [
        { label: "Trademark for Digital Marketing Agency", href: "/trademark-for-digital-marketing-agency" },
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
        "headline": "The Comprehensive Guide to Trademark Registration for Digital Marketing Agencies in India",
        "description": "An exhaustive manual on protecting your digital marketing agency's brand identity. Covering Class 35, legal strategies, SEO considerations, and international expansion.",
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
                "name": "Trademark for Digital Marketing Agency",
                "item": "https://www.iprkaro.com/trademark-for-digital-marketing-agency"
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
                    "name": "Trademark Registration for Digital Marketing Agency",
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

            <div className="bg-white min-h-screen font-sans text-gray-800">

                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
                            Own Your Narrative: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Expert Trademarks for Digital Marketing Agencies
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the hyper-competitive digital landscape, your agency's name is your most valuable client-facing asset. Secure your identity across search engines, social media, and international markets with India's leading IP experts. 100% online, same-day filing.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Protect Your Agency Brand
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
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="strategic-necessity" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Strategic Imperative of Trademark Protection in Digital Marketing
                                        </h2>
                                        <p className="mb-6">
                                            The digital marketing industry has undergone a radical transformation over the last decade. It is no longer just about buying ad space or writing blog posts; it is about building complex ecosystems of trust and authority. In this environment, your agency's brand name is not merely a label. It is a repository of your clients' results, your proprietary methodologies, and your hard-earned reputation. Protecting this asset through a registered trademark is the most fundamental step any agency founder can take to ensure long-term stability and growth.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Digital Marketing Agencies</strong> serves as a legal fortress. When you invest thousands of hours into SEO strategies, creative designs, and performance marketing, you are essentially increasing the value of your brand name. Without a registered trademark, you are building on rented ground. A competitor could easily launch a similar agency with a deceptively similar name, confusing your potential leads and leaching away your market equity. If they register the trademark before you, they could even legally force you to rename your entire business, destroying years of branding effort in an instant.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "In the digital world, where presence is defined by pixels and search rankings, your trademark is the only immutable proof of your identity. It is the signature of your agency's creative and strategic soul."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The risks are even higher in the age of global remote work. many Indian agencies now serve clients in the United States, Europe, and Australia. In these international markets, the "®" symbol is a prerequisite for professional credibility. It signals to a high-ticket client that your agency is a legitimate, professionally managed entity that respects intellectual property laws. It provides the legal basis to protect your brand globally, ensuring that localized competitors in other countries cannot infringe on your identity.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, the rise of digital platforms like LinkedIn, Google My Business, and Instagram has created new avenues for brand confusion. A registered trademark gives you the legal authority to report and remove fraudulent accounts or "clone" agencies that attempt to impersonate you. It is the ultimate tool for digital brand enforcement, allowing you to maintain a clean and authoritative presence across the entire web.
                                        </p>
                                    </section>

                                    <section id="intellectual-property-landscape" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Understanding the IP Landscape for Agency Owners
                                        </h2>
                                        <p className="mb-6">
                                            IP for agencies is multifaceted. While trademarks protect your brand name and logo, it is important to distinguish them from other forms of protection. Copyright protects your creative outputs, such as website copy, graphics, and video scripts. Patents may protect unique marketing technologies or algorithms you have developed. However, the trademark is the umbrella that covers everything. It is the identifying mark that tells the world, "This work comes from us."
                                        </p>
                                        <p className="mb-6">
                                            For a digital agency, the IP landscape involves more than just a name. It includes the distinctive look and feel of your agency's website (trade dress), the names of your proprietary software tools, and even the "taglines" you use in your positioning. Each of these elements can and should be protected. At IPR Karo, we help you map out your entire "IP Surface Area" to ensure no part of your agency's creative identity is left vulnerable to theft or imitation.
                                        </p>
                                        <p className="mb-6">
                                            One of the most overlooked aspects is the protection of service line brand names. If your agency has a highly successful specific service, such as a localized SEO strategy or a specialized PPC framework with its own name, that name itself should be trademarked. This prevents other agencies from "borrowing" your terminology to gain unearned credibility with clients who are looking for your specific methodology.
                                        </p>
                                    </section>

                                    <section id="class-classification" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Vital Role of Proper Trademark Classification
                                        </h2>
                                        <p className="mb-8">
                                            The Trademark Registry uses the Nice Classification system to categorize services. For digital marketing agencies, selecting the right classes is critical. If you register in the wrong class, your trademark may be legally unenforceable when you need it most.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faAd} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 35: The Core Class</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">This is the primary class for all advertising, marketing, and promotional services. It covers SEO, Social Media Marketing, PPC management, and general business administration for third parties. If you are an agency, this is your home.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faLaptopCode} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 42: Tech & Software</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Essential for agencies that develop proprietary marketing dashboards, SaaS tools, or perform custom web development. It covers scientific and technological services, research, and design relating to computer software.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faBullhorn} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 38: Communications</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">If your agency provides specialized communication services, teleprompter services, or manages large-scale digital broadcasting and webinar platforms under your brand, Class 38 provides an extra layer of security.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faUsers} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 41: Training & Education</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Many agencies have an educational wing where they sell courses or perform training workshops. Registering in Class 41 ensures that your educational brand is protected separately from your service brand.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we handle "Hybrid Agencies". Many modern firms are a mix of a service provider (Class 35), a software developer (Class 42), and an education provider (Class 41). We ensure that your trademark application is drafted to be broad enough to cover all current and future business activities, preventing any competitors from encroaching on your brand in adjacent space.
                                        </p>
                                    </section>

                                    <section id="registration-lifecycle" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Path to Global Brand Authority
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: AI-Powered Clearance Search</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The digital marketing world is saturated with common prefixes like "Pixel", "Media", and "Grow". We use advanced proprietary algorithms to detect phonetic similarities and visual look-alikes that a standard manual search would miss. We check against Class 35, 38, 41, and 42 to identify even the most subtle conflict risks before you file.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: Technical Application Drafting</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once the search is cleared, our legal team drafts your Form TM-A with extreme precision. For agencies, the "description of services" must be technically accurate and expansive enough to cover SEO, SMM, PPC, and future tech like AI-driven marketing. As soon as we file, you can start using the ™ symbol, signaling your professional commitment to IP.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Prosecution and Response</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Trademark Registrar will examine your mark for distinctiveness. Since agency names often use descriptive words, objections are common. Our senior IP attorneys draft robust responses, citing legal precedents and market presence to prove your brand's unique identity. We handle the entire legal dialogue until your mark is advertised in the Trademark Journal.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documentation-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Documentation: Building a Solid Legal Foundation
                                        </h2>
                                        <p className="mb-8">
                                            The documents required depend on your agency's legal structure. For modern digital startups, having the correct proofs ensures a fast and hassle-free registration process with the Trademark Registry.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Founders and MSMEs
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>PAN and Aadhaar Card of the Applicant.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>MSME/Udyam Certificate (Crucial for 50% fee rebate).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>High-resolution Copy of the Agency Logo.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Signed Power of Attorney (Form 48).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    LTDs and Partnerships
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation (COI).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Company PAN and Address Proof.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Board Resolution authorizing the signatory.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>User Affidavit with proof of invoices/website history.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="overcoming-objections" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Overcoming Legal Hurdles: Section 9 and 11 Mastery
                                        </h2>
                                        <p className="mb-6">
                                            In the crowded agency space, trademark objections are the rule rather than the exception. Understanding how to navigate Section 9 (Absolute Grounds) and Section 11 (Relative Grounds) is where professional expertise truly matters.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 9 Objections</strong> occur when your name is deemed too descriptive of the service. For example, if you try to trademark 'The SEO Experts', the Registry will object, stating the words are generic and descriptive. Our strategy here is to prove 'secondary meaning'. We gather extensive evidence of your search engine dominance, client testimonials, and industry recognition to show that these words mean a specific agency in the eyes of the consumer.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Section 11 Objections</strong> arise when your mark is similar to one that already exists. In an industry where everyone uses words like 'Digital', 'Scale', or 'Lead', this happens frequently. We perform a 'Market Segmentation Analysis'. We argue that your agency focuses on distinct niches (e.g., medical SEO vs e-commerce ads), has different visual identities, and operates in different price brackets, meaning there is no likelihood of confusion among the "discerning" audience that hires such specialized firms.
                                        </p>
                                    </section>

                                    <section id="digital-ecosystem-protection" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Protecting the Entire Digital Ecosystem
                                        </h2>
                                        <p className="mb-6">
                                            For a digital agency, your brand lives in many places simultaneously. A registered trademark is your legal anchor across all of them.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Domain Name Security:</strong> Many domain disputes (Cybersquatting) are won based on who has the registered trademark. If a competitor registers your brand name with a different extension (e.g., .net or .org) to redirect your traffic, your registered trademark allows you to file a UDRP action and seize the domain. Without a trademark, your options are extremely limited and expensive.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Social Media Dominance:</strong> Platforms like LinkedIn, Facebook, and Instagram have strict IP enforcement policies. If you have a registered trademark, you can easily remove impersonator accounts or handle-snatchers who are using your brand name. This ensures your clients always find the official version of your agency, protecting your lead generation funnel from being compromised.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The App Store Advantage</h3>
                                            <p className="opacity-80 leading-relaxed italic">
                                                If your agency launches a mobile app for client reporting or internal workflow, having a trademark is crucial for App Store and Play Store optimization. It allows you to protect your app's name from copycats, ensuring that when a client searches for your agency, they download only your official application.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="global-branding-strategy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Madrid Protocol: Your Agency's Passport to Global Success
                                        </h2>
                                        <p className="mb-6">
                                            The beauty of digital marketing is its lack of geographical boundaries. If your agency is based in Bengaluru but serves clients in London and New York, you need international protection. The <strong>Madrid Protocol</strong> allows you to extend your Indian trademark application to over 130 member countries with a single application.
                                        </p>
                                        <p className="mb-6">
                                            This is the most cost-effective way to globalize your brand. Instead of hiring local attorneys in every country and paying multiple sets of fees, you file one application in India and pay one set of fees in Swiss Francs. At IPR Karo, we specialize in helping agencies build global IP portfolios. We ensure your Indian base is solid, which is a prerequisite for any international filing to remain stable for its first five years.
                                        </p>
                                        <p className="mb-6">
                                            International protection also prevents "local hijacking". In many countries, trademark law is "first-to-file". If you have a major presence online, a foreign entity could register your brand name in their own country and then demand royalties or block your business there. A Madrid Protocol filing stops this threat before it can materialize.
                                        </p>
                                    </section>

                                    <section id="valuation-and-exit-strategy" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Impact on Agency Valuation and Exit Multiples
                                        </h2>
                                        <p className="mb-6">
                                            Every agency owner should be thinking about their eventual exit strategy. When a larger firm or a private equity group looks to acquire your agency, they are buying your recurring revenue and your brand. A "clean" IP portfolio is a major factor in determining your valuation multiple.
                                        </p>
                                        <p className="mb-6">
                                            If your trademark is registered, it is a line-item asset on your balance sheet. It represent low risk for the buyer. Conversely, if your brand name is not protected, a buyer will likely reduce their offer or include a massive "holdback" of funds to cover potential future legal disputes. Professional IP management is a signal to investors that your agency is managed with maturity and foresight, significantly increasing your desirability in the M&A market.
                                        </p>
                                        <p className="mb-6">
                                            Think of your trademark as the "patent for your reputation." Just as a tech company is valued on its proprietary code, a digital marketing agency is valued on its proprietary brand authority. Registering your trademark is essentially "locking in" the value you create every day through your marketing campaigns.
                                        </p>
                                    </section>

                                    <section id="enforcement-and-litigation" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Brand Enforcement: From Cease & Desist to Litigation
                                        </h2>
                                        <p className="mb-6">
                                            Registration is only the first step. The real value of a trademark lies in your ability to enforce it. The digital world is full of "cloners" who attempt to build businesses on the coattails of successful agencies.
                                        </p>
                                        <p className="mb-6">
                                            With a registered trademark, the process of removing infringers becomes streamlined. Most disputes are resolved with a simple, professionally drafted Cease and Desist notice from an IPR Karo attorney. When a competitor sees that you have a registered mark (®) and a dedicated legal team, 90% of them will back down immediately rather than face a costly infringement suit.
                                        </p>
                                        <p className="mb-6">
                                            For those who do not comply, your registered trademark gives you the right to seek damages and an injunction in court. You can also file "John Doe" orders to take down multiple infringing websites simultaneously. This level of legal power is what keeps your agency's brand clean, ensuring that when a client searches for your name, they see only you.
                                        </p>
                                    </section>

                                    <section id="industry-best-practices" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The IPR Karo Best Practices for Agency Founders
                                        </h2>
                                        <p className="mb-6">
                                            We recommend a "Trademark First" mentality for all creative endeavors. Before you launch a new sub-brand or a specialized marketing tool, run a clearance search. It takes 24 hours and costs nothing, and it could save you from a hundred-thousand-rupee rebranding disaster six months down the line.
                                        </p>
                                        <p className="mb-6">
                                            Always use the ™ symbol from the day you file. It puts the public on notice that you are claiming ownership. Once your certificate arrives, switch to the ® symbol and update all your digital assets, from social media headers to email signatures. This consistent usage strengthens your legal position if you ever need to prove the historical importance of your brand in court.
                                        </p>
                                        <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
                                            <p className="text-gray-900 font-bold mb-4">The Monitoring Rule:</p>
                                            <p className="text-gray-600">The Trademark Registry is dynamic. Thousands of applications are filed every day. We provide automated monitoring services that alert you the moment someone even attempts to file a name that is similar to yours. Stopping an infringement at the 'Opposition' stage is much cheaper and faster than fighting it after the mark is already registered.</p>
                                        </div>
                                    </section>

                                    <section id="costs-and-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Transparent Pricing for Agency Security
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            No hidden costs. No legal jargon. Just professional protection for your agency's future.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">Statutory Government Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6">Fixed fees mandated by the Trade Marks Rules, 2017.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">MSME / Individuals</span>
                                                        <span className="text-lg font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Public/Private Limited</span>
                                                        <span className="text-lg font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">IPR Karo Service Fee</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">From search to certificate, we handle the entire lifecycle.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">starting at only</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4 text-white">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Includes deep AI search, drafting, multi-class advice, and status tracking.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            The Choice of Leading Digital Agencies
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
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Navigating the Brand Maze: Agency FAQs
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Agency's Legacy Today</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                In the digital age, your brand is your biggest differentiator. Don't leave it unprotected. Start your application in just 5 minutes.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Consult IP Expert
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
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Clearance Search</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Is your agency name truly unique? Get a **Free AI-Powered Search Report** within 24 hours and avoid future legal conflicts.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Check Availability Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Guides</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-ecommerce" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">E-commerce Brands</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-business" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">General Business</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-electronics-and-software" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Software & SaaS</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">View All Industries</span>
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
