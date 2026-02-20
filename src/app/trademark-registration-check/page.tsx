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
    faEye,
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
    faTasks,
    faFileMedicalAlt,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark Registration Check | Official Status Tracking 2026',
    description: 'Perform a trademark registration check on the IP India portal. Learn how to track your application status, interpret registry updates, and respond to objections in Bharat.',
    keywords: [
        'trademark registration check',
        'check trademark status india',
        'track trademark application',
        'ip india status check',
        'brand name status online',
        'trademark e-register check',
        'how to check tm status',
        'trademark application tracking',
        'verify trademark certificate',
        'legal status of brand'
    ],
    openGraph: {
        title: 'Monitor Your Brand: Trademark Registration Check Guide',
        description: 'Stay updated on your brand\'s legal journey. A comprehensive guide to status monitoring and application tracking in the Indian trademark registry.',
        url: 'https://www.iprkaro.com/trademark-registration-check',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-registration-check',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Importance of a Trademark Registration Check' },
    { id: 'tracking-methods', title: 'Methods to Track Your Trademark Status' },
    { id: 'e-register-guide', title: 'Using the IP India E-Register Portal' },
    { id: 'status-definitions', title: 'Decoding Trademark Statuses: What They Mean' },
    { id: 'objection-alert', title: 'The Critical Importance of "Objected" Status' },
    { id: 'journal-monitoring', title: 'Monitoring the Trademark Journal for Opposition' },
    { id: 'renewal-check', title: 'Checking for Trademark Renewal Deadlines' },
    { id: 'common-law-check', title: 'Beyond the Registry: Common Law Usage Checks' },
    { id: 'status-update-frequency', title: 'How Often Should You Check Your Status?' },
    { id: 'handling-delays', title: 'What to Do if Your Application is Stalled?' },
    { id: 'automated-checks', title: 'The Power of Automated Monitoring Tools' },
    { id: 'verification-cert', title: 'Verifying the Authenticity of a TM Certificate' },
    { id: 'why-iprkaro-check', title: 'Why IPR Karo for Your Brand Monitoring?' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Stay Vigilant, Stay Secure' },
];

const faqs = [
    {
        question: "How do I perform a trademark registration check for my application?",
        answer: "You can perform a check by visiting the e-register section of the official ipindia.gov.in portal. Enter your application number and the respective class to view the current live status and history of your mark."
    },
    {
        question: "What does 'Formalities Chk Pass' status mean?",
        answer: "This status indicates that the registry has successfully verified your basic documents and application details. It is the first positive milestone, meaning your application has moved to the examination stage."
    },
    {
        question: "What should I do if my status shows 'Objected'?",
        answer: "An 'Objected' status means the examiner has raised concerns under Section 9 or 11. You must file a formal written response within 30 days. Failure to do so will result in the application being abandoned."
    },
    {
        question: "How can I verify if a trademark certificate is genuine?",
        answer: "You can verify a certificate by checking the 'Public Search' or 'E-Register' on the IP India portal. The details on the certificate (Registration number, Date, Owner) must exactly match the electronic records of the registry."
    },
    {
        question: "Why has my trademark status not changed for 6 months?",
        answer: "Delays can occur due to backlogs at the registry or ongoing internal processes. If there has been no movement for an excessive period, you can file an inquiry through your attorney or use the grievance cell on the portal."
    },
    {
        question: "What is the difference between 'Abandoned' and 'Refused'?",
        answer: "'Abandoned' usually means the applicant failed to respond to a registry notice in time. 'Refused' means the Registrar has made a final decision that the mark cannot be registered even after hearing arguments."
    },
    {
        question: "Can I check the trademark status of a competitor?",
        answer: "Yes, the trademark register is a public document. You can check the status of any filed application or registered mark by using the 'Free Search' tool on the official IP portal."
    },
    {
        question: "Does 'Advertised bef Acc' mean my trademark is registered?",
        answer: "Not yet. It means the mark is published in the journal for a 4 month period to allow for public opposition. If no one opposes within this timeframe, the registration certificate will be issued."
    },
    {
        question: "How often does the IP India portal update application statuses?",
        answer: "The database is updated daily. However, there might be a few days' lag between a departmental action and its reflection on the public facing e-register."
    },
    {
        question: "Can I receive email alerts for my trademark status changes?",
        answer: "The government portal does not automatically send alerts for all status changes. This is why many businesses use professional services like IPR Karo, which provide automated monitoring and instant notifications."
    }
];

