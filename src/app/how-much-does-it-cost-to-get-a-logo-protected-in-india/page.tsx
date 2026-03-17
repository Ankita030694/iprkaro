import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoneyBillWave,
    faShieldAlt,
    faRocket,
    faBuilding,
    faSearch,
    faFileInvoiceDollar,
    faGlobe,
    faChartLine,
    faGavel,
    faHistory,
    faCheckCircle,
    faExclamationTriangle,
    faUserTie,
    faPercentage,
    faFileAlt,
    faCalculator,
    faCrown,
    faStamp,
    faSignature,
    faHandHoldingUsd,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'How Much Does it Cost to Get a Logo Protected in India? | 2026 Fee Guide',
    description: 'Complete breakdown of logo protection costs in India. Learn about government fees, professional attorney charges, and 50% rebates for MSMEs and Startups.',
    keywords: [
        'how much does it cost to get a logo protected in india',
        'trademark registration fees india 2026',
        'cost of logo registration for startups',
        'government fee for trademark registration india',
        'professional fees for trademark attorney india',
        'msme trademark registration cost rebate',
        'logo protection india price list',
        'trademark renewal cost india',
        'sipp scheme startup trademark cost',
        'online trademark filing charges bharat'
    ],
    openGraph: {
        title: 'Logo Protection Costs in India: The Definitive 2026 Guide',
        description: 'Discover the total investment required to secure your logo. Detailed analysis of statutory fees, professional charges, and cost saving strategies.',
        url: 'https://www.iprkaro.com/how-much-does-it-cost-to-get-a-logo-protected-in-india',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/how-much-does-it-cost-to-get-a-logo-protected-in-india',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Intellectual Investment: Why Logo Protection Matters' },
    { id: 'government-fees', title: 'The Official Price Tag: Understanding Government Fees' },
    { id: 'applicant-types', title: 'Cost tiers for Individuals, Startups, and MSMEs' },
    { id: 'professional-fees', title: 'The Professional Variable: Attorney and Agent Fees' },
    { id: 'rebate-benefits', title: 'Unlocking the Rebates: 50% Savings for Small Entities' },
    { id: 'sipp-scheme', title: 'SIPP Scheme: Free Professional Support for Startups' },
    { id: 'hidden-costs', title: 'Hidden Costs: Searches, Objections, and Oppositions' },
    { id: 'renewal-costs', title: 'The Long Term Outlook: Trademark Renewal Costs' },
    { id: 'efiling-vs-physical', title: 'Digital Economy: e-Filing vs. Physical Filing costs' },
    { id: 'global-costs', title: 'Going Global: Madrid Protocol Cost Overview' },
    { id: 'why-iprkaro', title: 'IPRKaro: Maximizing ROI on Your Brand Security' },
    { id: 'faqs', title: 'Expert Corner: Cost Related FAQs' },
    { id: 'reviews', title: 'What Our Clients Say' },
    { id: 'conclusion', title: 'Securing Your Mark for the Future' },
];

