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
    faMagnifyingGlass,
    faLightbulb,
    faShieldHalved,
    faCheck,
    faInfoCircle,
    faPhone
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Why Search a Trademark Before Registration in India? | IPR Karo",
    description: validateAndNormalizeDescription("Learn why searching a trademark before registration helps identify similar marks, avoid Section 11 conflicts, prevent objections, and make informed filing decisions in India.", "app/why-search-trademark-before-registration/page.tsx"),
    keywords: [
        "why search trademark before registration",
        "trademark search before registration",
        "trademark clearance search India",
        "trademark search India",
        "trademark similarity check",
        "trademark objection Section 11",
        "avoid trademark conflict",
        "trademark availability check",
        "trademark public search India"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/why-search-trademark-before-registration",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Why Search a Trademark Before Registration in India? | IPR Karo",
        description: "Learn why searching a trademark before registration helps identify similar marks, avoid Section 11 conflicts, prevent objections, and make informed filing decisions in India.",
        url: "https://www.iprkaro.com/why-search-trademark-before-registration",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/why-search-trademark-before-registration.png",
                width: 1200,
                height: 630,
                alt: "Why Search a Trademark Before Registration",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Why Search a Trademark Before Registration in India? | IPR Karo",
        description: "Learn why searching a trademark before registration helps identify similar marks, avoid Section 11 conflicts, prevent objections, and make informed filing decisions in India.",
        images: ["https://www.iprkaro.com/images/og/why-search-trademark-before-registration.jpg"],
    }
};

const faqs = [
    { question: "Why should I search a trademark before registration?", answer: "A trademark search helps identify existing identical or similar marks before filing. This prevents you from wasting time and money on a trademark that is likely to be rejected or challenged." },
    { question: "What happens if I register a trademark without searching first?", answer: "Skipping a search increases the risk of trademark objections, oppositions from prior owners, and potential infringement lawsuits. You may be forced to rebrand and lose your initial investment." },
    { question: "Can I search for similar trademarks before filing?", answer: "Yes, you can search for exact matches and similar trademarks using the official IP India registry or preliminary online tools. It is highly recommended to check phonetic and visual similarities as well." },
    { question: "Does a trademark search guarantee registration?", answer: "No, a search does not guarantee registration. The final decision rests with the Trade Marks Registry examiner, who evaluates distinctiveness and likelihood of confusion based on legal principles." },
    { question: "What should I check during a trademark search?", answer: "You should check for exact spelling matches, phonetic equivalents, visual similarities, and related trademark classes. Additionally, verify the current legal status of any similar marks." },
    { question: "Why do phonetic similarities matter in trademark searches?", answer: "Phonetic similarities matter because marks that sound alike can confuse consumers, even if spelled differently. Section 11 of the Trade Marks Act considers phonetic equivalence as a relative ground for refusal." },
    { question: "Should I check trademark classes before searching?", answer: "Yes, trademark protection is categorized into 45 distinct classes. Identifying the correct classes for your goods or services is essential to focus your search on relevant commercial areas." },
    { question: "When should I get professional trademark clearance?", answer: "Professional clearance is recommended for valuable brands, borderline similarity cases, or when entering crowded markets. Legal experts can provide a nuanced risk assessment and strategy to overcome potential conflicts." }
];

const tocSections = [
    { id: "why-search-matters", title: "Why Search Matters" },
    { id: "risks-of-skipping", title: "Risks of Skipping Search" },
    { id: "what-search-reveals", title: "What It Reveals" },
    { id: "trademark-similarity", title: "Trademark Similarity" },
    { id: "how-to-search", title: "Step-by-Step Search" },
    { id: "official-search", title: "Official vs Preliminary" },
    { id: "professional-search", title: "Professional Search" },
    { id: "search-checklist", title: "Search Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Final Takeaway" },
];

