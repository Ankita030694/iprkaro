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
    faInfoCircle,
    faPhone,
    faBook,
    faPalette,
    faCode,
    faCertificate,
    faGavel,
    faLayerGroup
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Difference: Trademark vs Copyright Registration | IPR Karo",
    description: validateAndNormalizeDescription(
        "Compare trademark and copyright registration in India. Understand legal scope, duration, registration process, costs, and dual protection for logos.",
        "app/difference-between-trademark-registration-and-copyright-registration/page.tsx"
    ),
    keywords: [
        "difference between trademark registration and copyright registration",
        "trademark vs copyright registration India",
        "trademark and copyright differences",
        "trade marks act 1999 vs copyright act 1957",
        "section 45 copyright act tm-c certificate",
        "can logo be trademark and copyright",
        "software copyright vs trademark India",
        "brand name protection vs artistic work",
        "ip registration difference India"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/difference-between-trademark-registration-and-copyright-registration",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Difference: Trademark vs Copyright Registration | IPR Karo",
        description: "Compare trademark and copyright registration in India. Understand legal scope, duration, registration process, costs, and dual protection for logos.",
        url: "https://www.iprkaro.com/difference-between-trademark-registration-and-copyright-registration",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/difference-between-trademark-registration-and-copyright-registration.png",
                width: 1200,
                height: 630,
                alt: "Difference Between Trademark Registration and Copyright Registration",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Difference: Trademark vs Copyright Registration | IPR Karo",
        description: "Compare trademark and copyright registration in India. Understand legal scope, duration, registration process, costs, and dual protection for logos.",
        images: ["https://www.iprkaro.com/images/og/difference-between-trademark-registration-and-copyright-registration.jpg"],
    }
};

const faqs = [
    {
        question: "What is the fundamental difference between trademark and copyright?",
        answer: "A trademark protects commercial brand identifiers like names, logos, and taglines used to distinguish goods or services in commerce under the Trade Marks Act, 1999. A copyright protects original creative expressions like books, software code, music, films, and artwork under the Copyright Act, 1957."
    },
    {
        question: "Can a company logo have both trademark and copyright protection in India?",
        answer: "Yes. A company logo can be protected as an artistic work under the Copyright Act, 1957 and as a device mark under the Trade Marks Act, 1999. This dual protection safeguards both the artistic design globally and the exclusive commercial right to use it on specified goods or services."
    },
    {
        question: "Does copyright protection last longer than trademark protection?",
        answer: "Copyright lasts for the author's lifetime plus 60 years and cannot be renewed once it expires. A trademark is valid for 10 years at a time but can be renewed indefinitely every 10 years upon payment of renewal fees, offering perpetual commercial protection."
    },
    {
        question: "Is registration mandatory to protect trademark and copyright in India?",
        answer: "Registration is not strictly mandatory for copyright, as rights arise automatically upon work creation, nor for trademarks, which enjoy common law passing-off protection. However, statutory registration provides a government certificate serving as prima facie evidence in court and grants statutory infringement remedies."
    },
    {
        question: "What is a Section 45 Search Certificate from the Trademark Registry?",
        answer: "Under Section 45 of the Copyright Act, 1957, if an applicant seeks copyright registration for an artistic work used or capable of being used on goods or services, they must first obtain a Search Certificate (Form TM-C) from the Trade Marks Registry confirming no conflicting marks exist."
    },
    {
        question: "Can I copyright my business name or tagline instead of trademarking it?",
        answer: "No. The Copyright Office does not protect single words, short business names, slogans, or titles because they do not constitute substantial literary works. Commercial names and taglines must be registered as trademarks with the Trade Marks Registry."
    },
    {
        question: "How is computer software protected under Indian intellectual property law?",
        answer: "Computer software source code and object code are protected as literary works under Section 2(o) of the Copyright Act, 1957. Meanwhile, the software's commercial brand name, product title, and mobile app icon are registered as trademarks under Class 9 and Class 42."
    },
    {
        question: "Which is more affordable to register in India: a trademark or a copyright?",
        answer: "Copyright registration is generally more affordable, with government statutory fees starting at ₹500 for literary, software, or musical works. Trademark registration government fees are ₹4,500 per class for individuals, startups, and MSMEs, or ₹9,000 for standard enterprises."
    }
];

