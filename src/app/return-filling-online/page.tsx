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
    faCalculator,
    faCloudUploadAlt,
    faCheckCircle,
    faHistory,
    faCreditCard,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Online Return Filing Guide India | ITR and GST E-Filing 2026',
    description: 'Complete guide to online return filing in India. Learn about ITR-1 to ITR-7, GSTR-1, GSTR-3B, due dates, penalties, and e-verification procedures.',
    keywords: [
        'online return filing india',
        'itr filing process 2026',
        'gst return filing online',
        'different types of itr forms',
        'gstr-1 and gstr-3b filing',
        'income tax e-filing portal 2.0',
        'penalty for late itr filing',
        'how to e-verify itr aadhar otp',
        'qrmp scheme gst guide',
        'benefits of filing income tax return'
    ],
    openGraph: {
        title: 'Tax Compliance Simplified: The Online Return Filing Masterclass',
        description: 'Dont miss your tax deadlines. Our comprehensive guide covers everything from ITR selection to GST compliance for individuals and businesses.',
        url: 'https://www.iprkaro.com/return-filling-online',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/return-filling-online',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Digital Tax Revolution: Online Return Filing in India' },
    { id: 'itr-portal-overview', title: 'E-Filing 2.0: Navigating the New Income Tax Portal' },
    { id: 'ais-tis-forensics', title: 'AIS & TIS Scrutiny: The Department’s Panoramic View of Your Finances' },
    { id: 'itr-forms-guide', title: 'ITR Forms Decoder: Which Form (ITR-1 to 7) is for You?' },
    { id: 'updated-returns', title: 'Section 139(8A): Fixing Mistakes with the Updated Return (ITR-U)' },
    { id: 'gst-returns-basics', title: 'GST Return Basics: Understanding GSTR-1 and GSTR-3B' },
    { id: 'gst-reconciliation', title: 'The Art of Reconciliation: GSTR-2B vs GSTR-3B Matching' },
    { id: 'e-verification', title: 'E-Verification: How to Complete Your Filing with Aadhaar OTP' },
    { id: 'late-penalties', title: 'The Price of Delay: Section 234F Penalties & Late Fees' },
    { id: 'why-iprkaro', title: 'IPR Karo: Seamless Tax & Compliance Management' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Tax Maturity: From Burden to Business Asset' },
];

const faqs = [
    {
        question: "Is online return filing mandatory if my income is below the tax slab?",
        answer: "Generally, if your gross total income is below the basic exemption limit (e.g., ₹2.5 Lakh or ₹3 Lakh depending on the regime), filing is not mandatory. However, filing a 'Nil Return' is recommended for loan approvals and visa applications."
    },
    {
        question: "What is the penalty for filing ITR after the due date?",
        answer: "Under Section 234F, a late fee of ₹5,000 is applicable. However, if your total income is below ₹5 Lakh, the late fee is restricted to ₹1,000."
    },
    {
        question: "How do I e-verify my return using Aadhaar?",
        answer: "Log in to the e-filing portal, go to 'e-Verify Return', select 'Aadhaar OTP', and enter the OTP sent to your Aadhaar-linked mobile number. This is the fastest way to complete the process."
    },
    {
        question: "Can I revise my return after filing?",
        answer: "Yes, you can file a 'Revised Return' under Section 139(5) if you discover any omission or wrong statement in your original filing, provided it is done before the end of the assessment year."
    },
    {
        question: "What is the difference between GSTR-1 and GSTR-3B?",
        answer: "GSTR-1 is a report of your outward supplies (sales), where no tax is paid. GSTR-3B is a summary return where you calculate tax liability, claim Input Tax Credit (ITC), and make the final payment."
    },
    {
        question: "What is the QRMP scheme in GST?",
        answer: "The Quarterly Return Monthly Payment (QRMP) scheme allows small taxpayers with turnover up to ₹5 Crore to file GST returns on a quarterly basis while paying taxes monthly."
    },
    {
        question: "What happens if I don't file GST returns for 6 months?",
        answer: "Failure to file returns for a continuous period of 6 months can lead to the cancellation of your GST registration by the authorities, making it illegal to conduct business."
    },
    {
        question: "Can I carry forward losses if I file late?",
        answer: "No. Losses from business or capital gains can only be carried forward to future years if the return is filed within the original due date (prescribed under Section 139(1))."
    },
    {
        question: "Is it safe to share my e-filing password with consultants?",
        answer: "While many use consultants, it is best to use the 'Authorized Representative' feature on the portal or share only relevant data. Always ensure you change your password after the filing season."
    },
    {
        question: "How long does it take to get an Income Tax refund?",
        answer: "With the new portal, most refunds are processed within 20 to 45 days of e-verification, though complex cases or those requiring verification can take longer."
    }
];

