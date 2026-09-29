import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLayerGroup,
    faScaleBalanced,
    faMoneyBillWave,
    faTags,
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
    faTable,
    faArrowRight,
    faReceipt,
    faBoxesStacked
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Series Trademark India: Section 15 Filing Fees Guide",
    description: validateAndNormalizeDescription(
        "Learn how series trademark applications under Section 15 save filing fees in India. Master eligibility criteria, variant rules, and TM-A steps.",
        "app/series-trademark-application-in-india-section-15/page.tsx"
    ),
    keywords: [
        "series trademark application in india section 15",
        "what is a series trademark ip india",
        "how to register series of trademarks to save fees",
        "section 15 trade marks act 1999 examples",
        "series mark vs multi class trademark",
        "rule 25 trade marks rules 2017 series application",
        "series trademark government fee savings india",
        "division of series trademark application form tm m",
        "associated trademarks section 16 series marks",
        "trademark packaging flavour size variants india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/series-trademark-application-in-india-section-15",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Series Trademark India: Section 15 Filing Fees Guide",
        description: "Learn how series trademark applications under Section 15 save filing fees in India. Master eligibility criteria, variant rules, and TM-A steps.",
        url: "https://www.iprkaro.com/series-trademark-application-in-india-section-15",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/series-trademark-application-in-india-section-15.png",
                width: 1200,
                height: 630,
                alt: "Series Trademark Application in India Section 15 Guide to Save Government Filing Fees",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Series Trademark India: Section 15 Filing Fees Guide",
        description: "Learn how series trademark applications under Section 15 save filing fees in India. Master eligibility criteria, variant rules, and TM-A steps.",
        images: ["https://www.iprkaro.com/images/og/series-trademark-application-in-india-section-15.png"],
    }
};

const faqs = [
    {
        question: "What is a Series Trademark under Section 15 of the Trade Marks Act, 1999?",
        answer: "A Series Trademark allows an applicant to register multiple variations of a brand under a single trademark registration application. Under Section 15(3), the marks in the series must share the same material distinctive core and relate to the same or similar goods/services within the same class, differing only in non-distinctive elements such as color, size, price, quantity, flavor, destination, or geographic location."
    },
    {
        question: "How does filing a Series Trademark save government filing fees in India?",
        answer: "Instead of filing 5 separate trademark applications at ₹4,500 each (for MSME/Startup) totaling ₹22,500, or ₹9,000 each (for Large Enterprises) totaling ₹45,000 in official fees, a Series Trademark Application bundles all eligible variants into one single application on Form TM-A with only one standard official filing fee (₹4,500 for MSME/Individual or ₹9,000 for Others), delivering up to 80% direct savings in government fees."
    },
    {
        question: "What variations are legally permissible within a Series Trademark?",
        answer: "Under Section 15(3) of the Trade Marks Act, permissible differences are strictly non-distinctive: (1) Statements of goods or services, (2) Statements of number, price, or quality, (3) Geographic names or places of destination, (4) Colour combinations or monochrome variations, and (5) Other non-distinctive descriptors (such as packaging sizes, flavours like 'Vanilla' / 'Chocolate', or product formats like 'Gold' / 'Silver')."
    },
    {
        question: "Can a Series Trademark application cover goods across multiple classes?",
        answer: "No. A Series Trademark Application under Section 15 and Rule 25 must strictly belong to a single trademark class. All variant representations within the series must cover the same or similar goods or services classified under that single Nice classification. If you require multi-class protection, you must file a separate multi-class application or individual class series filings."
    },
    {
        question: "Are series trademarks automatically treated as associated trademarks?",
        answer: "Yes. Under Section 15(4) of the Trade Marks Act, 1999, all trademarks registered as a series in one registration are deemed to be, and are statutorily treated as, associated trademarks under Section 16. This means they cannot be assigned or transferred separately to different proprietors; the entire series must be assigned together as a bundle."
    },
    {
        question: "What happens if the Registrar objects to one mark in a Series Trademark application?",
        answer: "If the Trade Marks Registry raises an objection against one particular variant within a series (e.g., citing a conflicting third-party mark for one colour or flavor name), the applicant has two options: (1) Delete the objectionable variant from the series by filing Form TM-M, allowing the remaining series marks to proceed to registration; or (2) Apply to divide the series application under Rule 25(2) into separate standalone applications."
    },
    {
        question: "Can different brand names or distinctive words be registered as a series?",
        answer: "No. The primary statutory requirement under Section 15(3) is that all marks must resemble each other in their material particulars. If two marks have distinct verbal elements (e.g., 'Aura Luxe' and 'Nova Luxe') or substantially different graphic logos, they do not qualify as a series and will be rejected by the Registrar during examination."
    },
    {
        question: "How do you maintain and renew a Series Trademark registration after 10 years?",
        answer: "A Series Trademark registration is renewed as a single registration certificate on Form TM-R every 10 years under Section 25. The applicant pays the standard single-class renewal fee (₹9,000 standard e-filing fee), renewing the entire bundle of series marks simultaneously without paying recurring renewal fees for each variant."
    }
];

