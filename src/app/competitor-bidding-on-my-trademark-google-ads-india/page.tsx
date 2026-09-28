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
    faGavel,
    faBuildingShield,
    faHandshake,
    faStamp,
    faClock,
    faBan,
    faTags,
    faBullhorn,
    faGlobe,
    faDesktop,
    faCode,
    faFolderOpen
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Competitor Trademark Bidding in Google Ads: India Legal Guide",
    description: validateAndNormalizeDescription(
        "Stop competitors bidding on your trademark in Google Ads in India. Master Trade Marks Act remedies, Delhi HC rulings, takedown notices, and Google complaints.",
        "app/competitor-bidding-on-my-trademark-google-ads-india/page.tsx"
    ),
    keywords: [
        "competitor bidding on my trademark google ads india",
        "google ads trademark infringement india",
        "can competitors use my brand name as keyword in google ads",
        "google ads trademark complaint procedure india",
        "makemytrip v booking com precedent",
        "drs logistics v google trademark delhi high court",
        "trademark infringement section 29 trade marks act 1999",
        "google ads takedown legal notice india",
        "dynamic keyword insertion trademark infringement",
        "trademark bidding interim injunction delhi high court"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/competitor-bidding-on-my-trademark-google-ads-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Competitor Trademark Bidding in Google Ads: India Legal Guide",
        description: "Stop competitors bidding on your trademark in Google Ads in India. Master Trade Marks Act remedies, Delhi HC rulings, takedown notices, and Google complaints.",
        url: "https://www.iprkaro.com/competitor-bidding-on-my-trademark-google-ads-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/competitor-bidding-on-my-trademark-google-ads-india.png",
                width: 1200,
                height: 630,
                alt: "Competitor Bidding on Your Trademark in Google Ads Legal Remedies and Takedown in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Competitor Trademark Bidding in Google Ads: India Legal Guide",
        description: "Stop competitors bidding on your trademark in Google Ads in India. Master Trade Marks Act remedies, Delhi HC rulings, takedown notices, and Google complaints.",
        images: ["https://www.iprkaro.com/images/og/competitor-bidding-on-my-trademark-google-ads-india.png"],
    }
};

