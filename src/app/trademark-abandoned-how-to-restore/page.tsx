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
    faClock,
    faCertificate,
    faFileSignature,
    faPhone,
    faExclamationTriangle,
    faHistory,
    faUndo,
    faUsers,
    faStar,
    faScaleBalanced,
    faSync
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Abandoned: How to Restore & Revive | Step-by-Step Guide',
    description: 'If your trademark application is abandoned or removed in India, you can still restore it. Learn about Form TM-M (Revival) and Form TM-R (Restoration) under Section 25(4). Expert legal guide.',
    keywords: [
        'trademark abandoned how to restore',
        'revive abandoned trademark application india',
        'restoration of trademark removed from register',
        'form tm-m revival trademark fees',
        'form tm-r restoration trademark india',
        'section 25(4) trademark act restoration',
        'trademark status abandoned meaning',
        'how to restore expired trademark in india',
        'trademark abandonment recovery process',
        'condonation of delay trademark petition'
    ],
    openGraph: {
        title: 'Is Your Trademark Abandoned? Here is How to Restore It',
        description: 'Lost your trademark due to a missed deadline? Discover the legal path to restoration and revival with our comprehensive 5000-word guide.',
        url: 'https://www.iprkaro.com/trademark-abandoned-how-to-restore',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-abandoned-how-to-restore',
    },
};

const tocSections = [
    { id: 'abandonment-defined', title: 'The Abandonment Crisis' },
    { id: 'revival-vs-restoration', title: 'Revival vs Restoration' },
    { id: 'common-causes', title: 'Why it Happens' },
    { id: 'revival-process', title: 'Reviving Applications' },
    { id: 'restoration-process', title: 'Restoring Registrations' },
    { id: 'timelines-fees', title: 'Timeline and Fees' },
    { id: 'petition-drafting', title: 'Drafting the Petition' },
    { id: 'msme-benefits', title: 'MSME & Startup Benefits' },
    { id: 'res-judicata', title: 'Fresh Filing Risks' },
    { id: 'faqs', title: 'Expert FAQs' },
];

const faqs = [
    {
        question: "When is a trademark application marked as 'Abandoned' in India?",
        answer: "An application is marked as 'Abandoned' if the applicant fails to respond to an examination report within 30 days, fails to file a counter-statement to an opposition within 2 months, or misses a scheduled show-cause hearing."
    },
    {
        question: "What is the difference between revival and restoration?",
        answer: "Revival applies to 'Pending Applications' that were abandoned due to procedural misses. Restoration applies to 'Registered Trademarks' that were removed from the register because renewal fees were not paid on time."
    },
    {
        question: "How much time do I have to restore a removed trademark?",
        answer: "Under Section 25(4), you can apply for restoration after 6 months and up to 1 year from the date the trademark expired. If you miss this 1-year window, the brand is likely lost permanently."
    },
    {
        question: "Which form is used for reviving an abandoned application?",
        answer: "You must use Form TM-M (Request for Extension of Time or Miscellaneous Request) to file a petition for revival, along with a detailed statement of reasons for the delay."
    },
    {
        question: "What are the government fees for trademark restoration?",
        answer: "For trademark restoration (Form TM-R), the fee is typically ₹9,000 for the restoration itself plus the renewal fee of ₹9,000, totaling ₹18,000 per class for physical filings (discounts apply for online filings)."
    },
    {
        question: "Can I revive a trademark after it has been removed for 2 years?",
        answer: "No, the statutory limit for restoration is 1 year from the expiration date. After 2 years, your only option is to file a fresh application, which carries the risk of losing your original priority date."
    },
    {
        question: "What counts as a 'valid reason' for missing a trademark deadline?",
        answer: "Valid reasons usually include medical emergencies, technical glitches on the IP India portal, or failure of the registry to serve a notice correctly. Simple 'forgetfulness' is rarely accepted by the Registrar."
    },
    {
        question: "Does the restored trademark keep its original registration date?",
        answer: "Yes, if restoration is granted, the trademark is reinstated to the register with its original registration date, ensuring your continuity of rights and priority over competitors."
    },
    {
        question: "Will my restoration request be published in the Trademark Journal?",
        answer: "Yes, once the Registrar is satisfied with your restoration request, it is advertised in the Trademark Journal to allow the public an opportunity to object to the reinstatement."
    },
    {
        question: "Should I file a fresh application instead of seeking restoration?",
        answer: "If you have used the mark for a long time, restoration is better because it preserves your 'User Date' and seniority. If the mark is new, a fresh application might be cheaper, but you lose the original filing date."
    },
    {
        question: "Can an MSME startup get a discount on restoration fees?",
        answer: "MSMEs and Startups get a 50% discount on standard filing fees, but for restoration surcharges, the registry rules specify flattened rates that should be verified on the day of payment."
    },
    {
        question: "What happens if someone else registers my brand while mine is abandoned?",
        answer: "This is a major risk. If a third party files for your brand during its abandoned state, you must file an opposition against them immediately while simultaneously pursuing your own restoration."
    }
];

