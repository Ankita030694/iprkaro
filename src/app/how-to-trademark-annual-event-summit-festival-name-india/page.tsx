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
    faTicket,
    faMusic,
    faUsers,
    faBullhorn,
    faTv,
    faShirt,
    faHandshake
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "How to Trademark an Event, Summit or Festival in India",
    description: validateAndNormalizeDescription(
        "Learn how to trademark annual events, tech summits & music festivals in India. Master Class 35 vs 41, Section 47 periodic use & stop fake spinoffs.",
        "app/how-to-trademark-annual-event-summit-festival-name-india/page.tsx"
    ),
    keywords: [
        "how to trademark annual event summit conference or music festival name in india",
        "trademark annual conference or event name",
        "music festival brand name registration india",
        "class 35 and 41 for event organizers",
        "can you trademark college fest name",
        "protect event name from ticket scalpers and fake spinoffs",
        "periodic use trademark proof section 47 india",
        "multi-edition festival trademark registration",
        "series trademark application for annual events section 15",
        "event sponsorship trademark protection india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/how-to-trademark-annual-event-summit-festival-name-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "How to Trademark an Annual Event, Tech Summit, or Music Festival Name in India",
        description: "Master event trademark registration in India. Protect annual summits, music festivals & conferences across Class 35 & 41, prevent fake spinoffs.",
        url: "https://www.iprkaro.com/how-to-trademark-annual-event-summit-festival-name-india",
        type: "website",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/how-to-trademark-annual-event-summit-festival-name-india.png",
                width: 1200,
                height: 630,
                alt: "How to Trademark an Annual Event, Tech Summit, or Music Festival Name in India",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Trademark an Event, Summit or Festival in India",
        description: "Master event trademark registration in India. Protect annual summits, music festivals & conferences across Class 35 & 41, prevent fake spinoffs.",
        images: ["https://www.iprkaro.com/images/og/how-to-trademark-annual-event-summit-festival-name-india.png"],
    }
};

