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
    faMobileAlt,
    faWallet,
    faCreditCard,
    faCode,
    faCloud,
    faStar,
    faMicrochip,
    faUserShield,
    faChartLine
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'TM for Fintech Startup | Class 36, 9 & 42 India',
    description: 'Complete guide to trademark registration for fintech startups in India. Secure your digital payments, mobile apps, and SaaS platforms under Class 36, 9, and 42. 5000+ words of tech-legal expertise.',
    keywords: [
        'trademark for fintech startup',
        'fintech brand registration india',
        'class 36 trademark india',
        'digital wallet trademark',
        'payment gateway brand protection',
        'register fintech logo',
        'software trademark india',
        'app name trademark registration',
        'fintech ip strategy',
        'startup trademark concession india'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for the Fintech Ecosystem in India',
        description: 'Protect your financial technology and brand digital identity with specialized IP legal experts. 100% online, same-day filing for fintech firms.',
        url: 'https://www.iprkaro.com/trademark-for-fintech-startup',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-fintech-startup',
    },
};

const tocSections = [
    { id: 'digital-trust', title: 'Power of Digital Trust' },
    { id: 'fintech-classes', title: 'Multi-Class Strategy' },
    { id: 'app-protection', title: 'Protecting the App' },
    { id: 'ai-search', title: 'AI-Powered Search' },
    { id: 'registration-flow', title: 'Registration Workflow' },
    { id: 'startup-concessions', title: 'Startup Benefits' },
    { id: 'legal-hurdles', title: 'Overcoming Objections' },
    { id: 'equity-funding', title: 'IP and Funding' },
    { id: 'international-scale', title: 'Global Expansion' },
    { id: 'financial-transparency', title: 'Cost and Fees' },
    { id: 'reviews', title: 'Success Stories' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "Is Class 36 enough for my fintech mobile application?",
        answer: "While Class 36 covers the financial services you provide, it does not specifically protect the 'digital product' such as the mobile application itself. For comprehensive protection, you should also file under Class 9 for the software/app and Class 42 for the technology platform (SaaS)."
    },
    {
        question: "What is the benefit of DPIIT recognition for fintech trademarks?",
        answer: "Fintech startups recognized by DPIIT are eligible for a fifty percent rebate on government trademark filing fees. This reduces the cost from nine thousand rupees to four thousand five hundred rupees per class, significantly lowering the barrier for early-stage branding."
    },
    {
        question: "Can I trademark a specific UI/UX element of my fintech app?",
        answer: "Trademarks primarily protect brand names and logos. Specific functional UI/UX elements are better protected under the Copyright Act or the Designs Act. However, a highly unique or iconic interface style might be registerable as a 'trade dress' if it has acquired distinctiveness."
    },
    {
        question: "Why do fintech names often face Section 9 objections?",
        answer: "Section 9 objections occur when a brand name is descriptive of the service. Names like 'Quick Pay' or 'Easy Invest' are highly descriptive. We help startups build legal strategies to prove that their name has acquired a unique secondary meaning in the digital market."
    },
    {
        question: "Is it possible to trademark the name of my payment gateway protocol?",
        answer: "Yes, you can trademark the name of the protocol or the technology brand. This ensures that even if other firms use your technology, they cannot use your brand name to market their own independent payment solutions."
    },
    {
        question: "How does the Madrid Protocol help Indian fintechs expand to Singapore or UAE?",
        answer: "The Madrid Protocol allows an Indian fintech company to file a single international application through the Indian Trademark Office and extend their brand protection to over one hundred and thirty countries, including major fintech hubs like Singapore and the UAE."
    },
    {
        question: "Can I use the TM symbol immediately after filing the application?",
        answer: "Absolutely. You can start using the TM symbol as soon as you receive the application number from the Registry. This serves as a public notice that you are claiming ownership of the brand and can deter potential infringers."
    },
    {
        question: "Does a trademark protect my fintech brand against domain name squatting?",
        answer: "A registered trademark provides strong legal leverage in Uniform Domain-Name Dispute-Resolution Policy (UDRP) proceedings. It allows you to reclaim domains that are confusingly similar to your trademarked brand name."
    },
    {
        question: "How long does the fintech trademark registration process take in India?",
        answer: "An uncontested application typically takes between twelve to eighteen months to reach registration. However, our expedited filing ensures you get the protection of the priority date immediately upon submission."
    },
    {
        question: "What is the priority date and why is it crucial for tech startups?",
        answer: "The priority date is the date of your first filing. In the fast-moving tech world, being the first to file is critical. Even if a competitor launches a similar name later, your earlier priority date gives you the superior legal right to the brand."
    }
];

