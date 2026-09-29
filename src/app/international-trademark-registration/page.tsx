import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
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
    faRocket,
    faEarthAmericas,
    faPassport
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "International Trademark Registration Guide | IPR Karo",
    description: validateAndNormalizeDescription(
        "Register your trademark globally via the Madrid System. Learn eligibility, WIPO fee structures, step-by-step filing stages, and overseas protection.",
        "app/international-trademark-registration/page.tsx"
    ),
    keywords: [
        "international trademark registration",
        "international trademark registration process",
        "madrid protocol registration india",
        "wipo international trademark filing",
        "global trademark registration",
        "form MM2 international trademark",
        "international trademark fees",
        "overseas trademark protection",
        "madrid system trademark guide"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/international-trademark-registration",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "International Trademark Registration Guide | IPR Karo",
        description: "Register your trademark globally via the Madrid System. Learn eligibility, WIPO fee structures, step-by-step filing stages, and overseas protection.",
        url: "https://www.iprkaro.com/international-trademark-registration",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/international-trademark-registration.png",
                width: 1200,
                height: 630,
                alt: "International Trademark Registration Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "International Trademark Registration Guide | IPR Karo",
        description: "Register your trademark globally via the Madrid System. Learn eligibility, WIPO fee structures, step-by-step filing stages, and overseas protection.",
        images: ["https://www.iprkaro.com/images/og/international-trademark-registration.jpg"],
    }
};