const faqs = [
    {
        question: "What trademark classes are mandatory for an annual event, tech summit, or music festival in India?",
        answer: "The core classification comprises: Class 41 (Mandatory for organizing live entertainment, music concerts, staging conferences, symposiums, tech hackathons, and cultural fests) and Class 35 (Mandatory for event marketing, advertising, commercial sponsorship management, delegate registration services, and corporate business expo organization). Full brand protection also requires Class 25 (Official festival merchandise like t-shirts, caps, hoodies), Class 38 (Live audio/video streaming, digital broadcast feeds, webinars), and Class 9 (Event mobile apps, downloadable ticket passes, recorded digital keynote assets)."
    },
    {
        question: "How do annual events avoid non-use cancellation under Section 47 if they only occur once a year?",
        answer: "Section 47 of the Trade Marks Act allows cancellation if a mark is not used for a continuous period of 5 years and 1 month. Because annual events operate periodically (once a year or biennially), organizers maintain active, uninterrupted trademark use by preserving year-round promotional activities: ongoing social media community engagement, early-bird ticket pre-sales, artist curation announcements, sponsorship outreach contracts, website domain traffic, and brand licensing agreements executed between festival editions."
    },
    {
        question: "Should I register the event name with the year attached (e.g., 'Bengaluru Tech Summit 2026') or without it?",
        answer: "You should always register the evergreen parent brand name without any year suffix (e.g., 'Bengaluru Tech Summit' or 'Sunburn Festival') as your primary word mark. Adding a specific year makes the mark obsolete after twelve months and dilutes continuous priority. If you wish to protect yearly variants, you can file a 'Series Trademark Application' under Section 15 of the Trade Marks Act, 1999, which permits registering multiple editions sharing a common core identity under a single application."
    },
    {
        question: "How can a registered trademark stop counterfeit ticket booking sites and rogue spinoff events?",
        answer: "A registered trademark empowers event organizers to: (1) Issue immediate statutory cease-and-desist notices under Section 29, (2) Obtain dynamic ex-parte 'John Doe' (Ashok Kumar) injunction orders from High Courts directing telecom and internet service providers (ISPs) to block rogue ticketing websites and phishing portals, (3) Take down unauthorized social media pages and event booking listings under intermediary copyright/trademark rules, and (4) File domain disputes under the INDRP / UDRP framework to recover infringing event domains."
    },
    {
        question: "Who owns the trademark for a college festival: the university, the student council, or the event management agency?",
        answer: "Under Indian law, trademark rights vest in the entity that creates, funds, and exercises ultimate commercial control over the festival—typically the university administration or college trust. However, serious disputes frequently erupt when student conveners or third-party event management agencies attempt to register the fest name in their personal names. Colleges must execute clear IP Assignment Agreements and vendor contracts stipulating that all festival branding, logos, and goodwill remain the exclusive property of the institution."
    },
    {
        question: "Can I license or franchise my music festival or business conclave brand to organizers in other cities?",
        answer: "Yes. Once your event trademark is registered or pending, you can expand across multiple cities (e.g., Comic Con India, NH7 Weekender, or TechSparks) through formal Trademark Licensing Agreements (Leave & License Agreements). The agreement must clearly define geographic territories, brand usage guidelines, revenue sharing or royalty percentages, quality control standards, and clauses prohibiting the licensee from registering confusingly similar sub-brands."
    },
    {
        question: "How do event organizers combat 'ambush marketing' by non-sponsor brands?",
        answer: "Ambush marketing occurs when rival brands associate themselves with your festival or sports tournament without paying sponsorship fees. By registering word marks, logos, taglines, and mascot artwork across Classes 35 and 41, organizers establish exclusive commercial association. This enables them to seek High Court injunctions for passing off, breach of commercial goodwill, and false endorsement against non-sponsors using misleading hashtags, unofficial ticket giveaways, or unauthorized venue proximity activations."
    },
    {
        question: "What evidence should be submitted to prove prior user date for an annual summit under Rule 25?",
        answer: "To establish prior use under Section 34 and Rule 25, organizers should submit: (1) Archive copies of inaugural event brochures, delegate kits, and physical ticket stubs, (2) Dated sponsorship agreements and venue booking invoices from convention centers, (3) Media coverage, newspaper press releases, and televised broadcast logs, (4) Certified chartered accountant statements proving ticket revenues, and (5) Wayback Machine historical website captures proving continuous public domain usage."
    }
];

const tocSections = [
    { id: "overview", title: "Overview & Quick Answer" },
    { id: "periodic-use-section47", title: "Section 47 & The Periodic-Use Challenge" },
    { id: "classification-strategy", title: "Multi-Class Event Architecture" },
    { id: "series-marks-section15", title: "Series Marks & The Year-Suffix Trap" },
    { id: "anti-scalping-spinoffs", title: "Combating Scalpers & Rogue Spinoffs" },
    { id: "college-fests-universities", title: "College Fests & Institutional Ownership" },
    { id: "licensing-franchising", title: "Franchising & Multi-City Licensing" },
    { id: "sponsorship-protection", title: "Ambush Marketing & Title Sponsors" },
    { id: "event-trademark-matrix", title: "Event Trademark Strategy Matrix" },
    { id: "step-by-step-process", title: "Registration & Enforcement Roadmap" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "strategic-takeaway", title: "Strategic Producer Takeaway" },
];

