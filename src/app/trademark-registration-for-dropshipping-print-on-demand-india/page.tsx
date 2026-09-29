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
    faBookOpen,
    faEye,
    faBrain,
    faCartShopping,
    faShirt,
    faPrint,
    faBoxOpen,
    faGlobe,
    faStore,
    faLock,
    faTriangleExclamation,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark for Dropshipping & POD Brands in India",
    description: validateAndNormalizeDescription(
        "Protect your dropshipping and POD brand in India. Complete guide on Class 25, 35, 40 registration, Amazon Brand Registry, and supplier IP risks.",
        "app/trademark-registration-for-dropshipping-print-on-demand-india/page.tsx"
    ),
    keywords: [
        "trademark registration for dropshipping and print on demand business in india",
        "shopify dropshipping trademark india",
        "print on demand brand name protection",
        "can i trademark white label products",
        "trademark class for custom merchandise and dropshipping",
        "trademark class 25 vs 35 dropshipping",
        "how to protect pod designs in india",
        "amazon brand registry for dropshippers india",
        "trademark registration for meesho sellers",
        "printrove qikink trademark brand protection"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-for-dropshipping-print-on-demand-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark for Dropshipping & POD Brands in India",
        description: "Protect your dropshipping and POD brand in India. Complete guide on Class 25, 35, 40 registration, Amazon Brand Registry, and supplier IP risks.",
        url: "https://www.iprkaro.com/trademark-registration-for-dropshipping-print-on-demand-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-registration-for-dropshipping-print-on-demand-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Registration for Dropshipping and Print on Demand Brands in India Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark for Dropshipping & POD Brands in India",
        description: "Protect your dropshipping and POD brand in India. Complete guide on Class 25, 35, 40 registration, Amazon Brand Registry, and supplier IP risks.",
        images: ["https://www.iprkaro.com/images/og/trademark-registration-for-dropshipping-print-on-demand-india.png"],
    }
};