export default function WhySearchTrademarkBeforeRegistrationPage() {
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
        "headline": "Why Search a Trademark Before Registration?",
        "description": "Learn why searching a trademark before registration helps identify similar marks, reduce conflict risks and make better filing decisions in India.",
        "image": "https://www.iprkaro.com/images/og/why-search-trademark-before-registration.png",
        "datePublished": "2024-03-24T08:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": {
            "@type": "Person",
            "name": "Rahul Roy",
            "url": "https://www.iprkaro.com/author/rahul-roy",
            "image": "https://www.iprkaro.com/images/author/rahul-roy.jpg"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/why-search-trademark-before-registration"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Why Search a Trademark Before Registration? | IPR Karo",
        "url": "https://www.iprkaro.com/why-search-trademark-before-registration",
        "description": "Learn why searching a trademark before registration helps identify similar marks, reduce conflict risks and make better filing decisions in India.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/why-search-trademark-before-registration#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/why-search-trademark-before-registration#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Trademark", "item": "https://www.iprkaro.com/trademark-registration-india" },
            { "@type": "ListItem", "position": 3, "name": "Why Search a Trademark Before Registration?", "item": "https://www.iprkaro.com/why-search-trademark-before-registration" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Trademark Search Step-by-Step Workflow",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Identify the proposed trademark." },
            { "@type": "ListItem", "position": 2, "name": "Identify the relevant goods/services." },
            { "@type": "ListItem", "position": 3, "name": "Determine relevant trademark classes." },
            { "@type": "ListItem", "position": 4, "name": "Search the exact name." },
            { "@type": "ListItem", "position": 5, "name": "Search spelling variations." },
            { "@type": "ListItem", "position": 6, "name": "Search phonetic variations." },
            { "@type": "ListItem", "position": 7, "name": "Review similar marks." },
            { "@type": "ListItem", "position": 8, "name": "Check application/registration status." },
            { "@type": "ListItem", "position": 9, "name": "Examine the goods/services of potentially conflicting marks." },
            { "@type": "ListItem", "position": 10, "name": "Assess whether professional clearance is appropriate." },
            { "@type": "ListItem", "position": 11, "name": "Proceed toward filing only after the search results have been properly evaluated." }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />

            {/* HERO */}
            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faShieldHalved} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Pre-Filing Trademark Clearance Guide</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Why Search a <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Before Registration</span> in India:<br />
                                Prevent Conflicts, Objections & Brand Risk
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Discover why conducting a comprehensive trademark search before filing is the single most vital step in securing your brand identity in India. Evaluating Trade Marks Registry records early helps you identify identical marks, phonetic resemblances, and deceptive similarities under Section 11 of the Trade Marks Act, 1999. Eliminate the risk of costly examination objections, trademark journal oppositions, or forced rebranding after launch. Protect your marketing investments and establish uncontested ownership with proactive clearance and strategic pre-filing intelligence.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 24-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 10 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Pre-Filing Clearance</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/trademark-search" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Start Trademark Search <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/why-search-trademark-before-registration.png"
                                    alt="Why search a trademark before registration in India"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BREADCRUMBS */}
            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[
                        { label: "Home", href: "/" },
                        { label: "Trademark", href: "/trademark-registration-india" },
                        { label: "Why Search a Trademark Before Registration?", href: "/why-search-trademark-before-registration" }
                    ]} />
                </div>
            </div>

            {/* MAIN LAYOUT */}
            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">

                        {/* LEFT SIDEBAR (DESKTOP TOC) */}
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <main className="min-w-0">
                            {/* MOBILE TOC */}
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content">
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    {/* Author Row */}
                                    <div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose">
                                        <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 m-0">Written by <Link href="/author/rahul-roy" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1 */}
                                    <section id="why-search-matters" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Why Trademark Search Matters
                                        </h2>

                                        {/* QUICK ANSWER BOX */}
                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Why should you search a trademark before registering it? A trademark search helps identify identical existing marks, similar names, and potentially conflicting applications in your relevant goods and services. It helps uncover possible registration obstacles and opposition risks before you invest in filing. However, a preliminary search does not guarantee registration or eliminate all legal risks.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Undertaking a trademark search before registration is an essential preliminary step for any business. Before investing in branding, marketing materials, and legal fees, it is critical to know whether the name you have chosen is available. Checking for existing identical or similar marks helps avoid obvious conflicts from day one.
                                        </p>
                                        <p className="mb-6">
                                            A thorough search reduces wasted filing effort. It helps brand owners identify alternative names early if the original choice is legally unavailable. Understanding the competitive trademark landscape can significantly improve your filing strategy, allowing you to choose distinct elements that are more likely to pass official examination.
                                        </p>
                                    </section>

                                    {/* SECTION 2 */}
                                    <section id="risks-of-skipping" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What Happens If You Skip the Search?
                                        </h2>
                                        <p className="mb-6">
                                            Skipping a trademark search before registration can have serious practical consequences. You may discover an existing similar mark only after making significant branding investments. This oversight can lead to unexpected <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark objections</Link> from the Trade Marks Registry examiner during the review phase.
                                        </p>
                                        <p className="mb-6">
                                            Beyond examination, failing to search can invite potential opposition from prior trademark owners. Depending on the facts, you could face disputes that require costly legal defense or forced rebranding. Rebranding costs and marketing disruptions are often far more expensive than conducting a preliminary check. While skipping a search does not automatically cause refusal, it introduces unnecessary risk, wasted time, and uncertainty around brand expansion.
                                        </p>
                                    </section>

                                    {/* SECTION 3 */}
                                    <section id="what-search-reveals" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What a Trademark Search Can Reveal
                                        </h2>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Exact Matches</h3>
                                        <p className="mb-6">
                                            Identical marks are an obvious first screening point. A search immediately flags if the exact spelling of your brand is already registered or pending.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Similar Names</h3>
                                        <p className="mb-6">
                                            Similarity goes beyond exact spelling. A search will reveal variations, common misspellings, or words that look visually akin to your proposed mark.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Phonetic Similarity</h3>
                                        <p className="mb-6">
                                            Marks can sound similar even when spelled differently (e.g., "Kwik" vs "Quick"). Identifying these phonetic similarities is critical, as they can cause confusion among consumers.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Similar Goods and Services</h3>
                                        <p className="mb-6">
                                            The relevant goods or services matter deeply when assessing possible conflicts. A mark identical to yours might exist, but if it belongs to an entirely unrelated industry, it may not pose an issue. A proper search evaluates these overlapping <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark classes</Link>.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Existing Applications and Registrations</h3>
                                        <p className="mb-6">
                                            A search will reveal the legal status of similar marks. An "Abandoned" or "Refused" application may present less risk than an active "Registered" or "Objected" status.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Potentially Conflicting Marks</h3>
                                        <p className="mb-6">
                                            While a search brings potentially conflicting marks to light, a search result alone does not legally determine whether a mark is registrable. A professional review may still be necessary for borderline cases to assess the actual legal risk.
                                        </p>
                                    </section>

                                    {/* SECTION 4 */}
                                    <section id="trademark-similarity" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Why Trademark Similarity Matters
                                        </h2>
                                        <p className="mb-6">
                                            Trademark law is designed to prevent consumer confusion. Confusing similarity evaluates whether a reasonable consumer might mistake your brand for an earlier mark. This assessment encompasses visual similarity (how the marks look), phonetic similarity (how they sound), and sometimes conceptual similarity (the meaning they convey).
                                        </p>
                                        <p className="mb-6">
                                            Under Section 11 of India's Trade Marks Act, 1999, a trademark may be refused registration on relative grounds if it conflicts with earlier trademarks. Registration is not determined simply by matching letters; it depends on the facts, the visual or phonetic closeness of the marks, the similarity of the goods or services involved, and the applicable legal standards. An equation of "similar trademark = automatic rejection" is an oversimplification. Each application is uniquely evaluated by the Controller General of Patents, Designs & Trade Marks (IP India) based on the likelihood of confusion.
                                        </p>
                                    </section>

                                    {/* SECTION 5 */}
                                    <section id="how-to-search" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Search Before Filing: Step-by-Step
                                        </h2>
                                        <p className="mb-6">
                                            Following a structured process helps ensure you don't miss critical conflicts.
                                        </p>

                                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
                                            <h3 className="text-xl font-bold mb-4 border-b pb-2">Trademark Search Workflow</h3>
                                            <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                                <li><strong>Identify the proposed trademark</strong>: Define your primary mark, slogan, and potential name candidates.</li>
                                                <li><strong>Identify goods and services</strong>: Clarify the exact scope of current and upcoming business offerings.</li>
                                                <li><strong>Determine relevant <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline">trademark classes</Link></strong>: Select matching categories under the Nice classification system.</li>
                                                <li><strong>Search exact name matches</strong>: Detect identical registered marks or pending applications in the target classes.</li>
                                                <li><strong>Search spelling variations</strong>: Test alternative spellings, plurals, prefixes, and compound words.</li>
                                                <li><strong>Search phonetic variations</strong>: Discover sounds-alike marks to prevent Section 11 likelihood of confusion refusals.</li>
                                                <li><strong>Review similar marks and logos</strong>: Compare design elements, typography, and stylized device marks.</li>
                                                <li><strong>Check application/registration status</strong>: Verify whether existing marks are Registered, Objected, Abandoned, or Opposed.</li>
                                                <li><strong>Examine goods/services of conflicting marks</strong>: Gauge cross-class overlap and marketplace co-existence risk.</li>
                                                <li><strong>Assess whether professional clearance is appropriate</strong>: Consult an IP attorney for borderline similarity and risk opinions.</li>
                                                <li><strong>Proceed toward filing with confidence</strong>: File your application backed by sound legal clearance intelligence.</li>
                                            </ol>
                                        </div>
                                    </section>

                                    {/* SECTION 6 */}
                                    <section id="official-search" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Official Registry Search vs Preliminary Search
                                        </h2>
                                        <p className="mb-6">
                                            Preliminary online searching, including automated or AI-assisted screening, is a useful first step to catch obvious conflicts. However, it is distinct from an official trademark registry search on the government portal, which directly accesses the live database of the Trade Marks Registry.
                                        </p>
                                        <p className="mb-6">
                                            No preliminary tool can claim 100% accuracy, guarantee registration, or ensure zero conflict or rejection. These tools are meant for initial risk assessment, whereas professional clearance involves a legal review of registry data.
                                        </p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200 mt-6">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Approach</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Main Purpose</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Speed</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Official Registry Verification</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Legal Risk Analysis</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold">Basic Name Screening</td>
                                                        <td className="px-6 py-4">Rapid preliminary triage and obvious match filtering.</td>
                                                        <td className="px-6 py-4 text-green-600 font-medium">Instant</td>
                                                        <td className="px-6 py-4 text-orange-500">Limited / Cached</td>
                                                        <td className="px-6 py-4 text-red-500">None</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold">Official IP India Search</td>
                                                        <td className="px-6 py-4">Government database verification of live status and records.</td>
                                                        <td className="px-6 py-4 text-orange-500">Moderate</td>
                                                        <td className="px-6 py-4 text-green-600 font-medium">Direct Source of Truth</td>
                                                        <td className="px-6 py-4 text-red-500">Manual Interpretation</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold">Comprehensive Legal Clearance</td>
                                                        <td className="px-6 py-4">Deep relative grounds analysis (Section 11) & opposition risk opinion.</td>
                                                        <td className="px-6 py-4 text-gray-600 font-medium">Thorough Review</td>
                                                        <td className="px-6 py-4 text-green-600 font-medium">Complete & Verified</td>
                                                        <td className="px-6 py-4 text-green-600 font-medium">Actionable Legal Opinion</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 7 */}
                                    <section id="professional-search" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            When a Professional Trademark Search Is Useful
                                        </h2>
                                        <p className="mb-6">
                                            Professional trademark clearance is a factual and practical step that can be highly beneficial under specific circumstances. It goes beyond merely identifying identical names by applying legal interpretation to borderline similarity.
                                        </p>
                                        <p className="mb-6">
                                            A professional review may be useful when preparing for an important business launch or establishing a highly valuable brand. It is also advised when dealing with borderline similarity against prior marks, filing across multiple classes, or expanding into related goods and services where boundaries blur. If there are potential opposition concerns or complex ownership histories attached to similar marks, consulting an expert helps navigate the nuances of trademark law.
                                        </p>
                                    </section>

                                    {/* SECTION 8 */}
                                    <section id="search-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Search Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Proposed Mark Finalized:</strong> Exact wordmark, logo styling, and candidate variations documented.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Goods & Services Scope Mapped:</strong> Clear identification of present and prospective product offerings.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Trademark Classes Identified:</strong> Appropriate classes chosen from the Nice classification system (Classes 1–45).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Exact-Name Screening Performed:</strong> Checked for identical marks across registered and pending files.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Phonetic Similarity Analyzed:</strong> Identified sounds-alike marks to prevent Section 11 confusion claims.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Visual & Logo Comparison Done:</strong> Evaluated design elements, shapes, and device marks.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Registry Legal Status Verified:</strong> Reviewed whether similar marks are Live, Objected, Opposed, or Abandoned.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Commercial Overlap Assessed:</strong> Evaluated related goods/services and potential cross-class conflicts.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Professional Clearance Obtained:</strong> Legal opinion consulted for borderline conflicts and risk mitigation.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 9 (FAQS) */}
                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
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

                                    {/* SECTION 10 */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Final Takeaway
                                        </h2>
                                        <p className="mb-6">
                                            A trademark search before registration is an essential preliminary risk-checking step for every ambitious brand. It helps identify existing identical or similar marks and allows businesses to investigate potential conflicts before committing heavily to branding and marketing campaigns.
                                        </p>
                                        <p className="mb-6">
                                            While searching is not a guarantee of registration—as examination involves subjective legal thresholds under the Trade Marks Act—it dramatically minimizes the likelihood of objections, oppositions, or sudden rebranding demands. To consult official records, always refer to authoritative sources like the <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India Portal</a>. Protecting your intellectual property requires a proactive approach, pairing thorough preliminary search with specialized legal clearance.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                {/* Small Eyebrow */}
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Pre-Filing Trademark Clearance
                                                    </span>
                                                </div>

                                                {/* Heading */}
                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Check Trademark Availability Before You File
                                                </h3>

                                                {/* Description */}
                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Identify identical and phonetically similar trademarks, assess conflict risks under Section 11, and secure seamless brand registration in India.
                                                </p>

                                                {/* CTA Buttons */}
                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    {/* Primary CTA */}
                                                    <Link
                                                        href="/trademark-search"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Start Free Trademark Search</span>
                                                    </Link>

                                                    {/* Phone CTA */}
                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                {/* Trust / Supporting Text */}
                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    IP India Database Verification • Phonetic & Similarity Analysis • Zero Conflict Guidance
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        {/* RIGHT SIDEBAR */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            {/* About Author */}
                            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-24 h-24 rounded-full mb-4 shadow-md object-cover" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h3>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Trademark Research Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in preliminary trademark clearance, brand protection strategy, and IP portfolio management. He helps businesses identify potential trademark conflicts early in the brand creation process.</p>
                            </div>

                            {/* Card 1 */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Check Your Trademark</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Use our intelligent tools to analyze potential brand conflicts before filing your application.</p>
                                <Link href="/trademark-search" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        Start Trademark Search
                                    </button>
                                </Link>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-registration-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Registration Services</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faListUl} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Class Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">AI Trademark Search</span>
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
