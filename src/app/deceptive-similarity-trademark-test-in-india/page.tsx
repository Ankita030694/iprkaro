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
    faCapsules,
    faEarListen,
    faBalanceScale
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Deceptive Similarity Test in Indian Trademark Law",
    description: validateAndNormalizeDescription(
        "Master deceptive similarity tests in Indian trademark law. Learn phonetic, visual, and conceptual rules, Cadila 7-factor test, and court precedents.",
        "app/deceptive-similarity-trademark-test-in-india/page.tsx"
    ),
    keywords: [
        "how to prove trademark is not deceptively similar",
        "cadila healthcare test for deceptive similarity",
        "phonetic similarity trademark rules ip india",
        "amritdhara pharmacy supreme court test",
        "deceptive similarity trademark test in india",
        "pianotist test indian trademark law",
        "anti dissection rule section 17 trade marks act",
        "doctrine of imperfect recollection trademark india",
        "pharmaceutical trademark deceptive similarity india",
        "relative grounds for refusal section 11 trademark"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/deceptive-similarity-trademark-test-in-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Deceptive Similarity Test in Indian Trademark Law",
        description: "Master deceptive similarity tests in Indian trademark law. Learn phonetic, visual, and conceptual rules, Cadila 7-factor test, and court precedents.",
        url: "https://www.iprkaro.com/deceptive-similarity-trademark-test-in-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/deceptive-similarity-trademark-test-in-india.png",
                width: 1200,
                height: 630,
                alt: "Deceptive Similarity Test in Indian Trademark Law: Phonetic, Visual & Conceptual Rules",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Deceptive Similarity Test in Indian Trademark Law",
        description: "Master deceptive similarity tests in Indian trademark law. Learn phonetic, visual, and conceptual rules, Cadila 7-factor test, and court precedents.",
        images: ["https://www.iprkaro.com/images/og/deceptive-similarity-trademark-test-in-india.png"],
    }
};

