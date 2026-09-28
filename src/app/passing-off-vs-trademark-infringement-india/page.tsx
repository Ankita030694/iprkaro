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
    faPhone,
    faRocket,
    faGlobe,
    faClock,
    faRotate,
    faStamp,
    faHandshake,
    faGavel,
    faBuilding,
    faCheck
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Passing Off vs Trademark Infringement in India | Legal Guide",
    description: validateAndNormalizeDescription(
        "Compare passing off vs trademark infringement in India. Learn the Classical Trinity test, Section 29 rights, unregistered brand protection, and legal remedies.",
        "app/passing-off-vs-trademark-infringement-india/page.tsx"
    ),
    keywords: [
        "passing off vs trademark infringement india",
        "difference between infringement and passing off",
        "unregistered trademark protection in india",
        "can i sue for brand copying without registered trademark",
        "classical trinity test passing off",
        "section 29 trade marks act 1999",
        "section 27 trade marks act 1999",
        "section 134 jurisdiction trade marks act",
        "remedies for passing off and infringement",
        "prior user rights section 34 trademark india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/passing-off-vs-trademark-infringement-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Passing Off vs Trademark Infringement in India | Legal Guide",
        description: "Compare passing off vs trademark infringement in India. Learn the Classical Trinity test, Section 29 rights, unregistered brand protection, and legal remedies.",
        url: "https://www.iprkaro.com/passing-off-vs-trademark-infringement-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/passing-off-vs-trademark-infringement-india.png",
                width: 1200,
                height: 630,
                alt: "Passing Off vs Trademark Infringement in India Unregistered vs Registered Brands Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Passing Off vs Trademark Infringement in India | Legal Guide",
        description: "Compare passing off vs trademark infringement in India. Learn the Classical Trinity test, Section 29 rights, unregistered brand protection, and legal remedies.",
        images: ["https://www.iprkaro.com/images/og/passing-off-vs-trademark-infringement-india.jpg"],
    }
};