export default function OnlineReturnFilingPage() {
    const breadcrumbItems = [
        { label: "Online Return Filing", href: "/return-filling-online" },
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
                "name": "Return Filing",
                "item": "https://www.iprkaro.com/return-filling-online"
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
        "headline": "Mastering Online Return Filing: The Ultimate ITR & GST Compliance Guide 2026",
        "description": "Stop worrying about tax notices. Our expert guide explains the entire online return filing process for individuals and businesses in India.",
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
            "@id": "https://www.iprkaro.com/return-filling-online"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "E-Filing & Tax Compliance Services",
        "image": "https://www.iprkaro.com/assets/tax-filing-og.jpg",
        "description": "Professional assistance for ITR filing, GST compliance, and responding to tax notices.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "5200"
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
                            Tax Compliance Forensics: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Online Return Filing</span> (ITR/GST)
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Stay ahead of the taxman. Master the nuances of the e-filing 2.0 portal, select the right forms, and ensure hundred percent compliance across Income Tax and GST returns.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                File Your Returns Now
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Digital Tax Revolution: Online Return Filing in India</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The days of bulky paper files and long queues at the IT office are relics of a bygone era. In 2026, the Indian tax system has evolved into one of the world’s most advanced digital ecosystems. <strong>Online return filing</strong> is no longer just a convenience; it is a mandatory legal requirement for almost every earning entity in the country. From a college student filing their first tax return to a conglomerate managing multi-state GST compliance, the e-filing portal is the primary bridge between the citizen and the state.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        However, with digital ease comes heightened scrutiny. The Income Tax Department now uses high-end data analytics and artificial intelligence to cross-verify your claims with your bank statements, property purchases, and even social media activity via the Annual Information Statement (AIS). Filing a return is no longer about just filling out boxes; it is about ensuring that your digital footprint matches your financial disclosure. A single mismatch between GSTR-3B and GSTR-1, or an incorrectly selected ITR form, can lead to a dreaded "Defective Return" notice.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we view tax compliance through a lens of financial forensics. We believe that a well-filed return is a business’s greatest asset-it builds creditworthiness, secures loan eligibility, and provides peace of mind. Whether you are navigating the intricacies of the ITR-1 (Sahaj) form or calculating Input Tax Credit (ITC) for your enterprise, the goal remains the same: accuracy, transparency, and timeliness. This 4000-word guide is designed to be your tactical manual for the e-filing 2.0 universe, covering everything from basic portal navigation to complex GST reconciliation.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "Tax compliance is not just about avoiding penalties; it is about building a financial legacy that is beyond reproach."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Throughout this guide, we will break down the seven different types of ITR forms, decode the monthly and quarterly cycles of GST, and explain why the process isn't over until you hit the 'e-Verify' button. Whether you are a solo entrepreneur or a growing startup, this guide will provide the legal and technical clarity needed to master the Indian tax landscape. Let us begin by exploring the architecture of the new e-filing portal.
                                    </p>
                                </section>

                                <section id="itr-portal-overview" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">E-Filing 2.0: Navigating the New Income Tax Portal</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Launched to provide a "Taxpayer-Friendly" experience, the e-filing 2.0 portal (www.incometax.gov.in) is vastly superior to its predecessor. Understanding its dashboard is the first step to successful <strong>online return filing</strong>.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="bg-white border-2 border-[#6E5E93] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-3 text-[#6E5E93]" /> Pre-Filled Data
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                The portal now auto-populates salary income, interest income, and TDS details using your PAN. This significantly reduces manual entry errors but requires careful validation.
                                            </p>
                                        </div>
                                        <div className="bg-white border-2 border-[#160049] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#160049]" /> AIS & TIS
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                The Annual Information Statement (AIS) is a comprehensive record of your financial life. You must cross-check your return against the AIS to ensure no high-value transaction is missed.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section id="ais-tis-forensics" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">AIS & TIS Scrutiny: The Department’s Panoramic View of Your Finances</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Back in the day, you could "forget" to mention a small bank interest or a stock market gain. Not anymore. The <strong>Annual Information Statement (AIS)</strong> and <strong>Taxpayer Information Summary (TIS)</strong> are the most powerful forensic tools in the Department's arsenal. They collect data from banks, registrar offices, and stock exchanges to show every rupee you've earned or spent.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        When we handle your <strong>online return filing</strong>, the first step is an "AIS Reconciliation." If the AIS shows a property sale for ₹50 Lakh and your return shows ₹40 Lakh, an automated notice is almost guaranteed. We help you de-conflict this data, ensuring that your tax disclosure is a perfect mirror of your financial reality as seen by the government.
                                    </p>
                                </section>

                                <section id="itr-forms-guide" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">ITR Forms Decoder: Which Form (ITR-1 to 7) is for You?</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        Selecting the wrong ITR form is any easy way to get a notice. The form depends strictly on your sources of income and your residential status.
                                    </p>
                                    <div className="space-y-6 my-10">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 group hover:shadow-md transition-all">
                                            <h4 className="font-bold text-[#0C002B] text-2xl mb-4">ITR-1 (Sahaj)</h4>
                                            <p className="text-gray-700 text-lg">For residents with income up to ₹50 Lakh from Salary, One House Property, and Other Sources (like interest). Cannot be used if you have capital gains or business income.</p>
                                        </div>
                                        <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 group hover:shadow-md transition-all">
                                            <h4 className="font-bold text-[#0C002B] text-2xl mb-4">ITR-4 (Sugam)</h4>
                                            <p className="text-gray-700 text-lg">For individuals/HUFs/Partnerships with income up to ₹50 Lakh from Business or Profession computed under **Section 44AD/44ADA** (Presumptive Taxation).</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200 group hover:shadow-md transition-all">
                                            <h4 className="font-bold text-[#0C002B] text-2xl mb-4">ITR-3</h4>
                                            <p className="text-gray-700 text-lg">For individuals/HUFs having income from a Proprietary Business or Profession. This is the most comprehensive form for entrepreneurs and doctors/lawyers.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="updated-returns" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Section 139(8A): Fixing Mistakes with the Updated Return (ITR-U)</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Mistakes happen. Maybe you missed the deadline for a revised return, or you discovered an undisclosed income from two years ago. Under <strong>Section 139(8A)</strong>, the government introduced the <strong>Updated Return (ITR-U)</strong>. This allows you to update your returns for up to two years after the end of the relevant assessment year.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        While it involves an additional tax (25% to 50% of the aggregate tax and interest), filing an ITR-U is a strategic way to buy peace of mind and avoid the much harsher penalties associated with tax evasion or "concealment of income." It is a tool for those who want to "come clean" and maintain a spotless compliance record.
                                    </p>
                                </section>

                                <section id="gst-returns-basics" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">GST Return Basics: Understanding GSTR-1 and GSTR-3B</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        GST compliance is a dual-step process every month (or quarter). One tracks what you sold, and the other calculates what you owe.
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0 text-lg">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faCalculator} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">GSTR-1 (Outward Supplies)</h4>
                                                <p className="text-gray-600">This is where you upload all your sales invoices. No tax is paid here, but this data flows into your customers' GSTR-2B so they can claim credit.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm">
                                            <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faCreditCard} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">GSTR-3B (Payment Return)</h4>
                                                <p className="text-gray-600">The most important return. You summarize your sales, deduct your purchases (ITC), and pay the remaining balance to the government.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="gst-reconciliation" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Art of Reconciliation: GSTR-2B vs GSTR-3B Matching</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the world of GST, "Input Tax Credit (ITC)" is king. But you can only claim ITC on what your suppliers have uploaded. This creates the need for monthly reconciliation between your books of accounts and the **GSTR-2B** (an auto-drafted statement of ITC).
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        If you claim ₹1 Lakh in ITC but your suppliers only uploaded invoices worth ₹80,000, you will receive a notice for the ₹20,000 difference plus interest. At IPR Karo, we perform "Forensic Reconciliation." We identify which suppliers haven't filed their returns so you can follow up with them, ensuring that not a single rupee of your hard-earned credit is lost to the government due to a supplier's negligence.
                                    </p>
                                </section>

                                <section id="e-verification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">E-Verification: How to Complete Your Filing with Aadhaar OTP</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Filing the return is only half the battle. If you don’t verify it, the department treats it as "never filed."
                                    </p>
                                    <div className="p-8 bg-[#0C002B] text-white rounded-[2rem] shadow-2xl my-10">
                                        <h4 className="text-cyan-400 font-bold text-2xl mb-4">The 30-Day Rule</h4>
                                        <p className="opacity-90 leading-relaxed text-lg mb-6 text-yellow-300">
                                            IMPORTANT: You must e-verify your ITR within 30 days of filing. If you fail, your return becomes invalid and you may face late fees under Section 234F.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                                            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-green-400" /> Aadhaar OTP (Instant)</div>
                                            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-green-400" /> Net Banking EVC</div>
                                            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-green-400" /> Bank Account Pre-validation</div>
                                            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-green-400" /> Physical Signature (Speed Post)</div>
                                        </div>
                                    </div>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Why Businesses Trust IPR Karo for Tax & Compliance Forensics</h2>
                                    <p className="mb-10 leading-relaxed text-lg text-center">
                                        We don't just file your returns; we optimize your tax health. Our team of CAs and tax lawyers ensure that every deduction is claimed and every potential notice is neutralized before it even arrives.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faSearch} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">AIS Scrutiny</h4>
                                            <p className="text-sm opacity-70">We manually cross-check your income data with the AIS and TIS to ensure zero discrepancies with department records.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Audit Preparedness</h4>
                                            <p className="text-sm opacity-70">We structure your filings to withstand systemic scrutiny, ensuring that you are always ready for a tax audit if selected.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faMoneyBillWave} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">ITC Optimization</h4>
                                            <p className="text-sm opacity-70">For GST clients, we ensure that every rupee of eligible Input Tax Credit is claimed, directly improving your cash flow.</p>
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
                                            author: "Siddharth Goel",
                                            role: "Freelance Software Architect",
                                            rating: 5,
                                            date: "2024-02-12",
                                            text: "Filing ITR-4 as a freelancer used to be a headache. IPR Karo's tax experts helped me categorize my professional expenses correctly, reducing my tax liability significantly. The process was entirely digital and very smooth.",
                                            avatar: "SG"
                                        },
                                        {
                                            author: "Rashmi Jindal",
                                            role: "Partner, Jindal Retailers",
                                            rating: 5,
                                            date: "2024-01-25",
                                            text: "We were struggling with GST nil returns and periodic compliance. IPR Karo took over our monthly filings and ensured we claimed the right ITC. No more late fees or worry about department notices.",
                                            avatar: "RJ"
                                        },
                                        {
                                            author: "Amit Trivedi",
                                            role: "Manager, Trivedi & Sons",
                                            rating: 5,
                                            date: "2023-11-30",
                                            text: "The AIS cross-check was vital. I had missed a small dividend income, but IPR Karo's team flagged it before filing. Saved me from a potential 143(1) notice later. Excellent attention to detail.",
                                            avatar: "AT"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Tax Maturity: From Burden to Business Asset</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        In the digital Bharat of tomorrow, <strong>online return filing</strong> is the ultimate proof of financial maturity. It is not merely a task to be rushed at the last minute; it is a strategic disclosure that shapes your global mobility, your credit access, and your legal standing. By embracing the digital compliance ecosystem, you transform an annual burden into a verifiable record of your success.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The future of tax is real-time, data-driven, and paperless. Whether you are filing a simple ITR-1 or managing the complex quarterly payments of the QRMP scheme, let accuracy be your guiding principle. Remember, a return filed on time is a door opened to new financial opportunities. Let IPR Karo be your partner in this journey, ensuring that your compliance is as innovative as your business. File with precision. Thrive with confidence.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Want to File Worry-Free?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Join 10,000+ happy taxpayers who trust IPR Karo for their annual and monthly tax compliance needs.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Book a Tax Consultation
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Speak to a Tax Expert
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Tax Notice Support</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Received a notice under **Section 143(1) or 139(9)**? Don’t panic. Our experts will draft your response today.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Respond to Notice
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Tax Knowledge</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/udyam-registration-agreement" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">MSME Benefits</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/indian-patent-office-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Patent Search Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/leave-and-license-agreement" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Property Rental Tax</span>
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
