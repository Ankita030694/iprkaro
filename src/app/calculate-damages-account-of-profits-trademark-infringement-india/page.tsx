import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faScaleBalanced,
    faTable,
    faCheckCircle,
    faExclamationTriangle,
    faListUl,
    faFileContract,
    faLightbulb,
    faShieldHalved,
    faPhone,
    faBuildingShield,
    faGavel,
    faCoins,
    faChartLine,
    faFileInvoiceDollar,
    faMagnifyingGlassDollar,
    faHandHoldingDollar,
    faSearch,
    faBan,
    faStamp,
    faReceipt,
    faCalculator
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Calculate Damages & Profits in Trademark Suits India",
    description: validateAndNormalizeDescription(
        "Calculate compensatory and punitive damages or account of profits in Indian trademark infringement suits under Section 135 of Trade Marks Act.",
        "app/calculate-damages-account-of-profits-trademark-infringement-india/page.tsx"
    ),
    keywords: [
        "how to calculate damages in trademark infringement suit india",
        "account of profits vs compensatory damages commercial courts act",
        "punitive damages in trademark infringement india",
        "section 135 trade marks act damages remedies",
        "delhi high court trademark damages philips amazestore",
        "election between damages and account of profits trademark",
        "local commissioner search seizure damages order 26 rule 9",
        "reasonable royalty damages calculation trademark india",
        "recovering profits from counterfeiters indian courts",
        "summary judgment order 13a cpc trademark damages"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/calculate-damages-account-of-profits-trademark-infringement-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Calculate Damages & Profits in Trademark Suits India",
        description: "Calculate compensatory and punitive damages or account of profits in Indian trademark infringement suits under Section 135 of Trade Marks Act.",
        url: "https://www.iprkaro.com/calculate-damages-account-of-profits-trademark-infringement-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/calculate-damages-account-of-profits-trademark-infringement-india.png",
                width: 1200,
                height: 630,
                alt: "How to Calculate Damages and Account of Profits in Trademark Infringement Suits in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Calculate Damages & Profits in Trademark Suits India",
        description: "Calculate compensatory and punitive damages or account of profits in Indian trademark infringement suits under Section 135 of Trade Marks Act.",
        images: ["https://www.iprkaro.com/images/og/calculate-damages-account-of-profits-trademark-infringement-india.png"],
    }
};

