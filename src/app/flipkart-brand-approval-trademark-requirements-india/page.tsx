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
    faStore,
    faLock,
    faCartShopping,
    faBoxOpen,
    faGavel,
    faBuildingShield,
    faHandshake,
    faStamp,
    faClock,
    faBan,
    faTags
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Flipkart Brand Approval & Brand Lock: Trademark Guide",
    description: validateAndNormalizeDescription(
        "Learn Flipkart brand approval and brand lock process in India. Master trademark requirements, NOC authorization letters, and brand gating for sellers.",
        "app/flipkart-brand-approval-trademark-requirements-india/page.tsx"
    ),
    keywords: [
        "flipkart brand approval trademark requirements india",
        "flipkart brand lock application process",
        "flipkart brand approval without trademark",
        "trademark certificate for flipkart seller account",
        "flipkart brand authorization letter format",
        "flipkart brand gating seller protection",
        "meesho brand authorization letter",
        "flipkart catalog listing hijacking protection",
        "flipkart brand approval pending trademark",
        "flipkart seller trademark registration india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/flipkart-brand-approval-trademark-requirements-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Flipkart Brand Approval & Brand Lock: Trademark Guide",
        description: "Learn Flipkart brand approval and brand lock process in India. Master trademark requirements, NOC authorization letters, and brand gating for sellers.",
        url: "https://www.iprkaro.com/flipkart-brand-approval-trademark-requirements-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/flipkart-brand-approval-trademark-requirements-india.png",
                width: 1200,
                height: 630,
                alt: "Flipkart Brand Approval and Brand Lock Process Trademark Requirements for Indian Sellers",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Flipkart Brand Approval & Brand Lock: Trademark Guide",
        description: "Learn Flipkart brand approval and brand lock process in India. Master trademark requirements, NOC authorization letters, and brand gating for sellers.",
        images: ["https://www.iprkaro.com/images/og/flipkart-brand-approval-trademark-requirements-india.png"],
    }
};

const faqs = [
    {
        question: "Can I get Flipkart Brand Approval with a pending trademark application?",
        answer: "Yes. Flipkart permits Indian sellers to obtain brand approval using a pending trademark application (TM status) filed on Form TM-A with the Indian Trade Marks Registry (IP India). Sellers must provide their official government CBR acknowledgment receipt and application number, alongside compliant physical packaging photos displaying the brand name and Legal Metrology details. However, full Brand Lock catalog protection typically requires a registered mark (R status) or mature application standing."
    },
    {
        question: "What is the difference between Flipkart Brand Approval and Flipkart Brand Lock?",
        answer: "Flipkart Brand Approval grants permission to create and sell listings under a specific brand name on Flipkart and Shopsy. Flipkart Brand Lock (Brand Gating) is an advanced security feature that restricts unauthorized third-party sellers from mapping, tagging along, or piggybacking on your approved catalog listings (FSNs). Brand Lock prevents listing hijacking and protects your Buy Box pricing and brand reputation."
    },
    {
        question: "Can I get Flipkart Brand Approval without any trademark?",
        answer: "Yes, but with significant operational limitations. Sellers without a trademark can request brand approval by submitting authentic manufacturer purchase tax invoices (dated within the last 90 to 180 days with matching GSTINs) or a Manufacturer Brand Authorization Letter. However, without a registered trademark, you cannot lock your brand, leaving your product listings vulnerable to competitor mapping and counterfeiting."
    },
    {
        question: "What are the mandatory elements of a Flipkart Brand Authorization Letter (NOC)?",
        answer: "A valid Flipkart Brand Authorization Letter must be on the Trademark Proprietor's official letterhead with complete corporate identity (CIN/GSTIN, registered address, official email). It must specify: (1) Trademark registration or application number and class, (2) Authorized seller's legal entity name, trade name, GSTIN, and Flipkart Seller ID, (3) Explicit authorization to list and sell on Flipkart and Shopsy, (4) Specific validity term (e.g., 1 to 2 years), and (5) Stamped signature of the authorized signatory."
    },
    {
        question: "Which trademark classes are required for Flipkart Brand Approval in India?",
        answer: "Flipkart requires your trademark classification to match the physical goods category being sold (Classes 1 through 34). For example, apparel brands require Class 25, electronics require Class 9, cosmetics require Class 3, and packaged foods require Classes 29 or 30. Holding only Class 35 (retail/wholesale services) is insufficient for manufacturer-level private label brand approval."
    },
    {
        question: "What are Flipkart's packaging and Legal Metrology photo requirements?",
        answer: "Flipkart mandates high-resolution, unedited photographs of the physical product and primary retail packaging. Under the Legal Metrology (Packaged Commodities) Rules, 2011, packaging must permanently display: (1) Brand name/logo printed directly (not loose stickers), (2) Complete manufacturer/packer address, (3) Generic product name, (4) Net quantity, (5) Month & year of manufacture/packing, (6) Maximum Retail Price (MRP inclusive of all taxes), and (7) Consumer care contact details."
    },
    {
        question: "How long does Flipkart take to verify and approve a brand application?",
        answer: "Flipkart's Brand Operations team typically reviews brand approval applications within 24 to 48 business hours. If the documentation contains discrepancies—such as mismatched brand spelling, blurred packaging labels, or unverified seller GST details—the ticket is rejected with specific feedback. This requires re-submission."
    },
    {
        question: "How do I stop unauthorized hijackers from selling on my Flipkart listings?",
        answer: "To eliminate catalog hijackers: (1) Apply for Flipkart Brand Lock by submitting your registered trademark certificate, (2) Report intellectual property infringement through the Flipkart IPR Infringement Reporting Portal, (3) Issue a formal Cease-and-Desist legal notice under Section 29 of the Trade Marks Act, 1999, and (4) If willful counterfeiting persists, file a commercial suit for interim injunction under Section 135 or initiate police search and seizure under Section 115."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "brand-approval-vs-brand-lock", title: "Approval vs Brand Lock" },
    { id: "trademark-prerequisites", title: "Trademark Prerequisites" },
    { id: "authorization-letter-noc", title: "Brand Authorization NOC" },
    { id: "packaging-metrology", title: "Packaging & Metrology" },
    { id: "step-by-step-process", title: "7-Step Approval Process" },
    { id: "matrix-table", title: "Eligibility Matrix" },
    { id: "catalog-hijacking", title: "Stop Listing Hijacking" },
    { id: "common-rejections", title: "Rejection Pitfalls" },
    { id: "seller-checklist", title: "Seller Action Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Marketplace Advice" },
];