const tocSections = [
    { id: "quick-comparison", title: "Key Differences" },
    { id: "what-is-trademark", title: "What Is a Trademark?" },
    { id: "what-is-copyright", title: "What Is a Copyright?" },
    { id: "core-differences", title: "Comparison Table" },
    { id: "scope-and-subject", title: "Protection Scope" },
    { id: "duration-and-renewal", title: "Duration & Renewal" },
    { id: "dual-protection-logos", title: "Logo Dual Protection" },
    { id: "registration-workflow", title: "Registration Process" },
    { id: "infringement-remedies", title: "Infringement & Remedies" },
    { id: "decision-guide", title: "Which One Do You Need?" },
    { id: "filing-checklist", title: "Filing Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Final Takeaway" },
];

export default function DifferenceBetweenTrademarkAndCopyrightRegistrationPage() {
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
        "headline": "Difference Between Trademark Registration and Copyright Registration in India",
        "description": "Understand key legal differences between trademark registration and copyright registration in India. Compare governing laws, protection scope, validity, costs, and dual protection for logos.",
        "image": "https://www.iprkaro.com/images/og/difference-between-trademark-registration-and-copyright-registration.png",
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
            "@id": "https://www.iprkaro.com/difference-between-trademark-registration-and-copyright-registration"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Difference: Trademark vs Copyright Registration | IPR Karo",
        "url": "https://www.iprkaro.com/difference-between-trademark-registration-and-copyright-registration",
        "description": "Compare trademark and copyright registration in India. Understand legal scope, duration, registration process, costs, and dual protection for logos.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/difference-between-trademark-registration-and-copyright-registration#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/difference-between-trademark-registration-and-copyright-registration#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Trademark", "item": "https://www.iprkaro.com/trademark-registration-india" },
            { "@type": "ListItem", "position": 3, "name": "Difference Between Trademark and Copyright Registration", "item": "https://www.iprkaro.com/difference-between-trademark-registration-and-copyright-registration" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "IP Asset Protection Workflow: Trademark vs Copyright",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Identify whether your asset is a commercial identifier or creative work." },
            { "@type": "ListItem", "position": 2, "name": "Conduct a clearance search on the IP India trademark registry." },
            { "@type": "ListItem", "position": 3, "name": "Determine if your artistic logo requires a Section 45 TM-C Search Certificate." },
            { "@type": "ListItem", "position": 4, "name": "Classify goods/services across Nice Classes 1 to 45 for trademark protection." },
            { "@type": "ListItem", "position": 5, "name": "File Form TM-A with the Trade Marks Registry for brand marks." },
            { "@type": "ListItem", "position": 6, "name": "File Form XIV with the Copyright Office for creative and software works." },
            { "@type": "ListItem", "position": 7, "name": "Respond to examination objections or public objection waiting periods." },
            { "@type": "ListItem", "position": 8, "name": "Obtain statutory Registration Certificates and establish active brand monitoring." }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }} />

            {/* HERO */}
            <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
                <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
                        <div className="text-left mt-8 lg:mt-0 w-full">
                            <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                                <FontAwesomeIcon icon={faScaleBalanced} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Intellectual Property Rights Comparison</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Difference Between <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Trademark Registration</span> and Copyright Registration in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                Uncover the legal, commercial, and practical differences between trademark registration and copyright registration under Indian law. Learn how the Trade Marks Act, 1999 safeguards your brand identity, business names, slogans, and market goodwill, while the Copyright Act, 1957 protects original literary works, software source code, music, films, and artistic creations. Understand when your enterprise needs trademark exclusivity, copyright ownership, or dual registration for maximum asset protection.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 10 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Legal IP Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/trademark-search" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Start Trademark Search <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/difference-between-trademark-registration-and-copyright-registration.png"
                                    alt="Difference between trademark registration and copyright registration in India"
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
                        { label: "Home", href: "/" },
                        { label: "Trademark", href: "/trademark-registration-india" },
                        { label: "Difference Between Trademark and Copyright Registration", href: "/difference-between-trademark-registration-and-copyright-registration" }
                    ]} />
                </div>
            </div>

            {/* MAIN LAYOUT */}
            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">

                        {/* LEFT SIDEBAR (DESKTOP TOC) */}
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Table of Contents</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <main className="min-w-0">
                            {/* MOBILE TOC */}
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content">
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    {/* Author Row */}
                                    <div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose">
                                        <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 m-0">Written by <Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Trademark Research Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: QUICK ANSWER */}
                                    <section id="quick-comparison" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Key Differences at a Glance
                                        </h2>

                                        {/* QUICK ANSWER BOX */}
                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                What is the difference between trademark registration and copyright registration? Trademark registration protects commercial identifiers—such as brand names, logos, slogans, and trade dress—that distinguish goods or services in the marketplace under the Trade Marks Act, 1999. In contrast, copyright registration protects original creative expressions—such as literary works, software source code, music, films, and artistic drawings—under the Copyright Act, 1957. While trademarks can be renewed indefinitely every 10 years to protect brand goodwill, copyright lasts for the author&apos;s lifetime plus 60 years and protects creative originality.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Both trademarks and copyrights are pillars of modern Intellectual Property Rights (IPR) in India. However, they serve fundamentally different commercial and legal purposes. Confusing the two often causes entrepreneurs to file under the wrong registry, leaving their core brand identity or technological assets vulnerable to infringement and competitors.
                                        </p>
                                        <p className="mb-6">
                                            A trademark guards your brand reputation in the market so customers know exactly who made the product. A copyright rewards authors, coders, and artists by granting them exclusive legal rights over how their original creative content is reproduced, published, adapted, or distributed.
                                        </p>
                                    </section>

                                    {/* SECTION 2: WHAT IS TRADEMARK */}
                                    <section id="what-is-trademark" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What Is Trademark Registration?
                                        </h2>
                                        <p className="mb-6">
                                            Under Section 2(1)(zb) of the <Link href="/trademark-registration-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Trade Marks Act, 1999</Link>, a trademark is defined as a visual mark capable of being represented graphically and capable of distinguishing the goods or services of one enterprise from those of others.
                                        </p>
                                        <p className="mb-6">
                                            Trademarks represent commercial goodwill and market source. They protect words, letters, numerals, device marks (logos), combinations of colors, the shape of goods, packaging (trade dress), slogans, and sound marks. When you obtain a trademark registration certificate from the Trade Marks Registry (CGPDTM), you earn the exclusive statutory right to use the registered trademark symbol (&reg;) across the classes in which your mark is filed.
                                        </p>
                                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-600 mr-2" />
                                                Core Examples of Trademarks
                                            </h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Brand Names & Wordmarks:</strong> &ldquo;IPR Karo&rdquo;, &ldquo;Tata&rdquo;, &ldquo;Infosys&rdquo;.</li>
                                                <li><strong>Brand Slogans & Taglines:</strong> &ldquo;Just Do It&rdquo;, &ldquo;Connecting People&rdquo;.</li>
                                                <li><strong>Logos & Device Marks:</strong> Nike&apos;s swoosh, Apple&apos;s bitten apple logo.</li>
                                                <li><strong>Product Packaging & Shape Marks:</strong> Distinctive contours of the Coca-Cola contour bottle.</li>
                                                <li><strong>Sound Marks:</strong> The signature Netflix sonic chime or Intel chime.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 3: WHAT IS COPYRIGHT */}
                                    <section id="what-is-copyright" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBook} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            What Is Copyright Registration?
                                        </h2>
                                        <p className="mb-6">
                                            Governed by the <strong>Copyright Act, 1957</strong>, copyright is a bundle of exclusive legal rights granted to creators of original literary, dramatic, musical, and artistic works, cinematographic films, and sound recordings. Copyright protects the specific tangible expression of an idea, rather than the abstract idea itself.
                                        </p>
                                        <p className="mb-6">
                                            While copyright protection automatically vests in an author the moment an original work is created and fixed in a tangible medium, official copyright registration with the Copyright Office (Department for Promotion of Industry and Internal Trade) provides an indispensable certificate of registration (Extract from the Register of Copyrights, Form ROC). This certificate acts as prima facie evidence in courts of law under Section 48 of the Copyright Act.
                                        </p>
                                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-purple-600 mr-2" />
                                                Core Examples of Copyrightable Works
                                            </h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Literary Works:</strong> Books, research papers, marketing whitepapers, articles, and compilations.</li>
                                                <li><strong>Software Code:</strong> Source code, object code, system scripts, and database architectures.</li>
                                                <li><strong>Artistic Works:</strong> Original paintings, graphic illustrations, photographs, architectural plans, and logo artwork.</li>
                                                <li><strong>Cinematographic & Audiovisual:</strong> Explainer videos, short films, documentaries, and YouTube video productions.</li>
                                                <li><strong>Musical Works & Sound Recordings:</strong> Audio tracks, podcast episodes, voice recordings, and musical scores.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    {/* SECTION 4: DETAILED COMPARISON TABLE */}
                                    <section id="core-differences" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Comprehensive Legal Comparison
                                        </h2>
                                        <p className="mb-6">
                                            The table below highlights the crucial differences between trademark registration and copyright registration under Indian statutes, regulatory practices, and commercial enforcement frameworks:
                                        </p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Legal Parameter</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-[#6E5E93] uppercase">Trademark Registration</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-indigo-900 uppercase">Copyright Registration</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-gray-900">Primary Objective</td>
                                                        <td className="px-6 py-4">Protects brand identity and prevents consumer confusion in trade.</td>
                                                        <td className="px-6 py-4">Protects original creative expression and rewards authors/creators.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-bold text-gray-900">Governing Statute</td>
                                                        <td className="px-6 py-4">Trade Marks Act, 1999</td>
                                                        <td className="px-6 py-4">Copyright Act, 1957</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-gray-900">Regulatory Authority</td>
                                                        <td className="px-6 py-4">Trade Marks Registry / CGPDTM (Ministry of Commerce)</td>
                                                        <td className="px-6 py-4">Copyright Office (DPIIT, Ministry of Commerce)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-bold text-gray-900">Protected Elements</td>
                                                        <td className="px-6 py-4">Words, brand names, logos, slogans, trade dress, sound marks.</td>
                                                        <td className="px-6 py-4">Books, articles, software code, illustrations, songs, films.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-gray-900">Classification System</td>
                                                        <td className="px-6 py-4">45 Nice Classes (Classes 1–34 Goods, Classes 35–45 Services).</td>
                                                        <td className="px-6 py-4">6 Categories (Literary, Artistic, Dramatic, Musical, Sound, Film).</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-bold text-gray-900">Validity & Term</td>
                                                        <td className="px-6 py-4 text-green-700 font-semibold">10 years; renewable indefinitely every 10 years.</td>
                                                        <td className="px-6 py-4 text-indigo-700 font-semibold">Author&apos;s lifetime + 60 years; cannot be renewed.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-gray-900">Registration Requirement</td>
                                                        <td className="px-6 py-4">Must be distinctive; prior search and examination required.</td>
                                                        <td className="px-6 py-4">Must be original; exists upon creation; registered for proof.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-bold text-gray-900">Legal Symbols</td>
                                                        <td className="px-6 py-4">&trade; (application pending), &reg; (officially registered).</td>
                                                        <td className="px-6 py-4">&copy; (copyright claimed or registered).</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-gray-900">Statutory Govt Fees</td>
                                                        <td className="px-6 py-4">₹4,500 (Individual/MSME) / ₹9,000 (Companies) per class.</td>
                                                        <td className="px-6 py-4">₹500 to ₹2,000 depending on the artistic/literary category.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-bold text-gray-900">Commercial Logo Nuance</td>
                                                        <td className="px-6 py-4">Protects commercial badge of origin for target goods/services.</td>
                                                        <td className="px-6 py-4">Requires Section 45 TM-C Search Certificate if used in commerce.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 5: PROTECTION SCOPE */}
                                    <section id="scope-and-subject" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLayerGroup} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Subject Matter & Protection Scope
                                        </h2>
                                        <p className="mb-6">
                                            The scope of legal protection defines what competitors can and cannot do under each framework:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-6">
                                                <h3 className="text-lg font-bold text-[#6E5E93] mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5 mr-2" />
                                                    Trademark Scope
                                                </h3>
                                                <p className="text-sm text-gray-700 mb-3">
                                                    Trademark protection operates on a <strong>class-specific principle</strong> using the international Nice Classification system (45 classes). A trademark registered for footwear (Class 25) does not automatically block a third party from using the same word for computer software (Class 9), unless the mark has achieved &ldquo;well-known trademark&rdquo; status under Section 11(2) of the Act.
                                                </p>
                                                <p className="text-sm text-gray-700">
                                                    Trademarks prevent competitor confusion, deceptive similarity, and deceptive imitation. You can check classification overlap using our <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>.
                                                </p>
                                            </div>

                                            <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-6">
                                                <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center">
                                                    <FontAwesomeIcon icon={faPalette} className="w-5 h-5 mr-2" />
                                                    Copyright Scope
                                                </h3>
                                                <p className="text-sm text-gray-700 mb-3">
                                                    Copyright protection operates on a <strong>universal, cross-industry basis</strong>. Once your original book, software codebase, or vector illustration is protected under copyright, no one can copy, reproduce, translate, or commercially distribute your creative work in any industry or sector without authorization.
                                                </p>
                                                <p className="text-sm text-gray-700">
                                                    However, copyright does not protect single words, titles, brand names, or functional business systems. Anyone is free to create another software solving the same problem, provided they write original code.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: DURATION AND RENEWAL */}
                                    <section id="duration-and-renewal" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCertificate} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Duration, Renewal & Ownership Rules
                                        </h2>
                                        <p className="mb-6">
                                            A major practical difference between trademark and copyright lies in how long rights endure and how ownership is sustained over time:
                                        </p>
                                        <div className="space-y-4 mb-8">
                                            <div className="border border-gray-200 rounded-xl p-5 hover:border-[rgb(110,94,147)] transition-colors">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Trademark Duration: Indefinitely Renewable</h3>
                                                <p className="text-sm text-gray-700">
                                                    A registered trademark in India is valid for <strong>10 years</strong> from the application filing date. It can be renewed every 10 years indefinitely by submitting Form TM-R with the statutory renewal fee. Famous marks like Coca-Cola or Tata have maintained trademark exclusivity for over a century through timely renewals. If not renewed, the mark enters an &ldquo;expired&rdquo; status and can be abandoned.
                                                </p>
                                            </div>
                                            <div className="border border-gray-200 rounded-xl p-5 hover:border-[rgb(110,94,147)] transition-colors">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Copyright Duration: Lifetime + 60 Years</h3>
                                                <p className="text-sm text-gray-700">
                                                    For published literary, dramatic, musical, and artistic works, copyright protection lasts for the <strong>entire lifetime of the author plus 60 years</strong> from the beginning of the calendar year following the author&apos;s death. For cinematographic films, sound recordings, photographs, and works published posthumously, the term is 60 years from the date of publication. Once this statutory period lapses, the work enters the public domain and cannot be renewed.
                                                </p>
                                            </div>
                                            <div className="border border-gray-200 rounded-xl p-5 hover:border-[rgb(110,94,147)] transition-colors">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Work Made for Hire & Ownership Transfer</h3>
                                                <p className="text-sm text-gray-700">
                                                    In copyright law, under Section 17 of the Copyright Act, the author is the first owner unless created in the course of employment under a contract of service. For independent freelancers or agencies designing your company logo or coding software, ownership remains with the contractor unless explicitly assigned in writing under Section 19. Trademarks, on the other hand, are applied for directly in the name of the commercial enterprise or proprietor.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: LOGO DUAL PROTECTION & TM-C */}
                                    <section id="dual-protection-logos" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faPalette} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Dual Protection for Logos & TM-C NOC
                                        </h2>
                                        <p className="mb-6">
                                            One of the most frequent legal intersections between trademark and copyright occurs when protecting a company logo, brand mascot, or packaging artwork. A stylized logo is simultaneously an <strong>artistic work</strong> and a <strong>commercial brand mark</strong>.
                                        </p>
                                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                                            <h3 className="text-base font-bold text-amber-900 mb-2 flex items-center">
                                                <FontAwesomeIcon icon={faInfoCircle} className="w-5 h-5 text-amber-600 mr-2" />
                                                Section 45 of the Copyright Act: Mandatory Search Certificate
                                            </h3>
                                            <p className="text-sm text-amber-800 m-0">
                                                Under Section 45(1) of the Copyright Act, 1957, if an applicant applies for copyright registration of an artistic work which is used or capable of being used in relation to any goods or services, the application must be accompanied by a <strong>Search Certificate (Form TM-C)</strong> issued by the Registrar of Trade Marks certifying that no identical or deceptively similar trademark has been registered or applied for by another person.
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Why do growing enterprises choose dual protection?
                                        </p>
                                        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                                            <li><strong>Trademark Registration (Form TM-A):</strong> Protects your logo as an exclusive badge of commercial origin for your specific products and services, empowering you to block marketplace competitors.</li>
                                            <li><strong>Copyright Registration (Form XIV):</strong> Protects the underlying graphic art, color scheme, and typography globally, preventing competitors in unrelated industries from copying your visual design.</li>
                                            <li><strong>Defense Against Infringement:</strong> Holding both certificates gives you statutory standing under both the Trade Marks Act, 1999 and the Copyright Act, 1957.</li>
                                        </ul>
                                    </section>

                                    {/* SECTION 8: REGISTRATION PROCESS */}
                                    <section id="registration-workflow" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Registration Process & Timelines
                                        </h2>
                                        <p className="mb-6">
                                            Both registration procedures are handled electronically through government web portals, but their statutory scrutiny steps differ significantly:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                                                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b">
                                                    Trademark Registration Flow
                                                </h3>
                                                <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
                                                    <li><strong>Pre-Filing Clearance Search:</strong> Check the IP India portal to avoid <Link href="/why-search-trademark-before-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 11 similarity conflicts</Link>.</li>
                                                    <li><strong>Application Filing (Form TM-A):</strong> File online to immediately receive the trademark application number and use &trade;.</li>
                                                    <li><strong>Formalities Check & Examination:</strong> Examiner issues an Examination Report under Sections 9 and 11.</li>
                                                    <li><strong>Objection Reply & Hearing:</strong> File a legal response within 30 days if objections are raised.</li>
                                                    <li><strong>Journal Publication:</strong> Advertised in the Trade Marks Journal for a 4-month public opposition window.</li>
                                                    <li><strong>Registration Certificate:</strong> Issued if no opposition is filed (typically 6–18 months).</li>
                                                </ol>
                                            </div>

                                            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                                                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b">
                                                    Copyright Registration Flow
                                                </h3>
                                                <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
                                                    <li><strong>Work Preparation:</strong> Prepare manuscript, source code, or artwork copies along with author NOCs.</li>
                                                    <li><strong>TM-C Certificate (If Commercial Art):</strong> Obtain Search Certificate from Trade Marks Registry under Section 45.</li>
                                                    <li><strong>Application Filing (Form XIV):</strong> Submit on the official Copyright e-filing portal with fees.</li>
                                                    <li><strong>Mandatory 30-Day Waiting Period:</strong> Statutory window for third parties to submit objections to the Registrar.</li>
                                                    <li><strong>Scrutiny & Discrepancy Notice:</strong> Examiner reviews originality and procedural compliance.</li>
                                                    <li><strong>ROC Certificate Issued:</strong> Extract from the Register of Copyrights granted (typically 2–6 months).</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: INFRINGEMENT AND REMEDIES */}
                                    <section id="infringement-remedies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Infringement Penalties & Remedies
                                        </h2>
                                        <p className="mb-6">
                                            When a competitor unlawfully uses your intellectual property, both statutes empower you to seek stringent civil and criminal remedies through District Courts and Commercial Courts in India:
                                        </p>
                                        <div className="space-y-4 mb-8">
                                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Civil Injunctions & Damages</h3>
                                                <p className="text-sm text-gray-700">
                                                    Under both the Trade Marks Act (Section 135) and Copyright Act (Section 55), the owner can file a civil suit for an interim injunction (stay order), permanent injunction, delivery up of infringing goods, and rendition of profits or punitive damages. Learn more about <Link href="/civil-vs-criminal-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">civil vs criminal infringement remedies in India</Link>.
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                                <h3 className="text-base font-bold text-gray-900 mb-2">Criminal Sanctions & Police Raids</h3>
                                                <p className="text-sm text-gray-700">
                                                    Both statutes contain powerful criminal provisions. Under Section 103/104 of the Trade Marks Act and Section 63/64 of the Copyright Act, intentional infringement is a cognizable offense punishable with imprisonment for a term not less than <strong>6 months up to 3 years</strong>, along with fines ranging from ₹50,000 to ₹2,00,000. Police officers are empowered to conduct search and seizure operations without a prior court warrant upon obtaining the Registrar&apos;s opinion.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: WHICH DO YOU NEED */}
                                    <section id="decision-guide" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Which Registration Does Your Business Need?
                                        </h2>
                                        <p className="mb-6">
                                            Use this decision framework to determine which registration protects each asset in your enterprise:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                            <div className="bg-white border-2 border-[rgb(110,94,147)]/30 rounded-2xl p-6 shadow-sm">
                                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-[#6E5E93]">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Register a Trademark</h3>
                                                <p className="text-xs text-gray-600 mb-4 font-medium uppercase tracking-wider">Commercial Identifiers</p>
                                                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                                                    <li>Company name & trading style</li>
                                                    <li>Brand names & product titles</li>
                                                    <li>Catchy marketing slogans</li>
                                                    <li>Domain names used as brands</li>
                                                    <li>Distinctive packaging shapes</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm">
                                                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-700">
                                                    <FontAwesomeIcon icon={faBook} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Register a Copyright</h3>
                                                <p className="text-xs text-gray-600 mb-4 font-medium uppercase tracking-wider">Creative Content</p>
                                                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                                                    <li>Software source code & APIs</li>
                                                    <li>Website text & marketing articles</li>
                                                    <li>Training videos & audio tracks</li>
                                                    <li>Books, eBooks & whitepapers</li>
                                                    <li>Architectural drawings & blueprints</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm">
                                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-700">
                                                    <FontAwesomeIcon icon={faLayerGroup} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">Register Both</h3>
                                                <p className="text-xs text-gray-600 mb-4 font-medium uppercase tracking-wider">Hybrid Visual Assets</p>
                                                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                                                    <li>Stylized corporate logos</li>
                                                    <li>Brand mascots & cartoon avatars</li>
                                                    <li>Distinctive artistic packaging design</li>
                                                    <li>Game character designs & UI badges</li>
                                                    <li>Signature graphical iconography</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FILING CHECKLIST */}
                                    <section id="filing-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            IP Registration Decision Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Asset Classification:</strong> Categorized each asset as a commercial identifier (brand name, slogan) or creative work (content, code, art).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Pre-Filing Trademark Clearance:</strong> Executed an exact, phonetic, and similarity search on the IP India registry across target Nice classes.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Section 45 Assessment:</strong> Verified whether artistic logos require a Search Certificate (Form TM-C) prior to copyright filing.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Authorship & Assignment Chain:</strong> Secured written copyright assignments and NOCs from freelance designers and software developers.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Applicant Entity Status:</strong> Claimed 50% statutory fee concessions by providing MSME / Udyam or Startup India recognition certificates.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Dual Filing Strategy:</strong> Initiated trademark protection for commercial market exclusivity and copyright for universal artistic defense.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span><strong>Professional Legal Review:</strong> Engaged experienced IP attorneys to handle classification, objections, and registry hearings.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 12: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
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

                                    {/* SECTION 13: FINAL TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Final Takeaway & Legal Advice
                                        </h2>
                                        <p className="mb-6">
                                            Choosing between trademark registration and copyright registration is never an either/or dilemma for growing companies. A robust intellectual property portfolio deploys both instruments strategically: trademark registration to monopolize brand names, slogans, and customer loyalty in commerce, alongside copyright registration to prevent unauthorized reproduction of software code, marketing literature, and artistic designs.
                                        </p>
                                        <p className="mb-6">
                                            For artistic logos and mascots, securing dual protection under both the Trade Marks Act, 1999 and the Copyright Act, 1957 provides airtight legal defense against copycats across India and international jurisdictions. To consult official government records or file applications, visit the official <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India Portal</a> and the Copyright Office portal. For professional clearance, TM-C certificates, and end-to-end filing, consult the certified IP attorneys at IPR Karo.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                {/* Small Eyebrow */}
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Comprehensive IP Protection
                                                    </span>
                                                </div>

                                                {/* Heading */}
                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand and Creative Assets Today
                                                </h3>

                                                {/* Description */}
                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Consult our certified IP attorneys to determine the right combination of trademark and copyright protection for your business names, software, and logos in India.
                                                </p>

                                                {/* CTA Buttons */}
                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    {/* Primary CTA */}
                                                    <Link
                                                        href="/trademark-search"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Start Free Trademark Search</span>
                                                    </Link>

                                                    {/* Phone CTA */}
                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                {/* Trust / Supporting Text */}
                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Trade Marks Act 1999 • Copyright Act 1957 • Section 45 Search Certificate • End-to-End Filing
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
                                <p className="text-sm text-gray-600 mb-4 font-medium">Trademark Research Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                                    Rahul specializes in intellectual property strategy, trademark clearance, and dual brand-copyright asset management for startups and expanding enterprises across India.
                                </p>
                            </div>

                            {/* Card 1 */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Check Your Trademark</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Use our intelligent tools to analyze potential brand conflicts before filing your application.</p>
                                <Link href="/trademark-search" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        Start Trademark Search
                                    </button>
                                </Link>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-registration-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Registration Services</span>
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
                                        <Link href="/why-search-trademark-before-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Why Search First</span>
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
