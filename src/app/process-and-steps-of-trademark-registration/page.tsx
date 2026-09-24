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
    faPhone
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Process and Steps of Trademark Registration | IPR Karo",
    description: validateAndNormalizeDescription(
        "Understand the complete process and steps of trademark registration in India. From search and Form TM-A filing to examination and final certificate.",
        "app/process-and-steps-of-trademark-registration/page.tsx"
    ),
    keywords: [
        "process and steps of trademark registration",
        "trademark registration process",
        "steps of trademark registration in India",
        "trademark filing process",
        "Form TM-A filing steps",
        "trademark examination process",
        "trademark registration stages",
        "how to register trademark in India",
        "trademark journal publication"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/process-and-steps-of-trademark-registration",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Process and Steps of Trademark Registration | IPR Karo",
        description: "Understand the complete process and steps of trademark registration in India. From search and Form TM-A filing to examination and final certificate.",
        url: "https://www.iprkaro.com/process-and-steps-of-trademark-registration",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/process-and-steps-of-trademark-registration.png",
                width: 1200,
                height: 630,
                alt: "Process and Steps of Trademark Registration in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Process and Steps of Trademark Registration | IPR Karo",
        description: "Understand the complete process and steps of trademark registration in India. From search and Form TM-A filing to examination and final certificate.",
        images: ["https://www.iprkaro.com/images/og/process-and-steps-of-trademark-registration.jpg"],
    }
};

