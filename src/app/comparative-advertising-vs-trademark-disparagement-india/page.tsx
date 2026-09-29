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
    faBullhorn,
    faEye,
    faHandshake,
    faShieldCat,
    faChartLine
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Comparative Advertising vs Disparagement India: Legal Guide",
    description: validateAndNormalizeDescription(
        "Learn the legal rules of comparative advertising vs trademark disparagement in India. Master Section 29(8), Section 30(1), puffery, and Delhi HC cases.",
        "app/comparative-advertising-vs-trademark-disparagement-india/page.tsx"
    ),
    keywords: [
        "comparative advertising vs trademark disparagement india",
        "can you use competitor trademark in ads india",
        "section 29 8 trademark disparagement trade marks act",
        "section 30 1 honest commercial practice comparative ad",
        "puffery vs product disparagement advertising law india",
        "reckitt benckiser v hindustan unilever disparagement",
        "asci comparative advertising guidelines india",
        "ccpa misleading advertisement guidelines 2022",
        "generic disparagement trademark injunction delhi high court",
        "commercial speech article 19 1 a comparative advertising"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/comparative-advertising-vs-trademark-disparagement-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Comparative Advertising vs Trademark Disparagement in India: Legal Rules",
        description: "Learn the legal rules of comparative advertising vs trademark disparagement in India. Master Section 29(8), Section 30(1), puffery, and Delhi HC cases.",
        url: "https://www.iprkaro.com/comparative-advertising-vs-trademark-disparagement-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/comparative-advertising-vs-trademark-disparagement-india.png",
                width: 1200,
                height: 630,
                alt: "Comparative Advertising vs Trademark Disparagement in India Legal Boundaries and Rules",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Comparative Advertising vs Trademark Disparagement in India: Legal Rules",
        description: "Learn the legal rules of comparative advertising vs trademark disparagement in India. Master Section 29(8), Section 30(1), puffery, and Delhi HC cases.",
        images: ["https://www.iprkaro.com/images/og/comparative-advertising-vs-trademark-disparagement-india.png"],
    }
};