export default function TrademarkRegistrationCheckPage() {
    const breadcrumbItems = [
        { label: "Trademark Registration Check", href: "/trademark-registration-check" },
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
                "name": "Trademark Registration Check",
                "item": "https://www.iprkaro.com/trademark-registration-check"
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
        "headline": "Trademark Registration Check Guide: Tracking Your Brand Status 2026",
        "description": "Learn how to effectively perform a trademark registration check on the IP India database. A complete guide to understanding statuses, monitoring journals, and ensuring brand safety.",
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
            "@id": "https://www.iprkaro.com/trademark-registration-check"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Elite Trademark Status Monitoring",
        "image": "https://www.iprkaro.com/assets/trademark-registration-og.jpg",
        "description": "Professional real-time tracking and reporting for intellectual property status in Bharat.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2560"
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
                            Real-Time <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Registration Check</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Knowledge is power in the IP world. Use our expert guide to perform a trademark registration check on the official IP India portal. Stay ahead of objections, monitor oppositions, and secure your brand's future.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Track Your Trademark Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Absolute Necessity of a Vigilant Trademark Registration Check</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Filing the initial trademark application on the IP India portal is merely the very first, tentative step of a brand's complex legal journey in Bharat. The true, grueling challenge lies entirely in the unpredictable months and sometimes years that inevitably follow, rapidly where your precious mark must successfully navigate a rigid series of stringent departmental gatekeepers, hostile examiner objections, and aggressive public inspections from established competitors. A regular, systematic <strong>trademark registration check</strong> is definitively not just a healthy administrative habit; it is a vital, non-negotiable defensive necessity for any serious business. In an inflexible bureaucratic system where legal deadlines are excruciatingly rigid and crucial government messages can be disastrously missed in spam folders, proactively maintaining an eagle eye on your application status is unequivocally your best, most reliable insurance policy against absolute legal failure.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The vast Indian trademark registry officially handles millions of active applications simultaneously. While the modernized IT infrastructure is highly digital and continuously improving, the heavy ultimate responsibility for rigorously monitoring administrative progress unfortunately rests squarely and entirely on the heavily burdened shoulders of the applicant. Accidentally missing a sudden 'Objected' status update, or tragically failing to quickly notice a hostile 'Third Party Opposition' published in the journal, can directly and irreversibly lead to your carefully planned application being permanently abandoned or officially refused. This catastrophic outcome thoughtlessly wastes your invaluable time, instantly burns your non-refundable filing fees, forcefully hands your priority date to a competitor, and potentially compromises your entire core brand identity in the open market forever.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        At IPR Karo, we profoundly understand that intensely busy, hyper-focused entrepreneurs simply cannot afford to nervously spend their highly valuable productive days constantly hitting 'Refresh' on slow government web portals. This exhaustive, masterclass guide directly provides you with the deepest insider knowledge on exactly how to practically perform highly effective status checks, masterfully interpret the registry's frequently cryptic, legally specialized terminologies, and most importantly, confidently orchestrate the precise, timely legal countermeasures required to fiercely heavily protect your irreplaceable intellectual property assets.
                                    </p>
                                    <div className="bg-[#160049] text-white p-8 my-10 rounded-3xl shadow-2xl relative overflow-hidden">
                                        <p className="text-xl italic font-medium leading-relaxed relative z-10">
                                            "Absolute IP rights are fundamentally never just passively earned; they are aggressively maintained and secured only through relentless, uncompromising vigilance. A thorough, professional trademark check meticulously executed today practically keeps the most devastating, business-ending legal threats safely away tomorrow."
                                        </p>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6E5E93]/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                    </div>
                                </section>

                                <section id="tracking-methods" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Methods to Track Your Trademark Status in 2026</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-gray-800">
                                        Depending on your technical expertise and needs, there are three primary ways to perform a <strong>trademark registration check</strong>:
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm border-l-[10px] border-l-indigo-500">
                                            <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                                                <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-indigo-900 text-xl mb-2">Direct Portal Inquiry (E-Register)</h4>
                                                <p className="text-indigo-800">The most authoritative method. You enter your application number directly into the official portal to see the 'current status' as per the government records.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm border-l-[10px] border-l-indigo-500">
                                            <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-full">
                                                <FontAwesomeIcon icon={faTasks} className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-indigo-900 text-xl mb-2">Through a Trademark Attorney</h4>
                                                <p className="text-indigo-800">The safest method. Attorneys receive official 'Service of Process' emails and are trained to interpret the deeper legal meaning behind status changes.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="status-definitions" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Deeply Decoding Trademark Statuses: What They Really Mean</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        The official IP India portal forcefully uses a very specific, highly nuanced legal terminology to exactly describe where your mark actively stands within their massive processing queue. Fluently understanding these specific bureaucratic codes is the absolute core fundamental of practically executing a successful <strong>trademark registration check</strong> without unnecessarily panicking.
                                    </p>
                                    <div className="overflow-hidden rounded-3xl border border-gray-200 my-10 shadow-lg">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#6E5E93] text-white">
                                                <tr>
                                                    <th className="p-5 font-bold">Official Registry Status String</th>
                                                    <th className="p-5 font-bold">Practical Meaning & Risk Level</th>
                                                    <th className="p-5 font-bold">Immediate Action Required</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-base">
                                                <tr>
                                                    <td className="p-5 font-bold text-gray-900">New Application</td>
                                                    <td className="p-5">Application safely received on the server; pending initial scrutiny.</td>
                                                    <td className="p-5 text-gray-600 font-bold">Wait patiently.</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold text-gray-900">Formalities Chk Pass</td>
                                                    <td className="p-5">Basic statutory documents strictly correct. Ready for deep Examination.</td>
                                                    <td className="p-5 text-green-600 font-bold">None (Highly Positive Marker)</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold text-gray-900">Marked for Exam</td>
                                                    <td className="p-5">A real human examiner is actively scrutinizing your brand name against the database.</td>
                                                    <td className="p-5 text-blue-600 font-bold">Check daily for next update.</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold text-gray-900">Objected</td>
                                                    <td className="p-5">Examiner raised severe legal concerns (Similarity/Descriptiveness).</td>
                                                    <td className="p-5 text-red-600 font-bold italic underline">File robust legal reply strictly within 30 days!</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold text-gray-900">Advertised bef Acc</td>
                                                    <td className="p-5">Examiner approves; openly published in the TM Journal for public scrutiny.</td>
                                                    <td className="p-5 text-blue-600 font-bold">Strictly monitor for 4 months for oppositions.</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold text-gray-900">Opposed</td>
                                                    <td className="p-5">A hostile third-party believes your mark damages them and filed a lawsuit.</td>
                                                    <td className="p-5 text-red-600 font-bold">Immediately retain a senior IP Litigator.</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold text-gray-900">Registered</td>
                                                    <td className="p-5">Absolute Exclusive Commercial Monopoly Granted!</td>
                                                    <td className="p-5 text-green-600 font-bold">Download official Certificate & celebrate.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="objection-alert" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Critical Importance of the 'Objected' Status</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        Entering the 'Objected' phase is the most common hurdle in <strong>trademark registration check</strong> history. It means the examiner believes the mark is either too descriptive (Section 9) or too similar to an existing mark (Section 11).
                                    </p>
                                    <div className="bg-red-50 p-8 rounded-[2rem] border-2 border-red-100 my-10">
                                        <h4 className="text-red-900 font-bold text-2xl mb-4">Urgent Timeline Alert</h4>
                                        <p className="text-red-800 leading-relaxed text-lg">
                                            Once the 'Examination Report' is uploaded, you have exactly **30 days** to file a legal rebuttal. If this deadline is missed, the status will automatically change to 'Abandoned', and you will lose all filing fees and priority. This is why weekly status checks are essential during the first 6 months.
                                        </p>
                                    </div>
                                </section>

                                <section id="handling-delays" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Aggressively Managing Frustrating Registry Processing Delays</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        Unfortunately, absolute silence from the Trademark Registry is incredibly common. Frequently, an application might mysteriously stall at "Formalities Chk Pass" or stubbornly sit at "Objected" (even heavily after you rapidly filed a comprehensive legal reply) for many agonising months without any logical explanation.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        When you practically execute your routine <strong>trademark registration check</strong> and observe zero productive movement for over 90 days, it is critically time to fiercely pivot from passive waiting to proactive escalation. You can formally aggressively request your appointed attorney to swiftly file an official 'Status Inquiry' (TMR-1), forcefully lodge a stark complaint on the government CPGRAMS portal, or ultimately physically visit the highly bureaucratic specific jurisdictional branch office to directly, forcefully demand a swift resolution from the presiding hearing officer to unblock your file.
                                    </p>
                                </section>

                                <section id="common-law-check" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Beyond the Registry: Common Law Usage Checks</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        A thorough <strong>trademark registration check</strong> shouldn't stop at the government portal. In India, "Prior User" rights are often superior to "Registered" rights. This means if someone has been using a name for 20 years without registration, they can still challenge your new registered mark.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-gray-800">
                                        We recommend performing "Marketplace Checks" on social media, business registries (MCA), and Google. If you find a potential conflict in use, even if not on the TM register, it's time to consult with an IP litigator to assess the risk of an opposition or a lawsuit.
                                    </p>
                                </section>

                                <section id="verification-cert" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Verifying the Authenticity of a TM Certificate</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-gray-800">
                                        In mergers or partnership deals, you might be asked to prove your ownership. Here is how to verify a certificate:
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10 text-center">
                                        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                                            <FontAwesomeIcon icon={faCertificate} className="w-6 h-6 text-[#6E5E93] mb-4" />
                                            <h5 className="font-bold">Reg. Number</h5>
                                            <p className="text-xs opacity-70">Verify that the unique number matches the e-register entry.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="w-6 h-6 text-[#6E5E93] mb-4" />
                                            <h5 className="font-bold">Usage Date</h5>
                                            <p className="text-xs opacity-70">Check if the "User Date" on the certificate aligns with actual evidence.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                                            <FontAwesomeIcon icon={faSearch} className="w-6 h-6 text-[#6E5E93] mb-4" />
                                            <h5 className="font-bold">Public Info</h5>
                                            <p className="text-xs opacity-70">Ensure no 'Rectification' or 'Suits' are mentioned in the registry notes.</p>
                                        </div>
                                    </div>
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
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">What <span className="text-[#FFB703]">Applicants Say</span> About Status Tracking</h2>
                                            <p className="text-white/70 max-w-2xl mx-auto text-center mb-12">See how IPR Karo helped clients track their applications and resolve registry issues promptly.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">NK</div>
                                                        <div><h3 className="text-white font-bold">Nikhil Kapoor</h3><p className="text-white/50 text-xs">Owner, Premium Tea Brand</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;My trademark status was stuck on &apos;Objected&apos; for 6 months and I had no idea what to do. IPR Karo explained the examination report, drafted a strong reply, and got our status changed to Accepted within weeks!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">DW</div>
                                                        <div><h3 className="text-white font-bold">Divya Wadhwa</h3><p className="text-white/50 text-xs">Co-Founder, Kids Clothing Line</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;IPR Karo set up automated status alerts for our 4 trademark applications. Every time the status changed on IP India, we got an instant notification. No more manual checking needed!&quot;</p>
                                                </div>
                                                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center text-black font-bold">RN</div>
                                                        <div><h3 className="text-white font-bold">Raj Narang</h3><p className="text-white/50 text-xs">Founder, Artisanal Bakery Chain</p></div>
                                                    </div>
                                                    <div className="mb-3 text-[#FFB703] text-sm flex gap-1">★★★★★</div>
                                                    <p className="text-white/80 text-sm italic">&quot;The verification certificate service from IPR Karo was invaluable. When our registration check showed &apos;Registered&apos;, they immediately obtained the official certificate for our bank loan application!&quot;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32 text-gray-800">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Nishkarsh: Staying the Course in the Fierce IP Registry</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The intense registration process is strictly a grueling, multi-year marathon, absolutely not a rapid sprint. Performing a highly regular, expertly scrutinized <strong>trademark registration check</strong> is exactly how you practically ensure you triumphantly cross the distant finish line with your core brand gloriously intact. By deeply understanding the complex lifecycle, strictly respecting the unforgiving deadlines, and fiercely maintaining a consistently proactive strategic stance, you can powerfully navigate the chaotic complexities of the opaque registry with practically zero operational stress.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        IPR Karo is permanently your most reliable eyes and ears deep inside the busy trademark office. Our highly sophisticated automated monitoring tech and massively experienced expert legal support reliably ensure that you are inherently always fully in the loop, heavily always protected, and crucially always completely ahead of the hostile competition. Powerfully let us flawlessly handle the tedious status tracking while you excitedly handle the massive market growth.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Don't Leave Your Status to Chance</h2>
                                        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                                            Missing a registry deadline can kill your brand. Get professional status monitoring and expert legal support from IPR Karo.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Check Your Status Now
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-5 px-14 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult an Expert
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Status Alert</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Did you know 33% of applications are abandoned due to missed deadlines? Let us **Monitor Your Mark** 24/7.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Track My Mark Now
                                    </button>
                                </Link>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 text-gray-800">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4 text-gray-800">Related Statuses</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Application Status Explained</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Registry Search Portal</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/e-filing-trademark" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">E-Filing Dashboard</span>
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