const faqs = [
    {
        question: "What is the step-by-step process of trademark registration in India?",
        answer: "The process includes 7 core steps: preliminary trademark search, trademark classification (Classes 1–45), document compilation, online filing of Form TM-A on the IP India portal, examination by the Trade Marks Registry, publication in the Trade Marks Journal for 4 months, and issuance of the registration certificate if no opposition arises."
    },
    {
        question: "How long does the entire trademark registration process take in India?",
        answer: "Under smooth conditions without objections or third-party oppositions, trademark registration typically takes between 6 to 12 months. If the examiner raises objections under Section 9 or 11, or if a third party files an opposition, the timeline may extend to 18 to 24 months."
    },
    {
        question: "When can I legally start using the TM and (R) symbols?",
        answer: "You can start using the TM symbol immediately after successfully filing Form TM-A and receiving your official application number and acknowledgment receipt. The registered symbol (R) can only be used after the Registrar officially issues the final Trademark Registration Certificate."
    },
    {
        question: "What documents are required to file a trademark application?",
        answer: "Required documents include the applicant's identity and address proof (PAN, Aadhaar, Certificate of Incorporation), the brand logo or wordmark specimen, user date affidavit if claiming prior usage, and a signed Power of Attorney (Form TM-48) authorizing an attorney or agent to represent you."
    },
    {
        question: "What happens if the trademark examiner raises an objection?",
        answer: "The examiner issues an Examination Report detailing grounds of refusal under Section 9 (descriptiveness/distinctiveness) or Section 11 (similarity with existing marks). The applicant has exactly 30 days from the receipt date to file a comprehensive legal reply along with supporting evidence."
    },
    {
        question: "What is the opposition period in trademark registration?",
        answer: "After an application is accepted, it is published in the weekly Trade Marks Journal. Third parties have a statutory window of 4 months from the publication date to oppose the mark under Section 21 if they believe it infringes on their prior rights or lacks legal merit."
    },
    {
        question: "How much does trademark registration cost in India?",
        answer: "The official government e-filing fee for Form TM-A is ₹4,500 per class for individuals, startups, and MSMEs (with Udyam registration), and ₹9,000 per class for standard companies and other legal entities. Physical paper filing incurs higher fees (₹5,000 and ₹10,000 respectively)."
    },
    {
        question: "How long is a registered trademark valid in India?",
        answer: "A registered trademark in India is valid for 10 years from the original application filing date. It can be renewed indefinitely every 10 years by filing Form TM-R along with the prescribed renewal fee before or within the statutory grace period."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "prerequisites", title: "Prerequisites" },
    { id: "step-by-step", title: "7-Step Process" },
    { id: "process-stages-table", title: "Stages & Timelines" },
    { id: "common-pitfalls", title: "Common Pitfalls" },
    { id: "post-registration", title: "Post-Registration Rights" },
    { id: "checklist", title: "Registration Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function TrademarkProcessStepsPage() {
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
        "headline": "Process and Steps of Trademark Registration in India",
        "description": "Understand the complete process and steps of trademark registration in India. From search and Form TM-A filing to examination and final certificate.",
        "image": "https://www.iprkaro.com/images/og/process-and-steps-of-trademark-registration.png",
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
            "@id": "https://www.iprkaro.com/process-and-steps-of-trademark-registration"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Process and Steps of Trademark Registration in India",
        "url": "https://www.iprkaro.com/process-and-steps-of-trademark-registration",
        "description": "Understand the complete process and steps of trademark registration in India. From search and Form TM-A filing to examination and final certificate.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/process-and-steps-of-trademark-registration#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/process-and-steps-of-trademark-registration#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Process and Steps of Trademark Registration", "item": "https://www.iprkaro.com/process-and-steps-of-trademark-registration" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps of Trademark Registration in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Comprehensive Trademark Search & Clearance" },
            { "@type": "ListItem", "position": 2, "name": "Classification of Goods and Services (Nice Classes 1-45)" },
            { "@type": "ListItem", "position": 3, "name": "Documentation Preparation and Power of Attorney (TM-48)" },
            { "@type": "ListItem", "position": 4, "name": "Online E-Filing of Form TM-A on IP India Portal" },
            { "@type": "ListItem", "position": 5, "name": "Examination by Registry & Replying to Objections" },
            { "@type": "ListItem", "position": 6, "name": "Publication in the Official Trade Marks Journal" },
            { "@type": "ListItem", "position": 7, "name": "Issuance of Registration Certificate & Protection Maintenance" }
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
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Indian IP Filing Guide</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Process and Steps of <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Registration</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Registering a trademark is the definitive legal safeguard for your brand identity, business reputation, and commercial goodwill. Under the Trade Marks Act, 1999, the registration process follows a structured sequence of statutory steps: from preliminary availability searches and classification to online filing, formal examination, journal publication, and final certificate issuance. Explore the complete roadmap, required forms, statutory deadlines, government fees, and strategic measures to secure nationwide exclusive rights without unnecessary delays.
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
                                    src="/images/og/process-and-steps-of-trademark-registration.png"
                                    alt="Process and Steps of Trademark Registration in India"
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
                        { label: "Process and Steps of Trademark Registration", href: "/process-and-steps-of-trademark-registration" }
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
                                            Overview of Trademark Registration
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Trademark registration in India is a 7-step statutory procedure governed by the Trade Marks Act, 1999. It involves conducting a comprehensive clearance search, classifying goods or services across Classes 1–45, filing Form TM-A online, addressing examination objections, advertising in the Trade Marks Journal for a 4-month opposition window, and receiving the 10-year registration certificate. Successful filing grants nationwide exclusivity and the legal right to use the coveted registered symbol.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            A trademark serves as the commercial fingerprint of an enterprise. It differentiates your products, services, and digital platforms from competitors in the marketplace. While unregistered marks receive limited common-law protection through passing-off actions, formal statutory registration under the Trade Marks Act, 1999 empowers brand owners with prima facie evidence of ownership, nationwide enforceability, and deterrence against counterfeiters.
                                        </p>
                                        <p className="mb-6">
                                            The Indian Trade Marks Registry, functioning under the Controller General of Patents, Designs and Trade Marks (CGPDTM), operates through five administrative jurisdictions: Mumbai, Delhi, Kolkata, Chennai, and Ahmedabad. Modern filings are processed almost entirely through the comprehensive e-filing gateway, drastically accelerating turnaround times and enhancing transparent tracking for applicants across India and international markets.
                                        </p>
                                        <p className="mb-6">
                                            However, navigating the registration process requires thorough legal precision. Minor clerical discrepancies in applicant details, misclassification of goods, or failure to anticipate conflicting prior marks can trigger prolonged objections, formal hearings, or outright refusal. Understanding each progressive phase enables businesses to plan their branding milestones strategically and protect capital investments.
                                        </p>
                                    </section>

                                    {/* SECTION 2: PREREQUISITES */}
                                    <section id="prerequisites" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Key Prerequisites Before Filing
                                        </h2>
                                        <p className="mb-6">
                                            Before generating an application on the government portal, applicants must assemble critical business documentation and determine legal parameters. Completing these foundational tasks prevents procedural show-cause notices and filing defects.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Applicant Classification
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Determine whether the applicant is an Individual, Startup (recognized by DPIIT), Small Enterprise (with a valid Udyam Registration Certificate), or a Large Corporate entity. Startups and MSMEs receive a 50% concession on government filing fees.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    User Date Claim
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Decide whether the mark is applied on a &ldquo;Proposed to be Used&rdquo; basis or with prior continuous commercial use. Claiming prior use requires submitting a notarized User Affidavit accompanied by dated invoices, packaging specimens, or marketing collateral.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Representation of the Mark
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Provide a high-resolution digital image of the logo, device, label, or 3D shape in standard JPEG format. If registering a standard wordmark, exact capitalization and phonetic spellings must be finalized.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Power of Attorney (TM-48)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    When retaining an advocate or registered trademark agent to handle filings and official correspondence, a duly executed Form TM-48 (stamped as per local state stamp acts) is mandatory.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: 7-STEP PROCESS */}
                                    <section id="step-by-step" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Trademark Registration Process
                                        </h2>
                                        <p className="mb-6">
                                            The Indian registration workflow moves through clear statutory milestones designed to confirm brand distinctiveness and protect the legitimate rights of earlier mark holders.
                                        </p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Pre-Filing Clearance</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Trademark Search &amp; Availability Assessment</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Before spending resources on filing, applicants must conduct a comprehensive availability search on the official Trade Marks Registry database and leverage tools like a <Link href="/free-ai-powered-trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">free AI powered trademark search</Link>. Searching must go beyond exact character matches to identify phonetic equivalents, visual resemblances, and conceptual similarities under Section 11 of the Trade Marks Act, 1999.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                An effective search covers registered marks, pending applications, marks under opposition, and abandoned records across target classes and related industries. To conduct initial queries, use the dedicated <Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search tool</Link> or follow our practical guide on <Link href="/how-to-search-for-existing-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">how to search for existing trademark</Link>.
                                            </p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Classification</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Classification of Goods and Services (Nice Classification)</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Trademarks in India are categorized under 45 distinct classes as established by the international Nice Agreement. Classes 1 through 34 encompass physical manufactured goods (such as electronics, apparel, pharmaceuticals, and packaged foods), while Classes 35 through 45 cover services (including software consulting, retail operations, healthcare, and educational institutes).
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Selecting incorrect classes can leave core commercial offerings unprotected or result in immediate objection. Utilize our interactive <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link> to identify exact classifications and formulate comprehensive item specifications.
                                            </p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Documentation</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Document Compilation and User Affidavit Drafting</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Accurate documentation is critical for smooth processing. Key requirements include:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Constitutional Documents:</strong> Incorporation certificate, partnership deed, or PAN/Aadhaar of individual applicants.</li>
                                                <li><strong>Class 3 Digital Signature Certificate (DSC):</strong> Required for online e-filing attorneys and authorized signatories.</li>
                                                <li><strong>User Affidavit (Rule 25):</strong> If claiming historical use prior to filing, an affidavit affirming the continuous use date with exhibits (sales figures, GST invoices, marketing proofs) must be notarized.</li>
                                                <li><strong>Form TM-48:</strong> Legal authorization authorizing trademark counsel to act before the registry.</li>
                                            </ul>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Statutory Filing</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Online E-Filing of Form TM-A on IP India Portal</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Form TM-A is the single unified application form for trademark registration across goods and services. The application is uploaded through the official portal using a secure digital signature.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Once Form TM-A is submitted and the statutory fee is paid online, the system immediately generates an official Application Number and a stamped e-acknowledgment receipt.
                                            </p>
                                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                                <p className="text-xs sm:text-sm text-amber-900 font-medium m-0">
                                                    <strong>Important Right:</strong> The moment your application number is issued, you are legally entitled to display the <strong>TM</strong> symbol beside your brand mark, putting third parties on notice of your pending legal claim.
                                                </p>
                                            </div>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Substantive Examination</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Examination by the Registry and Reply to Objections</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                A designated examiner at the Trade Marks Registry conducts an exhaustive substantive examination to verify whether the mark fulfills statutory criteria. The examiner scrutinizes the mark for:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                                <li><strong>Absolute Grounds for Refusal (Section 9):</strong> Whether the mark is devoid of distinctive character, purely descriptive of goods/services, or customary in current trade language.</li>
                                                <li><strong>Relative Grounds for Refusal (Section 11):</strong> Whether the mark is identical or deceptively similar to an earlier registered or pending trademark for identical or related goods/services.</li>
                                            </ul>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                If objections are raised, the examiner issues a formal Examination Report. The applicant must file a detailed legal written response within <strong>30 days</strong> of receiving the report. If the written reply does not satisfy the officer, a show-cause hearing is scheduled. Learn more on <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objections</Link>.
                                            </p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Public Advertisement</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Publication in the Official Trade Marks Journal</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                When the examiner is satisfied by the written response or following a hearing, the trademark is formally &ldquo;Accepted &amp; Advertised&rdquo; in the weekly Trade Marks Journal published on the official <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India Portal</a>.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Publication opens a statutory <strong>4-month opposition period</strong> under Section 21 of the Act. Any third party who believes the mark infringes their prior rights or harms fair competition can file a Notice of Opposition on Form TM-O. If no opposition is filed within 4 months, or if an opposition is resolved in favor of the applicant, the mark proceeds directly to final registration.
                                            </p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Final Grant</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Issuance of Registration Certificate &amp; Maintenance</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Upon clearing the opposition period, the Registrar issues an electronically authenticated Trademark Registration Certificate bearing the seal of the Trade Marks Registry.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                At this stage, you may officially replace the TM symbol with the registered <strong>&reg;</strong> symbol. The certificate guarantees exclusive commercial rights nationwide, retroactive to the original date of application, valid for 10 years.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Protection can be preserved indefinitely through timely <Link href="/how-to-renew-a-registered-trademark-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark renewals</Link> filed every 10 years via Form TM-R.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: TABLE OF STAGES, TIMELINES, & FEES */}
                                    <section id="process-stages-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Stages, Timelines, and Legal Standards
                                        </h2>
                                        <p className="mb-6">
                                            Below is a structured comparative breakdown of each operational stage in the Indian trademark lifecycle, detailing associated statutory forms, timelines, government fees, and primary legal standards.
                                        </p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Process Stage</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Statutory Form</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Govt Fee (Individual/MSME)</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Govt Fee (Company)</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Typical Duration</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Key Legal Standard</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Pre-Filing Search</td>
                                                        <td className="px-6 py-4">Internal / AI</td>
                                                        <td className="px-6 py-4">Free / Nominal</td>
                                                        <td className="px-6 py-4">Free / Nominal</td>
                                                        <td className="px-6 py-4">1–2 Days</td>
                                                        <td className="px-6 py-4">Sections 9 &amp; 11 relative conflict assessment</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Online E-Filing</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form TM-A</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">&#8377;4,500 / class</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;9,000 / class</td>
                                                        <td className="px-6 py-4">Same Day</td>
                                                        <td className="px-6 py-4">Trade Marks Rules 2017 formal compliance</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Examination Review</td>
                                                        <td className="px-6 py-4">Registry Exam</td>
                                                        <td className="px-6 py-4">No additional fee</td>
                                                        <td className="px-6 py-4">No additional fee</td>
                                                        <td className="px-6 py-4">1–3 Months</td>
                                                        <td className="px-6 py-4">Inherent distinctiveness &amp; prior citations</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Objection Response</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Reply / Form TM-M</td>
                                                        <td className="px-6 py-4">Attorney costs only</td>
                                                        <td className="px-6 py-4">Attorney costs only</td>
                                                        <td className="px-6 py-4">Within 30 Days</td>
                                                        <td className="px-6 py-4">Factual/legal counter-arguments &amp; case law</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Journal Publication</td>
                                                        <td className="px-6 py-4">TM Journal</td>
                                                        <td className="px-6 py-4">Included in filing</td>
                                                        <td className="px-6 py-4">Included in filing</td>
                                                        <td className="px-6 py-4">4 Months (Fixed)</td>
                                                        <td className="px-6 py-4">Section 21 public notice for 3rd party opposition</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Certificate Issuance</td>
                                                        <td className="px-6 py-4">Form TM-RG</td>
                                                        <td className="px-6 py-4">Nil</td>
                                                        <td className="px-6 py-4">Nil</td>
                                                        <td className="px-6 py-4">2–4 Weeks</td>
                                                        <td className="px-6 py-4">Section 23 conclusive statutory grant</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Decennial Renewal</td>
                                                        <td className="px-6 py-4 font-medium text-[rgb(110,94,147)]">Form TM-R</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;9,000 / class</td>
                                                        <td className="px-6 py-4 text-gray-900 font-semibold">&#8377;9,000 / class</td>
                                                        <td className="px-6 py-4">Every 10 Years</td>
                                                        <td className="px-6 py-4">Section 25 maintenance &amp; active commercial use</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 5: COMMON PITFALLS */}
                                    <section id="common-pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-amber-500" />
                                            Common Pitfalls and How to Avoid Them
                                        </h2>
                                        <p className="mb-6">
                                            A substantial percentage of trademark applications in India face administrative delays or refusal due to avoidable mistakes during initial drafting. Avoiding these pitfalls preserves legal rights and eliminates redundant expenses.
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">1. Selecting Descriptive or Generic Names</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Attempting to register words that directly describe the function, quality, or characteristics of your product (such as &ldquo;Best Cotton&rdquo; for garments or &ldquo;Fast Delivery&rdquo; for courier services) attracts immediate Section 9(1)(a) objections. Favour coined, arbitrary, or suggestive marks.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">2. Incorrect Class Selection</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Filing in an inappropriate class or leaving out essential commercial activities means you hold no valid rights over your primary business vertical. Once filed, an application cannot be amended to add new classes; a fresh application must be submitted.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">3. Inaccurate User Date Claims</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Claiming continuous use from a historical date without solid documentary evidence (invoices, domain registration records, or tax receipts) will result in a show-cause notice. If evidence is unavailable, file on a &ldquo;Proposed to be Used&rdquo; basis.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-red-500 pl-4 py-2">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">4. Missing Statutory Deadlines</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Failing to file an objection reply within the strict 30-day window causes the application status to change to &ldquo;Abandoned&rdquo;. While restoration is possible via Form TM-M, it involves substantial penalty fees and administrative complexities.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: POST-REGISTRATION RIGHTS */}
                                    <section id="post-registration" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Post-Registration Rights and Renewal
                                        </h2>
                                        <p className="mb-6">
                                            Securing your official registration certificate transforms your brand from a vulnerable business asset into an enforceable, valuable piece of intellectual property.
                                        </p>
                                        <p className="mb-6">
                                            As a registered proprietor, you hold exclusive legal rights under Section 28 of the Act to use the mark across India in connection with the goods and services for which it is registered. You can file civil infringement suits against unauthorized parties, obtain interim injunctions, claim damages or accounts of profit, and seek criminal action against counterfeiters under Sections 103 and 104 of the Act.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, a registered trademark can be commercialized like any other capital asset: you can license it to franchisees for recurring royalties, assign it permanently via Form TM-P, or use it as collateral for corporate financing. Ensure you protect this asset by scheduling decennial renewals through Form TM-R before expiry.
                                        </p>
                                    </section>

                                    {/* SECTION 7: CHECKLIST */}
                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Registration Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Run Clearance Search:</strong> Validate name and logo availability across classes 1–45 using government and AI tools.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Map All Business Classes:</strong> Determine current product lines and anticipated expansions over the next 5 years.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Secure Discount Certifications:</strong> Procure Udyam MSME Certificate or DPIIT Startup recognition to save 50% on fees.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Draft User Affidavit:</strong> Prepare notarized evidence if claiming continuous prior commercial use in India.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Submit Form TM-A:</strong> E-file through an authorized digital gateway and obtain the stamped application number.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Monitor Registry Status:</strong> Track the status weekly to submit replies to examination reports within 30 days.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Track 4-Month Opposition:</strong> Watch journal notifications until the certificate is signed and sealed.</span>
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
                                            Final Strategic Advice
                                        </h2>
                                        <p className="mb-6">
                                            The trademark registration process in India is a disciplined legal journey that transforms your brand into a defensible corporate asset. By taking proactive steps—such as conducting thorough prior-art searches, categorizing goods accurately, and replying promptly to examiner reports—you position your enterprise for smooth approval and lasting market supremacy.
                                        </p>
                                        <p className="mb-6">
                                            Whether you are an ambitious startup launching your inaugural product or an established business consolidating your IP portfolio, professional counsel ensures that every statutory requirement is met flawlessly. Check availability today and initiate your official application with complete confidence.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Trademark Registration
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand Identity Today
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Partner with expert IP attorneys to handle your end-to-end trademark registration. From clearance search and Form TM-A filing to examination replies and final certificate issuance.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Start Trademark Registration</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Dedicated IP Advocates • 100% Online Paperless Process • Transparent Fixed Pricing
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in preliminary trademark clearance, brand protection strategy, and IP portfolio management. He helps businesses navigate the procedural steps of trademark registration with legal clarity.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Start Registration</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Secure your brand name and logo across all 45 classes with certified trademark experts.</p>
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
                                            <span className="font-black text-xs uppercase tracking-widest">Trademark Search</span>
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
                                        <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Objection Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-search-for-existing-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Search Guide</span>
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
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