const faqs = [
    {
        question: "Can I sue for trademark infringement if my trademark is not registered in India?",
        answer: "No. Under Section 27(1) of the Trade Marks Act, 1999, no person is entitled to institute any proceeding to prevent, or recover damages for, the infringement of an unregistered trade mark. However, Section 27(2) specifically preserves your common law right to sue for passing off. If your unregistered brand has established market goodwill and prior commercial use, you can institute a civil suit for passing off to restrain copycats and claim damages."
    },
    {
        question: "What is the Classical Trinity test in a passing off lawsuit?",
        answer: "Formulated in the landmark English Reckitt & Colman (Jif Lemon) case and adopted by the Supreme Court of India in Laxmikant V. Patel and Cadila Health Care, the Classical Trinity requires the plaintiff to establish three indispensable elements: (1) Goodwill or reputation acquired by the goods or services in the relevant consumer market; (2) Misrepresentation by the defendant (intentional or otherwise) leading the public to believe their goods originate from the plaintiff; and (3) Damage or likelihood of actual damage to the plaintiff's business, goodwill, or commercial reputation."
    },
    {
        question: "Why is Section 134 jurisdiction a major tactical advantage for registered trademark owners?",
        answer: "Under Section 134(2) of the Trade Marks Act, 1999, a registered proprietor or registered user can institute an infringement suit in the District Court within whose local limits the plaintiff resides, carries on business, or personally works for gain ('Home Court' advantage). Conversely, in a pure passing off suit for an unregistered mark, the plaintiff cannot invoke Section 134(2) and must sue under Section 20 of the Code of Civil Procedure (CPC)—which forces the plaintiff to litigate where the defendant resides or where the cause of action arose."
    },
    {
        question: "What is the defense of 'added matter', and why does it work in passing off but not in infringement?",
        answer: "In an infringement suit, if the defendant has adopted the essential features of a registered mark, adding extra words, distinct packaging, or their own house logo is legally irrelevant and cannot be pleaded as a defense (Kaviraj Pandit Durga Dutt Sharma v. Navaratna). In contrast, in a passing off suit, the core question is whether the customer is deceived into believing the goods are the plaintiff's. If the defendant proves that the packaging, clear disclaimers, distinct color schemes, or added matter dispel consumer confusion, they can escape liability."
    },
    {
        question: "Does prior use of an unregistered trademark defeat a subsequent registered trademark in India?",
        answer: "Yes. Under Section 34 of the Trade Marks Act, 1999, the rights of a prior continuous user of an unregistered trademark supersede the statutory rights of a subsequent registered proprietor. The Supreme Court of India reaffirmed in Neon Laboratories Ltd. v. Medical Technologies Ltd. that India follows the 'first in the market' principle. A prior user can not only defend against an infringement claim by a registered owner, but can also institute a passing off action against them and seek rectification or cancellation of the registered mark under Section 57."
    },
    {
        question: "Can a brand owner file a lawsuit for both trademark infringement and passing off together?",
        answer: "Yes. In Indian intellectual property litigation, it is standard legal practice for registered proprietors to plead both causes of action in a single composite plaint. Pleading infringement provides strict statutory protection under Section 29, while pleading passing off acts as a robust fallback under Section 27(2) in case the defendant challenges the validity of the registered mark, files for rectification, or adopts deceptive packaging that extends beyond the registered wordmark or logo."
    },
    {
        question: "What civil and criminal remedies are available for passing off and trademark infringement in Indian courts?",
        answer: "In civil proceedings, courts grant interlocutory and permanent injunctions (Order 39 Rules 1 & 2 CPC), Anton Piller search-and-seizure orders to impound counterfeit stock, Mareva asset freezes, John Doe ('Ashok Kumar') orders, damages or rendition of profits, and destruction of infringing goods under Section 135. Criminally, Sections 103 and 104 provide for imprisonment of 6 months up to 3 years and fines ranging from ₹50,000 to ₹2,00,000 for falsely applying trademarks."
    },
    {
        question: "How does passing off apply to website domain names and digital brand copying?",
        answer: "In the landmark judgment Satyam Infoway Ltd. v. Sifynet Solutions Pvt. Ltd. (2004), the Supreme Court of India held that domain names do not merely represent Internet addresses but serve the primary commercial function of trademarks. Therefore, the common law action for passing off applies squarely to domain name disputes, cybersquatting, and digital impersonation, allowing businesses with unregistered online brands to secure injunctions against confusingly similar website URLs."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "key-differences", title: "Key Differences" },
    { id: "comparison-matrix", title: "Comparison Matrix" },
    { id: "infringement-deep-dive", title: "Trademark Infringement" },
    { id: "passing-off-deep-dive", title: "Action for Passing Off" },
    { id: "classical-trinity", title: "Classical Trinity Test" },
    { id: "jurisdiction-advantage", title: "Jurisdiction Advantage" },
    { id: "prior-use-vs-registration", title: "Prior Use vs Registration" },
    { id: "legal-remedies", title: "Remedies & Reliefs" },
    { id: "landmark-case-laws", title: "Landmark Precedents" },
    { id: "enforcement-process", title: "Enforcement Workflow" },
    { id: "evidentiary-checklist", title: "Evidence Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "strategic-takeaway", title: "Strategic Advice" },
];

export default function PassingOffVsInfringementPage() {
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
        "headline": "Passing Off vs Trademark Infringement in India: Unregistered vs Registered Brands",
        "description": "Compare passing off vs trademark infringement in India. Learn the Classical Trinity test, Section 29 rights, unregistered brand protection, and legal remedies.",
        "image": "https://www.iprkaro.com/images/og/passing-off-vs-trademark-infringement-india.png",
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
            "@id": "https://www.iprkaro.com/passing-off-vs-trademark-infringement-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Passing Off vs Trademark Infringement in India | Legal Guide",
        "url": "https://www.iprkaro.com/passing-off-vs-trademark-infringement-india",
        "description": "Compare passing off vs trademark infringement in India. Learn the Classical Trinity test, Section 29 rights, unregistered brand protection, and legal remedies.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/passing-off-vs-trademark-infringement-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/passing-off-vs-trademark-infringement-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Passing Off vs Infringement", "item": "https://www.iprkaro.com/passing-off-vs-trademark-infringement-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Trademark Enforcement Workflow in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Market Investigation & Trap Purchases" },
            { "@type": "ListItem", "position": 2, "name": "Title Audit & Registration Certification Under Section 137" },
            { "@type": "ListItem", "position": 3, "name": "Strategic Cease & Desist Legal Notice Issuance" },
            { "@type": "ListItem", "position": 4, "name": "Institution of Commercial Suit & Section 134/Section 20 CPC Venue Choice" },
            { "@type": "ListItem", "position": 5, "name": "Filing Order 39 Rules 1 & 2 Interim Injunction Application" },
            { "@type": "ListItem", "position": 6, "name": "Execution of Anton Piller Local Commission for Stock Impoundment" },
            { "@type": "ListItem", "position": 7, "name": "Trial, Rendition of Accounts & Final Decree Under Section 135" }
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
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Intellectual Property Litigation</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Passing Off <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>vs Trademark Infringement</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                When a rival business copies your brand name, logo, or trade dress, your legal strategy depends decisively on whether your mark is officially registered with the Trade Marks Registry. While trademark infringement is an exclusive statutory remedy codified under Section 29 of the Trade Marks Act, 1999 for registered proprietors, passing off is a venerable common law tort preserved under Section 27(2) that protects the commercial goodwill of unregistered marks. Discover the fundamental differences between these two legal mechanisms, the Classical Trinity test, evidentiary burdens, home-court jurisdiction advantages, and landmark Supreme Court precedents.
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
                                        Register Your Brand Today <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/passing-off-vs-trademark-infringement-india.png"
                                    alt="Passing Off vs Trademark Infringement in India Unregistered vs Registered Brands Guide"
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
                        { label: "Passing Off vs Trademark Infringement", href: "/passing-off-vs-trademark-infringement-india" }
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
                                            Overview of Infringement vs Passing Off
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Trademark infringement in India is a statutory civil remedy governed by Section 29 of the Trade Marks Act, 1999, available strictly to proprietors of registered trademarks. It confers strict liability where the plaintiff need only establish deceptive similarity without proving consumer confusion or actual commercial damage. In contrast, passing off is a common law tort preserved under Section 27(2) that protects unregistered brands; it requires the plaintiff to satisfy the Classical Trinity test by affirmatively proving prior market goodwill, deceptive misrepresentation by the defendant, and actual or probable financial loss.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Every growing business eventually confronts the threat of unauthorized brand duplication. Whether it involves an opportunist launching a counterfeit consumer product under an identical name, a competing technology startup adopting a deceptively similar domain, or a retailer copying distinctive trade dress packaging, the unauthorized appropriation of commercial identity inflicts severe reputational and financial damage.
                                        </p>
                                        <p className="mb-6">
                                            Under Indian commercial jurisprudence, the legal path available to an aggrieved brand owner splits into two distinct doctrines: an <strong>action for trademark infringement</strong> and an <strong>action for passing off</strong>. While both seek to prevent commercial deception and protect consumer choice, they originate from fundamentally different legal systems, impose radically divergent evidentiary burdens, and confer vastly unequal procedural privileges in Indian commercial courts.
                                        </p>
                                        <p className="mb-6">
                                            Understanding this demarcation is essential not only for litigating brand disputes, but also for corporate founders determining whether to invest in formal <Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration processes</Link> early or rely temporarily on common law use rights.
                                        </p>
                                    </section>

                                    {/* SECTION 2: KEY DIFFERENCES */}
                                    <section id="key-differences" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Key Differences: Statutory vs Common Law
                                        </h2>
                                        <p className="mb-6">
                                            The foundational cleavage between trademark infringement and passing off lies in their legal roots. One is a creature of legislative statute codified by the Parliament of India, while the other is an equitable doctrine inherited from English common law:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gradient-to-br from-emerald-50/60 to-white p-6 rounded-2xl border border-emerald-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">Statutory Remedy</span>
                                                    <span className="text-xs font-bold text-gray-500">Section 29</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Trademark Infringement</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Vested exclusively in the registered owner upon issuance of the registration certificate. It protects the proprietary title in the mark itself. The plaintiff need only produce the certified register extract under Section 31 to establish a prime facie presumption of validity.
                                                </p>
                                            </div>

                                            <div className="bg-gradient-to-br from-amber-50/60 to-white p-6 rounded-2xl border border-amber-200 shadow-sm">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Common Law Tort</span>
                                                    <span className="text-xs font-bold text-gray-500">Section 27(2)</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Action for Passing Off</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Rooted in the timeless tort principle that no person has the right to sell their goods under the pretense that they are the goods of another. It protects commercial goodwill and customer trust built through prior market adoption, regardless of registration status.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            Section 27 of the Trade Marks Act, 1999 codifies this dual structure with remarkable clarity. Subsection (1) provides that no person shall be entitled to institute any proceeding to prevent, or recover damages for, the infringement of an unregistered trade mark. But subsection (2) immediately introduces an absolute statutory safeguard:
                                        </p>
                                        <blockquote className="border-l-4 border-[#6E5E93] bg-purple-50/50 p-4 rounded-r-xl italic my-6 text-gray-800">
                                            &ldquo;Nothing in this Act shall be deemed to affect rights of action against any person for passing off goods or services as the goods or services of another person or the remedies in respect thereof.&rdquo;
                                            <footer className="text-xs font-semibold text-gray-600 mt-2 not-italic">— Section 27(2), Trade Marks Act, 1999</footer>
                                        </blockquote>
                                        <p className="mb-6">
                                            This dual statutory architecture ensures that while unregistered brands are denied the expedited evidentiary privileges of statutory infringement, they are never left defenseless against predatory market copycats.
                                        </p>
                                    </section>

                                    {/* SECTION 3: COMPARISON MATRIX */}
                                    <section id="comparison-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Side-by-Side Legal Comparison Matrix
                                        </h2>
                                        <p className="mb-6">
                                            The table below provides a detailed structural comparison across 12 crucial procedural, evidentiary, and tactical dimensions under Indian intellectual property law:
                                        </p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse border border-gray-200 bg-white shadow-sm rounded-xl overflow-hidden">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 text-xs uppercase tracking-wider font-extrabold">
                                                        <th className="p-4 border-b border-gray-200">Legal Feature</th>
                                                        <th className="p-4 border-b border-gray-200 text-emerald-800">Trademark Infringement</th>
                                                        <th className="p-4 border-b border-gray-200 text-amber-800">Action for Passing Off</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Statutory Basis</td>
                                                        <td className="p-4 text-gray-700">Section 29, Trade Marks Act, 1999</td>
                                                        <td className="p-4 text-gray-700">Common law tort preserved by Section 27(2)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Registration Mandatory?</td>
                                                        <td className="p-4 text-gray-700">Yes; strictly requires a valid registered mark</td>
                                                        <td className="p-4 text-gray-700">No; available for unregistered &amp; pending marks</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Protected Legal Asset</td>
                                                        <td className="p-4 text-gray-700">Proprietary monopoly in the registered mark</td>
                                                        <td className="p-4 text-gray-700">Commercial goodwill, reputation &amp; customer trust</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Burden of Proof</td>
                                                        <td className="p-4 text-gray-700">Identity or deceptive similarity of marks &amp; goods</td>
                                                        <td className="p-4 text-gray-700">Classical Trinity: Goodwill, Misrepresentation &amp; Damage</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Proof of Actual Confusion</td>
                                                        <td className="p-4 text-gray-700">Not required; presumed under Section 29(3)</td>
                                                        <td className="p-4 text-gray-700">Must establish probability of deception &amp; confusion</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Defense of Added Matter</td>
                                                        <td className="p-4 text-gray-700">No defense; packaging differences are irrelevant</td>
                                                        <td className="p-4 text-gray-700">Valid defense if added packaging dispels confusion</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Court Venue Privilege</td>
                                                        <td className="p-4 text-gray-700">Section 134(2): Can sue in plaintiff&apos;s home court</td>
                                                        <td className="p-4 text-gray-700">Section 20 CPC: Must sue where defendant resides/sells</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Presumption of Validity</td>
                                                        <td className="p-4 text-gray-700">Statutory presumption under Section 31</td>
                                                        <td className="p-4 text-gray-700">No presumption; reputation must be proved ab initio</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Pre-Filing Evidence Needed</td>
                                                        <td className="p-4 text-gray-700">Registration Certificate &amp; infringing sample</td>
                                                        <td className="p-4 text-gray-700">Extensive invoices, CA turnover, ads, media coverage</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Interim Injunction Speed</td>
                                                        <td className="p-4 text-gray-700">Faster; prima facie case established by certificate</td>
                                                        <td className="p-4 text-gray-700">Slower; heavy contested hearings on market goodwill</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Scope Beyond Goods</td>
                                                        <td className="p-4 text-gray-700">Covers dissimilar goods only if well-known (Sec 29(4))</td>
                                                        <td className="p-4 text-gray-700">Broad; can cover trade dress, get-up &amp; business names</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/80">
                                                        <td className="p-4 font-bold text-gray-900">Criminal Prosecution</td>
                                                        <td className="p-4 text-gray-700">Direct police search under Sections 103, 104, 115(4)</td>
                                                        <td className="p-4 text-gray-700">Complex; must establish cheating under IPC/BNS Section 420</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 4: INFRINGEMENT DEEP DIVE */}
                                    <section id="infringement-deep-dive" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What Constitutes Trademark Infringement
                                        </h2>
                                        <p className="mb-6">
                                            Under Section 28 of the Trade Marks Act, 1999, registration grants the proprietor the exclusive legal right to use the trademark in relation to the goods or services for which it is registered, and to obtain relief against infringement. Section 29 elaborates the exact circumstances that constitute statutory infringement:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Section 29(1): Identical Mark on Identical Goods
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    When a person who is not a registered proprietor or registered user adopts an identical mark in the course of trade for identical goods or services. This is counterfeit reproduction and triggers an automatic statutory presumption of infringement without requiring proof of market deception.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Section 29(2): Deceptively Similar Mark &amp; Similar Goods
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    When the competing mark is either identical to the registered mark on similar goods, or deceptively similar on identical/similar goods, such that there exists a likelihood of confusion on the part of the public or a likelihood of association with the registered mark. Under Section 29(3), where marks and goods are both identical, likelihood of confusion is presumed by law.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Section 29(4): Infringement by Dilution (Well-Known Marks)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Even if the defendant uses an identical or similar mark on entirely dissimilar goods or services, infringement occurs if the plaintiff&apos;s mark has a reputation in India, and the unauthorized use takes unfair advantage of, or is detrimental to, the distinctive character or repute of the registered mark (anti-dilution doctrine).
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Section 29(8): Advertising &amp; Commercial Detriment
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Infringement also encompasses unauthorized advertising that takes unfair advantage of honest commercial practices, disparages the mark, or impairs the commercial repute of the registered brand.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            The crucial advantage of an infringement action is that the plaintiff does not need to establish that anyone was actually deceived. The court compares the plaintiff&apos;s registered mark with the defendant&apos;s mark side-by-side using the doctrine of imperfect recollection. If the essential phonetic, structural, or visual features have been appropriated, infringement is established as a matter of law.
                                        </p>
                                    </section>

                                    {/* SECTION 5: PASSING OFF DEEP DIVE */}
                                    <section id="passing-off-deep-dive" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What Constitutes an Action for Passing Off
                                        </h2>
                                        <p className="mb-6">
                                            Passing off is an actionable tort under common law designed to restrain commercial piracy and fraud. While trademark infringement protects the formal statutory monopoly granted by the state, passing off protects the commercial reputation and goodwill of a business entity.
                                        </p>
                                        <p className="mb-6">
                                            In the classic words of Lord Halsbury in <em>Reddaway v. Banham (1896 AC 199)</em>:
                                        </p>
                                        <blockquote className="border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-xl italic my-6 text-gray-800">
                                            &ldquo;Nobody has any right to represent his goods as the goods of somebody else.&rdquo;
                                        </blockquote>
                                        <p className="mb-6">
                                            Passing off extends far beyond registered trademarks. Because it is founded on goodwill rather than registration, an action for passing off can be deployed to protect:
                                        </p>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-amber-600 mt-1 mr-3 shrink-0" />
                                                <span><strong>Unregistered Wordmarks &amp; Brand Names:</strong> Marks that are in active commercial use but have not yet completed registration or are pending before the Trade Marks Registry.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-amber-600 mt-1 mr-3 shrink-0" />
                                                <span><strong>Trade Names &amp; Corporate Identities:</strong> Business names, partnership titles, and company nomenclature protected under common law (Laxmikant V. Patel v. Chetanbhai Shah).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-amber-600 mt-1 mr-3 shrink-0" />
                                                <span><strong>Trade Dress, Packaging &amp; Get-Up:</strong> Unique bottle shapes, color combinations, product labels, and distinct packaging styles that consumers associate with a specific commercial source.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-amber-600 mt-1 mr-3 shrink-0" />
                                                <span><strong>Internet Domain Names:</strong> Cybersquatting, typo-squatting, and deceptive website URLs (Satyam Infoway Ltd. v. Sifynet Solutions).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-amber-600 mt-1 mr-3 shrink-0" />
                                                <span><strong>Service Marks &amp; Professional Reputations:</strong> Consulting services, healthcare clinics, hospitality chains, and educational institutions where customer loyalty rests on quality perception.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 6: CLASSICAL TRINITY TEST */}
                                    <section id="classical-trinity" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Classical Trinity Test in Passing Off
                                        </h2>
                                        <p className="mb-6">
                                            To succeed in an action for passing off, the plaintiff must satisfy what is known across common law jurisdictions as the <strong>Classical Trinity</strong> test. Reaffirmed by the House of Lords in <em>Reckitt &amp; Colman Products Ltd. v. Borden Inc. (1990 1 All ER 873)</em> (the famous Jif Lemon case) and formally adopted by the Supreme Court of India in <em>Laxmikant V. Patel</em> and <em>Cadila Health Care</em>, the plaintiff must prove three cumulative pillars:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            {/* PILLAR 1 */}
                                            <div className="border border-purple-200 rounded-2xl p-6 bg-gradient-to-r from-purple-50/50 to-white shadow-sm">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Pillar 1</span>
                                                    <span className="text-xs font-bold text-gray-500">Commercial Recognition</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Goodwill &amp; Market Reputation</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    The plaintiff must affirmatively prove that their brand name, logo, or get-up has acquired substantial goodwill and customer recognition in the relevant geographical market prior to the defendant&apos;s date of adoption.
                                                </p>
                                                <p className="text-xs text-gray-500 font-medium m-0">
                                                    <strong>Evidence required:</strong> Sales turnover figures, years of continuous use, chartered accountant certificates, advertising expenditure bills, and distributor affidavits.
                                                </p>
                                            </div>

                                            {/* PILLAR 2 */}
                                            <div className="border border-purple-200 rounded-2xl p-6 bg-gradient-to-r from-purple-50/50 to-white shadow-sm">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Pillar 2</span>
                                                    <span className="text-xs font-bold text-gray-500">Deceptive Conduct</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Misrepresentation to the Public</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    The defendant must have made a misrepresentation (whether deliberate, reckless, or unintentional) to prospective customers or ultimate consumers in the course of trade, leading or likely to lead them into believing that the goods or services offered are those of the plaintiff or connected with the plaintiff.
                                                </p>
                                                <p className="text-xs text-gray-500 font-medium m-0">
                                                    <strong>Core test:</strong> Would an ordinary consumer of average intelligence and imperfect recollection be confused as to the commercial origin of the product?
                                                </p>
                                            </div>

                                            {/* PILLAR 3 */}
                                            <div className="border border-purple-200 rounded-2xl p-6 bg-gradient-to-r from-purple-50/50 to-white shadow-sm">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Pillar 3</span>
                                                    <span className="text-xs font-bold text-gray-500">Financial Harm</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Damage or Likelihood of Damage</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    The plaintiff must demonstrate that they have suffered actual financial damage (such as lost sales, diversion of business, or price erosion), or face a real, tangible probability of suffering damage to their commercial goodwill and trade reputation as a consequence of the defendant&apos;s misrepresentation.
                                                </p>
                                                <p className="text-xs text-gray-500 font-medium m-0">
                                                    <strong>Standard:</strong> While actual loss of sales proves damage, in quia timet actions, proving probable dilution or consumer deception is sufficient for an interim injunction.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            If any one of these three pillars fails, the entire passing off suit collapses. This creates an enormous evidentiary burden for unregistered brand owners compared to registered trademark proprietors who need only point to their Certificate of Registration.
                                        </p>
                                    </section>

                                    {/* SECTION 7: JURISDICTION ADVANTAGE */}
                                    <section id="jurisdiction-advantage" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuilding} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 134 Home Court vs Section 20 CPC
                                        </h2>
                                        <p className="mb-6">
                                            One of the most consequential yet frequently overlooked advantages of trademark registration in India is the procedural venue concession provided under <strong>Section 134(2) of the Trade Marks Act, 1999</strong>. This provision completely alters the tactical economics of IP litigation:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">Registered Trademark (Sec 134)</h3>
                                                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Plaintiff&apos;s Turf</span>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                                    Under Section 134(2), a registered trademark proprietor can file an infringement suit in the District Court within whose territorial limits the <strong>plaintiff</strong> actually and voluntarily resides, carries on business, or personally works for gain.
                                                </p>
                                                <p className="text-xs text-gray-500 font-medium m-0">
                                                    <strong>Tactical Benefit:</strong> A Delhi-based registered brand owner can sue a copycat operating out of Surat or Kolkata right inside the Delhi High Court or Commercial District Court. The infringer is forced to travel, engage local counsel, and defend in the plaintiff&apos;s home jurisdiction.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-base font-bold text-gray-900">Unregistered Trademark (Sec 20 CPC)</h3>
                                                    <span className="text-xs font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Defendant&apos;s Turf</span>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                                    In a pure passing off suit for an unregistered mark, Section 134(2) cannot be invoked. The suit is governed strictly by the general civil jurisdiction rules of <strong>Section 20 of the Code of Civil Procedure, 1908 (CPC)</strong>.
                                                </p>
                                                <p className="text-xs text-gray-500 font-medium m-0">
                                                    <strong>Tactical Hardship:</strong> The plaintiff must institute the suit where the <strong>defendant</strong> resides, carries on business, or where the cause of action (actual commercial sale of infringing goods) arose. An unregistered Delhi brand owner may be forced to litigate thousands of kilometers away in the infringer&apos;s hometown.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            As confirmed by the Supreme Court of India in <em>Indian Performing Rights Society Ltd. v. Sanjay Dalia (2015 10 SCC 161)</em> and reaffirmed by various High Courts, Section 134(2) was enacted specifically to relieve intellectual property owners from the hardship of chasing infringers all over the country. However, this statutory privilege is strictly conditioned upon possessing a registered trademark. Unregistered brand owners are denied this home pitch advantage.
                                        </p>
                                    </section>

                                    {/* SECTION 8: PRIOR USE VS REGISTRATION */}
                                    <section id="prior-use-vs-registration" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faClock} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Prior User Rights vs Prior Registration
                                        </h2>
                                        <p className="mb-6">
                                            While registration provides decisive procedural and statutory advantages, Indian trademark law remains firmly anchored in the principle that <strong>prior commercial adoption trumps subsequent registration</strong>. This is codified under <strong>Section 34 of the Trade Marks Act, 1999</strong>:
                                        </p>

                                        <div className="bg-indigo-50/60 p-6 rounded-2xl border border-indigo-100 my-8 not-prose">
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#6E5E93] mr-2" />
                                                Section 34: Statutory Shield of the Prior Continuous User
                                            </h3>
                                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                                Section 34 prevents a registered proprietor from interfering with or restraining the use of an identical or similar mark by any person who has continuously used that mark from a date prior to the registered proprietor&apos;s use or application date. Furthermore, the Registrar cannot refuse to register the prior user&apos;s mark simply because an identical mark was subsequently registered.
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-gray-600">
                                                <div className="bg-white p-3 rounded-xl border border-indigo-100">
                                                    ✓ First-in-the-market rule prevails over first-to-file
                                                </div>
                                                <div className="bg-white p-3 rounded-xl border border-indigo-100">
                                                    ✓ Prior user can maintain passing off against registered owner
                                                </div>
                                                <div className="bg-white p-3 rounded-xl border border-indigo-100">
                                                    ✓ Registration does not sanitize trademark poaching
                                                </div>
                                                <div className="bg-white p-3 rounded-xl border border-indigo-100">
                                                    ✓ Prior user can file rectification on Form TM-O under Sec 57
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            In <em>Neon Laboratories Ltd. v. Medical Technologies Ltd. (2016 2 SCC 672)</em>, the Supreme Court of India held that Section 34 carves out an insurmountable exception to Section 28 exclusivity. Even where a multinational or large corporation holds a registered trademark certificate, if a smaller domestic enterprise proves prior continuous commercial use of the brand under a <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark user affidavit</Link>, the registered mark cannot be used to throttle the prior user&apos;s trade.
                                        </p>
                                        <p className="mb-6">
                                            Consequently, an unregistered prior user can not only defend against an infringement suit, but can actively sue the registered proprietor for passing off and initiate cancellation proceedings to expunge the mark from the Trade Marks Register.
                                        </p>
                                    </section>

                                    {/* SECTION 9: LEGAL REMEDIES */}
                                    <section id="legal-remedies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Legal Remedies and Reliefs in Court
                                        </h2>
                                        <p className="mb-6">
                                            Under Section 135 of the Trade Marks Act, 1999, the relief which a court may grant in any suit for infringement or for passing off includes both injunctions and monetary compensation. Brand owners can mobilize both civil and criminal machineries:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    1. Interlocutory Injunctions (Order 39 Rules 1 &amp; 2 CPC)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Ex-parte ad-interim injunctions restraining the defendant from manufacturing, selling, advertising, or dealing in infringing goods during the pendency of the suit. In infringement suits, interim injunctions are granted swiftly because the certificate establishes a prima facie title. In passing off, the plaintiff must withstand intense scrutiny regarding market goodwill.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    2. Anton Piller Orders &amp; Local Commissions
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    The court appoints an advocate as a Local Commissioner with authority to enter the defendant&apos;s premises without prior notice, search godowns and manufacturing units, seize counterfeit goods, stamp stock books, impound infringing dies and packaging, and deposit them in safe custody.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    3. John Doe (&ldquo;Ashok Kumar&rdquo;) Ex-Parte Injunctions
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Where counterfeit goods are flooding markets but the identity of the underground manufacturers, distributors, or digital hosting providers is unknown, Indian courts issue John Doe orders empowering court commissioners and law enforcement to raid and seize contraband from any unnamed party found infringing the mark.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    4. Damages or Rendition of Accounts (Section 135(1))
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    The plaintiff can elect between compensatory damages (calculated based on actual business loss and brand erosion) or an account of profits (requiring the defendant to surrender all illegal net profits generated from the infringing sales). Furthermore, Commercial Courts regularly award exemplary and punitive damages to deter deliberate commercial piracy.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    5. Delivery Up and Destruction of Contraband
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Mandatory court direction under Section 135(2)(b) ordering the physical destruction, erasure, or delivery up of all counterfeit goods, labels, packaging boxes, printing blocks, dies, and advertising materials in the presence of court officers.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    6. Criminal Sanctions (Sections 103, 104 &amp; 115)
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Applying a false trade mark or selling goods with false trade descriptions is a cognizable criminal offense punishable with mandatory imprisonment of not less than 6 months (extendable to 3 years) and fines between ₹50,000 and ₹2,00,000. Under Section 115(4), a police officer not below the rank of Deputy Superintendent of Police (DSP) can execute warrantless raids, provided they obtain a certificate of opinion from the Registrar of Trade Marks for registered marks.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: LANDMARK CASE LAWS */}
                                    <section id="landmark-case-laws" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Indian Court Precedents
                                        </h2>
                                        <p className="mb-6">
                                            The jurisprudence governing infringement and passing off has been refined by several landmark rulings of the Supreme Court of India:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            {/* CASE 1 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs font-black uppercase text-[#6E5E93]">Foundational Authority</span>
                                                    <span className="text-xs text-gray-500 font-semibold">AIR 1965 SC 980</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                    Kaviraj Pandit Durga Dutt Sharma v. Navaratna Pharmaceutical Laboratories
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    The Supreme Court laid down the definitive difference between the two actions. In infringement, if the essential features of the plaintiff&apos;s registered mark have been copied, it is no defense that the get-up, packaging, or added writing indicates a different trade origin. In passing off, however, the defendant can escape liability if they prove that the added matter is sufficient to distinguish their goods from the plaintiff&apos;s.
                                                </p>
                                                <p className="text-xs text-gray-500 italic m-0">
                                                    Key takeaway: The &ldquo;added matter&rdquo; defense is valid in passing off, but completely barred in statutory infringement.
                                                </p>
                                            </div>

                                            {/* CASE 2 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs font-black uppercase text-[#6E5E93]">Deceptive Similarity in Passing Off</span>
                                                    <span className="text-xs text-gray-500 font-semibold">2001 (5) SCC 73</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                    Cadila Health Care Ltd. v. Cadila Pharmaceuticals Ltd.
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    In a dispute involving medicinal brands &ldquo;Falcigo&rdquo; and &ldquo;Falcitab&rdquo;, the Supreme Court established a comprehensive 7-factor test for assessing deceptive similarity in passing off actions for unregistered marks. The Court ruled that stricter scrutiny applies to pharmaceuticals because public confusion in medicine can cause life-threatening health consequences.
                                                </p>
                                                <p className="text-xs text-gray-500 italic m-0">
                                                    Key takeaway: The 7 factors include nature of marks, degree of resemblance, nature of goods, similarity in performance, class of purchasers, mode of purchase, and other relevant circumstances.
                                                </p>
                                            </div>

                                            {/* CASE 3 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs font-black uppercase text-[#6E5E93]">Trade Names &amp; Business Reputations</span>
                                                    <span className="text-xs text-gray-500 font-semibold">2002 (3) SCC 65</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                    Laxmikant V. Patel v. Chetanbhai Shah
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    The Supreme Court extended passing off protection to commercial business names and service enterprises (a color photography studio named &ldquo;Muktajivan Studio&rdquo;). The Court held that an action for passing off is maintainable to protect a business name even if the mark is unregistered, and courts must grant an immediate interlocutory injunction to prevent theft of commercial goodwill.
                                                </p>
                                                <p className="text-xs text-gray-500 italic m-0">
                                                    Key takeaway: Honest business reputation is property protected by common law; delay in granting injunctions permits irreparable commercial injury.
                                                </p>
                                            </div>

                                            {/* CASE 4 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs font-black uppercase text-[#6E5E93]">Internet Domain Names &amp; Cybersquatting</span>
                                                    <span className="text-xs text-gray-500 font-semibold">2004 (6) SCC 145</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                    Satyam Infoway Ltd. v. Sifynet Solutions Pvt. Ltd.
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                    The Supreme Court applied passing off jurisprudence to the digital realm. The Court held that internet domain names are not merely technical URLs or web addresses; they serve the primary commercial function of trademarks as identifiers of business origin. Consequently, copying a brand name in a domain name constitutes actionable passing off.
                                                </p>
                                                <p className="text-xs text-gray-500 italic m-0">
                                                    Key takeaway: Passing off operates seamlessly across physical and digital commerce, protecting domain names, mobile apps, and online service identities.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: ENFORCEMENT WORKFLOW */}
                                    <section id="enforcement-process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Enforcement Process
                                        </h2>
                                        <p className="mb-6">
                                            When you discover an infringing copycat in the Indian market, executing an organized, legally sound enforcement roadmap is critical to securing immediate interim injunctions:
                                        </p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Evidence Procurement</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Market Investigation &amp; Trap Purchases</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Before alerting the copycat, retain an independent investigator to document the infringement. Secure commercial samples of the infringing product along with tax invoices, packaging boxes, delivery challans, and retail receipts.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                For digital copycats, preserve certified timestamped screenshots, WHOIS domain ownership records, social media advertisements, and e-commerce listings under Section 65B of the Indian Evidence Act (now Section 63 of Bharatiya Sakshya Adhiniyam, 2023).
                                            </p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Title Certification</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Audit &amp; Section 137 Certified Register Copy</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Verify your legal title. If your mark is registered, apply immediately on Form TM-M for a Certified Copy of the Trademark Entry under Section 137 of the Trade Marks Act, which serves as prima facie evidence of registration in court.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                If your mark is unregistered or pending, conduct a comprehensive audit of prior continuous use evidence. Collate the earliest commercial invoices, trademark filing receipts, and CA turnover certificates to establish unassailable prior adoption. You can verify whether the copycat has attempted to file their own application by conducting a <Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search</Link>.
                                            </p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Pre-Litigation Notice</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Cease &amp; Desist Legal Notice</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Instruct your IP counsel to draft and serve a formal Cease &amp; Desist notice. The notice must detail your proprietary rights (or established goodwill), cite statutory provisions (Section 29 or Section 27(2)), identify the infringing acts, and demand an immediate written undertaking to cease use, withdraw infringing products, and surrender stock within 7 to 15 days.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                <em>Tactical caveat:</em> In blatant counterfeiting cases where there is a grave risk that the infringer will destroy evidence or hide stock upon receipt of a notice, brand owners often skip the Cease &amp; Desist notice and move directly to court for an ex-parte Anton Piller search order.
                                            </p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Court Institution</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Filing Commercial Suit (Combined Infringement &amp; Passing Off)</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Institute a civil commercial suit in the appropriate Commercial District Court or High Court having Ordinary Original Civil Jurisdiction (such as Delhi, Bombay, Madras, or Calcutta). Registered proprietors should invoke Section 134(2) to file in their home court and plead both infringement and passing off in a combined plaint.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Execute a Power of Attorney on <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-48</Link> or standard advocate vakalatnama authorizing legal counsel to represent your commercial entity in all hearings.
                                            </p>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Interim Relief</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Ex-Parte Ad-Interim Injunction &amp; Local Commission</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Move an urgent application under Order 39 Rules 1 &amp; 2 CPC for an ex-parte ad-interim injunction restraining the defendant from using the mark. Simultaneously, file an application under Order 26 Rule 9 CPC for the appointment of a Local Commissioner to enter the infringer&apos;s premises, inventory counterfeit goods, and seal unauthorized packaging.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Once an ex-parte injunction and local commission are executed, most commercial copycats surrender and seek an out-of-court settlement rather than face expensive full-dress trial proceedings.
                                            </p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Final Adjudication</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Trial, Rendition of Accounts &amp; Permanent Injunction</h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                If the defendant contests the suit, the matter proceeds to framing of issues, cross-examination of witnesses, and final arguments. The court evaluates the trap purchase evidence, the commissioner&apos;s report, and comparative marks.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed m-0">
                                                Upon finding infringement or passing off, the court issues a permanent decree of injunction, orders destruction of seized stock, and directs payment of compensatory/punitive damages or rendition of profits under Section 135.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 12: EVIDENTIARY CHECKLIST */}
                                    <section id="evidentiary-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-emerald-600" />
                                            Evidence Checklist to Win a Passing Off Suit
                                        </h2>
                                        <p className="mb-6">
                                            Because an unregistered trademark does not enjoy the statutory presumption of validity under Section 31, proving market goodwill in a passing off lawsuit requires robust documentation. Brand proprietors must assemble this evidentiary dossier:
                                        </p>

                                        <ul className="space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Commercial Invoices:</strong> Continuous, chronological sales invoices dating back to the first date of commercial adoption, clearly displaying the brand name or logo.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>CA Turnover Certificates:</strong> Independent certificates issued by a Chartered Accountant certifying annual turnover and revenue generated exclusively under the specific trademark.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Marketing &amp; Advertising Bills:</strong> Invoices for digital advertising (Google Ads, Meta Ads), print media advertisements, hoardings, influencer campaigns, and television commercials showing brand promotion.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Media Clippings &amp; Industry Awards:</strong> News articles, press releases, trade journal write-ups, industry recognitions, and awards highlighting brand prominence.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Customer Inquiries &amp; Confusion Evidence:</strong> Misdirected emails, customer complaints, or messages received from consumers who mistakenly purchased the defendant&apos;s goods thinking they were yours.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Geographical Distribution Records:</strong> Dealer networks, retail stockist lists, and shipping consignment notes demonstrating widespread consumer reach across multiple states.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 13: FAQS (EXACTLY 8 MATCHING SCHEMA) */}
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

                                    {/* SECTION 14: STRATEGIC ADVICE */}
                                    <section id="strategic-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Brand Protection Advice
                                        </h2>
                                        <p className="mb-6">
                                            While the common law action for passing off provides a vital legal lifeline for unregistered brands, relying on passing off as your primary intellectual property strategy is a high-risk, expensive gamble. Litigating passing off demands hundreds of pages of historical invoices, contested interim hearings on goodwill, higher legal fees, and the substantial procedural disadvantage of having to sue infringers in their home states under Section 20 CPC.
                                        </p>
                                        <p className="mb-6">
                                            In contrast, securing a registered trademark transforms your brand into a statutory fortress. With a registration certificate in hand, you gain strict liability protection under Section 29, the invaluable &ldquo;home court&rdquo; advantage under Section 134(2), the ability to block copycats on Amazon Brand Registry and social media portals with a single click, and seamless commercial monetization through <Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark assignment and licensing</Link>.
                                        </p>
                                        <p className="mb-6">
                                            If your brand is currently unregistered or in pending examination status, take immediate action to formalize your legal rights. File your application on Form TM-A with an experienced trademark attorney, submit a comprehensive <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">user affidavit</Link> documenting prior use, and safeguard your commercial identity before market competitors poach your hard-earned reputation.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA BANNER */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Fast-Track Trademark Protection
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand from Copycats
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Don&apos;t wait for a competitor to pirate your goodwill. Partner with certified IP attorneys to register your trademark, secure Section 134 home court advantage, and obtain nationwide legal exclusivity under the Trade Marks Act, 1999.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Register Trademark Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Certified IP Advocates • Same-Day Form TM-A Filing • Transparent Fixed Fee Structure
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
                                    Rahul specializes in intellectual property litigation strategy, trademark infringement enforcement, and common law passing off disputes under the Trade Marks Act, 1999. He helps enterprises defend their brand goodwill against unfair competition.
                                </p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Enforce Your Rights</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">
                                    Facing brand copying, counterfeit goods, or domain theft? Consult registered trademark attorneys for Cease &amp; Desist notices and commercial injunctions.
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
                                        <Link href="/trademark-assignment-vs-licensing-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faHandshake} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Assignment vs License</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Word vs Device Mark</span>
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
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Form TM-48</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/amazon-brand-registry-trademark-requirements-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Amazon Brand Registry</span>
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
