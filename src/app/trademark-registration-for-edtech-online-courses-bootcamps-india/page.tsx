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
    faGraduationCap,
    faLaptopCode,
    faVideo,
    faCertificate,
    faMobileScreenButton,
    faCloud
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark for EdTech, Courses & Bootcamps in India",
    description: validateAndNormalizeDescription(
        "Protect your EdTech platform, online courses, and bootcamps in India. Master Class 41 & 42 filing, LMS protection, brand defense, and takedown procedures.",
        "app/trademark-registration-for-edtech-online-courses-bootcamps-india/page.tsx"
    ),
    keywords: [
        "trademark registration for edtech online courses and bootcamps in india",
        "trademark class for online courses and lms",
        "edtech brand name protection india",
        "how to trademark masterclass and bootcamp curriculum name",
        "class 41 and 42 for education technology",
        "trademark registration for edtech platforms india",
        "edtech mobile app class 9 trademark",
        "online coaching academy brand registration",
        "edtech digital course piracy protection telegram takedown",
        "how to register brand name for cohort based course"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-for-edtech-online-courses-bootcamps-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Trademark for EdTech, Courses & Bootcamps in India",
        description: "Protect your EdTech platform, online courses, and bootcamps in India. Master Class 41 & 42 filing, LMS protection, brand defense, and takedown procedures.",
        url: "https://www.iprkaro.com/trademark-registration-for-edtech-online-courses-bootcamps-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/trademark-registration-for-edtech-online-courses-bootcamps-india.png",
                width: 1200,
                height: 630,
                alt: "Trademark Registration for EdTech Platforms Online Courses and Bootcamps in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Trademark for EdTech, Courses & Bootcamps in India",
        description: "Protect your EdTech platform, online courses, and bootcamps in India. Master Class 41 & 42 filing, LMS protection, brand defense, and takedown procedures.",
        images: ["https://www.iprkaro.com/images/og/trademark-registration-for-edtech-online-courses-bootcamps-india.png"],
    }
};

