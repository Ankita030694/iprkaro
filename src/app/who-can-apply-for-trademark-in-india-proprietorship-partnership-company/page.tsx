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
    faBuilding,
    faUsers,
    faUserCheck,
    faGlobe,
    faHandshake,
    faCoins,
    faCertificate,
    faBriefcase,
    faLandmark,
    faStamp
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Who Can Apply for Trademark in India: Proprietorship vs LLP",
    description: validateAndNormalizeDescription(
        "Learn who can apply for a trademark in India. Compare filing rules, fees, documents, and naming for Proprietorships, LLPs, and Private Limited Companies.",
        "app/who-can-apply-for-trademark-in-india-proprietorship-partnership-company/page.tsx"
    ),
    keywords: [
        "who can apply for trademark in india",
        "who can apply for a trademark in india",
        "can a proprietorship own a trademark in india",
        "can an individual own a company trademark",
        "who should be applicant name in trademark filing",
        "proprietorship vs llp vs company trademark",
        "trademark applicant category form tm a",
        "joint applicant trademark india",
        "trademark fee concession msme udyam startup india",
        "section 18 trade marks act 1999"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/who-can-apply-for-trademark-in-india-proprietorship-partnership-company",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Who Can Apply for Trademark in India: Proprietorship vs LLP",
        description: "Learn who can apply for a trademark in India. Compare filing rules, fees, documents, and naming for Proprietorships, LLPs, and Private Limited Companies.",
        url: "https://www.iprkaro.com/who-can-apply-for-trademark-in-india-proprietorship-partnership-company",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/who-can-apply-for-trademark-in-india-proprietorship-partnership-company.png",
                width: 1200,
                height: 630,
                alt: "Who Can Apply for a Trademark in India Proprietorship vs LLP vs Company Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Who Can Apply for Trademark in India: Proprietorship vs LLP",
        description: "Learn who can apply for a trademark in India. Compare filing rules, fees, documents, and naming for Proprietorships, LLPs, and Private Limited Companies.",
        images: ["https://www.iprkaro.com/images/og/who-can-apply-for-trademark-in-india-proprietorship-partnership-company.jpg"],
    }
};

const faqs = [
    {
        question: "Can a sole proprietorship hold a trademark in its business name in India?",
        answer: "No. Under Indian law, a sole proprietorship is not a separate legal entity (juristic person). A trademark application cannot be filed solely in the trading name of the firm. Instead, the application must be filed in the personal name of the individual proprietor, formatted as 'Mr./Ms. [Proprietor Name] trading as M/s [Business Name]'. The individual proprietor remains the lawful legal owner of the registered mark."
    },
    {
        question: "Who is eligible for the 50% government fee concession on trademark filing?",
        answer: "Under the First Schedule of the Trade Marks Rules, 2017, the reduced statutory e-filing fee of ₹4,500 per class (compared to standard ₹9,000) is available to Individuals, Sole Proprietorships, DPIIT-recognized Startups, and Micro, Small, and Medium Enterprises (MSMEs) possessing a valid Udyam Registration Certificate. LLPs and Private Limited companies with Udyam registration qualify for this 50% fee concession."
    },
    {
        question: "Can an individual own a trademark used by a Private Limited company?",
        answer: "Yes. A founder or promoter can register the trademark in their personal name and execute a formal Trademark Licensing Agreement or User Agreement granting the Private Limited company commercial rights to use the brand. However, during venture capital due diligence or IPO preparation, institutional investors typically require the personal trademark to be formally assigned to the corporate entity via Form TM-P."
    },
    {
        question: "What applicant name should be entered for a partnership firm on Form TM-A?",
        answer: "For a partnership firm (whether registered or unregistered under the Indian Partnership Act, 1932), the application must disclose the legal names of all current partners along with the firm's trading name. On Form TM-A, the applicant name is formatted as '[Partner 1 Name] and [Partner 2 Name] trading as M/s [Partnership Firm Name]'. Omitting partner names can result in formal examination objections."
    },
    {
        question: "Can two or more individuals apply for a trademark jointly in India?",
        answer: "Yes. Under Section 24 of the Trade Marks Act, 1999, two or more individuals or corporate entities can file a joint trademark application as co-owners. All co-applicants are registered jointly on the Trade Marks Register, and each holds an undivided interest in the mark. Any future assignment, licensing, or enforcement action requires the unanimous consent and signatures of all co-owners."
    },
    {
        question: "Can a foreign national or overseas company apply for a trademark in India?",
        answer: "Yes. Foreign individuals and foreign corporations can register trademarks in India under Section 18. The applicant must provide an official 'Address for Service in India', which is typically the registered office address of their Indian trademark attorney or agent authorized via Form TM-48. Foreign applicants can also file via the Madrid Protocol designating India as a target jurisdiction."
    },
    {
        question: "What happens if a co-founder leaves after filing a trademark in joint names?",
        answer: "If a trademark is registered in joint names and a co-founder exits the venture, the departing founder retains co-ownership rights unless a formal Deed of Assignment is executed. To transfer sole ownership to the continuing founder or company, the exiting co-founder must sign an assignment deed, and the applicant must file Form TM-P with the Trade Marks Registry to record the change in title."
    },
    {
        question: "How can a founder transfer a personal trademark to their company?",
        answer: "A founder can transfer personal trademark ownership to a corporate entity by executing a Trademark Assignment Deed (with or without goodwill) on requisite non-judicial stamp paper. Subsequently, the company must file Form TM-P on the IP India portal along with the statutory government fee (₹9,000 per class for corporate entities or ₹4,500 if MSME registered) to officially record the company as the new proprietor."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "legal-definition", title: "Section 18 Rule" },
    { id: "entity-breakdown", title: "Entity Types" },
    { id: "proprietorship-vs-company", title: "Entity Matrix" },
    { id: "founder-dilemma", title: "Personal vs Corp IP" },
    { id: "form-tma-categories", title: "Form TM-A Fees" },
    { id: "documents-required", title: "Document Checklist" },
    { id: "common-pitfalls", title: "Common Mistakes" },
    { id: "faqs", title: "FAQs" },
    { id: "expert-summary", title: "Strategic Advice" },
];

