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
    faListUl,
    faFileContract,
    faLightbulb,
    faShieldHalved,
    faPhone,
    faBuildingShield,
    faGavel,
    faStamp,
    faBan,
    faBookOpen,
    faPalette,
    faEyeDropper,
    faFillDrip,
    faEye,
    faLayerGroup
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Colour Trademark Registration India: Section 2(1)(m)",
    description: validateAndNormalizeDescription(
        "Register single colours and colour combinations in India under Section 2(1)(m). Learn Rule 29 Pantone filing, secondary meaning, and case laws.",
        "app/single-colour-combination-trademark-registration-india/page.tsx"
    ),
    keywords: [
        "can a single colour or colour combination be registered as trademark in india",
        "how to trademark a colour in india",
        "single colour mark acquired distinctiveness",
        "colour combination trademark section 2 1 m",
        "tiffany blue cadbury purple trademark india",
        "colour depletion doctrine trademark india",
        "rule 29 trade marks rules 2017 pantone",
        "christian louboutin red sole trademark delhi high court",
        "qualitex co v jacobson products colour mark",
        "secondary meaning evidence colour trademark"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/single-colour-combination-trademark-registration-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Colour Trademark Registration India: Section 2(1)(m)",
        description: "Register single colours and colour combinations in India under Section 2(1)(m). Learn Rule 29 Pantone filing, secondary meaning, and case laws.",
        url: "https://www.iprkaro.com/single-colour-combination-trademark-registration-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/single-colour-combination-trademark-registration-india.png",
                width: 1200,
                height: 630,
                alt: "Single Colour & Colour Combination Trademark Registration in India: Section 2(1)(m) Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Colour Trademark Registration India: Section 2(1)(m)",
        description: "Register single colours and colour combinations in India under Section 2(1)(m). Learn Rule 29 Pantone filing, secondary meaning, and case laws.",
        images: ["https://www.iprkaro.com/images/og/single-colour-combination-trademark-registration-india.png"],
    }
};

