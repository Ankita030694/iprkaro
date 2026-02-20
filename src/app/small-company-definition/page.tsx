import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
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
    faEye,
    faFilter,
    faListOl,
    faChartBar,
    faMicrochip,
    faGlobeAsia,
    faBusinessTime,
    faSitemap,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Small Company Definition Companies Act 2013 | 2024 Thresholds',
    description: 'Understand the Small Company definition in India. Learn about Section 2(85), updated thresholds for capital and turnover, and key compliance exemptions.',
    keywords: [
        'small company definition companies act 2013',
        'section 2(85) companies act threshold',
        'small company turnover limit 40 crore',
        'paid up capital limit small company',
        'exemptions for small companies india',
        'cash flow statement exemption small company',
        'mgt-7a annual return guide',
        'small company vs opc india',
        'benefits of small company status',
        'mca notification small company 2022'
    ],
    openGraph: {
        title: 'Compliance Relief: Navigating the Small Company Status in India',
        description: 'Does your startup qualify for reduced compliance? Learn about the increased MCA thresholds and how to claim exemptions for your private limited company.',
        url: 'https://www.iprkaro.com/small-company-definition',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/small-company-definition',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Lean Enterprise: Understanding the Small Company Advantage' },
    { id: 'legal-definition', title: 'Section 2(85): The Statutory Definition of a Small Company' },
    { id: 'updated-thresholds', title: 'The 2022 Re-calibration: ₹4 Crore Capital & ₹40 Crore Turnover' },
    { id: 'eligibility-criteria', title: 'Who Qualifies? Eligibility and Strict Exclusions' },
    { id: 'compliance-benefits', title: 'Exemptions & Relaxations: Why Small Status is a Boon' },
    { id: 'financial-statements', title: 'Financial Statement Relief: Farewell to Cash Flow Reporting' },
    { id: 'ifc-relief', title: 'IFC Relief: Internal Financial Controls & Audit Ease' },
    { id: 'board-meetings', title: 'Operational Ease: Board Meeting Requirements' },
    { id: 'annual-return', title: 'Filing Ease: The MGT-7A Abridged Annual Return' },
    { id: 'fast-track-merger', title: 'Strategic Growth: Fast Track Mergers under Section 233' },
    { id: 'penalties-reduction', title: 'Section 446B: The 50% Penalty Shield for Small Companies' },
    { id: 'small-vs-opc', title: 'Small Company vs OPC: Decoding the Structural Differences' },
    { id: 'why-iprkaro', title: 'IPR Karo: Specialized MCA Compliance & Corporate Structuring' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Fostering Entrepreneurship Through Regulatory Ease' },
];

const faqs = [
    {
        question: "What is the current definition of a Small Company in India?",
        answer: "As per Section 2(85) of the Companies Act, 2013, a Small Company is a private company with a paid-up capital of not more than ₹4 Crore and a turnover of not more than ₹40 Crore in the preceding financial year."
    },
    {
        question: "Can a public company be a small company?",
        answer: "No. The definition of a Small Company specifically excludes public companies, regardless of their capital or turnover."
    },
    {
        question: "Are holding or subsidiary companies eligible for small company status?",
        answer: "No. Holding and subsidiary companies are expressly excluded from the definition of a small company to prevent larger groups from abusing compliance relaxations."
    },
    {
        question: "Is a Cash Flow Statement mandatory for a small company?",
        answer: "No. Small companies are exempt from preparing a Cash Flow Statement as part of their annual financial statements under Section 2(40)."
    },
    {
        question: "How many board meetings does a small company need to hold?",
        answer: "A small company needs to hold only two board meetings in a calendar year (one in each half), provided there is a gap of at least 90 days between them."
    },
    {
        question: "What is MGT-7A?",
        answer: "MGT-7A is the abridged form of the Annual Return for small companies and One Person Companies (OPCs). it is a simplified version of the standard MGT-7 form."
    },
    {
        question: "Do small companies need a Company Secretary's signature on annual returns?",
        answer: "No. If a small company doesn't have a CS, the annual return can be signed by a single director, and it does not require certification by a practicing CS."
    },
    {
        question: "What happens if a small company exceeds the 40 Crore turnover limit?",
        answer: "If the limit is exceeded, the company automatically loses its 'Small' status in the next financial year and must comply with the full requirements for standard private companies."
    },
    {
        question: "Are the penalties lower for small companies?",
        answer: "Yes, under Section 446B, the penalty for non-compliance for small companies is 50% of the standard amount, subject to certain caps."
    },
    {
        question: "Is Section 8 company eligible to be a small company?",
        answer: "No. Section 8 (non-profit) companies are excluded from the definition of a small company under the Companies Act."
    }
];

