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
    faCheck,
    faPhone,
    faRocket,
    faGlobe,
    faClock,
    faRotate,
    faGavel,
    faFileLines,
    faStamp,
    faReceipt,
    faBuilding,
    faUserCheck,
    faSignature,
    faHandshake
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: validateAndNormalizeTitle(
        "Form TM-48 Power of Attorney for Trademarks | IPR Karo",
        "app/form-tm-48-power-of-attorney-trademark-india/page.tsx",
        "What is Form TM-48 (Power of Attorney) in Trademark Filing?"
    ),
    description: validateAndNormalizeDescription(
        "Understand Form TM-48 (Power of Attorney) for trademark filing in India. Learn Rule 19 rules, stamp duty costs, who can sign, GPA vs SPA, and e-filing steps.",
        "app/form-tm-48-power-of-attorney-trademark-india/page.tsx"
    ),
    keywords: [
        "what is form tm-48",
        "form tm 48 trademark power of attorney india",
        "power of attorney for trademark filing in india",
        "stamp duty on tm 48 power of attorney",
        "who can sign tm 48 trademark form",
        "rule 19 trade marks rules 2017",
        "section 145 trade marks act",
        "general power of attorney trademark india",
        "tm 48 format pdf draft",
        "trademark agent authorization form tm-48"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/form-tm-48-power-of-attorney-trademark-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Form TM-48 Power of Attorney for Trademarks | IPR Karo",
        description: "Understand Form TM-48 (Power of Attorney) for trademark filing in India. Learn Rule 19 rules, stamp duty costs, who can sign, GPA vs SPA, and e-filing steps.",
        url: "https://www.iprkaro.com/form-tm-48-power-of-attorney-trademark-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/form-tm-48-power-of-attorney-trademark-india.png",
                width: 1200,
                height: 630,
                alt: "Form TM-48 Power of Attorney in Trademark Filing India Legal Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Form TM-48 Power of Attorney for Trademarks | IPR Karo",
        description: "Understand Form TM-48 (Power of Attorney) for trademark filing in India. Learn Rule 19 rules, stamp duty costs, who can sign, GPA vs SPA, and e-filing steps.",
        images: ["https://www.iprkaro.com/images/og/form-tm-48-power-of-attorney-trademark-india.jpg"],
    }
};

