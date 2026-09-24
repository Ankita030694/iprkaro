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
    faPhone,
    faGlobe,
    faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "How to Search for Existing Trademark | IPR Karo",
    description: validateAndNormalizeDescription(
        "Learn how to search for existing trademark in India. Step-by-step public search guide covering wordmark, phonetic similarity, and Vienna code classes.",
        "app/how-to-search-for-existing-trademark/page.tsx"
    ),
    keywords: [
        "how to search for existing trademark",
        "trademark search India",
        "public trademark search",
        "how to check existing trademark",
        "IP India trademark search",
        "wordmark search",
        "phonetic trademark search",
        "Vienna code search",
        "trademark availability check"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-to-search-for-existing-trademark",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "How to Search for Existing Trademark | IPR Karo",
        description: "Learn how to search for existing trademark in India. Step-by-step public search guide covering wordmark, phonetic similarity, and Vienna code classes.",
        url: "https://www.iprkaro.com/how-to-search-for-existing-trademark",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-to-search-for-existing-trademark.png",
                width: 1200,
                height: 630,
                alt: "How to Search for Existing Trademark in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Search for Existing Trademark | IPR Karo",
        description: "Learn how to search for existing trademark in India. Step-by-step public search guide covering wordmark, phonetic similarity, and Vienna code classes.",
        images: ["https://www.iprkaro.com/images/og/how-to-search-for-existing-trademark.jpg"],
    }
};

