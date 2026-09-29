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
    faRocket,
    faGlobe,
    faClock,
    faRotate,
    faFont,
    faPalette,
    faLayerGroup,
    faArrowRight,
    faCartShopping,
    faGavel,
    faStamp
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Word Mark vs Device Mark India: Which Should You File First?",
    description: validateAndNormalizeDescription(
        "Word Mark vs Device Mark in India: Compare legal protections, logo vs brand name filing strategies, costs, and discover which trademark to register first.",
        "app/word-mark-vs-device-mark-trademark-india/page.tsx"
    ),
    keywords: [
        "word mark vs device mark trademark india",
        "wordmark vs logo trademark india",
        "should i register brand name or logo first",
        "combined trademark application",
        "device mark registration india",
        "word mark scope of protection",
        "vienna classification trademark india",
        "section 17 trade marks act anti dissection",
        "trademark rebranding protection"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/word-mark-vs-device-mark-trademark-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Word Mark vs Device Mark India: Which Should You File First?",
        description: "Word Mark vs Device Mark in India: Compare legal protections, logo vs brand name filing strategies, costs, and discover which trademark to register first.",
        url: "https://www.iprkaro.com/word-mark-vs-device-mark-trademark-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/word-mark-vs-device-mark-trademark-india.png",
                width: 1200,
                height: 630,
                alt: "Word Mark vs Device Mark trademark registration strategic comparison in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Word Mark vs Device Mark India: Which Should You File First?",
        description: "Word Mark vs Device Mark in India: Compare legal protections, logo vs brand name filing strategies, costs, and discover which trademark to register first.",
        images: ["https://www.iprkaro.com/images/og/word-mark-vs-device-mark-trademark-india.png"],
    }
};