const faqs = [
    {
        question: "Which trademark classes are essential for EdTech platforms in India?",
        answer: "EdTech platforms require a multi-class registration strategy across four primary classes: Class 41 (Educational services, online training, tutoring, and bootcamps), Class 42 (Software as a Service / SaaS, hosting LMS platforms, and educational cloud portals), Class 9 (Downloadable mobile learning applications, software, and recorded video media), and Class 35 (E-commerce course marketplaces and career recruitment services)."
    },
    {
        question: "Can I trademark the title of an individual online course or bootcamp cohort?",
        answer: "Yes, you can trademark specific course titles, bootcamp names, and proprietary curriculum brands (e.g., 'Full-Stack Accelerator', 'Growth Masterclass') under Class 41, provided the title is coined, suggestive, or arbitrary, and not merely descriptive of general educational topics (such as 'Python Course' or 'Digital Marketing Class')."
    },
    {
        question: "What is the difference between Class 41 and Class 42 for educational technology?",
        answer: "Class 41 covers the actual service of education, teaching, training delivery, webinars, and examination conduction. Class 42 covers the underlying technological platform, Software as a Service (SaaS), Learning Management System (LMS) hosting, adaptive algorithm development, and mobile app backend infrastructure."
    },
    {
        question: "How does trademark registration protect EdTech brands against course piracy on Telegram?",
        answer: "A registered trademark certificate under Section 23 serves as irrefutable legal title of brand ownership. It enables immediate automated takedowns under intermediary liability rules (Section 79 of the IT Act) across Telegram, WhatsApp, Meta, Google Drive, and YouTube, and forms the bedrock for John Doe (Ashok Kumar) civil injunctions in High Courts."
    },
    {
        question: "Can an EdTech startup claim a 50% government fee discount for trademark registration?",
        answer: "Yes. Startups recognized by DPIIT or enterprises holding a valid Udyam MSME certificate qualify for a 50% statutory fee rebate, paying an official government fee of ₹4,500 per class (online e-filing) instead of the standard ₹9,000 corporate fee."
    },
    {
        question: "Can digital badges, certification seals, and skill credentials be trademarked?",
        answer: "Yes. Digital certification badges, skill verification seals, and accreditation logos issued to students upon bootcamp graduation can be registered as device marks or certification trademarks in Class 41, preventing fraudulent diploma mills from copying your credentials."
    },
    {
        question: "How do I avoid descriptive objections under Section 9(1)(b) for EdTech brands?",
        answer: "Avoid generic educational words that directly describe the subject matter, such as 'Coding Academy' or 'Data Science Bootcamp'. Instead, adopt coined words, suggestive metaphors, or composite brand identifiers (e.g., 'Scaler', 'Unacademy', 'Coursera', 'SkillForge') which possess inherent distinctiveness."
    },
    {
        question: "What evidence of prior use is required for an active EdTech platform?",
        answer: "If your platform is already live, you can claim seniority under Rule 25(2) by filing a User Affidavit backed by student enrollment receipts, GST invoices, website launch domain timestamps, Google Analytics metrics, and YouTube educational channel creation dates."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "edtech-landscape", title: "Why EdTech Needs IP Protection" },
    { id: "multi-class-strategy", title: "Multi-Class: 41, 42, 9 & 35" },
    { id: "what-to-protect", title: "Protecting Logos, LMS & Badges" },
    { id: "distinctiveness-rules", title: "Naming Rules & Section 9" },
    { id: "class-comparison-table", title: "EdTech Classification Matrix" },
    { id: "step-by-step-filing", title: "Step-by-Step Filing Workflow" },
    { id: "piracy-and-takedowns", title: "Telegram & Web Enforcement" },
    { id: "startup-fee-concessions", title: "MSME & Startup 50% Concession" },
    { id: "legal-checklist", title: "Documents & Filing Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "strategic-growth", title: "Scaling EdTech Brand IP" },
];

export default function EdTechTrademarkRegistrationPage() {
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
        "headline": "Trademark Registration for EdTech Platforms, Online Courses & Bootcamps in India",
        "description": "Protect your EdTech platform, online courses, and bootcamps in India. Master Class 41 & 42 filing, LMS protection, brand defense, and takedown procedures.",
        "image": "https://www.iprkaro.com/images/og/trademark-registration-for-edtech-online-courses-bootcamps-india.png",
        "datePublished": "2026-09-30T09:35:00+05:30",
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
            "@id": "https://www.iprkaro.com/trademark-registration-for-edtech-online-courses-bootcamps-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trademark for EdTech, Courses & Bootcamps in India",
        "url": "https://www.iprkaro.com/trademark-registration-for-edtech-online-courses-bootcamps-india",
        "description": "Protect your EdTech platform, online courses, and bootcamps in India. Master Class 41 & 42 filing, LMS protection, brand defense, and takedown procedures.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/trademark-registration-for-edtech-online-courses-bootcamps-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/trademark-registration-for-edtech-online-courses-bootcamps-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "EdTech Trademark Registration Guide", "item": "https://www.iprkaro.com/trademark-registration-for-edtech-online-courses-bootcamps-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Comprehensive Trademark Protection Framework for EdTech Brands in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Cross-Class Clearance Search across Classes 9, 35, 41, and 42" },
            { "@type": "ListItem", "position": 2, "name": "Draft Precise Goods and Services Specifications for SaaS, LMS, and Live Tutoring" },
            { "@type": "ListItem", "position": 3, "name": "Structure Multi-Class or Single-Class Application Strategy on Form TM-A" },
            { "@type": "ListItem", "position": 4, "name": "Claim 50% Statutory Fee Concession via DPIIT Startup or Udyam MSME Registration" },
            { "@type": "ListItem", "position": 5, "name": "Draft and Submit Rule 25(2) Prior User Affidavit with Digital Invoices and Web Metrics" },
            { "@type": "ListItem", "position": 6, "name": "Overcome Section 9 Distinctiveness and Section 11 Similarity Examination Reports" },
            { "@type": "ListItem", "position": 7, "name": "Secure Certificate and Deploy Trademark for Intermediary Piracy Takedowns" }
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
                                <FontAwesomeIcon icon={faGraduationCap} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">EdTech &amp; Online Education IP Law</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Trademark Registration for <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>EdTech Platforms, Online Courses &amp; Bootcamps</span> in India
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                                India&apos;s digital education boom has spawned fierce competition, lookalike course platforms, and rampant digital piracy. Securing comprehensive trademark protection across<strong>Class 41 (Education &amp; Live Training)</strong>,<strong>Class 42 (LMS &amp; SaaS Platforms)</strong>,<strong>Class 9 (Mobile Apps &amp; Digital Content)</strong>, and<strong>Class 35 (E-Commerce Marketplaces)</strong>is vital to defending your curriculum names, certification badges, masterclass brands, and institutional reputation against copycats.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">EdTech IP Specialist</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 30-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 16 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-emerald-50 rounded-full px-3 py-1 border border-emerald-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-800">🎓 Class 41 &amp; 42 Strategy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Register EdTech Brand Now <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    EdTech IP Helpline: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/trademark-registration-for-edtech-online-courses-bootcamps-india.png"
                                    alt="Trademark Registration for EdTech Platforms Online Courses and Bootcamps in India"
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
                        { label: "EdTech Trademark Registration", href: "/trademark-registration-for-edtech-online-courses-bootcamps-india" }
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
                                            <p className="text-xs text-gray-500 m-0">EdTech IP Specialist &amp; Tech Litigator</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGraduationCap} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview of EdTech Trademark Registration
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Trademark registration for EdTech platforms, online courses, and coding bootcamps in India requires a coordinated multi-class filing strategy across Class 41 (Educational services, live coaching, webinars, and bootcamp delivery) and Class 42 (Software as a Service, LMS software hosting, and platform infrastructure), supported by Class 9 (Mobile apps and downloadable media) and Class 35 (Course marketplace and placement services). A registered trademark serves as the indispensable statutory weapon to block unauthorized course piracy on Telegram and WhatsApp under Section 79 of the IT Act.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            India has emerged as one of the world&apos;s largest digital education markets. From venture-funded EdTech giants to niche cohort-based course creators, YouTube educators, and coding academies, high student enrollments depend entirely on institutional trust, curriculum authority, and digital reputation.
                                        </p>
                                        <p className="mb-6">
                                            However, digital assets are inherently vulnerable to duplication. Rogue operators routinely clone LMS interfaces, rip paid masterclasses, and distribute pirated videos on social media under deceptive brand names. Registering your brand with the Indian Trade Marks Registry secures your exclusive monopoly, creates investor enterprise value, and empowers you to issue automated DMCA and intermediary takedowns.
                                        </p>
                                        <p className="mb-6">
                                            Explore how trademark law intersects with tech businesses in our specialized guides on <Link href="/trademark-for-saas-product" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration for SaaS products</Link>, <Link href="/trademark-for-coaching-institute" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark for coaching institutes</Link>, and <Link href="/can-you-trademark-podcast-name-audio-series-india" className="text-[rgb(110,94,147)] hover:underline font-medium">protecting audio series and creator brand names</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 2: WHY EDTECH NEEDS IP PROTECTION */}
                                    <section id="edtech-landscape" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Why EdTech Brands Face Unique IP Vulnerabilities
                                        </h2>
                                        <p className="mb-6">
                                            Unlike traditional offline schools or coaching centers that rely on physical infrastructure, EdTech brands exist entirely in the digital sphere. This creates four major threat vectors:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Rampant Dark Social Course Piracy</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Bootcamp lecture recordings, proprietary coding exercises, and study notes are frequently leaked onto private Telegram channels and WhatsApp groups, sold for nominal sums under unauthorized brand names.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Lookalike Learning Portals &amp; Phishing</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Fraudulent operators register confusingly similar domain names and brand logos to harvest student tuition fees, damaging your institutional goodwill and triggering regulatory scrutiny.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Certificate Forgery &amp; Credential Dilution</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Unaccredited third parties issue counterfeit graduation certificates featuring your brand seal, diluting the hiring credibility of your authentic bootcamp alumni in corporate placement drives.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: MULTI-CLASS STRATEGY */}
                                    <section id="multi-class-strategy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLaptopCode} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Multi-Class Strategy: Classes 41, 42, 9 &amp; 35
                                        </h2>
                                        <p className="mb-6">
                                            Under the International Nice Classification system, EdTech entities operate at the intersection of services, software, and digital goods. Filing under only one class leaves fatal gaps in your brand moat:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#6E5E93] mr-3">
                                                        <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 41: Education &amp; Training</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    The primary class for all educational delivery. Covers conducting online courses, live interactive bootcamps, workshops, practical vocational training, certification testing, webinars, and publishing non-downloadable educational texts.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-[#6E5E93] border border-purple-100">
                                                    Mandatory for: All Course Creators, Academies &amp; Bootcamps
                                                </div>
                                            </div>

                                            <div className="bg-indigo-50/60 p-6 rounded-2xl border border-indigo-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                                                        <FontAwesomeIcon icon={faCloud} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 42: SaaS &amp; LMS Technology</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Covers the software technology hosting the courses. Includes Software as a Service (SaaS), Learning Management Systems (LMS), AI-powered grading portals, adaptive testing software, and cloud application hosting.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-indigo-700 border border-indigo-100">
                                                    Mandatory for: Platforms with Proprietary Web/LMS Portals
                                                </div>
                                            </div>

                                            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mr-3">
                                                        <FontAwesomeIcon icon={faMobileScreenButton} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 9: Mobile Apps &amp; Media</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Covers downloadable digital software and educational assets. Includes iOS and Android mobile learning apps, downloadable recorded video modules, interactive quiz software, and offline study materials.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-emerald-700 border border-emerald-100">
                                                    Mandatory for: Platforms with Mobile Apps on App Stores
                                                </div>
                                            </div>

                                            <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200">
                                                <div className="flex items-center mb-3">
                                                    <div className="w-9 h-9 rounded-xl bg-slate-200 flex items-center justify-center text-slate-800 mr-3">
                                                        <FontAwesomeIcon icon={faTable} className="w-4 h-4" />
                                                    </div>
                                                    <h3 className="text-base font-bold text-gray-900 m-0">Class 35: Marketplace &amp; Placement</h3>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                                    Covers online aggregation and commercial operations. Includes online marketplace services bringing together instructors and students, career placement services, job portal integration, and curriculum recruitment.
                                                </p>
                                                <div className="bg-white p-2 rounded-lg text-[11px] font-semibold text-slate-800 border border-slate-200">
                                                    Recommended for: Multi-Instructor Platforms &amp; Job Portals
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: WHAT BRAND ASSETS TO PROTECT */}
                                    <section id="what-to-protect" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faCertificate} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Key EdTech Brand Assets Requiring Trademarking
                                        </h2>
                                        <p className="mb-6">
                                            A sophisticated intellectual property portfolio extends beyond your primary company name to protect every branded student touchpoint:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Master Platform Name &amp; App Icon (Word &amp; Device Marks)</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Register the master brand name as a standalone Word Mark (for broad textual exclusivity) alongside the stylized logo and mobile App Store icon as Device Marks. Review the differences in our guide on <Link href="/word-mark-vs-device-mark-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">word mark vs device mark protection</Link>.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Flagship Bootcamp &amp; Course Cohort Titles</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    High-ticket cohort-based courses (e.g., &lsquo;Full Stack Accelerator&rsquo;, &lsquo;FinTech Superstars&rsquo;, &lsquo;Growth Masterclass&rsquo;) should be trademarked under Class 41 to prevent competing educators from launching lookalike courses.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Digital Certification Seals &amp; Skill Badges</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Digital credentials, graduation seals, and LinkedIn skill badges issued to students must be registered as device marks to ensure they remain exclusive symbols of rigorous technical mastery.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">4. Taglines, Slogans &amp; Learning Mantras</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Catchy institutional slogans and brand taglines that drive student marketing campaigns can be protected as distinctive word marks under Indian law. Learn more in our guide on <Link href="/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademarking slogans and taglines</Link>.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: DISTINCTIVENESS VS DESCRIPTIVENESS */}
                                    <section id="distinctiveness-rules" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Naming Rules: Descriptive vs Coined Marks (Section 9)
                                        </h2>
                                        <p className="mb-6">
                                            The single most common ground for trademark refusal under<strong>Section 9(1)(b) of the Trade Marks Act, 1999</strong>is lack of distinctiveness. In the education sector, examiners routinely reject names that describe the subjects taught:
                                        </p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Brand Naming Category</th>
                                                        <th className="p-3.5 sm:p-4">Examples</th>
                                                        <th className="p-3.5 sm:p-4">Registry Registrability</th>
                                                        <th className="p-3.5 sm:p-4">Legal Protection Strength</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-red-50/30">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Generic / Descriptive</td>
                                                        <td className="p-3.5 sm:p-4 font-mono text-xs">Coding Academy, IAS Prep Online, Python School</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">High Risk of Section 9 Refusal</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700 font-semibold">Zero / Unenforceable</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-amber-50/30">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Suggestive</td>
                                                        <td className="p-3.5 sm:p-4 font-mono text-xs">SkillForge, BrainByte, LearnMatrix, CodeTribe</td>
                                                        <td className="p-3.5 sm:p-4 text-amber-800 font-semibold">Generally Acceptable with Argument</td>
                                                        <td className="p-3.5 sm:p-4 text-amber-800 font-semibold">Moderate Protection</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-emerald-50/30">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Arbitrary / Coined</td>
                                                        <td className="p-3.5 sm:p-4 font-mono text-xs">Unacademy, Scaler, Byju&apos;s, Coursera, UpGrad</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Immediate Seamless Acceptance</td>
                                                        <td className="p-3.5 sm:p-4 text-emerald-700 font-semibold">Strongest Monopoly</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <p className="text-xs text-gray-600 italic mb-6">
                                            Tip: If your existing platform uses a descriptive name, you can overcome Section 9 objections by submitting a<strong>Rule 25(2) Prior User Affidavit</strong>demonstrating acquired distinctiveness through extensive student traffic, revenue, and press recognition. Learn how to draft winning replies in our guide on <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">how to overcome trademark objections in India</Link>.
                                        </p>
                                    </section>

                                    {/* SECTION 6: EDTECH CLASSIFICATION MATRIX */}
                                    <section id="class-comparison-table" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            EdTech Trademark Classification Specification Matrix
                                        </h2>
                                        <p className="mb-6">
                                            Use this standard specification drafting reference to ensure your Form TM-A avoids formality check fail discrepancies during registry examination:
                                        </p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Class</th>
                                                        <th className="p-3.5 sm:p-4">Core Scope</th>
                                                        <th className="p-3.5 sm:p-4">Approved Goods &amp; Services Descriptions for IP India</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Class 41</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-[#6E5E93]">Education &amp; Training</td>
                                                        <td className="p-3.5 sm:p-4 text-xs text-gray-600">
                                                            Education services; providing of training; online educational courses; conducting of bootcamps, workshops, webinars, and masterclasses; educational examination and certification services; publishing of electronic educational materials and blogs.
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Class 42</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-indigo-700">Technology &amp; SaaS</td>
                                                        <td className="p-3.5 sm:p-4 text-xs text-gray-600">
                                                            Software as a service (SaaS) featuring learning management systems (LMS); hosting educational software platforms; cloud computing services for online teaching; development of educational and assessment software applications.
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Class 9</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Apps &amp; Software</td>
                                                        <td className="p-3.5 sm:p-4 text-xs text-gray-600">
                                                            Downloadable mobile applications for online learning; downloadable educational software; recorded video webinars and multimedia educational content recorded on digital media.
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Class 35</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-slate-700">Marketplace &amp; Ads</td>
                                                        <td className="p-3.5 sm:p-4 text-xs text-gray-600">
                                                            Online marketplace services for buyers and sellers of educational courses; employment and career placement consultancy; recruitment and headhunting services for bootcamp graduates.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 7: STEP-BY-STEP FILING WORKFLOW */}
                                    <section id="step-by-step-filing" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Filing Workflow for EdTech Startups
                                        </h2>
                                        <p className="mb-6">
                                            Follow this proven 5-stage legal prosecution roadmap to register your educational brand smoothly:
                                        </p>

                                        <div className="space-y-4 my-6 not-prose">
                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Pre-Filing AI Similarity Clearance Search</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Conduct an exhaustive phonetic, visual, and conceptual similarity search across Classes 9, 35, 41, and 42. Verify there are no prior conflicting marks that could trigger <Link href="/deceptive-similarity-trademark-test-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">deceptive similarity objections under Section 11</Link>.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Select Single-Class vs Multi-Class Strategy</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Evaluate whether to file separate single-class applications (to isolate risks) or a consolidated multi-class application on Form TM-A. Review pros and cons in our guide on <Link href="/single-class-vs-multi-class-trademark-application-india" className="text-[rgb(110,94,147)] hover:underline font-medium">single class vs multi class applications</Link>.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Draft User Date &amp; Form TM-48</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        If your platform is already active, establish exact date of first commercial use with an accompanying User Affidavit under Rule 25(2). Execute a Power of Attorney (Form TM-48) appointing a registered trademark attorney.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Online E-Filing &amp; Immediate ™ Symbol Usage</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        Submit Form TM-A via digital signature on ipindiaonline.gov.in. Upon fee payment, download your official acknowledgement receipt (CBR) and begin using the &trade; symbol next to your platform name immediately.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start">
                                                <span className="w-8 h-8 rounded-full bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">5</span>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 mb-1">Journal Publication &amp; Certificate Issuance (&reg;)</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 m-0">
                                                        After examination clearance, the mark is advertised in the Trade Marks Journal for 4 months. If no opposition is filed, the digital Certificate of Registration is issued under Section 23(2), granting 10-year nationwide monopoly and &reg; symbol rights.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: ENFORCEMENT & TAKEDOWNS */}
                                    <section id="piracy-and-takedowns" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Telegram, WhatsApp &amp; App Store Brand Enforcement
                                        </h2>
                                        <p className="mb-6">
                                            A registered trademark is the most potent legal instrument to protect your paid courses from dark web piracy and online IP infringement:
                                        </p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">1. Fast-Track Telegram &amp; WhatsApp Channel Takedowns</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    Messaging platforms enforce strict IP grievance policies under Rule 3 of the Information Technology (Intermediary Guidelines) Rules, 2021. Providing your registered trademark certificate enables same-day takedown of channels distributing pirated course videos.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">2. Google Play &amp; Apple App Store Clone Removals</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    If a competitor publishes a copycat mobile app using your platform name or brand icon, Apple and Google legal portals require a registered trademark number in Class 9 or Class 41 to delist the infringing application within 48 hours.
                                                </p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h3 className="text-base font-bold text-gray-900 mb-1">3. Dynamic John Doe (Ashok Kumar) Injunctions</h3>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">
                                                    For large EdTech institutions suffering massive, anonymous piracy across hundreds of domains, High Courts grant dynamic &lsquo;John Doe&rsquo; injunctions under the Trade Marks Act and Copyright Act, ordering ISPs and telecom providers to block rogue pirate websites instantly.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: MSME & STARTUP CONCESSIONS */}
                                    <section id="startup-fee-concessions" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            50% Fee Concession for MSME &amp; DPIIT Startups
                                        </h2>
                                        <p className="mb-6">
                                            The Government of India incentivizes early-stage education entrepreneurs through substantial fee rebates on trademark filings:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full mr-2"></span>
                                                    Individuals &amp; Startups / MSMEs
                                                </h3>
                                                <p className="text-2xl font-black text-emerald-800 mb-2">₹4,500 <span className="text-xs font-semibold text-gray-500">per class (E-Filing)</span></p>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">
                                                    Applies to sole proprietors, partnerships holding Udyam MSME certificates, and Private Limited companies recognized under the Startup India scheme.
                                                </p>
                                            </div>

                                            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200">
                                                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-slate-600 rounded-full mr-2"></span>
                                                    Large Corporate Bodies (Non-MSME)
                                                </h3>
                                                <p className="text-2xl font-black text-slate-800 mb-2">₹9,000 <span className="text-xs font-semibold text-gray-500">per class (E-Filing)</span></p>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">
                                                    Applies to established corporate institutions, trusts, and companies that do not hold a valid MSME or DPIIT startup certificate.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 10: LEGAL CHECKLIST */}
                                    <section id="legal-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Documents Required for EdTech Trademark Filing
                                        </h2>
                                        <p className="mb-6">
                                            Prepare the following documents before submitting your application on the IP India portal:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                                            <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100 flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-[#6E5E93] mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="font-bold text-gray-900 text-xs mb-1">High-Resolution Logo Artwork</p>
                                                    <p className="text-xs text-gray-600 m-0">Clean JPEG/PNG of brand logo, badge emblem, or app icon on transparent/white background.</p>
                                                </div>
                                            </div>
                                            <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="font-bold text-gray-900 text-xs mb-1">Entity Incorporation &amp; MSME Certificate</p>
                                                    <p className="text-xs text-gray-600 m-0">Certificate of Incorporation/COI, Partnership Deed, or Udyam Certificate for fee concession.</p>
                                                </div>
                                            </div>
                                            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="font-bold text-gray-900 text-xs mb-1">User Date Evidence (Rule 25(2))</p>
                                                    <p className="text-xs text-gray-600 m-0">Invoices, student registration receipts, website domain WHOIS records, or marketing flyers.</p>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200 flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-slate-700 mr-3 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="font-bold text-gray-900 text-xs mb-1">Executed Form TM-48 (POA)</p>
                                                    <p className="text-xs text-gray-600 m-0">Signed Power of Attorney on requisite non-judicial stamp paper authorizing your IP attorney.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[rgb(110,94,147)]">
                                            Frequently Asked Questions on EdTech Trademark Registration
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

                                    {/* SECTION 12: STRATEGIC GROWTH */}
                                    <section id="strategic-growth" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Brand Scaling &amp; Investor Valuation
                                        </h2>
                                        <p className="mb-6">
                                            For venture-backed EdTech platforms, institutional brand value directly drives funding rounds and enterprise multiples. Sophisticated angel investors and VC funds require clear title across all digital trademarks, LMS software assets, and course brands as part of legal due diligence.
                                        </p>
                                        <p className="mb-6">
                                            Protecting your intellectual property early prevents costly rebrandings after raising capital. Partner with seasoned IP litigators to structure airtight multi-class filings, draft bulletproof examination replies, and build an unassailable digital moat. Review our related guides on <Link href="/want-to-register-trademark-for-startup" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark registration for startups</Link>, <Link href="/trademark-valuation-methods-for-startups-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark valuation methods for startups</Link>, and <Link href="/reclaim-squatted-social-media-username-trademark-india" className="text-[rgb(110,94,147)] hover:underline font-medium">reclaiming squatted social media handles</Link>.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Comprehensive EdTech IP Defense
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Online Courses &amp; EdTech Brand
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Lock in exclusive trademark rights across Classes 41, 42, 9 &amp; 35. Shield your platform from digital course piracy and build lasting enterprise valuation.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult EdTech IP Attorney</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                                                    Specialized EdTech Attorneys • Multi-Class 41/42/9 Filing • Telegram Piracy Takedowns • Pan-India
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
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">EdTech IP Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">
                                    Rahul advises leading online academies, SaaS founders, and cohort educators on multi-class trademark filing, digital piracy takedowns, and brand enforcement.
                                </p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-base font-black mb-1.5 relative z-10 leading-tight">Launching a Course Brand?</h3>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">
                                    Clear your platform name across Classes 41 &amp; 42 before investing in student marketing and curriculum production.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Check EdTech Brand Availability
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <Link href="/trademark-for-saas-product" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faCloud} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">SaaS Trademark Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-coaching-institute" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Coaching Institute TM</span>
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
                                        <Link href="/can-you-trademark-podcast-name-audio-series-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faVideo} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Podcast &amp; Creator TM</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/word-mark-vs-device-mark-trademark-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faStamp} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Word Mark vs Logo</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/single-class-vs-multi-class-trademark-application-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all">
                                                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                                            </div>
                                            <span className="font-black text-xs uppercase tracking-widest">Single vs Multi-Class</span>
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
