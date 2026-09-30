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
    faCapsules,
    faLeaf,
    faSpa,
    faFlask,
    faCertificate,
    faHospital,
    faPrescriptionBottleMedical
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "AYUSH & Ayurvedic Trademark Registration in India",
    description: validateAndNormalizeDescription(
        "Guide to AYUSH & Ayurvedic trademark registration in India. Compare Class 3 vs Class 5, overcome Section 9 objections & protect herbal formulas.",
        "app/ayush-ayurvedic-brand-trademark-registration-india/page.tsx"
    ),
    keywords: [
        "how to trademark ayurvedic medicine brand in india",
        "ayush ministry trademark guidelines",
        "class 5 vs class 3 ayurvedic products",
        "section 9 1 b descriptive sanskrit names objection",
        "ayurvedic cosmetics trademark class 3",
        "herbal medicine trademark registration india",
        "ayush manufacturing license trademark synergy",
        "traditional knowledge digital library tkdl trademark",
        "panchakarma clinic trademark class 44",
        "ayurvedic wellness brand ip protection india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/ayush-ayurvedic-brand-trademark-registration-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "AYUSH & Ayurvedic Brand Trademark Registration Guidelines in India: Class 3 vs Class 5",
        description: "Master AYUSH & Ayurvedic trademark registration in India. Compare Class 3 vs Class 5, overcome Section 9 descriptive objections & protect formulations.",
        url: "https://www.iprkaro.com/ayush-ayurvedic-brand-trademark-registration-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/ayush-ayurvedic-brand-trademark-registration-india.png",
                width: 1200,
                height: 630,
                alt: "AYUSH and Ayurvedic Brand Trademark Registration in India: Class 3 vs Class 5 Strategy",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "AYUSH & Ayurvedic Brand Trademark Registration in India",
        description: "Master AYUSH & Ayurvedic trademark registration in India. Compare Class 3 vs Class 5, overcome Section 9 descriptive objections & protect formulations.",
        images: ["https://www.iprkaro.com/images/og/ayush-ayurvedic-brand-trademark-registration-india.png"],
    }
};

