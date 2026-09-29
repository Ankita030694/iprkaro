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
    faUsers,
    faHandshake,
    faUserCheck,
    faRightLeft
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Joint Trademark Ownership India: Section 24 Guide",
    description: validateAndNormalizeDescription(
        "Section 24 guide on joint trademark ownership in India. Learn Form TM-A co-founder filing, co-ownership pacts, and exit IP assignment rules.",
        "app/joint-trademark-ownership-co-founders-india/page.tsx"
    ),
    keywords: [
        "joint trademark ownership in india",
        "can co-founders file joint trademark application in india",
        "joint applicant trademark registration india",
        "co ownership of trademark section 24",
        "how to register brand name under two partners",
        "joint proprietorship trademark agreement",
        "section 24 trade marks act 1999",
        "co-founder exit trademark assignment deed",
        "form tm a joint applicant filing",
        "trademark fee concession individual joint applicants"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/joint-trademark-ownership-co-founders-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Joint Trademark Ownership India: Section 24 Guide",
        description: "Section 24 guide on joint trademark ownership in India. Learn Form TM-A co-founder filing, co-ownership pacts, and exit IP assignment rules.",
        url: "https://www.iprkaro.com/joint-trademark-ownership-co-founders-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/joint-trademark-ownership-co-founders-india.png",
                width: 1200,
                height: 630,
                alt: "Joint Trademark Ownership in India: Can Co-Founders File Together? (Section 24 Guide)",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Joint Trademark Ownership India: Section 24 Guide",
        description: "Section 24 guide on joint trademark ownership in India. Learn Form TM-A co-founder filing, co-ownership pacts, and exit IP assignment rules.",
        images: ["https://www.iprkaro.com/images/og/joint-trademark-ownership-co-founders-india.png"],
    }
};