export default function EventFestivalTrademarkRegistrationPage() {
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
        "headline": "How to Trademark an Annual Event, Tech Summit, or Music Festival Name in India",
        "description": "Master event trademark registration in India. Protect annual summits, music festivals & conferences across Class 35 & 41, prevent fake spinoffs.",
        "image": "https://www.iprkaro.com/images/og/how-to-trademark-annual-event-summit-festival-name-india.png",
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
            "@id": "https://www.iprkaro.com/how-to-trademark-annual-event-summit-festival-name-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How to Trademark an Event, Summit or Festival in India",
        "url": "https://www.iprkaro.com/how-to-trademark-annual-event-summit-festival-name-india",
        "description": "Master event trademark registration in India. Protect annual summits, music festivals & conferences across Class 35 & 41, prevent fake spinoffs.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/how-to-trademark-annual-event-summit-festival-name-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/how-to-trademark-annual-event-summit-festival-name-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Event Trademark Guide", "item": "https://www.iprkaro.com/how-to-trademark-annual-event-summit-festival-name-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Comprehensive Event Trademark Registration and Enforcement Framework in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Phonetic & Conceptual Clearance Search Across Classes 41, 35, 25, 38" },
            { "@type": "ListItem", "position": 2, "name": "Crafting Evergreen Parent Brand Architecture without Year Suffixes" },
            { "@type": "ListItem", "position": 3, "name": "Filing Multi-Class Form TM-A with Series Registration under Section 15" },
            { "@type": "ListItem", "position": 4, "name": "Submitting Section 34 Prior Use Evidence (Ticket Stubs, Sponsorship Agreements)" },
            { "@type": "ListItem", "position": 5, "name": "Overcoming Section 9 Descriptiveness & Section 11 Examination Objections" },
            { "@type": "ListItem", "position": 6, "name": "Drafting Multi-City Licensing & Title Sponsorship Protection Clauses" },
            { "@type": "ListItem", "position": 7, "name": "Enforcing Dynamic John Doe Injunctions Against Fake Scalpers and Rogue Spinoffs" }
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
                                <FontAwesomeIcon icon={faMusic} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Experiential Marketing &amp; Event IP Law</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                How to Trademark an Annual Event, <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Tech Summit, or Festival</span>
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">Annual conferences, tech summits, music festivals, and college conclaves represent multi-crore experiential intellectual property. Protecting an event brand requires navigating <strong>Nice Class 41 (Entertainment &amp; Staging)</strong> and <strong>Nice Class 35 (Marketing &amp; Sponsorships)</strong>, avoiding the annual year-suffix trap via <strong>Section 15 Series Marks</strong>, overcoming periodic-use challenges under <strong>Section 47</strong>, and neutralizing counterfeit ticket scalpers with High Court John Doe injunctions.</p>

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
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 30-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 15 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-purple-50 rounded-full px-3 py-1 border border-purple-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-[#6E5E93]">🎪 Live Experience IP</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/contact-us" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Protect Your Event Brand <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Consult Event IP Litigator: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/how-to-trademark-annual-event-summit-festival-name-india.png"
                                    alt="How to Trademark an Annual Event, Tech Summit, or Music Festival Name in India"
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
                        { label: "Event Trademark Guide", href: "/how-to-trademark-annual-event-summit-festival-name-india" }
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
                                            <FontAwesomeIcon icon={faMusic} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview: Protecting Experiential &amp; Event IP in India
                                        </h2>

                                        <div id="quick-answer" className="bg-purple-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Trademarking an annual event, tech summit, or music festival in India requires a multi-class filing strategy centered on Nice Class 41 (staging live concerts, conferences, symposiums, and cultural festivals) and Nice Class 35 (event advertising, delegate sponsorships, and business management). To maintain valid trademark rights for events that occur periodically (once a year), organizers must preserve year-round commercial evidence to avoid non-use cancellation under Section 47. Register evergreen parent brand names rather than specific yearly iterations, or deploy Series Mark applications under Section 15 to safeguard consecutive editions while blocking rogue ticket scalpers and unauthorized spinoff festivals.</p>
                                        </div>

                                        <p className="mb-6">India&apos;s live entertainment, corporate conclave, and festival economy has grown into a multi-billion-dollar juggernaut. Iconic properties such as <em>Sunburn Festival</em>, <em>NH7 Weekender</em>, <em>India Gaming Show</em>, <em>Bengaluru Tech Summit</em>, and renowned college fests like IIT Bombay&apos;s <em>Mood Indigo</em> or BITS Pilani&apos;s <em>Oasis</em> command immense brand equity, corporate sponsorship valuations, and ticket sales.</p>
                                        <p className="mb-6">However, event intellectual property is exceptionally vulnerable. Without registered trademark protection, event producers face rampant copycat festivals, unauthorized local spinoffs, domain cybersquatting, fraudulent ticket sales on fake booking engines, and ambush marketing by non-sponsor competitors.</p>
                                        <p className="mb-6">Understanding the nuances of the <strong>Trade Marks Act, 1999</strong> enables festival founders and conference producers to build an impenetrable IP fortress. Review our foundational legal guides on <Link href="/john-doe-ashok-kumar-order-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">John Doe / Ashok Kumar ex-parte injunctions</Link> and <Link href="/series-trademark-application-in-india-section-15" className="text-[rgb(110,94,147)] hover:underline font-medium">Section 15 series trademark applications</Link>.</p>
                                    </section>

                                    {/* SECTION 2: PERIODIC USE CHALLENGE */}
                                    <section id="periodic-use-section47" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Section 47 &amp; The Periodic-Use Challenge
                                        </h3>
                                        <p className="mb-6">Unlike FMCG goods sold 365 days a year, an annual summit or music festival takes place over just 2 to 4 days annually. This structural reality creates vulnerability under <strong>Section 47 of the Trade Marks Act, 1999</strong> (removal for non-use):</p>

                                        <div className="bg-gray-50 border-l-4 border-purple-600 p-6 rounded-r-2xl mb-8 not-prose">
                                            <blockquote className="text-sm md:text-base italic text-gray-800 leading-relaxed m-0">
                                                &ldquo;A registered trade mark may be taken off the register... If a continuous period of five years and one month has elapsed during which the trade mark was registered and there was no bona fide use thereof in relation to those goods or services...&rdquo;
                                            </blockquote>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. The Danger of Edition Hiatuses</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">If a music festival or tech conclave is paused for two or three consecutive years due to economic slowdowns, venue disputes, or pandemic restrictions, predatory competitors may file a Section 47 rectification petition claiming trademark abandonment.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Establishing Continuous Year-Round Commercial Activity</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Indian courts hold that &lsquo;use&rsquo; is not limited to the physical days of the live show. Active website maintenance, ongoing early-bird ticket marketing, artist booking negotiations, sponsor pitch decks, and social media community updates constitute valid, continuous trademark use in relation to event organizing services.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Documenting the Evidentiary Trail</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Organizers must maintain unbroken digital and paper records: annual domain renewals, Google Analytics visitor traffic, GST invoices for venue advance payments, artist contract deposits, and social media ad spends between annual editions.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 3: CLASSIFICATION STRATEGY */}
                                    <section id="classification-strategy" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingShield} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Multi-Class Event IP Architecture
                                        </h3>
                                        <p className="mb-6">Protecting an event brand requires looking far beyond the live stage. A high-value event brand touches advertising, apparel, broadcast media, and digital ticketing across six critical Nice Classes:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-200 shadow-sm">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-9 h-9 rounded-xl bg-[#6E5E93] text-white flex items-center justify-center font-bold text-sm mr-3">41</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Class 41: Entertainment &amp; Staging (Core)</h4>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Organizing live music concerts, tech conferences, educational workshops, hackathons, DJ tours, stage production, cultural exhibitions, and awards ceremonies.</p>
                                                <span className="text-[10px] font-bold text-[#6E5E93] bg-purple-100/70 px-2.5 py-1 rounded-full uppercase">Mandatory Primary Class</span>
                                            </div>

                                            <div className="bg-indigo-50/60 p-6 rounded-2xl border border-indigo-200 shadow-sm">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mr-3">35</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Class 35: Marketing, Sponsorship &amp; Expo</h4>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Event advertising, securing corporate title sponsorships, organizing business trade fairs, commercial exhibition booths, delegate registration, and PR campaigns.</p>
                                                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100/70 px-2.5 py-1 rounded-full uppercase">Commercial &amp; Sponsorships</span>
                                            </div>

                                            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200 shadow-sm">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm mr-3">25</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Class 25: Official Merchandise &amp; Apparel</h4>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Festival merchandise, branded artist t-shirts, hoodies, caps, wristbands, tote bags, and delegate uniforms sold at venues and online.</p>
                                                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full uppercase">Merchandise &amp; Gear</span>
                                            </div>

                                            <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200 shadow-sm">
                                                <div className="flex items-center mb-3">
                                                    <span className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm mr-3">38</span>
                                                    <h4 className="text-base font-bold text-gray-900 m-0">Class 38: Live Streaming &amp; Broadcasting</h4>
                                                </div>
                                                <p className="text-xs text-gray-600 leading-relaxed mb-3">Live video broadcasting, pay-per-view digital streams, podcast audio feeds, YouTube live relays, and OTT streaming rights of keynote sessions.</p>
                                                <span className="text-[10px] font-bold text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-full uppercase">Digital Broadcast</span>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: SERIES MARKS & YEAR SUFFIX TRAP */}
                                    <section id="series-marks-section15" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Series Marks &amp; The Annual Year-Suffix Trap (Section 15)
                                        </h3>
                                        <p className="mb-6">A pervasive mistake among event organizers is filing an application for a specific yearly edition (e.g., <em>&ldquo;TechSparks 2026&rdquo;</em> or <em>&ldquo;Sunburn Goa 2025&rdquo;</em>):</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-200">
                                                <h4 className="text-base font-bold text-red-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faBan} className="w-4 h-4 mr-2 text-red-600" />
                                                    The Year-Suffix Pitfall
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Registering with a year suffix restricts your statutory monopoly strictly to that calendar year. In subsequent years, the trademark becomes obsolete, requires separate re-filing fees, and creates fragmented user-date priority across multiple registrations.</p>
                                            </div>

                                            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200">
                                                <h4 className="text-base font-bold text-emerald-900 mb-2 flex items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 text-emerald-600" />
                                                    The Evergreen &amp; Series Mark Solution
                                                </h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Always register the evergreen parent name (e.g., <em>TechSparks</em>) as the primary word mark. Under <strong>Section 15</strong>, you can file a <strong>Series Application</strong> covering consecutive edition variants (e.g., <em>TechSparks 2025</em>, <em>TechSparks 2026</em>, <em>TechSparks Delhi</em>) under a single consolidated fee structure.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: ANTI-SCALPING & ROGUE SPINOFFS */}
                                    <section id="anti-scalping-spinoffs" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTicket} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Combating Ticket Scalpers, Rogue Spinoffs &amp; Fake Afterparties
                                        </h3>
                                        <p className="mb-6">When popular music festivals or conferences sell out in minutes, black-market operators and predatory night clubs capitalize on the promoter&apos;s goodwill:</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Phishing &amp; Fake Ticket Booking Portals</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Fraudulent websites clone official festival branding and ticket layouts (e.g., <em>www.coldplayticketsindia.in</em> or <em>www.sunburnpasses.com</em>) to scam concertgoers. With a registered trademark, organizers can initiate fast-track domain seizures under the INDRP (.in registry) and obtain High Court website blocking orders.</p>
                                            </div>

                                            <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Unauthorized &lsquo;Official&rsquo; Afterparties</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Nightclubs and hospitality venues frequently market &ldquo;Official Sunburn Pre-Party&rdquo; or &ldquo;Global Tech Summit Networking Bash&rdquo; without paying licensing fees. This constitutes trademark infringement under Section 29(1) and common-law passing off, entitling promoters to claim monetary damages.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Dynamic John Doe (Ashok Kumar) Orders</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Delhi High Court consistently grants ex-parte John Doe injunctions ahead of major concerts, directing telecom operators, ISPs, WhatsApp, and Telegram to immediately terminate unauthorized ticket scalping channels and pirated broadcast links upon receipt of promoter complaints.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 6: COLLEGE FESTS & INSTITUTIONAL OWNERSHIP */}
                                    <section id="college-fests-universities" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faUsers} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            College Fests &amp; University Conclaves: Ownership Disputes
                                        </h3>
                                        <p className="mb-6">One of the most litigious areas in event IP involves annual college cultural and technical festivals where lakhs of alumni and corporate sponsors are involved:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2">The Student Convener Ownership Dispute</h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Student fest coordinators frequently create unique logos, websites, and social media handles. Upon graduating, disputes arise over who owns the brand assets—the student creators or the college trust. Trademark law dictates that ownership belongs to the funding educational institution, provided formal IP assignment clauses are maintained.</p>
                                            </div>

                                            <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200">
                                                <h4 className="text-base font-bold text-gray-900 mb-2">Mandatory IP Assignment Agreements</h4>
                                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed m-0">Colleges, universities, and student unions must register the festival trademark in the name of the registered Educational Trust or Society (under Class 41). All student committee charters and vendor contracts must contain explicit assignment of copyright in festival logos, themes, and audiovisual recordings.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 7: LICENSING & FRANCHISING */}
                                    <section id="licensing-franchising" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Franchising, Touring &amp; Multi-City Licensing
                                        </h3>
                                        <p className="mb-6">Top-tier event brands achieve national scale by licensing their format across metro cities (e.g., <em>Comic Con Mumbai, Delhi, Bengaluru, Hyderabad</em>):</p>

                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#6E5E93] pl-4 py-2 bg-purple-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">1. Formal Trademark Licensing Agreements (Leave &amp; License)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">A comprehensive event franchise agreement must stipulate territory boundaries, revenue-sharing models on ticket sales, royalty fees on local sponsorship deals, and strict quality control standards for sound, stage engineering, and security.</p>
                                            </div>

                                            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">2. Registering Licensees as Registered Users (Section 49)</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">To ensure that city partners&apos; commercial use directly benefits the parent trademark holder and prevents adverse possession claims, file <strong>Form TM-U</strong> with the Trademark Registry to record local event producers as authorized registered users under Section 49.</p>
                                            </div>

                                            <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/40 rounded-r-xl">
                                                <h4 className="text-base font-bold text-gray-900 mb-1">3. Non-Compete &amp; Post-Termination Covenants</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Incorporate strict clauses prohibiting local event management companies from launching copycat festivals or using confusingly similar themes after the licensing agreement expires.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: SPONSORSHIP & AMBUSH MARKETING */}
                                    <section id="sponsorship-protection" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBullhorn} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Ambush Marketing &amp; Title Sponsorship Protection
                                        </h3>
                                        <p className="mb-6">Corporate sponsors invest crores in title rights (e.g., <em>&ldquo;Title Sponsor Presents The Grand Tech Conclave&rdquo;</em>). Protecting their contractual exclusivity against ambush marketing is essential:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                                <h4 className="text-sm font-bold text-gray-900 mb-2">Class 35 Exclusivity</h4>
                                                <p className="text-xs text-gray-600 m-0">Registration in Class 35 grants statutory rights to block competing brands from running unauthorized advertising campaigns claiming association with your event.</p>
                                            </div>
                                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                                <h4 className="text-sm font-bold text-gray-900 mb-2">Social Media Takedowns</h4>
                                                <p className="text-xs text-gray-600 m-0">Enforce rapid brand takedowns on Meta, LinkedIn, and X against third parties hosting unauthorized ticket giveaways or misleading promotions.</p>
                                            </div>
                                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                                                <h4 className="text-sm font-bold text-gray-900 mb-2">Clean-Venue Protocols</h4>
                                                <p className="text-xs text-gray-600 m-0">Venue agreements must guarantee a 500-meter clean commercial perimeter preventing non-sponsor guerrilla marketing, flyer distribution, or competitor hoardings.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 9: EVENT TRADEMARK MATRIX */}
                                    <section id="event-trademark-matrix" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Event Trademark Classification &amp; Strategy Matrix
                                        </h3>
                                        <p className="mb-6">The table below outlines the ideal trademark class configuration, key legal risks, and strategic remedies across varied live event categories:</p>

                                        <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm not-prose">
                                            <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white">
                                                <thead className="bg-[#6E5E93] text-white uppercase text-[11px] tracking-wider font-semibold">
                                                    <tr>
                                                        <th className="p-3.5 sm:p-4">Event Category</th>
                                                        <th className="p-3.5 sm:p-4">Primary Classes</th>
                                                        <th className="p-3.5 sm:p-4">Primary Legal Risk</th>
                                                        <th className="p-3.5 sm:p-4">Strategic Legal Remedy</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Music &amp; EDM Festivals</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-[#6E5E93]">41, 35, 25, 38</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700">Fake ticket scalping &amp; rogue afterparties</td>
                                                        <td className="p-3.5 sm:p-4">Dynamic John Doe orders &amp; Class 25 merch protection</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Tech Summits &amp; Hackathons</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-indigo-700">41, 35, 9, 38</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700">Competitor spinoff conclaves &amp; domain hijacking</td>
                                                        <td className="p-3.5 sm:p-4">Class 35 expo filing &amp; INDRP domain recovery</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">College Cultural &amp; Tech Fests</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">41, 35, 25</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700">Student convener vs university ownership disputes</td>
                                                        <td className="p-3.5 sm:p-4">Institutional trust registration &amp; IP assignment deeds</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors bg-gray-50/50">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Corporate &amp; Industry Expos</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-purple-800">35, 41, 16</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700">Ambush marketing by non-sponsor rivals</td>
                                                        <td className="p-3.5 sm:p-4">Class 35 trade fair registration &amp; sponsor exclusivity</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Sports Leagues &amp; Tournaments</td>
                                                        <td className="p-3.5 sm:p-4 font-semibold text-teal-800">41, 35, 25, 28, 38</td>
                                                        <td className="p-3.5 sm:p-4 text-red-700">Pirated digital live feeds &amp; fake team jerseys</td>
                                                        <td className="p-3.5 sm:p-4">Broadcasting injunctions &amp; Section 115 police raids</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: STEP-BY-STEP ROADMAP */}
                                    <section id="step-by-step-process" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faStamp} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Step-by-Step Trademark Roadmap for Event Producers
                                        </h3>
                                        <p className="mb-6">Follow this proven 5-stage legal blueprint to safeguard your event brand before announcing your next festival edition:</p>

                                        <div className="space-y-6 not-prose my-8">
                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">1</div>
                                                <div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Clearance Search on IP India &amp; Global Databases</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">Search across Classes 41, 35, and 25 for phonetic, visual, and conceptual conflicts. Ensure the event name does not infringe existing entertainment brands or international touring trademarks.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">2</div>
                                                <div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-1">File Evergreen Word Mark &amp; Distinctive Logo Device</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">File the core brand name without year attachments. Concurrently file the official festival stage logo, emblem, and distinctive typography as a device mark to secure trade dress protection.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">3</div>
                                                <div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Establish Prior Use via Historical Ticket &amp; Sponsorship Records</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">Submit a sworn User Affidavit under Rule 25 accompanied by inaugural ticket booking stubs, convention hall lease agreements, artist contracts, and audited ticket revenue statements.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">4</div>
                                                <div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Overcome Examination Objections &amp; Maintain Series Protection</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">Respond to Section 9 generic/geographical objections (e.g., &ldquo;Bengaluru Summit&rdquo;) by proving secondary meaning. Consolidate annual editions through Section 15 series registrations.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6E5E93] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">5</div>
                                                <div>
                                                    <h4 className="text-base font-bold text-gray-900 mb-1">Pre-Event Litigation Readiness &amp; Dynamic Injunctions</h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">Two weeks prior to ticket launches, file pre-emptive John Doe suits in High Courts to swiftly block fake scalper URLs, unauthorized booking portals, and pirated live stream feeds.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 11: FAQS */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-8 text-center text-[#6E5E93]">
                                            Frequently Asked Questions
                                        </h3>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[#6E5E93] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h4>
                                                    <p className="text-gray-600 pl-10 m-0">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* SECTION 12: STRATEGIC TAKEAWAY */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic Takeaways for Festival Founders &amp; Conclave Producers
                                        </h3>
                                        <p className="mb-6">An event brand is only as valuable as the legal monopoly protecting its name, stage design, and commercial partnerships. Treating trademark registration as an operational afterthought exposes your multi-crore production to predatory ticket scalpers, fake spinoffs, and sponsor abandonment.</p>
                                        <p className="mb-6">Work with veteran IP litigators to secure multi-class registrations across Classes 41, 35, and 25, draft robust franchise agreements, and deploy rapid High Court enforcement. For related trademark defense tactics, explore our guides on <Link href="/john-doe-ashok-kumar-order-trademark-infringement-india" className="text-[#6E5E93] hover:underline font-medium">John Doe ex-parte orders</Link>, <Link href="/series-trademark-application-in-india-section-15" className="text-[#6E5E93] hover:underline font-medium">Series marks under Section 15</Link>, and <Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="text-[#6E5E93] hover:underline font-medium">Section 115 police raid procedures in India</Link>.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Comprehensive Event &amp; Festival IP Protection
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Lock Down Your Event Brand Monopoly
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Protect your annual tech summit, music festival, or conference across Classes 41, 35 &amp; 25. Stop fake ticket booking sites, rogue spinoffs, and ambush marketing across India.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/contact-us"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Consult Event IP Litigator</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Registered Trademark Attorneys • Class 41 &amp; 35 Strategy • Anti-Scalping Protection • High Court Injunctions</p>
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
                                <p className="text-xs text-[#6E5E93] font-semibold mb-2">Trademark Research Specialist</p>
                                <p className="text-xs text-gray-600 leading-relaxed m-0">Rahul specializes in entertainment &amp; event IP, multi-class filings across Classes 41 &amp; 35, Section 15 Series marks, and anti-scalping High Court litigation.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-5 rounded-2xl shadow-xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[70px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-base font-black mb-1.5 relative z-10 leading-tight">Organizing a Major Event?</h4>
                                <p className="text-xs text-white/80 mb-3.5 leading-relaxed relative z-10 font-normal">Don&apos;t let scalpers or rogue spinoffs hijack your summit or festival. Get comprehensive trademark clearance today.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-xs uppercase tracking-wider">
                                        Protect Event Brand
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xs font-black text-gray-400 mb-5 uppercase tracking-[0.25em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/john-doe-ashok-kumar-order-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">John Doe Orders</span></Link></li>
                                    <li><Link href="/series-trademark-application-in-india-section-15" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faStamp} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Series TM (Section 15)</span></Link></li>
                                    <li><Link href="/single-class-vs-multi-class-trademark-application-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Multi-Class Filing</span></Link></li>
                                    <li><Link href="/trademark-licensing-agreement-for-franchise-business-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faHandshake} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Franchise Licensing</span></Link></li>
                                    <li><Link href="/anti-counterfeiting-police-raid-procedure-section-115-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faShieldHalved} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Police Raids (Sec 115)</span></Link></li>
                                    <li><Link href="/domain-name-trademark-dispute-cybersquatting-indrp-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Domain Disputes (INDRP)</span></Link></li>
                                    <li><Link href="/trademark-cancellation-non-use-5-years-section-47-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBan} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Section 47 Non-Use</span></Link></li>
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
