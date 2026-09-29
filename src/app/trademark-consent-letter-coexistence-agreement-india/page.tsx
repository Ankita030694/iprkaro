import { validateAndNormalizeDescription, validateAndNormalizeTitle } from '@/lib/seo-utils';
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
    faPhone,
    faRocket,
    faClock,
    faRotate,
    faStamp,
    faHandshake,
    faGavel,
    faBuilding,
    faCheck,
    faFileSignature,
    faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: validateAndNormalizeTitle("Trademark Consent & Coexistence Agreement | IPR Karo", "app/trademark-consent-letter-coexistence-agreement-india/page.tsx"),
    description: validateAndNormalizeDescription(
        "Overcome Section 11 objections with a trademark consent letter & coexistence agreement in India. Learn legal formats, Section 12 honest concurrent use & rules.",
        "app/trademark-consent-letter-coexistence-agreement-india/page.tsx"
    ),
    keywords: [
        "trademark consent letter coexistence agreement india",
        "how to overcome section 11 objection with consent letter",
        "trademark coexistence agreement format india",
        "will trademark registry accept noc from cited mark",
        "trademark consent letter format india",
        "honest concurrent use section 12 trademark act 1999",
        "trademark coexistence agreement clauses",
        "overcoming section 11 1 relative grounds of refusal",
        "letter of consent vs coexistence agreement",
        "examiner discretion in trademark consent letters"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-consent-letter-coexistence-agreement-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark Consent & Coexistence Agreement | IPR Karo",
        description: "Overcome Section 11 objections with a trademark consent letter & coexistence agreement in India. Learn legal formats, Section 12 honest concurrent use & rules.",
        url: "https://www.iprkaro.com/trademark-consent-letter-coexistence-agreement-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-consent-letter-coexistence-agreement-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Consent Letter and Coexistence Agreement in India Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark Consent & Coexistence Agreement | IPR Karo",
        description: "Overcome Section 11 objections with a trademark consent letter & coexistence agreement in India. Learn legal formats, Section 12 honest concurrent use & rules.",
        images: ["https://www.iprkaro.com/images/og/trademark-consent-letter-coexistence-agreement-india.jpg"],
    }
};

const faqs = [
    {
        question: "Will the Indian Trade Marks Registry automatically accept a Letter of Consent from a cited mark owner?",
        answer: "No. Unlike some foreign jurisdictions (such as the US or EU where consent letters are given substantial weight), the Indian Trade Marks Registry is not bound by private agreements. Under Section 11 and Section 12 of the Trade Marks Act, 1999, the Registrar acts as a trustee of public interest to prevent consumer deception. If the Registrar determines that two marks are identical or confusingly similar for identical goods—especially in sensitive sectors like food, healthcare, or consumer pharmaceuticals—the objection may still be sustained despite an undisputed consent letter."
    },
    {
        question: "How does Section 12 Honest Concurrent Use support a trademark consent letter?",
        answer: "Section 12 of the Trade Marks Act, 1999 grants statutory discretion to the Registrar to permit the registration of identical or similar trademarks by more than one proprietor in cases of honest concurrent use or other special circumstances. A Letter of Consent or Coexistence Agreement serves as conclusive evidence of 'special circumstances' and mutual commercial acquiescence. When paired with a comprehensive user affidavit and historical sales records showing parallel market presence, Section 12 provides the legal vehicle for the examiner to waive the Section 11(1) citation."
    },
    {
        question: "Can a Letter of Consent or Coexistence Agreement overcome Section 9 objections?",
        answer: "No. Consent letters and coexistence agreements are strictly designed to resolve Section 11 Relative Grounds of Refusal (conflicts with prior cited third-party trademarks). They have no legal effect on Section 9 Absolute Grounds of Refusal, which relate to a mark's intrinsic lack of distinctiveness, descriptive character, generic nature, or customary commercial usage. An applicant facing a Section 9 objection must prove acquired distinctiveness or secondary meaning independently."
    },
    {
        question: "Are consent letters accepted for pharmaceutical and medicinal trademarks in Class 5?",
        answer: "In pharmaceutical and medicinal products, Indian courts and the Trade Marks Registry apply the doctrine of strict scrutiny established in Cadila Health Care v. Cadila Pharmaceuticals. Because phonetic or visual similarity in medicines can lead to catastrophic health consequences and fatal dispensing errors, public interest strictly overrides private commercial consent. Consequently, the Registry routinely rejects consent letters in Class 5 if there is any plausible risk of patient confusion."
    },
    {
        question: "What is the legal difference between a Letter of Consent (NOC) and a Trademark Coexistence Agreement?",
        answer: "A Letter of Consent (often called an NOC) is a unilateral declaration executed by the cited proprietor confirming they have no objection to the applicant's registration of the specific mark for designated goods or services. In contrast, a Trademark Coexistence Agreement is a formal bilateral contract outlining comprehensive commercial boundaries—such as geographical territorial divisions, specific trade channels, restrictions on future expansion, digital branding rules, visual trade dress distinctions, and dispute resolution mechanisms."
    },
    {
        question: "How is a Trademark Consent Letter filed with the Indian Trade Marks Registry?",
        answer: "A Trademark Consent Letter is typically filed online through the IP India e-filing portal either as part of the formal written Reply to the Examination Report or uploaded on Form TM-M with the prescribed official fee (₹900 for online filing) under the category of 'Miscellaneous Request / Submission of Documents'. It must be accompanied by an affidavit of the authorized signatory, board resolutions (if applicable), and an amended goods/services specification if conditioned upon class delimitations."
    },
    {
        question: "What stamp duty is required for a Trademark Coexistence Agreement in India?",
        answer: "A Trademark Coexistence Agreement is a commercial contract and must be executed on non-judicial stamp paper or e-stamped in accordance with the Stamp Act of the state where it is executed (e.g., Maharashtra, Delhi, Karnataka, or Tamil Nadu). Stamp duty typically ranges from ₹100 to ₹1,000 depending on state-specific schedules for general commercial agreements without consideration. If executed outside India, it must be notarized and apostilled/stamped within three months of receipt in India."
    },
    {
        question: "What legal remedies exist if a party breaches a Trademark Coexistence Agreement?",
        answer: "If a party violates the agreed boundaries of a coexistence agreement (for example, by expanding into an excluded product category, using prohibited trade dress, or filing trademark applications in restricted territories), the aggrieved party can enforce the contract through commercial dispute resolution mechanisms. This includes filing a civil suit for breach of contract and permanent injunction, invoking arbitration under the Indian Arbitration and Conciliation Act, 1996, or filing a Section 57 rectification petition to cancel the infringing trademark registration."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "section-11-objection", title: "Section 11 Objections" },
    { id: "section-12-honest-use", title: "Section 12 Framework" },
    { id: "consent-vs-coexistence", title: "NOC vs Agreement" },
    { id: "comparison-matrix", title: "Comparison Matrix" },
    { id: "registry-acceptance", title: "Registry Discretion" },
    { id: "pharma-exception", title: "Pharma Strict Scrutiny" },
    { id: "essential-clauses", title: "10 Key Clauses" },
    { id: "noc-format-template", title: "Sample NOC Format" },
    { id: "resolution-workflow", title: "7-Step Workflow" },
    { id: "procedural-checklist", title: "Filing Checklist" },
    { id: "case-laws", title: "Landmark Precedents" },
    { id: "faqs", title: "FAQs" },
    { id: "strategic-takeaway", title: "Strategic Advice" },
];