const faqs = [
    {
        question: "How do I search for an existing trademark in India for free?",
        answer: "You can conduct a free trademark search on the official IP India portal (ipindiaonline.gov.in) under the 'Public Search of Trade Marks' module or through IPR Karo's free AI-powered search tool. Searches can be conducted across Wordmark, Phonetic, and Vienna code categories without any government login or user fees."
    },
    {
        question: "What are the three primary search types on the IP India portal?",
        answer: "The IP India portal offers three query types: Wordmark Search (supporting 'Start With', 'Contains', and 'Match With' text conditions), Phonetic Search (which algorithmically detects homophones and sound-alike spellings), and Vienna Code Search (which catalogues figurative devices, visual symbols, and graphic logos under 29 international categories)."
    },
    {
        question: "What does it mean if my trademark search returns zero results?",
        answer: "Zero results on an exact wordmark query is a positive preliminary indicator, but it does not guarantee legal availability. You must still execute phonetic searches for sound-alike words, check cross-class registrations in related goods or services, review Vienna classifications for logos, and check market registries for common-law prior use."
    },
    {
        question: "Why is a phonetic trademark search essential before filing?",
        answer: "Under Section 11 of the Trade Marks Act, 1999, trademarks that are phonetically identical or deceptively similar to earlier marks will be rejected even if their spelling is distinct (for example, 'Kool' versus 'Cool' or 'Lyt' versus 'Light'). Phonetic algorithms detect acoustic similarities that cause consumer confusion."
    },
    {
        question: "What is a Vienna Code search and when is it required?",
        answer: "A Vienna Code search uses the international classification system of figurative elements (Vienna Agreement) comprising 29 distinct categories. It is mandatory whenever your trademark contains a graphic logo, emblem, geometric shape, or label design to ensure an identical or confusingly similar symbol is not already registered."
    },
    {
        question: "Can I register a trademark if an existing mark is marked Abandoned or Refused?",
        answer: "An abandoned, refused, or removed mark does not hold active statutory rights. However, caution is required: the prior owner might file a restoration petition via Form TM-M, appeal the refusal in court, or continue to hold valid common-law rights through active commercial use in the physical or digital marketplace."
    },
    {
        question: "What is the difference between searching Goods (Classes 1–34) and Services (Classes 35–45)?",
        answer: "Classes 1 through 34 govern tangible manufactured goods (such as clothing, electronics, pharmaceuticals, and packaged foods), while Classes 35 through 45 cover commercial services (such as retail, software consulting, logistics, and healthcare). Comprehensive clearance often requires searching both your primary product class and complementary service classes."
    },
    {
        question: "What should I do if an identical or similar trademark is already registered?",
        answer: "If an active identical mark exists in your class, filing the identical wordmark carries high risk of Section 11 refusal. You should modify the brand name into a coined or arbitrary term, introduce distinctive graphic elements, explore formal coexistence agreements, or consult a trademark attorney to evaluate prior user rights under Section 34."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "why-search", title: "Why Search First" },
    { id: "search-types", title: "3 Core Search Types" },
    { id: "step-by-step", title: "Step-by-Step Search" },
    { id: "comparison-table", title: "Search Methods Table" },
    { id: "common-pitfalls", title: "Common Mistakes" },
    { id: "checklist", title: "Clearance Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function HowToSearchForExistingTrademarkPage() {
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
        "headline": "How to Search for Existing Trademark in India",
        "description": "Learn how to search for existing trademark in India. Step-by-step public search guide covering wordmark, phonetic similarity, and Vienna code classes.",
        "image": "https://www.iprkaro.com/images/og/how-to-search-for-existing-trademark.png",
        "datePublished": "2024-03-24T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/how-to-search-for-existing-trademark"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How to Search for Existing Trademark in India",
        "url": "https://www.iprkaro.com/how-to-search-for-existing-trademark",
        "description": "Learn how to search for existing trademark in India. Step-by-step public search guide covering wordmark, phonetic similarity, and Vienna code classes.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-to-search-for-existing-trademark#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-to-search-for-existing-trademark#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "How to Search for Existing Trademark", "item": "https://www.iprkaro.com/how-to-search-for-existing-trademark" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps to Search for an Existing Trademark in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Identify Mark Structure and Commercial Classifications" },
            { "@type": "ListItem", "position": 2, "name": "Access the Official IP India Public Search Gateway" },
            { "@type": "ListItem", "position": 3, "name": "Execute Wordmark Queries with Start With and Contains Filters" },
            { "@type": "ListItem", "position": 4, "name": "Perform Phonetic Similarity and Soundex Searches" },
            { "@type": "ListItem", "position": 5, "name": "Conduct Vienna Code Search for Device and Logo Marks" },
            { "@type": "ListItem", "position": 6, "name": "Scrutinize Application Statuses and Objection Histories" },
            { "@type": "ListItem", "position": 7, "name": "Cross-Check Common Law Registries and Digital Marketplaces" }
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
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Indian IP Search Guide</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How to Search for <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Existing Trademark</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Conducting an exhaustive trademark search is the single most critical pre-filing safeguard under the Trade Marks Act, 1999. A systematic clearance search prevents devastating objections under Section 9 and Section 11, shields your enterprise from expensive third-party oppositions, and ensures your brand name, logo, and slogan enjoy undisputed commercial exclusivity. Learn how to interrogate the official IP India registry using wordmark, phonetic, and Vienna classification filters to protect your intellectual assets.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 12 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Legal Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/trademark-search" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Search Trademark Now <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/how-to-search-for-existing-trademark.png"
                                    alt="How to Search for Existing Trademark in India"
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
                        { label: "How to Search for Existing Trademark", href: "/how-to-search-for-existing-trademark" }
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
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
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
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trademark Search
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                To search for an existing trademark in India, access the official IP India public portal (ipindiaonline.gov.in) and navigate to the Trade Marks Public Search section. Select your search type (Wordmark, Phonetic, or Vienna Code), enter the relevant Nice classification (Classes 1–45), and execute queries using &lsquo;Start With&rsquo; and &lsquo;Contains&rsquo; filters. A thorough search must examine registered marks, pending applications, phonetic equivalents, and common-law business directories before filing Form TM-A.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            A trademark clearance search is the foundation of any enduring brand strategy. Under the Trade Marks Act, 1999, trademark registration in India is not merely an administrative rubber stamp; it is a rigorous statutory process where the Trade Marks Registry actively examines every application against hundreds of thousands of prior marks. If an identical or confusingly similar mark already occupies the register for related goods or services, your application will face refusal under Section 11 of the Act.
                                        </p>
                                        <p className="mb-6">
                                            The Indian Trade Marks Registry, under the Controller General of Patents, Designs and Trade Marks (CGPDTM), maintains an exhaustive public database accessible free of charge. However, many business owners perform only a cursory search for exact spelling matches, mistakenly believing that a zero-result page guarantees safe passage. In reality, trademark conflicts frequently hinge upon phonetic similarities, conceptual likenesses, visual logo resemblances, and cross-class consumer confusion.
                                        </p>
                                        <p className="mb-6">
                                            To execute a truly comprehensive search, brand owners must master both the official government search interface and modern AI-driven search engines, such as our <Link href="/free-ai-powered-trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">free AI powered trademark search</Link>. This multi-layered approach unearths homophones, subtle misspellings, translated terms, and conflicting graphic elements long before substantial investments are committed to product packaging, marketing campaigns, and legal filing fees.
                                        </p>
                                    </section>

                                    {/* SECTION 2: WHY SEARCH FIRST */}
                                    <section id="why-search" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Why Search Before Filing?
                                        </h2>
                                        <p className="mb-6">
                                            Filing a trademark application without a prior clearance search is among the costliest mistakes an entrepreneur can make. Understanding the legal, financial, and strategic imperatives highlights why clearance searching is non-negotiable. Discover more insights on <Link href="/why-search-trademark-before-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">why to search trademark before registration</Link>.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Section 11 Rejection Prevention
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Section 11 of the Trade Marks Act prohibits registration of marks identical or deceptively similar to earlier registered marks or pending applications for similar goods and services. A prior search flags these citations before official examination.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Avoiding Cease &amp; Desist Lawsuits
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Adopting a name without clearance exposes your firm to passing-off suits under common law and statutory infringement claims under Section 29, risking court injunctions, product recalls, and punitive damages. Learn <Link href="/what-will-happen-if-i-register-trademark-without-researching-it" className="text-[rgb(110,94,147)] hover:underline font-medium">what happens if you register without research</Link>.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Saving Capital &amp; Rebranding Costs
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Official filing fees (₹4,500 to ₹9,000 per class) are strictly non-refundable once Form TM-A is submitted. Forcing a rebrand after printing collateral, establishing websites, and running digital advertisements burns valuable enterprise runway.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Expediting Overall Registration
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Applications that undergo rigorous pre-clearance sail through examination without objections, bypassing the 30-day objection response window and multi-month show-cause hearing backlogs. Review the entire <Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">process and steps of trademark registration</Link>.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: 3 CORE SEARCH TYPES */}
                                    <section id="search-types" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Core Search Types Explained
                                        </h2>
                                        <p className="mb-6">
                                            The Indian Trade Marks Registry database categorizes queries into three distinct modalities. A complete clearance assessment requires interrogating all three modules to evaluate text, acoustics, and graphical elements.
                                        </p>

                                        {/* SEARCH TYPE 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Method 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Scope: Literal Text &amp; Spelling</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Wordmark Search</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                The Wordmark search examines the literal character string of your proposed brand name, slogan, or acronym. The IP India portal provides three operational drop-down modes for wordmark searches:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Start With:</strong> Retrieves all marks whose first letters match your query string. For instance, searching &lsquo;AURA&rsquo; returns &lsquo;AURASOFT&rsquo;, &lsquo;AURACARE&rsquo;, and &lsquo;AURAGEM&rsquo;.</li>
                                                <li><strong>Contains:</strong> Retrieves all marks containing your query substring anywhere within the word. Searching &lsquo;AURA&rsquo; will unearth &lsquo;BIOAURA&rsquo;, &lsquo;GOLDEN AURA&rsquo;, and &lsquo;RESTAURANT&rsquo;. This is critical for uncovering compound names.</li>
                                                <li><strong>Match With:</strong> Strictly matches the exact string. While useful to see if the identical name exists, relying solely on this mode is extremely hazardous because minor character variations are missed.</li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Run wordmark searches across your primary class using our quick <Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search tool</Link>.
                                            </p>
                                        </div>

                                        {/* SEARCH TYPE 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Method 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Scope: Acoustic &amp; Homophone Likeness</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Phonetic Search</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Under Indian trademark jurisprudence, phonetic similarity is treated with the same legal weight as visual likeness. In landmark rulings such as <em>Cadila Health Care v. Cadila Pharmaceuticals</em>, the Supreme Court of India emphasized that acoustic similarity is particularly lethal in creating public confusion.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                The Phonetic search utilizes advanced Soundex and Metaphone algorithms to index words based on how they sound when spoken aloud in English and Indian accents. It flags deceptive phonetic equivalents such as:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li>&lsquo;PH&rsquo; versus &lsquo;F&rsquo; (e.g., &lsquo;PharmEasy&rsquo; vs &lsquo;FarmEasy&rsquo;)</li>
                                                <li>&lsquo;C&rsquo; versus &lsquo;K&rsquo; or &lsquo;Q&rsquo; (e.g., &lsquo;Kool&rsquo; vs &lsquo;Cool&rsquo;, &lsquo;Quick&rsquo; vs &lsquo;Kwik&rsquo;)</li>
                                                <li>&lsquo;X&rsquo; versus &lsquo;Z&rsquo; or &lsquo;EX&rsquo; (e.g., &lsquo;Xpress&rsquo; vs &lsquo;Express&rsquo;)</li>
                                                <li>Silent letters and vowel variations (e.g., &lsquo;Lyt&rsquo; vs &lsquo;Light&rsquo;, &lsquo;Brite&rsquo; vs &lsquo;Bright&rsquo;)</li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Ignoring phonetic clearance invites severe Section 11 examination objections from the Trade Marks Registry.
                                            </p>
                                        </div>

                                        {/* SEARCH TYPE 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Method 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Scope: Figurative &amp; Logo Elements</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Vienna Code Search</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                When applying to register a device mark, logo, emblem, or packaging label, searching by wordmark alone is insufficient. If a competitor has registered a visually identical lion crest or circular geometric badge without text, a wordmark search will never surface it.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                India adheres to the international <strong>Vienna Agreement Establishing an International Classification of the Figurative Elements of Marks</strong>. The Vienna Classification system divides visual components into 29 categories, further subdivided into divisions and sections. Examples include:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Category 01:</strong> Celestial bodies, natural phenomena, geographical maps.</li>
                                                <li><strong>Category 03:</strong> Animals, quadrupeds, birds, felines (e.g., leaping puma, majestic lions).</li>
                                                <li><strong>Category 26:</strong> Geometrical figures, concentric circles, intersecting triangles, polygons.</li>
                                                <li><strong>Category 27:</strong> Forms of writing, stylized monograms, numerals, punctuation marks.</li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                By entering the six-digit Vienna code (e.g., 26.01.01 for circles) alongside your relevant Nice class, you can inspect all graphically conflicting registered logos.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: STEP-BY-STEP SEARCH GUIDE */}
                                    <section id="step-by-step" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLaptopCode} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Search Guide
                                        </h2>
                                        <p className="mb-6">
                                            Follow this comprehensive 7-step procedure to execute an authoritative trademark availability search on the official IP India registry portal.
                                        </p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Pre-Search Setup</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Define the Mark Nature and Exact Commercial Scope</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Clarify exactly what elements you seek to protect. Are you registering a standalone wordmark (the plain name), a stylized logo, a catchy marketing tagline, or a composite mark combining graphic icons and text? Wordmarks provide the broadest protection because they cover the name regardless of color, font, or design changes.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Document all potential variations of your name, including shortened abbreviations, prefix-suffix combinations, and phonetic respellings that competitors might employ.
                                            </p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Classification</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Identify Correct Nice Classes and Cross-Class Conflicts</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Trademarks are filed under 45 Nice classes: Classes 1 to 34 represent tangible goods, while Classes 35 to 45 cover services. Searching only one class is often insufficient. For instance, a software startup must search both <strong>Class 9</strong> (recorded computer software) and <strong>Class 42</strong> (Software as a Service / cloud hosting).
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Similarly, a fashion brand should search <strong>Class 25</strong> (clothing and footwear), <strong>Class 18</strong> (leather bags and accessories), and <strong>Class 35</strong> (retail and e-commerce store services). Use our interactive <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link> to pinpoint every overlapping class.
                                            </p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Portal Navigation</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Access the IP India Public Search Gateway</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Navigate to the official government trademark search portal at <a href="https://ipindiaonline.gov.in/eregister/eregister.aspx" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">ipindiaonline.gov.in</a> and select &lsquo;Public Search of Trade Marks&rsquo;. The search interface does not require user registration, login credentials, or payment.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Ensure your browser supports secure HTTPS connections. Because the portal experiences heavy server traffic, searching during early morning or late evening hours often yields faster response times.
                                            </p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Wordmark Queries</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Execute Wordmark Queries with Filter Modifiers</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Under the &lsquo;Search Type&rsquo; dropdown, select &lsquo;Wordmark&rsquo;. Enter your target class number in the &lsquo;Class&rsquo; input field. In the &lsquo;Wordmark&rsquo; box, conduct consecutive searches using multiple filter conditions:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li>First, run &lsquo;Start With&rsquo; using the core root word.</li>
                                                <li>Second, run &lsquo;Contains&rsquo; using the primary syllable or distinctive element.</li>
                                                <li>Third, search for common truncated stems (e.g., if searching &lsquo;NutriPure&rsquo;, search &lsquo;Nutri&rsquo; and &lsquo;Pure&rsquo; separately).</li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Review the search results table. Click on individual application numbers to inspect the detailed status report, goods description, applicant name, and user date claim.
                                            </p>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Phonetic Screening</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Run Phonetic Similarity and Soundex Analysis</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Switch the &lsquo;Search Type&rsquo; dropdown to &lsquo;Phonetic&rsquo;. Re-enter the class number and your proposed brand name. The system will process the acoustic signature of your term and display all registered or pending marks that sound identical or deceptively similar.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                If your phonetic query returns identical sounding marks in your class—even with completely divergent spellings—trademark examiners will almost certainly raise an objection under Section 11(1).
                                            </p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Figurative Clearance</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Conduct Vienna Classification Logo Search</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                If your mark contains a visual emblem, crest, or character, change the &lsquo;Search Type&rsquo; dropdown to &lsquo;Vienna Code&rsquo;. Enter the six-digit Vienna code corresponding to your visual motif alongside your Nice class number.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                The registry will display thumbnails and application entries for all logos indexed under that graphical classification. Inspect each record to ensure your emblem does not visually mimic an established brand insignia.
                                            </p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Legal Analysis &amp; Status Check</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Scrutinize Application Statuses and Market Registries</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                When potential conflicts appear in the search results, evaluate their official legal status:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Registered:</strong> High barrier. Direct bar to registration under Section 11 unless you can prove prior continuous commercial use under Section 34.</li>
                                                <li><strong>Objected / Hearing:</strong> An earlier applicant is actively contesting an objection. If they overcome it, their prior application date will block your mark.</li>
                                                <li><strong>Advertised / Accepted:</strong> The mark has passed examination and is in the 4-month Trade Marks Journal opposition window.</li>
                                                <li><strong>Abandoned / Refused / Removed:</strong> The mark is inactive, but verify whether a restoration petition or appeal is pending.</li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Finally, perform a common-law search across the Ministry of Corporate Affairs (MCA) company name database, domain registrars (.in, .com), and major e-commerce marketplaces to ensure no unregistered entity commands senior user rights.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 5: SEARCH TYPES COMPARISON TABLE */}
                                    <section id="comparison-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Search Types Comparison
                                        </h2>
                                        <p className="mb-6">
                                            Each search methodology examines brand assets through a distinct analytical lens. Below is a comparative breakdown detailing operational parameters, coverage scope, and strategic limitations.
                                        </p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Search Modality</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Database / Engine</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Primary Parameters</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">What it Detects</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Strategic Limitations</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Wordmark Search</td>
                                                        <td className="px-6 py-4">IP India Portal</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Start With / Contains / Match With</td>
                                                        <td className="px-6 py-4">Identical strings, prefix matches, compound names</td>
                                                        <td className="px-6 py-4">Fails to catch phonetic homophones and visual logo conflicts</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Phonetic Search</td>
                                                        <td className="px-6 py-4">IP India Soundex</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Soundex / Metaphone algorithm</td>
                                                        <td className="px-6 py-4">Acoustic likeness, sound-alike spellings, silent letters</td>
                                                        <td className="px-6 py-4">Limited to English phonetics; misses local dialect nuances</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Vienna Code Search</td>
                                                        <td className="px-6 py-4">Vienna Classification</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">6-digit figurative codes (Cat. 1–29)</td>
                                                        <td className="px-6 py-4">Geometric figures, animal emblems, crests, shapes</td>
                                                        <td className="px-6 py-4">Requires accurate visual classification code mapping</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">AI Deep Search</td>
                                                        <td className="px-6 py-4">IPR Karo AI Engine</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">NLP, fuzzy matching, cross-class analysis</td>
                                                        <td className="px-6 py-4">Semantic synonyms, cross-class overlaps, deceptive similarity</td>
                                                        <td className="px-6 py-4">Must be verified with official legal registry citations</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Common Law Search</td>
                                                        <td className="px-6 py-4">MCA, Web, Social</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Corporate registry, domains, marketplaces</td>
                                                        <td className="px-6 py-4">Unregistered prior users, corporate names, trade goodwill</td>
                                                        <td className="px-6 py-4">Unindexed small businesses may require market investigations</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 6: COMMON PITFALLS */}
                                    <section id="common-pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Common Trademark Search Mistakes
                                        </h2>
                                        <p className="mb-6">
                                            A substantial proportion of trademark rejections stem from common search errors. Avoiding these methodological flaws ensures an accurate risk assessment before filing Form TM-A.
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Exact-Spelling Bias</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Searching only the exact spelling of your brand gives a false sense of security. Section 11 explicitly penalizes deceptive visual, phonetic, and conceptual resemblances. Changing one letter (e.g., &lsquo;Zomato&rsquo; to &lsquo;Xomato&rsquo;) does not overcome trademark infringement.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Overlooking Cross-Class and Related Goods</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Assuming that your brand is completely safe simply because your primary class has no conflicts is dangerous. Under Section 11(2), marks with established reputation can prevent registration in completely distinct classes if consumer association or dilution arises.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Ignoring Pending and Opposed Applications</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Checking only the &lsquo;Registered&rsquo; tab is a critical error. Pending applications enjoy priority based on their original filing date. If a pending application filed six months ago receives approval, it holds legal superiority over your later-filed application.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Disregarding Common-Law Unregistered Trademarks</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    India operates on a &lsquo;first-to-use&rsquo; common-law principle under Section 34 of the Act. An unregistered business that has continuously sold products under a mark since 2015 can successfully file an opposition or passing-off lawsuit against a registered owner who adopted the name in 2024.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Clearance Checklist
                                        </h2>
                                        <p className="mb-6">
                                            Ensure you check every box before submitting your trademark application on the official IP India gateway.
                                        </p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Run Wordmark Exact &amp; Prefix Searches:</strong> Interrogate IP India portal using &lsquo;Start With&rsquo; and &lsquo;Contains&rsquo; filters across target classes.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Execute Soundex Phonetic Screen:</strong> Verify that no acoustic homophones exist in identical or complementary product classes.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Inspect Vienna Code Figurative Elements:</strong> Check graphic logos, geometric crests, and emblems under the 29 Vienna categories.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Audit Overlapping Nice Classes:</strong> Cover primary product classes (1–34) and complementary service classes (35–45).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Review Application Status Histories:</strong> Scrutinize pending applications, marks under examination, and active journal advertisements.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Verify Corporate &amp; Domain Availability:</strong> Search MCA company names, .in/.com domains, and social media handles for prior market use.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Obtain Legal Clearance Opinion:</strong> Review potential Section 9 distinctiveness and Section 11 relative risks with an experienced IP advocate.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 8: FAQS (EXACTLY 8 MATCHING SCHEMA) */}
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

                                    {/* SECTION 9: FINAL STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Clearance Advice
                                        </h2>
                                        <p className="mb-6">
                                            A meticulous trademark search is not an optional clerical exercise—it is the strategic cornerstone of brand valuation and commercial resilience. Conducting multi-class wordmark, phonetic, and Vienna classification searches ensures your brand name stands on unshakeable legal bedrock from day one.
                                        </p>
                                        <p className="mb-6">
                                            If your clearance search uncovers borderline conflicts, do not despair. Early detection allows you to tweak naming syllables, add distinctive graphic badges, or pivot your brand architecture before filing Form TM-A. Partnering with seasoned trademark attorneys ensures that legal risks are interpreted accurately and your path to obtaining the registered &reg; symbol remains unimpeded. If objections do arise, learn <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objections</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Comprehensive Trademark Clearance
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Verify Your Brand Name Before You File
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Conduct deep phonetic, wordmark, and Vienna code searches across all 45 classes with certified trademark attorneys. Protect your brand from costly objections and oppositions.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/trademark-search"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Start Free Trademark Search</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    AI-Powered Intelligence • Senior IP Attorneys • Zero Filing Blindspots
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            {/* About Author */}
                            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-24 h-24 rounded-full mb-4 shadow-md object-cover" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h3>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Trademark Research Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in preliminary trademark clearance, brand availability searches, and phonetic risk analysis. He assists enterprises across India in navigating the IP India database with legal precision.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Clear Your Mark</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Screen your brand against 45 classes, phonetic homophones, and logo classifications before filing.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        E-File Form TM-A
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Public Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">AI Search Tool</span>
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
                                        <Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Filing Process</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Objection Guide</span>
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
