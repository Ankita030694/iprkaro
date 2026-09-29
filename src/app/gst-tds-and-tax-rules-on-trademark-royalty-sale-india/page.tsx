import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faScaleBalanced,
    faTable,
    faCheckCircle,
    faExclamationTriangle,
    faListUl,
    faFileContract,
    faLightbulb,
    faShieldHalved,
    faCheck,
    faPhone,
    faBuildingShield,
    faGavel,
    faStamp,
    faBan,
    faBoxOpen,
    faLandmark,
    faFileInvoiceDollar,
    faPercent,
    faHandHoldingDollar,
    faChartLine,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "GST, TDS & Tax on Trademark Royalties: SAC 9973 Guide",
    description: validateAndNormalizeDescription(
        "Master GST, TDS, and tax rules on trademark royalties and brand sales in India. Learn SAC Code 9973, Section 194J TDS, capital gains, and depreciation.",
        "app/gst-tds-and-tax-rules-on-trademark-royalty-sale-india/page.tsx"
    ),
    keywords: [
        "gst on trademark royalty in india sac code 9973",
        "tds rate on trademark royalty section 194j",
        "tax rules on brand sale and trademark assignment india",
        "capital gains tax on trademark sale section 55 2 a",
        "sac code 997336 intellectual property services gst",
        "depreciation on purchased trademark section 32 income tax act",
        "gst reverse charge mechanism rcm trademark royalty",
        "brand licensing tax compliance india",
        "section 195 cross border trademark royalty tds",
        "form 15ca 15cb trademark remittance india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/gst-tds-and-tax-rules-on-trademark-royalty-sale-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "GST, TDS & Tax on Trademark Royalties: SAC 9973 Guide",
        description: "Master GST, TDS, and tax rules on trademark royalties and brand sales in India. Learn SAC Code 9973, Section 194J TDS, capital gains, and depreciation.",
        url: "https://www.iprkaro.com/gst-tds-and-tax-rules-on-trademark-royalty-sale-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/gst-tds-and-tax-rules-on-trademark-royalty-sale-india.png",
                width: 1200,
                height: 630,
                alt: "GST, TDS, and Tax Rules on Trademark Royalties and Brand Sale in India under SAC Code 9973",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "GST, TDS & Tax on Trademark Royalties: SAC 9973 Guide",
        description: "Master GST, TDS, and tax rules on trademark royalties and brand sales in India. Learn SAC Code 9973, Section 194J TDS, capital gains, and depreciation.",
        images: ["https://www.iprkaro.com/images/og/gst-tds-and-tax-rules-on-trademark-royalty-sale-india.png"],
    }
};