const faqs = [
    {
        question: "Can I register a trademark if I don't manufacture my own products?",
        answer: "Yes, absolutely. Under Indian trademark law (Trade Marks Act, 1999), trademark ownership belongs to the entity that markets, brands, and sells the goods under its proprietary commercial identifier, not the contract manufacturer or third-party fulfillment vendor. Even if 100% of your products are sourced via dropshipping suppliers (AliExpress, CJ Dropshipping, Indian wholesalers) or printed on-demand (Printrove, Qikink, Gelato), you can register the brand name under your name or company."
    },
    {
        question: "Which trademark class is mandatory for dropshipping and POD businesses in India?",
        answer: "Dropshipping and POD businesses typically require a multi-class filing strategy. The core classes are: (1) Class 25 for apparel, t-shirts, hoodies, and wearable merchandise; (2) Class 35 for online e-commerce retail store services, marketplace sales, and advertising; and (3) Class 40 for custom printing, direct-to-garment (DTG) printing, and garment customization services. Additional product classes such as Class 21 (mugs/drinkware), Class 14 (jewellery), Class 18 (bags), or Class 16 (stickers/stationery) apply depending on your product catalog."
    },
    {
        question: "Why is Class 35 essential even if I already registered Class 25 for clothing?",
        answer: "Class 25 protects only the physical garments and apparel items bearing your label. It does not protect your e-commerce storefront name, website domain identity, or online retail services. If a competitor opens a competing Shopify store or marketplace storefront under your exact brand name selling accessories or third-party goods, Class 25 alone cannot stop them. Class 35 gives you exclusive rights over e-commerce retail services and online store operations."
    },
    {
        question: "Can I get Amazon Brand Registry 2.0 with a pending trademark application?",
        answer: "Yes. Amazon Brand Registry India accepts trademark applications with a valid application number in 'Pending' status (Form TM-A acknowledgment from IP India). You do not need to wait 8 to 18 months for the final registration certificate (Form O-2). Once your application is filed and indexed on the IP India portal, you can immediately enroll in Amazon Brand Registry to unlock A+ content, Brand Store, and listing protection."
    },
    {
        question: "How do I protect my unique graphic POD designs from being copied by competitors?",
        answer: "While trademark registration protects your brand name, store name, and logo (source identifier), your individual graphic artwork, illustrations, and t-shirt print graphics are protected under Copyright Law (The Copyright Act, 1957). For complete IP defense, register your brand name as a Trademark and secure Copyright registration for your original visual graphics and artistic prints to initiate swift DMCA and IP takedowns."
    },
    {
        question: "What is the difference between white-labeling and private-labeling for trademarks?",
        answer: "In white-labeling, a manufacturer produces generic, unbranded goods sold to multiple retailers who simply resell them. You cannot monopolize the generic product design itself, but you can trademark your unique brand name. In private-labeling, the manufacturer produces goods exclusively customized and packaged under your proprietary brand identity. In both models, a registered trademark is the sole legal mechanism that gives you exclusive rights to the commercial label and prevents listing hijacking."
    },
    {
        question: "What evidence is required to claim 'Prior Commercial Use' in a trademark application?",
        answer: "Under Rule 25 of the Trade Marks Rules, 2017, if you claim use prior to the filing date, you must submit a notarized User Affidavit accompanied by dated documentary evidence. For dropshippers, acceptable evidence includes: Shopify / WooCommerce order export invoices, payment gateway settlement summaries (Razorpay, Cashfree, Stripe), Meta/Google ad spend invoices displaying the brand name, GST returns, and domain name registration receipts."
    },
    {
        question: "How can I prevent my POD fulfillment partner or factory from selling my branded merchandise?",
        answer: "To prevent POD hubs or contract manufacturers from selling overruns, rejected batches, or counterfeit copies of your merchandise: (1) Secure a registered trademark in India; (2) Execute a robust Manufacturing & Non-Disclosure Agreement (NDA) containing strict IP assignment and anti-circumvention clauses; and (3) Explicitly prohibit the supplier from displaying your branded products in their public portfolios or wholesale catalogs."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Brand Armor" },
    { id: "vulnerability-gap", title: "Dropshipping IP Risks" },
    { id: "multi-class-strategy", title: "Essential TM Classes" },
    { id: "marketplace-protection", title: "Amazon & Shopify Registry" },
    { id: "white-label-vs-private", "title": "White-Label vs Private Label" },
    { id: "filing-strategy", title: "Word Mark vs Logo & TM User" },
    { id: "registry-objections", title: "Overcoming TM Objections" },
    { id: "step-by-step-process", title: "Step-by-Step Filing Guide" },
    { id: "comparison-matrix", title: "Business Models vs TM Classes" },
    { id: "pitfalls-to-avoid", title: "Critical Mistakes to Avoid" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic D2C Scaling Advice" },
];

export default function DropshippingPodTrademarkPage() {
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
        "headline": "Trademark Registration for Dropshipping & Print-on-Demand (POD) Brands in India",
        "description": "Comprehensive legal guide on trademark registration for dropshipping, Shopify e-commerce, and print-on-demand brands in India. Multi-class strategies across Classes 25, 35, 40, Amazon Brand Registry, and anti-copycat IP protection.",
        "image": "https://www.iprkaro.com/images/og/trademark-registration-for-dropshipping-print-on-demand-india.png",
        "datePublished": "2026-09-29T11:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/trademark-registration-for-dropshipping-print-on-demand-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark for Dropshipping & POD Brands in India",
        "url": "https://www.iprkaro.com/trademark-registration-for-dropshipping-print-on-demand-india",
        "description": "Protect your dropshipping and POD brand in India. Complete guide on Class 25, 35, 40 registration, Amazon Brand Registry, and supplier IP risks.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-registration-for-dropshipping-print-on-demand-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-registration-for-dropshipping-print-on-demand-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Dropshipping & POD Trademark Guide", "item": "https://www.iprkaro.com/trademark-registration-for-dropshipping-print-on-demand-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Strategic Step-by-Step Trademark Roadmap for Dropshipping & POD Brands in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Comprehensive Phonetic and Similarity Trademark Clearance Search" },
            { "@type": "ListItem", "position": 2, "name": "Map Multi-Class Strategy across Goods (Class 25/14/21) and Storefront Services (Class 35)" },
            { "@type": "ListItem", "position": 3, "name": "Compile Documentary Commercial User Date Evidence and Notarized Rule 25 Affidavit" },
            { "@type": "ListItem", "position": 4, "name": "File Form TM-A with MSME / Startup India 50 Percent Government Fee Concession" },
            { "@type": "ListItem", "position": 5, "name": "Enroll in Amazon Brand Registry 2.0 and Flipkart Brand Gating with Application TM Number" },
            { "@type": "ListItem", "position": 6, "name": "Prosecute Examination Report and Overcome Section 9 or Section 11 Objections" },
            { "@type": "ListItem", "position": 7, "name": "Obtain Official Registration Certificate (Form O-2) and Enforce Exclusive Nationwide IP Rights" }
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
                                <FontAwesomeIcon icon={faCartShopping} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">E-Commerce &amp; D2C Brand Protection</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Registration for <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Dropshipping &amp; POD Brands</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Scaling a dropshipping or Print-on-Demand (POD) business on Shopify, WooCommerce, Amazon, or Meesho without trademark protection leaves your brand defenseless against copycats, supplier poaching, and listing hijackers. Master the<strong>multi-class trademark strategy (Classes 25, 35, 40)</strong>, lock in<strong>Amazon Brand Registry</strong>, safeguard your private labels, and build an unassailable digital enterprise under the<strong>Trade Marks Act, 1999</strong>.</p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Trademark Research Specialist</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 29-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">🛍️ E-Commerce IP Blueprint</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Protect Your D2C Brand <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult E-Com Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-registration-for-dropshipping-print-on-demand-india.png"
                                    alt="Trademark Registration for Dropshipping and Print on Demand Brands in India Guide"
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
                        { label: "Dropshipping & POD Trademark Guide", href: "/trademark-registration-for-dropshipping-print-on-demand-india" }
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </summary>
                                    <div className="p-3.5 pt-2 border-t border-purple-50 bg-white/70">
                                        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                            {tocSections.map((section, idx) => (
                                                <a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100"
                                                >
                                                    <span className="w-5 h-5 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">{idx + 1}</span>
                                                    <span className="truncate">{section.title}</span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </details>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content">
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">
                                    <div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose">
                                        <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 m-0">Written by <Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline font-semibold">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & BRAND ARMOR */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trademark Rights for Dropshipping &amp; POD
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">In India, dropshipping and Print-on-Demand (POD) entrepreneurs own full legal entitlement to register trademarks for their brand names, logos, and digital storefronts under the Trade Marks Act, 1999, regardless of whether they manufacture the goods themselves. To achieve comprehensive brand security, founders must implement a multi-class registration strategy covering physical merchandise (Class 25 for apparel, Class 21 for mugs, Class 14 for jewellery), e-commerce retail storefront services (Class 35), and custom printing services (Class 40). Registration is the prerequisite to locking Amazon Brand Registry 2.0, gaining Buy Box immunity, executing counterfeit takedowns, and safeguarding private-label margins from copycat manufacturers.</p>
                                        </div>

                                        <p className="mb-6">The Indian Direct-to-Consumer (D2C) and e-commerce ecosystem has undergone an unprecedented transformation. Driven by platforms like Shopify, WooCommerce, Meesho, Amazon India, and automated POD fulfillment hubs like Printrove, Qikink, Blinkstore, Gelato, and Printful, entrepreneurs can launch scalable consumer brands with zero inventory and zero manufacturing infrastructure.</p>
                                        <p className="mb-6">However, this asset-light advantage creates a severe intellectual property vulnerability. In dropshipping and POD, you do not control the manufacturing line. Your winning product ideas, custom merchandise designs, and brand identities are constantly visible to third-party factories, dropshipping suppliers, and aggressive competitors running automated ad-scraping tools.</p>
                                        <p className="mb-6">Without a registered trademark under the<strong>Trade Marks Act, 1999</strong>, the goodwill generated by your Meta and Google ad spends belongs to whoever files the trademark first. Discover how proactive IP prosecution protects your brand assets in our comprehensive analysis of<Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Amazon Brand Registry trademark requirements</Link>and<Link href="/word-mark-vs-device-mark-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">word mark vs device mark filing strategies</Link>.</p>
                                    </section>

                                    {/* SECTION 2: VULNERABILITY GAP */}
                                    <section id="vulnerability-gap" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTriangleExclamation} className="w-8 h-5 mr-3 text-amber-600" />
                                            The Unique IP Vulnerability of Dropshipping Businesses
                                        </h2>
                                        <p className="mb-6">Traditional manufacturing brands build physical moats through proprietary tooling, factory infrastructure, and localized distribution networks. Dropshipping and POD brands operate in a fundamentally different reality characterized by four major structural IP hazards:</p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Supplier &amp; Factory Poaching</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">When your Shopify store begins generating 500+ daily orders for a specific custom hoodie, coffee mug, or phone accessory, your contract manufacturer or POD partner sees your exact sales volume, customer demographics, and margin spread. Without an enforceable trademark and NDA, unethical suppliers often duplicate the listing and sell directly to consumers at cut-rate prices.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Listing Hijacking &amp; Buy Box Theft</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">On Amazon India, Flipkart, and Meesho, unscrupulous competitors map directly to your established product ASINs. They source identical generic white-label items and undercut your price by ₹10, capturing your Buy Box and ruining your seller rating with substandard product quality.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Trademark Squatting &amp; Hostile Reverse Takedowns</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Competitors monitoring viral Meta / TikTok / Instagram ad trends routinely identify rising D2C brand names and file preemptive trademark applications on the IP India portal. Once their application is indexed, they issue bad-faith intellectual property infringement notices to Shopify, Meta Ads Manager, and payment gateways, shutting down your store overnight.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Zero Equity Valuation without Registered Trademarks</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">When seeking venture capital, strategic angel investment, or selling your Shopify store via e-commerce aggregators (like Mensa Brands, UpScalio, or Goat Brand Labs), unregistered brand names are valued at zero. A registered trademark converts temporary ad revenue into a legally transferable commercial asset under Section 37 and Section 38.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: MULTI-CLASS STRATEGY */}
                                    <section id="multi-class-strategy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Multi-Class Strategy for Custom Merchandise &amp; Apparel
                                        </h2>
                                        <p className="mb-6">The most fatal mistake made by dropshipping founders is filing in only a single Nice class. Indian trademark classification separates physical goods (Classes 1–34) from services (Classes 35–45). A robust defense requires a synchronized multi-class structure:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3">
                                                        <FontAwesomeIcon icon={faShirt} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 25: Apparel</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Covers all wearable merchandise: t-shirts, graphic tees, hoodies, oversized sweatshirts, activewear, jackets, trousers, caps, hats, socks, and footwear.</p>
                                                <div className="bg-purple-50 p-2.5 rounded-lg text-[11px] font-semibold text-[#6E5E93]">
                                                    Essential for: POD apparel brands, streetwear labels, activewear dropshippers.
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                                                        <FontAwesomeIcon icon={faStore} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 35: Retail Store</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Covers online marketplace operations, e-commerce retail store services, digital catalog hosting, sales promotion, digital advertising, and mail order services.</p>
                                                <div className="bg-indigo-50 p-2.5 rounded-lg text-[11px] font-semibold text-indigo-700">
                                                    Essential for: Shopify stores, multi-category dropship websites, brand domains.
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mr-3">
                                                        <FontAwesomeIcon icon={faPrint} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 40: Custom Print</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Covers custom manufacturing, direct-to-garment (DTG) textile printing, screen printing, embroidery, laser engraving, sublimation, and material treatment.</p>
                                                <div className="bg-emerald-50 p-2.5 rounded-lg text-[11px] font-semibold text-emerald-700">
                                                    Essential for: POD platforms, custom merchandise printers, B2B POD providers.
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Ancillary Merchandise Classes for Diversified D2C Catalogs</h3>
                                        <p className="mb-4">As your dropshipping storefront expands beyond clothing into high-margin gift items and accessories, you must secure secondary classes under Nice Classification:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Nice Class</th>
                                                        <th className="p-3.5 sm:p-4">Merchandise &amp; Product Category</th>
                                                        <th className="p-3.5 sm:p-4">Typical Dropship / POD Items Covered</th>
                                                        <th className="p-3.5 sm:p-4">Priority Level</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Class 21</td>
                                                        <td className="p-3.5 sm:p-4">Drinkware &amp; Household Utensils</td>
                                                        <td className="p-3.5 sm:p-4">Custom printed ceramic mugs, steel tumblers, water bottles, coasters</td>
                                                        <td className="p-3.5 sm:p-4 text-purple-700 font-bold">High (Core POD)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Class 14</td>
                                                        <td className="p-3.5 sm:p-4">Jewellery &amp; Precious Accessories</td>
                                                        <td className="p-3.5 sm:p-4">Custom engraved pendants, artificial jewellery, watches, charms</td>
                                                        <td className="p-3.5 sm:p-4 text-indigo-700 font-bold">High (D2C Jewellery)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Class 18</td>
                                                        <td className="p-3.5 sm:p-4">Leather Goods &amp; Bags</td>
                                                        <td className="p-3.5 sm:p-4">Canvas tote bags, backpacks, duffle bags, wallets, passport holders</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">Medium-High</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Class 16</td>
                                                        <td className="p-3.5 sm:p-4">Stationery &amp; Paper Merchandise</td>
                                                        <td className="p-3.5 sm:p-4">Custom stickers, vinyl decals, diaries, art posters, notebooks, calendars</td>
                                                        <td className="p-3.5 sm:p-4 text-purple-700 font-bold">High (Core POD)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Class 9</td>
                                                        <td className="p-3.5 sm:p-4">Tech Accessories &amp; Digital Goods</td>
                                                        <td className="p-3.5 sm:p-4">Custom phone cases, mousepads, wireless charger pads, downloadable digital art</td>
                                                        <td className="p-3.5 sm:p-4 text-indigo-700 font-bold">Medium-High</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 4: MARKETPLACE PROTECTION */}
                                    <section id="marketplace-protection" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingShield} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Amazon Brand Registry &amp; Marketplace Protection in India
                                        </h2>
                                        <p className="mb-6">For e-commerce entrepreneurs, trademark registration is not merely a legal defense tool—it is the prerequisite growth key required to unlock premier commercial features across top e-commerce marketplaces:</p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Amazon Brand Registry 2.0 (Enrollment on Pending TM)</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Amazon India permits brand owners to enroll in Brand Registry as soon as Form TM-A is submitted and assigned an application number. You do not need to wait for final registration. Brand Registry grants exclusive ownership over your product detail pages, blocks unauthorized hijackers from attaching to your ASINs, and unlocks high-converting A+ Enhanced Marketing Content, custom Brand Stores, and Sponsored Brands advertising video units.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Flipkart Brand Approval &amp; Listing Gating</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Flipkart enforces strict brand authorization tiers. Holding a registered trademark or pending application in the appropriate class enables you to secure Flipkart Brand Approval. This locks your product catalog against unauthorized resellers who attempt to sell counterfeit or unauthorized white-label versions under your listing.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Meesho Brand Hub &amp; Anti-Counterfeiting Takedowns</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Social commerce platforms like Meesho frequently suffer from rampant image scraping and design cloning. A registered trademark empowers you to file automated IP infringement complaints via Meesho&apos;s legal grievance portal, triggering rapid delisting of infringing seller accounts within 48 to 72 hours.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Meta, Instagram &amp; Shopify Brand Enforcement</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">When rogue dropshippers clone your Shopify website theme, rip your product photos, or run deceptive Instagram / Facebook ad campaigns using your brand name, Meta and Shopify&apos;s Trust &amp; Safety teams require your official trademark registration number to execute instant domain suspensions and page deletions under global IP protection rules.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: WHITE-LABEL VS PRIVATE LABEL */}
                                    <section id="white-label-vs-private" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBoxOpen} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            White-Label vs Private-Label vs POD IP Ownership
                                        </h2>
                                        <p className="mb-6">Understanding what you can and cannot protect under Indian intellectual property law is critical for structuring profitable commercial agreements with suppliers:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    White-Label Dropshipping IP Rights
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">In white-label dropshipping, the underlying physical product (e.g., a generic posture corrector, stainless steel water bottle, or basic blender) is generic. You cannot claim trademark or patent rights over the product mechanism itself.</p>
                                                <div className="bg-white p-3 rounded-xl text-xs text-gray-800 border border-purple-100">
                                                    <strong>What you own:</strong> Exclusive proprietary rights to your unique Brand Name, Logo, Packaging Graphics, Shopify Domain, and Brand Story.
                                                </div>
                                            </div>

                                            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-2"></span>
                                                    Private-Label &amp; POD IP Rights
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">In private-label and POD, the product incorporates custom specifications, proprietary artwork, branded neck labels, custom unboxing mailers, or bespoke colorways manufactured exclusively for you.</p>
                                                <div className="bg-white p-3 rounded-xl text-xs text-gray-800 border border-indigo-100">
                                                    <strong>What you own:</strong> Trademark over Brand &amp; Logo + Copyright over Graphic Artwork + Trade Dress rights over unique packaging and get-up.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6 not-prose">
                                            <h3 className="text-sm font-bold text-amber-900 mb-1 flex items-center">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 mr-2 text-amber-600" />
                                                Mandatory Clause: Contract Manufacturing &amp; Supplier NDA
                                            </h3>
                                            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed m-0">Always execute a written Supplier Agreement with your contract manufacturer or POD printing hub. The contract must explicitly state: (a) All customer designs, artwork, and branding remain your exclusive intellectual property; (b) The supplier cannot manufacture or distribute overruns or rejected units bearing your trademark; and (c) The supplier is legally barred from listing your private-label items on B2B portals like IndiaMART, Alibaba, or Udaan.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 6: FILING STRATEGY */}
                                    <section id="filing-strategy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Word Mark vs Logo Strategy &amp; Prior User Evidence
                                        </h2>
                                        <p className="mb-6">Deploying the proper technical filing strategy on Form TM-A determines whether your trademark will withstand registry examination and future litigation challenges:</p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Prioritize a Word Mark (Standard Character Filing)</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">A Word Mark protects the text string and spelling of your brand name regardless of font style, capitalization, colour combination, or graphic stylization. If you change your Shopify store logo or packaging typography later, a Word Mark continues to provide 100% full coverage. Always file a Word Mark first before investing in separate Device Mark (Logo) applications.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Device Mark (Composite Logo) for Unique Brand Emblems</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">If your POD brand features an iconic graphic mascot, abstract emblem, or distinctive typography crest (e.g., printed on chest pockets, sleeve labels, or product tags), file a separate Device Mark under the appropriate Vienna Classification codes to prevent visual copycats.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. &lsquo;Proposed to be Used&rsquo; vs &lsquo;Claiming Prior Commercial Use&rsquo;</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">If your dropshipping store is brand new, file as &ldquo;Proposed to be Used&rdquo;. However, if you have already been running ads and generating sales, claim your exact inception date by submitting a notarized User Affidavit under Rule 25. Prior use gives you superior common law priority under Section 34 of the Trade Marks Act against late-filing imitators.</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 not-prose">
                                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider text-[#6E5E93]">Acceptable User Evidence for Dropshippers under Rule 25</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700 list-disc pl-5">
                                                <li>Dated Shopify / WooCommerce order confirmation invoices</li>
                                                <li>Payment gateway settlement reports (Razorpay, Cashfree, Stripe)</li>
                                                <li>Meta Ads Manager / Google Ads invoices mentioning the brand</li>
                                                <li>Domain registration certificate (Whois lookup / GoDaddy receipt)</li>
                                                <li>GST tax returns and shipping partner manifests (Shiprocket, Delhivery)</li>
                                                <li>High-resolution photographs of products bearing printed brand tags</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 7: REGISTRY OBJECTIONS */}
                                    <section id="registry-objections" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overcoming Section 9 &amp; Section 11 TM Objections
                                        </h2>
                                        <p className="mb-6">During trademark prosecution, examiners at the Trade Marks Registry frequently issue Examination Reports containing statutory objections under Sections 9 and 11. Overcoming them requires specialized legal drafting:</p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="border-l-4 border-amber-500 pl-4 py-3 bg-amber-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Overcoming Section 9(1)(b) Descriptive &amp; Generic Objections</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2">Examiners raise Section 9 if your brand name describes the nature, quality, or function of your goods (e.g., &ldquo;Custom Cotton Tees&rdquo;, &ldquo;Quick Dropship Hub&rdquo;, or &ldquo;Daily Print Wear&rdquo;). To prevent or overcome this objection:</p>
                                                <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                                                    <li>Choose arbitrary, suggestive, or completely coined/fanciful names.</li>
                                                    <li>Submit evidence of acquired distinctiveness and commercial recognition through sales volume and social media followings.</li>
                                                    <li>Argue that the combination creates an indivisible, distinctive whole under Section 17.</li>
                                                </ul>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Overcoming Section 11(1) Relative Similarity Objections</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2">If the Registry cites an earlier identical or deceptively similar trademark in Class 25 or Class 35, deploy established judicial frameworks:</p>
                                                <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                                                    <li>Apply the Supreme Court&apos;s 7-factor test from<em>Cadila Health Care (2001)</em>to prove phonetic, visual, and conceptual dissimilarity.</li>
                                                    <li>Apply the Anti-Dissection Rule (comparing marks as unified wholes rather than breaking them into syllables).</li>
                                                    <li>Demonstrate clear disparity in target consumer profiles, pricing tiers, and e-commerce distribution channels.</li>
                                                    <li>Plead prior commercial use under Section 34 or honest concurrent adoption under Section 12.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: STEP-BY-STEP PROCESS */}
                                    <section id="step-by-step-process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Trademark Registration Process &amp; Fees
                                        </h2>
                                        <p className="mb-6">The statutory journey from brand conception to official Form O-2 certificate follows a structured 6-step lifecycle on the IP India e-filing gateway:</p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="flex items-start bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Comprehensive Trademark Clearance Search</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Conduct phonetic, visual, and semantic searches across Classes 25, 35, 40, and related classes on the IP India public search portal and international trademark registries to confirm 100% brand availability.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Application Filing via Form TM-A (Instant TM Symbol)</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Submit the electronic application with proper applicant classification. The instant Form TM-A receipt generates an official 7-digit application number, granting immediate legal right to display the ™ symbol and enroll in Amazon Brand Registry.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Registry Examination &amp; Written Response</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">The Registry examiner scrutinizes the mark for absolute (Section 9) and relative (Section 11) conflicts within 1 to 3 months. If an Examination Report is issued, a formal legal reply must be filed within 30 days.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Show Cause Hearing (If Required)</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">If the written response does not fully satisfy the Hearing Officer, an online video conference (VC) show-cause hearing is scheduled under Rule 115, where your registered trademark attorney presents oral legal arguments.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</div>
                                                <div>
                                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Publication in Trade Marks Journal (4 Months)</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Upon acceptance, the mark is published in the weekly Trade Marks Journal for a statutory 4-month opposition period under Section 20, allowing third parties to review potential conflicts.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">6</div>
                                                <div>
                                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Issuance of Registration Certificate (Form O-2 &amp; ® Symbol)</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">If no opposition is filed within 4 months, the CGPDTM generates your official digitally signed Trademark Registration Certificate (Form O-2) under Section 23, conferring nationwide exclusive rights and full authorization to use the prestigious ® symbol.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Official Government Fee Structure &amp; 50% MSME Subsidy</h3>
                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Applicant Category</th>
                                                        <th className="p-3.5 sm:p-4">Government Fee (Per Class)</th>
                                                        <th className="p-3.5 sm:p-4">Eligibility Requirement</th>
                                                        <th className="p-3.5 sm:p-4">Cost Advantage</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Individual / Proprietorship</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-black">₹4,500</td>
                                                        <td className="p-3.5 sm:p-4">PAN Card + Aadhaar Card</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">Standard 50% Base</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Startup India / MSME (Udyam)</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-black">₹4,500</td>
                                                        <td className="p-3.5 sm:p-4">Udyam Certificate / DPIIT Recognition</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">50% Government Subsidy</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Private Limited / LLP (Non-MSME)</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-black">₹9,000</td>
                                                        <td className="p-3.5 sm:p-4">Certificate of Incorporation without Udyam</td>
                                                        <td className="p-3.5 sm:p-4 text-gray-600">Full Standard Fee</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 9: COMPARISON MATRIX */}
                                    <section id="comparison-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            E-Commerce Business Model vs Trademark Class Matrix
                                        </h2>
                                        <p className="mb-6">Determine your mandatory trademark registration scope based on your active operational model in the Indian e-commerce marketplace:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Business Model</th>
                                                        <th className="p-3.5 sm:p-4">Primary TM Classes</th>
                                                        <th className="p-3.5 sm:p-4">Ancillary TM Classes</th>
                                                        <th className="p-3.5 sm:p-4">Primary IP Risk Factor</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Apparel Print-on-Demand (POD)</td>
                                                        <td className="p-3.5 sm:p-4 text-purple-800 font-bold">Class 25 &amp; Class 35</td>
                                                        <td className="p-3.5 sm:p-4">Class 40 (Custom DTG Printing)</td>
                                                        <td className="p-3.5 sm:p-4">Graphic artwork theft &amp; supplier copycats</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Shopify Dropshipping (Gadgets/Home)</td>
                                                        <td className="p-3.5 sm:p-4 text-indigo-800 font-bold">Class 35 &amp; Class 9/21</td>
                                                        <td className="p-3.5 sm:p-4">Class 11 (Appliances), Class 28 (Toys)</td>
                                                        <td className="p-3.5 sm:p-4">Shopify domain cloning &amp; fake ad pages</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Custom Jewellery &amp; Gifts D2C</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-800 font-bold">Class 14 &amp; Class 35</td>
                                                        <td className="p-3.5 sm:p-4">Class 16 (Gift boxes), Class 40 (Engraving)</td>
                                                        <td className="p-3.5 sm:p-4">Counterfeit imitation on Meesho/Amazon</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Custom Merchandise &amp; Drinkware</td>
                                                        <td className="p-3.5 sm:p-4 text-purple-800 font-bold">Class 21 &amp; Class 16</td>
                                                        <td className="p-3.5 sm:p-4">Class 35 (Online Retail), Class 40 (Printing)</td>
                                                        <td className="p-3.5 sm:p-4">Listing hijacking on marketplace catalog</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">POD Fulfillment &amp; Printing B2B</td>
                                                        <td className="p-3.5 sm:p-4 text-indigo-800 font-bold">Class 40 &amp; Class 35</td>
                                                        <td className="p-3.5 sm:p-4">Class 42 (Custom software/API integration)</td>
                                                        <td className="p-3.5 sm:p-4">B2B platform imitation &amp; software cloning</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: PITFALLS TO AVOID */}
                                    <section id="pitfalls-to-avoid" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-5 mr-3 text-red-600" />
                                            Critical Intellectual Property Mistakes to Avoid
                                        </h2>
                                        <p className="mb-6">Dropshipping and POD founders frequently encounter costly brand destruction by committing four preventable IP errors:</p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Scaling Ad Spend Before Trademark Clearance</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Spending ₹5,00,000 to ₹50,00,000 on Meta and Google ad campaigns to scale an unregistered brand name is catastrophic if a prior trademark registrant sends a cease-and-desist letter under Section 29. You will be forced to rebrand, surrender your domain, abandon all social media handles, and potentially pay damages.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-3 bg-amber-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Printing Trademarked Characters &amp; Celebrity Memes</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Printing Marvel, Disney, anime, gaming characters, or IPL sports logos without official licensing constitutes willful trademark and copyright infringement. Rights holders aggressively file John Doe (Ashok Kumar) injunctions in Delhi High Court, seizing stock, freezing bank accounts, and disabling payment gateway merchant IDs.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Filing Only for Physical Goods and Ignoring Class 35</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">If you file exclusively in Class 25 (Apparel), a competitor can register your identical brand name in Class 35 (E-commerce retail services). They can then operate an online fashion aggregator under your name without infringing your Class 25 registration, creating permanent market confusion.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Relying on Unregistered Partnership Agreements</h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">When two or three co-founders launch a dropshipping venture, failing to execute a formal Joint Ownership Agreement under Section 24 or assigning the trademark to an incorporated entity (Pvt Ltd / LLP) leads to catastrophic deadlocks if a founder departs.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[rgb(110,94,147)]">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-4 not-prose">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-3 font-black text-xl sm:text-2xl flex-shrink-0">Q.</span>
                                                        <span>{faq.question}</span>
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 pl-7 sm:pl-9 m-0 leading-relaxed">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 12: STRATEGIC TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-5 mr-3 text-yellow-500" />
                                            Strategic D2C Brand Scaling Advice
                                        </h2>
                                        <p className="mb-6">In the ultra-competitive Indian e-commerce landscape, marketing expertise drives initial sales velocity, but intellectual property protection determines long-term enterprise equity. A dropshipping or POD store with a registered trademark transforms from a fragile transactional shop into a defensible, venture-backable digital consumer brand.</p>
                                        <p className="mb-6">Partner with dedicated e-commerce trademark attorneys to conduct clearance searches, file multi-class applications under MSME subsidies, and establish comprehensive brand gating. Explore our specialized guides on<Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Amazon Brand Registry requirements</Link>,<Link href="/flipkart-brand-approval-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Flipkart Brand Approval guide</Link>, and<Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[rgb(110,94,147)] hover:underline font-medium">MSME trademark fee concessions</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA BANNER */}
                                    <section className="mt-16 md:mt-20 not-prose">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Comprehensive E-Commerce IP Protection
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-2xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Dropshipping &amp; POD Brand Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base sm:leading-8 mb-8">Deploy registered trademark attorneys to secure Class 25, 35 &amp; 40 protection, unlock Amazon Brand Registry 2.0, and shield your brand from supplier copycats.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult E-Commerce Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered Trademark Attorneys • 50% MSME Subsidy • Amazon Brand Registry • Pan-India</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in e-commerce trademark prosecution, Amazon Brand Registry brand defense, multi-class D2C strategy, and copyright protection for custom merchandise.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Launching a D2C Brand?</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Secure multi-class trademark protection across Classes 25 &amp; 35 before scaling your Shopify ad campaigns.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Check Brand Availability
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/amazon-brand-registry-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Amazon Brand Registry</span></Link></li>
                                    <li><Link href="/flipkart-brand-approval-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStore} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Flipkart Brand Approval</span></Link></li>
                                    <li><Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Word vs Device Mark</span></Link></li>
                                    <li><Link href="/single-class-vs-multi-class-trademark-application-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faListUl} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Single vs Multi-Class</span></Link></li>
                                    <li><Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">MSME Fee Concessions</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Infringement Reply</span></Link></li>
                                    <li><Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">AI Trademark Search</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