const faqs = [
    {
        question: "Should my Ayurvedic skincare brand file under Class 3 or Class 5 in India?",
        answer: "The classification depends entirely on the product's primary intended use, therapeutic claims, and regulatory license. If your product is intended for daily cosmetic enhancement, cleansing, moisturizing, or beautification without curative medicinal claims (e.g., herbal face wash, kumkumadi glow oil, aloe vera gel), it belongs in Class 3. If the product claims curative, therapeutic, antiseptic, or medical treatment properties (e.g., anti-fungal neem ointments, medicated pain relief balms, eczema treatments) or holds an AYUSH manufacturing license under Schedule T, it must be registered in Class 5. D2C wellness brands frequently execute dual-filing across both Class 3 and Class 5 to prevent cross-category brand dilution."
    },
    {
        question: "Can I register a trademark consisting of a traditional Sanskrit herb name like Ashwagandha, Neem, or Triphala?",
        answer: "No, you cannot obtain exclusive trademark rights over generic Sanskrit herb names, botanical ingredients, or traditional Ayurvedic formulations in isolation under Section 9(1)(b) of the Trade Marks Act, 1999. These terms are descriptive of the product's composition and character (publici juris). However, you can register a distinctive composite mark combining the botanical element with an arbitrary coined word, distinctive prefix/suffix, unique visual logo, or proprietary stylized typography (e.g., 'VedAshwa' or 'NeemVeda' alongside a stylized emblem)."
    },
    {
        question: "How does the Traditional Knowledge Digital Library (TKDL) affect Ayurvedic trademark applications?",
        answer: "The Traditional Knowledge Digital Library (TKDL) is a database documenting ancient Indian medicine systems (Ayurveda, Unani, Siddha, and Yoga). Trademark examiners and third-party challengers cross-reference TKDL to prevent private appropriation or monopolization of public-domain formulations, classical Shastric recipes (e.g., Chyawanprash, Brahmi Vati), and ancient medicinal methods. Attempting to register a pure classical preparation name as a word mark will lead to absolute rejection under Section 9."
    },
    {
        question: "What evidence is needed to prove acquired distinctiveness for an Ayurvedic brand under Section 9 proviso?",
        answer: "To overcome descriptive objections under the proviso to Section 9(1), applicants must file a comprehensive User Affidavit under Rule 25 accompanied by documentary evidence: (1) AYUSH manufacturing licenses displaying continuous historical usage, (2) audited annual turnover and chartered accountant revenue certificates, (3) chronologically arranged GST tax invoices across multiple Indian states, (4) marketing expenditure bills and media clippings, and (5) customer testimonials and online marketplace product listings demonstrating that consumers associate the name exclusively with your enterprise."
    },
    {
        question: "What other trademark classes are essential for an expanding Ayurvedic & AYUSH enterprise?",
        answer: "Beyond Class 3 (Cosmetics) and Class 5 (Medicines & Nutraceuticals), comprehensive protection requires: Class 30 (Herbal teas, spices, organic dietetic foods, honey), Class 32 (Ayurvedic health beverages, amla/aloe herbal juices, non-alcoholic wellness drinks), Class 35 (Retail storefronts, e-commerce portals, D2C distribution services), and Class 44 (Ayurvedic healthcare centers, Panchakarma wellness spas, holistic therapy clinics, and doctor consultation services)."
    },
    {
        question: "How does an AYUSH manufacturing license support trademark registration in India?",
        answer: "An AYUSH manufacturing license (Form 25D for Ayurvedic medicines or Form 26D for loan licenses) issued by the State Licensing Authority serves as indisputable, government-verified proof of commercial adoption and prior user date under Section 34 of the Trade Marks Act, 1999. It validates that the brand was legally commercialized on a specific date, shielding the applicant against prior-user challenges from competitors."
    },
    {
        question: "What is the legal significance of the Supreme Court's Amritdhara Pharmacy judgment for herbal brands?",
        answer: "In Amritdhara Pharmacy v. Satya Deo Gupta (AIR 1963 SC 449), the Supreme Court ruled that the Ayurvedic medicine brand 'Lakshmandhara' was deceptively similar to the prior registered mark 'Amritdhara'. The court established that because Ayurvedic medicines are purchased by average town and rural consumers with imperfect recollection, similarities in overall phonetic rhythm and structural suffix ('Dhara') create fatal confusion, setting a strict standard of comparison for herbal pharma marks."
    },
    {
        question: "Can an Ayurvedic startup avail government fee concessions for trademark registration?",
        answer: "Yes. Startups recognized by DPIIT (Department for Promotion of Industry and Internal Trade) and enterprises with a valid Udyam MSME Registration Certificate are entitled to a 50% statutory fee discount on official government trademark filing fees (paying ₹4,500 per class instead of the standard ₹9,000 corporate fee) on the IP India e-filing gateway."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "regulatory-framework", title: "AYUSH & IP Legal Framework" },
    { id: "class3-vs-class5", title: "Class 3 vs Class 5 Analysis" },
    { id: "cross-class-strategy", title: "Cross-Class Protection Suite" },
    { id: "section9-sanskrit-objections", title: "Overcoming Section 9 Sanskrit Objections" },
    { id: "tkdl-scrutiny", title: "TKDL & Publici Juris Formulations" },
    { id: "ayush-license-synergy", title: "AYUSH License & User Date Synergy" },
    { id: "deceptive-similarity-amritdhara", title: "Similarity Rules: Amritdhara Precedent" },
    { id: "classification-matrix", title: "Ayurvedic Classification Matrix" },
    { id: "step-by-step-process", title: "Registration Process for D2C Brands" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "strategic-takeaway", title: "Strategic IP Takeaway" },
];