const faqs = [
    {
        question: "What is an international trademark registration and how does it work?",
        answer: "An international trademark registration is a centralized mechanism governed by the Madrid Protocol and administered by WIPO in Geneva. It enables an applicant to file a single standardized application (Form MM2(E)) through their domestic intellectual property office to seek brand protection in over 130 member countries simultaneously. This eliminates the need to file separate national applications in different languages."
    },
    {
        question: "Can I register an international trademark directly without an Indian trademark?",
        answer: "No, under the Madrid Protocol, Indian applicants must possess a basic home mark—either a pending application (Form TM-A) or an active registration certificate—with the Indian Trade Marks Registry before applying internationally. Your international mark and specification of goods or services must precisely correspond with your Indian base filing."
    },
    {
        question: "What is the difference between the Madrid Protocol and direct national filing?",
        answer: "The Madrid Protocol provides a single centralized application, one currency (Swiss Francs), and unified portfolio management across 130+ contracting parties. In contrast, direct national filing requires engaging local trademark attorneys in each individual country, translating applications into local languages, and paying independent fees to each national office under their distinct domestic laws."
    },
    {
        question: "How much does an international trademark registration cost from India?",
        answer: "The total fee comprises three components: a ₹2,000 certification and handling fee paid to the Indian Trade Marks Registry, a WIPO basic administrative fee (653 CHF for black-and-white marks or 903 CHF for color marks), and variable individual or complementary designation fees for each selected member country (ranging from 100 CHF to over 800 CHF per country depending on domestic tariffs)."
    },
    {
        question: "What is the Central Attack doctrine under the Madrid Protocol?",
        answer: "Under the Madrid Protocol, an international registration remains legally dependent on the basic home application or registration for exactly 5 years from its international registration date. If the basic Indian application is refused, withdrawn, or cancelled during this period, the international registration is automatically cancelled in all designated foreign countries to the same extent."
    },
    {
        question: "How long does the international trademark registration process take?",
        answer: "The Indian Trade Marks Registry certifies and transmits the application to WIPO within 1 to 2 months. WIPO examines formal compliance and publishes the mark within 2 to 3 months. Subsequently, each designated national office has a statutory deadline of 12 to 18 months under Madrid Protocol Article 5 to conduct substantive examination and grant protection or notify provisional refusals."
    },
    {
        question: "What happens if a designated country issues a Provisional Refusal?",
        answer: "A Provisional Refusal indicates that a designated country's trademark examiner has identified legal objections under their domestic law, such as prior conflicting marks or descriptive wording. The applicant must retain a qualified local trademark attorney in that country to draft and submit a formal response within the prescribed statutory deadline (usually between 30 and 90 days)."
    },
    {
        question: "How long is an international trademark valid and how is it renewed?",
        answer: "An international trademark registration is valid for 10 years from the official international registration date. It can be renewed indefinitely for consecutive 10-year intervals directly through WIPO's Madrid Portfolio Manager system by filing Form MM11 and paying the standard renewal fee in Swiss Francs across all designated jurisdictions."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "prerequisites", title: "Prerequisites" },
    { id: "filing-pathways", title: "Filing Pathways" },
    { id: "step-by-step", title: "7-Step Process" },
    { id: "process-stages-table", title: "Stages & Timelines" },
    { id: "central-attack", title: "Central Attack & Defense" },
    { id: "common-pitfalls", title: "Common Pitfalls" },
    { id: "checklist", title: "Registration Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function InternationalTrademarkRegistrationPage() {
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
        "headline": "International Trademark Registration: Complete Global Filing Guide",
        "description": "Register your trademark globally via the Madrid System. Learn eligibility, WIPO fee structures, step-by-step filing stages, and overseas protection.",
        "image": "https://www.iprkaro.com/images/og/international-trademark-registration.png",
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
            "@id": "https://www.iprkaro.com/international-trademark-registration"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "International Trademark Registration Guide",
        "url": "https://www.iprkaro.com/international-trademark-registration",
        "description": "Register your trademark globally via the Madrid System. Learn eligibility, WIPO fee structures, step-by-step filing stages, and overseas protection.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/international-trademark-registration#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/international-trademark-registration#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "International Trademark Registration", "item": "https://www.iprkaro.com/international-trademark-registration" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps of International Trademark Registration",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Global Prior Art Clearance & Conflict Search" },
            { "@type": "ListItem", "position": 2, "name": "Securing Base Application or Registration in India (Office of Origin)" },
            { "@type": "ListItem", "position": 3, "name": "Submission of International Form MM2(E) via IP India Portal" },
            { "@type": "ListItem", "position": 4, "name": "Certification & Transmission by Indian Trade Marks Registry" },
            { "@type": "ListItem", "position": 5, "name": "Formal Examination & Gazette Publication by WIPO International Bureau" },
            { "@type": "ListItem", "position": 6, "name": "Substantive Examination by Designated Contracting Parties (12-18 Months)" },
            { "@type": "ListItem", "position": 7, "name": "Issuance of Statements of Grant of Protection and Portfolio Maintenance" }
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
                                <FontAwesomeIcon icon={faGlobe} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Global Brand Protection</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                International <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Registration</span> Guide
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Trademark rights are strictly territorial. Securing a trademark in India provides zero legal protection in foreign export markets such as the United States, European Union, United Kingdom, UAE, or Australia. International trademark registration empowers Indian exporters, tech startups, and expanding brands to secure cross-border exclusivity through the Madrid Protocol or direct national filings. Discover prerequisites, WIPO fee structures, filing workflows, and vital defense tactics against central attack.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 25-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Legal Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File International Trademark <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/international-trademark-registration.png"
                                    alt="International Trademark Registration Process - Madrid Protocol & WIPO Global Brand Protection"
                                    width={1200}
                                    height={675}
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
                        { label: "International Trademark Registration", href: "/international-trademark-registration" }
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
                            {/* MOBILE TABLE OF CONTENTS - COLLAPSIBLE ACCORDION (NO OVERLAPPING) */}
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
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of International Trademark Registration
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">International trademark registration allows brand owners to protect their trade names, logos, and slogans across multiple foreign jurisdictions simultaneously. Through the Madrid Protocol administered by the World Intellectual Property Organization (WIPO), Indian applicants can file a single centralized application (Form MM2(E)) via the Indian Patent Office, designating over 130 member countries in one language (English) and paying fees in Swiss Francs (CHF). Alternatively, brands can file direct national applications in non-member states.</p>
                                        </div>

                                        <p className="mb-6">Under the fundamental international legal doctrine known as the<em>principle of territoriality</em>, intellectual property protection granted by any sovereign patent and trademark office remains enforceable solely within that specific country&apos;s geographical borders. Registering a trademark with the Trade Marks Registry in Mumbai, Delhi, Chennai, Kolkata, or Ahmedabad gives you enforceable rights under the Indian Trade Marks Act, 1999, but confers zero protection once your goods cross maritime customs or digital software packages are downloaded abroad.</p>
                                        <p className="mb-6">Without international brand registration, Indian companies venturing into overseas trade face severe risks of trademark squatting, unauthorized distributor registrations, and counterfeit production. In major first-to-file jurisdictions such as China, the European Union, and Japan, bad-faith competitors routinely register emerging brand names before the genuine owner enters the market. Once an overseas competitor secures local registration, they can legally block your authentic goods at foreign ports through customs seizures.</p>
                                        <p className="mb-6">To protect Indian enterprises expanding globally, India officially acceded to the Madrid Protocol on April 8, 2013, with the treaty coming into full legal force on July 8, 2013. The Indian Trade Marks Act, 1999 was specifically amended to introduce<strong>Chapter IVA (Sections 36A to 36G)</strong>. This creates a formal statutory bridge between the Indian Trade Marks Registry and the International Bureau of WIPO in Geneva. You can explore the foundational domestic filing steps in our comprehensive guide on the<Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">process and steps of trademark registration</Link>.</p>
                                    </section>

                                    {/* SECTION 2: PREREQUISITES */}
                                    <section id="prerequisites" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Key Prerequisites Before International Filing
                                        </h3>
                                        <p className="mb-6">Filing an international trademark through the Madrid System is not an independent or isolated action. The system is structurally anchored to your domestic IP assets. Before initiating an application, Indian applicants must verify four mandatory legal prerequisites.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Active Indian Base Mark
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">The applicant must hold either an active pending trademark application (filed via Form TM-A) or a registered trademark certificate issued by the Indian Trade Marks Registry. This is known as the &ldquo;basic application&rdquo; or &ldquo;basic registration&rdquo;. Without an existing Indian filing number, an international Madrid application cannot be created.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Statutory Entitlement Criterion
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">The applicant must establish a legal connection with India. Under Article 2 of the Madrid Protocol, the applicant must be an Indian citizen, be domiciled in India, or maintain a real and effective industrial or commercial establishment within Indian territory. For startups, check our guide on<Link href="/how-to-register-a-trademark-for-my-startup" className="text-[rgb(110,94,147)] hover:underline font-medium">how to register a trademark for my startup</Link>.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Absolute Identity of the Mark
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">The mark depicted in the international application must be identical in all respects to the Indian base mark. If your Indian mark is a wordmark, the international mark must remain a wordmark with matching spelling and capitalization. If it is a figurative device or logo, the identical graphic file must be submitted.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Specification &amp; Nice Class Alignment
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">The list of goods and services in the international application cannot be broader than the goods and services covered by the basic Indian filing. While you may narrow the specification for specific target countries, adding new items or classes will result in immediate rejection by the Indian Office of Origin. Verify classifications using our<Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: FILING PATHWAYS */}
                                    <section id="filing-pathways" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faEarthAmericas} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Two Primary Filing Pathways: Madrid vs Direct National
                                        </h3>
                                        <p className="mb-6">When designing a global intellectual property strategy, enterprises must evaluate whether to file centrally via the Madrid Protocol or file directly through national patent offices in each target jurisdiction.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border-2 border-indigo-100 shadow-sm">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mr-3 text-[#6E5E93]">
                                                        <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                                                    </div>
                                                    <h4 className="text-lg font-bold text-gray-900 m-0">Pathway A: Madrid Protocol System</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">A centralized, multilateral treaty administered by WIPO. You file one electronic application (Form MM2(E)) through the Indian Trade Marks Registry, select your designated contracting parties, and pay a single fee in Swiss Francs.</p>
                                                <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside m-0">
                                                    <li>Covers 130+ countries including USA, EU, UK, Japan, Australia, China, Singapore.</li>
                                                    <li>Centralized renewals and ownership updates directly via WIPO.</li>
                                                    <li>Substantially lower initial attorney fees and administrative overhead.</li>
                                                    <li>Vulnerable to the 5-year &ldquo;central attack&rdquo; rule.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border-2 border-amber-100 shadow-sm">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mr-3 text-amber-700">
                                                        <FontAwesomeIcon icon={faPassport} className="w-5 h-5" />
                                                    </div>
                                                    <h4 className="text-lg font-bold text-gray-900 m-0">Pathway B: Direct National Filing</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">Direct filing with individual foreign trademark offices (such as the USPTO in the US, EUIPO in Europe, or SAIP in Saudi Arabia). Requires engaging a qualified local trademark attorney in each foreign territory.</p>
                                                <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside m-0">
                                                    <li>Mandatory for non-Madrid countries (e.g., Saudi Arabia, South Africa, Nepal, Bangladesh).</li>
                                                    <li>Immune to domestic Indian objections or central attack vulnerability.</li>
                                                    <li>Allows broad, independent goods specifications tailored to local practice.</li>
                                                    <li>Higher costs due to separate local attorney representation and foreign translation.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                                            <h4 className="text-base font-bold text-amber-900 mb-2">Paris Convention 6-Month Priority Window</h4>
                                            <p className="text-sm text-amber-800 leading-relaxed m-0">Under Article 4 of the Paris Convention for the Protection of Industrial Property, if you file an international trademark application within<strong>6 months</strong>of filing your initial Form TM-A in India, you can claim convention priority. This legally backdates your international filing date in all foreign member countries to the exact date of your original Indian application, preempting overseas copycats who filed after your Indian date.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: 7-STEP PROCESS */}
                                    <section id="step-by-step" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step International Trademark Registration Process
                                        </h3>
                                        <p className="mb-6">Filing an international trademark under the Madrid Protocol follows an organized, multi-tier regulatory pathway involving the Indian Trade Marks Registry, WIPO in Geneva, and individual foreign national intellectual property offices.</p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Global Availability Clearance</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Conduct Comprehensive International Prior Art Clearance</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Before committing capital to international filing fees, brand owners must verify whether their desired mark is legally available in every target country. Conducting domestic clearance on the IP India database is insufficient. You must search global databases including the<a href="https://branddb.wipo.int/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">WIPO Global Brand Database</a>, TMview for European marks, and the USPTO TESS database for American registrations.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Clearance must account for local linguistic connotations, phonetically equivalent terms in foreign scripts (such as Cyrillic, Arabic, or Chinese Hanzi), and prior unregistered common-law rights in target jurisdictions. Begin your search with our<Link href="/free-ai-powered-trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">free AI powered trademark search</Link>or consult our guide on<Link href="/how-to-search-for-existing-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">how to search for existing trademark</Link>.</p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Home Base Establishment</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Secure the Baseline Application or Registration in India</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">The Madrid System requires an active &ldquo;Office of Origin&rdquo; base mark. Indian applicants must file Form TM-A with the Indian Trade Marks Registry across the relevant classes. It is not mandatory to wait for the final registration certificate; a valid pending application with an issued application number is legally sufficient to anchor an international application.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">However, because the international registration will be tied to this basic Indian filing for 5 years. This ensures that the Indian base mark is robust, distinctive, and defended against Section 9 or 11 objections is crucial. You can initiate domestic filing immediately through our<Link href="/e-filing-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">e-filing trademark portal</Link>.</p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: International Application E-Filing</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Prepare and Submit Form MM2(E) via IP India Portal</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Under Indian Madrid Regulations, international applications are submitted electronically through the official IP India gateway using<strong>Form MM2(E)</strong>. Applicants cannot file directly with WIPO; the application must be routed through the Indian Patent Office as the Office of Origin.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4">The application requires specifying:</p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li>Applicant details identical to the basic Indian application.</li>
                                                <li>High-resolution representation of the mark (with color claims if applicable).</li>
                                                <li>The designated Madrid contracting parties where protection is sought (e.g., US, UK, EU, UAE, Singapore).</li>
                                                <li>Itemized specifications of goods and services classified under the Nice system.</li>
                                                <li>Payment of the Indian handling/certification fee of<strong>&#8377;2,000</strong>.</li>
                                            </ul>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Office of Origin Certification</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Certification and Transmission by the Indian Registry</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Upon receiving Form MM2(E), a designated international examiner at the Indian Trade Marks Registry conducts a strict comparison between the international application and the Indian base filing. The examiner verifies applicant identity, mark representation, and ensures that the goods/services do not exceed the Indian specification.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Once verified, the Indian Registry certifies the application and transmits it electronically to the WIPO International Bureau in Geneva. If the Indian Registry transmits the application within<strong>2 months</strong>of receipt, the official international registration date corresponds to the date Form MM2(E) was submitted in India.</p>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: WIPO Formal Examination</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Formal Review and Publication in the WIPO Gazette</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Upon transmission, WIPO examiners conduct a formal examination. WIPO does<em>not</em>assess whether your mark conflicts with existing trademarks or lacks distinctiveness; they evaluate classification accuracy, linguistic translations, clarity of specifications, and fee computations.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">If formal requirements are met, WIPO registers the mark in the International Register, assigns an<strong>International Registration Number (IRN)</strong>, issues the official Certificate of International Registration to the applicant, and publishes the mark in the<em>WIPO Gazette of International Marks</em>. WIPO then formally notifies the trademark offices of all designated countries.</p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Substantive National Examination</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Substantive Examination by Designated Foreign Offices</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Each designated country evaluates the international registration under its domestic intellectual property statutes, exactly as if it were a direct national application. Examiners examine the mark for relative grounds (prior confusing marks on their domestic registers) and absolute grounds (descriptive, generic, or deceptive terms).</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Under Madrid Protocol Article 5, designated offices must complete their examination and notify WIPO of any refusal within a statutory timeframe—either<strong>12 months</strong>(standard) or<strong>18 months</strong>(for contracting parties that elected the extended window, such as the United States, United Kingdom, and China). If an office fails to notify WIPO within this deadline, protection is automatically granted by default.</p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Grant of Protection &amp; Statements of Grant</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Issuance of Grant Statements and Global Portfolio Management</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">If a designated national office raises no objections, or after any objections or third-party oppositions are resolved, that office issues an official<strong>Statement of Grant of Protection</strong>to WIPO. WIPO records the grant in the International Register and forwards the notice to the applicant.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">At this stage, your trademark possesses the exact same legal force and remedies against infringement as a domestic trademark registered directly in that foreign nation. The international registration remains valid for 10 years, renewable centrally via WIPO. If an examiner raises issues, learn how our attorneys help you<Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">overcome trademark objections</Link>.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 5: TABLE OF STAGES, TIMELINES, & FEES */}
                                    <section id="process-stages-table" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            International Trademark Stages, Timelines, and Legal Standards
                                        </h3>
                                        <p className="mb-6">Understanding the statutory fee architecture and procedural duration is essential for budgeting international IP expansion. Below is a structured comparative analysis of international registration stages.</p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Process Stage</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Statutory Form</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Official Fee Structure</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Typical Duration</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Governing Legal Standard</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">1. Base Indian Filing</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form TM-A</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">&#8377;4,500 (MSME) / &#8377;9,000 (Co.)</td>
                                                        <td className="px-6 py-4">Immediate E-filing</td>
                                                        <td className="px-6 py-4">Section 18, Indian Trade Marks Act 1999</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">2. Indian IPO Handling</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form MM2(E)</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;2,000 Handling Fee</td>
                                                        <td className="px-6 py-4">1–2 Months</td>
                                                        <td className="px-6 py-4">Rule 67, Trade Marks Rules 2017</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">3. WIPO Basic Fee</td>
                                                        <td className="px-6 py-4">WIPO Schedule</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">653 CHF (B&amp;W) / 903 CHF (Color)</td>
                                                        <td className="px-6 py-4">2–3 Months</td>
                                                        <td className="px-6 py-4">Rule 14, Common Regulations under Madrid</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">4. Designation Fees</td>
                                                        <td className="px-6 py-4">MM2(E) Annex</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">Variable by country (100–850 CHF)</td>
                                                        <td className="px-6 py-4">Paid at filing</td>
                                                        <td className="px-6 py-4">Article 8(7), Madrid Protocol Individual Tariffs</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">5. Foreign Examination</td>
                                                        <td className="px-6 py-4">National Dockets</td>
                                                        <td className="px-6 py-4">Covered by designation fee</td>
                                                        <td className="px-6 py-4">12–18 Months</td>
                                                        <td className="px-6 py-4">Article 5(2), Madrid Protocol Statutory Window</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">6. Provisional Refusal Defense</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Local Office Reply</td>
                                                        <td className="px-6 py-4">Foreign attorney professional fees</td>
                                                        <td className="px-6 py-4">Within 30–90 Days</td>
                                                        <td className="px-6 py-4">Domestic patent/trademark laws of target nation</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">7. Decennial Renewal</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form MM11</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">653 CHF basic + country renewal fees</td>
                                                        <td className="px-6 py-4">Every 10 Years</td>
                                                        <td className="px-6 py-4">Article 7, Madrid Protocol Unified Maintenance</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 6: CENTRAL ATTACK */}
                                    <section id="central-attack" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Central Attack Doctrine and Legal Defense Strategies
                                        </h3>
                                        <p className="mb-6">The single most critical legal nuance of the Madrid Protocol is the<strong>Five-Year Dependency Rule</strong>, colloquially known in international intellectual property law as the<em>Central Attack</em>.</p>
                                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                                            <h4 className="text-lg font-bold text-red-900 mb-2">The Central Attack Mechanism (Article 6)</h4>
                                            <p className="text-sm text-red-800 leading-relaxed m-0">For exactly 5 years from its international registration date, the international registration remains legally tethered to the fate of the basic Indian mark. If the Indian application is abandoned, refused by the examiner under Section 9/11, revoked after opposition, or withdrawn by the applicant within this 5-year window, the international registration is automatically cancelled in<strong>all designated countries</strong>to the exact same extent.</p>
                                        </div>
                                        <p className="mb-6">A predatory competitor in the United States or Europe can defeat your international protection across the globe simply by hiring an Indian counsel to oppose or invalidate your domestic Indian base application. Once the domestic trunk is severed, all foreign international branches immediately fall.</p>
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">Strategic Safeguards Against Central Attack</h4>
                                        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                                            <li><strong>Anchor on a Registered Mark:</strong>Whenever feasible, base your Madrid application on a fully registered Indian trademark that has already survived opposition and examination, rather than a vulnerable pending application.</li>
                                            <li><strong>File a Separate International Base Application:</strong>If your commercial Indian mark faces opposition, file a fresh, narrowly tailored Indian application specifically formulated for international transmission.</li>
                                            <li><strong>Invoke Transformation (Article 9quinquies):</strong>If your Indian base mark suffers cancellation, the Madrid Protocol provides a vital emergency remedy called<em>Transformation</em>. Within<strong>3 months</strong>of cancellation, you can transform your international registration into independent national applications in each designated country. You preserve your original international registration date and convention priority. This prevents total loss of rights.</li>
                                        </ul>
                                    </section>

                                    {/* SECTION 7: COMMON PITFALLS */}
                                    <section id="common-pitfalls" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Common International Trademark Pitfalls
                                        </h3>
                                        <p className="mb-6">Cross-border intellectual property filings involve diverse domestic legal traditions, varying examination standards, and strict statutory timelines. Avoiding these common procedural errors saves months of delays and thousands of dollars in foreign counsel costs.</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">1. Overly Broad Specifications of Goods</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">While the Indian Trade Marks Registry accepts broad class headings, foreign offices—most notably the United States Patent and Trademark Office (USPTO)—reject indefinite descriptions such as &ldquo;computer software&rdquo. Or &ldquo;consulting services&rdquo;. The USPTO requires explicit identification of software functionality and commercial purpose, triggering automatic provisional refusals.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">2. Ignoring Local Language Translations and Transliterations</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">A mark that sounds distinctive and catchy in English may translate into an offensive, generic, or descriptive term in target markets like Germany, Spain, or China. Failing to conduct cross-linguistic phonetic and semantic clearance often results in immediate public policy or descriptiveness refusals abroad.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">3. Missing Provisional Refusal Statutory Response Windows</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">When a foreign office issues an objection, WIPO forwards the notification to the Indian applicant. In many countries (such as the UK, Japan, and the US), the deadline to respond is non-extendable (often between 30 and 90 days). Failing to instruct local counsel before the deadline results in total abandonment of your mark in that territory.</p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">4. Forgetting United States Intention-to-Use Declarations (MM18)</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Whenever designating the United States in Form MM2(E), applicants must mandatorily complete and execute<strong>Form MM18</strong>(Declaration of Intention to Use the Mark in Commerce). Omitting Form MM18 or signing it without proper officer authority causes WIPO and the USPTO to invalidate the US designation immediately.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            International Trademark Filing Checklist
                                        </h3>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Conduct Multi-Jurisdictional Clearance:</strong>Search the WIPO Global Brand Database, TMview, and USPTO databases to verify availability in all export territories.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Establish Indian Base Application:</strong>File Form TM-A with the Indian Registry to secure a home application number and establish your priority anchor.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Claim 6-Month Paris Priority:</strong>Submit your international application within 6 months of the Indian filing date to backdate priority worldwide.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Verify Strict Correspondence:</strong>Ensure applicant legal name, entity type, address, and mark artwork match your Indian base filing with 100% precision.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Complete Form MM2(E) on IP India Gateway:</strong>Select target contracting parties, attach MM18 if designating the US, and remit the &#8377;2,000 certification fee.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Settle WIPO Fees in Swiss Francs (CHF):</strong>Pay the basic administrative fee and designated country fees directly through WIPO&apos;s e-Payment gateway.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Monitor 12-18 Month Examination Windows:</strong>Track national dockets via WIPO Madrid Monitor and instruct overseas counsel immediately if provisional refusals arise.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 9: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[rgb(110,94,147)]">
                                            Frequently Asked Questions
                                        </h3>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h4>
                                                    <p className="text-gray-600 pl-10 m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 10: FINAL STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Final Strategic Advice for Global Brand Protection
                                        </h3>
                                        <p className="mb-6">In today&apos;s hyper-connected digital economy, software solutions, direct-to-consumer goods, and industrial brands cross international borders almost instantaneously. Delaying your international trademark registration until you achieve substantial sales in a foreign territory exposes your brand to predatory squatters and expensive trademark litigation.</p>
                                        <p className="mb-6">By coordinating your domestic Indian trademark filing with the Madrid Protocol&apos;s 6-month convention priority window, you establish an impenetrable global perimeter around your brand name, logos, and commercial reputation. For complex jurisdictions or non-Madrid nations, a blended strategy combining Madrid filings with direct national applications ensures robust, cost-effective coverage.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Global Brand Protection
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand Across 130+ Countries
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Partner with experienced international trademark attorneys to manage your end-to-end global IP portfolio. From multi-country clearance searches and Form MM2(E) filing to provisional refusal defense.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Start International Registration</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">WIPO Madrid Specialists • Direct Network in 130+ Nations • Complete Portfolio Management</p>
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h4>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Trademark Research Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in preliminary trademark clearance, cross-border brand protection, and Madrid Protocol filings. He assists Indian businesses in navigating international trademark law with legal clarity.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-xl font-black mb-4 relative z-10 leading-tight">Global TM Filing</h4>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Secure your brand across the USA, EU, UK, UAE, and 130+ countries through the Madrid System.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        E-File Form MM2(E)
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h4 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/how-to-file-international-trademark-madrid-protocol-from-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGlobe} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Madrid System Guide</span></Link></li>
                                    <li><Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faListUl} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Indian TM Steps</span></Link></li>
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li>
                                    <li><Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Objection Guide</span></Link></li>
                                    <li><Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">AI Search Tool</span></Link></li>
                                    <li><Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Guide</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