const tocSections = [
    { id: "overview", title: "Overview of Series TM Filing" },
    { id: "statutory-framework-section-15", title: "Section 15 Statutory Framework" },
    { id: "eligibility-criteria", title: "Eligibility Criteria for Series Marks" },
    { id: "permissible-variations", title: "Permissible Non-Distinctive Variations" },
    { id: "prohibited-differences", title: "Prohibited Differences in Series Marks" },
    { id: "cost-savings-analysis", title: "Filing Cost Savings: Series vs Separate" },
    { id: "step-by-step-filing", title: "Step-by-Step Form TM-A Series Filing" },
    { id: "examination-division-rules", title: "Series Examination & Division Process" },
    { id: "series-vs-associated-multiclass", title: "Series vs Associated vs Multi-Class" },
    { id: "commercial-use-cases", title: "Commercial Brand Case Studies" },
    { id: "strategic-portfolio-checklist", title: "Series Filing Strategic Checklist" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "strategic-brand-advice", title: "Strategic Brand Portfolio Advice" },
];

export default function SeriesTrademarkApplicationPage() {
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
        "headline": "Series Trademark Application in India: Section 15 Guide to Save Government Filing Fees",
        "description": "Learn how series trademark applications under Section 15 save filing fees in India. Master eligibility criteria, variant rules, and TM-A steps.",
        "image": "https://www.iprkaro.com/images/og/series-trademark-application-in-india-section-15.png",
        "datePublished": "2026-09-28T09:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/series-trademark-application-in-india-section-15"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Series Trademark India: Section 15 Filing Fees Guide",
        "url": "https://www.iprkaro.com/series-trademark-application-in-india-section-15",
        "description": "Learn how series trademark applications under Section 15 save filing fees in India. Master eligibility criteria, variant rules, and TM-A steps.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/series-trademark-application-in-india-section-15#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/series-trademark-application-in-india-section-15#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Series Trademark Section 15 Guide", "item": "https://www.iprkaro.com/series-trademark-application-in-india-section-15" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Series Trademark Application Protocol under Section 15",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Audit Brand Portfolio to Identify Common Material Distinctive Core" },
            { "@type": "ListItem", "position": 2, "name": "Confirm Variations are Strictly Non-Distinctive (Color, Size, Flavour, Destination)" },
            { "@type": "ListItem", "position": 3, "name": "Verify Goods or Services Fall Within a Single Trademark Class" },
            { "@type": "ListItem", "position": 4, "name": "Draft Consolidated Form TM-A with Series Mark Representation Grid" },
            { "@type": "ListItem", "position": 5, "name": "Submit Single Official Government Filing Fee (₹4,500 / ₹9,000)" },
            { "@type": "ListItem", "position": 6, "name": "Undergo Registry Examination and Respond to Any Variant Discrepancies" },
            { "@type": "ListItem", "position": 7, "name": "Obtain Unified Series Trademark Certificate with Automatic Section 16 Association" }
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
                                <FontAwesomeIcon icon={faLayerGroup} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Advanced Portfolio Filing &amp; Cost Optimization</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Series Trademark Application in India: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Section 15 Guide to Save Government Filing Fees</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Launching product lines with multiple flavors, colorways, sizes, or geographic variations often forces enterprises to spend lakhs in separate trademark filing fees. Under <strong>Section 15 of the Trade Marks Act, 1999</strong> and <strong>Rule 25 of the Trade Marks Rules, 2017</strong>, businesses can consolidate an entire family of closely resembling marks into a <strong>single Series Trademark Application</strong> on Form TM-A—slashing official government fees by up to 80% while securing comprehensive nationwide protection.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 14 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Verified IP Practice</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Series Trademark on Form TM-A <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-purple-400" />
                                    Consult Series TM Specialist: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/series-trademark-application-in-india-section-15.png"
                                    alt="Series Trademark Application in India Section 15 Guide to Save Government Filing Fees"
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
                        { label: "Series Trademark Section 15 Guide", href: "/series-trademark-application-in-india-section-15" }
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
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation ({tocSections.length} Sections)</span>
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
                                            <FontAwesomeIcon icon={faLayerGroup} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Series Trademark Filing
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                A Series Trademark Application under Section 15 of the Trade Marks Act, 1999 enables a brand owner to register a group of marks sharing an identical material distinctive core in one single application on Form TM-A. To qualify, the marks must belong to the same class and differ only in non-distinctive particulars such as color, size, price, quality, flavor, or destination statements. By filing a series application, businesses pay a single official filing fee (₹4,500 for MSMEs/Startups, ₹9,000 for Large Enterprises) for all variants, saving up to 80% in government fees compared to filing multiple standalone applications.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Modern consumer brands rarely sell a single, static product. A beverage company launches variants like &ldquo;Brand Mango&rdquo;, &ldquo;Brand Lemon&rdquo;, and &ldquo;Brand Berry&rdquo;; a cosmetic line markets &ldquo;Glow Velvet 50ml&rdquo; and &ldquo;Glow Velvet 100ml&rdquo; in pink, gold, and bronze packaging; an apparel label designs its core monogram across red, blue, and black labels.
                                        </p>
                                        <p className="mb-6">
                                            Filing individual trademark applications for every variant creates immense administrative overhead and costs tens of thousands in official fees. <strong>Section 15(3) of the Trade Marks Act, 1999</strong> and <strong>Rule 25 of the Trade Marks Rules, 2017</strong> provide an elegant statutory solution: the <strong>Series Trademark Registration</strong>.
                                        </p>
                                        <p className="mb-6">
                                            Understanding how to structure a series application allows brand owners to maximize legal protection across entire product families. Learn how series filing contrasts with other portfolio strategies in our guides on <Link href="/single-class-vs-multi-class-trademark-application-india" className="text-[rgb(110,94,147)] hover:underline font-medium">single vs multi-class trademark filing</Link>, <Link href="/what-is-associated-trademark-in-india-section-16" className="text-[rgb(110,94,147)] hover:underline font-medium">associated trademarks under Section 16</Link>, and <Link href="/trade-dress-protection-under-indian-trademark-law" className="text-[rgb(110,94,147)] hover:underline font-medium">trade dress packaging protection</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 2: SECTION 15 STATUTORY FRAMEWORK */}
                                    <section id="statutory-framework-section-15" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 15 Statutory Framework
                                        </h2>
                                        <p className="mb-6">
                                            Section 15 of the Trade Marks Act, 1999 governs both the registration of parts of trademarks and the registration of trademarks as a series. The specific statutory provisions governing series marks are:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-sm font-bold text-gray-900 mb-1">Section 15(3): The Series Definition &amp; Scope</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0 italic">
                                                    &ldquo;Where a person claiming to be the proprietor of several trade marks in respect of the same or similar goods or services, which, while resembling each other in the material particulars thereof, yet differ in respect of—<br/>
                                                    (a) statements of the goods or services in relation to which they are respectively used or proposed to be used; or<br/>
                                                    (b) statements of number, price, quality or names of places; or<br/>
                                                    (c) other matter of a non-distinctive character which does not substantially affect the identity of the trade mark; or<br/>
                                                    (d) colour;<br/>
                                                    seeks to register them, they may be registered as a series in one registration.&rdquo;
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-sm font-bold text-gray-900 mb-1">Section 15(4): Deemed Association</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0 italic">
                                                    &ldquo;All trade marks so registered as a series in one registration shall be deemed to be, and shall be treated as, associated trade marks.&rdquo;
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            This statutory wording creates a clear legal requirement: every mark in the series must share the same <strong>dominant distinctive identifier</strong>, differing solely in auxiliary, non-distinctive descriptive elements.
                                        </p>
                                    </section>

                                    {/* SECTION 3: ELIGIBILITY CRITERIA FOR SERIES MARKS */}
                                    <section id="eligibility-criteria" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Eligibility Criteria for Series Marks
                                        </h2>
                                        <p className="mb-6">
                                            To successfully secure registration of a series of trademarks before the Indian Trade Marks Registry, the application must satisfy four mandatory statutory tests:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-2 text-[#6E5E93] font-bold mb-2">
                                                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-xs font-bold">1</span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Identical Material Particulars</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    The primary distinctive word, logo, or figurative device must be identical across all marks in the series. The core identifier that creates brand recall cannot change between variants.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-2 text-[#6E5E93] font-bold mb-2">
                                                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-xs font-bold">2</span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Single Trademark Class</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    All goods or services covered by the series must fall strictly under a single trademark class (e.g., Class 30 for confectioneries, Class 3 for cosmetics, Class 25 for apparel). Multi-class series applications are impermissible.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-2 text-[#6E5E93] font-bold mb-2">
                                                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-xs font-bold">3</span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Non-Distinctive Differences</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    The variations must be limited to descriptive elements—such as flavor names, packaging sizes, colors, grades, or geographical locations—that do not alter the commercial identity of the mark.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center space-x-2 text-[#6E5E93] font-bold mb-2">
                                                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-xs font-bold">4</span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Common Proprietary Ownership</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    All marks in the series must be owned by the exact same legal entity (proprietor, company, or partnership firm). Co-applicants cannot file separate marks under one series.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: PERMISSIBLE NON-DISTINCTIVE VARIATIONS */}
                                    <section id="permissible-variations" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTags} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Permissible Non-Distinctive Variations
                                        </h2>
                                        <p className="mb-6">
                                            Section 15(3) specifically lists the types of differences allowed between marks in a series application. The table below details real-world commercial examples:
                                        </p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 text-left text-xs md:text-sm">
                                                <thead className="bg-gray-100 text-gray-900 font-bold uppercase tracking-wider">
                                                    <tr>
                                                        <th className="py-3 px-4">Statutory Category</th>
                                                        <th className="py-3 px-4">Permissible Variation</th>
                                                        <th className="py-3 px-4">Commercial Example</th>
                                                        <th className="py-3 px-4">Class</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white text-gray-700">
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Statements of Goods / Flavours</td>
                                                        <td className="py-3.5 px-4">Different flavour or ingredient descriptors</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">&ldquo;NUTRIBAR Almond&rdquo;, &ldquo;NUTRIBAR Berry&rdquo;, &ldquo;NUTRIBAR Chocolate&rdquo;</td>
                                                        <td className="py-3.5 px-4">Class 30</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Statements of Number / Size</td>
                                                        <td className="py-3.5 px-4">Quantities, volume, weight, or unit numbers</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">&ldquo;AQUA PURA 500ml&rdquo;, &ldquo;AQUA PURA 1 Litre&rdquo;, &ldquo;AQUA PURA 5 Litre&rdquo;</td>
                                                        <td className="py-3.5 px-4">Class 32</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Statements of Quality / Grade</td>
                                                        <td className="py-3.5 px-4">Quality markers (Gold, Silver, Premium, Eco)</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">&ldquo;TEXO Gold&rdquo;, &ldquo;TEXO Silver&rdquo;, &ldquo;TEXO Platinum&rdquo;</td>
                                                        <td className="py-3.5 px-4">Class 24</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Names of Places / Destination</td>
                                                        <td className="py-3.5 px-4">Geographical branch or destination names</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">&ldquo;GRAND STAY Delhi&rdquo;, &ldquo;GRAND STAY Mumbai&rdquo;, &ldquo;GRAND STAY Goa&rdquo;</td>
                                                        <td className="py-3.5 px-4">Class 43</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Colour Variations</td>
                                                        <td className="py-3.5 px-4">Identical logo rendered in different color schemes</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">Monogram in Red/White, Blue/White, and Black/Gold</td>
                                                        <td className="py-3.5 px-4">Class 25</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 5: PROHIBITED DIFFERENCES IN SERIES MARKS */}
                                    <section id="prohibited-differences" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Prohibited Differences in Series Marks
                                        </h2>
                                        <p className="mb-6">
                                            The Trade Marks Registry strictly rejects series applications where the differences are substantive, distinctive, or alter consumer perception. Prohibited differences include:
                                        </p>

                                        <div className="bg-red-50/60 p-6 rounded-2xl border border-red-200 space-y-4 not-prose my-8">
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faBan} className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-red-950 m-0">Different Distinctive Words</h3>
                                                    <p className="text-xs text-gray-700 m-0 mt-0.5">Attempting to bundle &ldquo;ROYAL FEAST&rdquo; and &ldquo;REGAL FEAST&rdquo; under one application is prohibited because &ldquo;ROYAL&rdquo; and &ldquo;REGAL&rdquo; are distinct verbal words.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faBan} className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-red-950 m-0">Substantially Different Graphic Devices or Logos</h3>
                                                    <p className="text-xs text-gray-700 m-0 mt-0.5">Using a Lion emblem in Mark A and an Eagle emblem in Mark B with the same wordmark creates visual divergence that destroys series eligibility.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faBan} className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-red-950 m-0">Different Trademark Classes</h3>
                                                    <p className="text-xs text-gray-700 m-0 mt-0.5">A single series application cannot protect biscuits in Class 30 and fruit juices in Class 32. Each class requires an independent series application.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faBan} className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-red-950 m-0">Invented Sub-Brands with Independent Distinctiveness</h3>
                                                    <p className="text-xs text-gray-700 m-0 mt-0.5">Adding coined distinctive words like &ldquo;ZYPHER&rdquo; or &ldquo;NEXUS&rdquo; to the main mark creates independent sub-brands that must be registered separately.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: FILING COST SAVINGS: SERIES VS SEPARATE */}
                                    <section id="cost-savings-analysis" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Filing Cost Savings: Series vs Separate
                                        </h2>
                                        <p className="mb-6">
                                            The financial benefits of utilizing Section 15 series applications are dramatic. Under the Trade Marks Rules, 2017, the official filing fee for a series trademark on Form TM-A is identical to the fee for a standard single application, regardless of whether you include 3, 5, or 8 variants.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faReceipt} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    For Startups &amp; MSMEs (5 Product Variants)
                                                </h3>
                                                <div className="space-y-3 text-xs text-gray-700">
                                                    <div className="flex justify-between pb-2 border-b border-purple-200">
                                                        <span>5 Standalone Applications (5 × ₹4,500):</span>
                                                        <span className="font-bold text-red-600">₹22,500</span>
                                                    </div>
                                                    <div className="flex justify-between pb-2 border-b border-purple-200">
                                                        <span>1 Series Application (5 Variants):</span>
                                                        <span className="font-bold text-emerald-700">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between pt-1 font-bold text-sm text-[#6E5E93]">
                                                        <span>Total Official Fee Savings:</span>
                                                        <span className="text-emerald-800">₹18,000 (80% Saved)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center">
                                                    <FontAwesomeIcon icon={faBoxesStacked} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    For Large Enterprises (6 Product Variants)
                                                </h3>
                                                <div className="space-y-3 text-xs text-gray-700">
                                                    <div className="flex justify-between pb-2 border-b border-purple-200">
                                                        <span>6 Standalone Applications (6 × ₹9,000):</span>
                                                        <span className="font-bold text-red-600">₹54,000</span>
                                                    </div>
                                                    <div className="flex justify-between pb-2 border-b border-purple-200">
                                                        <span>1 Series Application (6 Variants):</span>
                                                        <span className="font-bold text-emerald-700">₹9,000</span>
                                                    </div>
                                                    <div className="flex justify-between pt-1 font-bold text-sm text-[#6E5E93]">
                                                        <span>Total Official Fee Savings:</span>
                                                        <span className="text-emerald-800">₹45,000 (83% Saved)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-700">
                                            Learn how to claim MSME government fee concessions in our comprehensive guide on <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark fee concessions for Udyam and Startups</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 7: STEP-BY-STEP FORM TM-A SERIES FILING */}
                                    <section id="step-by-step-filing" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Form TM-A Series Filing
                                        </h2>
                                        <p className="mb-6">
                                            Under <strong>Rule 25 of the Trade Marks Rules, 2017</strong>, filing a series application requires specific formatting on Form TM-A. Follow this 6-step protocol:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">1</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 1: Conduct Comprehensive Clearance Search</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Perform clearance searches on the core wordmark and all variant names using our <Link href="/free-ai-powered-trademark-search" className="text-[#6E5E93] font-bold underline">free AI trademark search tool</Link> to ensure no conflicting registrations exist.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">2</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 2: Prepare Consolidated Representation Sheet</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Under Rule 25(1), prepare a visual representation document displaying each mark in the series clearly in a sequential grid or numbered list.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">3</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 3: Select &ldquo;Series Trade Mark&rdquo; on Form TM-A</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">In the IP India e-filing gateway, open Form TM-A, select standard filing, and check the checkbox designated for &ldquo;Series Application under Section 15(3)&rdquo;.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">4</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 4: Draft Consolidated Goods &amp; Services Description</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Define the specification of goods/services accurately under the relevant class, reflecting the scope of all variants in the series.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">5</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 5: Execute User Affidavit (If Claiming Prior Use)</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">If the series marks have been used in commerce prior to filing, attach a <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[#6E5E93] font-bold underline">User Affidavit under Rule 25</Link> evidencing commercial usage of the series.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                                                <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">6</span>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Step 6: Pay Government Fee &amp; Generate CBR</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-1">Submit the single class official fee and generate your permanent Application Number and Central Book Receipt (CBR).</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: SERIES EXAMINATION & DIVISION PROCESS */}
                                    <section id="examination-division-rules" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Series Examination &amp; Division Process
                                        </h2>
                                        <p className="mb-6">
                                            During substantive examination, the Examiner evaluates the entire series as a unit while assessing each individual variant for registrability under Sections 9 and 11.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2"></span>
                                                    Scenario A: Variant Objection Cured via Deletion
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    If the Examiner objects to Mark 3 (e.g., &ldquo;Brand Gold&rdquo;) due to a cited prior mark, the applicant can file <strong>Form TM-M</strong> to delete &ldquo;Brand Gold&rdquo; from the series. The remaining marks (&ldquo;Brand Silver&rdquo;, &ldquo;Brand Bronze&rdquo;) then proceed smoothly to journal advertisement.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-purple-600 rounded-full mr-2"></span>
                                                    Scenario B: Division of Series Application
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Under <strong>Rule 25(2)</strong>, the applicant may apply to the Registrar on Form TM-M to divide the series application into independent individual applications. The divided marks retain the original filing priority date upon payment of applicable division fees.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: SERIES VS ASSOCIATED VS MULTI-CLASS */}
                                    <section id="series-vs-associated-multiclass" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBoxesStacked} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Series vs Associated vs Multi-Class
                                        </h2>
                                        <p className="mb-6">
                                            Brand proprietors frequently confuse Series Trademarks with Associated Trademarks and Multi-Class Applications. Here is the definitive legal comparison:
                                        </p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 text-left text-xs md:text-sm">
                                                <thead className="bg-gray-100 text-gray-900 font-bold uppercase tracking-wider">
                                                    <tr>
                                                        <th className="py-3 px-4">Feature</th>
                                                        <th className="py-3 px-4">Series Trademark (Sec. 15)</th>
                                                        <th className="py-3 px-4">Associated TM (Sec. 16)</th>
                                                        <th className="py-3 px-4">Multi-Class TM (Sec. 18(2))</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white text-gray-700">
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Application Form</td>
                                                        <td className="py-3.5 px-4 font-semibold text-purple-900">Single Form TM-A</td>
                                                        <td className="py-3.5 px-4">Separate Form TM-As</td>
                                                        <td className="py-3.5 px-4">Single Form TM-A</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Government Fee</td>
                                                        <td className="py-3.5 px-4 font-bold text-emerald-700">Single Class Fee Only</td>
                                                        <td className="py-3.5 px-4">Fee for Each Mark</td>
                                                        <td className="py-3.5 px-4">Multiplied by No. of Classes</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Class Scope</td>
                                                        <td className="py-3.5 px-4 font-bold text-red-600">Strictly 1 Class</td>
                                                        <td className="py-3.5 px-4">Same or Different Classes</td>
                                                        <td className="py-3.5 px-4">Multiple Classes (1-45)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="py-3.5 px-4 font-bold text-gray-900">Assignment Scope</td>
                                                        <td className="py-3.5 px-4">Must be Assigned Together</td>
                                                        <td className="py-3.5 px-4">Must be Assigned Together</td>
                                                        <td className="py-3.5 px-4">Can be Assigned or Divided</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: REAL-WORLD COMMERCIAL FILING EXAMPLES */}
                                    <section id="commercial-use-cases" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBoxOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Commercial Brand Case Studies
                                        </h2>
                                        <p className="mb-6">
                                            Examine how top industries deploy Section 15 Series Trademark applications to establish impenetrable brand monopolies:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. D2C FMCG &amp; Packaged Foods</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    A snack manufacturer filed a series application for &ldquo;CRUNCHY BITES Peri Peri&rdquo;, &ldquo;CRUNCHY BITES Sour Cream&rdquo;, &ldquo;CRUNCHY BITES Salted&rdquo;, and &ldquo;CRUNCHY BITES Wasabi&rdquo; in Class 30. The common material distinctive core &ldquo;CRUNCHY BITES&rdquo; combined with non-distinctive seasoning descriptors secured 4 variant monopolies for a single ₹4,500 government fee.
                                                </p>
                                            </div>

                                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Hospitality &amp; Hotel Chains</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    A boutique resort brand filed a series application in Class 43 for &ldquo;HERITAGE HAVEN Jaipur&rdquo;, &ldquo;HERITAGE HAVEN Udaipur&rdquo;, &ldquo;HERITAGE HAVEN Jodhpur&rdquo;, and &ldquo;HERITAGE HAVEN Varanasi&rdquo;, safeguarding its city expansions under one registration certificate.
                                                </p>
                                            </div>

                                            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Cosmetics &amp; Skincare Lines</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    A skincare brand registered its core monogram logo in three packaging colour variants (Rose Gold label, Matte Black label, Pure White label) in Class 3, preventing counterfeiters from copying specific bottle colour combinations.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: SERIES APPLICATION STRATEGIC CHECKLIST */}
                                    <section id="strategic-portfolio-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Series Application Strategic Checklist
                                        </h2>
                                        <p className="mb-6">
                                            Ensure flawless execution of your Section 15 Series Trademark Application with this pre-filing compliance checklist:
                                        </p>

                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4 not-prose my-8">
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Verify Identity of Material Particulars</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Ensure the dominant wordmark, font styling, and logo structure are 100% identical across all variant representations.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Confirm All Goods Belong to One Class</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Never mix classes in a series application. Audit your goods list to ensure every variant operates under the exact same class number.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Confirm Differences are Purely Non-Distinctive</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Ensure variation text consists only of descriptive terms (flavors, numbers, weights, colors, places) without secondary coined words.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 m-0">Maintain Unified Portfolio Assignment Records</h3>
                                                    <p className="text-xs text-gray-600 m-0 mt-0.5">Remember that Section 15(4) creates mandatory association. If you ever license or assign your brand via a <Link href="/trademark-assignment-vs-licensing-in-india" className="text-[#6E5E93] font-bold underline">trademark assignment agreement</Link>, the entire series must be transferred together.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 12: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h2>
                                        <p className="mb-6">
                                            Explore expert answers to the most frequent questions regarding Section 15 Series Trademark applications in India:
                                        </p>

                                        <div className="space-y-4 not-prose my-8">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                    <h3 className="text-base font-bold text-gray-900 mb-2">
                                                        {index + 1}. {faq.question}
                                                    </h3>
                                                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed m-0">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 13: STRATEGIC BRAND PORTFOLIO ADVICE */}
                                    <section id="strategic-brand-advice" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Strategic Brand Portfolio Advice
                                        </h2>
                                        <p className="mb-6">
                                            Series Trademark filing under Section 15 is one of the most powerful, under-utilized cost-saving tools in Indian intellectual property law. When structured correctly by experienced trademark attorneys, a single application provides total defensive protection across all SKU variants without inflating your legal budget.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, our registered trademark attorneys audit your complete product lineup, design eligible series representation sheets, and ensure seamless Form TM-A prosecution before the Trade Marks Registry.
                                        </p>

                                        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#0C002B] via-[#1A0B3B] to-[#2E1065] p-8 text-white shadow-2xl relative overflow-hidden not-prose">
                                            <div className="relative z-10 text-center max-w-2xl mx-auto">
                                                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
                                                    Ready to Protect Your Product Lineup &amp; Save 80%?
                                                </h3>
                                                <p className="text-sm text-purple-100/90 leading-relaxed mb-8">
                                                    Consult with our senior trademark attorneys to evaluate your product variants for Section 15 Series filing and secure unified brand protection across India.
                                                </p>
                                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                                    <Link
                                                        href="/contact-us"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-white px-8 text-base font-bold text-[#0C002B] shadow-lg transition-all duration-300 hover:bg-gray-100 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>File Series Trademark Now</span>
                                                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 text-[#0C002B]" />
                                                    </Link>
                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>
                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Registered Trademark Attorneys • Section 15 Series Filing • Form TM-A Drafting • Pan-India Prosecution
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in corporate brand portfolio architecture, Section 15 series trademark filings, fee optimization strategies, and complex classification prosecution across India.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Save 80% on Filing Fees</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Have multiple flavours, sizes, or color variants? Register them in one Series Trademark application under Section 15.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Consult Series Specialist
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/single-class-vs-multi-class-trademark-application-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBoxesStacked} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Single vs Multi Class</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-is-associated-trademark-in-india-section-16" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faLayerGroup} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Associated Trademarks</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faMoneyBillWave} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Fee Concessions</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trade-dress-protection-under-indian-trademark-law" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Trade Dress Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Word vs Device Mark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-assignment-vs-licensing-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Assignment Rules</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">User Affidavit Format</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" />
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
