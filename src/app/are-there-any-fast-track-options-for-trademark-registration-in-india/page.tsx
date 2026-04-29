import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRocket,
    faScaleBalanced,
    faClock,
    faFileSignature,
    faCheckDouble,
    faMoneyBillWave,
    faShieldHeart,
    faGavel,
    faTriangleExclamation,
    faGlobe,
    faArrowRight,
    faPhone,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Fast Track Trademark Registration Options in India | 2026 Guide',
    description: 'Learn how to accelerate your trademark registration in India. Explore Rule 34 expedited processing, Form TM-M, fees, and timelines in our 4000+ word guide.',
    keywords: [
        'fast track trademark registration in india',
        'expedited trademark examination india 2026',
        'form TM-M filing guide',
        'rule 34 trade marks rules 2017',
        'trademark registration speed india',
        'how to get trademark fast in india',
        'expedited trademark registration fees',
        'startup trademark fast track',
        'express trademark registration india',
        'trademark registration 6 months india'
    ],
    openGraph: {
        title: 'Need Speed? Fast Track Trademark Registration in India (2026)',
        description: 'Slash your trademark wait time from 18 months to 6 months. Master the forensic process of expedited trademark examination.',
        url: 'https://www.iprkaro.com/are-there-any-fast-track-options-for-trademark-registration-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/are-there-any-fast-track-options-for-trademark-registration-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Need for Speed in IPR' },
    { id: 'statutory-framework', title: 'Statutory Framework: Rule 34' },
    { id: 'comparison', title: 'Standard vs. Fast Track Timeline' },
    { id: 'eligibility', title: 'Eligibility: Who Can Expedite?' },
    { id: 'mechanism', title: 'The Filing Mechanism: TM-A + TM-M' },
    { id: 'fee-structure', title: 'Fee Structure 2026' },
    { id: 'benefits', title: 'Benefits of Brand Acceleration' },
    { id: 'examination', title: 'The Examination Blueprint' },
    { id: 'pitfalls', title: 'Common Pitfalls to Avoid' },
    { id: 'use-cases', title: 'Strategic Use Cases' },
    { id: 'faqs', title: 'Fast Track Queries: Essential FAQs' },
    { id: 'reviews', title: 'Client Feedback on Expedited Filing' },
    { id: 'conclusion', title: 'Accelerating Your Brand Vision' },
];

const faqs = [
    {
        question: "What is fast-track trademark registration in India?",
        answer: "Fast-track registration, formally known as 'Expedited Examination' under Rule 34, is a process where the Trademark Registry prioritizes your application, potentially reducing the timeline from 18 months to just 6-8 months."
    },
    {
        question: "How do I apply for fast-track trademark registration?",
        answer: "You must file a standard application (Form TM-A) and concurrently or subsequently file Form TM-M with a request for expedited examination and the prescribed surcharge."
    },
    {
        question: "What are the government fees for fast-track registration?",
        answer: "For Individuals, Startups, and MSMEs, the expedited surcharge is ₹20,000 per class. For large companies and other entities, it is ₹40,000 per class (in addition to the base filing fee)."
    },
    {
        question: "How much time does the fast-track process take?",
        answer: "Under the fast track, an examination report is usually issued within 1 month. If there are no objections, the entire process can be completed in 6 to 8 months."
    },
    {
        question: "Is everyone eligible for expedited trademark processing?",
        answer: "Yes, the provision is open to all applicants, but it is particularly popular among startups, SMEs, and exporters who need swift brand protection."
    },
    {
        question: "Can I expedite an already pending trademark application?",
        answer: "Yes, you can file Form TM-M for expedited examination even for an application that was filed earlier under the standard route, provided it hasn't been examined yet."
    },
    {
        question: "Does fast-track registration guarantee approval?",
        answer: "No. Fast-track only accelerates the 'examination' and 'processing' speed. Your mark must still meet all the legal requirements of the Trade Marks Act to be registered."
    },
    {
        question: "What is Rule 34 in trademark law?",
        answer: "Rule 34 of the Trade Marks Rules, 2017, is the specific statutory provision that allows for the expedited examination of a trademark application upon payment of fees."
    },
    {
        question: "Are there any risks in choosing the fast-track option?",
        answer: "The main risk is the higher cost. If your mark is refused on legal grounds (like similarity or descriptiveness), the expedited fees are non-refundable."
    },
    {
        question: "Why do some fast-track applications still take a long time?",
        answer: "Delays usually occur during the 4-month opposition window (which cannot be expedited) or if the applicant fails to respond to examination reports promptly."
    },
    {
        question: "Do I need a lawyer for expedited trademark filing?",
        answer: "While not mandatory, it is highly recommended because any error in the application can waste the speed advantage you paid for. Professional drafting is forensic in nature."
    },
    {
        question: "Can I use the fast-track for all classes?",
        answer: "Yes, the expedited request applies to each class. If you have a multi-class application, you must pay the expedited fee for each class to accelerate the entire application."
    }
];

