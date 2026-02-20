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
    faCalendarAlt,
    faHandshake,
    faExclamationTriangle,
    faSync,
    faLightbulb,
    faUserTie,
    faBuilding,
    faFileAlt,
    faHandHoldingUsd,
    faScaleBalanced,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trade Mark Registration India | Expert Legal Brand Protection 2026',
    description: 'Secure your corporate identity with expert trade mark registration in India. A comprehensive guide to legal filings, government fees, and protection strategies for Bharat.',
    keywords: [
        'trade mark registration',
        'how to register trade mark india',
        'official trade mark registration',
        'brand mark registration',
        'commercial mark registration',
        'trade mark law india',
        'logo mark registration',
        'trade mark filing fees',
        'trade mark certificate india',
        'ipr registration services'
    ],
    openGraph: {
        title: 'Trade Mark Registration: Securing Business Identity in Bharat',
        description: 'Protect your commercial assets with the official trade mark registration process. From search to issuance, we cover the entire legal journey.',
        url: 'https://www.iprkaro.com/trade-mark-registration',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trade-mark-registration',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Powering Business Identity through Trade Mark Registration' },
    { id: 'definition', title: 'Defining the Trade Mark: Legal and Commercial Perspectives' },
    { id: 'relevance', title: 'Why Multi Word Trade Mark Registration Matters' },
    { id: 'act-nuances', title: 'Diving into the Trade Marks Act of 1999' },
    { id: 'filing-journey', title: 'The Lifecycle of a Trade Mark: Filing to Finish' },
    { id: 'doc-checklist', title: 'Mandatory Documents for a Smooth Filing' },
    { id: 'fee-analysis', title: 'Economic Analysis of Trade Mark Registration Costs' },
    { id: 'classification-nuances', title: 'Complexities of the Nice Classification' },
    { id: 'search-necessity', title: 'The Pre-Filing Search: A Protective Shield' },
    { id: 'objection-strategies', title: 'Navigating Registry Objections Successfully' },
    { id: 'opposition-defense', title: 'Defending Your Mark Against Third-Party Oppositions' },
    { id: 'international-scaling', title: 'Managing Trade Marks Across Borders' },
    { id: 'maint-and-renewal', title: 'Long Term Maintenance and Portfolio Management' },
    { id: 'why-legal-expert', title: 'The Role of Professional Trade Mark Attorneys' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Building a Legacy with Trade Mark Registration' },
];

const faqs = [
    {
        question: "What is the official trade mark registration fee in India?",
        answer: "The government fee for individual applicants and small enterprises (MSMEs) is ₹4,500 per class for online filing. For larger corporations and entities without MSME status, the fee is ₹9,000 per class. Physical filing attracts a surplus of 10% on these rates."
    },
    {
        question: "How long is the trade mark registration valid?",
        answer: "Once registered, a trade mark is valid for a period of 10 years from the date of application. It can be renewed indefinitely for successive periods of 10 years by paying the necessary renewal fees before the expiry date."
    },
    {
        question: "Can I register a trade mark without a logo?",
        answer: "Yes, you can register a 'Word Mark', which protects the text itself regardless of its graphical representation. This provides the broadest protection for your brand name or business title."
    },
    {
        question: "What happens if my trade mark application is rejected?",
        answer: "If the Registry refuses an application, you have the right to file an appeal with the High Court. However, most rejections can be avoided by performing a thorough pre filing search and providing a robust response to initial examination reports."
    },
    {
        question: "Can sounds or colors be registered as trade marks?",
        answer: "Indian law allows for the registration of non conventional marks such as unique sounds (jingles) and specific color combinations, provided they have acquired distinctiveness and can be represented graphically."
    },
    {
        question: "What is the meaning of the ® symbol?",
        answer: "The ® symbol signifies that the trade mark has been officially registered with the government. It can ONLY be used after you have received the registration certificate. Using it prematurely is a punishable offense under the law."
    },
    {
        question: "What is the difference between a trade mark and a copyright?",
        answer: "Trademarks protect brand identifiers like names and logos. Copyright protects original creative works like literature, music, and art. While a logo can sometimes be protected under both, the primary registration for brand identity is a trade mark."
    },
    {
        question: "How do I choose the right class for registration?",
        answer: "Classification depends on the nature of your business. Goods are categorized in Classes 1-34, while services fall into Classes 35-45. An expert analysis is needed to ensure you are protected in both your primary and secondary fields of operation."
    },
    {
        question: "Can I change my trade mark after it is registered?",
        answer: "Substantial changes to the mark are not allowed after registration. If you change your logo or name significantly, you must file a fresh application. Minor administrative changes (like address updates) can be done via Form TM-M."
    },
    {
        question: "Is it possible to register a trade mark in multiple countries?",
        answer: "Yes, using the Madrid Protocol, you can file a single application in India and designate over 130 member countries for protection. This is an efficient way to scale your brand globally."
    }
];

