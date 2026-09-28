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
    faGlobe,
    faClock,
    faRotate,
    faStamp,
    faGavel,
    faFileLines,
    faCircleCheck,
    faBan,
    faLandmark,
    faEye,
    faCircleExclamation,
    faBriefcase,
    faShieldCat,
    faAward
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Disclaimer Meaning & Impact on Certificate | IPR Karo",
    description: validateAndNormalizeDescription(
        "Understand trademark disclaimer conditions in Indian registration certificates under Section 17. Learn their legal impact on infringement and passing off rights.",
        "app/trademark-disclaimer-condition-meaning-in-india/page.tsx"
    ),
    keywords: [
        "trademark disclaimer condition meaning in india",
        "condition and limitations on trademark certificate",
        "what is a disclaimer in trademark registration",
        "section 17 anti dissection rule trademark",
        "section 28 rights subject to conditions",
        "trademark disclaimer infringement vs passing off",
        "registrar of trade marks v ashok chandra rakhit",
        "south india beverages dominant mark rule",
        "how to remove trademark disclaimer condition india",
        "trademark registration certificate form tm rg"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-disclaimer-condition-meaning-in-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark Disclaimer Meaning & Impact on Certificate | IPR Karo",
        description: "Understand trademark disclaimer conditions in Indian registration certificates under Section 17. Learn their legal impact on infringement and passing off rights.",
        url: "https://www.iprkaro.com/trademark-disclaimer-condition-meaning-in-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-disclaimer-condition-meaning-in-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Disclaimer Condition in Registration Certificate Meaning and Impact Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark Disclaimer Meaning & Impact on Certificate | IPR Karo",
        description: "Understand trademark disclaimer conditions in Indian registration certificates under Section 17. Learn their legal impact on infringement and passing off rights.",
        images: ["https://www.iprkaro.com/images/og/trademark-disclaimer-condition-meaning-in-india.jpg"],
    }
};