const reviews = [
    {
        name: "Vikram A.",
        role: "CTO, PaySphere Solutions",
        text: "The clarity on multi-class filing was a game-changer for our Series A round. Investors were impressed by our comprehensive IP strategy across Class 9 and 36.",
        rating: 5
    },
    {
        name: "Neha S.",
        role: "Co-founder, AlgoWealth",
        text: "Their AI-powered search caught a phonetic conflict that our previous consultants missed. They saved us from an expensive rebrand just months after our launch.",
        rating: 5
    },
    {
        name: "Aditya R.",
        role: "CEO, NeoBank India",
        text: "Fast, digital-first, and highly professional. They registered our core brand and three project names across ten countries using the Madrid Protocol efficiently.",
        rating: 5
    }
];

export default function TrademarkForFintechPage() {
    const breadcrumbItems = [
        { label: "Trademark for Fintech", href: "/trademark-for-fintech-startup" },
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
        "headline": "The Ultimate Guide to Trademark Registration for Fintech Startups in India",
        "description": "Exhaustive legal and strategic guide on protecting your fintech brand, apps, and software. Covers Class 36, 9, 42, registration steps, and international expansion.",
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
                "name": "Trademark for Fintech",
                "item": "https://www.iprkaro.com/trademark-for-fintech-startup"
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
                    "name": "Trademark Registration for Fintech",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2100"
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
                            Protect Your Digital Wealth: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Expert Trademark Registration for Fintech
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-5xl mx-auto text-gray-300 font-medium leading-relaxed px-4">
                            In the hyper-competitive fintech ecosystem, your brand identity is your ultimate defensive moat. Secure your payment gateways, mobile apps, and SaaS platforms with India's most advanced IP legal team. Build institutional trust, secure investment, and scale globally with rock-solid trademark protection.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Register Your Fintech Brand
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
                <div className="container mx-auto px-4 max-w-[1700px] py-12">

                    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">

                        {/* Left Column - TOC */}
                        <aside className="hidden lg:block sticky top-32 h-[calc(100vh-100px)] overflow-y-auto">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Content</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* Middle Column - Main Content */}
                        <main className="min-w-0">
                            <div className="lg:hidden mb-8 sticky top-24 z-20 px-2">
                                <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                                <article className="prose prose-xl max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="digital-trust" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Strategic Moat: Why Fintechs Succeed through Trademark Protection
                                        </h2>
                                        <p className="mb-8">
                                            In the modern financial landscape, technology is the engine, but the brand is the fuel. Fintech companies operate at the sensitive intersection of money and code, where consumer confidence is the most fragile and valuable commodity. Whether you are facilitating micro-payments, managing wealth through AI, or providing decentralized insurance, your brand name represents the promise of security and reliability. In this high-stakes environment, where institutional players and agile startups compete for the same digital wallet, a registered trademark is not just a legal formality; it is a critical defensive moat.
                                        </p>
                                        <p className="mb-8">
                                            <strong>Trademark Registration for Fintech Startups</strong> serves as the legal bedrock upon which institutional trust is built. In India's explosive digital finance sector, brand confusion can have catastrophic consequences. If a malicious actor creates a clone app with a similar name or visual identity to phish for user credentials, the resulting security breach could destroy your startup's reputation before it even scales. A registered trademark gives you the legal authority to take down these threats instantly, securing your users and your future.
                                        </p>
                                        <div className="bg-blue-50 border-l-[12px] border-[rgb(129,140,248)] p-10 my-12 rounded-r-3xl shadow-md">
                                            <p className="text-2xl text-blue-900 italic font-semibold leading-snug">
                                                "In fintech, your brand is your ledger. Every imitation is a fraudulent entry in your reputation. Protect your unique identity to ensure your scale remains sustainable."
                                            </p>
                                        </div>
                                        <p className="mb-8">
                                            The digital nature of fintech means that your brand is visible across borders from day one. Without robust IP protection, you are vulnerable to global competitors who might register your brand name in strategic markets like Singapore, the UAE, or Europe. This 'IP Hijacking' can prevent your international expansion or force you into expensive legal battles to reclaim your own identity. Early registration ensures that as your code goes global, your brand protection follows.
                                        </p>
                                        <p className="mb-8">
                                            Furthermore, fintech is a heavily regulated sector. Regulatory bodies like the Reserve Bank of India (RBI) and the Securities and Exchange Board of India (SEBI) place immense value on institutional permanence. A startup that has meticulously protected its IP portfolio signals to regulators and banking partners that it is a serious, long-term player committed to compliance and professional standards. This level of IP maturity is often a prerequisite for forming strategic partnerships with traditional banks and financial institutions.
                                        </p>
                                    </section>

                                    <section id="fintech-classes" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-10 leading-tight">
                                            Decoding the IP Classification Strategy for Fintech Platforms
                                        </h2>
                                        <p className="mb-10">
                                            In the Indian trademark ecosystem, classification is everything. For fintechs, a single-class application is rarely sufficient. You need a multi-class strategy that covers the service you provide, the software you've built, and the technological platform that hosts it.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10 mb-12">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faWallet} className="w-12 h-12 mr-6 group-hover:scale-110 transition-transform" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 36: Financial Services</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-600">The primary class for banking, digital payments, monetary affairs, wealth management, and insurance. If you handle transactions or provide financial advice, this is your foundational class.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faMobileAlt} className="w-12 h-12 mr-6 group-hover:scale-110 transition-transform" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 9: Mobile Apps & Software</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-600">Crucial for downloadable software and mobile applications. This protects the digital product itself, preventing competitors from launching a similarly named app on various app stores.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faCode} className="w-12 h-12 mr-6 group-hover:scale-110 transition-transform" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 42: SaaS & Tech Dev</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-600">Indispensable for cloud-based platforms and Software as a Service (SaaS). It covers technological research and software development, ensuring your underlying technology brand is secure.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm group">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faUserShield} className="w-12 h-12 mr-6 group-hover:scale-110 transition-transform" />
                                                    <h3 className="font-bold text-xl text-gray-900">Class 45: Legal & Security</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-600">Relevant for fintechs involved in digital identity verification, KYC services, and cyber-security. This adds an extra layer of protection for safety-focused tech services.</p>
                                            </div>
                                        </div>
                                        <p className="mb-8">
                                            At IPR Karo, we perform a comprehensive 'Technology Roadmap Analysis'. Many fintech brands are evolving. They start with payments (Class 36) but quickly expand into credit scoring (Class 42) and personal finance education (Class 41). We ensure that your brand is protected across all current and planned service verticals, leaving no room for competitors to exploit legal gaps in your IP shield.
                                        </p>
                                    </section>

                                    <section id="app-protection" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            Protecting the "Digital Face": Apps, UI/UX, and Brand Identity
                                        </h2>
                                        <p className="mb-8">
                                            In the fintech world, your mobile application is your storefront. The icon on the home screen, the unique name of your payment gateway, and the characteristic visual identity of your dashboard are all critical brand elements. Without trademark protection, your brand is vulnerable to 'Clone Apps'. These are malicious applications that copy your logo and name to trick users into providing sensitive financial data.
                                        </p>
                                        <p className="mb-8">
                                            Registering your brand name and logo in Class 9 and 36 gives you the legal power to request app stores to remove infringing applications immediately. This proactive defense is vital for maintaining user security. Furthermore, unique naming of fintech protocols (e.g., 'SwiftSettle' or 'ClearPay') allows you to build sub-brands that add to your company's overall market valuation.
                                        </p>
                                        <p className="mb-8">
                                            We also guide startups on protecting their 'Trade Dress'. This refers to the overall visual look and feel of the application. While primary UI elements are often functional, the specific combination of colors, fonts, and layout can become uniquely associated with your brand. Trademarking these distinctive visual markers ensures that even if a competitor doesn't copy your name, they can't copy your 'Digital Vibe' to confuse your customer base.
                                        </p>
                                    </section>

                                    <section id="ai-search" className="scroll-mt-32">
                                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-16 text-center uppercase tracking-tighter">
                                            AI-Ready Conflict Analysis
                                        </h2>
                                        <div className="relative space-y-16">
                                            <div className="hidden md:block absolute left-10 top-16 bottom-16 w-1.5 bg-gray-100"></div>

                                            <div className="flex gap-10 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-10 rounded-[2.5rem] flex-1 hover:shadow-2xl transition-all border border-gray-100">
                                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Phonetic Tech-Search</h3>
                                                    <p className="text-lg text-gray-600 mb-4">
                                                        Fintech names often use similar prefixes like 'Pay', 'Coin', or 'Vault'. We use advanced AI algorithms to detect names that sound identical even if the spelling is stylized (e.g., 'PayZ' vs 'Paze'). We check across multi-class databases to ensure no conflict exists with established tech or banking giants.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-10 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faMicrochip} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-10 rounded-[2.5rem] flex-1 hover:shadow-2xl transition-all border border-gray-100">
                                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Domain and Social Footprint Scan</h3>
                                                    <p className="text-lg text-gray-600 mb-4">
                                                        Before you launch your app, we verify that your brand identity is available across digital channels. We scan domain registries and social media handles globally to ensure your chosen fintech brand name has a clear digital runway for growth.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-10 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-10 rounded-[2.5rem] flex-1 hover:shadow-2xl transition-all border border-gray-100">
                                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Vulnerability Gap Report</h3>
                                                    <p className="text-lg text-gray-600 mb-4">
                                                        We deliver a strategic probability index for your mark's registration success. Our report identifies potential Section 9 (descriptive) or Section 11 (conflict) risks and provides actionable legal workarounds to ensure your tech-brand is secure from the start.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="registration-flow" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The Path to Digital Ownership: Registration Workflow
                                        </h2>
                                        <p className="mb-8">
                                            The trademark registration process in India is a rigorous legal journey. For fintechs, the speed of filing is crucial to capture the priority date before a competitor can launch a similar app.
                                        </p>
                                        <div className="space-y-12">
                                            <div className="flex items-start bg-white p-8 rounded-2xl border-l-[10px] border-gray-200 hover:border-[rgb(129,140,248)] transition-colors shadow-sm focus-within:shadow-md transition-all">
                                                <div className="mr-8 pt-1 text-[rgb(110,94,147)] font-black text-4xl opacity-30">01</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Instant Digital Filing</h4>
                                                    <p className="text-gray-600">We file your Form TM-A on the IP India portal with technical precision. Within minutes, you receive an application number, allowing you to use the ™ symbol on your app icon and login screens immediately.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start bg-white p-8 rounded-2xl border-l-[10px] border-gray-200 hover:border-[rgb(129,140,248)] transition-colors shadow-sm">
                                                <div className="mr-8 pt-1 text-[rgb(110,94,147)] font-black text-4xl opacity-30">02</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Examination and Prosecution</h4>
                                                    <p className="text-gray-600">The Registrar examines the mark for distinctiveness. Since tech names often use common prefixes, objections are frequent. Our senior IP attorneys draft robust responses citing tech-legal precedents to clear the path for your mark.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start bg-white p-8 rounded-2xl border-l-[10px] border-gray-200 hover:border-[rgb(129,140,248)] transition-colors shadow-sm">
                                                <div className="mr-8 pt-1 text-[rgb(110,94,147)] font-black text-4xl opacity-30">03</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Journal Advertisement</h4>
                                                    <p className="text-gray-600">The trademark is published in the Journal for four months to allow for public opposition. We monitor this period closely to defend your brand against any predatory oppositions from competitors.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start bg-white p-8 rounded-2xl border-l-[10px] border-gray-200 hover:border-[rgb(129,140,248)] transition-colors shadow-sm">
                                                <div className="mr-8 pt-1 text-[rgb(110,94,147)] font-black text-4xl opacity-30">04</div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Global-Standard Certification</h4>
                                                    <p className="text-gray-600">Upon successful completion, the Registry issues the certificate. You can then use the ® symbol, cementing your status as a legally verified and protected fintech institution in India.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="startup-concessions" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            The DPIIT Advantage: Benefits for Recognized Fintech Startups
                                        </h2>
                                        <p className="mb-10">
                                            The Government of India provides significant incentives for startups to protect their intellectual property. For a fintech company recognized by DPIIT, the barrier to branding excellence is significantly lowered.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-12">
                                            <div className="border border-gray-100 p-10 rounded-[2.5rem] bg-indigo-50/30">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                                    <FontAwesomeIcon icon={faRocket} className="text-[rgb(110,94,147)] mr-4" />
                                                    Financial Rebates
                                                </h3>
                                                <ul className="space-y-6 text-gray-700">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-500 mt-1.5 mr-4" /> <span>50 percent concession on government filing fees.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-500 mt-1.5 mr-4" /> <span>Reduced cost from ₹9,000 to ₹4,500 per class.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-500 mt-1.5 mr-4" /> <span>Eligibility for the SIPP scheme for legal facilitator support.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-10 rounded-[2.5rem] bg-gray-50">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="text-gray-400 mr-4" />
                                                    Expedited Examination
                                                </h3>
                                                <ul className="space-y-6 text-gray-700">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1.5 mr-4" /> <span>Option to file for 'Startup Expedition' of the process.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1.5 mr-4" /> <span>Shorter timelines for examination and report handling.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1.5 mr-4" /> <span>Priority handling for tech-intensive applications.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-sm text-gray-500 italic">
                                            We assist fintech startups in leveraging their DPIIT certificate to secure these benefits, ensuring maximum brand protection with minimal capital outflow.
                                        </p>
                                    </section>

                                    <section id="legal-hurdles" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            Overcoming Legal Hurdles: Section 9 and 11 Strategizing
                                        </h2>
                                        <p className="mb-8">
                                            In the fast-moving tech space, names often lean towards being 'Descriptive' (e.g., 'Swift Pay'). The Registrar frequently raises **Section 9** objections, claiming the mark is devoid of distinctive character. Our strategy involves building a 'Digital Evidence Trail'. We demonstrate that through massive ad spending, app store rankings, and user base growth, your brand has acquired a 'Secondary Meaning'-the name no longer just describes a service, it identifies your specific company.
                                        </p>
                                        <p className="mb-8">
                                            **Section 11 (Relative Grounds)** objections are common due to the ubiquitous nature of tech prefixes. If a bank already has 'PayFirst' and you launch 'PayFast', a conflict arises. We perform a 'Technical and Semantic Difference Analysis'. We argue that the underlying technologies, the specific user segments, and the overall visual brand identity (trade dress) are sufficiently distinct that a person of average intelligence will not be confused. We leverage recent tech-IP precedents to secure your registration even in a crowded field of competitors.
                                        </p>
                                    </section>

                                    <section id="equity-funding" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            IP as a Catalyst: Driving Valuation for Equity Funding
                                        </h2>
                                        <p className="mb-8">
                                            When Venture Capital (VC) firms evaluate a fintech startup for Series A or B funding, they look closely at the 'Defensibility Index'. An unprotected brand is a massive liability. If you are forced to rebrand after spending millions on user acquisition due to a trademark dispute, your valuation collapses. A registered trademark signals to investors that you have a legally secured market territory.
                                        </p>
                                        <p className="mb-8">
                                            A strong IP portfolio, including trademarks for core brands and specialized software protocols, is an intangible asset that enhances your balance sheet. In some fintech acquisitions, the brand value constitutes over sixty percent of the total acquisition cost. Protecting your trademarks isn't just about security; it's about building a multi-million dollar asset that investors can rely on.
                                        </p>
                                        <div className="bg-black text-white p-12 rounded-[3rem] my-16 shadow-2xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(129,140,248)] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                            <h3 className="text-3xl font-bold mb-6 text-[rgb(110,94,147)] uppercase tracking-tighter">The Investor Confidence Multiplier</h3>
                                            <p className="text-xl opacity-90 leading-relaxed italic">
                                                "Institutional investors do not just invest in code; they invest in market durability. A registered trademark is the legal guarantee that your brand can withstand the pressures of scale and global competition."
                                            </p>
                                        </div>
                                    </section>

                                    <section id="international-scale" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                            Crossing Borders: Madrid Protocol and Global Fintech Ambitions
                                        </h2>
                                        <p className="mb-8">
                                            The ultimate goal of most Indian fintechs is global expansion. Whether you are targeting the Middle East, Southeast Asia, or the USA, protecting your brand in over one hundred countries individually is complex and expensive. The **Madrid Protocol** simplifies this by allowing you to file one international application through the IP India portal.
                                        </p>
                                        <p className="mb-8">
                                            This international treaty enables you to extend your trademark protection to over one hundred and thirty member countries simultaneously. For a startup looking to attract NRI investments or provide global remittances, having a registered trademark in major financial hubs like Singapore, the UAE, or London is non-negotiable. At IPR Karo, we specialize in managing international IP portfolios, ensuring that as you scale your code, your brand remains legally inviolable across the globe.
                                        </p>
                                    </section>

                                    <section id="financial-transparency" className="scroll-mt-32">
                                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-16 text-center uppercase tracking-tighter">
                                            Professional Investment Transparency
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="p-12 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center shadow-lg">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-black text-2xl mb-6">Government Fees</h4>
                                                <p className="text-base text-gray-600 mb-8">Statutory filing fees based on applicant type. DPIIT startups and MSMEs get maximum benefits.</p>
                                                <div className="space-y-6 w-full">
                                                    <div className="flex justify-between items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                                                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">DPIIT / MSME / Individual</span>
                                                        <span className="text-2xl font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                                                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Large Corporations</span>
                                                        <span className="text-2xl font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-12 bg-[rgb(129,140,248)] text-white rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">IPR Karo Service Charges</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">Expert analysis from deep search to registration certificate.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm shadow-inner">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Starting From</span>
                                                        <span className="text-lg font-black underline decoration-2 underline-offset-4 text-white">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Includes comprehensive phonetic search, expert drafting, status monitoring, and regular updates until certificate issuance.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-20">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-16 text-center uppercase tracking-tighter">
                                            Success Stories in Digital IP
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-10">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-lg hover:shadow-2xl transition-all">
                                                    <div className="flex text-yellow-400 mb-6 scale-110 origin-left">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{review.text}"</p>
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
                                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-16 text-center uppercase tracking-tighter">
                                            Expert Insights: Fintech Trademark FAQ
                                        </h2>
                                        <div className="space-y-10">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-10">
                                                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-start group cursor-pointer transition-all">
                                                        <span className="text-[rgb(129,140,248)] mr-6 font-black group-hover:scale-125 transition-transform">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-12 text-lg leading-relaxed border-l-2 border-gray-50 ml-2">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1D005A] rounded-[3.5rem] p-10 md:p-24 text-center text-white relative overflow-hidden mt-20 shadow-[0_40px_100px_rgba(0,0,0,0.3)] group">
                                        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                                        </div>
                                        <div className="relative z-10">
                                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter transition-all group-hover:tracking-normal">Secure Your Fintech Future Today</h2>
                                            <p className="text-xl md:text-2xl opacity-80 mb-14 max-w-3xl mx-auto leading-relaxed">
                                                In the digital economy, your brand is your ledger. Don't leave your institutional reputation to chance. Start your official application now.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Consult Expert Now
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648" className="group/phone">
                                                    <button className="bg-white/5 border-2 border-white/10 hover:border-white hover:bg-white/10 text-white font-bold py-5 px-16 rounded-full transition-all text-xl flex items-center justify-center backdrop-blur-xl group-hover/phone:shadow-2xl">
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
                        <aside className="hidden lg:block space-y-12 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[3rem] shadow-2xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(129,140,248)] rounded-full blur-[90px] opacity-20 group-hover:opacity-50 transition-opacity"></div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">AI-Enabled Scan</h3>
                                    <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                        Verify your brand's availability across 45 classes and digital domains instantly. Get a **Free Expert Report** in 24 hours.
                                    </p>
                                    <Link href="/contact-us" className="block relative z-10">
                                        <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                            Start Free AI Search
                                        </button>
                                    </Link>
                                    <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                        <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                            <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91-9289707648
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-10 rounded-[3rem] shadow-md border border-gray-100">
                                <h3 className="text-xl font-black text-gray-900 mb-10 border-b-2 border-[rgb(129,140,248)] pb-6 uppercase tracking-widest text-center">Tech Verticals</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-for-electronics-and-software" className="group flex items-center text-gray-600 hover:text-[rgb(129,140,248)] transition-all">
                                            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-5 group-hover:bg-[rgb(129,140,248)] transition-all group-hover:scale-150"></div>
                                            <span className="font-bold text-lg">SaaS & Software</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-telecommunication-services" className="group flex items-center text-gray-600 hover:text-[rgb(129,140,248)] transition-all">
                                            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-5 group-hover:bg-[rgb(129,140,248)] transition-all group-hover:scale-150"></div>
                                            <span className="font-bold text-lg">Telecommunications</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-digital-marketing-agency" className="group flex items-center text-gray-600 hover:text-[rgb(129,140,248)] transition-all">
                                            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-5 group-hover:bg-[rgb(129,140,248)] transition-all group-hover:scale-150"></div>
                                            <span className="font-bold text-lg">Digital Agencies</span>
                                        </Link>
                                    </li>
                                    <li className="pt-6">
                                        <Link href="/our-services/trademark-registration" className="block text-center bg-gray-200 hover:bg-[rgb(129,140,248)] hover:text-white text-gray-800 font-black py-4 px-4 rounded-xl transition-all text-sm uppercase tracking-widest">
                                            Explore All
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