export default function TradeMarkRegistrationPage() {
    const breadcrumbItems = [
        { label: "Trade Mark Registration", href: "/trade-mark-registration" },
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
                "name": "Trade Mark Registration",
                "item": "https://www.iprkaro.com/trade-mark-registration"
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
        "headline": "Trade Mark Registration in Bharat: The 2026 Strategic Business Guide",
        "description": "Secure your business identity with professional trade mark registration services. A deep dive into Indian IP laws, filing procedures, and brand protection strategies.",
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
        "datePublished": "2026-02-20",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trade-mark-registration"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Corporate Trade Mark Registration India",
        "image": "https://www.iprkaro.com/assets/trademark-registration-og.jpg",
        "description": "High-end legal services for commercial brand marks and logo registration in the Indian market.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3420"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
                            Official <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trade Mark Registration</span> in Bharat
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Build a brand that lasts with the definitive trade mark registration guide. Learn how to navigate the Indian legal system to secure exclusive rights to your corporate identity and marketplace reputation.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Secure Your Trade Mark Today
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

                        {/* Left Column: TOC */}
                        <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={tocSections} orientation="vertical" />
                        </div>

                        {/* Middle Column: Main Content */}
                        <div className="min-w-0">
                            <div className="lg:hidden mb-6 sticky top-[72px] z-20">
                                <TableOfContents sections={tocSections} orientation="horizontal" />
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Strategic Value of Trade Mark Registration</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the brutally competitive and rapidly expanding corridors of modern Indian commerce, a brand's distinctly unique identity is undeniably its most powerful, revenue-generating weapon. When we analytically discuss professional <strong>trade mark registration</strong>, we are deeply exploring the absolute foundational legal bedrock of consumer trust, perceived quality, and market exclusivity that a forward-looking business meticulously builds with its loyal customers over years of operation. An official trade mark is exponentially more than just a fleeting marketing tool or an aesthetic logo; it is a highly proprietary, deeply valuable corporate asset that strictly signifies commercial origin and absolutely guarantees product consistency in a relentlessly crowded, noisy marketplace.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The decisive act of formally registering a trade mark in the dynamic economy of Bharat is a profound, public declaration of authentic business maturity and strategic foresight. It explicitly demonstrates to investors, competitors, and consumers alike that you are not merely thinking about generating today's quick sales, but are heavily invested in deliberately forging tomorrow's enduring legacy. By proactively securing your overarching corporate identity through statutory legal means, you effectively create an insurmountable, legally-enforced barrier to entry for unethical competitors and simultaneously establish a luminous beacon of reliability for your desired target audience. In this hyper-connected era of borderless, globalized trade, your protected mark serves as your most authoritative, legally-binding handshake with the entire commercial world.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        IPR Karo has passionately pioneered a dramatically streamlined, technology-driven approach to what is traditionally complex and archaic intellectual property law. We resolutely believe that legally securing your core brand identity should be exactly as intuitive, efficient, and transparent as actively building your flagship product. Our comprehensive, meticulously researched, and continuously updated strategic guide is explicitly designed to empower ambitious Indian entrepreneurs and established corporate entities with the exact, specialized legal knowledge needed to aggressively claim their rightful, unassailable place in the soaring national economy through flawless official registration.
                                    </p>
                                    <div className="bg-[#160049] text-white p-8 my-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
                                        <p className="text-xl italic font-medium leading-relaxed relative z-10">
                                            "A properly fortified trade mark is the undisputed visual anchor of your entire corporate reputation. Systematically registering it under the Indian Trade Marks Act is the ultimate, most responsible act of legal insurance you can possibly buy for your brand's long-term financial future."
                                        </p>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                    </div>
                                </section>

                                <section id="definition" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Defining the Trade Mark: Legal and Commercial Perspectives</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        What exactly is a "Trade Mark"? According to the Trade Marks Act, it is a mark "capable of being represented graphically and which is capable of distinguishing the goods or services of one person from those of others." This definition encompasses names, logos, slogans, device marks, and even unique packaging shapes.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Commercially, a trade mark is a promise. It promises a specific level of performance, a particular aesthetic, and a defined set of values. When a customer sees your mark, they shouldn't just think of a product; they should feel an association with your company's mission. Registration protects this emotional and financial connection from being diluted or stolen by imitators.
                                    </p>
                                </section>

                                <section id="relevance" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Why the Multi Word "Trade Mark" terminology is crucial</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        While often used interchangeably with the single word "trademark", the separate words <strong>trade mark registration</strong> reflect the formal terminology used in the original Indian statues and many international treaties. This distinction is important for legal professionals and business owners when drafting contracts or filing formal correspondences with the Registry. It emphasizes the "Trade" aspect of the "Mark", highlighting its role in commercial exchange and competitive fairness.
                                    </p>
                                    <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl my-10">
                                        <h4 className="font-bold text-[#0C002B] mb-4">Key Distinctions in Usage</h4>
                                        <ul className="space-y-3 text-gray-600">
                                            <li>- **Legal Context:** Acts and official forms often use "Trade Mark".</li>
                                            <li>- **Modern Media:** Blogs and casual conversation often use "Trademark".</li>
                                            <li>- **International Law:** WIPO and UK-based laws frequently use the two-word format.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section id="act-nuances" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Diving into the Trade Marks Act of 1999</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        The legal backbone of brand protection in India is the Trade Marks Act, 1999. This legislation was a turning point for Indian IP rights, introducing several modern concepts:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                            <div className="w-12 h-12 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white shrink-0">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h5 className="font-bold mb-1">Service Marks</h5>
                                                <p className="text-sm opacity-80">Protection extended to service industries like banking, education, and health.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                            <div className="w-12 h-12 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white shrink-0">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h5 className="font-bold mb-1">Collective Marks</h5>
                                                <p className="text-sm opacity-80">Allowing associations to protect a common brand for all their members.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The Act provides a fine balance between the rights of the mark owner and the rights of the public to use common language. It outlines 'Absolute Grounds for Refusal' (Section 9) which prevents the monopolization of generic words, and 'Relative Grounds' (Section 11) which prevents confusion with earlier registered brands.
                                    </p>
                                </section>

                                <section id="filing-journey" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Journey: From Idea to Registered Trade Mark</h2>
                                    <p className="mb-8 leading-relaxed text-lg text-gray-800">
                                        The registration of a trade mark is a staged process involving several government stakeholders. Here is what to expect:
                                    </p>
                                    <div className="space-y-12 my-10">
                                        <div className="relative pl-12 before:absolute before:left-5 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200 last:before:hidden">
                                            <span className="absolute left-0 top-0 w-10 h-10 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold">1</span>
                                            <h4 className="font-bold text-xl mb-2 text-[#6E5E93]">Preliminary Strategic Search</h4>
                                            <p className="text-gray-600">Before filing, we scan the official database. This identifying potential conflicts saves you time and money.</p>
                                        </div>
                                        <div className="relative pl-12 before:absolute before:left-5 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200 last:before:hidden">
                                            <span className="absolute left-0 top-0 w-10 h-10 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold">2</span>
                                            <h4 className="font-bold text-xl mb-2 text-[#6E5E93]">Online Application Submission (TM-A)</h4>
                                            <p className="text-gray-600">The application is filed digitally. You immediately gain the application number and the right to use the ™ symbol.</p>
                                        </div>
                                        <div className="relative pl-12 before:absolute before:left-5 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200 last:before:hidden">
                                            <span className="absolute left-0 top-0 w-10 h-10 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold">3</span>
                                            <h4 className="font-bold text-xl mb-2 text-[#6E5E93]">Examination and Objection Management</h4>
                                            <p className="text-gray-600">An examiner reviews the mark. If needed, we file a robust legal response to any objections raised.</p>
                                        </div>
                                        <div className="relative pl-12 before:absolute before:left-5 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200 last:before:hidden">
                                            <span className="absolute left-0 top-0 w-10 h-10 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold">4</span>
                                            <h4 className="font-bold text-xl mb-2 text-[#6E5E93]">Registration Certificate Issuance</h4>
                                            <p className="text-gray-600">Once cleared, the mark is published and eventually registered. You can now proudly use the ® symbol.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="doc-checklist" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Consolidated Checklist: Documents for a Smooth Filing</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Errors in paperwork are the primary cause of delays in <strong>trade mark registration</strong>. Ensure your documentation is perfect before you hit submit:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 h-full">
                                            <h4 className="font-bold text-[#0C002B] border-b pb-4 mb-4">Core Identity Docs</h4>
                                            <ul className="space-y-3">
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#6E5E93] rounded-full"></div> Aadhaar & PAN Card</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#6E5E93] rounded-full"></div> COI (for Companies)</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#6E5E93] rounded-full"></div> Signed Power of Attorney</li>
                                            </ul>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 h-full">
                                            <h4 className="font-bold text-[#0C002B] border-b pb-4 mb-4">Specific Asset Docs</h4>
                                            <ul className="space-y-3">
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#6E5E93] rounded-full"></div> High res Logo File</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#6E5E93] rounded-full"></div> Udyam / MSME Certificate</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#6E5E93] rounded-full"></div> User Affidavit (if applicable)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg italic text-gray-600">
                                        Pro Tip: If you are an individual or startup, the Udyam certificate is your golden ticket to a 50% discount on government fees. Don't file without it!
                                    </p>
                                </section>

                                <section id="fee-analysis" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Economic Analysis of Costs for 2026</h2>
                                    <p className="mb-8 leading-relaxed text-lg text-gray-800">
                                        Trademarking is a low cost investment with a high value return. The fee structure set by the Ministry of Commerce and Industry is designed to encourage entrepreneurs:
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-8 my-12">
                                        <div className="flex-1 p-10 bg-gradient-to-br from-[#0C002B] to-[#160049] rounded-3xl text-white shadow-2xl hover:scale-105 transition-transform">
                                            <h4 className="font-bold text-4xl mb-4">₹4,500</h4>
                                            <p className="text-[#6E5E93] font-bold uppercase tracking-widest text-sm mb-6">Individual / MSME</p>
                                            <ul className="space-y-4 text-sm opacity-80 decoration-white/20">
                                                <li>- Online Filing per Class</li>
                                                <li>- Single Applicant Mode</li>
                                                <li>- Valid for Startups</li>
                                            </ul>
                                        </div>
                                        <div className="flex-1 p-10 bg-white border-2 border-gray-100 rounded-3xl text-[#0C002B] shadow-xl hover:scale-105 transition-transform">
                                            <h4 className="font-bold text-4xl mb-4">₹9,000</h4>
                                            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-6">Large Business</p>
                                            <ul className="space-y-4 text-sm text-gray-600">
                                                <li>- Standard Corporate Fee</li>
                                                <li>- Digital Submission per Class</li>
                                                <li>- Official Government Rate</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section id="search-necessity" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Pre Filing Search: Your Preventive Medicine</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-gray-800">
                                        Filing without a search is like driving blindfolded. A <strong>trade mark registration</strong> search allows us to identify phononetic and visual matches that could lead to a rejection.
                                    </p>
                                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 my-10">
                                        <h4 className="font-bold text-blue-900 mb-4">What our Search covers:</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-xl shadow-sm">- Exact Wordmark Matches</div>
                                            <div className="bg-white p-4 rounded-xl shadow-sm">- Phonetic Sound alikes</div>
                                            <div className="bg-white p-4 rounded-xl shadow-sm">- Vienna Code Design Search</div>
                                            <div className="bg-white p-4 rounded-xl shadow-sm">- Cross-Class Conflicts</div>
                                        </div>
                                    </div>
                                </section>

                                <section id="trademark-infringement" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Guarding Against Corporate Trade Mark Infringement</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        For rapidly scaling organizations, unauthorized exploitation of business identity represents a severe existential threat. Trade mark infringement legally occurs when an unassociated third party leverages a mark that is deceptively identical or confusingly similar to your registered and protected brand name, specifically for marketing identical or closely related commercial goods or services. This unethical usage purposefully creates deep-rooted consumer confusion, directly cannibalizing your rightful sales revenue and critically eroding the premium brand equity you spent heavily to develop.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Armed with a formal registration certificate issued under the <strong>Trade Marks Act, 1999</strong>, corporate entities secure indispensable statutory powers to effortlessly crush infringement. You gain the sweeping legal authority to enforce debilitating civil injunctions, immediately physically seize counterfeit inventory through authorized police raids under swift criminal provisions, and relentlessly pursue heavy monetary compensation or 'accounts of profits' through the high courts. Your registered status flips the burden of proof, empowering you to maintain absolute market dominance and successfully combat IP theft effortlessly.
                                    </p>
                                </section>

                                <section id="common-mistakes" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Critical Filing Errors That Paralyze Registration</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The labyrinthine process of securing absolute IP protection is heavily fraught with highly technical legal traps. Startups attempting to DIY their applications routinely face catastrophic examination objections and massive bureaucratic delays. Professional navigation essentially requires acute awareness of these disastrous pitfalls:
                                    </p>
                                    <ul className="space-y-6 my-8 p-0 list-none">
                                        <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                                            <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                                            </div>
                                            <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Ignoring Proper Trademark Searching Procedures</strong> Rashly submitting an application completely blindly, without executing an exhaustive, multi-layered phonetic, visual, and conceptual analysis of the IP India database, instantly attracts severe Section 11 'Likelihood of Confusion' refusals, frequently ending the application on day one.</p>
                                        </li>
                                        <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                                            <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                                            </div>
                                            <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Adopting Excessively Descriptive Terminology</strong> Attempting to selfishly monopolize generic industry terms or directly descriptive phrases (e.g., claiming "Fast Logistics Solution" for your delivery startup) completely lacks necessary legal distinctiveness. These marks face an absolute brick wall of severe Section 9 unregistrable objections from eagle-eyed examiners.</p>
                                        </li>
                                        <li className="flex gap-4 items-start bg-red-50/50 p-6 rounded-2xl border border-red-100">
                                            <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-600" />
                                            </div>
                                            <p className="text-lg"><strong className="text-[#0C002B] block mb-1">Erroneous Nice Classification Assignments</strong> Incorrectly slotting your specific commercial activities into the fundamentally wrong Nice Class destroys the precise legal boundaries of your protection. Misclassifying an advanced SaaS platform as mere physical electronics ensures that your hard-won registration is totally useless in actual courtroom battles against software competitors.</p>
                                        </li>
                                    </ul>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm text-gray-800">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start">
                                                    <span className="text-[#6E5E93] text-2xl">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <div className="py-16 bg-[#0C002B] rounded-3xl relative overflow-hidden">
                                        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px]" />
                                        <div className="max-w-6xl mx-auto px-6">
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">What <span className="text-[#FFB703]">Business Owners</span> Say About Registration</h2>
                                            <p className="text-white/70 max-w-2xl mx-auto text-center mb-12">From startups to established brands, see how trade mark registration through IPR Karo protected their business identity.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">VT</div>
                                                        <div><h3 className="text-white font-bold">Varun Thakur</h3><p className="text-white/50 text-xs">Founder, Streetwear Brand</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;IPR Karo helped me understand the fee structure perfectly. As a startup with MSME registration, I saved 50% on government fees. The entire trade mark registration was completed smoothly!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">AG</div>
                                                        <div><h3 className="text-white font-bold">Anjali Goel</h3><p className="text-white/50 text-xs">Director, Home Furnishing Company</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;We had a trademark objection and were panicking. The IPR Karo legal team drafted a strong reply in just 3 days and got our mark accepted. Their expertise in handling registry communications is unmatched!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">MK</div>
                                                        <div><h3 className="text-white font-bold">Manish Kumar</h3><p className="text-white/50 text-xs">CEO, Logistics Startup</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;Registering our logistics brand across 3 classes seemed complex. IPR Karo explained the multi-class fee benefits and managed the entire filing. We saved both time and money on our trade mark registration!&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32 text-gray-800">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Nishkarsh: Elevating Your Brand Integrity</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The highly critical path to successful <strong>trade mark registration</strong> is carefully paved with profound diligence, absolute structural compliance, and masterful legal precision. By actively deciding to take the momentous, proactive legal step to comprehensively secure your distinctive brand marks and essential corporate identifiers today, you are expertly laying the unshakeable, legally fortified groundwork for an incredibly prosperous future of unimpeded scalability, explosive revenue growth, and an utterly dominant, unassailable market position. Your uniquely crafted brand identity is your ultimate proprietary gift to the open marketplace; you simply cannot afford to let its immense value be diluted, stolen, or go woefully unprotected by remaining passive.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The elite, seasoned team at IPR Karo is fiercely and unwaveringly committed to being the ultimate, trusted legal shepherd guiding your complex IP journey. From the very first exhaustive clearance search to the triumphant issuance of your final, unchallengeable registration certificate, our dedicated squad of top-tier attorneys stands aggressively with you. We reliably ensure that your invaluable business identity remains exclusively, powerfully, and legally yours against all market threats. Boldly build a phenomenal corporate brand that the vast consumer base of Bharat instantly recognizes, unequivocally trusts, and the entire global commercial ecosystem deeply respects.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[42px] p-12 md:p-24 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Secure Your Legacy Today</h2>
                                        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                                            Don't let your brand identifier be a liability. Get a free trade mark availability check and start your registration in minutes.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Apply for Trade Mark
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-5 px-14 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Attorney Consult
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            <div className="bg-[#160049] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Free Legal Search</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Perform a professional **Trade Mark Search** before you file. Protect yourself from rejections.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Start Search Now
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-800">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Explore More</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-registration-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">India Focus Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/registration-of-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Registration Steps</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Public Search Portal</span>
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