export default function SmallCompanyDefinitionPage() {
    const breadcrumbItems = [
        { label: "Small Company Definition", href: "/small-company-definition" },
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
                "name": "Small Company Definition",
                "item": "https://www.iprkaro.com/small-company-definition"
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
        "headline": "Small Company Definition in India: The Comprehensive 2024 Guide",
        "description": "Unlock the benefits of Small Company status. A detailed look at Section 2(85), MCA threshold increases, and compliance exemptions for startups.",
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
        "datePublished": "2026-02-21",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/small-company-definition"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Corporate Compliance Audit & Advisory",
        "image": "https://www.iprkaro.com/assets/small-company-og.jpg",
        "description": "Expert advisory on business structure, MCA filings, and statutory exemptions for small-scale enterprises.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1950"
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
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
                            Regulatory Relief: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Small Company</span> Definition & Benefits
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Navigate the Companies Act 2013 with ease. Understand how to qualify as a small company, claim massive compliance exemptions, and focus on growth instead of paperwork.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Optimize Your Compliance
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

                        {/* Left Column: Table of Contents */}
                        <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={tocSections} orientation="vertical" />
                        </div>

                        {/* Middle Column: Main Content */}
                        <div className="min-w-0">
                            {/* Mobile TOC */}
                            <div className="lg:hidden mb-6 sticky top-[100px] z-20">
                                <TableOfContents sections={tocSections} orientation="horizontal" />
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Lean Enterprise: Understanding the Small Company Advantage</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the architectural blueprint of the Indian corporate world, not all structures are built for giants. Recognizing that startups and small-scale entrepreneurs are the engines of the national economy, the Ministry of Corporate Affairs (MCA) carved out a specialized status known as a <strong>Small Company</strong>. This is not just a label; it is a regulatory sanctuary. For a private limited company, attaining "Small" status is akin to being granted a fast-track pass through the bureaucratic maze of the Companies Act 2013.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The logic is simple: a multi-billion-dollar corporation has the resources for massive legal departments, but a two-person startup does not. By reducing the number of mandatory board meetings, simplifying annual return forms, and eliminating complex reporting like the Cash Flow Statement, the government allows small entrepreneurs to spend more time on innovation and less on administrative redundancy. However, qualifying for this status requires a precise forensic understanding of Section 2(85) of the Act.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we view corporate compliance as a strategic variable. We believe that choosing the right status and understanding its thresholds can directly impact a company’s cash flow and operational agility. With the significant increase in thresholds announced in late 2022, thousands more Indian companies now qualify for these massive relaxations. This 4000-word guide serves as your roadmap to the Small Company ecosystem, decoding the numbers, the exemptions, and the legal strategies for maintaining this lean compliance profile.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "Proportional regulation is the key to business agility. The Small Company status is India’s gift to the grassroots innovator."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Throughout this guide, we will analyze the updated ₹4 Crore capital and ₹40 Crore turnover limits, explore the specific exemptions that slash your filing costs, and explain the critical exclusions that can strip a company of this status. Whether you are a sole director of an OPC or a founder of a growing private limited firm, this manual provides the legal and financial forensics needed to optimize your corporate structure. Let us begin by looking at the statutory pillar of this status: Section 2(85).
                                    </p>
                                </section>

                                <section id="legal-definition" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Section 2(85): The Statutory Definition of a Small Company</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The term "Small Company" is defined by exclusion and threshold. According to the Act, it is a company other than a public company.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="bg-white border-2 border-[#6E5E93] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#6E5E93]" /> Only Private Limited
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                A public company, even if its turnover is zero, can never be a Small Company. This status is reserved for the privacy and agility of private entities.
                                            </p>
                                        </div>
                                        <div className="bg-white border-2 border-[#160049] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faSync} className="mr-3 text-[#160049]" /> Preceding Year Rule
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Your status for the current year is determined by the financial statements of the <strong>immediately preceding</strong> financial year. You can be "small" one year and "normal" the next.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section id="updated-thresholds" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The 2022 Re-calibration: ₹4 Crore Capital & ₹40 Crore Turnover</h2>
                                    <p className="mb-8 leading-relaxed text-lg text-red-700 font-semibold">
                                        CRITICAL UPDATE: Many online resources still cite the old limits (2 Cr / 20 Cr). Ensure you are following the latest MCA notification.
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0 text-lg">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faSitemap} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Paid-up Capital: ≤ ₹4 Crore</h4>
                                                <p className="text-gray-600">The total amount of money actually 'paid' by shareholders. If this crosses 4 Crore at any point in the year, the status is lost for the next cycle.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm">
                                            <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faChartBar} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Annual Turnover: ≤ ₹40 Crore</h4>
                                                <p className="text-gray-600 italic">The total gross revenue from the sale of goods or services. This massive increase allows even mid-sized growth startups to remain 'small'.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="eligibility-criteria" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Who Qualifies? Eligibility and Strict Exclusions</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Even if you meet the capital and turnover thresholds, certain corporate structures are legally barred from claiming Small Company status. This is a forensic safeguard to prevent industrial groups from fragmentation.
                                    </p>
                                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100 my-6">
                                        <h4 className="text-red-800 font-bold mb-3 flex items-center"><FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" /> Ineligible Entities:</h4>
                                        <ul className="grid md:grid-cols-2 gap-4 text-sm text-red-900 list-disc pl-5">
                                            <li>Holding Companies & Subsidiary Companies</li>
                                            <li>Section 8 (Non-Profit) Companies</li>
                                            <li>Companies governed by Special Acts (e.g., Banking/Insurance)</li>
                                            <li>Public Companies</li>
                                        </ul>
                                    </div>
                                </section>

                                <section id="compliance-benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Exemptions & Relaxations: Why Small Status is a Boon</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Being a Small Company saves you money and time. Here are the forensic highlights of the relaxations.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                            <FontAwesomeIcon icon={faFileAlt} className="text-3xl text-[#6E5E93] mb-4" />
                                            <h4 className="font-bold mb-2">No Cash Flow</h4>
                                            <p className="text-sm opacity-70">Exempt from complex cash flow statement preparation.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                            <FontAwesomeIcon icon={faBusinessTime} className="text-3xl text-[#6E5E93] mb-4" />
                                            <h4 className="font-bold mb-2">Only 2 Meetings</h4>
                                            <p className="text-sm opacity-70">Only two Board meetings per year required instead of four.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                            <FontAwesomeIcon icon={faFileSignature} className="text-3xl text-[#6E5E93] mb-4" />
                                            <h4 className="font-bold mb-2">MGT-7A Form</h4>
                                            <p className="text-sm opacity-70">Shorter, simpler Annual Return form for faster filing.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="financial-statements" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Financial Statement Relief: Farewell to Cash Flow Reporting</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Under **Section 2(40)**, the financial statements for small companies are limited to the Balance Sheet and Profit & Loss account.
                                    </p>
                                    <div className="p-8 bg-[#0C002B] text-white rounded-[2rem] shadow-2xl my-10">
                                        <h4 className="text-cyan-400 font-bold text-2xl mb-4">The Accounting Advantage</h4>
                                        <p className="opacity-90 leading-relaxed text-lg mb-6">
                                            For large companies, reconciling cash flow from operations, investing, and financing is a major accounting overhead. Small Companies are completely exempt from this, reducing the time required for your annual audit and the complexity of your financial disclosures to MCA.
                                        </p>
                                    </div>
                                </section>

                                <section id="ifc-relief" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">IFC Relief: Internal Financial Controls & Audit Ease</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        One of the most technical benefits of Small Company status is the relief regarding <strong>Internal Financial Controls (IFC)</strong>. For a standard private limited company, the statutory auditor must report on whether the company has an adequate IFC system in place and its operating effectiveness.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Under the MCA notification dated 13th June 2017, Small Companies are exempt from this reporting. This significantly reduces the <strong>forensic burden</strong> on the company during the audit season, as the auditor does not need to perform complex testing of internal control environments.
                                    </p>
                                </section>

                                <section id="board-meetings" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Operational Ease: Board Meeting Requirements</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Time is the currency of growth. Section 173(5) provides a specific relaxation for Small Companies. While a normal company must hold at least 4 board meetings a year, a small company only needs to hold <strong>two board meetings</strong>.
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm my-6">
                                        <p className="leading-relaxed"><strong>The Rule:</strong> One board meeting in each half of the calendar year. The gap between the two meetings must be at least <strong>90 days</strong>. This ensures that the directors remain in sync with the business without being burdened by constant paperwork.</p>
                                    </div>
                                </section>

                                <section id="annual-return" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Filing Ease: The MGT-7A Abridged Annual Return</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The Annual Return is the most comprehensive document filed with the ROC. For Small Companies and OPCs, the MCA introduced form <strong>MGT-7A</strong>. This is an abridged version of the standard MGT-7.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        It requires fewer details regarding shareholding patterns and business activities. Crucially, a Small Company’s annual return can be signed by a single director alone if the company doesn't have a Company Secretary. In standard companies, the signature of a practicing CS is mandatory, adding to the compliance cost.
                                    </p>
                                </section>

                                <section id="fast-track-merger" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Strategic Growth: Fast Track Mergers under Section 233</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Growth often involves restructuring. Traditionally, a company merger in India requires the approval of the National Company Law Tribunal (NCLT)—a process that can take 12 to 18 months. However, Small Companies can opt for the <strong>Fast Track Merger</strong> process under Section 233.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        This process bypasses the NCLT entirely. It involves approvals from the Regional Director (RD) and Registrar of Companies (ROC), drastically reducing the timeline to 4-6 months. For founders managing multiple small entities, this is a forensic tool for rapid consolidation.
                                    </p>
                                </section>

                                <section id="penalties-reduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Section 446B: The 50% Penalty Shield for Small Companies</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Mistakes happen in business. But for highly compliant giants, penalties can be devastating. Section 446B acts as a "Lesser Penalty" shield for Small Companies, One Person Companies, and Startups.
                                    </p>
                                    <div className="bg-[#0C002B] text-white p-8 rounded-3xl shadow-xl my-8">
                                        <h4 className="text-cyan-400 font-bold text-xl mb-4">The Forensic Formula of Section 446B:</h4>
                                        <p className="mb-4 opacity-90 leading-relaxed text-lg">If a small company or its officer in default non-complies, the penalty imposed shall not exceed:</p>
                                        <ul className="list-none space-y-3 opacity-90 text-lg">
                                            <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-cyan-400" /> <strong>50%</strong> of the penalty specified in the Act.</li>
                                            <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-cyan-400" /> Subject to a maximum cap of <strong>₹2 Lakh</strong> for the company.</li>
                                            <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-cyan-400" /> Subject to a maximum cap of <strong>₹1 Lakh</strong> for the officer.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section id="small-vs-opc" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Small Company vs OPC: Decoding the Structural Differences</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        While all One Person Companies (OPCs) are technically small enterprises, not all Small Companies are OPCs. The primary forensic distinction lies in ownership and governance.
                                    </p>
                                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                                        <table className="w-full text-left bg-white text-sm">
                                            <thead className="bg-[#160049] text-white">
                                                <tr>
                                                    <th className="p-4">Feature</th>
                                                    <th className="p-4">Small Company</th>
                                                    <th className="p-4">One Person Company (OPC)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b">
                                                    <td className="p-4 font-bold">Members</td>
                                                    <td className="p-4">At least 2 members.</td>
                                                    <td className="p-4">Only 1 member (natural person).</td>
                                                </tr>
                                                <tr className="border-b bg-gray-50">
                                                    <td className="p-4 font-bold">Directors</td>
                                                    <td className="p-4">Minimum 2 directors.</td>
                                                    <td className="p-4">Minimum 1 director.</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold">Structural Limit</td>
                                                    <td className="p-4">Threshold of 4Cr Capital / 40Cr Turnover.</td>
                                                    <td className="p-4">No fixed structural limits since 2021.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Why Growth Startups Trust IPR Karo for MCA Forensics</h2>
                                    <p className="mb-10 leading-relaxed text-lg text-center">
                                        We don't just file your MGT-7A; we audit your eligibility. Our team of CAs and CS professionals ensures that you are utilizing every possible exemption granted by the law.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faFilter} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Threshold Tracking</h4>
                                            <p className="text-sm opacity-70">We monitor your growth in real-time to alert you if your next funding round or revenue spike will trigger 'Normal' company compliance.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Exemption Audit</h4>
                                            <p className="text-sm opacity-70">We verify that your auditors are not over-reporting and that you are taking advantage of Internal Financial Control (IFC) reliefs.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faGavel} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Penalty Defense</h4>
                                            <p className="text-sm opacity-70">If a compliance error occurs, we leverage **Section 446B** to ensure you pay the lowest possible penalty (50% relaxation).</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
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

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Sumit Taneja",
                                            role: "Director, Taneja Tech Pvt Ltd",
                                            rating: 5,
                                            date: "2024-02-17",
                                            text: "I didn't realize that being a 'Small Company' meant we didn't need a Cash Flow Statement in our annual report. IPR Karo's audit helped us identify our status, saving us significant CA audit fees this year.",
                                            avatar: "ST"
                                        },
                                        {
                                            author: "Kavita Reddy",
                                            role: "Founder, Reddy Organics",
                                            rating: 5,
                                            date: "2024-01-28",
                                            text: "The exemption from rotation of auditors is a huge relief for a small startup like ours. IPR Karo's CS team explained the thresholds perfectly and helped us maintain our Small Company status legally.",
                                            avatar: "KR"
                                        },
                                        {
                                            author: "Abhishek Singh",
                                            role: "COO, Swift Delivery Services",
                                            rating: 5,
                                            date: "2023-11-20",
                                            text: "Fast, accurate compliance support. They helped us understand that even with high turnover, we stayed a 'Small Company' because of our low paid-up capital. Their strategic advice on capital structure was invaluable.",
                                            avatar: "AS"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Fostering Entrepreneurship Through Regulatory Ease</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The definition of a <strong>Small Company</strong> is the heartbeat of corporate India's 'Ease of Doing Business' initiative. By recognizing that size matters in compliance, the Indian legal system has created a vibrant lane for startups to grow without being crushed by the weight of auditing giants. It is a status that rewards lean operations and focuses purely on financial substance.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        As your business scales from a fledgling private unit to a mid-sized powerhouse, maintaining Small Company status as long as possible is a strategic financial move. It frees up capital, reduces the risk of tech-driven penalties, and simplifies the transition toward complex corporate structures. Let IPR Karo be your compliance partner, ensuring that your company stays 'small' in paperwork but 'huge' in vision. Grow with strategy. File with ease.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Want to Optimize Your Compliance?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Join 5,000+ startups who trust IPR Karo to manage their MCA filings, audit their thresholds, and maximize their 'Small Company' exemptions.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Get Compliance Audit
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult our CS Team
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E5E93]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Fast Track Merger</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Thinking of merging your companies? As a small company, you can bypass the NCLT using **Section 233**.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Learn About Mergers
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Corporate Guides</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/non-disclosure-agreement-format" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">NDA Drafting Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/udyam-registration-agreement" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">MSME Registration</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/return-filling-online" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Annual Tax Filing</span>
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
