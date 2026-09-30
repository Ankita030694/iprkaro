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
    faGlobe,
    faPassport,
    faLandmark,
    faFileSignature,
    faPlaneDeparture,
    faHandshake,
    faCheck,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Foreign Company & NRI Trademark in India: Rule 18 Guide",
    description: validateAndNormalizeDescription(
        "Foreign company & NRI trademark registration in India. Master Rule 18 Address for Service, Form TM-48 POA, Madrid Protocol, and Paris priority.",
        "app/trademark-registration-foreign-companies-nri-india/page.tsx"
    ),
    keywords: [
        "trademark registration for foreign companies in india",
        "nri trademark registration india rules",
        "address for service in india rule 18 trade marks rules",
        "foreign trademark filing direct vs madrid protocol india",
        "form tm-48 power of attorney foreign company stamping",
        "paris convention priority trademark claim section 154 india",
        "transborder reputation trademark supreme court india",
        "how can overseas company register trademark in india",
        "trademark fees for foreign applicants ip india",
        "apostille and notarization tm-48 foreign entity"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-foreign-companies-nri-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Foreign Company & NRI Trademark in India: Rule 18 Guide",
        description: "Foreign company & NRI trademark registration in India. Master Rule 18 Address for Service, Form TM-48 POA, Madrid Protocol, and Paris priority.",
        url: "https://www.iprkaro.com/trademark-registration-foreign-companies-nri-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-registration-foreign-companies-nri-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Registration for Foreign Companies & NRIs in India: Address for Service Rules",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Foreign Company & NRI Trademark in India: Rule 18 Guide",
        description: "Foreign company & NRI trademark registration in India. Master Rule 18 Address for Service, Form TM-48 POA, Madrid Protocol, and Paris priority.",
        images: ["https://www.iprkaro.com/images/og/trademark-registration-foreign-companies-nri-india.png"],
    }
};