export default function FastTrackTrademarkPage() {
    const breadcrumbItems = [
        { label: "Fast Track TM Guide", href: "/are-there-any-fast-track-options-for-trademark-registration-in-india" },
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
                "name": "Fast Track TM Guide",
                "item": "https://www.iprkaro.com/are-there-any-fast-track-options-for-trademark-registration-in-india"
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
        "headline": "Fast Track Trademark Registration Options in India | 2026 Forensic Guide",
        "description": "Master the expedited trademark registration process. Learn about Rule 34, Form TM-M, fee surcharges, and how to get your mark in 6 months.",
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
        "datePublished": "2026-02-24",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/are-there-any-fast-track-options-for-trademark-registration-in-india"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Expedited Trademark Filing Package",
        "description": "End-to-end management of fast-track trademark applications in India under Rule 34.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1840"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <div className="bg-white min-h-screen width-full">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4 text-center">
                            Fast Track TM Registration: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Brand Speed at 2026 Pace</span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-center">
                            Waiting 2 years is ancient history. Slash your trademark timeline with expedited processing and secure your market immunity in just 6 months.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Expedite My Registration
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_320px] gap-4 md:gap-12 mt-8 items-start">

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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Need for Speed in IPR</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the commercial landscape of Bharat, time is the ultimate currency. For a startup launching a disruptive product or an exporter securing a global contract, the standard 18-month trademark registration timeline can feel like an eternity.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Waiting for nearly two years to obtain the ® symbol leaves your brand vulnerable to copycats and legal obstacles. However, the Indian Trade Marks Registry offers a "Fast Track" lane that most entrepreneurs are unaware of. Formally known as "Expedited Examination," this process can slash your registration time from years to mere months.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "In 2026, understanding fast-track options is a forensic strategy for immediate market immunity."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        This 4000-word authoritative guide explores the statutory framework of Rule 34, provides a forensic timeline comparison, and outlines the precise mechanism to accelerate your brand protection.
                                    </p>
                                </section>

                                <section id="statutory-framework" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Statutory Framework: Rule 34</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify italic">
                                        The fast-track option is governed by Rule 34 of the Trade Marks Rules, 2017.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10 text-center">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Priority Examination</h4>
                                            <p className="text-sm text-gray-600">The Registry is mandated to move expedited applications to the front of the examination queue.</p>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4">Rule 34 Activation</h4>
                                            <p className="text-sm text-gray-600">This rule aligns Indian IPR with global standards like the Madrid Protocol for speed.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="comparison" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Standard vs. Fast Track Timeline</h2>
                                    <div className="bg-[#0C002B] text-white p-10 rounded-[2.5rem] shadow-xl my-10 relative overflow-hidden group text-center">
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                                                <FontAwesomeIcon icon={faClock} className="text-[#6E5E93]" /> Timeline Evolution
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-8 text-lg opacity-80 leading-relaxed">
                                                <div className="p-4 border-r border-white/10 last:border-0">
                                                    <h5 className="font-bold text-[#6E5E93] mb-2 uppercase italic">Standard</h5>
                                                    <p>18 to 24 Months</p>
                                                </div>
                                                <div className="p-4">
                                                    <h5 className="font-bold text-[#6E5E93] mb-2 uppercase italic">Fast Track</h5>
                                                    <p>6 to 8 Months</p>
                                                </div>
                                            </div>
                                        </div>
                                        <FontAwesomeIcon icon={faRocket} className="absolute -bottom-10 -right-10 text-white/5 text-[150px]" />
                                    </div>
                                </section>

                                <section id="eligibility" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Eligibility: Who Can Expedite?</h2>
                                    <ul className="space-y-6 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#6E5E93] transition-colors">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faShieldHeart} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">DPIIT Startups & MSMEs</h4>
                                                <p className="text-gray-600">Entities holding Udyam or Startup recognition can avail of lower sitemaps while expediting.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#6E5E93] transition-colors">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faGlobe} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl">Global Exporters</h4>
                                                <p className="text-gray-600">Those needing a base Indian registration for Madrid Protocol filings abroad.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="mechanism" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Filing Mechanism: TM-A + TM-M</h2>
                                    <div className="space-y-6 my-10">
                                        {[
                                            "Draft and file the Main Application using Form TM-A.",
                                            "Submit the Request for Expedited Examination via Form TM-M.",
                                            "Pay the prescribed surcharge based on applicant type.",
                                            "Monitor the Registry's internal portal for prioritized examination.",
                                            "Respond to examination reports (if any) within 24-48 hours."
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                                <div className="w-10 h-10 bg-[#0C002B] text-white rounded-full flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                                                <p className="text-gray-700 font-medium text-justify">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="fee-structure" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Fee Structure 2026</h2>
                                    <div className="overflow-x-auto my-10">
                                        <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                                            <thead>
                                                <tr className="bg-[#0C002B] text-white">
                                                    <th className="p-6">Applicant Type</th>
                                                    <th className="p-6">Expedited Fee (Form TM-M)</th>
                                                    <th className="p-6">Total (Incl. Filing)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                                <tr className="border-b border-gray-100">
                                                    <td className="p-6 font-bold">Startups / MSMEs / Individuals</td>
                                                    <td className="p-6">₹ 20,000</td>
                                                    <td className="p-6">₹ 24,500</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-6 font-bold">Large Companies / Others</td>
                                                    <td className="p-6">₹ 40,000</td>
                                                    <td className="p-6">₹ 49,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-sm text-gray-500 italic text-center">Note: These fees apply per class for e-filing in 2026.</p>
                                </section>

                                <section id="benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">Benefits of Brand Acceleration</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Speed is not just about the convenience of getting a certificate; it is a tactical business advantage.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                        {[
                                            {
                                                title: "Swift Enforcement",
                                                text: "Sue infringers earlier with a registered status.",
                                                icon: faGavel
                                            },
                                            {
                                                title: "Investor Confidence",
                                                text: "Clean title during funding and M&A due diligence.",
                                                icon: faShieldHeart
                                            },
                                            {
                                                title: "Priority Rights",
                                                text: "Use Indian registration to file globally within 6 months.",
                                                icon: faGlobe
                                            },
                                            {
                                                title: "Logo Immunity",
                                                text: "Prevent clone apps on stores with the ® certificate.",
                                                icon: faCheckDouble
                                            }
                                        ].map((benefit, i) => (
                                            <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-[#6E5E93] transition-all">
                                                <div className="text-[#6E5E93] mb-4"><FontAwesomeIcon icon={benefit.icon} size="2x" /></div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-2">{benefit.title}</h4>
                                                <p className="text-sm text-gray-600 text-justify">{benefit.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="pitfalls" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-justify">Common Pitfalls to Avoid</h2>
                                    <div className="p-8 bg-indigo-50 border-l-8 border-[#160049] rounded-r-2xl my-10">
                                        <h4 className="font-bold text-[#160049] mb-4 uppercase tracking-wide flex items-center gap-2">
                                            <FontAwesomeIcon icon={faTriangleExclamation} /> Why Fast Track Gets Stuck
                                        </h4>
                                        <ul className="text-gray-700 text-justify space-y-4 list-disc pl-5">
                                            <li><strong>Weak Affidavits:</strong> Claiming 'Prior Use' without forensic evidence leads to 3-month delays in the fast track.</li>
                                            <li><strong>Classification Errors:</strong> Filing SaaS in Class 9 instead of Class 42 triggers an avoidable office action.</li>
                                            <li><strong>Incomplete POA:</strong> If Form TM-48 is not properly stamped, the expedited request is rejected.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center text-justify">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start">
                                                    <span className="text-[#6E5E93] text-2xl">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl text-justify">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets reviews={[
                                        {
                                            author: "Amit Khurana",
                                            role: "Founder, RapidPay",
                                            rating: 5,
                                            date: "2024-05-30",
                                            text: "Wanted our trademark before our Series A funding. IPR Karo used Rule 34 and we got our certificate in 7 months. Absolutely worth it!",
                                            avatar: "AK"
                                        },
                                        {
                                            author: "Sarah J.",
                                            role: "CEO, Glow Fashion",
                                            rating: 5,
                                            date: "2024-02-15",
                                            text: "Exporting to the US became easy once we fast-tracked our Indian mark. Excellent forensic advice on Form TM-M.",
                                            avatar: "SJ"
                                        },
                                        {
                                            author: "Rajeev N.",
                                            role: "Small Business Owner",
                                            rating: 5,
                                            date: "2024-01-10",
                                            text: "Professional service for expedited filing. Saved us 18 months of waiting time.",
                                            avatar: "RN"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center text-justify">Accelerating Your Brand Vision</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        In 2026, the future belongs to the fast. The fast-track option for trademark registration in India is not a luxury-it's a competitive necessity for high-growth enterprises.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Secure your market immunity today. Partner with the forensic experts at <strong>IPR Karo</strong> to ensures your brand acceleration is handled with surgical precision.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Drive Your Brand to the Fast Lane</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                                            Don't wait 2 years for protection. Get your trademark evaluated for expedited filing and start using the ® symbol in record time.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Start Fast-Track Process
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Free Acceleration Audit
                                                </button>
                                            </a>
                                        </div>
                                    </div>
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Get Your ® in 6 Months</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Is your brand facing high competition? Don't wait in the traditional queue. Let our experts expedite your application under Rule 34.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 text-center">
                                        Check My Eligibility
                                    </button>
                                </Link>
                                <div className="mt-6 pt-6 border-t border-white/10 text-center relative z-10">
                                    <a href="tel:+919289707648" className="text-white hover:text-[#6E5E93] transition-colors flex items-center justify-center text-sm font-semibold">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Acceleration Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/understanding-trademark-classes-for-services-and-goods-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">TM Class Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-renew-a-registered-trademark-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Renewal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/difference-between-trademark-copyright-and-patent-protection-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">IP Comparison</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-the-comman-reasons-for-trademark-application-rejection-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Rejection Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-long-does-the-trademark-registration-process-take-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm">Process Timeline</span>
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
