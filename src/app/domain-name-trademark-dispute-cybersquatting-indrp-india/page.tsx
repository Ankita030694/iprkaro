import { validateAndNormalizeDescription } from '@/lib/seo-utils';
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faGavel,
    faShieldHalved,
    faScaleBalanced,
    faListUl,
    faCheckCircle,
    faExclamationTriangle,
    faTable,
    faLightbulb,
    faPhone,
    faRocket,
    faClock,
    faRotate,
    faStamp,
    faLink,
    faDiagramProject,
    faFileLines,
    faCircleCheck,
    faBan,
    faHourglassHalf,
    faLandmark,
    faFileSignature,
    faLock,
    faUserShield,
    faTriangleExclamation,
    faCircleInfo,
    faEnvelopeOpenText,
    faTowerBroadcast,
    faServer
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Domain Dispute & Cybersquatting in India | INDRP Rules",
    description: validateAndNormalizeDescription(
        "Resolve domain name trademark disputes and cybersquatting in India. Learn INDRP rules, NIXI arbitration process, 3-part test, fees, and asset recovery.",
        "app/domain-name-trademark-dispute-cybersquatting-indrp-india/page.tsx"
    ),
    keywords: [
        "domain name trademark dispute cybersquatting indrp india",
        "can someone trademark my domain name in india",
        "how to recover dot in domain from cybersquatter",
        ".in domain dispute resolution policy indrp",
        "nixi arbitration procedure india",
        "satyam infoway supreme court landmark case",
        "cybersquatting legal remedies india",
        "udrp vs indrp comparison",
        "typosquatting brand protection india",
        "domain name passing off high court india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/domain-name-trademark-dispute-cybersquatting-indrp-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Domain Dispute & Cybersquatting in India | INDRP Rules",
        description: "Resolve domain name trademark disputes and cybersquatting in India. Learn INDRP rules, NIXI arbitration process, 3-part test, fees, and asset recovery.",
        url: "https://www.iprkaro.com/domain-name-trademark-dispute-cybersquatting-indrp-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/domain-name-trademark-dispute-cybersquatting-indrp-india.png",
                width: 1200,
                height: 630,
                alt: "Domain Name Trademark Dispute and Cybersquatting in India INDRP Rules Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Domain Dispute & Cybersquatting in India | INDRP Rules",
        description: "Resolve domain name trademark disputes and cybersquatting in India. Learn INDRP rules, NIXI arbitration process, 3-part test, fees, and asset recovery.",
        images: ["https://www.iprkaro.com/images/og/domain-name-trademark-dispute-cybersquatting-indrp-india.jpg"],
    }
};

const faqs = [
    {
        question: "Can someone trademark my existing domain name in India?",
        answer: "Under Indian trademark law, simply owning a domain name does not grant automatic trademark ownership. However, if you actively use your domain name in commerce as a brand identifier, you hold common law prior-use rights. If a third party attempts to register your domain name as a trademark in bad faith, you can file an Opposition under Section 21 or a Rectification under Section 57 of the Trade Marks Act, citing prior commercial use established under the landmark Satyam Infoway Supreme Court ruling."
    },
    {
        question: "What is the difference between INDRP and UDRP domain disputes?",
        answer: "INDRP (.IN Domain Dispute Resolution Policy) is managed by NIXI for all .in and .bharat ccTLDs under the Indian Arbitration and Conciliation Act, 1996, requiring proof that the domain was registered OR used in bad faith (disjunctive test). In contrast, UDRP (Uniform Domain-Name Dispute-Resolution Policy) is administered globally by WIPO or FORUM for generic TLDs like .com or .net, requiring conjunctive proof of BOTH bad faith registration AND bad faith use."
    },
    {
        question: "How long does it take to recover a squatted .IN domain under INDRP?",
        answer: "An INDRP arbitration proceeding before NIXI is exceptionally fast compared to civil litigation. The entire procedure typically concludes within 30 to 60 days from the appointment of the sole arbitrator. The respondent is granted 14 days to submit a written response, and the arbitrator must pass a reasoned arbitral award within 60 days of entering reference."
    },
    {
        question: "What are the three mandatory conditions to win an INDRP dispute?",
        answer: "Under Paragraph 4 of the INDRP Policy, the complainant must prove all three elements: (1) The registrant's domain name is identical or confusingly similar to a trademark or service mark in which the complainant has rights; (2) The registrant has no rights or legitimate interests in respect of the domain name; and (3) The domain name was registered or is being used in bad faith."
    },
    {
        question: "What is the official NIXI fee structure for filing an INDRP complaint?",
        answer: "The official statutory fee for filing a single-domain INDRP complaint is ₹30,000 to ₹35,000, which includes NIXI administration fees and the Arbitrator's statutory honorarium. If the dispute involves multiple domain names registered by the same squatter or requires an exceptional oral hearing, marginal additional fees apply as per NIXI guidelines."
    },
    {
        question: "What remedies can an arbitrator grant under INDRP rules?",
        answer: "Under Paragraph 10 of the INDRP Policy, the sole arbitrator can grant only two substantive remedies: (1) Cancellation of the squatted domain name, or (2) Transfer of the domain name registration to the complainant. The arbitrator may also award actual legal and administrative costs against a bad-faith respondent, but cannot grant monetary damages, which require a Commercial Court suit."
    },
    {
        question: "Can a registered trademark owner recover a .com or international domain name?",
        answer: "Yes. For generic top-level domains such as .com, .org, .net, .io, or .ai, trademark owners must file an international dispute under the ICANN UDRP framework before approved dispute resolution providers such as the World Intellectual Property Organization (WIPO) Arbitration and Mediation Center or the National Arbitration Forum (FORUM)."
    },
    {
        question: "What is Typosquatting and how does Indian cyber law handle it?",
        answer: "Typosquatting (URL hijacking) occurs when a bad-faith actor registers deliberate misspellings, typographical errors, or phonetically similar variants of a famous brand (such as paytmm.in or tatamoters.in) to divert traffic, run phishing scams, or harvest user data. Indian courts and INDRP arbitrators strictly treat typosquatting as deceptive similarity, bad-faith intent, and trademark infringement, ordering immediate domain transfers and permanent injunctions."
    }
];

