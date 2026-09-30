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
    faHandHoldingHeart,
    faBuildingColumns,
    faUsers,
    faCoins,
    faHeartPulse,
    faFileSignature
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark for Trusts, Societies & Section 8 in India",
    description: validateAndNormalizeDescription(
        "Register trademark for Trust, Society, or Section 8 Company in India. Master Classes 45, 41 & 36, mandatory trust deed docs, and 50% MSME fee discount.",
        "app/trademark-registration-for-trust-society-section-8-company-india/page.tsx"
    ),
    keywords: [
        "trademark registration for trusts societies and section 8 companies in india",
        "can trust register trademark in india",
        "documents required for ngo trademark registration",
        "section 8 company brand protection",
        "government fee for trust trademark application",
        "trademark class for non profit organization india",
        "class 45 trademark for charitable trust",
        "society registration certificate trademark application",
        "managing trustee power of attorney form tm 48",
        "emblems and names act trademark restrictions india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-for-trust-society-section-8-company-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark for Trusts, Societies & Section 8 in India",
        description: "Register trademark for Trust, Society, or Section 8 Company in India. Master Classes 45, 41 & 36, mandatory trust deed docs, and 50% MSME fee discount.",
        url: "https://www.iprkaro.com/trademark-registration-for-trust-society-section-8-company-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-registration-for-trust-society-section-8-company-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Registration for Trusts, Societies & Section 8 Companies in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark for Trusts, Societies & Section 8 in India",
        description: "Register trademark for Trust, Society, or Section 8 Company in India. Master Classes 45, 41 & 36, mandatory trust deed docs, and 50% MSME fee discount.",
        images: ["https://www.iprkaro.com/images/og/trademark-registration-for-trust-society-section-8-company-india.png"],
    }
};

const faqs = [
    {
        question: "Can an unregistered or registered charitable trust register a trademark in India?",
        answer: "Yes. Under the Trade Marks Act, 1999, a Trust can apply for trademark registration. A registered trust files under the applicant category of 'Trust' or 'Association of Persons' (AOP) through its Managing Trustee or designated authorized trustee, supported by a registered Trust Deed and a formal resolution passed by the Board of Trustees."
    },
    {
        question: "Which trademark classes are most crucial for NGOs, foundations, and Section 8 companies?",
        answer: "The primary trademark classes include: Class 45 (Charitable services, social welfare, humanitarian aid, advocacy, and community outreach), Class 41 (Educational programs, skill training, workshops, and cultural seminars), Class 36 (Charitable fundraising, donation collection, microfinance, and endowment management), Class 44 (Charitable healthcare, medical relief camps, and dispensaries), and Class 35 (NGO volunteer coordination, NGO marketing campaigns, and distribution of aid supplies)."
    },
    {
        question: "Can a Section 8 company or Trust avail the 50% government fee concession?",
        answer: "A Section 8 company, Trust, or Society qualifies for the subsidized official government filing fee of ₹4,500 per class (e-filing) instead of the standard ₹9,000 corporate fee IF it holds a valid Udyam MSME Registration Certificate or DPIIT Startup Recognition Certificate. Without an MSME or Startup certificate, non-profit institutions are classified under 'Others' / 'Body Corporate' paying ₹9,000 per class."
    },
    {
        question: "Who is listed as the applicant for a Trust trademark on the IP India portal?",
        answer: "Because a Trust is not a separate legal corporate entity (unlike a Section 8 company), the trademark application on Form TM-A is filed in the name of the Trust represented by its Managing Trustee (e.g., 'XYZ Charitable Trust represented by its Managing Trustee, Mr. ABC'), accompanied by the registered Trust Deed and Board Resolution."
    },
    {
        question: "What happens to a registered trademark when a Managing Trustee changes or passes away?",
        answer: "When a trustee retires, resigns, or passes away, the registered trademark does not expire. The continuing Board of Trustees executes a Deed of Transmission or Succession Resolution, and an application is submitted on Form TM-P under Section 45 of the Trade Marks Act to record the new Managing Trustee or change of title in the Register of Trade Marks."
    },
    {
        question: "Can an NGO trademark descriptive religious, charitable, or national terms?",
        answer: "No. Generic, laudatory, or descriptive words such as 'Seva', 'Trust', 'Charity', 'Bharat', or 'Samaj' cannot be monopolized as standalone word marks under Section 9(1)(b). However, NGOs can register composite device marks, distinctive logo emblems, or coined brand names containing such words by disclaiming exclusive rights to the descriptive terms."
    },
    {
        question: "What are the restrictions under the Emblems and Names (Prevention of Improper Use) Act, 1950?",
        answer: "Under Section 9(2)(d) of the Trade Marks Act read with the Emblems and Names Act, 1950, trademark registration is strictly prohibited for marks containing the Indian National Flag, Ashoka Pillar / State Emblem, official UN insignia, Red Cross symbol, or names/photographs of national leaders (such as Mahatma Gandhi or Jawaharlal Nehru) without prior sanction from the Central Government."
    },
    {
        question: "Why is trademark registration vital for preserving 12AB/80G tax exemptions and FCRA compliance?",
        answer: "Trademark registration gives non-profits exclusive legal standing to shut down fraudulent imposter websites, fake UPI donation QR codes, and counterfeit NGO campaigns. By stopping financial fraud in your name, you protect your institutional integrity, prevent donor misdirection, and safeguard your mandatory Income Tax Section 12AB/80G status and FCRA license from regulatory scrutiny."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "legal-entity-classification", title: "Applicant Legal Status on IP Portal" },
    { id: "mandatory-documents", title: "Trust Deed, MOA & TM-48 Checklist" },
    { id: "statutory-fee-concession", title: "Government Fees & 50% MSME Subsidy" },
    { id: "multi-class-strategy", title: "Multi-Class: 45, 41, 36, 44 & 35" },
    { id: "emblems-and-names-act", title: "Emblems & Names Act Restrictions" },
    { id: "distinctiveness-section-9-11", title: "Overcoming Section 9 & 11 Issues" },
    { id: "trustee-succession-tmp", title: "Trustee Succession & Form TM-P" },
    { id: "tax-exemption-fcra", title: "Tax Exemption & FCRA Synergy" },
    { id: "entity-comparison-matrix", title: "Non-Profit Entity IP Matrix" },
    { id: "step-by-step-process", title: "Step-by-Step Filing Workflow" },
    { id: "faqs", title: "FAQs" },
    { id: "enforcement-takeaway", title: "Enforcement & Legal Advisory" },
];