export default function WhoCanApplyTrademarkPage() {
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
        "headline": "Who Can Apply for a Trademark in India? (Proprietorship vs LLP vs Company)",
        "description": "Learn who can apply for a trademark in India. Compare filing rules, fees, documents, and naming for Proprietorships, LLPs, and Private Limited Companies.",
        "image": "https://www.iprkaro.com/images/og/who-can-apply-for-trademark-in-india-proprietorship-partnership-company.png",
        "datePublished": "2024-04-10T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/who-can-apply-for-trademark-in-india-proprietorship-partnership-company"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Who Can Apply for Trademark in India: Proprietorship vs LLP",
        "url": "https://www.iprkaro.com/who-can-apply-for-trademark-in-india-proprietorship-partnership-company",
        "description": "Learn who can apply for a trademark in India. Compare filing rules, fees, documents, and naming for Proprietorships, LLPs, and Private Limited Companies.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/who-can-apply-for-trademark-in-india-proprietorship-partnership-company#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/who-can-apply-for-trademark-in-india-proprietorship-partnership-company#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Who Can Apply for a Trademark", "item": "https://www.iprkaro.com/who-can-apply-for-trademark-in-india-proprietorship-partnership-company" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Eligible Trademark Applicant Categories in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Individual or Natural Person" },
            { "@type": "ListItem", "position": 2, "name": "Sole Proprietorship Firm (Filed as Individual Trading As)" },
            { "@type": "ListItem", "position": 3, "name": "Partnership Firm (Listing all partner names)" },
            { "@type": "ListItem", "position": 4, "name": "Limited Liability Partnership (LLP)" },
            { "@type": "ListItem", "position": 5, "name": "Private Limited Company / Public Limited Company / OPC" },
            { "@type": "ListItem", "position": 6, "name": "Trusts, Societies, and Section 8 NGOs" },
            { "@type": "ListItem", "position": 7, "name": "Hindu Undivided Family (HUF through Karta)" },
            { "@type": "ListItem", "position": 8, "name": "Joint Applicants / Co-Owners" },
            { "@type": "ListItem", "position": 9, "name": "Foreign Nationals and Overseas Corporations" }
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
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Section 18 Statutory Eligibility</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Who Can Apply for a <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark in India?</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Under Section 18(1) of the Trade Marks Act, 1999, any person claiming to be the proprietor of a brand used or proposed to be used can file for trademark protection in India. However, the legal entity you select—whether a Sole Proprietorship, Partnership, LLP, or Private Limited Company—directly dictates your statutory government fees (₹4,500 vs ₹9,000), ownership rights, liability shielding, and venture capital readiness. Explore this comprehensive guide on applicant eligibility, naming protocols on Form TM-A, document checklists, and strategic founder IP structuring.
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
                                        Check Your Filing Eligibility <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/who-can-apply-for-trademark-in-india-proprietorship-partnership-company.png"
                                    alt="Who Can Apply for a Trademark in India Proprietorship vs LLP vs Company Guide"
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
                        { label: "Who Can Apply for a Trademark", href: "/who-can-apply-for-trademark-in-india-proprietorship-partnership-company" }
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

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Trademark Eligibility
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Under Section 18(1) of the Trade Marks Act, 1999, any natural person or juristic entity claiming brand ownership can apply for a trademark in India. Eligible applicants include Individuals, Sole Proprietorships (filed under the proprietor&apos;s personal name trading as the firm), Partnership Firms (all partners named), Limited Liability Partnerships (LLPs), Private Limited Companies, Public Limited Companies, One Person Companies (OPCs), Trusts, Societies, Hindu Undivided Families (HUF), Joint Applicants, and Foreign entities. The statutory government e-filing fee is ₹4,500 per class for Individuals, Startups, and MSMEs, and ₹9,000 per class for non-MSME corporate bodies.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            When embarking on the journey of brand protection, one of the earliest and most critical strategic decisions is identifying the correct <strong>applicant entity</strong>. The Trade Marks Registry does not treat all business structures identically. How you structure your application on the official IP India portal impacts your statutory government filing fees, evidentiary requirements, long-term corporate valuation, tax liabilities, and ability to raise venture capital or bank financing.
                                        </p>
                                        <p className="mb-6">
                                            Many early-stage entrepreneurs erroneously assume that because their brand operates under a commercial shop name or unregistered venture, the business name itself can hold title to intellectual property. In Indian jurisprudence, an entity must possess <strong>legal personhood</strong> (either as a natural human being or an incorporated juristic body) to own property. Entering an improper applicant name on Form TM-A creates severe procedural defects, triggers unnecessary examination objections, and can even invalidate subsequent infringement enforcement under Section 29 of the Trade Marks Act.
                                        </p>
                                        <p className="mb-6">
                                            Whether you are a solo freelancer launching an online brand, co-founders operating a partnership, or directors incorporating a fast-growing tech startup, understanding the statutory nuances of trademark applicant classification is essential before initiating the <Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration process</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 2: SECTION 18 STATUTORY RULE */}
                                    <section id="legal-definition" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 18 Statutory Rule &amp; Legal Personhood
                                        </h2>
                                        <p className="mb-6">
                                            The statutory threshold for trademark applicant eligibility is codified under <strong>Section 18(1) of the Trade Marks Act, 1999</strong>:
                                        </p>

                                        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-xl my-6 not-prose">
                                            <blockquote className="text-gray-800 italic m-0 font-serif">
                                                &ldquo;Any person claiming to be the proprietor of a trade mark used or proposed to be used by him, who is desirous of registering it, shall apply in writing to the Registrar in the prescribed manner for the registration of his trade mark.&rdquo;
                                            </blockquote>
                                            <p className="text-xs text-gray-500 mt-2 font-sans mb-0">— Section 18(1), Trade Marks Act, 1999</p>
                                        </div>

                                        <p className="mb-6">
                                            To dissect this legal definition, Indian courts and the Trade Marks Registry evaluate three primary prongs:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-purple-50 text-[#6E5E93] rounded-xl flex items-center justify-center font-bold text-lg mb-4">1</div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Legal Personhood</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    The term &ldquo;Person&rdquo; is interpreted in light of the General Clauses Act, 1897 to include any individual human being, company, association, or body of individuals, whether incorporated or not.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-purple-50 text-[#6E5E93] rounded-xl flex items-center justify-center font-bold text-lg mb-4">2</div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Claim of Proprietorship</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    The applicant must have adopted the mark in good faith, possessing either active commercial use (supported by a <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">user affidavit</Link>) or a bona fide intent to use (&ldquo;proposed to be used&rdquo;).
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-purple-50 text-[#6E5E93] rounded-xl flex items-center justify-center font-bold text-lg mb-4">3</div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Address for Service</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Under Rule 17 of the Trade Marks Rules, 2017, the applicant must provide a valid postal address for service within the territory of India, or retain a registered attorney via <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-48</Link>.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: DETAILED ENTITY BREAKDOWN */}
                                    <section id="entity-breakdown" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faUsers} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Who Can Apply: Complete Entity Breakdown
                                        </h2>
                                        <p className="mb-6">
                                            Indian trademark jurisprudence recognizes a broad spectrum of commercial and non-commercial entities. Below is the statutory classification of all eligible applicant categories:
                                        </p>

                                        {/* ENTITY 1: INDIVIDUAL */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Category 1</span>
                                                <span className="text-xs text-green-700 bg-green-50 font-bold px-2.5 py-1 rounded-md">Govt Fee: ₹4,500</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faUserCheck} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Individual (Natural Person)
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Any individual human being—regardless of whether they currently run an active commercial business—can file a trademark application in their own personal name. This includes freelancers, content creators, artists, independent consultants, and early-stage startup founders who have not yet incorporated a company.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-2 mb-4 list-disc pl-5">
                                                <li><strong>Title Format on Form TM-A:</strong> &ldquo;Mr. Rajesh Kumar&rdquo; or &ldquo;Ms. Ananya Sen&rdquo;</li>
                                                <li><strong>Legal Ownership:</strong> The individual holds 100% personal, unencumbered ownership of the trademark.</li>
                                                <li><strong>Government Fee:</strong> ₹4,500 per class (e-filing). Automatically eligible for the individual concession rate without needing MSME registration.</li>
                                                <li><strong>Subsequent Commercialization:</strong> The individual can license the mark to any third party or assign it to a newly incorporated company via a <Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark assignment agreement</Link>.</li>
                                            </ul>
                                        </div>

                                        {/* ENTITY 2: SOLE PROPRIETORSHIP */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Category 2</span>
                                                <span className="text-xs text-green-700 bg-green-50 font-bold px-2.5 py-1 rounded-md">Govt Fee: ₹4,500</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Sole Proprietorship Firm (Trading As)
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                A sole proprietorship is the most common business structure for micro-enterprises and local retailers in India. However, under Indian legal doctrine, a sole proprietorship is <strong>not a separate legal entity</strong> distinct from its owner. It cannot sue, be sued, or hold property in its trade name alone.
                                            </p>
                                            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-4 text-xs text-amber-900 leading-relaxed font-medium">
                                                <strong>CRITICAL FILING RULE:</strong> Never file a trademark solely in the name of &ldquo;Apex Retail Enterprises&rdquo;. The application will receive a mandatory examination objection. It must strictly be filed in the format: <em>&ldquo;Mr. Rajesh Kumar trading as M/s Apex Retail Enterprises&rdquo;</em>.
                                            </div>
                                            <ul className="text-sm text-gray-600 space-y-2 mb-0 list-disc pl-5">
                                                <li><strong>Title Format on Form TM-A:</strong> &ldquo;[Proprietor Name] trading as M/s [Business Trade Name]&rdquo;</li>
                                                <li><strong>Government Fee:</strong> ₹4,500 per class (categorized as Individual / Sole Proprietor).</li>
                                                <li><strong>Tax &amp; Identity Proof:</strong> Uses the individual proprietor&apos;s PAN and Aadhaar card along with GST or Udyam registration for trade proof.</li>
                                            </ul>
                                        </div>

                                        {/* ENTITY 3: PARTNERSHIP FIRM */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Category 3</span>
                                                <span className="text-xs text-blue-700 bg-blue-50 font-bold px-2.5 py-1 rounded-md">Govt Fee: ₹4,500 (with MSME) / ₹9,000</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faHandshake} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Partnership Firm (Partnership Act, 1932)
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                A general partnership firm formed under the Indian Partnership Act, 1932 is an association of persons. While the firm operates under a collective trade name, property rights vest in the partners jointly. Therefore, the Trade Marks Registry requires that the full legal names of <strong>all active partners</strong> be explicitly stated on Form TM-A.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-2 mb-0 list-disc pl-5">
                                                <li><strong>Title Format on Form TM-A:</strong> &ldquo;Mr. Vikram Malhotra, Mrs. Priya Sharma, and Mr. Amit Dave trading as M/s Alpha Logistics&rdquo;</li>
                                                <li><strong>Government Fee:</strong> ₹4,500 per class if the partnership holds an active <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Udyam MSME Certificate</Link>; otherwise, the standard corporate fee of ₹9,000 applies.</li>
                                                <li><strong>Key Document:</strong> Executed Partnership Deed, Firm PAN, and Form TM-48 signed by the managing or authorized partner.</li>
                                            </ul>
                                        </div>

                                        {/* ENTITY 4: LIMITED LIABILITY PARTNERSHIP (LLP) */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Category 4</span>
                                                <span className="text-xs text-blue-700 bg-blue-50 font-bold px-2.5 py-1 rounded-md">Govt Fee: ₹4,500 (with MSME) / ₹9,000</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faBuilding} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Limited Liability Partnership (LLP Act, 2008)
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Unlike a traditional partnership, an LLP is a <strong>body corporate</strong> with separate legal personality and perpetual succession. The LLP can hold, acquire, and assign intellectual property directly in its own corporate name, independent of its designated partners.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-2 mb-0 list-disc pl-5">
                                                <li><strong>Title Format on Form TM-A:</strong> &ldquo;Zenith Technologies LLP&rdquo; (along with LLPIN).</li>
                                                <li><strong>Asset Shielding:</strong> If a partner retires or exits, the trademark remains the uninterrupted property of the LLP without requiring a Form TM-P assignment.</li>
                                                <li><strong>Government Fee:</strong> ₹4,500 per class with Udyam Certificate; ₹9,000 per class without MSME.</li>
                                            </ul>
                                        </div>

                                        {/* ENTITY 5: PRIVATE LIMITED / PUBLIC LIMITED / OPC */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Category 5</span>
                                                <span className="text-xs text-blue-700 bg-blue-50 font-bold px-2.5 py-1 rounded-md">Govt Fee: ₹4,500 (with MSME/DPIIT) / ₹9,000</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faRocket} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Private Limited Company / Public Limited / OPC (Companies Act, 2013)
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                A registered company is an independent juristic person. Registering the trademark under the company name ensures the brand exists as an intangible corporate asset on the company&apos;s balance sheet. This is the gold standard required by venture capitalists, angel investors, and private equity funds during funding rounds.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-2 mb-0 list-disc pl-5">
                                                <li><strong>Title Format on Form TM-A:</strong> &ldquo;NextGen FinTech Solutions Private Limited&rdquo; (along with Corporate Identification Number - CIN).</li>
                                                <li><strong>Authorized Signatory:</strong> Filed through a designated Director authorized by a formal Board Resolution.</li>
                                                <li><strong>Fee Optimization:</strong> Private Limited companies can secure the 50% fee concession (paying ₹4,500 instead of ₹9,000) by attaching an active <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Udyam Registration Certificate</Link> or DPIIT Startup Recognition.</li>
                                            </ul>
                                        </div>

                                        {/* ENTITY 6: TRUSTS, SOCIETIES, AND NGOS */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Category 6</span>
                                                <span className="text-xs text-gray-700 bg-gray-100 font-bold px-2.5 py-1 rounded-md">Govt Fee: ₹9,000 per class</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faLandmark} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Trusts, Societies, and Section 8 NGOs
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Non-profit organizations, educational institutions, religious trusts, and registered societies frequently register trademarks to protect educational marks, charitable emblems, certification symbols, and collective marks.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-2 mb-0 list-disc pl-5">
                                                <li><strong>Title Format:</strong> For a Trust: &ldquo;Mr. K. R. Nambiar (Managing Trustee) for and on behalf of Shanti Educational Trust&rdquo;. For a Registered Society: In the registered name of the Society represented by the President/Secretary.</li>
                                                <li><strong>Statutory Proof:</strong> Trust Deed, Society Registration Certificate, and Board Resolution authorizing the signatory.</li>
                                            </ul>
                                        </div>

                                        {/* ENTITY 7: JOINT APPLICANTS */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Category 7</span>
                                                <span className="text-xs text-blue-700 bg-blue-50 font-bold px-2.5 py-1 rounded-md">Govt Fee: ₹4,500 (if all are individuals)</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faUsers} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Joint Applicants / Co-Owners (Section 24)
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Under Section 24 of the Trade Marks Act, 1999, two or more individuals or distinct corporate entities can file a single trademark application jointly as co-proprietors. Each co-applicant holds an undivided co-ownership share in the brand.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-2 mb-0 list-disc pl-5">
                                                <li><strong>Title Format:</strong> &ldquo;Mr. Rohan Kapoor and Ms. Neha Gupta (Joint Applicants)&rdquo;</li>
                                                <li><strong>Co-Ownership Restrictions:</strong> Neither co-owner can independently assign, license, or settle infringement disputes regarding the mark without the explicit written consent of the other co-proprietor.</li>
                                            </ul>
                                        </div>

                                        {/* ENTITY 8: FOREIGN ENTITIES */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Category 8</span>
                                                <span className="text-xs text-gray-700 bg-gray-100 font-bold px-2.5 py-1 rounded-md">Govt Fee: ₹9,000 per class</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 mr-2 text-[#6E5E93]" />
                                                Foreign Nationals &amp; Overseas Corporations
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Foreign businesses and non-resident individuals can secure exclusive trademark rights across India. They can apply either directly through a national application on the IP India portal or internationally via the <Link href="/international-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">Madrid Protocol</Link>.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-2 mb-0 list-disc pl-5">
                                                <li><strong>Address for Service:</strong> Under Rule 17, foreign applicants must designate an Indian address for service (usually their retained Indian trademark attorney).</li>
                                                <li><strong>Convention Priority:</strong> Applicants can claim 6-month convention priority under Section 154 based on their foreign home-country filing.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 4: COMPARISON MATRIX TABLE */}
                                    <section id="proprietorship-vs-company" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Proprietorship vs LLP vs Company Comparison
                                        </h2>
                                        <p className="mb-6">
                                            The following comparative matrix illustrates key legal, financial, and procedural distinctions across the four most prominent business entity types in India:
                                        </p>

                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-2xl shadow-sm overflow-hidden text-xs md:text-sm">
                                                <thead className="bg-[#6E5E93] text-white font-bold">
                                                    <tr>
                                                        <th className="p-3.5 md:p-4 border-b border-purple-800">Feature / Metric</th>
                                                        <th className="p-3.5 md:p-4 border-b border-purple-800">Individual / Proprietorship</th>
                                                        <th className="p-3.5 md:p-4 border-b border-purple-800">Partnership Firm</th>
                                                        <th className="p-3.5 md:p-4 border-b border-purple-800">LLP</th>
                                                        <th className="p-3.5 md:p-4 border-b border-purple-800">Private Limited Company</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="p-3.5 md:p-4 font-bold text-gray-900 bg-gray-50/50">Legal Persona</td>
                                                        <td className="p-3.5 md:p-4 text-gray-700">Natural Person (No separate entity)</td>
                                                        <td className="p-3.5 md:p-4 text-gray-700">Association of Persons</td>
                                                        <td className="p-3.5 md:p-4 text-gray-700 font-semibold text-purple-900">Juristic Body Corporate</td>
                                                        <td className="p-3.5 md:p-4 text-gray-700 font-semibold text-purple-900">Juristic Body Corporate</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="p-3.5 md:p-4 font-bold text-gray-900 bg-gray-50/50">Form TM-A Title</td>
                                                        <td className="p-3.5 md:p-4 text-gray-700">&ldquo;[Name] trading as M/s [Firm]&rdquo;</td>
                                                        <td className="p-3.5 md:p-4 text-gray-700">&ldquo;[All Partner Names] trading as...&rdquo;</td>
                                                        <td className="p-3.5 md:p-4 text-gray-700">&ldquo;[LLP Name] LLP&rdquo;</td>
                                                        <td className="p-3.5 md:p-4 text-gray-700">&ldquo;[Company Name] Pvt Ltd&rdquo;</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="p-3.5 md:p-4 font-bold text-gray-900 bg-gray-50/50">Govt Fee (Without MSME)</td>
                                                        <td className="p-3.5 md:p-4 text-green-700 font-bold">₹4,500 per class</td>
                                                        <td className="p-3.5 md:p-4 text-red-700 font-bold">₹9,000 per class</td>
                                                        <td className="p-3.5 md:p-4 text-red-700 font-bold">₹9,000 per class</td>
                                                        <td className="p-3.5 md:p-4 text-red-700 font-bold">₹9,000 per class</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="p-3.5 md:p-4 font-bold text-gray-900 bg-gray-50/50">Govt Fee (With Udyam MSME)</td>
                                                        <td className="p-3.5 md:p-4 text-green-700 font-bold">₹4,500 per class</td>
                                                        <td className="p-3.5 md:p-4 text-green-700 font-bold">₹4,500 per class</td>
                                                        <td className="p-3.5 md:p-4 text-green-700 font-bold">₹4,500 per class</td>
                                                        <td className="p-3.5 md:p-4 text-green-700 font-bold">₹4,500 per class</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="p-3.5 md:p-4 font-bold text-gray-900 bg-gray-50/50">Investor Readiness (VC/PE)</td>
                                                        <td className="p-3.5 md:p-4 text-amber-700 font-medium">Low (Requires assignment)</td>
                                                        <td className="p-3.5 md:p-4 text-amber-700 font-medium">Low (Requires restructuring)</td>
                                                        <td className="p-3.5 md:p-4 text-blue-700 font-medium">Moderate</td>
                                                        <td className="p-3.5 md:p-4 text-green-700 font-bold">Highest (Direct corporate asset)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="p-3.5 md:p-4 font-bold text-gray-900 bg-gray-50/50">Ownership on Partner Exit</td>
                                                        <td className="p-3.5 md:p-4 text-gray-700">N/A (Sole proprietor owns)</td>
                                                        <td className="p-3.5 md:p-4 text-red-700">Dispute risk / requires Form TM-P</td>
                                                        <td className="p-3.5 md:p-4 text-green-700 font-medium">Stays with LLP</td>
                                                        <td className="p-3.5 md:p-4 text-green-700 font-medium">Stays with Company</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="p-3.5 md:p-4 font-bold text-gray-900 bg-gray-50/50">Asset Liability Protection</td>
                                                        <td className="p-3.5 md:p-4 text-red-700">Unlimited personal liability</td>
                                                        <td className="p-3.5 md:p-4 text-red-700">Unlimited joint &amp; several liability</td>
                                                        <td className="p-3.5 md:p-4 text-green-700 font-medium">Limited to partner contribution</td>
                                                        <td className="p-3.5 md:p-4 text-green-700 font-medium">Limited to share capital</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 5: PERSONAL VS CORPORATE IP OWNERSHIP */}
                                    <section id="founder-dilemma" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Personal vs Corporate IP Ownership for Startups
                                        </h2>
                                        <p className="mb-6">
                                            One of the most frequent dilemmas encountered by startup founders and co-founding teams is deciding whether to file the trademark in their <strong>individual personal names</strong> or under their newly incorporated <strong>Private Limited Company</strong>. Both approaches carry strategic pros and cons:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            {/* STRATEGY A: PERSONAL NAME */}
                                            <div className="bg-purple-50/50 p-6 md:p-8 rounded-2xl border border-purple-100 shadow-sm">
                                                <div className="inline-flex items-center bg-[#6E5E93] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                                    Option A: Founder&apos;s Personal Name
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-3">Filing as an Individual Founder</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                                    The founder registers the brand in their personal capacity before or immediately after business inception.
                                                </p>
                                                <div className="space-y-3 text-xs text-gray-700">
                                                    <p className="m-0"><strong>Advantages:</strong></p>
                                                    <ul className="list-disc pl-4 space-y-1 text-gray-600 m-0">
                                                        <li>Automatic ₹4,500 statutory fee tier without needing Udyam or corporate paperwork.</li>
                                                        <li>Founder retains absolute personal control if the corporate entity dissolves or founders part ways.</li>
                                                        <li>Brand can be licensed to the company in exchange for regular trademark royalty payments.</li>
                                                    </ul>
                                                    <p className="m-0 pt-2"><strong>Disadvantages:</strong></p>
                                                    <ul className="list-disc pl-4 space-y-1 text-red-600 m-0">
                                                        <li>VC investors will mandate a formal assignment to the company prior to closing funding rounds.</li>
                                                        <li>Transferring to company later requires executing a Deed of Assignment and filing Form TM-P with additional government fees.</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* STRATEGY B: COMPANY NAME */}
                                            <div className="bg-indigo-50/50 p-6 md:p-8 rounded-2xl border border-indigo-100 shadow-sm">
                                                <div className="inline-flex items-center bg-[#1A1A24] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                                    Option B: Company Corporate Name
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-3">Filing Directly as Private Limited / LLP</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                                    The incorporated entity files the trademark directly, anchoring brand goodwill as a corporate asset.
                                                </p>
                                                <div className="space-y-3 text-xs text-gray-700">
                                                    <p className="m-0"><strong>Advantages:</strong></p>
                                                    <ul className="list-disc pl-4 space-y-1 text-gray-600 m-0">
                                                        <li>Seamless investor due diligence with zero IP encumbrances.</li>
                                                        <li>Prevents co-founder departure disputes—if a co-founder leaves, they cannot claim personal title to the brand.</li>
                                                        <li>Corporate brand value directly enhances enterprise valuation and balance sheet net worth.</li>
                                                    </ul>
                                                    <p className="m-0 pt-2"><strong>Fee Mitigation:</strong></p>
                                                    <p className="text-gray-600 m-0">
                                                        Secure an instant ₹4,500 fee discount by obtaining a free <Link href="/udyam-registration-agreement" className="text-[rgb(110,94,147)] hover:underline font-semibold">Udyam Registration Certificate</Link> for the company before filing Form TM-A.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: FORM TM-A APPLICANT CATEGORIES */}
                                    <section id="form-tma-categories" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCoins} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Form TM-A Applicant Categories &amp; Fees
                                        </h2>
                                        <p className="mb-6">
                                            Under the Trade Marks Rules, 2017, all new trademark applications are submitted on the unified <strong>Form TM-A</strong>. The IP India portal categorizes applicants into two distinct pricing schedules:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="border border-green-200 bg-green-50/40 p-6 rounded-2xl">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-sm font-extrabold text-green-900 uppercase tracking-wide">Category I</span>
                                                    <span className="text-lg font-black text-green-700">₹4,500 / class</span>
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Individual / Startup / Small Enterprise</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Eligible for 50% statutory concession on online e-filing (physical counter filing is ₹5,000 per class):
                                                </p>
                                                <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
                                                    <li>Individual natural persons and Sole Proprietorships.</li>
                                                    <li>DPIIT-recognized Startups (holding DIPP certificate).</li>
                                                    <li>Micro and Small Enterprises holding a valid Udyam MSME certificate (whether LLP, Partnership, or Pvt Ltd).</li>
                                                </ul>
                                            </div>

                                            <div className="border border-purple-200 bg-purple-50/40 p-6 rounded-2xl">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-sm font-extrabold text-purple-900 uppercase tracking-wide">Category II</span>
                                                    <span className="text-lg font-black text-[#6E5E93]">₹9,000 / class</span>
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Others (Standard Corporate Bodies)</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Standard statutory fee for entities that do not qualify for MSME/Startup status (physical counter filing is ₹10,000 per class):
                                                </p>
                                                <ul className="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
                                                    <li>Private Limited and Public Limited Companies without Udyam.</li>
                                                    <li>LLPs and Partnerships without Udyam registration.</li>
                                                    <li>Large enterprises and medium enterprises exceeding MSME thresholds.</li>
                                                    <li>Foreign corporate entities without Indian MSME status.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: DOCUMENT CHECKLIST BY ENTITY TYPE */}
                                    <section id="documents-required" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Document Checklist by Legal Entity Type
                                        </h2>
                                        <p className="mb-6">
                                            To ensure seamless scrutiny during registry formalities check, compile the following statutory documents according to your entity structure:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Individual / Sole Proprietor
                                                </h3>
                                                <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 m-0">
                                                    <li>Self-attested copy of PAN Card and Aadhaar Card / Passport.</li>
                                                    <li>Business trade license, GST Certificate, or Shop &amp; Establishment registration (for sole proprietorship).</li>
                                                    <li>Clear high-resolution representation of the logo or wordmark.</li>
                                                    <li>Executed and stamped <Link href="/form-tm-48-power-of-attorney-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-semibold">Form TM-48 Power of Attorney</Link>.</li>
                                                    <li>Notarized User Affidavit (if claiming prior use date).</li>
                                                </ul>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Partnership Firm
                                                </h3>
                                                <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 m-0">
                                                    <li>Executed Partnership Deed (registered or notarized).</li>
                                                    <li>PAN Card of the Partnership Firm.</li>
                                                    <li>KYC documents (PAN &amp; Aadhaar) of all partners.</li>
                                                    <li>Udyam MSME Certificate (for 50% statutory fee discount).</li>
                                                    <li>Form TM-48 signed by the managing or authorized partner.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    LLP / Private Limited / OPC
                                                </h3>
                                                <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 m-0">
                                                    <li>Certificate of Incorporation (CIN / LLPIN) issued by MCA.</li>
                                                    <li>Memorandum &amp; Articles of Association (MOA/AOA) or LLP Agreement.</li>
                                                    <li>Company PAN Card.</li>
                                                    <li>Board Resolution on official letterhead authorizing the signatory.</li>
                                                    <li>Udyam MSME Certificate / DPIIT Recognition Certificate.</li>
                                                    <li>Form TM-48 signed by the authorized Director / Designated Partner.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    Trust / Society / Foreign Entity
                                                </h3>
                                                <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 m-0">
                                                    <li>Trust Deed or Society Registration Certificate &amp; Bylaws.</li>
                                                    <li>Managing Committee Resolution authorizing trademark application.</li>
                                                    <li>For Foreign Entities: Certificate of Incorporation (Apostilled/Notarized) and address for service in India.</li>
                                                    <li>Certified priority document (if claiming Paris Convention priority within 6 months).</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: COMMON PITFALLS */}
                                    <section id="common-pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Common Pitfalls in Trademark Applicant Naming
                                        </h2>
                                        <p className="mb-6">
                                            Filing errors in the applicant section of Form TM-A can cause prolonged examination delays, Formalities Check Fail notices, or costly ownership rectifications:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 flex items-start space-x-4">
                                                <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">1</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Filing in Sole Proprietorship Trade Name Alone</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Submitting an application as &ldquo;M/s Royal Bakery&rdquo; without stating the individual proprietor name (&ldquo;Mr. Ankit Verma trading as M/s Royal Bakery&rdquo;) triggers an immediate <em>Formalities Check Fail</em> objection because an unincorporated firm lacks legal standing.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 flex items-start space-x-4">
                                                <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">2</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Omitting Partner Names in Partnership Applications</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Filing in the partnership firm name without enumerating all partners creates severe title defects. If a partner subsequently retires or a partnership dispute emerges, the Trade Marks Register cannot determine lawful title without extensive litigation.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 flex items-start space-x-4">
                                                <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">3</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Paying ₹9,000 Corporate Fee Without Attaching Udyam</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Many newly incorporated Private Limited companies mistakenly file under the &ldquo;Others&rdquo; category paying ₹9,000 per class because they were unaware that obtaining a simple Udyam MSME certificate entitles them to file under the ₹4,500 concession tier.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 flex items-start space-x-4">
                                                <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">4</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Unregulated Joint Ownership Between Non-Partners</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Registering a brand in joint individual names without an accompanying co-existence or IP sharing agreement creates operational paralysis if the co-founders experience a falling out. Neither party can license or monetize the mark without the other&apos;s signature.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-4 not-prose">
                                            {faqs.map((faq, index) => (
                                                <details key={index} className="group bg-gray-50 rounded-2xl border border-gray-200 p-5 transition-all open:bg-white open:shadow-md">
                                                    <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center select-none text-base">
                                                        <span>{faq.question}</span>
                                                        <span className="text-[#6E5E93] group-open:rotate-180 transition-transform text-lg">&darr;</span>
                                                    </summary>
                                                    <p className="text-gray-600 text-sm mt-3 leading-relaxed border-t border-gray-100 pt-3 m-0">
                                                        {faq.answer}
                                                    </p>
                                                </details>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 10: EXPERT SUMMARY & STRATEGIC ADVICE */}
                                    <section id="expert-summary" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCertificate} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Strategic Advice on Trademark Ownership
                                        </h2>
                                        <p className="mb-6">
                                            Structuring your trademark ownership correctly from day zero safeguards your intellectual property against costly rectifications, corporate disputes, and investor diligence friction. Here is the recommended roadmap for businesses at various stages:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Early Stage / Solo Founders</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    File immediately in your personal name under the ₹4,500 fee tier to secure priority. You can execute a simple licensing agreement once your company is incorporated.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Funded / High-Growth Startups</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    File directly under the Private Limited Company name. Secure an Udyam MSME certificate to enjoy the 50% discount while anchoring brand valuation on the balance sheet.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Partnerships &amp; LLPs</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Ensure all active partners are named on Form TM-A or register an LLP to hold the mark as an independent body corporate, preventing partner exit disputes.
                                                </p>
                                            </div>
                                        </div>

                                        {/* BOTTOM CTA CARD */}
                                        <div className="mt-12 bg-gradient-to-br from-[#1A1A24] to-[#2B2048] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden not-prose">
                                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7664A0] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

                                            <div className="relative z-10 text-center max-w-2xl mx-auto">
                                                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-white">
                                                    Structure Your Trademark Filing with Expert Attorneys
                                                </h3>

                                                <p className="text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Don&apos;t let applicant naming errors or missing MSME discounts derail your brand protection. Our registered trademark attorneys help you select the optimal entity structure, file Form TM-A, and secure end-to-end IP protection.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>File Trademark Application</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Registered IP Attorneys • 50% MSME Fee Rebate Filing • Comprehensive Clearance Search
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in corporate IP strategy, applicant entity structuring, and brand portfolio management under the Trade Marks Act, 1999. He assists founders, LLPs, and enterprises across India in securing bulletproof trademark rights.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Need Filing Assistance?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Verify your applicant eligibility, save 50% on government fees, and file Form TM-A with expert IP attorneys.</p>
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
                                        <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faCoins} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">50% MSME Fee</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-assignment-vs-licensing-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faHandshake} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">IP Transfer</span>
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
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Form TM-48</span>
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
                                        <Link href="/single-class-vs-multi-class-trademark-application-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faTable} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Class Strategy</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Search</span>
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