const tocSections = [
    { id: "overview", title: "Understanding Cybersquatting" },
    { id: "domain-vs-trademark", title: "Domain vs Trademark Law" },
    { id: "satyam-infoway-precedent", title: "Satyam Infoway Supreme Court Law" },
    { id: "what-is-indrp", title: "What is INDRP (.IN Registry)" },
    { id: "three-part-test", title: "The 3-Part Mandatory Test" },
    { id: "cybersquatting-types", title: "Types of Cybersquatting" },
    { id: "step-by-step", title: "7-Step Recovery Procedure" },
    { id: "indrp-vs-udrp-table", title: "INDRP vs UDRP vs Court Lawsuit" },
    { id: "nixi-fees", title: "NIXI Fees & Timeline" },
    { id: "defensive-strategies", title: "Defensive Domain Strategies" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "final-takeaway", title: "Strategic Legal Action" },
];

export default function DomainNameDisputeIndrpPage() {
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
        "headline": "Domain Name Trademark Dispute & Cybersquatting in India (INDRP Rules)",
        "description": "Comprehensive legal guide on resolving domain name trademark disputes and cybersquatting in India under NIXI INDRP rules, case laws, and recovery procedures.",
        "image": "https://www.iprkaro.com/images/og/domain-name-trademark-dispute-cybersquatting-indrp-india.png",
        "datePublished": "2026-09-25T11:30:00+05:30",
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
            "@id": "https://www.iprkaro.com/domain-name-trademark-dispute-cybersquatting-indrp-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Domain Dispute & Cybersquatting in India | INDRP Rules",
        "url": "https://www.iprkaro.com/domain-name-trademark-dispute-cybersquatting-indrp-india",
        "description": "Resolve domain name trademark disputes and cybersquatting in India. Learn INDRP rules, NIXI arbitration process, 3-part test, fees, and asset recovery.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/domain-name-trademark-dispute-cybersquatting-indrp-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/domain-name-trademark-dispute-cybersquatting-indrp-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Domain Dispute & INDRP Rules", "item": "https://www.iprkaro.com/domain-name-trademark-dispute-cybersquatting-indrp-india" }
        ]
    };

    const procedureListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Step-by-Step Procedure to Recover a Dot IN Domain Under INDRP",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Evidence Gathering & WHOIS Domain Dossier Compilation" },
            { "@type": "ListItem", "position": 2, "name": "Issuing Formal Cease & Desist Legal Notice to Registrant" },
            { "@type": "ListItem", "position": 3, "name": "Drafting & Submitting Formal INDRP Complaint with NIXI" },
            { "@type": "ListItem", "position": 4, "name": "Administrative Verification & Imposition of Registry Domain Lock" },
            { "@type": "ListItem", "position": 5, "name": "Appointment of Sole Arbitrator & Service of Notice on Respondent" },
            { "@type": "ListItem", "position": 6, "name": "Arbitration Proceedings & Exchange of Written Pleadings" },
            { "@type": "ListItem", "position": 7, "name": "Passing of Arbitral Award & Execution of Domain Name Transfer" }
        ]
    };

    return (
        <div className="w-full max-w-full bg-white text-gray-900">
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureListSchema) }} />

            {/* HERO SECTION */}
            <div className="relative w-full overflow-hidden bg-[#FAF9F6] border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 pt-24 pb-8 sm:pb-12 lg:pt-32 lg:pb-16 relative z-10 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="text-left w-full min-w-0 lg:col-span-7">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm max-w-full">
                                <FontAwesomeIcon icon={faGlobe} className="w-3.5 h-3.5 text-[#6E5E93] mr-2 flex-shrink-0" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase truncate">NIXI .IN Registry • Cyber Law & Trademark Asset Recovery</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-gray-900 tracking-tight break-words">
                                Domain Name Trademark Dispute & <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Cybersquatting in India (INDRP Rules)</span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-700 font-medium leading-relaxed break-words">
                                Has someone registered your brand name, company trade name, or trademark as a <strong>.in</strong> or <strong>.co.in</strong> domain? Under the landmark Supreme Court ruling in <em>Satyam Infoway</em>, domain names are recognized as valuable business identifiers entitled to full legal protection against passing off. Discover how to recover hijacked web domains within 30 to 60 days through the <strong>INDRP (.IN Domain Dispute Resolution Policy)</strong> managed by <strong>NIXI</strong>.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm flex-shrink-0" />
                                    <div>
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Senior Trademark Litigator & Cyber Law Advocate</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 25-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 15 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">🛡️ NIXI & Supreme Court Precedents</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Reclaim Your Domain <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-xs sm:text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                    Cyber IP Helpline: +91-9289707648
                                </a>
                            </div>
                        </div>

                        <div className="w-full min-w-0 lg:col-span-5 mt-4 lg:mt-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group max-w-lg mx-auto lg:max-w-none">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/domain-name-trademark-dispute-cybersquatting-indrp-india.png"
                                    alt="Domain Name Trademark Dispute and Cybersquatting in India INDRP Rules Guide"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BREADCRUMBS */}
            <div className="bg-gray-50 border-b border-gray-200 py-3 sm:py-4">
                <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] overflow-x-auto">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Domain Dispute & INDRP Rules", href: "/domain-name-trademark-dispute-cybersquatting-indrp-india" }
                    ]} />
                </div>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="w-full max-w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-10 bg-white">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_320px] gap-6 lg:gap-8 items-start relative">

                        {/* DESKTOP TABLE OF CONTENTS */}
                        <aside className="hidden lg:block sticky top-28 xl:top-32 self-start max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar scrollbar-hide pb-8">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* ARTICLE BODY */}
                        <main className="w-full min-w-0 max-w-full overflow-hidden">
                            {/* MOBILE TABLE OF CONTENTS - ACCORDION */}
                            <div className="lg:hidden mb-6 not-prose w-full">
                                <details className="group bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 border border-purple-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none bg-white hover:bg-purple-50/40 transition-colors">
                                        <div className="flex items-center space-x-3 min-w-0">
                                            <span className="w-8 h-8 rounded-lg bg-[#6E5E93]/10 text-[#6E5E93] flex items-center justify-center font-bold text-sm flex-shrink-0">
                                                <FontAwesomeIcon icon={faListUl} className="w-4 h-4" />
                                            </span>
                                            <div className="min-w-0">
                                                <span className="text-sm font-bold text-gray-900 block truncate">Table of Contents</span>
                                                <span className="text-[11px] text-gray-500 font-medium">Quick Navigation ({tocSections.length} Sections)</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 flex-shrink-0">
                                            <span className="text-xs font-semibold text-[#6E5E93] bg-[#6E5E93]/10 px-2.5 py-1 rounded-full group-open:hidden">
                                                Expand
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
                                            {tocSections.map((sec, idx) => (
                                                <a
                                                    key={sec.id}
                                                    href={`#${sec.id}`}
                                                    className="flex items-center space-x-2.5 p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/60 transition-all border border-transparent hover:border-purple-100"
                                                >
                                                    <span className="w-5 h-5 rounded-md bg-purple-100/80 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                                                        {idx + 1}
                                                    </span>
                                                    <span className="truncate">{sec.title}</span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </details>
                            </div>

                            {/* QUICK ANSWER BLOCK */}
                            <div id="quick-answer" className="bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border-2 border-[#6E5E93]/30 rounded-2xl p-5 sm:p-6 mb-8 shadow-sm">
                                <div className="flex items-start space-x-3 mb-3">
                                    <div className="p-2 bg-[#6E5E93] text-white rounded-lg flex-shrink-0 mt-0.5">
                                        <FontAwesomeIcon icon={faLightbulb} className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#6E5E93] m-0">Quick Answer</p>
                                        <p className="text-base sm:text-lg font-bold text-gray-900 m-0">How Are Domain Trademark Disputes Resolved in India?</p>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">
                                    In India, domain names are recognized as <strong>corporate business identifiers</strong> entitled to the same legal protection as registered trademarks under the Supreme Court precedent <em>Satyam Infoway v. Sifynet Solutions</em>. If an unauthorized third party registers your trademark as a <strong>.in</strong> or <strong>.co.in</strong> domain (cybersquatting), you can recover it within <strong>30 to 60 days</strong> by filing an arbitration complaint under the <strong>INDRP (.IN Domain Dispute Resolution Policy)</strong> managed by the <strong>National Internet eXchange of India (NIXI)</strong>. You must prove confusing similarity, absence of legitimate interest, and bad-faith registration or use.
                                </p>
                            </div>

                            {/* SECTION 1 */}
                            <section id="overview" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Understanding Cybersquatting & Domain Disputes
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    In the digital economy, a domain name is the primary digital gateway to any enterprise. However, while trademark registration requires rigorous scrutiny regarding distinctiveness and prior use under the <Link href="/passing-off-vs-trademark-infringement-india" className="text-[#6E5E93] font-semibold underline hover:text-[#5a4c7a]">Trade Marks Act, 1999</Link>, domain registrars operate strictly on an automated, <strong>&ldquo;first-come, first-served&rdquo;</strong> basis.
                                </p>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    This fundamental disconnect creates an opportunistic environment for bad-faith actors known as <strong>cybersquatters</strong>. Cybersquatting refers to the unauthorized registration, trafficking in, or use of an internet domain name that is identical or confusingly similar to a trademark, service mark, or trading name owned by another business.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                                    <div className="bg-purple-50/60 border border-purple-100 rounded-xl p-4">
                                        <div className="w-8 h-8 rounded-lg bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mb-3">
                                            <FontAwesomeIcon icon={faLock} className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">Ransom & Extortion</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Squatters purchase your brand&apos;s dot-in domain name to sell it back to you at exorbitant, extortionate prices.
                                        </p>
                                    </div>
                                    <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-4">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                                            <FontAwesomeIcon icon={faTowerBroadcast} className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">Traffic Diversion</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Hijacking legitimate customer traffic to display paid advertisement parking pages or direct users to rival businesses.
                                        </p>
                                    </div>
                                    <div className="bg-rose-50/60 border border-rose-100 rounded-xl p-4">
                                        <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                                            <FontAwesomeIcon icon={faBan} className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900 mb-1">Phishing & Impersonation</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Setting up spoofed corporate email addresses (e.g., invoices@yourbrand-india.in) to commit wire fraud and brand destruction.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 2 */}
                            <section id="domain-vs-trademark" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Domain Name vs Trademark: Indian Legal Position
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    A frequent misconception among business founders in India is assuming that registering a web domain with a registrar like GoDaddy or BigRock gives them statutory trademark ownership. Conversely, brand owners often believe having a trademark automatically prevents third parties from purchasing their domain name.
                                </p>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    Here is how Indian statutory law and global Internet governance contrast:
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm text-xs sm:text-sm">
                                        <thead className="bg-[#FAF9F6] text-gray-900">
                                            <tr>
                                                <th className="p-3.5 border-b border-gray-200 font-bold">Parameter</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-[#6E5E93]">Internet Domain Name</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-indigo-900">Registered Trademark</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-gray-700">
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Governing Body</td>
                                                <td className="p-3.5">ICANN / NIXI (.IN Registry)</td>
                                                <td className="p-3.5">Trade Marks Registry of India (CGPDTM)</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Governing Law</td>
                                                <td className="p-3.5">Contractual Registrant Agreement & INDRP/UDRP</td>
                                                <td className="p-3.5">The Trade Marks Act, 1999</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Allocation Rule</td>
                                                <td className="p-3.5">First-Come, First-Served automated sale</td>
                                                <td className="p-3.5">First-to-Use priority & distinctiveness examination</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Geographic Scope</td>
                                                <td className="p-3.5">Global accessibility across all internet networks</td>
                                                <td className="p-3.5">Territorial (India), unless filed under <Link href="/international-trademark-registration" className="text-[#6E5E93] underline hover:text-[#5a4c7a]">Madrid Protocol</Link></td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Uniqueness</td>
                                                <td className="p-3.5">Only one exact address can exist worldwide</td>
                                                <td className="p-3.5">Multiple businesses can co-exist across different <Link href="/types-of-trademark-classes" className="text-[#6E5E93] underline hover:text-[#5a4c7a]">45 trademark classes</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* SECTION 3 */}
                            <section id="satyam-infoway-precedent" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Satyam Infoway Case: Landmark Supreme Court Law
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    The cornerstone of Indian domain name jurisprudence is the historic Supreme Court judgment in <strong><em>Satyam Infoway Ltd. v. Sifynet Solutions Pvt. Ltd. (2004) 6 SCC 145</em></strong>. Prior to this ruling, squatters argued that domain names were merely technical internet addresses governed by contractual rules, not intellectual property protected under Indian trademark law.
                                </p>

                                <div className="bg-amber-50/80 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6">
                                    <div className="flex items-center space-x-2 text-amber-900 font-bold mb-2">
                                        <FontAwesomeIcon icon={faScaleBalanced} className="w-4 h-4 text-amber-600" />
                                        <span>Key Legal Dictum from Satyam Infoway (Supreme Court of India)</span>
                                    </div>
                                    <blockquote className="text-xs sm:text-sm text-gray-800 italic leading-relaxed m-0">
                                        &ldquo;With the increase of commerce on the internet, a domain name is not just an address; it acts as a business identifier. It is a corporate asset that indicates the source of goods or services. Therefore, the law of passing off and trademark protection applies with full force to internet domain names.&rdquo;
                                    </blockquote>
                                </div>

                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Other Key Precedents Established by Indian High Courts</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="p-3.5 rounded-xl border border-gray-200 bg-white shadow-sm">
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                                            1. Yahoo! Inc. v. Akash Arora & Anr. (1999) - Delhi High Court
                                        </p>
                                        <p className="text-xs text-gray-600 m-0">
                                            The first landmark Indian cybersquatting case where the defendant registered <em>yahooindia.com</em>. The Delhi High Court held that internet users would be deceptively confused, issuing a permanent injunction under the common law of passing off.
                                        </p>
                                    </div>
                                    <div className="p-3.5 rounded-xl border border-gray-200 bg-white shadow-sm">
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                                            2. Tata Sons Ltd. v. Manu Kishori & Ors. (2001) - Delhi High Court
                                        </p>
                                        <p className="text-xs text-gray-600 m-0">
                                            The court held that famous and well-known trademarks enjoy trans-border reputation across all top-level domains, ordering squatters to surrender multiple infringing domain names.
                                        </p>
                                    </div>
                                    <div className="p-3.5 rounded-xl border border-gray-200 bg-white shadow-sm">
                                        <p className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                                            3. Rediff Communication Ltd. v. Cyberbooth (2000) - Bombay High Court
                                        </p>
                                        <p className="text-xs text-gray-600 m-0">
                                            The Bombay High Court held that typosquatting (registering <em>radiff.com</em> to copy <em>rediff.com</em>) constitutes intentional bad-faith deception and trademark infringement.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 4 */}
                            <section id="what-is-indrp" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    What is INDRP? (.IN Domain Dispute Policy)
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    The <strong>INDRP (.IN Domain Name Dispute Resolution Policy)</strong> is the specialized administrative framework created by the <strong>National Internet eXchange of India (NIXI)</strong>, which operates the official <strong>.IN Registry</strong> under the Ministry of Electronics and Information Technology (MeitY), Government of India.
                                </p>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    INDRP applies to all domain names registered under the Indian country-code top-level domain (ccTLD) ecosystem, including:
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-center">
                                        <span className="font-extrabold text-[#6E5E93] text-sm sm:text-base block">.in</span>
                                        <span className="text-[10px] text-gray-500">Primary Indian ccTLD</span>
                                    </div>
                                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-center">
                                        <span className="font-extrabold text-[#6E5E93] text-sm sm:text-base block">.co.in</span>
                                        <span className="text-[10px] text-gray-500">Commercial Entities</span>
                                    </div>
                                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-center">
                                        <span className="font-extrabold text-[#6E5E93] text-sm sm:text-base block">.net.in / .org.in</span>
                                        <span className="text-[10px] text-gray-500">Networks & NGOs</span>
                                    </div>
                                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-center">
                                        <span className="font-extrabold text-[#6E5E93] text-sm sm:text-base block">.bharat (Devanagari)</span>
                                        <span className="text-[10px] text-gray-500">Internationalized TLDs</span>
                                    </div>
                                </div>

                                <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-5 my-6">
                                    <h3 className="text-sm font-bold text-indigo-900 mb-2 flex items-center">
                                        <FontAwesomeIcon icon={faGavel} className="w-4 h-4 mr-2 text-[#6E5E93]" />
                                        Legal Status of INDRP: Binding Arbitration
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">
                                        Unlike informal mediation, an INDRP proceeding constitutes an <strong>official statutory arbitration</strong> governed by the <strong>Arbitration and Conciliation Act, 1996</strong> and INDRP Rules of Procedure. Every person registering a .in domain enters into a mandatory contract agreeing to submit to INDRP arbitration in case of a trademark dispute. The arbitral award passed by the appointed sole arbitrator is legally binding and enforceable.
                                    </p>
                                </div>
                            </section>

                            {/* SECTION 5 */}
                            <section id="three-part-test" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    The 3-Part Mandatory Test under INDRP Rules
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    To succeed in an INDRP arbitration and obtain an order for the transfer or cancellation of the squatted domain, the brand owner (Complainant) must satisfy the <strong>3-Part Test</strong> set out in <strong>Paragraph 4 of the INDRP Policy</strong>:
                                </p>

                                <div className="space-y-4 my-6">
                                    <div className="bg-white border-2 border-indigo-100 rounded-2xl p-5 shadow-sm hover:border-[#6E5E93]/40 transition-colors">
                                        <div className="flex items-start space-x-3">
                                            <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                                                1
                                            </span>
                                            <div>
                                                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                                    Identical or Confusingly Similar Mark
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
                                                    The registrant&apos;s domain name must be identical or deceptively similar to a name, trademark, or service mark in which the complainant has legal rights (either via statutory <Link href="/e-filing-trademark" className="text-[#6E5E93] underline font-semibold">trademark registration</Link> or established common law prior commercial use).
                                                </p>
                                                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
                                                    Proof: Trademark Certificate, User Invoices, Brand Awareness Evidence
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white border-2 border-indigo-100 rounded-2xl p-5 shadow-sm hover:border-[#6E5E93]/40 transition-colors">
                                        <div className="flex items-start space-x-3">
                                            <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                                                2
                                            </span>
                                            <div>
                                                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                                    No Rights or Legitimate Interests
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
                                                    The registrant has no legitimate business interest, license, or bona fide commercial use of the domain name prior to notice of the dispute. The registrant is not commonly known by that name and is not making legitimate non-commercial fair use.
                                                </p>
                                                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
                                                    Proof: Absence of MCA Company Name, No Trade License, Parking Page Screens
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white border-2 border-indigo-100 rounded-2xl p-5 shadow-sm hover:border-[#6E5E93]/40 transition-colors">
                                        <div className="flex items-start space-x-3">
                                            <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                                                3
                                            </span>
                                            <div>
                                                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                                    Registered OR Used in Bad Faith (Crucial INDRP Advantage)
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2">
                                                    Under INDRP Paragraph 4(c), the test is <strong>disjunctive (&ldquo;OR&rdquo;)</strong>. Proving either bad-faith registration (e.g. buying to extort money) OR bad-faith use (e.g. parking page, phishing) is sufficient to win the award.
                                                </p>
                                                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
                                                    Proof: Extortion Offer Emails, Parking Ads, Competing Business Links
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 6 */}
                            <section id="cybersquatting-types" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Types of Cybersquatting & Domain Brand Theft
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    Modern domain hijacking extends far beyond simple domain holding. Understanding the exact method of cyber infringement is essential to drafting an airtight complaint:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                                    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                        <div className="flex items-center space-x-2.5 text-rose-600 font-bold mb-2">
                                            <FontAwesomeIcon icon={faTriangleExclamation} className="w-4 h-4" />
                                            <h3 className="text-sm font-bold text-gray-900 m-0">1. Typosquatting / URL Spoofing</h3>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed m-0">
                                            Registering common keyboard typing errors or misspelled variants of popular brands (e.g. <em>amazonn.co.in</em>, <em>flipkartt.in</em>) to intercept mistyped browser navigation.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                        <div className="flex items-center space-x-2.5 text-amber-600 font-bold mb-2">
                                            <FontAwesomeIcon icon={faHourglassHalf} className="w-4 h-4" />
                                            <h3 className="text-sm font-bold text-gray-900 m-0">2. Domain Warehousing & Drop Catching</h3>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed m-0">
                                            Using automated software bots to immediately register a brand&apos;s expired domain the millisecond it lapses, holding it hostage for tens of thousands of dollars.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                        <div className="flex items-center space-x-2.5 text-indigo-600 font-bold mb-2">
                                            <FontAwesomeIcon icon={faTowerBroadcast} className="w-4 h-4" />
                                            <h3 className="text-sm font-bold text-gray-900 m-0">3. Competitor Disruption Squatting</h3>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed m-0">
                                            A business rival registering your prospective startup&apos;s or product&apos;s dot-in domain to prevent your product launch and divert your prospective clients.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                        <div className="flex items-center space-x-2.5 text-purple-600 font-bold mb-2">
                                            <FontAwesomeIcon icon={faUserShield} className="w-4 h-4" />
                                            <h3 className="text-sm font-bold text-gray-900 m-0">4. Reverse Domain Name Hijacking (RDNH)</h3>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed m-0">
                                            When a large corporate trademark owner abuses legal proceedings in bad faith to harass a legitimate small business registrant who registered a generic domain honestly.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 7 */}
                            <section id="step-by-step" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Step-by-Step Procedure to Recover a .IN Domain
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    Recovering a squatted domain under NIXI INDRP involves a structured, legally audited process:
                                </p>

                                <div className="space-y-4 my-6">
                                    {/* STEP 1 */}
                                    <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6E5E93] border border-purple-200 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">
                                            01
                                        </div>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                                WHOIS Audit & Digital Evidence Preservation
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                                                Extract historical WHOIS records, IP addresses, web hosting details, and time-stamped screenshots of parking advertisements, pay-per-click links, or extortion sale prices before alerting the squatter.
                                            </p>
                                        </div>
                                    </div>

                                    {/* STEP 2 */}
                                    <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6E5E93] border border-purple-200 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">
                                            02
                                        </div>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                                Issuance of Cease & Desist Legal Notice
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                                                Serve a formal legal notice via an IP advocate giving the registrant a 7-day window to voluntarily transfer the domain. This firmly establishes constructive knowledge of your trademark rights and proves bad-faith intent.
                                            </p>
                                        </div>
                                    </div>

                                    {/* STEP 3 */}
                                    <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6E5E93] border border-purple-200 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">
                                            03
                                        </div>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                                Drafting & Submitting INDRP Complaint with NIXI
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                                                Prepare an INDRP complaint along with Annexures (trademark certificates, user affidavits, corporate incorporation documents) and remit official arbitration fees to NIXI (.IN Registry).
                                            </p>
                                        </div>
                                    </div>

                                    {/* STEP 4 */}
                                    <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6E5E93] border border-purple-200 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">
                                            04
                                        </div>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                                Administrative Review & Mandatory Registry Domain Lock
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                                                NIXI audits the complaint for procedural compliance and immediately notifies the registrar to place a <strong>Registrar Lock</strong> on the domain, preventing cyber-flight (unauthorized transfer or sale during proceedings).
                                            </p>
                                        </div>
                                    </div>

                                    {/* STEP 5 */}
                                    <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6E5E93] border border-purple-200 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">
                                            05
                                        </div>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                                Appointment of Sole Arbitrator & Service on Respondent
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                                                NIXI appoints an independent sole arbitrator from its empaneled roster of senior IP advocates and serves notice along with the complaint dossier upon the respondent registrant.
                                            </p>
                                        </div>
                                    </div>

                                    {/* STEP 6 */}
                                    <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6E5E93] border border-purple-200 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">
                                            06
                                        </div>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                                Exchange of Written Pleadings (14-Day Window)
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                                                The Respondent is granted 14 days to submit a written response. The proceedings are conducted strictly on written electronic records without cumbersome oral hearings unless the arbitrator deems it extraordinary.
                                            </p>
                                        </div>
                                    </div>

                                    {/* STEP 7 */}
                                    <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6E5E93] border border-purple-200 flex items-center justify-center font-extrabold text-sm sm:text-base flex-shrink-0">
                                            07
                                        </div>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                                                Passing of Arbitral Award & Direct Registry Transfer
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                                                The Arbitrator delivers a reasoned arbitral award within 60 days. Upon receipt of a transfer order, NIXI directly instructs the registrar to change registrant credentials and hand over the domain to the Complainant.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 8 */}
                            <section id="indrp-vs-udrp-table" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    INDRP vs UDRP vs High Court Civil Lawsuit
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    When facing cybersquatting in India, brand owners have multiple legal pathways. Here is how administrative arbitration compares with global policies and commercial court litigation:
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm text-xs sm:text-sm">
                                        <thead className="bg-[#FAF9F6] text-gray-900">
                                            <tr>
                                                <th className="p-3.5 border-b border-gray-200 font-bold">Feature</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-[#6E5E93]">INDRP (.IN Registry)</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-indigo-900">UDRP (WIPO / ICANN)</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-emerald-900">Commercial Court Suit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-gray-700">
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Domain Scope</td>
                                                <td className="p-3.5">.in, .co.in, .bharat</td>
                                                <td className="p-3.5">.com, .net, .org, .io, .ai</td>
                                                <td className="p-3.5">All TLDs used in India</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Bad Faith Standard</td>
                                                <td className="p-3.5 font-semibold text-emerald-700">Registered OR Used (Disjunctive)</td>
                                                <td className="p-3.5">Registered AND Used (Conjunctive)</td>
                                                <td className="p-3.5">Passing off / Infringement torts</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Average Timeline</td>
                                                <td className="p-3.5 font-bold text-[#6E5E93]">30 – 60 Days</td>
                                                <td className="p-3.5">45 – 75 Days</td>
                                                <td className="p-3.5">12 – 36 Months</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Primary Remedies</td>
                                                <td className="p-3.5">Transfer or Cancellation</td>
                                                <td className="p-3.5">Transfer or Cancellation</td>
                                                <td className="p-3.5">Injunction, Damages, Account of Profits</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Monetary Damages</td>
                                                <td className="p-3.5 text-rose-600 font-medium">No (Only legal costs)</td>
                                                <td className="p-3.5 text-rose-600 font-medium">No damages awarded</td>
                                                <td className="p-3.5 text-emerald-600 font-bold">Yes (Punitive damages possible)</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Cost Efficiency</td>
                                                <td className="p-3.5 font-bold text-emerald-700">Very High (Cost-effective)</td>
                                                <td className="p-3.5">Moderate ($1500+ WIPO fee)</td>
                                                <td className="p-3.5">High (Court litigation fees)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* SECTION 9 */}
                            <section id="nixi-fees" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    NIXI Filing Fees & Arbitration Cost Schedule
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    The statutory fee structure established by NIXI for INDRP proceedings is highly affordable and transparent:
                                </p>

                                <div className="overflow-x-auto my-6">
                                    <table className="w-full text-left border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm text-xs sm:text-sm">
                                        <thead className="bg-[#FAF9F6] text-gray-900">
                                            <tr>
                                                <th className="p-3.5 border-b border-gray-200 font-bold">Fee Head</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-[#6E5E93]">Amount (Single Domain)</th>
                                                <th className="p-3.5 border-b border-gray-200 font-bold text-gray-700">Multiple Domains (2–5 Domains)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-gray-700">
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Arbitrator&apos;s Honorarium</td>
                                                <td className="p-3.5 font-semibold text-gray-900">₹25,000</td>
                                                <td className="p-3.5">₹35,000 – ₹45,000</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">NIXI Administrative Fee</td>
                                                <td className="p-3.5 font-semibold text-gray-900">₹5,000 – ₹10,000</td>
                                                <td className="p-3.5">₹10,000 – ₹15,000</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50/60">
                                                <td className="p-3.5 font-bold text-gray-900">Oral Hearing Fee (If requested)</td>
                                                <td className="p-3.5">₹10,000 (per session)</td>
                                                <td className="p-3.5">₹15,000 (per session)</td>
                                            </tr>
                                            <tr className="bg-purple-50/50 font-bold text-gray-900">
                                                <td className="p-3.5">Total Official Statutory Cost</td>
                                                <td className="p-3.5 text-[#6E5E93]">₹30,000 – ₹35,000*</td>
                                                <td className="p-3.5 text-indigo-900">₹45,000 – ₹60,000*</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-[11px] text-gray-500 italic">
                                    *Note: Official statutory fee amounts are subject to applicable GST and professional attorney drafting charges.
                                </p>
                            </section>

                            {/* SECTION 10 */}
                            <section id="defensive-strategies" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Defensive Domain Strategies to Prevent Hijacks
                                </h2>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                    Proactive domain portfolio management is infinitely more cost-effective than engaging in post-infringement dispute resolution. Implement these 5 enterprise brand defense rules:
                                </p>

                                <div className="space-y-3 my-6">
                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">1. Synchronize Trademark Filing with Multi-TLD Registration</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">
                                                The day you submit your <Link href="/how-to-register-a-trademark-for-my-startup" className="text-[#6E5E93] underline">trademark application for your startup</Link>, defensively register primary TLDs (.in, .co.in, .com, .org) before your trademark publication appears in the public Trade Marks Journal.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">2. Register Key Phonetic & Typographical Variations</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">
                                                Acquire obvious typographical misspellings and common keyword variations (e.g. yourbrandapp.in, yourbrandonline.in) and redirect them directly to your primary website.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">3. Activate Registrar Transfer Lock & Multi-Year Auto-Renewal</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">
                                                Enable 10-year domain renewals and activate Registry / Registrar Locks to avoid accidental expiration drop-catching by malicious automated bots.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">4. Set Up Automated Trademark & Domain Watch Alerts</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">
                                                Subscribe to an AI-powered domain monitoring service that immediately alerts your legal team whenever a domain containing your brand name is registered with any registrar worldwide.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl">
                                        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-gray-900 m-0">5. Enroll in Amazon Brand Registry & E-Commerce Watch</p>
                                            <p className="text-xs text-gray-600 m-0 mt-0.5">
                                                Leverage your registered trademark to enroll in <Link href="/amazon-brand-registry-trademark-requirements-india" className="text-[#6E5E93] underline">Amazon Brand Registry</Link> to prevent counterfeiters from misusing your domain handle across major marketplaces.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 11 */}
                            <section id="faqs" className="mb-10 sm:mb-12 scroll-mt-24">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                    Frequently Asked Questions (INDRP & Disputes)
                                </h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:border-[#6E5E93]/40 transition-colors">
                                            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-2 flex items-start">
                                                <span className="text-[#6E5E93] mr-2 font-extrabold flex-shrink-0">Q{index + 1}.</span>
                                                <span>{faq.question}</span>
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0 pl-6 border-l-2 border-purple-100">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* SECTION 12 */}
                            <section id="final-takeaway" className="mb-8 scroll-mt-24">
                                <div className="bg-gradient-to-br from-[#1A1A24] via-[#2A2A38] to-[#1A1A24] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#6E5E93]/20 rounded-full blur-3xl pointer-events-none"></div>
                                    <h2 className="text-lg sm:text-2xl font-extrabold mb-3 text-white">
                                        Strategic Legal Action to Reclaim Your Domain
                                    </h2>
                                    <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                                        Allowing a cybersquatter or hostile third party to hold your brand&apos;s .in domain damages your search engine visibility, bleeds valuable customers, and exposes your company to dangerous phishing scams. With the expert IP litigation team at IPR Karo, you can serve immediate cease-and-desist notices and initiate fast-track NIXI INDRP arbitration to transfer your domain back to where it belongs.
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                        <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                            <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                                Initiate INDRP Domain Dispute <span className="ml-2 font-black">&rarr;</span>
                                            </button>
                                        </Link>
                                        <a href="tel:+919289707648" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl border border-white/20 transition-all text-xs sm:text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                            <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                            Call Attorney: +91-9289707648
                                        </a>
                                    </div>
                                </div>
                            </section>

                        </main>

                        {/* DESKTOP SIDEBAR */}
                        <aside className="hidden lg:block sticky top-28 xl:top-32 self-start space-y-6 max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar scrollbar-hide pb-8">
                            {/* CASE REVIEW CARD */}
                            <div className="bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 rounded-2xl p-5 border border-purple-100 shadow-sm">
                                <div className="flex items-center space-x-2 text-[#6E5E93] font-bold text-xs uppercase tracking-wider mb-2">
                                    <FontAwesomeIcon icon={faUserShield} className="w-3.5 h-3.5" />
                                    <span>Expert Domain Audit</span>
                                </div>
                                <p className="text-base font-bold text-gray-900 mb-2">Is Your Domain Squatted?</p>
                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Get an instant legal evaluation of your WHOIS record, trademark prior-use rights, and bad-faith evidence from senior cyber advocates.
                                </p>
                                <Link href="/e-filing-trademark" className="block w-full">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm uppercase tracking-wider">
                                        Free Dispute Review
                                    </button>
                                </Link>
                            </div>

                            {/* EMERGENCY HELPLINE */}
                            <div className="bg-[#1A1A24] rounded-2xl p-5 text-white shadow-md">
                                <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                                    <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
                                    <span>Fast-Track Resolution</span>
                                </div>
                                <p className="text-base font-bold text-white mb-2">30–60 Day NIXI Process</p>
                                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                                    Recover dot-in domains without prolonged High Court court battles through binding arbitral awards.
                                </p>
                                <a href="tel:+919289707648" className="flex items-center justify-center w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors">
                                    <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 mr-2 text-pink-400" />
                                    +91-9289707648
                                </a>
                            </div>

                            {/* QUICK LINKS */}
                            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Related Legal Guides</p>
                                <ul className="space-y-2.5 text-xs">
                                    <li>
                                        <Link href="/passing-off-vs-trademark-infringement-india" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors">
                                            <span className="mr-2 text-purple-400">&rarr;</span>
                                            Passing Off vs Infringement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-register-a-trademark-for-my-startup" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors">
                                            <span className="mr-2 text-purple-400">&rarr;</span>
                                            Startup Trademark Filing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors">
                                            <span className="mr-2 text-purple-400">&rarr;</span>
                                            Trademark Rectification & Non-Use
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-hearing-video-conferencing-procedure-india" className="text-gray-700 hover:text-[#6E5E93] font-medium flex items-center transition-colors">
                                            <span className="mr-2 text-purple-400">&rarr;</span>
                                            Attend Trademark Video Hearing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                    </div>
                </div>
            </div>
        </div>
    );
}