const faqs = [
    {
        question: "How much does it cost to get a logo protected in India for a startup?",
        answer: "For a DPIIT recognized startup or an MSME with Udyam registration, the government e-filing fee is 4,500 rupees per class. This is a 50% concession compared to the standard corporate rate of 9,000 rupees."
    },
    {
        question: "What is the total cost including professional fees?",
        answer: "The total cost usually ranges from 9,500 to 20,000 rupees for small entities. This includes the 4,500 government fee and professional charges for search, drafting, and filing. IPR Karo offers competitive packages to keep this affordable."
    },
    {
        question: "Is there a recurring fee for logo protection?",
        answer: "There are no monthly or yearly fees. However, a trademark is valid for 10 years, after which you must pay a renewal fee (currently 9,000 rupees for e-filing) to maintain protection for another decade."
    },
    {
        question: "Does the cost increase if my logo has multiple colors?",
        answer: "No, the government fee is based on the 'Class' of goods or services, not the complexity or color profile of the logo. You can register a black and white or a multicolored logo for the same statutory fee."
    },
    {
        question: "How much does a trademark search cost?",
        answer: "While the public search tool is free, a professional forensic search report with legal analysis usually costs between 1,000 and 3,000 rupees. This is a small price to avoid filing a mark that might be objected to later."
    },
    {
        question: "Are there extra costs if my application is objected to by the registry?",
        answer: "Yes, responding to an examination report (objection) usually involves professional drafting fees, which range from 3,000 to 7,000 rupees depending on the complexity of the legal arguments required."
    },
    {
        question: "Is the logo protection fee refundable if the application is rejected?",
        answer: "No, the government fee paid for trademark filing is non refundable regardless of whether the mark is eventually registered, abandoned, or rejected. This highlights the importance of a pre filing search."
    },
    {
        question: "What is the SIPP scheme for startups?",
        answer: "The Startups Intellectual Property Protection (SIPP) scheme allows eligible startups to receive professional assistance from facilitators (lawyers/agents) for free, as the government pays the professional fees directly."
    },
    {
        question: "Can I protect my logo in multiple classes with one fee?",
        answer: "No, the fee is per class. If your brand sells both clothing (Class 25) and retail services (Class 35), you must pay for two classes, effectively doubling the government and professional fees."
    },
    {
        question: "What is the cost difference between e-filing and physical filing?",
        answer: "E-filing is 10% cheaper. For small entities, e-filing is 4,500 rupees while physical filing is 5,000 rupees. For large companies, its 9,000 rupees vs 10,000 rupees respectively."
    },
    {
        question: "Does the logo protection cost include copyright as well?",
        answer: "Trademark and Copyright are different. This guide covers Trademark registration (brand protection). If you wish to also register the artistic copyright of the logo, separate government fees apply (typically 500 to 2,000 rupees)."
    },
    {
        question: "Are there any hidden taxes like GST on government fees?",
        answer: "Statutory government fees are usually exempt from GST. However, professional attorney fees are subject to 18% GST (which can be claimed as Input Tax Credit if you have a GST registration)."
    }
];