const faqs = [
    {
        question: "Can a single colour be registered as a trademark in India?",
        answer: "Yes, a single colour can theoretically be registered as a trademark in India under Section 2(1)(zb) read with Section 2(1)(m) of the Trade Marks Act, 1999. However, the legal threshold is extraordinarily high. An applicant must overcome the strict presumption of non-distinctiveness by submitting overwhelming documentary evidence proving that the single colour has acquired 'secondary meaning'—meaning consumers exclusively associate that specific shade with the applicant's goods."
    },
    {
        question: "How does Section 2(1)(m) define a trademark regarding colour combinations?",
        answer: "Section 2(1)(m) of the Trade Marks Act, 1999 expressly includes a 'combination of colours' within the statutory definition of a 'mark'. When two or more distinctive colours are arranged in a unique spatial layout, pattern, or packaging get-up, the combination inherently possesses greater distinctiveness than a single colour and is recognized as a valid registrable trademark."
    },
    {
        question: "What is Rule 29 of the Trade Marks Rules, 2017 regarding colour marks?",
        answer: "Rule 29 mandates that when an applicant claims trademark rights in a colour or combination of colours, they must explicitly claim colour protection on Form TM-A, furnish a reproduction of the mark in the exact colour or combination claimed, and provide a precise specification of the shades using recognized international colour identification standards (such as Pantone Matching System, RAL, CMYK, or RGB codes)."
    },
    {
        question: "What is the 'Colour Depletion Doctrine' in Indian trademark jurisprudence?",
        answer: "The Colour Depletion Doctrine is a legal principle holding that because the spectrum of basic usable colours in any given industry is finite, granting exclusive monopolies over single colours could stifle fair commercial competition. Indian courts and registries apply this doctrine to prevent competitors from being depleted of essential descriptive or functional colours."
    },
    {
        question: "What is the Functionality Doctrine in colour trademark cases?",
        answer: "Under the Functionality Doctrine, a colour cannot be registered as a trademark if it serves a utilitarian purpose (e.g., yellow/orange for high-visibility safety jackets, silver for heat insulation) or an aesthetic functionality that provides a competitive advantage essential to the product's natural use or market appeal (e.g., green for organic/herbal cosmetics)."
    },
    {
        question: "What landmark rulings govern colour trademarks in the Delhi High Court?",
        answer: "Key rulings include Christian Louboutin SAS v. Pawan Kumar (recognizing Louboutin's iconic Red Sole - Pantone 18-1663TPX as a well-known trademark), Colgate-Palmolive Co. v. Anchor Health & Beauty Care (protecting the red-and-white 1/3:2/3 proportion toothpaste packaging trade dress), and Deere & Company v. S. Harcharan Singh (protecting John Deere's green and yellow agricultural equipment colour combination)."
    },
    {
        question: "What evidence is required to prove acquired distinctiveness for a colour mark?",
        answer: "Applicants must submit a detailed User Affidavit under Rule 25 supported by: (1) Longstanding exclusive and continuous commercial use, (2) Substantial sales turnover figures, (3) Extensive nationwide advertising and marketing expenditures featuring colour-centric campaigns (e.g., 'Look for the Purple Box'), (4) Independent market perception surveys, and (5) Unsolicited media and trade recognition."
    },
    {
        question: "Can an applicant register a colour mark if competitors also use similar shades?",
        answer: "If competitors within the same product category routinely use identical or similar shades in the ordinary course of trade, the colour is considered common to the trade (publici juris). Under Section 9(1)(a) and 9(1)(b), the registry will refuse registration unless the applicant can prove that their specific Pantone shade has achieved unprecedented, exclusive consumer recognition."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Legal Summary" },
    { id: "statutory-framework", title: "Section 2(1)(m) Framework" },
    { id: "single-vs-combination", title: "Single Colour vs Combination" },
    { id: "acquired-distinctiveness", title: "Proving Secondary Meaning" },
    { id: "colour-depletion", title: "Colour Depletion & Functionality" },
    { id: "rule-29-filing", title: "Rule 29 & Pantone Standards" },
    { id: "landmark-judgments", title: "Landmark Court Precedents" },
    { id: "filing-workflow", title: "Step-by-Step Filing Guide" },
    { id: "comparison-matrix", title: "Precedents & Sectors Matrix" },
    { id: "examination-defense", title: "Overcoming Section 9 Objections" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic Brand Protection" },
];

export default function SingleColourCombinationTrademarkRegistrationPage() {
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
        "headline": "Single Colour & Colour Combination Trademark Registration in India: Section 2(1)(m) Guide",
        "description": "Register single colours and colour combinations in India under Section 2(1)(m). Learn Rule 29 Pantone filing, secondary meaning, and case laws.",
        "image": "https://www.iprkaro.com/images/og/single-colour-combination-trademark-registration-india.png",
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
            "@id": "https://www.iprkaro.com/single-colour-combination-trademark-registration-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Colour Trademark Registration India: Section 2(1)(m)",
        "url": "https://www.iprkaro.com/single-colour-combination-trademark-registration-india",
        "description": "Register single colours and colour combinations in India under Section 2(1)(m). Learn Rule 29 Pantone filing, secondary meaning, and case laws.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/single-colour-combination-trademark-registration-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/single-colour-combination-trademark-registration-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Colour Trademark Registration", "item": "https://www.iprkaro.com/single-colour-combination-trademark-registration-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Procedure to Register a Colour Trademark in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Pan-Industry Trademark Clearance Search for Competing Colour Shades" },
            { "@type": "ListItem", "position": 2, "name": "Define Precise International Colour Codes (Pantone PMS, RAL, CMYK, RGB)" },
            { "@type": "ListItem", "position": 3, "name": "Compile Robust Documentary Evidence of Acquired Distinctiveness & Secondary Meaning" },
            { "@type": "ListItem", "position": 4, "name": "Prepare Form TM-A with Specific Colour Claim Checkbox under Rule 29" },
            { "@type": "ListItem", "position": 5, "name": "Draft Comprehensive Rule 25 User Affidavit with Sales Turnover & Advertising Invoices" },
            { "@type": "ListItem", "position": 6, "name": "Respond to Section 9 Examination Objections with Judicial Precedents" },
            { "@type": "ListItem", "position": 7, "name": "Defend Journal Publication in Opposition Proceedings & Secure Registration Certificate" }
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
                                <FontAwesomeIcon icon={faPalette} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Non-Conventional Trademark Jurisprudence</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Single Colour &amp; Colour Combination Trademark Registration in India: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Section 2(1)(m) Guide</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Securing an exclusive monopoly over a specific hue or distinct colour combination is one of the most powerful brand moats in modern commerce. Under <strong>Section 2(1)(m)</strong> and <strong>Section 2(1)(zb) of the Trade Marks Act, 1999</strong>, colour marks are legally recognized in India. Master the evidentiary standards for proving <strong>secondary meaning</strong>, navigating <strong>Rule 29 Pantone specifications</strong>, defeating the <strong>Colour Depletion Doctrine</strong>, and leveraging landmark rulings like <em>Christian Louboutin</em>, <em>Cadbury</em>, and <em>Colgate</em>.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ Section 2(1)(m) Analysis</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Clear Colour Mark Availability <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult IP Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/single-colour-combination-trademark-registration-india.png"
                                    alt="Single Colour &amp; Colour Combination Trademark Registration in India: Section 2(1)(m) Guide"
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
                        { label: "Colour Trademark Registration", href: "/single-colour-combination-trademark-registration-india" }
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
                                            <FontAwesomeIcon icon={faPalette} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Colour Trademark Registration
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Under Indian trademark law, Section 2(1)(m) of the Trade Marks Act, 1999 explicitly recognizes a &lsquo;combination of colours&rsquo; as a registrable mark, while a single monochromatic colour can be registered under Section 2(1)(zb) if it satisfies the twin tests of graphical representation and acquired distinctiveness (secondary meaning). Registering a colour requires compliance with Rule 29 of the Trade Marks Rules, 2017 using international Pantone codes, providing multi-year commercial sales and advertising records, and disproving utilitarian functionality or competitive colour depletion.</p>
                                        </div>

                                        <p className="mb-6">In an increasingly visual global marketplace, colour is the first sensory cue consumers perceive before reading brand names or analyzing logos. Distinctive visual assets like Tiffany &amp; Co.&apos;s robin egg blue, Cadbury&apos;s royal purple, Christian Louboutin&apos;s scarlet red shoe sole, and John Deere&apos;s green and yellow machinery trigger immediate commercial recognition.</p>
                                        <p className="mb-6">However, granting a proprietary monopoly over a colour removes that shade from the competitive sphere of other businesses. Consequently, the <strong>Trade Marks Registry of India</strong> and High Courts enforce an exceptionally stringent standard of review for colour marks under <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 9 absolute grounds of refusal</Link>.</p>
                                        <p className="mb-6">Whether you are an FMCG manufacturer, a luxury fashion house, or a direct-to-consumer (D2C) startup, understanding the statutory framework under Section 2(1)(m) is critical for securing and enforcing proprietary colour rights across India.</p>
                                    </section>

                                    {/* SECTION 2: STATUTORY FRAMEWORK */}
                                    <section id="statutory-framework" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Definition: Section 2(1)(m) and 2(1)(zb)
                                        </h3>
                                        <p className="mb-6">The statutory basis for colour trademark protection in India rests on two interconnected definitions in the Trade Marks Act, 1999:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Section 2(1)(m) — The Definition of a &lsquo;Mark&rsquo;</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 2(1)(m) states: <em>&ldquo;&lsquo;mark&rsquo; includes a device, brand, heading, label, ticket, name, signature, word, letter, numeral, shape of goods, packaging or <strong>combination of colours</strong> or any combination thereof.&rdquo;</em> By explicitly mentioning combinations of colours, Parliament codified statutory protection for multi-colour branding.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Section 2(1)(zb) — The Definition of a &lsquo;Trade Mark&rsquo;</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Section 2(1)(zb) provides that a trade mark must be <em>&ldquo;capable of being represented graphically and which is capable of distinguishing the goods or services of one person from those of others...&rdquo;</em> Even though Section 2(1)(m) mentions combinations of colours, a single colour qualifies under Section 2(1)(zb) if it fulfills graphical representation and source distinctiveness.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Section 10 — Limitation as to Colour</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Under Section 10(1), a trademark may be limited wholly or in part to any combination of colours, and any such limitation is taken into consideration by the Registrar or court when assessing the distinctive character of the mark. Under Section 10(2), if a trademark is registered without limitation of colour, it is deemed registered for all colours.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: SINGLE COLOUR VS COMBINATION */}
                                    <section id="single-vs-combination" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLayerGroup} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Single Colour vs Combination of Colours
                                        </h3>
                                        <p className="mb-6">In trademark jurisprudence, there is a fundamental legal difference between registering a single monochromatic colour versus a combination of colours:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3">
                                                        <FontAwesomeIcon icon={faEyeDropper} className="w-4 h-4" />
                                                    </div>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Single Colour Marks</h4>
                                                </div>
                                                <ul className="text-xs text-gray-700 space-y-2 pl-4 list-disc">
                                                    <li><strong>Statutory presumption:</strong> Presumed inherently non-distinctive (devoid of inherent distinctiveness under Section 9(1)(a)).</li>
                                                    <li><strong>Evidentiary threshold:</strong> Exceptionally high. Requires 10+ years of exclusive use, immense market share, and proven consumer recognition.</li>
                                                    <li><strong>Opposition vulnerability:</strong> Highly vulnerable to objections under the Colour Depletion Doctrine.</li>
                                                    <li><strong>Examples:</strong> Christian Louboutin Red Sole, Tiffany Blue, Cadbury Purple.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-indigo-50/60 p-6 rounded-2xl border border-indigo-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                                                        <FontAwesomeIcon icon={faFillDrip} className="w-4 h-4" />
                                                    </div>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Combination of Colours</h4>
                                                </div>
                                                <ul className="text-xs text-gray-700 space-y-2 pl-4 list-disc">
                                                    <li><strong>Statutory recognition:</strong> Expressly included in the statutory definition of a mark under Section 2(1)(m).</li>
                                                    <li><strong>Inherent distinctiveness:</strong> Higher probability of being distinctive when arranged in unique geometric ratios, bands, or trade dress layouts.</li>
                                                    <li><strong>Market impact:</strong> Leaves ample colour alternatives for competitors, facing fewer anti-monopoly objections.</li>
                                                    <li><strong>Examples:</strong> Colgate Red &amp; White, John Deere Green &amp; Yellow, Castrol Green/Red/White.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: PROVING SECONDARY MEANING */}
                                    <section id="acquired-distinctiveness" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Proving Acquired Secondary Meaning for Colour Marks
                                        </h3>
                                        <p className="mb-6">Under the proviso to Section 9(1) of the Trade Marks Act, 1999, a mark devoid of inherent distinctiveness shall not be refused registration if, before the date of application, it has in fact acquired a distinctive character as a result of the use made of it.</p>
                                        <p className="mb-6">To establish that a colour or colour combination has acquired <strong>secondary meaning</strong> in the minds of the purchasing public, applicants must furnish an exhaustive evidentiary record through a <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Rule 25 User Affidavit</Link>:</p>

                                        <div className="space-y-4 my-6">
                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Duration &amp; Exclusivity of Commercial Use</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Evidence proving continuous, uninterrupted, and exclusive commercial adoption over a substantial number of years across multiple Indian states.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Multi-Crore Sales Turnover Figures</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Chartered Accountant (CA) certified sales invoices demonstrating massive product penetration and market volume associated specifically with the colour-branded goods.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. &lsquo;Look-For&rsquo; Advertising Campaigns</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Copies of high-budget print, television, digital, and billboard advertisements that explicitly educate consumers to identify the brand by its colour (e.g., <em>&ldquo;Look for the iconic Yellow Boots&rdquo;</em> or <em>&ldquo;The Red Sole Guarantee&rdquo;</em>).</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">4. Independent Consumer Perception Surveys</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Statistically sound market research surveys demonstrating that when presented with the colour alone, a overwhelming majority of target consumers name the applicant&apos;s brand.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: COLOUR DEPLETION & FUNCTIONALITY */}
                                    <section id="colour-depletion" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Colour Depletion &amp; Functionality Doctrines
                                        </h3>
                                        <p className="mb-6">The primary legal obstacles to registering colour trademarks in India are two internationally recognized doctrines adopted by Indian courts:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    The Colour Depletion Doctrine
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">Originating in common law jurisprudence, this doctrine states that there is a limited palette of primary and secondary colours. If single colours are monopolized by early market entrants, later competitors will run out of viable colours to dress their goods, restricting trade competition.</p>
                                                <div className="bg-purple-50 p-2.5 rounded-lg text-xs font-semibold text-[#6E5E93]">
                                                    Defense: Narrow the specification of goods and provide exact Pantone PMS codes to demonstrate minimal competitive hindrance.
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></span>
                                                    The Functionality Doctrine
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">Under Section 9(1)(b), a colour cannot be registered if it serves a functional purpose:</p>
                                                <ul className="text-xs text-gray-600 space-y-1.5 pl-4 list-disc">
                                                    <li><strong>Utilitarian Functionality:</strong> Black for heat absorption, orange for life jackets, blue for water plumbing pipes.</li>
                                                    <li><strong>Aesthetic Functionality:</strong> Pink for girls&apos; toys, green for eco-friendly or herbal products, white for medical lab coats.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: RULE 29 & PANTONE STANDARDS */}
                                    <section id="rule-29-filing" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faEye} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Rule 29: Representation &amp; Pantone Color Standards
                                        </h3>
                                        <p className="mb-6">Under Rule 29 of the <strong>Trade Marks Rules, 2017</strong>, filing a colour trademark application requires meticulous technical compliance to meet the strict requirement of <strong>graphical representation</strong>:</p>

                                        <div className="bg-gray-50 border-l-4 border-purple-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;Where the mark contains a colour or a combination of colours, the applicant shall claim colour on the form and shall provide a reproduction of the mark in that colour or combination of colours, and shall also provide a description of the colour or combination of colours as well as international colour standard codes (such as Pantone, RAL, or CMYK).&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 not-prose">
                                            <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                                                <p className="font-bold text-gray-900 text-xs mb-1">1. Pantone Matching (PMS)</p>
                                                <p className="text-xs text-gray-600 m-0">Specify exact global codes (e.g., Pantone 18-1663 TPX for Red Sole or Pantone 2685C for Cadbury Purple).</p>
                                            </div>
                                            <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                                                <p className="font-bold text-gray-900 text-xs mb-1">2. Spatial Arrangement</p>
                                                <p className="text-xs text-gray-600 m-0">Describe how the colours are applied to the physical goods, packaging ratios (e.g., 50:50 vertical split), or surface boundaries.</p>
                                            </div>
                                            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                                                <p className="font-bold text-gray-900 text-xs mb-1">3. Non-Functional Declaration</p>
                                                <p className="text-xs text-gray-600 m-0">Affirm in writing that the chosen colour combination performs zero engineering, thermal, or chemical functions.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: LANDMARK JUDGMENTS */}
                                    <section id="landmark-judgments" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Court Precedents on Colour Trademarks
                                        </h3>
                                        <p className="mb-6">The jurisprudence governing colour marks in India has been established through high-stakes litigation before the Supreme Court of India, Delhi High Court, and international IP tribunals:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Christian Louboutin SAS v. Mr. Pawan Kumar &amp; Ors. (2017) DLT</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Delhi High Court declared Christian Louboutin&apos;s iconic <strong>Red Sole</strong> (Pantone No. 18-1663TPX applied to the outsole of women&apos;s high-heeled footwear) as a well-known trademark in India. The court held that the red sole had acquired global distinctiveness and consumer recognition as a badge of luxury origin.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Colgate-Palmolive Co. v. Anchor Health &amp; Beauty Care Pvt. Ltd. (2003) DLT</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Delhi High Court protected Colgate&apos;s distinctive <strong>red and white</strong> colour combination trade dress (1/3 red and 2/3 white packaging for dental cream). The court restrained Anchor from using an identical colour proportion on competing toothpaste containers, ruling that illiterate and rural consumers rely heavily on visual colour schemes.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Deere &amp; Company v. S. Harcharan Singh (2015) DLT</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Delhi High Court upheld John Deere&apos;s exclusive rights over its iconic <strong>Green and Yellow</strong> colour combination on agricultural tractors and harvesters, restraining local manufacturers from adopting the same colour scheme for farming implements under <Link href="/trade-dress-protection-under-indian-trademark-law" className="text-[rgb(110,94,147)] hover:underline font-medium">trade dress and passing off law</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">4. Cadbury UK Ltd. v. The Comptroller General of Patents (UK / EU Precedents)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">In the global trademark battle over <strong>Cadbury Purple (Pantone 2685C)</strong>, international courts ruled that a colour mark application must not use vague language like <em>&ldquo;predominant colour&rdquo;</em>, establishing that applicants must define the exact spatial arrangement and Pantone code to satisfy the graphic clarity standard.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">5. Qualitex Co. v. Jacobson Products Co., 514 U.S. 159 (1995)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The foundational US Supreme Court judgment holding that a single colour (green-gold for dry cleaning press pads) can be registered as a trademark if it has developed secondary meaning and serves no functional purpose, widely cited in Indian trademark commentaries.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: STEP-BY-STEP FILING GUIDE */}
                                    <section id="filing-workflow" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Colour Trademark Filing Procedure
                                        </h3>
                                        <p className="mb-6">Filing a colour trademark on the IP India e-filing portal involves specialized procedural requirements:</p>

                                        <div className="space-y-6">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-3">1</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Conduct Specialized Visual Trademark Search</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Perform comprehensive clearance searches across the IP India database, market shelves, and digital commerce channels to ensure no competing registered mark uses identical colour schemes in the relevant <Link href="/single-class-vs-multi-class-trademark-application-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Nice classification classes</Link>.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-3">2</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Select &lsquo;Colour Mark&rsquo; on Form TM-A</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Under Category of Mark, select <strong>&lsquo;Colour&rsquo;</strong> or check the explicit colour claim box. Upload a high-resolution representation showing the exact colour swatch and physical product application layout.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-3">3</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Draft Precise Descriptive Claim Statement</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Draft a definitive colour specification: <em>&ldquo;The trade mark consists of the colour [Pantone Code XXXX] applied to [specific product surface/packaging] as depicted in the attached representation.&rdquo;</em></p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-3">4</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Submit Rule 25 User Affidavit with Supporting Exhibits</h4>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">Attach an exhaustive evidence dossier including tax invoices, advertising expenditures, media coverage, and packaging samples proving acquired distinctiveness under Section 9 proviso.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: PRECEDENTS MATRIX */}
                                    <section id="comparison-matrix" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Colour Trademark Precedents &amp; Industry Matrix
                                        </h3>
                                        <p className="mb-6">The table below summarizes notable colour trademark disputes and judicial determinations across key commercial sectors:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Brand / Proprietor</th>
                                                        <th className="p-3.5 sm:p-4">Colour / Combination</th>
                                                        <th className="p-3.5 sm:p-4">Goods / Sector</th>
                                                        <th className="p-3.5 sm:p-4">Legal Outcome</th>
                                                        <th className="p-3.5 sm:p-4">Core Legal Principle</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Christian Louboutin</td>
                                                        <td className="p-3.5 sm:p-4">Red Sole (Pantone 18-1663TPX)</td>
                                                        <td className="p-3.5 sm:p-4">Luxury High Heels</td>
                                                        <td className="p-3.5 sm:p-4 text-green-700 font-semibold">Protected / Well-Known</td>
                                                        <td className="p-3.5 sm:p-4">Acquired secondary meaning &amp; high fashion origin badge</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Colgate-Palmolive</td>
                                                        <td className="p-3.5 sm:p-4">Red &amp; White (1/3:2/3 split)</td>
                                                        <td className="p-3.5 sm:p-4">Dental Care / Toothpaste</td>
                                                        <td className="p-3.5 sm:p-4 text-green-700 font-semibold">Injunction Granted</td>
                                                        <td className="p-3.5 sm:p-4">Trade dress passing off protection for illiterate consumers</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">John Deere</td>
                                                        <td className="p-3.5 sm:p-4">Green &amp; Yellow</td>
                                                        <td className="p-3.5 sm:p-4">Agricultural Tractors</td>
                                                        <td className="p-3.5 sm:p-4 text-green-700 font-semibold">Injunction Granted</td>
                                                        <td className="p-3.5 sm:p-4">Longstanding commercial combination distinctiveness</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Cadbury</td>
                                                        <td className="p-3.5 sm:p-4">Royal Purple (Pantone 2685C)</td>
                                                        <td className="p-3.5 sm:p-4">Chocolate Confectionery</td>
                                                        <td className="p-3.5 sm:p-4 text-amber-700 font-semibold">Strict Graphic Scrutiny</td>
                                                        <td className="p-3.5 sm:p-4">Must define precise spatial arrangement on packaging</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Qualitex Co.</td>
                                                        <td className="p-3.5 sm:p-4">Green-Gold</td>
                                                        <td className="p-3.5 sm:p-4">Dry Cleaning Press Pads</td>
                                                        <td className="p-3.5 sm:p-4 text-green-700 font-semibold">Registration Upheld</td>
                                                        <td className="p-3.5 sm:p-4">Single colour valid if secondary meaning + non-functional</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: OVERCOMING EXAMINATION OBJECTIONS */}
                                    <section id="examination-defense" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Overcoming Section 9 Absolute Grounds Objections
                                        </h3>
                                        <p className="mb-6">During trademark examination, the Registry almost automatically raises absolute grounds objections under Section 9(1)(a) claiming that colour marks are devoid of distinctive character. Deploy these proven legal arguments to secure acceptance:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Invoke Section 9 Proviso with Acquired Distinctiveness</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Argue that through long and continuous prior use, the colour has transcended its decorative role and acquired a distinct secondary meaning, functioning as a definitive badge of commercial origin under the proviso to Section 9(1).</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Disprove Utilitarian and Aesthetic Functionality</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Demonstrate with technical data that the shade performs no thermodynamic, reflective, safety, or chemical purpose, and does not yield any cost or manufacturing advantage to the applicant.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Rebut the Colour Depletion Doctrine</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Show that competitors in the same industry have countless alternative shades, hues, and contrasting packaging palettes available, proving that the registration will not stifle fair competition.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">4. Offer a Restrictive Endorsement / Disclaimer</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Offer to limit the colour protection specifically to the designated Pantone shade as applied to the exact product surface, satisfying the Registrar under <Link href="/trademark-disclaimer-condition-meaning-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark disclaimer and condition rules</Link>.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FAQS */}
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

                                    {/* SECTION 12: STRATEGIC TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Colour Brand Protection Advice
                                        </h3>
                                        <p className="mb-6">Building brand equity around proprietary colours provides unmatched consumer stickiness and anti-counterfeiting protection. However, navigating the intersection of Section 2(1)(m), Rule 29 Pantone requirements, and Section 9 examination objections demands deep IP litigation expertise.</p>
                                        <p className="mb-6">Work with seasoned trademark attorneys to conduct visual clearance searches, draft airtight colour claim specifications, and establish secondary meaning evidence that withstands registry and judicial scrutiny. For related non-conventional IP strategies, explore our comprehensive guides on <Link href="/trade-dress-protection-under-indian-trademark-law" className="text-[rgb(110,94,147)] hover:underline font-medium">trade dress protection</Link>, <Link href="/word-mark-vs-device-mark-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">word mark vs device mark</Link>, and <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objections</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Proprietary Colour Trademark Protection &amp; Litigation
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand&apos;s Signature Colours
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy expert IP litigators to secure single colour &amp; combination trademarks, draft Rule 29 Pantone specifications, and build impenetrable brand monopolies.</p>

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

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered Trademark Attorneys • Rule 29 Pantone Specification • Section 9 Defense • Pan-India</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in non-conventional trademarks, colour combination registrations, trade dress enforcement, and Section 9 distinctiveness hearings.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Trademarking a Colour?</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Need to register a single colour or signature packaging combination? Get an expert distinctiveness evaluation today.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Evaluate Colour TM Risk
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/trade-dress-protection-under-indian-trademark-law" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trade Dress Guide</span></Link></li>
                                    <li><Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Word vs Device Mark</span></Link></li>
                                    <li><Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Overcome Objections</span></Link></li>
                                    <li><Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBookOpen} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Section 9 vs 11 Grounds</span></Link></li>
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Affidavit Guide</span></Link></li>
                                    <li><Link href="/famous-trademark-infringement-cases-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Famous TM Cases</span></Link></li>
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