const faqs = [
    {
        question: "What is the applicable GST rate and SAC code for trademark royalties in India?",
        answer: "Trademark royalties and licensing fees are classified under SAC Code 997336 (Licensing services for the right to use intellectual property and similar products). Under the GST regime, licensing of trademarks is treated as a supply of services taxed at 18% GST (9% CGST + 9% SGST for intra-state transactions, or 18% IGST for inter-state transactions)."
    },
    {
        question: "What is the TDS rate on domestic trademark royalty payments under Section 194J?",
        answer: "Under Section 194J(1)(c) of the Income Tax Act, 1961, trademark royalties are subject to a TDS deduction rate of 10% (if the payee provides a valid PAN) or 20% under Section 206AA (if PAN is not furnished). Note that while technical service fees under Section 194J(1)(a) were reduced to 2%, royalty payments for intellectual property use remain strictly subject to the 10% withholding rate once aggregate payments exceed ₹30,000 in a financial year."
    },
    {
        question: "How is a permanent sale or assignment of a trademark taxed under GST?",
        answer: "Under Schedule II, Paragraph 5(c) of the CGST Act, 2017, the temporary licensing or permanent transfer of intellectual property rights is treated as a supply of services. Permanent assignment/sale of a trademark attracts 18% GST (SAC Code 997336 / 9973). The buyer can claim full Input Tax Credit (ITC) if the purchased brand is used in the course or furtherance of business."
    },
    {
        question: "How are Capital Gains calculated on the sale of a self-generated trademark under Section 55?",
        answer: "Under Section 55(2)(a) of the Income Tax Act, 1961, the cost of acquisition for a self-generated or internally built trademark or brand name is deemed to be NIL. Therefore, the entire gross sale consideration (minus incidental transfer expenses) is treated as Capital Gains and taxed as Short-Term Capital Gain (STCG) or Long-Term Capital Gain (LTCG) depending on whether the asset was held for more or less than 24/36 months."
    },
    {
        question: "Can an enterprise claim Income Tax depreciation on purchased trademarks under Section 32?",
        answer: "Yes. Under Section 32(1)(ii) of the Income Tax Act, 1961, acquired intangible assets including trademarks, know-how, patents, copyrights, licenses, and franchises qualify for depreciation at the rate of 25% on a Written Down Value (WDV) basis. Note that depreciation cannot be claimed on self-generated trademarks; it applies only to acquired/purchased commercial marks capitalized on the balance sheet."
    },
    {
        question: "Does Reverse Charge Mechanism (RCM) apply to foreign trademark royalty payments?",
        answer: "Yes. When an Indian business pays brand royalties or franchise fees to an overseas brand owner (import of IP services), the Indian payer is liable to discharge 18% IGST under Reverse Charge Mechanism (RCM) under Notification No. 10/2017-Integrated Tax (Rate). The Indian enterprise can subsequently claim this tax as Input Tax Credit (ITC) in their GSTR-3B return."
    },
    {
        question: "What TDS withholding rate applies to cross-border trademark royalty remittances under Section 195?",
        answer: "Under Section 195, cross-border royalty remittances to non-residents are subject to withholding tax at the domestic rate of 20% (plus applicable surcharge and cess) or the beneficial Double Taxation Avoidance Agreement (DTAA) treaty rate (typically 10% to 15% under Article 12 of Indian tax treaties), provided the non-resident furnishes a valid Tax Residency Certificate (TRC), Form 10F, and No-PE certificate, accompanied by Form 15CA and Form 15CB certifications."
    },
    {
        question: "Is formal recordal with the Trademark Registry mandatory after a brand sale or licensing deal?",
        answer: "Yes. Under Section 45 (for trademark assignment/sale) and Section 49 (for registered user/licensing) of the Trade Marks Act, 1999, the parties must submit Form TM-P to record the title transfer or licensing terms on the official register of IP India. Without statutory recordal, the licensee or assignee faces severe evidential hurdles during tax audits and court enforcement."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Tax Architecture" },
    { id: "gst-sac-codes", title: "GST Rates & SAC Code 9973" },
    { id: "rcm-cross-border", title: "RCM & Cross-Border Royalties" },
    { id: "tds-withholding-rules", title: "TDS Rules: Section 194J & 195" },
    { id: "capital-gains-section-55", title: "Capital Gains: Section 55(2)(a)" },
    { id: "depreciation-section-32", title: "25% Depreciation: Section 32" },
    { id: "tax-compliance-matrix", title: "Comprehensive Tax Matrix" },
    { id: "deal-structuring-playbook", title: "6-Step Deal Structuring" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic Tax & Legal Advice" },
];

export default function TrademarkTaxationPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "GST, TDS, and Tax Rules on Trademark Royalties & Brand Sale in India (SAC Code 9973)",
        "description": "Master GST, TDS, and tax rules on trademark royalties and brand sales in India. Learn SAC Code 9973, Section 194J TDS, capital gains, and depreciation.",
        "image": "https://www.iprkaro.com/images/og/gst-tds-and-tax-rules-on-trademark-royalty-sale-india.png",
        "datePublished": "2026-09-28T09:30:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": {
            "@type": "Person",
            "name": "Rahul Roy",
            "url": "https://www.iprkaro.com/about-us",
            "image": "https://www.iprkaro.com/images/author/rahul-roy.jpg"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/gst-tds-and-tax-rules-on-trademark-royalty-sale-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "GST, TDS & Tax on Trademark Royalties: SAC 9973 Guide",
        "url": "https://www.iprkaro.com/gst-tds-and-tax-rules-on-trademark-royalty-sale-india",
        "description": "Master GST, TDS, and tax rules on trademark royalties and brand sales in India. Learn SAC Code 9973, Section 194J TDS, capital gains, and depreciation.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/gst-tds-and-tax-rules-on-trademark-royalty-sale-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/gst-tds-and-tax-rules-on-trademark-royalty-sale-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Tax & Royalty Guide", "item": "https://www.iprkaro.com/gst-tds-and-tax-rules-on-trademark-royalty-sale-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "6-Step Strategic Playbook for Structuring Brand Licensing and Assignment Deals",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Draft Robust Trademark Licensing or Assignment Agreement with Explicit Valuation Clauses" },
            { "@type": "ListItem", "position": 2, "name": "Classify Under SAC Code 997336 and Issue GST Compliant Invoices at 18 Percent Rate" },
            { "@type": "ListItem", "position": 3, "name": "Execute Withholding Tax Deductions Under Section 194J (10 Percent) or Section 195 DTAA Rates" },
            { "@type": "ListItem", "position": 4, "name": "File Form TM-P with Trade Marks Registry to Statutorily Record Assignment or Registered User" },
            { "@type": "ListItem", "position": 5, "name": "Establish Arm's Length Transfer Pricing Documentation for Related-Party Royalties" },
            { "@type": "ListItem", "position": 6, "name": "Capitalize Purchased Intangible Assets and Claim 25 Percent Depreciation Under Section 32" }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />

            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-purple-50 border border-purple-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">IP Taxation &amp; Corporate Finance</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                GST, TDS &amp; Tax Rules on <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Royalties and Brand Sales</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Licensing brand rights, collecting recurring royalties, or executing a permanent trademark assignment carries intricate indirect and direct tax obligations under Indian tax laws. Master <strong>SAC Code 997336 (18% GST)</strong>, <strong>Reverse Charge Mechanism (RCM)</strong> on cross-border licensing, <strong>Section 194J TDS (10%)</strong> withholding rules, <strong>Section 55(2)(a) capital gains</strong> on self-generated brand transfers, and <strong>25% depreciation</strong> on acquired intangible assets under Section 32 of the Income Tax Act, 1961.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Trademark Research Specialist</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 28-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 15 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Verified Tax &amp; IP Analysis</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Consult Tax &amp; IP Attorney <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call Tax Strategist: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/gst-tds-and-tax-rules-on-trademark-royalty-sale-india.png"
                                    alt="GST, TDS, and Tax Rules on Trademark Royalties and Brand Sale in India under SAC Code 9973"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Trademark Tax & Royalty Guide", href: "/gst-tds-and-tax-rules-on-trademark-royalty-sale-india" }
                    ]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        <main className="min-w-0">
                            {/* MOBILE TABLE OF CONTENTS */}
                            <div className="lg:hidden mb-6 not-prose">
                                <details className="group bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-purple-50/40 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                <FontAwesomeIcon icon={faListUl} className="w-4 h-4" />
                                            </span>
                                            <span className="font-bold text-gray-900 text-sm sm:text-base">Table of Contents</span>
                                        </div>
                                        <span className="text-xs font-semibold text-[#6E5E93] bg-[#6E5E93]/10 px-2.5 py-1 rounded-full group-open:rotate-180 transition-transform duration-200">
                                            &#9660;
                                        </span>
                                    </summary>
                                    <div className="p-4 pt-2 border-t border-purple-100/60 bg-white/80">
                                        <TableOfContents sections={tocSections} orientation="vertical" />
                                    </div>
                                </details>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700">
                                <article className="space-y-12">
                                    {/* SECTION 1: OVERVIEW & TAX ARCHITECTURE */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            Taxation Architecture of Trademarks in India
                                        </h2>
                                        <p className="mb-4">
                                            Intellectual property assets, particularly registered trademarks and brand names, represent significant balance sheet value for startups, consumer conglomerates, and franchise networks. When monetizing a trademark, transactions broadly fall into two distinct legal and fiscal categories:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                                            <div className="bg-purple-50/70 p-5 rounded-2xl border border-purple-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faPercent} className="w-4 h-4 mr-2 text-[#6E5E93]" />
                                                    1. Trademark Licensing (Royalties)
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 m-0">
                                                    Granting a temporary, revocable right to use the brand name while retaining legal title. Governed by <strong>SAC Code 997336</strong> (18% GST) and subject to recurring <strong>TDS withholding under Section 194J (10%)</strong> or <strong>Section 195</strong> for foreign licensors.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faHandHoldingDollar} className="w-4 h-4 mr-2 text-[#6E5E93]" />
                                                    2. Trademark Assignment (Outright Sale)
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 m-0">
                                                    Permanent transfer of proprietary ownership, goodwill, and title. Attracts <strong>18% GST (Supply of Services)</strong> and triggers <strong>Capital Gains Tax under Section 55(2)(a)</strong> for the seller and <strong>25% depreciation under Section 32</strong> for the buyer.
                                                </p>
                                            </div>
                                        </div>
                                        <p>
                                            Mischaracterizing brand licensing as a business service or failing to adhere to strict TDS, GST, and Form TM-P recordal requirements can result in severe disallowances under Section 40(a)(ia), GST input tax credit reversals, and penalties up to 200% under direct tax audit provisions.
                                        </p>
                                    </section>

                                    {/* SECTION 2: GST RATES & SAC CODE 9973 */}
                                    <section id="gst-sac-codes" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            GST Rates &amp; SAC Code 9973 Classification
                                        </h3>
                                        <p className="mb-4">
                                            Under the Goods and Services Tax (GST) classification system, intellectual property transactions are categorized under Services Accounting Code (SAC) Heading <strong>9973</strong>:
                                        </p>

                                        <div className="overflow-x-auto my-6">
                                            <table className="min-w-full text-xs sm:text-sm text-left border-collapse border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                                                <thead className="bg-[#0C002B] text-white">
                                                    <tr>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">SAC Code</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Service Description</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">GST Rate</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Tax Mechanism</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">ITC Availability</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">SAC 997336</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">Licensing services for the right to use IP (Trademarks, Brand Names, Patents)</td>
                                                        <td className="p-3 sm:p-4 font-bold text-purple-900">18% (9% CGST + 9% SGST / 18% IGST)</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Forward Charge (Domestic) / RCM (Import)</td>
                                                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">Fully Eligible (100%)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">SAC 997331</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">Licensing services for the right to use computer software / SaaS systems</td>
                                                        <td className="p-3 sm:p-4 font-bold text-purple-900">18% IGST / CGST+SGST</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Forward Charge / OIDAR Rules</td>
                                                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">Fully Eligible (100%)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/60 bg-purple-50/30">
                                                        <td className="p-3 sm:p-4 font-black text-[#6E5E93]">SAC 9973 / Sch II</td>
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">Permanent Transfer or Assignment of Registered Trademark / Brand Rights</td>
                                                        <td className="p-3 sm:p-4 font-black text-purple-900">18% IGST / CGST+SGST</td>
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">Forward Charge (Supply of Services)</td>
                                                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">Fully Eligible (100% ITC)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="p-5 bg-purple-50 border-l-4 border-[rgb(110,94,147)] rounded-r-xl my-6">
                                            <h4 className="text-base font-bold text-purple-950 mb-1">Is Trademark Sale a Supply of Goods or Services under GST?</h4>
                                            <p className="text-sm text-purple-900 m-0 leading-relaxed">
                                                Under Schedule II, Clause 5(c) of the CGST Act, 2017, &quot;temporary transfer or permitting the use or enjoyment of any intellectual property right&quot; is deemed a supply of services. Furthermore, the Authority for Advance Rulings (AAR) has consistently held that permanent assignment/transfer of trademarks constitutes a supply of services under SAC 9973 taxed at 18% GST.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 3: RCM & CROSS-BORDER ROYALTIES */}
                                    <section id="rcm-cross-border" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faGlobe} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            Reverse Charge Mechanism (RCM) &amp; Cross-Border Royalties
                                        </h3>
                                        <p className="mb-4">
                                            When an Indian subsidiary, franchisee, or licensee pays trademark royalties, franchise fees, or brand licensing charges to a foreign parent entity or overseas intellectual property holding company:
                                        </p>

                                        <div className="space-y-4 my-6">
                                            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                                <h4 className="text-base font-bold text-gray-900 mb-2">1. Mandatory 18% IGST Payment under RCM</h4>
                                                <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                    Under Notification No. 10/2017-Integrated Tax (Rate), import of services where the supplier is located in non-taxable territory and the recipient is located in India requires the Indian recipient to pay <strong>18% IGST under Reverse Charge Mechanism (RCM)</strong> through cash ledger. The paid IGST can be claimed as 100% Input Tax Credit in the same tax period.
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                                <h4 className="text-base font-bold text-gray-900 mb-2">2. Place of Supply Rules (Section 13 of IGST Act)</h4>
                                                <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                    Under Section 13(2) of the IGST Act, the place of supply of intellectual property licensing services where the supplier or recipient is outside India is the location of the recipient of services (i.e., India), making it fully chargeable to Indian GST laws.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: TDS RULES - SECTION 194J & 195 */}
                                    <section id="tds-withholding-rules" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faPercent} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            TDS Withholding Rules: Section 194J &amp; Section 195
                                        </h3>
                                        <p className="mb-4">
                                            Direct tax withholding on trademark royalties is governed by strict statutory thresholds under the Income Tax Act, 1961:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 text-[#6E5E93]">Domestic Payments: Section 194J</h4>
                                                <ul className="text-xs sm:text-sm text-gray-700 space-y-2 pl-4 m-0">
                                                    <li>• <strong>Definition:</strong> Trademark royalty is defined under <em>Explanation 2 to Section 9(1)(vi)</em>.</li>
                                                    <li>• <strong>TDS Rate:</strong> Strict <strong>10% TDS</strong> under Section 194J(1)(c).</li>
                                                    <li>• <strong>No 2% Rate:</strong> While technical service fees under 194J(1)(a) were reduced to 2%, royalty payments remain taxed at 10%.</li>
                                                    <li>• <strong>Threshold:</strong> ₹30,000 per financial year per payee.</li>
                                                    <li>• <strong>Missing PAN:</strong> 20% TDS under Section 206AA.</li>
                                                    <li>• <strong>Disallowance:</strong> 30% of expense disallowed under Section 40(a)(ia) if TDS is defaulted.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 text-[#6E5E93]">Cross-Border Remittances: Section 195</h4>
                                                <ul className="text-xs sm:text-sm text-gray-700 space-y-2 pl-4 m-0">
                                                    <li>• <strong>Domestic Base Rate:</strong> 20% + surcharge and cess under Section 115A.</li>
                                                    <li>• <strong>DTAA Treaty Relief:</strong> 10% to 15% beneficial rate under Article 12 (Royalties) of Double Taxation Avoidance Agreements.</li>
                                                    <li>• <strong>Mandatory Compliance:</strong> Tax Residency Certificate (TRC), Form 10F, and No-PE certificate from overseas brand owner.</li>
                                                    <li>• <strong>Bank Remittance:</strong> Mandatory Form 15CA (online submission) and Form 15CB (Chartered Accountant certificate).</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: CAPITAL GAINS - SECTION 55 */}
                                    <section id="capital-gains-section-55" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faChartLine} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            Capital Gains on Trademark Sale: Section 55(2)(a)
                                        </h3>
                                        <p className="mb-4">
                                            When an entrepreneur, startup, or corporation sells or assigns its registered trademark permanently under a <Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] font-medium hover:underline">Trademark Assignment Agreement</Link>, the transaction is treated as a transfer of a capital asset:
                                        </p>

                                        <div className="space-y-4 my-6">
                                            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                                                <h4 className="text-base font-bold text-amber-950 mb-1">Self-Generated Trademarks (Cost Deemed to be NIL)</h4>
                                                <p className="text-xs sm:text-sm text-amber-900 m-0 leading-relaxed">
                                                    Under <strong>Section 55(2)(a) of the Income Tax Act, 1961</strong>, where a trademark or brand name was self-generated or internally developed by the seller without paying an acquisition purchase price, the cost of acquisition is statutorily deemed to be <strong>NIL</strong>. Consequently, the <strong>entire gross sale consideration</strong> (less brokerage/legal transfer expenses) is treated as taxable Capital Gains!
                                                </p>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Purchased / Acquired Trademarks</h4>
                                                <p className="text-xs sm:text-sm text-gray-700 m-0 leading-relaxed">
                                                    If the seller previously purchased the trademark from a third party, the cost of acquisition is the actual monetary purchase price paid, reduced by the cumulative depreciation claimed under Section 32 in preceding assessment years.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                                            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <p className="text-xs font-bold text-gray-500 uppercase m-0">Holding Period &lt; 24/36 Months</p>
                                                <p className="text-lg font-black text-gray-900 mt-1 mb-2">Short-Term Capital Gain (STCG)</p>
                                                <p className="text-xs text-gray-600 m-0">Taxed at normal corporate income tax slab rates (22% / 25% / 30% plus surcharge and cess).</p>
                                            </div>

                                            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <p className="text-xs font-bold text-gray-500 uppercase m-0">Holding Period &gt; 24/36 Months</p>
                                                <p className="text-lg font-black text-gray-900 mt-1 mb-2">Long-Term Capital Gain (LTCG)</p>
                                                <p className="text-xs text-gray-600 m-0">Taxed at 20% (or revised 12.5% post-Finance Act 2024 amendments) under Section 112.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: 25% DEPRECIATION - SECTION 32 */}
                                    <section id="depreciation-section-32" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            25% Depreciation on Acquired Trademarks: Section 32
                                        </h3>
                                        <p className="mb-4">
                                            When a company acquires a registered trademark or brand portfolio through an asset purchase deal, merger, or slump sale:
                                        </p>

                                        <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm my-6 space-y-3">
                                            <h4 className="text-base font-bold text-gray-900 m-0">Statutory Intangible Asset Classification</h4>
                                            <p className="text-xs sm:text-sm text-gray-700 m-0">
                                                Under <strong>Section 32(1)(ii) of the Income Tax Act, 1961</strong>, intangible assets (know-how, patents, copyrights, trademarks, licenses, franchises, or any other business or commercial rights of similar nature) acquired on or after April 1, 1998 are entitled to tax depreciation at the rate of <strong>25% per annum on Written Down Value (WDV)</strong>.
                                            </p>
                                            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 text-xs sm:text-sm text-purple-950">
                                                <strong>Critical Accounting Rule (Ind AS 38 &amp; AS 26):</strong> Internally generated trademarks cannot be capitalized or depreciated on the balance sheet. Only acquired trademarks where valuable consideration was paid qualify for capitalization and tax depreciation deductions.
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: COMPREHENSIVE TAX COMPLIANCE MATRIX */}
                                    <section id="tax-compliance-matrix" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            Comprehensive Trademark Tax Compliance Matrix
                                        </h3>
                                        <p className="mb-4">
                                            Review this consolidated master reference summarizing all direct and indirect tax parameters across commercial brand transactions:
                                        </p>

                                        <div className="overflow-x-auto my-6">
                                            <table className="min-w-full text-xs sm:text-sm text-left border-collapse border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                                                <thead className="bg-[#0C002B] text-white">
                                                    <tr>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Transaction Type</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">SAC Code</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">GST Rate</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">TDS Section &amp; Rate</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Direct Tax (Seller/Licensor)</th>
                                                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Tax Benefit (Buyer/Licensee)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">Domestic Trademark Licensing</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">997336</td>
                                                        <td className="p-3 sm:p-4 font-bold text-purple-900">18% GST</td>
                                                        <td className="p-3 sm:p-4 text-emerald-800 font-bold">Sec 194J (10%)</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Business Income (PGBP)</td>
                                                        <td className="p-3 sm:p-4 text-emerald-700">100% Revenue Expense + 100% ITC</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">Foreign Inbound Royalty (Import)</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">997336</td>
                                                        <td className="p-3 sm:p-4 font-bold text-purple-900">18% IGST (RCM)</td>
                                                        <td className="p-3 sm:p-4 text-emerald-800 font-bold">Sec 195 (10%-20% DTAA)</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Non-Resident Royalty Income</td>
                                                        <td className="p-3 sm:p-4 text-emerald-700">RCM ITC Credit + 15CA/CB Filing</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">Outright Sale (Self-Generated Brand)</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">9973 / Sch II</td>
                                                        <td className="p-3 sm:p-4 font-bold text-purple-900">18% GST</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">Sec 194Q / Nil (Asset)</td>
                                                        <td className="p-3 sm:p-4 text-red-700 font-bold">Capital Gains (Cost Nil under Sec 55)</td>
                                                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">25% Depreciation under Sec 32</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 bg-gray-50/50">
                                                        <td className="p-3 sm:p-4 font-bold text-gray-900">Outright Sale (Acquired Brand)</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">9973 / Sch II</td>
                                                        <td className="p-3 sm:p-4 font-bold text-purple-900">18% GST</td>
                                                        <td className="p-3 sm:p-4 text-gray-600">Sec 194Q / Nil (Asset)</td>
                                                        <td className="p-3 sm:p-4 text-gray-700">Capital Gains (Cost = Purchase - Dep.)</td>
                                                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">25% Depreciation under Sec 32</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 8: 6-STEP DEAL STRUCTURING PLAYBOOK */}
                                    <section id="deal-structuring-playbook" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-7 h-7 mr-3 text-emerald-600" />
                                            6-Step Deal Structuring &amp; Tax Compliance Playbook
                                        </h3>
                                        <p className="mb-4">
                                            Execute flawless brand licensing agreements and assignment contracts by adhering to this structured protocol:
                                        </p>

                                        <div className="space-y-4 my-6">
                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">1</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Draft Robust Agreement with Tax Indemnity Clauses</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        Draft a comprehensive Trademark License or Assignment Deed defining the territory, royalty calculation formula (gross sales vs net profits), GST grossing-up provisions, and TDS certificate issuance obligations.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">2</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Invoicing under SAC Code 997336 &amp; GST Compliance</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        Generate GST tax invoices quoting SAC 997336, state billing address, Place of Supply, and 18% IGST / CGST+SGST breakups. Ensure prompt filing in GSTR-1 for seamless GSTR-2B matching.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">3</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Execute 10% TDS Withholding under Section 194J</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        Deduct 10% TDS on every royalty milestone before disbursing payments, deposit with the central government by the 7th of the subsequent month, and issue quarterly Form 16A certificates to avoid Section 40(a)(ia) disallowances.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">4</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Statutory Form TM-P Recordal with IP India</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        File Form TM-P with the Trade Marks Registry under Section 45 (for assignments) or Section 49 (for registered user licensing). Official government recordal provides conclusive legal proof during Income Tax audits and GST investigations.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">5</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Transfer Pricing &amp; Arm&apos;s Length Study (Section 92C)</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        For royalty arrangements between parent-subsidiary entities or related parties, maintain a formal Transfer Pricing Study using the Comparable Uncontrolled Price (CUP) or Transactional Net Margin Method (TNMM) to justify royalty rates (typically 1% to 5% of net sales).
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">6</span>
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">Capitalization &amp; 25% Depreciation Claim under Section 32</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 mt-1 m-0">
                                                        For purchased trademarks, capitalize the purchase cost plus registration stamp duty into the intangible asset block and claim 25% WDV depreciation in corporate Income Tax Return (ITR-6) filings.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-7 h-7 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h3>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80">
                                                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-3 font-black text-xl">Q.</span>{faq.question}
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 pl-8 m-0 leading-relaxed">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 10: STRATEGIC TAX & LEGAL ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-8 border-t border-gray-100">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-7 h-7 mr-3 text-yellow-500" />
                                            Strategic Tax &amp; IP Legal Advice
                                        </h3>
                                        <p className="mb-4">
                                            Structuring brand monetization, royalty agreements, and trademark assignments requires simultaneous mastery of intellectual property statutes and Indian tax laws. A poorly drafted licensing contract can trigger double taxation, GST reverse charge disputes, 30% expense disallowances under Section 40(a)(ia), and transfer pricing penalties.
                                        </p>
                                        <p className="mb-4">
                                            Collaborate with dual-qualified IP attorneys and corporate tax strategists to structure tax-efficient licensing models, ensure SAC 997336 compliance, draft Section 194J/195 withholding agreements, and record assignments via Form TM-P. For related legal workflows, explore our guides on <Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark assignment vs licensing</Link>, <Link href="/difference-between-trade-name-and-trademark-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trade name vs trademark differences</Link>, and <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[rgb(110,94,147)] hover:underline font-medium">MSME trademark fee concessions</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Corporate Brand Licensing &amp; IP Tax Compliance
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Structure Tax-Compliant Trademark Royalties &amp; Deals
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Deploy senior IP advocates and corporate tax attorneys to draft licensing agreements, handle SAC 9973 GST compliance, manage TDS withholding, and record Form TM-P assignments.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult IP Tax Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Senior IP Advocates • SAC 9973 GST Advisory • Section 194J TDS Guidance • Form TM-P Recordal
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-4 sticky top-24">
                            {/* About Author */}
                            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-16 h-16 rounded-full mb-2.5 shadow-md object-cover border-2 border-[#6E5E93]/20" />
                                <h4 className="text-base font-bold text-gray-900 mb-0.5">Rahul Roy</h4>
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in brand monetization structures, IP licensing tax compliance, SAC 9973 GST advisory, Section 194J TDS withholding, and Form TM-P assignments.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Draft IP Agreements</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Negotiating brand licensing or assignment? Structure tax-compliant agreements with registered IP litigators.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Consult Deal Specialist
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-assignment-vs-licensing-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Assignment vs Licensing</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/difference-between-trade-name-and-trademark-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Trade Name vs TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">MSME TM Fee Discount</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-send-trademark-legal-notice-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Send Legal Notice</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Notice Reply</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Prior User Rights Sec 34</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Anti-Counterfeiting Raid</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/amazon-brand-registry-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Amazon Brand Registry</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Startup TM Guide</span>
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