const faqs = [
    {
        question: "What is deceptive similarity under Section 2(1)(h) of the Trade Marks Act, 1999?",
        answer: "Under Section 2(1)(h) of the Trade Marks Act, 1999, a mark is deemed to be deceptively similar to another mark if it so nearly resembles that other mark as to be likely to deceive or cause confusion among consumers. It serves as the primary ground for refusal under Section 11(1) and the core standard for proving trademark infringement under Section 29."
    },
    {
        question: "What are the three core prongs of the deceptive similarity test in India?",
        answer: "The three foundational prongs are: (1) Phonetic (auditory) similarity: examining whether the spoken sound, rhythm, or pronunciation of the marks causes confusion; (2) Visual (ocular/structural) similarity: comparing the typography, lettering, colour scheme, and overall layout; and (3) Conceptual (semantic) similarity: evaluating whether the marks convey the same underlying idea or mental impression."
    },
    {
        question: "What is the 7-factor Cadila Health Care test laid down by the Supreme Court?",
        answer: "In Cadila Health Care Ltd. v. Cadila Pharmaceuticals Ltd. (2001), the Supreme Court established 7 authoritative factors: (1) Nature of the marks (words, labels, or composite devices), (2) Degree of resemblance (phonetic, visual, and conceptual), (3) Nature of goods/services, (4) Similarity in nature, character, and performance, (5) Class of purchasers and their education/care, (6) Mode of purchasing and channels of trade, and (7) Any other surrounding circumstances."
    },
    {
        question: "What is the 'Doctrine of Imperfect Recollection'?",
        answer: "Originating from English law and adopted in Amritdhara Pharmacy (1963), the doctrine requires judges and examiners to evaluate trademark similarity from the perspective of an average consumer with ordinary intelligence and imperfect memory. The consumer does not compare both marks side by side, but relies on a vague, general mental recollection when encountering the second mark."
    },
    {
        question: "What is the Anti-Dissection Rule under Indian trademark law?",
        answer: "The Anti-Dissection Rule mandates that composite trademarks must be compared in their entirety as unified commercial wholes, rather than being dissected into microscopic elements or syllables. While the Dominant Feature Rule permits identifying the prominent, essential feature that creates the commercial impression, the ultimate comparison must evaluate the overall net impression."
    },
    {
        question: "Why do pharmaceutical and medicinal trademarks face stricter scrutiny?",
        answer: "The Supreme Court in Cadila Health Care held that confusion in medicinal and pharmaceutical products carries severe, life-threatening risks. Because doctors may write illegible prescriptions, dispensing chemists may err, and consumers may ingest wrong medications for critical ailments, courts apply an extraordinarily stringent standard of deceptive similarity for pharma marks, regardless of whether they are prescription (Schedule H) or over-the-counter (OTC)."
    },
    {
        question: "What is Parker J.'s classic 'Pianotist Test'?",
        answer: "Formulated in Re Pianotist Co.'s Application (1906), the Pianotist Test requires comparing two words by considering: (1) their appearance and sound, (2) the goods to which they are applied, (3) the nature and kind of customers who purchase them, and (4) all surrounding circumstances of the trade. Indian courts consistently apply this test in Section 11 hearings and infringement suits."
    },
    {
        question: "How can an applicant overcome a Section 11 deceptive similarity objection?",
        answer: "An applicant can overcome Section 11 objections by: (1) Establishing structural, phonetic, and conceptual distinctiveness, (2) Applying the Anti-Dissection Rule, (3) Demonstrating prior commercial use under Section 34, (4) Proving honest concurrent adoption under Section 12, (5) Restricting the specification of goods/services, or (6) Submitting a Coexistence Agreement / Consent Letter from the prior cited proprietor."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "statutory-definition", title: "Section 2(1)(h) Definition" },
    { id: "tripartite-test", title: "The Tripartite Test" },
    { id: "imperfect-recollection", title: "Average Consumer Standard" },
    { id: "pianotist-test", title: "Parker J.'s Pianotist Test" },
    { id: "landmark-precedents", title: "Landmark Supreme Court Cases" },
    { id: "anti-dissection-rule", title: "Anti-Dissection vs Dominant" },
    { id: "pharma-strict-standard", title: "Pharmaceutical Strict Rules" },
    { id: "test-matrix", title: "Deceptive Similarity Matrix" },
    { id: "defense-framework", title: "Overcoming Examination Objections" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Enforcement Advice" },
];

export default function DeceptiveSimilarityTrademarkTestPage() {
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
        "headline": "Deceptive Similarity Test in Indian Trademark Law: Phonetic, Visual & Conceptual Rules",
        "description": "Master deceptive similarity tests in Indian trademark law. Learn phonetic, visual, and conceptual rules, Cadila 7-factor test, and court precedents.",
        "image": "https://www.iprkaro.com/images/og/deceptive-similarity-trademark-test-in-india.png",
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
            "@id": "https://www.iprkaro.com/deceptive-similarity-trademark-test-in-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Deceptive Similarity Test in Indian Trademark Law",
        "url": "https://www.iprkaro.com/deceptive-similarity-trademark-test-in-india",
        "description": "Master deceptive similarity tests in Indian trademark law. Learn phonetic, visual, and conceptual rules, Cadila 7-factor test, and court precedents.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/deceptive-similarity-trademark-test-in-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/deceptive-similarity-trademark-test-in-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Deceptive Similarity Guide", "item": "https://www.iprkaro.com/deceptive-similarity-trademark-test-in-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Comprehensive Framework to Assess Deceptive Similarity in Indian Trademark Practice",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Assess Phonetic Resemblance across Pronunciation, Syllables, and Cadence" },
            { "@type": "ListItem", "position": 2, "name": "Examine Visual Elements, Typography, Logo Artwork, and Color Scheme" },
            { "@type": "ListItem", "position": 3, "name": "Evaluate Conceptual and Semantic Impressions Conveyed to Consumers" },
            { "@type": "ListItem", "position": 4, "name": "Apply the Average Consumer Standard with Imperfect Recollection" },
            { "@type": "ListItem", "position": 5, "name": "Apply the Anti-Dissection Rule Viewing Composite Marks as Wholes" },
            { "@type": "ListItem", "position": 6, "name": "Enforce Stringent Heightened Scrutiny for Pharmaceutical & Medicinal Brands" },
            { "@type": "ListItem", "position": 7, "name": "Formulate Multi-Pronged Legal Defense under Sections 11, 12, 34, and Cadila Precedents" }
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
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Trademark Jurisprudence &amp; Litigation</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Deceptive Similarity Test in Indian Trademark Law: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Phonetic, Visual &amp; Conceptual Rules</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Deceptive similarity is the definitive legal benchmark governing trademark examination, registry oppositions, and High Court infringement litigation in India. Governed by <strong>Section 2(1)(h)</strong> and <strong>Section 11(1) of the Trade Marks Act, 1999</strong>, it determines whether competing brands create confusion or association in the marketplace. Master the Supreme Court&apos;s <strong>Cadila 7-factor test</strong>, the <strong>Pianotist rule</strong>, phonetic and ocular comparisons, the anti-dissection doctrine, and heightened scrutiny for medicinal marks.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Supreme Court Jurisprudence</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Analyze Trademark Similarity <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult IP Litigator: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/deceptive-similarity-trademark-test-in-india.png"
                                    alt="Deceptive Similarity Test in Indian Trademark Law: Phonetic, Visual & Conceptual Rules"
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
                        { label: "Deceptive Similarity Guide", href: "/deceptive-similarity-trademark-test-in-india" }
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
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Deceptive Similarity Tests
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                In Indian trademark law, deceptive similarity under Section 2(1)(h) occurs when a contested mark so nearly resembles an existing mark as to be likely to deceive or cause confusion among consumers. It is determined through a tripartite test evaluating: (1) Phonetic similarity (sound-alike qualities), (2) Visual similarity (structural typography and logo layout), and (3) Conceptual similarity (overlapping meanings or ideas). Under the Supreme Court&apos;s landmark Cadila Health Care (2001) precedent and Parker J.&apos;s Pianotist test, the comparison is made from the perspective of an average consumer with imperfect recollection, comparing composite marks as unbroken wholes rather than dissecting individual syllables.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            The fundamental purpose of a trademark is to act as a distinctive badge of commercial origin, guaranteeing quality and preventing consumer deception. When two marks in the marketplace sound identical, look strikingly similar, or convey the exact same commercial impression, consumers are misled into believing that the goods originate from the same enterprise or share a licensed corporate affiliation.
                                        </p>
                                        <p className="mb-6">
                                            Under the <strong>Trade Marks Act, 1999</strong>, deceptive similarity serves as the primary gateway for examination objections under <strong>Section 11(1)</strong> (relative grounds for refusal), third-party opposition proceedings under <strong>Section 21</strong>, rectification actions under <strong>Section 57</strong>, and civil infringement suits under <strong>Section 29</strong>.
                                        </p>
                                        <p className="mb-6">
                                            Understanding the judicial principles governing deceptive similarity enables founders to conduct risk-free brand naming clearances and empowers attorneys to build winning legal strategies. Learn how deceptive similarity interfaces with statutory claims in our guides on <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement</Link> and <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 9 vs Section 11 grounds for rejection</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 2: STATUTORY DEFINITION */}
                                    <section id="statutory-definition" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 2(1)(h) Statutory Definition
                                        </h2>
                                        <p className="mb-6">
                                            Section 2(1)(h) of the Trade Marks Act, 1999 provides the foundational statutory definition of deceptive similarity in India:
                                        </p>

                                        <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;A mark shall be deemed to be deceptively similar to another mark if it so nearly resembles that other mark as to be likely to deceive or cause confusion.&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. &lsquo;Deceive&rsquo; vs &lsquo;Cause Confusion&rsquo;</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Indian courts draw a subtle but crucial distinction: <em>Deception</em> implies a false representation that actually induces a consumer to buy product B thinking it is product A. <em>Confusion</em> is a broader state of uncertainty, where the consumer wonders whether product B is affiliated with, licensed by, or a line extension of product A.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Likelihood of Confusion (Section 11(1))</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Under Section 11(1), a mark cannot be registered if its identity or similarity to an earlier trade mark, coupled with the identity or similarity of goods/services, creates a <em>likelihood of confusion on the part of the public</em>, which explicitly includes the <em>likelihood of association</em> with the earlier trademark.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Probability vs Mere Possibility</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The test is not whether confusion is remotely possible under bizarre or contrived scenarios, but whether there is a real, tangible commercial probability of confusion occurring in the normal course of trade.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: THE TRIPARTITE TEST */}
                                    <section id="tripartite-test" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBrain} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Tripartite Test of Similarity
                                        </h2>
                                        <p className="mb-6">
                                            Indian jurisprudence evaluates deceptive similarity across three mutually reinforcing dimensions. A fatal conflict under any one of these prongs is sufficient to establish deceptive resemblance:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3">
                                                        <FontAwesomeIcon icon={faEarListen} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">1. Phonetic (Auditory)</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Compares spoken pronunciation, syllabic emphasis, consonant cadence, and vowel sounds. Critical in India where goods are ordered verbally across noisy retail counters.
                                                </p>
                                                <div className="bg-purple-50 p-2 rounded-lg text-[11px] font-semibold text-[#6E5E93]">
                                                    Examples: Amritdhara vs Satyadhara, Lakme vs Likeme, Calpol vs Celpol
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                                                        <FontAwesomeIcon icon={faEye} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">2. Visual (Ocular)</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Evaluates letter arrangements, prefix/suffix symmetry, typeface stylization, colour combinations, device logos, and packaging get-up (trade dress).
                                                </p>
                                                <div className="bg-indigo-50 p-2 rounded-lg text-[11px] font-semibold text-indigo-700">
                                                    Examples: Similar font scripts, matching geometric emblems, identical packaging colours
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mr-3">
                                                        <FontAwesomeIcon icon={faBrain} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">3. Conceptual (Semantic)</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Analyzes whether the two marks evoke the exact same central concept, mental imagery, translation, or semantic meaning, even if spelling and sounds differ.
                                                </p>
                                                <div className="bg-emerald-50 p-2 rounded-lg text-[11px] font-semibold text-emerald-700">
                                                    Examples: Surya vs Bhaskar (both mean Sun), Kingfisher vs Falcon, Lion vs Sher
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: IMPERFECT RECOLLECTION & AVERAGE CONSUMER */}
                                    <section id="imperfect-recollection" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBrain} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Average Consumer &amp; Imperfect Recollection
                                        </h2>
                                        <p className="mb-6">
                                            The benchmark against which similarity is tested is neither an intellectual property lawyer nor an expert technician with microscopic precision. The Supreme Court has repeatedly affirmed the <strong>Standard of an Average Consumer of Ordinary Prudence</strong>:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. The &lsquo;Fleeting Glance&rsquo; Principle</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Consumers do not conduct side-by-side microscopic comparisons in stores or online marketplaces. They see a mark, form a general overall impression, and days or weeks later encounter the competing mark. They rely on an imperfect, fading mental memory.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Target Consumer Sophistication Varies by Product Class</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The expected level of buyer care depends entirely on the nature of goods. Buyers of everyday FMCG products, confectionery, biscuits, and daily groceries exercise minimal caution. In contrast, corporate procurement heads purchasing industrial generators or enterprise ERP software exercise heightened diligence.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Linguistic &amp; Cultural Diversity in India</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Given India&apos;s multi-lingual fabric, varying literacy levels, and diverse regional dialects, pronunciation nuances and imperfect English comprehension among rural consumers are given significant weight by Indian courts.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: PARKER J.'S PIANOTIST TEST */}
                                    <section id="pianotist-test" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Parker J.&apos;s Classic Pianotist Test (1906)
                                        </h2>
                                        <p className="mb-6">
                                            Formulated by Lord Parker in the historic English case <em>Re Pianotist Co.&apos;s Application (1906) 23 RPC 774</em>, this four-pillar test remains bedrock doctrine cited in hundreds of Indian Supreme Court and High Court judgments:
                                        </p>

                                        <div className="bg-gray-50 border-l-4 border-purple-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;You must take the two words. You must judge them, both by their look and by their sound. You must consider the goods to which they are to be applied. You must consider the nature and kind of customer who would be likely to buy those goods. In fact you must consider all the surrounding circumstances; and you must further consider what is likely to happen if each of those trade marks is used in a normal way as a trade mark for the goods of the respective owners of the marks.&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                                            <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                                                <p className="font-bold text-gray-900 text-xs mb-1">Look and Sound</p>
                                                <p className="text-xs text-gray-600 m-0">Visual structural appearance combined with auditory phonetic pronunciation.</p>
                                            </div>
                                            <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                                                <p className="font-bold text-gray-900 text-xs mb-1">Nature of Goods</p>
                                                <p className="text-xs text-gray-600 m-0">Whether the products are identical, substitute goods, or complementary in use.</p>
                                            </div>
                                            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                                                <p className="font-bold text-gray-900 text-xs mb-1">Nature of Purchasers</p>
                                                <p className="text-xs text-gray-600 m-0">Degree of literacy, socioeconomic status, and consumer purchasing environment.</p>
                                            </div>
                                            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                                                <p className="font-bold text-gray-900 text-xs mb-1">Surrounding Circumstances</p>
                                                <p className="text-xs text-gray-600 m-0">Trade channels, retail store display, online ordering, and packaging trade dress.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: LANDMARK SUPREME COURT PRECEDENTS */}
                                    <section id="landmark-precedents" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Supreme Court Precedents
                                        </h2>
                                        <p className="mb-6">
                                            The Supreme Court of India has evolved a comprehensive body of jurisprudence defining deceptive similarity across five decades:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Cadila Health Care Ltd. v. Cadila Pharmaceuticals Ltd. (2001) 5 SCC 73</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The definitive ruling on deceptive similarity in India. The Supreme Court laid down the <strong>7-Factor Test</strong> for evaluating competing marks, emphasizing that in a country like India with diverse languages and varied literacy, marks must be tested from the viewpoint of an ordinary consumer, with an exceptionally strict standard applied to pharmaceuticals.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Amritdhara Pharmacy v. Satya Deo Gupta (1963) AIR SC 449</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Comparing Ayurvedic medicinal preparations <strong>Amritdhara</strong> and <strong>Lakshmandhara</strong> (later Satyadhara), the court held that an ordinary villager or town purchaser would remember only the broad overall sound and meaning (&ldquo;Dhara&rdquo; with an auspicious prefix), establishing the doctrine of imperfect recollection in Indian law.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Corn Products Refining Co. v. Shangrila Food Products Ltd. (1960) AIR SC 142</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Comparing <strong>Glucovita</strong> (glucose powder) and <strong>Gluvita</strong> (biscuits), the Supreme Court ruled that trade connection exists between glucose and biscuits because both are food products purchased by the general public, creating clear deceptive similarity.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Parle Products (P) Ltd. v. J.P. &amp; Co. (1972) AIR SC 1359</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The landmark decision establishing the <strong>Anti-Dissection Rule</strong>. Comparing biscuit wrappers with a farm girl device, the court held: <em>&ldquo;It is not possible to dissect a mark and say that one part is identical and another is different. The broad and salient features must be compared.&rdquo;</em>
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">5. Nandhini Deluxe v. Karnataka Cooperative Milk Federation (2018) 9 SCC 183</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The Supreme Court permitted the registration of <strong>Nandhini</strong> for restaurant services despite the well-known dairy trademark <strong>Nandini</strong>, observing distinct artistic stylization, non-competing goods, and bona fide concurrent adoption under Section 12.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: ANTI-DISSECTION VS DOMINANT FEATURE */}
                                    <section id="anti-dissection-rule" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Anti-Dissection Rule vs Dominant Feature
                                        </h2>
                                        <p className="mb-6">
                                            A recurring debate in trademark litigation involves balancing Section 17 (registration of parts of marks) with the common law principle of overall commercial impression:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    The Anti-Dissection Rule
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">
                                                    Derived from Section 17(1), this rule dictates that a trademark must be viewed as an indivisible composite whole. An examiner or court cannot split a mark into separate descriptive syllables or prefixes to manufacture difference or similarity. The total commercial impression governs.
                                                </p>
                                            </div>

                                            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-2"></span>
                                                    The Dominant Feature Doctrine
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">
                                                    While marks are compared as wholes, courts recognize that an average consumer naturally anchors their memory to the most distinctive, prominent, or essential feature of a mark. If the dominant element is copied, deceptive similarity exists even if minor surrounding matter varies.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: PHARMACEUTICAL & MEDICINAL MARKS */}
                                    <section id="pharma-strict-standard" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCapsules} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Heightened Scrutiny for Pharmaceutical Marks
                                        </h2>
                                        <p className="mb-6">
                                            In Indian trademark practice, medicinal and pharmaceutical brand names are held to an extraordinarily rigorous legal standard compared to ordinary consumer goods:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Life-Threatening Public Health Consequences</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    In <em>Cadila Health Care</em>, the Supreme Court ruled that while confusion between competing soaps or biscuits merely causes economic loss, confusion between two pharmaceutical products with similar names can lead to grave physical harm or death if a patient consumes cardiac medicine instead of an antibiotic.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Prescriptions Do Not Eliminate Confusion</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Courts have rejected the defense that prescription-only medicines (Schedule H/X) cannot confuse consumers because doctors write them. Given illegible handwriting, overworked dispensary staff, telephonic orders, and over-the-counter substitution, strict phonetic dissimilarity is mandatory.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Generic Stems &amp; Active Ingredients (Publici Juris)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Where pharma marks derive from international non-proprietary names (INN) or chemical molecules (e.g., &ldquo;Cef&rdquo; for Cephalosporin or &ldquo;Lox&rdquo; for Ofloxacin), the prefix is common to the trade (publici juris). In such cases, distinctiveness shifts to the remaining coined syllables and overall packaging get-up.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: DECEPTIVE SIMILARITY MATRIX */}
                                    <section id="test-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Deceptive Similarity Judicial Matrix
                                        </h2>
                                        <p className="mb-6">
                                            The table below provides a quick reference matrix summarizing seminal Indian judicial determinations on deceptive similarity across varied industry sectors:
                                        </p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Competing Marks</th>
                                                        <th className="p-3.5 sm:p-4">Goods / Sector</th>
                                                        <th className="p-3.5 sm:p-4">Judicial Finding</th>
                                                        <th className="p-3.5 sm:p-4">Primary Legal Ground</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Amritdhara vs Lakshmandhara</td>
                                                        <td className="p-3.5 sm:p-4">Ayurvedic Medicine</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">Deceptively Similar</td>
                                                        <td className="p-3.5 sm:p-4">Overall phonetic impression &amp; imperfect memory</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Glucovita vs Gluvita</td>
                                                        <td className="p-3.5 sm:p-4">Glucose / Biscuits</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">Deceptively Similar</td>
                                                        <td className="p-3.5 sm:p-4">Trade connection &amp; shared customer base</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Falcigo vs Falcitab</td>
                                                        <td className="p-3.5 sm:p-4">Anti-Malarial Drugs</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">Deceptively Similar</td>
                                                        <td className="p-3.5 sm:p-4">Cadila 7-factor test &amp; pharma heightened scrutiny</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Nandini vs Nandhini Deluxe</td>
                                                        <td className="p-3.5 sm:p-4">Milk vs Restaurant</td>
                                                        <td className="p-3.5 sm:p-4 text-green-700 font-semibold">Not Deceptively Similar</td>
                                                        <td className="p-3.5 sm:p-4">Non-competing goods, visual style &amp; Section 12</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Piknik vs Picnic</td>
                                                        <td className="p-3.5 sm:p-4">Confectionery Snack</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">Deceptively Similar</td>
                                                        <td className="p-3.5 sm:p-4">Exact phonetic identity despite alternate spelling</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: DEFENSE FRAMEWORK */}
                                    <section id="defense-framework" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Overcoming Section 11 Similarity Objections
                                        </h2>
                                        <p className="mb-6">
                                            When the Trademark Registry cites a prior registered or pending mark under Section 11(1), applicants can deploy proven statutory and evidentiary arguments to secure acceptance:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Highlight Structural &amp; Visual Differentiation</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Demonstrate that your mark possesses distinctive logo artwork, colour schemes, font typography, and unique prefixes/suffixes that prevent visual confusion under the Anti-Dissection Rule.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Demonstrate Disparity in Goods, Services &amp; Trade Channels</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Prove that although both marks fall in the same broad Nice Class, the specific products cater to completely different consumer segments, price tiers, and distribution channels, eliminating likelihood of confusion.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Plead Honest Concurrent Use under Section 12</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    If both marks have coexisted in the market for several years without actual consumer confusion, submit sales invoices, tax records, and CA certificates to claim honest concurrent adoption under Section 12.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Secure Coexistence Agreement / Consent Letter</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Negotiate a formal Trademark Coexistence Agreement or obtain a written Consent Letter from the proprietor of the cited mark. The Indian Trade Marks Registry accepts consent letters to waive Section 11 objections.
                                                </p>
                                            </div>
                                        </div>
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

                                    {/* SECTION 12: STRATEGIC TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Brand Protection Advice
                                        </h2>
                                        <p className="mb-6">
                                            Evaluating deceptive similarity requires a sophisticated synthesis of statutory analysis, phonetic metrics, visual typography, and commercial context. A trademark clearance search conducted before filing saves millions in rebranding expenses, while authoritative legal drafting overcomes relative grounds examination objections with ease.
                                        </p>
                                        <p className="mb-6">
                                            Work with veteran IP litigators and trademark search specialists to assess potential conflicts, draft Section 11 examination replies, and enforce your exclusive brand rights across India. For related trademark prosecution strategies, review our guides on <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objections</Link>, <Link href="/free-ai-powered-trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">free AI trademark search tool</Link>, and <Link href="/famous-trademark-infringement-cases-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">famous trademark infringement cases in India</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Comprehensive Trademark Clearance &amp; Litigation
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Overcome Deceptive Similarity Objections
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Deploy expert IP litigators to conduct phonetic &amp; visual clearance searches, draft airtight Section 11 objection replies, and defend your brand in Registry hearings.
                                                </p>

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

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Registered Trademark Attorneys • Cadila Similarity Analysis • Section 11 Hearing Representation • Pan-India
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in trademark similarity assessments, Cadila doctrine applications, Section 11 examination defense, and high-stakes infringement litigation.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Facing Similar Mark Issue?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Got a Section 11 similarity objection or conflicting trademark citation? Get an expert legal similarity analysis today.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Analyze Similarity Risk
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Overcome Objections</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBookOpen} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Section 9 vs 11 Grounds</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/famous-trademark-infringement-cases-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Famous TM Cases</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-consent-letter-coexistence-agreement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Coexistence Agreements</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trade-dress-protection-under-indian-trademark-law" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Trade Dress Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBan} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Prior User Rights</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
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