const faqs = [
    {
        question: "What is the difference between Compensatory Damages and Account of Profits in India?",
        answer: "Under Section 135(1) of the Trade Marks Act 1999, Compensatory Damages focus on compensating the plaintiff for actual losses suffered (such as lost sales margin, business disruption, price erosion, or brand dilution). In contrast, Account of Profits requires the defendant to disgorge and surrender all net illicit profits earned through the unauthorized sale of infringing or counterfeit goods, preventing unjust commercial enrichment."
    },
    {
        question: "Can a trademark owner claim both Damages and Account of Profits simultaneously?",
        answer: "No. Under the established Doctrine of Election recognized by Indian courts (following Neilson v. Betts and Colgate-Palmolive), a plaintiff must elect between either Compensatory Damages OR an Account of Profits before the final decree. Awarding both would result in double recovery for the same commercial wrong, which is impermissible in civil jurisprudence."
    },
    {
        question: "How does the Delhi High Court assess Punitive Damages under the Philips v. Amazestore ruling?",
        answer: "In Koninklijke Philips N.V. v. Amazestore (2019), the Delhi High Court established an authoritative 5-tier financial slab for punitive damages based on defendant conduct: (1) First-time innocent infringers: Injunction with nominal costs; (2) First-time deliberate infringers: Injunction plus ₹10 Lakh to ₹25 Lakh; (3) Repeat infringers: Injunction plus ₹25 Lakh to ₹50 Lakh; (4) Persistent flagrant counterfeiters: Injunction plus ₹50 Lakh to ₹1 Crore; and (5) Organized syndicates flouting court injunctions: Injunction plus ₹1 Crore to ₹5 Crore or more."
    },
    {
        question: "How does a Local Commissioner help in quantifying financial damages?",
        answer: "Under Order XXVI Rule 9 of the Code of Civil Procedure (CPC), the court appoints a Local Commissioner who conducts an unannounced spot inspection of the defendant's premises. The commissioner seizes infringing stock, stamps books of accounts, takes custody of computer hard drives, and impounds GST invoices, ledgers, and shipping challans. This documented inventory forms the indisputable empirical foundation for calculating sales volume and financial damages."
    },
    {
        question: "What is the 'Reasonable Royalty' method of calculating trademark damages?",
        answer: "When a plaintiff cannot precisely demonstrate lost sales volume, Indian commercial courts frequently apply the 'Reasonable Royalty' standard. This method calculates what a willing licensee would have paid the trademark owner under a bona fide commercial licensing agreement during the duration of infringement, factoring in industry royalty benchmarks, market turnover, and brand reputation."
    },
    {
        question: "What deductions can a defendant claim when an Account of Profits is ordered?",
        answer: "Under the Account of Profits formula, a defendant can only deduct direct, legitimate manufacturing and distribution costs incurred in producing the infringing goods (e.g., actual raw materials, direct packaging, freight). General corporate overheads, executive salaries, taxes, and promotional expenses incurred to promote the counterfeit mark are strictly non-deductible."
    },
    {
        question: "Can trademark damages be awarded through Summary Judgment without a full trial?",
        answer: "Yes. Under Order XIII-A of the CPC, as incorporated by the Commercial Courts Act 2015, the Commercial Court can pass a Summary Judgment awarding both permanent injunctions and substantial monetary damages if the defendant has no real prospect of successfully defending the claim and there is no compelling reason for a lengthy oral trial."
    },
    {
        question: "How are litigation costs and attorney fees recovered in trademark suits?",
        answer: "Under Section 35 of the CPC (amended by the Commercial Courts Act 2015), the general rule is that costs follow the event. Successful plaintiffs are routinely awarded actual legal expenses, including Senior Advocate fees, court filing fees, Local Commissioner charges, and investigation expenses, penalizing frivolous defenses and bad-faith litigation delays."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Statutory Basis" },
    { id: "statutory-framework", title: "Section 135 Trade Marks Act" },
    { id: "election-of-remedies", title: "Damages vs Account of Profits" },
    { id: "compensatory-damages", title: "Calculating Compensatory Damages" },
    { id: "account-of-profits", title: "Disgorgement of Profits Formula" },
    { id: "punitive-damages-jurisprudence", title: "Punitive & Exemplary Damages" },
    { id: "philips-amazestore-slabs", title: "Philips 5-Tier Damages Matrix" },
    { id: "evidentiary-mechanisms", title: "Local Commissioners & Evidence" },
    { id: "summary-judgment-costs", title: "Order 13A & Actual Legal Costs" },
    { id: "comparison-table", title: "Monetary Remedies Matrix" },
    { id: "brand-owner-strategy", title: "Litigation Recovery Playbook" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic Enforcement Summary" },
];

export default function CalculateDamagesTrademarkInfringementPage() {
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
        "headline": "How to Calculate Damages & Account of Profits in Trademark Infringement Suits in India",
        "description": "Comprehensive guide on calculating compensatory damages, punitive damages, and account of profits in Indian trademark infringement suits under the Trade Marks Act, 1999.",
        "image": "https://www.iprkaro.com/images/og/calculate-damages-account-of-profits-trademark-infringement-india.png",
        "datePublished": "2026-09-30T10:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/calculate-damages-account-of-profits-trademark-infringement-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Calculate Damages & Account of Profits in Trademark Suits India",
        "url": "https://www.iprkaro.com/calculate-damages-account-of-profits-trademark-infringement-india",
        "description": "Master the formulas, evidentiary requirements, and landmark judicial precedents for recovering monetary damages and illicit profits in trademark litigation in India.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/calculate-damages-account-of-profits-trademark-infringement-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/calculate-damages-account-of-profits-trademark-infringement-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Damages Guide", "item": "https://www.iprkaro.com/calculate-damages-account-of-profits-trademark-infringement-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Litigation Workflow for Recovering Monetary Damages in Trademark Infringement Suits",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Pre-Litigation Forensic Investigation & Test Purchases with Tax Invoices" },
            { "@type": "ListItem", "position": 2, "name": "File Commercial Suit Claiming Injunction, Damages, and Account of Profits under Section 135" },
            { "@type": "ListItem", "position": 3, "name": "Obtain Ex-Parte Local Commissioner Appointment under Order 26 Rule 9 CPC for Inventory Seizure" },
            { "@type": "ListItem", "position": 4, "name": "Secure Interim Injunction Freezing Counterfeit Distribution & Impounding Financial Books" },
            { "@type": "ListItem", "position": 5, "name": "Perform Forensic Analysis of Seized GST Invoices, Balance Sheets, and Sales Ledgers" },
            { "@type": "ListItem", "position": 6, "name": "Formally Elect between Compensatory Loss Recovery or Disgorgement of Net Illicit Profits" },
            { "@type": "ListItem", "position": 7, "name": "Apply Philips v. Amazestore Criteria for Punitive Damages and Section 35 Actual Legal Costs" }
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
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Commercial IP Litigation &amp; Monetary Relief</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How to Calculate Damages &amp; Account of Profits in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Infringement Suits</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Securing an injunction is only half the battle in trademark litigation. To strip counterfeiters of their illicit gains and restore financial health, brand owners must leverage<strong>Section 135 of the Trade Marks Act, 1999</strong>and the<strong>Commercial Courts Act, 2015</strong>. Master the doctrine of election between<strong>Compensatory Damages</strong>and<strong>Account of Profits</strong>, forensic calculation methodologies, the landmark<strong>Philips v. Amazestore 5-tier punitive damages slabs</strong>, and local commissioner inventory seizure protocols.</p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Commercial IP Litigation Specialist</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 30-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 18 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">⚖️ High Court Jurisprudence</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Claim Infringement Damages <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult IP Litigator: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/calculate-damages-account-of-profits-trademark-infringement-india.png"
                                    alt="How to Calculate Damages and Account of Profits in Trademark Infringement Suits in India"
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
                        { label: "Trademark Damages Guide", href: "/calculate-damages-account-of-profits-trademark-infringement-india" }
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
                                            <p className="text-xs text-gray-500 m-0">Commercial IP Litigation Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trademark Monetary Relief
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">In Indian trademark litigation, monetary relief is governed by Section 135(1) of the Trade Marks Act, 1999. A successful plaintiff is entitled to an injunction together with either: (1) Compensatory Damages (reimbursing the plaintiff for actual losses suffered such as diverted sales, brand dilution, and price erosion), OR (2) An Account of Profits (compelling the defendant to surrender all net commercial profits earned from the infringing goods). Additionally, Indian High Courts routinely award Punitive and Exemplary Damages under the landmark 5-tier financial matrix established in Philips v. Amazestore (2019), along with actual legal costs under Section 35 of the amended Commercial Courts Act, 2015.</p>
                                        </div>

                                        <p className="mb-6">For decades, intellectual property litigation in India was viewed primarily as a battle for injunctive relief. Infringers frequently treated ex-parte injunctions as a mere pause button, liquidating clandestine inventory through parallel distribution networks and opening new storefronts with impunity. However, the operationalization of the<strong>Commercial Courts Act, 2015</strong>and the progressive jurisprudence of the<strong>Delhi High Court</strong>and<strong>Bombay High Court</strong>have revolutionized monetary enforcement.</p>
                                        <p className="mb-6">Today, trademark infringement suits represent high-stakes commercial actions where multi-crore damages and criminal asset freezes strip counterfeiters of their unlawful profits. Brand owners who understand how to quantify damages, leverage forensic accounting, and secure ex-parte local commissioners can transform intellectual property protection from a defensive legal expenditure into an aggressive revenue-recovery strategy.</p>
                                        <p className="mb-6">To understand how statutory infringement claims differ from common law passing off actions, review our detailed guide on <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement in India</Link> and our breakdown of <Link href="/how-to-stop-trademark-infringement" className="text-[rgb(110,94,147)] hover:underline font-medium">how to stop trademark infringement effectively</Link>.</p>
                                    </section>

                                    {/* SECTION 2: STATUTORY FRAMEWORK */}
                                    <section id="statutory-framework" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 135 Statutory Relief Framework
                                        </h3>
                                        <p className="mb-6">Section 135 of the Trade Marks Act, 1999 defines the full spectrum of civil remedies available to an aggrieved trademark proprietor or registered user in a suit for infringement or passing off:</p>

                                        <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;135. Relief in suits for infringement or for passing off.—(1) The relief which a court may grant in any suit for infringement or for passing off referred to in section 134 includes an injunction (subject to such terms, if any, as the court thinks fit) and at the option of the plaintiff, either damages or an account of profits, together with or without any order for the delivery-up of the infringing labels and marks for destruction or erasure.&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">1. Injunctions (Section 135(1))</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Courts grant ad-interim, temporary (Order XXXIX Rules 1 &amp; 2 CPC), and permanent injunctions restraining the defendant, their dealers, distributors, stockists, and agents from manufacturing, advertising, exporting, or marketing products under the deceptively similar mark.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">2. Monetary Relief: Damages OR Account of Profits</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The statute explicitly provides the monetary remedy<em>&ldquo;at the option of the plaintiff&rdquo;</em>, granting the right to choose between compensatory recovery for loss suffered or disgorgement of the defendant&apos;s unjust commercial gains.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">3. Delivery-Up &amp; Destruction (Section 135(1)(b))</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The court orders the physical delivery-up of all counterfeit packaging, dies, master moulds, packaging cartons, stationery, brochures, and digital promotional matter for supervised destruction or erasure of the infringing mark.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">4. Statutory Exception: Innocent Infringement (Section 135(3))</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Under Section 135(3), the court will not grant damages or an account of profits (other than nominal damages) if the defendant establishes that at the time they commenced using the mark, they were unaware and had no reasonable grounds for believing that the trademark was registered, and upon becoming aware, immediately ceased all commercial use.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: ELECTION OF REMEDIES */}
                                    <section id="election-of-remedies" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Doctrine of Election of Remedies
                                        </h3>
                                        <p className="mb-6">The statutory phrase<em>&ldquo;either damages or an account of profits&rdquo;</em>enshrines a foundational common law principle known as the<strong>Doctrine of Election</strong>. A brand owner cannot claim both remedies simultaneously in the final decree.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3">
                                                        <FontAwesomeIcon icon={faChartLine} className="w-4 h-4" />
                                                    </div>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Compensatory Damages</h4>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Focuses entirely on the<strong>Plaintiff&apos;s financial injury</strong>. Reimburses the trademark proprietor for the profit they would have made had the infringer not diverted customers, as well as brand dilution and advertising rehabilitation costs.</p>
                                                <div className="bg-purple-100/60 p-2.5 rounded-lg text-[11px] font-semibold text-[#6E5E93]">
                                                    Legal Theory: Tortious loss compensation (Restitutio in Integrum)
                                                </div>
                                            </div>

                                            <div className="bg-indigo-50/60 p-6 rounded-2xl border border-indigo-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                                                        <FontAwesomeIcon icon={faCoins} className="w-4 h-4" />
                                                    </div>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Account of Profits</h4>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Focuses entirely on the<strong>Defendant&apos;s unjust enrichment</strong>. Strips the defendant of all net profits generated by riding on the plaintiff&apos;s goodwill, regardless of whether the plaintiff suffered equivalent financial losses.</p>
                                                <div className="bg-indigo-100/60 p-2.5 rounded-lg text-[11px] font-semibold text-indigo-700">
                                                    Legal Theory: Equitable disgorgement (Constructive Trustee Doctrine)
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                            <h4 className="text-base font-bold text-gray-900 mb-1">Why Double Recovery is Impermissible</h4>
                                            <p className="text-sm text-gray-700 leading-relaxed m-0">As established in landmark English precedents adopted across Indian courts (such as<em>Neilson v. Betts (1871) LR 5 HL 1</em>and reaffirmed by the Delhi High Court in<em>Colgate-Palmolive Co. v. Anchor Health and Beauty Care Pvt. Ltd.</em>), damages and account of profits are mutually exclusive. To grant both would mean compensating the plaintiff for sales they lost, while also handing them the profits the defendant earned on those same sales, resulting in unjust double enrichment.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 4: COMPENSATORY DAMAGES CALCULATION */}
                                    <section id="compensatory-damages" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCalculator} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Methodologies for Calculating Damages
                                        </h3>
                                        <p className="mb-6">When claiming Compensatory Damages, the plaintiff carries the burden of establishing the quantum of actual loss. Indian Commercial Courts employ three recognized legal calculation formulas:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-3 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Method 1: Lost Sales / Diverted Custom Formula</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">This is the most common method in direct market competition. The court presumes that every unit sold by the counterfeiter represents a sale diverted away from the genuine brand owner.</p>
                                                <div className="bg-white p-3 rounded-lg border border-purple-200 text-xs font-mono text-purple-900 font-semibold mb-2">
                                                    Damages = (Total Infringing Units Sold by Defendant) &times; (Plaintiff&apos;s Net Profit Margin per Unit)
                                                </div>
                                                <p className="text-xs text-gray-600 m-0"><em>Example:</em> If the defendant sold 50,000 counterfeit electrical switches, and the plaintiff earns ₹120 net profit per genuine switch, the baseline compensatory damages equal ₹60,00,000.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Method 2: Reasonable Royalty / Hypothetical Licensing Fee</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">Where the plaintiff cannot prove that every customer would have purchased genuine goods (e.g., luxury fashion counterfeits sold at 90% discount in street markets), courts calculate the royalty fee the defendant should have paid under a legitimate commercial trademark licensing agreement.</p>
                                                <div className="bg-white p-3 rounded-lg border border-indigo-200 text-xs font-mono text-indigo-900 font-semibold mb-2">
                                                    Damages = (Defendant&apos;s Total Gross Sales Turnover) &times; (Standard Industry Royalty Rate % e.g., 5% to 15%)
                                                </div>
                                                <p className="text-xs text-gray-600 m-0">To understand how trademark licensing contracts structure royalty fees in India, review our guide on <Link href="/trademark-licensing-agreement-for-franchise-business-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark licensing agreements for franchise businesses</Link>.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Method 3: Price Erosion, Goodwill Dilution &amp; Corrective Advertising</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3">Beyond direct lost sales, the plaintiff can claim consequential damages for long-term commercial harm:</p>
                                                <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-5 m-0">
                                                    <li><strong>Price Erosion:</strong> Loss incurred when the brand was forced to cut genuine prices to compete with cheap knockoffs.</li>
                                                    <li><strong>Reputational Tarnishment:</strong> Substandard counterfeit quality causing consumer complaints, distributor cancellations, and negative reviews.</li>
                                                    <li><strong>Corrective Advertising:</strong> The documented cost of public warning notices, national newspaper campaigns, and PR drives to restore brand integrity.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: ACCOUNT OF PROFITS FORMULA */}
                                    <section id="account-of-profits" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCoins} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Account of Profits &amp; Disgorgement Formula
                                        </h3>
                                        <p className="mb-6">An Account of Profits treats the infringer as if they were conducting business as an unauthorized agent or constructive trustee of the trademark owner, requiring complete disgorgement of net illicit gains:</p>

                                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 not-prose">
                                            <h4 className="text-base font-bold text-gray-900 mb-3">The Forensic Accounting Formula</h4>
                                            <div className="bg-white p-4 rounded-xl border border-gray-300 font-mono text-xs sm:text-sm text-gray-900 font-semibold mb-4">
                                                Net Disgorgable Profit = Gross Infringing Revenue &minus; Permissible Direct Variable Costs
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200">
                                                    <p className="text-xs font-bold text-emerald-900 mb-2 flex items-center">
                                                        <FontAwesomeIcon icon={faCheckCircle} className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                                                        Permissible Deductions (Allowed)
                                                    </p>
                                                    <ul className="text-[11px] text-emerald-800 space-y-1 list-disc pl-4 m-0">
                                                        <li>Actual cost of raw materials used in infringing batches</li>
                                                        <li>Direct factory labor directly linked to production</li>
                                                        <li>Direct packaging and freight shipping costs</li>
                                                        <li>Excise duty / GST paid directly on the specific sales</li>
                                                    </ul>
                                                </div>

                                                <div className="bg-red-50/60 p-4 rounded-xl border border-red-200">
                                                    <p className="text-xs font-bold text-red-900 mb-2 flex items-center">
                                                        <FontAwesomeIcon icon={faBan} className="w-3.5 h-3.5 mr-1.5 text-red-600" />
                                                        Non-Deductible Expenses (Disallowed)
                                                    </p>
                                                    <ul className="text-[11px] text-red-800 space-y-1 list-disc pl-4 m-0">
                                                        <li>General corporate overheads (rent, electricity, admin)</li>
                                                        <li>Directors&apos; remuneration, personal salaries, or bonuses</li>
                                                        <li>Marketing expenses spent promoting the counterfeit mark</li>
                                                        <li>Legal fees incurred fighting the infringement suit</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">The Apportionment Rule</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If the infringing product contains complex non-infringing proprietary components (e.g., a complex electronic machine where only the outer casing bears an infringing badge), the court will apportion profits, disgorging only the portion attributable to the trademark&apos;s commercial pull rather than the entire machine&apos;s manufacturing value.</p>
                                            </div>

                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">Reverse Evidentiary Burden under Section 106 Evidence Act</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Because manufacturing figures, sales registers, and raw material costs lie within the special personal knowledge of the infringer, under<strong>Section 106 of the Indian Evidence Act, 1872</strong>, the burden of proving allowable deductions rests squarely on the defendant. If the defendant fails to produce credible audited books, the court accepts the plaintiff&apos;s reasonable revenue estimates in full.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: PUNITIVE DAMAGES JURISPRUDENCE */}
                                    <section id="punitive-damages-jurisprudence" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Punitive &amp; Exemplary Damages in India
                                        </h3>
                                        <p className="mb-6">Beyond compensatory relief, Indian High Courts have established robust jurisprudence awarding exemplary and punitive damages to punish deliberate counterfeiting and deter third-party infringers:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Time Incorporated v. Lokesh Srivastava (2005) 30 PTC 3 (Del)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The landmark Delhi High Court judgment that introduced punitive damages into Indian IP jurisprudence. Justice R.C. Chopra held:<em>&ldquo;This Court has no hesitation in saying that a time has come when the Courts dealing with intellectual property rights must not only grant compensatory damages but also award punitive damages to discourage law breakers... An infringer cannot be allowed to walk away with an injunction after pocketing illicit fortunes.&rdquo;</em></p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Hindustan Unilever Ltd. v. Reckitt Benckiser (India) Ltd. (2014) 57 PTC 495 (Del) (DB)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">A Division Bench of the Delhi High Court streamlined the rules for punitive damages, reaffirming the House of Lords doctrine in<em>Rookes v. Barnard</em>. The court held that punitive damages are strictly justified where the defendant&apos;s conduct has been calculated to make a profit for themselves which may well exceed the compensation payable to the plaintiff.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Cartier International v. Gaurav Bhatia (2016) 65 PTC 168 (Del)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">In an enforcement action against an online portal selling counterfeit Cartier watches, the Delhi High Court awarded ₹1 Crore in punitive and compensatory damages, emphasizing that digital counterfeiting poses an existential threat to luxury consumer markets and demands severe financial deterrence.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">4. Super Cassettes Industries Ltd. v. Rachana Television (2013)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The High Court affirmed that where a defendant chooses to stay away from court proceedings (ex-parte default) after service of summons, they cannot escape monetary liability. Courts are fully empowered to assess damages based on the plaintiff&apos;s unrebutted evidence and commissioner reports.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: PHILIPS V. AMAZESTORE SLABS */}
                                    <section id="philips-amazestore-slabs" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Philips v. Amazestore 5-Tier Damages Matrix
                                        </h3>
                                        <p className="mb-6">In the watershed judgment of<em>Koninklijke Philips N.V. &amp; Anr. v. Amazestore &amp; Ors. (2019) 78 PTC 618 (Del)</em>, Justice Pratibha M. Singh formulated an authoritative, standardized 5-tier financial slab for awarding damages in intellectual property suits:</p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-xl">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-xs font-bold uppercase text-slate-600">Tier 1: Innocent / Minor Infringement</span>
                                                    <span className="text-xs font-bold text-slate-800 bg-slate-200 px-2.5 py-0.5 rounded-full">Injunction + Nominal Costs</span>
                                                </div>
                                                <p className="text-xs text-gray-600 m-0">First-time infringer who adopts a similar mark innocently without knowledge, offers immediate undertakings, and ceases use upon notice.</p>
                                            </div>

                                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-xs font-bold uppercase text-blue-800">Tier 2: First-Time Wilful Infringement</span>
                                                    <span className="text-xs font-bold text-blue-900 bg-blue-200 px-2.5 py-0.5 rounded-full">₹10,00,000 to ₹25,00,000</span>
                                                </div>
                                                <p className="text-xs text-gray-600 m-0">Deliberate adoption of a deceptive mark by a commercial entity attempting to ride on brand equity without authorization.</p>
                                            </div>

                                            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-xl">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-xs font-bold uppercase text-purple-800">Tier 3: Repeat / Defiant Infringement</span>
                                                    <span className="text-xs font-bold text-purple-900 bg-purple-200 px-2.5 py-0.5 rounded-full">₹25,00,000 to ₹50,00,000</span>
                                                </div>
                                                <p className="text-xs text-gray-600 m-0">Entity that suffered prior cease &amp; desist notices or prior court orders, but resumes clandestine infringement or ignores court summons.</p>
                                            </div>

                                            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-xs font-bold uppercase text-amber-800">Tier 4: Flagrant / Large-Scale Counterfeiting</span>
                                                    <span className="text-xs font-bold text-amber-900 bg-amber-200 px-2.5 py-0.5 rounded-full">₹50,00,000 to ₹1,00,00,000</span>
                                                </div>
                                                <p className="text-xs text-gray-600 m-0">Organized counterfeit operations fabricating exact cloned logos, safety packaging, and false warranty cards across regional supply chains.</p>
                                            </div>

                                            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-xl">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-xs font-bold uppercase text-red-800">Tier 5: Syndicate / Contemptuous Counterfeiting</span>
                                                    <span className="text-xs font-bold text-red-900 bg-red-200 px-2.5 py-0.5 rounded-full">₹1,00,00,000 to ₹5,00,00,000+</span>
                                                </div>
                                                <p className="text-xs text-gray-600 m-0">Large syndicates operating illicit manufacturing units, tampering with sealed court evidence, breaching interim injunctions, and running multi-state rackets.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: EVIDENTIARY MECHANISMS */}
                                    <section id="evidentiary-mechanisms" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faMagnifyingGlassDollar} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Local Commissioners &amp; Evidentiary Proof
                                        </h3>
                                        <p className="mb-6">Calculating damages in trademark litigation rarely relies on voluntary admissions. Infringers maintain clandestine cash books and avoid filing official GST returns. Securing tangible evidence requires strategic court machinery:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Order XXVI Rule 9 CPC: Ex-Parte Local Commissioner</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">On Day 1 of filing the suit, the plaintiff moves an application under Order XXVI Rule 9 of the CPC seeking the appointment of an advocate as an ex-parte Local Commissioner. The commissioner visits the defendant&apos;s factory, warehouse, and retail shops without prior notice, accompanied by local police protection (Section 115 CrPC / BNSS assistance).</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Physical Inventory &amp; Stock Seizure</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The Local Commissioner prepares an exhaustive, itemized inventory sheet recording exact unit counts, batch numbers, MRP stickers, packaging cartons, and manufacturing machinery. The infringing goods are seized on superdari (custody bond), preventing illicit disposal.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Impounding Electronic Ledgers, Hard Drives &amp; GST Invoices</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">The commissioner stamps and signs every page of the defendant&apos;s physical sales ledgers, stock registers, and cash books, while making mirror image copies of accounting software (Tally, SAP, QuickBooks) and hard drives. These digital logs prove exact sales turnover over preceding financial years.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">4. Discovery &amp; Interrogatories under Order XI CPC</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Under Order XI CPC (as amended by the Commercial Courts Act 2015), the plaintiff serves interrogatories requiring the defendant to disclose income tax returns, audited balance sheets, e-way bills, and bank statements on affidavit. Concealment of assets attracts criminal perjury and adverse inferences.</p>
                                            </div>
                                        </div>

                                        <p className="my-6">For an exhaustive breakdown of criminal raids and police coordination under Section 115, read our specialized guide on <Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="text-[rgb(110,94,147)] hover:underline font-medium">anti-counterfeiting police raid procedures in India</Link> and <Link href="/john-doe-ashok-kumar-order-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">John Doe (Ashok Kumar) ex-parte search orders</Link>.</p>
                                    </section>

                                    {/* SECTION 9: SUMMARY JUDGMENT & COSTS */}
                                    <section id="summary-judgment-costs" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Summary Judgment &amp; Actual Legal Costs
                                        </h3>
                                        <p className="mb-6">The Commercial Courts Act, 2015 introduced groundbreaking procedural reforms that enable brand owners to recover damages rapidly without enduring a 10-year trial:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2"></span>
                                                    Summary Judgment (Order XIII-A CPC)
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Commercial courts can pass a final decree and award substantial damages on a Summary Judgment application where the defendant has no real prospect of successfully defending the trademark infringement claim. When counterfeiters fail to file a written statement or offer frivolous defenses, courts dispense with oral witness examination and decree damages based on documentary records.</p>
                                            </div>

                                            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-2"></span>
                                                    Actual Costs Regime (Section 35 CPC)
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Unlike traditional civil suits where nominal statutory costs of ₹5,000 were awarded, amended Section 35 mandates the award of &ldquo;Real and Actual Costs&rdquo;. Winning plaintiffs routinely recover Senior Advocate appearance fees, solicitor charges, court filing fees, Local Commissioner honorariums, and private investigator expenses, running into ₹15 Lakh to ₹50 Lakh.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: COMPARISON MATRIX */}
                                    <section id="comparison-table" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Monetary Remedies Comparison Matrix
                                        </h3>
                                        <p className="mb-6">The comparative matrix below outlines the critical differences, evidentiary thresholds, and strategic utility of each monetary remedy in Indian commercial litigation:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Relief Head</th>
                                                        <th className="p-3.5 sm:p-4">Legal Foundation</th>
                                                        <th className="p-3.5 sm:p-4">Calculation Metric</th>
                                                        <th className="p-3.5 sm:p-4">Burden of Proof</th>
                                                        <th className="p-3.5 sm:p-4">Strategic Recommendation</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Compensatory Damages</td>
                                                        <td className="p-3.5 sm:p-4">Section 135(1) TM Act / Tort Law</td>
                                                        <td className="p-3.5 sm:p-4">Lost sales margin, royalty equivalent &amp; brand dilution</td>
                                                        <td className="p-3.5 sm:p-4 text-purple-900 font-semibold">On Plaintiff (Proof of loss)</td>
                                                        <td className="p-3.5 sm:p-4">Best when plaintiff has clear proof of sales drop or licensing rates</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Account of Profits</td>
                                                        <td className="p-3.5 sm:p-4">Section 135(1) TM Act / Equity</td>
                                                        <td className="p-3.5 sm:p-4">Gross infringing turnover minus direct production costs</td>
                                                        <td className="p-3.5 sm:p-4 text-indigo-900 font-semibold">On Defendant (Sec 106 Evidence Act)</td>
                                                        <td className="p-3.5 sm:p-4">Best when infringer had massive sales but plaintiff lost few direct sales</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Punitive Damages</td>
                                                        <td className="p-3.5 sm:p-4">Philips v. Amazestore / Rookes Doctrine</td>
                                                        <td className="p-3.5 sm:p-4">5-tier slab (₹10 Lakh to ₹5 Crore based on mala fides)</td>
                                                        <td className="p-3.5 sm:p-4 text-red-900 font-semibold">Flagrant conduct / repeat infringement</td>
                                                        <td className="p-3.5 sm:p-4">Must be pleaded in every deliberate counterfeit suit</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Actual Legal Costs</td>
                                                        <td className="p-3.5 sm:p-4">Section 35 CPC (Commercial Courts Act)</td>
                                                        <td className="p-3.5 sm:p-4">Actual invoices of legal counsels, court fees &amp; commissions</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-900 font-semibold">Statement of Costs filed on affidavit</td>
                                                        <td className="p-3.5 sm:p-4">Always claim alongside main monetary prayer</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 11: LITIGATION RECOVERY PLAYBOOK */}
                                    <section id="brand-owner-strategy" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Brand Owner&apos;s Litigation Recovery Playbook
                                        </h3>
                                        <p className="mb-6">To maximize monetary recovery in Indian commercial courts, corporate legal teams and trademark proprietors should execute a structured 5-phase litigation roadmap:</p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="bg-purple-50/60 p-5 rounded-2xl border border-purple-100">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center">
                                                    <span className="w-6 h-6 rounded-full bg-[#6E5E93] text-white flex items-center justify-center text-xs font-bold mr-2.5">1</span>
                                                    Pre-Litigation Trap Purchases &amp; GST Invoicing
                                                </h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Engage private IP investigators to conduct test purchases of infringing goods. Secure signed tax invoices, e-way bills, packaging samples, and video recordings documenting the point of sale. This defeats any claim of &ldquo;innocent infringement&rdquo; under Section 135(3).</p>
                                            </div>

                                            <div className="bg-indigo-50/60 p-5 rounded-2xl border border-indigo-100">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center">
                                                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold mr-2.5">2</span>
                                                    Draft Comprehensive Plaint with Multi-Tier Prayers
                                                </h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Pleade alternative prayers in the plaint: (a) Injunction, (b) Delivery-up, (c) Compensatory damages assessed provisionally, (d) Account of profits upon discovery of books, (e) Punitive damages under Philips v. Amazestore slabs, and (f) Actual litigation costs under Section 35 CPC.</p>
                                            </div>

                                            <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-100">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center">
                                                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-2.5">3</span>
                                                    Move Ex-Parte for Local Commissioners on First Hearing
                                                </h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Never serve advance notice in counterfeit suits. Move an urgent ex-parte application under Order XXVI Rule 9 CPC. Ensure the commission order authorizes the seizure of computer hard drives, cloud accounts, and GST sales ledgers.</p>
                                            </div>

                                            <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-100">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center">
                                                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mr-2.5">4</span>
                                                    Forensic Audit &amp; Calculation of Illicit Turnover
                                                </h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Analyze the seized invoices and digital accounts through a Chartered Accountant / Forensic Auditor. Present a sworn CA Certificate calculating exact lost sales or defendant&apos;s net illicit profits before the Case Management Hearing.</p>
                                            </div>

                                            <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-100">
                                                <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-center">
                                                    <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold mr-2.5">5</span>
                                                    Execute the Money Decree &amp; Attach Assets
                                                </h4>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">Upon passing of the decree, file execution proceedings under Order XXI CPC to attach the defendant&apos;s bank accounts, commercial properties, factory machinery, and receivables, ensuring actual cash recovery.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 12: FAQS */}
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

                                    {/* SECTION 13: STRATEGIC TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Enforcement Summary
                                        </h3>
                                        <p className="mb-6">Recovering damages and stripping illicit profits in trademark infringement suits is no longer a theoretical exercise in Indian courts. With the Commercial Courts Act accelerating trials and High Courts imposing strict punitive financial penalties, brand owners have unprecedented power to penalize IP theft.</p>
                                        <p className="mb-6">Partner with specialized intellectual property litigators and forensic valuation experts to prepare foolproof evidentiary dossiers, appoint local commissioners, and recover maximum financial damages. For related brand enforcement strategies, review our guides on <Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">responding to trademark legal notices</Link>, <Link href="/trademark-valuation-methods-for-startups-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark valuation methods for startups</Link>, and <Link href="/deceptive-similarity-trademark-test-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">deceptive similarity tests in trademark law</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        High-Value Commercial IP Litigation
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Recover Maximum Damages for Trademark Infringement
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Deploy elite commercial IP litigators to secure ex-parte local commissioner raids, freeze counterfeit operations, and claim multi-crore punitive damages and account of profits.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult IP Litigator</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">High Court IP Litigators • Commercial Suits • Ex-Parte Local Commissioners • Pan-India Enforcement</p>
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
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Commercial IP Litigation Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in high-value trademark infringement suits, punitive damages calculations, Section 135 disgorgement claims, and commercial court enforcement.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Suffering Brand Infringement?</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Is someone copying your registered trademark or selling fakes? Get an immediate damages assessment and initiate local commissioner raids.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Claim Your Losses Now
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span></Link></li>
                                    <li><Link href="/how-to-stop-trademark-infringement" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Stop Infringement</span></Link></li>
                                    <li><Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Police Raids Sec 115</span></Link></li>
                                    <li><Link href="/john-doe-ashok-kumar-order-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">John Doe Orders</span></Link></li>
                                    <li><Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Legal Notice Reply</span></Link></li>
                                    <li><Link href="/trademark-valuation-methods-for-startups-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faReceipt} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Trademark Valuation</span></Link></li>
                                    <li><Link href="/trademark-licensing-agreement-for-franchise-business-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHandHoldingDollar} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Licensing &amp; Royalties</span></Link></li>
                                    <li><Link href="/deceptive-similarity-trademark-test-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Deceptive Similarity</span></Link></li>
                                    <li><Link href="/prior-user-rights-section-34-trade-marks-act-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Prior User Rights</span></Link></li>
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
