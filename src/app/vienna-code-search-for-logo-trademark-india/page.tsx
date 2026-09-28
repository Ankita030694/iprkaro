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
    faShapes,
    faEye,
    faLayerGroup,
    faDiagramProject,
    faCompass,
    faClock,
    faGavel,
    faGlobe,
    faPalette
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Vienna Code Search for Logo Trademark on IP India Portal",
    description: validateAndNormalizeDescription(
        "Master Vienna Code search for logo trademarks on the IP India portal. Learn 6-digit classification, Rule 33 codification, and visual clearance methods.",
        "app/vienna-code-search-for-logo-trademark-india/page.tsx"
    ),
    keywords: [
        "vienna code search trademark india",
        "how to find vienna code for logo",
        "vienna classification device mark search ip india",
        "rule 33 trade marks rules 2017 vienna code",
        "vienna code search for logo trademark on ip india portal",
        "send to vienna codification status meaning",
        "vienna classification list india",
        "device mark search ip india online portal",
        "trademark visual search india",
        "section 11 relative grounds logo conflict"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/vienna-code-search-for-logo-trademark-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Vienna Code Search for Logo Trademark on IP India Portal",
        description: "Master Vienna Code search for logo trademarks on the IP India portal. Learn 6-digit classification, Rule 33 codification, and visual clearance methods.",
        url: "https://www.iprkaro.com/vienna-code-search-for-logo-trademark-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/vienna-code-search-for-logo-trademark-india.png",
                width: 1200,
                height: 630,
                alt: "Vienna Code Search for Logo Trademark on IP India Portal Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Vienna Code Search for Logo Trademark on IP India Portal",
        description: "Master Vienna Code search for logo trademarks on the IP India portal. Learn 6-digit classification, Rule 33 codification, and visual clearance methods.",
        images: ["https://www.iprkaro.com/images/og/vienna-code-search-for-logo-trademark-india.jpg"],
    }
};

const faqs = [
    {
        question: "What is a Vienna Code in Indian trademark registration?",
        answer: "A Vienna Code is a standardized 6-digit numerical classification under the international Vienna Agreement (1973) administered by WIPO. It categorizes figurative and graphical elements of logos, device marks, emblems, and labels (such as animals, geometric shapes, humans, celestial bodies, and crests) so that intellectual property offices and applicants can search and identify visually similar existing trademarks."
    },
    {
        question: "Why is a wordmark search insufficient for logo and device mark clearance?",
        answer: "Wordmark searches only scan alphanumeric text strings in the Trade Marks Registry database. If another business has registered a visually similar logo containing no words, or using an entirely different brand name (e.g., two companies using similar charging bull emblems under different brand names), a wordmark search will produce zero results. Only a Vienna Code search indexes graphical elements to detect visual collisions."
    },
    {
        question: "How is the 6-digit Vienna classification number structured?",
        answer: "The Vienna classification follows a 3-tier hierarchical structure: Category (first 2 digits), Division (middle 2 digits), and Section (last 2 digits). For example, code '03.01.08' represents Category 03 (Animals), Division 01 (Quadrupeds), and Section 08 (Dogs, wolves, foxes). When searching, it can be entered as 03.01.08 or 3.1.8 on the IP India portal."
    },
    {
        question: "What does 'Send to Vienna Codification' mean in trademark application status?",
        answer: "'Send to Vienna Codification' is a standard internal workflow status on the IP India portal. When a trademark application with a logo or device mark is filed on Form TM-A, the registry automatically routes it to the Vienna Codification division. An examiner inspects the uploaded artwork, assigns statutory Vienna codes under Rule 33, and forwards the file to the formality check and examination stages."
    },
    {
        question: "How long does the Vienna Codification stage take on the IP India portal?",
        answer: "Under normal circumstances, the Vienna Codification stage takes between 3 to 10 working days following Form TM-A e-filing. However, during periods of administrative backlog or when low-resolution, non-standard graphical files are submitted, the status may take up to 2 to 4 weeks before progressing to 'Formality Check Pass' or 'Marked for Exam'."
    },
    {
        question: "How do I search for a logo trademark on the IP India public search portal?",
        answer: "Go to ipindiaonline.gov.in, navigate to Trade Mark Public Search, and change the 'Search Type' dropdown from 'Wordmark' to 'Device Mark'. Enter your relevant Nice Class (1–45) and the 6-digit Vienna Code. You can also specify text in the 'Wordmark' field or use '%' as a wildcard to search all device marks carrying that specific graphical feature in your business class."
    },
    {
        question: "What if the Trade Marks Registry examiner assigns an incorrect Vienna Code to my logo?",
        answer: "If an examiner misclassifies your logo (e.g., assigning a bird code to an abstract floral emblem), it can lead to irrelevant citations in the Examination Report or cause third parties to miss your published mark. You can file a miscellaneous request on Form TM-M along with a representation sheet clarifying the visual elements to rectify the Vienna classification on record."
    },
    {
        question: "Can a logo trademark have multiple Vienna codes assigned to it?",
        answer: "Yes. Most composite logos contain multiple distinct visual components. For instance, a shield emblem featuring a roaring lion, a rising sun, and stylized monogram letters will be assigned three or four distinct Vienna codes: 24.01.05 (Shields), 03.01.01 (Lions), 01.03.01 (Sun), and 27.05.01 (Letters presenting a special form of writing). Comprehensive clearance requires querying each code."
    },
    {
        question: "How does Section 11 of the Trade Marks Act apply to logo similarity?",
        answer: "Under Section 11(1) of the Trade Marks Act, 1999, an application will be refused if it is identical or deceptively similar to an earlier registered or pending mark for similar goods/services. The Supreme Court of India applies the 'doctrine of overall visual impression'—if an ordinary consumer with imperfect recollection is likely to be confused by the graphical similarity, the mark faces relative grounds refusal."
    },
    {
        question: "What are the most commonly searched Vienna codes for modern startups?",
        answer: "The most frequent categories for digital startups and modern brands include Category 26 (Geometrical figures: 26.01 for circles, 26.04 for quadrilaterals, 26.05 for triangles), Category 27 (Forms of writing and monograms: 27.05 for stylized typography), Category 03 (Animals: 03.01 for quadrupeds, 03.07 for birds), and Category 24 (Heraldry: 24.01 for crests and shields)."
    }
];