const faqs = [
    {
        question: "What is the main difference between a Word Mark and a Device Mark in India?",
        answer: "A Word Mark protects the text, name, letters, or numerals of a brand in plain standard typography. This grants exclusive ownership over the wording regardless of font, size, color, or design. A Device Mark protects a specific visual representation, including stylized graphics, logos, emblems, label layouts, or unique typography. Word Marks provide broader legal protection against confusingly similar names, while Device Marks protect unique visual branding."
    },
    {
        question: "Should a startup register a Word Mark or a Device Mark first?",
        answer: "In approximately 90% of cases, startups should register a Word Mark first. A Word Mark secures the broadest legal monopoly over the core brand name. This allows the company to redesign fonts, logos, packaging, and marketing materials over time without losing statutory protection. However, if the brand name is relatively descriptive or weak, registering a distinctive Device Mark (logo) first can help overcome Section 9 objections."
    },
    {
        question: "What is the Anti-Dissection Rule under Section 17 of the Trade Marks Act?",
        answer: "Under Section 17 of the Trade Marks Act, 1999, registration of a composite trademark (containing both word and logo elements) confers exclusive rights to the trademark taken as a whole, and not separately to individual components. Unless a proprietor files a separate registration for the word mark under Section 15 or proves the word is an independently dominant feature, infringing third parties might copy the brand name without copying the exact graphic layout."
    },
    {
        question: "If I register a Word Mark, does it protect my brand in all fonts, cases, and colors?",
        answer: "Yes. When you register a standard character Word Mark with the Indian Trade Marks Registry, the legal monopoly extends to the literal word itself across all visual representations—whether written in uppercase, lowercase, serif, sans-serif, neon colors, or black-and-white. Competitors cannot use identical or phonetically similar text even if they display it in completely different fonts or graphics."
    },
    {
        question: "If I register a Device Mark (logo with text), is my brand name automatically protected?",
        answer: "Not necessarily. Registering a Device Mark protects the artistic composition and graphic layout as a single composite unit. If a competitor uses your brand name in plain text or in a different logo style, pursuing a statutory trademark infringement claim becomes legally complex under Section 17. You may be forced to rely on the higher evidentiary burden of common-law passing off."
    },
    {
        question: "How does rebranding or updating a logo affect Word Marks and Device Marks?",
        answer: "If you own a registered Word Mark, rebranding your visual identity (such as modernizing your logo or changing corporate colors) requires no new trademark filing, as the underlying name remains fully protected. Conversely, if you only registered a Device Mark and modify your logo significantly, your existing registration will not cover the new design. This requires a fresh trademark application on Form TM-A."
    },
    {
        question: "Which trademark type is best for Amazon Brand Registry enrollment in India?",
        answer: "Amazon Brand Registry accepts both Word Marks and Device Marks (with text). However, a Word Mark is strongly recommended because it seamlessly matches textual brand attributes across Amazon search algorithms, listing titles, ASIN catalogs, and backend seller identifiers. This prevents hijackers from exploiting textual variations."
    },
    {
        question: "Can I file both Word Mark and Device Mark together in a single application?",
        answer: "You can file a combined 'Composite Mark' application (submitting a graphic logo containing your brand text) under a single statutory government fee. However, doing so protects the mark strictly as a combined whole. To secure independent legal exclusivity over both the standalone brand name and the standalone logo graphic, legal practitioners advise filing two separate Form TM-A applications."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "what-is-wordmark", title: "What is a Word Mark?" },
    { id: "what-is-device-mark", title: "What is a Device Mark?" },
    { id: "comparison-table", title: "Comparison Table" },
    { id: "anti-dissection-rule", title: "Anti-Dissection Rule" },
    { id: "which-to-register-first", title: "Which to Register First?" },
    { id: "rebranding-protection", title: "Rebranding & Fonts" },
    { id: "ecommerce-amazon", title: "Amazon & E-commerce" },
    { id: "filing-roadmap", title: "4-Stage Filing Roadmap" },
    { id: "checklist", title: "Decision Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function WordMarkVsDeviceMarkPage() {
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
        "headline": "Word Mark vs Device Mark: Which Trademark Should You Register First?",
        "description": "Word Mark vs Device Mark in India: Compare legal protections, logo vs brand name filing strategies, costs, and discover which trademark to register first.",
        "image": "https://www.iprkaro.com/images/og/word-mark-vs-device-mark-trademark-india.png",
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
            "@id": "https://www.iprkaro.com/word-mark-vs-device-mark-trademark-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Word Mark vs Device Mark India: Which Should You File First?",
        "url": "https://www.iprkaro.com/word-mark-vs-device-mark-trademark-india",
        "description": "Word Mark vs Device Mark in India: Compare legal protections, logo vs brand name filing strategies, costs, and discover which trademark to register first.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/word-mark-vs-device-mark-trademark-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/word-mark-vs-device-mark-trademark-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Word Mark vs Device Mark", "item": "https://www.iprkaro.com/word-mark-vs-device-mark-trademark-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "4-Stage Trademark Filing Strategy Roadmap",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Distinctiveness and Inherent Strength Assessment" },
            { "@type": "ListItem", "position": 2, "name": "Comprehensive Textual & Vienna Code Trademark Search" },
            { "@type": "ListItem", "position": 3, "name": "Primary Form TM-A Filing (Core Word Mark or Logo)" },
            { "@type": "ListItem", "position": 4, "name": "Secondary Defensive Filings & Rebranding Docketing" }
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
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Brand Protection Strategy</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Word Mark vs Device Mark: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Which Trademark Should You Register First?</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">When protecting a commercial brand under the Trade Marks Act, 1999, founders face an important choice. Should you file for the brand name (Word Mark), the graphic logo (Device Mark), or combine both in one application? Choosing the wrong path can leave your brand unprotected against copycats. It can also trigger Section 17 legal disputes or force costly re-filings later. This guide explains the legal differences, court rulings, costs, and practical steps to maximize your brand protection in India.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 10 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Legal Tech Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Your Trademark Now <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/word-mark-vs-device-mark-trademark-india.png"
                                    alt="Word Mark vs Device Mark Trademark Registration Comparison in India"
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
                        { label: "Word Mark vs Device Mark", href: "/word-mark-vs-device-mark-trademark-india" }
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
                                <details className="group bg-gradient-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
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
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Word Marks and Device Marks
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">A Word Mark protects the textual name itself in plain typography across all fonts, sizes, and colors. This provides the broadest legal monopoly under the Trade Marks Act, 1999. A Device Mark protects a specific visual logo, stylized graphic, emblem, or label layout. In most business scenarios, founders should register a Word Mark first to secure complete naming exclusivity, followed by a Device Mark once the visual branding is finalized.</p>
                                        </div>

                                        <p className="mb-6">Under Section 2(1)(m) of the Trade Marks Act, 1999, a &ldquo;mark&rdquo; is defined comprehensively to include a<em>device, brand, heading, label, ticket, name, signature, word, letter, numeral, shape of goods, packaging or combination of colours or any combination thereof</em>. When an enterprise files Form TM-A with the Indian Trade Marks Registry, it must designate the specific category of mark being claimed.</p>
                                        <p className="mb-6">This initial classification dictates the scope of legal protection. It determines enforcement powers during infringement litigation under Section 29. It also governs the Anti-Dissection Rule under Section 17, and whether future visual redesigns require fresh registration. Understanding the legal anatomy of each mark type is vital before initiating the official<Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration process</Link>.</p>
                                    </section>

                                    {/* SECTION 2: WHAT IS A WORD MARK */}
                                    <section id="what-is-wordmark" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFont} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What is a Word Mark in Trademark Law?
                                        </h3>
                                        <p className="mb-6">A<strong>Word Mark</strong>consists exclusively of standard characters—letters, words, numbers, or standard typographical symbols—without any claim to stylized lettering, specific fonts, graphical shapes, embellishments, or colors.</p>
                                        <p className="mb-6">When you file a Word Mark on Form TM-A, the Registry records the plain string of characters. This provides the applicant with an expansive legal shield:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Font and Layout Neutrality
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Your exclusive ownership applies regardless of whether your brand name is written in Arial, Times New Roman, cursive script, bold uppercase, or lowercase typography.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faPalette} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Complete Color Independence
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Under Section 10 of the Trade Marks Act, an unconditioned Word Mark is deemed registered for all colors. This prevents rivals from simply adopting your name in alternate color palettes.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Broadest Infringement Protection
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">In an infringement suit under Section 29, you only need to demonstrate phonetic, textual, or conceptual similarity without getting bogged down by graphic differences.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faRocket} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Future-Proof Rebranding
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">You can update your visual logo, application icon, website theme, and packaging design dozens of times over 10 years without requiring a new filing.</p>
                                            </div>
                                        </div>

                                        <p className="mb-6"><strong>Iconic Real-World Examples:</strong>Global and domestic market leaders such as<em>GOOGLE</em>,<em>TATA</em>,<em>INFOSYS</em>,<em>FLIPKART</em>, and<em>NIKE</em>hold registered Word Marks. When Google refreshed its corporate typeface from serif Catull to custom sans-serif Product Sans in 2015, its underlying Word Mark registration remained completely intact.</p>
                                    </section>

                                    {/* SECTION 3: WHAT IS A DEVICE MARK */}
                                    <section id="what-is-device-mark" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faPalette} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What is a Device Mark in Trademark Law?
                                        </h3>
                                        <p className="mb-6">A<strong>Device Mark</strong>includes any visual, graphic, or artistic representation. In trademark registry parlance, device marks encompass standalone artistic logos, symbols, stylized lettering, composite labels, monograms, and geometric emblems.</p>
                                        <p className="mb-6">When a Device Mark is filed, the Registry examines it under the<strong>Vienna Classification (Vienna Agreement)</strong>, assigning specific Vienna Codes to categorize visual elements such as crowns, animals, geometric figures, human silhouettes, or celestial bodies.</p>

                                        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8">
                                            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Sub-Types of Device Marks in Indian Practice:</h4>
                                            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base m-0">
                                                <li><strong>Pure Figurative Logos:</strong>Standalone visual symbols with zero text (e.g., Apple&apos;s bitten apple silhouette, Nike&apos;s Swoosh symbol, Mercedes-Benz three-pointed star).</li>
                                                <li><strong>Stylized Typography / Word Logos:</strong>Words represented in a stylized, hand-crafted font or distinctive lettering arrangement (e.g., Coca-Cola Spencerian script, Disney cursive signature).</li>
                                                <li><strong>Composite / Combined Marks:</strong>Graphic emblems integrated together with brand text, taglines, and background geometric frames into a unified label layout.</li>
                                            </ul>
                                        </div>

                                        <p className="mb-6">Device Marks are indispensable when the graphic identity itself creates instantaneous visual recognition in the marketplace, or when a brand name has low inherent distinctiveness and requires artistic styling to pass examination under Section 9.</p>
                                    </section>

                                    {/* SECTION 4: COMPARISON TABLE */}
                                    <section id="comparison-table" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Word Mark vs Device Mark Comparison
                                        </h3>
                                        <p className="mb-6">The table below highlights the statutory, procedural, and commercial distinctions between Word Marks, Device Marks, and Composite Marks in India:</p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 bg-white text-left text-sm">
                                                <thead className="bg-gray-50 font-bold text-gray-900">
                                                    <tr>
                                                        <th className="px-5 py-4 border-b">Feature / Parameter</th>
                                                        <th className="px-5 py-4 border-b text-[#6E5E93]">Word Mark (Plain Text)</th>
                                                        <th className="px-5 py-4 border-b text-indigo-600">Device Mark (Logo / Graphic)</th>
                                                        <th className="px-5 py-4 border-b text-gray-700">Composite Mark (Word + Logo)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Scope of Legal Rights</td>
                                                        <td className="px-5 py-4">Broadest; monopolizes textual string across all styles</td>
                                                        <td className="px-5 py-4">Specific; protects visual graphics and styling</td>
                                                        <td className="px-5 py-4">Combined whole; limited standalone word protection</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Font &amp; Color Flexibility</td>
                                                        <td className="px-5 py-4 font-medium text-green-700">100% Flexible (Any font/color)</td>
                                                        <td className="px-5 py-4 text-amber-700">Restricted to visual design filed</td>
                                                        <td className="px-5 py-4 text-amber-700">Restricted to exact combined layout</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Rebranding Resilience</td>
                                                        <td className="px-5 py-4 font-medium text-green-700">Permanent; no re-filing needed</td>
                                                        <td className="px-5 py-4 text-red-600">Requires fresh Form TM-A on redesign</td>
                                                        <td className="px-5 py-4 text-red-600">Requires fresh Form TM-A on redesign</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Overcoming Sec 9 Objections</td>
                                                        <td className="px-5 py-4 text-red-600">Harder if word is weakly suggestive</td>
                                                        <td className="px-5 py-4 font-medium text-green-700">Easier due to graphical distinctiveness</td>
                                                        <td className="px-5 py-4 font-medium text-green-700">Easier due to visual styling</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Search Methodology</td>
                                                        <td className="px-5 py-4">Textual &amp; Phonetic Search</td>
                                                        <td className="px-5 py-4">Vienna Classification Search</td>
                                                        <td className="px-5 py-4">Textual + Vienna Code Search</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Amazon Brand Registry</td>
                                                        <td className="px-5 py-4 font-medium text-green-700">Optimal across all product listings</td>
                                                        <td className="px-5 py-4">Supported for stylized logos</td>
                                                        <td className="px-5 py-4">Accepted if text matches exactly</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Government Filing Cost</td>
                                                        <td className="px-5 py-4">₹4,500 (Startup/MSME) / ₹9,000</td>
                                                        <td className="px-5 py-4">₹4,500 (Startup/MSME) / ₹9,000</td>
                                                        <td className="px-5 py-4">₹4,500 (Startup/MSME) / ₹9,000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 5: ANTI-DISSECTION RULE */}
                                    <section id="anti-dissection-rule" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Anti-Dissection Rule and Section 17
                                        </h3>
                                        <p className="mb-6">Many business owners mistakenly believe that registering a combined logo containing their brand name gives them independent legal ownership over both the logo and the name. Under Indian trademark jurisprudence, this assumption is legally flawed due to the<strong>Anti-Dissection Rule</strong>codified under Section 17 of the Trade Marks Act, 1999.</p>

                                        <div className="border border-red-200 bg-red-50/60 rounded-2xl p-6 mb-8">
                                            <h4 className="text-base md:text-lg font-bold text-red-900 mb-2 flex items-center">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 text-red-600 mr-2" />
                                                Statutory Mandate: Section 17(1) &amp; (2)
                                            </h4>
                                            <p className="text-sm text-red-800 leading-relaxed mb-3"><strong>Section 17(1):</strong>When a trade mark consists of several matter, its registration shall confer on the proprietor the exclusive right to the use of the trade mark taken as a whole.</p>
                                            <p className="text-sm text-red-800 leading-relaxed m-0"><strong>Section 17(2):</strong>Subject to sub-section (1), the registration thereof shall not confer any exclusive right in the matter forming only a part of the whole of the trade mark so registered, unless separate applications are made under Section 15 for each distinct part.</p>
                                        </div>

                                        <p className="mb-6"><strong>The Judicial Principle:</strong>In seminal judgments including<em>South India Beverages Pvt. Ltd. V. General Mills Marketing Inc.</em>and<em>Cadila Healthcare Ltd. V. Cadila Pharmaceuticals Ltd.</em>, the Supreme Court and Delhi High Court affirmed that while commercial courts must evaluate marks as a composite whole without artificial dissection, an exception exists under the<em>Dominant Feature Doctrine</em>.</p>
                                        <p className="mb-6">However, proving that a specific word in a composite mark is the &ldquo;dominant feature&rdquo. During an injunction hearing requires substantial documentary proof of acquired goodwill, commercial turnover, and advertising spend. If you hold only a composite registration, a competitor who uses your word in a totally different font or color might avoid an ex-parte interim injunction.</p>
                                    </section>

                                    {/* SECTION 6: WHICH TO REGISTER FIRST */}
                                    <section id="which-to-register-first" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Which Trademark Should You File First?
                                        </h3>
                                        <p className="mb-6">To determine whether your enterprise should prioritize a Word Mark, a Device Mark, or a Composite Mark, evaluate your brand against this 3-factor strategic matrix:</p>

                                        {/* SCENARIO 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Scenario A (Recommended for 90% of Startups)</span>
                                                <span className="text-xs font-bold text-green-700">Priority: Word Mark First</span>
                                            </div>
                                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Unique, Coined, or Arbitrary Brand Names</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">If your brand name is inherently distinctive (e.g., invented words like<em>KODAK</em>or arbitrary words like<em>APPLE</em>for computers),<strong>always file a Word Mark first</strong>.</p>
                                            <p className="text-gray-600 text-sm leading-relaxed m-0"><strong>Why:</strong>It secures the widest possible legal moat over the name in the relevant Nice class. You can design, tweak, and rebrand logos freely without losing priority.</p>
                                        </div>

                                        {/* SCENARIO 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-indigo-600 transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-indigo-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full">Scenario B</span>
                                                <span className="text-xs font-bold text-indigo-700">Priority: Device Mark First</span>
                                            </div>
                                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Descriptive, Common, or Weak Brand Names</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">If your brand name contains dictionary terms, geographic identifiers, or words describing the goods/services (e.g., &ldquo;Speedy Couriers&rdquo. Or &ldquo;Fresh Farm Organics&rdquo;), a plain Word Mark application will likely face Section 9 absolute grounds objections.</p>
                                            <p className="text-gray-600 text-sm leading-relaxed m-0"><strong>Why:</strong>A stylized Device Mark adds visual artistic distinctiveness, helping the application sail through Registry examination. Once market goodwill is established over 2–3 years, you can file the Word Mark claiming acquired distinctiveness.</p>
                                        </div>

                                        {/* SCENARIO 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-amber-500 transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-amber-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full">Scenario C (Tight Budget Strategy)</span>
                                                <span className="text-xs font-bold text-amber-700">Priority: Single Composite Mark</span>
                                            </div>
                                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Early Bootstrapped Startups with Constrained Capital</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">If funding permits only a single application filing fee (₹4,500 govt fee for MSME/Startup), filing a composite mark (logo containing the brand name) provides a practical immediate balance.</p>
                                            <p className="text-gray-600 text-sm leading-relaxed m-0"><strong>Caveat:</strong>Commit to keeping that exact logo design locked for at least 3–5 years until cash flow allows filing independent Word and Logo registrations.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 7: REBRANDING & FONT FLEXIBILITY */}
                                    <section id="rebranding-protection" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRotate} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Rebranding and Font Flexibility Impact
                                        </h3>
                                        <p className="mb-6">Modern high-growth companies frequently modernize their brand identity as they scale. Understanding how trademark registrations respond to brand evolutions prevents catastrophic loss of trademark rights:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-green-100 text-green-700 rounded-xl flex items-center justify-center font-bold mb-4">
                                                    <FontAwesomeIcon icon={faCheck} className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900 mb-2">When You Own a Word Mark:</h4>
                                                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4 m-0">
                                                    <li>Change fonts from serif to sans-serif freely.</li>
                                                    <li>Switch brand colors across marketing seasons.</li>
                                                    <li>Redesign app icons and web UI elements without filing.</li>
                                                    <li>Unbroken priority date preserved from Day 1.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold mb-4">
                                                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-base font-bold text-gray-900 mb-2">When You Only Own a Device Mark:</h4>
                                                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4 m-0">
                                                    <li>Substantial logo alteration leaves the new mark unregistered.</li>
                                                    <li>Old registration becomes vulnerable to non-use cancellation under Section 47.</li>
                                                    <li>Must file fresh Form TM-A for each redesigned logo version.</li>
                                                    <li>Requires new government and professional legal fees.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p className="mb-6"><strong>Case Example:</strong>When Starbucks evolved its green Siren emblem over 40 years—removing the outer black circle and text in 2011—it filed new Device Marks for each evolution. However, its core<em>STARBUCKS</em>Word Mark registration remained unbroken since its founding. This ensures perpetual protection across all beverage classes.</p>
                                    </section>

                                    {/* SECTION 8: ECOMMERCE & AMAZON BRAND REGISTRY */}
                                    <section id="ecommerce-amazon" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCartShopping} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Amazon Brand Registry &amp; Online Selling
                                        </h3>
                                        <p className="mb-6">For D2C founders, marketplace sellers, and e-commerce brands, securing trademark protection is the mandatory prerequisite for enrolling in<Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Amazon Brand Registry India</Link>, Flipkart Brand Protection, and Meta Commerce Manager.</p>

                                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 my-8">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faRocket} className="w-5 h-5 text-[#6E5E93] mr-2" />
                                                Why Word Marks Perform Better on Amazon:
                                            </h4>
                                            <div className="space-y-4 text-sm md:text-base text-gray-700">
                                                <p className="m-0"><strong>1. Automated Buy Box &amp; ASIN Protection:</strong>Amazon&apos;s brand algorithms match textual brand names on product listing titles, backend search terms, and manufacturer metadata. A registered Word Mark aligns 100% with these automated matching engines.</p>
                                                <p className="m-0"><strong>2. Preventing Counterfeiter Font Variations:</strong>Counterfeit sellers often replicate brand names using slightly altered fonts or custom color schemes. A Word Mark empowers you to instantly execute Report a Violation (RAV) takedowns regardless of styling.</p>
                                                <p className="m-0"><strong>3. Flexible Product Packaging:</strong>Physical packaging must display the brand name permanently affixed. With a Word Mark, you can print the name in any modern packaging style without risking brand registry mismatch rejections.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: 4-STAGE FILING ROADMAP */}
                                    <section id="filing-roadmap" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Strategic 4-Stage Founder Filing Roadmap
                                        </h3>
                                        <p className="mb-6">Follow this proven 4-stage intellectual property roadmap designed by experienced trademark attorneys to maximize legal protection while optimizing compliance budgets:</p>

                                        {/* STAGE 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Stage 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Pre-Filing Clearance</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Textual &amp; Vienna Trademark Search</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Before committing to a brand name or spending thousands on agency logo designs, conduct a rigorous<Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search</Link>across the IP India portal.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Search both textual wordmarks and Vienna Classification codes in your relevant<Link href="/types-of-trademark-classes" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark classes</Link>to ensure no conflicting prior marks exist under Section 11.</p>
                                        </div>

                                        {/* STAGE 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Stage 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Foundation Protection</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">File Primary Word Mark Application (Form TM-A)</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Submit your initial trademark application for the plain text Word Mark under your primary goods or services classes. This locks in your nationwide priority date immediately.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Upon receiving your official application number receipt, you can immediately begin displaying the<Link href="/difference-between-tm-and-r-symbol-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">TM symbol</Link>alongside your brand name.</p>
                                        </div>

                                        {/* STAGE 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Stage 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Visual Identity Shield</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">File Secondary Device Mark (Logo &amp; Icon)</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">Once your visual brand guidelines, mobile app icon, packaging artwork, or primary logo design are finalized, file a separate Device Mark application.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">This prevents competitors from launching visually deceptive lookalike packaging or confusingly similar graphical icons under different names.</p>
                                        </div>

                                        {/* STAGE 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Stage 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Portfolio &amp; Global Expansion</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">Series Marks &amp; Madrid Protocol Filing</h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">As your company expands into international markets, use your registered Indian Word Mark as the base application to file for<Link href="/international-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">international trademark registration</Link>under the Madrid Protocol across the US, UK, EU, UAE, and Singapore.</p>
                                            <p className="text-gray-700 leading-relaxed m-0">Maintain active docketing for decennial renewals under Section 25 to ensure your brand exclusivity remains perpetual through<Link href="/how-to-renew-a-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark renewal</Link>filings.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 10: CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Filing Decision Checklist
                                        </h3>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Assess Inherent Distinctiveness:</strong>Evaluate whether your brand name is coined, arbitrary, suggestive, or descriptive on the Abercrombie spectrum.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Perform Comprehensive Search:</strong>Verify both phonetic spelling matches and Vienna classification codes on IP India portal.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Prioritize Word Mark Filing:</strong>File the plain text Word Mark first to establish broadest nationwide monopoly across all fonts.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>File Device Mark for Distinct Visuals:</strong>Secure independent protection for standalone logos, app icons, and unique emblems.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Claim MSME / Startup 50% Subsidy:</strong>Ensure you leverage Udyam or DPIIT recognition to pay ₹4,500 instead of ₹9,000 statutory fee.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Avoid Sole Reliance on Composite Marks:</strong>Do not rely exclusively on a composite logo mark if standalone word protection is critical.</span></li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /><span><strong>Execute Form TM-48 with Certified Attorney:</strong>Retain experienced IP advocates to handle examination reports and hearings.</span></li>
                                        </ul>
                                    </section>

                                    {/* SECTION 11: FAQS (EXACTLY 8 MATCHING SCHEMA) */}
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

                                    {/* SECTION 12: FINAL STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Legal Guidance
                                        </h3>
                                        <p className="mb-6">Building a durable brand requires safeguarding both what customers hear (your brand name) and what customers see (your visual logo). While budget constraints often require a staged approach, securing your<strong>Word Mark first</strong>provides the strongest foundational shield for any commercial enterprise in India.</p>
                                        <p className="mb-6">As your startup grows, complement your word mark with dedicated device mark registrations to construct an impenetrable dual-layer intellectual property fortress. Consult certified trademark attorneys at IPR Karo to review your brand portfolio and formulate a customized filing roadmap today.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Strategic Trademark Protection
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand Name &amp; Logo Today
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Partner with expert IP attorneys to choose the right trademark filing strategy. From clearance search and Form TM-A filing to Section 9/11 objection handling and final registration certificate issuance.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>File Trademark Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Certified IP Advocates • 50% Startup Government Fee Subsidy • Same-Day Filing Receipt</p>
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in brand protection strategy, trademark filing categorization, Section 17 Anti-Dissection analysis, and portfolio maintenance under the Trade Marks Act, 1999.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-xl font-black mb-4 relative z-10 leading-tight">Protect Your Brand</h4>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Get a customized filing strategy for your brand name and logo with registered trademark attorneys.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        File Form TM-A Now
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h4 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Search</span></Link></li>
                                    <li><Link href="/difference-between-tm-and-r-symbol-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM vs R Rules</span></Link></li>
                                    <li><Link href="/amazon-brand-registry-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Amazon Registry</span></Link></li>
                                    <li><Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faListUl} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Filing Steps</span></Link></li>
                                    <li><Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Guide</span></Link></li>
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Guide</span></Link></li>
                                    <li><Link href="/how-to-renew-a-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRotate} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Renew TM</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Affidavit</span></Link></li>
                                    <li><Link href="/international-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGlobe} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Global TM</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