const faqs = [
    {
        question: "Can a foreign company or NRI register a trademark in India without an Indian office?",
        answer: "Yes. Foreign companies, overseas incorporated corporations, and Non-Resident Indians (NRIs) can register trademarks in India without having a physical branch or incorporated subsidiary in India. However, under Section 18 of the Trade Marks Act, 1999 and Rule 18 of the Trade Marks Rules, 2017, they must provide a mandatory 'Address for Service in India', which is typically provided by their authorized Indian trademark attorney."
    },
    {
        question: "What is the 'Address for Service' requirement under Rule 18?",
        answer: "Rule 18 mandates that every trademark applicant whose principal place of business is outside India must furnish a valid postal address within India for service of all official communications. All examination reports, hearing notices, opposition notices, and official correspondence from the Trade Marks Registry are served at this address. Failure to provide a valid Address for Service leads to a Formality Check Fail and potential abandonment."
    },
    {
        question: "Should a foreign enterprise choose Direct National Filing or the Madrid Protocol?",
        answer: "Direct National Filing (Form TM-A via an Indian attorney) is generally faster, allows immediate local handling of Section 9 and Section 11 examination objections, simplifies claiming Paris Convention 6-month priority, and prevents central attack vulnerabilities. The Madrid Protocol (designating India via WIPO Form MM2) is cost-effective when filing across multiple member nations simultaneously, but local Indian counsel is still required if the Indian Registry issues a Provisional Refusal."
    },
    {
        question: "Does Form TM-48 (Power of Attorney) require notarization or apostille for foreign companies?",
        answer: "Form TM-48 executed by a foreign corporation must be signed by an authorized director/officer and notarized in the country of execution. If the country is a signatory to the Hague Apostille Convention, an Apostille certificate is recommended to avoid registry evidentiary requisitions. Non-Hague countries may require consular legalization. Once received in India, the POA is stamped in accordance with the local State Stamp Act."
    },
    {
        question: "How does Paris Convention Priority work under Section 154 in India?",
        answer: "Under Section 154 of the Trade Marks Act, 1999, an applicant who has filed a trademark in any Paris Convention member country (or WTO member) can claim priority in India within 6 months from the initial foreign filing date. If granted, the Indian registration date retroactively matches the original foreign filing date, defeating intervening third-party applications."
    },
    {
        question: "What is Transborder Reputation under Indian trademark law?",
        answer: "The Supreme Court of India recognizes the doctrine of 'Transborder Reputation' (established in N.R. Dongre v. Whirlpool and Milmet Magna, and refined in Toyota v. Prius). Under this doctrine, a foreign brand can prevent local copycats from passing off even before establishing physical sales in India, provided they prove that their global reputation and goodwill spilled over into India through international media, internet reach, travel, or global advertising."
    },
    {
        question: "What are the government statutory fees for foreign trademark applicants in India?",
        answer: "The official IP India statutory e-filing fee for a foreign company / corporate applicant is ₹9,000 per mark, per class. For individual foreign proprietors or individual NRIs, the statutory fee is ₹4,500 per class. Foreign startups and MSMEs can claim the subsidized ₹4,500 fee if they provide verifiable equivalent qualification certificates recognized under bilateral or national guidelines."
    },
    {
        question: "Can an NRI use their overseas passport and address while filing a trademark in India?",
        answer: "Yes. An NRI can file as an individual applicant using their overseas passport, foreign residential address, and nationality. However, they must appoint an authorized Indian Trademark Agent or Advocate to provide the mandatory Address for Service in India under Rule 18."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "rule-18-address-for-service", title: "Rule 18 Address for Service" },
    { id: "direct-filing-vs-madrid", title: "Direct Filing vs Madrid System" },
    { id: "power-of-attorney-tm48", title: "Form TM-48 POA & Apostille" },
    { id: "convention-priority-claims", title: "Paris Convention Priority (Sec 154)" },
    { id: "transborder-reputation-spillover", title: "Transborder Goodwill Precedents" },
    { id: "documents-required-checklist", title: "Documents Required Checklist" },
    { id: "step-by-step-prosecution", title: "Step-by-Step Filing Workflow" },
    { id: "fee-structure-currency", title: "Statutory Fees & Currency Rules" },
    { id: "comparative-route-matrix", title: "Direct vs Madrid Comparison" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Cross-Border Advice" },
];

export default function ForeignTrademarkRegistrationPage() {
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
        "headline": "Trademark Registration for Foreign Companies & NRIs in India: Address for Service Rules",
        "description": "Foreign company & NRI trademark registration in India. Master Rule 18 Address for Service, Form TM-48 POA, Madrid Protocol, and Paris priority.",
        "image": "https://www.iprkaro.com/images/og/trademark-registration-foreign-companies-nri-india.png",
        "datePublished": "2026-09-29T11:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/trademark-registration-foreign-companies-nri-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Foreign Company & NRI Trademark in India: Rule 18 Guide",
        "url": "https://www.iprkaro.com/trademark-registration-foreign-companies-nri-india",
        "description": "Foreign company & NRI trademark registration in India. Master Rule 18 Address for Service, Form TM-48 POA, Madrid Protocol, and Paris priority.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-registration-foreign-companies-nri-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-registration-foreign-companies-nri-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Foreign & NRI Trademark Guide", "item": "https://www.iprkaro.com/trademark-registration-foreign-companies-nri-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Prosecution Workflow for Foreign Companies and NRIs Registering Trademarks in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Pre-Filing Trademark Clearance Search in IP India Database" },
            { "@type": "ListItem", "position": 2, "name": "Select Filing Route: Direct National Filing vs Madrid Protocol Designation" },
            { "@type": "ListItem", "position": 3, "name": "Execute Form TM-48 Power of Attorney with Notarization / Apostille" },
            { "@type": "ListItem", "position": 4, "name": "Establish Mandatory Address for Service in India under Rule 18" },
            { "@type": "ListItem", "position": 5, "name": "File Form TM-A with Paris Convention Priority Claim under Section 154 (if applicable)" },
            { "@type": "ListItem", "position": 6, "name": "Respond to Examination Report Objections within Strict 30-Day Window" },
            { "@type": "ListItem", "position": 7, "name": "Represent in Virtual VC Show-Cause Hearings and Obtain Registration Certificate" }
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
                                <FontAwesomeIcon icon={faGlobe} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Cross-Border Trademark Law &amp; Foreign Investment</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Registration for Foreign Companies &amp; NRIs in India: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Address for Service Rules</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">As India cements its position as one of the world&apos;s fastest-growing consumer markets, global enterprises and Non-Resident Indians (NRIs) face vital cross-border trademark considerations. Governed by<strong>Section 18 of the Trade Marks Act, 1999</strong>and<strong>Rule 18 of the Trade Marks Rules, 2017</strong>, learn how to establish a mandatory Address for Service in India, execute Form TM-48 Powers of Attorney, claim Paris Convention priority, and defend transborder goodwill.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 16 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">🌐 International IP Advisory</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        File Foreign Trademark in India <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult Cross-Border Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-registration-foreign-companies-nri-india.png"
                                    alt="Trademark Registration for Foreign Companies & NRIs in India: Address for Service Rules"
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
                        { label: "Foreign & NRI Trademark Guide", href: "/trademark-registration-foreign-companies-nri-india" }
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
                                            <FontAwesomeIcon icon={faGlobe} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview: Foreign &amp; NRI Trademark Filings
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Under Section 18 of the Trade Marks Act, 1999 read with Rule 18 of the Trade Marks Rules, 2017, foreign companies, overseas corporations, and Non-Resident Indians (NRIs) who have no principal place of business in India are legally entitled to register trademarks in India, provided they furnish a mandatory &ldquo;Address for Service in India&rdquo;. This address—typically the registered office of an Indian trademark agent or advocate—is where all official notices, examination reports, hearing dates, and opposition proceedings are served. Foreign applicants can secure brand protection through Direct National Filing (Form TM-A via an authorized Indian attorney with Form TM-48 Power of Attorney) or through the Madrid Protocol (designating India under the Madrid System). Direct national filing provides greater speed, allows Paris Convention 6-month priority claims under Section 154, and ensures immediate local response handling for registry objections.</p>
                                        </div>

                                        <p className="mb-6">Entering the Indian market represents a massive commercial milestone for multinational corporations, cross-border e-commerce brands, SaaS technology companies, and diaspora-founded NRI enterprises. However, India operates under the<strong>territoriality principle</strong>of trademark law. A trademark registered in the United States (USPTO), United Kingdom (UKIPO), European Union (EUIPO), Singapore, or the UAE confers<strong>zero automatic statutory protection in India</strong>.</p>
                                        <p className="mb-6">Unprotected foreign brands face extreme vulnerability to predatory domain squatting, bad-faith trademark filings by local distributors, and counterfeiters flooding e-commerce marketplaces like Amazon India and Flipkart. Securing statutory brand rights through IP India is an indispensable prerequisite for launching operations or commercial distribution in India.</p>
                                        <p className="mb-6">Explore essential cross-border procedural rules in our guides on <Link href="/how-to-file-international-trademark-madrid-protocol-from-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Madrid Protocol international registration</Link>, <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-48 Power of Attorney rules</Link>, and <Link href="/who-can-apply-for-trademark-in-india-proprietorship-partnership-company" className="text-[rgb(110,94,147)] hover:underline font-medium">who can apply for trademark in India</Link>.</p>
                                    </section>

                                    {/* SECTION 2: RULE 18 ADDRESS FOR SERVICE */}
                                    <section id="rule-18-address-for-service" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLocationDot} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Rule 18 Mandatory Address for Service
                                        </h2>
                                        <p className="mb-6">Rule 18 of the Trade Marks Rules, 2017 establishes the definitive statutory framework governing foreign applicants and NRIs:</p>

                                        <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <h3 className="text-base font-bold text-gray-900 mb-2">Statutory Mandate under Rule 18(1) &amp; 18(2)</h3>
                                            <p className="text-sm text-gray-700 leading-relaxed m-0"><em>&ldquo;Every applicant or opponent, not having a principal place of business in India, shall furnish the Registrar with an address for service in India... And all applications, notices, summons, orders or other documents left at or sent by post to the address for service shall be deemed to be duly served.&rdquo;</em></p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                                                    </span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Why It Is Legally Essential</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">The Indian Trade Marks Registry does not transmit official notices or examination reports to overseas addresses. Having an authorized Indian attorney provide their official chambers/office address ensures all statutory deadlines are captured without delay.</p>
                                            </div>

                                            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                                                        <FontAwesomeIcon icon={faBan} className="w-4 h-4" />
                                                    </span>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Consequence of Omission</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">Filing an application without an Address for Service triggers an immediate &ldquo;Formality Check Fail&rdquo;. If unrectified within the statutory deadline, the Registry marks the application as &ldquo;Abandoned&rdquo; under Section 132.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: DIRECT FILING VS MADRID */}
                                    <section id="direct-filing-vs-madrid" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faPlaneDeparture} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Direct National Filing vs Madrid System
                                        </h2>
                                        <p className="mb-6">Foreign companies entering India have two primary legal routes to secure trademark registration:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm">
                                                <div className="flex items-center space-x-3 mb-4">
                                                    <span className="w-10 h-10 rounded-xl bg-purple-50 text-[#6E5E93] flex items-center justify-center font-bold text-lg">
                                                        <FontAwesomeIcon icon={faLandmark} className="w-5 h-5" />
                                                    </span>
                                                    <div>
                                                        <h3 className="text-lg font-black text-gray-900 m-0">Direct National Filing</h3>
                                                        <span className="text-xs font-semibold text-[#6E5E93]">Form TM-A via Indian Counsel</span>
                                                    </div>
                                                </div>
                                                <ul className="space-y-3 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Faster Examination:</strong> Direct access to IP India e-filing portal; applications examined within 1–3 months.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Direct Objection Handling:</strong> Immediate response filing for Section 9 &amp; 11 objections by local litigators.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>No Central Attack Risk:</strong> Independent of the home country basic mark status.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Paris Priority:</strong> Seamless 6-month priority claim under Section 154.</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-sm">
                                                <div className="flex items-center space-x-3 mb-4">
                                                    <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg">
                                                        <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                                                    </span>
                                                    <div>
                                                        <h3 className="text-lg font-black text-gray-900 m-0">Madrid Protocol Designation</h3>
                                                        <span className="text-xs font-semibold text-indigo-600">WIPO Form MM2 / Subsequent Designation</span>
                                                    </div>
                                                </div>
                                                <ul className="space-y-3 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Centralized Filing:</strong> Single application at WIPO designating India alongside other jurisdictions.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Currency Management:</strong> Statutory fees paid in Swiss Francs (CHF) through WIPO.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faBan} className="w-4 h-4 text-rose-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Central Attack Vulnerability:</strong> If home mark fails within 5 years, Indian designation collapses.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faBan} className="w-4 h-4 text-rose-500 mt-1 mr-2 flex-shrink-0" />
                                                        <span><strong>Local Counsel Still Required:</strong> Any Provisional Refusal in India requires appointing local Indian counsel.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: FORM TM-48 POA & APOSTILLE */}
                                    <section id="power-of-attorney-tm48" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Form TM-48 POA &amp; Apostille Requirements
                                        </h2>
                                        <p className="mb-6">Form TM-48 is the statutory Power of Attorney required to authorize an Indian Trademark Agent or Advocate to represent a foreign entity before the Trade Marks Registry:</p>

                                        <div className="space-y-6 not-prose my-8">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Corporate Execution &amp; Signatory Authority</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The TM-48 must be printed on company letterhead and executed by an authorized signatory (Director, Managing Partner, CEO, or Company Secretary). No corporate seal is mandatory, though recommended.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Notarization &amp; Hague Apostille Convention</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The signatory must sign the document before a local Notary Public in their home jurisdiction. For countries party to the Hague Apostille Convention (such as the US, UK, Germany, Australia, Japan, France), obtaining an Apostille certificate on the notarized POA ensures unquestioned legal validity in Indian courts and tribunals.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Non-Hague Countries &amp; Consular Legalization</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">For non-Hague member nations (such as UAE, Qatar, Saudi Arabia, Singapore in certain matters), the notarized POA must be legalized by the Indian Embassy or Consulate in that country.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Stamping in India under State Stamp Acts</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Once the original POA arrives in India, your Indian attorney gets the instrument stamped under the relevant State Stamp Act (e.g., Delhi, Maharashtra, or Haryana Stamp Act) within 3 months of its receipt in India.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: PARIS CONVENTION PRIORITY */}
                                    <section id="convention-priority-claims" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faPassport} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Paris Convention 6-Month Priority Claims
                                        </h2>
                                        <p className="mb-6">India is a signatory to the Paris Convention for the Protection of Industrial Property and the WTO TRIPS Agreement. Under<strong>Section 154 of the Trade Marks Act, 1999</strong>, foreign applicants enjoy statutory convention priority:</p>

                                        <div className="bg-gray-50 border-l-4 border-teal-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <h3 className="text-base font-bold text-gray-900 mb-2">The Strict 6-Month Statutory Window</h3>
                                            <p className="text-sm text-gray-700 leading-relaxed m-0">If a company files a trademark application in the United States, UK, EU, Singapore, Canada, or any other Paris Convention country on<strong>January 1st</strong>, they can file an equivalent application in India anytime up to<strong>July 1st (within 6 months)</strong>and claim priority dating back to January 1st. Any local third party who filed a similar mark in India between January and July will be superseded and rejected under Section 11.</p>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-3">Priority Documentation Requirements</h3>
                                        <p className="mb-6">To substantiate a Section 154 priority claim in Form TM-A, the applicant must furnish a<strong>Certified Copy of the Priority Application</strong>issued by the home trademark registry (along with a certified English translation if the original document is in a foreign language) within 2 months of filing in India.</p>
                                    </section>

                                    {/* SECTION 6: TRANSBORDER REPUTATION */}
                                    <section id="transborder-reputation-spillover" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Transborder Reputation &amp; Court Precedents
                                        </h2>
                                        <p className="mb-6">One of the most powerful legal doctrines in Indian trademark litigation is the recognition of<strong>Transborder Goodwill and Spillover Reputation</strong>:</p>

                                        <div className="space-y-4 not-prose my-6">
                                            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                                <h3 className="text-sm font-bold text-gray-900 mb-2">1. N.R. Dongre v. Whirlpool Corporation (1996) — Supreme Court of India</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">The Supreme Court held that Whirlpool had established transborder reputation in India through international magazines, advertisements, and worldwide brand presence, even though its washing machines were not actively sold in India due to import restrictions. The local squatter was restrained from using the mark.</p>
                                            </div>

                                            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                                <h3 className="text-sm font-bold text-gray-900 mb-2">2. Milmet Magna Pharma v. Allergan Inc. (2004) — Supreme Court of India</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">The Apex Court ruled that in medicinal and healthcare fields, a multinational corporation with prior worldwide use cannot be held hostage by a local Indian company copying their international brand name, upholding the first-in-the-world-market principle for global innovators.</p>
                                            </div>

                                            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                                <h3 className="text-sm font-bold text-gray-900 mb-2">3. Toyota Jidosha Kabushiki Kaisha v. Prius Auto Industries (2018) — Supreme Court</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">The Supreme Court reaffirmed the territoriality principle, clarifying that transborder reputation must be substantiated with concrete evidence proving that Indian consumers actually knew of the brand prior to the local defendant&apos;s adoption date. Proactive trademark filing remains the only fail-safe protection.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: DOCUMENTS REQUIRED */}
                                    <section id="documents-required-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Documents Required for Foreign Entities
                                        </h2>
                                        <p className="mb-6">The documentary requirements for overseas corporations and Non-Resident Indians (NRIs) are straightforward and streamlined:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="p-6 bg-purple-50/50 border border-purple-100 rounded-2xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faBuildingShield} className="w-4 h-4 text-[#6E5E93] mr-2" />
                                                    For Foreign Companies / Corporations
                                                </h3>
                                                <ul className="space-y-2 text-xs text-gray-700">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>Certificate of Incorporation / Business Registration Certificate.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>Form TM-48 Power of Attorney (notarized/apostilled).</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>Full legal entity name, jurisdiction of incorporation &amp; registered address.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>Clear high-resolution representation of the trademark (Word / Logo).</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>Certified Priority Document (if claiming 6-month convention priority).</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>User Affidavit under Rule 25 (if claiming prior use in India).</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-6 bg-indigo-50/50 border border-indigo-100 rounded-2xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faPassport} className="w-4 h-4 text-indigo-600 mr-2" />
                                                    For Non-Resident Indians (NRIs)
                                                </h3>
                                                <ul className="space-y-2 text-xs text-gray-700">
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>Copy of Passport (Indian passport or foreign passport with OCI card).</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>Overseas residential address proof (utility bill / driving licence).</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>Form TM-48 Power of Attorney authorizing Indian counsel.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>Mandatory Address for Service in India (provided by Indian attorney).</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                                        <span>User Affidavit (if claiming prior commercial use in India or globally).</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: STEP BY STEP PROSECUTION */}
                                    <section id="step-by-step-prosecution" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Indian Trademark Prosecution
                                        </h2>
                                        <p className="mb-6">The prosecution process for overseas applicants through an authorized Indian trademark attorney proceeds in 5 key phases:</p>

                                        <div className="space-y-6 not-prose my-8">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Phase 1: Pre-Filing Clearance &amp; Multi-Class Strategy</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Conduct an exhaustive search on the IP India database to detect conflicting marks, phonetic similarities, or transliterations in Devanagari script across relevant Nice Classes.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Phase 2: Online E-Filing of Form TM-A with Priority Claim</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Your Indian attorney files Form TM-A via the digital e-filing gateway, securing an instantaneous Trademark Application Number and statutory priority timestamp.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Phase 3: Examination &amp; Written Response within 30 Days</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Examiner issues an Examination Report under Section 9 (absolute grounds) or Section 11 (relative grounds). Your Indian counsel files a formal legal reply within the strict 30-day statutory deadline.</p>
                                            </div>

                                            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Phase 4: Virtual Show-Cause Hearings</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If the objection is maintained, the Registry schedules an online Video Conferencing (VC) hearing. Your Indian advocate presents oral arguments and judicial precedents before the Hearing Officer.</p>
                                            </div>

                                            <div className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50/30 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">Phase 5: Journal Publication &amp; Registration Certificate</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The mark is advertised in the Trade Marks Journal for 4 months. If unopposed, the electronic Registration Certificate is issued under Section 23, valid for 10 years and renewable indefinitely.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: FEE STRUCTURE & CURRENCY */}
                                    <section id="fee-structure-currency" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Government Fee Structure
                                        </h2>
                                        <p className="mb-6">Statutory government fees prescribed by the First Schedule of Trade Marks Rules, 2017:</p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                                <thead>
                                                    <tr className="bg-[#0C002B] text-white text-xs sm:text-sm uppercase tracking-wider">
                                                        <th className="p-4 border border-white/10">Applicant Category</th>
                                                        <th className="p-4 border border-white/10">Official Govt Fee (INR)</th>
                                                        <th className="p-4 border border-white/10">Approx. USD ($)</th>
                                                        <th className="p-4 border border-white/10">Filing Mode</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700 bg-white">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Foreign Corporate / Enterprise / LLP</td>
                                                        <td className="p-4 font-semibold text-purple-900">₹9,000 per class</td>
                                                        <td className="p-4 text-gray-600">~$108 USD</td>
                                                        <td className="p-4">Online E-filing (Form TM-A)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Individual NRI / Foreign Individual</td>
                                                        <td className="p-4 font-semibold text-purple-900">₹4,500 per class</td>
                                                        <td className="p-4 text-gray-600">~$54 USD</td>
                                                        <td className="p-4">Online E-filing (Form TM-A)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Foreign Startup / Small Enterprise (Eligible)</td>
                                                        <td className="p-4 font-semibold text-purple-900">₹4,500 per class</td>
                                                        <td className="p-4 text-gray-600">~$54 USD</td>
                                                        <td className="p-4">Online E-filing (with certificates)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Form TM-M (Adjournment / Extension)</td>
                                                        <td className="p-4 font-semibold text-purple-900">₹900 (Ind) / ₹1,800 (Corp)</td>
                                                        <td className="p-4 text-gray-600">~$11 – $22 USD</td>
                                                        <td className="p-4">Online E-filing</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: DIRECT VS MADRID MATRIX */}
                                    <section id="comparative-route-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Direct Filing vs Madrid Protocol Matrix
                                        </h2>
                                        <p className="mb-6">Comparison of key attributes between Direct Indian Filing and Madrid Protocol designation:</p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                                <thead>
                                                    <tr className="bg-[#0C002B] text-white text-xs sm:text-sm uppercase tracking-wider">
                                                        <th className="p-4 border border-white/10">Feature</th>
                                                        <th className="p-4 border border-white/10">Direct National Filing (Form TM-A)</th>
                                                        <th className="p-4 border border-white/10">Madrid Protocol (Designating India)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700 bg-white">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Speed of Examination</td>
                                                        <td className="p-4 text-emerald-700 font-semibold">Fast (1–3 months)</td>
                                                        <td className="p-4 text-gray-600">Moderate (12–18 months)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Dependency on Home Mark</td>
                                                        <td className="p-4 text-emerald-700 font-semibold">Completely independent</td>
                                                        <td className="p-4 text-rose-600">Vulnerable to Central Attack for 5 years</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Objection Response Handling</td>
                                                        <td className="p-4 text-emerald-700 font-semibold">Immediate by appointed Indian counsel</td>
                                                        <td className="p-4 text-amber-700">Requires belated appointment of local agent</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">Paris Convention Priority</td>
                                                        <td className="p-4 text-emerald-700 font-semibold">Direct claim under Section 154</td>
                                                        <td className="p-4 text-gray-600">Claimed at WIPO base filing</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="p-4 font-bold text-gray-900">E-Commerce Brand Registry</td>
                                                        <td className="p-4 text-emerald-700 font-semibold">Immediate TM Application number</td>
                                                        <td className="p-4 text-gray-600">Requires IRDI number &amp; national indexing</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                                            Strategic Cross-Border Trademark Advice
                                        </h2>
                                        <p className="mb-6">Expanding into India without securing national trademark rights leaves your brand exposed to opportunistic squatters, counterfeit imports, and non-negotiable distributor leverage. Under Rule 18 of the Trade Marks Rules, 2017, appointing an authorized Indian Trademark Agent or Advocate provides the mandatory Address for Service in India, ensuring seamless communication with the Trade Marks Registry and prompt defense of your intellectual property.</p>
                                        <p className="mb-6">Whether filing directly via Form TM-A with Paris Convention priority or designating India under the Madrid Protocol, partnering with seasoned Indian IP litigators ensures fast registration and formidable brand protection. For related international business guidance, explore our guides on <Link href="/customs-recordation-of-trademark-in-india-ipr-rules" className="text-[rgb(110,94,147)] hover:underline font-medium">customs recordation of trademarks in India</Link>, <Link href="/deceptive-similarity-trademark-test-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">deceptive similarity trademark test</Link>, and <Link href="/trademark-consent-letter-coexistence-agreement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark coexistence agreements</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Cross-Border IP Prosecution &amp; Representation
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Register Foreign Trademark in India
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy registered Indian trademark attorneys to establish your mandatory Rule 18 Address for Service, execute Form TM-48 POA, and protect your brand across India.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Appoint Indian IP Counsel</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered Trademark Attorneys • Rule 18 Address for Service • Paris Convention Priority • Pan-India</p>
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
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul represents international corporations, overseas e-commerce brands, and NRI founders in direct national filings, Madrid Protocol designations, and High Court IP litigation.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Overseas Entity / NRI?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Need an authorized Rule 18 Address for Service and local representation in India? Get attorney assistance today.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Get Address for Service
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/how-to-file-international-trademark-madrid-protocol-from-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGlobe} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Madrid Protocol Guide</span></Link></li>
                                    <li><Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Form TM-48 POA</span></Link></li>
                                    <li><Link href="/who-can-apply-for-trademark-in-india-proprietorship-partnership-company" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Who Can Apply in India</span></Link></li>
                                    <li><Link href="/customs-recordation-of-trademark-in-india-ipr-rules" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Customs Recordation</span></Link></li>
                                    <li><Link href="/deceptive-similarity-trademark-test-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Deceptive Similarity</span></Link></li>
                                    <li><Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Prior User Rights</span></Link></li>
                                    <li><Link href="/trademark-consent-letter-coexistence-agreement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Coexistence Agreements</span></Link></li>
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