const faqs = [
    {
        question: "What is Form TM-48 in trademark filing in India?",
        answer: "Form TM-48 is the official statutory instrument of Power of Attorney prescribed under Rule 19 of the Trade Marks Rules, 2017 and Section 145 of the Trade Marks Act, 1999. It authorizes a registered trademark agent, advocate, or legal practitioner to act on behalf of the applicant before the Trade Marks Registry for filing applications, attending hearings, responding to examination reports, and handling opposition proceedings."
    },
    {
        question: "Does signing Form TM-48 transfer my trademark ownership?",
        answer: "No. Form TM-48 is strictly an agency authorization instrument and does not transfer, assign, or dilute your trademark ownership or proprietary rights. The applicant remains 100% legal owner of the brand. It merely empowers the authorized attorney or agent to complete procedural actions, submit legal documents, and represent you before the Trade Marks Registry."
    },
    {
        question: "How much stamp duty is required on Form TM-48 in India?",
        answer: "The stamp duty on Form TM-48 is governed by state-specific Stamp Acts. In Delhi, Uttar Pradesh, Tamil Nadu, and Karnataka, Non-Judicial Stamp Paper or e-stamp of ₹100 is standard. In Maharashtra, the prescribed stamp duty under Article 48 of the Maharashtra Stamp Act is ₹500. In West Bengal and Gujarat, ₹50 to ₹100 stamp paper is used. Insufficient stamp duty triggers a Formality Check Fail notice."
    },
    {
        question: "Who is legally authorized to sign Form TM-48?",
        answer: "For a Sole Proprietorship, the individual proprietor signs personally. For a Partnership Firm, any designated partner signs with the firm stamp. For an LLP, a Designated Partner signs with the LLP seal. For a Private Limited or Public Limited Company, a Director or Authorized Signatory authorized via Board Resolution signs with the company seal. Foreign applicants require an authorized corporate officer signature."
    },
    {
        question: "What is the difference between a General and Specific Form TM-48?",
        answer: "A Specific Form TM-48 authorizes the attorney for a single trademark application number or one specific trademark proceeding. A General Power of Attorney (GPA) on Form TM-48 grants broad authority to handle all current and future trademark filings, oppositions, renewals, rectifications, and hearings for that entire entity across all classes without executing separate forms for every new filing."
    },
    {
        question: "Can Form TM-48 be submitted after filing Form TM-A online?",
        answer: "Yes. If Form TM-48 was not attached at the initial e-filing stage of Form TM-A, the Trade Marks Registry marks the status as 'Formality Check Fail'. The applicant or attorney can cure this defect by uploading the stamped, signed, and executed Form TM-48 online through a Formality Compliance response or via miscellaneous request Form TM-M within 30 days."
    },
    {
        question: "Is notarization mandatory for Form TM-48 in India?",
        answer: "For Indian domestic applicants, executing Form TM-48 on non-judicial stamp paper of appropriate value with proper signatures and corporate seal is legally sufficient and accepted by the Trade Marks Registry, though notarization is good practice. For foreign applicants executing Form TM-48 outside India, notarization and apostille (or consular legalization) is mandatory."
    },
    {
        question: "How do I change my trademark attorney using Form TM-48?",
        answer: "To substitute or change your trademark attorney of record, you must execute a fresh Form TM-48 authorizing the new attorney along with a formal revocation of the previous authorization. The new counsel files this Form TM-48 on the IP India portal under Form TM-M (Request for Alteration of Address for Service / Agent) along with the statutory government fee of ₹900."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Rule 19" },
    { id: "what-is-tm48", title: "What is Form TM-48?" },
    { id: "gpa-vs-spa", title: "General vs Specific POA" },
    { id: "statutory-contents", title: "Key Legal Contents" },
    { id: "sample-draft", title: "Sample Statutory Draft" },
    { id: "stamp-duty-rules", title: "State-Wise Stamp Duty" },
    { id: "who-can-sign", title: "Who Can Sign TM-48?" },
    { id: "when-required", title: "When is TM-48 Required?" },
    { id: "execution-workflow", title: "Execution & Filing Steps" },
    { id: "consequences-defects", title: "Consequences of Defects" },
    { id: "common-pitfalls", title: "Common Mistakes" },
    { id: "tm48-vs-assignment", title: "TM-48 vs Assignment" },
    { id: "checklist", title: "Pre-Filing Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Takeaways" },
];

export default function FormTM48PowerOfAttorneyPage() {
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
        "headline": "What is Form TM-48 (Power of Attorney) in Trademark Filing?",
        "description": "Understand Form TM-48 (Power of Attorney) for trademark filing in India. Learn Rule 19 rules, stamp duty costs, who can sign, GPA vs SPA, and e-filing steps.",
        "image": "https://www.iprkaro.com/images/og/form-tm-48-power-of-attorney-trademark-india.png",
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
            "@id": "https://www.iprkaro.com/form-tm-48-power-of-attorney-trademark-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "What is Form TM-48 (Power of Attorney) in Trademark Filing?",
        "url": "https://www.iprkaro.com/form-tm-48-power-of-attorney-trademark-india",
        "description": "Understand Form TM-48 (Power of Attorney) for trademark filing in India. Learn Rule 19 rules, stamp duty costs, who can sign, GPA vs SPA, and e-filing steps.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/form-tm-48-power-of-attorney-trademark-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/form-tm-48-power-of-attorney-trademark-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Form TM-48 Power of Attorney", "item": "https://www.iprkaro.com/form-tm-48-power-of-attorney-trademark-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "7 Steps to Execute and File Form TM-48 in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Drafting Form TM-48 with Principal & Attorney Code Details" },
            { "@type": "ListItem", "position": 2, "name": "Procuring State-Specific Non-Judicial Stamp Paper or E-Stamp" },
            { "@type": "ListItem", "position": 3, "name": "Execution with Authorized Signatory Signature and Company Seal" },
            { "@type": "ListItem", "position": 4, "name": "Notarization or Apostille for Foreign & Domestic Corporate Entities" },
            { "@type": "ListItem", "position": 5, "name": "High-Resolution PDF Scanning and Digital Authentication" },
            { "@type": "ListItem", "position": 6, "name": "E-Filing on IP India Portal with Form TM-A or Form TM-M" },
            { "@type": "ListItem", "position": 7, "name": "Address for Service and Agent Docket Linking on Registry Database" }
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
                                <FontAwesomeIcon icon={faSignature} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Rule 19 Agent Authorization</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                What is <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Form TM-48 (Power of Attorney)</span> in Trademark Filing?
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                When engaging a registered trademark agent or legal counsel to protect your brand, executing an official Power of Attorney is a mandatory statutory requirement. Under Rule 19 of the Trade Marks Rules, 2017 and Section 145 of the Trade Marks Act, 1999, Form TM-48 legally empowers your representative to file applications, manage examination objections, attend show-cause hearings, and defend oppositions without compromising your brand ownership. Discover statutory drafting rules, state-wise stamp duty rates, signatory authorities, and procedural workflows to ensure flawless legal compliance.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 10 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Statutory Draft</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Authorize Attorney &amp; File TM <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/form-tm-48-power-of-attorney-trademark-india.png"
                                    alt="What is Form TM-48 Power of Attorney in Trademark Filing India Legal Guide"
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
                        { label: "Form TM-48 Power of Attorney", href: "/form-tm-48-power-of-attorney-trademark-india" }
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

                                    {/* SECTION 1: OVERVIEW & RULE 19 */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Form TM-48 &amp; Rule 19
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Form TM-48 is the statutory Power of Attorney form prescribed under Rule 19 of the Trade Marks Rules, 2017 and Section 145 of the Trade Marks Act, 1999. It officially authorizes a registered trademark agent, advocate, or legal attorney to act on behalf of the applicant before the Trade Marks Registry. It must be executed on non-judicial stamp paper (typically ₹100 in most states or ₹500 in Maharashtra), signed by the authorized signatory with the company stamp, and uploaded to the IP India portal. TM-48 grants procedural representation rights only; it never transfers brand ownership.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Navigating the official <Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration process</Link> in India involves complex statutory filings, drafting technical specifications, responding to examination reports, and presenting oral arguments during show-cause hearings. While Section 18 of the Trade Marks Act, 1999 permits individuals and corporate entities to file applications directly, most businesses partner with certified IP attorneys and registered trademark agents to avoid procedural errors.
                                        </p>
                                        <p className="mb-6">
                                            To legally represent an applicant before the Registrar of Trade Marks, the law mandates a formal letter of authority. Codified under <strong>Section 145 of the Trade Marks Act, 1999</strong> and executed under <strong>Rule 19 of the Trade Marks Rules, 2017</strong>, this instrument is known throughout Indian IP practice as <strong>Form TM-48</strong>.
                                        </p>
                                        <p className="mb-6">
                                            Without a validly executed and stamped Form TM-48 on record, the Trade Marks Registry will not recognize your legal representative. The portal will flag the application with a <em>&ldquo;Formality Check Fail&rdquo;</em> status, hearing notices will fail to reach your counsel, and your attorney will be barred from appearing on your behalf during scheduled hearings.
                                        </p>
                                    </section>

                                    {/* SECTION 2: WHAT IS FORM TM-48 */}
                                    <section id="what-is-tm48" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faSignature} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What is Form TM-48 in India?
                                        </h2>
                                        <p className="mb-6">
                                            Form TM-48 is a specialized legal document that establishes a formal principal-agent relationship between the trademark applicant (the Principal) and the legal practitioner or registered trademark agent (the Agent). It serves four vital administrative and legal functions:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faScaleBalanced} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Section 145 Statutory Recognition
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Section 145 provides that any act required to be done by an applicant before the Trade Marks Registry may be performed by an authorized agent. Form TM-48 is the sole statutory vehicle recognized to activate this representation.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Address for Service (Rule 18 &amp; 21)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Under Rules 18 and 21, the attorney&apos;s registered office becomes the official &ldquo;Address for Service&rdquo;. All official registry communications, examination reports, and third-party opposition notices are legally served there.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faHandshake} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Ownership Protection Shield
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Executing Form TM-48 does <em>not</em> assign or alienate your brand rights. The applicant remains 100% legal proprietor of the mark. The attorney merely receives procedural authority to act on your instruction.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faGavel} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    Hearing &amp; Opposition Locus Standi
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    During show-cause hearings or opposition trials before the Hearing Officer, the Registry verifies the advocate&apos;s locus standi solely through the executed Form TM-48 attached to the digital file docket.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: GENERAL VS SPECIFIC POA */}
                                    <section id="gpa-vs-spa" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            General vs Specific Power of Attorney
                                        </h2>
                                        <p className="mb-6">
                                            Depending on the operational scale and commercial strategy of the applicant entity, Form TM-48 can be executed either as a <strong>Specific Power of Attorney (SPA)</strong> or as a <strong>General Power of Attorney (GPA)</strong>:
                                        </p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 bg-white text-left text-sm">
                                                <thead className="bg-gray-50 font-bold text-gray-900">
                                                    <tr>
                                                        <th className="px-5 py-4 border-b">Parameter</th>
                                                        <th className="px-5 py-4 border-b text-[#6E5E93]">General Power of Attorney (GPA)</th>
                                                        <th className="px-5 py-4 border-b text-gray-700">Specific Power of Attorney (SPA)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Scope of Authority</td>
                                                        <td className="px-5 py-4">All current &amp; future trademarks, oppositions, renewals, rectifications</td>
                                                        <td className="px-5 py-4">Restricted to one specific trademark application number or matter</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Execution Frequency</td>
                                                        <td className="px-5 py-4 text-green-700 font-bold">Executed once; valid across entire portfolio</td>
                                                        <td className="px-5 py-4 text-amber-700 font-semibold">Must be re-executed for every individual application</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Recommended For</td>
                                                        <td className="px-5 py-4">Growing startups, multi-brand companies, ongoing IP portfolios</td>
                                                        <td className="px-5 py-4">One-off single mark filers, individual applicants</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Registry Reference</td>
                                                        <td className="px-5 py-4">Uploaded once and cross-referenced in subsequent filings</td>
                                                        <td className="px-5 py-4">Uploaded separately with each Form TM-A</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Stamp Duty Impact</td>
                                                        <td className="px-5 py-4">Single stamp duty payment covers entire trademark portfolio</td>
                                                        <td className="px-5 py-4">Stamp duty payable on every separate document</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 4: KEY STATUTORY CONTENTS */}
                                    <section id="statutory-contents" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Format &amp; Key Contents
                                        </h2>
                                        <p className="mb-6">
                                            Under Rule 19 of the Trade Marks Rules, 2017, Form TM-48 must follow a strict statutory architecture. Any material omissions or ambiguous phrasing will cause the Trade Marks Registry to issue a discrepancy notice. The essential statutory clauses include:
                                        </p>

                                        <div className="space-y-6 not-prose mb-8">
                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">1</span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Principal &amp; Applicant Particulars</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">
                                                    Full legal name of the individual proprietor, partnership firm, LLP, or company, including registered principal place of business, nationality, and trading name (e.g., &ldquo;Mr. John Doe trading as ABC Enterprises&rdquo; or &ldquo;XYZ Innovations Private Limited&rdquo;).
                                                </p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">2</span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Agent &amp; Advocate Identification</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">
                                                    Full legal name of the advocate or registered trademark agent, law firm name, professional Bar Council Enrollment Number or Registered Trademark Agent Code (e.g., Agent Code 12345), and complete office address for service.
                                                </p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">3</span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Empowering Grant of Powers</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">
                                                    Express authority to sign Form TM-A, draft and lodge replies to examination reports, appear before the Registrar during show-cause hearings, file and defend oppositions (Form TM-O), execute <Link href="/how-to-renew-a-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark renewal</Link> filings (Form TM-R), file rectifications, and appoint substitute counsel.
                                                </p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">4</span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Ratification of Prior Lawful Acts</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">
                                                    A statutory ratification clause declaring that the applicant agrees to ratify and confirm all lawful acts, deeds, and submissions executed by the agent in furtherance of the trademark proceedings prior to the formal execution date.
                                                </p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">5</span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Revocation &amp; Supersession Clause</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">
                                                    Express clause revoking all previous authorizations granted to earlier agents or attorneys regarding the specified trademark matters, ensuring singular clarity on who possesses the legal mandate of record.
                                                </p>
                                            </div>

                                            <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="w-7 h-7 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold">6</span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Execution, Date, Place &amp; Seal</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 pl-10 m-0">
                                                    Original physical or digital signature of the authorized signatory, company/LLP rubber stamp or seal, date of execution, place of execution, and counter-signature / acceptance by the authorized advocate or trademark agent.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: SAMPLE DRAFT */}
                                    <section id="sample-draft" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileLines} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Sample Form TM-48 Legal Draft
                                        </h2>
                                        <p className="mb-6">
                                            Below is the standard statutory draft of Form TM-48 under Rule 19 of the Trade Marks Rules, 2017 utilized by practitioners across India. This template illustrates how principal details, powers, and agent credentials are structured:
                                        </p>

                                        <div className="bg-slate-900 text-slate-100 p-6 md:p-8 rounded-2xl shadow-xl font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto not-prose mb-8 border border-slate-800">
                                            <div className="text-center font-bold text-amber-400 mb-6 border-b border-slate-700 pb-4">
                                                FORM TM-48<br />
                                                THE TRADE MARKS ACT, 1999<br />
                                                FORM OF AUTHORISATION OF AN AGENT / ADVOCATE<br />
                                                [See Rule 19 of Trade Marks Rules, 2017]
                                            </div>

                                            <p className="mb-4">
                                                I / We, <span className="text-emerald-400">[FULL NAME OF APPLICANT / COMPANY NAME]</span>, an Indian national / Company incorporated under the Companies Act, having registered office at <span className="text-emerald-400">[COMPLETE REGISTERED ADDRESS OF PRINCIPAL]</span>, do hereby authorize:
                                            </p>

                                            <p className="mb-4 text-amber-300 font-semibold">
                                                [NAME OF ADVOCATE / TRADEMARK AGENT]<br />
                                                Advocate / Registered Trademark Agent (Agent Code: [AGENT CODE])<br />
                                                [LAW FIRM NAME / OFFICE ADDRESS FOR SERVICE]<br />
                                                Mobile: +91-[PHONE NUMBER] | Email: [EMAIL ADDRESS]
                                            </p>

                                            <p className="mb-4">
                                                to act as my / our Agent / Advocate for the registration, protection, renewal, opposition, rectification, and general maintenance of all my / our Trade Marks, and in all matters and proceedings before the Registrar of Trade Marks, Government of India.
                                            </p>

                                            <p className="mb-4">
                                                I / We further authorize the said Agent / Advocate to sign all applications, notices, replies, affidavits, counter-statements, appeals, petitions, and other documents; to attend hearings; to appoint substitute(s); to pay statutory fees; and to receive all notices, requisitions, orders, and certificates in connection therewith.
                                            </p>

                                            <p className="mb-4">
                                                I / We hereby revoke all previous authorizations, if any, in respect of the matters aforesaid, and ratify and confirm all lawful acts already done or to be done by the said Agent / Advocate by virtue of this authority.
                                            </p>

                                            <p className="mb-6">
                                                I / We request that all official communications relating thereto be sent to the Address for Service of the said Agent / Advocate mentioned hereinabove.
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-700 text-xs">
                                                <div>
                                                    <p className="m-0">Dated this ____ day of ____________, 202X</p>
                                                    <p className="m-0 mt-2">Place: ___________________________</p>
                                                </div>
                                                <div className="sm:text-right">
                                                    <p className="m-0 font-bold text-amber-400">For [NAME OF APPLICANT / COMPANY]</p>
                                                    <p className="m-0 mt-8">__________________________________</p>
                                                    <p className="m-0">[Name of Signatory &amp; Designation]</p>
                                                    <p className="m-0 text-slate-400">(Proprietor / Partner / Director)</p>
                                                    <p className="m-0 text-slate-400">[Affix Official Seal / Stamp]</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: STATE-WISE STAMP DUTY */}
                                    <section id="stamp-duty-rules" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            State-Wise Stamp Duty on TM-48
                                        </h2>
                                        <p className="mb-6">
                                            Because Form TM-48 is a Power of Attorney instrument, it falls under the jurisdiction of the Indian Stamp Act, 1899 and respective State Stamp Acts. Stamp duty is determined by the state where the document is physically executed or where the agent&apos;s registered office is located. Insufficient stamp duty is a leading cause of <em>&ldquo;Formality Check Fail&rdquo;</em> notices across the Registry branches:
                                        </p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 bg-white text-left text-sm">
                                                <thead className="bg-gray-50 font-bold text-gray-900">
                                                    <tr>
                                                        <th className="px-5 py-4 border-b">State / Union Territory</th>
                                                        <th className="px-5 py-4 border-b text-[#6E5E93]">Prescribed Stamp Paper Value</th>
                                                        <th className="px-5 py-4 border-b text-gray-700">Governing Stamp Act Provision</th>
                                                        <th className="px-5 py-4 border-b text-gray-700">Execution Format</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Delhi (NCT)</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">&#8377;100 (or &#8377;50)</td>
                                                        <td className="px-5 py-4">Delhi Stamp Rules, Schedule I-A (Art. 48)</td>
                                                        <td className="px-5 py-4">E-Stamp Certificate (StockHolding)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Maharashtra</td>
                                                        <td className="px-5 py-4 text-purple-700 font-bold">&#8377;500</td>
                                                        <td className="px-5 py-4">Maharashtra Stamp Act (Article 48)</td>
                                                        <td className="px-5 py-4">Gras E-Challan / E-Stamp Paper</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Karnataka</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">&#8377;100 (or &#8377;200)</td>
                                                        <td className="px-5 py-4">Karnataka Stamp Act, 1957 (Article 41)</td>
                                                        <td className="px-5 py-4">E-Stamp Paper (KAVERI Portal)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Tamil Nadu</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">&#8377;100</td>
                                                        <td className="px-5 py-4">Indian Stamp (TN Amendment) Act (Art. 48)</td>
                                                        <td className="px-5 py-4">Non-Judicial Stamp Paper / E-Stamp</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Uttar Pradesh</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">&#8377;100</td>
                                                        <td className="px-5 py-4">UP Stamp Act (Article 48)</td>
                                                        <td className="px-5 py-4">E-Stamp Paper</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Haryana</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">&#8377;100</td>
                                                        <td className="px-5 py-4">Haryana Stamp Rules (Article 48)</td>
                                                        <td className="px-5 py-4">E-GRAS E-Stamp Paper</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">West Bengal</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">&#8377;50 or &#8377;100</td>
                                                        <td className="px-5 py-4">Bengal Stamp Act (Article 48)</td>
                                                        <td className="px-5 py-4">GRIPS E-Stamp / Physical Stamp Paper</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Gujarat</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">&#8377;100 (or &#8377;300)</td>
                                                        <td className="px-5 py-4">Gujarat Stamp Act, 1958 (Article 44)</td>
                                                        <td className="px-5 py-4">E-Stamping Certificate</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 7: WHO CAN SIGN */}
                                    <section id="who-can-sign" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faUserCheck} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Who Can Sign Form TM-48?
                                        </h2>
                                        <p className="mb-6">
                                            The Trade Marks Registry strictly scrutinizes the legal capacity of the signatory on Form TM-48. An unauthorized signature invalidates the entire agency mandate. The rules governing signatory authority across different legal entities are:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Sole Proprietorship
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    The individual proprietor must personally sign the TM-48 with their name and affix the proprietorship rubber stamp. A manager or employee cannot sign without a registered sub-delegation power.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Partnership Firm
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Any Managing Partner or Partner authorized under the registered Partnership Deed may execute the form with their signature and the official partnership seal.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Limited Liability Partnership (LLP)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    A Designated Partner must sign on behalf of the LLP with their Designated Partner Identification Number (DPIN) and affix the official LLP stamp.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Private / Public Limited Company
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    A Director or authorized signatory authorized via a Board Resolution under the Companies Act, 2013 signs with the corporate common seal / rubber stamp.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 md:col-span-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Foreign Applicants &amp; Multinational Corporations
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    An authorized corporate officer (e.g., President, CEO, General Counsel) signs abroad. Under Indian evidentiary rules, the document must be notarized in the home country and apostilled (for Hague Convention signatory nations) or legalized by the Indian Embassy / Consulate before submission to IP India.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: WHEN REQUIRED */}
                                    <section id="when-required" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faClock} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            When is Form TM-48 Mandatory?
                                        </h2>
                                        <p className="mb-6">
                                            Form TM-48 is required at every crucial junction of trademark prosecution where a third-party legal representative acts on behalf of the principal:
                                        </p>

                                        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
                                            <li><strong>Initial Application Filing (Form TM-A):</strong> Mandatory attachment when a registered agent or attorney files on your behalf.</li>
                                            <li><strong>Filing Examination Report Response:</strong> Required if a new attorney is engaged to draft and submit the legal reply to Section 9 or Section 11 objections.</li>
                                            <li><strong>Attending Show-Cause Hearings:</strong> Hearing Officers will refuse audience to an advocate unless a valid TM-48 is visible in the electronic registry docket.</li>
                                            <li><strong>Filing or Defending Opposition (Form TM-O):</strong> Mandatory when filing a Notice of Opposition or lodging a Counter-Statement against rival brands.</li>
                                            <li><strong>Trademark Renewal &amp; Restoration (Form TM-R):</strong> Needed when legal counsel executes decennial renewals on behalf of the proprietor.</li>
                                            <li><strong>Recordal of Assignment or Merger (Form TM-P):</strong> Required to transfer ownership or record corporate structural changes.</li>
                                            <li><strong>Change / Substitution of Legal Counsel (Form TM-M):</strong> Required along with a revocation notice when switching law firms or attorneys.</li>
                                        </ul>
                                    </section>

                                    {/* SECTION 9: EXECUTION WORKFLOW */}
                                    <section id="execution-workflow" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Execution &amp; Filing
                                        </h2>
                                        <p className="mb-6">
                                            Executing and lodging Form TM-48 follows a streamlined 7-stage compliance workflow on the official IP India gateway:
                                        </p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Legal Drafting</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Drafting Particulars &amp; Agent Code Integration</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Prepare the draft of Form TM-48 ensuring exact alignment with the applicant&apos;s legal name, corporate entity structure, and official address as declared in Form TM-A.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Include the advocate&apos;s registered Trade Marks Agent Code or Bar Council registration to facilitate seamless database linking on the <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India Portal</a>.
                                            </p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Stamp Duty Payment</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Procuring Non-Judicial Stamp Paper or E-Stamp</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Purchase an official Non-Judicial Stamp Paper or generate an E-Stamp Certificate corresponding to the state stamp schedule (e.g., ₹100 for Delhi, UP, Karnataka; ₹500 for Maharashtra).
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Ensure the first party name is the applicant entity and the second party name is the appointed trademark attorney or law firm.
                                            </p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Legal Execution</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Signing, Stamping &amp; Corporate Sealing</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Print the statutory TM-48 text onto the stamp paper (or attach the e-stamp certificate as the front page). The authorized signatory signs physically or digitally and affixes the official company seal.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                The appointed attorney or advocate counter-signs in acceptance of the representation mandate.
                                            </p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Notarization / Legalization</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Notarization &amp; Cross-Border Legalization</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                For domestic applicants, notarization is strongly recommended. For foreign applicants executing TM-48 outside India, obtain mandatory notarization and apostille under the Hague Convention (or Indian consular attestation).
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Verify that the notary seal, stamp date, and registration number are crisply legible.
                                            </p>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Digital Digitization</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">High-Resolution PDF Scanning</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Scan the complete document (e-stamp certificate, TM-48 body, signatory pages, and notary stamps) into a single high-resolution PDF file under 6MB.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Ensure all text, signatures, and stamps are fully legible without blurriness or compression artifacts.
                                            </p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Portal E-Filing</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Uploading on Comprehensive E-Filing Gateway</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Log in to the IP India portal using the attorney&apos;s Class 3 Digital Signature Certificate (DSC). Attach the scanned Form TM-48 under the &ldquo;Power of Attorney&rdquo; document tab during Form TM-A submission.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                If filing for an existing matter or substituting counsel, submit the form under <strong>Form TM-M</strong> along with the statutory fee of ₹900.
                                            </p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Docket Verification</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Address for Service Linking &amp; Verification</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                The Trade Marks Registry scrutinizes the submission during formality check. Once verified, the digital docket links the attorney&apos;s Agent Code, updating the official &ldquo;Address for Service&rdquo;.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                All subsequent examination reports, hearing notices, and registration certificates will automatically route to your authorized counsel.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 10: CONSEQUENCES OF DEFECTS */}
                                    <section id="consequences-defects" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Consequences of Defective TM-48
                                        </h2>
                                        <p className="mb-6">
                                            Failing to submit Form TM-48 or filing a defectively executed document creates severe legal and operational bottlenecks:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Immediate &ldquo;Formalities Check Fail&rdquo; Status</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    The Registry examiners halt the application at the initial screening phase. The application will not proceed to substantive examination until a defect reply is filed, delaying registration by months.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Denial of Representation at Show-Cause Hearings</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Hearing Officers will strictly refuse to hear arguments from an advocate whose TM-48 is missing or improperly stamped, potentially leading to immediate refusal of the mark under Section 9 or 11.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Missed Examination &amp; Opposition Deadlines</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    If the Address for Service is not correctly updated via Form TM-48, statutory notices sent to outdated addresses will go unnoticed, leading to automatic abandonment under Rule 33.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Additional Statutory Rectification Costs</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Curing a defective or missing TM-48 post-filing requires submitting Form TM-M along with government fees of ₹900 per application, adding unnecessary compliance costs.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: COMMON PITFALLS */}
                                    <section id="common-pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Common Mistakes to Avoid
                                        </h2>
                                        <p className="mb-6">
                                            Trademark applicants frequently commit avoidable errors when preparing Form TM-48. Ensure your legal documentation avoids these pitfalls:
                                        </p>

                                        <div className="space-y-4 not-prose mb-8">
                                            <div className="bg-red-50/70 p-5 rounded-2xl border border-red-200">
                                                <h3 className="text-base font-bold text-red-900 mb-1">Mismatch in Applicant Name or Corporate Entity</h3>
                                                <p className="text-sm text-red-800 m-0">
                                                    The applicant name on Form TM-48 must exactly match the name on Form TM-A. Discrepancies (e.g., omitting &ldquo;Private Limited&rdquo; or misspelling partner names) trigger instant discrepancy notices.
                                                </p>
                                            </div>

                                            <div className="bg-red-50/70 p-5 rounded-2xl border border-red-200">
                                                <h3 className="text-base font-bold text-red-900 mb-1">Executing on Plain Paper Without Stamp Duty</h3>
                                                <p className="text-sm text-red-800 m-0">
                                                    Form TM-48 printed on plain white letterhead without non-judicial stamp paper or e-stamp is legally invalid under the Indian Stamp Act, 1899.
                                                </p>
                                            </div>

                                            <div className="bg-red-50/70 p-5 rounded-2xl border border-red-200">
                                                <h3 className="text-base font-bold text-red-900 mb-1">Missing Official Rubber Stamp / Corporate Seal</h3>
                                                <p className="text-sm text-red-800 m-0">
                                                    For companies, LLPs, and partnership firms, an individual signature without the entity rubber stamp will be questioned by the Registry during formality checks.
                                                </p>
                                            </div>

                                            <div className="bg-red-50/70 p-5 rounded-2xl border border-red-200">
                                                <h3 className="text-base font-bold text-red-900 mb-1">Un-apostilled Foreign Power of Attorney</h3>
                                                <p className="text-sm text-red-800 m-0">
                                                    Foreign applicants submitting TM-48 executed outside India without notary attestation and apostille / embassy legalization face mandatory formality objections.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 12: TM-48 VS ASSIGNMENT */}
                                    <section id="tm48-vs-assignment" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Form TM-48 vs Assignment (TM-P)
                                        </h2>
                                        <p className="mb-6">
                                            Entrepreneurs often confuse agency authorization with ownership transfer. It is crucial to understand the clear legal distinction between Form TM-48 and other statutory trademark instruments:
                                        </p>

                                        <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="min-w-full divide-y divide-gray-200 bg-white text-left text-sm">
                                                <thead className="bg-gray-50 font-bold text-gray-900">
                                                    <tr>
                                                        <th className="px-5 py-4 border-b">Legal Instrument</th>
                                                        <th className="px-5 py-4 border-b text-[#6E5E93]">Primary Statutory Purpose</th>
                                                        <th className="px-5 py-4 border-b text-gray-700">Ownership Impact</th>
                                                        <th className="px-5 py-4 border-b text-gray-700">Statutory Form</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Form TM-48 (Power of Attorney)</td>
                                                        <td className="px-5 py-4">Authorizes advocate/agent to represent before Registry</td>
                                                        <td className="px-5 py-4 text-emerald-700 font-bold">Zero change; applicant retains 100% rights</td>
                                                        <td className="px-5 py-4">Form TM-48 (Rule 19)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Trademark Assignment</td>
                                                        <td className="px-5 py-4">Permanently transfers trademark title &amp; goodwill to another entity</td>
                                                        <td className="px-5 py-4 text-purple-700 font-bold">100% transfer of brand ownership</td>
                                                        <td className="px-5 py-4">Form TM-P (Section 45)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">Trademark Licensing</td>
                                                        <td className="px-5 py-4">Grants commercial right to use mark under royalty agreement</td>
                                                        <td className="px-5 py-4 text-blue-700 font-bold">Proprietor retains ownership; licensee gets usage rights</td>
                                                        <td className="px-5 py-4">Form TM-P (Registered User)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="px-5 py-4 font-semibold text-gray-900">User Affidavit (Rule 25)</td>
                                                        <td className="px-5 py-4">Sworn statement proving continuous prior commercial use date</td>
                                                        <td className="px-5 py-4 text-gray-700 font-bold">Strengthens seniority and vested common-law rights</td>
                                                        <td className="px-5 py-4"><Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-semibold">User Affidavit (Rule 25)</Link></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 13: PRE-FILING CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Pre-Filing Document Checklist
                                        </h2>
                                        <p className="mb-6">
                                            Before uploading Form TM-48 to the IP India portal, verify every item on this pre-submission compliance checklist:
                                        </p>

                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Applicant Name Alignment:</strong> Ensure the applicant entity name matches Form TM-A letter-for-letter.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Attorney Code &amp; Credentials:</strong> Confirm the attorney&apos;s registered Agent Code and Bar Council details are included.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Appropriate Stamp Paper:</strong> Verify the stamp duty value complies with state rules (₹100 standard / ₹500 Maharashtra).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Authorized Signatory &amp; Stamp:</strong> Ensure the director, partner, or proprietor has signed with the company rubber stamp.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Foreign Legalization:</strong> For overseas entities, check that the document is duly notarized and apostilled.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Clear PDF Scan:</strong> Ensure the complete PDF document is crisp, legible, and under the 6MB portal upload limit.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 14: FAQS (EXACTLY 8 MATCHING SCHEMA) */}
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

                                    {/* SECTION 15: STRATEGIC ADVICE */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Legal Takeaways
                                        </h2>
                                        <p className="mb-6">
                                            Form TM-48 is not a mere bureaucratic formality; it is the cornerstone of professional trademark representation in India. Executing a comprehensive General Power of Attorney ensures that your legal counsel can swiftly defend your brand against aggressive third-party oppositions, attend urgent show-cause hearings, and maintain continuous docket oversight without administrative friction.
                                        </p>
                                        <p className="mb-6">
                                            Before lodging your trademark application, ensure that you conduct a thorough <Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search</Link>, correctly classify your commercial offerings using our <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>, and execute Form TM-48 with proper stamp duty. Clean documentation from day one guarantees a smooth, obstacle-free path to securing your registered trademark certificate.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Professional Trademark Representation
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand with Certified IP Counsel
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Partner with expert trademark advocates to draft Form TM-48, file Form TM-A, and represent your brand across all examination hearings and opposition proceedings.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>File Trademark with Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Certified Trademark Agents • Same-Day Form TM-48 Drafting • Comprehensive IP Protection
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in brand protection strategy, power of attorney compliance, and trademark prosecution under the Trade Marks Act, 1999. He helps startups and enterprises secure their brand identity with precision.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">File with Certified Counsel</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Execute Form TM-48 seamlessly. Let experienced trademark attorneys handle your brand filing and registry representation.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        E-File Trademark Now
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faListUl} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Filing Steps</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">User Affidavit</span>
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
                                        <Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Word vs Logo</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/amazon-brand-registry-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBuilding} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Amazon Registry</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/difference-between-tm-and-r-symbol-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM vs R Symbol</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faRocket} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Startup Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/international-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Global TM</span>
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