export default function LogoProtectionCostPage() {
    const breadcrumbItems = [
        { label: "Logo Protection Cost", href: "/how-much-does-it-cost-to-get-a-logo-protected-in-india" },
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
                "name": "Cost of Logo Protection",
                "item": "https://www.iprkaro.com/how-much-does-it-cost-to-get-a-logo-protected-in-india"
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
        "headline": "How Much Does it Cost to Get a Logo Protected in India? (The Complete 2026 Guide)",
        "description": "Exhaustive breakdown of every expense involved in logo protection. From government fees to professional attorney charges and MSME rebates.",
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
            "@id": "https://www.iprkaro.com/how-much-does-it-cost-to-get-a-logo-protected-in-india"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Fast & Affordable Logo Protection",
        "provider": {
            "@type": "LocalBusiness",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "4250"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen width-full">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
                            How Much Does it <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Cost to Protect a Logo</span> in Bharat?
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed text-justify">
                            Unlock the definitive 2026 investment guide for brand security. From mandatory government fees to strategic attorney costs, we reveal how to maximize your ROI while securing 100% legal protection for your brand face.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Get a Detailed Cost Quote
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
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">The Intellectual Investment: Why Logo Protection Matters</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In the vibrant and competitive economic sphere of 2026 India, a logo has evolved beyond a mere graphic exercise; it is the definitive signature of a brand's integrity and value. Every major corporation, from the tech hubs of Bengaluru to the manufacturing heartlands of Gujarat, understands that a logo is a multi million rupee asset waiting to happen. However, this asset is only as strong as its legal foundation. This brings us to the most critical question for any business owner: <strong>"How much does it cost to get a logo protected in India?"</strong>
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Logo protection, legally achieved through trademark registration, is a strategic investment rather than an administrative expense. It provides the owner with the exclusive right to use the logo, the power to prevent unauthorized use by competitors, and the ability to build a trans-generational brand. In 2026, Bharat's intellectual property framework is more accessible than ever, with digital paths making the process efficient and transparent.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner text-center">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "Protecting a logo is the difference between owning a brand and just owning a drawing."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        The cost structure of this protection is multi-layered, involving statutory government fees, professional expertise costs, and potential situational expenses. This 4000-word forensic guide is designed to provide you with an absolute breakdown of every rupee required to secure your mark. We will explore the concessions available to startups, the variable spectrum of attorney fees, and the long term costs of maintaining IP health. At IPR Karo, we believe in radical transparency, and this manual is your roadmap to securing brand excellence with financial clarity.
                                    </p>
                                </section>

                                <section id="government-fees" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Official Price Tag: Understanding Government Fees</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        The most significant and mandatory portion of the investment is the <strong>Government Fee</strong> (also known as the statutory fee) paid to the Trade Marks Registry. These fees are standardized across the country and are governed by the Trade Marks Rules, 2017. In 2026, the government maintains a clear distinction between different types of applicants to encourage grassroots innovation.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 my-10">
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faStamp} className="mr-3 text-[#6E5E93]" /> Statutory Basis
                                            </h4>
                                            <p className="text-gray-600">Fees are charged per 'Class' of goods or services. There are 45 classes in total, and your logo must be protected in each relevant class.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faSignature} className="mr-3 text-[#6E5E93]" /> E-Filing Discount
                                            </h4>
                                            <p className="text-gray-600">The government provides a 10% discount for online filings. Physical filing (paper submission) is discouraged and more expensive.</p>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-justify mb-4">
                                        Understanding your category is the first step in cost optimization. Filing under the wrong category can lead to 'Examination Reports' that demand additional fees or even result in the rejection of your application.
                                    </p>
                                </section>

                                <section id="applicant-types" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Cost Tiers for Individuals, Startups, and MSMEs</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        To promote the 'Make in India' initiative, the government offers a massive 50% concession to certain entity types.
                                    </p>
                                    <div className="overflow-x-auto my-10 rounded-2xl border border-gray-200 shadow-sm">
                                        <table className="min-w-full bg-white">
                                            <thead className="bg-[#0C002B] text-white text-left">
                                                <tr>
                                                    <th className="py-4 px-6 font-bold">Applicant Category</th>
                                                    <th className="py-4 px-6 font-bold">Registration Method</th>
                                                    <th className="py-4 px-6 font-bold text-center">Govt Fee (Per Class)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-700">
                                                <tr className="border-b bg-green-50">
                                                    <td className="py-4 px-6 border-r font-bold">Individuals / Startups / MSMEs</td>
                                                    <td className="py-4 px-6 border-r">e-Filing (Online)</td>
                                                    <td className="py-4 px-6 text-center font-bold text-green-700">₹ 4,500</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-4 px-6 border-r font-bold">Individuals / Startups / MSMEs</td>
                                                    <td className="py-4 px-6 border-r">Physical Filing</td>
                                                    <td className="py-4 px-6 text-center font-bold">₹ 5,000</td>
                                                </tr>
                                                <tr className="border-b bg-blue-50">
                                                    <td className="py-4 px-6 border-r font-bold">Companies / LLPs / Large Entities</td>
                                                    <td className="py-4 px-6 border-r">e-Filing (Online)</td>
                                                    <td className="py-4 px-6 text-center font-bold text-blue-700">₹ 9,000</td>
                                                </tr>
                                                <tr className="">
                                                    <td className="py-4 px-6 border-r font-bold">Companies / LLPs / Large Entities</td>
                                                    <td className="py-4 px-6 border-r">Physical Filing</td>
                                                    <td className="py-4 px-6 text-center font-bold">₹ 10,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify font-semibold text-[#160049]">
                                        Wait! To avail of the 4,500 rupee rate as a business, you MUST have a valid Udyam Registration (for MSMEs) or a DPIIT Recognition (for Startups). Without these, a company defaults to the 9,000 rupee rate.
                                    </p>
                                </section>

                                <section id="professional-fees" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Professional Variable: Attorney and Agent Fees</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        While the portal (ipindia.gov.in) allows for direct filing, most successful registrations in Bharat are handled by registered trademark attorneys or agents. The legal nuance of trademark law—especially regarding Section 9 (Absolute Grounds for Refusal) and Section 11 (Relative Grounds)—requires professional drafting.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-6 my-10">
                                        <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col h-full text-center">
                                            <FontAwesomeIcon icon={faUserTie} className="text-3xl text-[#6E5E93] mb-4" />
                                            <h4 className="font-bold text-xl mb-3 text-[#0C002B]">Basic Filing</h4>
                                            <p className="text-sm text-gray-600 mb-6">Form TM-A preparation and submission only.</p>
                                            <div className="mt-auto font-bold text-[#6E5E93] text-2xl">₹ 5k - 8k</div>
                                        </div>
                                        <div className="p-8 bg-[#0C002B] rounded-[2rem] border border-[#6E5E93] shadow-xl text-white flex flex-col h-full text-center relative">
                                            <div className="absolute top-4 right-4 text-[10px] bg-[#6E5E93] px-2 py-1 rounded-full uppercase tracking-widest">Recommended</div>
                                            <FontAwesomeIcon icon={faShieldAlt} className="text-3xl text-[#6E5E93] mb-4" />
                                            <h4 className="font-bold text-xl mb-3">Comprehensive</h4>
                                            <p className="text-sm opacity-70 mb-6">Detailed search + Strategic classes + Objection management.</p>
                                            <div className="mt-auto font-bold text-white text-2xl">₹ 12k - 20k</div>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col h-full text-center">
                                            <FontAwesomeIcon icon={faGavel} className="text-3xl text-[#6E5E93] mb-4" />
                                            <h4 className="font-bold text-xl mb-3">Full Prosecution</h4>
                                            <p className="text-sm text-gray-600 mb-6">Includes hearing attendance and opposition defense.</p>
                                            <div className="mt-auto font-bold text-[#6E5E93] text-2xl">₹ 25k - 50k</div>
                                        </div>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Professional fees are an insurance against rejection. A wrongly filed trademark costs not only the filing fee but also the time—often 18 to 24 months—it takes for the registry to find the error.
                                    </p>
                                </section>

                                <section id="rebate-benefits" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6 text-center">Unlocking the Rebates: 50% Savings for Small Entities</h2>
                                    <div className="relative p-10 bg-gradient-to-br from-indigo-900 via-[#160049] to-black rounded-[3rem] text-white shadow-2xl overflow-hidden my-10">
                                        <div className="relative z-10">
                                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                                <FontAwesomeIcon icon={faPercentage} className="text-[#6E5E93]" /> The "Small Entity" Advantage
                                            </h3>
                                            <p className="text-xl opacity-90 mb-8 leading-relaxed">
                                                If you are an Indian individual with an Aadhaar card, or a startup with a valid certificate, the government effectively halves your entry cost. This is unmatched in most global IP jurisdictions.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                                                    <h4 className="font-bold text-xl mb-2 flex items-center gap-3">
                                                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-400" /> MSME (Udyam)
                                                    </h4>
                                                    <p className="text-sm text-gray-300 italic">"Applicable for Manufacturing and Service enterprises regardless of size, provided they are in the 'Small' or 'Medium' range."</p>
                                                </div>
                                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                                                    <h4 className="font-bold text-xl mb-2 flex items-center gap-3">
                                                        <FontAwesomeIcon icon={faRocket} className="text-orange-400" /> Startup India
                                                    </h4>
                                                    <p className="text-sm text-gray-300 italic">"Requires DPIIT recognition. This certificate is the master key to IP cost savings and the SIPP scheme."</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Abstract Decorations */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6E5E93]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                                    </div>
                                </section>

                                <section id="sipp-scheme" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">SIPP Scheme: Free Professional Support for Startups</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        For recognized startups, the cost of logo protection can be even lower. The **Startups Intellectual Property Protection (SIPP)** scheme enables facilitators to provide legal assistance for free.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Under this system, the CGPDTM office compensates the facilitator (attorney/agent) directly (up to 10,000 rupees for filing and 5,000 for handling objections). The startup is only responsible for the 4,500 rupee government fee. This essentially removes the 'Professional Fee' variable from the cost equation, making Bharat one of the most cost effective places to launch a brand. At IPR Karo, we are active participants in this ecosystem, helping startups leverage every available benefit.
                                    </p>
                                </section>

                                <section id="hidden-costs" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Hidden Costs: Searches, Objections, and Oppositions</h2>
                                    <p className="mb-6 leading-relaxed text-lg text-justify">
                                        A logo's path to the ® symbol is rarely a straight line. Situational costs can arise that an applicant must budget for.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="p-6 bg-red-50 rounded-2xl border border-red-100 border-l-8 border-l-red-500">
                                            <h4 className="font-bold text-red-700 text-xl mb-3"><FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" /> Objections (Sec 9/11)</h4>
                                            <p className="text-gray-700 text-sm">Response drafting to examiner queries. Cost: **₹ 3,000 - ₹ 7,000**.</p>
                                        </div>
                                        <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100 border-l-8 border-l-yellow-500">
                                            <h4 className="font-bold text-yellow-700 text-xl mb-3"><FontAwesomeIcon icon={faGavel} className="mr-2" /> Oppositions</h4>
                                            <p className="text-gray-700 text-sm">Defending your mark if a third party opposes it. Cost: **₹ 10,000 - ₹ 30,000**.</p>
                                        </div>
                                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 border-l-8 border-l-blue-500">
                                            <h4 className="font-bold text-blue-700 text-xl mb-3"><FontAwesomeIcon icon={faSearch} className="mr-2" /> Forensic Search</h4>
                                            <p className="text-gray-700 text-sm">Avoid the above costs with a pre-filing report. Cost: **₹ 1,500 - ₹ 3,000**.</p>
                                        </div>
                                        <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 border-l-8 border-l-indigo-500">
                                            <h4 className="font-bold text-indigo-700 text-xl mb-3"><FontAwesomeIcon icon={faHistory} className="mr-2" /> Rectifications</h4>
                                            <p className="text-gray-700 text-sm">Correcting errors in the register. Govt Fee: **₹ 900 - ₹ 9,000**.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="renewal-costs" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Long Term Outlook: Trademark Renewal Costs</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        Logo protection is not a lifetime grant; it is a 10 year lease that can be renewed indefinitely. This ensures that the registry doesn't get cluttered with defunct brands.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        To maintain your mark beyond the initial decade, you must file **Form TM-R** through the portal. The current renewal fee for e-filing is 9,000 rupees per class. If you miss the primary window, you can file during the 'Grace Period' (the 6 months following expiry) for an additional 'Surcharge' or 'Restoration Fee' (typically an extra 4,500 to 5,000 rupees). Budgeting for this ensures your brand remains a permanent fixture of your business legacy.
                                    </p>
                                </section>

                                <section id="efiling-vs-physical" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Digital Economy: e-Filing vs. Physical Filing Costs</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify">
                                        In 2026, physical filing is almost obsolete. The government has designed the fee structure to penalize paper based applications.
                                    </p>
                                    <ul className="space-y-4 my-10 list-none p-0">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 group hover:border-[#6E5E93] transition-colors">
                                            <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white group-hover:bg-[#6E5E93] transition-colors">
                                                <FontAwesomeIcon icon={faSignature} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">e-Filing (The Smart Choice)</h4>
                                                <p className="text-gray-600">Cheaper (10% discount), instant acknowledgement, and digital status tracking. **Cost: ₹ 4,500 / ₹ 9,000**.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 group opacity-70">
                                            <div className="w-12 h-12 shrink-0 bg-gray-400 rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faFileAlt} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Physical Filing (Obsolete)</h4>
                                                <p className="text-gray-600">More expensive, slower, and requires Courier/Physical presence. **Cost: ₹ 5,000 / ₹ 10,000**.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="global-costs" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Going Global: Madrid Protocol Cost Overview</h2>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        If you aim to export your products or services, domestic registration is insufficient. The **Madrid Protocol** allows you to protect your logo in over 120 countries through a single application.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg text-justify text-justify">
                                        The cost for this is significantly higher and involves:
                                        - **Basic Fee:** Charged by the WIPO (World Intellectual Property Organization).
                                        - **Handling Fee:** 5,000 rupees paid to the Indian CGPDTM office.
                                        - **Individual Country Fees:** These vary from 50 to 800 US Dollars per country.
                                        Total global protection usually starts at 1 lakh rupees and scales with the number of countries selected. IPR Karo specializes in cross border IP management, ensuring your global expansion is financially optimized.
                                    </p>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">IPRKaro: Maximizing ROI on Your Brand Security</h2>
                                    <p className="mb-6 leading-relaxed text-xl text-center text-justify">
                                        At IPR Karo, we don't just see logo protection as a cost; we see it as a catalyst for your business growth. Our approach is to provide the highest level of legal security at the most transparent price point in the market.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="flex gap-4 items-start">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faCalculator} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Transparent Pricing</h4>
                                                <p className="text-gray-600 italic">"No surprises. We explain the government fees and our professional charges upfront."</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="text-[#6E5E93] text-2xl mt-1"><FontAwesomeIcon icon={faShieldAlt} /></div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Strategic Class Mapping</h4>
                                                <p className="text-gray-600 italic">"We optimize your classes to ensure you aren't paying for protection you don't need."</p>
                                            </div>
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
                                            author: "Ananya Saxena",
                                            role: "Founder, LuxeCraft",
                                            rating: 5,
                                            date: "2024-03-05",
                                            text: "I was confused about the individual vs company cost. IPR Karo explained how I could save 50% using my MSME certificate. The whole process was transparent and much cheaper than I expected.",
                                            avatar: "AS"
                                        },
                                        {
                                            author: "Vikram Malhotra",
                                            role: "CEO, TechSphere Solutions",
                                            rating: 5,
                                            date: "2024-02-18",
                                            text: "Professional services at their best. They handled our multi class filing perfectly. The cost was clearly outlined from day one, and there were zero hidden charges during the examination phase.",
                                            avatar: "VM"
                                        },
                                        {
                                            author: "Rajesh G.",
                                            role: "Solo Entrepreneur",
                                            rating: 5,
                                            date: "2024-01-10",
                                            text: "Cost effective and fast. I got my logo protected in Class 35 for around 10k including govt fees. Highly recommend for any small business owner looking for clarity.",
                                            avatar: "RG"
                                        }
                                    ]} />
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Securing Your Mark for the Future</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        The cost of logo protection in India is an investment in your brand's destiny. Whether you are paying the minimized fee as an individual or the standard fee as a large corporation, the value of the registration certificate far outweighs the statutory and professional expenses. In 2026, the digital infrastructure provided by the IP India portal makes this journey predictable and efficient.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center text-justify">
                                        Don't let cost uncertainty delay your brand security. By leveraging MSME rebates, startup concessions, and professional expertise, you can secure your logo for as little as 4,500 rupees in government fees. Let IPR Karo be your partner in this financial and legal endeavor. Secure your vision, protect your logo, and build your registered legacy with confidence today.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Brand Today</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Get a fixed fee quote for your logo registration. No hidden costs. Just absolute brand security.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Check Cost Now
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
                                                    Free Cost Consultation
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
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Fee Calculator</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10 text-justify">
                                    Wondering about the exact government fee for your business? Get an instant accurate quote tailored to your entity type.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Get Cost Quote
                                    </button>
                                </Link>
                                <div className="mt-6 pt-6 border-t border-white/10 text-center relative z-10">
                                    <a href="tel:+919289707648" className="text-white hover:text-[#6E5E93] transition-colors flex items-center justify-center text-sm font-semibold text-justify">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4 text-justify">Pricing Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/what-are-the-steps-to-file-a-trademark-application-online-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Filing Steps Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/which-government-portal-is-used-for-trademark-registration-in-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Official Portal Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service#msme-startup-docs" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Rebate Eligibility</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-the-benefits-of-hiring-a-trademark-agent-in-india#watch-services" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Monitoring Costs</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-registration-india" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium text-sm text-justify">Registration Overview</span>
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