export default function FlipkartBrandApprovalPage() {
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
        "headline": "Flipkart Brand Approval & Brand Lock Process: Trademark Requirements for Indian Sellers",
        "description": "Learn Flipkart brand approval and brand lock process in India. Master trademark requirements, NOC authorization letters, and brand gating for sellers.",
        "image": "https://www.iprkaro.com/images/og/flipkart-brand-approval-trademark-requirements-india.png",
        "datePublished": "2026-09-28T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/flipkart-brand-approval-trademark-requirements-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Flipkart Brand Approval & Brand Lock: Trademark Guide",
        "url": "https://www.iprkaro.com/flipkart-brand-approval-trademark-requirements-india",
        "description": "Learn Flipkart brand approval and brand lock process in India. Master trademark requirements, NOC authorization letters, and brand gating for sellers.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/flipkart-brand-approval-trademark-requirements-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/flipkart-brand-approval-trademark-requirements-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Flipkart Brand Approval Guide", "item": "https://www.iprkaro.com/flipkart-brand-approval-trademark-requirements-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps to Obtain Flipkart Brand Approval and Brand Lock in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Trademark Clearance & E-File Form TM-A with IP India" },
            { "@type": "ListItem", "position": 2, "name": "Prepare Compliant Packaging with Legal Metrology Declarations" },
            { "@type": "ListItem", "position": 3, "name": "Access Flipkart Seller Hub & Navigate to Brand Approval Portal" },
            { "@type": "ListItem", "position": 4, "name": "Select Product Category Vertical and Enter Exact Brand Details" },
            { "@type": "ListItem", "position": 5, "name": "Upload Verification Proof (TM Certificate/CBR, NOC, Tax Invoices)" },
            { "@type": "ListItem", "position": 6, "name": "Undergo Flipkart Brand Operations Review (24-48 Hours)" },
            { "@type": "ListItem", "position": 7, "name": "Initiate Brand Lock Request to Restrict Catalog Hijackers" }
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
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faShieldHalved} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">E-Commerce Brand Protection</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Flipkart Brand Approval: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Requirements for Sellers</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Scaling your online retail business on Flipkart and Shopsy requires robust intellectual property security. Without formal Flipkart Brand Approval and Brand Lock protection, your product listings are vulnerable to malicious catalog hijacking, Buy Box undercutting, and counterfeit imitation. Discover the mandatory trademark prerequisites, pending TM application acceptance, Brand Authorization Letter (NOC) formats, Legal Metrology packaging guidelines, and step-by-step Brand Lock gating protocol to protect your digital storefront.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 12 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified E-Commerce Seller Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Register Trademark for Flipkart <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call Expert: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/flipkart-brand-approval-trademark-requirements-india.png"
                                    alt="Flipkart Brand Approval and Brand Lock Process Trademark Requirements for Indian Sellers"
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
                        { label: "Flipkart Brand Approval Guide", href: "/flipkart-brand-approval-trademark-requirements-india" }
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
                            {/* MOBILE TABLE OF CONTENTS - COLLAPSIBLE ACCORDION */}
                            <div className="lg:hidden mb-6 not-prose">
                                <details className="group bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-purple-50/40 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm">
                                                <FontAwesomeIcon icon={faListUl} className="w-4 h-4" />
                                            </span>
                                            <div>
                                                <span className="text-sm font-bold text-gray-900 block">Table of Contents</span>
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation ({tocSections.length} Topics)</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xs font-semibold text-[#6E5E93] bg-[#6E5E93]/10 px-2.5 py-1 rounded-full group-open:hidden">
                                                Tap to Expand
                                            </span>
                                            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full hidden group-open:inline-block">
                                                Close
                                            </span>
                                            <svg className="w-4 h-4 text-gray-500 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></div></summary><div className="p-3.5 pt-2 border-t border-purple-50 bg-white/70"><nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{tocSections.map((section, idx) => (<a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100"
                                                ><span className="w-5 h-5 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">{idx + 1}</span><span className="truncate">{section.title}</span></a>))}</nav></div></details></div><div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content"><article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal"><div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose"><img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" /><div><p className="text-sm font-bold text-gray-900 m-0">Written by<Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStore} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Flipkart Brand Approval
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Flipkart Brand Approval is the mandatory platform verification that authorizes a seller to list, market, and sell goods under a specific brand name on Flipkart.com and Shopsy. Brand Lock is Flipkart’s advanced catalog gating security that stops unauthorized sellers from mapping or piggybacking on an approved brand owner&apos;s product listings (FSNs). Indian sellers qualify by submitting a Registered Trademark Certificate (R status) or an official Pending Trademark Application (TM status on Form TM-A with IP India), alongside compliant Legal Metrology packaging photographs or a Trademark Owner Authorization Letter (NOC).</p>
                                        </div>

                                        <p className="mb-6">In India’s hyper-competitive e-commerce marketplace. This establishes brand presence on Flipkart without formal IP verification is an immense commercial hazard. When merchants list products under generic tags or fail to secure proprietary brand approvals, their catalog listings (identified by Flipkart Serial Numbers or FSNs) remain open to all marketplace participants.</p>
                                        <p className="mb-6">Unscrupulous competitors routinely &ldquo;map&rdquo. To high-ranking FSNs, undercut the Buy Box price by supplying counterfeit or substandard items, and trigger severe customer dissatisfaction that destroys the original brand&apos;s organic ratings. Under the<strong>Trade Marks Act, 1999</strong>, only formal trademark recordation establishes nationwide exclusive monopoly under Section 28. This enables sellers to enforce platform gating and shut down catalog hijackers.</p>
                                        <p className="mb-6">Whether you are launching a private label D2C brand through<Link href="/trademark-for-d2c-brand-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for D2C brands</Link>or distributing branded apparel via<Link href="/trademark-for-clothing-brand" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for clothing brands</Link>, mastering Flipkart&apos;s brand verification and lock protocols is essential for sustainable e-commerce growth.</p>
                                    </section>

                                    {/* SECTION 2: BRAND APPROVAL VS BRAND LOCK */}
                                    <section id="brand-approval-vs-brand-lock" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLock} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Brand Approval vs Brand Lock Process
                                        </h2>
                                        <p className="mb-6">Many sellers confuse Flipkart Brand Approval with Flipkart Brand Lock. While both mechanisms operate within the Flipkart Seller Hub, they serve distinct operational and legal objectives:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Flipkart Brand Approval (Catalog Access)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-3">Brand Approval is the baseline entry permission. It authorizes your seller account to create new catalog listings (FSNs) or attach inventory to existing products under a designated brand name.</p>
                                                <ul className="text-xs text-gray-500 space-y-1.5 list-disc list-inside">
                                                    <li>Accessible to brand owners, authorized resellers, and wholesalers.</li>
                                                    <li>Approved via registered TM, pending TM (Form TM-A), or valid purchase invoices.</li>
                                                    <li>Does NOT prevent third-party sellers from mapping to your product listing.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Flipkart Brand Lock (Catalog Protection)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-3">Brand Lock is an exclusive anti-counterfeiting gate. It locks the brand catalog so that no external seller can map or sell under your brand without your prior written authorization.</p>
                                                <ul className="text-xs text-gray-500 space-y-1.5 list-disc list-inside">
                                                    <li>Reserved strictly for verified Brand Owners with registered or mature trademarks.</li>
                                                    <li>Eliminates listing piggybacking, fake reviews, and unauthorized price dropping.</li>
                                                    <li>Similar to Brand Gating and Project Zero on<Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Amazon Brand Registry</Link>.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: MANDATORY TRADEMARK PREREQUISITES */}
                                    <section id="trademark-prerequisites" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Mandatory Trademark Prerequisites
                                        </h2>
                                        <p className="mb-6">To obtain Brand Approval and unlock Brand Lock protections, the Indian Trade Marks Registry documentation submitted must satisfy strict statutory and platform criteria:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Registered Trademark Certificate (R Status)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">A formal Trademark Registration Certificate issued on Form TM-RG by the Registrar of Trade Marks is the gold standard. It confirms definitive ownership under Section 28 of the Trade Marks Act, guaranteeing immediate Brand Approval and prioritized Brand Lock enforcement across Flipkart and Shopsy. Learn more about the legal transition in our guide on<Link href="/difference-between-tm-and-r-symbol-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">difference between TM and R symbol in India</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Pending Trademark Application (TM Status / Form TM-A)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Flipkart accepts pending trademark applications filed on Form TM-A, provided the seller submits the official government Central Book Receipt (CBR) containing the permanent 7 or 8-digit application number. The application status on the public<a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India e-register</a>must reflect active standing (&ldquo;New Application&rdquo;, &ldquo;Send to Vienna Codification&rdquo;, or &ldquo;Marked for Exam&rdquo;). Applications marked as<Link href="/trademark-objected-what-to-do-next" className="text-[rgb(110,94,147)] hover:underline font-medium">Objected</Link>,<Link href="/trademark-opposed-what-happens-next-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Opposed</Link>, or<Link href="/trademark-refused-what-are-options" className="text-[rgb(110,94,147)] hover:underline font-medium">Refused</Link>face scrutiny or rejection.</p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Classification Alignment (Nice Classes 1 to 34)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The trademark must cover the specific goods class matching the physical product vertical being listed on Flipkart. For instance, footwear requires Class 25, cosmetics require Class 3, electronics require Class 9, and kitchenware requires Class 21. Holding only Class 35 (retail/trading services) does not qualify for manufacturer brand approval for tangible goods. Check your category in our<Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>and review<Link href="/types-of-trademark-classes" className="text-[rgb(110,94,147)] hover:underline font-medium">all trademark classes</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Entity &amp; GSTIN Reconciliation</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The applicant name on the trademark record must match the legal business name associated with the Flipkart Seller Account (as registered on the GSTIN). If the trademark is owned by an individual founder while the seller account is an LLP or Private Limited company, a formal<Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark licensing agreement</Link>or No Objection Certificate must link the entities.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: BRAND AUTHORIZATION LETTER & NOC FORMAT */}
                                    <section id="authorization-letter-noc" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Brand Authorization Letter (NOC) Format
                                        </h2>
                                        <p className="mb-6">If you are a distributor, authorized reseller, franchisee, or sister concern selling products under another entity&apos;s brand name, Flipkart strictly mandates a formal<strong>Brand Authorization Letter / No Objection Certificate (NOC)</strong>.</p>

                                        <div className="bg-amber-50/70 p-6 md:p-8 rounded-2xl border border-amber-200 mb-8 not-prose">
                                            <h3 className="text-lg font-bold text-amber-950 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5 mr-2 text-amber-800" />
                                                Mandatory Clauses for Flipkart Brand Authorization
                                            </h3>
                                            <p className="text-sm text-amber-900 leading-relaxed mb-4">To avoid automated rejection by Flipkart&apos;s Brand Operations team, the authorization document must be printed on the Brand Owner&apos;s official letterhead and include the following legal particulars:</p>
                                            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-amber-950 mb-4 font-medium">
                                                <li><strong>Brand Owner Identity:</strong>Complete legal name, CIN/LLPIN, registered corporate address, official email, contact number, and GSTIN.</li>
                                                <li><strong>Trademark Specifics:</strong>Registered Trademark Number or TM Application Number, Word/Device mark name, and registered Nice Class.</li>
                                                <li><strong>Authorized Seller Details:</strong>Legal entity name of the seller, trade name, registered warehouse/business address, GSTIN, and Flipkart Seller ID / Display Name.</li>
                                                <li><strong>Express Commercial Scope:</strong>Clear grant of non-exclusive or exclusive rights to list, market, distribute, and sell genuine products on Flipkart.com and Shopsy in India.</li>
                                                <li><strong>Validity Duration:</strong>Definite term (e.g., valid for 1 year, 2 years, or perpetual until revoked in writing). Open-ended letters without dates are frequently flagged.</li>
                                                <li><strong>Signature &amp; Corporate Seal:</strong>Full name, designation (Director, Partner, Proprietor), signature, and official seal of the authorized brand representative.</li>
                                            </ul>
                                            <p className="text-xs text-amber-900 m-0"><strong>Pro Tip:</strong>For pre-drafted legal templates, explore our detailed resource on<Link href="/format-for-no-objection-certificate" className="text-[rgb(110,94,147)] hover:underline font-bold">format for No Objection Certificate in India</Link>and<Link href="/trademark-consent-letter-coexistence-agreement-india" className="text-[rgb(110,94,147)] hover:underline font-bold">trademark consent letter format</Link>.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 5: PACKAGING & LEGAL METROLOGY RULES */}
                                    <section id="packaging-metrology" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBoxOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Packaging &amp; Legal Metrology Rules
                                        </h2>
                                        <p className="mb-6">The most frequent reason for Flipkart Brand Approval rejection is non-compliant product packaging photography. Flipkart enforces strict adherence to the<strong>Legal Metrology (Packaged Commodities) Rules, 2011</strong>and marketplace authenticity guidelines.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-600 mr-2" />
                                                    Compliant Permanent Branding
                                                </h3>
                                                <ul className="text-sm text-gray-700 space-y-2.5">
                                                    <li>• Brand name printed directly on retail boxes, pouches, or containers.</li>
                                                    <li>• Woven fabric brand labels stitched into garments/textiles.</li>
                                                    <li>• Laser-etched, engraved, or embossed branding on hardware/metal goods.</li>
                                                    <li>• Screen-printed or heat-transferred brand marks on cosmetic bottles.</li>
                                                    <li>• Full Legal Metrology label (MRP, Net Qty, Mfg Date, Customer Care).</li>
                                                    <li>• Unedited real smartphone photos taken in natural lighting from 4 distinct angles.</li>
                                                </ul>
                                            </div>

                                            <div className="border border-red-200 bg-red-50/50 p-6 rounded-2xl">
                                                <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-red-600 mr-2" />
                                                    Non-Compliant (Guaranteed Rejection)
                                                </h3>
                                                <ul className="text-sm text-gray-700 space-y-2.5">
                                                    <li>• Paper adhesive stickers pasted onto unbranded generic white/brown boxes.</li>
                                                    <li>• Digital 3D computer mockups or Photoshop renders with overlay text.</li>
                                                    <li>• Stock photos copied from Alibaba, IndiaMART, or Google Images.</li>
                                                    <li>• Temporary barcode hang-tags without permanent branding on the physical item.</li>
                                                    <li>• Incomplete manufacturer address or missing Maximum Retail Price (MRP).</li>
                                                    <li>• Blurry, cropped, or filtered images obscuring the packaging details.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: 7-STEP STEP-BY-STEP APPROVAL & LOCK PROCESS */}
                                    <section id="step-by-step-process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Flipkart Brand Approval &amp; Lock
                                        </h2>
                                        <p className="mb-6">Navigating the Flipkart Seller Hub verification workflow requires systematic execution. Follow this 7-step blueprint to secure your brand approval and initiate brand lock:</p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: IP Clearance &amp; Filing</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Conduct Trademark Search &amp; E-File Form TM-A</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Perform an exhaustive<Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search</Link>to ensure your brand name is legally available and does not conflict with pre-existing marks under Section 11.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">File Form TM-A with the Indian Trade Marks Registry through an IP attorney. Obtain your official government CBR acknowledgment receipt and application number. Learn more about the steps in our guide on<Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">steps of trademark registration</Link>and<Link href="/e-filing-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">e-filing trademark online</Link>.</p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Packaging Compliance</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Prepare Compliant Packaging &amp; High-Res Photos</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Manufacture primary packaging featuring permanent branding and all 7 mandatory Legal Metrology declarations.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Capture clear, raw smartphone photographs of the physical product from front, back, side, and close-up views showing the printed brand name and MRP label clearly.</p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Seller Hub Access</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Access Flipkart Seller Hub &amp; Brand Approval Portal</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Log into your verified<strong>Flipkart Seller Dashboard</strong>. Navigate to the top navigation bar, select<em>Listings</em>, and click on<em>Add New Listings</em>.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Click on<em>Add a Single Listing</em>. The portal will prompt you to select your product vertical and check for brand authorization. Enter your desired brand name and click<strong>Check Brand Approval</strong>.</p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Vertical &amp; Brand Submission</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Brand Identity &amp; Select Relationship Type</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">If the brand is not pre-approved, the portal opens the Brand Approval Application form.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Specify your relationship with the brand: (1)<strong>Brand Owner / Manufacturer</strong>, or (2)<strong>Authorized Distributor / Reseller</strong>. Enter your official brand website domain if active.</p>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Documentation Upload</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Upload Trademark Proof, NOC &amp; Packaging Images</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Attach your official PDF documentation in the respective upload slots:</p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Trademark Document:</strong>TM Registration Certificate (Form TM-RG) or TM Application Acknowledgment (Form TM-A CBR receipt).</li>
                                                <li><strong>Authorization Proof (if applicable):</strong>Stamped Brand Authorization Letter / NOC from the trademark proprietor.</li>
                                                <li><strong>Product &amp; Packaging Images:</strong>2 to 4 high-resolution photos displaying permanent branding and Legal Metrology labels.</li>
                                                <li><strong>Purchase Tax Invoices (for resellers):</strong>Valid GST tax invoice from the brand owner dated within the last 90 days.</li>
                                            </ul>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Brand Ops Verification</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Track Flipkart Brand Operations Review (24–48 Hours)</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">Submit the application and note the generated<strong>Seller Support Case ID / Ticket Number</strong>.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Flipkart Brand Operations evaluates the submission within 24 to 48 hours. Once approved, the brand name status changes to<em>Approved</em>. This enables you to immediately publish single and bulk catalog listings under the official brand tag.</p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Catalog Gating Activation</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Initiate Flipkart Brand Lock Protection Request</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">As a verified brand owner, raise a dedicated ticket under<em>Seller Support &gt; Brand Protection &gt; Request Brand Lock</em>or coordinate with your Flipkart Account Manager.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Submit your Registered Trademark Certificate and list of authorized seller accounts (if any). Flipkart locks your FSN catalog. This prevents unauthorized third parties from mapping or piggybacking on your listings.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 7: ELIGIBILITY & COMPARISON MATRIX */}
                                    <section id="matrix-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Flipkart Brand Approval Matrix
                                        </h2>
                                        <p className="mb-6">Review seller categories, required documentation, approval turnaround, and Brand Lock gating eligibility:</p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Seller Category</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Mandatory IP Documentation</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Packaging Proof</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Brand Lock Eligibility</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Catalog Security Level</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Brand Owner (Registered TM)</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Registered TM Certificate (Form TM-RG)</td>
                                                        <td className="px-6 py-4">Permanent printed branding + Legal Metrology</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">100% Eligible (Priority Lock)</td>
                                                        <td className="px-6 py-4 text-green-600 font-semibold">Maximum Protection</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Brand Owner (Pending TM)</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form TM-A CBR Receipt (Active Standing)</td>
                                                        <td className="px-6 py-4">Permanent printed branding + Legal Metrology</td>
                                                        <td className="px-6 py-4 text-amber-700 font-semibold">Approval Granted; Lock on Maturity</td>
                                                        <td className="px-6 py-4 text-amber-600 font-semibold">Moderate (Gating in Progress)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Authorized Distributor / Reseller</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Brand Authorization Letter / NOC + TM Copy</td>
                                                        <td className="px-6 py-4">Authentic retail packaging with brand logo</td>
                                                        <td className="px-6 py-4 text-gray-700 font-semibold">Whitelisted via Brand Owner Lock</td>
                                                        <td className="px-6 py-4 text-green-600 font-semibold">High (Protected under Principal)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Wholesale Trader (Invoices Only)</td>
                                                        <td className="px-6 py-4 font-medium text-gray-600">Manufacturer Tax Invoices (&lt;90 days)</td>
                                                        <td className="px-6 py-4">Standard retail product packaging</td>
                                                        <td className="px-6 py-4 text-red-600 font-semibold">Not Eligible (Open Listing)</td>
                                                        <td className="px-6 py-4 text-red-600 font-semibold">Low (Vulnerable to Mapping)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Generic / Unbranded Seller</td>
                                                        <td className="px-6 py-4 font-medium text-gray-400">None (Listed as &ldquo;Generic&rdquo;)</td>
                                                        <td className="px-6 py-4">Generic packaging without brand names</td>
                                                        <td className="px-6 py-4 text-red-600 font-semibold">Not Applicable</td>
                                                        <td className="px-6 py-4 text-red-600 font-semibold">Zero Protection</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 8: STOPPING CATALOG HIJACKING & LEGAL ACTION */}
                                    <section id="catalog-hijacking" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Stopping Listing Hijackers on Flipkart
                                        </h2>
                                        <p className="mb-6">Listing hijacking occurs when an unauthorized seller maps their inventory to your established Flipkart FSN, selling counterfeit or low-quality imitations under your brand name at a lower price. This steals your Buy Box share and destroys customer reviews.</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Report via Flipkart IPR Infringement Notice Portal</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Submit an official Notice of Infringement through the Flipkart Infringement Portal. Provide your Registered Trademark Certificate number, class, specific infringing FSN URLs, and seller details. Flipkart&apos;s Legal Trust &amp; Safety team is obligated under the Information Technology (Intermediary Guidelines) Rules, 2021 to take down infringing listings within statutory timelines.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Issue a Cease-and-Desist Legal Notice</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Instruct a specialized IP advocate to serve a formal<Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark legal notice</Link>demanding immediate de-listing, destruction of counterfeit inventory, and damages for<Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark infringement and passing off</Link>. Explore our guide on<Link href="/how-to-stop-trademark-infringement" className="text-[rgb(110,94,147)] hover:underline font-medium">how to stop trademark infringement</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. File Commercial Injunction &amp; Seek Counterfeiting Penalties</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Under Section 135 of the Trade Marks Act, Commercial Courts grant ex-parte ad-interim injunctions restraining hijackers and appointing Local Commissioners to seize counterfeit goods. Know the liabilities in our detailed analysis on<Link href="/penalty-for-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">penalties for trademark infringement in India</Link>and<Link href="/civil-vs-criminal-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">civil vs criminal trademark enforcement</Link>.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: COMMON REJECTION PITFALLS */}
                                    <section id="common-rejections" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Common Brand Approval Rejection Causes
                                        </h2>
                                        <p className="mb-6">To ensure same-day brand approval without repeated ticket rejections, avoid these 5 prevalent operational mistakes:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-amber-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Brand Name &amp; Trademark Typographical Discrepancy</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">The brand name entered on the Flipkart Seller Hub must match the exact spelling, spacing, and punctuation on your IP India trademark filing. Even minor deviations (e.g., &ldquo;Aura Craft&rdquo; vs &ldquo;AuraCraft&rdquo;) trigger automated system rejection.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Temporary Sticker Labels on Generic Boxes</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Submitting photographs of paper stickers pasted onto blank corrugated boxes or generic packaging is the single highest cause of rejection. Branding must be permanently printed or embossed.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Incomplete Legal Metrology Declarations</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Missing any of the mandatory 7 declarations (Manufacturer name/address, generic commodity title, net quantity, month/year of packing, MRP, customer support) results in regulatory non-compliance rejection.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Unreconciled Entity Names without an NOC</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If the trademark is registered under an individual director&apos;s personal name while the Flipkart Seller Account belongs to a corporate entity (LLP or Pvt Ltd), an executed NOC/Licensing agreement is mandatory.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">5. Trademark Application Marked with Registry Discrepancies</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">If your pending TM application reflects<Link href="/trademark-formalities-check-fail-meaning" className="text-[rgb(110,94,147)] hover:underline font-medium">Formalities Chk Fail</Link>or<Link href="/trademark-abandoned-how-to-restore" className="text-[rgb(110,94,147)] hover:underline font-medium">Abandoned</Link>, Flipkart&apos;s automated validation crawler will flag the document as invalid.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: SELLER ACTION CHECKLIST */}
                                    <section id="seller-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Flipkart Brand Approval Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Trademark Clearance &amp; Filing:</strong>E-file Form TM-A with IP India in matching goods classes (Classes 1–34) and secure your government CBR receipt.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Permanent Packaging Production:</strong>Print brand names directly on primary retail packaging with full Legal Metrology compliance.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Raw Smartphone Photography:</strong>Photograph product from 4 angles showing physical item, brand print, and MRP declaration in natural lighting.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Entity &amp; NOC Preparation:</strong>Reconcile GSTIN legal names or execute a stamped Brand Authorization Letter if operating as a distributor.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Seller Hub Submission:</strong>Navigate to<em>Listings &gt; Add New Listings &gt; Check Brand Approval</em>and submit documents.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Track Ticket Resolution:</strong>Monitor Flipkart Seller Support case logs for approval confirmation within 24–48 hours.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Activate Brand Lock:</strong>Raise a Brand Gating ticket to permanently protect your FSN listings against competitor hijacking.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 11: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[rgb(110,94,147)]">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-10 m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 12: FINAL STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Legal Advice for Flipkart Sellers
                                        </h2>
                                        <p className="mb-6">Securing Flipkart Brand Approval and Brand Lock is not merely an operational checkbox—it is the foundational legal shield for your e-commerce enterprise. With a registered trademark and gated catalog listings, you protect your advertising spend, safeguard consumer reviews, and build enduring enterprise value.</p>
                                        <p className="mb-6">Never leave your marketplace listings exposed to unauthorized hijackers. Partner with seasoned intellectual property advocates to conduct pre-filing clearance, file Form TM-A, draft compliant Brand Authorization letters, and enforce your brand rights across Indian e-commerce platforms. Also explore our guides on<Link href="/trademark-for-ecommerce" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for e-commerce</Link>,<Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Amazon Brand Registry guide</Link>, and<Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">responding to trademark infringement notices</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Trademark Filing for Flipkart
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand on Flipkart &amp; Shopsy Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Secure your official Trade Marks Registry application number, draft legally binding Brand Authorization Letters, and unlock Flipkart Brand Lock to eliminate listing hijackers.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Register Trademark Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered IP Attorneys • Same-Day TM Filing • Flipkart &amp; Amazon Brand Registry Support</p>
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
                                <h3 className="text-base font-bold text-gray-900 mb-0.5">Rahul Roy</h3>
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in e-commerce brand protection, trademark classification, and marketplace IP enforcement on Flipkart, Amazon, and Meesho under Indian IP laws.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Secure Brand Approval</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Need trademark filing or an NOC letter for your Flipkart account? Consult certified IP attorneys.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Consult IP Attorney
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/amazon-brand-registry-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStore} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Amazon Brand Registry</span></Link></li>
                                    <li><Link href="/trademark-for-ecommerce" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM for E-Commerce</span></Link></li>
                                    <li><Link href="/trademark-for-d2c-brand-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTags} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM for D2C Brands</span></Link></li>
                                    <li><Link href="/format-for-no-objection-certificate" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">NOC Format Guide</span></Link></li>
                                    <li><Link href="/difference-between-tm-and-r-symbol-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM vs R Symbol</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Notice Reply</span></Link></li>
                                    <li><Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span></Link></li>
                                    <li><Link href="/penalty-for-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Penalties</span></Link></li>
                                    <li><Link href="/trade-dress-protection-under-indian-trademark-law" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trade Dress Guide</span></Link></li>
                                    <li><Link href="/competitor-bidding-on-my-trademark-google-ads-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Google Ads TM Bidding</span></Link></li>
                                    <li><Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Police Raid Sec 115</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