const faqs = [
    {
        question: "Is it legal for a competitor to bid on my registered trademark in Google Ads in India?",
        answer: "Under prevailing Indian jurisprudence settled by the Delhi High Court Division Bench in Google LLC v. DRS Logistics (2023) and MakeMyTrip v. Booking.com (2023), bidding on a competitor's registered trademark as an invisible backend keyword does not constitute per se infringement under Section 29 of the Trade Marks Act, 1999, provided there is no likelihood of consumer confusion or unfair advantage. However, if the competitor displays your trademark in their ad headline, ad description, or display URL, uses Dynamic Keyword Insertion (DKI), or creates initial interest confusion, it constitutes actionable trademark infringement and passing off."
    },
    {
        question: "What did the Delhi High Court decide in Google LLC v. DRS Logistics and MakeMyTrip v. Booking.com?",
        answer: "In Google LLC v. DRS Logistics (2023), the Delhi High Court Division Bench held that using a trademark as a backend keyword qualifies as 'use in advertising' under Section 29(6) of the Trade Marks Act, but infringement occurs only if such use causes consumer confusion or takes unfair advantage of the mark's reputation. In MakeMyTrip v. Booking.com (2023), the Division Bench overturned an earlier injunction, ruling that sophisticated consumers searching for online travel portals are not confused when a competitor's distinct ad appears without using the protected trademark in the ad text."
    },
    {
        question: "Can Google LLC be held liable as an intermediary for trademark infringement in India?",
        answer: "Under Section 79 of the Information Technology Act, 2000, Google enjoys conditional 'safe harbor' intermediary immunity. However, as clarified in DRS Logistics, Google loses this immunity if it actively participates in keyword suggestions that encourage infringement, profits from deceptive advertising, or fails to act expeditiously upon receiving a formal trademark complaint or court order under the Information Technology (Intermediary Guidelines) Rules, 2021."
    },
    {
        question: "What is the difference between backend keyword bidding and trademark use in ad text?",
        answer: "Backend keyword bidding refers to selecting a competitor's brand name as a search trigger inside the Google Ads auction console without displaying the mark to end users. Trademark use in ad text occurs when the protected brand name appears visibly in the sponsored headline, creative copy, or display URL. While backend bidding requires proof of consumer confusion to establish infringement, visible trademark use in ad copy creates a strong prima facie case of statutory infringement under Section 29 and violates Google's explicit Trademark Ad Text Policy."
    },
    {
        question: "How does Dynamic Keyword Insertion (DKI) create trademark infringement liability?",
        answer: "Dynamic Keyword Insertion (DKI) is a Google Ads feature that automatically inserts the exact user search query into the ad headline (e.g., {KeyWord:Default Text}). When a user searches for your registered brand, DKI automatically pulls your trademark into the competitor's ad headline. This constitutes direct, unauthorized visible use of your trademark in commerce, creating severe consumer confusion under Section 29(1) and Section 29(2) and exposing the advertiser to immediate injunctions and damages."
    },
    {
        question: "How do I file a trademark infringement complaint directly with Google Ads?",
        answer: "To initiate an administrative takedown: (1) Access the official Google Ads Trademark Complaint Form, (2) Submit your registered trademark details including registration number, jurisdiction (India), and class, (3) Upload the official registration certificate from IP India, (4) Identify the infringing advertiser domains, URLs, and specific ad text violations, and (5) Authorize specific Google Ads customer IDs (your own accounts and authorized agencies) while restricting unauthorized third parties."
    },
    {
        question: "What legal remedies are available under Section 29 and Section 135 of the Trade Marks Act, 1999?",
        answer: "Under Section 135 of the Trade Marks Act, 1999, trademark proprietors can file a commercial suit seeking: (1) Ad-interim ex-parte injunction restraining the competitor and Google from displaying infringing ads, (2) Permanent injunction prohibiting trademark use in ad copy and metadata, (3) Damages or accounts of profits generated through diverted search traffic, (4) Anton Piller search orders or discovery of ad spend metrics, and (5) Legal costs."
    },
    {
        question: "What must be included in a Cease-and-Desist notice for Google Ads trademark bidding?",
        answer: "A comprehensive legal notice drafted by an IP advocate must state: (1) Proprietary trademark registration details and certified certificates, (2) Evidence of goodwill, market reputation, and prior continuous commercial use, (3) Timestamped SERP screenshots showing infringing ad copy, headlines, and destination landing pages, (4) Specific statutory violations under Sections 29(1), 29(2), 29(4), and 29(8), (5) Mandatory demand to add your trademark as a negative keyword, and (6) A 7 to 15-day compliance deadline prior to initiating commercial litigation."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "legal-framework", title: "Trade Marks Act Provisions" },
    { id: "delhi-hc-rulings", title: "Delhi High Court Rulings" },
    { id: "backend-vs-ad-copy", title: "Keyword vs Ad Copy Infringement" },
    { id: "dynamic-keyword-insertion", title: "Dynamic Keyword Insertion Risks" },
    { id: "google-complaint-process", title: "Google Ads Complaint Steps" },
    { id: "enforcement-workflow", title: "7-Step Legal Protocol" },
    { id: "remedies-matrix", title: "Legal Remedies Matrix" },
    { id: "defensive-bidding", title: "Defensive PPC Strategies" },
    { id: "common-pitfalls", title: "Common Litigation Pitfalls" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Brand Protection Advice" },
];

export default function CompetitorTrademarkBiddingGoogleAdsPage() {
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
        "headline": "Competitor Bidding on Your Trademark in Google Ads: Legal Remedies & Takedown in India",
        "description": "Stop competitors bidding on your trademark in Google Ads in India. Master Trade Marks Act remedies, Delhi HC rulings, takedown notices, and Google complaints.",
        "image": "https://www.iprkaro.com/images/og/competitor-bidding-on-my-trademark-google-ads-india.png",
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
            "@id": "https://www.iprkaro.com/competitor-bidding-on-my-trademark-google-ads-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Competitor Trademark Bidding in Google Ads: India Legal Guide",
        "url": "https://www.iprkaro.com/competitor-bidding-on-my-trademark-google-ads-india",
        "description": "Stop competitors bidding on your trademark in Google Ads in India. Master Trade Marks Act remedies, Delhi HC rulings, takedown notices, and Google complaints.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/competitor-bidding-on-my-trademark-google-ads-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/competitor-bidding-on-my-trademark-google-ads-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Competitor Trademark Bidding Google Ads India", "item": "https://www.iprkaro.com/competitor-bidding-on-my-trademark-google-ads-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "7-Step Protocol to Stop Competitor Trademark Bidding in Google Ads in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Forensic SERP Evidence Capture & Ad Copy Timestamping" },
            { "@type": "ListItem", "position": 2, "name": "Trademark Title Verification & Class Audit on IP India Portal" },
            { "@type": "ListItem", "position": 3, "name": "Drafting Formal Section 29 Cease-and-Desist Legal Notice" },
            { "@type": "ListItem", "position": 4, "name": "Submitting Google Ads Trademark Policy Complaint Form" },
            { "@type": "ListItem", "position": 5, "name": "Mandating Negative Keyword Inclusion in Settlement Agreements" },
            { "@type": "ListItem", "position": 6, "name": "Deploying Strategic Brand Defense PPC Campaigns" },
            { "@type": "ListItem", "position": 7, "name": "Instituting Commercial Court Injunction Suit under Section 135" }
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
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Search Advertising &amp; IP Defense</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Competitor Bidding on Your Trademark in Google Ads: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Legal Remedies &amp; Takedown in India</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Discovering that an aggressive market rival is bidding on your registered brand name in Google Ads (formerly Google AdWords) is a major commercial threat. By hijacking your branded search traffic, competitors steal organic customers, drive up your Customer Acquisition Cost (CAC), and dilute your proprietary goodwill. Understand the evolving legal landscape under the Trade Marks Act 1999, landmark Delhi High Court rulings (DRS Logistics, MakeMyTrip), Google Ads trademark complaint procedures, Cease-and-Desist notices, and Commercial Court injunction remedies.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 12 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">⚖️ Verified Search IP Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Stop Ad Infringement <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/competitor-bidding-on-my-trademark-google-ads-india.png"
                                    alt="Competitor Bidding on Your Trademark in Google Ads Legal Remedies and Takedown in India"
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
                        { label: "Competitor Trademark Bidding Google Ads India", href: "/competitor-bidding-on-my-trademark-google-ads-india" }
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
                                                    <span className="w-5 h-5 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">
                                                        {idx + 1}
                                                    </span>
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
                                            <p className="text-sm font-bold text-gray-900 m-0">Written by <Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faSearch} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Google Ads Trademark Bidding
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Competitor trademark bidding in Google Ads occurs when an advertiser targets your registered brand name as a search keyword to trigger sponsored ads. Under Indian law, bidding on a trademark as an invisible backend keyword is not automatic infringement unless it causes consumer confusion or takes unfair advantage of your mark under Section 29 of the Trade Marks Act, 1999. However, if a competitor displays your trademark in their ad headline, copy, or display URL, or utilizes Dynamic Keyword Insertion (DKI), it constitutes actionable trademark infringement and passing off, justifying administrative Google takedowns and High Court injunctions.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Search Engine Marketing (SEM) has revolutionized commercial customer acquisition across India. In high-growth sectors such as D2C retail, SaaS platforms, edtech, fintech, and professional legal services, search intent is intensely commercial. When an existing or prospective customer types your exact brand name into Google, their purchase intent is definitive.
                                        </p>
                                        <p className="mb-6">
                                            Recognizing this high commercial value, predatory competitors frequently bid on your brand name within the Google Ads auction system. As a result, the competitor&apos;s sponsored advertisement appears above your organic search results. This practice diverts organic traffic, inflates your brand PPC acquisition costs, and often misleads users into believing the competitor is affiliated with or endorsed by your enterprise.
                                        </p>
                                        <p className="mb-6">
                                            Navigating this challenge requires a dual-pronged approach: mastering the statutory mechanisms under the <strong>Trade Marks Act, 1999</strong> and executing technical takedown procedures through the <strong>Google Ads Trademark Policy</strong>. Whether you are running a fast-growing startup with a <Link href="/trademark-for-saas-product" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for SaaS products</Link> or scaling a consumer brand via <Link href="/trademark-for-d2c-brand-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for D2C brands</Link>, proactive trademark defense in search advertising is vital.
                                        </p>
                                    </section>

                                    {/* SECTION 2: STATUTORY PROVISIONS */}
                                    <section id="legal-framework" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trade Marks Act Provisions on Ad Bidding
                                        </h2>
                                        <p className="mb-6">
                                            The legality of search keyword bidding under Indian intellectual property jurisprudence revolves around specific provisions of Section 29 of the Trade Marks Act, 1999. The statute does not explicitly use the term &ldquo;Google AdWords&rdquo; or &ldquo;Search Keyword&rdquo;, but its expansive definitions of &ldquo;use in advertising&rdquo; govern online auctions:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-3 h-3 bg-[#6E5E93] rounded-full mr-3"></span>
                                                    Section 29(1) &amp; 29(2): Likelihood of Confusion
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Section 29(1) establishes infringement when an unauthorized person uses an identical or deceptively similar mark in the course of trade for identical goods or services. Under Section 29(2), infringement arises when such unauthorized use is likely to cause confusion on the part of the public or create an association with the registered mark. If an ad creative induces a searcher to believe the competitor represents your brand, Section 29(2) is squarely violated.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-3 h-3 bg-[#6E5E93] rounded-full mr-3"></span>
                                                    Section 29(4): Protection of Well-Known Marks Against Dilution
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Where a trademark has established reputation and goodwill in India, Section 29(4) protects against unauthorized commercial use even on dissimilar goods or services. Infringement occurs if the competitor&apos;s keyword bidding takes unfair advantage of, or is detrimental to, the distinctive character or repute of the registered mark without due cause. Learn more about obtaining well-known protection in our guide on <Link href="/how-to-get-well-known-trademark-status-india" className="text-[rgb(110,94,147)] hover:underline font-medium">well-known trademark status in India</Link>.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-3 h-3 bg-[#6E5E93] rounded-full mr-3"></span>
                                                    Section 29(6) &amp; Section 29(8): Use in Advertising
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Section 29(6)(d) explicitly clarifies that a person uses a registered mark if they use it on business papers or in advertising. Furthermore, Section 29(8) stipulates that a registered trademark is infringed by any advertising that takes unfair advantage of, is contrary to honest practices in industrial or commercial matters, is detrimental to its distinctive character, or causes disrepute to the mark.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: LANDMARK JUDICIAL PRECEDENTS */}
                                    <section id="delhi-hc-rulings" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Delhi High Court Rulings on Keyword Bidding
                                        </h2>
                                        <p className="mb-6">
                                            The High Court of Delhi—the preeminent forum for commercial intellectual property disputes in India—has delivered landmark judgments that shape how Google Ads keyword bidding is adjudicated:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-5 py-3 bg-purple-50/40 rounded-r-2xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Google LLC v. DRS Logistics (P) Ltd. &amp; Ors. (2023)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    In a monumental Division Bench decision, the Delhi High Court addressed whether using a registered trademark (such as &ldquo;Agarwal Packers and Movers&rdquo;) as a backend search keyword constitutes trademark infringement. The Division Bench held:
                                                </p>
                                                <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside">
                                                    <li><strong>Use in Advertising:</strong> Bidding on a trademark as a keyword does constitute &ldquo;use&rdquo; in advertising under Section 29(6) of the Trade Marks Act, 1999.</li>
                                                    <li><strong>Infringement Requirement:</strong> However, such use amounts to actionable infringement only if it results in consumer confusion, deceit, or takes unfair advantage of the trademark owner&apos;s goodwill.</li>
                                                    <li><strong>Intermediary Liability:</strong> Google cannot claim blanket immunity under Section 79 of the IT Act if its Keyword Planner tool actively recommends infringing marks or if it fails to act upon formal infringement complaints.</li>
                                                </ul>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-5 py-3 bg-indigo-50/40 rounded-r-2xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. MakeMyTrip India Pvt. Ltd. v. Booking.com B.V. &amp; Google LLC (2023)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    In an appeal concerning Online Travel Agencies (OTAs), the Single Judge had initially restrained Booking.com from bidding on the keyword &ldquo;MakeMyTrip&rdquo;. The Division Bench set aside the injunction, establishing pivotal principles:
                                                </p>
                                                <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside">
                                                    <li><strong>Absence of Visible Trademark in Ad Copy:</strong> Where Booking.com&apos;s ad clearly displayed its own name and logo without using &ldquo;MakeMyTrip&rdquo; in the ad headline or text, there was no consumer confusion.</li>
                                                    <li><strong>Sophisticated Internet Users:</strong> Consumers looking for travel booking platforms are aware of competing service providers and understand that search engine results display sponsored alternatives.</li>
                                                    <li><strong>Fair Commercial Competition:</strong> Backend keyword bidding without deceptive ad copy does not automatically amount to unfair advantage or free-riding under Section 29(8).</li>
                                                </ul>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-5 py-3 bg-purple-50/40 rounded-r-2xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Mattel Inc. &amp; WinZO Games Precedents</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    In <em>Mattel Inc. v. Jayant Agarwalla</em> and subsequent digital gaming disputes (e.g., <em>WinZO Games v. Google LLC</em>), the courts emphasized the doctrine of <strong>Initial Interest Confusion</strong>. If an ad deliberately creates initial confusion to lure searchers to an unauthorized platform—even if the confusion is dispelled before a final financial transaction occurs—it constitutes actionable passing off under Indian common law. For differences between statutory remedies and passing off, see our guide on <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement in India</Link>.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: KEYWORD VS AD COPY */}
                                    <section id="backend-vs-ad-copy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faDesktop} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Keyword Bidding vs Ad Copy Infringement
                                        </h2>
                                        <p className="mb-6">
                                            To determine the likelihood of winning a trademark dispute or securing an injunction, you must distinguish between backend keyword selection and visible ad text usage:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-amber-500 rounded-full mr-2.5"></span>
                                                    Backend Keyword Bidding (Invisible)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                                    The competitor bids on your brand name inside their Google Ads account. However, when the ad is displayed, your trademark is nowhere to be seen in the ad title, description, or URL.
                                                </p>
                                                <div className="bg-white p-4 rounded-xl border border-gray-100 space-y-2 text-xs text-gray-600">
                                                    <p><strong>Legal Status:</strong> High threshold of proof required.</p>
                                                    <p><strong>Google Policy:</strong> Google will NOT restrict backend keywords.</p>
                                                    <p><strong>Court Remedy:</strong> Injunction only granted if actual customer confusion, deception, or brand tarnishment is proven.</p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full mr-2.5"></span>
                                                    Trademark in Ad Copy / Headline (Visible)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                                    The competitor displays your registered brand name directly in their sponsored headline (e.g., &ldquo;Official [Your Brand] Portal&rdquo;), creative description, or display path.
                                                </p>
                                                <div className="bg-white p-4 rounded-xl border border-gray-100 space-y-2 text-xs text-gray-600">
                                                    <p><strong>Legal Status:</strong> Direct prima facie statutory infringement.</p>
                                                    <p><strong>Google Policy:</strong> Strictly restricted via Google Trademark Form.</p>
                                                    <p><strong>Court Remedy:</strong> Immediate ad-interim ex-parte injunction, search takedown, and damages under Section 135.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: DYNAMIC KEYWORD INSERTION */}
                                    <section id="dynamic-keyword-insertion" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCode} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Dynamic Keyword Insertion Risks in India
                                        </h2>
                                        <p className="mb-6">
                                            <strong>Dynamic Keyword Insertion (DKI)</strong> is an automated syntax used by performance marketers (formatted as <code>&#123;KeyWord:Default Text&#125;</code>) that automatically updates ad copy to include the exact search query entered by the user.
                                        </p>
                                        <p className="mb-6">
                                            While DKI is designed to boost click-through rates (CTR) and Quality Scores, it creates severe trademark liability when applied to broad competitor campaigns:
                                        </p>

                                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6 not-prose">
                                            <h3 className="text-base font-bold text-amber-900 mb-2 flex items-center">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 mr-2 text-amber-600" />
                                                The DKI Trademark Trap
                                            </h3>
                                            <p className="text-sm text-amber-800 leading-relaxed m-0">
                                                If an advertiser uses DKI and a consumer searches for your brand name &ldquo;ABC Solutions&rdquo;, the competitor&apos;s ad dynamically displays &ldquo;Looking for ABC Solutions? - Official Site&rdquo; or &ldquo;Buy ABC Solutions Online&rdquo;. This automated insertion constitutes direct, unauthorized visible trademark use in commerce. Advertisers cannot escape liability by claiming the insertion was automated by Google&apos;s algorithm.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            In Indian commercial litigation, screenshots demonstrating DKI-triggered ads showing your registered trademark serve as undeniable proof of infringement under Section 29(1) and passing off. It leaves the infringer unable to defend their campaign under the <em>MakeMyTrip</em> doctrine.
                                        </p>
                                    </section>

                                    {/* SECTION 6: GOOGLE TRADEMARK COMPLAINT */}
                                    <section id="google-complaint-process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGlobe} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Google Ads Trademark Complaint Procedure
                                        </h2>
                                        <p className="mb-6">
                                            Google maintains an official administrative mechanism for registered trademark owners to restrict unauthorized use of their marks in sponsored search ad text. Submitting a complaint takes down infringing ad copy without initiating expensive court litigation:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">1</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0 mb-1">Verify Trademark Registration Standing</h3>
                                                    <p className="text-xs text-gray-600 m-0">Ensure your mark is registered (R status) on the official <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India e-register</a>. Google accepts complaints only from registered trademark proprietors or authorized legal counsel. Pending applications (TM status) are not eligible for Google Ads text restrictions. Check status in our <Link href="/trademark-application-status" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark status guide</Link>.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">2</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0 mb-1">Access Google Ads Trademark Complaint Form</h3>
                                                    <p className="text-xs text-gray-600 m-0">Navigate to the Google Legal Help Center Trademark Complaint Form. Specify India as the jurisdiction of registration and input the precise Word Mark or Device Mark registration number and Nice classification.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">3</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0 mb-1">Provide Infringing Ad Evidence &amp; Specific URLs</h3>
                                                    <p className="text-xs text-gray-600 m-0">Submit the exact destination landing URLs, advertiser display paths, and full search queries that trigger the infringing ad copy. Upload high-resolution timestamped SERP screenshots.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">4</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0 mb-1">Define Authorization Whitelist (Allowlist)</h3>
                                                    <p className="text-xs text-gray-600 m-0">List the specific 10-digit Google Ads Customer IDs of your internal marketing accounts, parent companies, franchisees, or contracted performance marketing agencies who are authorized to run ads using your trademark.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 mt-0.5">5</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0 mb-1">Google IP Legal Team Review &amp; Enforcement</h3>
                                                    <p className="text-xs text-gray-600 m-0">Google&apos;s trademark enforcement team reviews submissions within 3 to 7 business days. Upon verification, Google places automated ad text restrictions blocking unauthorized advertisers in India from serving ad copy containing your trademark.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: 7-STEP ENFORCEMENT PROTOCOL */}
                                    <section id="enforcement-workflow" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingShield} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Legal Protocol to Stop Bidding
                                        </h2>
                                        <p className="mb-6">
                                            When a competitor poaches your branded traffic, following a disciplined, evidence-backed workflow ensures maximum leverage and rapid resolution:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 1: Forensic SERP Evidence Capture</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Do not simply click the competitor&apos;s ad. Use incognito browsers and VPNs across multiple Indian cities (Delhi, Mumbai, Bengaluru) to capture high-resolution screenshots. Document the search keyword, sponsored headline, creative description, ad extensions, display URL, final landing page URL, date, and exact timestamp.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 2: Trademark Registration &amp; Nice Class Audit</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Verify that your trademark is registered in the appropriate classes matching your online services (e.g., Class 9 for software/apps, Class 35 for e-commerce and retail advertising, Class 36 for fintech, Class 42 for SaaS). Learn more about classification in our <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link> and <Link href="/types-of-trademark-classes" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark classes guide</Link>.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 3: Issue a Section 29 Cease-and-Desist Notice</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Have an intellectual property advocate issue a formal legal notice to the competitor&apos;s registered corporate entity, directors, and CMO. The notice must cite Section 29, Section 135, relevant Delhi HC precedents, and demand immediate negative keyword addition within 7 days. See our guide on <Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to send a trademark legal notice in India</Link>.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 4: Submit Google Ads Trademark Complaint</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Simultaneously file an administrative complaint through Google&apos;s Trademark Complaint Form to freeze unauthorized ad copy and restrict future DKI exploitation across Google&apos;s ad network in India.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 5: Enforce Negative Keyword Undertaking in Settlement</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    During legal negotiations or settlement discussions, mandate that the competitor execute a formal Settlement and Coexistence Agreement. The agreement must require them to add your brand name (including misspellings) as an <strong>Exact Match Negative Keyword</strong> across all their Google Ads campaigns. Check our guide on <Link href="/trademark-consent-letter-coexistence-agreement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark coexistence agreements in India</Link>.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 6: Deploy Strategic Brand Defense PPC Campaigns</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Run a dedicated defensive brand search campaign on your own brand terms. Because you own the domain and possess the highest Quality Score (10/10) and CTR, your Cost Per Click (CPC) will be minimal, while forcing competitors to pay exorbitant bids to achieve top placement.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Step 7: File Commercial Suit for Injunction &amp; Damages</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    If the competitor refuses compliance or deliberately runs deceptive ad copy, file a Commercial Suit under Section 134/135 of the Trade Marks Act before the Commercial Division of the High Court or District Commercial Court. Seek ad-interim ex-parte injunctions, rendition of accounts, and punitive damages. Explore <Link href="/penalty-for-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">penalties for trademark infringement in India</Link>.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: REMEDIES MATRIX TABLE */}
                                    <section id="remedies-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Legal Remedies Comparison Matrix
                                        </h2>
                                        <p className="mb-6">
                                            Evaluate the operational timeframes, legal costs, enforceability, and strategic pros and cons of available remedies against competitor trademark bidding:
                                        </p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 text-left text-xs sm:text-sm">
                                                <thead className="bg-[#FAF9F6] text-gray-900 font-bold">
                                                    <tr>
                                                        <th className="p-4 border-r border-gray-200">Enforcement Route</th>
                                                        <th className="p-4 border-r border-gray-200">Applicable Scenario</th>
                                                        <th className="p-4 border-r border-gray-200">Timeline</th>
                                                        <th className="p-4 border-r border-gray-200">Enforceability</th>
                                                        <th className="p-4">Key Advantage / Limitation</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white text-gray-700">
                                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900 border-r border-gray-200">Google Ads Trademark Form</td>
                                                        <td className="p-4 border-r border-gray-200">Trademark displayed in competitor ad copy / DKI</td>
                                                        <td className="p-4 border-r border-gray-200">3–7 business days</td>
                                                        <td className="p-4 border-r border-gray-200">Platform restriction</td>
                                                        <td className="p-4">Zero court costs; does NOT restrict pure backend keyword bidding.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900 border-r border-gray-200">Cease-and-Desist Legal Notice</td>
                                                        <td className="p-4 border-r border-gray-200">All brand bidding and passing off instances</td>
                                                        <td className="p-4 border-r border-gray-200">7–15 days notice</td>
                                                        <td className="p-4 border-r border-gray-200">Pre-litigation demand</td>
                                                        <td className="p-4">Resolves 60%+ disputes without litigation via negative keyword undertaking.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900 border-r border-gray-200">Commercial Court Injunction (Sec 135)</td>
                                                        <td className="p-4 border-r border-gray-200">Deceptive ad copy, initial interest confusion, fraud</td>
                                                        <td className="p-4 border-r border-gray-200">1–4 weeks (Interim)</td>
                                                        <td className="p-4 border-r border-gray-200">Judicial court order</td>
                                                        <td className="p-4">Enforceable with police assistance, damages, and accounts of profits.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900 border-r border-gray-200">Defensive Brand Search Campaign</td>
                                                        <td className="p-4 border-r border-gray-200">Immediate traffic protection on Google SERP</td>
                                                        <td className="p-4 border-r border-gray-200">Immediate (&lt;24 hours)</td>
                                                        <td className="p-4 border-r border-gray-200">PPC auction mechanism</td>
                                                        <td className="p-4">High Quality Score yields cheap top ad placement; incurs minor PPC budget.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 9: DEFENSIVE PPC STRATEGIES */}
                                    <section id="defensive-bidding" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBullhorn} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Defensive PPC Strategies for Brand Owners
                                        </h2>
                                        <p className="mb-6">
                                            While legal remedies take effect, digital marketing teams must implement proactive PPC safeguards to minimize commercial bleeding:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                                                <div className="w-10 h-10 bg-[#6E5E93] text-white rounded-xl flex items-center justify-center font-bold mb-4">1</div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Own Brand Keyword Campaign</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed">
                                                    Bid on your exact brand terms and common misspellings. Because your landing page contains the highest relevance, your Quality Score will be 10/10, making your CPC a fraction of what competitors pay.
                                                </p>
                                            </div>

                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                                                <div className="w-10 h-10 bg-[#6E5E93] text-white rounded-xl flex items-center justify-center font-bold mb-4">2</div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Utilize All Ad Assets (Extensions)</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed">
                                                    Enable sitelink extensions, callout extensions, structured snippets, and lead forms. Maximizing ad pixel height pushes competitor ads and organic results below the mobile fold.
                                                </p>
                                            </div>

                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                                                <div className="w-10 h-10 bg-[#6E5E93] text-white rounded-xl flex items-center justify-center font-bold mb-4">3</div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Automated SERP Scraping &amp; Alerts</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed">
                                                    Deploy automated search ad monitoring tools to track auction insights, detect new competitor bidding, and record timestamped ad copies for legal evidence automatically.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: COMMON LITIGATION PITFALLS */}
                                    <section id="common-pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Common Brand Bidding Litigation Pitfalls
                                        </h2>
                                        <p className="mb-6">
                                            Many brand owners rush into litigation without understanding Indian evidentiary thresholds, resulting in costly dismissed applications:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="flex items-start p-4 bg-red-50/50 rounded-xl border border-red-100">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-red-900 m-0 mb-1">Litigating Pure Backend Bidding Without Proof of Confusion</h3>
                                                    <p className="text-xs text-red-700 m-0">Following the <em>MakeMyTrip</em> Division Bench ruling, filing a suit solely against invisible keyword bidding when the competitor&apos;s ad is completely distinct will likely fail. You must demonstrate deceptive copy, brand dilution, or consumer mislead.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-red-50/50 rounded-xl border border-red-100">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-red-900 m-0 mb-1">Relying on Unregistered Trademarks (TM Status Only)</h3>
                                                    <p className="text-xs text-red-700 m-0">Google&apos;s trademark complaint mechanism will reject submissions based on pending applications. While passing off suits are maintainable, having a registered certificate (R status) provides immediate statutory monopoly under Section 28.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-red-50/50 rounded-xl border border-red-100">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-red-900 m-0 mb-1">Failing to Capture Timestamped Electronic Evidence</h3>
                                                    <p className="text-xs text-red-700 m-0">Under Section 65B of the Indian Evidence Act, 1872 (now Section 63 of Bharatiya Sakshya Adhiniyam, 2023), digital screenshots must be accompanied by an electronic certificate authenticating time, IP address, and device logs.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-4 not-prose">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                                    <h3 className="text-base font-bold text-gray-900 mb-2">{faq.question}</h3>
                                                    <p className="text-sm text-gray-700 leading-relaxed m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 12: FINAL STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Brand Protection Advice
                                        </h2>
                                        <p className="mb-6">
                                            In the modern digital economy, search engine results pages represent the front door of your enterprise. Allowing competitors to poach your trademark in Google Ads without challenge surrenders valuable market share and weakens your brand equity over time.
                                        </p>
                                        <p className="mb-6">
                                            A sophisticated brand protection strategy integrates proactive trademark registration across relevant Nice classes, automated SERP compliance monitoring, aggressive pre-litigation enforcement through Section 29 legal notices, and swift execution of Google Ads trademark complaint procedures. When competitors cross the line into deceptive ad copy or dynamic keyword insertion, seasoned IP advocates can secure rapid injunctive relief before commercial courts.
                                        </p>
                                        <p className="mb-6">
                                            Explore our dedicated guides on <Link href="/how-to-stop-trademark-infringement" className="text-[rgb(110,94,147)] hover:underline font-medium">how to stop trademark infringement</Link>, <Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">responding to trademark infringement notices</Link>, <Link href="/domain-name-trademark-dispute-cybersquatting-indrp-india" className="text-[rgb(110,94,147)] hover:underline font-medium">domain name dispute and INDRP rules</Link>, and <Link href="/civil-vs-criminal-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">civil vs criminal trademark infringement in India</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Stop Search Ad Trademark Poaching
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand in Google Ads Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Issue formal Cease-and-Desist legal notices, file official Google Ads Trademark Complaints, and secure Commercial Court injunctions against infringing competitors.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult IP Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Registered IP Advocates • High Court Litigation • Google Ads Takedown Specialist
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
                                <h3 className="text-base font-bold text-gray-900 mb-0.5">Rahul Roy</h3>
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in digital brand protection, search engine advertising disputes, Google Ads takedowns, and commercial trademark litigation under Indian IP laws.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Stop Competitor Bidding</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Competitors stealing your branded traffic on Google? Get legal notices drafted and filed by IP attorneys.</p>
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
                                    <li>
                                        <Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBan} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Notice Reply</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-send-trademark-legal-notice-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Send Legal Notice</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/penalty-for-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Penalties</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Passing Off vs Infringement</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/domain-name-trademark-dispute-cybersquatting-indrp-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Domain Disputes &amp; INDRP</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-consent-letter-coexistence-agreement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faHandshake} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Coexistence Agreement</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-saas-product" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faDesktop} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM for SaaS Products</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-d2c-brand-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faTags} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM for D2C Brands</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-digital-marketing-agency" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBullhorn} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM for Digital Agencies</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Police Raid Sec 115</span>
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