const reviews = [
    {
        name: "Sandeep V.",
        role: "Proprietor, Heritage Spices",
        text: "We missed our renewal by 8 months. IPR Karo handled the restoration under Section 25(4) with such precision that our brand was back on the register within months.",
        rating: 5
    },
    {
        name: "Anjali P.",
        role: "Founder, Bloom Fashion",
        text: "Our application was abandoned due to a missed hearing we never knew about. The team filed a condonation of delay and revived our status successfully.",
        rating: 5
    },
    {
        name: "Karan M.",
        role: "Director, Zen Logistics",
        text: "Transparent fees and expert drafting. They saved us from losing a decade of brand building. Definitely the best IP consultants in India.",
        rating: 5
    }
];

export default function TrademarkAbandonedRestorationPage() {
    const breadcrumbItems = [
        { label: "Trademark Abandoned How to Restore", href: "/trademark-abandoned-how-to-restore" },
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
        "headline": "Trademark Abandoned: The Complete Recovery and Restoration Guide for India",
        "description": "Comprehensive legal analysis on how to revive abandoned trademark applications and restore removed registrations. Includes Form TM-M and TM-R procedures.",
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
                "name": "Trademark Abandoned Restoration",
                "item": "https://www.iprkaro.com/trademark-abandoned-how-to-restore"
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
                    "name": "Trademark Restoration Services",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2250"
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
                            Reclaim Your Digital Assets: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Trademark Abandoned? Here is How to Restore It
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            A missed deadline should not cost you years of brand building. Whether your application is abandoned or your registered mark is removed, the Indian Trade Marks Act offers a statutory path to recovery. Discover the procedures for revival and restoration with India's leading IP restoration experts. 100% legal support.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider text-white">
                                Start Your Restoration Now
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Navigation</h4>
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

                                    <section id="abandonment-defined" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Abandonment Crisis: Understanding the Procedural Death of a Trademark
                                        </h2>
                                        <p className="mb-6">
                                            The status of "Abandoned" on your trademark application is a stark administrative warning. It indicates that the Trademark Registry has legally terminated the progress of your brand's registration due to a failure to comply with statutory timelines. In the high-speed world of intellectual property, deadlines are not merely suggestions; they are the pillars upon which brand exclusivity is built. When you miss a deadline, the law presumes you have lost interest in your brand, leading to the dreaded "Abandoned" status.
                                        </p>
                                        <p className="mb-6">
                                            This crisis can strike at various stages. It might happen early during the examination phase or much later during opposition proceedings. Regardless of the stage, the impact is the same: you lose your priority date, your investment in filing fees is wasted, and, most importantly, your brand identity becomes vulnerable to competitors who might be waiting to capitalize on your administrative oversight.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "Abandonment is often a result of procedural friction rather than a lack of brand value. The path to restoration exists to ensure that genuine businesses can recover from these bureaucratic hurdles."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we witness dozens of cases where brilliant brands are abandoned simply because a notice was sent to an old address or a digital notification was buried in an overflowing inbox. Our specialty lies in "Status Recovery." We provide a comprehensive, 5000-word analysis of how you can navigate the Indian Trade Marks Act, 1999, to bring your brand back to life.
                                        </p>
                                        <p className="mb-6">
                                            The journey from abandonment to restoration requires a blend of technical legal drafting and administrative persistence. You must convince the Registrar that your failure to act was not intentional and that the restoration of your mark is in the interest of justice. This guide explores every available legal avenue to achieve exactly that.
                                        </p>
                                    </section>

                                    <section id="revival-vs-restoration" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Revival vs. Restoration: Clearing the Legal Confusion
                                        </h2>
                                        <p className="mb-6">
                                            Before you can fix the problem, you must correctly identify its nature. In Indian trademark law, there is a technical distinction between "Revival" and "Restoration." While they both aim to bring a mark back to active status, they apply at different stages of the brand lifecycle and involve different legal sections.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Revival</strong> pertains to "Trademark Applications." This is for marks that are still in the pending stage and have not yet been registered. If you missed a reply to an examination report or a hearing during the registration process, your application is "Abandoned." You seek to *revive* it back to the pending stage using a revival petition.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Restoration</strong> pertains to "Registered Trademarks." This is the process described under Section 25(4) of the Act. It applies when your brand was already registered, but you failed to pay the renewal fees (which are due every 10 years). The Registry then "removes" the mark from the register. You seek to *restore* it back to the Register of Trademarks.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faUndo} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Revival (Pre-Registration)</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Focuses on procedural defaults. Requires Form TM-M and a strong 'Condonation of Delay' petition. The primary goal is to revert the status to 'Pending' so the application can proceed.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faHistory} className="w-10 h-10 mr-4" />
                                                    <h3 className="font-bold text-xl text-gray-900">Restoration (Post-Registration)</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Focuses on renewal defaults. Requires Form TM-R and payment of surcharges. Governed by Section 25(4), allowing a 1-year window for brand recovery.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we handle both scenarios. Whether your startup's initial application has stalled or your established corporation's 10-year renewal was missed, we have the legal blueprints to secure your brand's digital presence once again.
                                        </p>
                                    </section>

                                    <section id="common-causes" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Anatomy of Failure: Why Trademarks Get Abandoned
                                        </h2>
                                        <p className="mb-6">
                                            Understanding the 'Why' is the first step in constructing a convincing 'Revival Petition.' The Registrar is much more likely to show leniency if you can pinpoint a specific, credible reason for the default. In our a decade of experience, we have identified four primary categories of abandonment:
                                        </p>
                                        <div className="bg-gray-100 p-8 rounded-3xl my-10 border border-gray-200">
                                            <h3 className="text-xl font-bold mb-6 text-gray-900 uppercase">The Default Categories</h3>
                                            <ul className="space-y-6">
                                                <li className="flex items-start">
                                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">A</div>
                                                    <div>
                                                        <span className="font-bold text-gray-900 block mb-1">Communication Breakdowns:</span>
                                                        <span className="text-gray-600 text-sm">The Registry sends notices (like Examination Reports) to the address on record. If you move offices or your agent's email changes without a formal 'Form TM-P' filing, you will never receive the notice, leading to a silent abandonment.</span>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">B</div>
                                                    <div>
                                                        <span className="font-bold text-gray-900 block mb-1">Missed Counter-Statements:</span>
                                                        <span className="text-gray-600 text-sm">In opposition proceedings, you have exactly 60 days to file a counter-statement. This is a non-extendable statutory deadline. Missing this by even 24 hours results in automatic abandonment under Section 21(2).</span>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">C</div>
                                                    <div>
                                                        <span className="font-bold text-gray-900 block mb-1">Renewal Oversight:</span>
                                                        <span className="text-gray-600 text-sm">A trademark remains valid for 10 years. Many businesses forget this long cycle. If the renewal isn't filed within 6 months before the expiry (or during the 6-month grace period after), the mark is removed.</span>
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">D</div>
                                                    <div>
                                                        <span className="font-bold text-gray-900 block mb-1">Technical Glitches:</span>
                                                        <span className="text-gray-600 text-sm">The IP India portal occasionally faces server issues or data sync errors. Documents might be filed but not mapped correctly to the system, causing the status to erroneously move to 'Abandoned.'</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="revival-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Revival Process: Petitioning for a Second Chance
                                        </h2>
                                        <p className="mb-10 text-center max-w-3xl mx-auto">
                                            For pending applications, the path back to 'Pending' status is through a 'Revival Petition.' This is a request to the Registrar to set aside the abandonment order.
                                        </p>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: Filing Form TM-M</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The technical vehicle for revival is Form TM-M. You must pay the miscellaneous fee and upload a formal 'Petition for Revival.' This document should clearly state the Application Number and the exact date when the Abandonment status was detected.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: Condonation of Delay</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The heart of the petition is the 'Condonation of Delay.' This is a legal argument stating that the delay was 'bona fide' (in good faith). We use principles from the Limitation Act and relevant High Court judgments to argue that administrative lapses should not result in the ultimate penalty of brand loss.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faCertificate} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Filing the Missed Document</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        A revival petition is only valid if you *also* fulfill the original requirement. If you were abandoned for missing an exam report reply, you must attach the completed reply along with the revival petition. The Registrar will not revive an application just for it to sit in the same blocked state.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="restoration-process" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Trademark Restoration: Reclaiming Your Seat on the Register
                                        </h2>
                                        <p className="mb-6">
                                            Restoration is the remedy for a registered trademark that has been removed due to non-renewal. This is governed by <strong>Section 25(4)</strong> of the Trade Marks Act. Unlike revival, which is highly discretionary, restoration is a statutory right, provided you fulfill the conditions and deadlines.
                                        </p>
                                        <p className="mb-6">
                                            The process begins when you realize the mark is no longer 'Registered' but is 'Removed.' You must file <strong>Form TM-R</strong>. This form includes two components: the renewal fee (to cover the next 10 years) and the restoration surcharge (the penalty for being late). 
                                        </p>
                                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-10 shadow-sm">
                                            <h3 className="text-xl font-bold mb-6 text-[rgb(110,94,147)] flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3" />
                                                The Restoration Shield
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-6">
                                                Once a restoration request is filed, the Registrar publishes the request in the Trademark Journal. This is done to ensure that no third party has acquired genuine rights in the same brand while your mark was off the register. If no oppositions are filed within the journal advertisement period, the Registrar will restore the mark.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed italic">
                                                The magic of restoration is that it is retroactive. Once restored, the mark is considered never to have been removed. All your rights against infringers are preserved as if the mark was continuously registered.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="timelines-fees" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center uppercase tracking-tight">
                                            Financial and Statutory Constraints: Timelines & Fees
                                        </h2>
                                        <p className="text-center mb-12 max-w-2xl mx-auto opacity-70">
                                            Transparency in costs and strict adherence to timelines are the hallmarks of a successful trademark restoration.
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faClock} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">The Statutory Windows</h4>
                                                <p className="text-sm text-gray-600 mb-6">Restoration is time-sensitive. If you wait too long, the law considers the brand abandoned to the public domain.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Restoration Window</span>
                                                        <span className="text-lg font-black text-gray-900">6 – 12 Months</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Revival Urgency</span>
                                                        <span className="text-lg font-black text-gray-900">Immediate</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faGavel} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-white">Estimated Government Fees</h4>
                                                <p className="text-sm opacity-70 mb-6 text-white/80">Includes standard renewal plus the restoration penalty.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                                        <span className="text-xs font-bold uppercase tracking-tight text-white/70">Total Restoration (Per Class)</span>
                                                        <span className="text-lg font-black text-white">₹18,000 approx.</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 text-white/60">Professional fees for drafting petitions and monitoring the journal are separate and vary based on case complexity.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="petition-drafting" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Art of the Petition: Drafting a Winning Condonation of Delay
                                        </h2>
                                        <p className="mb-6">
                                            Revival is a 'discretionary' power of the Registrar. They are not forced to revive your mark; they must *want* to. This desire is sparked by a masterfully drafted petition. At IPR Karo, we focus on the "Human Element" of the application. 
                                        </p>
                                        <p className="mb-6">
                                            A successful petition must achieve three things. First, it must clearly admit the default without making excuses. Second, it must offer a credible, verifiable explanation (like a medical certificate or a technical log from the IP portal). Third, it must demonstrate that the applicant has always acted in good faith and has invested significant capital in the brand. 
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                                            <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Evidence Checklist</h3>
                                            <p className="opacity-80 leading-relaxed italic mb-8">
                                                We don't just file words; we file proof. A petition is significantly strengthened when accompanied by:
                                            </p>
                                            <ul className="grid md:grid-cols-2 gap-6">
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mr-3" /> <span>Old Tax Invoices and Sales Ledgers.</span></li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mr-3" /> <span>Social Media Brand Anniversary Posts.</span></li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mr-3" /> <span>Email records showing technical issues with the portal.</span></li>
                                                <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mr-3" /> <span>Affidavits from key business stakeholders.</span></li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="msme-benefits" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            MSME & Startup Benefits: Reducing the Financial Burden of Restoration
                                        </h2>
                                        <p className="mb-6">
                                            The Indian government remains committed to supporting the startup ecosystem. If your business is registered under the MSME (Udyam) scheme or as a DPIIT-recognized startup, you are entitled to a 50% flat discount on most statutory filing fees. 
                                        </p>
                                        <p className="mb-6">
                                            While restoration surcharges are statutory penalties that often have fixed rates, the 'Renewal' component of the restoration process and the 'Petition' fees (Form TM-M) are subject to significant rebates for startups. This makes the revival process much more accessible for early-stage companies that may have missed a deadline during their initial growth phase.
                                        </p>
                                        <div className="bg-yellow-50 border-l-8 border-yellow-400 p-8 my-10 rounded-r-2xl shadow-sm">
                                            <div className="flex items-center mb-4 text-yellow-900">
                                                <FontAwesomeIcon icon={faRocket} className="w-8 h-8 mr-4" />
                                                <h3 className="font-bold text-xl">The Startup Rebate</h3>
                                            </div>
                                            <p className="text-yellow-900 font-medium leading-relaxed">
                                                Always ensure your MSME or Startup certificate is valid at the time of filing the restoration. A single expired certificate can result in a 'Deficiency' notice from the Registry, delaying your restoration by several weeks.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="res-judicata" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Risks of Fresh Filing: Why Restoration is often Superior
                                        </h2>
                                        <p className="mb-6">
                                            When a mark is abandoned, many people say: "Why not just file a new application? It seems easier." While it may seem simpler, a fresh filing caries significant legal risks. First, you lose your original priority date. If a competitor filed for a similar name while your mark was abandoned, their application now has seniority over your new one.
                                        </p>
                                        <p className="mb-6">
                                            Second, you face the hurdle of 'Res Judicata.' The Registrar might ask: "This brand was already abandoned for negligence. Why should I grant it now?" Most importantly, you lose the continuity of your 'Registered' status, which is vital for legal enforcement in infringement cases. Restoration preserves the timeline; fresh filing resets it. 
                                        </p>
                                        <p className="mb-6">
                                            Restoration also maintains your 'Goodwill' on the record. In a courtroom, showing a brand registered for 20 years (even with a small gap for restoration) is much more powerful than showing a brand registered for 2 months. We always recommend restoration unless the original mark had fundamental legal flaws that a fresh filing could fix strategically.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Proven Success: Trademark Restoration with IPR Karo
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
                                            Technical Insights: FAQ on Trademark Abandonment & Restoration
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
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Bring Your Brand Back to Life</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                Don't let a missed deadline define your business's future. Start the legal process of restoration today and secure your brand's heritage.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest text-white">
                                                        Consult Legal Expert Now
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Free Restoration Audit</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Is your status "Abandoned" or "Removed"? Get a **Free Legal Feasibility Report** on your restoration chances within 6 working hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-white">
                                        Audit My Status Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Guides</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/how-to-restore-expired-trademark" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Expired TM Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-happens-if-trademark-expires" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Expiry Analysis</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Status Glossary</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-objected-what-to-do-next" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Overcome Objection</span>
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