export default function TrustSocietySection8TrademarkPage() {
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
        "headline": "Trademark Registration for Trusts, Societies & Section 8 Companies in India",
        "description": "Register trademark for Trust, Society, or Section 8 Company in India. Master Classes 45, 41 & 36, mandatory trust deed docs, and 50% MSME fee discount.",
        "image": "https://www.iprkaro.com/images/og/trademark-registration-for-trust-society-section-8-company-india.png",
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
            "@id": "https://www.iprkaro.com/trademark-registration-for-trust-society-section-8-company-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark for Trusts, Societies & Section 8 in India",
        "url": "https://www.iprkaro.com/trademark-registration-for-trust-society-section-8-company-india",
        "description": "Register trademark for Trust, Society, or Section 8 Company in India. Master Classes 45, 41 & 36, mandatory trust deed docs, and 50% MSME fee discount.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-registration-for-trust-society-section-8-company-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-registration-for-trust-society-section-8-company-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Non-Profit Trademark Guide", "item": "https://www.iprkaro.com/trademark-registration-for-trust-society-section-8-company-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Trademark Registration Process for NGOs, Trusts, Societies & Section 8 Companies",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Comprehensive Trademark Availability Search across Classes 45, 41, 36, 44 & 35" },
            { "@type": "ListItem", "position": 2, "name": "Determine Correct Legal Applicant Entity (Trust AOP vs Registered Society vs Section 8 Body Corporate)" },
            { "@type": "ListItem", "position": 3, "name": "Execute Board/Trustee Resolution and Form TM-48 Power of Attorney on State Stamp Paper" },
            { "@type": "ListItem", "position": 4, "name": "Verify MSME Udyam or DPIIT Startup Eligibility for 50% Statutory Fee Subsidy (₹4,500 vs ₹9,000)" },
            { "@type": "ListItem", "position": 5, "name": "Draft Rule 25(2) Prior User Affidavit backed by Audited Financial Statements, 12AB/80G Certs, & Donation Receipts" },
            { "@type": "ListItem", "position": 6, "name": "File Form TM-A on IP India E-Portal with Precise Non-Profit Goods/Services Descriptions" },
            { "@type": "ListItem", "position": 7, "name": "Prosecute Examination Objections under Section 9(1)(b) Descriptive Terms and Section 11 Prior Similar Marks" },
            { "@type": "ListItem", "position": 8, "name": "Secure Form RG-2 Registration Certificate and Enforce Against Fake NGO Impersonators" }
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
                            <div className="inline-flex items-center bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faHandHoldingHeart} className="w-3.5 h-3.5 text-amber-700 mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-amber-800 uppercase">Non-Profit &amp; NGO IP Law</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Registration for <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trusts, Societies &amp; Section 8 Companies</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Public charitable trusts, registered societies, social foundations, and Section 8 non-profit companies rely entirely on institutional credibility and donor faith. Securing statutory trademark registration across<strong>Class 45 (Charitable Services &amp; Social Welfare)</strong>,<strong>Class 41 (Educational &amp; Cultural Programs)</strong>, and<strong>Class 36 (Donation Fundraising &amp; Endowments)</strong>protects your NGO name, emblem, and CSR funding from rogue copycats and fraudulent donation syndicates.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">NGO IP &amp; Corporate Specialist</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 Updated 30-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 17 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">🏛️ Non-Profit IP Framework</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Protect NGO Trademark Now <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-amber-400" />
                                    NGO IP Helpline: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-registration-for-trust-society-section-8-company-india.png"
                                    alt="Trademark Registration for Trusts Societies and Section 8 Companies in India"
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
                        { label: "Non-Profit Trademark Registration", href: "/trademark-registration-for-trust-society-section-8-company-india" }
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
                                <details className="group bg-gradient-to-br from-amber-50/70 via-white to-purple-50/40 border border-amber-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-amber-50/40 transition-colors">
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
                                    <div className="p-3.5 pt-2 border-t border-amber-100 bg-white/70">
                                        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                            {tocSections.map((section, idx) => (
                                                <a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100"
                                                >
                                                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">{idx + 1}</span>
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
                                            <p className="text-xs text-gray-500 m-0">Advocate &amp; Non-Profit Intellectual Property Counsel</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHandHoldingHeart} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of Non-Profit Trademark Registration
                                        </h2>

                                        <div id="quick-answer" className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Under the Indian Trade Marks Act, 1999, Trusts (as Associations of Persons represented by Managing Trustees), Societies (registered under Societies Registration Act, 1860), and Section 8 Companies (Body Corporate under Companies Act, 2013) can legally register word marks, emblems, and service names. Registration across Class 45 (Charitable &amp; Social Welfare), Class 41 (Education &amp; Skill Development), and Class 36 (Fundraising &amp; Philanthropy) grants nationwide exclusive monopoly, prevents donation scams, and creates legal standing to obtain injunctions against fake NGOs.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            India hosts over three million non-governmental organizations, religious trusts, charitable foundations, and Section 8 companies dedicated to healthcare, education, environmental conservation, and social welfare. While these entities operate without a profit motive, their greatest institutional capital is their <strong>goodwill, donor trust, and public reputation</strong>.
                                        </p>
                                        <p className="mb-6">
                                            Unfortunately, unscrupulous individuals often exploit non-profit goodwill by floating copycat trusts, cloning charity websites, and soliciting fraudulent donations using confusingly similar logos. A registered trademark under Section 23 of the Trade Marks Act provides statutory immunity against brand dilution, empowers fast-track bank account freezes of fraudsters, and preserves corporate CSR partnerships.
                                        </p>
                                        <p className="mb-6">
                                            Learn more about related business registrations in our detailed guides on <Link href="/who-can-apply-for-trademark-in-india-proprietorship-partnership-company" className="text-[rgb(110,94,147)] hover:underline font-medium">who can apply for a trademark in India</Link>, <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[rgb(110,94,147)] hover:underline font-medium">MSME trademark fee concessions</Link>, and <Link href="/how-to-respond-to-trademark-infringement-legal-notice-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">responding to trademark legal notices</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 2: APPLICANT LEGAL STATUS ON IP PORTAL */}
                                    <section id="legal-entity-classification" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingColumns} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Applicant Legal Status on the IP India Portal
                                        </h2>
                                        <p className="mb-6">
                                            When filing Form TM-A on the IP India e-filing portal, selecting the correct legal applicant classification is critical. Selecting the wrong category triggers fatal Formalities Check Fail (FCF) objections under Rule 23 of the Trade Marks Rules, 2017:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="border-l-4 border-amber-600 pl-5 py-3 bg-amber-50/50 rounded-r-2xl border border-gray-100">
                                                <div className="flex items-center mb-1">
                                                    <FontAwesomeIcon icon={faUsers} className="w-4 h-4 text-amber-700 mr-2" />
                                                    <h3 className="text-base font-bold text-gray-900 m-0">1. Public Charitable &amp; Religious Trusts</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0 mb-2">
                                                    A Trust is not an incorporated body or separate legal juristic person under the Indian Trusts Act, 1882. Therefore, the application is filed under the category of <strong>&apos;Trust&apos;</strong> or <strong>&apos;Association of Persons (AOP)&apos;</strong>. The applicant name must be formatted as: <em>&quot;[Name of Trust] represented by its Managing Trustee, [Name of Trustee]&quot;</em>.
                                                </p>
                                                <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Filing Status: Association of Persons (AOP) / Trust</span>
                                            </div>

                                            <div className="border-l-4 border-blue-600 pl-5 py-3 bg-blue-50/50 rounded-r-2xl border border-gray-100">
                                                <div className="flex items-center mb-1">
                                                    <FontAwesomeIcon icon={faBuildingShield} className="w-4 h-4 text-blue-700 mr-2" />
                                                    <h3 className="text-base font-bold text-gray-900 m-0">2. Registered Societies</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0 mb-2">
                                                    Societies registered under the Societies Registration Act, 1860 (or relevant State Society Registration Acts) have statutory standing to sue and be sued through their President or General Secretary. The applicant category on the IP portal is <strong>&apos;Society&apos;</strong> or <strong>&apos;Body Corporate&apos;</strong>, represented by the authorized Governing Body signatory.
                                                </p>
                                                <span className="text-[11px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">Filing Status: Registered Society / Body of Individuals</span>
                                            </div>

                                            <div className="border-l-4 border-emerald-600 pl-5 py-3 bg-emerald-50/50 rounded-r-2xl border border-gray-100">
                                                <div className="flex items-center mb-1">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-4 h-4 text-emerald-700 mr-2" />
                                                    <h3 className="text-base font-bold text-gray-900 m-0">3. Section 8 Non-Profit Companies</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0 mb-2">
                                                    Section 8 companies incorporated under the Companies Act, 2013 hold complete juristic personality with perpetual succession. The application is filed under the category of <strong>&apos;Body Corporate&apos;</strong> using the company&apos;s Corporate Identification Number (CIN) and registered office address, executed by a Director via Board Resolution.
                                                </p>
                                                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Filing Status: Body Corporate (Company)</span>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: MANDATORY DOCUMENTS CHECKLIST */}
                                    <section id="mandatory-documents" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trust Deed, MOA &amp; TM-48 Checklist
                                        </h2>
                                        <p className="mb-6">
                                            Trademark examiners scrutinize non-profit applications with heightened rigor to verify that the authorized signatory possesses lawful governance mandate. The following evidentiary documents must be prepared and uploaded:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    For Trusts &amp; Foundations
                                                </h3>
                                                <ul className="space-y-2 text-xs text-gray-700">
                                                    <li className="flex items-start"><span className="text-emerald-500 mr-2 font-bold">&#10003;</span> Certified copy of Registered Trust Deed signed before Sub-Registrar.</li>
                                                    <li className="flex items-start"><span className="text-emerald-500 mr-2 font-bold">&#10003;</span> Board of Trustees Resolution authorizing Managing Trustee to apply.</li>
                                                    <li className="flex items-start"><span className="text-emerald-500 mr-2 font-bold">&#10003;</span> PAN Card copy of the Trust and Identity Proof of Managing Trustee.</li>
                                                    <li className="flex items-start"><span className="text-emerald-500 mr-2 font-bold">&#10003;</span> Form TM-48 (Power of Attorney) on State Stamp Paper.</li>
                                                    <li className="flex items-start"><span className="text-emerald-500 mr-2 font-bold">&#10003;</span> 12A/12AB &amp; 80G Income Tax Exemption orders (if claiming prior use).</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mr-2" />
                                                    For Societies &amp; Section 8 Companies
                                                </h3>
                                                <ul className="space-y-2 text-xs text-gray-700">
                                                    <li className="flex items-start"><span className="text-emerald-500 mr-2 font-bold">&#10003;</span> Certificate of Registration / Incorporation (ROC COI).</li>
                                                    <li className="flex items-start"><span className="text-emerald-500 mr-2 font-bold">&#10003;</span> Memorandum of Association (MOA) and Articles of Association (AOA).</li>
                                                    <li className="flex items-start"><span className="text-emerald-500 mr-2 font-bold">&#10003;</span> Governing Body / Board Resolution authorizing authorized director/officer.</li>
                                                    <li className="flex items-start"><span className="text-emerald-500 mr-2 font-bold">&#10003;</span> Udyam MSME Certificate (if claiming 50% statutory fee rebate).</li>
                                                    <li className="flex items-start"><span className="text-emerald-500 mr-2 font-bold">&#10003;</span> High-resolution graphic artwork of Logo/Emblem in JPEG/PNG format.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p className="text-sm bg-purple-50 p-4 rounded-xl border border-purple-100">
                                            <strong>Pro Tip on Form TM-48:</strong> Ensure that the Power of Attorney explicitly names the authorized trademark agent/advocate and is executed on non-judicial stamp paper of appropriate value as prescribed by the respective State Stamp Act (typically ₹100 in Maharashtra, Delhi, Karnataka, and Uttar Pradesh).
                                        </p>
                                    </section>

                                    {/* SECTION 4: GOVERNMENT FEES & MSME CONCESSION */}
                                    <section id="statutory-fee-concession" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCoins} className="w-8 h-8 mr-3 text-emerald-600" />
                                            Government Fees &amp; 50% MSME Fee Subsidy
                                        </h2>
                                        <p className="mb-6">
                                            Understanding the statutory fee schedule under the First Schedule of Trade Marks Rules, 2017 enables non-profits to save substantial filing budgets across multiple classes:
                                        </p>

                                        <div className="overflow-x-auto my-6 not-prose">
                                            <table className="min-w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm text-xs">
                                                <thead className="bg-[#1A1A24] text-white">
                                                    <tr>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Applicant Entity Type</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Standard E-Filing Fee</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Subsidized Fee (with MSME / Startup)</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Physical Filing Fee</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-semibold text-gray-900">Section 8 Company</td>
                                                        <td className="py-3 px-4">₹9,000 per class</td>
                                                        <td className="py-3 px-4 font-bold text-emerald-700">₹4,500 per class (via Udyam MSME)</td>
                                                        <td className="py-3 px-4">₹10,000 per class</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-semibold text-gray-900">Registered Society</td>
                                                        <td className="py-3 px-4">₹9,000 per class</td>
                                                        <td className="py-3 px-4 font-bold text-emerald-700">₹4,500 per class (via Udyam MSME)</td>
                                                        <td className="py-3 px-4">₹10,000 per class</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-semibold text-gray-900">Public Charitable Trust</td>
                                                        <td className="py-3 px-4">₹9,000 per class</td>
                                                        <td className="py-3 px-4 font-bold text-emerald-700">₹4,500 per class (via Udyam MSME)</td>
                                                        <td className="py-3 px-4">₹10,000 per class</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-semibold text-gray-900">Individual Trustee (in personal capacity)</td>
                                                        <td className="py-3 px-4 font-bold text-emerald-700">₹4,500 per class</td>
                                                        <td className="py-3 px-4">₹4,500 per class</td>
                                                        <td className="py-3 px-4">₹5,000 per class</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="mb-4">
                                            <strong>How to Claim the 50% Subsidy:</strong> Non-profit educational institutions, social healthcare organizations, and skill development trusts can obtain an <strong>Udyam MSME Registration Certificate</strong> under service activities (e.g., educational support, social work activities without accommodation). Attaching the valid Udyam certificate directly entitles the applicant to the ₹4,500 fee slab on Form TM-A.
                                        </p>
                                    </section>

                                    {/* SECTION 5: MULTI-CLASS STRATEGY */}
                                    <section id="multi-class-strategy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Multi-Class Strategy: Classes 45, 41, 36, 44 &amp; 35
                                        </h2>
                                        <p className="mb-6">
                                            Non-profit activities rarely fit into a single classification. To build an unassailable institutional brand moat, trustees must adopt a coordinated cross-class filing strategy:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 mr-3">
                                                        <FontAwesomeIcon icon={faHandHoldingHeart} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 45: Social Welfare &amp; Charity</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    The cornerstone class for non-profit operations. Covers charitable and humanitarian services, social advocacy, orphan care, disaster relief coordination, civil society services, and community welfare programs.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-amber-900 border border-amber-200">
                                                    Essential for: All NGOs, Social Foundations &amp; Relief Trusts
                                                </div>
                                            </div>

                                            <div className="bg-purple-50/70 p-6 rounded-2xl border border-purple-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3">
                                                        <FontAwesomeIcon icon={faBookOpen} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 41: Education &amp; Training</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Covers running non-profit schools, colleges, vocational skilling academies, cultural seminars, spiritual discourses, public awareness lectures, and sports coaching for underprivileged youth.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-[#6E5E93] border border-purple-200">
                                                    Essential for: Educational Trusts, Gurukuls &amp; Skill Foundations
                                                </div>
                                            </div>

                                            <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mr-3">
                                                        <FontAwesomeIcon icon={faCoins} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 36: Fundraising &amp; Donations</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Covers charitable fundraising campaigns, financial sponsorship management, non-profit microfinance initiatives, scholarship disbursement, and managing endowment trusts.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-emerald-800 border border-emerald-200">
                                                    Essential for: Fundraising Portals, CSR Arms &amp; Micro-Lending NGOs
                                                </div>
                                            </div>

                                            <div className="bg-rose-50/70 p-6 rounded-2xl border border-rose-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-800 mr-3">
                                                        <FontAwesomeIcon icon={faHeartPulse} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 44: Healthcare &amp; Medical Relief</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Covers charitable hospitals, free dispensaries, rural health screening camps, blood donation drives, ayurvedic relief centers, and animal rescue shelters.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-rose-800 border border-rose-200">
                                                    Essential for: Charitable Hospitals, Eye Banks &amp; Health Trusts
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mb-4">
                                            Additionally, non-profits issuing extensive literature, books, donation receipt booklets, and prayer guides should register under <strong>Class 16 (Printed Publications &amp; Stationery)</strong>, while those managing volunteer recruitment and NGO merchandise distribution should secure <strong>Class 35 (Advertising &amp; Association Management)</strong>.
                                        </p>
                                    </section>

                                    {/* SECTION 6: EMBLEMS AND NAMES ACT RESTRICTIONS */}
                                    <section id="emblems-and-names-act" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBan} className="w-8 h-8 mr-3 text-red-600" />
                                            Emblems &amp; Names Act Restrictions
                                        </h2>
                                        <p className="mb-6">
                                            Under <strong>Section 9(2)(d) of the Trade Marks Act, 1999</strong>, a mark is barred from registration if its use is prohibited under the <em>Emblems and Names (Prevention of Improper Use) Act, 1950</em>. This is one of the most common grounds for objection faced by trusts and societies:
                                        </p>

                                        <div className="bg-red-50/70 p-6 rounded-2xl border border-red-200 my-6 not-prose">
                                            <h3 className="text-base font-bold text-red-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4 text-red-600 mr-2" />
                                                Strictly Prohibited Marks &amp; Symbols:
                                            </h3>
                                            <ul className="space-y-2 text-xs text-red-900/90 leading-relaxed">
                                                <li><strong>National Symbols:</strong> Indian National Flag, Ashoka Chakra, Lions Capital of Sarnath (Ashoka Pillar), and official Government seals.</li>
                                                <li><strong>International Dignitary Emblems:</strong> Official seal of the United Nations (UN), World Health Organization (WHO), and Red Cross / Red Crescent emblem.</li>
                                                <li><strong>National Figures &amp; Leaders:</strong> Names, titles, or pictorial likenesses of Mahatma Gandhi, Jawaharlal Nehru, Sardar Patel, or the Prime Minister/President of India without prior sanction from the Central Government.</li>
                                                <li><strong>Misleading Deceptive State Patronage:</strong> Use of words like &apos;National&apos;, &apos;Indian&apos;, &apos;Government&apos;, &apos;Rashtrapati&apos;, or &apos;State&apos; that falsely imply official government sponsorship or ministry affiliation.</li>
                                            </ul>
                                        </div>

                                        <p className="mb-4">
                                            <strong>How to Avoid Refusal:</strong> When designing NGO crests and logos, avoid incorporating the Ashoka Pillar or tri-colour flag motifs. If your trust name contains &apos;Bharat&apos; or &apos;National&apos;, ensure the logo incorporates distinct, coined visual elements and file a formal disclaimer that no exclusive claim is made over the sovereign geographical term.
                                        </p>
                                    </section>

                                    {/* SECTION 7: OVERCOMING SECTION 9 & 11 ISSUES */}
                                    <section id="distinctiveness-section-9-11" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Overcoming Section 9 &amp; 11 Objections
                                        </h2>
                                        <p className="mb-6">
                                            Non-profit applications frequently encounter examination objections under Section 9 (Absolute Grounds for Refusal) and Section 11 (Relative Grounds for Refusal):
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Overcoming Section 9(1)(b) Descriptive Term Objections</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                                    Examiners routinely object that names like &quot;Manav Seva Trust&quot; or &quot;Gyan Foundation&quot; are descriptive of charitable services. To overcome this:
                                                </p>
                                                <ul className="space-y-1.5 text-xs text-gray-700">
                                                    <li className="flex items-start"><span className="text-[#6E5E93] mr-2 font-bold">&bull;</span> <strong>Device Mark / Logo Registration:</strong> Register as a composite device mark featuring unique typography, crest artwork, and distinct colour palettes.</li>
                                                    <li className="flex items-start"><span className="text-[#6E5E93] mr-2 font-bold">&bull;</span> <strong>Rule 25(2) Prior User Affidavit:</strong> If the NGO has been active for years, file a detailed User Affidavit proving that the mark has acquired secondary meaning through extensive public philanthropy, newspaper coverage, and CSR audit reports.</li>
                                                </ul>
                                            </div>

                                            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Overcoming Section 11(1) Confusingly Similar Marks</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                                    If the examination report cites prior registered trademarks containing similar words in Class 45 or Class 41:
                                                </p>
                                                <ul className="space-y-1.5 text-xs text-gray-700">
                                                    <li className="flex items-start"><span className="text-[#6E5E93] mr-2 font-bold">&bull;</span> <strong>Anti-Dissection Rule:</strong> Argue that the composite mark must be evaluated as a commercial whole rather than dissecting individual generic syllables (relying on <em>Cadila Health Care</em> principles).</li>
                                                    <li className="flex items-start"><span className="text-[#6E5E93] mr-2 font-bold">&bull;</span> <strong>Prior Continuous Use under Section 34:</strong> Demonstrate that your Trust adopted and utilized the mark continuously before the cited mark&apos;s registration date.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: TRUSTEE SUCCESSION & FORM TM-P */}
                                    <section id="trustee-succession-tmp" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trustee Succession &amp; Form TM-P Transmission
                                        </h2>
                                        <p className="mb-6">
                                            A unique legal challenge in Trust trademarks arises when the Managing Trustee retires, resigns, or passes away. Since the trademark application was represented by that specific trustee, the Register of Trade Marks must be updated to maintain chain of legal title:
                                        </p>

                                        <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200 my-6 not-prose">
                                            <h3 className="text-base font-bold text-gray-900 mb-3">Statutory Procedure under Section 45:</h3>
                                            <ol className="space-y-2 text-xs text-gray-700 leading-relaxed list-decimal pl-4">
                                                <li><strong>Board Resolution on Succession:</strong> The continuing Board of Trustees convenes a formal meeting and passes a unanimous resolution appointing the new Managing Trustee.</li>
                                                <li><strong>Deed of Transmission:</strong> A legal Deed of Transmission or Supplementary Trust Deed is executed, recording the devolution of administrative authority.</li>
                                                <li><strong>Filing Form TM-P:</strong> An application on Form TM-P is submitted on the IP India portal along with a statutory fee of ₹9,000 (standard) or ₹4,500 (MSME), requesting the Registrar to update the authorized representative records.</li>
                                                <li><strong>Issuance of Certificate of Change:</strong> The Trade Marks Registry issues a certified extract reflecting the updated representative in the Register.</li>
                                            </ol>
                                        </div>
                                    </section>

                                    {/* SECTION 9: TAX EXEMPTION & FCRA SYNERGY */}
                                    <section id="tax-exemption-fcra" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-emerald-700" />
                                            Tax Exemption (12AB/80G) &amp; FCRA Brand Synergy
                                        </h2>
                                        <p className="mb-6">
                                            A non-profit&apos;s brand name is directly tied to its statutory regulatory licenses. Unchecked trademark infringement creates catastrophic compliance risks:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200">
                                                <h3 className="text-base font-bold text-emerald-950 mb-2">Section 12AB &amp; 80G Defense</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    If fraudsters use your exact brand name to issue fake tax deduction receipts under Section 80G, the Income Tax Department may issue show-cause notices for tax avoidance. Holding a registered trademark certificate gives you instant standing to lodge cybercrime FIRs and prove you are the victim of identity theft.
                                                </p>
                                            </div>

                                            <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200">
                                                <h3 className="text-base font-bold text-blue-950 mb-2">Foreign Contribution (FCRA) Security</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                    The Ministry of Home Affairs (MHA) strictly audits foreign donation inflows. Protecting your official website domain and logo with trademark registration prevents rogue imposters from diverting international grant funds into unauthorized non-FCRA bank accounts.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: NON-PROFIT ENTITY IP MATRIX */}
                                    <section id="entity-comparison-matrix" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Non-Profit Entity IP Comparison Matrix
                                        </h2>
                                        <p className="mb-6">
                                            Review how legal structure, governing statute, and applicant representation differ across non-profit forms in India:
                                        </p>

                                        <div className="overflow-x-auto my-6 not-prose">
                                            <table className="min-w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm text-xs">
                                                <thead className="bg-[#1A1A24] text-white">
                                                    <tr>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Entity Type</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Governing Statute</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Applicant Status</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Signatory Mandate</th>
                                                        <th className="py-3 px-4 text-left font-bold uppercase">Succession Protocol</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Charitable Trust</td>
                                                        <td className="py-3 px-4">Indian Trusts Act, 1882 / State Public Trusts Act</td>
                                                        <td className="py-3 px-4">Association of Persons (AOP)</td>
                                                        <td className="py-3 px-4">Managing Trustee (via Trust Deed)</td>
                                                        <td className="py-3 px-4 font-semibold text-[#6E5E93]">Form TM-P upon trustee change</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Registered Society</td>
                                                        <td className="py-3 px-4">Societies Registration Act, 1860</td>
                                                        <td className="py-3 px-4">Society / Body of Individuals</td>
                                                        <td className="py-3 px-4">President / Secretary (Governing Body)</td>
                                                        <td className="py-3 px-4 font-semibold text-[#6E5E93]">Form TM-P via AGM resolution</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-bold text-gray-900">Section 8 Company</td>
                                                        <td className="py-3 px-4">Companies Act, 2013</td>
                                                        <td className="py-3 px-4">Body Corporate (Pvt Ltd / Ltd)</td>
                                                        <td className="py-3 px-4">Authorized Director (Board Resolution)</td>
                                                        <td className="py-3 px-4 font-semibold text-[#6E5E93]">Perpetual Succession (No TM-P needed)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 11: STEP-BY-STEP FILING WORKFLOW */}
                                    <section id="step-by-step-process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Filing Workflow
                                        </h2>
                                        <p className="mb-6">
                                            Navigating non-profit trademark registration requires meticulous procedural accuracy across six distinct stages:
                                        </p>

                                        <div className="space-y-4 my-8 not-prose">
                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Clearance Search &amp; Emblems Act Audit</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Conduct cross-class search across Classes 45, 41, 36, and 44 on IP India Public Search to ensure no identical marks exist. Verify compliance with the Emblems and Names Act, 1950.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Drafting Board Resolution &amp; Form TM-48</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Execute official resolution authorizing the designated trustee or officer. Print and execute Power of Attorney (Form TM-48) on required state non-judicial stamp paper.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Filing Form TM-A with User Date Claim</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Submit Form TM-A on the IP India e-portal. If claiming prior charitable use, attach a notarized Rule 25(2) User Affidavit with historical donation receipts, 12A registration date, and newspaper clippings.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Examination Report &amp; Legal Reply</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        Upon issuance of the Examination Report (within 1–3 months), draft and file a comprehensive statutory reply within 30 days addressing Section 9 descriptive terms and Section 11 cited marks.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">5</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Journal Publication &amp; 4-Month Opposition Window</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        The mark is published in the official Trade Marks Journal. Third parties have 4 months under Section 21 to file oppositions on Form TM-O.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm mr-4 flex-shrink-0">6</div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Registration Certificate &amp; 10-Year Protection</h3>
                                                    <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                        If unopposed, the Registrar issues the official Registration Certificate (Form RG-2). The Trust gains the legal right to affix the &reg; symbol, valid for 10 years and perpetually renewable.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 12: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6 not-prose">
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

                                    {/* SECTION 13: ENFORCEMENT & LEGAL ADVISORY */}
                                    <section id="enforcement-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-amber-500" />
                                            Enforcement Strategies for Non-Profit Brands
                                        </h2>
                                        <p className="mb-6">
                                            Holding a registered trademark certificate is the single most effective legal mechanism to protect donor trust and eliminate counterfeit charitable appeals. In cases of online donation fraud, trademark owners can issue immediate intermediary notices to domain registrars, payment gateways (Razorpay, Paytm, Cashfree), and social media platforms for immediate takedown under Section 79 of the IT Act.
                                        </p>
                                        <p className="mb-6">
                                            For persistent bad-faith infringers, trustees can file a civil suit for trademark infringement and passing off under Sections 29 and 135, seeking interim injunctions, delivery of infringing materials, and punitive damages. Consult our legal guides on <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement</Link>, <Link href="/john-doe-ashok-kumar-order-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">John Doe injunctions in Indian courts</Link>, and <Link href="/how-to-send-trademark-legal-notice-india" className="text-[rgb(110,94,147)] hover:underline font-medium">sending trademark legal notices</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Trusted Non-Profit Legal Protection
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Trust, Society &amp; Foundation Brand
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Secure exclusive nationwide trademark monopoly across Classes 45, 41 &amp; 36. Defend your donations, NGO goodwill, and tax exemption credentials from copycats.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult NGO IP Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Specialized Non-Profit Counsel • Trust Deed &amp; MOA Scrutiny • 50% MSME Subsidy • Pan-India
                                                </p>
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
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">NGO IP Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                    Rahul advises public charitable trusts, registered societies, and Section 8 companies on multi-class trademark filing, Emblems Act compliance, and brand defense.
                                </p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Registering an NGO or Trust?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">
                                    Clear your trust name, emblem, and charitable brand across Classes 45, 41 &amp; 36 before starting donor campaigns.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Check Non-Profit Mark Availability
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/who-can-apply-for-trademark-in-india-proprietorship-partnership-company" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Who Can Apply For TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faCoins} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">MSME TM Fee Concession</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Form TM-48 POA Guide</span>
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
                                        <Link href="/types-of-trademark-classes" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faTable} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Trademark Classes</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Passing Off vs TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-overcome-trademark-objection" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Overcome Objections</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/free-ai-powered-trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">AI Trademark Search</span>
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