const faqs = [
    {
        question: "Is comparative advertising legal under Indian trademark law?",
        answer: "Yes. Comparative advertising is lawful in India under Section 30(1) of the Trade Marks Act, 1999 and protected as commercial speech under Article 19(1)(a) of the Constitution. An advertiser can use a competitor's registered trademark to identify their goods or services, provided the comparison is truthful, verifiable, conforms to honest commercial practices, and does not take unfair advantage or damage the distinctive character or reputation of the competitor's mark."
    },
    {
        question: "What constitutes trademark disparagement under Section 29(8)?",
        answer: "Under Section 29(8) of the Trade Marks Act, 1999, advertising constitutes trademark infringement and actionable disparagement if it: (a) takes unfair advantage of and is contrary to honest practices in industrial or commercial matters, (b) is detrimental to the distinctive character of the trade mark, or (c) is detrimental to the reputation of the trade mark. Disparagement occurs when an advertisement crosses the line from boasting about one's own product to denigrating, defaming, or rubbishing a competitor's goods."
    },
    {
        question: "What is the legal difference between 'Puffery' and 'Disparagement'?",
        answer: "Trade Puffery refers to exaggerated, hyperbole-driven claims where a seller boasts 'My product is the best in the world' or 'Superior to all others'. Indian courts consider puffery permissible marketing hyperbole that ordinary consumers take with a grain of salt. Product Disparagement, by contrast, occurs when a trader asserts that a competitor's product is bad, ineffective, toxic, defective, or harmful. Disparagement is illegal and triggers civil injunctions and damages."
    },
    {
        question: "What is the 'Generic Disparagement' doctrine?",
        answer: "Generic Disparagement occurs when an advertisement attacks or discredits an entire category of goods or depicts an unbranded product that clearly mimics the unique shape, color scheme, trade dress, or container of a market leader without explicitly naming their trademark (e.g., attacking toothpowder in favor of toothpaste, or showing a distinctively shaped orange antiseptic bottle). Indian courts grant injunctions against generic disparagement to protect market reputation."
    },
    {
        question: "What three-factor test was laid down in Pepsi Co. v. Hindustan Coca Cola?",
        answer: "In Pepsi Co. Inc. V. Hindustan Coca Cola Ltd. (2003 (27) PTC 305 Del DB), the Delhi High Court established a seminal three-factor test for determining advertising disparagement: (1) The Manner of the commercial (is it ridiculing, mocking, or honestly comparing?), (2) The Intent of the commercial (is it to inform consumers or discredit a competitor?), and (3) The Storyline and overall message conveyed to the average viewer."
    },
    {
        question: "Can an advertiser compare specific parameters like price or ingredients?",
        answer: "Yes. In Havells India Ltd. V. Amritanshu Khaitan (2015) and Horlicks Ltd. V. Heinz India (2018), the Delhi High Court confirmed that advertisers are fully entitled to highlight specific factual advantages, such as price differences, lumen output, energy efficiency, or protein grams per serving, provided the data is backed by independent scientific testing and does not falsely imply the competitor's product is unsafe or inferior overall."
    },
    {
        question: "What role does the ASCI Code play in comparative advertising?",
        answer: "The Advertising Standards Council of India (ASCI) Code under Chapter IV mandates that comparative advertisements must: (1) compare clear, verifiable, and identical product parameters, (2) not mislead consumers about either product, (3) be supported by independent laboratory substantiation, and (4) not unfairly attack, discredit, or denigrate other products, brands, or advertisers directly or by implication."
    },
    {
        question: "What immediate legal remedies are available against a disparaging advertisement in India?",
        answer: "An aggrieved brand owner can immediately file a commercial suit under the Commercial Courts Act, 2015 and Trade Marks Act, 1999 before the High Court or Commercial District Court seeking: (1) Ex-parte ad-interim injunctions under Order 39 Rules 1 & 2 CPC restraining broadcast on TV, YouTube, social media, and print, (2) Mandatory takedown directions to broadcasters and digital intermediaries, (3) Punitive and compensatory damages, and (4) Complaints before the Central Consumer Protection Authority (CCPA) and ASCI Fast-Track Complaints Panel."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "constitutional-speech-vs-ip", title: "Commercial Speech vs IP Rights" },
    { id: "section-29-8-statute", title: "Section 29(8) Disparagement" },
    { id: "section-30-1-exception", title: "Section 30(1) Honest Practice" },
    { id: "puffery-vs-denigration", title: "Puffery vs Product Denigration" },
    { id: "generic-disparagement", title: "Generic Disparagement Doctrine" },
    { id: "landmark-judgments", title: "Landmark Delhi HC Case Laws" },
    { id: "asci-ccpa-guidelines", title: "ASCI & CCPA 2022 Guidelines" },
    { id: "civil-remedies-injunctions", title: "Injunctions & Court Remedies" },
    { id: "comparative-risk-matrix", title: "Advertising Risk Matrix" },
    { id: "pre-clearance-checklist", title: "7-Step Ad Pre-Clearance" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic Advisory for CMOs" },
];

export default function ComparativeAdvertisingDisparagementPage() {
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
        "headline": "Comparative Advertising vs Trademark Disparagement in India: Legal Boundaries & Rules",
        "description": "Learn the legal rules of comparative advertising vs trademark disparagement in India. Master Section 29(8), Section 30(1), puffery, and Delhi HC cases.",
        "image": "https://www.iprkaro.com/images/og/comparative-advertising-vs-trademark-disparagement-india.png",
        "datePublished": "2026-09-28T09:15:00+05:30",
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
            "@id": "https://www.iprkaro.com/comparative-advertising-vs-trademark-disparagement-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Comparative Advertising vs Disparagement India: Legal Guide",
        "url": "https://www.iprkaro.com/comparative-advertising-vs-trademark-disparagement-india",
        "description": "Learn the legal rules of comparative advertising vs trademark disparagement in India. Master Section 29(8), Section 30(1), puffery, and Delhi HC cases.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/comparative-advertising-vs-trademark-disparagement-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/comparative-advertising-vs-trademark-disparagement-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Comparative Advertising Legal Guide", "item": "https://www.iprkaro.com/comparative-advertising-vs-trademark-disparagement-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "7-Step Brand Pre-Clearance Checklist for Comparative Advertisements in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Audit Ad Storyline Against Pepsi Co Three-Factor Disparagement Test" },
            { "@type": "ListItem", "position": 2, "name": "Commission Independent NABL-Accredited Laboratory Substantiation Tests" },
            { "@type": "ListItem", "position": 3, "name": "Verify Factual Accuracy of Quantifiable Metrics (Price, Lumens, Ingredients)" },
            { "@type": "ListItem", "position": 4, "name": "Eliminate Pejorative Visuals, Ridicule, or Derogatory Depictions of Rival Products" },
            { "@type": "ListItem", "position": 5, "name": "Ensure Disclaimers Comply with CCPA 2022 Font Size and Readability Standards" },
            { "@type": "ListItem", "position": 6, "name": "Review Script Against Chapter IV of ASCI Code for Comparative Advertising" },
            { "@type": "ListItem", "position": 7, "name": "Obtain Formal Legal Opinion from IP Litigation Counsel Prior to Broadcast" }
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
                                <FontAwesomeIcon icon={faBullhorn} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Advertising &amp; Trademark Law</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Comparative Advertising vs <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Disparagement in India</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Fierce commercial competition frequently leads brand managers to launch high-octane comparative advertising campaigns. Under<strong>Sections 29(8) and 30(1) of the Trade Marks Act, 1999</strong>, advertisers walk a razor-thin line between legitimate commercial comparison and illegal trademark disparagement. Master the puffery doctrine, generic denigration rules, Delhi High Court jurisprudence, ASCI codes, and CCPA 2022 guidelines to protect your brand from crippling injunctions.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Verified IP Litigation Practice</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Pre-Clear Ad Campaign <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call IP Litigator: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/comparative-advertising-vs-trademark-disparagement-india.png"
                                    alt="Comparative Advertising vs Trademark Disparagement in India Legal Boundaries and Rules"
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
                        { label: "Comparative Advertising Legal Guide", href: "/comparative-advertising-vs-trademark-disparagement-india" }
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
                                            <FontAwesomeIcon icon={faBullhorn} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Comparative Advertising Law
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Comparative advertising is legally permissible in India under Section 30(1) of the Trade Marks Act, 1999 and constitutional commercial speech protections. Advertisers may reference a competitor&apos;s trademark to highlight honest, verifiable, and truthful product differences. However, under Section 29(8), advertising becomes illegal trademark disparagement if it takes unfair advantage, defames or ridicules the competitor, makes unsubstantiated claims, or asserts that the competitor&apos;s product is inferior, substandard, or toxic.</p>
                                        </div>

                                        <p className="mb-6">From television commercials (TVCs) and billboard wars between FMCG giants (like HUL vs Reckitt Benckiser or Pepsi vs Coca-Cola) to aggressive digital comparison campaigns by modern D2C startups, comparative advertising is a high-stakes marketing battleground.</p>
                                        <p className="mb-6">While consumers benefit from transparent price, ingredient, and performance comparisons, brand owners invest immense capital building brand goodwill and trademark equity. When an aggressive competitor crosses the boundary from trade puffery into product denigration, Indian Commercial Courts step in decisively with swift interim injunctions, mandatory takedowns, and heavy punitive damages.</p>
                                        <p className="mb-6">Understanding the statutory interplay between<strong>Section 29(8)</strong>and<strong>Section 30(1)</strong>, the judicial three-factor disparagement test, ASCI codes, and the 2022 CCPA Guidelines is essential for chief marketing officers, creative agencies, and in-house legal counsels. For related digital marketing IP rules, review our guides on<Link href="/competitor-bidding-on-my-trademark-google-ads-india" className="text-[rgb(110,94,147)] hover:underline font-medium">competitor bidding on trademarks in Google Ads</Link>and<Link href="/trade-dress-protection-under-indian-trademark-law" className="text-[rgb(110,94,147)] hover:underline font-medium">trade dress protection under Indian law</Link>.</p>
                                    </section>

                                    {/* SECTION 2: CONSTITUTIONAL SPEECH VS IP RIGHTS */}
                                    <section id="constitutional-speech-vs-ip" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Commercial Speech vs Intellectual Property
                                        </h2>
                                        <p className="mb-6">The legal foundation of comparative advertising in India rests on the constitutional balance between two competing legal rights:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-3 h-3 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Commercial Speech (Article 19(1)(a))
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">In the historic<em>Tata Press Ltd. V. MTNL (1995 5 SCC 139)</em>ruling, the Supreme Court of India held that commercial advertising is a protected form of commercial speech under<strong>Article 19(1)(a)</strong>of the Constitution.</p>
                                                <p className="text-xs text-gray-700 font-semibold m-0">Consumers have a fundamental right to receive truthful commercial information regarding product quality, price, efficiency, and comparative specifications.</p>
                                            </div>

                                            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></span>
                                                    Trademark Protection (Section 28 &amp; 29)
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Under the Trade Marks Act, 1999, registration grants exclusive commercial monopoly and protects proprietary brand goodwill against unfair competition, trademark dilution, and tortious slander of goods.</p>
                                                <p className="text-xs text-gray-700 font-semibold m-0">Competitors cannot piggyback on established reputation, create consumer confusion, or damage brand value through defamatory commercials.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: SECTION 29(8) STATUTORY BAR */}
                                    <section id="section-29-8-statute" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 29(8): Statutory Disparagement
                                        </h2>
                                        <p className="mb-6">Section 29(8) of the Trade Marks Act, 1999 explicitly defines when advertising constitutes statutory trademark infringement:</p>

                                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 my-6 not-prose">
                                            <div className="border-l-4 border-red-500 pl-4">
                                                <p className="text-sm font-semibold text-gray-900 italic mb-2">&ldquo;Section 29(8) — A registered trade mark is infringed by any advertising of that trade mark if such advertising—</p>
                                                <ul className="text-xs text-gray-800 space-y-1.5 list-disc list-inside italic mb-2">
                                                    <li>(a) takes unfair advantage of and is contrary to honest practices in industrial or commercial matters; or</li>
                                                    <li>(b) is detrimental to its distinctive character; or</li>
                                                    <li>(c) is against the reputation of the trade mark.&rdquo;</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p className="mb-6">If an advertisement satisfies any of these three prongs, the plaintiff does not need to prove actual confusion among consumers. The statutory violation of Section 29(8) itself establishes actionable infringement and entitles the trademark owner to immediate interim relief.</p>
                                    </section>

                                    {/* SECTION 4: SECTION 30(1) SAFE HARBOR */}
                                    <section id="section-30-1-exception" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 30(1): Honest Practice Safe Harbor
                                        </h2>
                                        <p className="mb-6">To prevent trademark rights from creating anticompetitive monopolies that silence fair market comparisons,<strong>Section 30(1) of the Trade Marks Act, 1999</strong>carves out a statutory safe harbor for legitimate comparative advertising:</p>

                                        <div className="bg-emerald-50/70 border-l-4 border-emerald-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-2">Section 30(1) Statutory Exception</h3>
                                            <p className="text-sm text-emerald-950 leading-relaxed m-0"><em>&ldquo;Nothing in Section 29 shall be construed as preventing the use of a registered trade mark by any person for the purposes of identifying goods or services as those of the proprietor, provided the use is under honest practices in industrial or commercial matters, and is not such as to take unfair advantage of or be detrimental to the distinctive character or repute of the trade mark.&rdquo;</em></p>
                                        </div>

                                        <p className="mb-6">Under Section 30(1), naming a rival brand (e.g., &ldquo;Brand X costs ₹500 while our product delivers the same active ingredient for ₹250&rdquo;) does not infringe the rival&apos;s trademark as long as the comparison is strictly factual, substantiated, and free of pejorative or ridiculing undertones.</p>
                                    </section>

                                    {/* SECTION 5: PUFFERY VS PRODUCT DENIGRATION */}
                                    <section id="puffery-vs-denigration" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Puffery vs Product Denigration Rules
                                        </h2>
                                        <p className="mb-6">Indian courts draw a sharp distinction between permissible marketing puffery and unlawful product disparagement:</p>

                                        <div className="overflow-x-auto my-8">
                                            <table className="min-w-full text-left border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                <thead className="bg-[#FAF9F6] border-b border-gray-200">
                                                    <tr>
                                                        <th className="py-3 px-4 text-xs font-bold text-gray-900 uppercase">Legal Characteristic</th>
                                                        <th className="py-3 px-4 text-xs font-bold text-emerald-700 uppercase">Permissible Trade Puffery</th>
                                                        <th className="py-3 px-4 text-xs font-bold text-red-700 uppercase">Illegal Product Disparagement</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Legal Definition</td>
                                                        <td className="py-3 px-4">Subjective hyperbole boasting one&apos;s own product is the best or superior</td>
                                                        <td className="py-3 px-4">Statements or visual depictions asserting the competitor&apos;s product is bad, useless, or harmful</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Target of Message</td>
                                                        <td className="py-3 px-4">Focused entirely on promoting the advertiser&apos;s own features and benefits</td>
                                                        <td className="py-3 px-4">Focused on denigrating, mocking, or rubbishing the competitor&apos;s goods</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Judicial Permissibility</td>
                                                        <td className="py-3 px-4"><span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-xs">Fully Lawful</span></td>
                                                        <td className="py-3 px-4"><span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded text-xs">Strictly Illegal</span></td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Consumer Perception Test</td>
                                                        <td className="py-3 px-4">Reasonable buyers recognize subjective sales talk as commercial exaggeration</td>
                                                        <td className="py-3 px-4">Consumers believe competitor&apos;s product poses health, safety, or quality defects</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Classic Industry Example</td>
                                                        <td className="py-3 px-4">&ldquo;Our soap gives the freshest morning glow in India&rdquo;</td>
                                                        <td className="py-3 px-4">&ldquo;Ordinary red antiseptic soap leaves behind toxic bacteria and burns skin&rdquo;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 6: GENERIC DISPARAGEMENT DOCTRINE */}
                                    <section id="generic-disparagement" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faEye} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Generic Disparagement Doctrine
                                        </h2>
                                        <p className="mb-6">Advertisers often attempt to evade trademark infringement lawsuits by blurring out the competitor&apos;s registered logo or labeling the rival product simply as &ldquo;Ordinary Product X&rdquo. Or &ldquo;Leading Market Brand&rdquo;.</p>
                                        <p className="mb-6">Under the<strong>Doctrine of Generic Disparagement</strong>, established in landmark rulings including<em>Dabur India Ltd. V. Colgate Palmolive (India) Ltd.</em>and<em>Reckitt Benckiser v. HUL</em>, Indian courts hold that:</p>

                                        <div className="space-y-4 not-prose">
                                            <div className="p-4 bg-purple-50/50 rounded-xl border border-purple-100">
                                                <h3 className="text-sm font-bold text-gray-900 mb-1">1. Attack on Entire Product Genre is Actionable</h3>
                                                <p className="text-xs text-gray-600 m-0">An advertiser cannot trash an entire class or genre of goods (e.g., claiming all Ayurvedic toothpowders cause dental abrasion) when the market leader accounts for the vast majority of that market share.</p>
                                            </div>

                                            <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                                                <h3 className="text-sm font-bold text-gray-900 mb-1">2. Distinctive Trade Dress Mimicry Constitutes Disparagement</h3>
                                                <p className="text-xs text-gray-600 m-0">If the commercial depicts an unnamed product whose packaging shape, distinctive bottle silhouette, cap contour, or color combination is identical to the market leader, viewers instantly identify the rival, making the denigration actionable.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: LANDMARK CASE LAWS */}
                                    <section id="landmark-judgments" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Delhi High Court Judgments
                                        </h2>
                                        <p className="mb-6">The Delhi High Court is the premier intellectual property forum shaping comparative advertising jurisprudence in India:</p>

                                        <div className="space-y-6 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">Pepsi Co. Inc. v. Hindustan Coca Cola Ltd. (2003 (27) PTC 305 Del DB)</h3>
                                                    <span className="text-xs bg-purple-100 text-[#6E5E93] font-bold px-2.5 py-1 rounded-full">3-Factor Test</span>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3"><strong>The Dispute:</strong>Coca-Cola ran a commercial mocking Pepsi&apos;s tagline &ldquo;Yeh Dil Maange More&rdquo. By depicting a boy calling Pepsi a drink meant for children while choosing Thums Up as a &ldquo;grown-up&rdquo. Drink.</p>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-0"><strong>The Ruling:</strong>The Division Bench granted an injunction. This establishes the definitive 3-Factor Test for disparagement: (1)<strong>Manner</strong>of the commercial (is it ridiculing?), (2)<strong>Intent</strong>of the commercial, and (3)<strong>Storyline</strong>and overall impact on average viewers.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">Havells India Ltd. v. Amritanshu Khaitan (2015 SCC OnLine Del 8115)</h3>
                                                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full">Truthful Comparison</span>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3"><strong>The Dispute:</strong>Havells challenged an advertisement by Eveready comparing LED bulb brightness (lumens) and pricing.</p>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-0"><strong>The Ruling:</strong>The Delhi High Court held that advertisers are entitled to highlight specific factual advantages, provided the claims are truthful, verifiable, and do not falsely misrepresent the competitor&apos;s product as defective.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">Reckitt Benckiser v. Hindustan Unilever Ltd. (Dettol vs Lifebuoy/Domex Wars)</h3>
                                                    <span className="text-xs bg-red-100 text-red-800 font-bold px-2.5 py-1 rounded-full">FMCG Injunctions</span>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3"><strong>The Dispute:</strong>Multiple battles regarding soap bars, dishwashing liquids, and toilet cleaners depicting competitors&apos; distinctive amber antiseptic bottles or iconic red soap shapes.</p>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-0"><strong>The Ruling:</strong>The High Court repeatedly restrained commercials that visually denigrated competitors by portraying their products as ineffective or hazardous, reiterating that while a trader can claim superiority, they cannot defame rival formulations.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: ASCI & CCPA GUIDELINES */}
                                    <section id="asci-ccpa-guidelines" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            ASCI Code &amp; CCPA 2022 Regulatory Guidelines
                                        </h2>
                                        <p className="mb-6">In addition to judicial litigation under the Trade Marks Act, advertisers must comply with strict self-regulatory and statutory guidelines:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">ASCI Code Chapter IV (Comparative Advertising)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Advertising Standards Council of India (ASCI) mandates that comparative advertisements must: (1) compare products meeting identical consumer needs, (2) compare relevant, verifiable, and representative features, (3) not create consumer confusion between the advertiser and competitors, and (4) not discredit, ridicule, or denigrate other products, trademarks, or trade names.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">CCPA Guidelines for Misleading Advertisements, 2022</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Issued under the<strong>Consumer Protection Act, 2019</strong>, the Central Consumer Protection Authority (CCPA) penalizes comparative advertisements that mislead consumers regarding performance, warranty, or test certifications. Disclaimers must be clearly legible, presented in the same font size and language as the primary claim, and must not contradict the main advertisement message.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: INJUNCTIONS & CIVIL REMEDIES */}
                                    <section id="civil-remedies-injunctions" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Injunctions &amp; Legal Remedies for Disparagement
                                        </h2>
                                        <p className="mb-6">When a competitor launches a disparaging ad campaign, aggrieved brand owners have immediate civil and commercial remedies:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    Ex-Parte Ad-Interim Injunctions
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Under Order 39 Rules 1 &amp. 2 CPC read with the Commercial Courts Act 2015, courts grant emergency injunctions restraining TV broadcast, OTT streaming, and digital distribution within 24 to 48 hours of filing.</p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    Mandatory Digital Takedown Orders
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Directing social media platforms (YouTube, Meta, X, Instagram) and intermediary ad servers to immediately take down the offending video or banner assets.</p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    Compensatory &amp; Punitive Damages
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Awarding actual commercial losses, loss of goodwill, and exemplary punitive damages under Section 135 of the Trade Marks Act against repeat offenders.</p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    ASCI Fast-Track Complaint Panel
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Filing an expedited industry complaint with ASCI for swift ad modification or suspension within 5 working days.</p>
                                            </div>
                                        </div>

                                        <p className="mb-6">Learn how to draft formal notices and court pleadings in our guide on<Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to send trademark legal notices</Link>and<Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">how to respond to trademark infringement notices</Link>.</p>
                                    </section>

                                    {/* SECTION 10: COMPARATIVE RISK MATRIX */}
                                    <section id="comparative-risk-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Comparative Advertising Risk Matrix
                                        </h2>
                                        <p className="mb-6">Evaluate proposed advertising storylines against Indian judicial risk benchmarks:</p>

                                        <div className="overflow-x-auto my-8">
                                            <table className="min-w-full text-left border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                <thead className="bg-[#FAF9F6] border-b border-gray-200">
                                                    <tr>
                                                        <th className="py-3 px-4 text-xs font-bold text-gray-900 uppercase">Advertising Scenario</th>
                                                        <th className="py-3 px-4 text-xs font-bold text-[#6E5E93] uppercase">Legal Risk Level</th>
                                                        <th className="py-3 px-4 text-xs font-bold text-gray-900 uppercase">Judicial Assessment &amp; Outcome</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">&ldquo;Our protein bar contains 25g protein vs Competitor&apos;s 10g (Lab Certified)&rdquo;</td>
                                                        <td className="py-3 px-4"><span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-xs">Low (Permissible)</span></td>
                                                        <td className="py-3 px-4">Lawful under Section 30(1) &amp; Havells ruling. Truthful, factual metric comparison supported by laboratory data.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">&ldquo;Why buy Brand X when our product costs 50% less?&rdquo;</td>
                                                        <td className="py-3 px-4"><span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-xs">Low (Permissible)</span></td>
                                                        <td className="py-3 px-4">Price comparisons are protected commercial speech under Tata Press if actual MRPs are accurately cited.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">&ldquo;Competitor&apos;s cream contains harsh chemicals that damage child skin&rdquo;</td>
                                                        <td className="py-3 px-4"><span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded text-xs">Critical (Instant Injunction)</span></td>
                                                        <td className="py-3 px-4">Blatant Section 29(8) disparagement. Claims rival product is toxic or defective trigger immediate High Court stay orders.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Showing competitor&apos;s distinctive container being thrown into trash can</td>
                                                        <td className="py-3 px-4"><span className="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded text-xs">High (Disparagement)</span></td>
                                                        <td className="py-3 px-4">Violates Pepsi Co Manner and Storyline test. Derogatory or mocking visual treatment constitutes trade libel.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 11: 7-STEP PRE-CLEARANCE CHECKLIST */}
                                    <section id="pre-clearance-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Brand Pre-Clearance Checklist
                                        </h2>
                                        <p className="mb-6">Brand marketing teams and creative agencies should execute this legal clearance protocol before broadcasting comparative ads:</p>

                                        <div className="space-y-6 not-prose">
                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Audit Against Pepsi Co 3-Factor Test</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Critique the manner, intent, and overall storyline. Ensure the script focuses on your strengths rather than ridiculing the competitor.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Commission NABL Laboratory Testing</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Secure independent, accredited scientific lab certificates verifying all nutritional, chemical, or performance claims before ad release.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Verify Parameter Equivalence</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Compare like-with-like parameters (e.g., standard serving sizes, identical wattages, or equivalent package weights).</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Eliminate Pejorative Imagery &amp; Mockery</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Remove visual tropes depicting competitor products as dirty, decaying, useless, or being dumped into garbage bins.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Ensure CCPA 2022 Disclaimer Compliance</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Format on-screen supers and footnotes in clear font, adequate screen duration, and high contrast as required by the CCPA.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">6</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Review ASCI Chapter IV Rules</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Align creative treatments with self-regulatory advertising industry codes to avoid negative public rulings and complaints.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">7</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Secure IP Litigation Counsel Clearance</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">Obtain a written risk assessment and formal clearance opinion from IP litigators before committing multimillion-rupee media spends.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 12: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-10 m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 13: STRATEGIC LEGAL ADVISORY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingShield} className="w-8 h-8 mr-3 text-[#6E5E93]" />
                                            Strategic Advisory for Brand Marketing Teams
                                        </h2>
                                        <p className="mb-6">Comparative advertising can rapidly expand market share when executed with factual accuracy and scientific rigor. However, crossing the line into trademark disparagement risks crippling commercial injunctions, costly media write-offs, and severe reputational fallout in High Court litigation.</p>
                                        <p className="mb-6">Partner with intellectual property litigators at IPR Karo to conduct pre-broadcast ad audits, vet comparative scripts, defend against aggressive competitor lawsuits, and secure commercial injunctions against disparaging competitor campaigns. Review our guides on<Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement</Link>,<Link href="/penalty-for-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark penalties in India</Link>, and<Link href="/how-to-stop-trademark-infringement" className="text-[rgb(110,94,147)] hover:underline font-medium">how to stop trademark infringement</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Strategic Ad Clearance &amp; Brand Protection
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand from Disparagement &amp; Injunctions
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy veteran IP litigators to pre-clear comparative advertising campaigns, obtain emergency High Court injunctions, and safeguard market reputation.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult IP Litigator</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered IP Advocates • High Court Injunctions • ASCI Fast-Track Defense • Pan-India Commercial Litigation</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in commercial advertising clearance, trademark disparagement litigation, ASCI regulatory defense, and High Court injunctions across India.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Competitor Disparaging You?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Facing an aggressive attack ad targeting your product or trade dress? Obtain swift High Court injunctions.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Stop Disparaging Ad
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/competitor-bidding-on-my-trademark-google-ads-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Google Ads TM Bidding</span></Link></li>
                                    <li><Link href="/trade-dress-protection-under-indian-trademark-law" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trade Dress Guide</span></Link></li>
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span></Link></li>
                                    <li><Link href="/penalty-for-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Penalties India</span></Link></li>
                                    <li><Link href="/how-to-send-trademark-legal-notice-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Send Legal Notice</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Notice Reply</span></Link></li>
                                    <li><Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span></Link></li>
                                    <li><Link href="/deceptive-similarity-trademark-test-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faEye} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Deceptive Similarity</span></Link></li>
                                    <li><Link href="/how-to-get-well-known-trademark-status-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Well-Known TM Status</span></Link></li>
                                    <li><Link href="/civil-vs-criminal-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Civil vs Criminal TM</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