const tocSections = [
    { id: "overview", title: "Vienna System Overview" },
    { id: "code-structure", title: "6-Digit Hierarchy" },
    { id: "category-table", title: "Category Cheatsheet" },
    { id: "search-methodology", title: "7-Step Search Protocol" },
    { id: "wordmark-vs-vienna", title: "Wordmark vs Device Search" },
    { id: "status-send-to-vienna", title: "Vienna Status Demystified" },
    { id: "section-11-risk", title: "Visual Conflict & Sec 11" },
    { id: "designer-checklist", title: "Designer Clearance Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Strategic Advice" },
];

export default function ViennaCodeSearchPage() {
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
        "headline": "Vienna Code Search for Logo Trademark on IP India Portal: Complete Legal Guide",
        "description": "Master Vienna Code search for logo trademarks on the IP India portal. Learn 6-digit classification, Rule 33 codification, and visual clearance methods.",
        "image": "https://www.iprkaro.com/images/og/vienna-code-search-for-logo-trademark-india.png",
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
            "@id": "https://www.iprkaro.com/vienna-code-search-for-logo-trademark-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Vienna Code Search for Logo Trademark on IP India Portal",
        "url": "https://www.iprkaro.com/vienna-code-search-for-logo-trademark-india",
        "description": "Master Vienna Code search for logo trademarks on the IP India portal. Learn 6-digit classification, Rule 33 codification, and visual clearance methods.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/vienna-code-search-for-logo-trademark-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/vienna-code-search-for-logo-trademark-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Vienna Code Search Guide", "item": "https://www.iprkaro.com/vienna-code-search-for-logo-trademark-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "7 Steps for Vienna Code Logo Trademark Search on IP India Portal",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Deconstruct Visual Artwork into Discrete Figurative Elements" },
            { "@type": "ListItem", "position": 2, "name": "Map Each Graphic Element to 6-Digit Vienna Hierarchy Codes" },
            { "@type": "ListItem", "position": 3, "name": "Access IP India Public Search and Select 'Device Mark' Mode" },
            { "@type": "ListItem", "position": 4, "name": "Execute Class-Filtered Primary Vienna Code Queries" },
            { "@type": "ListItem", "position": 5, "name": "Run Cross-Category & Composite Hybrid Wildcard Searches" },
            { "@type": "ListItem", "position": 6, "name": "Evaluate Section 11 Deceptive Visual Similarity & Color Weights" },
            { "@type": "ListItem", "position": 7, "name": "Compile Trademark Clearance Report and Risk Mitigation Strategy" }
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
                                <FontAwesomeIcon icon={faShapes} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Visual Trademark Clearance</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Vienna Code Search for <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Logo Trademark</span> on IP India Portal
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                A simple wordmark search is entirely blind to figurative artwork, emblems, monograms, and brand symbols. Under Rule 33 of the Trade Marks Rules, 2017, the Indian Trade Marks Registry classifies all device marks using the international 6-digit Vienna Codification hierarchy. Failing to conduct a thorough Vienna Code clearance search leaves your logo vulnerable to statutory objections under Section 11(1), conflicting registry citations, and costly trademark infringement battles. Discover how to identify your logo's Vienna codes, execute advanced device mark searches on IP India, and secure absolute visual exclusivity.
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
                                        <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Verified Search Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/free-ai-powered-trademark-search" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Run Free Logo Search <span className="ml-2 font-black">&rarr;</span>
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
                                    src="/images/og/vienna-code-search-for-logo-trademark-india.png"
                                    alt="Vienna Code Search for Logo Trademark on IP India Portal Clearance Guide"
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
                        { label: "Vienna Code Search for Logo Trademark", href: "/vienna-code-search-for-logo-trademark-india" }
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

                                    {/* SECTION 1: OVERVIEW */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCompass} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Understanding Vienna Classification in India</span>
                                        </h2>

                                        <p className="text-base leading-relaxed mb-6">
                                            In the realm of brand identity, a logo often carries greater commercial recall than a brand's textual name. From iconic swooshes and bitten apples to intricate crests and geometric monograms, graphical elements form the psychological core of consumer trust. However, while searching textual wordmarks is straightforward, indexing and searching purely visual designs across millions of registered trademarks presents a complex challenge.
                                        </p>

                                        <p className="text-base leading-relaxed mb-6">
                                            To solve this, intellectual property offices globally rely on the <strong>Vienna Agreement Establishing an International Classification of the Figurative Elements of Marks (1973)</strong>, administered by the World Intellectual Property Organization (WIPO). India adopted the Vienna System under <strong>Rule 33 of the Trade Marks Rules, 2017</strong>. Under this statutory mandate, whenever an applicant files a <Link href="/word-mark-vs-device-mark-trademark-india" className="text-[#6E5E93] font-bold hover:underline">Device Mark, Logo, Label, or Composite Mark</Link> on Form TM-A, the Trade Marks Registry deconstructs the artwork into standardized 6-digit numerical codes representing every graphical component.
                                        </p>

                                        {/* Quick Highlight Box */}
                                        <div className="bg-purple-50/60 border border-purple-200 rounded-2xl p-6 mb-8 not-prose">
                                            <div className="flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 text-[#6E5E93] flex-shrink-0 mt-1" />
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">The Critical Blind Spot of Wordmark Searches</h3>
                                                    <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                        A traditional trademark search looks exclusively for text strings. If Company A registers an emblem of a roaring tiger without any textual wording, and Company B searches for the brand name &quot;Apex Enterprises&quot; accompanied by an identical tiger graphic, a standard wordmark search will return <strong>zero conflicts</strong>. Conducting a Vienna Code search for Category 03 (Animals) is the <em>only</em> mechanism to unearth preexisting visual collisions before filing.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mb-8">
                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80">
                                                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mb-3">
                                                    <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-sm font-bold text-gray-900 mb-1">WIPO International Standard</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Standardized across 35+ member nations, enabling seamless international brand clearance under the Madrid Protocol.
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mb-3">
                                                    <FontAwesomeIcon icon={faGavel} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-sm font-bold text-gray-900 mb-1">Rule 33 Statutory Mandate</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Enforces mandatory figurative codification by Trade Marks Registry examiners during initial application scrutiny.
                                                </p>
                                            </div>
                                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80">
                                                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg mb-3">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-sm font-bold text-gray-900 mb-1">Section 11 Defense</h3>
                                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                                    Eliminates relative grounds objections and prevents devastating trademark infringement notices from incumbent logo owners.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 2: 6-DIGIT HIERARCHY */}
                                    <section id="code-structure" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLayerGroup} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>The 6-Digit Vienna Code Hierarchy Explained</span>
                                        </h2>

                                        <p className="text-base leading-relaxed mb-6">
                                            The Vienna Classification assigns a 6-digit numerical tag composed of three hierarchical pairs of numbers: <strong>Category</strong>, <strong>Division</strong>, and <strong>Section</strong>. Understanding this taxonomy enables legal professionals and designers to navigate the IP India database with mathematical precision.
                                        </p>

                                        {/* Visual Architecture Card */}
                                        <div className="bg-gradient-to-br from-gray-900 via-[#1A1A2E] to-gray-900 text-white p-6 md:p-8 rounded-3xl shadow-xl not-prose mb-8 border border-gray-800">
                                            <div className="text-center max-w-2xl mx-auto mb-8">
                                                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-400/30">
                                                    Hierarchical Architecture
                                                </span>
                                                <h3 className="text-xl md:text-2xl font-bold mt-3 text-white">
                                                    Anatomy of a Vienna Classification Code
                                                </h3>
                                                <p className="text-xs text-gray-300 mt-2">
                                                    Example: Code <span className="font-mono text-amber-400 font-bold">03.01.08</span> (Representing a stylized dog, wolf, or fox silhouette)
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                                                    <div className="text-3xl font-black text-purple-400 font-mono mb-1">03</div>
                                                    <div className="text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">Category (1st Tier)</div>
                                                    <p className="text-[11px] text-gray-300 m-0">
                                                        Broad subject matter grouping. Category 03 encompasses all <strong>Animals and Animal Kingdom figures</strong> (29 total categories globally).
                                                    </p>
                                                </div>

                                                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                                                    <div className="text-3xl font-black text-indigo-400 font-mono mb-1">01</div>
                                                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-200 mb-2">Division (2nd Tier)</div>
                                                    <p className="text-[11px] text-gray-300 m-0">
                                                        Intermediate biological/physical subfamily. Division 01 represents <strong>Quadrupeds (four-legged mammals)</strong>.
                                                    </p>
                                                </div>

                                                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                                                    <div className="text-3xl font-black text-amber-400 font-mono mb-1">08</div>
                                                    <div className="text-xs font-bold uppercase tracking-wider text-amber-200 mb-2">Section (3rd Tier)</div>
                                                    <p className="text-[11px] text-gray-300 m-0">
                                                        Highly granular graphic specification. Section 08 specifically indexes <strong>Dogs, wolves, and foxes</strong>.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-gray-400 font-mono">
                                                Portal Query Syntax: Enter as <span className="text-amber-300">03.01.08</span>, <span className="text-amber-300">3.1.8</span>, or <span className="text-amber-300">030108</span> depending on search mode.
                                            </div>
                                        </div>

                                        <p className="text-base leading-relaxed mb-6">
                                            A single logo mark frequently warrants <strong>multiple Vienna codes</strong>. For instance, if your brand logo depicts a golden eagle perched atop a circular shield containing geometric letterforms, the Trade Marks Registry will assign four distinct codes:
                                        </p>

                                        <ul className="space-y-3 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <span><strong>03.07.01 & 03.07.16:</strong> Birds (Eagles, falcons, raptors in flight or perched).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <span><strong>24.01.05:</strong> Shields containing other figurative elements or inscriptions.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <span><strong>26.01.01:</strong> Circles (one or more concentric circular borders).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <span><strong>27.05.01:</strong> Letters presenting a special form of writing (stylized monograms).</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 3: CATEGORY TABLE */}
                                    <section id="category-table" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Master Vienna Code Category Cheatsheet</span>
                                        </h2>

                                        <p className="text-base leading-relaxed mb-6">
                                            The Vienna Classification comprises 29 overarching categories. Below is an exhaustive reference cheatsheet detailing the most critical categories and frequent divisions encountered during Indian trademark searches:
                                        </p>

                                        <div className="overflow-x-auto not-prose mb-8 rounded-2xl border border-gray-200 shadow-sm">
                                            <table className="w-full text-left border-collapse text-sm">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 border-b border-gray-200">
                                                        <th className="p-4 font-bold">Category</th>
                                                        <th className="p-4 font-bold">Figurative Scope</th>
                                                        <th className="p-4 font-bold">Key Divisions & Common Codes</th>
                                                        <th className="p-4 font-bold">Frequent Industry Usage</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-mono font-bold text-[#6E5E93]">Cat 01</td>
                                                        <td className="p-4 font-semibold text-gray-900">Celestial Bodies & Natural Phenomena</td>
                                                        <td className="p-4 text-xs">
                                                            <strong>01.01</strong> (Stars, comets), <strong>01.03</strong> (Sun, rays), <strong>01.05</strong> (Globe, maps), <strong>01.15</strong> (Water droplets, waves)
                                                        </td>
                                                        <td className="p-4 text-xs">Fintech, Energy, Aerospace, Logistics</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-mono font-bold text-[#6E5E93]">Cat 02</td>
                                                        <td className="p-4 font-semibold text-gray-900">Human Beings & Anatomy</td>
                                                        <td className="p-4 text-xs">
                                                            <strong>02.01</strong> (Men), <strong>02.03</strong> (Women), <strong>02.05</strong> (Children), <strong>02.09</strong> (Heads, silhouettes, facial profiles)
                                                        </td>
                                                        <td className="p-4 text-xs">Cosmetics, Healthcare, Apparel, Education</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-mono font-bold text-[#6E5E93]">Cat 03</td>
                                                        <td className="p-4 font-semibold text-gray-900">Animals & Wildlife</td>
                                                        <td className="p-4 text-xs">
                                                            <strong>03.01</strong> (Lions, dogs, bears), <strong>03.02</strong> (Tigers, panthers), <strong>03.07</strong> (Birds, eagles), <strong>03.13</strong> (Fish, marine life)
                                                        </td>
                                                        <td className="p-4 text-xs">Automotive, Sports, Beverages, Security</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-mono font-bold text-[#6E5E93]">Cat 05</td>
                                                        <td className="p-4 font-semibold text-gray-900">Plants & Botanical Elements</td>
                                                        <td className="p-4 text-xs">
                                                            <strong>05.01</strong> (Trees, branches), <strong>05.03</strong> (Leaves), <strong>05.05</strong> (Flowers, blossoms), <strong>05.07</strong> (Grain, wheat stalks)
                                                        </td>
                                                        <td className="p-4 text-xs">Organic Food, Agriculture, Wellness, Pharma</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-mono font-bold text-[#6E5E93]">Cat 24</td>
                                                        <td className="p-4 font-semibold text-gray-900">Heraldry, Crests, Emblems & Symbols</td>
                                                        <td className="p-4 text-xs">
                                                            <strong>24.01</strong> (Shields, crests), <strong>24.09</strong> (Crowns, tiaras), <strong>24.15</strong> (Arrows), <strong>24.17</strong> (Crosses, symbols)
                                                        </td>
                                                        <td className="p-4 text-xs">Luxury Brands, Universities, Financial Firms</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-mono font-bold text-[#6E5E93]">Cat 26</td>
                                                        <td className="p-4 font-semibold text-gray-900">Geometrical Figures & Shapes</td>
                                                        <td className="p-4 text-xs">
                                                            <strong>26.01</strong> (Circles, ovals), <strong>26.04</strong> (Quadrilaterals, rectangles), <strong>26.05</strong> (Triangles), <strong>26.11</strong> (Lines, bands)
                                                        </td>
                                                        <td className="p-4 text-xs">Tech Startups, SaaS, Modern Minimalist Logos</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-mono font-bold text-[#6E5E93]">Cat 27</td>
                                                        <td className="p-4 font-semibold text-gray-900">Forms of Writing & Numerals</td>
                                                        <td className="p-4 text-xs">
                                                            <strong>27.01</strong> (Single letters), <strong>27.05</strong> (Stylized typography, monograms), <strong>27.07</strong> (Numerals, roman figures)
                                                        </td>
                                                        <td className="p-4 text-xs">All Brand Logos with stylized font initials</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-mono font-bold text-[#6E5E93]">Cat 29</td>
                                                        <td className="p-4 font-semibold text-gray-900">Colours & Colour Combinations</td>
                                                        <td className="p-4 text-xs">
                                                            <strong>29.01</strong> (Specific colour combinations claimed as a distinctive trademark element)
                                                        </td>
                                                        <td className="p-4 text-xs">Brand packaging marks claiming colour exclusivity</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 4: 7-STEP SEARCH PROTOCOL */}
                                    <section id="search-methodology" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faDiagramProject} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>7-Step Protocol for Vienna Logo Search</span>
                                        </h2>

                                        <p className="text-base leading-relaxed mb-6">
                                            Executing an airtight visual trademark clearance search requires a systematic, multi-layered methodology. Follow this 7-step protocol used by senior intellectual property attorneys on the official IP India portal:
                                        </p>

                                        <div className="space-y-6 not-prose mb-8">
                                            {/* Step 1 */}
                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-base mr-4 flex-shrink-0">
                                                    1
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Visual Deconstruction of Artwork</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        Break down your proposed logo into every standalone graphical component. Identify primary subjects (e.g., animal, humanoid, tree), secondary containers (e.g., shields, badges, concentric circles), and typographic styling (e.g., bespoke ligature letters, stylized calligraphy).
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-base mr-4 flex-shrink-0">
                                                    2
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Mapping to 6-Digit Vienna Classifications</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        Consult the WIPO Vienna Classification manual or the IP India classification index. List every plausible 6-digit code for each identified visual element. Never limit your search to just one code—capture related sub-divisions (e.g., searching both 03.01.01 for lions and 03.01.02 for tigers).
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-base mr-4 flex-shrink-0">
                                                    3
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Accessing IP India Public Search Portal</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        Visit the official Trade Marks Registry search portal (<em>ipindiaonline.gov.in</em>). On the search dashboard, change the top dropdown filter from <strong>&quot;Wordmark&quot;</strong> to <strong>&quot;Device Mark&quot;</strong>. This unlocks the dedicated Vienna Code search parameters.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 4 */}
                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-base mr-4 flex-shrink-0">
                                                    4
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Executing Class-Filtered Primary Queries</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        Enter your relevant <Link href="/trademark-class-finder" className="text-[#6E5E93] font-bold hover:underline">Trademark Nice Class</Link> (e.g., Class 25 for apparel or Class 9 for software). Input your primary 6-digit Vienna code into the &quot;Vienna Code&quot; box. Set the search filter to &quot;Contains&quot; or &quot;Match With&quot; and execute the search.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 5 */}
                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-base mr-4 flex-shrink-0">
                                                    5
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Composite Hybrid Wildcard Searches</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        If your device mark includes both a logo and text initials, execute hybrid searches by combining the Vienna Code with wildcard character strings (e.g., typing &quot;AP%&quot; in the Wordmark box alongside Vienna Code 26.01.01 in Class 35). This isolates directly competing composite brand identities.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 6 */}
                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-base mr-4 flex-shrink-0">
                                                    6
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Visual Similarity & Imperfect Recollection Test</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        Inspect the image thumbnail of every active, registered, and opposed mark returned. Evaluate whether an average customer possessing imperfect recollection would confuse the visual silhouette, spatial layout, or overall commercial impression under Section 11(1).
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 7 */}
                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-base mr-4 flex-shrink-0">
                                                    7
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Clearance Report & Design Optimization</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                        Document all visual citations in a Search Clearance Report. If high-risk collisions are discovered, collaborate with your graphic design team to pivot distinctive angles, modify geometric curvature, or alter visual weights before filing <Link href="/e-filing-trademark" className="text-[#6E5E93] font-bold hover:underline">Form TM-A</Link>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: WORDMARK VS VIENNA */}
                                    <section id="wordmark-vs-vienna" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Wordmark Search vs Vienna Device Search</span>
                                        </h2>

                                        <p className="text-base leading-relaxed mb-6">
                                            To build an unassailable trademark fortress, applicants must comprehend the distinct legal and technical roles of Wordmark searches versus Vienna Code Device Mark searches:
                                        </p>

                                        <div className="overflow-x-auto not-prose mb-8 rounded-2xl border border-gray-200 shadow-sm">
                                            <table className="w-full text-left border-collapse text-sm">
                                                <thead>
                                                    <tr className="bg-gray-100 text-gray-900 border-b border-gray-200">
                                                        <th className="p-4 font-bold">Search Parameter</th>
                                                        <th className="p-4 font-bold">Wordmark Search</th>
                                                        <th className="p-4 font-bold">Vienna Code Device Search</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Target Asset Type</td>
                                                        <td className="p-4">Brand name, phonetic spellings, slogans, text strings</td>
                                                        <td className="p-4 font-semibold text-[#6E5E93]">Logos, emblems, shapes, artwork, composite marks</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Search Query Basis</td>
                                                        <td className="p-4 font-mono text-xs">Alphanumeric text strings (Match / Contains / Phonetic)</td>
                                                        <td className="p-4 font-mono text-xs text-[#6E5E93]">6-Digit Vienna Numerical Classification Hierarchy</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Statutory Framework</td>
                                                        <td className="p-4">Trade Marks Act 1999, Section 9 & 11 (Phonetic / Textual)</td>
                                                        <td className="p-4 font-semibold text-[#6E5E93]">Rule 33, Trade Marks Rules 2017 & Vienna Agreement</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Detection Blind Spots</td>
                                                        <td className="p-4 text-red-600 font-medium">Completely blind to graphic similarity, shapes, and emblems</td>
                                                        <td className="p-4 text-gray-600">Blind to purely phonetic textual conflicts lacking graphics</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Legal Exclusivity Scope</td>
                                                        <td className="p-4">Protects the word itself across all fonts, colors, and styles</td>
                                                        <td className="p-4 font-semibold text-[#6E5E93]">Protects specific graphical representation and visual aesthetics</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/40 transition-colors">
                                                        <td className="p-4 font-bold text-gray-900">Recommended Strategy</td>
                                                        <td className="p-4" colSpan={2}>
                                                            <strong>Hybrid Dual-Search Strategy:</strong> Execute a comprehensive wordmark search first for brand name clearance, followed immediately by multi-code Vienna searches for logo clearance prior to filing.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 6: SEND TO VIENNA CODIFICATION STATUS */}
                                    <section id="status-send-to-vienna" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faClock} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Send to Vienna Codification Status Guide</span>
                                        </h2>

                                        <p className="text-base leading-relaxed mb-6">
                                            After submitting Form TM-A for a logo or device mark, applicants tracking their application on the IP India portal frequently encounter the status: <Link href="/trademark-application-status" className="text-[#6E5E93] font-bold hover:underline">&quot;Send to Vienna Codification&quot;</Link>.
                                        </p>

                                        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 mb-8 not-prose">
                                            <div className="flex items-start space-x-3">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Is &quot;Send to Vienna Codification&quot; an Objection?</h3>
                                                    <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                        <strong>No.</strong> &quot;Send to Vienna Codification&quot; is NOT an objection, rejection, or formality check failure. It is a mandatory administrative routing step where the Trade Marks Registry's technical officers tag your mark's figurative elements. Once codification is complete, the application automatically progresses to <em>&quot;Formalities Check Pass&quot;</em> or <em>&quot;Marked for Exam&quot;</em>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Why Does Vienna Codification Sometimes Get Delayed?</h3>
                                        <p className="text-base leading-relaxed mb-4">
                                            While this internal step normally resolves within 3 to 10 days, applications can remain stuck in Vienna Codification for several weeks due to:
                                        </p>

                                        <ul className="space-y-3 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <span><strong>Low-Resolution or Illegible Artwork:</strong> If the uploaded JPEG/PDF is pixelated, blurred, or distorted, examiners struggle to discern specific figurative details.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <span><strong>Overly Complex Composite Artwork:</strong> Marks containing dozens of crowded figurative symbols require multi-examiner classification reviews.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <span><strong>Registry Processing Backlog:</strong> Periods of heavy filing volume across the 5 regional trademark offices (Mumbai, Delhi, Chennai, Kolkata, Ahmedabad).</span>
                                            </li>
                                        </ul>

                                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 not-prose">
                                            <h3 className="text-base font-bold text-gray-900 mb-2">How to Rectify Incorrect Vienna Codes Assigned by Examiners</h3>
                                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                                If an examiner accidentally miscodes your logo (e.g., categorizing an abstract mechanical gear as a floral plant), it can result in an erroneous Examination Report citing irrelevant plant-related marks while overlooking actual mechanical gear competitors.
                                            </p>
                                            <p className="text-sm text-gray-700 leading-relaxed m-0 font-medium text-[#6E5E93]">
                                                <strong>Legal Remedy:</strong> Your trademark attorney can file a formal clarification under <strong>Form TM-M</strong> requesting rectification of the Vienna Classification data on the Trade Marks Register with an attached visual breakdown sheet.
                                            </p>
                                        </div>
                                    </section>

                                    {/* SECTION 7: SECTION 11(1) RISK */}
                                    <section id="section-11-risk" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Section 11(1) Visual Conflict & Likelihood of Confusion</span>
                                        </h2>

                                        <p className="text-base leading-relaxed mb-6">
                                            The ultimate objective of conducting a Vienna Code search is ensuring compliance with <strong>Section 11(1) of the Trade Marks Act, 1999</strong> (Relative Grounds for Refusal of Registration). Section 11(1) bars registration of any trademark that is identical or deceptively similar to an earlier mark for similar goods or services, creating a likelihood of public confusion.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#6E5E93] flex items-center justify-center font-bold text-base mb-3">
                                                    <FontAwesomeIcon icon={faEye} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">The Imperfect Recollection Test</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    As established by the Supreme Court of India in landmark precedents like <em>Cadila Healthcare Ltd. v. Cadila Pharmaceuticals Ltd.</em> and <em>Amritdhara Pharmacy v. Satyadeo Gupta</em>, visual similarity is not evaluated by placing two logos side-by-side. Instead, the court assesses whether a consumer with an average memory and imperfect recollection would confuse the marks when encountered at different times.
                                                </p>
                                            </div>

                                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6E5E93] flex items-center justify-center font-bold text-base mb-3">
                                                    <FontAwesomeIcon icon={faPalette} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-base font-bold text-gray-900 mb-2">The Anti-Dissection Rule</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed m-0">
                                                    Under Section 17 of the Act, a trademark must be judged as a whole. While Vienna Code searches deconstruct logos into discrete pieces for indexing, judicial scrutiny compares the <strong>overall commercial impression</strong> created by the combination of colors, shapes, typographic arrangements, and dominant visual features.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: DESIGNER CHECKLIST */}
                                    <section id="designer-checklist" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Logo Clearance Checklist Before Filing TM-A</span>
                                        </h2>

                                        <p className="text-base leading-relaxed mb-6">
                                            Before finalizing your brand's visual identity or submitting Form TM-A, ensure your legal and design teams execute this comprehensive clearance checklist:
                                        </p>

                                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 not-prose mb-8">
                                            <div className="space-y-4">
                                                <div className="flex items-start space-x-3 pb-3 border-b border-gray-200">
                                                    <input type="checkbox" defaultChecked readOnly className="mt-1 h-4 w-4 text-[#6E5E93] rounded border-gray-300 focus:ring-[#6E5E93]" />
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-900 m-0">1. Complete Textual Wordmark Clearance</p>
                                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Cleared word strings, phonetic variants, and semantic equivalents across relevant Nice classes.</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-3 pb-3 border-b border-gray-200">
                                                    <input type="checkbox" defaultChecked readOnly className="mt-1 h-4 w-4 text-[#6E5E93] rounded border-gray-300 focus:ring-[#6E5E93]" />
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-900 m-0">2. Multi-Tier Vienna Code Identification</p>
                                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Identified all primary, secondary, and background figurative codes across Categories 01 to 29.</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-3 pb-3 border-b border-gray-200">
                                                    <input type="checkbox" defaultChecked readOnly className="mt-1 h-4 w-4 text-[#6E5E93] rounded border-gray-300 focus:ring-[#6E5E93]" />
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-900 m-0">3. Class-Specific & Cross-Industry Device Search</p>
                                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Queried primary business classes plus allied/coordinated product and service categories.</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-3 pb-3 border-b border-gray-200">
                                                    <input type="checkbox" defaultChecked readOnly className="mt-1 h-4 w-4 text-[#6E5E93] rounded border-gray-300 focus:ring-[#6E5E93]" />
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-900 m-0">4. High-Resolution Artwork Standardization</p>
                                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Prepared crisp 8cm x 8cm graphical representation on clean white background (JPEG/PNG format under 5MB).</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-3 pb-3 border-b border-gray-200">
                                                    <input type="checkbox" defaultChecked readOnly className="mt-1 h-4 w-4 text-[#6E5E93] rounded border-gray-300 focus:ring-[#6E5E93]" />
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-900 m-0">5. User Date / Prior Use Evidence Audit</p>
                                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Verified if brand has prior commercial use to support a <Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[#6E5E93] font-bold hover:underline">User Affidavit (Rule 25)</Link>.</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-3">
                                                    <input type="checkbox" defaultChecked readOnly className="mt-1 h-4 w-4 text-[#6E5E93] rounded border-gray-300 focus:ring-[#6E5E93]" />
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-900 m-0">6. MSME / Udyam 50% Fee Subsidy Verification</p>
                                                        <p className="text-xs text-gray-600 m-0 mt-0.5">Claimed eligible <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="text-[#6E5E93] font-bold hover:underline">50% MSME fee discount</Link> (₹4,500 govt fee instead of ₹9,000).</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: FAQS */}
                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Frequently Asked Questions on Vienna Search</span>
                                        </h2>

                                        <div className="space-y-4 not-prose">
                                            {faqs.map((faq, index) => (
                                                <details
                                                    key={index}
                                                    className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:border-purple-200 open:shadow-md"
                                                >
                                                    <summary className="flex items-center justify-between font-bold text-gray-900 cursor-pointer list-none select-none text-base">
                                                        <span className="pr-4">{faq.question}</span>
                                                        <span className="w-7 h-7 rounded-full bg-purple-50 text-[#6E5E93] flex items-center justify-center font-bold text-sm transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                                                            &darr;
                                                        </span>
                                                    </summary>
                                                    <div className="mt-4 pt-3 border-t border-gray-100 text-sm text-gray-700 leading-relaxed">
                                                        {faq.answer}
                                                    </div>
                                                </details>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 10: STRATEGIC TAKEAWAY & BOTTOM CTA */}
                                    <section id="final-takeaway" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faRocket} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            <span>Strategic Takeaways for Brand Protection</span>
                                        </h2>

                                        <p className="text-base leading-relaxed mb-6">
                                            Conducting a meticulous Vienna Code search is not merely an administrative formality—it is an indispensable risk mitigation strategy for modern brand owners. A visually conflicted trademark filed today can invite severe opposition proceedings in the Trade Marks Journal 6 months later, court injunctions, and mandatory rebranding after investing millions in packaging and advertising.
                                        </p>

                                        <div className="rounded-3xl bg-gradient-to-br from-[#0C002B] via-[#1A0B3B] to-[#2D1254] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden not-prose border border-purple-500/20">
                                            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

                                            <div className="relative z-10 text-center">
                                                <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md mb-6 border border-white/10">
                                                    <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-purple-300" />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-purple-200">
                                                        Full-Spectrum Visual Trademark Clearance
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Brand Logo with Certified IP Attorneys
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Get comprehensive Vienna classification audits, AI-driven visual similarity checks, and strategic Form TM-A e-filing. We safeguard your brand identity across all 45 trademark classes with zero compliance errors.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/free-ai-powered-trademark-search"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Start Free Logo Search</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Certified IP Advocates • Same-Day Vienna Search Clearance • Transparent Filing Invoicing
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
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in visual brand clearance, Vienna Codification taxonomy, and relative grounds litigation defense under the Trade Marks Act, 1999. He assists creative agencies and tech enterprises in securing nationwide design exclusivity.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-xl font-black mb-4 relative z-10 leading-tight">Clear Your Logo Today</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Run multi-code Vienna classification search and protect your brand from Section 11 relative grounds objections.</p>
                                <Link href="/free-ai-powered-trademark-search" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        Run Logo Clearance
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faShapes} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Word vs Device Mark</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-search-for-existing-trademark" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Search Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faTable} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Class Finder</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-application-status" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">TM Status Tracker</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/process-and-steps-of-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faListUl} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Filing Process</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-fee-concession-msme-udyam-startup-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faBuilding} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">50% MSME Discount</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-user-affidavit-format-and-rules-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">User Affidavit</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/form-tm-48-power-of-attorney-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Form TM-48</span>
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
