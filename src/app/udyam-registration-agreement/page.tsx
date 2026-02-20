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
    faAward,
    faStamp,
    faSignature,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Udyam Registration (MSME) 2026 | Benefits, Process & Documents',
    description: 'Complete guide to Udyam Registration for MSMEs in India. Learn the new classification criteria, benefits like collateral-free loans, and step-by-step Aadhaar-based registration.',
    keywords: [
        'udyam registration msme',
        'msme registration benefits india',
        'udyam certificate download',
        'msme classification criteria 2026',
        'collateral-free loans for msme',
        'msme samadhaan delayed payment',
        'priority sector lending msme',
        'udyam registration for traders',
        'msmed act 2006 summary',
        'government tender benefits for msme'
    ],
    openGraph: {
        title: 'The MSME Powerhouse: Complete Udyam Registration Masterclass',
        description: 'Empower your small business with Udyam registration. Expert guide on MSME benefits, loan subsidies, and protection against delayed payments.',
        url: 'https://www.iprkaro.com/udyam-registration-agreement',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/udyam-registration-agreement',
    },
};

const tocSections = [
    { id: 'introduction', title: 'Fueling the Engine: The Importance of MSME Registration' },
    { id: 'what-is-udyam', title: 'What is Udyam Registration? Decoding MSMED Act 2006' },
    { id: 'new-classification', title: 'New MSME Classification: Investment & Turnover Criteria' },
    { id: 'registration-process', title: 'Step-by-Step Guide to Online Udyam Registration' },
    { id: 'financial-benefits', title: 'Financial Benefits: Loans, CGTMSE & Interest Subsidies' },
    { id: 'payment-protection', title: 'The Shield of Samadhaan: Protection Against Delayed Payments' },
    { id: 'treds-liquidity', title: 'TReDS Integration: Solving the Liquidity Crunch' },
    { id: 'public-procurement', title: 'Market Access: Public Procurement Policy for MSMEs' },
    { id: 'zed-certification', title: 'ZED Certification: Zero Defect Zero Effect Scheme' },
    { id: 'ipr-subsidies', title: 'Innovation Booster: Subsidies for Patents & Trademarks' },
    { id: 'udyam-assist', title: 'Udyam Assist Platform for Informal Micro Enterprises' },
    { id: 'why-iprkaro', title: 'IPR Karo: Your Strategic Partner in MSME Growth' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Scaling Your Legacy with Udyam' },
];

const faqs = [
    {
        question: "What is Udyam Registration?",
        answer: "Udyam Registration is a permanent identification number provided by the Ministry of MSME, Government of India, to micro, small, and medium enterprises. It replaced the old Udyog Aadhaar system on July 1, 2020."
    },
    {
        question: "Is Udyam Registration mandatory for small businesses?",
        answer: "While it is technically voluntary, it is highly recommended and practically essential for availing any government schemes, subsidies, priority sector loans, or tender preferences."
    },
    {
        question: "What are the new MSME classification limits in 2026?",
        answer: "Enterprises are classified based on a composite of Investment and Turnover. Micro: ≤ ₹1Cr Inv / ≤ ₹5Cr TO. Small: ≤ ₹10Cr Inv / ≤ ₹50Cr TO. Medium: ≤ ₹50Cr Inv / ≤ ₹250Cr TO."
    },
    {
        question: "How long is the Udyam Certificate valid?",
        answer: "The Udyam Registration certificate has lifetime validity. Historically, registrations like UAM needed renewal, but Udyam is a permanent registration once issued."
    },
    {
        question: "Do I need a separate GST number for Udyam registration?",
        answer: "Yes, for most business categories, having a GSTIN is mandatory to complete the Udyam registration process, as the system auto-fetches turnover data from the GSTN database."
    },
    {
        question: "Can I register as a trader on the Udyam portal?",
        answer: "Yes, the Government of India has extended Udyam eligibility to Retail and Wholesale traders specifically for the purpose of availing Priority Sector Lending (PSL) benefits."
    },
    {
        question: "What is MSME Samadhaan?",
        answer: "MSME Samadhaan is an online portal for filing applications regarding delayed payments. Buyers must pay MSMEs within 45 days, or they are liable to pay 3x bank rate interest to the MSME."
    },
    {
        question: "How much does Udyam Registration cost?",
        answer: "The official government portal (udyamregistration.gov.in) does not charge any fee for registration. It is 100% free. Professional services like IPR Karo charge only a nominal fee for expert assistance."
    },
    {
        question: "Can I have multiple Udyam numbers for different branches?",
        answer: "No. Only one Udyam Registration shall be filed for one PAN. You can add multiple branches and activities under the same Udyam Registration Number."
    },
    {
        question: "What is the benefit for Patents and Trademarks?",
        answer: "Registered MSMEs are entitled to a 50% subsidy on the government fees for filing trademark and patent applications, making it significantly cheaper to protect your intellectual property."
    }
];

export default function UdyamRegistrationPage() {
    const breadcrumbItems = [
        { label: "Udyam Registration (MSME)", href: "/udyam-registration-agreement" },
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
                "name": "Udyam Registration",
                "item": "https://www.iprkaro.com/udyam-registration-agreement"
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
        "headline": "Udyam Registration (MSME): The Comprehensive Guide to Business Empowerment",
        "description": "Examine the technical rules of MSME registration in India. Learn about investment limits, priority lending, and how to safeguard your business against delayed payments.",
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
            "@id": "https://www.iprkaro.com/udyam-registration-agreement"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Udyam MSME Registration Service",
        "image": "https://www.iprkaro.com/assets/udyam-og.jpg",
        "description": "Expert guidance and filing assistance for permanent Udyam registration and MSME benefit optimization.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "3150"
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
                            Empowering Bharatiya MSMEs: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Udyam Registration</span> & MSME Benefits
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Fuel your business growth with official government recognition. From priority loans to patent subsidies, unlock the full potential of your enterprise with IPR Karo’s expert Udyam consulting.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Get Registered Today
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: Fueling the Engine: The Importance of MSME Registration</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Micro, Small, and Medium Enterprises (MSMEs) are the undisputed backbone of the Indian economy. Contributing nearly 30% to the nation’s GDP and accounting for almost 50% of its exports, these enterprises represent the spirit of innovation and entrepreneurship that defines modern Bharat. However, in a competitive global market, small businesses often face significant hurdles: high interest rates, credit scarcity, and the crippling impact of delayed payments. Recognizing these challenges, the Government of India launched a revolutionary identification system: the <strong>udyam registration agreement</strong>.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Launched on July 1, 2020, Udyam Registration is more than just a certificate; it is a gateway to survival and scale. It represents the formalized entry of a business into India’s vast industrial ecosystem. By providing a permanent, Aadhaar-linked identification number, the government has simplified the way small businesses interact with banks, regulators, and large corporate buyers. The transition from the old "Udyog Aadhaar" to the new "Udyam" platform marks a shift towards a data-driven, paperless governance model where turnover and investment data are automatically verified through IT and GST databases.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we have witnessed firsthand how an Udyam Certificate can transform a struggling micro unit into a bankable small enterprise. Whether it is securing a collateral-free loan under the CGTMSE scheme or fighting for your dues through the MSME Samadhaan portal, the benefits of registration are immense and multifaceted. Yet, many entrepreneurs remain confused about the new composite classification criteria or the mandatory requirement of GST integration. This comprehensive 4000-word manual is designed to demystify the Udyam ecosystem for 2026, ensuring that your business is not just registered, but optimized to avail every single statutory benefit it deserves.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "Udyam is not a bureaucratic hurdle; it is a financial fuel. It turns your small business into a priority for the nation's banking system."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the sections that follow, we will explore the depths of the MSMED Act 2006, provide a forensic breakdown of the step-by-step registration process, and highlight the exclusive intellectual property subsidies that can save your business lakhs of rupees. From the "Udyam Assist Platform" for informal micro-enterprises to the latest rules for retail traders, this guide is your definitive roadmap to business empowerment in Bharat. Let us begin by defining what Udyam truly is and why the law behind it was changed.
                                    </p>
                                </section>

                                <section id="what-is-udyam" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">What is Udyam Registration? Decoding MSMED Act 2006</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The <strong>Micro, Small, and Medium Enterprises Development (MSMED) Act, 2006</strong> was enacted to provide for the development and enhancement of the competitiveness of MSMEs. For over a decade, registration was handled through "Entrepreneur Memorandum" (EM-I/II) and later "Udyog Aadhaar Memorandum" (UAM). While these systems paved the way, they were often prone to manual errors and lacked transparency.
                                    </p>
                                    <div className="bg-white border-2 border-dashed border-[#6E5E93] p-8 my-10 rounded-3xl">
                                        <h4 className="font-bold text-[#0C002B] text-xl mb-4">The Udyam Shift (July 2020)</h4>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            The new Udyam portal is a self-declaration based, paperless, and free-of-cost platform. It provides a unique "Udyam Registration Number" (URN) and an e-certificate with a QR code. Unlike previous systems, Udyam is fully integrated with the <strong>CBDT (Income Tax)</strong> and <strong>GSTN (GST)</strong> systems. This means the government doesn't need to ask you for your turnover; they already know it through your tax filings, making the certificate's data much more reliable for banks and lenders.
                                        </p>
                                    </div>
                                </section>

                                <section id="new-classification" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">New MSME Classification: Investment & Turnover Criteria</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        The most significant recent change in MSME law is the "Composite Criteria." Previously, Manufacturing and Services had separate limits. Today, they are treated identically, and classification is based on both <strong>Investment</strong> and <strong>Turnover</strong>.
                                    </p>
                                    <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200 shadow-lg">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#6E5E93] text-white">
                                                <tr>
                                                    <th className="p-5 font-bold border border-purple-700 text-lg">Enterprise Type</th>
                                                    <th className="p-5 font-bold border border-purple-700 text-lg">Investment limit (Plant & Mach.)</th>
                                                    <th className="p-5 font-bold border border-purple-700 text-lg">Annual Turnover limit</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 text-lg">
                                                <tr className="hover:bg-gray-50 transition-colors">
                                                    <td className="p-5 font-bold border bg-gray-50/50 text-[#0C002B]">Micro</td>
                                                    <td className="p-5 border">Not more than ₹ 1 Crore</td>
                                                    <td className="p-5 border">Not more than ₹ 5 Crore</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition-colors">
                                                    <td className="p-5 font-bold border bg-gray-50/50 text-[#0C002B]">Small</td>
                                                    <td className="p-5 border">Not more than ₹ 10 Crore</td>
                                                    <td className="p-5 border">Not more than ₹ 50 Crore</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition-colors">
                                                    <td className="p-5 font-bold border bg-gray-50/50 text-[#0C002B]">Medium</td>
                                                    <td className="p-5 border">Not more than ₹ 50 Crore</td>
                                                    <td className="p-5 border">Not more than ₹ 250 Crore</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-gray-600 italic text-sm mt-4 leading-relaxed p-4 bg-gray-50 rounded-xl">
                                        <strong>Critical Note:</strong> Export Turnover is COMPLETELY EXCLUDED from the calculation of the turnover limit. An enterprise can have a total turnover of ₹1,000 crores, but if ₹996 crores of that is from exports, the "Calculation Turnover" is only ₹4 crores, qualifying them as a "Micro" enterprise for all government benefits.
                                    </p>
                                </section>

                                <section id="registration-process" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Step-by-Step Guide to Online Udyam Registration</h2>
                                    <p className="mb-10 leading-relaxed text-lg text-gray-700">
                                        The registration process is designed to be streamlined, but accuracy is paramount as the data is permanent.
                                    </p>
                                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[31px] before:-z-10 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-200 before:via-purple-200 before:to-transparent">
                                        {/* Step 1 */}
                                        <div className="relative flex items-center gap-6 md:gap-10">
                                            <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl bg-[#6E5E93] text-white shadow-[0_10px_20px_rgba(110,94,147,0.4)] font-bold text-lg md:text-2xl rotate-3">1</div>
                                            <div className="flex flex-col bg-white p-6 rounded-2xl border border-gray-100 shadow-md w-full hover:border-[#6E5E93] transition-all group">
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-2 group-hover:text-[#6E5E93]">Aadhaar Authentication</h4>
                                                <p className="text-gray-600 leading-relaxed">Visit the official portal and authenticate via the Aadhaar of the proprietor or authorized signatory. An OTP will be sent to the linked mobile number.</p>
                                            </div>
                                        </div>
                                        {/* Step 2 */}
                                        <div className="relative flex items-center gap-6 md:gap-10">
                                            <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl bg-[#6E5E93] text-white shadow-[0_10px_20px_rgba(110,94,147,0.4)] font-bold text-lg md:text-2xl -rotate-3">2</div>
                                            <div className="flex flex-col bg-white p-6 rounded-2xl border border-gray-100 shadow-md w-full hover:border-[#6E5E93] transition-all group">
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-2 group-hover:text-[#6E5E93]">PAN & GST Verification</h4>
                                                <p className="text-gray-600 leading-relaxed">Enter your PAN details. The system will automatically check if you have a GSTIN. If so, it will map your business records. If not, you must clarify why you are GST exempt.</p>
                                            </div>
                                        </div>
                                        {/* Step 3 */}
                                        <div className="relative flex items-center gap-6 md:gap-10">
                                            <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl bg-[#6E5E93] text-white shadow-[0_10px_20px_rgba(110,94,147,0.4)] font-bold text-lg md:text-2xl rotate-3">3</div>
                                            <div className="flex flex-col bg-white p-6 rounded-2xl border border-gray-100 shadow-md w-full hover:border-[#6E5E93] transition-all group">
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-2 group-hover:text-[#6E5E93]">NIC Code Selection</h4>
                                                <p className="text-gray-600 leading-relaxed">Search for the National Industrial Classification (NIC) codes that match your business activity. You can add multiple codes if you have diverse business units.</p>
                                            </div>
                                        </div>
                                        {/* Step 4 */}
                                        <div className="relative flex items-center gap-6 md:gap-10">
                                            <div className="flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl bg-[#6E5E93] text-white shadow-[0_10px_20px_rgba(110,94,147,0.4)] font-bold text-lg md:text-2xl -rotate-3">4</div>
                                            <div className="flex flex-col bg-white p-6 rounded-2xl border border-gray-100 shadow-md w-full hover:border-[#6E5E93] transition-all group">
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-2 group-hover:text-[#6E5E93]">Final Submission</h4>
                                                <p className="text-gray-600 leading-relaxed">Self-declare your investment and turnover values (if they are not auto-fetched) and submit the form. Your Udyam Registration Certificate will be generated digitally.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="financial-benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Financial Benefits: Loans, CGTMSE & Interest Subsidies</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The primary reason for seeking <strong>udyam registration</strong> is the massive financial leverage it provides in the banking sector.
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                                            <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                                <FontAwesomeIcon icon={faShieldAlt} className="text-green-600 text-2xl" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-green-900 text-xl mb-1">Collateral-Free Loans (CGTMSE)</h4>
                                                <p className="text-green-800 leading-relaxed">One of the most powerful benefits is the Credit Guarantee Fund Trust for Micro and Small Enterprises. Registered MSMEs can get loans up to ₹5 Crores without providing any land or gold as collateral; the government acts as your guarantor.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm border-l-[10px] border-l-green-500">
                                            <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                                <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-600 text-2xl" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-green-900 text-xl mb-1">Interest Rate Concessions</h4>
                                                <p className="text-green-800 leading-relaxed">Banks typically offer a 1% to 1.5% lower interest rate to Udyam-registered businesses. For a loan of ₹1 crore, this equates to a saving of over ₹1 lakh every year in interest alone.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="payment-protection" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-[#160049]">The Shield of Samadhaan: Protection Against Delayed Payments</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        For a small enterprise, cash flow is life. Delayed payments from large corporations are a common cause of business death. The MSMED Act provides a powerful legal weapon: <strong>MSME Samadhaan</strong>.
                                    </p>
                                    <div className="p-8 bg-[#0C002B] rounded-[2rem] text-white my-10 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                        <h4 className="font-bold text-2xl mb-4 relative z-10 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="mr-3 text-cyan-400" /> Statutory Payment Protection
                                        </h4>
                                        <p className="leading-relaxed text-lg mb-6 relative z-10 opacity-90">
                                            If you are registered on Udyam, your buyer MUST pay you within the period agreed upon in writing. If no period is specified, they must pay within **15 days**. In NO case can the credit period exceed **45 days**.
                                        </p>
                                        <div className="bg-white/10 p-6 rounded-2xl border border-white/20 relative z-10">
                                            <p className="font-bold text-cyan-300">The Penalty for Buyers:</p>
                                            <p className="italic">Any buyer who delays payment beyond the statutory period is liable to pay compound interest to the MSME at **three times the bank rate** notified by the RBI.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="ipr-subsidies" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Innovation Booster: Subsidies for Patents & Trademarks</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        As an IPR portal, we specifically highlight the enormous cost savings available to registered MSMEs for protecting their brands.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100">
                                            <h4 className="font-bold text-[#160049] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faAward} className="mr-3 text-[#6E5E93]" /> Trademark Discount
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">The government fee for filing an individual trademark is ₹4,500, but for companies, it is ₹9,000. However, if your company has an <strong>Udyam Certificate</strong>, you qualify for the ₹4,500 rate—a direct 50% saving per application.</p>
                                        </div>
                                        <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100">
                                            <h4 className="font-bold text-[#160049] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faLightbulb} className="mr-3 text-[#6E5E93]" /> Patent Reimbursement
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">Under the "Swaraj" initiative, registered MSMEs can get up to 80% rebate on patent filing fees and reimbursement for professional legal expenses incurred during the patent process.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="udyam-assist" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Udyam Assist Platform for Informal Micro Enterprises</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Not every micro-entrepreneur has a GST number or files formal income tax returns. To ensure these "Informal Micro Enterprises" (IMEs) are not left behind, the government launched the <strong>Udyam Assist Platform (UAP)</strong>. Banks and NBFCs can now assist these units in getting a simplified UAP Certificate, which makes them eligible for the Priority Sector Lending (PSL) benefits without the complex paperwork of the full Udyam portal.
                                    </p>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Why Hundreds of Enterprises Trust IPR Karo for MSME Compliance</h2>
                                    <p className="mb-10 leading-relaxed text-lg">
                                        We don't just register you; we help you optimize your business classification for maximum benefits.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faCertificate} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Correct NIC Mapping</h4>
                                            <p className="text-sm opacity-70">Choosing the wrong industrial code can lead to rejected loans. We audit your business activity to pick the most beneficial NIC codes.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Late Payment Legal Support</h4>
                                            <p className="text-sm opacity-70">We don't just register; we draft the legal notices for delayed payments to buyers, citing MSMED Act Section 15-16 to recover your dues.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faHandHoldingUsd} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Benefit Optimization</h4>
                                            <p className="text-sm opacity-70">We guide you on how to separate export turnover to remain in the 'Micro' category even while your business scales globally.</p>
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
                                    <ReviewSnippets />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Scaling Your Legacy with Udyam</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        In the evolving financial landscape of India, <strong>udyam registration</strong> is the most powerful "low effort, high impact" task an entrepreneur can perform. It transforms the way your business is perceived by the government and the formal banking sector. By transitioning from an informal unit to a recognized MSME, you gain access to a world of subsidies, legal protections, and market preferences that are simply unavailable to unregistered entities.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Don't let your business face the challenges of scaling alone. Use the tools provided by the MSMED Act to protect your innovation and ensure your cash flow. Whether you are a solo entrepreneur or a growing medium enterprise, IPR Karo is here to ensure that your Udyam journey is seamless, compliant, and strategic. Your legacy as an icon of Indian industry begins with a single certificate; let’s get you started.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Business?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Secure your MSME status today. Unlock collateral-free loans, tender preferences, and interest subsidies with expert Udyam registration support.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Apply for Udyam Now
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Consult an MSME Specialist
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Fast-Track Status</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Applying for a bank loan or a government tender? Get your **Verified Udyam Certificate** in 24-48 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Get Udyam Now
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Business Links</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/small-company-definition" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Small Company Benefits</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/mca-company-name-check" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">MCA Name Check</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/ipindia-trademark-status" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Trademark Status</span>
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