export default function AyushAyurvedicTrademarkRegistrationPage() {
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
        "headline": "AYUSH & Ayurvedic Brand Trademark Registration Guidelines in India: Class 3 vs Class 5",
        "description": "Master AYUSH & Ayurvedic trademark registration in India. Compare Class 3 vs Class 5, overcome Section 9 descriptive objections & protect formulations.",
        "image": "https://www.iprkaro.com/images/og/ayush-ayurvedic-brand-trademark-registration-india.png",
        "datePublished": "2026-09-30T09:30:00+05:30",
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
            "@id": "https://www.iprkaro.com/ayush-ayurvedic-brand-trademark-registration-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "AYUSH & Ayurvedic Brand Trademark Registration in India",
        "url": "https://www.iprkaro.com/ayush-ayurvedic-brand-trademark-registration-india",
        "description": "Master AYUSH & Ayurvedic trademark registration in India. Compare Class 3 vs Class 5, overcome Section 9 descriptive objections & protect formulations.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/ayush-ayurvedic-brand-trademark-registration-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/ayush-ayurvedic-brand-trademark-registration-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "AYUSH Trademark Guide", "item": "https://www.iprkaro.com/ayush-ayurvedic-brand-trademark-registration-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Strategic Trademark Registration for Ayurvedic & AYUSH Brands",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Comprehensive Trademark Clearance & TKDL Search" },
            { "@type": "ListItem", "position": 2, "name": "Strategic Dual-Class Determination (Class 3 vs Class 5)" },
            { "@type": "ListItem", "position": 3, "name": "Harmonization of AYUSH Manufacturing Licenses (Form 25D/26D)" },
            { "@type": "ListItem", "position": 4, "name": "Drafting Composite Mark Architecture & Distinctive Logo Design" },
            { "@type": "ListItem", "position": 5, "name": "Filing Form TM-A with User Date Affidavit under Rule 25" },
            { "@type": "ListItem", "position": 6, "name": "Responding to Section 9(1)(b) Descriptive & TKDL Objections" },
            { "@type": "ListItem", "position": 7, "name": "Securing Final Trademark Certificate & Enforcing Brand Monopoly" }
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
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">AYUSH &amp; Herbal IP Jurisprudence</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                AYUSH &amp; Ayurvedic Brand Trademark <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Registration Guidelines</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">India&apos;s direct-to-consumer (D2C) Ayurvedic, herbal wellness, and natural skincare revolution demands sophisticated intellectual property protection. Navigating the critical statutory divide between <strong>Nice Class 3 (Cosmetics &amp; Skincare)</strong> and <strong>Nice Class 5 (Medicinal &amp; Pharmaceutical Formulations)</strong> is vital for legal compliance. Master strategies to overcome <strong>Section 9(1)(b) descriptive objections</strong> on Sanskrit botanicals, leverage AYUSH manufacturing licenses, protect proprietary herbal recipes, and prevent market dilution.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 30-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 16 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-purple-50 rounded-full px-3 py-1 border border-purple-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-[#6E5E93]">🌿 AYUSH &amp; Class 3/5 Specialist</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Protect Your Ayurvedic Brand <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult AYUSH IP Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/ayush-ayurvedic-brand-trademark-registration-india.png"
                                    alt="AYUSH and Ayurvedic Brand Trademark Registration in India: Class 3 vs Class 5 Strategy"
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
                        { label: "AYUSH Trademark Guide", href: "/ayush-ayurvedic-brand-trademark-registration-india" }
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
                                            Overview: The AYUSH Trademark Ecosystem in India
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">In India, registering an Ayurvedic or AYUSH brand trademark requires navigating a critical distinction between Nice Class 3 (non-medicated herbal cosmetics, skincare, essential oils, and beauty products) and Nice Class 5 (Ayurvedic medicines, therapeutic formulations, curative balms, and herbal supplements). Under Section 9(1)(b) of the Trade Marks Act, 1999, applicants cannot monopolize generic Sanskrit herb names (e.g., Ashwagandha, Neem, Brahmi) or classical Shastric recipes documented in the Traditional Knowledge Digital Library (TKDL). Effective brand protection requires coining distinctive composite marks, harmonizing state AYUSH manufacturing licenses with trademark user affidavits, and executing multi-class filings across Classes 3, 5, 30, 32, and 44.</p>
                                        </div>

                                        <p className="mb-6">The Indian wellness and holistic healthcare market has witnessed exponential expansion, driven by the Ministry of AYUSH (Ayurveda, Yoga &amp; Naturopathy, Unani, Siddha, and Homoeopathy) and the surge in Direct-to-Consumer (D2C) organic brands. From botanical skincare serums to classical Kwaths and proprietary immunity boosters, entrepreneurs are building multi-crore enterprises on ancient Ayurvedic foundations.</p>
                                        <p className="mb-6">However, Ayurvedic trademarks encounter unique, formidable hurdles during examination at the Trade Marks Registry. Applicants frequently face intense statutory objections under <strong>Section 9(1)(b)</strong> for descriptive ingredient names, resistance from the <strong>Traditional Knowledge Digital Library (TKDL)</strong>, and deceptive similarity conflicts under <strong>Section 11(1)</strong> with established pharmaceutical brands.</p>
                                        <p className="mb-6">Understanding how the Trade Marks Act, 1999 intersects with the <strong>Drugs and Cosmetics Act, 1940</strong> and AYUSH licensing regulations is paramount. Discover our related analyses on <Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 9 vs Section 11 grounds for trademark refusal</Link> and <Link href="/single-class-vs-multi-class-trademark-application-india" className="text-[rgb(110,94,147)] hover:underline font-medium">single-class vs multi-class trademark filing strategies</Link>.</p>
                                    </section>

                                    {/* SECTION 2: REGULATORY FRAMEWORK */}
                                    <section id="regulatory-framework" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Regulatory Architecture: AYUSH Ministry &amp; IP Interface
                                        </h3>
                                        <p className="mb-6">Trademarking an Ayurvedic product in India is not merely an intellectual property exercise; it is tightly coupled with pharmaceutical and regulatory compliance under multiple national statutes:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3">
                                                        <FontAwesomeIcon icon={faPrescriptionBottleMedical} className="w-4 h-4" />
                                                    </div>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">1. Drugs &amp; Cosmetics Act</h4>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-2">Governs Ayurvedic, Siddha, and Unani (ASU) drug manufacturing under Chapter IV-A and Schedule T (Good Manufacturing Practices). Distinguishes classical Shastric drugs from proprietary Ayurvedic medicines.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                                                        <FontAwesomeIcon icon={faBookOpen} className="w-4 h-4" />
                                                    </div>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">2. Trade Marks Act, 1999</h4>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-2">Classifies goods into Nice Classifications (Class 3 vs Class 5), enforces distinctiveness thresholds (Section 9), and prevents consumer confusion or false medicinal endorsement (Section 11).</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-800 mr-3">
                                                        <FontAwesomeIcon icon={faCertificate} className="w-4 h-4" />
                                                    </div>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">3. AYUSH Licensing Rules</h4>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-2">State AYUSH authorities approve product labels, composition, and product brand names on Form 25D/26D before commercial manufacture and marketing can lawfully commence.</p>
                                            </div>
                                        </div>

                                        <p className="mb-6">The statutory classification chosen on your Form TM-A determines not only your trademark scope, but also your vulnerability to regulatory penalties if your marketing claims exceed your registered product category.</p>
                                    </section>

                                    {/* SECTION 3: CLASS 3 VS CLASS 5 */}
                                    <section id="class3-vs-class5" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFlask} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Core Dilemma: Nice Class 3 vs Nice Class 5
                                        </h3>
                                        <p className="mb-6">The most fundamental decision for every natural wellness founder is whether to file under <strong>Class 3</strong> or <strong>Class 5</strong>. The distinction rests on product formulation, intended purpose, and curative claims:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-200 shadow-sm">
                                                <div className="flex items-center mb-4">
                                                    <span className="w-10 h-10 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center font-bold text-base mr-3 shadow">3</span>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-gray-900 m-0">Nice Class 3: Herbal Cosmetics &amp; Toiletries</h4>
                                                        <p className="text-xs text-[#6E5E93] font-semibold m-0">Aesthetic, Non-Medicated Care</p>
                                                    </div>
                                                </div>
                                                <ul className="text-xs sm:text-sm text-gray-700 space-y-2.5 mb-4 pl-0 list-none">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-[#6E5E93] mr-2 mt-1 flex-shrink-0" /><span><strong>Scope:</strong> Non-medicated cosmetics, herbal skincare, body lotions, face cleansers, hair nourishment oils, botanical soaps, perfumery, essential oils.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-[#6E5E93] mr-2 mt-1 flex-shrink-0" /><span><strong>Primary Claim:</strong> Cleansing, beautification, moisturizing, skin conditioning, radiance enhancement.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-[#6E5E93] mr-2 mt-1 flex-shrink-0" /><span><strong>Prohibited Claims:</strong> Cannot claim to cure medical diseases, treat acne vulgaris clinically, or heal dermatitis.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-[#6E5E93] mr-2 mt-1 flex-shrink-0" /><span><strong>Typical Brands:</strong> Kama Ayurveda, Forest Essentials, Plum Herbal Skincare.</span></li>
                                                </ul>
                                            </div>

                                            <div className="bg-indigo-50/60 p-6 rounded-2xl border border-indigo-200 shadow-sm">
                                                <div className="flex items-center mb-4">
                                                    <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-base mr-3 shadow">5</span>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-gray-900 m-0">Nice Class 5: Ayurvedic Medicines &amp; Therapeutics</h4>
                                                        <p className="text-xs text-indigo-700 font-semibold m-0">Curative, Therapeutic &amp; Medicinal</p>
                                                    </div>
                                                </div>
                                                <ul className="text-xs sm:text-sm text-gray-700 space-y-2.5 mb-4 pl-0 list-none">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-indigo-600 mr-2 mt-1 flex-shrink-0" /><span><strong>Scope:</strong> Ayurvedic medicines, herbal pharmaceutical preparations, medicated pain relief oils, therapeutic balms, dietetic substances adapted for medical use, herbal capsules.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-indigo-600 mr-2 mt-1 flex-shrink-0" /><span><strong>Primary Claim:</strong> Alleviating symptoms, treating bodily disorders, boosting clinical immunity, pain management.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-indigo-600 mr-2 mt-1 flex-shrink-0" /><span><strong>Licensing Requirement:</strong> Supported by State AYUSH Manufacturing License under Schedule T.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-indigo-600 mr-2 mt-1 flex-shrink-0" /><span><strong>Typical Brands:</strong> Dabur Chyawanprash, Zandu Balm, Himalaya Liv.52, Baidyanath Kwath.</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl not-prose my-6">
                                            <h4 className="text-sm font-bold text-amber-900 mb-1 flex items-center">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 mr-2 text-amber-600" />
                                                The Dual-Filing Best Practice for D2C Brands
                                            </h4>
                                            <p className="text-xs sm:text-sm text-amber-800 m-0 leading-relaxed">Modern D2C brands frequently blur product boundaries. A brand producing both an Ayurvedic face glow oil (Class 3) and a medicated joint pain oil (Class 5) should file a <strong>multi-class trademark application</strong> or parallel single-class filings across both Class 3 and Class 5. Registering only under Class 3 leaves the brand unprotected if a competitor launches a Class 5 medicinal product with an identical name.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: CROSS-CLASS STRATEGY */}
                                    <section id="cross-class-strategy" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingShield} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Comprehensive 5-Class Protection Suite
                                        </h3>
                                        <p className="mb-6">Modern holistic wellness brands rarely confine themselves to topicals or pills. An omnichannel brand strategy requires trademark filings spanning the following five Nice Classes:</p>

                                        <div className="space-y-4 not-prose my-8">
                                            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex items-start space-x-3">
                                                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs flex-shrink-0">30</span>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-gray-900 m-0">Class 30: Herbal Teas, Spices, Honey &amp; Nutritional Dietetics</h4>
                                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Crucial for Ayurvedic green teas, Kadhas, herbal infusions, organic turmeric powders, Chyawanprash food variants, and jaggery-based herbal blends.</p>
                                                    </div>
                                                </div>
                                                <span className="text-[11px] font-bold text-[#6E5E93] bg-purple-50 px-3 py-1 rounded-full border border-purple-200 self-start md:self-center">Food &amp; Infusions</span>
                                            </div>

                                            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex items-start space-x-3">
                                                    <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs flex-shrink-0">32</span>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-gray-900 m-0">Class 32: Ayurvedic Wellness Drinks &amp; Herbal Juices</h4>
                                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Protects non-alcoholic wellness beverages, pure Amla juice, Aloe Vera detox drinks, Triphala tonics, and natural botanical energy elixirs.</p>
                                                    </div>
                                                </div>
                                                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 self-start md:self-center">Beverages &amp; Juices</span>
                                            </div>

                                            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex items-start space-x-3">
                                                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-xs flex-shrink-0">35</span>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-gray-900 m-0">Class 35: E-Commerce Portals &amp; Ayurvedic Retail Stores</h4>
                                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Protects retail store operations, online D2C marketplace sales, pharmaceutical retail distribution, and Ayurvedic franchise networks.</p>
                                                    </div>
                                                </div>
                                                <span className="text-[11px] font-bold text-[#6E5E93] bg-purple-50 px-3 py-1 rounded-full border border-purple-200 self-start md:self-center">Retail &amp; D2C</span>
                                            </div>

                                            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex items-start space-x-3">
                                                    <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs flex-shrink-0">44</span>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-gray-900 m-0">Class 44: Panchakarma Centers, Ayurvedic Clinics &amp; Spas</h4>
                                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Mandatory for doctor consultation services, Ayurvedic wellness retreats, Nadi Pariksha clinics, and therapeutic massage centers.</p>
                                                    </div>
                                                </div>
                                                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 self-start md:self-center">Clinical Services</span>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: OVERCOMING SECTION 9 SANSKRIT OBJECTIONS */}
                                    <section id="section9-sanskrit-objections" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Overcoming Section 9(1)(b) Objections on Sanskrit Botanicals
                                        </h3>
                                        <p className="mb-6">The single most frequent examination objection faced by herbal brands arises under <strong>Section 9(1)(b) of the Trade Marks Act, 1999</strong>, which prohibits registration of marks that designate the kind, quality, intended purpose, or botanical composition of goods:</p>

                                        <div className="bg-gray-50 border-l-4 border-[#6E5E93] p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;The trade mark consists exclusively of marks or indications which may serve in trade to designate the kind, quality, quantity, intended purpose, values, geographical origin or other characteristics of the goods...&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. The Generic Herb Monopolization Trap</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">You cannot trademark <em>Ashwagandha</em>, <em>Neem Care</em>, <em>Pure Turmeric</em>, <em>Brahmi Rasayana</em>, or <em>Kumkumadi</em> as word marks for Ayurvedic cosmetics or medicines. Because these terms are public domain ingredients in Ayurveda, granting an exclusive monopoly would unfairly restrain lawful trade for other manufacturers.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Creating Arbitrary &amp; Coined Composite Marks</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Overcome Section 9 by appending arbitrary or fanciful prefixes/suffixes to create a coined composite whole (e.g., combining <em>Veda</em> with an invented stem to yield &lsquo;Vedix&rsquo;, or combining classical roots into &lsquo;Baidyanath&rsquo;). Alternatively, register a stylized logo (device mark) with a statutory disclaimer over the generic Sanskrit ingredient name.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Establishing Acquired Distinctiveness &amp; Secondary Meaning</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Under the proviso to Section 9(1), if a descriptive herbal brand has been continuously utilized for years such that the purchasing public exclusively links the name with your firm (e.g., <em>Zandu</em> or <em>Dabur</em>), the mark qualifies for registration upon submission of rigorous user evidence. Learn how to draft bulletproof affidavits in our guide to <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavits under Rule 25</Link>.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: TKDL & PUBLICI JURIS */}
                                    <section id="tkdl-scrutiny" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            TKDL Scrutiny &amp; Classical Shastric Formulations
                                        </h3>
                                        <p className="mb-6">The <strong>Traditional Knowledge Digital Library (TKDL)</strong> is a world-renowned Indian initiative that translates ancient Ayurvedic, Unani, and Siddha texts into 34 million pages across multiple international languages:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-200">
                                                <h4 className="text-base font-bold text-red-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faBan} className="w-4 h-4 mr-2 text-red-600" />
                                                    Non-Registrable Classical Recipes
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Classical ASU medicines specified in authoritative textbooks listed in the First Schedule to the Drugs &amp; Cosmetics Act (e.g., <em>Charaka Samhita</em>, <em>Sushruta Samhita</em>, <em>Bhavaprakasha</em>) are strictly publici juris. Marks such as <em>Maha Bhringraj Oil</em>, <em>Chyawanprash</em>, <em>Triphala Churna</em>, or <em>Sitopaladi</em> cannot be registered as proprietary word marks.</p>
                                            </div>

                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 text-[#6E5E93]" />
                                                    Legitimate Proprietary Formulations
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Patent and trademark protection is fully available for <strong>Proprietary Ayurvedic Formulations</strong>—innovative, novel combinations of botanical extracts with proprietary delivery systems, customized dosages, or branded therapeutic blends (e.g., Himalaya&apos;s <em>Liv.52</em>, Dabur&apos;s <em>Honitus</em>, or Dr. Vaidya&apos;s <em>Herbobuild</em>).</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: AYUSH LICENSE SYNERGY */}
                                    <section id="ayush-license-synergy" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCertificate} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Synergy Between AYUSH Licenses &amp; Trademark User Date
                                        </h3>
                                        <p className="mb-6">In Indian trademark litigation and opposition proceedings under <strong>Section 34</strong> (prior user rights), statutory government licenses provide unassailable documentary evidence:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Form 25D Manufacturing License as Prior Use Proof</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">When your state Ayurvedic licensing authority grants Form 25D (or Form 26D for loan/contract manufacturing), the license officially lists your product trade name and date of approval. Submitting this certified copy in a trademark dispute decisively settles the &lsquo;first-to-use&rsquo; priority date over conflicting rivals.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Label &amp; Packaging Artwork Alignment</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Ensure that the exact logo, font typography, and color combination submitted to the AYUSH State Authority for label approval matches your Form TM-A trademark application. Discrepancies between drug regulatory approvals and registered trademarks weaken infringement injunctions in High Courts.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Certificate of Pharmaceutical Product (CoPP) for Global Exports</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">For Ayurvedic enterprises exporting to the US, EU, UAE, or UK under the WHO-GMP certification scheme, obtaining trademark registration in India enables seamless international filing under the <strong>Madrid Protocol</strong>. Learn more in our <Link href="/international-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">international trademark registration guide</Link>.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: DECEPTIVE SIMILARITY & AMRITDHARA PRECEDENT */}
                                    <section id="deceptive-similarity-amritdhara" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Deceptive Similarity: The Landmark Amritdhara Precedent
                                        </h3>
                                        <p className="mb-6">The legal benchmark governing deceptive similarity in Ayurvedic medicines was established in the historic Supreme Court ruling <em>Amritdhara Pharmacy v. Satya Deo Gupta (AIR 1963 SC 449)</em>:</p>

                                        <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;The question has to be approached from the point of view of an ordinary purchaser of average intelligence and imperfect recollection. To such a man, the overall phonetic and structural similarity between &lsquo;Amritdhara&rsquo; and &lsquo;Lakshmandhara&rsquo; would cause confusion in the marketplace.&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                                <h4 className="text-sm font-bold text-gray-900 mb-2">Imperfect Memory Standard</h4>
                                                <p className="text-xs text-gray-600 m-0">Ayurvedic remedies are purchased by rural and town consumers who do not place products side by side. They recall only the central phonetic cadence (e.g., &lsquo;Dhara&rsquo; or &lsquo;Veda&rsquo;).</p>
                                            </div>
                                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                                <h4 className="text-sm font-bold text-gray-900 mb-2">Heightened Health Scrutiny</h4>
                                                <p className="text-xs text-gray-600 m-0">Courts apply stringent phonetic comparison for medicinal preparations because ingestion errors can compromise health, following the Supreme Court&apos;s <em>Cadila</em> doctrine.</p>
                                            </div>
                                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                                <h4 className="text-sm font-bold text-gray-900 mb-2">Trade Channel Overlap</h4>
                                                <p className="text-xs text-gray-600 m-0">Both Class 3 herbal cosmetics and Class 5 Ayurvedic medicines share identical distribution channels: neighborhood pharmacies, wellness stores, and online e-commerce shelves.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: CLASSIFICATION MATRIX */}
                                    <section id="classification-matrix" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Ayurvedic &amp; AYUSH Product Classification Matrix
                                        </h3>
                                        <p className="mb-6">The table below outlines the precise trademark classes, acceptable product descriptions, and regulatory frameworks across the Ayurvedic product spectrum:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Product Category</th>
                                                        <th className="p-3.5 sm:p-4">Nice Class</th>
                                                        <th className="p-3.5 sm:p-4">Statutory Specification</th>
                                                        <th className="p-3.5 sm:p-4">Governing Regulatory Law</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Herbal Face Creams, Serums &amp; Cleansers</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-[#6E5E93]">Class 3</td>
                                                        <td className="p-3.5 sm:p-4">Non-medicated cosmetics, skincare preparations, herbal face wash</td>
                                                        <td className="p-3.5 sm:p-4">Cosmetic Rules / BIS Standards</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Therapeutic Pain Balms &amp; Joint Oils</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-indigo-700">Class 5</td>
                                                        <td className="p-3.5 sm:p-4">Ayurvedic medicinal oils, medicated liniments, pain relief balms</td>
                                                        <td className="p-3.5 sm:p-4">AYUSH Schedule T / Form 25D</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Ayurvedic Capsules, Kwaths &amp; Tablets</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-indigo-700">Class 5</td>
                                                        <td className="p-3.5 sm:p-4">Ayurvedic medicines, botanical herbal extracts for therapeutic use</td>
                                                        <td className="p-3.5 sm:p-4">Drugs &amp; Cosmetics Act (ASU)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Herbal Teas, Kadhas &amp; Spice Blends</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-purple-800">Class 30</td>
                                                        <td className="p-3.5 sm:p-4">Herbal tea infusions, spices, organic turmeric, health foods</td>
                                                        <td className="p-3.5 sm:p-4">FSSAI / Food Safety Standards</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Aloe Vera &amp; Amla Wellness Juices</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-indigo-700">Class 32</td>
                                                        <td className="p-3.5 sm:p-4">Non-alcoholic herbal beverages, botanical juices, wellness drinks</td>
                                                        <td className="p-3.5 sm:p-4">FSSAI (Nutraceuticals)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Panchakarma &amp; Ayurvedic Spas</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-purple-800">Class 44</td>
                                                        <td className="p-3.5 sm:p-4">Ayurvedic healthcare therapy, holistic wellness clinic services</td>
                                                        <td className="p-3.5 sm:p-4">Clinical Establishments Act</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: STEP-BY-STEP WORKFLOW */}
                                    <section id="step-by-step-process" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Trademark Roadmap for D2C Brands
                                        </h3>
                                        <p className="mb-6">Executing a flawless trademark prosecution process ensures guaranteed brand ownership and shields your enterprise from expensive rebranding litigation:</p>

                                        <div className="space-y-6 not-prose my-8">
                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Comprehensive Trademark &amp; TKDL Clearance Search</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">Conduct phonetic, visual, and conceptual clearance across Classes 3, 5, 30, 32, and 44 on the official IP India registry. Screen classical Ayurvedic databases to verify that the proposed name does not clash with public domain formulations.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Crafting Distinctive Composite Brand Architecture</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">If your name contains an Ayurvedic root word (e.g., &lsquo;Amrut&rsquo; or &lsquo;Veda&rsquo;), combine it with an invented suffix, proprietary stylized font, and unique logo device mark. This ensures distinctiveness under Section 9.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Harmonizing User Date Affidavit with AYUSH Licenses</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">If filing on a &lsquo;claimed prior use&rsquo; basis, execute a sworn User Affidavit under Rule 25 accompanied by your initial AYUSH Form 25D license, tax invoices, and lab test reports to lock in legal priority.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Responding to Examination Reports &amp; Overcoming Objections</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">Draft authoritative legal replies to Section 9 descriptive citations and Section 11 pharma conflicts within the statutory 30-day window, invoking landmark precedents and submitting commercial evidence.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">5</div>
                                                <div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Journal Publication, Registration &amp; E-Commerce Enrolment</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">Following 4 months in the Trade Marks Journal without opposition, receive your official registration certificate. Immediately enroll in <strong>Amazon Brand Registry</strong> and <strong>Flipkart Brand Approval</strong> to stop counterfeit herbal sellers.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[#6E5E93]">
                                            Frequently Asked Questions
                                        </h3>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[#6E5E93] mr-4 font-black text-2xl">Q.</span>{faq.question}
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
                                            Strategic Enforcement Advice for Herbal Enterprises
                                        </h3>
                                        <p className="mb-6">Building an Ayurvedic legacy requires blending classical wisdom with rigorous modern IP engineering. Choosing between Class 3 and Class 5 is not an afterthought; it dictates your regulatory posture, consumer safety standards, and commercial valuation during venture capital fundraising.</p>
                                        <p className="mb-6">Partner with specialized IP attorneys who understand both the Trade Marks Registry and AYUSH regulatory nuances. For further brand protection strategies, explore our comprehensive guides on <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objections</Link>, <Link href="/trade-dress-protection-under-indian-trademark-law" className="text-[rgb(110,94,147)] hover:underline font-medium">trade dress &amp; packaging protection in India</Link>, and <Link href="/free-ai-powered-trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">free AI trademark clearance search</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Comprehensive AYUSH &amp; Herbal IP Protection
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Secure Your Ayurvedic Brand Monopoly
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy experienced trademark attorneys to classify your formulations accurately, overcome Section 9 descriptive objections, and defend your brand across India.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult AYUSH IP Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered Trademark Attorneys • Class 3 vs Class 5 Clearance • AYUSH Licensing Support • 50% MSME Subsidy</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in AYUSH intellectual property, Section 9 Sanskrit descriptive defenses, Class 3 vs Class 5 categorization, and pharma brand litigation.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Launching an Ayurvedic Brand?</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Need expert classification between Class 3 cosmetics and Class 5 medicines? Get a comprehensive clearance search today.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Check AYUSH Trademark
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBookOpen} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Section 9 vs 11 Grounds</span></Link></li>
                                    <li><Link href="/single-class-vs-multi-class-trademark-application-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Multi-Class Filing</span></Link></li>
                                    <li><Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Overcome Objections</span></Link></li>
                                    <li><Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">User Date Affidavit</span></Link></li>
                                    <li><Link href="/trade-dress-protection-under-indian-trademark-law" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trade Dress Guide</span></Link></li>
                                    <li><Link href="/amazon-brand-registry-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faCertificate} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Amazon Brand Registry</span></Link></li>
                                    <li><Link href="/flipkart-brand-approval-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Flipkart Brand Approval</span></Link></li>
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