const faqs = [
    {
        question: "Can two or more co-founders file a joint trademark application in India?",
        answer: "Yes. Under Section 24 of the Trade Marks Act, 1999, two or more individuals or entities can apply jointly as co-proprietors on Form TM-A if they share a bona fide commercial connection in the goods or services for which the mark is used or proposed to be used."
    },
    {
        question: "What does Section 24 of the Trade Marks Act, 1999 mandate for joint owners?",
        answer: "Section 24(1) provides that persons may be registered as joint proprietors when no one of them is entitled to use the mark except on behalf of all of them or in connection with goods/services with which all are connected. Section 24(2) clarifies that joint owners hold equal undivided rights unless an agreement specifies otherwise, preventing any single owner from licensing or assigning the mark unilaterally."
    },
    {
        question: "Can one joint trademark owner license or sell the brand without the other?",
        answer: "No. In the absence of an explicit contract to the contrary, neither joint owner can independently assign, license, franchise, or mortgage the trademark without the written consent of all registered joint proprietors. Unilateral licensing by one co-founder is legally void in India."
    },
    {
        question: "What is the official government fee for joint individual trademark applicants?",
        answer: "If all joint applicants are natural persons (individuals) or qualify as registered MSMEs / DPIIT-recognized startups, the application qualifies for the subsidized fee of ₹4,500 for e-filing per class. If even one applicant is an incorporated company without MSME status, the standard fee of ₹9,000 per class applies."
    },
    {
        question: "What happens to the joint trademark when co-founders incorporate a Private Limited company?",
        answer: "Once the corporate entity is incorporated, both co-founders must execute a formal Trademark Assignment Deed transferring their respective joint ownership shares and accrued goodwill to the company. Subsequently, Form TM-P must be filed with the Trade Marks Registry to update the registered proprietor name."
    },
    {
        question: "What happens if a co-founder leaves the startup or a dispute arises?",
        answer: "If a co-founder exits without an IP assignment agreement, a legal deadlock occurs because the trademark cannot be modified, renewed, or assigned without their signature. To avoid this, founders should execute a robust Co-Ownership Agreement with buyout clauses, dispute resolution mechanisms, and automatic transfer upon departure."
    },
    {
        question: "How should Form TM-48 (Power of Attorney) be executed for joint applicants?",
        answer: "Form TM-48 must contain the full legal names and residential addresses of all joint co-founders. It must be signed by each joint applicant individually or by an authorized signatory backed by a specific power of attorney or board resolution."
    },
    {
        question: "Can one joint proprietor sue a third party for trademark infringement?",
        answer: "Generally, all joint proprietors must be joined as co-plaintiffs in an infringement suit under Section 29. If one co-founder refuses to join, the suing co-founder must name the non-cooperating co-proprietor as a pro-forma defendant to ensure the entire title is represented before the court."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "section-24-statutory", title: "Section 24 Statutory Framework" },
    { id: "individual-vs-company", title: "Individual vs Corporate Filing" },
    { id: "form-tm-a-joint-filing", title: "Form TM-A Filing Procedure" },
    { id: "fee-concession", title: "50% Govt Fee Subsidies" },
    { id: "co-ownership-agreement", title: "Co-Ownership Agreement Clauses" },
    { id: "co-founder-exit", title: "Managing Co-Founder Exits" },
    { id: "tenancy-comparison", title: "Joint Tenancy vs Tenancy in Common" },
    { id: "infringement-enforcement", title: "Litigation & Enforcement Rules" },
    { id: "judicial-precedents", title: "Landmark Judicial Precedents" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Founder Advice" },
];

export default function JointTrademarkOwnershipCoFoundersPage() {
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
        "headline": "Joint Trademark Ownership in India: Can Co-Founders File Together? (Section 24 Guide)",
        "description": "Section 24 guide on joint trademark ownership in India. Learn Form TM-A co-founder filing, co-ownership pacts, and exit IP assignment rules.",
        "image": "https://www.iprkaro.com/images/og/joint-trademark-ownership-co-founders-india.png",
        "datePublished": "2026-09-29T10:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/joint-trademark-ownership-co-founders-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Joint Trademark Ownership India: Section 24 Guide",
        "url": "https://www.iprkaro.com/joint-trademark-ownership-co-founders-india",
        "description": "Section 24 guide on joint trademark ownership in India. Learn Form TM-A co-founder filing, co-ownership pacts, and exit IP assignment rules.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/joint-trademark-ownership-co-founders-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/joint-trademark-ownership-co-founders-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Joint Trademark Ownership", "item": "https://www.iprkaro.com/joint-trademark-ownership-co-founders-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Joint Trademark Registration & Management Process for Co-Founders",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Draft and Execute a Pre-Filing Co-Ownership & IP Agreement" },
            { "@type": "ListItem", "position": 2, "name": "File Form TM-A Listing All Co-Founders as Joint Applicants" },
            { "@type": "ListItem", "position": 3, "name": "Submit Form TM-48 Power of Attorney Signed by All Co-Founders" },
            { "@type": "ListItem", "position": 4, "name": "Claim 50% Official Fee Concession under Individual / MSME Category" },
            { "@type": "ListItem", "position": 5, "name": "Respond to Examination Reports and Objections under Joint Authorization" },
            { "@type": "ListItem", "position": 6, "name": "Secure Joint Trademark Registration Certificate under Section 24" },
            { "@type": "ListItem", "position": 7, "name": "Assign Trademark to Newly Formed Company via Form TM-P upon Incorporation" }
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
                                <FontAwesomeIcon icon={faUsers} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Startup IP &amp; Co-Founder Structuring</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Joint Trademark Ownership in India: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Section 24 Co-Founder Guide</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Early-stage startup co-founders frequently face a critical intellectual property dilemma: before incorporating a Private Limited company or LLP, can two or more partners file a trademark application together? Under<strong>Section 24 of the Trade Marks Act, 1999</strong>, joint ownership is fully recognized. Explore how to file<strong>Form TM-A</strong>as joint applicants, leverage<strong>50% government fee subsidies</strong>, structure airtight co-ownership agreements, and manage founder exits without brand deadlocks.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 29-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Section 24 Statutory Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Joint Trademark <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult Startup Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/joint-trademark-ownership-co-founders-india.png"
                                    alt="Joint Trademark Ownership in India: Can Co-Founders File Together? (Section 24 Guide)"
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
                        { label: "Joint Trademark Ownership", href: "/joint-trademark-ownership-co-founders-india" }
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
                                            <p className="text-sm font-bold text-gray-900 m-0">Written by <Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Joint Trademark Ownership
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Yes, two or more co-founders can legally apply for and own a trademark together in India under Section 24 of the Trade Marks Act, 1999. In Form TM-A, the applicant category is chosen as &quot;Joint Applicants,&quot; listing all founders&apos; names and addresses. Joint owners hold equal, undivided shares by default and no single co-founder can license, assign, or monetize the trademark without the written consent of all other co-proprietors. Filing as joint individual applicants qualifies for a 50% government fee concession (₹4,500 vs ₹9,000).</p>
                                        </div>

                                        <p className="mb-6">In the fast-paced Indian startup ecosystem, building brand equity begins long before formal incorporation. Co-founders frequently launch MVPs, domain names, social media handles, and consumer apps before forming a Private Limited Company or Limited Liability Partnership (LLP). During this pre-incorporation phase, safeguarding brand equity is essential.</p>
                                        <p className="mb-6">If one founder registers the trademark solely in their individual name, severe equity imbalances and trust issues arise. Conversely, waiting months until company incorporation risks brand squatting by unscrupulous competitors. Section 24 provides the statutory bridge, allowing multiple founders to hold undivided, joint legal ownership over the brand.</p>
                                        <p className="mb-6">To understand how applicant legal structures affect filing rights, review our guides on <Link href="/who-can-apply-for-trademark-in-india-proprietorship-partnership-company" className="text-[rgb(110,94,147)] hover:underline font-medium">who can apply for trademark in India</Link> and <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark fee concession for MSMEs and startups</Link>.</p>
                                    </section>

                                    {/* SECTION 2: STATUTORY FRAMEWORK SECTION 24 */}
                                    <section id="section-24-statutory" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 24 Statutory Framework in India
                                        </h2>
                                        <p className="mb-6">Section 24 of the Trade Marks Act, 1999 governs the registration and mutual rights of joint proprietors. It establishes clear statutory guardrails for shared brand ownership:</p>

                                        <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;Where the relations between two or more persons interested in a trade mark are such that no one of them is entitled as between himself and the other or others to use it except (a) on behalf of both or all of them, or (b) to the goods or services with which both or all of them are connected in the course of trade, those persons may be registered as joint proprietors of the trade mark.&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Connected in the Course of Trade (Section 24(1))</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Joint ownership is permitted only when all co-applicants share a genuine commercial connection with the goods or services. Two unrelated companies selling different goods cannot register as joint proprietors merely to share filing expenses.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Undivided Shares &amp; Mutual Consent Rule (Section 24(2))</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Subject to any contract to the contrary, the Act deems joint proprietors to hold undivided shares. Neither co-founder can independently grant a trademark license, execute a franchise agreement, or assign the brand to a third party without the explicit written concurrence of all co-owners.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Right to Use on Behalf of All</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Any commercial use of the trademark by one joint owner in furtherance of the venture enures to the benefit of all joint owners, protecting the registration from non-use cancellation actions under <Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 47 of the Trade Marks Act</Link>.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: INDIVIDUAL VS CORPORATE FILING */}
                                    <section id="individual-vs-company" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingShield} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Individual Co-Founders vs Corporate Filing
                                        </h2>
                                        <p className="mb-6">Founders often debate whether to file as joint individuals immediately or wait until a Private Limited company is registered with the Ministry of Corporate Affairs (MCA). The comparison below highlights key legal considerations:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Parameter</th>
                                                        <th className="p-3.5 sm:p-4">Joint Co-Founder Filing (Section 24)</th>
                                                        <th className="p-3.5 sm:p-4">Incorporated Company Filing</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Applicant Legal Entity</td>
                                                        <td className="p-3.5 sm:p-4">Natural persons listed jointly as applicants</td>
                                                        <td className="p-3.5 sm:p-4">Private Limited Company / LLP / OPC</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Official Govt Fee</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">₹4,500 (Subsidized Individual rate)</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold">₹4,500 (with MSME) / ₹9,000 (standard)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Pre-Incorporation Protection</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Immediate priority date secured</td>
                                                        <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">Delayed until Certificate of Incorporation</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Equity &amp; Exit Handling</td>
                                                        <td className="p-3.5 sm:p-4">Requires Co-Ownership Agreement &amp; TM-P transfer</td>
                                                        <td className="p-3.5 sm:p-4">IP automatically belongs to company balance sheet</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">VC / Angel Investor Preference</td>
                                                        <td className="p-3.5 sm:p-4">Must be formally assigned to company prior to funding</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Preferred during investor IP due diligence</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 4: FORM TM-A JOINT FILING PROCEDURE */}
                                    <section id="form-tm-a-joint-filing" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            How Co-Founders File Together in Form TM-A
                                        </h2>
                                        <p className="mb-6">Filing a joint trademark application on the IP India e-filing portal involves structured procedural steps to ensure smooth examination without administrative objections:</p>

                                        <div className="space-y-4 not-prose my-6">
                                            <div className="flex items-start p-4 bg-purple-50/50 rounded-2xl border border-purple-100">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Select &apos;Joint Applicants&apos; Category</h3>
                                                    <p className="text-xs text-gray-600 m-0">In Form TM-A, designate the applicant type as &quot;Joint Applicants / Joint Proprietors&quot; and input the legal names, nationalities, PAN numbers, and residential addresses of each co-founder.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                                                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Appoint Common Address for Service</h3>
                                                    <p className="text-xs text-gray-600 m-0">The Registry requires a single address for service in India where all official hearing notices, examination reports, and journal publications will be dispatched.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                                                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Execute Form TM-48 (Power of Attorney)</h3>
                                                    <p className="text-xs text-gray-600 m-0">All co-founders must jointly sign <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[#6E5E93] hover:underline font-semibold">Form TM-48 Power of Attorney</Link> on appropriate non-judicial stamp paper, authorizing the registered trademark attorney.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start p-4 bg-amber-50/50 rounded-2xl border border-amber-100">
                                                <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm mb-1">Submit Joint User Date Affidavit (If Claiming Prior Use)</h3>
                                                    <p className="text-xs text-gray-600 m-0">If the brand has prior commercial use under <Link href="/prior-user-rights-section-34-trade-marks-act-india" className="text-[#6E5E93] hover:underline font-semibold">Section 34</Link>, submit a <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[#6E5E93] hover:underline font-semibold">user affidavit</Link> affirmed jointly by all co-founders detailing first date of use and commercial evidence.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: FEE CONCESSION */}
                                    <section id="fee-concession" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Official Fee Subsidies for Joint Applicants
                                        </h2>
                                        <p className="mb-6">Under the Trade Marks Rules, 2017, the official fee structure provides massive subsidies for individual entrepreneurs and small business entities:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200">
                                                <div className="flex items-center mb-3">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-emerald-600 mr-2" />
                                                    <h3 className="text-base font-bold text-gray-900 m-0">All Applicants are Individuals / MSMEs</h3>
                                                </div>
                                                <p className="text-2xl font-black text-emerald-800 mb-2">₹4,500 <span className="text-xs font-normal text-gray-600">per class (e-filing)</span></p>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">When two or more co-founders file in their personal capacities as natural persons, or if all joint entities possess valid Udyam MSME certificates, the entire application qualifies for the 50% statutory discount.</p>
                                            </div>

                                            <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200">
                                                <div className="flex items-center mb-3">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-amber-600 mr-2" />
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Mixed Status Applicants (Company + Individual)</h3>
                                                </div>
                                                <p className="text-2xl font-black text-amber-800 mb-2">₹9,000 <span className="text-xs font-normal text-gray-600">per class (e-filing)</span></p>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">If one co-applicant is an individual but the other is an incorporated corporate body without MSME / Startup India registration, the registry levies the standard corporate rate of ₹9,000 per class.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: CO-OWNERSHIP AGREEMENT CLAUSES */}
                                    <section id="co-ownership-agreement" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Essential Clauses in Co-Ownership Pacts
                                        </h2>
                                        <p className="mb-6">Filing jointly under Section 24 creates undivided rights. If co-founders lack a written Co-Ownership &amp; IP Agreement, a dispute can paralyze the brand. Every startup co-ownership agreement must include these essential clauses:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Ownership Ratio &amp; Equity Linkage</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Specify exact percentage entitlements (e.g., 50:50 or 60:40) aligned with founder cap table equity, overriding the statutory default presumption of equal undivided interest.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Mandatory Assignment to Future Company</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">A binding covenant obligating all co-founders to assign 100% trademark title and goodwill to the newly incorporated Private Limited company within 30 days of incorporation without demanding separate cash consideration.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Unilateral Licensing &amp; Assignment Prohibition</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Strict negative covenants barring any individual co-founder from licensing, sub-licensing, creating liens, or pledging the mark without unanimous written consent.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Prosecution &amp; Maintenance Cost Sharing</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Clear allocation of attorney fees, official renewal fees, and defense costs in the event of third-party <Link href="/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark oppositions</Link> or <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">examination objections</Link>.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: MANAGING CO-FOUNDER EXITS */}
                                    <section id="co-founder-exit" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRightLeft} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Managing Co-Founder Exits and IP Transfers
                                        </h2>
                                        <p className="mb-6">One of the greatest operational risks in early-stage ventures is a founder departure while a trademark is still registered in joint personal names:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">The &apos;Deadlock Risk&apos;</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If a departing co-founder refuses to sign trademark assignment forms or demands an exorbitant payout, the remaining founders cannot register the mark under their company, obtain venture capital funding, or enforce against infringers. The trademark becomes legally frozen.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Execution of Trademark Assignment Deed</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Upon founder exit, the departing founder must execute an IP Assignment Deed transferring all rights, title, and goodwill to the surviving co-founders or company. Learn the difference in our guide on <Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark assignment vs licensing in India</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Filing Form TM-P with IP India</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The change in ownership must be formally recorded on the IP India e-Register by filing Form TM-P along with the certified Assignment Deed and applicable official fees to substitute the proprietor details.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: JOINT TENANCY VS TENANCY IN COMMON */}
                                    <section id="tenancy-comparison" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Joint Tenancy vs Tenancy in Common in IP
                                        </h2>
                                        <p className="mb-6">Indian property law recognizes two distinct modes of concurrent ownership, with major implications for intellectual property in the event of founder death or liquidation:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Tenancy in Common (Statutory Presumption)
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Each co-founder holds a distinct, divisible percentage share. If a co-founder passes away, their trademark share passes to their legal heirs rather than automatically transferring to surviving co-founders.</p>
                                            </div>

                                            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-2"></span>
                                                    Joint Tenancy with Survivorship (Contractual)
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">If expressly stipulated in a founder contract, co-owners hold a unified title. Upon the death of one founder, their share automatically vests in the surviving co-proprietor(s), preventing disruption to ongoing business operations.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: INFRINGEMENT ENFORCEMENT RULES */}
                                    <section id="infringement-enforcement" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Enforcement and Litigation by Joint Owners
                                        </h2>
                                        <p className="mb-6">Enforcing exclusive trademark rights under <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 29 (Infringement)</Link> and common law passing off requires careful procedural compliance when multiple proprietors are registered:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Joinder of All Joint Proprietors as Plaintiffs</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">In civil infringement litigation, the general rule is that all registered joint proprietors must be joined as co-plaintiffs. A single co-founder cannot claim 100% damages or an injunction without bringing all co-owners on record.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Non-Cooperating Co-Founder as Pro-Forma Defendant</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If a recalcitrant co-founder refuses to participate in litigation against a third-party counterfeiter, the active co-founder can file the suit and array the non-cooperating co-proprietor as a pro-forma defendant to ensure legal representation of the whole mark.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Inter-Se Infringement Between Co-Owners</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">One joint proprietor cannot sue another joint proprietor for statutory trademark infringement, because both hold legal title to use the mark. Disputes between joint owners must be litigated under contract law or partnership dissolution claims.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: LANDMARK JUDICIAL PRECEDENTS */}
                                    <section id="judicial-precedents" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Judicial Precedents on Joint Marks
                                        </h2>
                                        <p className="mb-6">Indian courts have shaped joint ownership doctrine through seminal rulings defining the boundaries of co-proprietorship rights:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Power Control Appliances v. Sumeet Machines Pvt. Ltd. (1994) 2 SCC 448</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Supreme Court held that there can be only one source and one proprietor of a trademark at a time. Where joint proprietors exist, their rights must be exercised collectively on behalf of the shared commercial venture, and one owner cannot use the mark in rivalry with the other.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Gujarat Bottling Co. Ltd. v. Coca Cola Co. (1995) 5 SCC 545</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Supreme Court emphasized that joint use agreements and licensing arrangements must uphold strict quality control to prevent deceptive public confusion and maintain brand distinctiveness.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Gufic Ltd. v. Clinique Laboratories LLC (2010) Del HC</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Delhi High Court affirmed that joint proprietors cannot independently alienate brand goodwill or grant third-party licenses without express contractual authorization from all co-owners.</p>
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
                                            Strategic IP Advice for Startup Founders
                                        </h2>
                                        <p className="mb-6">Joint trademark ownership under Section 24 provides an invaluable, low-cost legal shield for co-founders during the critical pre-incorporation phase. However, joint ownership must never be left unmanaged. Always execute a formal Co-Ownership Agreement alongside your Form TM-A application to define exit terms and mandate future company assignment.</p>
                                        <p className="mb-6">Work with experienced startup trademark attorneys to structure your intellectual property portfolio seamlessly. For comprehensive startup trademark guidance, explore our guides on <Link href="/how-to-register-a-trademark-for-my-startup" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration for startups</Link>, <Link href="/how-to-check-trademark-availability" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark availability search</Link>, and <Link href="/free-ai-powered-trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">free AI trademark search tool</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Co-Founder Trademark Structuring &amp; Protection
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand with Joint Filing
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Secure 50% government fee subsidies, draft custom co-founder IP agreements, and register your joint brand with expert trademark attorneys.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>File Joint Application</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Section 24 Compliance • Co-Ownership Agreements • Form TM-A &amp; TM-P Filing • Pan-India</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in startup IP portfolio creation, Section 24 joint trademark filings, co-founder agreements, and corporate IP assignment structuring.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Filing with a Co-Founder?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Secure your brand name before incorporation with 50% govt fee subsidies and custom co-ownership agreements.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        File Joint Trademark
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/who-can-apply-for-trademark-in-india-proprietorship-partnership-company" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faUsers} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Who Can Apply</span></Link></li>
                                    <li><Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHandshake} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Fee Concession</span></Link></li>
                                    <li><Link href="/trademark-assignment-vs-licensing-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Assignment vs License</span></Link></li>
                                    <li><Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Form TM-48 Guide</span></Link></li>
                                    <li><Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Registration</span></Link></li>
                                    <li><Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Prior User Rights</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Affidavit</span></Link></li>
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