export default function TrademarkConsentCoexistencePage() {
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
        "headline": "Trademark Consent Letter and Coexistence Agreement in India: Legal Guide & Format",
        "description": "Overcome Section 11 objections with a trademark consent letter & coexistence agreement in India. Learn legal formats, Section 12 honest concurrent use & rules.",
        "image": "https://www.iprkaro.com/images/og/trademark-consent-letter-coexistence-agreement-india.png",
        "datePublished": "2026-09-25T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/trademark-consent-letter-coexistence-agreement-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark Consent Letter & Coexistence Agreement India | Guide",
        "url": "https://www.iprkaro.com/trademark-consent-letter-coexistence-agreement-india",
        "description": "Overcome Section 11 objections with a trademark consent letter & coexistence agreement in India. Learn legal formats, Section 12 honest concurrent use & rules.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-consent-letter-coexistence-agreement-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-consent-letter-coexistence-agreement-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Consent & Coexistence", "item": "https://www.iprkaro.com/trademark-consent-letter-coexistence-agreement-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "7-Step Process to Overcome Section 11 Objections via Consent Letter & Coexistence Agreement",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Analyze Examination Report & Cited Conflicting Marks Under Section 11(1)" },
            { "@type": "ListItem", "position": 2, "name": "Commercial & Legal Investigation of Cited Trademark Proprietor" },
            { "@type": "ListItem", "position": 3, "name": "Structuring Terms & Negotiating Market Delimitation Boundaries" },
            { "@type": "ListItem", "position": 4, "name": "Drafting & Formal Execution of Coexistence Agreement & Consent NOC" },
            { "@type": "ListItem", "position": 5, "name": "Compiling Section 12 Honest Concurrent Use User Affidavit & Evidence" },
            { "@type": "ListItem", "position": 6, "name": "E-Filing Formal Examination Reply and Form TM-M Miscellaneous Request" },
            { "@type": "ListItem", "position": 7, "name": "Advocating at Show Cause Hearing to Secure Acceptance in Trade Marks Journal" }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />

            {/* HERO SECTION */}
            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Trademark Objection Resolution</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Consent Letter <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>and Coexistence Agreement</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Receiving an Examination Report with Section 11(1) conflicting mark citations does not mean your trademark application is doomed. When competing or allied enterprises seek peaceful market sharing, a legally crafted <strong>Letter of Consent (NOC)</strong> or comprehensive <strong>Trademark Coexistence Agreement</strong> provides a proven statutory pathway under Section 12 honest concurrent use. Discover how to negotiate coexistence boundaries, examiner acceptance criteria, essential drafting clauses, and ready-to-use legal formats.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 25-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 15 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Legal Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Overcome Section 11 Objection <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult IP Counsel: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-consent-letter-coexistence-agreement-india.png"
                                    alt="Trademark Consent Letter and Coexistence Agreement in India Guide"
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
                        { label: "Services", href: "/our-services" },
                        { label: "Trademark Consent & Coexistence", href: "/trademark-consent-letter-coexistence-agreement-india" }
                    ]} />
                </div>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        {/* LEFT DESKTOP SIDEBAR: TOC */}
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* CENTER COLUMN: MAIN CONTENT */}
                        <main className="min-w-0">
                            {/* MOBILE TOC ACCORDION */}
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

                                    {/* SECTION 1: OVERVIEW */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trademark Consent & Coexistence
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                A Trademark Consent Letter (NOC) is a formal declaration from the owner of an earlier cited trademark authorizing the registration of a newer, similar mark under Section 12 of the Trade Marks Act, 1999. When commercial relations require detailed operational boundaries (such as distinct product lines, non-overlapping territories, or specific marketing channels), parties execute a bilateral <strong>Trademark Coexistence Agreement</strong>. While private consent significantly strengthens an objection defense, the Indian Trade Marks Registry retains absolute statutory discretion to ensure that public interest and consumer clarity remain uncompromised.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            During the official examination of a trademark application in India, the most frequent roadblock faced by entrepreneurs is an objection raised under <strong>Section 11(1) of the Trade Marks Act, 1999</strong> (Relative Grounds of Refusal). The Examiner searches the national database and cites one or more prior pending or registered marks that bear phonetic, visual, or conceptual similarities in identical or allied classes.
                                        </p>
                                        <p className="mb-6">
                                            Rather than engaging in years of adversarial opposition or costly High Court litigation, modern corporate strategy favors negotiated settlement. When both businesses recognize that their customer bases do not collide or when the cited mark belongs to a sister company, vendor, or global affiliate, they utilize two vital legal instruments:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mb-6">
                                            <li><strong>Letter of Consent (NOC):</strong> A unilateral instrument executed by the registered owner of the cited mark granting unequivocal permission to the Trade Marks Registry to register the applicant&apos;s mark.</li>
                                            <li><strong>Trademark Coexistence Agreement:</strong> A comprehensive, legally binding contract governing operational rules, trade dress differences, product delimitations, negative covenants, and dispute settlement mechanisms between two commercial entities.</li>
                                        </ul>
                                        <p className="mb-6">
                                            Leveraging these instruments alongside <Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">standard trademark registration steps</Link> transforms a potential application rejection into a secure, collaborative brand coexistence framework.
                                        </p>
                                    </section>

                                    {/* SECTION 2: SECTION 11 OBJECTIONS */}
                                    <section id="section-11-objection" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTriangleExclamation} className="w-8 h-8 mr-3 text-amber-600" />
                                            Overcoming Section 11 Relative Grounds
                                        </h2>
                                        <p className="mb-6">
                                            Section 11(1) of the Trade Marks Act, 1999 creates a statutory bar against the registration of a trademark if:
                                        </p>
                                        <div className="bg-purple-50/50 border-l-4 border-[#6E5E93] p-5 rounded-r-xl my-6">
                                            <p className="text-sm font-semibold text-gray-800 m-0">
                                                (a) Its identity with an earlier trade mark and similarity of goods or services covered; or<br />
                                                (b) Its similarity to an earlier trade mark and the identity or similarity of goods or services,<br />
                                                creates a likelihood of confusion on the part of the public, including the likelihood of association with the earlier trade mark.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            When an Examination Report cites a prior mark, an applicant can conventionally argue visual distinctions, phonetic dissimilarity, or distinct consumer demographics. However, if the marks are substantially similar, purely rhetorical arguments rarely convince the Hearing Officer.
                                        </p>
                                        <p className="mb-6">
                                            This is where securing a <strong>Letter of Consent / NOC</strong> from the proprietor of the cited mark changes the trajectory of the prosecution. By producing formal written acquiescence, the applicant dismantles the assumption of commercial injury to the prior owner, opening the gateway to statutory registration under Section 12.
                                        </p>
                                    </section>

                                    {/* SECTION 3: SECTION 12 HONEST CONCURRENT USE */}
                                    <section id="section-12-honest-use" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 12: Honest Concurrent Use & Discretion
                                        </h2>
                                        <p className="mb-6">
                                            The Trade Marks Act, 1999 recognizes that in a dynamic, continent-sized economy, multiple businesses may adopt similar marks in good faith without deceitful intent. To address this reality, <strong>Section 12</strong> provides:
                                        </p>
                                        <blockquote className="border-l-4 border-[#6E5E93] bg-purple-50/50 p-4 rounded-r-xl italic my-6 text-gray-800">
                                            &ldquo;In the case of honest concurrent use or of other special circumstances which in the opinion of the Registrar, make it proper so to do, the Registrar may permit the registration of trade marks which are identical or similar in respect of the same or similar goods or services, subject to such conditions and limitations, if any, as the Registrar may think fit to impose.&rdquo;
                                            <footer className="text-xs font-semibold text-gray-600 mt-2 not-italic">— Section 12, Trade Marks Act, 1999</footer>
                                        </blockquote>
                                        <p className="mb-6">
                                            Indian trademark jurisprudence establishes that a <strong>Letter of Consent or Coexistence Agreement constitutes &ldquo;other special circumstances&rdquo;</strong> within the meaning of Section 12. When the prior registered proprietor certifies in writing that both marks have coexisted or can operate simultaneously without market conflict, the statutory threshold for the Registrar to exercise discretionary approval is fully met.
                                        </p>
                                        <p className="mb-6">
                                            To maximize success under Section 12, the consent letter should always be reinforced by a sworn <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit</Link> documenting prior commercial sales, marketing expenditures, and parallel market adoption.
                                        </p>
                                    </section>

                                    {/* SECTION 4: CONSENT VS COEXISTENCE */}
                                    <section id="consent-vs-coexistence" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Consent Letter (NOC) vs Coexistence Agreement
                                        </h2>
                                        <p className="mb-6">
                                            While practitioners often use the terms interchangeably, a Letter of Consent and a Trademark Coexistence Agreement serve distinct legal functions and carry differing levels of complexity:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gradient-to-br from-indigo-50/60 to-white p-6 rounded-2xl border border-indigo-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-xs font-black uppercase tracking-wider text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full">Unilateral NOC</span>
                                                    <span className="text-xs font-bold text-gray-500">Registry Filing</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Letter of Consent (NOC)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                                    A formal written declaration signed solely by the cited proprietor confirming they have examined the applicant&apos;s mark and raise no objection to its registration.
                                                </p>
                                                <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
                                                    <li>Ideal for sister entities, group subsidiaries, or holding companies.</li>
                                                    <li>Straightforward to draft, execute, and submit on Form TM-M.</li>
                                                    <li>Focuses exclusively on Registry proceedings without governing operational trade terms.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-gradient-to-br from-purple-50/60 to-white p-6 rounded-2xl border border-purple-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-xs font-black uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full">Bilateral Contract</span>
                                                    <span className="text-xs font-bold text-gray-500">Commercial Bounds</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Coexistence Agreement</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                                    A bilateral contract between independent commercial competitors defining strict market, visual, territorial, and digital boundaries for long-term coexistence.
                                                </p>
                                                <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
                                                    <li>Essential for unrelated businesses operating in adjacent markets.</li>
                                                    <li>Includes covenants not to challenge, sue, or oppose each other.</li>
                                                    <li>Enforceable in Indian civil courts under the Indian Contract Act, 1872.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            In practice, corporate applicants negotiating with external competitors often execute a private <strong>Trademark Coexistence Agreement</strong>, and as an agreed deliverable under that contract, the cited party executes a clean <strong>Letter of Consent (NOC)</strong> that is submitted directly to the Trade Marks Registry.
                                        </p>
                                    </section>

                                    {/* SECTION 5: COMPARISON MATRIX */}
                                    <section id="comparison-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Legal Comparison Matrix
                                        </h2>
                                        <p className="mb-6">
                                            The table below provides a comprehensive comparison across key legal, procedural, and commercial parameters under Indian intellectual property law:
                                        </p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse border border-gray-200 bg-white shadow-sm rounded-xl overflow-hidden">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 text-xs uppercase tracking-wider font-extrabold">
                                                        <th className="p-4 border-b border-gray-200">Parameter</th>
                                                        <th className="p-4 border-b border-gray-200 text-indigo-800">Letter of Consent (NOC)</th>
                                                        <th className="p-4 border-b border-gray-200 text-purple-800">Coexistence Agreement</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Legal Nature</td>
                                                        <td className="p-4 text-gray-700">Unilateral declaration / No-Objection certificate</td>
                                                        <td className="p-4 text-gray-700">Bilateral commercial contract under Contract Act, 1872</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Executing Parties</td>
                                                        <td className="p-4 text-gray-700">Signed solely by the prior registered proprietor</td>
                                                        <td className="p-4 text-gray-700">Signed by both the applicant and prior proprietor</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Primary Objective</td>
                                                        <td className="p-4 text-gray-700">Overcoming Section 11(1) examination objections</td>
                                                        <td className="p-4 text-gray-700">Preventing future disputes, infringement, and oppositions</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Public Filing Status</td>
                                                        <td className="p-4 text-gray-700">Uploaded to Registry portal (becomes part of public record)</td>
                                                        <td className="p-4 text-gray-700">Maintained as confidential private contract (or filed redacted)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Scope of Terms</td>
                                                        <td className="p-4 text-gray-700">Limited to registration consent for specific mark/class</td>
                                                        <td className="p-4 text-gray-700">Covers territories, trade dress, domains, non-compete, breach</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Stamp Duty & Notarization</td>
                                                        <td className="p-4 text-gray-700">Affidavit format on stamp paper / notarized declaration</td>
                                                        <td className="p-4 text-gray-700">Stamped under State Stamp Act as commercial agreement</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Binding on Registrar?</td>
                                                        <td className="p-4 text-gray-700">No, subject to Section 12 public interest review</td>
                                                        <td className="p-4 text-gray-700">No, but serves as conclusive evidence of special circumstances</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Breach Remedies</td>
                                                        <td className="p-4 text-gray-700">Withdrawal of consent (difficult once advertised)</td>
                                                        <td className="p-4 text-gray-700">Specific performance, civil injunctions, damages, arbitration</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 6: REGISTRY ACCEPTANCE & PUBLIC INTEREST */}
                                    <section id="registry-acceptance" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Will the Registry Accept an NOC? (Public Interest Test)
                                        </h2>
                                        <p className="mb-6">
                                            A critical misconception among businesses is that obtaining a consent letter guarantees immediate registration. Under Indian law, <strong>the Registrar is not a mere passive recorder of private contracts</strong>. The Registrar of Trade Marks is a statutory authority charged with protecting the general purchasing public from confusion and deceptive association.
                                        </p>
                                        <p className="mb-6">
                                            The Delhi High Court and IPAB (Intellectual Property Appellate Board) have consistently held that private parties cannot contract out of statutory confusion. When evaluating a Letter of Consent or Coexistence Agreement under Section 12, the Registry applies a three-fold <strong>Public Interest Test</strong>:
                                        </p>

                                        <div className="space-y-4 my-6 not-prose">
                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center">
                                                    <span className="w-6 h-6 rounded-full bg-[rgb(110,94,147)] text-white text-xs flex items-center justify-center mr-3 font-bold">1</span>
                                                    Degree of Mark Similarity & Visual Distinctiveness
                                                </h3>
                                                <p className="text-sm text-gray-600 pl-9 m-0">
                                                    If the marks are identical wordmarks with identical spellings, the Registry will be highly skeptical. However, if the marks share a common prefix or suffix but possess distinctive logos, stylized fonts, or device elements, the consent letter carries substantial persuasive weight.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center">
                                                    <span className="w-6 h-6 rounded-full bg-[rgb(110,94,147)] text-white text-xs flex items-center justify-center mr-3 font-bold">2</span>
                                                    Nature of Goods, Services & Trade Channels
                                                </h3>
                                                <p className="text-sm text-gray-600 pl-9 m-0">
                                                    Consent letters succeed easily when goods within the same broad class serve distinct consumer segments (e.g., luxury industrial machinery vs consumer hand tools in Class 7, or enterprise B2B software vs casual mobile games in Class 9).
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center">
                                                    <span className="w-6 h-6 rounded-full bg-[rgb(110,94,147)] text-white text-xs flex items-center justify-center mr-3 font-bold">3</span>
                                                    Sophistication of the Relevant Purchasing Public
                                                </h3>
                                                <p className="text-sm text-gray-600 pl-9 m-0">
                                                    Specialized business buyers, engineers, and corporate procurement heads exercise higher discernment and are unlikely to be confused. Conversely, ordinary retail consumers purchasing low-cost FMCG products are deemed more susceptible to casual deception.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: PHARMACEUTICAL EXCEPTION */}
                                    <section id="pharma-exception" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-red-600" />
                                            Strict Scrutiny: The Pharmaceutical Exception
                                        </h2>
                                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
                                            <p className="text-sm font-bold text-red-900 m-0">
                                                WARNING FOR CLASS 5 APPLICANTS: The Trade Marks Registry and Indian Courts virtually never accept consent letters or coexistence agreements for pharmaceutical, medicinal, and healthcare preparations.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            In the landmark ruling <strong>Cadila Health Care Ltd. v. Cadila Pharmaceuticals Ltd. (2001) 5 SCC 73</strong>, the Supreme Court of India established the doctrine of <em>strict scrutiny</em> for medicinal products. The Supreme Court underscored that confusion in commercial goods merely results in financial loss, whereas confusion in medicines can result in life-threatening health risks, incorrect treatment, and fatal dosage errors.
                                        </p>
                                        <p className="mb-6">
                                            Because medicines are dispensed across India by busy chemists with varying handwriting legibility and language capabilities, private consent between two pharmaceutical companies cannot override the paramount safety of patients. Consequently, if your mark is in Class 5 and faces Section 11 citations for identical or similar drug names, relying on a consent letter will almost certainly fail. You must rebrand or pursue cancellation of the cited mark if abandoned.
                                        </p>
                                    </section>

                                    {/* SECTION 8: 10 KEY CLAUSES */}
                                    <section id="essential-clauses" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuilding} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            10 Crucial Coexistence Agreement Clauses
                                        </h2>
                                        <p className="mb-6">
                                            A robust Trademark Coexistence Agreement must balance immediate registration objectives with long-term brand equity protection. When drafting the contract, ensure the following 10 clauses are meticulously defined:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">1. Recitals & Title Verification</h4>
                                                <p className="text-xs text-gray-600 m-0">Accurately details the application numbers, registration certificates, filing dates, and current business activities of both parties.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">2. Delimitation of Goods/Services</h4>
                                                <p className="text-xs text-gray-600 m-0">Defines exact carve-outs, class specifications, and negative covenants barring expansion into the other party&apos;s commercial domain.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">3. Territorial & Geographic Allocation</h4>
                                                <p className="text-xs text-gray-600 m-0">Restricts sales, distribution channels, or physical store operations to specific domestic states or international jurisdictions.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">4. Visual Trade Dress & Logo Restraints</h4>
                                                <p className="text-xs text-gray-600 m-0">Mandates distinct font typography, color combinations, house-mark prefix additions, and logo stylization rules.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">5. Digital, Domain & Social Media Rules</h4>
                                                <p className="text-xs text-gray-600 m-0">Governs top-level domain names, social media handles, e-commerce keywords, and paid Google Ads bidding parameters.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">6. Covenant Not to Oppose or Cancel</h4>
                                                <p className="text-xs text-gray-600 m-0">Mutual undertaking not to file Section 21 oppositions, Section 57 rectifications, or civil infringement lawsuits against compliant use.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">7. Registry Cooperation & NOC Execution</h4>
                                                <p className="text-xs text-gray-600 m-0">Express obligation on the prior owner to execute and notarize the standalone Letter of Consent for filing before the Trade Marks Registry.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">8. Third-Party Enforcement Coordination</h4>
                                                <p className="text-xs text-gray-600 m-0">Mechanisms for dealing with third-party copycats, including joint policing, unilateral enforcement rights, or mutual notifications.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">9. Assignment & Successor Binding</h4>
                                                <p className="text-xs text-gray-600 m-0">Ensures that in the event of <Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] hover:underline font-semibold">trademark assignment or licensing</Link>, the agreement remains binding on future acquirers.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">10. Dispute Resolution & Seat of Arbitration</h4>
                                                <p className="text-xs text-gray-600 m-0">Specifies governing Indian law, commercial court jurisdiction, and fast-track arbitration under the Arbitration &amp; Conciliation Act, 1996.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: SAMPLE NOC FORMAT */}
                                    <section id="noc-format-template" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Standard Format & Sample NOC Template
                                        </h2>
                                        <p className="mb-6">
                                            Below is a standard, verified template for a <strong>Letter of Consent / No Objection Certificate (NOC)</strong> to be submitted to the Trade Marks Registry on the official letterhead of the consenting proprietor (duly stamped and notarized):
                                        </p>

                                        <div className="bg-gray-900 text-gray-100 p-6 rounded-2xl shadow-xl overflow-x-auto my-6 font-mono text-xs leading-relaxed not-prose border border-gray-800">
                                            <div className="text-center font-bold text-purple-300 mb-4 pb-2 border-b border-gray-700">
                                                BEFORE THE REGISTRAR OF TRADE MARKS, TRADE MARKS REGISTRY, INDIA<br />
                                                IN THE MATTER OF TRADEMARK APPLICATION NO. [________] IN CLASS [__]<br />
                                                IN THE NAME OF [APPLICANT ENTITY NAME]
                                            </div>

                                            <div className="space-y-4">
                                                <p className="font-bold text-amber-300">LETTER OF CONSENT / NO OBJECTION CERTIFICATE</p>

                                                <p>To,<br />
                                                    The Registrar of Trade Marks,<br />
                                                    Trade Marks Registry at [Mumbai / Delhi / Kolkata / Chennai / Ahmedabad]
                                                </p>

                                                <p>
                                                    We, <strong>[CONSENTING COMPANY NAME]</strong>, a company incorporated under the Companies Act, having our registered office at [Registered Address] (hereinafter referred to as the &ldquo;Consenting Proprietor&rdquo;), through our authorized signatory [Name and Designation], do hereby solemnly affirm, declare, and state as under:
                                                </p>

                                                <p>
                                                    1. That we are the absolute registered proprietor / prior applicant of the trademark <strong>&ldquo;[CITED TRADEMARK]&rdquo;</strong> registered / pending under Application/Registration No. <strong>[________]</strong> in Class <strong>[__]</strong> for [Brief description of goods/services].
                                                </p>

                                                <p>
                                                    2. That we have been apprised of the trademark application filed by <strong>[APPLICANT ENTITY NAME]</strong>, having their principal place of business at [Applicant Address], for the trademark <strong>&ldquo;[APPLICANT TRADEMARK]&rdquo;</strong> under Application No. <strong>[________]</strong> in Class <strong>[__]</strong> for the specification of [Specify agreed goods/services].
                                                </p>

                                                <p>
                                                    3. That we have thoroughly examined the mark and goods/services of the Applicant and have satisfied ourselves that the commercial activities, marketing channels, and consumer profiles of the two entities are distinct and that no consumer confusion or public deception shall arise from the concurrent operation and registration of the said marks.
                                                </p>

                                                <p>
                                                    4. That in terms of <strong>Section 12 of the Trade Marks Act, 1999</strong>, we have <strong>NO OBJECTION WHATSOEVER</strong> to the acceptance, advertisement, and final registration of the trademark <strong>&ldquo;[APPLICANT TRADEMARK]&rdquo;</strong> under Application No. <strong>[________]</strong> in Class <strong>[__]</strong> in the name of the Applicant.
                                                </p>

                                                <p>
                                                    5. That we request the learned Registrar of Trade Marks to kindly waive the objection cited under Section 11(1) of the Trade Marks Act, 1999 in respect of our cited mark and proceed with the registration of the Applicant&apos;s mark.
                                                </p>

                                                <p className="pt-4">
                                                    IN WITNESS WHEREOF, the Consenting Proprietor has executed this Letter of Consent through its Authorized Signatory on this [Date] day of [Month], 20[__].
                                                </p>

                                                <div className="flex justify-between pt-6 border-t border-gray-700">
                                                    <div>
                                                        [Official Company Seal / Stamp]
                                                    </div>
                                                    <div className="text-right">
                                                        For <strong>[CONSENTING COMPANY NAME]</strong><br /><br /><br />
                                                        ________________________<br />
                                                        Authorized Signatory<br />
                                                        Name: [Name]<br />
                                                        Designation: [Director / Authorized Officer]
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-xs text-gray-500 italic mt-2 mb-6">
                                            Note: Ensure the document is printed on corporate letterhead, affixed with appropriate stamp duty, accompanied by a certified copy of the Board Resolution / <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline">Form TM-48 Power of Attorney</Link>, and notarized by a certified Notary Public.
                                        </p>
                                    </section>

                                    {/* SECTION 10: 7-STEP RESOLUTION WORKFLOW */}
                                    <section id="resolution-workflow" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRocket} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Objection Resolution Workflow
                                        </h2>
                                        <p className="mb-6">
                                            Follow this systematic legal roadmap to successfully negotiate, execute, and file a Trademark Consent Letter before the Trade Marks Registry:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="flex items-start bg-purple-50/40 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-9 h-9 rounded-xl bg-[rgb(110,94,147)] text-white font-bold flex items-center justify-center mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Analyze Section 11 Citations</h3>
                                                    <p className="text-sm text-gray-600 m-0">Examine the official Examination Report. Note all cited application/registration numbers, owner names, class classifications, and cited mark representations.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-9 h-9 rounded-xl bg-[rgb(110,94,147)] text-white font-bold flex items-center justify-center mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Conduct Commercial & Legal Diligence</h3>
                                                    <p className="text-sm text-gray-600 m-0">Conduct an IP audit to verify if the cited mark is actively used, renewed, abandoned, or belonging to a corporate entity with whom your business maintains commercial relations.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-9 h-9 rounded-xl bg-[rgb(110,94,147)] text-white font-bold flex items-center justify-center mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Initiate Constructive Dialogue</h3>
                                                    <p className="text-sm text-gray-600 m-0">Engage senior leadership or IP counsel of the cited entity. Offer clear commercial delimitations (such as restricting your goods specification) to assure them of zero market conflict.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-9 h-9 rounded-xl bg-[rgb(110,94,147)] text-white font-bold flex items-center justify-center mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Draft Coexistence Terms & Standalone NOC</h3>
                                                    <p className="text-sm text-gray-600 m-0">Draft the bilateral Coexistence Agreement incorporating trade dress rules, digital boundaries, and dispute terms alongside the clean standalone Letter of Consent for the Registry.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-9 h-9 rounded-xl bg-[rgb(110,94,147)] text-white font-bold flex items-center justify-center mr-4 flex-shrink-0">5</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Formal Execution & Stamping</h3>
                                                    <p className="text-sm text-gray-600 m-0">Execute the documents on appropriate stamp paper with corporate seals, Board Resolutions of authorized signatories, and formal notarization.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-9 h-9 rounded-xl bg-[rgb(110,94,147)] text-white font-bold flex items-center justify-center mr-4 flex-shrink-0">6</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">File Form TM-M & Written Examination Reply</h3>
                                                    <p className="text-sm text-gray-600 m-0">Submit the formal written response on the IP India portal. Upload the notarized Consent Letter on Form TM-M alongside Section 12 user evidence and amended class specifications if required.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-purple-50/40 p-5 rounded-2xl border border-purple-100">
                                                <div className="w-9 h-9 rounded-xl bg-[rgb(110,94,147)] text-white font-bold flex items-center justify-center mr-4 flex-shrink-0">7</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Advocate at Show Cause Hearing</h3>
                                                    <p className="text-sm text-gray-600 m-0">Your trademark attorney appears before the Hearing Officer to establish honest concurrent use and special circumstances, securing the order for journal advertisement.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: PROCEDURAL CHECKLIST */}
                                    <section id="procedural-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-emerald-600" />
                                            Documentation & Procedural Checklist
                                        </h2>
                                        <p className="mb-6">
                                            Before submitting your consent package to the Trade Marks Registry, ensure the evidentiary dossier contains every mandatory compliance item:
                                        </p>

                                        <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 my-6 not-prose">
                                            <ul className="space-y-3 text-sm text-gray-800">
                                                <li className="flex items-center">
                                                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0" />
                                                    <span><strong>Executed Consent Letter:</strong> Original or notarized copy on corporate letterhead with full class details.</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0" />
                                                    <span><strong>Board Resolution / Authorization:</strong> Document proving the signatory possesses legal authority to bind the consenting entity.</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0" />
                                                    <span><strong>Section 12 User Affidavit:</strong> Sworn affidavit under Rule 25 demonstrating commercial adoption, sales figures, and invoices.</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0" />
                                                    <span><strong>Form TM-M Miscellaneous Receipt:</strong> Government fee receipt (₹900 e-filing) for document recordal.</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0" />
                                                    <span><strong>Amended Goods Specification (if applicable):</strong> Form TM-M request restricting overlapping products.</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0" />
                                                    <span><strong>Foreign Execution Apostille:</strong> If executed abroad, notarization and apostille/consular legalization under the Hague Convention.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 12: LANDMARK PRECEDENTS */}
                                    <section id="case-laws" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Indian Judicial Precedents
                                        </h2>
                                        <p className="mb-6">
                                            Indian High Courts and the Supreme Court have shaped the doctrine of honest concurrent use and trademark coexistence through foundational rulings:
                                        </p>

                                        <div className="space-y-6 my-6 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">1. Cadila Health Care Ltd. v. Cadila Pharmaceuticals Ltd. (2001)</h3>
                                                    <span className="text-xs bg-red-100 text-red-800 font-bold px-2.5 py-1 rounded-full">Supreme Court</span>
                                                </div>
                                                <p className="text-xs font-semibold text-[rgb(110,94,147)] mb-2">Principle: Paramount Public Interest in Medicinal Brands</p>
                                                <p className="text-sm text-gray-700 m-0">
                                                    The Supreme Court ruled that in medicinal and pharmaceutical trademarks, public interest strictly prohibits deceptive similarity, establishing that private commercial consent cannot validate concurrent registrations where patient health could be compromised.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">2. Century Traders v. Roshan Lal Duggar &amp; Co. (1977)</h3>
                                                    <span className="text-xs bg-indigo-100 text-indigo-800 font-bold px-2.5 py-1 rounded-full">Delhi High Court</span>
                                                </div>
                                                <p className="text-xs font-semibold text-[rgb(110,94,147)] mb-2">Principle: Foundations of Honest Concurrent Adoption</p>
                                                <p className="text-sm text-gray-700 m-0">
                                                    The Division Bench affirmed that prior commercial use and good-faith parallel adoption create protectable rights under Indian trademark law, providing the foundational doctrine for Section 12 honest concurrent use registrations.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">3. Stiefel Laboratories Inc. v. Registrar of Trade Marks (2014)</h3>
                                                    <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2.5 py-1 rounded-full">IPAB Ruling</span>
                                                </div>
                                                <p className="text-xs font-semibold text-[rgb(110,94,147)] mb-2">Principle: Weight of Consent Letters in Allied Commercial Lines</p>
                                                <p className="text-sm text-gray-700 m-0">
                                                    The IPAB held that where sophisticated commercial entities operating in non-competing product categories enter into a bona fide coexistence framework, the Registrar ought to give substantial weight to the Letter of Consent under Section 12 &ldquo;special circumstances&rdquo;.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 13: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-16">
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

                                    {/* SECTION 14: STRATEGIC ADVICE */}
                                    <section id="strategic-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Brand & Legal Takeaway
                                        </h2>
                                        <p className="mb-6">
                                            A Section 11 Examination Objection should never be viewed as a dead end. In commercial brand building, discovering an earlier cited trademark often represents an opportunity to establish constructive industry relationships through a negotiated <strong>Trademark Coexistence Agreement</strong> or <strong>Letter of Consent (NOC)</strong>.
                                        </p>
                                        <p className="mb-6">
                                            By formally bounding product specifications, trade dress packaging, and digital marketing channels, both businesses can coexist harmoniously without incurring the paralyzing costs of High Court <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off and trademark infringement litigation</Link>.
                                        </p>
                                        <p className="mb-6">
                                            If your trademark application is currently marked as &ldquo;Objected&rdquo; on the Trade Marks Registry portal, do not attempt informal or unvetted responses. Consult experienced intellectual property attorneys to evaluate whether your cited mark can be resolved via Section 12 honest concurrent use, negotiate formal coexistence terms, and secure the legal exclusivity your business deserves.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA BANNER */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Objection Resolution
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Resolve Section 11 Trademark Objections
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Facing conflicting mark citations? Partner with registered trademark attorneys to draft airtight Coexistence Agreements, secure valid Consent NOCs, and achieve Section 12 registry acceptance.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Resolve Objection Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Certified IP Advocates • Expert Section 12 Reply Drafting • Fixed Transparent Pricing
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        {/* RIGHT DESKTOP SIDEBAR: AUTHOR & CTAS */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            {/* About Author */}
                            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-24 h-24 rounded-full mb-4 shadow-md object-cover" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h3>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Trademark Research Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                                    Rahul specializes in trademark prosecution, Section 11 objection resolution, honest concurrent use strategies under Section 12, and negotiating cross-border coexistence frameworks for enterprise brands.
                                </p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Need an Objection Strategy?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">
                                    Received an Examination Report with conflicting mark citations? Consult registered trademark attorneys to draft custom coexistence contracts and formal NOC filings.
                                </p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        Consult IP Attorney
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Passing Off vs Infringement</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-assignment-vs-licensing-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faHandshake} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Assignment vs License</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">User Affidavit Rules</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Form TM-48 POA</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/single-class-vs-multi-class-trademark-application-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faTable} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Single vs Multi Class</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-renew-a-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faRotate} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Renew Trademark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Clearance Search</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faRocket} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Startup Brand Guide</span>
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