const faqs = [
    {
        question: "What does a trademark disclaimer mean on my registration certificate?",
        answer: "A trademark disclaimer is an official statutory condition entered by the Trade Marks Registry on your Trademark Registration Certificate (Form TM-RG). It expressly clarifies that the proprietor holds exclusive ownership over the combined trademark as a whole, but claims no separate or standalone monopoly over non-distinctive, generic, descriptive, or common dictionary elements (such as 'Organic', 'India', or 'Pure') contained within the composite logo or label."
    },
    {
        question: "Does a disclaimer mean my entire trademark registration is weak or invalid?",
        answer: "No. A disclaimer does not weaken your overall registration. You still possess complete, exclusive nationwide rights over your brand name, composite artwork, unique color schemes, and distinctive layout as a combined whole. It simply prevents you from using the registration to bully honest competitors who use common dictionary or trade terms for describing their own goods."
    },
    {
        question: "Can I sue a competitor for trademark infringement if they use my disclaimed word?",
        answer: "Under Section 17(2) and Section 28(2) of the Trade Marks Act, 1999, you cannot maintain a statutory trademark infringement lawsuit against a competitor solely because they used the disclaimed word or symbol. You can only succeed in an infringement claim if they copy your overall composite mark or replicate your non-disclaimed distinctive dominant features."
    },
    {
        question: "Why did the Trade Marks Registry impose a disclaimer on my mark without my request?",
        answer: "Under Section 18(4) and Section 23 of the Trade Marks Act, the Registrar of Trade Marks exercises discretionary statutory power to balance private brand rights against the public interest. If an examiner notes that a trademark contains words that are common to the trade (publici juris) or purely laudatory, they impose a disclaimer condition during examination or show-cause hearing to prevent unlawful market monopolies."
    },
    {
        question: "What is the difference between the Anti-Dissection Rule and a Disclaimer?",
        answer: "The Anti-Dissection Rule under Section 17(1) establishes that a composite trademark must be evaluated as a single, indivisible whole rather than broken into individual syllables or parts. A disclaimer operates under Section 17(2) as a statutory clarification, confirming that while the overall composite whole is protected, un-registered or generic individual parts do not confer independent exclusivity."
    },
    {
        question: "Can I file a passing off lawsuit if my certificate contains a disclaimer?",
        answer: "Yes. As held by the Supreme Court of India in the landmark Registrar of Trade Marks v. Ashok Chandra Rakhit Ltd. case, a disclaimer on the register affects only statutory infringement rights under the Trade Marks Act. It does not extinguish common law rights under Section 27(2). If a competitor deceives the public by copying your trade dress or commercial reputation, you can still file a common law passing off suit."
    },
    {
        question: "Can I remove a disclaimer condition from my trademark certificate after registration?",
        answer: "Once entered on the register and issued on Form TM-RG, a disclaimer condition cannot simply be erased through an amendment. However, if that specific word or element acquires immense secondary meaning and distinctive brand recognition over years of continuous commercial use, you can file a fresh standalone trademark application on Form TM-A with a comprehensive User Affidavit under Rule 25."
    },
    {
        question: "Should I accept a disclaimer during a trademark examination or show-cause hearing?",
        answer: "If the contested term is blatantly generic or descriptive (such as 'Ayurvedic', 'Super', or 'Dairy'), agreeing to a disclaimer is often a prudent legal strategy to secure fast registration of your composite logo without endless litigation. However, if the word is suggestive, arbitrary, or your primary distinctive brand identifier, you should instruct your trademark attorney to contest the condition with user evidence."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Meaning" },
    { id: "statutory-framework", title: "Statutory Law & Section 17" },
    { id: "why-imposed", title: "Why Disclaimers Exist" },
    { id: "anti-dissection-vs-dominant", title: "Anti-Dissection vs Dominance" },
    { id: "infringement-vs-passing-off", title: "Infringement vs Passing Off" },
    { id: "disclaimer-types-table", title: "Common Types & Examples" },
    { id: "respond-to-disclaimer", title: "How to Handle Disclaimers" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "strategic-checklist", title: "Compliance Checklist" },
];

export default function TrademarkDisclaimerMeaningPage() {
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
        "headline": "Trademark Disclaimer Condition in Registration Certificate: Meaning & Legal Impact in India",
        "description": "Understand trademark disclaimer conditions in Indian registration certificates under Section 17. Learn their legal impact on infringement and passing off rights.",
        "image": "https://www.iprkaro.com/images/og/trademark-disclaimer-condition-meaning-in-india.png",
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
            "@id": "https://www.iprkaro.com/trademark-disclaimer-condition-meaning-in-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark Disclaimer Meaning & Impact on Certificate | IPR Karo",
        "url": "https://www.iprkaro.com/trademark-disclaimer-condition-meaning-in-india",
        "description": "Understand trademark disclaimer conditions in Indian registration certificates under Section 17. Learn their legal impact on infringement and passing off rights.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-disclaimer-condition-meaning-in-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-disclaimer-condition-meaning-in-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Disclaimer Condition Guide", "item": "https://www.iprkaro.com/trademark-disclaimer-condition-meaning-in-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Steps to Evaluate and Manage Trademark Disclaimer Conditions",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Review Conditions & Limitations Box on Form TM-RG Certificate" },
            { "@type": "ListItem", "position": 2, "name": "Identify Specific Words, Devices, or Geographical Matters Disclaimed" },
            { "@type": "ListItem", "position": 3, "name": "Apply Section 17(1) Anti-Dissection Assessment to Whole Composite Mark" },
            { "@type": "ListItem", "position": 4, "name": "Differentiate Registered Infringement Scope vs Common Law Passing Off" },
            { "@type": "ListItem", "position": 5, "name": "Draft Commercial Cease-and-Desist Notices Based on Dominant Distinctive Features" },
            { "@type": "ListItem", "position": 6, "name": "Collect Long-Term Commercial User Evidence for Future Standalone Word Registrations" }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />

            {/* HERO HEADER SECTION */}
            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Trade Marks Act 1999 • Section 17 &amp; 28 Analysis</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Disclaimer Condition</span> in Registration Certificate
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                When your official Trademark Registration Certificate (Form TM-RG) arrives from the Trade Marks Registry, you may discover a note in the &ldquo;Condition &amp; Limitations&rdquo; column stating: <em>&ldquo;Registration shall give no right to the exclusive use of the word...&rdquo;</em> What does this disclaimer actually mean for your business? Does it weaken your brand protection? Explore how Section 17, Section 28, the Anti-Dissection Rule, and Indian Supreme Court precedents define your rights against infringers and counterfeiters.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Senior Trademark &amp; IP Attorney</p>
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
                                        Consult a Trademark Attorney <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call Legal Desk: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-disclaimer-condition-meaning-in-india.png"
                                    alt="Trademark Disclaimer Condition in Registration Certificate Meaning and Impact Guide"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BREADCRUMBS BAR */}
            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[
                        { label: "Services", href: "/our-services" },
                        { label: "Trademark Disclaimer Meaning & Impact", href: "/trademark-disclaimer-condition-meaning-in-india" }
                    ]} />
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        {/* LEFT SIDEBAR: DESKTOP TOC */}
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* MIDDLE COLUMN: MAIN ARTICLE */}
                        <main className="min-w-0">
                            {/* MOBILE ACCORDION TOC */}
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
                                            <p className="text-xs text-gray-500 m-0">Senior Trademark &amp; IP Attorney • Verified Expert</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & MEANING */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview: What is a Trademark Disclaimer?
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                A trademark disclaimer is an official statutory condition entered by the Trade Marks Registry on your Trademark Registration Certificate (Form TM-RG). It expressly clarifies that the proprietor holds exclusive ownership over the combined trademark <em>as a whole</em>, but claims no separate or standalone monopoly over non-distinctive, generic, descriptive, or common dictionary elements (such as &ldquo;Pure&rdquo;, &ldquo;India&rdquo;, &ldquo;Herbal&rdquo;, or &ldquo;Tech&rdquo;) contained within the composite logo or label.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Receiving your official <Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration certificate</Link> is a landmark milestone for any business founder or enterprise. However, many trademark owners are surprised and concerned when they read the fine print in the box titled <strong>&ldquo;Condition &amp; Limitations&rdquo;</strong>.
                                        </p>
                                        <p className="mb-6">
                                            A typical entry reads:
                                        </p>

                                        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 mb-8 not-prose">
                                            <div className="flex items-start">
                                                <FontAwesomeIcon icon={faStamp} className="w-6 h-6 text-amber-700 mt-1 mr-4 shrink-0" />
                                                <div>
                                                    <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-1">Standard Certificate Disclaimer Condition</h4>
                                                    <p className="text-sm text-amber-950 font-mono italic leading-relaxed m-0">
                                                        &ldquo;Registration of this Trade Mark shall give no right to the exclusive use of the word(s) &lsquo;ORGANIC CARE&rsquo; separately and the device of &lsquo;LEAF&rsquo; apart from the mark as shown.&rdquo;
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            This condition does <strong>not</strong> mean your registration is defective, invalid, or inferior. Rather, it represents the delicate balance struck by the Trade Marks Act, 1999: granting commercial exclusivity to your brand&rsquo;s distinctive identity while safeguarding the public domain so honest competitors can freely describe their own products.
                                        </p>
                                    </section>

                                    {/* SECTION 2: STATUTORY FRAMEWORK & SECTION 17 */}
                                    <section id="statutory-framework" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Statutory Law: Section 17 &amp; Section 28
                                        </h2>
                                        <p className="mb-6">
                                            To fully understand the legal scope of a disclaimer, one must examine the statutory foundation established under the <strong>Trade Marks Act, 1999</strong>:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-3 h-3 bg-[#6E5E93] rounded-full mr-3"></span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Section 17(1): The Anti-Dissection Mandate</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Section 17(1) enacts the fundamental rule of trademark law: When a trademark consists of several matters, its registration confers upon the proprietor the exclusive right to use the mark <strong>taken as a whole</strong>. You cannot isolate syllables or dissect the mark to claim exclusive ownership over fragments unless registered separately under Section 15.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Section 17(2): No Exclusivity in Descriptive Parts</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Section 17(2) explicitly provides that where a trademark contains any matter that is <em>not registered separately</em>, or contains matter that is <em>common to the trade (publici juris)</em> or is otherwise of a <em>non-distinctive character</em>, registration does <strong>not</strong> confer exclusive rights in that individual part.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Section 28(2): Rights Subject to Certificate Conditions</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    While Section 28(1) gives you the exclusive statutory right to use the mark and obtain relief against <Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark infringement</Link>, Section 28(2) makes this right strictly <em>subject to any conditions and limitations entered on the register</em>.
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-3 h-3 bg-emerald-600 rounded-full mr-3"></span>
                                                    <h3 className="text-lg font-bold text-gray-900 m-0">Section 18(4) &amp; Section 23: Registrar&rsquo;s Discretion</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    The Registrar of Trade Marks is vested with wide statutory discretion under Section 18(4) and Section 23 to accept an application subject to conditions, amendments, modifications, or disclaimers as deemed appropriate to prevent unjust monopolies.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: WHY DISCLAIMERS EXIST */}
                                    <section id="why-imposed" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Why the Registrar Imposes Disclaimers
                                        </h2>
                                        <p className="mb-6">
                                            The Trade Marks Registry never imposes disclaimers arbitrarily. Disclaimers serve critical public policy purposes in commercial intellectual property:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-[#6E5E93] mb-4">
                                                    <FontAwesomeIcon icon={faBan} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Preventing Monopolies on Language</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    No single enterprise should monopolize ordinary English or vernacular words (such as &ldquo;Fast&rdquo;, &ldquo;Pure&rdquo;, &ldquo;Super&rdquo;, &ldquo;Desi&rdquo;, or &ldquo;Royal&rdquo;) that other honest businessmen require to describe their goods.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                                                    <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Preserving Geographical Names</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Geographical indicators (such as &ldquo;Himalaya&rdquo;, &ldquo;Delhi&rdquo;, &ldquo;Kashmir&rdquo;, or &ldquo;Bengal&rdquo;) belong to the public domain. Disclaimers ensure multiple regional manufacturers can use origin names truthfully.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Protecting Generic Trade Terms</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Terms common to an industry—such as &ldquo;Pharma&rdquo; for medicines, &ldquo;Chai&rdquo; for tea, or &ldquo;Tech&rdquo; for software—are <em>publici juris</em>. Disclaimers prevent groundless infringement threats against legitimate traders.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Enabling Logo Approvals</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Without disclaimers, composite labels containing descriptive taglines or common graphics would be summarily rejected under Section 9. Disclaimers allow composite marks to get registered.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: ANTI-DISSECTION VS DOMINANT FEATURE */}
                                    <section id="anti-dissection-vs-dominant" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Anti-Dissection Rule vs. Dominant Feature
                                        </h2>
                                        <p className="mb-6">
                                            In trademark litigation, Indian courts frequently address the tension between the <strong>Anti-Dissection Rule</strong> and the <strong>Dominant Feature Test</strong>. How does a disclaimer interact with these two judicial doctrines?
                                        </p>

                                        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                                <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                The Anti-Dissection Rule (*Whole Mark Rule*)
                                            </h3>
                                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                                Under established jurisprudence (including the Supreme Court ruling in <em>Kaviraj Pandit Durga Dutt Sharma v. Navaratna Pharmaceutical Laboratories</em>), a commercial trademark cannot be dissected into distinct elements for microscopic comparison. The average consumer of imperfect recollection perceives a brand as an integrated visual, phonetic, and commercial unit.
                                            </p>
                                            <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                Therefore, even if your certificate contains a disclaimer on &ldquo;SOLUTIONS&rdquo;, another party cannot escape infringement if they copy your overall unique logo, identical color palette, distinctive font typography, and core coined prefix.
                                            </p>
                                        </div>

                                        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                                <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-2.5"></span>
                                                The Dominant Feature Rule (*South India Beverages Case*)
                                            </h3>
                                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                                In the landmark judgment <em>South India Beverages Pvt. Ltd. v. General Mills Marketing Inc. (2014)</em>, the Delhi High Court Division Bench reconciled the Anti-Dissection Rule with practical commercial reality:
                                            </p>
                                            <div className="bg-indigo-50/70 border-l-4 border-indigo-500 p-4 rounded-r-xl my-4 text-xs text-indigo-950 font-medium leading-relaxed">
                                                &ldquo;While a mark must be considered in its entirety, it is not an absolute rule that all parts of a composite mark possess equal commercial significance. Greater weight can be accorded to the dominant, prominent, or essential features of a mark, whereas disclaimed or descriptive elements cannot form the foundation of exclusivity.&rdquo;
                                            </div>
                                            <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                <strong>Practical Rule:</strong> If your mark is &ldquo;AURORA INFORMATICS&rdquo; with a disclaimer on &ldquo;INFORMATICS&rdquo;, &ldquo;AURORA&rdquo; is the distinctive dominant feature. A rival using &ldquo;AURORA TECH&rdquo; infringes your dominant mark, but a rival using &ldquo;ZENITH INFORMATICS&rdquo; does not!
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 5: INFRINGEMENT VS PASSING OFF */}
                                    <section id="infringement-vs-passing-off" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldCat} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Impact on Infringement vs. Passing Off
                                        </h2>
                                        <p className="mb-6">
                                            A crucial legal distinction lies between <strong>Statutory Infringement (Section 29)</strong> and <strong>Common Law Passing Off (Section 27(2))</strong> when a disclaimer exists:
                                        </p>

                                        {/* COMPARISON TABLE */}
                                        <div className="overflow-x-auto my-8 not-prose">
                                            <table className="w-full text-left border-collapse border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                                <thead>
                                                    <tr className="bg-[#0C002B] text-white">
                                                        <th className="p-4 text-xs sm:text-sm font-bold uppercase tracking-wider">Legal Dimension</th>
                                                        <th className="p-4 text-xs sm:text-sm font-bold uppercase tracking-wider">Trademark Infringement (Sec 29)</th>
                                                        <th className="p-4 text-xs sm:text-sm font-bold uppercase tracking-wider">Passing Off Remedy (Sec 27(2))</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700 bg-white">
                                                    <tr className="hover:bg-purple-50/50">
                                                        <td className="p-4 font-bold text-gray-900">Legal Source</td>
                                                        <td className="p-4">Statutory Right under Trade Marks Act, 1999</td>
                                                        <td className="p-4">Common Law Right protecting goodwill &amp; reputation</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/50">
                                                        <td className="p-4 font-bold text-gray-900">Effect of Disclaimer</td>
                                                        <td className="p-4 text-red-600 font-semibold">Bars exclusivity over the disclaimed element. You cannot sue solely for use of that word.</td>
                                                        <td className="p-4 text-green-700 font-semibold">No effect! Supreme Court held disclaimers do NOT affect common law passing off rights.</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/50">
                                                        <td className="p-4 font-bold text-gray-900">Landmark Precedent</td>
                                                        <td className="p-4"><em>Superon Schweisstechnik v. Prime Weld</em> (2020)</td>
                                                        <td className="p-4"><em>Registrar of Trade Marks v. Ashok Chandra Rakhit</em> (AIR 1955 SC 558)</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/50">
                                                        <td className="p-4 font-bold text-gray-900">Burden of Proof</td>
                                                        <td className="p-4">Must prove deceptive similarity to the whole mark or dominant feature</td>
                                                        <td className="p-4">Must prove prior use, commercial goodwill, deception, and likelihood of damage</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/50">
                                                        <td className="p-4 font-bold text-gray-900">Secondary Meaning Exception</td>
                                                        <td className="p-4">Limited unless a fresh standalone registration is obtained</td>
                                                        <td className="p-4">Extremely strong if extensive prior use associates the word with your business</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8 not-prose">
                                            <h4 className="text-sm font-bold text-[#6E5E93] uppercase tracking-wider mb-2 flex items-center">
                                                <FontAwesomeIcon icon={faLandmark} className="w-4 h-4 mr-2" />
                                                The Landmark &ldquo;Shree&rdquo; Ruling: Ashok Chandra Rakhit Case
                                            </h4>
                                            <p className="text-xs text-gray-700 leading-relaxed m-0">
                                                In <em>Registrar of Trade Marks v. Ashok Chandra Rakhit Ltd. (1955)</em>, the Supreme Court of India established the definitive law on trademark disclaimers. The Court held that entering a disclaimer on the Register is an administrative measure to prevent false claims of statutory monopoly, but <strong>it does not destroy or diminish the proprietor&rsquo;s common law rights</strong>. If the disclaimed word has acquired secondary meaning in the minds of consumers, the owner can still sue for passing off if a competitor attempts to deceive the trade.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 6: COMMON TYPES OF DISCLAIMERS */}
                                    <section id="disclaimer-types-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Common Types of Disclaimers &amp; Real Examples
                                        </h2>
                                        <p className="mb-6">
                                            The Trade Marks Registry enters several categories of conditions on registration certificates depending on the nature of the application:
                                        </p>

                                        <div className="space-y-6 my-8 not-prose">
                                            {/* TYPE 1 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="bg-[#6E5E93] text-white text-[11px] font-black uppercase px-3 py-1 rounded-full">Category 1</span>
                                                    <span className="text-xs text-gray-500 font-semibold">Descriptive &amp; Quality Words</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Disclaimers on Descriptive &amp; Laudatory Terms</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                                    Applied when a mark incorporates terms describing product attributes, quality, or ingredients (e.g., &ldquo;Organic&rdquo;, &ldquo;Herbal&rdquo;, &ldquo;Pure&rdquo;, &ldquo;Fresh&rdquo;, &ldquo;Crisp&rdquo;, &ldquo;Super&rdquo;, &ldquo;Bio&rdquo;).
                                                </p>
                                                <div className="bg-gray-50 p-3 rounded-xl text-xs font-mono text-gray-800">
                                                    <strong>Certificate Text:</strong> &ldquo;Registration shall give no right to the exclusive use of the descriptive matter &lsquo;NATURAL HERBAL REMEDIES&rsquo;.&rdquo;
                                                </div>
                                            </div>

                                            {/* TYPE 2 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="bg-[#6E5E93] text-white text-[11px] font-black uppercase px-3 py-1 rounded-full">Category 2</span>
                                                    <span className="text-xs text-gray-500 font-semibold">Geographical Names</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Disclaimers on Geographical &amp; Territorial Names</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                                    Applied when a logo includes city, state, or regional names (e.g., &ldquo;Delhi&rdquo;, &ldquo;Mumbai&rdquo;, &ldquo;India&rdquo;, &ldquo;Himalayan&rdquo;, &ldquo;American&rdquo;, &ldquo;Kolkata&rdquo;).
                                                </p>
                                                <div className="bg-gray-50 p-3 rounded-xl text-xs font-mono text-gray-800">
                                                    <strong>Certificate Text:</strong> &ldquo;Registration of this Trade Mark shall give no right to the exclusive use of the geographical name &lsquo;BENGALURU&rsquo;.&rdquo;
                                                </div>
                                            </div>

                                            {/* TYPE 3 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="bg-[#6E5E93] text-white text-[11px] font-black uppercase px-3 py-1 rounded-full">Category 3</span>
                                                    <span className="text-xs text-gray-500 font-semibold">Common Devices &amp; Symbols</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Disclaimers on Generic Artwork &amp; Symbols</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                                    Applied when a label contains common industry graphics such as a green leaf for agricultural goods, a medical caduceus for clinics, a coffee cup for cafes, or a tooth icon for dental services.
                                                </p>
                                                <div className="bg-gray-50 p-3 rounded-xl text-xs font-mono text-gray-800">
                                                    <strong>Certificate Text:</strong> &ldquo;Subject to no exclusive right over the device of &lsquo;TOOTH&rsquo; and &lsquo;CROSS SYMBOL&rsquo; appearing in the label.&rdquo;
                                                </div>
                                            </div>

                                            {/* TYPE 4 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="bg-[#6E5E93] text-white text-[11px] font-black uppercase px-3 py-1 rounded-full">Category 4</span>
                                                    <span className="text-xs text-gray-500 font-semibold">Numerals &amp; Letters</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Disclaimers on Single Letters &amp; Numbers</h3>
                                                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                                                    Applied to standard single letters or general numerals (e.g., &ldquo;24/7&rdquo;, &ldquo;100%&rdquo;, &ldquo;A1&rdquo;, &ldquo;360&rdquo;, &ldquo;99&rdquo;) unless they possess verified stylized copyright distinctiveness.
                                                </p>
                                                <div className="bg-gray-50 p-3 rounded-xl text-xs font-mono text-gray-800">
                                                    <strong>Certificate Text:</strong> &ldquo;Registration shall give no right to the exclusive use of the numeral &lsquo;100&rsquo; separately.&rdquo;
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: HOW TO RESPOND TO A DISCLAIMER */}
                                    <section id="respond-to-disclaimer" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileLines} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            How to Respond to Disclaimer Objections
                                        </h2>
                                        <p className="mb-6">
                                            During the trademark examination stage or during an official <Link href="/trademark-hearing-video-conferencing-procedure-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark hearing</Link>, an examiner or Hearing Officer may propose a disclaimer condition as a prerequisite for advertisement in the Trade Marks Journal.
                                        </p>
                                        <p className="mb-6">
                                            How should you and your trademark attorney respond?
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-green-50/60 border border-green-200 rounded-2xl p-6">
                                                <div className="flex items-center mb-3">
                                                    <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5 text-green-600 mr-2" />
                                                    <h3 className="text-base font-bold text-green-950 m-0">When to Accept the Disclaimer</h3>
                                                </div>
                                                <ul className="text-xs text-green-900 space-y-2 m-0 pl-4 list-disc">
                                                    <li>The disclaimed term is blatantly descriptive or generic to the industry.</li>
                                                    <li>Your primary brand identity is an arbitrary coined word (e.g., &ldquo;ZOMATO CAFE&rdquo; disclaiming &ldquo;CAFE&rdquo;).</li>
                                                    <li>Accepting the condition resolves examination objections immediately without costly appellate delays.</li>
                                                    <li>Your composite logo gains full statutory registration across India.</li>
                                                </ul>
                                            </div>

                                            <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6">
                                                <div className="flex items-center mb-3">
                                                    <FontAwesomeIcon icon={faCircleExclamation} className="w-5 h-5 text-amber-600 mr-2" />
                                                    <h3 className="text-base font-bold text-amber-950 m-0">When to Contest the Disclaimer</h3>
                                                </div>
                                                <ul className="text-xs text-amber-900 space-y-2 m-0 pl-4 list-disc">
                                                    <li>The word is suggestive or arbitrary, not directly descriptive of the goods.</li>
                                                    <li>You have established extensive prior commercial user backed by a <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">User Affidavit under Rule 25</Link>.</li>
                                                    <li>The term has acquired immense secondary meaning and exclusive customer recognition.</li>
                                                    <li>Accepting the disclaimer would leave the core essence of your word mark unprotected.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p className="mb-6">
                                            <strong>Removing Disclaimers in the Future:</strong> A disclaimer condition entered on a granted certificate cannot be removed retroactively via Form TM-M. If your brand grows and that particular word acquires standalone secondary distinctiveness, the correct statutory procedure is to file a fresh standalone <Link href="/word-mark-vs-device-mark-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">word mark application</Link> on Form TM-A with audited turnover certificates, advertising receipts, and nationwide user proof.
                                        </p>
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

                                    {/* SECTION 9: ACTIONABLE COMPLIANCE CHECKLIST */}
                                    <section id="strategic-checklist" className="scroll-mt-32 pt-16">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-green-600" />
                                            Trademark Disclaimer Action Checklist
                                        </h2>
                                        <p className="mb-6">
                                            When auditing your trademark registration certificate or formulating an enforcement campaign against infringers, follow this 7-point strategic checklist:
                                        </p>
                                        <ul className="list-none space-y-4 mb-8 not-prose">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span className="text-sm text-gray-700"><strong>Inspect Form TM-RG Certificate:</strong> Examine the &ldquo;Condition &amp; Limitations&rdquo; column to identify any disclaimed words, graphics, or geographical terms.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span className="text-sm text-gray-700"><strong>Identify Your Dominant Distinctive Mark:</strong> Isolate the non-disclaimed coined, arbitrary, or stylized element that serves as your primary brand identifier.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span className="text-sm text-gray-700"><strong>Apply Whole Mark Evaluation:</strong> Evaluate competitor infringements against your composite label as an indivisible unit under Section 17(1).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span className="text-sm text-gray-700"><strong>Avoid Groundless Legal Threats:</strong> Do not issue cease-and-desist notices against competitors purely for using the disclaimed generic word in a different logo format.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span className="text-sm text-gray-700"><strong>Preserve Passing Off Evidence:</strong> Archive sales invoices, promotional expenditures, and social media engagement to support common law passing off claims under Section 27(2).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span className="text-sm text-gray-700"><strong>Execute Multi-Mark Protection Strategy:</strong> Register separate word marks and standalone device marks under Section 15 to secure comprehensive protection.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span className="text-sm text-gray-700"><strong>Maintain Decennial Renewal Docket:</strong> Ensure your registered trademark is renewed every 10 years by filing <Link href="/how-to-renew-a-trademark" className="text-[rgb(110,94,147)] hover:underline font-medium">Form TM-R</Link> on time.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20 not-prose">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Strategic Brand Defense
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand with Precision
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Need clarity on your Trademark Certificate conditions or facing infringement issues? Consult certified IP attorneys to evaluate your brand rights under Section 17 and enforce your intellectual property nationwide.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult IP Attorney Now</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Certified IP Advocates • Supreme Court &amp; High Court IPD Representation • 100% Confidential
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        {/* RIGHT SIDEBAR */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            {/* About Author */}
                            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-24 h-24 rounded-full mb-4 shadow-md object-cover" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h3>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Senior Trademark &amp; IP Attorney</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in complex trademark prosecution, Section 17 anti-dissection compliance, and High Court IPD litigation under the Trade Marks Act, 1999.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Got Certificate Conditions?</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Have your trademark registration certificate reviewed by expert attorneys to understand your exact legal enforcement boundaries.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        Get Certificate Audit
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
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Infringement vs Passing Off</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Word Mark vs Device Mark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-is-associated-trademark-in-india-section-16" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faAward} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Associated Trademarks</span>
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
                                        <Link href="/trademark-hearing-video-conferencing-procedure-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Show Cause Hearing</span>
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
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
